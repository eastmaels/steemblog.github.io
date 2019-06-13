
---
title: '你给SteemIt中文微信群拖后腿了么? Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group'
permlink: steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-08 00:24:18
categories:
- cn
tags:
- cn
- cn-programming
- steemit-api
- nodejs
thumbnail: https://steemitimages.com/DQmc4weRnDne7n7Y2VJmhDqaVPpFxNfAc3M4UKZ1jryNgC9/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmc4weRnDne7n7Y2VJmhDqaVPpFxNfAc3M4UKZ1jryNgC9/image.png)

I have shown a simple [NodeJS](https://helloacm.com/using-com-object-in-nodejs/) example that calls the [SteemIt Wechat API](https://helloacm.com/steemit-api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group/) to get the [daily ranking table](https://helloacm.com/a-good-content-upvote-steemit-bot-for-cn-community/) e.g. @dailystats . The average scores for Reputation, Steem Power, Steem, Effective SP, Voting Power, SBD and Account values are calculated.

这年头不缺算法，就缺数据。这两天花了很多时间在整[API](https://justyy.com/archives/5241)上，整完之后自己用了一下还觉得真是挺方便的。今天就突然想看一看自己是否给大家拖后腿了，于是调用每日中文区微信群排行榜单的[API](https://justyy.com/archives/5072)，刷刷拿着 NodeJs 练手:

![](https://steemitimages.com/DQmZGm8Po5hj4B7RxWV5xVKfdnxkdSUS4CCynB9tvuELF7p/image.png)

```
// @justyy
var request = require("request")
var url = "https://uploadbeta.com/api/steemit/wechat/?cached";

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		var total = 0;		
		var total_rep = 0;
		var total_sbd = 0;
		var total_steem = 0;
		var total_value = 0;
		var total_esp = 0;
		var total_vp = 0;
		var total_sp = 0;
		body.forEach(function(member) {
			total ++;
			total_rep += member['rep'];
			total_sbd += member['sbd'];
			total_steem += member['steem'];
			total_value += member['value'];
			total_esp += member['esp'];
			total_vp += member['vp'];
			total_sp += member['sp'];
		});
		console.log("Total Members = " + total);
		console.log("Average Reputation = " + Math.round(total_rep / total * 100) / 100);
		console.log("Average SBD = " + Math.round(total_sbd / total * 100) / 100);
		console.log("Average Steem = " + Math.round(total_steem / total * 100) / 100);
		console.log("Average Effective SP = " + Math.round(total_esp / total * 100) / 100);
		console.log("Average SP = " + Math.round(total_sp / total * 100) / 100);
		console.log("Average Voting Power = " + Math.round(total_vp / total * 100) / 100);
		console.log("Average Account Value = " + Math.round(total_value / total * 100) / 100);
	}
})
```

I use the [NodeJs](https://helloacm.com/node-js-tutorial-1/) + [sublime text 3](https://steakovercooked.com/Life.Record/text/article/2016/11/sublime-text-3-registration-license-key.txt) on windows to run the above [Javascript code](https://helloacm.com/the-best-steemit-upvoting-strategy-calculator-in-javascript/).

我是在WINDOWS 下用 [sublime text 3](https://steakovercooked.com/ch/Life.Record/text/article/2016/11/sublime-text-3-registration-license-key.txt) 然后下载最新版的 NodeJS 来编写的。NodeJS 虽然是服务端的[Javascript](https://justyy.com/archives/1551), 但是硬生生的被我拿来写些客户端的一些脚本。

需要使用 `npm install request` 来安装 request 包，代码很清楚 不需要我再过多的解释了。直接出结果：

![](https://steemitimages.com/DQmP7EK2aXoCBrn9XqQBunjR7emyr285TzwnAytRdXhaGpZ/image.png)

你拖后腿了么？CN区一下子多了好多大鱼（包括代理SP），一下子把ESP平均指标给拉了上去。

最后，再广告一下：
1. [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/)
2. [SteemIt 好友微信群文章列表 RSS Feed](https://helloacm.com/tools/steemit/wechat/rss/)
3. SteemIt 编程 Geek 微信群，请联系 @justyy 让我拉你入群。

需要入群者 请联系 @tumutanzi 或者 @rivalhw 谢谢。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)
Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [你给SteemIt中文微信群拖后腿了么?](https://justyy.com/archives/5247)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://helloacm.com/simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group/)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-07)
- [今天用了机器人给经理请了假](https://steemit.com/cn/@justyy/ywdqq)
- [ CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [获取微信群成员关注和粉丝的API](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [高级定制文章列表 RSS/API/阅读器 v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-07) 
- [The Zenefit Bot on Slack](https://steemit.com/cn/@justyy/ywdqq)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming steemit-api nodejs

- - -

This page is synchronized from the post: [你给SteemIt中文微信群拖后腿了么? Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
