
---
title: 'VideoDownloader Update: VIP Feature of Server Video Parser'
permlink: videodownloader-update-vip-feature-of-server-video-parser
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-28 01:57:27
categories:
- utopian-io
tags:
- utopian-io
- software-development
- video-downloader
- software
- programming
thumbnail: https://cdn.utopian.io/posts/2457286fff46ec5871864815761bf4891512image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[Simple Video Downloader](https://helloacm.com/the-simple-video-m3u8-downloaderparser-in-php-javascript/) is my first [Chrome Extension](https://helloacm.com/videodownloader-update-new-ui-d-tube-and-steemit-video-url-parser-code-refactoring/) and what it does is to parse the HTML source code of the video sites for the video and images URLs.

## Technology
Javascript that runs in the Chrome Browser (ES6)

## Chrome Webstore
https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj

## New Feature
[This commit](https://github.com/DoctorLai/VideoDownloadHelper/commit/08d48de403c9bfa71a6450c86a28501e9d1f63c4) allows to configure the [server api](https://helloacm.com/videodownloader-update-vip-feature-of-server-video-parser/) key (VIP) so that when local parser fails, request will be made to the [Video API Server](https://weibomiaopai.com/api-documentation/). 

![image.png](https://cdn.utopian.io/posts/2457286fff46ec5871864815761bf4891512image.png)

### VIP Key for Utopian Users
For testing purpose,  API Key: `utopian`  is given out exclusively to [utopian](https://helloacm.com/revive-utopian-chrome-extension-wrapping-utopian-api-calls/) users. For more server API usage, please visit [here](https://weibomiaopai.com/api-documentation/). 

## No Youtube
Google does not allow any behavior that supports or encourages downloading youtube videos and therefore this plugin does not support youtube anymore.

![image.png](https://cdn.utopian.io/posts/bf25300446485d3045f723544a1b33e48e3fimage.png)

## Firefox or Opera
For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install VideoDownloadHelper.

## Contribution
Fully Opensource: https://github.com/DoctorLai/Videodownloadhelper
Submit a PR or a issue if you found a bug.

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/videodownloader-update-vip-feature-of-server-video-parser">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [VideoDownloader Update: VIP Feature of Server Video Parser](https://steemit.com/@justyy/videodownloader-update-vip-feature-of-server-video-parser)
