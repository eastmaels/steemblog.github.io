
---
title: 'nextcolony - mission control skill has been slightly modified'
permlink: nextcolony-mission-control-skill-has-been-slightly-modified
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-05 13:54:45
categories:
- nextcolony
tags:
- nextcolony
- steem
- blockchain
- gaming
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NextColonyTeaser1.jpg](https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg)

As you might know, the mission control skill in [NextColony](https://nextcolony.io/) limits the number of ongoing missions. 

An update was released today, which modifies the behavior of the mission control skill in NextColony. Before the update, it was implemented that the number of missions that could be active is `mission control level * 2`, and when the skill level was zero, one mission could still be running.

As this could be exploited by gifting planets to alt-accounts (when each alt-account, who has build or received an explorer on this planet, started an explore mission and gifted the planet to the next alt-account, the number of parallel running explore mission is equal the number of alt-accounts. The mission control skill can be 0 for all alt-accounts), we decided to modify the skill.

The number of active missions depends now on the start planet. The start planet is the planet which is shown when logging in. Only one planet can have this attribute and normally the first received planet is the start planet.

`mission control skill level * 2 + 1` mission can be active when starting them from the start planet. Otherwise `mission control skill level * 2` missions can be active. Thus, when gifting a planet to another account that has mission control level 0, it is not possible anymore for the account to start a mission from the gifted planet. Only when the account has learned mission control level 1, a mission can be started from the gifted planet.

- - -

This page is synchronized from the post: ['nextcolony - mission control skill has been slightly modified'](https://steemit.com/@holger80/nextcolony-mission-control-skill-has-been-slightly-modified)
