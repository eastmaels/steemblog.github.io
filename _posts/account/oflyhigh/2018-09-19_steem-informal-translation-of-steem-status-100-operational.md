
---
title: '非正式翻译：STEEM彻底康复啦/ Informal translation of "Steem Status: 100% Operational "'
permlink: steem-informal-translation-of-steem-status-100-operational
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-19 01:50:06
categories:
- cn
tags:
- cn
- steem
- steemit
- hardfork
- steemdev
thumbnail: https://cdn.steemitimages.com/DQmT8UgiVQZudEP7T3abPE7Z2tp7ZbcKtQsKKvouswYdZLT/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is an informal Chinese translation of the article  [Steem Status: 100% Operational by @steemitblog](https://steemit.com/steem/@steemitblog/steem-status-100-operational) 

![](https://cdn.steemitimages.com/DQmT8UgiVQZudEP7T3abPE7Z2tp7ZbcKtQsKKvouswYdZLT/image.png)
(图源 ：[@steemitblog](https://steemit.com/steem/@steemitblog/steem-status-100-operational))

从北京时间9月17日晚间8:00左右起，STEEM出现异常，最终导致停止出块，公司的开发团队以及见证人们马上行动起来，排查原因、修复故障，历经约12个小时的努力后，STEEM一切恢复正常。

约9小时前，STEEMIT官方账户 @steemitblog 发布了新文章：[Steem Status: 100% Operational by @steemitblog](https://steemit.com/steem/@steemitblog/steem-status-100-operational) 。我简单的翻译了一下，旨在为中文区朋友提供更多的参考信息，如有谬误，烦请指正。

以下为翻译内容：

----
Steemians大家好：

我们对昨天STEEM区块链发生了服务中断故障深表歉意，现在故障已经解决。感谢STEEM区块链内置的安全措施，所有账户里的资金一直都是安全的。导致中断的原因是在过渡到HF20时出现了一个问题。在我们[上一篇文章](https://steemit.com/hardfork/@steemitblog/hardfork-announcement-for-witnesses-exchanges-and-users)中，我们宣布发布了Hardfork 20版本，并且见证人和交易所应尽早运行steemd的0.20.0版本。当见证人运行新代码时，它表明他们正在投票支持这些更改。如果在9月25日，绝大多数见证人都在运行Hardfork 20版本，那么STEEM将会分叉到一条新链上去（HF20，译者注）。

# 停止出块

直到硬分叉日期之前，所有版本都在相同的链上生产区块。这给了见证人测试代码的时间，并通过运行新版本投下他们对新变化支持的投票。昨天，当0.20.0节点生产出不符合0.19.x版本节点共识的区块时，STEEM区块链异常分叉。这激活了STEEM区块链内置的诸多安全措施之一， 当发生了不可预见的错误，暂停区块生产。这些安全措施确保包括代币余额在内的重要信息不存在风险。

# 故障原因

导致这个问题的具体原因是HF20代码中的一个BUG，一个本不该修改的常量被修改了，这导致了最初的分叉。见证人们在快速发现可疑行为方面做了出色的工作，并开始恢复STEEM区块链到稳定版本，这暴露了存在于分叉数据库处理逻辑中的另外一处BUG，这极少发生的逻辑被触发导致了这个BUG发生，进而导致了minority fork也停止工作（译者注：为什么是minority fork？感觉应该majority呢？)

我们的区块链开发者极其努力地快速识别问题并发布补丁，使得见证人们可以恢复区块生产。他们评估分叉19(version 0.19.X of steemd)不存在问题，建议见证人们回退到这个版本并重启STEEMD。19 of(译者注：19个还是HF19?)见证人通过重新启动他们的节点，恢复网络的稳定性。STEEMIT公司的节点也正常运行，STEEMIT.COM正常访问。

# 后续步骤

我们对这次事件进行了事后调查，并起草了一份计划，用于开发相应的工具和资源以确保此类事件不会再次发生。但在我们着手研究这些之前，我们将在今天的剩余时间里研究fork数据库代码，以确保它为9月25日的硬叉日期做好准备。

# 创新代价

我们启动STEEM区块链之初的目标是创建一个协议，可以在这个协议上power(发布/开发)真正的人每天都在使用的应用。这个目标，连同我们选择的治理机制，使我们作为一个社区，能够理解需要进行什么更改，并通过硬分叉升级软件来采取行动，截至目前，我们在短短2年内成功地完成了19次硬分叉。

这种快速的迭代速度是Steem独有的价值属性之一，在区块链领域几乎是闻所未闻，并仍处于高度实验性的开发阶段。这种快速创新的代价包括发生像昨天一样的事件，很多人无法使用他们喜欢的应用程序，这一事实也证明了Steem在促进开发真正的人每天使用的功能应用程序方面是多么成功。昨天同样证明，我们的社区有能力共同处理这些问题，使我们能够继续以更快的步伐推动区块链技术发展。


# 致谢

感谢由STEEM见证人、开发者以及用户组成的令人赞叹的STEEM社区。对区块链而言，停止出块事件几乎是最坏的事情了，但是大家同心协力确保服务尽可能快地恢复。这样的事件能被如此有效地处理，是社区力量的明证！STEEMIT公司外的很多人，尤其是见证人们，分享了重要的信息，使得我们能够更快地作出反应，并使平台恢复正常运行。

>You don’t lose if you get knocked down; you lose if you stay down. 
>--- Muhammad Ali

STEEMIT 团队

----------------------

# 译者补充：

本文旨在传达信息，翻译质量啥的大家就别做过多要求啦，水平有限。

为了便于大家阅读和理解，我尽量口语化。英文好的，建议去看原文，以免被我误导。翻译的如有谬误，还请大家多多指正。

正如文中所说，STEEM这次事件，尽管给我们这些用户带来一些不便，但是却也证实了社区(见证人、开发者、用户)的力量所在，快速响应、及时解决问题，保证了STEEM区块链的高可用性。另外，STEEM不断完善、快速迭代，也使得STEEM区块链始终在前端领跑，我们当更有信心。

就这样了，感谢阅读
欢迎upvote、resteem以及 following me @oflyhigh 😎

# 相关链接

*  [Steem Status: 100% Operational by @steemitblog](https://steemit.com/steem/@steemitblog/steem-status-100-operational)

- - -

This page is synchronized from the post: [非正式翻译：STEEM彻底康复啦/ Informal translation of "Steem Status: 100% Operational "](https://steemit.com/@oflyhigh/steem-informal-translation-of-steem-status-100-operational)
