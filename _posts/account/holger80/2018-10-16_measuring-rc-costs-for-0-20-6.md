
---
title: 'Measuring RC costs for 0.20.6'
permlink: measuring-rc-costs-for-0-20-6
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-16 08:45:51
categories:
- steemdev
tags:
- steemdev
- steem
- hardfork
- hf20
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmaA1P35FhXsN1V7dxPtFZrhk72Cez1kSLji7UoDjs81Jm'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A new bugfix release of steem (0.20.6) is currently prepared for release next week. @reggaemuffin already merged the most important changes into his live test environment `https://testbed.reggaemuffin.me/` ([more infos](https://steemit.com/witness-update/@reggaemuffin/steemcommunity-update-new-changes-from-steemit-steem-repo-up-for-review).

I will do some tests regarding the changed RC costs:
The broadcasted operation can be seen https://steemd.com/@beembot
![image.png](https://ipfs.busy.org/ipfs/QmaA1P35FhXsN1V7dxPtFZrhk72Cez1kSLji7UoDjs81Jm)

# RC costs measurements
Version 0.20.5 was measured on `https://api.steemit.com`. 0.20.6 was measured on `https://testbed.reggaemuffin.me/`.

The RC costs were measured by:
For 0.20.6 (`https://testbed.reggaemuffin.me/`)
```
        node = "https://testbed.reggaemuffin.me/"
        stm = Steem(node=node, keys=[wif_posting])
        account = Account("beembot", steem_instance=stm)        
        rc_mana_old = account.get_rc_manabar()
        print(account.steem)
        # place for broadcast a operation      
        sleep(5)
        rc_mana_new = account.get_rc_manabar()
        rc_costs = rc_mana_old["current_mana"] - rc_mana_new["current_mana"]
        print("RC costs: %f G RC" % (rc_costs / 1e9))
```

For 0.20.5 (`https://api.steemit.com`):
```
        stm2 = Steem(node = "https://api.steemit.com", keys=[wif_posting])
        account = Account("beembot", steem_instance=stm2)
        rc_mana_old = account.get_rc_manabar()
        print(account.steem)
        # place for broadcast a operation      
        sleep(5)
        rc_mana_new = account.get_rc_manabar()
        rc_costs  = rc_mana_old["current_mana"] - rc_mana_new["current_mana"]
        print("Costs: %f G RC" % (rc_costs / 1e9))   
```
# Measurements
## Transfer

| version | RC costs [G RC] |
| --- |  --- |
|0.20.6 | 0.300629 |
| 0.20.5 | 0.254544 |

## Vote

| version | RC costs [G RC] |
| --- |  --- |
|0.20.6 | 0.115230 |
| 0.20.5 | 0.288244 |

## Custom_json (follow)

| version | RC costs [G RC] |
| --- |  --- |
|0.20.6 | 0.404449 |
| 0.20.5 | 0.070962  |

## Custom_json (reblog)

| version | RC costs [G RC] |
| --- |  --- |
|0.20.6 | 0.106790  |
| 0.20.5 | 0.092349  |

## Comment 

| version | RC costs [G RC] |
| --- |  --- |
|0.20.6 | 1.966627   |
| 0.20.5 | 1.821318   |

## Conclusion
RC costs for a vote and a follow custom_json operation will be changing. RC costs for a vote are reduced by a factor of 2.5. RC costs for a follow custom_json OP  are increased by a factor of 5.6. The RC costs of other custom_json operation is not affected.

The RC costs of all broadcasted operations are slightly increased, as now the execution time is now included in the RC cost calculation.

## Link to the commits:
There are three changes related to RC costs: 
* execution time: https://github.com/steemit/steem/commit/27b3e5e92682cb3c042e3dd6938eef9e5ef0117c
* Reducing custom_json execution time and increasing custom_json follow execution time: https://github.com/steemit/steem/commit/47ce5099ba254141b4ffe97bb3187d3a21369365
* Reducing RC costs f or a vote: https://github.com/steemit/steem/commit/673c86fa572d54d7d7a982ca8cb7c2440d8eb214

- - -

This page is synchronized from the post: ['Measuring RC costs for 0.20.6'](https://steemit.com/@holger80/measuring-rc-costs-for-0-20-6)
