
---
title: 'A Little Tool: Change Account Recovery'
permlink: a-little-tool-change-account-recovery
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-20 19:56:09
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-tool
- steem-dev
- steem-tools
- account-recovery
- recovery-account
- steem-account
thumbnail: 'https://cdn.steemitimages.com/DQmS1BnYMdVLf94GDBhtEBP4qSQupAYA2MAbhyaEFxemcXX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I made a tool to help you Change Account Recovery on Steem Blockchain.

Tool:
[https://steemyy.com/change-account-recovery/](https://steemyy.com/change-account-recovery/)

Chinese Version:
[https://steemyy.com/change-recovery-account/](https://steemyy.com/change-recovery-account/)

You would need Owner Key to use this.

![image.png](https://cdn.steemitimages.com/DQmS1BnYMdVLf94GDBhtEBP4qSQupAYA2MAbhyaEFxemcXX/image.png)

The Core SteemJs code to broadcast a ChangeRecoveryAccount is:

```
steem.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  if (!err && result) log("Account Recovery Updated");
}); 
```

Little advice: Change Account Recovery to someone you trust.

------------

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

This page is synchronized from the post: ['A Little Tool: Change Account Recovery'](https://steemit.com/@justyy/a-little-tool-change-account-recovery)
