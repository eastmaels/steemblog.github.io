
---
title: 'Simple Video Downloader 3.0.7 - Adding Facebook and Generic Video Parser'
permlink: simple-video-downloader-3-0-7-adding-facebook-and-generic-video-parser
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-30 02:19:09
categories:
- utopian-io
tags:
- utopian-io
- development
- busy
- witness-category
- programming
thumbnail: https://ipfs.busy.org/ipfs/QmS4Zzmp1BTqPtP4i6LYYTApFFGzVQCCeLzJckVTTaoutw
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introducing the Simple Video Downloader
![image.png](https://ipfs.busy.org/ipfs/QmS4Zzmp1BTqPtP4i6LYYTApFFGzVQCCeLzJckVTTaoutw)

The [Video Downloader](https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj) is a Chrome Extension that helps you save your favorite videos. It can be installed via Chrome Webstore:
https://chrome.google.com/webstore/detail/ilcdiicigjaccgipndigcenjieedjohj/

# Total Number of Current Users (growing!)
![image.png](https://ipfs.busy.org/ipfs/QmZTG9zGZEJZzQeq3yYbLnzqFCkZHMzrmWtstWZw3sgjAQ)

# Install on Firefox or other browsers?
It should work, but not fully tested on Firefox via [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

# Install Unpacked Versions
Zipped releases: https://github.com/DoctorLai/VideoDownloadHelper/releases
Download the zip and then you can load unpacked version in Chrome (under development mode)

# Changes v3.0.7
Pull Requests Merged: https://github.com/DoctorLai/VideoDownloadHelper/pull/7

1. show tested urls in log tab
![image.png](https://ipfs.busy.org/ipfs/QmXrUMiYLHYeN6k4LeewAh7ZvGbfD6HYyyphYXfeP513iE)
2. add facebook video parser and unit tests
3. add generic video parser and unit tests: analysing the *og:video:url* or *video* tag in the HTML source.
4. further analyse the embedded urls: the video URLs containing */embed/* are most likely the HTML which needs further analysed.

# Unit Tests
`npm run test`
![image.png](https://ipfs.busy.org/ipfs/QmPJRwdiZdkGJybQ1962rXRqFGLya8zFSVDtiJnfLukHRe)
All tests passed on Travis CI: https://travis-ci.com/DoctorLai/VideoDownloadHelper/builds/93096835

# Build
`npm run build` which webpacks the ES6 class `ParseVideo` into `\dist\*js`

# Screenshot
![image.png](https://ipfs.busy.org/ipfs/QmPy4oS8yG9aobDDJyUDgtmA1ztS6raHdLLb53sN1R1zqc)

# Roadmap
1. Use async/await to replace Promise/Then
2. Fix broken video parser due to video site changes.
3. Add more unit tests (increase code coverage)
4. Support vimeo and other video sites
5. Merge video segments (ts)

# Task Requests
1. [Task Request: Adding dailymotion Support (100% vote + 10 STEEM)
](https://steemit.com/utopian-io/@justyy/task-request-adding-dailymotion-support-100-vote-10-steem)

# VIP Key Exclusive to Utopian
Please note, you can enter the VIP Key which allows you to call the [server API](https://weibomiaopai.com/download-video-parser.php) in case the client video parser fails locally - this greatly unlocks video parser to many many other video sites. 

![image.png](https://ipfs.busy.org/ipfs/QmcDoZyZpEYoa7JeVEU16bVPeyMA7SSYRir7fNgfHt5Z28)

The KEY is **iamutopian**

----------------
**Enjoy and Steem On!**
##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)


<h3>Relevant Video Download Posts</h3>
<ul>
<li><a href="https://helloacm.com/videodownloader-update-new-ui-d-tube-and-steemit-video-url-parser-code-refactoring/">VideoDownloader Update: New UI, d.tube and steemit video URL parser, code refactoring!</a></li>
<li><a href="https://helloacm.com/videodownloader-update-vip-feature-of-server-video-parser/">VideoDownloader Update: VIP Feature of Server Video Parser</a></li>
<li><a href="https://helloacm.com/how-to-download-tumblr-video-with-php-script-chrome-extensions-online-tool/">How to Download Tumblr Posts?</a></li>
<li><a href="https://helloacm.com/a-home-made-video-download-helper-client-server/">A Home-made Video Download Helper (Client + Server)</a></li>
<li><a href="https://helloacm.com/the-simple-video-m3u8-downloaderparser-in-php-javascript/">The Simple Video .m3u8 Downloader/Parser in PHP and Javascript</a></li>
<li><a href="https://helloacm.com/how-to-download-instagram-videos-using-php-and-javascript/">How to Download Instagram Videos using PHP and Javascript?</a></li>
<li><a href="https://helloacm.com/how-to-download-video-via-workflow/">How to Download Video via Workflow APP?</a></li>
<li><a href="https://helloacm.com/how-to-download-video-from-ted-com-in-javascript/">The TED Video Downloader</a></li>
<li><a href="https://helloacm.com/adding-image-download-list-to-the-popular-videodownloadhelper-chrome-extension/">Adding `Image Download List` to the Popular `VideoDownloadHelper` Chrome Extension</a></li>
</ul>

- - -

This page is synchronized from the post: [Simple Video Downloader 3.0.7 - Adding Facebook and Generic Video Parser](https://steemit.com/@justyy/simple-video-downloader-3-0-7-adding-facebook-and-generic-video-parser)
