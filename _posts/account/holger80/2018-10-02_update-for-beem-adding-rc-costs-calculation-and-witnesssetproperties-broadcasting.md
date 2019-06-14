
---
title: 'update for beem - adding RC costs calculation and witness_set_properties broadcasting'
permlink: update-for-beem-adding-rc-costs-calculation-and-witnesssetproperties-broadcasting
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-02 08:32:57
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/beem<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 489 unit tests and a coverage of 73 %. The current version is 0.20.5.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

As utopian-io was not available for quite a long time, I could not post development updates for beem. Thus this post contains the changes for beem releases `0.19.57`, `0.20.0`, `0.20.1`, `0.20.2`, `0.20.3`, `0.20.4` and `0.20.5`. Hopefully, I will receive a utopian-io upvote this time. ([my last developement update](https://steemit.com/utopian-io/@holger80/update-for-beem-preparing-beem-for-hf-20-and-delegate-added-to-beempy) did not receive a vote).

## New Features
### Implementing `witness_set_properties`
Implementing this new operation was really hard work, as this operation uses a new and undocumented format. Finally after finding out:
* each parameter value must be transmitted as hex number (e.g. `(hexlify(Uint32(k[1]).__bytes__())).decode()`) - [commit 6cc303d](https://github.com/holgern/beem/commit/6cc303d1b0fdfb096da78d3ff331aaa79a18ad8f)
* The map structure can be used for building the trx dict - [commit 6cc303d](https://github.com/holgern/beem/commit/6cc303d1b0fdfb096da78d3ff331aaa79a18ad8f)
* all key have to sorted ([commit f63c0ce3](https://github.com/holgern/beem/commit/f63c0ce368979bbb8dbc3ce161b60d3bf1647128))
* A new `HexString` class was implemented, as each hex value must be transformed to `bytes(unhexlify(bytes(self.data, 'ascii')))` for building the bytes field for signing - ([commit f63c0ce3](https://github.com/holgern/beem/commit/f63c0ce368979bbb8dbc3ce161b60d3bf1647128))
The operation must be signed with the last set witness key and it is not possible to use this operation when a witness is disabled.

After being able to broadcast, a new function `witness_set_properties` for building the operation dict was added to `witness_set_properties`.
```
    def witness_set_properties(self, wif, owner, props, use_condenser_api=True):
        """ Set witness properties
             :param privkey wif: Private signing key
            :param dict props: Properties
            :param str owner: witness account name
             Properties:::
                 {
                    "account_creation_fee": x,
                    "account_subsidy_budget": x,
                    "account_subsidy_decay": x,
                    "maximum_block_size": x,
                    "url": x,
                    "sbd_exchange_rate": x,
                    "sbd_interest_rate": x,
                    "new_signing_key": x
                }
         """
```

 A new command `witnessproperties` was then also added to `beempy`.
```
Usage: beempy witnessproperties [OPTIONS] WITNESS WIF

  Update witness properties of witness WITNESS with the witness signing key WIF

Options:
  --account_creation_fee TEXT    Account creation fee (float)
  --account_subsidy_budget TEXT  Account subisidy per block
  --account_subsidy_decay TEXT   Per block decay of the account subsidy pool
  --maximum_block_size TEXT      Max block size
  --sbd_interest_rate TEXT       SBD interest rate in percent
  --new_signing_key TEXT         Set new signing key
  --url TEXT                     Witness URL
  --help                         Show this message and exit.
```
Only the set parameter is changed, all other remain unchanged.

## Adding a class to calculate RC costs for different operation
The RC costs depend on the four pools (resource_execution_time is not used yet):

* resource_history_bytes
* resource_market_bytes
* resource_new_accounts
* resource_state_bytes

and the parameter from the `price_curve_params` field:

* coeff_a
* shift
* coeff_b

as well as from

* rc_regen (is the same for all pools: `int(Amount(dyn_param["total_vesting_shares"], steem_instance=self)) / (STEEM_RC_REGEN_TIME / config["STEEM_BLOCK_INTERVAL"])`
* resource_unit is stored in the `resource_dynamics_params` field

There are rules to get the resource_count for each operation. For example for a comment it is:
```
state_bytes_count = state_object_size_info["comment_object_base_size"]
state_bytes_count += state_object_size_info["comment_object_permlink_char_size"] * permlink_length
state_bytes_count += state_object_size_info["comment_object_parent_permlink_char_size"] * parent_permlink_length
resource_count = {"resource_history_bytes": tx_size}
resource_count["resource_state_bytes"] = state_object_size_info["transaction_object_base_size"]
resource_count["resource_state_bytes"] += state_object_size_info["transaction_object_byte_size"] * tx_size
resource_count["resource_state_bytes"] += state_bytes_count
```
For a comment with:
```
tx_size=1000
permlink_length=10
parent_permlink_length=0
```
the `resource_count` dict is
```
{'resource_history_bytes': 1000,
 'resource_state_bytes': 2290090}
```
These values can now be used to calculate the RC costs:

```
        total_cost = 0
        if rc_regen == 0:
            return total_cost
        for resource_type in resource_count:
            curve_params = params[resource_type]["price_curve_params"]
            current_pool = int(pools[resource_type]["pool"])
            count = resource_count[resource_type]
            count *= params[resource_type]["resource_dynamics_params"]["resource_unit"]
            cost = self._compute_rc_cost(curve_params, current_pool, count, rc_regen)
            total_cost += cost
```
with 
```
def _compute_rc_cost(self, curve_params, current_pool, resource_count, rc_regen):
    """Helper function for computing the RC costs"""
    num = int(rc_regen)
    num *= int(curve_params['coeff_a'])
    num = int(num) >> int(curve_params['shift'])
    num += 1
    num *= int(resource_count)
    denom = int(curve_params['coeff_b'])
    if int(current_pool) > 0:
        denom += int(current_pool)
    num_denom = num / denom
    return int(num_denom) + 1
```

The function from the new RC class can also be used to calculate RC costs:
```
from beem.rc import RC
rc = RC()
comment_RC_costs = rc.comment(tx_size=1000, permlink_length=10, parent_permlink_length=0)
print("RC costs for a comment: %.2f G RC" % (comment_RC_costs  / 1e9))
```
It is also possible to use a comment operation dict with the comment_dict function. RC costs are implemented for 
* comment
* vote
* transfer
* custom_json

As the RC values are really high, I use mainly `G RC` which is RC/1e9.


## More HF20 related changes
* add get_resource_params(), get_resource_pool(), claim_account(), create_claimed_account() to Steem
* fix 30x fee for create_account
* add find_rc_accounts() to Blockchain
* get_rc(), get_rc_manabar(), get_manabar() added to Account
* get_voting_power() fixed
* get_manabar_recharge_time_str(), get_manabar_recharge_timedelta() and get_manabar_recharge_time() added
* get_api_methods() and get_apis() added to Steem
* get_effective_vesting_shares() added to calculated max_mana correctly
* comment_benefactor_reward adapted for snapshot




## Commit history

### Release 0.20.5
* [commit e1859a0](https://github.com/holgern/beem/commit/e1859a0b6aeedd4ea9a32634f65408f025ab1822)
* fix get_effective_vesting_shares()
### Release 0.20.4
* [commit 3947677](https://github.com/holgern/beem/commit/39476777d25e6bf6cd2337a10ff03f75c8cfe096)
* get_effective_vesting_shares() added to calculated max_mana correctly
* dict key words adapted to steemd for get_manabar() and get_rc_manabar()
* Voting mana fixed for 0 SP accounts
* comment_benefactor_reward adapted for snapshot
* Custom_json RC costs added to print_info
### Release of 0.20.3
* [commit ca4162f](https://github.com/holgern/beem/commit/ca4162fc7c61c330b4e6dc13fccde61e5c1f245f)
#### Account
* add comment, vote, transfer RC costs in account.print_info() and beempy power
* Shows number of possible comments, votes, tranfers with available RCs in account.print_info() and beempy power

#### RC
* add possibility to specify tx_size instead of constructing a dict for comment, transfer, vote and custom_json

### Fix witness update for beempy disablewitness and beempy enablewitness
* [commit 78825f3](https://github.com/holgern/beem/commit/78825f31f99eecd0a58823b6f671d10c00ea94f0)

### Implementation of a RC costs calculation class 
* [commit 827f41cb](https://github.com/holgern/beem/commit/827f41cbac0131862f26414242a0f27256dc1514)
* get_rc_cost was added to steem to calculation RC costs from resource count

#### RC
* get_tx_size(), get_resource_count(), comment(), vote(), transfer() and custom_json() added

### several bug fixes
* [commit 2c2ce66](https://github.com/holgern/beem/commit/2c2ce6675aaafe871fb63f04cc1829a522acb4d9)

### release of 0.20.2
* [commit 3ba1b97](https://github.com/holgern/beem/commit/3ba1b97ba0f29ac2c12064f70502cb6364702994)
* estimated_mana is now capped by estimated_max
* print_info fixed()
* get_api_methods() and get_apis() added to Steem

### Release of 0.20.1 
* [commit a2ea86d](https://github.com/holgern/beem/commit/a2ea86de08792f9e016c07ac6213f57383da21f1)
* Improved get_rc_manabar(), get_manabar() output
* get_voting_power() fixed again
* print_info for account improved
* get_manabar_recharge_time_str(), get_manabar_recharge_timedelta() and get_manabar_recharge_time() added
* https://steemd-appbase.steemit.com added to nodelist

### Release of 0.20.0 
* [commit ebc508a](https://github.com/holgern/beem/commit/ebc508a12abd4b314697bbc998471dddfae40ec0)
* Fully supporting hf20
* add get_resource_params(), get_resource_pool(), claim_account(), create_claimed_account() to Steem
* fix 30x fee for create_account
* add find_rc_accounts() to Blockchain
* get_rc(), get_rc_manabar(), get_manabar() added to Account
* get_voting_power() fixed

### Preparing first release for HF20, adapt account create for HF20
* [commit 76021f3](https://github.com/holgern/beem/commit/76021f36c6bbf2800cf8dc04456dba0bf59382bb)

### add new witness_set_properties function
* [commit 4771398](https://github.com/holgern/beem/commit/477139876cb6f77510d49437088b22ef4c3ffb76)
* witnessproperties is added to beempy for setting new witness parameter 
* witnessfeed uses the new witness_set_properties function when a wif is provided

### Fix bytes representation of hex strings and add key sorting to Witness_set_properties
* [commit f63c0ce](https://github.com/holgern/beem/commit/f63c0ce368979bbb8dbc3ce161b60d3bf1647128)

### Update nodelist and add not_working parameter to get_nodes()
* [commit bad0ca3](https://github.com/holgern/beem/commit/bad0ca393ca98023a1cce5c21ec7faeae114642d)

### Add unit test for witness_set_properties 
* [commit 25926d5](https://github.com/holgern/beem/commit/25926d5fc03b035272b1109736c1379d925e2ce1)
* RawString added to types
* Some improvements and fixes

### Implementation of Witness_set_properties
* [commit 6cc303d](https://github.com/holgern/beem/commit/6cc303d1b0fdfb096da78d3ff331aaa79a18ad8f)
* All parameter are packed now in a correct way
* Correct operationid for Witness_set_properties

#### objects.Amount
* naming of symbol and asset improved

### Add missing changes to transactionbuilder
* [commit e1cea48](https://github.com/holgern/beem/commit/e1cea48a349c92cf2339ea8951858aae7996d3b2)
* Add parameter for enabling usage of condenser_api  for broadcasting
* Add ref_block_num and ref_block_prefix to constructTx for offline signing

### Add Witness_set_properties to operations and add Offline constructTx
* [commit e61c802](https://github.com/holgern/beem/commit/e61c802c4fc1e4fe9f6a6dad7e2abe0fb4a813ab)
* Example for using offline signing is provided
* Next release prepared

- - -

This page is synchronized from the post: ['update for beem - adding RC costs calculation and witness_set_properties broadcasting'](https://steemit.com/@holger80/update-for-beem-adding-rc-costs-calculation-and-witnesssetproperties-broadcasting)
