
---
title: 'CoinTools Update: Cryptocurrency Converter Calculator, Support Coin Symbols and Add More Localization'
permlink: cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-19 23:29:06
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- steemtools
- steemstem
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519082707/pqqb6siotbjhh8y13efz.png
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

## v0.0.5 Feature
Along with bug fixes, minor tweaks and code refactoring, [v0.0.5](https://helloacm.com/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization/) has the following updates:

1. Support Symbols instead of ID  so you can use BTC instead of bitcoin, BCH instead of bitcoin-cash.
2. Add Cryptocurrency Converter Calculator
3. Translate some UI texts (localization)

## Commits
**[Here](https://github.com/DoctorLai/CoinTools/commit/59a436bb0fef7f3f7ab2b957f882055f71d658f3)**

## Roadmap of CoinTools
1. real-time graphs
2. search cryptocurrency
3. historical data

## Screenshots
Advance Cryptocurrency Converter Calculator: Converts between FIAT to FIAT, FIAT/Cryptocurrency  or Cryptocurrency  to Cryptocurrency.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519082707/pqqb6siotbjhh8y13efz.png)

Shorter symbols can be used rather than full IDs.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519082901/pmzjqcdirttizut9oatz.png)

# PHP Script to create symbol-id mapping
`coinmarkcap.js` is created via the following PHP script.
```
<?php
	echo "<pre>";
	$api = "https://api.coinmarketcap.com/v1/ticker/?limit=9999";
	$data = json_decode(file_get_contents($api), true);
	echo "let coinmarkcap = {};\n";
	foreach($data as $row) {
	  echo "coinmarkcap['" . $row['symbol'] . "'] = '" . $row['id']. "';\n";
	}
	echo "</pre>";
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CoinTools Update: Cryptocurrency Converter Calculator, Support Coin Symbols and Add More Localization](https://steemit.com/@justyy/cointools-update-cryptocurrency-converter-calculator-support-coin-symbols-and-add-more-localization)
