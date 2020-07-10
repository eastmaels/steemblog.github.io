
---
title: 'A Glance on the Traffic to the Load Balancer Node'
permlink: a-glance-on-the-traffic-to-the-load-balancer-node
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-10 18:10:51
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
thumbnail: 'https://cdn.steemitimages.com/DQmNeHSY1GKveNU7uU6dGVBDZBE75bjzutQfVomqvJaf21b/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Yesterday, I presented you a [Load Balancer Node](https://steemit.com/witness-category/@justyy/load-balancing-for-my-steem-apis) which is at:

https://steem.justyy.workers.dev

The advantages of using this node is:
1. Close to 100% availability: the Node lives on the edge network (serverless function), and all it does is to forward your Steem API requests to an available node from the pre-defined list. The chances of all nodes go down are really unlikely to happen.
2. Faster. The Load Balancer is automatically chosen that is georaphically close to you. Then depending on your location, it will pick a fastest node.

Well, we call it load balancer - but this node is not taking the actual 'load' into account. It considers the ping time instead. But, in a sense, the node that responds slower may be likely to be on a high load average.

Here is some stats for this load balancer in the last 24 hours.


![image.png](https://cdn.steemitimages.com/DQmNeHSY1GKveNU7uU6dGVBDZBE75bjzutQfVomqvJaf21b/image.png)


![image.png](https://cdn.steemitimages.com/DQmdRjVfNajK4ZEbj2TS8MBcmmit46yiH5FU6dSAqu73d8p/image.png)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to Computing & Technology](https://helloacm.com/how-many-blocks-and-total-rewards-for-a-steem-witness-in-the-past-24-hours/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['A Glance on the Traffic to the Load Balancer Node'](https://steemit.com/@justyy/a-glance-on-the-traffic-to-the-load-balancer-node)
