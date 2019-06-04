
---
title: 'How to calculate reputation score?  I tell you.'
permlink: how-to-calculate-credit-score-reputation-score-i-tell-you
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-18 07:37:36
categories:
- steemit
tags:
- steemit
- reputation
- score
- github
- cn
thumbnail: http://jhgmediagroup.com/wp-content/uploads/2015/10/BLOG-20130716-RepMgmt.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://jhgmediagroup.com/wp-content/uploads/2015/10/BLOG-20130716-RepMgmt.png)
****
I want to develop some tools on reputation score, the first problem I encountered was how to calculate credit score reputation score?

I can obtain "reputation" on steemd.com or by other method for specified user, 
such as @dan : `Reputation	43,124,333,723,646`
@dantheman : `Reputation	125,415,466,468,831`
But I don't know how to convert them to dan (`66`) or dantheman (`70`)

I try to finger it out by search it on steemit and on web,  but not helpful.
****
And how to?
Eventually I found the solution on GitHub.
https://github.com/steemit/steemit.com/blob/master/app/utils/ParsersAndFormatters.js

```
/**
    This is a rough approximation of log10 that works with huge digit-strings.
    Warning: Math.log10(0) === NaN
*/
function log10(str) {
    const leadingDigits = parseInt(str.substring(0, 4));
    const log = Math.log(leadingDigits) / Math.log(10)
    const n = str.length - 1;
    return n + (log - parseInt(log));
}

export const repLog10 = rep2 => {
    if(rep2 == null) return rep2
    let rep = String(rep2)
    const neg = rep.charAt(0) === '-'
    rep = neg ? rep.substring(1) : rep

    let out = log10(rep)
    if(isNaN(out)) out = 0
    out = Math.max(out - 9, 0); // @ -9, $0.50 earned is approx magnitude 1
    out = (neg ? -1 : 1) * out
    out = (out * 9) + 25 // 9 points per magnitude. center at 25
    // base-line 0 to darken and < 0 to auto hide (grep rephide)
    out = parseInt(out)
    return out
}
```
****
And you can convert it to any programing language you like.
That's all, thank you.

- - -

This page is synchronized from the post: [How to calculate reputation score?  I tell you.](https://steemit.com/@oflyhigh/how-to-calculate-credit-score-reputation-score-i-tell-you)
