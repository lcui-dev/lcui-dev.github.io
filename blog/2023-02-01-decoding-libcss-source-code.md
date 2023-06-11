# LibCSS 的源码解析

LibCSS 是一个 CSS 解析器和选择引擎，由 C 语言编写，是 [NetSurf](http://www.netsurf-browser.org/) 网页浏览器项目的一部分且可供其它基于 MIT 许可协议的软件使用。它的主要特性如下：

- 解析 CSS，无论好的还是坏的
- 简单的 C API
- 低内存占用
- 快速的选择引擎
- 可移植
- 共享库

笔者之所以选择研究 LibCSS 源码，是因为在改造 CSS 库 lcui/css 时遇到了瓶颈。虽然参考 MDN 上的 [CSS 值定义语法文档](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax)设计并实现了 CSS 值定义语法的解析器和匹配器，但在解决取值的问题时一直找不到最优的方案，其难点在于 CSS 属性的值的数量和类型不是固定的，且由于 `background` 这类简写属性的存在，还得考虑如何复用取值逻辑。因此 LibCSS 作为一个 C 语言编写的且已经历过浏览器考验的项目，很适合作为笔者的研究对象。

## 用法示例

LibCSS 的示例程序源码在 `examples/exmaple1.c` 中，它展示了如何用 LibCSS 实现 CSS 样式的加载、选择和读取，我们先从它入手，了解 LibCSS 大致的用法和概念，以便于后续的深入研究。

首先从 `main()` 函数开始，开头部分的代码初始化了 CSS 字符串、样式表的创建参数。

```c
        css_error code;
        css_stylesheet *sheet;
        size_t size;
        const char data[] = "h1 { color: red } "
                "h4 { color: #321; } "
                "h4, h5 { color: #123456; }";
        css_select_ctx *select_ctx;
        uint32_t count;
        unsigned int hh;
        css_stylesheet_params params;
        css_media media = {
                .type = CSS_MEDIA_SCREEN,
        };

        UNUSED(argc);
        UNUSED(argv);

        params.params_version = CSS_STYLESHEET_PARAMS_VERSION_1;
        params.level = CSS_LEVEL_21;
        params.charset = "UTF-8";
        params.url = "foo";
        params.title = "foo";
        params.allow_quirks = false;
        params.inline_style = false;
        params.resolve = resolve_url;
        params.resolve_pw = NULL;
        params.import = NULL;
        params.import_pw = NULL;
        params.color = NULL;
        params.color_pw = NULL;
        params.font = NULL;
        params.font_pw = NULL;

```

然后，创建样式表，解析 CSS 字符串并追加进样式表中。

```c
        /* create a stylesheet */
        code = css_stylesheet_create(&params, &sheet);
        if (code != CSS_OK)
                die("css_stylesheet_create", code);
        code = css_stylesheet_size(sheet, &size);
        if (code != CSS_OK)
                die("css_stylesheet_size", code);
        printf("created stylesheet, size %zu\n", size);

        /* parse some CSS source */
        code = css_stylesheet_append_data(sheet, (const uint8_t *) data,
                        sizeof data);
        if (code != CSS_OK && code != CSS_NEEDDATA)
                die("css_stylesheet_append_data", code);
        code = css_stylesheet_data_done(sheet);
        if (code != CSS_OK)
                die("css_stylesheet_data_done", code);
        code = css_stylesheet_size(sheet, &size);
        if (code != CSS_OK)
                die("css_stylesheet_size", code);
        printf("appended data, size now %zu\n", size);
```

从中我们可以看出在 LibCSS 的设计中样式解析和存储是围绕样式表进行的，`css_stylesheet_append_data()` 函数能够解析 CSS 代码字符串并将结果存储到样式表中。

接着是创建选择上下文，将上面新建的样式表追加进选择上下文中。

```c
        /* prepare a selection context containing the stylesheet */
        code = css_select_ctx_create(&select_ctx);
        if (code != CSS_OK)
                die("css_select_ctx_create", code);
        code = css_select_ctx_append_sheet(select_ctx, sheet, CSS_ORIGIN_AUTHOR,
                        NULL);
        if (code != CSS_OK)
                die("css_select_ctx_append_sheet", code);
        code = css_select_ctx_count_sheets(select_ctx, &count);
        if (code != CSS_OK)
                die("css_select_ctx_count_sheets", code);
        printf("created selection context with %i sheets\n", count);
```

最后，选择样式，输出选择结果：

```c
        /* select style for each of h1 to h6 */
        for (hh = 1; hh != 7; hh++) {
                css_select_results *style;
                char element[20];
                lwc_string *element_name;
                uint8_t color_type;
                css_color color_shade;

                /* in this very simple example our "document tree" is just one
                 * node and is in fact a libwapcaplet string containing the
                 * element name */
                snprintf(element, sizeof element, "h%i", hh);
                lwc_intern_string(element, strlen(element), &element_name);

                code = css_select_style(select_ctx, element_name,
                                &media, NULL,
                                &select_handler, 0,
                                &style);
                if (code != CSS_OK)
                        die("css_select_style", code);

                lwc_string_unref(element_name);

                color_type = css_computed_color(
                                style->styles[CSS_PSEUDO_ELEMENT_NONE],
                                &color_shade);
                if (color_type == CSS_COLOR_INHERIT)
                        printf("color of h%i is 'inherit'\n", hh);
                else
                        printf("color of h%i is %x\n", hh, color_shade);

                code = css_select_results_destroy(style);
                if (code != CSS_OK)
                        die("css_computed_style_destroy", code);
        }

```

`css_select_style()` 用于根据给定的选择上下文和结点来选择匹配的样式。它接受 7 个参数，其中的 node 参数指定了用于选择样式的结点，handler 参数提供 node 的各种属性的获取方法。由此可见其它 UI 库若要使用 LibCSS 实现对 CSS 的支持的话是比较容易的，只需要准备好控件句柄/指针和控件的各种操作函数合集即可。

`css_computed_color()` 用于从已计算样式中获取 color 属性的值，传入已计算样式和接受值的指针，返回值是颜色类型。从这个函数的调用代码中我们可以比较容易地推测出其它属性也有对应的以 `css_computed_` 开头命名的函数来获取值，且用法基本一样。另外，它的第一个参数 `style->styles` 是个数组且指定了 `CSS_PSEUDO_ELEMENT_NONE` 下标，这表明样式选择结果中不只有元素本身的样式，还包括其它伪元素的样式。

## 解析

通过研究上述的示例代码，我们已经知道 `css_stylesheet_append_data()` 能解析 CSS 字符串，以它为起点进行查找，可以找到包括数据结构、函数、变量在内的相关依赖项：

- `css_parser`
- `css_lexer`
- `css_language`
- `css_parser_event`
- `css_parser_event_handler`
- `css__parser_parse_chunk()`
- `parser_state`
- `parseFuncs`
- `css__language_create()`
- `language_handle_event()`
- `parseProperty`
- `property_handlers`

以这些依赖项为线索继续深入研究代码，我们会发现整个解析功能涉及到语言解析器、解析器前端、解析器、解析器事件、词法分析器这些概念，源码涉及 parse.c、lex.c、langguage.c、properties.c 等文件，接下来本文将逐个讲解它们。

### 词法分析器

词法分析器（Lexer）的职责是将字符串转换成一个个词法单元（Token），它基于有限状态自动机进行解析，大致的解析过程是根据字符内容更新状态，然后调用与状态对应的方法去解析后续字符。

词法单元的数据结构如下：

```c
typedef struct css_token {
        css_token_type type;

        struct {
                uint8_t *data;
                size_t len;
        } data;

        lwc_string *idata;

        uint32_t col;
        uint32_t line;
} css_token;
```

它包含类型、数据、行列，`data.data` 和 `data.len` 成员记录了字符串的起始位置和长度，由此可见词法单元本质上就是对字符串中的一段字符串的标记。

至于状态自动机，它的实现代码可以概括为：

```c
css_error 获取词法单元(css_lexer *词法分析器, css_token **词法单元)
{
        switch (词法分析器->状态) {
        case 初始状态：
                return 初始状态的动作(词法分析器, 词法单元);
        case 状态1:
                return 状态1的动作(词法分析器, 词法单元);
        case 状态2:
        ...
        }
}
```

整个解析过程基于状态驱动，每种状态都有对应的动作，动作执行完后状态会被改为另一个状态，如此往复直到字符串全部解析完为止。这种运转机制，就是有限状态自动机。

### 解析器

解析器（Parser）的职责是解析词法单元序列表达的语义。与词法分析器相同之处是它也基于有限状态自动机，其大致的解析过程是调用词法分析器获取下个词法单元，然后根据词法单元内容更新状态，之后调用对应的子解析器。而不同之处是它的解析结果是通过事件处理函数传递的，事件枚举在 src/parse/parse.h 文件中有定义：

```c
typedef enum css_parser_event {
        CSS_PARSER_START_STYLESHEET,
        CSS_PARSER_END_STYLESHEET,
        CSS_PARSER_START_RULESET,
        CSS_PARSER_END_RULESET,
        CSS_PARSER_START_ATRULE,
        CSS_PARSER_END_ATRULE,
        CSS_PARSER_START_BLOCK,
        CSS_PARSER_END_BLOCK,
        CSS_PARSER_BLOCK_CONTENT,
        CSS_PARSER_END_BLOCK_CONTENT,
        CSS_PARSER_DECLARATION
} css_parser_event;
```

从中我们可以看出事件涉及样式表、规则集、`@` 规则、块、块内容、声明，在它们开始和结束解析的时候会触发事件。

### 语言解析器

语言解析器作为解析器的前端，负责对接属性解析器和解析器，将解析结果输出到样式表。

src/parse/language.c 文件中 `css__language_create()` 函数包含了语言解析器的创建过程，其中有一段是将 `language_handle_event` 函数设为解析器的事件处理器：

```c
        params.event_handler.handler = language_handle_event;
        params.event_handler.pw = c;
        error = css__parser_setopt(parser, CSS_PARSER_EVENT_HANDLER, &params);
        if (error != CSS_OK) {
                parserutils_stack_destroy(c->context);
                free(c);
                return error;
        }
```

`language_handle_event` 函数的作用就是根据解析器的事件来对后续词法单元做进一步处理，其中包括解析选择器、解析 `@` 规则、调用属性解析器等。

### 属性解析器

属性解析器的职责是在解析器解析样式声明时将每条属性转换成一个个连续的字节码存入样式表中。

LibCSS 的属性解析器源码是由生成器自动生成的，Makefile 中有具体的生成方法：

```makefile
# Sources

AUTOGEN_PARSERS := $(shell $(PERL) -pe'$$_="" unless /^([^\#][^:]+):/;$$_=$$1 . " "' $(DIR)properties.gen)

# Dodgy use of define/eval to bypass DIR changing
define build_gen_parser

$(BUILDDIR)/gen_parser: $(DIR)css_property_parser_gen.c
        $$(VQ)$$(ECHO) $$(ECHOFLAGS) " PREPARE: $$@"
        $$(Q)$$(BUILD_CC) -o $$@ $$^

endef

$(eval $(build_gen_parser))

define gen_prop_parser

$(DIR)autogenerated_$1.c: $(DIR)properties.gen $(BUILDDIR)/gen_parser
        $$(VQ)$$(ECHO) $$(ECHOFLAGS) "GENERATE: $$@"
        $$(Q)$$(BUILDDIR)/gen_parser -o $$@ '$(shell $(GREP) "^$1:" $(DIR)properties.gen)'

AUTOGEN_SOURCES := $$(AUTOGEN_SOURCES) autogenerated_$1.c

endef

AUTOGEN_SOURCES :=

$(eval $(foreach PROP,$(AUTOGEN_PARSERS),$(call gen_prop_parser,$(PROP))))
```

属性解析器源文件命名格式为 `autogenerated_${属性名}.c`， 都依赖生成器 `gen_parser`，make 时会调用生成器为 `properties.gen` 文件中定义的每个属性生成解析器源文件。

`properties.gen` 文件头部有给出属性定义格式示例：

```text
##Common templates
#
#property:CSS_PROP_ENUM IDENT:( INHERIT: IDENT:)
#property:CSS_PROP_ENUM IDENT:INHERIT NUMBER:( false: RANGE: NUMBER:)
#property:CSS_PROP_ENUM IDENT:INHERIT LENGTH_UNIT:( UNIT_HZ:PITCH_FREQUENCY ALLOW: DISALLOW: RANGE:<0 LENGTH_UNIT:)
#property:CSS_PROP_ENUM IDENT:( INHERIT: IDENT:) LENGTH_UNIT:( UNIT_HZ:PITCH_FREQUENCY ALLOW: DISALLOW: RANGE:<0 LENGTH_UNIT:)
#property:CSS_PROP_ENUM WRAP:
```

在这种设计中，自定义属性的添加方式应该是先在 `properties.gen` 添加属性定义，然后运行 make 命令生成解析器源文件，之后重新编译 LibCSS。

### 简写属性解析器

> 简写属性是可以让你同时设置好几个 CSS 属性值的 CSS 属性。使用简写属性，Web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。
>
> **_摘自 [CSS 的简写属性 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)_**

以简写属性 background 为例，它的解析器源文件是 parse/properties/background.c，其中的 `css__parse_background()` 函数包含了属性的解析过程。

函数开头处定义了几个变量，用于存储非简写属性的值和解析状态（是否需解析）。

```c
        bool attachment = true;
        bool color = true;
        bool image = true;
        bool position = true;
        bool repeat = true;
        css_style * attachment_style;
        css_style * color_style;
        css_style * image_style;
        css_style * position_style;
        css_style * repeat_style;
```

首先是处理继承，如果属性值是 `inherit` 则为每个属性追加带 `inherit` 标记的字节码。

```c
        /* Firstly, handle inherit */
        token = parserutils_vector_peek(vector, *ctx);
        if (token == NULL)
                return CSS_INVALID;

        if (is_css_inherit(c, token)) {
                error = css_stylesheet_style_inherit(result, CSS_PROP_BACKGROUND_ATTACHMENT);
                if (error != CSS_OK)
                        return error;
                ...
        }
```

给每个属性分配内存资源。

```c
        /* allocate styles */
        error = css__stylesheet_style_create(c->sheet, &attachment_style);
        if (error != CSS_OK)
                return error;
        ...
```

遍历每个词法单元，尝试用每个非简写属性的解析函数解析它，若解析成功则标记该属性为不需要再解析。

```c
        /* Attempt to parse the various longhand properties */
        do {
                prev_ctx = *ctx;
                error = CSS_OK;

                if (is_css_inherit(c, token)) {
                        error = CSS_INVALID;
                        goto css__parse_background_cleanup;
                }

                /* Try each property parser in turn, but only if we
                 * haven't already got a value for this property.
                 */
                if ((attachment) &&
                        (error = css__parse_background_attachment(c, vector, ctx,
                                                attachment_style)) == CSS_OK) {
                        attachment = false;
                } else if ((color) && ...
        } while (*ctx != prev_ctx && token != NULL);

        if (attachment) {
                error = css__stylesheet_style_appendOPV(attachment_style,
                                CSS_PROP_BACKGROUND_ATTACHMENT, 0,
                                BACKGROUND_ATTACHMENT_SCROLL);
                if (error != CSS_OK)
                        goto css__parse_background_cleanup;
        }
        ...
```

解析完后，给未获得值的属性追加初始值：

```c
        if (attachment) {
                error = css__stylesheet_style_appendOPV(attachment_style,
                                CSS_PROP_BACKGROUND_ATTACHMENT, 0,
                                BACKGROUND_ATTACHMENT_SCROLL);
                if (error != CSS_OK)
                        goto css__parse_background_cleanup;
        }

        if (color) {
                ...
```

之后，将每个非简写属性值合并进结果中。

```c
        error = css__stylesheet_merge_style(result, attachment_style);
        if (error != CSS_OK)
                goto css__parse_background_cleanup;
        ...
```

最后，销毁相关数据。

```c
        css__stylesheet_style_destroy(attachment_style);
        ...
        return error;
```

以上就是 background 属性的解析过程，从中我们可以看出简写属性自身并不占用样式存储空间，它会在解析阶段被分解成若干个非简写属性进行解析和存储，分解的过程就是遍历每个值然后逐个检测是否与哪个非简写属性匹配。

另外，笔者在查阅 backgrond 属性的解析代码时有尝试找过 box-shadow 属性的代码但并未找到，不知是因为 box-shadow 解析实现成本太高还是因为 NetSurf 浏览器并未为实现阴影渲染功能。

## 计算

`css_select_style()` 函数实现了样式选择和计算功能，它所解决的问题可分为六类：指示、选择、层叠、内联、初始值、绝对值。值得注意的是，该函数的注释中有提到它生成的已计算样式还不能立即使用，需要调用 `css_computed_style_compose()` 获取完整的已计算样式，这种两步式样式计算方法旨在允许客户端存储部分已计算样式，并在布局变动时高效地更新节点的完整已计算样式。

### 指示

指示（Hinting）用于让元素对样式做自定义的控制。`css_select_style()` 函数在初始化选择状态后会调用 `node_presentational_hint` 回调函数获取元素的展现指示，这些指示的作用相当于元素内部自定义了部分属性的初始值，典型的例子就是 canvas 元素，它给 width 和 height 属性指示的值分别是 300 和 150。

### 选择

选择（Selection）是 CSS 引擎的核心功能，其作用是从样式表中查找与元素匹配的规则集。由于选择引擎并不在本文的研究范围内，本文不会继续对它做进一步的讲解，如需了解更多，请自行查阅 LibCSS 代码库中的 src/select/select.c 文件。

### 层叠

层叠（Cascade）的作用是为了从匹配到的规则集中选取权重最高的规则。`css_select_style()` 在查找到匹配的规则后会调用 `cascade_style()` 函数层叠样式，其实现代码如下：

```c
css_error cascade_style(const css_style *style, css_select_state *state)
{
        css_style s = *style;

        while (s.used > 0) {
                opcode_t op;
                css_error error;
                css_code_t opv = *s.bytecode;

                advance_bytecode(&s, sizeof(opv));

                op = getOpcode(opv);

                error = prop_dispatch[op].cascade(opv, &s, state);
                if (error != CSS_OK)
                        return error;
        }

        return CSS_OK;
}
```

从这段简短的代码中我们可以看出，层叠的过程就是遍历字节码然后调用属性调度表中注册的 cascade 函数。以 width 属性为例，它的层叠操作由 select/properties/width.c 中的 `css__cascade_width()` 函数实现，该函数内部调用了 `css__cascade_length_auto()` 函数：

```c

css_error css__cascade_length_auto(uint32_t opv, css_style *style,
                css_select_state *state,
                css_error (*fun)(css_computed_style *, uint8_t, css_fixed,
                                css_unit))
{
        uint16_t value = CSS_BOTTOM_INHERIT;
        css_fixed length = 0;
        uint32_t unit = UNIT_PX;

        if (isInherit(opv) == false) {
                switch (getValue(opv)) {
                case BOTTOM_SET:
                        value = CSS_BOTTOM_SET;
                        length = *((css_fixed *) style->bytecode);
                        advance_bytecode(style, sizeof(length));
                        unit = *((uint32_t *) style->bytecode);
                        advance_bytecode(style, sizeof(unit));
                        break;
                case BOTTOM_AUTO:
                        value = CSS_BOTTOM_AUTO;
                        break;
                }
        }

        unit = css__to_css_unit(unit);

        if (css__outranks_existing(getOpcode(opv), isImportant(opv), state,
                        isInherit(opv))) {
                return fun(state->computed, value, length, unit);
        }

        return CSS_OK;
}
```

当属性值未指定为继承时，对字节码中表达的值进行转换，若当前属性值的权重在已有属性值之上则调用 `fun` 指向的回调函数来设置值，这个 `fun` 指针在 `css__cascade_width()` 中被赋值为 `set_width`：

```c
static inline css_error set_width(css_computed_style *style, uint8_t type,
                css_fixed length, css_unit unit)
{
        uint32_t *bits;

        bits = &style->i.bits[WIDTH_INDEX];

        /* 7bits: uuuuutt : unit | type */
        *bits = (*bits & ~WIDTH_MASK) | ((((uint32_t)type & 0x3) | (unit << 2))
                        << WIDTH_SHIFT);

        style->i.width = length;

        return CSS_OK;
}
```

### 内联

内联样式（Inline style）的优先级高于选择的样式，它层叠在选择的样式之上，`css_select_style()` 对它的处理同样是调用 `cascade_style()` 函数。

### 初始值

当样式层叠完后，未设置值的属性会被设置初始值。

### 绝对值

绝对值是可以直接使用的值，除此之外还有相对值。CSS 的部分属性支持使用相对单位的值，例如：`font-size: smaller`、`color: currentColor`、`line-height: 1.6`、`padding-left: 1em`，这些值并不能直接使用，需要在它们依赖的值都是绝对值时才能确定，因此样式计算过程中会有一个将相对值转换为绝对值的计算过程。

除了 `css_select_style()` 会在元素为根元素时为其计算绝对值外，我们也可以手动调用 `css_computed_style_compose()` 函数来完成这一计算。

## 已计算样式

src/select/computed.c 文件的内容可划分为属性访问器、计算函数、内部函数这三个部分。

### 属性访问器

属性访问器是一系列名称以 `css_computed_` 开头的函数，用于从已计算样式结构体中获取特定属性的值。它们的返回值类型都为 `uint8_t`，表示属性值的类型，传入的参数用于接收值，例如：

```c
uint8_t css_computed_width(const css_computed_style *style,
                css_fixed *length, css_unit *unit)
{
        return get_width(style, length, unit);
}
```

对于 left 这种在特定情况下依赖 position 和 right 属性才能计算的属性，它的访问器代码是这样的：

```c
uint8_t css_computed_left(const css_computed_style *style,
                css_fixed *length, css_unit *unit)
{
        uint8_t position = css_computed_position(style);
        uint8_t left = get_left(style, length, unit);

        /* Fix up, based on computed position */
        if (position == CSS_POSITION_STATIC) {
                /* Static -> auto */
                left = CSS_LEFT_AUTO;
        } else if (position == CSS_POSITION_RELATIVE) {
                /* Relative -> follow $9.4.3 */
                uint8_t right = get_right_bits(style);

                if (left == CSS_LEFT_AUTO && (right & 0x3) == CSS_RIGHT_AUTO) {
                        /* Both auto => 0px */
                        *length = 0;
                        *unit = CSS_UNIT_PX;
                } else if (left == CSS_LEFT_AUTO) {
                        /* Left is auto => -right */
                        *length = -style->i.right;
                        *unit = (css_unit) (right >> 2);
                } else {
                        /** \todo Consider containing block's direction
                         * if overconstrained */
                }

                left = CSS_LEFT_SET;
        }

        return left;
}
```

### 计算函数

计算函数是一系名称以 `compute_` 开头的函数，它们主要被`css__compute_absolute_values()` 函数调用，其中大部分用于计算某类属性的绝对值。

## 存储

LibCSS 的低内存占用主要体现在样式存储上，CSS 字符串中的样式属性声明经过解析后会转换成内存空间利用率高的字节码，而已计算样式虽然因包含所有属性而占用较大内存，但也做了一些优化，它的头部集中存储了所有属性值的类型数据。

### 字节码的存储格式

字节码是 `unit32_t` 类型，表达了 CSS 属性的代码、值、是否重要、是否继承，bytecode.h 中的 `buildOPV()` 函数定义代码展示了它们是如何组成字节码的：

```c
static inline css_code_t buildOPV(opcode_t opcode, uint8_t flags, uint16_t value)
{
        return (opcode & 0x3ff) | (flags << 10) | ((value & 0x3fff) << 18);
}
```

从中我们可以看出字节码在内存中的布局：

```text
| opcode    | flags      | value      |
| 1 ~ 11bit | 12 ~ 13bit | 14 ~ 32bit |
```

对于有多种类型值的属性，它们的 value 字段会被用来表达数据类型，而实际值则存储在追加的数据段中，每个值占用一个字节码的空间，格式如下：

```text
| CSS_PROP_XXXX | flags | XXXXX_SET | 实际值1 | 实际值2 | ... |
| 32bits                            | 32bits | 32bits  |     |
```

以 width 属性为例，`width: 10px` 的字节码格式是：

```text
| CSS_PROP_WIDTH | flags | BOTTOM_SET | FIXED (10) | UNIT (px) |
| 32bits                              | 32bits     | 32bits    |
```

而 `width: auto` 的字节码格式是：

```text
| CSS_PROP_WIDTH | flags | BOTTOM_AUTO |
| 32bits                               |
```

test/dump.h 文件展示了如何理解字节码并将其输出为 CSS 代码字符串，我们可以通过查阅它来了解更多的字节码操作方法。

### 已计算样式的存储格式

已计算样式的数据结构定义如下：

```c
struct css_computed_style {
        struct css_computed_style_i i;

        css_computed_content_item *content;
        css_computed_counter *counter_increment;
        css_computed_counter *counter_reset;
        lwc_string **cursor;
        lwc_string **font_family;
        lwc_string **quotes;

        struct css_computed_style *next;
        uint32_t count;
        uint32_t bin;
};
```

除去外面的 `cursor` 和 `font_family` 等属性外，其它属性值都存储在 `css_computed_style_i` 结构体中，而其中的 `uint32_t bits[15]` 成员用于存储这些值的类型信息，以比特位为最小粒度来为值类型分配存储空间，具体分配细节在它的注释中有说明：

```c
/*
 * Bit allocations:
 * 
 * 0  ccccccccoooooooobbbbbbbbrrrrrrrr
 * column_rule_width; outline_width; border_left_width; border_bottom_width
 * 
 * 1  vvvvvvvvvbbbbbbbboooooooolllllll
 * vertical_align; border_top_width; border_right_width; letter_spacing
 * 
 * 2  ccccccccccccccccccccccccccpppppp
 * clip; padding_top
 * 
 * 3  mmmmmmmaaaaaaarrrrrrrttttttddddd
 * max_width; margin_bottom; margin_left; text_indent; display
 */
```

部分属性的值类型只占一个比特位，例如 opacity 和 windows 属性：

```c
/*
 * 14 llcbqopwfrue....................
 * list_style_position; counter_increment; background_image; quotes; order;
 * opacity; widows; flex_grow; orphans; counter_reset; flex_shrink
 */
```

properties.h 文件中定义了每个属性的值类型枚举，它们的取值范围都很小，因此很容易做到仅占用几个比特位空间。

由于这种占用若干个比特位的数据不便于直接读写，LibCSS 分别在 src/select/autogenerated_propget.h 和 src/select/autogenerated_propset.h 中为每个属性定义了读写辅助函数，它们的实现代码大同小异，都是先确定属性在 bits 中的位置然后通过位运算来读取和写入数据。

## 总结

通过上述的分析，笔者得到的 lcui/css 与 LibCSS 的差异如下：

<table>
        <thead>
                <tr>
                        <th width="200">差异点</th>
                        <th>LibCSS </th>
                        <th>lcui/css</th>
                </tr>
        </thead>
        <tbody>
                <tr>
                        <td>
                        解析功能设计
                        </td>
                        <td>
                        由词法解析器、语法解析器、属性解析器和语言解析器组成
                        </td>
                        <td>
                        由语言解析器、CSS 属性表、CSS 值定义表组成
                        </td>
                </tr>
                <tr>
                        <td>
                        属性声明的解析过程
                        </td>
                        <td>
                        语法解析器触发事件通知语言解析器调用对应的属性解析器进行解析
                        </td>
                        <td>
                        解析器从属性表中获取属性的值定义，然后从字符串中提取与值定义相匹配的值
                        </td>
                </tr>
                <tr>
                        <td>
                        添加自定义属性解析器
                        </td>
                        <td>
                        需要修改和重新编译 LibCSS 的源代码
                        </td>
                        <td>
                        在运行时调用相关函数添加自定义属性
                        </td>
                </tr>
                <tr>
                        <td>
                        样式表
                        </td>
                        <td>
                        样式数据都存在样式表中，提供相关操作函数
                        </td>
                        <td>
                        不存在样式表的概念，加载的样式数据都存储在全局数据表中
                        </td>
                </tr>
                <tr>
                        <td>
                                样式查询范围
                        </td>
                        <td>
                         一个或多个样式表
                        </td>
                        <td>
                        全局
                        </td>
                </tr>
                <tr>
                        <td>
                        样式选择函数的用法
                        </td>
                        <td>
                        传入结点 (node) 及其操作方法集 (handler)
                        </td>
                        <td>
                        传入选择器 (selector)，该参数是组件父子关系链的精简版，每个结点包含组件的 id、type、class 等属性
                        </td>
                </tr>
                <tr>
                        <td>
                        样式选择能力
                        </td>
                        <td>
                        较为全面
                        </td>
                        <td>
                        只支持 id、type、class、:first-child、:last-child，这类简单的选择符
                        </td>
                </tr>
                <tr>
                        <td>
                        样式选择优化
                        </td>
                        <td>
                        为节点提供 bloom 过滤器，根据节点的祖先元素名、类名和 id 名生成，可用于获取和缓存已查询的样式
                        </td>
                        <td>
                        虽然库内部没有做优化，但在 lcui/ui 库中有实现与 LibCSS 的 bloom 过滤器相似的优化
                        </td>
                </tr>
                <tr>
                        <td>
                        样式计算
                        </td>
                        <td>
                        采用两步式样式计算方法，第一步计算继承值、初始值和层叠样式，第二步计算绝对值，这种方法旨在允许客户端存储部分已计算样式，并在布局变动时高效地更新节点的完整已计算样式
                        </td>
                        <td>
                        无
                        </td>
                </tr>
                <tr>
                        <td>
                        属性访问方法
                        </td>
                        <td>
                        调用属性访问函数获取属性值
                        </td>
                        <td>
                        直接访问结构体成员，无相关辅助函数
                        </td>
                </tr>
                <tr>
                        <td>
                        属性值存储方式
                        </td>
                        <td>
                        用若干个比特位记录值的类型和单位，若有其它值则会在另一块空间中存储值，这样能做到让部分属性的值只占用若干个比特位，内存利用率较高
                        </td>
                        <td>
                        属性的类型、值和单位都是独立的结构体成员，每个属性的值至少占用 24 字节，内存利用率低
                        </td>
                </tr>
        </tbody>
</table>

LibCSS 在解析器的设计上明显优于 lcui/css，造成这一差距的原因在于笔者并未学习过编译原理并掌握相关设计模式，正因为如此，lcui/css 所采用的设计模式在经历过数次改进和重写才只达到现在这种程度，虽然看上去变得更成熟稳定了，但与 LibCSS 的设计模式相比只是个低配版。

现在看来，与其浪费大量时间基于最初的自认为很简单的实现方案持续改进，还不如花少量时间学习并应用现有且成熟的设计模式。不过这也体现了理论知识储备的重要性，它能让你快速找到合适的解决方案，不用为了重复解决别人早已解决过的问题而浪费过多时间去研究、实践和改进。

当然，不只是 CSS 解析器这块功能存在问题，由于笔者在开发 CSS 库之前并未系统地学习过 CSS 相关术语和概念，CSS 库的内部接口设计和命名都存在一些问题。

### 瓶颈问题的解决方法

如何提取值？笔者在研究 LibCSS 之前想到的解决方案是：先定义一个数组，包含值类型与目标值的指针，然后遍历这个数组找出类型匹配的值并将之写入到目标值的指针指向的空间内。伪代码如下：

```ts
interface CSSValueResolveRule {
        type: CSSValueType;
        key: string;
}

function resolveCSSValue(input: CSSValue[], rules: CSSValueResolveRule[], output: Record<string, CSSValue>) {
        const resolvedValues = new Array(input.length).fill(false);
        ruless.forEach((rule) => {
                input.some((value, i) => {
                        if (!resolvedValues[i] && matchCSSValueType(value, rule.type)) {
                                output[rule.key] = value;
                                resolvedValues[i] = true;
                                return true;
                        }
                        return false;
                });
        });
        return resolvedValues.every(Boolean);
}
```

然而一个属性可以有多个值且值可以有多种类型，这种方案并不适用。

如果考虑多值多类型的情况，那就还要解决匹配度的问题，例如简写属性 margin 的四种写法：`margin: 4px`、`margin: 4px 8px`、`margin: 4px 8px 4px`、`margin: 4px 8px 4px 8px`，同样是 length 类型的值，不同数量有不同的效果。这些值的数量校验在值匹配器中已经做过了，那么，是否可以改进值匹配器使之支持自定义值的提取方式？如果不改进，那在值提取器和属性层叠函数里做重复的值校验有什么意义？一想到这里，笔者发现要解决的问题越来越复杂，而解决这些问题所带来的收益与投入的成本并不匹配，于是决定放弃思考，改为研究 LibCSS 的做法。

经过上述对 LibCSS 的研究，鉴于值提取方式的优化成本过高，笔者决定改用常规的方式来提取值，即便各个简写属性的值提取实现代码是相似的。

### 改进计划

LibCSS 在解析器、选择引擎和数据结构等方面的设计为 lcui/css 未来的改进提供了可靠的参考，目前可做的改进有：

- 改用字节码组代替链表来存储 CSS 规则
- 引入样式表、选择上下文、已计算样式等概念
- 将样式计算函数改成与 `css_select_style()` 相似的用法
- 将 lcui/ui 库中的样式选择优化整合进 lcui/css 库中
- 将 lcui/ui 库中的样式计算逻辑整合进 lcui/css 库中
- 优化已计算值的存储方式，减少内存占用
- 增加绝对值计算流程
- 增加属性访问器

### LibCSS 缺失的属性

在笔者研究属性解析器的过程中有注意到一些属性没有解析器，甚至连包含相关关键字的代码都没有，例如：

- background-size
- border-radius
- box-shadow

或许是因为 NetSurf 浏览器还不支持绘制自定义尺寸的背景图、圆角边框和阴影吧。
