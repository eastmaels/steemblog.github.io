
---
title: 'CoinTools Update: Adding Cryptocompare Source + Context Shortcut'
permlink: cointools-update-adding-cryptocompare-source-context-shortcut
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-25 19:53:36
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemtools
- busy
- programming
thumbnail: https://cdn.utopian.io/posts/3366a0e9e103a2c4c974cb61961faadd1098image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to CoinTools
[CoinTools](https://helloacm.com/cointools-update-enhanced-ux-with-cryptocurrency-search-and-showing-changes/) is a powerful, lightweight Chrome Extension for [Cryptocurrency](https://helloacm.com/cointools-update-adding-cryptocompare-source-context-shortcut/) fans! It can be installed via Chrome Webstore:

https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install CoinTools .

## New Features of CoinTools v0.0.15.1
[This commit](https://github.com/DoctorLai/CoinTools/commit/b67ef5b67bb4b8c2a541e02d1ddc34fef92a1438) adds the following features:
1. Adding Cryptocompare API as a backup source so that it is more robust and supports less popular fiats such as [NGN](https://helloacm.com/cryptocurrency-bots-update-adding-ngn-single-fiat-command/).
2. Add Context Shortcuts for a few useful Cryptocurrency websites.

## Screenshots of CoinTools v0.0.15.1
Single Fiat Command to Local Currency
![image.png](https://cdn.utopian.io/posts/3366a0e9e103a2c4c974cb61961faadd1098image.png)

History Graph from Cryptocompare
![image.png](https://cdn.utopian.io/posts/8169e175a7415506ac1213e549df0cbc9c6bimage.png)

Context Shortcuts
![image.png](https://cdn.utopian.io/posts/2a10e3f80b42602191723b514eff9a3c755fimage.png)

## Robust Cryptocompare
In this version, we have added the cryptocompare source, which is returned as a Javascript Promise.

```
// getting conversion from cryptocompare
const getPriceCC = (a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    let api = "https://min-api.cryptocompare.com/data/price?fsym=" + a + "&tsyms=" + b;
    return new Promise((resolve, reject) => {
        fetch(api, {mode: 'cors'})
        .then(validateResponse)
        .then(readResponseAsJSON)
        .then(function(result) {
            if (result[b]) {
                resolve(result[b]);
            } else {
                reject("invalid pairs: " + a + ", " + b);
            }
        }).catch(function(error) {
            logit(get_text("request_failed", "Request failed") + ': ' + api + ": " + error);
            reject(error);
        });
    });    
}
```

For example, when coinmarketcap fails, the tool will go to cryptocompare:

```
// ajax calling API to return the price of USD for coin
const getPriceOfUSD = (coin) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.coinmarketcap.com/v1/ticker/" + coin + '/';
        fetch(api, {mode: 'cors'})
        .then(validateResponse)
        .then(readResponseAsJSON)
        .then(function(result) {
            if (result[0].price_usd) {
                resolve(result[0].price_usd);
            } else {
                getPriceCC(coin, 'USD').then((res) => {
                    resolve(res);
                }).catch(function(error) {
                    reject(error);
                });
            }
        }).catch(function(error) {
            getPriceCC(coin, 'USD').then((res) => {
                resolve(res);
            }).catch(function(error) {
                logit(get_text("request_failed", "Request failed") + ': ' + api + ": " + error);
                reject(error);
            });            
        });
    });
}
```

## Technology
Javascript that runs in the Chrome Browser (ES6)

## Contribution
Fully Opensource: https://github.com/DoctorLai/CoinTools 
Submit a PR or a issue if you found a bug.

---------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-adding-cryptocompare-source-context-shortcut">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: Adding Cryptocompare Source + Context Shortcut](https://steemit.com/@justyy/cointools-update-adding-cryptocompare-source-context-shortcut)
