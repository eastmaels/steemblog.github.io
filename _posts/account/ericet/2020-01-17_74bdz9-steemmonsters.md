
---
title: '自动Steemmonsters卡片工具更新'
permlink: 74bdz9-steemmonsters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-17 03:43:03
categories:
- cn
tags:
- cn
- cn-reader
- cn-stem
- steemmonsters
- whalepower
- lifestyle
- build-it
- steemleo
- spt
- battle
- steemace
- iv
- cc
- jjm
- mini
- esteem
- esteem-cn
- palnet
- zzan
- dblog
- mediaofficials
- marlians
- neoxian
- lassecash
- upfundme
thumbnail: 'https://cdn.steemitimages.com/DQmUJdjhiUTebZB6T5FaEGN6XXwMeY6ZvWPq5hmv4QXR4ap/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天弄了[自动挂单出售Steemmonsters卡片小工具](https://steem.buzz/cn/@ericet/steemmonsters-steem-keychain)后，@maiyude发现了小工具里的一个问题，就是当挂单的卡片太多后，会出现问题。

原因是Custom Json有长度限制，最多支持2000个字节

要解决这个问题，就是每个操作做多挂单20张卡。如果你有超过20张卡要挂单，小工具将分多次挂单出售

除了修复上面的问题，还添加了可按自己需求设置卡片价格高于或者低于市场价格多少百分比

默认设置是高于市场最低价格5%挂单

![](https://cdn.steemitimages.com/DQmUJdjhiUTebZB6T5FaEGN6XXwMeY6ZvWPq5hmv4QXR4ap/image.png)

这个百分比的范围是从-100到100.
*  -100表示低于市场最低价格的100%挂单（也就是免费）
* 1000表示高于市场最低价格的100%挂单（最低价格的2倍）

测试：

设置高于市场最低价格15%出售多余的卡片：

![](https://cdn.steemitimages.com/DQmXKfpWe92cS53v6osH1LbN4mUGxPQYQUwEYokZ2VGUt18/image.png)

成功挂单：

![](https://cdn.steemitimages.com/DQmcZw9fDpXvJKnTxWLtMvnXC4yYUjjvuDj4XZ9Z6HhXbcR/image.png)


---

Steemmonsters/Splinterlands小工具：https://ericet.github.io/SMS-Tools/
Steem-Engine小工具：https://ericet.github.io/SE-Tools/

- - -

This page is synchronized from the post: ['自动Steemmonsters卡片工具更新'](https://steemit.com/@ericet/74bdz9-steemmonsters)
