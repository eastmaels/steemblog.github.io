
---
title: 'RPC Nodes Version Detection using SteemJs'
permlink: rpc-nodes-version-detection-using-steemjs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-01 02:11:15
categories:
- programming
tags:
- programming
- whalepower
- witness-category
- witness
- steemjs
- steem-tool
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmeEfkerw5oTwbobUiccPHFPC1XyGrxMCB7Mt3HAUeFjZK/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Using SteemJS, we can easily detect the version of a Node:

```
steem.api.setOptions({url: "https://api.steemit.com"});
steem.api.getVersion(function(err, data) {
    log(err, data);
});
```

This will output something like this:

```
null
{"blockchain_version":"0.22.1","steem_revision":"53392cc31f011f9a8def8dfffff78dbab17ebf2e","fc_revision":"53392cc31f011f9a8def8dfffff78dbab17ebf2e"}
```

SteemJS <a href="https://steemyy.com/steemjs/?s=steem.api.setOptions(%7Burl%3A%20%22https%3A%2F%2Fapi.steemit.com%22%7D)%3B%0D%0Asteem.api.getVersion(function(err%2C%20data)%20%7B%0D%0A%20%20%20%20log(err%2C%20data)%3B%0D%0A%7D)%3B">Playground</a> here.

Now, it has been integrated into the page:


![image.png](https://cdn.steemitimages.com/DQmeEfkerw5oTwbobUiccPHFPC1XyGrxMCB7Mt3HAUeFjZK/image.png)

You can view the status of the nodes at: https://steemyy.com/
If a node is missing, please do let me know, thanks!

------------

I hope this helps!

**Steem On!~**

------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could proxy to me via [steemconnect](https://steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) if you are too lazy to vote!**

- - -

This page is synchronized from the post: ['RPC Nodes Version Detection using SteemJs'](https://steemit.com/@justyy/rpc-nodes-version-detection-using-steemjs)
