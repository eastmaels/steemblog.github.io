
---
title: 'Subscribe to CloudFlare Worker Unlimited'
permlink: subscribe-to-cloudflare-worker-unlimited
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-13 19:20:36
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
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The CloudFlare Worker has a free plan - but it only allows up to 100K requests (including invalid) per day. The request counter resets at midnight UTC.

My LB node https://steem.justyy.workers.dev  is implemented using Worker script. And it gets popular. Thus, i have purchased the Unlimited plan - which starts at $5 per month - which also lifts the CPU time from 10ms to 50ms, and includes 10Million requests per month (roughtly 330K per day).

I have also pointed the subdomain steem.justyy.com to it which is easier to remember, however, at the moment, due to unknown technical problems, the alias domain isn't working as expected.

Here is the response text:

```
{"jsonrpc":"2.0","error":{"code":-32000,"message":"End Of File:stringstream","data":{"code":11,"name":"eof_exception","message":"End Of File","stack":[{"context":{"level":"error","file":"sstream.cpp","line":109,"method":"peek","hostname":"","timestamp":"2020-07-13T19:04:42"},"format":"stringstream","data":{}},{"context":{"level":"warn","file":"json.cpp","line":489,"method":"from_string","hostname":"","timestamp":"2020-07-13T19:04:42"},"format":"","data":{"str":""}}]}},"id":null}
```

I will look into this and hopefully can finish this soon.


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

This page is synchronized from the post: ['Subscribe to CloudFlare Worker Unlimited'](https://steemit.com/@justyy/subscribe-to-cloudflare-worker-unlimited)
