
---
title: 'Set Up  Health Checks for RPC Node api.justyy.com using CloudFlare'
permlink: set-up-health-checks-for-rpc-node-api-justyy-com-using-cloudflare
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-26 17:19:12
categories:
- witness-category
tags:
- witness-category
- codeonsteem
- programming
- whalepower
- sqlite
- steemit
- steem-dev
- testing
thumbnail: 'https://helloacm.com/wp-content/uploads/2020/06/cloudflare-edit-health-checks.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I want to be notified when my RPC node is down. Thus I use the CloudFlare Health Checks to monitor this for me.

In the CloudFlare Traffic Tab, you can add a Rule to specify which service/URL you want to monitor

![](https://helloacm.com/wp-content/uploads/2020/06/cloudflare-edit-health-checks.jpg)

In this case, I ask the cloudflare to look for 200 response code and the "OK" text in the response text.

If anything goes wrong, I'll receive the email notifications!

![](https://helloacm.com/wp-content/uploads/2020/06/cloudflare-email-notification-for-health-checks.jpg)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/set-up-website-health-checks-canaries-using-cloudflare/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Set Up  Health Checks for RPC Node api.justyy.com using CloudFlare'](https://steemit.com/@justyy/set-up-health-checks-for-rpc-node-api-justyy-com-using-cloudflare)
