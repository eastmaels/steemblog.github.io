
---
title: 'beem version 0.20.3 released'
permlink: beem-version-0-20-3-released
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-28 11:45:48
categories:
- beem
tags:
- beem
- release
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmaMGH5GcZsUkNgYTM6eQrE4L37Zt98gPUQJTxMU4AUYMv'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Install [beem](https://github.com/holgern/beem/)
```
pip install beem -U
```
or 
```
conda install beem
```

# What has changed in the last releases:

0.20.3
------
* add RC class to calculate RC costs of operations
* add comment, vote, transfer RC costs in account.print_info() and beempy power
* Shows number of possible comments, votes, tranfers with available RCs in account.print_info() and beempy power
* get_rc_cost was added to steem to calculation RC costs from resource count
* bug regarding new amount format in witness update fixed (also for beempy witnessenable and witnessdisable)

0.20.2
------
* estimated_mana is now capped by estimated_max
* print_info fixed()
* get_api_methods() and get_apis() added to Steem

0.20.1
------
* Improved get_rc_manabar(), get_manabar() output
* get_voting_power() fixed again
* print_info for account improved
* get_manabar_recharge_time_str(), get_manabar_recharge_timedelta() and get_manabar_recharge_time() added
* https://steemd-appbase.steemit.com added to nodelist

0.20.0
------
* Fully supporting hf20
* add get_resource_params(), get_resource_pool(), claim_account(), create_claimed_account() to Steem
* fix 30x fee for create_account
* add find_rc_accounts() to Blockchain
* get_rc(), get_rc_manabar(), get_manabar() added to Account
* get_voting_power() fixed

## Some examples what is possible with the newest beem:
```
beempy power holger80
```
![image.png](https://ipfs.busy.org/ipfs/QmaMGH5GcZsUkNgYTM6eQrE4L37Zt98gPUQJTxMU4AUYMv)

```
 beempy witnessproperties --account_subsidy_budget 792 holger80 5xxxxx
```
![image.png](https://ipfs.busy.org/ipfs/QmWv665xmF9x3aHvau1i5ae5xYVc6nNHC9qcZq6JTgVVUo)

## Calculating RC values of a post and vote
```
from beem.comment import Comment
from beem.rc import RC
from beem.utils import resolve_authorperm
acc = Account("holger80")
authorperm = acc.get_blog(limit=1)[0]["authorperm"]
c = Comment(authorperm)
rc = RC()
c_rc_cost = rc.comment_dict(c)
rc_mana = acc.get_rc_manabar()
print("Your last post costs now %.2f G RC (%.2f %% of your max RC)" % (c_rc_cost / 1e9, c_rc_cost / rc_mana["estimated_max"] * 100))

last_vote = acc.get_account_votes()[-1]
vote_dict = {}
vote_dict["voter"] = acc["name"]
vote_dict["author"], vote_dict["permlink"] = resolve_authorperm(last_vote["authorperm"])
vote_dict["weight"] = 10000 # bug in api (weight is higher than 10000 and value does not matter for RC)
v_rc_cost = rc.vote_dict(vote_dict)
print("Your last vote costs now %.2f G RC (%.2f %% of your max RC)" % (v_rc_cost / 1e9, v_rc_cost / rc_mana["estimated_max"] * 100))
```

with the result:
```
Your last post costs now 28.17 G RC (0.34 % of your max RC)
Your last vote costs now 3.39 G RC (0.04 % of your max RC)
```

___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['beem version 0.20.3 released'](https://steemit.com/@holger80/beem-version-0-20-3-released)
