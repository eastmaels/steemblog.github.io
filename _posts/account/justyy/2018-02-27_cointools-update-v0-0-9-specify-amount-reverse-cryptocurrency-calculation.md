
---
title: 'CoinTools Update: v0.0.9, Specify Amount + Reverse Cryptocurrency Calculation'
permlink: cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-27 20:20:12
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- cryptocurrency
- programming
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519762588/amigepbgpkqyvvgnbwhi.png
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
- v0.0.8: [CoinTools Update: v0.0.8: Add Coinbase API + Customized History Data](https://helloacm.com/cointools-update-v0-0-8-add-coinbase-api-customized-history-data/)
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

## v0.0.9 Feature
Along with some UI localizations, enhanced error handling, [this version](https://helloacm.com/cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation/) allows users to reverse calculate the cryptocurrency pair and specify the amount in the conversion.

## Screenshots
Specify negative numbers means reverse calculation:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519762588/amigepbgpkqyvvgnbwhi.png)

and you can specify these formats:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519762620/mjcfqkg7spfzuqdbluvo.png)

that will fulfill the equations when APP starts up.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519762661/rqlfq2joyxna8e4szpue.png)

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/f1979edcce38274b4fabfabaa4fa39f7ccdd4261)**

## Javascript Solves Cryptocurrency Equations
The following solves either `x A = ? B` or `? A = x B`.

```
let a = pair[0].trim().toUpperCase();
let b = pair[1].trim().toUpperCase();
let c = pair[2].trim().toUpperCase();
// e.g. 100 BTC SBD
if (isNumeric(a) && isValidSymbol(b) && isValidSymbol(c)) {
    let dom = $('div#conversion_results');
    let dom_id = "cc_" + removeInvalid(a) + "_" + removeInvalid(b) + "_" + removeInvalid(c);
    dom.append('<div id="' + dom_id + '"> </div>');
    getConversion(b, c).then(x => {
        $('div#' + dom_id).html("<h4>" + a + " " + b.toUpperCase() + " = <span class=yellow>" + (x * a) + "</span> " + c.toUpperCase() + "</h4>");
    });
} else if (isNumeric(b) && isValidSymbol(a) && isValidSymbol(c)) {
    // e.g. BTC 100 SBD
    let dom = $('div#conversion_results');
    let dom_id = "cc2_" + removeInvalid(a) + "_" + removeInvalid(b) + "_" + removeInvalid(c);
    dom.append('<div id="' + dom_id + '"> </div>');
    getConversion(a, c).then(x => {
        $('div#' + dom_id).html("<h4>" + (b * 1.0 / x) + " " + a.toUpperCase() + " = <span class=yellow>" + (b) + "</span> " + c.toUpperCase() + "</h4>");
    });
} else {
    logit(get_text('error', "Error") + ": " + a + ", " + b + ", " + c);
}
```

## Roadmap of CoinTools
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: v0.0.9, Specify Amount + Reverse Cryptocurrency Calculation](https://steemit.com/@justyy/cointools-update-v0-0-9-specify-amount-reverse-cryptocurrency-calculation)
