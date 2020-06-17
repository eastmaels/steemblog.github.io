
---
title: 'Always Backup before Restarting the Steemd'
permlink: always-backup-before-restarting-the-steemd
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-17 17:45:06
categories:
- witness-category
tags:
- witness-category
- whalepower
- rpc-node
- witness-node
- steemd
- backup
thumbnail: 'https://cdn.steemitimages.com/DQmYpCAZfoK4koBZAty8b713ywoi1AR7D3T8UaiAeLHJxJ1/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Today, I was told that my RPC node https://api.justyy.com  does not enable tags_api:

```
{"jsonrpc":"2.0","error":{"code":-32003,"message":"Assert Exception:_tags_api: tags_api_plugin not enabled.","data":{"code":10,"name":"assert_exception","message":"Assert Exception","stack":[{"context":{"level":"error","file":"condenser_api.cpp","line":1429,"method":"get_discussions_by_created","hostname":"","timestamp":"2020-06-17T13:42:21"},"format":"_tags_api: tags_api_plugin not enabled.","data":{}}]}},"id":6}
```

I was trying to enable it in the `config.ini` and I restart the steemd.

It didn't work...
![image.png](https://cdn.steemitimages.com/DQmYpCAZfoK4koBZAty8b713ywoi1AR7D3T8UaiAeLHJxJ1/image.png)

I had to take it off, and restart the steemd. However, it won't let me start and keep hanging at a block - unable to push to the chain...

I have to restore the snapshot that was taken 2 weeks ago - and replay (should take a good few hours).

Meanwhile - I have to redirect the traffic to https://api.steemit.com  to avoid breaking existing applications.

One important advice: always backup the files before trying new things.



<hr/>

Every little helps! I hope this helps!


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

This page is synchronized from the post: ['Always Backup before Restarting the Steemd'](https://steemit.com/@justyy/always-backup-before-restarting-the-steemd)
