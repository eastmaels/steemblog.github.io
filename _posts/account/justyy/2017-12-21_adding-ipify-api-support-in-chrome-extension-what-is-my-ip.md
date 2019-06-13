
---
title: 'Adding ipify API support in Chrome Extension - What Is My IP'
permlink: adding-ipify-api-support-in-chrome-extension-what-is-my-ip
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-21 13:18:45
categories:
- utopian-io
tags:
- utopian-io
- show-ip
- chrome-extension
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513862191/cm2opnlptgtlh5mp4kem.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the Chrome Extension [Show My IP](https://utopian.io/utopian-io/@justyy/chrome-extension-show-ip-address) has been both accepted by utopian.io and Chrome Webstore. Today I have spent some time adding support for using ipify API to get the IP Address. Therefore, the chrome extension supports 5 API servers which makes it more robust.

Chrome Webstore: https://chrome.google.com/webstore/detail/show-my-ip-addresses-exte/opljiobgnagdjikipnagigiacllolpaj
Github: https://github.com/DoctorLai/what-is-my-ip
This commit: https://github.com/DoctorLai/what-is-my-ip/commit/13a5fc8b9074651d36573bae061ae6ed6896134e#diff-77a711c4c2c9fd1e7125ed653dc9e3ab

The code:
```
function callThirdParty(server, name) {
    var api = server;
    logit("Connecting " + server + " ...");
    $.ajax({
        type: "GET",
        url: api,
        success: function(data) {
            if (data && data['ip']) {
                current_ip = data['ip'];
                $('pre#ip').append(current_ip + "\n");
            }
        },
        error: function(request, status, error) {
            logit('Response: ' + request.responseText);
            logit('Error: ' + error );
            logit('Status: ' + status);
        },
        complete: function(data) {
            logit('API Finished: ' + name + " Server!");
        }             
    });    
}
document.addEventListener('DOMContentLoaded', function() {
    getLocalIPs(function(ips) { // <!-- ips is an array of local IP addresses.
        ipaddress = ips.join('\n');
        $('pre#ip2').html(ipaddress);
        var manifest = chrome.runtime.getManifest();
        logit(manifest.name);
        logit("Version: " + manifest.version);        
        logit("Chrome Version: " + getChromeVersion());
        logit("May you do good, not evil.");
        callServer("helloacm", "East USA");
        callServer("uploadbeta", "UK");
        callServer("happyukgo", "Tokyo Japan");  
        callServer("steakovercooked", "West USA");  
        callThirdParty("https://api.ipify.org?format=json", "ipify.org");
    });
}, false);
```
It has been also integrated in this [online tool to get the IP](https://helloacm.com/what-is-my-ip/).

# It works!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513862191/cm2opnlptgtlh5mp4kem.png)

# Proof of Work
`doctorlai` is my github ID and you can see my steemit URL listed on my profile page:
Feel free to submit your Pull Requests at: https://github.com/DoctorLai/what-is-my-ip




<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-ipify-api-support-in-chrome-extension-what-is-my-ip">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding ipify API support in Chrome Extension - What Is My IP](https://steemit.com/@justyy/adding-ipify-api-support-in-chrome-extension-what-is-my-ip)
