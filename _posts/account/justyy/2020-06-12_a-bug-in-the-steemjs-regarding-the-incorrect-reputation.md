
---
title: 'A Bug in the SteemJs Regarding the Incorrect Reputation'
permlink: a-bug-in-the-steemjs-regarding-the-incorrect-reputation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-12 17:19:21
categories:
- programming
tags:
- programming
- codeonsteem
- steemjs
- steemdev
- whalepower
- witness-category
- javascript
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmQQuv3X3rB1QE6aD7GgnZgQM1LkSQrXMFucLkRpVmVCwy/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Current SteemJs Library has a bug in computing the reputation. I have [raised this](https://github.com/steemit/steem-js/issues/344) two years ago and [proposed a fix](https://github.com/steemit/steem-js/pull/345/)

Specifically:

```
console.log(steem.formatter.reputation(10004392664120));
console.log(steem.formatter.reputation(10004392664120+100000000000));
```

As you will see this output:

```
70
61
```

Which is incorrect. The problem is at the code [L166](https://github.com/steemit/steem-js/blob/master/src/formatter.js#L166)

Here, the developer probably didn't know the `Math.log10` function can be used to compute the Log10, instead, he/she uses a math trick `Math.log(x)/Math.log(10)` to compute the Math.log10 based on natural logarithm (base e ).

This will introduce rounding errors, and sometimes intermediate results will be amplified leading to much bigger errors.

```
console.log(Math.log10(1000))
console.log(Math.log(1000)/Math.log(10))
```

This will output

```
3
2.9999999999999996
```

In Line [168](https://github.com/steemit/steem-js/blob/master/src/formatter.js#L168), it uses `parseInt`, therefore, the difference will be becoming ONE.

There are a few fixes:
1. change `parseInt` to `Math.round`
2. change entirely to use `Math.log10`
3. or completely rewriting this function, as my PR (approved by @ety001 thanks!, but not merged yet due to this is a legacy PR which was created more than 2 years ago and the main branch has differed a lot).
https://github.com/steemit/steem-js/pull/345/files

![image.png](https://cdn.steemitimages.com/DQmQQuv3X3rB1QE6aD7GgnZgQM1LkSQrXMFucLkRpVmVCwy/image.png)

If you are happening to rely on this function, you probably need to do it yourself until this fix is merged.

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

This page is synchronized from the post: ['A Bug in the SteemJs Regarding the Incorrect Reputation'](https://steemit.com/@justyy/a-bug-in-the-steemjs-regarding-the-incorrect-reputation)
