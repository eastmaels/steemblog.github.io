
---
title: 'python steemmonsters 0.0.23 - new play modi and pack handling added'
permlink: python-steemmonsters-0-0-23-new-play-modi-and-pack-handling-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-07 23:23:09
categories:
- utopian-io
tags:
- utopian-io
- development
- steemmonsters
- steemtank
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qme9sboXLViqez1coM2iC8yRLooEzRjN889Qa1cbyh5HDc'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/steemmonsters

steemmonsters is a python command line tool for playing steemmonsters without graphics. The newest version 0.0.23 can be downloaded [here](https://github.com/holgern/steemmonsters/releases).
## New API commands
### get_open_all_packs
Opens all booster packs at once
```
from steemmonsters.api import Api
api = Api()
response = api.get_open_all_packs("holger80", 1, token):
```

### get_open_packs
Opens an owned booster pack.
```
from steemmonsters.api import Api
api = Api()
response = api.get_open_packs("B-xxx", "holger80", 1, token):
```

### get_cards_packs
Returns the unopened packs of a player
```
from steemmonsters.api import Api
import json
from beembase import memo as Memo
from beemgraphenebase.account import PrivateKey, PublicKey
api = Api()
account = "holger80"
response = api.get_player_login(account)
postingwif = "5xx"
token = Memo.decode_memo(PrivateKey(postingwif), response["token"])
response = api.get_cards_packs(account, token)
tx = json.dumps(response, indent=4)
print(tx)
```

### get_market_for_sale_by_card
Returns the currently available cards on the market
```
from steemmonsters.api import Api
api = Api()
response = api.get_market_for_sale_by_card(10, "true", 1)
print(response[0])
```

### get_market_for_sale_grouped
Shows the minimum and maximum prices for all cards.
```
from steemmonsters.api import Api
api = Api()
response = api.get_market_for_sale_grouped()
print(response[0])
```
## Command line tool
### New play modi
```
sm> play quest f1
```
Plays team `f1` until the quest is solved.

```
sm> play mirror
```
Whenever the current team loses a defined number of times in a row, a new team from the last played teams of the top 100 is copied and used.

```
sm> play t1,t2,t3
```
Play team `t1` until a defined number of loses in a row occurs. Then the team is switched to the next one. For the example, `"switch_on_loosing_streak": 1` is set and `t1` has lost two times. The next match is then played with team `t2`. After  `t3`, `t1` is used.

```
sm> play random t1,t2,t3
```
Plays one of the three given teams. The team is randomly chosen. The team is switched whenever a pre-defined number of loses in a row occur.

### New parameter for the config file
```
"switch_on_loosing_streak": 1,
```
defines when the current team is switched. This plays only a role, when more than one team was defined.

### Creating new decks based on already played teams with a high winning rate.
```
sm> splinter fire 2
```
Shows up to 15 fire splinter teams with summoner level 2.  One of the shown teams can be selected and stored under a given name.
![image.png](https://ipfs.busy.org/ipfs/Qme9sboXLViqez1coM2iC8yRLooEzRjN889Qa1cbyh5HDc)

## Show, open and gift packs
```
sm>packs
```
shows all unopened packs of the currently selected player

```
sm>openpack
```
shows all available packs and let the user select one and opens it then. The open market value and card name of all cards are shown in a table.
![image.png](https://ipfs.busy.org/ipfs/QmdhhKosMGmJBpUwNWXgYESY8nCkAZ9yYXx9fwbhzXrsS7)

```
sm> giftpacks holger80
```
After starting the command, all available decks were shown and the user can set how many packs are sent.

## Account switch without changing the config file
```
sm> set_account holger80
```
Changes the currently selected player to holger80, without the need to change the config file and reload it.



## Commit history
### Release 0.0.23
* [commit e9bdae5](https://github.com/holgern/steemmonsters/commit/e9bdae51f3d22a86689d8eeda6dc9a70e8ecc412)
* Fix value calculation for openpack
### Release 0.0.22
* [commit fc33cd5](https://github.com/holgern/steemmonsters/commit/fc33cd52c3dbc0c4df8fbc60c51b806316d40f81)
* Add get_market_for_sale_grouped api call
* Improve output for openpack
* Collection shows card names

### Release 0.0.21
* [commit 70c4ff3](https://github.com/holgern/steemmonsters/commit/70c4ff3f2f36634d4a06a9a1b86087e73eb0a8dd)
* openpack added
* `play random <deck1>,<deck2>,..` added
* play quest play_counter fixed
* `get_open_packs` and `get_open_all_packs` API-calls improved
### Release 0.0.20
* [commit d25cbae](https://github.com/holgern/steemmonsters/commit/d25cbaee4622e7bd2e1cc6576c8d2bc043a73bc8)
* Utility functions get_summoner_level, convert_team_id_to_string, expand_short_form,  convert_team_string_to_id and get_cards_collection added to prevent duplicated code
* set_account can be used  to switch an account
* packs shows the unopened packs
* giftpacks <player> moves unopened packs to an other player
* `splinter <plinter> <summoner_level>` can be used to received often played decks and store them for later usage
* `play quest <team_name>` - plays until the quest is solved
* play mirror - selects randomly a last played team for the op 100 and uses it, deck is switched when losing, or when `switch_on_loosing_streake` is set, when reached
* `play <deck1>,<deck2>` plays the first deck and switches when loosing, when switch_on_loosing_streake is set, when `switch_on_loosing_streake` is reached.

### Release 0.0.16 
* [commit 0ec9576c](https://github.com/holgern/steemmonsters/commit/0ec9576c0476fbe795b65466cf584872c6c4e8b1)
* edition 2 added
* quests command improvement


#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['python steemmonsters 0.0.23 - new play modi and pack handling added'](https://steemit.com/@holger80/python-steemmonsters-0-0-23-new-play-modi-and-pack-handling-added)
