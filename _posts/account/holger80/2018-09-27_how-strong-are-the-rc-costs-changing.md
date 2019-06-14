
---
title: 'How strong are the RC costs changing?'
permlink: how-strong-are-the-rc-costs-changing
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-27 22:14:54
categories:
- steem
tags:
- steem
- hf20
- hardfork
- rc
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmdWmbZ9rtFv7DHwWciCdQ3C3ceCze3eFYqTSoaVUWiys8'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I'm working currently on an exact calculation of RC costs for the [beem](https://github.com/holgern/beem) library. I will write an Utopian post about the new features when Utopian has recovered.

The script is creating a signed operation and calculates the exact RC costs that would have been charged when broadcasting the operation. As the calculation is accurate, we can see the smallest changes.

I calculated the RC costs 600x  for 
* my last [post](https://steemit.com/steem/@holger80/rc-costs-do-not-depend-on-compute-time)
* a transfer: `{"from": "holger80", "to": "beembot", "amount": Amount("0.001 STEEM"), "memo": "Test"}`
* a vote: `{"voter": "timcliff", "author": "holger80", "permlink": "rc-costs-do-not-depend-on-compute-time", "weight": 10000}`


## First results
### RC costs for a post
![rc_comment.png](https://ipfs.busy.org/ipfs/QmdWmbZ9rtFv7DHwWciCdQ3C3ceCze3eFYqTSoaVUWiys8)

### RC costs for a transfer
![rc_transfer.png](https://ipfs.busy.org/ipfs/QmPVcid3McwEdDVN8FMzUMKU5k13ix5QseqsAH6HoXhUEE)

### RC costs for a vote
![rc_vote.png](https://ipfs.busy.org/ipfs/QmenFWaenejdnbNCm6ckoqgiETDHNbf7Y2fbQAb2okbLw6)

## Conclusion
All RC costs are going down right now. But the RC costs for a post/comment are almost constant.

I will continue to work on the new `rc` module for `beem`.

- - -

This page is synchronized from the post: ['How strong are the RC costs changing?'](https://steemit.com/@holger80/how-strong-are-the-rc-costs-changing)
