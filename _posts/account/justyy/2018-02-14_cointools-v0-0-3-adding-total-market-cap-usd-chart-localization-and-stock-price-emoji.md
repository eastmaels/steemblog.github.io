
---
title: 'CoinTools v0.0.3: Adding Total Market Cap USD Chart, Localization and Stock Price Emoji'
permlink: cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-14 19:40:57
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemtools
- steemstem
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518637136/f1hgpu2n3vwcrzcov1ca.png
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
- [v0.0.2 Cryptocurrency Conversion + UI Localization](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/)
- [v0.0.1 Introduction to CoinTools! A Cryptocurrency Chrome Extension](https://helloacm.com/introduction-to-cointools-a-cryptocurrency-chrome-extension/)

## Technology Stacks
Javascript that runs in [Chrome](https://helloacm.com/how-to-enable-inline-chrome-extension-installation-in-chrome-browser/).

## Github
https://github.com/DoctorLai/CoinTools

## Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## v0.0.3 Feature
Along with bug fixes and code refactoring, [this version](https://helloacm.com/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji/) has the following features:

1. Total market Cap USD Chart.
2. Localization for Ranking Table
3. Stock Price Emoji

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/48dda9eecd4a3bbbed17fc8ec2978c7b14f6c20d)**

## Roadmap of CoinTools
1. real-time graphs
2. search cryptocurrency
3. historical data

## Screenshots
Localization and Emoji
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518637136/f1hgpu2n3vwcrzcov1ca.png)

Total Market Cap USD Pie Chart:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518637157/of5bvmvisj23bndt8pve.png)

# Javascript calling CoinMarketCap API
```
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
    var up_or_down_img = function(x) {
        if (x >= 0) {
            return "📈" + x;
        } else {
            return "📉" + x;
        }
    }
    $.ajax({
        type: "GET",
        url: api,
        success: function(result) {
            let s = '';
            s += '<table id="ranking" class="sortable">';
            s += '<thead><tr>';
            s += '<th class=sorttable_sorted>' + get_text('coin', 'Coin') + '</th>';
            s += '<th>' + get_text('price_usd', 'Price USD') + '</th>';
            s += '<th>' + get_text('price_btc', 'Price BTC') + '</th>';
            s += '<th>' + get_text('change_1hr', 'Change 1 Hours') + '</th>';
            s += '<th>' + get_text('change_24hr', 'Change 24 Hours') + '</th>';
            s += '<th>' + get_text('change_7days', 'Change 7 Days') + '</th>';
            s += '<th>' + get_text('last_updated', 'Last Updated') + '</th>';
            s += '</tr></thead><tbody>';            
            for (let i = 0; i < result.length; i ++) {
                s += '<tr>';
                s += '<td>' + result[i]['name'] + ' (' + result[i]['symbol'] + ')</td>';
                s += '<td>' + result[i]['price_usd'] + '</td>';
                s += '<td>' + result[i]['price_btc'] + '</td>';
                s += '<td>' + up_or_down_img(result[i]['percent_change_1h']) + '</td>';
                s += '<td>' + up_or_down_img(result[i]['percent_change_24h']) + '</td>';
                s += '<td>' + up_or_down_img(result[i]['percent_change_7d']) + '</td>';
                s += '<td>' + timestampToString(result[i]['last_updated']) + '</td>';
                s += '</tr>';
            }
            s += '</tbody>';
            s += '</table>';
            dom.html(s);
            sorttable.makeSortable(document.getElementById("ranking"));
            // chart
            let data = [];
            let total = 0;
            for (let i = 0; i < Math.min(15, result.length); i ++) {
                data.push({'coin': result[i]['name'], 'market_cap_usd': result[i]['market_cap_usd']});
                total += parseInt(result[i]['market_cap_usd']);
            }
            api = "https://api.coinmarketcap.com/v1/global/";
            $.ajax({
                type: "GET",
                url: api,
                success: function(result) {       
                    let total_usd = parseInt(result.total_market_cap_usd);
                    let others = total_usd - total;
                    data.push({'coin': 'Others', 'market_cap_usd': others});
                    let chart = AmCharts.makeChart( "chart_div", {
                        "type": "pie",
                        "theme": "light",
                        "dataProvider": data,
                        "startDuration": 0,
                        "valueField": "market_cap_usd",
                        "titleField": "coin",
                        "balloon":{
                          "fixedPosition": true
                        },
                        "export": {
                          "enabled": false
                        }
                    });                      
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools v0.0.3: Adding Total Market Cap USD Chart, Localization and Stock Price Emoji](https://steemit.com/@justyy/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji)
