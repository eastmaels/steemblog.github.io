
---
title: 'Improvement to the Load Balancing Node'
permlink: improvement-to-the-load-balancing-node
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-12 10:58:00
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
thumbnail: 'https://cdn.steemitimages.com/DQmYwA5m57ChkYF8pZBbbZJbFKqSZw1RkHSVRFWMiSeuD8s/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My Load Balancing RPC Node is getting popular, here is the statistics of the last 24 hours.

![image.png](https://cdn.steemitimages.com/DQmYwA5m57ChkYF8pZBbbZJbFKqSZw1RkHSVRFWMiSeuD8s/image.png)

![image.png](https://cdn.steemitimages.com/DQmbDwi8TBj3P56PctKiejDtm28DEwdCbazVSo9Yko9YaAf/image.png)

## Setting Origin in the Header
In case you want to know the origin server that serves the request, you can check the custom header `Origin`. The `Server` header field is overridden by CloudFlare.

![image.png](https://cdn.steemitimages.com/DQmTaTxFqF22L5F1w7Ph2sQuP8ntW2AwSJLMoiAgBzUjmA9/image.png)


![image.png](https://cdn.steemitimages.com/DQmX1dVw5rj1XpzHNg7qJfPM8pQSrjKmsB33QPYvWPdgpTa/image.png)


## Adding more Nodes
I have also added nodes (provided by @ety001) so now the LB node has the following candidate servers that better suitable requests all over the world.

```
let nodes = [
  "https://api.justyy.com",
  "https://api.steemit.com",
  "https://api.steemitdev.com",
  "https://api.steem.fans",
  "https://steem.61bts.com"
];
```

In China, the official `api.steemit.com` is blocked, so using this Load Balancer is advantageous:

https://steem.justyy.workers.dev

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

This page is synchronized from the post: ['Improvement to the Load Balancing Node'](https://steemit.com/@justyy/improvement-to-the-load-balancing-node)
