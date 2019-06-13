
---
title: 'CoinTool v0.0.2 - Cryptocurrency Conversion + UI Localization'
permlink: cointool-v0-0-2-cryptocurrency-conversion-ui-localization
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-13 01:51:18
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemtools
- steemstem
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518486378/l1ozv0gsrymmsyest9ev.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
CoinTools is A Chrome Extension that has a few useful tools and graphs for [Cryptocurrency](https://helloacm.com/php-function-to-get-exchange-rate-between-cryptocurrency-btc-ltc-eth-to-fiat-currency/).  

## Previous Contributions
- [v0.0.1 Introduction to CoinTools! A Cryptocurrency Chrome Extension](https://helloacm.com/introduction-to-cointools-a-cryptocurrency-chrome-extension/)

## Technology Stacks
Javascript that runs in Chrome.

## Github
https://github.com/DoctorLai/CoinTools

## Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## v0.0.2 Feature
Along with bug fixes and code refactoring, [this version has the following features](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/):

1. Any two cryptocurrency conversions
2. UI [Localisation](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/) with Simplified Chinese.

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/a291dbb59c5d20b50a5ca078bbeb939e1b9a04e2)**

## Roadmap of CoinTools
1. real-time graphs
2. search cryptocurrency
3. historical data

## Screenshots
You can now select Simplified Chinese from the setting tab.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518486378/l1ozv0gsrymmsyest9ev.png)

UI will be updated to Chinese immediately once you click Save.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518486406/aviwzljaaz9kzf3mkheu.png)

You can enter each line any two crytocurrency separated by a space.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518486443/dnnhnmvd3crxpyo03wps.png)

And when APP is loaded, it will call coinmarkcap API to convert, for example:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518486469/kduefbgrad80fnhxvabh.png)

## Javascript Async and Await to Convert from one coin to another
```
// ajax calling API
const getPriceOfUSD = (coin) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.coinmarketcap.com/v1/ticker/" + coin + '/';
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {
            resolve(result[0].price_usd);
        });        
    });
}

// ajax get conversion
const getConversion = async(coin1, coin2) => {
    let api1 = getPriceOfUSD(coin1);
    let api2 = getPriceOfUSD(coin2);
    return await api1 / await api2;
}

// conversion
const processConversion = (s) => {
    let arr = s.trim().split("\n");
    for (let i = 0; i < arr.length; i ++) {
        let pair = arr[i].split(" ");
        if (pair.length == 2) {
            let a = pair[0].trim().toLowerCase();
            let b = pair[1].trim().toLowerCase();
            var pat = /^[a-zA-Z\-]+$/;
            if (pat.test(a) && pat.test(b)) {
                let dom = $('div#conversion_results');
                let dom_id = "convert_" + a.replace("-", "") + "_" + b.replace("-", "");
                dom.append('<div id="' + dom_id + '"> </div>');
                getConversion(a, b).then(x => {
                    $('div#' + dom_id).html("<h4>1 " + a.toUpperCase() + " = <span class=yellow>" + x + "</span> " + b.toUpperCase() + "</h4>");
                });
            }
        }
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointool-v0-0-2-cryptocurrency-conversion-ui-localization">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTool v0.0.2 - Cryptocurrency Conversion + UI Localization](https://steemit.com/@justyy/cointool-v0-0-2-cryptocurrency-conversion-ui-localization)
