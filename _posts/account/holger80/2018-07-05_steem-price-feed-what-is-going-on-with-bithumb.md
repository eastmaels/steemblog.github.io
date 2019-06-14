
---
title: 'Steem price feed - What is going on with bithumb?'
permlink: steem-price-feed-what-is-going-on-with-bithumb
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-05 05:21:15
categories:
- witness-category
tags:
- witness-category
- witness
- pricefeed
- steem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmcwuwPhixF18oTEHW1GQ2nSxURekwaLhVia5hLDs8rm3k'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you may know, one duty of a witness is it to provide a price feed for steem. Based on the broadcasted pricefeeds, a median price from the last 3.5 days is calculated and influencing the author rewards and the vote value.

At the moment the steem/USD price from the bithumb is way off in comparison to other exchanges. At other exchanges, the price is currently by 1.69 USD, but on bithumb it is 2.34 USD. This causes the price jumps on [coincapmarket](https://coinmarketcap.com/de/currencies/steem/#charts):

![image.png](https://ipfs.busy.org/ipfs/QmcwuwPhixF18oTEHW1GQ2nSxURekwaLhVia5hLDs8rm3k)

You can see the Steem/USD price for [different exchanges](https://www.worldcoinindex.com/coin/steem):
![image.png](https://ipfs.busy.org/ipfs/QmU2iKcUoDsXe7QAJ1Bg6jms1A484XijVBSqS7KLACxtni)

Due to the high 24h volume, the price from bithumb influences strongly the average price.
Poloniex and HitBTC show a price which is lower than the price listing on other exchanges. Due to the low 24h volume, they do no influence the average price.

[coinmarketcap.com](https://coinmarketcap.com/currencies/steem/#markets) removed the listing of bithumb shortly:
![image.png](https://ipfs.busy.org/ipfs/QmPVt5mS1KWufF33UjdjVsnyiRBkyw17dvGZbhLsb7HTGe)

The top 20 witnesses are doing a great job and broadcasting the correct steem price. Some witnesses are broadcasting a too low steem price as they including the exchange price from hitbtc (maybe without using the 24h volume for doing a weighting average).
___
@busy.witness should check the price feed script:
![](https://cdn.steemitimages.com/DQmXQFmDy5SWsREyEwRaBxT3AG22qfESGaP4NwWKdo4S7ib/image.png)

as well as @aizensou 
![](https://cdn.steemitimages.com/DQmbhTrMfbJEvnM5jYiLTysGaHVXEmiv5wxDeJ6zvVm7ZpP/image.png)

___
P.S.: Don't get fooled by the price bias as I'am.

Output from: https://steemd.com/witnesses:
![](https://cdn.steemitimages.com/DQmZV9AupZ46MRrbkUExsraPsUL1xDGz39L24JZdKJn5XcW/image.png)
Result from http://steeme.com/witness:
![](https://cdn.steemitimages.com/DQmW7nsKEMEQuiMY4de5tNeYZLk4sLRFbKuMMTtCnEtG8rS/image.png)

Sorry @pharesim for tagging!
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['Steem price feed - What is going on with bithumb?'](https://steemit.com/@holger80/steem-price-feed-what-is-going-on-with-bithumb)
