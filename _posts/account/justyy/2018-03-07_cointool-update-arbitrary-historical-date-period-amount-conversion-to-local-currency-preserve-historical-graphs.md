
---
title: 'CoinTool Update: Arbitrary Historical Date Period + Amount Conversion to Local Currency + Preserve Historical Graphs'
permlink: cointool-update-arbitrary-historical-date-period-amount-conversion-to-local-currency-preserve-historical-graphs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-07 00:03:39
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- cryptocurrency
- programming
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520377994/myvqkh9fhaocc8to7bbr.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introduction
[CoinTools](https://helloacm.com/cointool-update-arbitrary-historical-date-period-amount-conversion-to-local-currency-preserve-historical-graphs/) is a handy gadget to Chrome browser that you can launch easily to view the information of cryptocurrency.

https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

# Previous Contributions
- [v0.0.9](https://helloacm.com/cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation/): CoinTools Update: v0.0.9, Specify Amount + Reverse Cryptocurrency Calculation
- [v0.0.8](https://helloacm.com/cointools-update-v0-0-8-add-coinbase-api-customized-history-data/): CoinTools Update: v0.0.8: Add Coinbase API + Customized History Data
- [v0.0.7](https://helloacm.com/cointools-historical-conversion-between-any-two-cryptocurrency/): CoinTools: Historical Conversion between Any Two Cryptocurrency
- [v0.0.6](https://helloacm.com/cointools-update-show-full-cryptocurrency-details-by-click-or-startup-add-language-handlers/): CoinTools Update: Show Full Cryptocurrency Details by Click or Startup, Add Language Handlers
- [v0.0.5](https://helloacm.com/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization/): CoinTools v0.0.5: Update: Cryptocurrency Converter Calculator, Support Coin Symbols and Add More Localization
- [v0.0.4](https://helloacm.com/cointools-v0-0-4-conversion-between-two-fiat-or-fiat-coin-24-hour-total-market-cap-chart/): CoinTools v0.0.4: Conversion Between Two Fiat or Fiat-Coin + 24 Hour Cap Chart
- [v0.0.3](https://helloacm.com/cointools-v0-0-3-adding-total-market-cap-usd-chart-localization-and-stock-price-emoji/): CoinTools v0.0.3: Adding Total Market Cap USD Chart, Localization and Stock Price Emoji
- [v0.0.2](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/): Cryptocurrency Conversion + UI Localization
- [v0.0.1](https://helloacm.com/cointool-v0-0-2-cryptocurrency-conversion-ui-localization/):  Introduction to CoinTools! A Cryptocurrency Chrome Extension

# Technology Stacks
Javascript that runs in [Chrome](https://helloacm.com/how-to-enable-inline-chrome-extension-installation-in-chrome-browser/).

# Github
https://github.com/DoctorLai/CoinTools

# Chrome Webstore
It is available online at Chrome Webstore:
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

# v0.0.11 Feature
[This commit](https://github.com/DoctorLai/CoinTools/commit/4681826ca5c72b36e304a6349c372c5fa7ab98a5) contains:

- Bug fixed in historical graph when users enter lowercase symbol the graphs doesn't show which is caused to external API that does not like lowercase symbols.
- Historical Graphs are now preserved in the reserved order (like a stack) and you can clear the graphs by clicking the button.
- You can specify the format like `100 SBD` that will be converted to your local currency and `BTC`
- The users now can enter arbitrary number of days in the historical tab. Also, if a number is less than 3 days, the API of minute will be called. If it is between 3 to 7, then API of hour will be called otherwise API of day will be used.
- Code Refactoring e.g. the random_id is provided to improve the code robustness.

## Screenshots of CoinTool
New format is supported (easy to use)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520377994/myvqkh9fhaocc8to7bbr.png)

Conversions are done on the fly.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520378007/kyyzsvstjds9vof5oexe.png)

Graphs are pushed to the bottom and you can clear the tab via `Clear` Button.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520378087/mvijyyc1as0rymckqktq.png)

# Javascript code that deals with the new format
```
if (pair.length == 2) {
    let a = pair[0].trim().toUpperCase();
    let b = pair[1].trim().toUpperCase();
    if (isNumeric(a)) {
        if (isValidSymbol(b)) {
            let dom = $('div#conversion_results');
            let dom_id = "convert" + random_id();
            dom.append('<div id="' + dom_id + '"> </div>');
            getConversion(b, "BTC").then(x => {
                $('div#' + dom_id).html("<h4>" + a + " " + b +  " = <span class=yellow>" + (x * a) + "</span> " + "BTC" + "</h4>");
            });                    
            if (local_currency != '') {
                let dom = $('div#conversion_results');
                let dom_id = "convert" + random_id();
                dom.append('<div id="' + dom_id + '"> </div>');
                getConversion(b, local_currency).then(x => {
                    $('div#' + dom_id).html("<h4>" + a + " " + b +  " = <span class=yellow>" + (x * a) + "</span> " + local_currency + "</h4>");
                });                                            
            }
        }
    }
}
```

# Roadmap of CoinTools
Any good suggestions, please shout at @justyy.

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointool-update-arbitrary-historical-date-period-amount-conversion-to-local-currency-preserve-historical-graphs">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTool Update: Arbitrary Historical Date Period + Amount Conversion to Local Currency + Preserve Historical Graphs](https://steemit.com/@justyy/cointool-update-arbitrary-historical-date-period-amount-conversion-to-local-currency-preserve-historical-graphs)
