
---
title: 'STEEM POWER 与点赞收益(Curation Rewards)对照表'
permlink: steem-power-curation-rewards
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-13 13:47:24
categories:
- cn
tags:
- cn
- curation
- rewards
thumbnail: https://steemitimages.com/DQmddx3P1eh2HXtdaSo2ufXt5D9VoMw3BG9Bt8hd11oJxff/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子中研究过点赞金额的问题
* [聊聊点赞金额 ，发钱啦（限中文： 前3名回复送价值2SBD的点赞，前4-10送1SBD点赞）](https://steemit.com/cn/@oflyhigh/3-2sbd-4-10-1sbd)

但是还没真计算对应一定数量的SP大致会有多少点赞收益。
今天恰逢 @htliao 抛出这个话题，于是写程序算了一下大致收益情况。

![](https://steemitimages.com/DQmddx3P1eh2HXtdaSo2ufXt5D9VoMw3BG9Bt8hd11oJxff/image.png)

# 10000 STEEM POWER

假定为以下理想情况：
* 按当前奖励池状况以及STEEM价格计算
* 用户Voting Power 保持100%
* 用户每当Voting Power恢复至100%时点出去权重为100%的upvote
* 不考虑早鸟惩罚，亦不考虑给别的点赞者抬轿问题

以10000 SP 为例：

![](https://steemitimages.com/DQmSqR2iAQw7SR7fjiq8eyaGnz47KgLLWyoWn74S7WyuTcV/image.png)

```
STEEM Power: 10000
Price: 1.226 SBD/STEEM
vesting shares: 20674550.112
rshares: 413491002249.121
Post rewards increased: 2.021 SBD, 1.648 STEEM
Curator rewards per post:  0.505 SBD, 0.412 STEEM
Curator rewards per day:  5.053 SBD, 4.121 STEEM
Curator rewards per month:  151.594 SBD, 123.617 STEEM
```
由此可见，理想状况下，10000个SP的点赞收益每月高达123.617 STEEM，还是非常可观的


# SP and Curation Rewards

为了便于大家对比，我弄了个表格，每行代表持有不同SP数量对应的每帖、每天、每月收益
(***Curation Rewards 数值为STEEM Power***)

SP | CR/Post | CR/Day | CR/Month
----|----|----|----
1000|0.041|0.412|12.366
2000|0.082|0.824|24.731
5000|0.206|2.061|61.828
10000|0.412|4.122|123.657
50000|2.061|20.610|618.287
100000|4.122|41.219|1236.575

大家快来对比一下吧

请注意，
***以上为理想状况
考虑奖励池变化，STEEM价格变化，以及点赞时机，是否有他人点赞等诸多因素，这些数值会有所变动
以上内容仅供参考***

----

感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [STEEM POWER 与点赞收益(Curation Rewards)对照表](https://steemit.com/@oflyhigh/steem-power-curation-rewards)
