
---
title: 'Design: How to Solve 503 Error of API when Resources are not available?'
permlink: design-how-to-solve-503-error-of-api-when-resources-are-not-available
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-13 16:25:09
categories:
- codeonsteem
tags:
- codeonsteem
- steemjs
- steemdev
- whalepower
- witness-category
- api
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


The HTTP [503 Error](https://helloacm.com/how-to-respond-with-503-service-busy-to-requests-when-server-load-average-is-high/) indidicates the server is busy. It might be due to the fact that the servers are overloaded (high load average).

One of my API is designed to return 503 Error when the cached file is not available. It is designed as the follows:

```
if (!is_file($file)) {
    throw_503();
    die();
}
```

The $file will be updated periodically e.g. every minute via [Crontab](https://helloacm.com/crontab-generator/). When the OS is writing to that file, the `is_file` will return false because the file is in-use.

One way of solving this is to have multiple caching versions, to avoid the single point of failure. For example, if a file-1 is not available we can check for file-2. These two files should not be updated at the same time.

Another way to resolve this issue is to add a delay check (hacky solution), for example:

```
if (!is_file($file)) {
   sleep(1); // delay check.
}
if (!is_file($file)) {
    throw_503();
    die();
}
```

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/design-how-to-solve-503-error-of-api-when-resources-are-not-available/)
------------------


If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Design: How to Solve 503 Error of API when Resources are not available?'](https://steemit.com/@justyy/design-how-to-solve-503-error-of-api-when-resources-are-not-available)
