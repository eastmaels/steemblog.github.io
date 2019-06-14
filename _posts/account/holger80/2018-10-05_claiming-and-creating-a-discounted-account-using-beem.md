
---
title: 'Claiming and creating a discounted account using beem'
permlink: claiming-and-creating-a-discounted-account-using-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-05 10:58:48
categories:
- beem
tags:
- beem
- hf20
- steemdev
- tutorial
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmeXgoA9KzHMxo8uZp4WEwU86JiVPFoBRfmqW1ug4vLtwe'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This post is about claiming and creating a discounted account using beem. We will create two python scripts, one for claiming and the other one for creating. The RC costs for claiming a new account are `	4978.034244114 G RC` (https://beempy.com/resource_costs). 

## Claiming a discounted  account
Store the following lines  as `claim_account.py`
```
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.rc import RC
import getpass
import time


if __name__ == "__main__":
    wif = getpass.getpass(prompt='Enter your active key:')
    stm = Steem(node="https://api.steemit.com", keys=[wif])
    creator = stm.wallet.getAccountFromPrivateKey(wif)
    creator = Account(creator)
    rc = RC(steem_instance=stm)
    current_costs = stm.get_rc_cost(rc.get_resource_count(tx_size=250, new_account_op_count=1))
    current_mana = creator.get_rc_manabar()["current_mana"]
    last_mana = current_mana
    print("Current costs %.2f G RC - current mana %.2f G RC" % (current_costs / 1e9, current_mana / 1e9))
    if current_costs + 10 < current_mana:
        stm.claim_account(creator)
        time.sleep(10)
        creator.refresh()
        current_mana = creator.get_rc_manabar()["current_mana"]
        print("Account claimed and %.2f G RC paid." % ((last_mana - current_mana) / 1e9))
        last_mana = current_mana
    else:
        print("Not enough RC for a claim!")
```
Be sure to have beem installed (`pip install -U beem`). After storing the file,
it can be started by
```
python claim_account.py
```
The script is then asking for the active key of the claimer. The account name is automatically determined by the `getAccountFromPrivateKey` function. The script calculates the RC costs and checks if the operation will be sucessfull. If enougth RCs are available, one discounted  account is claimed.
```
Enter your active key.
Current costs 4982.55 G RC - current mana 7890.16 G RC
Account claimed and 4966.93 G RC paid.
```

## Creating a discounted account
Store the following lines as `create_claimed_account.py`
```
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.rc import RC
import getpass
import argparse
import time


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Creating a claimed account.')
    parser.add_argument('new_account_name', type=str, 
                       help='Account name from the account that should be created.')
    args = parser.parse_args()
    if args.new_account_name is None:
        raise ValueError("Please enter a name.")
        
    wif = getpass.getpass(prompt='Enter the active key of the account creator:')
    password = getpass.getpass(prompt='Enter the new password for the new account:')
    password2 = getpass.getpass(prompt='Re-Enter the new password for the new account:')
    if password != password2:
        raise ValueError("Password do not match!")
    stm = Steem(node="https://api.steemit.com", keys=[wif])
    creator = stm.wallet.getAccountFromPrivateKey(wif)
    creator = Account(creator)
    print(stm.create_claimed_account(args.new_account_name, creator=creator, password=password))
    time.sleep(10)
    
    new_account = Account(args.new_account_name)
    new_account.print_info()
```
After storing the file, it can be started by:
```
python create_claimed_account.py new_account_name
```
I will create a new account named `beempy` by entering:

```
python create_claimed_account.py beempy
```
After pressing return, the script asks for the active key of the creator and twice for the new account password:

```
Enter the active key of the account creator:
Enter the new password for the new account:
Re-Enter the new password for the new account:
{'expiration': '2018-10-05T10:43:16', 'ref_block_num': 62697, 'ref_block_prefix': 3046425873, 'operations': [['create_claimed_account', {'creator': 'holger80', 'new_account_name': 'beempy', 'owner': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM7c89UajhzdFv5pw9wsXmziSgUpvvBJSGopfmyjApH7vihyMayT', '1']]}, 'active': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM7peepDhHWyzzKW9CjadhTUxSnKETnsEAfPZXw6ogBbt4HTZZif', '1']]}, 'posting': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM8k5brzwzp8QZHJd1mT28Rsky2yMW9zy1oWbozfKzpVUQPfV6Ni', '1']]}, 'memo_key': 'STM6sRudsxWpTZWxnpRkCDVD51RteiJnvJYCt5LiZAbVLfM1hJCQC', 'json_metadata': '', 'extensions': []}]], 'extensions': [], 'signatures': ['1f51ed1ee7a19a8997ee3cf1be090e61075b3e76dcd81e24daee7ec49e878dc1ff580ee65ed10d8b9048fe72235f7939a5fc9598fe0b64929bdde7cc08aa51397b']}
beempy (25.00)
--- Voting Power ---
0.00 %,  VP = 0.00 $
full in 119:59:52
--- Balance ---
0.00 SP, 0.000 STEEM, 0.000 SBD
--- RC manabar ---
Remaining: 100.00 % (6 G RC of 6 G RC)
full in 0:00:00
--- Approx Costs ---
comment - 1.50 G RC - enough RC for 4 comments
vote - 0.31 G RC - enough RC for 19 votes
transfer - 0.12 G RC - enough RC for 50 transfers
custom_json - 0.18 G RC - enough RC for 33 custom_json
```
The new account `beempy` was sucessfully created:
![image.png](https://ipfs.busy.org/ipfs/QmeXgoA9KzHMxo8uZp4WEwU86JiVPFoBRfmqW1ug4vLtwe)

___
Be sure to store the given account password, it cannot be restored.

- - -

This page is synchronized from the post: ['Claiming and creating a discounted account using beem'](https://steemit.com/@holger80/claiming-and-creating-a-discounted-account-using-beem)
