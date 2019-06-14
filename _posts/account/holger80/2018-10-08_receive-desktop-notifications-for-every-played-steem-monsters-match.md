
---
title: 'Receive desktop notifications for every played steem monsters match'
permlink: receive-desktop-notifications-for-every-played-steem-monsters-match
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-08 12:55:12
categories:
- python
tags:
- python
- steemmonsters
- battle
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmeGVYVy7gYuLWnUZXWzqdvw5gw6AyTZ55bzmr8YCwbskU'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Currently test battles for steemmonsters are running. When a player wants to battle an opponent, a `custom_json` with `id` = `test-sm_find_match` is broadcasted. When an other player also broadcasts this `custom_json`, both players are broadcasting a `custom_json` with `ìd=test-sm_team_reveal` with the deck cards.

Battling when nobody is around is frustrating. So knowing when other people are actively playing prevents waiting. Knowing which player are currently playing helps also, developing a strategy for the building the best deck.

## Custom_json notifier

The following script streams the head blocks of the steem blockchain and will create a desktop notification everytime a  custom_json with`test-sm_find_match` or a `test-sm_team_reveal` is broadcasted. The script will also notice when a player has changed its deck.

```
pip install beem
```
For windows:
```
pip install win10toast
```
and for mac:
```
pip install pync
```
It should work out of the box for linux (`notify-send` must be available).

Store the script as `sm_custom_json_notifier.py`
```
from beem.blockchain import Blockchain
from beem.nodelist import NodeList
from beem import Steem
import json
import os
import platform
import subprocess
from time import sleep

app_name = 'sm-notifier'

is_mac = platform.system().lower() == 'darwin'
is_win = platform.system().lower() == 'windows'
if is_mac:
    from pync import notify as mac_notify
if is_win:
    from win10toast import ToastNotifier
    toaster = ToastNotifier()


def notify(msg, link=None):
    """Platform agnostic notifier"""
    if is_mac:
        mac_notify("", title=msg, open=link)
    elif is_win:
        toaster.show_toast(app_name, msg)
    else:
        subprocess.run(['notify-send', app_name, msg])


if __name__ == "__main__":
    
    max_batch_size = 50
    threading = False
    wss = False
    https = True
    normal = False
    appbase = True

    last_deck = {}
    nodes = NodeList()
    nodes.update_nodes()
    node_list = nodes.get_nodes(normal=normal, appbase=appbase, wss=wss, https=https)
    stm = Steem(node=node_list, num_retries=5, call_num_retries=3, timeout=15)
    
    b = Blockchain(steem_instance=stm, mode="head")
    
    find_match_id = "test-sm_find_match"
    reveal_match_id = "test-sm_team_reveal"
    cnt = 0
    for op in b.stream(opNames=["custom_json"], threading=threading, max_batch_size=max_batch_size):
        cnt += 1
        if cnt % 20 == 0:
            print("streaming... (block %d)" % (op["block_num"]))
        if op["id"] not in [find_match_id, reveal_match_id]:
            continue
        if op["id"] == find_match_id:
            notify("%s - %s is searching for a match with %s" % (str(op["timestamp"]), op["required_posting_auths"][0], op['json']))
            sleep(8)
        else:
            json_field = json.loads(op["json"])
            deck = [json_field["summoner"]] + json_field["monsters"]
            player = op["required_posting_auths"][0]
            deck_changed = False
            if player in last_deck:
                if deck != last_deck[player]:
                    deck_changed = True
                    notify("%s - %s changed its deck and found someone for a match with summoner %s and %s" % (str(op["timestamp"]), op["required_posting_auths"][0], json_field["summoner"], str(json_field["monsters"])))
            last_deck[player] = deck
            if not deck_changed:
                notify("%s - %s found someone for a match with summoner %s and %s" % (str(op["timestamp"]), op["required_posting_auths"][0], json_field["summoner"], str(json_field["monsters"])))
            sleep(8)


```


Run the the script:
```
python sm_custom_json_notifier.py
```
and notification should now be displayed whenever a match is played:
![image.png](https://ipfs.busy.org/ipfs/QmeGVYVy7gYuLWnUZXWzqdvw5gw6AyTZ55bzmr8YCwbskU)

___
Edit:
I changed the notification text when a player has changed its deck.

- - -

This page is synchronized from the post: ['Receive desktop notifications for every played steem monsters match'](https://steemit.com/@holger80/receive-desktop-notifications-for-every-played-steem-monsters-match)
