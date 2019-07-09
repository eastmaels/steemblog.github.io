
---
title: '创建SCOT社群前七问'
permlink: scot-nayl5hcpvy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-08 18:59:51
categories:
- palnet
tags:
- palnet
- sct
- cn-reader
- steemleo
- cn
- jjm
- zzan
- sct-cn
- busy
- whalepower
thumbnail: 'https://files.steempeak.com/file/steempeak/ericet/Ta8eNake-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://files.steempeak.com/file/steempeak/ericet/Ta8eNake-image.png)
(Source: [Pixabay](https://pixabay.com/vectors/social-media-connections-networking-3846597/))


越来越多的团体或者个人开始创建自己的SCOT社群了。大家在创建自己的社群之前，问问自己下面几个问题，看看是否自己已经准备好了

---
## 是否有足够的资金创建SCOT社群？
---
创建一个SCOT社群并不便宜，所以需要有足够的资金起步。

最基础的配置（2100 ENG）：
* 创建代币：100 ENG
* 购买ScotBot：1000 ENG
* 开启锁仓功能：1000 ENG

中级配置（3100 ENG）：
* 创建代币：100 ENG
* 购买ScotBot：1000 ENG
* 开启锁仓功能：1000 ENG
* 创建Nitrous：1000 ENG

高级配置（5100 ENG）：
* 创建代币：100 ENG
* 购买ScotBot：1000 ENG
* 开启锁仓功能：1000 ENG
* 创建Nitrous：1000 ENG
* 创建ScotBB：1000 ENG
* 创建ScotTube：1000 ENG

挖矿配置（3100 ENG）：
* 创建代币：100 ENG
* 开启锁仓功能：1000 ENG
* 开启代理功能：1000 ENG（可选）
* 开启挖矿功能：1000 ENG

其他配置：
* 创建卖赞机器人：1000 ENG
* 加入Steempeak社群：1000 ENG

除了上面的一次性费用外，每个月还会有服务费。这个服务费是按照（每个月的活跃用户数量）x（奖金池数量+网站数量）来计算。

比如你开通了代理功能，挖矿功能和ScotBot服务，同时你还有Nitrous，ScotBB，ScotTube，并且这个月你有1000个活跃用户，1000*（3+3）= 6000 ENG。
月底steem-engine团队将会要求你购入6000 ENG，然后锁仓。

如果你是不会开发的人员，整套配置需要10200 ENG一次性费用+每个月（7 x 活跃用户数量）

具体价格可以查看这篇帖子：[Some useful language and steps for creating a tribe](https://steempeak.com/steem-engine/@aggroed/some-useful-language-and-steps-for-creating-a-tribe)

---
## 平台主题是什么？
---

看看目前几个平台的主题：
* steemcoinpan：虚拟货币，区块链相关内容
* triplea：影评内容
* sportstalksocial：体育内容
* steemleo：投资相关内容
* steemzzang：除了steemcoinpan和triplea以外的内容
* palnet：没有限制内容
单一的主题便于管理，但是用户量会有限制
丰富的主题容易吸引用户，但是不便于管理。

---
## 怎么分配预挖？
---

一般SCOT平台的设置是，预先分配代币给团队，审查，团队基金，空投，市场预售等。剩下的代币将会每年按照设置生产。

参考LEO：
* 预挖: 9,733,303 LEO:
* 空投: 1,733,303
* 团队: 2M
* 审查员: 1M
* 市场出售: 2M
* 活动: 3M

参考PAL：
* 预挖 2100万
* 每年通货膨胀 210万
通货膨胀分配:
* 奖励活跃用户: 10%
* 用于挖矿: 10%
* 用于奖励审查员: 5%
* 用于帖子收益: 75%

---
## ScotBot的设置是什么？
---

主要有以下这些设置：
* author_curve_exponent：作者收益可选线性（1）或者曲线（2）
* author_reward_percentage: 作者获得帖子收益的百分百(0-100). 比如现在steem的设置是75%给帖子作者，25%给curators。
* cashout_window_days: 帖子结算天数（0.1 - 365）。steem目前的设置是7天，如果这个参数改成1的话，就是每天帖子1结算。
* curation_curve_exponent: Curator收益可选普通线性(0.5) - 极端线性(2.0)
* downvote_power_consumption: 踩后帖子扣除收益的百分百（1 - 10000 ) 100代表1%，10000代表100%。如果要设置成和steem现在的设置一样，踩和点赞耗费同样多的VP，downvote_power_consumption 和 vote_power_consumption 要设置成一样的参数。
* downvote_regeneration_seconds: 踩的奖金池恢复速度。如果要和steem的一样，设置参数为432000（6天）。如果不想要这个设定，设置成-1.
* issue_token: 是否发行代币。选择true或者false
* json_metadata_key: 这个选项目前只能填“tags”，意思是，在特定的标签里的帖子才会获得代币。未来会添加“urls”这个选项，意思是在这个链接底下的帖子将会获得代币。
* json_metadata_value: 因为目前只有“tags”的选项，所有这里输入你要设置哪个标签底下的帖子才会获得代币。比如设置“cn”，发cn标签的帖子将会自动获得代币。
* reduction_every_n_block: 多少个区块减少比例。可以设置10512000（一年）。一年后，将减少派送的代币的比例。
* reduction_percentage: 减少的比例。 Steem现在的设置是0.5%，意思是每年生出的STEEM数量减少大概0.5%。
* rewards_token: 每生产X个区块，有多少代币放入奖金池。Steem目前的设定好像是每3个区块将产生1个STEEM
* rewards_token_every_n_block“: 设置X区块。比如设置成10，就是每10个区块将生产X个代币。
* token: 代币的符号
* token_account: 代币账号
* vote_power_consumption: 点赞的消耗率。Steem现在是2，意思是每次满赞耗费2%
* vote_regeneration_seconds“: 需要多久时间恢复VP。STEEM的设置是432000（5天），就是每天恢复20%，5天恢复。

---
## 是否考虑Nitrous,ScotTube,ScotBB,ScotPeak？
---

这些服务都需要1000 ENG。
* Nitrous：像steemit的前端。源代码：https://github.com/steem-engine-exchange/nitrous
* ScotTube：Scot+DTube的结合。具体查看：[ScotTube又是什么？](https://steemblog.github.io/@ericet/scottube-5akw4r5g9u/).源代码：https://github.com/dtube/production
* ScotBB：SCOT+TokenBB的结合体。具体查看：[ScotBB又是啥BB？](https://steemblog.github.io/@ericet/scotbbbb-6hjs8z1p5j/)
* ScotPeak：加入steempeak的社群功能。具体查看[Steempeak的新更新---添加SCOT部落](https://steemblog.github.io/@ericet/steempeak-scot/)

---
## 是否考虑挖矿币？
---

挖矿币的好处是可以短时间凑集资金，用这些资金可以投入卖赞服务或者其他需求。大部分SCOT平台的做法是从每日通货膨胀中拿出10%/15%作为挖矿奖励。

需要考虑矿机的总数和每台矿机的价格。
PALMM 价格100 steem
SCTM 价格 3 steem/2 sct
LEOM 价格 6 steem
ZZANM 价格 10 steem

---
## 是否考虑卖赞服务？
---

卖赞服务的好处是：
* 对于代理用户，每日按照代理比例获取卖赞中获得的代币收益。
* 对于买赞用户，获取多于代币市场价值的steem点赞
* 对于卖赞账号，可以销毁市场中的部分代币（发送到@null），并且起到稳定币价的作用


---

希望这7个问题能帮助你们更好的准备创建自己的社群。

- - -

This page is synchronized from the post: ['创建SCOT社群前七问'](https://steemit.com/@ericet/scot-nayl5hcpvy)
