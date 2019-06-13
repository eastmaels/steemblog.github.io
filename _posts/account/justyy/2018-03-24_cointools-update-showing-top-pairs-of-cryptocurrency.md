
---
title: 'CoinTools Update: Showing Top Pairs of Cryptocurrency'
permlink: cointools-update-showing-top-pairs-of-cryptocurrency
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-24 01:47:27
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- cryptocurrency
- programming
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1521855938/wlqdmhzvts3y6d39xfub.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
[CoinTools](https://helloacm.com/cointools-update-showing-top-pairs-of-cryptocurrency/) is a handy gadget to Chrome browser that you can launch easily to view the information of cryptocurrency.

https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## Previous Contributions
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
[This commit](https://github.com/DoctorLai/CoinTools/commit/b1bc31c11c5553eb297c00ee68ae66a77617653c) contains:

- Top Pairs of Cyrptocurrency (New Tab)
- UI Translations: Filipino and Romanian 
- Fix DOM in History Tab

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521855938/wlqdmhzvts3y6d39xfub.png)


## Javascript: Getting Cryptocurrency Pairs
```
// get top pairs
const getPairs = (a, dom, dom2) => {
    a = a.toUpperCase().trim();
    // if not valid pairs are given, then quit
    if (!isCoin(a)) {
        return;
    }
    let api = "https://min-api.cryptocompare.com/data/top/pairs?fsym=" + a + "&limit=100";
    logit(get_text("calling", "calling") + " " + api);
    dom.html('<img src="images/loading.gif" />');
    $.ajax({
        type: "GET",
        url: api,
        success: function(data) {
            if (data && data.Data && data.Response == 'Success') {
                let s = '';
                let date = new Date();
                let div_id = "pairs_div_" + date.toISOString().replace('-', '').replace(':', '').replace('.', '');
                s += '<table id="' + div_id + '" class="sortable">';
                s += '<thead><tr>';
                s += '<th>' + get_text('exchange_center', 'Exchange') + '</th>';
                s += '<th>' + get_text('cryptocurrency', 'Cryptocurrency') + '</th>';
                s += '<th>' + get_text('volume24h', 'Volume 24 Hrs') + '</th>';
                s += '<th>' + get_text('symbol', 'Symbol') + '</th>';
                s += '<th>' + get_text('volume24h', 'Volume 24 Hrs') + '</th>';
                s += '</tr></thead><tbody>';        
                let result = data.Data;    
                for (let i = 0; i < result.length; i ++) {
                    s += '<tr>';
                    s += '<td>' + result[i]['exchange'] + '</td>';
                    s += '<td>' + result[i]['fromSymbol'] + '</td>';
                    s += '<td>' + result[i]['volume24h'].toFixed(3) + '</td>';
                    s += '<td>' + result[i]['toSymbol'] + '</td>';
                    s += '<td>' + result[i]['volume24hTo'].toFixed(3) + '</td>';                                       
                    s += '</tr>';
                }
                s += '</tbody>';
                s += '</table><BR/>';      
                dom2.prepend(s);
                sorttable.makeSortable(document.getElementById(div_id));
            } 
        },
        error: function(request, status, error) {
            logit(get_text('response', 'Response') + ': ' + request.responseText);
            logit(get_text('error', 'Error') + ': ' + error );
            logit(get_text('status', 'Status') + ': ' + status);            
        },
        complete: function(data) {
            logit(get_text("api_finished", "API Finished") + ": " + api);
            dom.html("");
        }             
    });     
}
```
## Roadmap of CoinTools
Any good suggestions, please shout at @justyy.

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-showing-top-pairs-of-cryptocurrency">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: Showing Top Pairs of Cryptocurrency](https://steemit.com/@justyy/cointools-update-showing-top-pairs-of-cryptocurrency)
