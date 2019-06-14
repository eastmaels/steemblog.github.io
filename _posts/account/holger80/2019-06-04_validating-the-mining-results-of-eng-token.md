
---
title: 'Validating the mining results of ENG token'
permlink: validating-the-mining-results-of-eng-token
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-04 14:12:57
categories:
- steem-engine
tags:
- steem-engine
- steem
- smt
- mining
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmT7ARth1X9R4c1Unh8kjYku1SgDb82aXEQdaeHQ7XRytR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmT7ARth1X9R4c1Unh8kjYku1SgDb82aXEQdaeHQ7XRytR/image.png)

I've programmed a lot for the steem blockchain, thus I'm currently not very active in writing posts. As you may know I'm the developer behind scot and I have now also implemented Delegated Proof of Stake Mining for steem-engine tokens.

Currently two token can be staked to participate in ENG mining:
* EM with a mining power of 1
* EMFOUR with a mining power of 4

Every hour, the ENG token mining reward pool is send to 10 accounts which were randomly selected based on the staked mining power (in one round one account can be added more than once).

## How does this work
Every hour, all mining token staker are obtained from the steem-engine api. Then a custom_json with id `scot_create_claim`   and `{"symbol":"ENG","type":"mining","N":10}` as content is broadcasted from the `engpool` account.
![image.png](https://ipfs.busy.org/ipfs/QmS2XM2hkSTuiuXDKkGu1cfkVzjZLv6Z6UcVaHBZNaAKCm)


The scot bot fetches this custom_json and uses the block number and the transaction id to calculate a seed. The seed is then used to initialize a random generator. 

Then 10 accounts are randomly selected by generating random numbers from 0 to the staked mining power sum. The staked mining power of all accounts are summed up and sorted by the staked mining power and the loki steem-api id.

The results are broadcasted as a custom_json from the engpool account:
![image.png](https://ipfs.busy.org/ipfs/QmQ4ppySSPik5a5PsRnLjBVmXyhNMjnb8UDTBwDBUNjMyw)


Lets assume that we have 3 miner, `a` has staked 1 EMFOUR with loki 2, `b` has staked 1 EMFOUR with loki 3 and `c` has staked 3 EM token with loki 1.

| index | name | staked mining power | sum | loki |
| --- | --- | --- | --- | --- |
| 1 | `c` | 3 | 3 | 1 |
| 1 | `a` | 4 | 7 | 2 |
| 1 | `b` | 4 | 11 | 3 |

In the next step, we draw 5 times a random number between 0 and 11. 
That account is selected which sum is closed above the random number.
Lets assume that the sequence is (I'm using integer random number for this example):
```
4, 2, 10, 7, 1
```
This means the winner are

| random number | winner |
| --- | --- |
| 4 | `a` |
| 2 | `c` |
| 10 | `b` |
| 7 | `b` |
| 1 | `c` |



## Script to validate the most recent mining operation
In order to run this script, beem and steemengine must be installed.

The block number and the transaction id of the custom_json containing the mining outcome must be provided:
```
    block_num = 33505765  
    trx_id = "98df419edbd76079d1991bc58c2ea6db5077e4bd"
```
You can take a look at the custom_json here: https://steemd.com/tx/98df419edbd76079d1991bc58c2ea6db5077e4bd

Validation of the mining operation is only possible when:
* nobody unstaked their mining token
* nobody staked more mining token
* no new accounts staked mining token
As long these condition are true, any mining operation can be validated. The condition is check in the script by comparing `N_accounts` and `staked_mining_power` from the custom_json with the currently staked accounts.

The staked mining power is obtained by using the steem-engine api:
```
accounts_by_name = {}
miner_tokens = {"EM": 1, "EMFOUR": 4}
mining_power_sum = 0
for miner_token in miner_tokens:
    mining_power = miner_tokens[miner_token]
    token_object = Token(miner_token)
    token_holder = token_object.get_holder()
    for holder in token_holder:
        if float(holder["stake"]) == 0:
            continue
        if holder["account"] not in accounts_by_name:
            accounts_by_name[holder["account"]] = {"name": holder["account"], "staked_mining_power": float(holder["stake"]) * mining_power, "loki": holder["$loki"]}
        else:
            accounts_by_name[holder["account"]]["staked_mining_power"] += float(holder["stake"]) * mining_power
            if accounts_by_name[holder["account"]]["loki"] > holder["$loki"]:
                accounts_by_name[holder["account"]]["loki"] = holder["$loki"]                  
        mining_power_sum += float(holder["stake"]) * mining_power
      
accounts = []
for acc in accounts_by_name:
    accounts.append(accounts_by_name[acc])
sorted_accounts = sorted(accounts, key=lambda m: (m["staked_mining_power"], m["loki"]))
```
The accounts are firstly sorted by their staked mining power and secondly by the $loki id from the steem-engine account. This allows  it to validate a mining operation, as the accounts are sorted in the same way.


The seed is set by:
```
def set_seed(seed):
    random.seed(a=seed, version=2)
block = Block(json_data["block_num"])
seed = hashlib.md5((json_data["trx_id"] + block["block_id"] + block["previous"]).encode()).hexdigest()     
set_seed(seed)
```
where `block_num` and `trx_id` are provided from the custom_json.
Finally, winner can be obtained by:
```
def get_random_range(start, end):
    return ((random.random() * (end-start + 1)) + start)

N = int(json_data["N"])
mining_power_sum = float(json_data["staked_mining_power"])
winner_accs = []
for i in range(N):
    x = get_random_range(0, mining_power_sum)
    sum_mining_power = 0
    winner_found = False
    for acc_data in sorted_accounts:
        sum_mining_power += acc_data["staked_mining_power"]
        
        if sum_mining_power > x and not winner_found:
            winner_accs.append(acc_data["name"])
            winner_found = True

```

The output of the script for the last custom_json is:
![image.png](https://ipfs.busy.org/ipfs/QmbKyTEyr1yJ9SGCecsD5hGBc9SU7wmNWUE5TwwRrQsgD9)

## Script source

```
import time 
import json
import math
import random
from steemengine.tokenobject import Token
from beem.block import Block
import hashlib


def set_seed(seed):
    random.seed(a=seed, version=2)

def get_random_range(start, end):
    return ((random.random() * (end-start + 1)) + start)

if __name__ == "__main__":
    block_num = 33505765  
    trx_id = "98df419edbd76079d1991bc58c2ea6db5077e4bd"
    block = Block(block_num)
    
    data = None
    for trx in block.transactions:
        if trx["transaction_id"] ==trx_id:
            data = trx

    trx = data["operations"][0]["value"]
    json_data = json.loads(trx["json"])
    
    block = Block(json_data["block_num"])
    seed = hashlib.md5((json_data["trx_id"] + block["block_id"] + block["previous"]).encode()).hexdigest()     
    set_seed(seed)
    accounts_by_name = {}
    miner_tokens = {"EM": 1, "EMFOUR": 4}
    mining_power_sum = 0
    for miner_token in miner_tokens:
        mining_power = miner_tokens[miner_token]
        token_object = Token(miner_token)
        token_holder = token_object.get_holder()
        for holder in token_holder:
            if float(holder["stake"]) == 0:
                continue
            if holder["account"] not in accounts_by_name:
                accounts_by_name[holder["account"]] = {"name": holder["account"], "staked_mining_power": float(holder["stake"]) * mining_power, "loki": holder["$loki"]}
            else:
                accounts_by_name[holder["account"]]["staked_mining_power"] += float(holder["stake"]) * mining_power
                if accounts_by_name[holder["account"]]["loki"] > holder["$loki"]:
                    accounts_by_name[holder["account"]]["loki"] = holder["$loki"]                  
            mining_power_sum += float(holder["stake"]) * mining_power
          
    accounts = []
    for acc in accounts_by_name:
        accounts.append(accounts_by_name[acc])
    sorted_accounts = sorted(accounts, key=lambda m: (m["staked_mining_power"], m["loki"]))
    sum_mining_power = 0
    for acc_data in sorted_accounts:
        sum_mining_power += acc_data["staked_mining_power"]
    
    if int(json_data["N_accounts"]) != len(accounts_by_name) or abs(mining_power_sum - float(json_data["staked_mining_power"])) > 2 / 10 ** 6:
        print("staked accounts have changed and the mining cannot be validated...")
    else:
        N = int(json_data["N"])
        mining_power_sum = float(json_data["staked_mining_power"])
        winner_accs = []
        for i in range(N):
            x = get_random_range(0, mining_power_sum)
            sum_mining_power = 0
            winner_found = False
            
            for acc_data in sorted_accounts:
                sum_mining_power += acc_data["staked_mining_power"]
                
                if sum_mining_power > x and not winner_found:
                    winner_accs.append(acc_data["name"])
                    winner_found = True    
                    
        print("%d winner found" % len(winner_accs))
        if (winner_accs) == (json_data["winner"]):
            print("custom_json with %s was sucessfully validated. Winner are:" % trx_id)
            print(str(winner_accs))
        else:
            print("Custom_json could not be validated")
            print("winner from script:")
            print(str(winner_accs))
            print("winner from custom_json:")
            print(str(json_data["winner"]))            
```

- - -

This page is synchronized from the post: ['Validating the mining results of ENG token'](https://steemit.com/@holger80/validating-the-mining-results-of-eng-token)
