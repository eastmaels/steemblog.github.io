
---
title: 'python steemmonsters 0.0.15 - Several improvements and new features'
permlink: python-steemmonsters-0-0-15-several-improvements-and-new-features
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-02 15:24:06
categories:
- utopian-io
tags:
- utopian-io
- development
- steemmonsters
- steemtank
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmSmgBrJHwB6QDCqJ3YDbLoxgVgmc2ft3HQMuGDAPrqcS6'
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

steemmonsters is a python command line tool for playing steemmonsters without graphics. The newest version 0.0.15 can be downloaded [here](https://github.com/holgern/steemmonsters/releases).

## New API comands
`get_purchases_status` returns information about a purchased card pack:
```
from steemmonsters.api import Api
api = Api()
api.get_purchases_status("P-DTQ5OEKIVK")
```

`get_player_quests` returns information about the quest:
```
from steemmonsters.api import Api
api = Api()
api.get_player_quests("holger80")
```

`get_purchases_stats` returns how many packs were purchased:
```
>>> from steemmonsters.api import Api
>>> api = Api()
>>> api.get_purchases_stats()
{'packs': [{'edition': 0, 'qty': '300000'}, {'edition': 1, 'qty': '181059'}]}
```

`api.settings()` shows the current games settings.

`api.players_leaderboard()` shows the leaderboard.

`get_player_login` returns the encrypted token for login:
```
from steemmonsters.api import Api
api = Api()
api.get_player_login("holger80")
```

`player_save_team( name, team, player, token, mana_cap)` can be used to store a new team, which then also available in the homepage. `token` is the decrypted token using the posting key from the `get_player_login` call.

`player_delete_team(name, player, token, mana_cap)` deletes deck `name`.

`get_player_saved_teams(player, token, mana_cap)` returns all saved teams.

`get_player_teams_last_used(player, mana_cap)` returns the last used team of a player.

`get_battle_history(player="%24top")` gets the last top battles. When settings `player=holger80` the last battles of the player are returned instead.


## New Commands
![image.png](https://ipfs.busy.org/ipfs/QmSmgBrJHwB6QDCqJ3YDbLoxgVgmc2ft3HQMuGDAPrqcS6)

### addteam
```
addteam  water_test Alric Stormbringer:2, Frost Giant:1, Spineback Turtle:2, Pirate Captain:3, Crustacean King:3
```
or
```
addteam  water_test Alric Stormbringer, Frost Giant, Spineback Turtle, Pirate Captain, Crustacean King
```
adds the water_test team. The stored team can then be used for play:
```
play water_test
```

![image.png](https://ipfs.busy.org/ipfs/QmTren5kpQhdWP1kuXiHoyhCm9fqxpg6j9Lsg3n8zCEX8p)

The team is also stored in the steemmonsters.com homepage:
![image.png](https://ipfs.busy.org/ipfs/QmZQJRCtaZiJKE952t82WDtCRrU32DZyZvE39zb7K2hTdX)

The token for modifing teams is decrypted by:
```
from beembase import memo as BtsMemo
from beemgraphenebase.account import PrivateKey
from steemmonsters.api import Api

api = Api()
response = api.get_player_login("holger80")
wif = "5xxx" # posting key
token = BtsMemo.decode_memo(PrivateKey(wif), response["token"]).replace('\n', '')
```

### deleleteam
```
deleteteam water_test
```
removes a stored team.

### copyteam
```
copyteam clove71 test1
```
copies the last played team from clove71 and stores is as test1

### team
```
team test1
```
shows a stored team

### lastteam
```
lastteam
```
or 
```
lastteam clove71
```
shows the last played team

### copytopteam
Is the same command, but instead of a player name, the top100 position is used.
```
copytopteam 4 test2
```
stores the last team from the top 4 player as test2

### lasttopteam
```
lasttopteam 4
```
shows the last played team from top 4 player

### savedteams
```
savedteams
```
shows all saved teams

### startquest
```
sm> startquest
sm_start_quest broadcasted!
You have to solve the Stir the Volcano quest
```
can be used to start a new quest. In this example, 10 games using a fire deck will solve the quest.

### claimquest
When a quest is solved, this command can b e used to claim the reward.

### conflict
Shows the current conflict

### play
`play` can now be used with stored teams from the homepage. At first the json is checked and when there is no such team, the stored teams are checked. When a team with the given name is found, it is used. `play random` works only with decks stored in the json file.

`mana_cap` and `ruleset` must not be defined in the json file, it  is now fetched on startup.

## Commit history

### More commands added
* [commit 913b1577](https://github.com/holgern/steemmonsters/commit/913b1577f65cddb271257460177bf2c7bb7e7ca6)
* conflict - shows the currect conflict
* team <name> - shows a stored team
* player - shows the information about the player
* lasttopteam <nr> - shows the last played team
* copytopteam <nr> <new_deck_name> - copies the last played team
### Merged changes from #7 manually
* [commit 18af8ed](https://github.com/holgern/steemmonsters/commit/18af8ed6c0582f4283afc2cbcbcebc7fc55dab9c)
### Release 0.0.15
* [commit acc7bc6](https://github.com/holgern/steemmonsters/commit/acc7bc68721526fb16a527e0f4d06f3c5ba2b29d)
### Add api calls and improve stream and play
* [commit 534cc06](https://github.com/holgern/steemmonsters/commit/534cc06f58fb1f25829206775b055c74dbc11942)
#### New api calls added:
* get_purchases_status
* get_player_quests

* quest command added for showing the current player quest
* stream fixed
* play improved


#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['python steemmonsters 0.0.15 - Several improvements and new features'](https://steemit.com/@holger80/python-steemmonsters-0-0-15-several-improvements-and-new-features)
