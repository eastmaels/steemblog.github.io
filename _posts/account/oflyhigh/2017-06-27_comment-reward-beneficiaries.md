
---
title: '随便聊聊收益分享，欢迎讨论 / Comment Reward Beneficiaries'
permlink: comment-reward-beneficiaries
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-27 12:44:54
categories:
- cn
tags:
- cn
- steemit
- steem
- beneficiaries
thumbnail: https://steemitimages.com/DQmP5TW9dK7D8ssNPZ5nwjswK3NCwDfYsvkWeYm8mBpnYE7/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmP5TW9dK7D8ssNPZ5nwjswK3NCwDfYsvkWeYm8mBpnYE7/image.png)

# 收益分享的例子

官方的名称: 评论奖励的受益者
但是我觉得从行为上将叫收益分享比较恰当，以下就这么称呼了，如果不当，请指正。

CN社区的作者大致可以分为两种：
* 非常熟悉收益分享
* 从未听过收益分享

有数据显示很大一部分来自香港的作者使用esteem、 busy、chainbb等客户端或者第三方网站发表文章。而这些工具/网站都设置作者发帖/回复的收益分享功能。换句话说，使用这些工具/网站，作者的帖子/回复，要分给工具/网站一部分，收益分配的比例各方收取不同。以chainbb为例，收取的分成比例为 15%，这个数据可以可以去这些网站的说明中查看，也可以去steemd中查看。

以下是来自一位香港地区用户的一篇回复的comment_options 截图：
![20170627201258.png](https://steemitimages.com/DQmRZG5hS5g9DV6JPXFXwiqe3ezWtd8UVUWeoHkFrX4pzfv/20170627201258.png)

这部分内容，第三方工具/网站会在作者发表文章或回复时自动添加。这样，当文章/回复结算时，响应比例的金额会自动打到指定的收益者账户。

# 收益分享的目的

收益分享功能是在硬叉18(Hard Fork 18)时增加的特色，官方名称叫做"Comment Reward Beneficiaries"，但是无论是文章还是评论都可以设置收益分享功能。

这个功能的目的主要是帮助开发者，让他们创建自己的应用或者网站，吸引用户使用应用或网站发帖，通过设置收益分享或者回报。

@abit 在三个月以前就写了一篇介绍收益分享的功能
详情请访问：[ [Hard Fork 18] How To Use the Author Reward Splitting Feature](https://steemit.com/howto/@abit/hard-fork-18-how-to-use-author-reward-splitting-feature)
其中演示了如何使用cli_wallet 发表设置了收益分享文章

[STEEM WHALES](https://steemwhales.com) 在[这里](https://steemwhales.com/post/) 提供了一个创建文章、设置收益分享并发表文章的功能页面。(但是尽管我不怀疑它的安全性，都要避免在其它网站上提交各种私钥，是否使用，大家自行判断)

python库中，发表文章可以通过设置`comment_options`或者直接传递`beneficiaries`参数就可以发表设置了收益分享的文章了。beneficiaries参数示例如下：

```
     beneficiaries = [
         {'account': 'account1', 'weight': 5000},
         {'account': 'account2', 'weight': 5000}
     ]
```

# 其它方面

![](https://steemitimages.com/DQmQbFJ4BMYBaCdyCsc1nripAbkHcJbXBVHWn9QG32zeyjW/image.png)

收益分享分享的收益部分，以STEEM POWER呈现。
收益分享分享的是扣除点赞者点赞回报以外的(亦即作者所得部分)

欢迎大家探讨如下问题：
1) 你如何看待收益分享功能？
2) 你是否愿意把文章收益分享给他人？

----
感谢阅读
水平有限，欢迎大家一起讨论，如有谬误，烦请指正

欢迎upvote、resteem以及 following me @oflyhigh 😎
请将我设置成为你的见证人投票代理, 访问 https://steemit.com/~witnesses
 ![](https://steemitimages.com/DQmQhMNaw3fXpHsDM6Jx1bNi732DySj8JQefq9jjQENcosJ/image.png)

- - -

This page is synchronized from the post: [随便聊聊收益分享，欢迎讨论 / Comment Reward Beneficiaries](https://steemit.com/@oflyhigh/comment-reward-beneficiaries)
