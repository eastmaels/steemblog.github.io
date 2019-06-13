
---
title: 'Adding `Image Download List` to the Popular `VideoDownloadHelper` Chrome Extension'
permlink: adding-image-download-list-to-the-popular-videodownloadhelper-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-21 19:09:36
categories:
- utopian-io
tags:
- utopian-io
- programming
- chrome-extension
- javascript
- video-download
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516561625/olsqefi4w0hpoqf5chz7.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Chrome Extension:  [Simple Video Download](https://helloacm.com/adding-image-download-list-to-the-popular-videodownloadhelper-chrome-extension/) Helper is available on [Chrome Webstore](https://chrome.google.com/webstore/detail/simple-video-download-hel/ilcdiicigjaccgipndigcenjieedjohj). The number of current users exceeds 10000 (Hurrray!)
It is fully open source on Github: https://github.com/DoctorLai/VideoDownloadHelper

## New Features
As suggested by my friend, I have added a function allowing users to extract a list of images in the current page.

[This commits](https://github.com/DoctorLai/VideoDownloadHelper/commit/9ad477f42d816f46f0eb1a501120eac020f8cf90#diff-96042d8700941d363fe5d56ae233d8b2)  

For example, when users presses the image button, a list of image sources are listed.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516561625/olsqefi4w0hpoqf5chz7.png)

# Source
```

  $("#pic").click(function() {
      let domain = pageurl.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
      if (pageurl.startsWith("http://")) {
        domain = "http://" + domain;
      } else if (pageurl.startsWith("https://")) {
        domain = "https://" + domain;
      }
      $.ajax({
         type: "GET",
         url: pageurl,
         success: function(data) {
            var tmp = [];
            var re = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/ig;
            var found = re.exec(data);
            while (found != null) {
                var tmp_url = found[1];
                if ((tmp_url != null) && (tmp_url.length > 0)) {
                  if (tmp_url.startsWith("http://") || tmp_url.startsWith("https://")) {
                    tmp.push(tmp_url);
                  } else {
                    if (tmp_url[0] == '/') {
                      tmp.push(domain + tmp_url);
                    } else {
                      tmp.push(domain + '/' + tmp_url);
                    }
                  }
                }
                found = re.exec(data);
            }
            if (tmp.length > 0) {
              let s;
              if (document.getElementById("lang").selectedIndex == 0) {
                s = '<h3>Images List</h3>';
              } else {
                s = '<h3>图片列表</h3>';
              }
              s += "<ol>";
              for (let i = 0; i < tmp.length; ++ i) {
                s += "<li><a target=_blank href='" + tmp[i] + "'>" + tmp[i] + "</a>";
              }
              s += "</ol>";
              $('div#down').html(s);
            }    
         },
         error: function(request, status, error) {
         },
         complete: function(data) {                        
         }             
      });     
  });  
```    

# How to Contribute
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-image-download-list-to-the-popular-videodownloadhelper-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding `Image Download List` to the Popular `VideoDownloadHelper` Chrome Extension](https://steemit.com/@justyy/adding-image-download-list-to-the-popular-videodownloadhelper-chrome-extension)
