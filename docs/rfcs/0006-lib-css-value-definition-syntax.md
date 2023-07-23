# CSS 值定义语法

- 开始日期：2023-04-09
- 目标主要版本：3.x
- 参考问题：无
- 实现 PR：[#287](https://github.com/lc-soft/LCUI/pull/287)

## 概括

添加新的 CSS 属性注册函数，支持使用 CSS 值定义语法来定义 CSS 属性的有效值。

## 基本示例

注册自定义属性：

```c
css_register_property(
    "custom-prop",
    "normal | none", "normal",
    css_cascade_custom_prop
);
```

内置的 width 属性的注册方式：

```c
css_register_property_with_key(
    css_key_width,
    "width",
    "auto | <length> | <percentage>", "auto",
    css_cascade_width
)；
```

内置的 background 简写属性的定义方式：

```c
// 先为一些复杂值定义注册别名
css_register_valdef_alias("image", "<url>");
css_register_valdef_alias("bg-image", "none | <image>");
css_register_valdef_alias(
    "bg-position",
    "["
    "  [ left | center | right | top | bottom | <length-percentage> ] |"
    "  [ left | center | right | <length-percentage> ]"
    "    [ top | center | bottom | <length-percentage> ] |"
    "  [ center | [ left | right ] <length-percentage>? ] &&"
    "    [ center | [ top | bottom ] <length-percentage>? ]"
    "]");
css_register_valdef_alias(
    "bg-size",
    "[ <length> | <percentage> | auto ]{1,2} | cover | contain");
css_register_valdef_alias("repeat-style",
                "repeat-x | repeat-x | repeat | no-repeat");
// 注册简写属性
css_register_shorthand_property(css_key_background, "background",
            "<bg-image> || <bg-position> || <bg-size> || <repeat-style> || "
            "<color>");
```

## 动机

2.x 版本的 CSS 库添加自定义属性并不方便，主要问题如下：

- **值解析函数不可复用：** 值解析函数 `SplitValues()` 是内部函数，应用层代码添加的自定义属性解析函数无法复用它，这意味着要么在 CSS 库内添加自定义属性，要么在应用层重新实现一遍值解析。
- **解析函数参数比较复杂：** 属性解析函数第一个参数是解析器上下文，虽然它包含了各种数据，但大多数情况下函数内部只是通过它往样式声明中写入属性值，这增加了函数复杂度和参数理解成本。
- **各个 CSS 属性的有效值集不明确：** 为了节约开发成本，CSS库在设计之初仅支持部分属性和值。然而，现有文档并未详细说明每个属性的有效值集，因此需要逐个测试才能确定可用的属性和值。

## 详细设计

参考[CSS属性值定义语法
](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax)，设计 CSS 值定义解析器和匹配器。

### 数据结构

先挑几个典型的 CSS 值定义例子：

- color: `<color>`
- font-size: `<absolute-size> | <relative-size> | <length-percentage>`
- position: `static | relative | absolute | sticky | fixed`
- border: `<line-width> || <line-style> || <color>`
- box-shadow: `none | <shadow>`
- width: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

像 position 这种由多个关键字组成的定义，最简单的方式是解析成数组然后遍历数组逐个判断，但对于 box-shadow 这种有自定义数据类型的就不好做了，box-shadow 值的完整定义是这样的：

```text
none | <shadow>#
where
<shadow> = inset? && <length>{2,4} && <color>?
```

如果把 box-shadow 值的匹配过程看成一颗树，每个可选值按存在与否分出一个分支，那么这颗树就是这样的：

```text
- none
- <shadow>
  - inset?
    - inset && <length>{2,4} && <color>?
        - inset && <length>{2,4} && <color>
        - inset && <length>{2,4}
    - <length>{2,4} && <color>?
        - <length>{2,4} && <color>
        - <length>{2,4}
```

由此可见，CSS 值的类型定义数据适合存储在树形结构中，值的匹配过程就是树的遍历过程。

为了完整表达值定义，节点应包含关键字（`inset`）、数据类型（`<length>`）、组合符号（`&&` `||`）、数量符号（`{2,4}`），那么节点的数据结构可以设计成这样：

```c
struct css_valdef_t {
        css_valdef_sign_t sign;
        unsigned min_count;
        unsigned max_count;
        const css_valdef_t *source;
        union {
                css_keyword_value_t ident;
                /** list_t<css_valdef_t> */
                list_t children;
                const css_value_type_record_t *type;
        };
};
```

- sign 标识使用哪个组合符号。
- `min_count`、`max_count` 记录了数量符号 `{2,4}` 中的数量范围。
- source 记录源类型，用于实现类型别名。
- ident 标识关键字的编号，当 sign 值为 `NONE` 时生效，针对值为 `normal` 这种关键字的情况。
- children 用于记录子节点，当 sign 值为组合符号时生效，针对值为 `none || auto` 这种包含一组值的情况。
- type 指针指向类型记录，当 sigin 值为 CSS_VALDEF_SIGN_ANGLE_BRACKET 时生效，针对值为 `<data-type>` 的情况。

### 解析器

基于有限状态自动机实现解析器，状态由以下枚举表达：

```c
typedef enum css_valdef_parser_target_t {
        CSS_VALDEF_PARSER_TARGET_NONE,
        CSS_VALDEF_PARSER_TARGET_ERROR,
        CSS_VALDEF_PARSER_TARGET_KEYWORD,
        CSS_VALDEF_PARSER_TARGET_DATA_TYPE,
        CSS_VALDEF_PARSER_TARGET_CURLY_BRACES,
        CSS_VALDEF_PARSER_TARGET_BRACKETS,
        CSS_VALDEF_PARSER_TARGET_QUESTION_MARK,
        CSS_VALDEF_PARSER_TARGET_SIGN
} css_valdef_parser_target_t;
```

状态流转的实现比较简单，主要的复杂度和难点都集中在值的处理上。

解析器初始创建一个根结点，类型为 Juxtaposition。

对于相同组合符号的结点，解析后将它们存放在同一个数组中，例如：

```text
left | center | right
```

解析结果是：

```js
SingleBarCombinator(["left", "center", "right"])
```

当解析到其它组合器符号时或是解析结束时，会涉及到父节点和子节点的修改。例如：

- 当解析到 `left && right |` 末尾的 `|` 时，需要将当前值 `right` 追加到 `&&` 组合符号的数组值中，然后将父值的符号改为 `|`，使数据结构变为 `[left && right] |`。
- 当解析到 `left | right &&` 末尾的 `&&` 时，需要追加新的 `&&` 符号的数组值，然后将当前值 `right` 追加到该数组中，使数据结构变为 `left | [right && ]`。

在添加支持方括号之前，解析的都是 `none | auto` `<length> || <line-style> || <line-width>` 这种线性且类型单一的定义，对解析结果的操作类似于对数组操作，但有了方括号后，数据结构变成了树形，需要操作父子结点，这似乎变得复杂了一点，为此我们不得不重新思考现有的设计是否符合解析方括号的需求。

方括号包住的是值定义，因此可以采用递归的方式对方括号内的值定义进行解析，不过与常规的以 `\0` 为终止符的解析方式不同，方括号的终止符是 `]`，为此我们需要让解析器支持自定义终止符。

由此我们可以得出方括号的解析流程是在遇到 `[` 时创建子解析器，设置其结束符为 `]`，在子解析器解析完后将它的结果合并进当前的结果中。

### 匹配器

匹配器的工作流程是先从字符串中读入值，然后将之与值定义进行匹配。

**读取值：**

字符串中的每个值都由空白符分隔，在判定分隔点时需要考虑到被单引号或双引号的字符串，例如：`"Microsoft YaHei"`，处理引号的方式很简单：对其进行计数，当遇到空白符时，如果计数为 0 则判定为分隔点，否则继续读取下个字符。

虽然预先分割所有值是个简单且便于后续操作的做法，但它需要更多的读写操作、内存分配和释放操作，所以出于性能上的考虑，我们应该在匹配新的值定义之前读取一个值。

需要特别注意的是，必须在开始解析下个值之前进行切换而不是每次解析完后切换，否则多余的切换会导致整个解析结果错误。

```diff
+ if (i > 0) {
+     css_value_matcher_resolve_next_value(matcher);
+ }
  if (css_value_matcher_match(matcher, node->data) != 0) {
      return -1;
  }
- css_value_matcher_resolve_next_value(matcher);
+ i++;
```

**存储匹配的值：**

将已匹配的值存为数组，然后给匹配函数增加一个用于记录下标的参数。

**匹配复杂的定义：**

首先看 background-position 的值定义：

```text
[
  [ left | center | right | top | bottom | <length-percentage> ]
  | [ left | center | right | <length-percentage> ]
    [ top | center | bottom | <length-percentage> ]
  | [ center | [ left | right ] <length-percentage>? ]
    && [ center | [ top | bottom ] <length-percentage>? ]
]
```

将它拆分开来的话会比较好理解：

```text
[ left | center | right | top | bottom | <length-percentage> ]
```

```text
[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]
```

```text
[ center | [ left | right ] <length-percentage>? ] && [ center | [ top | bottom ] <length-percentage>? ]
```

假设我们现在要匹配 `top center`，期望匹配器将该值与第二个值定义匹配，但按照现有的设计，匹配器会判定 `top center` 与第一个值定义匹配，因为它在匹配完 top 后没有判断值与值定义的数量是否相同。如何追加这个判断？根匹配器由于独占整个字符串，可以根据是否还有剩余未匹配的值来判断是否完全匹配，但子匹配器是负责匹配字符串内的部分值，并不适合采用这种方式来判断。

这个问题的本质在于单杆匹配器匹配的是第一个值定义而不是匹配度最高的值定义，那么解决方法就是给它增加匹配度判断，选择匹配度最高的结果返回，最后由根匹配器根据是否还有剩余未匹配的值来判断是否完全匹配，这样就能解决上述复杂值定义的匹配问题。

**匹配问号：**

问号修饰的是可选值定义，当该值定义与当前值不匹配时可切换到下个值定义继续匹配。按照现在的值读取规则，匹配器在匹配完可选值定义后会读取下个值，这并不符合预期，那么该如何调整规则？

通过增加可选值的相关条件判断来调整值读取流程的话，会让它变得更复杂，而且找出相关条件也比较困难，所以这种方法并不可行。

我们可以给匹配器增加 next 指针来记录下个值的起始位置，每次寻找下个值时以 next 指针为起点开始找，找到下个值后再将 next 指针指向该值的末尾。这样在可选值未匹配时，我们就能通过将 next 指针指向当前值开头来让匹配器继续使用当前值与下个值定义进行匹配。

## 缺点

值定义匹配器的存在似乎有点鸡肋，因为属性解析器内部也会对值做一次校验。

## 备选方案

沿用 2.x 版本的 CSS 解析器设计，新增支持设置 CSS 属性初始值。

## 采用策略

这是一个破坏性改动，需要用新的属性注册接口注册所有 CSS 属性。
