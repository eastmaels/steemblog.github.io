
---
title: 'python steemmonsters 0.0.14 released '
permlink: python-steemmonsters-0-0-14-released
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-31 10:41:06
categories:
- steemmonsters
tags:
- steemmonsters
- steemtank
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmQcDkepPifWmJDvfR6w4Hkb93ZGpGmbfUTE9So5hqiojM'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


steemmonsters 0.0.14 is available for download: https://github.com/holgern/steemmonsters/releases/tag/0.0.14

## quests
It is possible to view the current quest with the `quest` command:
![image.png](https://ipfs.busy.org/ipfs/QmQcDkepPifWmJDvfR6w4Hkb93ZGpGmbfUTE9So5hqiojM)
s

## Issue [#5](https://github.com/holgern/steemmonsters/issues/5) fixed
An error `Transaction [ ] not found.` was shown sometime. This was caused by checking the steemmonsters api to early. This should be fixed in 0.0.14

## Stream crashes somethime
This is also improved in version 0.0.14

## Two new api calls were added
* `get_player_quests(player)` - uses https://steemmonsters.com/players/quests?username= for getting the current quest state
* `get_purchases_status(id)` - uses https://steemmonsters.com/purchases/status?id= for getting information about a pack
___
Please let me know if everything is working. When not please open an issue in https://github.com/holgern/steemmonsters/issues/

- - -

This page is synchronized from the post: ['python steemmonsters 0.0.14 released '](https://steemit.com/@holger80/python-steemmonsters-0-0-14-released)
