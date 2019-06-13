
---
title: 'Adding ted.com Video Download Support'
permlink: adding-ted-com-video-download-support
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-17 23:12:36
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- video-download
- chrome-extension
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513552252/fhjepxv7celqggqklfie.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the Chrome Extension [Video Download Helper](https://utopian.io/utopian-io/@justyy/simple-video-download-helper) has been accepted by Google Web Store and Utopian. Today, I have spent some time adding the support of [parsing the video URLs from ted.com](https://justyy.com/archives/5699)

Let's check how the video URLs are stored in ted.com HTML source code:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513552252/fhjepxv7celqggqklfie.png)

We just need to parse it using regular expressions, the [JS code](https://helloacm.com/how-to-download-video-from-ted-com-in-javascript/) is:

```
    if (domain.includes("ted.com")) {
        if (!ValidURL(video_url)) {
            var re = /{"uri":"([^"\']+)"/gi;
            var found = re.exec(html);                        
            var video_url_arr = [];
            while (found != null) {
                var tmp_url = CheckURL(found[1]);
                if (ValidURL(tmp_url)) {
                    video_url_arr.push(tmp_url);    
                }                            
                found = re.exec(html);
            }
            if (valid_domain) {                
                if (video_url_arr.length > 0) {
                    chrome.runtime.sendMessage({
                        action: "getSource",
                        source: JSON.stringify(video_url_arr)
                    });                          
                } else {
                    chrome.runtime.sendMessage({
                        action: "getSource",
                        source: JSON.stringify(CheckURL(video_url))
                    });                              
                }
            }
        }
    }   
```

The github: https://github.com/DoctorLai/VideoDownloadHelper
The commit: https://github.com/DoctorLai/VideoDownloadHelper/commit/134bb7948a37d904946fd75343fd3e9f4dfbc50a
The Google Webstore: https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj
It has also been implemented in Server's API - [Online Universal Video Downloader](https://weibomiaopai.com/download-video-parser.php) and [TED Downloader](https://weibomiaopai.com/online-video-downloader/ted)

# It works!
![](https://steemitimages.com/DQmakaq6qLpxGjkFiLRMdiYYmFK8SEz1ZfBLjFzrctpZJVQ/image.png)

# Proof of Work
My github id is `doctorlai` and you can find my steemit URL at profile page: https://github.com/DoctorLai/


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-ted-com-video-download-support">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding ted.com Video Download Support](https://steemit.com/@justyy/adding-ted-com-video-download-support)
