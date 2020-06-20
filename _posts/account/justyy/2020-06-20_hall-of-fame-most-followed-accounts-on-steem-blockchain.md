
---
title: 'Hall of Fame - Most Followed Accounts on Steem Blockchain'
permlink: hall-of-fame-most-followed-accounts-on-steem-blockchain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-20 17:57:57
categories:
- witness-category
tags:
- witness-category
- witness-tools
- whalepower
- steem-dev
- steem-tools
- codeonsteem
- programming
thumbnail: 'https://cdn.steemitimages.com/DQmQLHKFoBuJt3DWybxev4KJHH5LDEiFd3Vi7vdCiEZNsTh/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Yesterday, a page was made to list the top blocked  accounts on steem blockchain.
https://steemit.com/witness-category/@justyy/hall-of-fame-most-blocked-muted-accounts-on-steem-blockchain

It should be fairly simple to make another one that lists the most popular (followed) accounts on steem blockchain, by simply changing the query to:

```
select whom,count(1) from mute where what='follow' group by whom order by count(1) desc limit 100;
```

However, the query takes around 20 minutes to complete which I'll explain when I dig a bit further. Anyway, here is the results based on today's data:

![image.png](https://cdn.steemitimages.com/DQmQLHKFoBuJt3DWybxev4KJHH5LDEiFd3Vi7vdCiEZNsTh/image.png)

It is also interesting to see that many accounts are on both lists - which mean that some like it - and also some don't like it - for instance: @sweetsssj @cryptoriddler 

It is normal that not everybody's opinions are the same.

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

This page is synchronized from the post: ['Hall of Fame - Most Followed Accounts on Steem Blockchain'](https://steemit.com/@justyy/hall-of-fame-most-followed-accounts-on-steem-blockchain)
