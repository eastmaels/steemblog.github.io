
---
title: 'Showing Real Time Block/Witness in Witness Page'
permlink: showing-real-time-block-witness-in-witness-page
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-23 08:00:06
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-tool
- steem-dev
- steem-tools
- steemjs
- programming
- witness-ranking
thumbnail: 'https://cdn.steemitimages.com/DQmZFxusLZj4rWnQkJxugi2vuCyQaHpeMUdieCgJ8QpGbVX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


To obtain the current witness and block, you can use the following Steem-Js code

```
steem.api.getDynamicGlobalProperties(function(err, result) {
        if (err) return;
        if (!result) return;
         var block = result.head_block_number;            
         var witness = result.current_witness;
         //update information: witness is producing the block
});
```

When we call the above function using `setInterval` like every 3 seconds, the block numbers are updated realtime.


![image.png](https://cdn.steemitimages.com/DQmZFxusLZj4rWnQkJxugi2vuCyQaHpeMUdieCgJ8QpGbVX/image.png)


Witness Ranking Table: [https://steemyy.com/witness-ranking/](https://steemyy.com/witness-ranking/)
Chinese Version: [https://steemyy.com/witness-ranking-table/](https://steemyy.com/witness-ranking-table/)

------------

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

This page is synchronized from the post: ['Showing Real Time Block/Witness in Witness Page'](https://steemit.com/@justyy/showing-real-time-block-witness-in-witness-page)
