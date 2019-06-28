
---
title: '怎么查看自己是否被SCOT平台拉黑呢？'
permlink: scot-rkty3guliq
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-27 18:11:18
categories:
- cn
tags:
- cn
- palnet
- sct
- cn-reader
- whalepower
- jjm
- sct-cn
thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/10/25/mute-157187_960_720.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center><img src="https://cdn.pixabay.com/photo/2013/07/13/10/25/mute-157187_960_720.png" alt="" /><br/>
(Image Source: <a href="https://cdn.pixabay.com/photo/2013/07/13/10/25/mute-157187_960_720.png">Pixabay</a>)</center>

这几天，一个新生SCOT平台SportsTalk Social刚上线不到3天，就被人撸的面目全非。

想了解具体故事，可以查看我之前的帖子<a href="https://busy.org/@ericet/10sports-0qzvw1192d">10颗SPORTS引发的一场血案</a>

平台发起人沉默了一天后，终于决定继续让平台走下去。为了不让平台继续被撸，让steem-engine团队加了黑名单功能。只要被加入黑名单，用户就失去了点赞的能力。

目前已知的7个被加入黑名单的是，前7个锁仓最多币的账号。

<strong>要怎么查看自己是否被SCOT平台拉黑呢？</strong>

通过这个链接就可以查看：https://scot-api.steem-engine.com/@用户名

以之前锁仓最多的caladan做个例子，https://scot-api.steem-engine.com/@caladan

<pre><code class="">{
  "downvoting_power": 10000,
  "earned_token": 32190447,
  "last_downvote_time": "2019-01-01T00:00:00",
  "last_post": "Tue, 01 Jan 2019 00:00:00 GMT",
  "last_root_post": "Thu, 27 Jun 2019 17:03:48 GMT",
  "last_vote_time": "2019-06-25T22:03:09",
  "last_won_mining_claim": "Tue, 01 Jan 2019 00:00:00 GMT",
  "last_won_staking_claim": "Tue, 01 Jan 2019 00:00:00 GMT",
  "loki": null,
  "muted": true, 
  "name": "caladan",
  "pending_token": 0,
  "staked_mining_power": 0,
  "staked_tokens": 30000000,
  "symbol": "SPORTS",
  "voting_power": 9842
}
</code></pre>

返回的数据里面去找一个“muted”的参数，如果muted的参数是true，那就代表你被某个SCOT平台拉黑了。

数据显示caladan被SPORTS平台拉黑了。 ---

- - -

This page is synchronized from the post: ['怎么查看自己是否被SCOT平台拉黑呢？'](https://steemit.com/@ericet/scot-rkty3guliq)
