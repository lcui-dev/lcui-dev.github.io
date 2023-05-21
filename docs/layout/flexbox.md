# 弹性盒子布局

弹性盒子（Flexible Box）是一种用于按行或按列布局元素的一维布局方法，使用该布局的组件即为弹性容器（flex container），容器内的直系子组件则是弹性项目（flex item），他们可以膨胀以填充额外的空间，收缩以适应更小的空间，它们在 CSS 属性都为初始的情况下都会有下列行为：

* 项目排列成一行。（容器的 `flex-direction` 属性的初始值是 `row`）
* 项目从主轴的起始线开始。（容器的 `justify-content` 属性的初始值是 `flex-start`）
* 项目不会在主轴维度方向拉伸，但可以缩小。（项目的 `flex-grow` 和 `flex-shirnk` 属性的初始值分别是 `0` 和 `1`）
* 元素被拉升来填充交叉轴大小。（容器的 `align-items` 属性初始值是 `stretch`）

该布局中存在主轴（main axis）和交叉轴（cross axis），主轴由 `flex-direction` 定义，交叉轴垂直于主轴，容器内的项目沿着主轴排列，当主轴排满项目后，如果 `flex-wrap` 值为 `wrap` 则会沿着交叉轴追加新的主轴并在新主轴上继续排列。

:::info
如需了解更多关于弹性盒子布局的概念和用法，可参考 MDN 上的文档：《[flex 布局的基本概念 - CSS（层叠样式表） \| MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)》
:::

`test/test_flex_layout.c` 展示了常见布局的实现方法，效果与下面的在线示例一致，你也可以编译并运行它来体验实际效果。

<iframe height="600"  style={{ width: "100%" }} scrolling="no" title="Flexbox" src="https://codepen.io/lc-soft/embed/XWNObPw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lc-soft/pen/XWNObPw">
  Flexbox</a> by Liu (<a href="https://codepen.io/lc-soft">@lc-soft</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
