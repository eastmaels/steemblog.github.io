
---
title: 'Old New Tool: View Your Proxy Supporters'
permlink: old-new-tool-view-your-proxy-supporters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-24 15:49:42
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-tool
- steem-dev
- steem-tools
- sql
- programming
- witness-proxy
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is technically not a new tool. However, it was based on @steemsql - which is now dead.

It is not that difficult to gather the information needed for this tool. You just need to crawl blocks from 0 to the latest, then sync with it, extracting the relevant information (account_witness_proxy)  and store them in a database either relational such as sqlite, mysql or non-relational such as mongodb.

Depending on the schema, you could store entire witness proxy history, or store all proxy votes from same account, or even, store only the latest proxy votes (disregard previous votes).

The first two scenarios require filtering previous votes:

```
sql = """
SELECT name,proxy,time,block  
FROM proxy as P1 where
block = (
   select max(block) from
   proxy as P2
   where P2.name = P1.name
) and 
proxy = '""" + id + """'
order by time desc
"""
```

Any way, the tool:
[https://steemyy.com/proxy/](https://steemyy.com/proxy/)
Chinese verision: [https://steemyy.com/list-of-proxy/](https://steemyy.com/list-of-proxy/)

And API is provided as well, where it returns not only the direct proxy voters but who vote them, and who vote who vote them... 

Example:
https://steemyy.com/api/steemit/proxy/?cached&id=justyy
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

This page is synchronized from the post: ['Old New Tool: View Your Proxy Supporters'](https://steemit.com/@justyy/old-new-tool-view-your-proxy-supporters)
