
---
title: '点赞机器人每日点赞记录整合到每日报表中！ Good-content Upvoting History now Integrated into to Daily Ranking Table'
permlink: good-content-upvoting-history-now-integrated-into-to-daily-ranking-table
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-09 14:46:03
categories:
- cn
tags:
- cn
- cn-programming
- programming
- python
- upvote
thumbnail: https://steemitimages.com/DQmfRB4AM5zzfEczQACsqmaXyGptsd7wbCkJn7YQhtXqm3p/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmfRB4AM5zzfEczQACsqmaXyGptsd7wbCkJn7YQhtXqm3p/image.png)

前几天：[A Good-Content-Upvote-Bot - CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn), 观察了一两天，觉得还行，于是把*部分*点赞的记录也公布到每日榜单更新中。

![](https://steemitimages.com/DQmdueudKqJPXcHrRSetFDEbFeT3f5aA9NrxGFn5JnpbBdD/image.png)

Recording upvote history...
处理记录的Python[代码](https://justyy.com/archives/3669)：

```
ts = time.strftime("%Y-%m-%d %H:%M:%S")                
msg = "| " + ts
msg += "| @" + author + " | [" + title + "](https://steemit.com/" + url + ") "
msg += "| " + str("{:.2f}".format(score))  
msg += "| " + str("{:.2f}".format(vp)) + "|"            
if vote(y, account[y], url, score) != False:
    content += msg + "\n"
```

The code saving messages to file:
然后存成文件：

```
if len(content) > 1:       
  try:
    filename = "steem/upvote-hisotry/" + today + ".txt"
    text_file = open(filename, "a")
    text_file.write(content)
  except:
    print('Error: ' + filename)
  finally:
    text_file.close()  
```

最后面在生成报表的时候只需要读相应的文件记录即可，由于每天UTC 正午12点左右生成报告，所以点赞记录只是当天12小时的记录，所以是*部分*点赞记录。

我每天都会生成这个报表，每天都会人工审核，并不断调整参数，尽量达到更好的效果。毕竟做这事的初衷就是激励CN社区创造出更高质的文章！

欢迎大家[围观](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-09)！

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)
Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [点赞机器人每日点赞记录整合到每日报表中](https://justyy.com/archives/5260)
- [你给SteemIt中文微信群拖后腿了么?](https://justyy.com/archives/5247)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://helloacm.com/simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group/)
- [The Average, Median, STD of SteemIt Wechat Group](https://helloacm.com/the-average-median-std-of-steemit-wechat-group/)
- [数据初步分析系列 STEEM中文微信群排行榜单](https://justyy.com/archives/5249)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-09)
- [SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [今天用了机器人给经理请了假](https://steemit.com/cn/@justyy/ywdqq)
- [ CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-08) 
- [Steemit Wechat Group Ranking Statistics Update and API](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [The Average, Median, STD of SteemIt Wechat Group ](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [The Zenefit Bot on Slack](https://steemit.com/cn/@justyy/ywdqq)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming programming python upvote

- - -

This page is synchronized from the post: [点赞机器人每日点赞记录整合到每日报表中！ Good-content Upvoting History now Integrated into to Daily Ranking Table](https://steemit.com/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
