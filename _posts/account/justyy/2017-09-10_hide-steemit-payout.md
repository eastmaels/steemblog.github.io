
---
title: 'Hide SteemIt Payout 隐藏收益，专注写作！'
permlink: hide-steemit-payout
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-10 20:32:48
categories:
- steemdev
tags:
- steemdev
- steemit
- cn
- cn-programming
- payout
thumbnail: https://steemitimages.com/DQmQPBgUCHmdeTqBLsRwBz2gxzZt5zWRQ7cSTT2AYYRKeaL/icon.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![icon.png](https://steemitimages.com/DQmQPBgUCHmdeTqBLsRwBz2gxzZt5zWRQ7cSTT2AYYRKeaL/icon.png)

Trust me,  the payout figure does more harm than good. It makes you unhappy especially if you are one of the minnows. So, why not hide it for a while and focus on good-content writing skills?

The payout figures distract you i.e. you spend a good amount of time writing a lengthy article, but you only have like $10 payout. And you browse the trending page, see some meaningless photographs with three figures payout, you feel jealous and unfair, which makes you unhappy.

You read a good article, but the payout figure is so impressive that you admire the authors. You start to spend time on how to get more payouts like the author, rather than what you should really do: forget the earnings and focus on the content.

Well,  I believe this Chrome extension helps you a little bit, by hiding the payout figures for posts and comments. It does not do a perfect job, i.e. you can still see it by clicking the icon 'Potential payout ... in 7 days'. But it does purify the page so that it does not distract you from the start.

You earn $30 today, but your posts get $10 tomorrow, and you are not happy, because of the comparisons. **The payout will not catch up with the greed**  This plugin is here for you. It can help you get back to your normal life instead of refreshing the page and checking the payout figures.

So, just install this, and let me know in a few days.
https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh

What the plugin does is actually the following line of [Javascript](https://helloacm.com/how-to-auto-complete-comment-form-using-javascript/)  code, which you can test this by bookmark it in the Chrome browser (manually hide the payout figures). 

```
javascript:var e=document.querySelectorAll('span.FormattedAsset');for(var i=0;i<e.length;++i) e[i].innerHTML='XXXX';void(0);
```

*If the plugin does not work, try to click the 'show payout' and switch it back to 'hide payout', this is a known bug which has been fixed in the version in case of delayed-publish issues*

![](https://steemitimages.com/DQmYTdrdy2hRRfrgAVx2WRgYDhmqgyfb1Hgp2JUiUfW9gJt/image.png)

很多时候，你玩STEEM中毒或者不开心纠其原因，就是收益。如果没有收益，大家专注于写作，开开心心不是更好么？

@joythewanderer  在 [Would you be more motivated if high payouts of other posts are hidden? 如果不去看别人的高收益，会不会反而更有动力写文章呢？](https://steemit.com/cn/@joythewanderer/would-you-be-more-motivated-if-high-payouts-of-other-posts-are-hidden-steemit)  说到：

> 试想我的朋友，她花了两个小时，自认写的不错，她可能得了10美元，其实挺不错的。但是她再一看，热门版面动辄100多，当然她可能是新人，还不清楚可能有那个帖子60美元来自机器人。但是她开始觉得自己的收益不够多。
> 但是换个思维想一想，如果不去看那些高收益，他们的帖子就只是不错的文章而已，类似首页摘录。我们自己的页面也就像tumblr或者wordpress，是个个人博客。博客下面加了数字而已。

很多时候，这个要命的 数字只会让你增添烦恼，你对于别人的收益是无法改变，有时候自己的收益短时间内也很难有突破。你去翻大鱼们的文章，眼球很难不被巨大的收益给吸引了。相信我，这个数字在显示出来利大于弊。

隐藏收益显示，你能让专心于内容创造和阅读优质文章，这是件极好的事情。况且当你哪一天突然想起来翻一翻SBD钱包，一下子发现：哇塞！我好有钱，有没有像天上掉馅饼？这种快乐是比你：今天赚了30美元，明天赚20美元心理有落差好多了。人是有欲望的，天天盯着数字会上瘾，会中毒。**贪婪的阀值是越来越高**，而你实际的收益是不可能紧随之，这就是你不快乐的来源。

说了这么多，就是想广告一下我写的 CHROME 插件：

官网下载:  https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh

![](https://steemitimages.com/DQmTSRsxdeqXonTgJpSayFCbXupYxeou4P9RLMWUdmZRwL1/image.png)

点添加:

![](https://steemitimages.com/DQmRywU5tmaihtKgUqt5GMQoDcbknycaFUpmD7AEcvpcaLH/image.png)

点击配置图标:

![](https://steemitimages.com/DQmbU1KEUuTrAqtBfCKo6yATDjR3twNTB7dGAyQzqJ978XW/image.png)

![](https://steemitimages.com/DQmZNG5yh4M5vsVTHkuzZRUdokqXe7APz4cgSSxeRDeCKNx/image.png)

刷新页面，四大皆空：

![](https://steemitimages.com/DQmVAX42p33tXgDLsP6HJ4ugMi41nAeCdWpyuLhV2mm5UXx/image.png)

![](https://steemitimages.com/DQmXAdnDKcvTfL9VQoya7W5PiUjKjP59tr5EowEPJMm191B/image.png)

原理很简单，就这么一行[JAVASCRIPT](https://justyy.com/archives/1551)，你可以直接 book mark, 不过插件做到了在页面加载完后自动化而已。

```
javascript:var e=document.querySelectorAll('span.FormattedAsset');for(var i=0;i<e.length;++i) e[i].innerHTML='XXXX';void(0);
```

该插件支持 steemit.com 和 steemd.com 其实隐藏得也不是那么彻底，不过我相信这已经达到了净化眼球的目的了，至少我启用了插件后，我变得专注于内容写作了，哪怕只有一点点也是极好的。

*插件在装完后需要手工的选择 Show Payout 然后再点回 Hide Payout, 这是一个BUG，已经修复。*

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)
Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Hide SteemIt Payout](https://helloacm.com/hide-steemit-payout/)
- [隐藏收益，专注写作](https://justyy.com/archives/5269)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-10)
- [信上帝，有饭吃。Hymns of Life](https://steemit.com/cn/@justyy/hymns-of-life)
- [带孩子参观消防车 Cambridge Fire Station Open Day](https://steemit.com/cn/@justyy/cambridge-fire-station-open-day)
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [今天用了机器人给经理请了假](https://steemit.com/cn/@justyy/ywdqq)
- [ CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-10) 
- [Good-content Upvoting History now Integrated into to Daily Ranking Table](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [Steemit Wechat Group Ranking Statistics Update and API](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [The Average, Median, STD of SteemIt Wechat Group ](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [The Zenefit Bot on Slack](https://steemit.com/cn/@justyy/ywdqq)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)

![](https://justyy.com/gif/steemit.gif)
Tags: steemdev steemit cn cn-programming payout

- - -

This page is synchronized from the post: [Hide SteemIt Payout 隐藏收益，专注写作！](https://steemit.com/@justyy/hide-steemit-payout)
