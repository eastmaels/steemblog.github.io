
---
title: '《Steem指南》特刊： Fork Cheatsheet | 分叉清单'
permlink: steem-fork-cheatsheet-or
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-19 12:41:06
categories:
- hive-180932
tags:
- hive-180932
- cn
- steem-guides
- sct-userguide
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
- sct
- sct-cn
- sct-freeboard
thumbnail: 'https://steemitimages.com/p/2KZBmxPkTzbu9c1XG5NDMMax6H2b33KD4CRaDz7r52e5GrZEVVKZxtUUFMJ2jMKY4Cuc756ZWU3Cf4Rr8PUxZdW8epCwCFMgszrQHMzB6rynwzHTGNhW8So8YARvVJQGv4i5yE9CCad3sU7zDXgp1SRWg9LS8RDM5H1hwJn2yFxxu2AMhsWztkaQEKhkWW4EgMXD?format=match&mode=fit'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![](https://steemitimages.com/p/2KZBmxPkTzbu9c1XG5NDMMax6H2b33KD4CRaDz7r52e5GrZEVVKZxtUUFMJ2jMKY4Cuc756ZWU3Cf4Rr8PUxZdW8epCwCFMgszrQHMzB6rynwzHTGNhW8So8YARvVJQGv4i5yE9CCad3sU7zDXgp1SRWg9LS8RDM5H1hwJn2yFxxu2AMhsWztkaQEKhkWW4EgMXD?format=match&mode=fit)
<sup>本图由 @maiyude 设计</sup>
</center>

- Fork Cheatsheet / 《分叉清单》 ：https://cheatsheet.steemh.org/zh/fork

以下为 2020/03/21 中午12时更新的版本。如有更多信息或建议，欢迎在本文留言汇总，我们将不时更新，或 [请到GitHub 修改](https://github.com/steem-guides/cheatsheet/blob/master/zh/fork.md )。

------


# Fork Cheatsheet | 分叉清单

> 随着 Hive 分叉的到来，不可避免地，社区正面对混乱。
> 
> 为了缓解混乱带来的信息查询的困难，《Steem指南》推出特刊《分叉清单》（Fork Cheatsheet），帮助大家快速查询关于 Steem/Hive 的 DApp、工具 、API节点等信息，澄清疑惑。本清单将不时更新。
>
> 希望 [Fork Cheatsheet / 分叉清单](https://cheatsheet.steemh.org/zh/fork) 对您有帮助。

## Hive分叉始末

1. 2020/03/17，宣布准备分叉：[Why I won’t be compromising with Justin Sun](https://steem.buzz/steem/@blocktrades/why-i-won-t-be-compromising-with-justin-sun) ([中文版，来自 @oflyhigh](https://steem.buzz/cn/@oflyhigh/-blocktrades---steema8a54f8c73)),
2. 2020年/03/18，介绍分叉的细节：[Announcing the Launch of Hive Blockchain](https://steem.buzz/@hiveio/announcing-the-launch-of-hive-blockchain) ([中文版，来自 @oflyhigh](https://steem.buzz/cn/@oflyhigh/hive))
3. 2020/03/20，Hive空投黑名单（名单上的用户没有空投）：[Hive 0_22hf](https://github.com/openhive-network/hive/blob/86ec9f1716744cf708b703981834e83428d447cb/libraries/protocol/hardfork.d/0_22.hf)
4. 2020/03/20，通过SPS申述被从空投黑名单中移除：[What to do if you're mistakenly excluded from the Hive airdrop
](https://steempeak.com/hive/@techcoderx/what-to-do-if-you-re-mistakenly-excluded-from-the-hive-airdrop)
5. 2020/03/20，Hive Fork的运行方法：[Hive 0.23.0 Hard Fork release](https://steempeak.com/witness-update/@someguy123/ann-steem-in-a-box-hive-0-23-0-hard-fork-released)
6. 2020/03/20，Hive Hard Fork 启动：[Hive is Arriving Shortly! What to Expect When Expecting a Hardfork](https://hive.blog/communityfork/@hiveio/hive-is-arriving-shortly-what-to-expect-when-expecting-a-hardfork)

## 常见问题 / FAQ

#1 分叉对使用 Steem 的影响有哪些？

  > 部分 DApp 会迁移到 Hive，使用那些 App 时可能需要注意它默认使用的是 Steem 还是 Hive 链，以及是否支持选择使用哪条链

#2 分叉时需要注意哪些问题？

  > 分叉时最重要的是注意账户安全。**不要**在不熟悉的 App 和 客户端上使用 active key（活跃秘钥）或者 master key（主密钥）登录，否则有钱包失窃的危险。目前存在跨链攻击的安全风险，请特别注意保护账户安全。

#3 能否同时在 Steem 和 Hive 发帖？

  > **Steem2Hive**：在任意基于Steem平台的 DApp 发帖，只需加上 #steem2hive 标签，就可以同步到 Hive 链。但为了实现自动同步，需要进行账户授权和登记：
  >  1. 代理 1 SP 到 @steem2hive账号（Steem上）：https://steemconnect.cocozl.cn/sign/delegateVestingShares?delegator=&delegatee=steem2hive&vesting_shares=1%20SP
  >
  >  2. 授权 @steem2hive账号（Hive上）：https://hivesigner.com/authorize/steem2hive
  > 
  > 发布到 Hive链 的帖子，收益的 1% 将会给 @steem-drivers，用于开发和支持开发者。Steem 上的帖子不抽成。
  > 
  > 目前还在很粗糙的测试阶段，可能还有一些问题


## DApp和工具

> ○ 为支持，✕ 为不支持，? 为待定

| Steem名称 | Hive名称 | Steem | Hive | Steem 网站/App | Hive 网站/App | 相关文章 | 备注 |
| :-- | :-- | -- | -- | :-- | :-- | :-- | :-- |
| Steemit | - | ○ | ✕ | https://steemit.com |  |  |  |
| - | Hive Blog | ✕ | ○ |  | https://hive.blog |  |  |
| steemd | hiveblocks | ○ | ○ | https://steemd.com | https://hiveblocks.com/ | | | 
| SteemWorld | | ○ | ○ | https://steemworld.org/ |  | [My accounts are on the Hive blacklist](https://steempeak.com/steemworld/@steemchiller/my-accounts-are-on-the-hive-blacklist) | 将节点切换到 https://anyx.io 即可查询 Hive 信息  |
| SteemCN | | ○ | ○ | https://steem.buzz |  |  | 会支持同时发帖到两边 |
| SteemPeak | PeakD | ○ | ○ | https://steempeak.com/ | https://peakd.com/ | [THINGS ARE BUZZING - We want your input (#HIVE #REBRANDING)](https://steempeak.com/hive-175001/@steempeak/hive-and-url-changes) |  |
| Busy | | ✕ | ○ |  |  |  | Busy 使用了 anyx 节点，读取 Hive 链数据；但发布的内容通过 steemconnect.com 的 API 同步到 Steem 链，较为混乱，建议暂不使用其发帖 |
| Partiko | | ✕ | ○ |  |  |  | Partiko 已经不在维护，由于使用了 anyx 节点，将同步 Hive 链数据 |
| eSteem | | ○ | ○ |  |  |  | 用户可以主动切换节点，使用对应的链 |
| Steem Engine | | ○ | ○ |  |  |  | Steem Engine 计划将支持 Hive |
| SteemAuto | Hive.vote | ○ | ○ | http://steemauto.com/ | https://hive.vote | [Hive.vote: Steemauto on the new chain 2020/03/18](https://steempeak.com/steemauto/@steemauto/hive-vote-or-steemauto-on-the-new-chain) | SteemAuto会支持Steem直到没有人在Steem上为其提供资金 |
| Steem Keychain | Hive Keychain | ○ | ○ |  |  |  | 不支持 steemit.com 前端 |
| SteemConnect | HiveSigner | ○ | ○ | https://steemconnect.com | https://hivesigner.com/ | [Hivesigner released and ready!](https://busy.org/@good-karma/hivesigner-released-and-ready) by eSteem team |  |
| Splinterlands | | ○ | ○ |  |  | [Splinterlands' Plans for the Upcoming Hive Fork 2020/03/19](https://steem.buzz/splinterlands/@splinterlands/splinterlands-plans-for-the-upcoming-hive-fork) |  |
| Tipu | | ○ | ○ |  |  | [Hive Five!](https://steempeak.com/steem/@tipu/hive-five) |  |
| DTube | | ○ | ? |  |  | [DTube's Upload gets upgraded](https://steempeak.com/dtube/@dtube/dtube-s-upload-gets-upgraded) |  |
| Actifit | | ✕ | ○ |  |  | [Can You Hear the Buzzin? An Actifitter's Guide Plan to Hive](https://steempeak.com/actifit/@actifit/can-you-hear-the-buzzin-an-actifitter-s-guide-plan-to-hive) ! |  |
| Dpoll | | ✕ | ○ |  |  | [HIVE Migration announcements: dPoll and hivemind.emrebeyler.me](https://steempeak.com/hive/@emrebeyler/hive-migration-announcements-dpoll-and-hivemind-emrebeyler-me) |  |
| steem.chat | openhive.chat | ○ | ○ |  |  |  |  |
| SteemSTEM | HiveSTEM | ✕ | ○ |   |  | [On my way to the Hive side, with SteemSTEM](https://steempeak.com/@lemouth/on-my-way-to-the-hiv-1584625090) |  |
| Steemitworldmap | | ✕ | ○ |  |  | [Steemitworldmap and HIVE](https://steempeak.com/steemitworldmap/@steemitworldmap/steemitworldmap-and-hive) | 手机App Haveyoubeenhere 也会迁移 | 
| Curie | | ○ | ○ | curiesteem.com |  | [Curie Announcement regarding HIVE](https://steempeak.com/hive/@curie/curie-announcement-regarding-hive) |  |
| OCD | | ? | ○ |  |  |  |  |
| thegoodwhales.com | | ? | ○ |  |  |  |  |
| C-Squared | | ? | ○ |  |  |  |  |
| Global Blacklist API | | ? | ○ |  |  |  |  |
| Curangel | | ? | ○ |  |  |  |  |

#### steemconnect

- Steem (国内节点): https://steemconnect.cocozl.cn
- Hive (anyx 节点）: https://steemconnect.netlify.com

#### 信息来源

- [HIVE NEWS @ 18 March 2020 - A new News Service for a new Chain](https://steem.buzz/hive/@pennsif/hive-news-18-march-2020-a-new-news-service-for-a-new-chain)


## API节点

> ○ 为支持，✕ 为不支持

| 节点 | Steem | Hive | 相关文章 | 备注 |
| :-- | -- | -- | :-- | :-- |
| https://api.steemit.com | ○ | ✕ |  | |
| https://api.hive.blog | ✕ | ○ | | |
| https://api.openhive.network | ✕ | ○ | | |
| https://anyx.io | ✕ | ○ | [It's Time to Decentralize](https://steem.buzz/hive/@anyx/it-s-time-to-decentralize) | |
| https://steem.61bts.com | ○ | ✕ | | |
| https://steem.bts.tw | ○ | ✕ | | |
| https://api.justyy.com | ○ | ✕ | | |
| https://techcoderx.com | ✕ | ○ | [Statement from @techcoderx witness](https://steem.buzz/witness/@techcoderx/statement-from-techcoderx-witness) | |
| https://steemd.minnowsupportproject.org | ○ | ✕ | | |
| https://api.steemitdev.com | ○ | ✕ | | |
| https://steemd.steemitdev.com | ○ | ✕ | | |
| https://steemd.privex.io | ○ | ✕ | | |
| https://rpc.esteem.app | ✕ | ○ | | |
| https://rpc.usesteem.com | | | | |
| https://api.steem.house | | | | |
| https://rpc.steemviz.com | | | | |
| https://steemd.pevo.science | | | | |
| https://rpc.curiesteem.com | | | | |
| https://appbasetest.timcliff.com | | | | |
| https://api.mahdiyari.info | | | | |
| https://gtg.steem.house:8090 | | | | |
| https://rpc.buildteam.io | | | | |
| https://gtg.steem.house | | | | |

- 关于节点的可用性，请到由 [@justyy](https://steem.buzz/@justyy) 创建的 https://steemyy.com/ 检查最新情况；
- 关于检测节点属于哪条链，可以使用 [@lnakuma](https://steem.buzz/@lnakuma) 创建的 https://xiangstan.github.io/steem/ 进行检测
- 以上没有标记的节点，为测试中暂时不可用的节点：测试时间 2020/03/21

## Wintesses 立场

|		|	Total	|	STEEM	|	HIVE	|	Neutrality 	|
|	:--------:	|	:--------	|	:--------:	|	:--------:	|	:--------:	|
|		|		|	27	|	22	|	11	|
|	1	|	 @good-karma	|		|	○	|		|
|	2	|	 @roelandp	|		|	○	|		|
|	3	|	 @blocktrades	|		|	○	|		|
|	4	|	 @anyx	|		|	○	|		|
|	5	|	 @yabapmatt	|		|		|	○	|
|	6	|	 @ausbitbank	|		|	○	|		|
|	7	|	 @gtg	|		|	○	|		|
|	8	|	 @triple.aaa	|	○	|		|		|
|	9	|	 @steempress	|		|	○	|		|
|	10	|	 @zzan.witnesses	|	○	|		|		|
|	11	|	 @themarkymark	|		|		|	○	|
|	12	|	 @cervantes	|		|		|	○	|
|	13	|	 @steemhunt	|	○	|		|		|
|	14	|	 @aheadofslow	|	○	|		|		|
|	15	|	 @goodguy24	|	○	|		|		|
|	16	|	 @night11pm	|	○	|		|		|
|	17	|	 @hunger365	|	○	|		|		|
|	18	|	 @jumphigh	|	○	|		|		|
|	19	|	 @waitforyou1	|	○	|		|		|
|	20	|	 @cloudysun	|	○	|		|		|
|	21	|	 @coronashallgo	|	○	|		|		|
|	22	|	 @someguy123	|		|		|	○	|
|	23	|	 @paintingclub	|	○	|		|		|
|	24	|	 @drakos	|		|	○	|		|
|	25	|	 @steem-dragon	|	○	|		|		|
|	26	|	 @future.witness	|	○	|		|		|
|	27	|	 @followbtcnews	|		|	○	|		|
|	28	|	 @aggroed	|		|	○	|		|
|	29	|	 @lukestokes.mhth	|		|	○	|		|
|	30	|	 @therealwolf	|		|	○	|		|
|	31	|	 @thecryptodrive	|		|	○	|		|
|	32	|	 @bostonawesome	|	○	|		|		|
|	33	|	 @toke2049	|	○	|		|		|
|	34	|	 @flyingfly1	|	○	|		|		|
|	35	|	 @abit	|		|		|	○	|
|	36	|	 @agirl10000	|	○	|		|		|
|	37	|	 @eastooowest	|	○	|		|		|
|	38	|	 @maiyude	|	○	|		|		|
|	39	|	 @steempeak	|		|		|	○	|
|	40	|	 @nicetry001	|	○	|		|		|
|	41	|	 @car2001	|	○	|		|		|
|	42	|	 @high46	|	○	|		|		|
|	43	|	 @respect888	|	○	|		|		|
|	44	|	 @matreshka	|	○	|		|		|
|	45	|	 @ocd-witness	|		|	○	|		|
|	46	|	 @emrebeyler	|		|	○	|		|
|	47	|	 @netuoso	|		|	○	|		|
|	48	|	 @pharesim	|		|	○	|		|
|	49	|	 @curie	|		|		|	○	|
|	50	|	 @arcange	|		|	○	|		|
|	51	|	 @timcliff	|		|	○	|		|
|	52	|	 @stoodkev	|		|	○	|		|
|	53	|	 @riverhead	|		|		|	○	|
|	54	|	 @liondani	|		|		|	○	|
|	55	|	 @actifit	|		|	○	|		|
|	56	|	 @jesta	|		|		|	○	|
|	57	|	 @pfunk	|		|	○	|		|
|	58	|	 @blockbrothers	|	○	|		|		|
|	59	|	 @bhuz	|		|		|	○	|
|	60	|	 @justyy	|	○	|		|		|

#### 信息来源

- [Which witness stays on Steem and leaves to Hive?](https://steem.buzz/witness-category/@zzan.witnesses/which-witness-stays-on-steem-and-leaves-to-hive)


## 欢迎提问和建议

欢迎提供更多问题或建议，或参与[编辑](https://github.com/steem-guides/cheatsheet/edit/master/zh/fork.md) :)

- - -

This page is synchronized from the post: ['《Steem指南》特刊： Fork Cheatsheet | 分叉清单'](https://steemit.com/@robertyan/steem-fork-cheatsheet-or)
