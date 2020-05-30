
---
title: 'Recursive Algorithm to Get Proxy Votes'
permlink: recursive-algorithm-to-get-proxy-votes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-29 19:52:48
categories:
- recursion
tags:
- recursion
- algorithm
- whalepower
- witness-tool
- steem-dev
- steem-tools
- programming
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Regarding this tool: [https://steemyy.com/proxy/](https://steemyy.com/proxy/)
In case you might not notice, this tool also returns the indirect proxy supporters.
For example,

danielhuhservice  proxies to der-prophet, who sets proxy to steemchiller.

# Recursion
If you perform real-time scan backwards on the steem blockchain, it is hard to obtain the indirect proxy because for each direct proxy, you have to spawn new thread search their account history.

Real-time processing is slow, and thus we process and sync the blocks into a database. Suppose you can use a SQL to obtain the direct proxy voters like this:

```
def getProxy(account):
   sql = "select account from proxy where proxy=" + account;
   con.exec(sql)
  data = []
   for row in cur.fetchall():
    # recursive 
     data.append({"account": row[0], "voters": getProxy(row[0])
  return data
```

Here it is the beauty of the recursion.  We call the function itself to fill the voters array of the current proxy. 

## Terminating the Recursion
Usually, for [recursion](https://helloacm.com/how-to-print-immutable-linked-list-in-reverse-using-recursion-or-stack/) to work, you have to set a terminal condition, otherwise, the recursive calls might go forever which causes the infamous "Stack Overflow". 

But in our case, the steem blockchain, this might be ok without it. As you can't broadcast a proxy vote to someone who proxies you back, or even proxies to someone who proxies to you  - which causes a loop.

You can, however, pass a maximum depth value (as a second parameter), as a safety check.

```
def getProxy(account, depth = 5):
  if depth == 0:
      # max depth exceeded, just return empty array
      return []
   sql = "select account from proxy where proxy=" + account;
   con.exec(sql)
  data = []
   for row in cur.fetchall():
    # recursive 
     data.append({"account": row[0], "voters": getProxy(row[0], depth - 1)
  return data
```
<hr/>

I hope this helps!
*Reposted to the [blog](https://helloacm.com/recursive-algorithm-to-get-proxy-votes-on-steem-blockchain/)*


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

This page is synchronized from the post: ['Recursive Algorithm to Get Proxy Votes'](https://steemit.com/@justyy/recursive-algorithm-to-get-proxy-votes)
