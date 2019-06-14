
---
title: 'steemmonsters, a new command line tool for battling opponents with your cards'
permlink: steemmonsters-a-new-command-line-tool-for-battling-opponents-with-your-decks
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-19 22:02:27
categories:
- utopian-io
tags:
- utopian-io
- development
- steemmonsters
- python
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmTUKeF2hLXKyC4CaggkFp6GwGBaDcFjn8zTPxiBJKRqJN'
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

### steemmonsters - a new command line tool for python

Steem monsters is a fully decentralized trading card game on the steem blockchain. This new toolbox can be used to play ranked matches and to stream currently played matches.


## Installation
```
pip install steemmonsters
```
Copy https://github.com/holgern/steemmonsters/blob/master/config.json to a directory and adapt it. Start `steemmonsters` in the directory with the `config.json`.

### Windows user
clone the github
```
git clone https://github.com/holgern/steemmonsters.git
```

## Commands
The steem monsters shell can be started with
```
steemmonsters
```
`config.json` must be available in the current directory of the terminal.

When cloned the github instead of using pip (e.g. on windows with the anaconda terminal):
```
python steemmonsters.py
```


### Available commands inside the tool

```
sm> stream
```
![image.png](https://ipfs.busy.org/ipfs/QmTUKeF2hLXKyC4CaggkFp6GwGBaDcFjn8zTPxiBJKRqJN)

This command shows the current battles and which player are participating

```
sm> play deck_name
```

`deck_name` is one of the stored decks defined in `config.json`. E.g. `death1`:
![image.png](https://ipfs.busy.org/ipfs/QmbQrtwL2aohc2YQTgxGsXYU4WkcqWm7krcW8FQiMRjg29)


```
sm> play random 
```
selects randomly a deck.

```
sm> show_deck deck_name 
```
shows deck `deck_name`.
![image.png](https://ipfs.busy.org/ipfs/QmbQRkUHGCHgxShzCzmyTkTsfPT8mooEcaPyjq9oQ337A3)


## Setup the beem wallet
Create a new wallet, when not already done.
```
beempy createwallet
```
Add the posting key of the player by:
```
beempy addkey
```


## Configuration
A file `config.json` must  exist in the current directory with the following content:
```
{
    "wallet_password": "123",
    "account": "holger80",
    "mana_cap": 23,
    "ruleset": "Standard",
    "match_type": "Ranked",
    "decks": {
                "death1": ["Zintar Mortalis", "Haunted Spirit", "Skeleton Assassin", "Twisted Jester", "Haunted Spider", "Screaming Banshee", "Undead Priest"],
                "water1": ["Alric Stormbringer", "Naga Warrior", "Medusa", "Mischievous Mermaid", "Pirate Captain", "Crustacean King"],
                "fire1": ["Malric Inferno", "Serpentine Soldier", "Elemental Phoenix", "Goblin Shaman", "Fire Demon"],
    },
    "play_counter": 1
}
```

* `wallet_password` is the `beempy` wallet password
* `account`: steem user name of the player
* `mana_cap`: current mana cap
* `ruleset`: current rule set
* `match_type`: match type
* `decks` contains the different pre defined decks. There is no mana_cap check
* `play_counter` diffens how often a deck is played

## How does it work
The package uses beem for broadcasting the necessary custom_json and finding the transation id.
### Play a match
At first a deck is build from the `config.json`. Therefore, all cards of the player are fetched by 
the `get_collection` function from the Api class. The card names are than matched and the card uid is selected. It is always the card with the highest level selected.

In the next step, a secret is created:
```
''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))
```
and the team hash is calculated:
```
    m = hashlib.md5()
    m.update((summoner+',' + ','.join(monsters)+ ','+secret).encode("utf-8"))
    team_hash = m.hexdigest()
```
The first custom_json with id `sm_find_match` can then be broadcasted:
```
json_data = {"match_type":match_type, "mana_cap":mana_cap,"team_hash":team_hash,"summoner_level":summoner_level,"ruleset":ruleset}
trx = self.stm.custom_json('sm_find_match', json_data, required_posting_auths=[acc["name"]])
```
All custom_json are now streamed until a custom_json with the correct team_hash is found:
```
for h in self.b.stream(opNames=["custom_json"]):
     if h["id"] == 'sm_find_match':
         if json.loads(h['json'])["team_hash"] == team_hash:
             found = True
             break
```
The `trx_id` is then stored into the `deck` dict:
```
deck["trx_id"] =  h['trx_id']
```
It is now checked that a opponent wants to play with the `get_from_block` function from the steemmonsters api.

When at least one player also searches for a match, the second custom_json is send
```
json_data = deck
trx = self.stm.custom_json('sm_team_reveal', json_data, required_posting_auths=[acc["name"]])
```
Now the battle result is checked:
```
response = requests.get("https://steemmonsters.com/transactions/lookup?trx_id=%s" % deck["trx_id"])
```
and printed.
### Roadmap
* Improved config file handling
* Show more details about the battle
* Fetch currently played decks and allow using them for the next battle

#### How to contribute
Please create issues in https://github.com/holgern/steemmonsters when something does no work or for a feature wish or improvement. Pull requests are welcome.

You can contact me also in discord holger80 [Witness]#3688


#### GitHub Account
https://github.com/holgern/

- - -

This page is synchronized from the post: ['steemmonsters, a new command line tool for battling opponents with your cards'](https://steemit.com/@holger80/steemmonsters-a-new-command-line-tool-for-battling-opponents-with-your-decks)
