
---
title: 'Incorrect Reputation Calculated using Steem Js'
permlink: incorrect-reputation-calculated-using-steem-js
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-07 20:11:21
categories:
- utopian-io
tags:
- utopian-io
- steemjs
- bug
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518034140/oh5z0okibghmqora6g9x.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Here is the code to reproduce:

```
steem.api.getAccounts(["mkt"], function(err, result) {
  if (!err) {
     console.log(result[0].reputation);
     console.log(steem.formatter.reputation(result[0].reputation));
  } 
});
```

It will output to console: 

```
10004392664120
70
```

From the steemd.com we can verify @mkt 's Reputation is:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518034140/oh5z0okibghmqora6g9x.png)

But the correct reputation is 61 instead of 70. 

# Environment
Browser: Chrome v64
OS: Win10 64 bit

![](https://steemitimages.com/DQmPyEeD2KAGGW8iSa2KsvYMTYYuHuTNMrfV6vEeszc73Q8/image.png)


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/incorrect-reputation-calculated-using-steem-js">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Incorrect Reputation Calculated using Steem Js](https://steemit.com/@justyy/incorrect-reputation-calculated-using-steem-js)
