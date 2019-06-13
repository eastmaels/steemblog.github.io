
---
title: 'CoinTools Update: v0.0.8: Add Coinbase API + Customized History Data'
permlink: cointools-update-v0-0-8-add-coinbase-api-customized-history-data
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-25 20:22:06
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemstem
- steemtools
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519589881/alxqzrffcqthxzvtjx7z.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
[CoinTools](https://helloacm.com/cointools-update-v0-0-8-add-coinbase-api-customized-history-data/) is a handy gadget to Chrome browser that you can launch easily to view the information of cryptocurrency. 

## Previous Contributions
- v0.0.7: [CoinTools: Historical Conversion between Any Two Cryptocurrency](https://helloacm.com/cointools-historical-conversion-between-any-two-cryptocurrency/)
- v0.0.6: [CoinTools Update: Show Full Cryptocurrency Details by Click or Startup, Add Language Handlers](https://helloacm.com/cointools-update-show-full-cryptocurrency-details-by-click-or-startup-add-language-handlers/)
- [CoinTools v0.0.5: Update: Cryptocurrency Converter Calculator, Support Coin Symbols and Add More Localization](https://helloacm.com/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization/)
- [CoinTools v0.0.4:  Conversion Between Two Fiat or Fiat-Coin + 24 Hour Cap Chart](https://helloacm.com/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-total-market-cap-chart/)
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

## v0.0.8 Feature
This version adds the following features:

1. Add Coinbase API to convert from FIAT to FIAT.
2. Customize Period of History Data
3. Adds Russian UI translation.
4. Support single FIAT command

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519589881/alxqzrffcqthxzvtjx7z.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519589888/df26xbvfnuhv7tmw4ihw.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519589903/ejyxsywfdwuay2ga6ynj.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519589917/dozbzeohwmqachdc0drv.png)

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/cf934731eb07841016820a269b25ab275ff56247)** and [here](https://github.com/DoctorLai/CoinTools/commit/972e564ad8488cff25b3099daaf6d65529050070)

## Roadmap of CoinTools
Any good suggestions, please shout at @justyy.

# Coinbase API
Get Exchange Rate from two Fiats.
```
// ajax calling coinbase to return fiat conversion
const getPriceOf_Coinbase_Fiat = (a, b) => {
    return new Promise((resolve, reject) => {
        let api = 'https://api.coinbase.com/v2/exchange-rates/?currency=' + a.toUpperCase();
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {
            let data = result.data.rates;
            resolve(data[b.toUpperCase()]);
        }).catch(function(error) {
            logit('Request failed: ' + api + ": " + error);
            reject(error);
        });
    });
}
```

Then, you can use it:

```
    // both are currencies e.g. USD to CNY
    if ((!is_coin1) && (!is_coin2)) {
        try {
            return await getPriceOf_Coinbase_Fiat(coin1, coin2);
        } catch (e) { // if anything goes wrong with above coinbase, then use coinmarkecap (two API calls)
            let api1 = getPriceOf1BTC(coin1);        
            let api2 = getPriceOf1BTC(coin2);
            return await api2 / await api1;
        }
    }
```

If anything goes wrong with above coinbase, then use coinmarkecap (two API calls)

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-v0-0-8-add-coinbase-api-customized-history-data">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: v0.0.8: Add Coinbase API + Customized History Data](https://steemit.com/@justyy/cointools-update-v0-0-8-add-coinbase-api-customized-history-data)
