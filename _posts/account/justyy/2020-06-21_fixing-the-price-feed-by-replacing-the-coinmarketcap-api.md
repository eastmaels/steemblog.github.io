
---
title: 'Fixing the Price Feed by Replacing the Coinmarketcap API'
permlink: fixing-the-price-feed-by-replacing-the-coinmarketcap-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-21 11:01:51
categories:
- witness-category
tags:
- witness-category
- witness-tools
- whalepower
- steem-dev
- steem-tools
- codeonsteem
- programming
thumbnail: 'https://cdn.steemitimages.com/DQmXAJD2d3j1iSDgeuGDzjF9TBQsJurhfgfDoc7hBHW6831/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you might know, the coinmarketcap doesn't provide the free APIs anymore.. and recently I found out the pricefeed throws exception due to this:

```
40|feed    | Sun Jun 21 2020 09:58:22 GMT+0000 (Coordinated Universal Time) - Error loading STEEM price from Bittrex: TypeError: Cannot read property 'price_usd' of undefined
40|feed    | Sun Jun 21 2020 09:58:32 GMT+0000 (Coordinated Universal Time) - Error loading STEEM price from Bittrex: TypeError: Cannot read property 'price_usd' of undefined
40|feed    | Sun Jun 21 2020 09:58:41 GMT+0000 (Coordinated Universal Time) - Broadcasting feed_publish transaction: {"base":"0.209 SBD","quote":"1.000 STEEM"}
```

I took a look, and found out it is because of the following code:
https://github.com/MattyIce/pricefeed/blob/master/feed.js#L89


```
function loadPriceBittrex(callback, retries) {
  // Load STEEM price in BTC from bittrex and convert that to USD using BTC price in coinmarketcap
  request.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/', function (e, r, data) {
    request.get('https://bittrex.com/api/v1.1/public/getticker?market=BTC-STEEM', function (e, r, btc_data) {
      try {
        steem_price = parseFloat(JSON.parse(data)[0].price_usd) * parseFloat(JSON.parse(btc_data).result.Last);
        log('Loaded STEEM Price from Bittrex: ' + steem_price);

        if (callback)
          callback(steem_price);
      } catch (err) {
        log('Error loading STEEM price from Bittrex: ' + err);

        if(retries < 2)
          setTimeout(function () { loadPriceBittrex(callback, retries + 1); }, 10 * 1000);
      }
    });
  });
}
```

One easy fix is to use a different API end point to get the BTC ticker, like this: https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC

And thus, I am creating a PR:  https://github.com/MattyIce/pricefeed/pull/5/files

![image.png](https://cdn.steemitimages.com/DQmXAJD2d3j1iSDgeuGDzjF9TBQsJurhfgfDoc7hBHW6831/image.png)

The STEEM price is calculated based on two prices:  BTC-USDT and BTC-STEEM (Simple Math isn't it?)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Fixing the Price Feed by Replacing the Coinmarketcap API'](https://steemit.com/@justyy/fixing-the-price-feed-by-replacing-the-coinmarketcap-api)
