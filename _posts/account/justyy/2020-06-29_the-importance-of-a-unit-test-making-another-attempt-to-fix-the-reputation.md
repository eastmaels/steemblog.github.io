
---
title: 'The Importance of a Unit Test (Making Another Attempt to Fix the Reputation)'
permlink: the-importance-of-a-unit-test-making-another-attempt-to-fix-the-reputation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-29 16:35:15
categories:
- witness-category
tags:
- witness-category
- whalepower
- steem-js
- codeonsteem
- programming
- javascript
- reputation
- steem-dev
thumbnail: 'https://cdn.steemitimages.com/DQmbZYjrnP6Na7tdTChQSDeWmwowrCbnWaWymaVBuZoLDer/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A few days ago, my PR was finally merged after more than two years (thank you @ety001). It is a good sign that the new SteemIt team is better as they review and care the contributions from the community.

However, when I wrote the implementation in [PHP](https://helloacm.com/steem-reputation-format-function-in-php/), I noticed that the Reputation needs to be returning 25 when 0 is given.

I checked the previous implementation (version 0.7.7): the reputation will return 25 when 0 is given: https://github.com/steemit/steem-js/releases/tag/v0.7.7

<a href="https://steemyy.com/steemjs/?s=log(steem.formatter.reputation(0))%3B">Run Code on SteemJs Editor</a>

![image.png](https://cdn.steemitimages.com/DQmbZYjrnP6Na7tdTChQSDeWmwowrCbnWaWymaVBuZoLDer/image.png)

However, the PR introduced a different behaviour - when 0 is fed into the function, it will return NaN due to Log10. Unfortunately, when there were no relevant unit tests, I couldn't spot this difference.

Thus, I have made another PR, which fixes this inconsistence and adds a few unit tests to ensure the behaviour stays the same.

https://github.com/steemit/steem-js/pull/479/files

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

This page is synchronized from the post: ['The Importance of a Unit Test (Making Another Attempt to Fix the Reputation)'](https://steemit.com/@justyy/the-importance-of-a-unit-test-making-another-attempt-to-fix-the-reputation)
