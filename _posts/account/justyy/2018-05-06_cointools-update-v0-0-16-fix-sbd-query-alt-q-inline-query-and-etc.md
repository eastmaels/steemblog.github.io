
---
title: 'CoinTools Update: v0.0.16: Fix SBD query, Alt Q inline query and etc'
permlink: cointools-update-v0-0-16-fix-sbd-query-alt-q-inline-query-and-etc
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-06 18:57:24
categories:
- utopian-io
tags:
- utopian-io
- development
- software
- cryptocurrency
- steemapps
thumbnail: https://gateway.ipfs.io/ipfs/QmU7vj3jKGzZ5XwvoiL9d9fUh96v4y8Jt9MwGMp4KSVUhX
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The [CoinTools](https://helloacm.com/the-cointools-update-alt-q-inline-cryptocurrency-query/) is a lightweight chrome extension that is made for Cryptocurrency fans.

#### Repository
https://github.com/DoctorLai/CoinTools

### Bug Fixes
- What was the issue(s)?
Cryptocompare has changed suddently the SBD symbol to SBD* thus, the API needs to be updated.

![image.png](https://gateway.ipfs.io/ipfs/QmU7vj3jKGzZ5XwvoiL9d9fUh96v4y8Jt9MwGMp4KSVUhX)

- What was the solution?
Add a check before API is called, to change SBD to SBD*
https://github.com/DoctorLai/CoinTools/commit/754f84271d06dbc679ef1ad38369dc79e1188d4e

### New Features
- What feature(s) did you add?
Alt Q inline query to lookup any cryptocurrency pairs.  Keyboard is always faster than mouse. If you just want to know the exchange rate between two pairs, you can Alt + Q to invoke the query dialog:

![image.png](https://gateway.ipfs.io/ipfs/QmZZvfNB9TsaGc6W9LbfARjbWjfTGC6FmNDjnwHNAv3qjv)

Press Enter:

![image.png](https://gateway.ipfs.io/ipfs/QmeYB2eSr2deeP2XzisMy4qpgsPkWFHDGmZEmuxBuEk9Vv)

- How did you implement it/them?
https://github.com/DoctorLai/CoinTools/commit/754f84271d06dbc679ef1ad38369dc79e1188d4e

Inject the script to every page load:
https://github.com/DoctorLai/CoinTools/blob/master/js/content.js

```
  "content_scripts": [{
      "matches": ["<all_urls>"],
      "js":[
          "js/jquery-3.2.1.min.js",
          "js/content.js"
      ],
      "run_at":"document_start"
  }],
```

#### Proof of Work Done
https://github.com/DoctorLai

## Install at Chrome Webstore
https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install CoinTools.

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [CoinTools Update: v0.0.16: Fix SBD query, Alt Q inline query and etc](https://steemit.com/@justyy/cointools-update-v0-0-16-fix-sbd-query-alt-q-inline-query-and-etc)
