
---
title: '开始在主节点Replay v0.21.0-no-mira'
permlink: replay-v0-21-0-no-mira
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-12 01:22:09
categories:
- witness-category
tags:
- witness-category
- witness
- steem
- cn
thumbnail: 'https://cdn.steemitimages.com/DQmNnqJNno5zVMN8qKLN8V9yw4VrHg4fHdC8uvZXqGjNfKe/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子[开始在备机replay v0.21.0-no-mira](https://steemit.com/witness-category/@oflyhigh/replay-v0-21-0-no-mira-2019-08-09)中说过，正式的开始为HF21做准备啦。

![](https://cdn.steemitimages.com/DQmNnqJNno5zVMN8qKLN8V9yw4VrHg4fHdC8uvZXqGjNfKe/image.png)
(图源 ：[pexels.com](https://www.pexels.com/))

在备机上的重播进行的很顺利，Replay完成后，我已经将见证人节点切换到备机上，并且成功在 v0.21.0版本上出块。

在steemd.com上可以看到如下信息：
>![](https://cdn.steemitimages.com/DQmd22AV935dRh6w8YVY6jiBjt1fQSUNFU2BypUv9gvrJso/image.png)

大家都知道，正如上述信息所显示，***运行v0.21.0代表投票支持HF21***。

那之后我又突发奇想，如果运行一次v0.21.0，又不想支持HF21了，再运行之前版本或者0.20.12版本会重置上述`hardfork_version_vote` 以及`hardfork_time_vote`信息吗？

其实上述问题看代码就可以找到答案，然而我比较懒，发现最省力的方法是我实际测试一下，于是我又切回到主节点，等出块后再次观察，发现信息果然重置了：
>![](https://cdn.steemitimages.com/DQmUmi9i8UgBSq5C6YwQB5hyBXJmsbKKh7X5GqWs2cwf1iU/image.png)

哈哈，是不是很无聊？不过HF21我还是要支持的，原因嘛，主要是反对无效嘛，（毕竟我不是top20）。

所以将见证人切换回备份节点后，又开始Replay主节点的数据，***生命在于折腾，我折腾故我在***。

>![](https://cdn.steemitimages.com/DQmRhA33xrQ1PjDYJU767B2vy3uamgovwKgFCADhxYjQHFm/image.png)

>![](https://cdn.steemitimages.com/DQmUhbHpNSDjML2ShiqniJUxSJqQgi5B6fdWs5qKhYUfvCK/image.png)

>![](https://cdn.steemitimages.com/DQmRjucHxLprh5n1TYmcLYTxnXpQETzMvg8c4LhSEzD2HoT/image.png)

看到重播过程中一个又一个HF被应用，感觉是历史重现一般。真心希望STEEM活下去，并且越来越完善，然后以后Replay时看到HF30、HF100等被应用。

估计到那时候，STEEM至少也100美元一枚了吧？

![](https://cdn.steemitimages.com/DQmaGcpGJZfykKQATfrvdThudCVTCcHMDGfozmmYnSKEtnn/image.png)

另外，想知道哪些见证人运行了0.21.0？又有哪些见证人运行的是0.20.12？ 快来https://www.eztk.net/witnesses.php 来看看吧？

# 相关链接

* https://www.eztk.net/witnesses.php
* [开始在备机replay v0.21.0-no-mira](https://steemit.com/witness-category/@oflyhigh/replay-v0-21-0-no-mira-2019-08-09)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['开始在主节点Replay v0.21.0-no-mira'](https://steemit.com/@oflyhigh/replay-v0-21-0-no-mira)
