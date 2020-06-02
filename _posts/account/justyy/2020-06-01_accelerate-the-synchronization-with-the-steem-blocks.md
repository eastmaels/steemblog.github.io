
---
title: 'Accelerate the Synchronization with the Steem Blocks'
permlink: accelerate-the-synchronization-with-the-steem-blocks
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-01 19:18:00
categories:
- whalepower
tags:
- whalepower
- witness-node
- witness-server
- rpc-node
- plugins
- witness-plugins
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A few of my tools [https://steemyy.com](https://steemyy.com/list-of-tools.php) require pre-process the blocks into a SQLite relational database. It takes time, especially currently, there are more than 43 Millions blocks on steem blockchain. 

Starting from Block 1 to Sync with the latest are expected to take days... But there are tips to accelerate the process.

# Do it on your Witness Server
The first important tip is use your own witness server to send the API to. If you are using an external server, it takes time as the HTTPS request are slow (network hops are the bottom-necks).

First, on your witness server, you have to turn on the following plugins:
```
plugin = witness block_api webserver condenser_api
```

Second, you would need to expose the 8091 RPC port. Then you can make API calls to the localhost (which is your witness server)

# Calling the localhost
Your script should make calls to `http://0.0.0.0:8091` instead of `https://api.steemit.com`

# Direct Calls instead of using Steem Class
instead of using `Steem(nodes=node)` you should make calls directly via the HTTP request object

```
data={"jsonrpc":"2.0", "method":"condenser_api.get_block", "params":[number_block], "id":1}
r=requests.post(url=node,json=data)
```

This is a lot faster especially you are making lots of calls!

# Commit to Database every 1000 blocks
Instead of updating the database every block, you should only do this every 1000 blocks (of course this is an example number) or more. 

You don't want the I/O (especially write) to slow down crawling the blocks.

# Add Index After
Another tip is to add index after the data is sync-ed. It makes a huge difference especially if you have a complex configuration of the database indices. 

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

This page is synchronized from the post: ['Accelerate the Synchronization with the Steem Blocks'](https://steemit.com/@justyy/accelerate-the-synchronization-with-the-steem-blocks)
