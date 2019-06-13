
---
title: 'Chrome Extension: Adding customized m3u8 video Downloader'
permlink: chrome-extension-adding-customized-m3u8-video-downloader
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-08 23:02:03
categories:
- utopian-io
tags:
- utopian-io
- video-downloader
- chrome-extension
- javascript
- m3u8
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1515451994/gkx9chmt3u4fe1b0ylg6.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Chrome Extension: Video Downloader that I have written is on fire! The current number of users using this plugin is: 10143.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515451994/gkx9chmt3u4fe1b0ylg6.png)

I am adding a very useful feature to this Chrome Extension at the version 2.5.5, which is the m3u8 Video Downloader/Parser.

# What is m3u8 File?
A .m3u8 is a text file that contains a list of video segments, like this:

```
#EXTM3U
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-TARGETDURATION:8
#EXT-X-VERSION:6
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:2.000,
chunk_0.ts
#EXTINF:2.000,
chunk_1.ts
#EXTINF:1.999,
chunk_2.ts
#EXTINF:2.000,
chunk_3.ts
#EXTINF:1.999,
chunk_4.ts
#EXTINF:2.000,
chunk_5.ts
```

OK, so if you are looking for a simple and easy to use m3u8 downloader, you now don't need to because this feature is integrated in the video plugin. 

All you have to do is to click the button in the plugin:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515452133/nh7sv1adrkmiho5xzeps.png)

It will popup a window asking for the URL of m3u8, for example:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515452165/nf8rjtw61zbtyxxyyu3u.png)

And, if you click OK, the list of video segments will be listed (you can click to download or using any batch downloader)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515452189/ehty2jlweamzifqkvmio.png)

# Project pages:
- Github: https://github.com/DoctorLai/VideoDownloadHelper
- Available at Chrome Webstore: https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515452278/kpvpmwvtuekctllbrsba.png)

# This commit
[Commit](https://github.com/DoctorLai/VideoDownloadHelper/commit/f6e48b3133db32813bedb85469abef7e3e76d756)

# Proof of Work:
`doctorlai` is my github ID, and you can navigate to https://github.com/DoctorLai that will show as:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515452343/rc58qloin8obc0nicbep.png)

# How to implement?
The following is the code to extract `m3u8`

```
  function process_m3u8(url) {
    if (url.endsWith("m3u8") || (url.includes("m3u8?"))) {          
      var tmp = url.lastIndexOf("/");
      if (tmp != -1) {
        var base_url = url.substr(0, tmp + 1);
        var m3u8 = url;
        $.ajax({
           type: "GET",
           url: m3u8,
           success: function(data) {
              var lines = data.trim().split(/\s*[\r\n]+\s*/g);
              var len = lines.length;
              var m3u8arr = [];
              for (var i = 0; i < len; ++ i) {
                var line = $.trim(lines[i]);
                if ((line != null) && (line != '') && (line.length > 2) && (line[0] != '#')) {
                  if ((line.startsWith("http://") || line.startsWith("https://") || line.startsWith("ftp://"))) {
                    m3u8arr.push(line);  
                  } else {
                    var theurl = base_url + line;                            
                    m3u8arr.push(theurl);
                  }
                }                           
              }
              if (m3u8arr.length == 1) {
                setUrlOffline(m3u8arr[0]);
              } else {
                setUrlOfflineArray(m3u8arr);
              }
           },
           error: function(request, status, error) {
           },
           complete: function(data) {                        
           }             
        });                
      }
    }
  }
```

and you just need to add a button and add relevant JS handling using jQuery:

```
<button id="m3u8">.m3u8</button>   
  $("#m3u8").click(function() {
    var url = prompt(".m3u8 URL", "https://uploadbeta.com/api/video/test.m3u8");
    process_m3u8(url);
  });
```

And this feature is also integrated in the [online tool](https://weibomiaopai.com/online-video-downloader/m3u8).

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/chrome-extension-adding-customized-m3u8-video-downloader">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Chrome Extension: Adding customized m3u8 video Downloader](https://steemit.com/@justyy/chrome-extension-adding-customized-m3u8-video-downloader)
