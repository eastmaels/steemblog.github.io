
---
title: 'A Good-Content-Upvote-Bot -  CN 区优质内容点赞机器人上线了！'
permlink: a-good-content-upvote-bot-cn
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-06 18:53:21
categories:
- cn
tags:
- cn
- cn-programming
- steemit
- steemdev
- bot
thumbnail: https://steemitimages.com/DQmfVjrUxnjfwa4ckDiaAuUQD24zuJim7jutdff4QUcPi1J/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmfVjrUxnjfwa4ckDiaAuUQD24zuJim7jutdff4QUcPi1J/image.png)

I have created a [steemit](https://helloacm.com/how-to-set-voting-weight-using-python-script-for-minnows-with-less-than-500-steem-power-on-steemit/) upvote bot that aims to [vote](https://helloacm.com/a-better-steemit-voting-strategy-with-back-tracking-algorithm/) for quality contents. It is based on the assumption that the authors on the daily [top 30 ranking table](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06) are more likely to produce the good contents.

This [daily rank table](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06) provides the ranking sorted from the potential payout for authors in the last 7 days. Depending on the ranking, different upvoting weight is used e.g. 80% for top 10 authors and 65% for 11 to 15th.

The bot runs on the server every 10 minutes and it will take a break (do nothing) if @justyy 's voting power is less than 30.  The bot supports a blacklist so I will constantly observe and update. 

If you want to be considered, you need to be in the wechat group: https://helloacm.com/tools/steemit/wechat-ranking/   and write really good contents with main tag CN. Even if you are top of the table, you can still fall out if you do not write constantly good contents.

The [python](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/) core code (for your reference) is given following:

@shenchensucc 在这篇帖子 YY 了一个 [最低保障系统](https://steemit.com/cn/@shenchensucc/yy-cn)  但是这并不能保障点赞的内容都是好内容。我们总不能对只有一张图片或者几句话的帖子进行点赞吧。

所以，我想了一下，为什么不弄一个优质机器人自动点赞呢？虽然网上有一些现成的代码，但是我下面介绍的这个有几方面的优势：

- 只限于中文区 CN 主标签 或者是微信群成员列表的帖子。
- 文章的作者必须在过去7天 潜在收益排行前30。
- 根据排名给予不同的点赞权重，例如第1到第10名的帖子80%，第11-15名点赞权重65% 等以此类推。
- 支持黑名单（如果作者的水贴太多）
- [点赞](https://justyy.com/archives/5085)机器人会在第30到90分钟内点赞（因为这个可是我自己的投票能量给你们点的，也得让我收益一点嘛）。
- [点赞](https://justyy.com/archives/5148)机器人在服务器上每10分钟跑一次。
- [点赞](https://justyy.com/archives/5208)机器人在投票能量不足的情况下会主动休息。

所以，你想自动被  @justyy 点赞，那么：

1. 请确保你在微信群列表名单上，具体请看: https://helloacm.com/tools/steemit/wechat/
2. 请努力确保进入前30名：[每日名单](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06)。

# 为什么这样做？
- 这是假设前30名的作者都是优质作者，产生优质内容的概率较大。
- 这个每日排行榜变动还是挺大的，因为如果你几天不写，那么就会跌出排行榜，这可不像声誉，SP或者财富即使几天不更新 可能大鱼们还是能稳坐[排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06)。

# TODO
- 观察投票文章的质量
- 统计自动机器人投票的[点赞](https://justyy.com/archives/4913)收益 (Curation Rewards)
- 每日自动投票记录和报告发表在 每日排行榜里。
- 优化投票权重和加入其它一些对劣质文章的过滤，比如文章太短等。

# 核心代码
仅供参考：
```
def getWeight(rank):
  weight = 0
  if rank <= 10:
    weight = 1.6
  elif rank <= 15:
    weight = 1.3
  elif rank <= 20:
    weight = 1.2
  elif rank <= 25:
    weight = 1
  else:
    weight = 0.5
  return weight
  
if True:    
  rank = 0  
  for x in good:
    rank = rank + 1
    try:   
      blog = Blog(x)
      print("No. " + str(rank) + " = " + x)
      for p in blog.take(1):
        p_date = p['created']
        sec = HowManySeconds(p_date) 
        print("minutes = " + str(sec / 60))
        if sec >= 30*60 and sec <= 90*60:
          url = "@" + x + "/" + p['permlink']
          for y in acc:
            vp = get_vp(y)
            print("voting power for " + y + " is " + str(vp))
            weight = getWeight(rank)
            print("weight = " + str(weight))
            score = vp * 0.5 * weight
            if vp >= 30:            
              print(y + " " + str(score) + " votes for " + url)
              vote(y, account[y], url, score)
            else:
              print("vp low, skipped.")
    except:
      print("Error - " + x)
        
print("OK.")
```

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt CN 区优质内容点赞机器人上线了！](https://justyy.com/archives/5239)
- [A Good-Content-Upvote SteemIt Bot for CN Community](https://helloacm.com/a-good-content-upvote-steemit-bot-for-cn-community/)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06)
- [获取微信群成员关注和粉丝的API](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [高级定制文章列表 RSS/API/阅读器 v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-05) 
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming steemit steemdev bot

- - -

This page is synchronized from the post: [A Good-Content-Upvote-Bot -  CN 区优质内容点赞机器人上线了！](https://steemit.com/@justyy/a-good-content-upvote-bot-cn)
