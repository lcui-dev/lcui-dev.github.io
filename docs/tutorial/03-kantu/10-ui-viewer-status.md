# 反馈加载状态

加载图像时有两种情况需要处理，一种是图像加载耗时较长，在这期间如果什么都没反馈的话，容易让用户误以为程序卡死或有 BUG。另一种是图像加载失败或格式不受支持，也应该告知用户。简而言之，程序应该将加载中和加载失败状态反馈在界面上，这样会让用户体验更好。

import Tip from '@site/src/components/TutorialKantuUnlockTip.mdx'

<Tip/>
