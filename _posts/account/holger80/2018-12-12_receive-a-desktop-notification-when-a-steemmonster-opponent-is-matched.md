
---
title: 'Receive a  desktop notification when a steemmonster opponent is matched'
permlink: receive-a-desktop-notification-when-a-steemmonster-opponent-is-matched
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-12 10:54:30
categories:
- steemmonsteres
tags:
- steemmonsteres
- steemdev
- python
- beem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmYM9zgiRGtWGwio9FtgZC5ksSDy9951CxrvC3J4WeRBSa'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Waiting at the seeking enemy screen of steemmonsters is quite boring, and when I get distracted, I will lose due to timeout...
![image.png](https://ipfs.busy.org/ipfs/QmYM9zgiRGtWGwio9FtgZC5ksSDy9951CxrvC3J4WeRBSa)

## Installation
You need beem:
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
It should work out of the box for linux (notify-send must be available).

Store the following script as `sm_opponent_ready.py`:
```
from beem.blockchain import Blockchain
from beem.nodelist import NodeList
from beem.account import Account
import requests
from beem import Steem
import json
import os
import platform
import subprocess
from time import sleep
import argparse

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
    parser = argparse.ArgumentParser()
    parser.add_argument("account")
    args = parser.parse_args()
    account = args.account
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
    
    acc = Account(account, steem_instance=stm)
    match_type = "Ranked"
    while True:
        found = False
        start_block_num = None
        for h in b.stream(opNames=["custom_json"], threading=threading, max_batch_size=max_batch_size):
            if start_block_num is None:
                start_block_num = h["block_num"]
    
            if h["id"] == 'sm_find_match':
                if json.loads(h['json'])["match_type"] == match_type and h["required_posting_auths"][0] == acc["name"]:
                    found = True
                    break
        trx_id = h['trx_id']
        block_num = h["block_num"]
        notify("Transaction id found (%d - %s)" % (block_num, trx_id))
    
        response = ""
        cnt2 = 0
        trx_found = False
        while not trx_found and cnt2 < 90:
            response = requests.get("https://steemmonsters.com/transactions/lookup?trx_id=%s" % trx_id)
            if str(response) != '<Response [200]>':
                sleep(4)
            else:
                if 'error' in response.json() and "not found" in response.json()["error"]:
                    sleep(1)
                elif 'error' in response.json():
                    trx_found = True
                elif "trx_info" in response.json() and response.json()["trx_info"]["success"]:
                    trx_found = True
                else:
                    sleep(2)
            cnt2 += 1
        if 'error' in response.json():
            print(response.json()["error"])
    
        match_cnt = 0
        match_found = False
        while not match_found and match_cnt < 180:
            match_cnt += 1
            response = ""
            cnt2 = 0
            trx_found = False
            while response == "" and cnt2 < 45:
                response = requests.get("https://steemmonsters.com/battle/status?id=%s" % trx_id)
                if str(response) != '<Response [200]>':
                    sleep(4)
                    response = ""
            if "status" in response.json() and response.json()["status"] > 0 and response.json()["status"] < 3:
                match_found = True
                submit_expiration_block_num = response.json()["submit_expiration_block_num"]
                opponent_player = response.json()["opponent_player"]
                ruleset = response.json()["ruleset"]
                mana_cap = response.json()["mana_cap"]
            else:
                sleep(2)
    
        if not match_found:
            notify("Timeout and no opponent found...")
            continue
        notify("Opponent found... %s" % opponent_player)
        
        match_cnt = 0
        can_reveal = False
        error_occured = False
        while not can_reveal and match_cnt < 45 and not error_occured:
            match_cnt += 1
            response = ""
            cnt2 = 0
            trx_found = False
            while response == "" and cnt2 < 45:
                response = requests.get("https://steemmonsters.com/battle/status?id=%s" % trx_id)
                if str(response) != '<Response [200]>':
                    sleep(4)
                    response = ""            
            current_block = b.get_current_block_num()
            submit_expiration_block_num = response.json()["submit_expiration_block_num"]
            status = response.json()["status"]
            if "opponent_team_hash" in response.json() and response.json()["opponent_team_hash"] is not None and response.json()["opponent_team_hash"]  != "":
                can_reveal = True
                notify("Opponent submitted a team...")
            elif "team_hash" in response.json() and response.json()["team_hash"] is not None and response.json()["team_hash"]  != "":
                sleep(4)
            else:
                if (submit_expiration_block_num - current_block) % 2 == 0:
                    notify("%d blocks or %.2f seconds left..." % ((submit_expiration_block_num - current_block), (submit_expiration_block_num - current_block) * 3.))
                sleep(4)
            if status > 2:
                error_occured = True
            if current_block > submit_expiration_block_num:
                error_occured = True  
```

and run it with
```
python sm_opponent_ready.py holger80
```
Replace holger80 with your account name.

When python 3.x is installed, `pip` and `python` may be replayed by `pip3` and `python3`.

You will now get a notification, when an opponent is found and you will be reminded when you did not select a team yet.

The script scans new blocks for custom_json transaction with a `sm_find_match` id. When one is found, the `https://steemmonsters.com/battle/status?id=` API is asked if an opponent was matched. The API data are requested in a loop, until both opponents submitted a team.

Please let me know if you find this script useful and If I can improve something on it.

- - -

This page is synchronized from the post: ['Receive a  desktop notification when a steemmonster opponent is matched'](https://steemit.com/@holger80/receive-a-desktop-notification-when-a-steemmonster-opponent-is-matched)
