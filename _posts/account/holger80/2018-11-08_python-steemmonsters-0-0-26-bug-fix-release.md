
---
title: 'python steemmonsters 0.0.26 - bug fix release'
permlink: python-steemmonsters-0-0-26-bug-fix-release
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-08 20:58:33
categories:
- steemmonsters
tags:
- steemmonsters
- release
- bug-fix
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmS1gUJGoFitvbyPrJcGxy9YmCxWNtrzCzj5heRWwsbbXa'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


steemmonsters is a python command line tool for playing steemmonsters without graphics. The newest version 0.0.26 can be downloaded [here](https://github.com/holgern/steemmonsters/releases).

The previous release had a problem with mixed teams (from config-file and website). This problem should be fixed with the newest release 0.0.26. Please report any other problems.

I added also the `switch_on_winning_streak` which switches a deck, when defined in the config and more than one deck given for the play command.

### Example
```
{
    "account": "holger80",
    "match_type": "Ranked",
    "decks": {
        "light": ["Tyrus Paladium", "Clay Golem", "Defender of Truth", "Divine Healer", "Angel of Light", "Air Elemental"]
    },
    "play_counter": 50,
    "play_delay": 3,
    "stop_on_loosing_streak": 10,
    "switch_on_loosing_streak": 1,
    "switch_on_winning_streak": 1
}
```

![image.png](https://ipfs.busy.org/ipfs/QmS1gUJGoFitvbyPrJcGxy9YmCxWNtrzCzj5heRWwsbbXa)
The `dl1` deck was stored in the website.

I can now mix both teams and start playing:
```
sm> play dl1,light1
```
After two wins or losses in a row, the deck is switched.

- - -

This page is synchronized from the post: ['python steemmonsters 0.0.26 - bug fix release'](https://steemit.com/@holger80/python-steemmonsters-0-0-26-bug-fix-release)
