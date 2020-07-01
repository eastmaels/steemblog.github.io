
---
title: 'Some thoughts on the Steem RPC Node Infrastructure'
permlink: some-thoughts-on-the-steem-rpc-node-infrastructure
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-01 18:39:09
categories:
- witness-category
tags:
- witness-category
- witness-node
- network
- whalepower
- network-infrastructure
- steem-node
- rpc-node
- resilience
thumbnail: 'https://cdn.steemitimages.com/DQma8xrKGxG7Pb6CoUYCUBsP3BbWx7P1QBNoTe9MvyzN4SD/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you know, I provide a RPC Node  https://api.justyy.com  however, recent network power loss made me thinking how zero resilient this node is. It is just a single node - that suffers single point of failure. In particular, it lacks of the following:

## Load Balancer
A Load Balancer (LB) servers as the first point of contact to users. Based on scheduling algorithms (such as Round-robin, IP hashing or based on the least load), it re-routes the requests to different servers. 

![image.png](https://cdn.steemitimages.com/DQma8xrKGxG7Pb6CoUYCUBsP3BbWx7P1QBNoTe9MvyzN4SD/image.png)

The Load Balancers can also be a single point of failure. When it goes down (less likely), we can recover this by using a master-master or master-slave solution. Once master LB is down, the backup or slave LB will automatically take over.

Nowadays, you don't actually need to set up LB. You can just pay extra, make some configurations, and you will have a LB set up and working for you.

## CDN / Reverse Proxy
The CDN helps to cache the contents in edge nodes, which is closer geographically to your users. When you use Reverse Proxy - you can hide your IP or original server and set up a Firewall to protect you from malicious users e.g. DDOS attacks.

Kudos to @steemitblog as I think the official Node api.steemit.com is quite stable and very resilient.

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

This page is synchronized from the post: ['Some thoughts on the Steem RPC Node Infrastructure'](https://steemit.com/@justyy/some-thoughts-on-the-steem-rpc-node-infrastructure)
