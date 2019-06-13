
---
title: 'CoinTools v0.0.4:  Conversion Between Two Fiat or Fiat-Coin + 24 Hour Cap Chart'
permlink: cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-cap-chart
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-17 00:11:30
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemtools
- steemstem
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518826125/ilsfcwmvu0uxkgnobsqq.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
CoinTools is a handy gadget to Chrome browser that you can launch easily to view the information of cryptocurrency. 

## Previous Contributions
- [CoinTools v0.0.3: Adding Total Market Cap USD Chart, Localization and Stock Price Emoji](https://helloacm.com/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji/)
- [v0.0.2 Cryptocurrency Conversion + UI Localization](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/)
- [v0.0.1 Introduction to CoinTools! A Cryptocurrency Chrome Extension](https://helloacm.com/introduction-to-cointools-a-cryptocurrency-chrome-extension/)

## Technology Stacks
Javascript that runs in [Chrome](https://helloacm.com/how-to-enable-inline-chrome-extension-installation-in-chrome-browser/).

## Github
https://github.com/DoctorLai/CoinTools

## Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## v0.0.4 Feature
Along with bug fixes, minor tweaks and code refactoring, [this version](https://helloacm.com/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-total-market-cap-chart/) has the following features:

1. Total market cap USD in 24 hours
2. Conversion between two FIAT currencies
3. Conversion between FIAT and cryptocurrency
4. Ranking table changed from 100 to 200.

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/bc826ae7e8de366c985aa6e0cd51f7f717ff9f54)**

## Roadmap of CoinTools
1. real-time graphs
2. search cryptocurrency
3. historical data

## Screenshots
24 Hour Total Market Cap USD Pie Chart:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518826125/ilsfcwmvu0uxkgnobsqq.png)

You can now specify the FIAT currency
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518826147/vwucqpa1hxtetfc2wozh.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518826180/edwh2b9iuqchorpaynbm.png)

# Javascript 
To convert between two FIAT is done via 1 BTC.
```
// ajax calling API to return the price of USD for coin
const getPriceOfUSD = (coin) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.coinmarketcap.com/v1/ticker/" + coin + '/';
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {
            resolve(result[0].price_usd);
        }).catch(function(error) {
            logit('Request failed: ' + api + ": " + error);
            reject(error);
        });
    });
}

// ajax calling API to return the price of currency for 1 BTC
const getPriceOf1BTC = (currency) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=" + currency.toUpperCase();
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {            
            resolve(result[0]['price_' + currency.toLowerCase()]);
        }).catch(function(error) {
            logit('Request failed: ' + api + ": " + error);
            reject(error);
        });
    });
}

// ajax calling API to return the price of USD for coin
const getPriceOf = (coin, fiat) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.coinmarketcap.com/v1/ticker/" + coin + '/?convert=' + fiat.toUpperCase();
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {
            resolve(result[0]['price_' + fiat.toLowerCase()]);
        }).catch(function(error) {
            logit('Request failed: ' + api + ": " + error);
            reject(error);
        });
    });
}

// ajax get conversion
const getConversion = async(coin1, coin2) => {
    // determine if input is coin or currency
    let is_coin1 = !currency_array.includes(coin1.toUpperCase());
    let is_coin2 = !currency_array.includes(coin2.toUpperCase());
    // both are coins
    if ((is_coin1) && (is_coin2)) {
        let api1 = getPriceOfUSD(coin1);
        let api2 = getPriceOfUSD(coin2);
        return await api1 / await api2;
    }
    // both are currencies e.g. USD to CNY
    if ((!is_coin1) && (!is_coin2)) {
        let api1 = getPriceOf1BTC(coin1);
        let api2 = getPriceOf1BTC(coin2);
        return await api2 / await api1;
    }
    // converting coin1 to fiat coin2
    if (is_coin1) {
        return await getPriceOf(coin1, coin2);
    } else { // convert coin2 to fiat coin1
        return 1.0/await getPriceOf(coin2, coin1);
    }
}
```

# License
[MIT](https://github.com/DoctorLai/CoinTools/blob/master/LICENSE)

# Contribution Welcome
Github: https://github.com/DoctorLai/CoinTools/
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

# Chrome Webstore
Install the [CoinTools](https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj) Now!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-cap-chart">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools v0.0.4:  Conversion Between Two Fiat or Fiat-Coin + 24 Hour Cap Chart](https://steemit.com/@justyy/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-cap-chart)
