
---
title: 'beem version 0.19.55 released'
permlink: beem-version-0-19-55-released
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-08 21:44:42
categories:
- beem
tags:
- beem
- python
- steemdev
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


<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)</center>

[beem](https://github.com/holgern/beem) is a python library for steem. I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V


## Version 0.19.55 contains the following changes:
* Added an example to the custom_json section for documentation by @jrswab ([#74](https://github.com/holgern/beem/pull/74))
* Add get_vote_pct_for_SBD, sbd_to_vote_pct and sbd_to_rshares  by @flugschwein ([#76](https://github.com/holgern/beem/pull/76))
* beembase/objects: fix serialization of appbase trx by @crokkon ([#77](https://github.com/holgern/beem/pull/77))
* Fix many documentation errors (based on error messages when building) by @flugschwein ([#78](https://github.com/holgern/beem/pull/78))
* Fix of unit tests
* Fix appbase detection
* Fix error in check_asset in amount
* `limit` parameter added to get_following, get_followers, get_muters and get_mutings

All 548 unit tests run through (https://circleci.com/gh/holgern/beem/1099).

By the way, the beem github has now over 1000 commits.

## Many thanks to all who contributed something to the new release.




- - -

This page is synchronized from the post: ['beem version 0.19.55 released'](https://steemit.com/@holger80/beem-version-0-19-55-released)
