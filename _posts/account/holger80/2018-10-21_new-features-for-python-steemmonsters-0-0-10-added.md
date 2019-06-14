
---
title: 'New features in python steemmonsters added'
permlink: new-features-for-python-steemmonsters-0-0-10-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-21 14:06:18
categories:
- steemmonsters
tags:
- steemmonsters
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmUq5ZnHyVgfKew1CQjJPAhzwP7fhNGmxGhAoDqmLnmwk4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In release 0.0.10, some new features were added to the python version of steemmonsters ([github](https://github.com/holgern/steemmonsters/)).

# Installation
## Install beem
```
pip install beem -U
```
or when using anaconda ([how to install beem on anaconda](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda))
```
conda install beem
```

## Create a beempy wallet
When not created, create one
```
beempy createwallet
```
and add the posting key
```
beempy addkey
```
You can check by
```
beempy walletinfo
```
if a wallet is already installed.
```
beempy listaccounts
```
shows, if a posting key already exists.

## Using github
```
pip install colorama termcolor six requests
git clone https://github.com/holgern/steemmonsters.git
cd steemmonsters
nano config.json
python steemmonsters.py
```

## Using pip (does not work on windows)
```
pip install steemmonsters -U
mkdir steemmonster_config1
cd steemmonster_config1
nano config.json
steemmonsters 
```
# New features
## play foreever
When setting `"play_counter": -1,` in the config.json playing do not stop.

## Wait some seconds after each match
When setting `play_delay`, e.g. `play_delay: 10`, in the config.json a sleep is done after each match. The integer defines the wait time in seconds.  `play_delay: 0` means no sleep.

## Stop playing when ranking is outside a defined border
When `"play_inside_ranking_border": true` is set in the config.json and a ranking border is defined: `"ranking_border": [2800, 3000]`, playing stops when the ranking is below the first number and above the second number.

For the example `[2800, 3000]`, playing stops when the ranking is 2799 or 3001 after playing a match. When only one direction should be limited:

* `"ranking_border": [0, 3000]` - stop only when the ranking is above 3000
* `"ranking_border": [2800, 10000]` - stop only when the ranking is below 2800. (a ranking of 10000 cannot be reached).

## Play a random deck
When no deck is specified:
`sm> play`
a random deck is selected and played.

## Show ranking
`sm> ranking` shows the current ranking of the player.

## Reload config
`sm> reload_config` reads the changed config.json. 

## Current conflict
Set the following values for the current conflict
![image.png](https://ipfs.busy.org/ipfs/QmUq5ZnHyVgfKew1CQjJPAhzwP7fhNGmxGhAoDqmLnmwk4)
Example `config.json` with all new features:
```
{
    "wallet_password": "123",
    "account": "holger80",
    "mana_cap": 19,
    "ruleset": "Lost Legendaries",
    "match_type": "Ranked",
    "decks": {
                "water1": ["Alric Stormbringer", "Spineback Turtle", "Medusa", "Crustacean King", "Mischievous Mermaid"],
                "death1": ["Zintar Mortalis", "Haunted Spirit", "Skeleton Assassin", "Undead Priest", "Twisted Jester"]
    },
    "play_counter": -1,
    "play_delay": 10,
    "play_inside_ranking_border": true,
    "ranking_border": [2800, 3000]
}
```

____
Do you have any suggestions? Please let me know.

- - -

This page is synchronized from the post: ['New features in python steemmonsters added'](https://steemit.com/@holger80/new-features-for-python-steemmonsters-0-0-10-added)
