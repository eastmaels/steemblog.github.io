
---
title: 'Introducing the Witness Voting Tool'
permlink: introducing-the-witness-voting-tool
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-04 13:18:12
categories:
- steem
tags:
- steem
- programming
- steem-tools
- whalepower
- steemdev
- witness-category
- software-development
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmeCxrSt5Bd5nWnmyXs9abgMfmVT5ao1R5i77p1sXsM4rr/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


With lots of happening, I am just keen in making mini-tools. Here is another one:

**https://steemyy.com/witness-voting/**

![image.png](https://cdn.steemitimages.com/DQmeCxrSt5Bd5nWnmyXs9abgMfmVT5ao1R5i77p1sXsM4rr/image.png)

## What you can do in this tool?
1. cast a witness vote (approve)
2. cast a witness un-vote (unapprove)
3. set a proxy
4. clear a proxy.

You can do this by redirect to SteemConnect, or if you prefer, you can broadcast the action via SteemJs - which you will need to enter active key once (pretty safe, as the key will not go anywhere else).

If you choose the SteemJs method, you will need also your account ID.

The tool is also available in Chinese: **https://steemyy.com/voting-witness/**

The Core SteemJs code to broadcast a Witness Vote is:

```
// approve = 1, unapprove = 0
steem.broadcast.accountWitnessVote(ActiveKey, YourAccount, Witness, approve, function(err, result) {
  if (err) {
      log(err);        
  } else {
      log("Successful!", result);
  }
}); 
```

and to broadcast a Witness Proxy is:

```
steem.broadcast.accountWitnessProxy(ActiveKey, YourAccount, WitnessProxy, function(err, result) {
  if (err) {
      log(err);        
  } else {
      log("Successful!", result);
  }
}); 
```

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

This page is synchronized from the post: ['Introducing the Witness Voting Tool'](https://steemit.com/@justyy/introducing-the-witness-voting-tool)
