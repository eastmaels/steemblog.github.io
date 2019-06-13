
---
title: 'Chrome Extension: Adding XiaoKaXiu Video Download Support'
permlink: chrome-extension-adding-xiaokaxiu-video-download-support
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-27 23:48:12
categories:
- utopian-io
tags:
- utopian-io
- video-downloader
- xiaokaixiu
- javascript
- chrome-extension
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514418337/h21w68xdt25su57waakn.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the Chrome Extension [Video Download Helper](https://utopian.io/utopian-io/@justyy/simple-video-download-helper) has been accepted by Google Web Store (**The number of Current Users is more than 10,000**) and Utopian. Today, I have spent some time adding the support of parsing the video URLs from xiaokaxiu.com

The github project: https://github.com/DoctorLai/VideoDownloadHelper
The Chrome Webstore: https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj
This commit: https://github.com/DoctorLai/VideoDownloadHelper/commit/fd1822391ae3bc3dada448ed5d362506df2f6f72#diff-337d9b5b4942fb84e0ca186f8db40d15
It has also been implemented in Server's API - [Online Universal Video Downloader](https://weibomiaopai.com/download-video-parser.php) and [Xiaokaxiu Downloader](https://weibomiaopai.com/online-video-downloader/xiaokaxiu)

# This commit
XiaoKaXiu  uses Miaopai as the backend video storage server, so the task is to parse the video ID from HTML source.

```
    // https://v.xiaokaxiu.com/v/fhX23JOcSbVEJOQ9LFKtOP2WBkeP1AA-.html
    if (domain.includes("xiaokaxiu.com")) {
        if (!ValidURL(video_url)) {
            // ![](http://gslb.miaopai.com/stream/fhX23JOcSbVEJOQ9LFKtOP2WBkeP1AA-_m.jpg)
            var re = /player.swf\?scid=([^"\'&]+)/gi;
            var found = re.exec(html);                        
            var video_url_arr = [];
            while (found != null) {
                var tmp_url = "http://gslb.miaopai.com/stream/" + found[1] + ".mp4";
                var tmp_url = CheckURL(tmp_url);
                if (ValidURL(tmp_url)) {
                    video_url_arr.push(tmp_url);    
                    break;
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

# It works!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514418337/h21w68xdt25su57waakn.png)

# Proof of Work
My github id is `doctorlai` and you can find my steemit URL at profile page: https://github.com/DoctorLai/






<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/chrome-extension-adding-xiaokaxiu-video-download-support">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Chrome Extension: Adding XiaoKaXiu Video Download Support](https://steemit.com/@justyy/chrome-extension-adding-xiaokaxiu-video-download-support)
