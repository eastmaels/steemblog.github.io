
---
title: 'How comment''s reward is distributed? 评论奖励的分配'
permlink: how-comment-s-reward-is-distributed
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-01 02:34:15
categories:
- steem
tags:
- steem
- steemit
- cn
- teammalaysia
- busy
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1517451701/bsbgibqvejfnasajfwph.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517451701/bsbgibqvejfnasajfwph.png)

I was wondering how actually is comment's reward is counted in the system, so I did a little investigation base on my recent payout by comments.

## Commenting is authoring or curating?

First of all, you can find the comments payout under **Author reward**. This makes perfect sense to me as when we are typing a comment, we are essentially expressing our thoughts just like authoring a new post. For an informative and insightful comment, sometimes it could be longer than a post. So it is perfectly fine to take comment under Author reward.

## Calculation of the reward.

![](https://steemitimages.com/DQmc4UJJAnKLRtXKy5tq8vCPEKcvPv7PTtAF5PJcx8PDFCC/image.png)

![](https://steemitimages.com/DQmZp4KS6ZjNrSVjxQPgU5AotkSoebSM5YPSmnHHvR7ruKB/image.png)

The example above, I was receiving 0.240 SBD and 0.040 SP for a comment. From that, it is clearly not 100% SP payout we can conclude that **comment's reward is following the 50/50 payout distribution**.

#### How much does commenter take from the comment's reward?

As we know the SP is finalized by the market price of Steem after 7 days, we could ignore the SP and just focus on SBD. In STEEM algorithm, SBD is forever pegged to 1 USD despite how fluctuating the price actually is in the outer market(which is much higher than 1 USD now).

Since SBD is 50% in the reward payout, commenter take-home pay percentage is `SBD in reward x 2 / Total comment reward`. Apply the numbers into the formula, we have `0.240 * 2 / 0.64= 0.75`.
In this example, I as the **commenter took the 75% author reward** just like how the post reward works.

#### Let's try on the other cases

![](https://steemitimages.com/DQmTsxFKMbJD7tPtmmtgYx83xRoLpoL6i78EgpxjNeBV1M3/image.png)

![](https://steemitimages.com/DQmVPmR4KX6eHiKBXiWBA1E2fTQkmywTARVXaKBWN2xXwxG/image.png)

With this comment, I got a total payout of $1.03 and the reward distribution is 0.516 SBD and 0.086 SP.
With the formula, we got `0.516 * 2 / 1.03 = 1.00`. In this case, I as the **commenter took 100% of the author reward**.

You might notice that my reward come from self-voting rather than voted by the others, and this may be the cause of different reward percentage. Let's continue to have a look at another self-voted comment.

![](https://steemitimages.com/DQmUHftX4YvvJsxoUM51XoCkBADZF8WxsDFdDN7DUcc9JCg/image.png)

![](https://steemitimages.com/DQmdJPG5M725a5esabYho9WmT1aeGPdfwaiimorEWMKvQEA/image.png)

Actual reward is $1.12, I got 0.421 SBD and 0.074 SP out of the reward.
`0.421 * 2 / 1.12= 0.75`. **I got 75% out of the total reward** instead of 100% although this one was self-voted like the previous example.

## Conclusion

- **Comment's reward is considered as Author reward.**
- **Comment's reward is not distributed in 100% SP.**
- **Commenter gets 75% ~100% out of the total comment's reward.**
- **Reward source (self-voted or voted by others) doesn't matter in reward distribution.**

Please enlighten me if I was doing any mistakes here.

---

出于好奇评论的奖励是如何分配和定制的，在自己的评论奖励中我简单的做了些调查，得出的结论如下：

- 评论奖励算是作者奖励。
- 评论奖励是使用 50/50 的分配方式。
- 评论者得到 75%～100% 的评论奖励。
- 评论奖励的来源（别人投还是自己投）对奖励的分配不造成影响。

如有错误请不吝赐教。

---

![](https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png)

- - -

This page is synchronized from the post: ['How comment''s reward is distributed? 评论奖励的分配'](https://steemit.com/@fr3eze/how-comment-s-reward-is-distributed)
