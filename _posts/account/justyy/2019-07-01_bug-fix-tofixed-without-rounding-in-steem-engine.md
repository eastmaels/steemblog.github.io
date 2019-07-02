
---
title: 'Bug Fix: ToFixed Without Rounding in Steem-Engine '
permlink: bug-fix-tofixed-without-rounding-in-steem-engine
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-01 17:30:18
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- sct
- witness-category
thumbnail: 'https://ipfs.busy.org/ipfs/QmQCr361BktNr66ht2DzWfFEynveVSECjn3ynxiEz2kaaA'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introduction
This is a proper fix as to previous [PR](https://github.com/MattyIce/steem-engine/pull/68/files)

The function formatSteemAmount will not have 3 decimal places for input values less than 3 decimal places. For example, formatSteemAmount(3.1) will return "3.1"

![image.png](https://ipfs.busy.org/ipfs/QmQCr361BktNr66ht2DzWfFEynveVSECjn3ynxiEz2kaaA)

This will be a problem for steem-js as it is expecting exactly 3 digits.

Therefore, I have made a function that does exactly this purpose: preserve 3 decimal places without rounding: see my blog: https://helloacm.com/javascripts-tofixed-implementation-without-rounding/

# Pull Request
https://github.com/MattyIce/steem-engine/pull/77

# How I Implement it?
I implement the Number's prototype function *toFixedNoRounding* that will first convert the number into string, and use regex to grep at most 3 digits.

![image.png](https://ipfs.busy.org/ipfs/QmZzkQ6gAZaf4yaXzgYxVTeS9CXF1pbiQc2yoDe8VnrZZF)

Next, I will search for the dot position and repeat zeros if not enough.


------------------------------------------------
If you believe what I am doing, please consider a spare vote voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), thank you very much indeed.

@justyy - the author of https://SteemYY.com and I have been a Steem Witness for [more than a year now.](https://steemit.com/witness-category/@justyy/one-year-winessversary-a-great-start)

- - -

This page is synchronized from the post: ['Bug Fix: ToFixed Without Rounding in Steem-Engine '](https://steemit.com/@justyy/bug-fix-tofixed-without-rounding-in-steem-engine)
