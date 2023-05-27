# 正常流布局

正常流布局的规则是将组件从左到右放置，当一行的空间被占满后则会换到下一行继续放置剩下的组件。默认情况下，一个块级组件的宽度是其父组件的100%，其高度与其内容高度一致，而内联块级组件的宽高则与内容一致。

与网页布局的差异：

* **没有 inline 显示方式：**LCUI 的布局引擎在设计之初就没有考虑支持基于文本的布局，因为实现比较复杂，需要耗费较多的时间和精力去开发和维护，而且当时并没有复杂的文本排版需求。
* **没有 float 属性：**和 inline 一样，在布局引擎开发之初就没有将它考虑在内。
* **没有 margin 重叠特性：**如果相邻的组件都设置了 margin，那么它们的距离是两者 margin 之和，而不是取最大的一个。

`test/test_block_layout.c` 展示了常见布局的实现方法，效果与下面的在线示例一致，你也可以编译并运行它来体验实际效果。

<iframe height="600" style={{ width: "100%" }} scrolling="no" title="Block layout" src="https://codepen.io/lc-soft/embed/mdOvyzb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lc-soft/pen/mdOvyzb">
  Block layout</a> by Liu (<a href="https://codepen.io/lc-soft">@lc-soft</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
