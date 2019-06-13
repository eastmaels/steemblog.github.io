
---
title: 'The Average, Median, STD of SteemIt Wechat Group 数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差'
permlink: the-average-median-std-of-steemit-wechat-group-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-08 14:17:18
categories:
- cn
tags:
- cn
- cn-programming
- steemit-api
- steemstem
- wechat
thumbnail: https://steemwhales.com/pic/whale.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemwhales.com/pic/whale.png)
*Image Credit SteemWhales.com*

**Abstract**: I have improved this [NodeJs script](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group) to compute the Median and STD for the members in the Steemit-Wechat Group. It reflects the fact that: the most wealth is posseseed by a few huge whales.

I am planning to put these statistists on the [Daily SteemIt Wechat Group Ranking table](https://helloacm.com/tools/steemit/wechat-ranking/).  The median values help better understand where you are in the big pond (are you really a minnow?)

昨天半夜写的[帖子](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)目的是小试 NodeJs 牛刀， @rivalhw  和 @dapeng 给了非常好的建议： 平均值不太适合看大众水平，因为：贫富差距在 STEEM的世界里也是非常的明显，目测10%大鱼们掌握了90%的财富，所以如果取平均的话，指标都会偏高，不能反映实际情况。

是不是有很多歌唱比赛评委给分之后，选手的最终得分都得先“去掉一个最高分，去掉一个最低分”？不过在这里，你去掉一个最高最低也没有啥卵用，因为富得流油的远不止一个，穷得只剩下小裤衩的也有很多。

# 中位数
数学中的中位数（Median）指的是把所有需要统计的数值排序，然后取最中间那个（如果有奇数个数值），如果有偶数个，则取中间两个数来取平均。这个相对能反映出大众水平。

# 标准方差
标准方差 STD 反映了数据波动的情况，比如如果财富值的标准方差越大，则表示贫富差距大（离平均水平的波动区别）

# NodeJs 程序 + SteemIt Wechat API
有了[API](https://justyy.com/archives/5072)，我们用 [Node.Js](https://justyy.com/archives/5247) 来跑跑，看看什么结果。 首先我们通过 prototype 的方式给 [Javascript](https://justyy.com/archives/1551) 中的数组来定义以上几个指标：
Let's define these measured by extending Array's prototype in [Javascript](https://helloacm.com/how-to-test-element-in-array-in-array-and-array-contains-in-javascript/):

```
Array.prototype.median = function() {
	var arr = [...this];
	var len = arr.length;
	if (0 == len) {
		return NaN;
	}
	arr.sort();	
	var mid = Math.floor(len / 2);
	if ((len % 2) == 0) {
		return (arr[mid] + arr[mid - 1]) * 0.5;
	}
	return arr[mid];
}

Array.prototype.mean = function() {
	var total = 0;
	for (var i = this.length - 1; i >= 0; -- i){
		total += this[i];
	}
	return total / this.length;
}

Array.prototype.STD = function() {
   var mean = this.mean();
   var diff = [];
   for (var j = this.length - 1; j >= 0; -- j){
       diff.push(Math.pow((this[j] - mean), 2));
   }
   return (Math.sqrt(diff.reduce((a, b) => a + b) / this.length));
}
```

然后[一样](https://justyy.com/archives/5247)的套路：Then we just need to fetch the ranking table via the handy [API](https://helloacm.com/steemit-api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group/).

```
// @justyy
var request = require("request")
var url = "https://uploadbeta.com/api/steemit/wechat/?cached";
request({
	url: url,
	json: true
}, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		var total_rep = [];
		var total_sbd = [];
		var total_steem = [];
		var total_value = [];
		var total_esp = [];
		var total_vp = [];
		var total_sp = [];
		body.forEach(function(member) {
			total_rep.push(member['rep']);
			total_sbd.push(member['sbd']);
			total_steem.push(member['steem']);
			total_value.push(member['value']);
			total_esp.push(member['esp']);
			total_vp.push(member['vp']);
			total_sp.push(member['sp']);
		});

		console.log("----Median----");
		console.log("Total Members = " + total_rep.length);
		console.log("Median Reputation = " + Math.round(total_rep.median() * 100) / 100);
		console.log("Median SBD = " + Math.round(total_sbd.median() * 100) / 100);
		console.log("Median Steem = " + Math.round(total_steem.median() * 100) / 100);
		console.log("Median Effective SP = " + Math.round(total_esp.median() * 100) / 100);
		console.log("Median SP = " + Math.round(total_sp.median() * 100) / 100);
		console.log("Median Voting Power = " + Math.round(total_vp.median() * 100) / 100);
		console.log("Median Account Value = " + Math.round(total_value.median() * 100) / 100);

		console.log("----Mean----");
		console.log("Mean Reputation = " + Math.round(total_rep.mean() * 100) / 100);
		console.log("Mean SBD = " + Math.round(total_sbd.mean() * 100) / 100);
		console.log("Mean Steem = " + Math.round(total_steem.mean() * 100) / 100);
		console.log("Mean Effective SP = " + Math.round(total_esp.mean() * 100) / 100);
		console.log("Mean SP = " + Math.round(total_sp.mean() * 100) / 100);
		console.log("Mean Voting Power = " + Math.round(total_vp.mean() * 100) / 100);
		console.log("Mean Account Value = " + Math.round(total_value.mean() * 100) / 100);		

		console.log("----STD----");
		console.log("STD Reputation = " + Math.round(total_rep.STD() * 100) / 100);
		console.log("STD SBD = " + Math.round(total_sbd.STD() * 100) / 100);
		console.log("STD Steem = " + Math.round(total_steem.STD() * 100) / 100);
		console.log("STD Effective SP = " + Math.round(total_esp.STD() * 100) / 100);
		console.log("STD SP = " + Math.round(total_sp.STD() * 100) / 100);
		console.log("STD Voting Power = " + Math.round(total_vp.STD() * 100) / 100);
		console.log("STD Account Value = " + Math.round(total_value.STD() * 100) / 100);		
	}
})
```

然后这是结果：And the results come out pretty quickly using [NodeJs](https://helloacm.com/using-com-object-in-nodejs/)

```
----Median----
Total Members = 173
Median Reputation = 50.83
Median SBD = 154.62
Median Steem = 0
Median Effective SP = 28.15
Median SP = 201.16
Median Voting Power = 93.72
Median Account Value = 2040.61
----Mean----
Mean Reputation = 48.56
Mean SBD = 224.75
Mean Steem = 18.99
Mean Effective SP = 18503.56
Mean SP = 1561.65
Mean Voting Power = 83.07
Mean Account Value = 2436.73
----STD----
STD Reputation = 13.5
STD SBD = 1093.16
STD Steem = 118.9
STD Effective SP = 99019.55
STD SP = 5977.72
STD Voting Power = 21.61
STD Account Value = 9344.65
```

简单来说：“大众”等级是 50.83，“大众” SP 是201.16，“大众”帐号估值是 2040.61
通过STD我们可以看到，SP，ESP，还有帐号估值的贫富差距还是挺大的。

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
- [The Average, Median, STD of SteemIt Wechat Group](https://helloacm.com/the-average-median-std-of-steemit-wechat-group/)
- [数据初步分析系列 STEEM中文微信群排行榜单](https://justyy.com/archives/5249)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-08)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [今天用了机器人给经理请了假](https://steemit.com/cn/@justyy/ywdqq)
- [ CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [获取微信群成员关注和粉丝的API](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [高级定制文章列表 RSS/API/阅读器 v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-07) 
- [The Zenefit Bot on Slack](https://steemit.com/cn/@justyy/ywdqq)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming steemit-api steemstem wechat

- - -

This page is synchronized from the post: [The Average, Median, STD of SteemIt Wechat Group 数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
