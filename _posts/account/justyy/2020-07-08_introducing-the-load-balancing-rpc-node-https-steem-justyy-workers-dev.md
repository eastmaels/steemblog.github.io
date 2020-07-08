
---
title: 'Introducing the Load Balancing RPC Node: https://steem.justyy.workers.dev/'
permlink: introducing-the-load-balancing-rpc-node-https-steem-justyy-workers-dev
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-08 13:21:39
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
thumbnail: 'https://cdn.steemitimages.com/DQmS8mqhoxG9iNDCJokMdtD64YEytJRJ9B1XqjMTpe2xwRD/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A node is a node, it fails sometimes. So what happens when a RPC node fails? You can fail over - but that requires you to write some code to try next available node.

How about I tell you that I  provide a Load balancing RPC Node that will automatically find the fastest route (a good one) and redirect the STEEM API calls for you?


# Introducing the Load Balancing RPC Node: https://steem.justyy.workers.dev/

See the list of nodes: [https://steemyy.com/node-status.php](https://steemyy.com/node-status.php)

![image.png](https://cdn.steemitimages.com/DQmS8mqhoxG9iNDCJokMdtD64YEytJRJ9B1XqjMTpe2xwRD/image.png)

![image.png](https://cdn.steemitimages.com/DQmSeC6NvqAGFM1znKP6N28qWj1tNqe5ebqKnHPhFoWL29q/image.png)

[https://steemyy.com/steemjs/](https://steemyy.com/steemjs/)
![image.png](https://cdn.steemitimages.com/DQmQutYyxXv9GxQtw9V6HQjgwWT5oeRDkdrGgaaPKejpEHa/image.png)

# The candidate nodes:
Currently, I have added the following:

```
let nodes = [
"https://api.justyy.com",
"https://api.steemit.com",
"https://api.steemitdev.com",
];
```

So, the chance of all three nodes die - almost close to ZERO. That should give you some confidence of using it. The Load Balancer Node lives on the CloudFlare Edge - (yes, the serverless function)


![image.png](https://cdn.steemitimages.com/DQmVCUankzTKn3Ski71kG1RJDwqADQrJ6fonmPW8DUxTWtP/image.png)


## Beware that this node returns different version number, sometimes 0.23.0 and sometimes 0.23.1!

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

This page is synchronized from the post: ['Introducing the Load Balancing RPC Node: https://steem.justyy.workers.dev/'](https://steemit.com/@justyy/introducing-the-load-balancing-rpc-node-https-steem-justyy-workers-dev)
