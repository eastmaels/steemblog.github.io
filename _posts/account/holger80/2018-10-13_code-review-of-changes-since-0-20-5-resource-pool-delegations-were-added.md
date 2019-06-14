
---
title: 'code review of changes since 0.20.5 - resource delegations pool  objects were added'
permlink: code-review-of-changes-since-0-20-5-resource-pool-delegations-were-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-13 20:26:33
categories:
- witness-category
tags:
- witness-category
- witness-update
- hf20
- steem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmTCD3bBNwVPNE4eLEPdVYoSqLcDgevdAKTccgVP9fgJGQ'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This post is part of my witness duties to review all code changes made in https://github.com/steemit/steem/.

I was checking the changes since 0.20.5, they can be found here: https://github.com/steemit/steem/compare/v0.20.5...master

## Assuring that mana_used is above `std::numeric_limits< uint64_t >::min()`
That's a useful and necessary change. They assure that `used_mana` will not jump to an unexpected value when used_mana goes below the numerical minimum.
![image.png](https://ipfs.busy.org/ipfs/QmTCD3bBNwVPNE4eLEPdVYoSqLcDgevdAKTccgVP9fgJGQ)

## Resource pool parameters are changed
The budget parameter of all pool is decreased and RC cost raise is prevented by changing `a_point_num` and `a_point_denom`.
![](https://cdn.steemitimages.com/DQmdrhjn4dJRNwCYBa37Aj8NGfkA3AZLkfu3YSWvW9twqbL/image.png)

![image.png](https://ipfs.busy.org/ipfs/QmXZ8cZN1oBDJdz9oMwrJjPN51yznCE1PMpejp67VJ5cMj)


## Removing of the old bandwidth code
The old bandwidth code is removed.
* witness_api_plugin is removed from the condenser_api build instructions
* #include <steem/plugins/witness_api/witness_api_plugin.hpp> is removed from condenser_api.cpp
* get_account_bandwidth is removed
* average_block_size, current_reserve_ratio , max_virtual_bandwidth  is removed
* average_bandwidth, lifetime_bandwidth, last_bandwidth_update, average_market_bandwidth, lifetime_market_bandwidth, last_market_bandwidth_update is removed from the account object
* witness_api files from `libraries/plugins/apis/witness_api` were removed

## RC delegation pool objects and operation were added
RC delegation pool objects and operation were added to the current master. This is the first step in implementing RC delegation pools.

* New objects rc_delegation_pool_object_type, rc_indel_edge_object_type, rc_outdel_drc_edge_object_type

### New class `rc_delegation_pool_object`
> Represents a delegation pool.
A new class to handle each rc delegation pool was added. Parameter are:
* id_type                       id;
* account_name_type             account;
* steem::chain::util::manabar   rc_pool_manabar;

### New class `rc_indel_edge_object`
> Represents a delegation from a user to a pool.
Parameter:
*     id_type                       id;
*      account_name_type             from_account;
*     account_name_type             to_pool;
*      share_type                    amount;

### New class `rc_outdel_drc_edge_object `
```
 * Represents a delegation from a pool to a user based on delegated resource credits (DRC).
 *
 * In the case of a pool that is not under heavy load, DRC:RC has a 1:1 exchange rate.
 *
 * However, if the pool drops below STEEM_RC_DRC_FLOAT_LEVEL, DRC:RC exchange rate starts
 * to rise according to `f(x) = 1/(a+b*x)` where `x` is the pool level, and coefficients `a`,
 * `b` are set such that `f(STEEM_RC_DRC_FLOAT_LEVEL) = 1` and `f(0) = STEEM_RC_MAX_DRC_RATE`.
 *
 * This ensures the limited RC of oversubscribed pools under heavy load are
 * shared "fairly" among their users proportionally to DRC.  This logic
 * provides a smooth transition between the "fiat regime" (i.e. DRC represent
 * a direct allocation of RC) and the "proportional regime" (i.e. DRC represent
 * the fraction of RC that the user is allowed).
 ```
Parameter:
*      id_type                       id;
*      account_name_type             from_pool;
*      account_name_type             to_account;
*      steem::chain::util::manabar   drc_manabar;
*      int64_t                       drc_max_mana = 0;

### New container to store the state and operation of the RC pool delegation has been added

### New operation `delegate_to_pool_operation` was added
This operation can be used to delegate RC from an account to a pool.

Operation parameter: 
   *    account_name_type     from_account;
   *    account_name_type     to_pool;
   *    share_type            amount;
### New operation `delegate_drc_from_pool_operation` was added
This operation can be used to allow account use RC from a pool. The operation has to be signed from the pool owner.

Operation parameter:
*   account_name_type      from_pool;
*   account_name_type      to_account;
*   int64_t                mana_change = 0;
*   int64_t                drc_max_mana = 0;

## Changes in the RC cost calculation
The most important change is that `resource_execution_time` are now used for resource_count calculation. This is done by adding the missing
```
result.resource_count[ resource_execution_time ] += vtor.execution_time_count;
```
### exec_time for custom_json are made a lot cheaper
The calculation time custom_operation_exec_time has been reduced from 228000 to 11400.
Rc costs for a follow remain high:
```
 exec_time *= EXEC_FOLLOW_CUSTOM_OP_SCALE;
```
### RC costs for a  vote is reduced by factor of 19
* comment_vote_object_base_size  is changed from `47 *STATE_BYTES_SCALE` to  `47     *STATE_COMMENT_VOTE_BYTE_SIZE`

## RC changes - New Maximum negative mana added
* `define STEEM_RC_MAX_NEGATIVE_PERCENT 166`
* `int64_t min_mana = -1 * ( STEEM_RC_MAX_NEGATIVE_PERCENT * mbparams.max_mana ) / STEEM_100_PERCENT;`

## Code cleanup/improvements
* Some code cleanup/improvements regarding handling of the first block
* Some code cleanup regarding the removed modifier for account creation
* SMT unit test were added

# Conclusion
The code changes contain some uncritical code clean up regarding
* old bandwidth system is removed
* handling of the first block
* removed modifier for account creation

The most important change is the adding of objects for resource pool  delegations . This is the first necessary step in implementing a fully working pool delegation. New objects, container and operation have been added to implement this feature. It will be possible to use `delegate_to_pool_operation` for creating a new RC pool. `delegate_drc_from_pool_operation` can be used to allow other accounts using the pool.

![](https://cdn.steemitimages.com/DQmeqQwtX7gEnRrvDQBcDVcrPFmar1EK6DKTxsXyu8f4v8u/image.png)

The second most important change is the enabling of `resource_execution_time` for RC costs. The budget of all pools have been increased to compensate this. The cost of a vote has made 19x cheaper, custom_json operation was also made  20x cheaper (except of follow custom json operation).

Some code improvements were made: 
* New maximum negative mana have been defined (166 % of max_mana)
* Check added to assure that mana_used is above a defined minimum value

The changes are looking promising to me.

- - -

This page is synchronized from the post: ['code review of changes since 0.20.5 - resource delegations pool  objects were added'](https://steemit.com/@holger80/code-review-of-changes-since-0-20-5-resource-pool-delegations-were-added)
