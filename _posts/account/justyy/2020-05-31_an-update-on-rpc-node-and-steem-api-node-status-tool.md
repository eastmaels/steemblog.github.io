
---
title: 'An update on RPC Node and Steem API Node Status Tool'
permlink: an-update-on-rpc-node-and-steem-api-node-status-tool
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-31 18:38:57
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-node
- witness-server
- rpc-node
- plugins
- witness-plugins
thumbnail: 'https://cdn.steemitimages.com/DQmat4NUD2J3Whj1it8XUur586DikY83qebMipgP3MmHMb3/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


After a few day's replay, my RPC node is now fully sync with the blocks on 0.23.1


![image.png](https://cdn.steemitimages.com/DQmat4NUD2J3Whj1it8XUur586DikY83qebMipgP3MmHMb3/image.png)


You can add the following to your `config.ini` to redirect the RPC messages - otherwise you will see RPC calls flooding your steemd.

```
log-appender = {"appender":"rpc", "file":"logs/rpc/rpc.log"}
log-logger = {"name":"rpc", "level":"info", "appender":"rpc"}
```

Steem API Node Status: [https://steemyy.com/node-status.php](https://steemyy.com/node-status.php)
I have removed dead nodes and also If you see nodes missing from the list, please do let me know. I have added the `Owner` column.


![image.png](https://cdn.steemitimages.com/DQmbDm71gek5JHVXN43pzWPeB2iXExgZCYhHbSADKJk57au/image.png)

Every little helps. Let's all add something to the STEEM blockchain.

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

This page is synchronized from the post: ['An update on RPC Node and Steem API Node Status Tool'](https://steemit.com/@justyy/an-update-on-rpc-node-and-steem-api-node-status-tool)
