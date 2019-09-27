
---
title: '怎么用JS发送Custom Json到STEEM区块链上？'
permlink: jscustomjsonsteem-l63o0zgaly
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-27 01:28:57
categories:
- cn
tags:
- cn
- cn-reader
- whalepower
- cn-stem
- steemstem
- cn-programming
- steemleo
- build-it
- jjm
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- sct
- sct-cn
- sct-freeboard
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmSkEEwkmkMmstNtFK9XJ17LdHK3frbtGuu4QRnAvaCYWm/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


前几天阿John @john371911 在村里询问有什么工具可以发Custom Json？查了一下，没看到任何工具可以用于发送Custom Json的，所以最好的办法就是自己写一个。

## Custom Json是什么呢？

其实就是把一些自己想写的信息写到区块链上。这个Custom Json用的最多的是基于STEEM的DApps。比如Steemmonsters，Steem-engine等等

Steemmonsters会把每次的对战信息，获得的奖励卡等信息以Custom Json的格式发送到STEEM区块链上

而Steem-engine会把每笔交易，转账，领取奖励等信息都以Custom Json的格式写入到STEEM区块链

## Custom Json长什么样子呢？

![](https://cdn.steemitimages.com/DQmSkEEwkmkMmstNtFK9XJ17LdHK3frbtGuu4QRnAvaCYWm/image.png)

Custom Json包含：id,json,required_auths,和required_posting_auths 这4个元素
* id: 这个custom json的名字，比如，我可以写个custom json命名为"ericet_json"
* json: 这个是你想写入的信息以json格式保存
* required_auths: 活动密钥认证。比如你想用custom json做DApp的转账，这里就需要活动密钥认证了。
* required_posting_auths：发帖密钥认证。领取奖励，发起对战这些对你钱包没啥影响的，只需发帖密钥认证就好了。

了解了Custom Json的基本结构就可以开始写了。

steemjs提供了一个function用于发送Custom Json：
~~~
  steem.broadcast.customJson(
    "",//密钥
    [], // Required_auths
    [], // Required Posting Auths
    '', // Id
    json, //json
    function(err, result) {
      console.log(err, result);
    }
  );
~~~

比如你想写个程序自动领取SCT的收益：

~~~
const steemid = 'ericet';
const postingKey='xxxxxxxxxxxxxxxx';
let json = JSON.stringify({
		symbol: 'SCT'
	});

steem.broadcast.customJson(postingKey, [], [steemid], 'scot_claim_token', json, (err, result) => {
	if (err)
		console.log(err);
	else
		console.log(steemid + " just claimed SCT token");
});

~~~
这个自动领取收益程序一次只能领取一个币，如果你想一次领取所有的代币，可以看[JS版一次领取所有代领取SCOT代币](https://www.steemcn.org/cn/@ericet/jsscot-8shgjxo27y)

你还可以自己创建一个属于自己的Custom Json：
~~~
const steem = require('steem');
const steemid = 'ericet';
const postingKey='xxxxxxxxxxxxxx';

let json = JSON.stringify({
		random: '只是随机的一个Custom Json',
		author: '新手村村长'
	});

steem.broadcast.customJson(postingKey, [], [steemid], 'ericet_json', json, (err, result) => {
	if (err)
		console.log(err);
	else
		console.log(result);
});

~~~
运行后，就会发送以下custom json到STEEM链上。这个custom json没有任何用途。

![image.png](https://files.steempeak.com/file/steempeak/ericet/7HjBciUy-image.png)

现在越来越多的DApps在使用Custom Json来保存信息，你只需了解他们的json的格式，完全可以不登陆steemmonsters游戏的情况下，使用custom json发起对战。

Custom Json的玩法还有很多，比如通过custom json锁仓/代理/转账/出售/购买SCOT代币。这些就留着你们自己去探索。



---

STEEM编程系列：
* <a href="https://www.steemcn.org/cn/@ericet/js">怎么用JS写个自动点赞程序？</a>
* <a href="https://www.steemcn.org/cn/@ericet/js-nddsi4obip">怎么用JS写个召唤机器人？</a>
* [怎么用JS写个STEEM转账程序？](https://www.steemcn.org/cn/@ericet/jssteem-gnsdaiwklj)

- - -

This page is synchronized from the post: ['怎么用JS发送Custom Json到STEEM区块链上？'](https://steemit.com/@ericet/jscustomjsonsteem-l63o0zgaly)
