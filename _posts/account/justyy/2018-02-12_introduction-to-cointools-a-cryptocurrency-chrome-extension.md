
---
title: 'Introduction to CoinTools! A Cryptocurrency Chrome Extension'
permlink: introduction-to-cointools-a-cryptocurrency-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-12 02:19:00
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- chrome-extension
- software
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518401222/mmhutfxvijmcrwwf2nm6.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction
CoinTools is A Chrome Extension that has a few useful tools and graphs for Cryptocurrency.  When is a good time to convert your STEEM or SBD to BTC and then Fiat? I always ask myself this question. One easy method is to use BTC or any fiat currency of your interests, observe the exchange rate e.g. 1 BTC = ? STEEM and make a decision when the exchange rate is at satisfaction, i.e. 1 BTC = 2000 [STEEM](https://helloacm.com/steemtools-v0-0-5-reveal-deleted-comments-load-save-steem-js/) is better than 1 BTC = 1500 STEEM if you are holding STEEMs, because you need fewer STEEMs to convert to 1 BTC, which is in your favor.

## Motivation
[Chrome Extension](https://helloacm.com/utopian-chrome-extension-v0-0-9-integrate-stats-api-add-node-list/) is a good entry point since a lot of users use Chrome heavily every day. I need a tool that can give me a quick rate as discussed in the introduction. Therefore, I have developed `CoinTools`  - Thee Chrome Extension of Cryptocurrency.

## Technology Stacks
Javascript that runs in Chrome.

## Github
https://github.com/DoctorLai/CoinTools

## Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## v0.0.1 Feature
[The first version](https://helloacm.com/introduction-to-cointools-a-cryptocurrency-chrome-extension/) has the following features:

1. Global Data
2. Ranking Table of Top 100 Coins
3. Select your local currency
4. Log tab

## Roadmap of CoinTools
1. Easy conversion between any two coins or currency
2. Localisation
3. Realtime Graphs

## Screenshots
General Tab shows a few global statistics.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518401222/mmhutfxvijmcrwwf2nm6.png)

Top 100 coins
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518401235/hxjqxksg2xlqhbbukrtq.png)

Select your preferred currency (FIAT)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518401242/o1yxv4l17mzmmjjlxbyo.png)

Log tab.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518401249/ruwhw0zcvugqdmb5ywg8.png)

## Javascript code that connects the CoinMarketCap API
Ajax [Javascript](https://helloacm.com/steemit-javascript-function-to-get-original-post-from-comments-permlink/) code that calls CoinMarketCap API.

```
// general data from coinmarkcap
const getGeneralData = (currency, dom) => {
    let currency_upper = currency.toUpperCase();
    let currency_lower = currency.toLowerCase();
    let api = "https://api.coinmarketcap.com/v1/global/";
    if (currency != '') {
        api += "?convert=" + currency_upper;
    }
    logit("calling " + api);
    $.ajax({
        type: "GET",
        url: api,
        success: function(result) {
            let s = '';
            s += '<table>';
            s += '<tr>';
            s += '<td>Total Market Cap USD</td>';
            s += '<td>' + result['total_market_cap_usd'] + '</td>';
            s += '</tr>';
            s += '<tr>';
            s += '<td>Total 24 Hour Volumn USD</td>';
            s += '<td>' + result['total_24h_volume_usd'] + '</td>';
            s += '</tr>';
            s += '<tr>';
            s += '<td>Bitcoin Percentage of Market Cap</td>';
            s += '<td>' + result['bitcoin_percentage_of_market_cap'] + '%</td>';
            s += '</tr>';
            s += '<tr>';
            s += '<td>Active Currencies</td>';
            s += '<td>' + result['active_currencies'] + '</td>';
            s += '</tr>';
            s += '<tr>';
            s += '<td>Active Assets</td>';
            s += '<td>' + result['active_assets'] + '</td>';
            s += '</tr>';
            s += '<tr>';
            s += '<td>Active Markets</td>';
            s += '<td>' + result['active_markets'] + '</td>';
            s += '</tr>';
            s += '<tr>';
            let key1 = "total_market_cap_" + currency_lower;
            if (key1 in result) {
                s += '<tr>';
                s += '<td>Total Market Cap ' + currency_upper + '</td>';
                s += '<td>' + result[key1] + '</td>';
                s += '</tr>';
                s += '<tr>';
            }
            let key2 = "total_24h_volume_" + currency_lower;
            if (key2 in result) {
                s += '<tr>';
                s += '<td>Total 24 Hour Volumn ' + currency_upper + '</td>';
                s += '<td>' + result[key2] + '</td>';
                s += '</tr>';
                s += '<tr>';
            }
            s += '<td>Last Updated</td>';
            s += '<td>' + timestampToString(result['last_updated']) + '</td>';
            s += '</tr>';            
            s += '</table>';
            dom.html(s);
        },
        error: function(request, status, error) {
            logit('Response: ' + request.responseText);
            logit('Error: ' + error );
            logit('Status: ' + status);
        },
        complete: function(data) {
            logit("API Finished: " + api);
        }             
    }); 
}

// get ranking table from coinmarketcap
const getRankingTable = (currency, dom, limit = 100) => {
    let currency_upper = currency.toUpperCase();
    let currency_lower = currency.toLowerCase();
    let api = "https://api.coinmarketcap.com/v1/ticker/?limit=" + limit;
    if (currency != '') {
        api += "&convert=" + currency_upper;
    }
    logit("calling " + api);
    dom.html('<img src="images/loading.gif" />');
    $.ajax({
        type: "GET",
        url: api,
        success: function(result) {
            let s = '';
            s += '<table id="ranking" class="sortable">';
            s += '<thead><tr>';
            s += '<th class=sorttable_sorted>Coin</th>';
            s += '<th>Price USD</th>';
            s += '<th>Price BTC</th>';
            s += '<th>Change 1 Hours</th>';
            s += '<th>Change 24 Hours</th>';
            s += '<th>Change 7 Days</th>';
            s += '<th>Last Updated</th>';
            s += '</tr></thead><tbody>';            
            for (let i = 0; i < result.length; i ++) {
                s += '<tr>';
                s += '<td>' + result[i]['name'] + ' (' + result[i]['symbol'] + ')</td>';
                s += '<td>' + result[i]['price_usd'] + '</td>';
                s += '<td>' + result[i]['price_btc'] + '</td>';
                s += '<td>' + result[i]['percent_change_1h'] + '</td>';
                s += '<td>' + result[i]['percent_change_24h'] + '</td>';
                s += '<td>' + result[i]['percent_change_7d'] + '</td>';
                s += '<td>' + timestampToString(result[i]['last_updated']) + '</td>';
                s += '</tr>';
            }
            s += '</tbody>';
            s += '</table>';
            dom.html(s);
            sorttable.makeSortable(document.getElementById("ranking"));
        },
        error: function(request, status, error) {
            logit('Response: ' + request.responseText);
            logit('Error: ' + error );
            logit('Status: ' + status);
        },
        complete: function(data) {
            logit("API Finished: " + api);
        }             
    }); 
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/introduction-to-cointools-a-cryptocurrency-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Introduction to CoinTools! A Cryptocurrency Chrome Extension](https://steemit.com/@justyy/introduction-to-cointools-a-cryptocurrency-chrome-extension)
