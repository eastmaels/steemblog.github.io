
---
title: 'beem version 0.20.14 released - createwallet fixed and other improvements'
permlink: beem-version-0-20-14-released-createwallet-fixed-and-other-improvements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-07 17:05:09
categories:
- steemdev
tags:
- steemdev
- beem
- steemtank
- python
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem ([beem discord channel](https://discord.gg/4HM592V))

The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

### Changelog for release 0.20.14

* unit tests fixed
* Account: support for retrieving all delegations (thanks to crookon, PR #129)
* Change recovery account / list recovery account change requests (thanks to crokkon, PR #130)
* Exclude sbd_interest_rate, as it is not present on the VIT blockchain (thanks to svitx, PR #132)
* connect for beempy createwallet (thanks to crokkon, PR #133)

## Changes on api.steemit.com
There are some changes on the API ([post](https://steemit.com/steemit/@steemitdev/upcoming-changes-to-api-steemit-com)). They will going live this evening.
The following queries may not work:

```
    get_post_discussions_by_payout   
    get_comment_discussions_by_payout  
    get_discussions_by_cashout
    get_discussions_by_children
    get_discussions_by_votes
    get_discussions_by_active 
    get_discussions_by_trending
    get_discussions_by_payout  
    get_discussions_by_author_before_date 
```

The following function will be replaced by  get_discussions_by_blog() and get_discussions_by_feed(). I will work on a replacement.
```
    get_feed_entries()
    get_feed()
    get_blog_entries()
    get_blog()
```
This means that account.get_feed() and get_feed.get_blog() may not work. I will try to fix the related beem functions.

The following function might also be unavailable from today evening.
```
    get_account_reputations()
    get_reblogged_by()
    get_blog_authors()
    get_tags_used_by_author()
```
The following functions are available through the condenser API (beem should work, I will test).
```
get_content
get_content_replies 
get_active_votes
get_account_votes
```



- - -

This page is synchronized from the post: ['beem version 0.20.14 released - createwallet fixed and other improvements'](https://steemit.com/@holger80/beem-version-0-20-14-released-createwallet-fixed-and-other-improvements)
