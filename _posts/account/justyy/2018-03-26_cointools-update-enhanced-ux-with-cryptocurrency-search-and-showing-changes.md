
---
title: 'CoinTools Update: Enhanced UX with Cryptocurrency Search and Showing Changes!'
permlink: cointools-update-enhanced-ux-with-cryptocurrency-search-and-showing-changes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-26 22:08:42
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- cryptocurrency
- programming
- steemapps
thumbnail: https://cdn.utopian.io/posts/54bd81509b3af1e459d9f314e4df97132e28image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
[CoinTools](https://helloacm.com/cointools-update-enhanced-ux-with-cryptocurrency-search-and-showing-changes/) is a handy gadget to Chrome browser that you can launch easily to view the information of cryptocurrency.

https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## Previous Contributions
- [v0.0.13](https://helloacm.com/cointools-update-showing-top-pairs-of-cryptocurrency/): CoinTools Update: Showing Top Pairs of Cryptocurrency
- [v0.0.12](https://helloacm.com/cointools-update-adding-news-feed-average-series-in-historical-graphs/): CoinTools Update: Adding News Feed, Average Series in Historical Graphs
- [v0.0.11](https://helloacm.com/cointool-update-arbitrary-historical-date-period-amount-conversion-to-local-currency-preserve-historical-graphs/): CoinTool Update: Arbitrary Historical Date Period + Amount Conversion to Local Currency + Preserve Historical Graphs
- [v0.0.9](https://helloacm.com/cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation/): CoinTools Update: v0.0.9, Specify Amount + Reverse Cryptocurrency Calculation
- [v0.0.8](https://helloacm.com/cointools-update-v0-0-8-add-coinbase-api-customized-history-data/): CoinTools Update: v0.0.8: Add Coinbase API + Customized History Data
- [v0.0.7](https://helloacm.com/cointools-historical-conversion-between-any-two-cryptocurrency/): CoinTools: Historical Conversion between Any Two Cryptocurrency
- [v0.0.6](https://helloacm.com/cointools-update-show-full-cryptocurrency-details-by-click-or-startup-add-language-handlers/): CoinTools Update: Show Full Cryptocurrency Details by Click or Startup, Add Language Handlers
- [v0.0.5](https://helloacm.com/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization/): CoinTools v0.0.5: Update: Cryptocurrency Converter Calculator, Support Coin Symbols and Add More Localization
- [v0.0.4](https://helloacm.com/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-total-market-cap-chart/): CoinTools v0.0.4: Conversion Between Two Fiat or Fiat-Coin + 24 Hour Cap Chart
- [v0.0.3](https://helloacm.com/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji/): CoinTools v0.0.3: Adding Total Market Cap USD Chart, Localization and Stock Price Emoji
- [v0.0.2](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/): Cryptocurrency Conversion + UI Localization
- [v0.0.1](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/): Introduction to CoinTools! A Cryptocurrency Chrome Extension

## Technology Stacks
Javascript that runs in Chrome.

## Github
https://github.com/DoctorLai/CoinTools

## Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## v0.0.13 Features
[This commit](https://github.com/DoctorLai/CoinTools/commit/2644c9c699113d9871209a04ff3f4e014550e574) contains:

- Ranking Table: Enhanced UX with CSS improvements over the changes figure.
- Ranking Table: Cryptocurrency Search via Ajax  e.g. Users type and see changes immediately.
- Dashboard: Showing Changes for single Cryptocurrency command.

## Screenshots
Looks professional huh?
![image.png](https://cdn.utopian.io/posts/54bd81509b3af1e459d9f314e4df97132e28image.png)

Search Bar allows you to type in coin and searches will be done immediately as you type.
![image.png](https://cdn.utopian.io/posts/51ab9e368cfed9e63ce3cb2a5adef385e42bimage.png)

## How to Implement Search Function?
Change the function declaration to the following with default parameters so it does not break existing features:
```
const getRankingTable = (currency, dom, keyword = "", limit = 200)
```

When `keyword` is set, we then need to fetch API results with limit = unlimited. The key point here is to retrieve all cryptocurrencies (currently more than 1000) and do a search filtering locally (not on server).

```
if (keyword.length > 0) { // if a search keyword is given
    let id = result[i]['id'].toLowerCase();
    let name = result[i]['name'].toLowerCase();
    let symbol = result[i]['symbol'].toLowerCase();
    if (!(id.includes(keyword) || name.includes(keyword) || symbol.includes(keyword) )) {
        continue;   // filter out unmatched coins.
    }
}
```

## Roadmap of CoinTools
Any good suggestions, please shout at @justyy. I am so proud of this update, and probably this tool will no longer be updated for some time (because I don't know what to add now) 

## License
[MIT](https://github.com/DoctorLai/CoinTools/blob/master/LICENSE)

## Contribution Welcome
Github: https://github.com/DoctorLai/CoinTools/

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## Chrome Webstore
Install the [CoinTools](https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj) Now!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-enhanced-ux-with-cryptocurrency-search-and-showing-changes">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: Enhanced UX with Cryptocurrency Search and Showing Changes!](https://steemit.com/@justyy/cointools-update-enhanced-ux-with-cryptocurrency-search-and-showing-changes)
