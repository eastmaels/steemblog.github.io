
---
title: 'The approximated RC costs on steemd.com are wrong for 0.20.6'
permlink: the-approximated-rc-costs-on-steemd-com-are-wrong-for-0-20-6
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-29 16:52:24
categories:
- steemtank
tags:
- steemtank
- steemdev
- rc
- python
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmVkJGqeevN2KxwBF1ohTxXNgxq8g2H2tiF448PB2Gcgks'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The RC costs which are currently shown on https://steemd.com are currently wrong.
![image.png](https://ipfs.busy.org/ipfs/QmVkJGqeevN2KxwBF1ohTxXNgxq8g2H2tiF448PB2Gcgks)

## Script to measure RC costs
I used the script to measure RC costs:
```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from beem.account import Account
import time

wif_posting = "5xx"
wif_active = "5xx"

if __name__ == "__main__":

        stm = Steem(node = "https://api.steemit.com", keys=[wif_posting, wif_active])
        account = Account("beembot", steem_instance=stm)
        rc_mana_old = account.get_rc_manabar()
        print(account.steem)
        # vote RC costs
        # c = Comment("@holger80/which-influence-has-the-card-order-in-a-deck", steem_instance=stm)
        # c.upvote(voter="beembot")
        # transfer RC  costs
        #account.transfer("holger80", 0.001, "SBD", memo="Measure RC costs")
        # comment RC costs
        tags = ["test"]
        stm.post("Test to measure RC costs", "This is a test to measure the RC costs for a post", author="beembot", parse_body=True, tags=tags)
        time.sleep(5)
        rc_mana_new = account.get_rc_manabar()
        rc_costs  = rc_mana_old["current_mana"] - rc_mana_new["current_mana"]
        print("Costs: %f G RC" % (rc_costs / 1e9))   
```

## Measurement
The table shows the obtained results:

| type | RC costs |
| --- | --- |
| vote | 0.119031 G RC |
| transfer |  0.335866 G RC |
| comment | 1.464279 G RC |

It seems that the shown RC costs on https://steemd.com are divided by a factor of 2.
The measured RC costs for a vote is 0.11, whereas steemd showed 0.064. A transfer needs 0.33, whereas steemd shows 0.15. A short post costs 1.45 and steemd shows 0.9.



- - -

This page is synchronized from the post: ['The approximated RC costs on steemd.com are wrong for 0.20.6'](https://steemit.com/@holger80/the-approximated-rc-costs-on-steemd-com-are-wrong-for-0-20-6)
