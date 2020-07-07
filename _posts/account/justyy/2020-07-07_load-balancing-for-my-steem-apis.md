
---
title: 'Load Balancing for My Steem APIs'
permlink: load-balancing-for-my-steem-apis
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-07 18:49:48
categories:
- witness
tags:
- witness
- whalepower
- witness-node
- steem-nodes
- rpc
- steem-dev
- codeonsteem
thumbnail: 'https://cdn.steemitimages.com/DQmS8TnGsdUaWE6V2qaiDuCJSDPmyPQk2hinLc8JQVW8nZ8/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have added a Load Balancing through [CloudFlare Worker](https://developers.cloudflare.com/workers/) to my list of Free APIs at [https://steemyy.com/list-of-api.php](https://steemyy.com/list-of-api.php)

For example, previously you would call:

> https://steemyy.com/api/steemit/delegatees/?cached&id=justyy

Now, you can call the API via Load Balancer:

> https://api.justyy.workers.dev/api/steemit/delegatees/?cached&id=justyy

The Load Balancer will first make a query to my 11 API servers and the first server that returns wins the request - which will be forwarded by the Load Balancer.

Using Load Balancer improves the user experience and also the throughput. It allows you to scale your application horizaontally.

https://i0.wp.com/gbhackers.com/wp-content/uploads/2018/12/Load-Balancer.jpg?fit=759%2C387&ssl=1


![image.png](https://cdn.steemitimages.com/DQmS8TnGsdUaWE6V2qaiDuCJSDPmyPQk2hinLc8JQVW8nZ8/image.png)


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

This page is synchronized from the post: ['Load Balancing for My Steem APIs'](https://steemit.com/@justyy/load-balancing-for-my-steem-apis)
