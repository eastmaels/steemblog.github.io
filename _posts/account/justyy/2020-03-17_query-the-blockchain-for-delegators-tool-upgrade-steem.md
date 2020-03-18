
---
title: 'Query the Blockchain for Delegators (Tool Upgrade) - 查询steem帐号代理的工具'
permlink: query-the-blockchain-for-delegators-tool-upgrade-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-17 21:27:03
categories:
- cn-reader
tags:
- cn-reader
- cn-curation
- whalepower
- steem-dev
- delegation
- steem-tool
- tools
- software
- programming
- steemjs
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmdvpXz3aZdZHQEHSRcgFYvycmpUzabgvrLpRL8nT8KAZ5/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have implemented a new tool to query the blockchain for delegators.
https://steemyy.com/delegators/

![](https://cdn.steemitimages.com/DQmdvpXz3aZdZHQEHSRcgFYvycmpUzabgvrLpRL8nT8KAZ5/image.png)

It integrates with SteemSQL so that you can pick either way to query the blockchain.

![](https://cdn.steemitimages.com/DQmaZWgJk8dZ2BCbNMHa3SMLRrHtAbU7dGYQ1aFJRg2HMZ9/image.png)

1. If you choose *Query via SQL* it will ask for steemsql to get the list of delegators . However, the server may not be available.
2. If you choose *Search the Blockchain*, it will use SteemJS to query the blockchain. Generally available, but very slow especially if the account has lots of the records - which need to be scanned completely.

------------------------ Chinese Version----------------------------------
steemsql 经常不好用，所以就给该工具加入了 steemjs 版本
工具地址：https://steemyy.com/list-of-delegators/

![](https://cdn.steemitimages.com/DQmTRV9UKMGGRfK1V9X9f1DzpbDdWWyvGXWvARX3833dd68/image.png)

当然，还是可以保留用 steemsql 的方式来查询，如果能用的话。
![](https://cdn.steemitimages.com/DQmXrxdvxRQ4XWbhVM7AoFPkM6JwMU2YwbHhDCaJKwnGBDZ/image.png)


**Steem On!~**

------------------

#### @justyy is the author of https://steemyy.com and he supports and promotes the CN community.

#### Vote for My Witness 支持行长当STEEM的见证人，每人可以投30票。
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
Or [Vote @justyy via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=justyy&approve=1) **Thank you!**
或者 直接设置行长为见证人代理吧 - 投了行长就等于支持CN区的所有见证人。
Or voting me as [a witness proxy](https://beta.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

- - -

This page is synchronized from the post: ['Query the Blockchain for Delegators (Tool Upgrade) - 查询steem帐号代理的工具'](https://steemit.com/@justyy/query-the-blockchain-for-delegators-tool-upgrade-steem)
