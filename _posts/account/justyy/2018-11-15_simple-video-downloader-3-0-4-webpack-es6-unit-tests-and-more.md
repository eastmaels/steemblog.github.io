
---
title: 'Simple Video Downloader 3.0.4 - Webpack, ES6, Unit Tests and more!'
permlink: simple-video-downloader-3-0-4-webpack-es6-unit-tests-and-more
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-15 00:58:27
categories:
- utopian-io
tags:
- utopian-io
- development
- busy
- witness-category
- programming
thumbnail: 'https://ipfs.busy.org/ipfs/QmQE23ep76rNaZbw7NVZEsFzE7JEETqk5KZuxYVUhnJuBF'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introducing to Simple Video Downloader
The [Video Downloader](https://helloacm.com/videodownloader-update-vip-feature-of-server-video-parser/) is a Chrome Extension that helps you save your favorite videos. It can be installed via Chrome Webstore:
https://chrome.google.com/webstore/detail/ilcdiicigjaccgipndigcenjieedjohj/

# Total Number of Current Users
![image.png](https://ipfs.busy.org/ipfs/QmQE23ep76rNaZbw7NVZEsFzE7JEETqk5KZuxYVUhnJuBF)

# Install on Firefox or other browsers?
It should work, but not fully tested on Firefox via [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

# Changes v3.0.4
Pull Requests Merged: https://github.com/DoctorLai/VideoDownloadHelper/pull/4

1. using ES6 and webpack - `npm run build`
![image.png](https://ipfs.busy.org/ipfs/QmaxQxZSHwBjvaLdgvAfjQ3aMcwZsAS7KAdzwRUyNMufmp)
2. unit tests via mocha and chai - `npm run test`
![image.png](https://ipfs.busy.org/ipfs/QmdoEe16FHivZveRQmFPaTDnDDAQvpRkAZ8NUHEUASJFKx)
3. adding ParseVideo class that analyses HTML
4. handles pearvideo.com
5. handles miaopai.com

# Class of ParseVideo
```
/* jshint -W097 */
/* jshint -W117 */
"use strict";

const { ValidURL, extractDomain, FixURL } = require( '../js/functions' )  ;

class ParseVideo {
    constructor(url, html = "") {
        // e.g. https://www.dailymotion.com/video/x2bu0q2
        this.url = url;
        // e.g. <html>....</html>
        this.html = html;
    }

    // entry of video parser
    Parse() {
        let domain = extractDomain(this.url);
        let video_url = "";
        if (domain.includes("miaopai.com")) {
            video_url = ParseVideo.parse_miaopai_com(this.url, this.html);
            if (ValidURL(video_url)) {
                return video_url;
            }
        }        
        if (domain.includes("pearvideo.com")) {
            video_url = ParseVideo.parse_pearvideo_com(this.url, this.html);
            if (ValidURL(video_url)) {
                return video_url;
            }            
        }
        video_url = ParseVideo.extract_all_video_urls(this.url, this.html);
        if (video_url !== null) {
            return video_url;
        }
        video_url = ParseVideo.extract_all_mp4_urls(this.url, this.html);
        if (video_url !== null) {
            return video_url;
        }
        return null;
    }

    // parse miaopai.com video e.g. https://miaopai.com/show/abcde.html
    // this is one of the simplest form and we can get it from URL
    static parse_miaopai_com(url, html) {
        let re = /.*miaopai\.com\/show\/(.*)\.html?$/i;
        let found = re.exec(url);
        if (found !== null) {
            return "http://gslb.miaopai.com/stream/" + found[1] + ".mp4";
        } 
        return null;
    }

    // extract all video_url in html e.g. "video_url": "https://aaaabbb.com/"
    static extract_all_video_urls(url, html) {
        let re = /['"]?video_url['"]?:\s*(['"])(https?:[^\s'",]+)\1/ig;
        let found = re.exec(html);
        let video_url = [];
        while (found !== null) {  
            let url = FixURL(found[2]);
            if (ValidURL(url)) {
                video_url.push(url);
            }
            found = re.exec(html);
        }
        return (video_url.length === 0) ? null :
               ( (video_url.length === 1) ? video_url[0] : video_url);
    }

    // parse pearvideo.com e.g. http://www.pearvideo.com/video_1050733
    static parse_pearvideo_com(url, html) {
        let video_url = [];
        let re = /([hsl]d|src)Url\s*=\s*[\"\']([^\"\']+)[\'\"]/ig;
        let found = re.exec(html);
        while (found !== null) {
            let tmp_url = FixURL(found[2]); 
            if (ValidURL(tmp_url)) {
                video_url.push(tmp_url);
            }
            found = re.exec(html);
        }        
        return (video_url.length === 0) ? null :
               ( (video_url.length === 1) ? video_url[0] : video_url);        
    }

    // extract all MP4 in html e.g. "mp4","url":"https://aabb.com"
    static extract_all_mp4_urls(url, html) {
        let re = /mp4[\'\"]\s*,\s*[\'\"]url[\'\"]\s*:\s*[\'\"]([^\"\']+)[\'\"]/ig;
        let found = re.exec(html);
        let video_url = [];
        while (found !== null) {  
            let url = FixURL(found[1]);
            if (ValidURL(url)) {
                video_url.push(url);
            }
            found = re.exec(html);
        }
        return (video_url.length === 0) ? null :
               ( (video_url.length === 1) ? video_url[0] : video_url);
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = {
		ParseVideo
	};
}
```

# Screenshot
![image.png](https://ipfs.busy.org/ipfs/QmbRYKtyV658oZN5opRABjF6nHRufUaww5d8LhpG4QRJCK)

# Roadmap
1. Use async/await to replace Promise/Then
2. Fix broken video parser due to video site changes e.g. ted.com
3. Add more unit tests (increase code coverage)
4. Support vimeo and other video sites
5. Merge video segments (ts)

# VIP Key Exclusive to Utopian
Please note, you can enter the VIP Key which allows you to call the [server API](https://weibomiaopai.com) in case the client video parser fails locally - this greatly unlocks video parser to many many other video sites. 

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

This page is synchronized from the post: ['Simple Video Downloader 3.0.4 - Webpack, ES6, Unit Tests and more!'](https://steemit.com/@justyy/simple-video-downloader-3-0-4-webpack-es6-unit-tests-and-more)
