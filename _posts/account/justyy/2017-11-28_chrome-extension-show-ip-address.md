
---
title: 'Chrome Extension: Show IP Address'
permlink: chrome-extension-show-ip-address
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-28 10:58:00
categories:
- utopian-io
tags:
- utopian-io
- chrome
- chrome-extensions
- show-ip
- ip-address
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1511866523/vnpz4dqiuf5ljeerlpai.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


For Network Administrators, they sometimes need to know the IP addresses both internal and external. Therefore, I have developed a handy widget to the Chrome, so that you can easily get your own IP addresses with just one click.

The github source repro is: https://github.com/DoctorLai/what-is-my-ip
You can add to Chrome browser via  Chrome web store: https://chrome.google.com/webstore/detail/show-my-ip-addresses-exte/opljiobgnagdjikipnagigiacllolpaj

A screenshot of the chrome extension to show the IP address:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1511866523/vnpz4dqiuf5ljeerlpai.png)

What it does essentially is to invoke the show-ip-address API from 4 different API servers around the globe, although the internal IP address can be obtained via the following Javascript function:

```
function getLocalIPs(callback) {
    var ips = [];

    var RTCPeerConnection = window.RTCPeerConnection ||
        window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

    var pc = new RTCPeerConnection({
        // Don't specify any stun/turn servers, otherwise you will
        // also find your public IP addresses.
        iceServers: []
    });
    // Add a media line, this is needed to activate candidate gathering.
    pc.createDataChannel('');
    
    // onicecandidate is triggered whenever a candidate has been found.
    pc.onicecandidate = function(e) {
        if (!e.candidate) { // Candidate gathering completed.
            pc.close();
            callback(ips);
            return;
        }
        var ip = /^candidate:.+ (\S+) \d+ typ/.exec(e.candidate.candidate)[1];
        if (ips.indexOf(ip) == -1) // avoid duplicate entries (tcp/udp)
            ips.push(ip);
    };
    pc.createOffer(function(sdp) {
        pc.setLocalDescription(sdp);
    }, function onerror() {});
}
```

Feel free to submit your Pull Requests at: https://github.com/DoctorLai/what-is-my-ip






<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/chrome-extension-show-ip-address">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Chrome Extension: Show IP Address](https://steemit.com/@justyy/chrome-extension-show-ip-address)
