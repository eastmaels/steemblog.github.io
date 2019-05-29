
---
title: "ScotBot的设定"
permlink: scotbot-1b94mfpktn
catalog: true
toc_nav_num: true
toc: true
date: 2019-05-03 19:58:12
categories:
- cn
tags:
- cn
- cn-reader
- scot
- whalepower
- busy
thumbnail: https://steemitimages.com/0x0/https://i.imgur.com/OAPsDVj.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://steemitimages.com/0x0/https://i.imgur.com/OAPsDVj.png" alt="" /><br/>

今天@aggroed介绍了ScotBot的具体设置：<a href="https://busy.org/@aggroed/scot-and-scotbot-part-iii-scotbot-settings">Scot and Scotbot Part III: Scotbot settings.</a>

主要有以下这些设置：
<strong>author_curve_exponent</strong>：作者收益可选线性（1）或者曲线（2）
<strong>author_reward_percentage</strong>: 作者获得帖子收益的百分百(0-100). 比如现在steem的设置是75%给帖子作者，25%给curators。
<strong>cashout_window_days</strong>: 帖子结算天数（0.1 - 365）。steem目前的设置是7天，如果这个参数改成1的话，就是每天帖子1结算。
<strong>curation_curve_exponent</strong>: Curator收益可选普通线性(0.5) - 极端线性(2.0)
<strong>downvote_power_consumption</strong>: 踩后帖子扣除收益的百分百（1 - 10000 ) 100代表1%，10000代表100%。如果要设置成和steem现在的设置一样，踩和点赞耗费同样多的VP，downvote_power_consumption 和 vote_power_consumption 要设置成一样的参数。
<strong>downvote_regeneration_seconds</strong>: 踩的奖金池恢复速度。如果要和steem的一样，设置参数为432000（6天）。如果不想要这个设定，设置成-1. 
<strong>issue_token</strong>: 是否发行代币。选择true或者false
<strong>json_metadata_key</strong>: 这个选项目前只能填“tags”，意思是，在特定的标签里的帖子才会获得代币。未来会添加“urls”这个选项，意思是在这个链接底下的帖子将会获得代币。
<strong>json_metadata_value</strong>: 因为目前只有“tags”的选项，所有这里输入你要设置哪个标签底下的帖子才会获得代币。比如设置“cn”，发cn标签的帖子将会自动获得代币。
<strong>reduction_every_n_block</strong>: 多少个区块减少比例。可以设置10512000（一年）。一年后，将减少派送的代币的比例。
<strong>reduction_percentage</strong>: 减少的比例。 Steem现在的设置是0.5%，意思是每年生出的STEEM数量减少大概0.5%。
<strong>rewards_token</strong>: 每生产X个区块，有多少代币放入奖金池。Steem目前的设定好像是每3个区块将产生1个STEEM
<strong>rewards_token_every_n_block</strong>": 设置X区块。比如设置成10，就是每10个区块将生产X个代币。
<strong>token</strong>: 代币的符号
<strong>token_account</strong>: 代币账号
<strong>vote_power_consumption</strong>: 点赞的消耗率。Steem现在是2，意思是每次满赞耗费2%
<strong>vote_regeneration_seconds</strong>": 需要多久时间恢复VP。STEEM的设置是432000（5天），就是每天恢复20%，5天恢复。

从以上的设置来看，SCOT给了社区/DApps很多的权利来选择自己想要的参数。 <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://tecirechen.000webhostapp.com/2019/05/scotbot%e7%9a%84%e8%ae%be%e5%ae%9a </em><hr/></center> 

- - -

This page is synchronized from the post: [ScotBot的设定](https://steemit.com/@ericet/scotbot-1b94mfpktn)
