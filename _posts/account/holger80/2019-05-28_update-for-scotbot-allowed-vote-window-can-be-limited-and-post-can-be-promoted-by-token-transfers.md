
---
title: 'Update for scotbot - allowed vote window can be limited and post can be promoted by token transfers'
permlink: update-for-scotbot-allowed-vote-window-can-be-limited-and-post-can-be-promoted-by-token-transfers
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-28 14:47:27
categories:
- scot
tags:
- scot
- steem-engine
- sct
- steemdev
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NedScottnew-01.jpg](https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg)

As you can see here:
https://scot-api.steem-engine.com/config?token=SCT

Two new configuration parameters have been added:

| name | default | value for SCT token |
| --- | --- | --- |
| vote_window_days| -1 | 2 |
| promoted_post_account | null | null |

## `vote_window_days`
It is now possible to limit the time window when a post can receive up- and down-votes. When this parameter is greater than zero, votes casted at a post/comment which are older than `vote_window_day`will not increase / decrease the payout and the voter will not receive curation rewards.

For SCT, it is now set to 2 days. The payout window of SCT token for a post with sct tag remains at 3 days after creation. All vote operation that were broadcasted on a  post which was older than 2 days will not have an effect on the SCT payout. The steem payout and the steem curation rewards are not changed at all.

This parameter was implemented in order to limit abuse, in which posts were upvoted in the last seconds.

## Promoting posts with tokens
All SCOT tokens can now be used to promote posts in their specific nitrous instance. For example SCT token can then be used to promote posts in https://www.steemcoinpan.com/promoted.

When sending token with a post link as memo to the `promoted_post_account` account, they will be shown in the promoted tab of nitrous.  The changes have been implemented in the SCOT backend, but not yet in the nitrous frontend.

The promoted posts will be shown ordered by the promoted token that have been spend. Only pending posts are shown in the promoted tab.

When nitrious is updated, promotion of a post can be performed by sending some SCT token to null (this is currently the `promoted_post_account` for SCT):
![image.png](https://ipfs.busy.org/ipfs/QmVN6meCj1foQL1X1DG8ueMfLvbdQdUnqCo8PSVjPeqNNv)


- - -

This page is synchronized from the post: ['Update for scotbot - allowed vote window can be limited and post can be promoted by token transfers'](https://steemit.com/@holger80/update-for-scotbot-allowed-vote-window-can-be-limited-and-post-can-be-promoted-by-token-transfers)
