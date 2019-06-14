
---
title: 'How much did you spent/receive to/from drugwars/steemmonsters'
permlink: how-much-did-you-spent-receive-to-from-drugwars-steemmonsters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-14 14:29:42
categories:
- beem
tags:
- beem
- python
- transfer
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmSy6iTve7UFS3QxUNTYWUXXXUYnWVGdT41Pw2SJkjXinq'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmSy6iTve7UFS3QxUNTYWUXXXUYnWVGdT41Pw2SJkjXinq)
[image source](https://pixabay.com/de/geld-geldturm-m%C3%BCnzen-euro-2180330/)

I wrote two small python scripts for finding out how much did I spent/receive on the drugwars and steemonsters game. Both scripts using account history and filter for all transfer transactions. For drugwars, I filter for transaction from/to "drugwars" and "drugwars-dealer". For steemmonsters, I filter for memo text including `sm_market_sale` or `sm_market_purchase`.

You can ask in the comments, when you want to know your balance without running the scripts. I will then posts the results.

## Drugwars

```python
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.amount import Amount
from beem.nodelist import NodeList
import six


if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    if six.PY2:
        account = raw_input("Account name:")
    else:
        account = input("Account name:")
    included_accounts = ["drugwars", "drugwars-dealer"]
    steem_spent = 0
    steem_received = 0
    sbd_spent = 0
    sbd_received = 0
    account = Account(account, steem_instance=stm)
    for h in account.history_reverse(only_ops=["transfer"]):
        if h["from"] in included_accounts:
            amount = Amount(h["amount"], steem_instance=stm)
            if amount.symbol == "STEEM":
                steem_received += float(amount)
            elif amount.symbol == "SBD":
                sbd_received += float(amount)
        elif h["to"] in included_accounts:
            amount = Amount(h["amount"], steem_instance=stm)
            if amount.symbol == "STEEM":
                steem_spent += float(amount)
            elif amount.symbol == "SBD":
                sbd_spent += float(amount)
        elif h["to"] in included_accounts and h["from"] == account["name"] and h["memo"][:2] == "P-":
            amount = Amount(h["amount"], steem_instance=stm)
            if amount.symbol == "STEEM":
                steem_spent += float(amount)
            elif amount.symbol == "SBD":
                sbd_spent += float(amount)  
                
    print("STEEM/SBD sent/received from/to %s\n" % (", ".join(included_accounts)))
    print("%.3f STEEM received - %.3f STEEM spent" % (steem_received, steem_spent))
    print("Sum: %.3f STEEM" % (steem_received-steem_spent))
    print("\n")
    print("%.3f SBD received - %.3f SBD spent" % (sbd_received, sbd_spent))
    print("Sum: %.3f SBD" % (sbd_received-sbd_spent))
```
Store this script as `transfer_history_drugwars.py` and run it:
```
python transfer_history_drugwars.py
```
The script asks for your steem username.

## Steemmonsters

```python
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.amount import Amount
from beem.nodelist import NodeList
import six


if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    if six.PY2:
        account = raw_input("Account name:")
    else:
        account = input("Account name:")
    memo_text_received = "sm_market_sale"
    memo_text_spent = "sm_market_purchase"
    steem_spent = 0
    steem_received = 0
    sbd_spent = 0
    sbd_received = 0
    account = Account(account, steem_instance=stm)
    for h in account.history_reverse(only_ops=["transfer"]):
        if memo_text_received in h["memo"] and h["to"] == account["name"]:
            amount = Amount(h["amount"], steem_instance=stm)
            if amount.symbol == "STEEM":
                steem_received += float(amount)
            elif amount.symbol == "SBD":
                sbd_received += float(amount)
        elif memo_text_spent in h["memo"] and h["from"] == account["name"]:
            amount = Amount(h["amount"], steem_instance=stm)
            if amount.symbol == "STEEM":
                steem_spent += float(amount)
            elif amount.symbol == "SBD":
                sbd_spent += float(amount)
                
    print("## Steemmonsters")
    print("%.3f STEEM received - %.3f STEEM spent" % (steem_received, steem_spent))
    print("Sum: %.3f STEEM" % (steem_received-steem_spent))
    print("\n")
    print("%.3f SBD received - %.3f SBD spent" % (sbd_received, sbd_spent))
    print("Sum: %.3f SBD" % (sbd_received-sbd_spent))
```

Store this script as `transfer_history_steemmonsters.py` and run it:
```
python transfer_history_steemmonsters.py
```
The script asks for your steem username.

- - -

This page is synchronized from the post: ['How much did you spent/receive to/from drugwars/steemmonsters'](https://steemit.com/@holger80/how-much-did-you-spent-receive-to-from-drugwars-steemmonsters)
