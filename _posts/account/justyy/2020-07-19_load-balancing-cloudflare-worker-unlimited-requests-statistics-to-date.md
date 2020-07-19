
---
title: 'Load Balancing CloudFlare Worker Unlimited Requests Statistics To-date'
permlink: load-balancing-cloudflare-worker-unlimited-requests-statistics-to-date
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-19 15:19:33
categories:
- witness-category
tags:
- witness-category
- whalepower
- wherein
- wherein-daka
- steem
- steem-nodes
- rpc
- steem-dev
thumbnail: 'https://cdn.steemitimages.com/DQmWZni7Ef5w3yeCMP7PbxdxL8YaEEfcss3W9kaA6osEv2i/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have enabled the CloudFlare Unlimited Worker last week, and this gives the generous 50ms CPU cycle for request, and 10Million Request monthly. On average, 0.33 Million (330K) requests quota every day.

![image.png](https://cdn.steemitimages.com/DQmWZni7Ef5w3yeCMP7PbxdxL8YaEEfcss3W9kaA6osEv2i/image.png)

![image.png](https://cdn.steemitimages.com/DQmVtNrfHahqwpJDLyhfKdQHiTMuGn8tUnyJPJ7T4uskRE5/image.png)

Mainly the Load Balancing Node spends time in pinging the candidate RPC nodes that is the `fetch` - which does not cost the CPU time.

However, as CF limits maximum 6 requests at a time, that is only 6 simutaneous pings will be done and the rest will be put in the queue. But that is good enough for now.

I'll keep monitoring the performance and keep optimising the Node.

For the node performance, please visit [https://steemyy.com/node-status.php](https://steemyy.com/node-status.php)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[ Computing and Technology](https://helloacm.com/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Load Balancing CloudFlare Worker Unlimited Requests Statistics To-date'](https://steemit.com/@justyy/load-balancing-cloudflare-worker-unlimited-requests-statistics-to-date)
