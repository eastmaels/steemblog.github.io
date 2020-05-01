
---
title: 'Added API to check if a Steem UserName is taken'
permlink: added-api-to-check-if-a-steem-username-is-taken
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-01 18:46:09
categories:
- witness-category
tags:
- witness-category
- api
- witness-update
- steem-api
- whalepower
- programming
- curl
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


From now, you can query the API */api/steemit/account/validate-user/*  to retrieve the status of a steem account name.

For example:
> curl -s -X POST "https://steemyy.com/api/steemit/account/validate-user/" -d "id=justyy"

This will return:

> {"accountName":"justyy","result":"taken"}

If a username is invalid, e.g.

> curl -s -X POST "https://steemyy.com/api/steemit/account/validate-user/" -d "id=123"

This will return:

> {"accountName":"123","result":"Account name should start with a letter."}

Otherwise:

> curl -s -X POST "https://steemyy.com/api/steemit/account/validate-user/" -d "id=justyy12345"

if a user account is not existent (meaning that it is available)

> {"accountName":"justyy12345","result":"good"}

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

This page is synchronized from the post: ['Added API to check if a Steem UserName is taken'](https://steemit.com/@justyy/added-api-to-check-if-a-steem-username-is-taken)
