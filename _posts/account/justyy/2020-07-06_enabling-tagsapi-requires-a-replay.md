
---
title: 'Enabling tags_api requires a Replay'
permlink: enabling-tagsapi-requires-a-replay
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-06 18:44:15
categories:
- witness-category
tags:
- witness-category
- witness
- whalepower
- witness-node
- steem-nodes
- rpc
- steem-dev
- codeonsteem
thumbnail: 'https://cdn.steemitimages.com/DQmZ7HfqUeR18UK8fyuQbumQqdWnm22SgQ7tWRWMvW5CMRf/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have experimented this twice.. and to be honest, it isn't that great. As both time, I ended up restoring the RPC node from a snapshot and do a replay.

So, here is the story. I got a feedback sometime ago saying that my RPC node https://api.justyy.com hasn't enabled the `tags_api`

Last month, i experimented by adding `tags_api` to the `config.ini` and restarted the steemd but it didn't work as expected, and somehow it damaged the blockchain files and then I restored a previous snapshot and ended up replaying for a couple of hours.

Today, I was told that i may need to add `tags` as well, which I thought it would make perfect sense, and thus I have added both `tags` and `tags_api`. But again, it didn't work as expected.


![image.png](https://cdn.steemitimages.com/DQmZ7HfqUeR18UK8fyuQbumQqdWnm22SgQ7tWRWMvW5CMRf/image.png)

I then restart the steemd but again it was not able to make it. Unfortunately I had to restore a snapshot that I luckily took prior to the testing.



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

This page is synchronized from the post: ['Enabling tags_api requires a Replay'](https://steemit.com/@justyy/enabling-tagsapi-requires-a-replay)
