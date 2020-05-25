
---
title: 'Showing Witness Vote Values'
permlink: showing-witness-vote-values
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-25 19:02:00
categories:
- witness-category
tags:
- witness-category
- whalepower
- witness-tool
- steem-dev
- steem-tools
- programming
- witness-votes
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmb4HeahizCEppi6zJUcSBEcKMtnzDorm7XvogDJSnujkR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The `steem.api.getAccounts` allows us to query a list of accounts at the same time. And we can compute each account's witness vote value (combined of own-vote and proxy-vote).

```
steem.api.getAccounts(accounts, function(err, result) {
      var proxy_votes = result[i].proxied_vsf_votes;
      var vests = result[i].vesting_shares.replace(" VESTS", "");
      var sum = 0;
      for (let x of proxy_votes) {
           sum += parseFloat(x);
      }
      // total vote value --- sum             
});
```

We can add these information in client side, using SteemJs when the page DOM is loaded. 

Example tool:   [https://steemyy.com/proxy/?id=justyy](https://steemyy.com/proxy/?id=justyy)

![image.png](https://cdn.steemitimages.com/DQmb4HeahizCEppi6zJUcSBEcKMtnzDorm7XvogDJSnujkR/image.png)

Or we can add these in the server API.

Example: Witness Ranking Table, you should see extra column showing how big a witness vote is:

Witness Ranking Table: [https://steemyy.com/witness-ranking/](https://steemyy.com/witness-ranking/)

![image.png](https://cdn.steemitimages.com/DQmas5XU6GiEYyqJ6ToBBeTTwSJMQZNXsMc81vw9RzSNtm2/image.png)


<hr/>

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

This page is synchronized from the post: ['Showing Witness Vote Values'](https://steemit.com/@justyy/showing-witness-vote-values)
