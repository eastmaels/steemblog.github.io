
---
title: 'Adding PearVideo Video Download Support'
permlink: adding-pearvideo-video-download-support
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-21 00:44:54
categories:
- utopian-io
tags:
- utopian-io
- video-downloader
- pearvideo
- programming
- javascript
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513816890/ulzhyswciva87hp3f55w.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the Chrome Extension [Video Download Helper](https://utopian.io/utopian-io/@justyy/simple-video-download-helper) has been accepted by Google Web Store and Utopian. Today, I have spent some time adding the support of parsing the video URLs from pearvideo.com

Check the HTML source from:
```
http://www.pearvideo.com/video_1050733
```

We can see that the video source is in the text of Javascript code:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513816890/ulzhyswciva87hp3f55w.png)

Therefore, we can customize the search using Regular expression, the JS code has been added to the plugin:

```
    if (domain.includes("pearvideo.com")) {
        if (!ValidURL(video_url)) {
            var re = /srcUrl="([^"\']+)"/gi;
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
The commit: https://github.com/DoctorLai/VideoDownloadHelper/commit/e8df6a821efa27c06b1d242e6abdfba843c4ed22#diff-337d9b5b4942fb84e0ca186f8db40d15
The Google Webstore: https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj
It has also been implemented in Server's API - [Online Universal Video Downloader](https://weibomiaopai.com/download-video-parser.php) and [PearVideo Downloader](https://weibomiaopai.com/online-video-downloader/pearvideo)

# It works!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513816963/dszetbuwpsnizczgret8.png)


# Proof of Work
My github id is `doctorlai` and you can find my steemit URL at profile page: https://github.com/DoctorLai/

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-pearvideo-video-download-support">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding PearVideo Video Download Support](https://steemit.com/@justyy/adding-pearvideo-video-download-support)
