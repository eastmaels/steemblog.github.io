
---
title: 'current_median_history计算时用到的小学数学'
permlink: currentmedianhistory
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-23 12:25:42
categories:
- cn-stem
tags:
- cn-stem
- steemstemfeed
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmP5qxbhBvzW4JBCcqbYoGGV793xrKQL69M6kCoHTmoNKf/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


前阶段大家都知道SBD脱锚了（所谓的脱锚，就是原本号称锚定1美元的SBD，贬值至低于一美元）。造成这种情况的原因可以参考我之前的一个帖子：[Why is median_history_price no longer the median of feed price? My investigation.](https://steemit.com/witness-category/@oflyhigh/why-is-medianhistoryprice-no-longer-the-median-of-feed-price-my-investigation)。

![](https://cdn.steemitimages.com/DQmP5qxbhBvzW4JBCcqbYoGGV793xrKQL69M6kCoHTmoNKf/image.png)
(图源 ：[pixabay](https://pixabay.com/en/mathematics-formula-physics-school-757566/) by [geralt](https://pixabay.com/en/users/geralt-9301/))

# ***`current_median_history`***的公式

简单的归结一下原因就是：
>***保证任何时刻SBD的供应量不大于总供应量的10%***

所以如果用见证人历史喂价算出的***`current_median_history`***不能保证SBD的供应量小于等于总供应量的10%，则***`current_median_history`***按SBD占比为10%由供应量算出。

好，我们都知道按现在的STEEM价格，SBD的占比已经远远超过了10%，所以上述机制起作用了，那么SBD供应量、STEEM供应量、以及***`current_median_history`***的就有了如下关系：

>![](https://cdn.steemitimages.com/DQmUXXrimxQ1fwmbEPBkVPLH23cTD6vXTmE8KQo9zKXjUGB/image.png)

看起来有点混乱，因为***`current_median_history`***是我们要计算的值，所用我们用x来表示，这样看起来就简单多了。
>![](https://cdn.steemitimages.com/DQmXU8rAzoV2DfbB8G4Mv2Y8Spmdh7pgyhnsUpKYn7kDMFk/image.png)

# ***`current_median_history`***的计算过程

那么如何计算上述公式中的x的值呢？或许可以考虑用程序解方程，姑且不考虑如何实现，显而易见的是那样做会消耗很多资源浪费很多时间。所以这时候我们小学学过的数学知识就可以拿来大显身手了。

第一步，把上述公式变换为：
>![](https://cdn.steemitimages.com/DQmbBF7dvNVapPLoPQv7A8zWs2UCRzbMGV87erxMwWBNJyj/image.png)

再展开
>![](https://cdn.steemitimages.com/DQmbxFdyzd1ij3WvxMjUKBsvc1BcivD5dattFXoTwYnA22K/image.png)

变换一下：
>![](https://cdn.steemitimages.com/DQmPvENUqrLCJLsD9eGzuikBPMurgPkZFhzCucnXmjRcvXk/image.png)

继续处理：
>![](https://cdn.steemitimages.com/DQmfXfNr2vJ1QptMZWMYxYnFJ4VLosKaYcXFBPHSSo4RgLN/image.png)

这时候我们就可以看出来x亦即***`current_median_history`***的值了
>![](https://cdn.steemitimages.com/DQmUum2bPZLhcXtsbARWXkgED4chjBXvZp7rmmMtW2ainX4/image.png)

所以，对于***`current_median_history`***，我们的程序无需进行复杂的计算，直接将SBD供应量、STEEM供应量代入上述公式即可。

# 总结

尽管有了计算机以后，好多计算都可以交给计算机来处理，但是在有些场景，***应用简单的数学知识就可以大幅简化计算流程提升、减少资源占用、提升效率！***。

而实际上，数学就是计算机科学的基石，计算机科学的方方面面都离不开数学，就比如说我现在在STEEM上发帖，涉及到公钥私钥、签名和验证等，就涉及到椭圆曲线的应用。

当然了，凭我小学六年级毕业的文化水平，太复杂的原理或者内容我也讲不出来，能通过这个例子给大家一丁点启发就满足啦。

# 相关链接

* [Why is median_history_price no longer the median of feed price? My investigation.](https://steemit.com/witness-category/@oflyhigh/why-is-medianhistoryprice-no-longer-the-median-of-feed-price-my-investigation)
* https://github.com/steemit/steem/blob/master/libraries/chain/database.cpp#L3258
* [每天进步一点点： 学习比特币的公钥](https://steemit.com/cn/@oflyhigh/61quvw)

- - -

This page is synchronized from the post: [current_median_history计算时用到的小学数学](https://steemit.com/@oflyhigh/currentmedianhistory)
