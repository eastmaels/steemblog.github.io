
---
title: 'How Many Zero-Transaction Blocks?'
permlink: how-many-zero-transaction-blocks
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-16 18:39:00
categories:
- codeonsteem
tags:
- codeonsteem
- witness-category
- software
- programming
- whalepower
- steem-dev
- cryptocurrency
- steem
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When SteemMonster moved away from Steem, I noticed that the number of transactions in a block has been drastically reduced. 

That is not good, the number of transactions shows the activity on the steem blockchain, in a way indicates how popular our chain is.

With a little help, I am able to see how many blocks are having zero transactions in the last 24 hours, 7 days, and 2 weeks.

```
select count(1) from witnessblocks where number=0 and time>=datetime("now", "-1 day");
select count(1) from witnessblocks where number=0 and time>=datetime("now", "-7 day");
select count(1) from witnessblocks where number=0 and time>=datetime("now", "-14 day");
select count(1) from witnessblocks where number>0 and time>=datetime("now", "-1 day");
select count(1) from witnessblocks where number>0 and time>=datetime("now", "-7 day");
select count(1) from witnessblocks where number>0 and time>=datetime("now", "-14 day");
```

## Results
Zero-transactions blocks (24 hours): 263/28257=0.9%
Zero-transactions blocks (7 days): 2000/197666=1.01%
Zero-transactions blocks (14 days): 3425/367386=0.93%

On average, there are 0.9% to 1% per day blocks are containing zero transactions. More investigations can be done once the blocks are fully re-played.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[ Computing and Technology](https://helloacm.com/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['How Many Zero-Transaction Blocks?'](https://steemit.com/@justyy/how-many-zero-transaction-blocks)
