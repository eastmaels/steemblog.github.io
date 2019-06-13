
---
title: 'Voting Weight for SP less than 500 - SP小于500也可以通过程序来设置点赞百分比'
permlink: voting-weight-for-sp-less-than-500-sp-500
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-30 20:18:45
categories:
- cn
tags:
- cn
- cn-programming
- steemit
- steemstem
- python
thumbnail: https://steemitimages.com/0x0/https://i.imgsafe.org/15396d0b16.jpeg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/0x0/https://i.imgsafe.org/15396d0b16.jpeg)
*Image Credit: [Steemit Post](https://steemit.com/steemit/@will-zewe/what-does-everyone-keep-their-voting-power-at-on-average)*

It is said that, if you have less than 500 SP, you won't see this voting weight bar when you upvote.
江湖传言，SP小于500，你在点赞的时候是看不到这个条的：

![](https://steemitimages.com/DQmXB555QmpixMmpkwynKhVMhFe9X6TYLgiRvLfaLe3iES3/image.png)

It means that each vote is 100%, which you could verify on steemd.
如果看不到条，你的点赞是100%的，在 steemd 上查询是这样的：

![](https://steemitimages.com/DQmXxt4WR39h4a6PthLFnLYVKe9vYeQ5RuCiEdrGiFjx8AM/image.png)

I write a [Python script](https://helloacm.com/coding-exercise-pascal-triangle-ii-c-and-python-solution/) to verify this:
但是我通过程序来验证了一下：

```
def vote(id, key, url, score = 100.0):
  wif = {
      "posting": key
  }
  try:
    steem = Steem(keys=wif)    
    return(steem.vote(url, score, id))
  except:
    pass
```

For example, `vote('some_id_less_than_500sp', key, 'some_url', 30)` is successful even for minnows with less than 500 SP 
比如 `vote('some_id_less_than_500sp', key, 'some_url', 30)` 是成功的：

![](https://steemitimages.com/DQmQLMTcJuZTXpBqPoe6tdYCXSLjzHhhUMNHV5bdVM89Wdf/image.png)

Apart from this, I learn that:
除此之外还意外了解到：

If a post or comment has been voted,  when you upvote it again:
- If the voting weight is the same as last time, nothing will happen i.e. nor the blockchain will not accept your vote, neither it will consume your voting power.
- However, if the voting weight for that post or comment is different, the blockchain will accept this vote, update the voting weight and you will consume the voting power.

如果已经点赞了，下次再同样点赞的时候分两种情况:
- 如果点赞百分比和已经点赞的百分比是一样的，那么系统不会接受你的这次投票，不会消耗你的 Voting Power
- 如果点赞百分比和上次点赞的不一样， 那么系统会授受你的这次投票，并且更新你的投票比重和消耗你的 Voting Power

You could also enforce a duplicate-upvote-check locally, marking a vote has been done in local file system or [database](https://helloacm.com/how-to-generate-100k-test-data-to-mysql-database/).

我有点[强迫](https://justyy.com/archives/1079)，我怕重复投票，即使在比重一样的情况下也怕重复的投票，所以我本地先判断有没有已经投过，这个可以通过本地数据库记录，不过可以更简单的使用一下文件就可以：

```
def vote(id, key, url, score = 100.0):
  wif = {
      "posting": key
  }
  fn = id + '_' + md5(url) + '_' + str(score) 
  ok = not os.path.isfile(fn)
  if not ok:
    print("voted already: " + fn)  
    return  
  touch(fn)
  try:
    steem = Steem(keys=wif)    
    print("voted: " + fn)
    return(steem.vote(url, score, id))
  except:
    pass
```

This actually is 50% of the voting robots such as @randowhale and @minnowbooster where the 50% rest is to listen the transactions of the wallet, make votes and record them in the database (or filesystem).

这样其实已经完成了 @randowhale 或者 @minnowbooster 点赞机器人的50%工作, 剩下50%就是 监听钱包到帐,然后根据钱的数量 投个票, 记录在数据库(或者文件中).

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt Steem Power小于500也可以通过程序来设置点赞百分比](https://justyy.com/archives/5208)
- [How to Set Voting Weight (using Python Script) for Minnows with Less than 500 Steem Power on Steemit?](https://helloacm.com/how-to-set-voting-weight-using-python-script-for-minnows-with-less-than-500-steem-power-on-steemit/)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-08-30)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [碧桂园海外(英国)招博士让我思考了人生规划, 碧桂园适不适合你?](https://steemit.com/cn/@justyy/3dyled)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2), [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi) and [Part 4](https://steemit.com/cn/@justyy/ned-sp-steemit-part-4)
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [LOGO 海龟作画 系列一 之给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [LOGO 海龟作画 系列三 递归画一个国际象棋棋盘](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-08-30) 
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [Logo Turtle Graphics - Series 3 - Recursively drawing a chess board](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #steemstem #steemit #python

- - -

This page is synchronized from the post: [Voting Weight for SP less than 500 - SP小于500也可以通过程序来设置点赞百分比](https://steemit.com/@justyy/voting-weight-for-sp-less-than-500-sp-500)
