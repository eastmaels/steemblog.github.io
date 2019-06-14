
---
title: 'Update for scotbot - rewards can be limited to a specific app and beneficiaries token rewards have been implemented'
permlink: update-for-scotbot-rewards-can-be-limited-to-a-specific-app-and-beneficiaries-token-rewards-have-been-implemented
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-22 09:01:54
categories:
- sct
tags:
- sct
- steem-engine
- scot
- smt
- steemdev
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

____
EDIT:
`json_metadata_app_value` was set to Null for the SCT token and posting is possible from every app
___


As you can see here:
https://scot-api.steem-engine.com/config?token=SCT
three new configuration parameters have been added:

| name | default | value for SCT token |
| --- | --- | --- |
| beneficiaries_reward_percentage | 0 | 10 |
| beneficiaries_account | null | sct.admin |
| json_metadata_app_value | None | None |

When a posts reaches its payout date, 10% of the token that this post will receive is now sent to the sct.admin account.
`author_reward_percentage` is now set to 45%, which means that the author will receive 45% and all curators will also receive 45%. So author and curators will receive the same amount of tokens.

Edit: the setting was set back for SCT, so posting is possible again from every app
## SCOT token that have set `json_metadata_app_value` will limit rewards to posts that were posted from the specified app

There is now a `json_metadata_app_value` parameter. When set, only main posts which are posted from the set app are accepted for rewards. As before, the specified tag must still be added to the post.

Comments will be accepted when the parent main post is accepted.

## Parameter setup for other SCOT tokens
@coffeebuds, @actnearn, @pgarcgo, @ribai please let me know, if you want to set some of these new parameters for your SCOT token. The parameter setup throught https://sto.steem-engine.com/#/launch/scotbot will be adapted soon, but I can change the parameter for your bot now.

- - -

This page is synchronized from the post: ['Update for scotbot - rewards can be limited to a specific app and beneficiaries token rewards have been implemented'](https://steemit.com/@holger80/update-for-scotbot-rewards-can-be-limited-to-a-specific-app-and-beneficiaries-token-rewards-have-been-implemented)
