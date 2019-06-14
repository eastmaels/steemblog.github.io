
---
title: 'Get a list of the most played deck of the running steemmonsters test tournament'
permlink: get-a-list-of-the-most-played-deck-of-the-running-steemmonsters-test-tournament
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-10 19:27:57
categories:
- steemmonsters
tags:
- steemmonsters
- decks
- statistics
- python
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Since 4 hours a new test tournament is running on the steemmonsters test server. This time the mana limit is set to 15.

## Script for receiving the last used decks
* At first all cards are fetched from https://steemmonsters.com/cards/get_details
* Then all custom_json from the last 4 hours are streamed
* The cards for all `test-sm_team_reveal` ops are stored
* The different decks are counted and printed into a table
```
from beem.blockchain import Blockchain
from beem.nodelist import NodeList
from beem import Steem
import json
from datetime import date, datetime, timedelta
import requests
import logging
log = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


if __name__ == "__main__":
    
    response = requests.get("https://steemmonsters.com/cards/get_details")
    cards = {}
    for r in response.json():
        cards[r["id"]] = r    
    
    max_batch_size = 50
    threading = False
    wss = False
    https = True
    normal = False
    appbase = True

    nodes = NodeList()
    nodes.update_nodes()
    node_list = nodes.get_nodes(normal=normal, appbase=appbase, wss=wss, https=https)
    stm = Steem(node=node_list, num_retries=5, call_num_retries=3, timeout=15)
    
    b = Blockchain(steem_instance=stm)
    
    deck_stats = {}
    
    find_match_id = "test-sm_find_match"
    reveal_match_id = "test-sm_team_reveal"
    cnt = 0
    start_block = b.get_current_block_num() - int(20 * 60 * 4)
    stop_block = b.get_current_block_num()
    find_match_cnt = 0
    for op in b.stream(start=start_block, stop=stop_block, opNames=["custom_json"], threading=threading, max_batch_size=max_batch_size):
        cnt += 1
        if cnt % 200 == 0:
            print("streaming... (block %d)" % (op["block_num"]))
        if op["id"] not in [find_match_id, reveal_match_id]:
            continue
        if op["id"] == find_match_id:
            find_match_cnt += 1
        else:
            json_field = json.loads(op["json"])
            deck = [json_field["summoner"]] + json_field["monsters"]
            deck_ids = []
            deck_names = []
            id_str = ""
            for c in deck:
                card_id_str = c.split('-')[1]
                id_str += card_id_str
                deck_ids.append(int(card_id_str))
                deck_names.append(cards[int(card_id_str)]["name"])
            if id_str in deck_stats:
                deck_stats[id_str]["n"] += 1
            else:
                deck_stats[id_str] = {"n": 1, "deck_id": deck_ids, "deck_name": deck_names}

    print("%d different decks have been used" % len(deck_stats))
    print("%d matches have been played" % (find_match_cnt/2))
    
    deck_list = []
    for d in deck_stats:
        deck_list.append(deck_stats[d])
    print("| N | summoner | monster |")
    print("| --- | --- | --- |")
    sorted_deck_stats = sorted(deck_list, key=lambda x: x["n"], reverse=True)
    for deck in sorted_deck_stats:
        if deck["n"] < 5:
            continue
        print("| %d | %s | %s |" % (deck["n"], deck["deck_name"][0], ', '.join(deck["deck_name"][1:])))
```
## Results

176 different decks have been used.
336 matches have been played.


| N | summoner | monster |
| --- | --- | --- |
| 130 | Kiara Lightbringer | Cocatrice, Angel of Light, Feral Spirit, Elven Cutthroat |
| 61 | Kiara Lightbringer | Cocatrice, Feral Spirit, Angel of Light, Elven Cutthroat |
| 55 | Zintar Mortalis | Haunted Spirit, Undead Priest, Skeleton Assassin, Haunted Spider |
| 29 | Jarlax the Undead | Cocatrice, Undead Priest, Twisted Jester, Haunted Spider, Skeleton Assassin |
| 14 | Malric Inferno | Cerberus, Goblin Shaman, Kobold Miner, Fire Beetle |
| 13 | Selenia Sky | Gold Dragon, Screaming Banshee, Cocatrice |
| 11 | Zintar Mortalis | Haunted Spirit, Screaming Banshee, Haunted Spider, Undead Priest |
| 10 | Jarlax the Undead | Raging Impaler, Undead Priest, Skeleton Assassin, Cocatrice |
| 10 | Jarlax the Undead | Cocatrice, Skeleton Assassin, Undead Priest, Haunted Spider, Animated Corpse |
| 10 | Jarlax the Undead | Cocatrice, Undead Priest, Skeleton Assassin, Enchanted Pixie, Elven Cutthroat |
| 8 | Xia Seachan | Naga Warrior, Crustacean King, Water Elemental |
| 8 | Zintar Mortalis | Spineback Wolf, Undead Priest, Skeleton Assassin, Cocatrice |
| 7 | Zintar Mortalis | Skeleton Assassin, Undead Priest, Screaming Banshee, Twisted Jester |
| 7 | Zintar Mortalis | Cocatrice, Skeleton Assassin, Screaming Banshee, Haunted Spider, Undead Priest |
| 6 | Jarlax the Undead | Haunted Spirit, Haunted Spider, Undead Priest, Twisted Jester |
| 6 | Jarlax the Undead | Cocatrice, Skeleton Assassin, Undead Priest, Haunted Spider, Twisted Jester |
| 6 | Selenia Sky | Naga Warrior, Lightning Dragon |
| 6 | Tyrus Paladium | Divine Healer, Feral Spirit, Centaur, Cocatrice |
| 5 | Xia Seachan | Naga Warrior, Crustacean King, Sabre Shark, Cocatrice |
| 5 | Alric Stormbringer | Spineback Turtle, Crustacean King, Pirate Captain, Cocatrice |
| 5 | Jarlax the Undead | Haunted Spirit, Skeleton Assassin, Undead Priest, Elven Cutthroat |
| 5 | Lyanna Natura | Minotaur Warrior, Earth Elemental, Swamp Thing, Enchanted Pixie |
| 5 | Selenia Sky | Magi of the Forest, Swamp Thing, Earth Elemental, Elven Cutthroat |

## Conclusion
Is there an API to get the results of the played matches? This would be very interesting.

At the moment, there are only two decks which were mostly used. This may change, as probably not all good decks have been used yet by the players. Let's see how this statistics changes, when more matches have been played.

- - -

This page is synchronized from the post: ['Get a list of the most played deck of the running steemmonsters test tournament'](https://steemit.com/@holger80/get-a-list-of-the-most-played-deck-of-the-running-steemmonsters-test-tournament)
