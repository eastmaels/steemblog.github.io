
---
title: 'A little Insight on the Steem Load Balancing RPC Node'
permlink: a-little-insight-on-the-steem-load-balancing-rpc-node
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-17 17:25:48
categories:
- codeonsteem
tags:
- codeonsteem
- witness-category
- load-balancer
- programming
- whalepower
- steem-dev
- steem-nodes
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmc8jgKosJkQFqBHndXuxDKDoNVT1QEwvptstmoTGoSKdc/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A few days ago, I launched the "Load Balancing" Node: https://steem.justyy.workers.dev

It is a Javascript code that runs on the CloudFlare edges (more than 200 network centers). The network is the computing. When requests are received, the Node will send a 'ping' request to a few nodes, and whoever returns first win the request.

See this on the <a href="https://helloacm.com/set-up-website-health-checks-canaries-using-cloudflare/" title="Set Up Website Health Checks (Canaries) using CloudFlare">CloudFlare</a> worker debugging console - the remote virtual debugger.

![image.png](https://cdn.steemitimages.com/DQmc8jgKosJkQFqBHndXuxDKDoNVT1QEwvptstmoTGoSKdc/image.png)

But all those work are behind the scenes. The user will not see these details, and the Load Balancer is just working fine - and it indicates the actual Node that served the requests via the Response' custom header `origin`


![image.png](https://cdn.steemitimages.com/DQmNqnMdmqFnLSePiDAYiFjSCHQySPWh6igS463LWR8zKss/image.png)


<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[ Reposted to Computing and Technology](https://helloacm.com/using-cloudflare-worker-serverless-technology-to-deploy-a-load-balancer-rpc-node-for-steem-blockchain/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['A little Insight on the Steem Load Balancing RPC Node'](https://steemit.com/@justyy/a-little-insight-on-the-steem-load-balancing-rpc-node)
