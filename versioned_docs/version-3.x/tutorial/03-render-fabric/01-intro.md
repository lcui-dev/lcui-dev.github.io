# 开始

本教程将以一个 JavaScript 实现的布料模拟程序为参考对象，讲解如何将它的 JavaScript 代码转译为 C 代码，并使用 LCUI 实现相同的交互和渲染效果。注意，本文只关注如何转译，不涉及布料模拟算法。

为方便书写，本教程使用“JS 源码”指代布料模拟程序的 JavaScript 源码。

首先，让我们在下方体验该程序的操作方式和渲染效果，同时简要浏览 JS 源码。

<iframe height="600" style={{ width: "100%" }} scrolling="no" title="Delicate Fabric" src="https://codepen.io/matthewmain/embed/oyyadr?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/matthewmain/pen/oyyadr">
  Delicate Fabric</a> by Matthew Main (<a href="https://codepen.io/matthewmain">@matthewmain</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

不难看出，它的工作原理是计算每一帧布料的状态，并将其绘制到画布上。同时，它还能够响应用户的鼠标操作，并改变布料的局部状态。
