
---
title: '💰 提示：重复投票会浪费多次Voting Power'
permlink: voting-power
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-30 08:27:21
categories:
- cn
tags:
- cn
- steemit
- vote
- curation
- money
thumbnail: https://steemitimages.com/DQmbMPTDJwKQYDRqxDn5JXy22cnAAPBf5eA81XdKfokzgrT/Vote_with_check_for_v.svg.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


这两天在steemd上看到一个有趣的事，某鲸80%投了别人的帖子，而后又重新40%投。发生这样的情况，可能是某鲸觉得之前80%投高了，也可能之前是机器人投的而后的40%是某鲸手投的，也可能是相反的情况。但是无论哪种情况，造成的事实是，***某鲸浪费了一次80%的点赞权***，我用我微信公众号工具查了一下，某鲸80%的点赞权能为文章增加约大致125SBD的奖励，在当前SBD行情大热的情况，这可是一笔巨大的损失啊。

![](https://steemitimages.com/DQmbMPTDJwKQYDRqxDn5JXy22cnAAPBf5eA81XdKfokzgrT/Vote_with_check_for_v.svg.png)

你可能会问我，“什么，我重新投票而已，和浪不浪费有什么关系？原本80%投之后改成40%，明明是省下了40%好不好？” 我之前也是这么想的，然而事实却不是如此！

在很早以前，为了搞清楚这个事情，我特意做了一些实验，并得出如下结论：
* ***取消投票不会恢复Voting Power***
* ***差评别人也要消耗Voting Power***

# 测试重复投票Voting Power变化

而***重复投票我的理解等效于取消投票再重新投***，但是作为一个严谨的人，我决定进行一下测试来验证我的观点：

我使用@oflyhigh.test 发表个测试用的帖子：
https://steemd.com/test/@oflyhigh.test/test2

* 投票前我检查的Voting Power
![](https://steemitimages.com/DQmcrNUw5hZNhegaviVf5Ufv8dHn1kQpzjaqjHSLNcBJDcw/image.png)

* 用@oflyhigh.test 以100%权重点赞上述测试贴，之后再次检查Voting Power
![](https://steemitimages.com/DQmSCir4onUdLg1xpJfXkXK1tk58mZwXpqoeoomrsQ6cc66/image.png)

* 用@oflyhigh.test 以20%权重再次点赞上述测试贴，之后再次检查Voting Power
![](https://steemitimages.com/DQmVJcfJsaLHLpNCXudh7nRrqraA44tKR3LXq1mperN44d5/image.png)

从Voting Power的变化可知，***重复投票使用的Voting Power等于每次使用Voting Power的累加***，也就是说重复投票等效于取消投票再重新投。

# 为什么会重复投票


#### 网络或者脚本缘故

在STEEMIT上，我们给一个帖子投票后，投票图标会变成已经投票，这时候我们在网页上是没法重新投票的，尝试重新投票会显示以下提示：
![](https://steemitimages.com/DQmSCuBEc27HN66aZj5CcHpHMKsuoE4qkkvquKLmLJUfAzk/image.png)
也就是说，只有先取消投票，才能重投。

但是，实际上由于网络延迟或者不同第三方网站或者APP实现的差异，可能导致我们已经投票但是投票图标没能及时更新。

当这种情况发生，我们再使用相同权重投票，将会得到诸如：***You have already voted in a similar way***的错误提示。而如若我们使用不同的权重投票，那么投票将会等同于取消之前投票再重新投。

#### 机器人投票

很多朋友使用机器人来跟点某些作者的帖子。

如果机器人+真人都去点同一个帖子，并且使用了不同的权重，就可能发生重复投票的情况。

一般聪明些的机器人会首先判断投票者是否已经投过相应的帖子，但是傻一点的机器人就不好说啦，我看到过有傻傻的机器人每个帖子都投两次😀

如果机器人先投了某个帖子，而你又在机器人投票之前打开了对应页面，那么再用不同权重投票就会出现重复投票的情况。

# 结论

啰嗦了半天，总结点干货就是
* ***取消投票不会恢复Voting Power***
* ***差评别人也要消耗Voting Power***
* ***重复投票浪费多次Voting Power***

为了不浪费宝贵的Voting Power，避免重复投票吧。至于机器人作者，如果你发现你的机器人傻傻的帮你不断消耗VP，那么是时候考虑杀掉它啦。😭

# 参考链接

* [[Chinese Version] 关于Voting Power 的一点说明，以及对投票的影响等](https://steemit.com/cn/@oflyhigh/chinese-version-voting-power)
* [💰 Important tips: Interesting thing you need (MUST) to know about un-vote!!! by @oflyhigh](https://steemit.com/steemit/@oflyhigh/important-tips-interesting-thing-you-need-must-to-know-about-un-vote-by-oflyhigh)
* [💰 重要提示: 关于(un-vote)取消投票你应该/必须知道的事情!](https://steemit.com/cn/@oflyhigh/un-vote)

- - -

This page is synchronized from the post: [💰 提示：重复投票会浪费多次Voting Power](https://steemit.com/@oflyhigh/voting-power)
