
---
title: 'CoinTools: Historical Conversion between Any Two Cryptocurrency'
permlink: cointools-historical-conversion-between-any-two-cryptocurrency
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-24 00:04:00
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemstem
- steemtools
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519430405/k4lutep1rxy0offpr1pv.png
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

## v0.0.7 Feature
Along with some added language translation, [this version](https://helloacm.com/cointools-historical-conversion-between-any-two-cryptocurrency/) adds the tab of History Data so that you can view 30 days historical conversion between any two cryptocurrency or fiat currency.

History conversion between cryptocurrency and cryptocurrency
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519430405/k4lutep1rxy0offpr1pv.png)

History conversion between fiat and fiat
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519430500/zv5ty2dkvnshhay3ancg.png)

History conversion between cryptocurrency  and fiat
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519430529/oln5v83q8pdxfslivar5.png)

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/717f6634f5af428f4502735210433fb7023f1672)**

## Roadmap of CoinTools
1. real-time graphs
2. search cryptocurrency
3. historical data

# Javascript to handle conversion
```
// get history
const getHistory = (a, b, dom) => {
    let api = "https://min-api.cryptocompare.com/data/histoday?fsym=" + a + "&tsym=" + b + "&limit=30&e=CCCAGG";
    logit("calling " + api);
    dom.html('<img src="images/loading.gif" />');
    $.ajax({
        type: "GET",
        url: api,
        success: function(data) {
            if (data && data.Data && data.Response == 'Success') {
                let data_open = [];
                let data_close = [];
                let data_high = [];
                let data_low = [];
                let arr = data.Data;
                let datalen = arr.length;
                for (let i = 0; i < datalen; ++ i) {
                    let date = new Date(arr[i].time * 1000);
                    data_open.push({x: date, y: arr[i].open});
                    data_close.push({x: date, y: arr[i].close});
                    data_high.push({x: date, y: arr[i].high});
                    data_low.push({x: date, y: arr[i].low});
                }
                let chart = new CanvasJS.Chart("chartContainer", {
                    title:{
                        text: a + " => " + b
                    },
                    axisY:[{
                        title: b,
                        lineColor: "#C24642",
                        tickColor: "#C24642",
                        labelFontColor: "#C24642",
                        titleFontColor: "#C24642",
                        suffix: ""
                    }],
                    toolTip: {
                        shared: true
                    },
                    legend: {
                        cursor: "pointer",
                        itemclick: function(e) {
                            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                e.dataSeries.visible = false;
                            } else {
                                e.dataSeries.visible = true;
                            }
                            e.chart.render();
                        }           
                    },
                    data: [{
                        type: "line",
                        name: "Open",
                        color: "#369EAD",
                        showInLegend: true,
                        axisYIndex: 1,
                        dataPoints: data_open
                    },
                    {
                        type: "line",
                        name: "Close",
                        color: "#C24642",
                        axisYIndex: 0,
                        showInLegend: true,
                        dataPoints: data_close
                    },
                    {
                        type: "line",
                        name: "Low",
                        color: "blue",
                        axisYIndex: 0,
                        showInLegend: true,
                        dataPoints: data_low
                    },                    
                    {
                        type: "line",
                        name: "High",
                        color: "#7F6084",
                        axisYType: "secondary",
                        showInLegend: true,
                        dataPoints: data_high
                    }]
                });
                chart.render();
            }
        },
        error: function(request, status, error) {
            logit('Response: ' + request.responseText);
            logit('Error: ' + error );
            logit('Status: ' + status);
            dom.html("");
        },
        complete: function(data) {
            logit(get_text("api_finished", "API Finished") + ": " + api);
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-historical-conversion-between-any-two-cryptocurrency">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools: Historical Conversion between Any Two Cryptocurrency](https://steemit.com/@justyy/cointools-historical-conversion-between-any-two-cryptocurrency)
