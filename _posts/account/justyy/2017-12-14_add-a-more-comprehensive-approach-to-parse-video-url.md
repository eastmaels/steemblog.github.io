
---
title: 'Add a More Comprehensive Approach to Parse Video URL'
permlink: add-a-more-comprehensive-approach-to-parse-video-url
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-14 11:11:48
categories:
- utopian-io
tags:
- utopian-io
- video
- video-downloader
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously [VideoDownloader](https://utopian.io/utopian-io/@justyy/simple-video-download-helper) the Chrome Extension has been made open source and it has been re-accepted by Chrome Webstore: https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj

Currently, there are more than 9K users using this Chrome Extension, and many of them are Chinese users yep, Chinese love downloading videos! :)

Since then, I have lots of PR to improve the plugin, see this history:
https://github.com/DoctorLai/VideoDownloadHelper/commits/master/video-url-parser/js/getPagesSource.js

and my latest improvement is to add a moree comprehensive approach to guess the video URL, the changes are:
https://github.com/DoctorLai/VideoDownloadHelper/commit/ae53d0c1091913e5d9bb7e85fc629e76aca9ff3c#diff-337d9b5b4942fb84e0ca186f8db40d15

The actual feature is  'uncommented'  after some testing and now it should become live soon (after Google reviews the changes).

Line 397 of `getPagesSource.js`
```
if (!ValidURL(video_url)) {
        video_dom = document.querySelector("div#player-wrapper>iframe");
        if (video_dom) {
            video_url = video_dom.getAttribute("src"); 
            if (ValidURL(video_url)) {
                var url1 = video_url;
                video_url = "";
                $.ajax({
                    type: "GET",
                    dataType: "html",
                    url: url1,
                    success: function(data) {
                        var dom = $(data).find("div#hlsjsvod");
                        if (dom) {
                            video_url = dom.attr('data-url240');
                            if (ValidURL(video_url)) {
                                video_url = video_url.replace(".m3u8", ".ts");
                                chrome.runtime.sendMessage({
                                    action: "getSource",
                                    source: JSON.stringify(CheckURL(video_url))
                                });
                            }                            
                        }
                        if (!ValidURL(video_url)) {
                            var re = /src:\s*\"(.*)\"/i;
                            var found = re.exec(data);
                            if (found != null) {
                                video_url = found[1];
                                video_url = video_url.replace(".m3u8", ".ts");
                                chrome.runtime.sendMessage({
                                    action: "getSource",
                                    source: JSON.stringify(CheckURL(video_url))
                                });                                
                            }
                        }
                    },       
                });
            }
        }
    }     
```

The github: https://github.com/DoctorLai/VideoDownloadHelper
Proof of work: Check my Github profile page.

# Online Video Downloader:
It has also been available online: [Universal Video Downloader](https://weibomiaopai.com/download-video-parser.php)

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/add-a-more-comprehensive-approach-to-parse-video-url">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Add a More Comprehensive Approach to Parse Video URL](https://steemit.com/@justyy/add-a-more-comprehensive-approach-to-parse-video-url)
