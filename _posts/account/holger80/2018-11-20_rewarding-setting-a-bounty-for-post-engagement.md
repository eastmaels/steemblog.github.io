
---
title: 'rewarding - setting a bounty for post engagement'
permlink: rewarding-setting-a-bounty-for-post-engagement
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-20 22:08:36
categories:
- steemdev
tags:
- steemdev
- steemtank
- rewarding
- busy
- steemde
thumbnail: 'https://ipfs.busy.org/ipfs/QmXyGsXXpN7MtWQfnAkuVJsBhgY8xJskCKD2mhXL8KUR4y'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmXyGsXXpN7MtWQfnAkuVJsBhgY8xJskCKD2mhXL8KUR4y)
[source](https://pixabay.com/de/bounty-schokoriegel-schokolade-1744067/)

I'm testing and developing for some time now my @rewarding helper. It can be used as soon as he has the posting authority (https://steemconnect.com/authorize/@rewarding).

I will disable the bot by `$rewarding skip`, so that I can write down commands to rewarding without triggering them. 

You can find commands for delayed upvotes and for rewarding paid-out posts in my last [post about rewarding](https://steemit.com/steemdev/@holger80/rewarding-an-delayed-upvote-and-paid-out-post-upvote-helper).

In the newest update, I added a way to reward comment writer by distributing a 100% vote between them. The command for this is:
```
$rewarding bounty 100% 3days
```
where `100%` is the upvote percentage of the comment in which the beneficiaries is set. `3days` is the delay, when the comment upvotes will be counted. At the moment only days are possible, but it is possible to define hours by using a float number: 0.1days (2.4 hours).

The command has to be written down into a comment or in the post itself. It is possible to set a bounty on posts from other authors.

When days are not set, the comments are counted after 6.5 days since post creation.

After 3 days, the rshares of all top level comments are counted. The rshares of the bounty creator have a 80% weight, whereas the rshares of all others votes are counted with 20% weight. Self-votes are skipped. Comments from the bounty creator are also skipped. The top 8 comment writer, will then be rewarded proportional to their voted and weighted rshares. This is done by creating a comment and adding beneficiaries to the winners, so that the comment reward is distributed between them.

![image.png](https://ipfs.busy.org/ipfs/Qmc68bCwWUETwKDfPTffSeo1GSwu36cJtZaW2TiQEnskTo)


___
Thanks to all Delegators who allow me to run this project:
50 SP delegated by @idikuci
50 SP delegated by @dimitrisp
50 SP delegated by @condeas
50 SP delegated by @dj123
50 SP delegated by @pechichemena

- - -

This page is synchronized from the post: ['rewarding - setting a bounty for post engagement'](https://steemit.com/@holger80/rewarding-setting-a-bounty-for-post-engagement)
