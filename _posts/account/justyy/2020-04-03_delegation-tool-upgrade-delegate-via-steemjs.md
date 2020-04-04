
---
title: 'Delegation Tool Upgrade: Delegate via SteemJs'
permlink: delegation-tool-upgrade-delegate-via-steemjs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-03 19:20:12
categories:
- steem-tools
tags:
- steem-tools
- whalepower
- steemdev
- witness-category
- delegation
- software-development
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmcdRdHMnqdHJHCzcc3THHT2w9UB9659emh7jXJ3F4P5Q6/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the SP Delegation Tool I developed is only a simple tool that collects data in a simple form and redirects to SteemConnect.

My friends told me that the SteemConnect is blocked in China, some others told me that the SteemConnect is not user-friendly with too many buttons flowing between pages.

Thus, I have provided another way to delegate - via SteemJS.


![image.png](https://cdn.steemitimages.com/DQmcdRdHMnqdHJHCzcc3THHT2w9UB9659emh7jXJ3F4P5Q6/image.png)


**Tool: https://steemyy.com/sp-delegate-form/**
**Also available in Chinese: https://steemyy.com/delegate-form/**

Basically, The Core SteemJs code to broadcast a delegation is:

```
steem.broadcast.delegateVestingShares(ActiveKey, delegator, delegatee, amount + " VESTS", function(err, result) {
  if (err) {
      log(err);        
  } else {
      log("Successful!", result);
  }
}); 
```

## How to use?
1. Enter Delegator ID (Who you are)
2. Enter Delegatee ID (Who you want to delegate SP/Vests to?)
3. Amount (0 to undelegate)
4. Unit (SP or VESTS): if entered SP, it will automatically be converted to VESTS
5. Active Key (safe to use it in your browser)
6. Click the Button
7. Wait for the confirmed message.

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

This page is synchronized from the post: ['Delegation Tool Upgrade: Delegate via SteemJs'](https://steemit.com/@justyy/delegation-tool-upgrade-delegate-via-steemjs)
