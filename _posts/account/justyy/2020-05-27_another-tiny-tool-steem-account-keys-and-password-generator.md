
---
title: 'Another Tiny Tool:  Steem Account Keys and Password Generator'
permlink: another-tiny-tool-steem-account-keys-and-password-generator
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-27 20:48:27
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-tool
- steem-dev
- steem-tools
- programming
- witness-votes
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmdP7Edg6cyb8MiHWfs7V2eFWacz5FQgeWtZgTWBJKmMCU/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I made another tiny tool:  Steem Account Keys and Password Generator
What it does:
1. generate a suggested (strong, secure) password for you to use
2. retreive (both public and private) owner, posting, active, memo keys from your master password.

It is a one-page HTML tool. There is no login involved. Your password stays in the current page (your local browser) . There is no point to panic!

Tool URL: [https://steemyy.com/keys/](https://steemyy.com/keys/)
Chinese Version: [https://steemyy.com/account-keys/](https://steemyy.com/account-keys/)
The tool is based on [dSteem v0.8.6](https://github.com/steemit/dsteem/releases)


![image.png](https://cdn.steemitimages.com/DQmdP7Edg6cyb8MiHWfs7V2eFWacz5FQgeWtZgTWBJKmMCU/image.png)

The Core dSteem code to Retrieve Keys from Master Password is:
```
const ownerKey = dsteem.PrivateKey.fromLogin(username, password, 'owner');
const activeKey = dsteem.PrivateKey.fromLogin(username, password, 'active');
const postingKey = dsteem.PrivateKey.fromLogin(username, password, 'posting');
const memoKey = dsteem.PrivateKey.fromLogin(username, password, 'memo');
```
The Suggested Password Source code:
```
function suggestPassword() { 
  const array = new Uint32Array(10); 
  window.crypto.getRandomValues(array); 
  return 'P' + dsteem.PrivateKey.fromSeed(array).toString(); 
} 
```

<hr/>

I hope this helps!

**Steem On!~**
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Another Tiny Tool:  Steem Account Keys and Password Generator'](https://steemit.com/@justyy/another-tiny-tool-steem-account-keys-and-password-generator)
