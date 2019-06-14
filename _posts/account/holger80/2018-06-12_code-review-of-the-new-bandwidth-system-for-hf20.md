
---
title: 'Code review of the new bandwidth system for HF20'
permlink: code-review-of-the-new-bandwidth-system-for-hf20
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-12 21:22:36
categories:
- bandwidth
tags:
- bandwidth
- steem
- blockchain
- hf20
- steemdev
thumbnail: 'https://ipfs.busy.org/ipfs/QmeWFNHoLpgT614tsbeRGryEqSMrAQtNUzSMXqW2Mr49w5'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmeWFNHoLpgT614tsbeRGryEqSMrAQtNUzSMXqW2Mr49w5)

In the newest update [Blockchain Update 2: HF20 Progress & Bandwidth Changes](https://steemit.com/bandwidth/@steemitblog/blockchain-update-2-hf20-progress-and-bandwidth-changes), the new bandwidth system for Hardfork 20 is explained.

 The remaining bandwidth is not measured in bytes, it will be measured in Resource Credits (RCs). Each account has a bandwidth which depends on the steem power as before. The unit is renamed to RC.

Instead of one bandwidth pool, several pools will be created which will be drained by broadcasted transactions differently. The current state of each pool determines the resulting costs of a transaction in RC. 

If the account has more RC as the transaction costs it will be broadcasted and the bandwidth of the account is reduced by the RC costs.


Let's take a look on the current implementation in branch [2018-05-24-rc](https://github.com/steemit/steem/commits/2018-05-24-rc):
### Three different rc_object_types are implemented
* `resource_history_bytes`
* `resource_new_accounts`
* `resource_market_bytes`

## Determining the resource_count of a transaction
` tx_size` is the transaction size and it is now counted how many market operation and how many new account creation operation are included.

The transaction size is added to resource_history_bytes:
`result.resource_count[ resource_history_bytes ] += tx_size;`

A `account_create_operation` or  `account_create_with_delegation_operation` increases 
` result.resource_count[ resource_new_accounts ] += vtor.new_account_op_count;`

And a market operation as
* limit_order_create_operation
* limit_order_cancel_operation
* transfer_operation
* transfer_to_vesting_operation

increases addionally the `resource_market_bytes` resource: 
```
if( vtor.market_op_count > 0 )
    result.resource_count[ resource_market_bytes ] += tx_size; 
```

There will be eventually more operation added to the resource count of resource_market_bytes :
```
// TODO:
// Should following ops be market ops?
// withdraw_vesting, convert, set_withdraw_vesting_route, limit_order_create2
// escrow_transfer, escrow_dispute, escrow_release, escrow_approve,
// transfer_to_savings, transfer_from_savings, cancel_transfer_from_savings,
// claim_reward_balance, delegate_vesting_shares, any SMT operations
```

## Estimating the costs
The  cost of all three resource types is calculated by the resource_count array and summed up:
```
int64_t total_cost = 0;
for( size_t i=0; i<STEEM_NUM_RESOURCE_TYPES; i++ )
{
   const rc_resource_params& params = params_obj.resource_param_array[i];
   int64_t pool = pool_obj.pool_array[i];
   int64_t cost = compute_rc_cost_of_resource( params.curve_params, pool, count.resource_count[i] );
   total_cost += cost;
}
```
## Increasing the RC usage by the estimated  `  total_cost`

The number of RC an account has is directly determined by its amount of vesting shares:
```
int64_t rc_max = account.vesting_shares.amount.value;
```

The available RCs are calculated by:
```
      uint128_t regen_u128 = uint64_t(dt);
      regen_u128 *= rc_max;
      regen_u128 /= STEEM_RC_REGEN_TIME;
      uint64_t regen = regen_u128.to_uint64();
      rc_usage -= int64_t( regen );
      int64_t rc_available = rc_max - rc_usage;
```
with
```
#define STEEM_RC_REGEN_TIME   (60*60*24*15)
```
and the total_cost of the transaction are added to the usage
```
  db.modify( rc_account, [&]( rc_account_object& rca )
 {
    rca.rc_usage = rc_usage + total_cost;
    rca.rc_usage_last_update = gpo.time;
 } );
```
## Conclusion
At the moment, remaining bandwidth is renamed from bytes to RC. 
Instead of one bandwidth pool, three recharging pool exists which influencing the transaction costs. 

All transaction drain the first pool. Market transactions drain additionally the second pool. Account creation transactions drain additionally the third pool.

Market and account creation transaction will reduce the bandwidth of an account stronger than other transactions.

The number of RCs an account has is the number of its vesting shares. The RC regeneration rate is 15 days.
___
[image source](https://pixabay.com/en/mathematics-formula-physics-school-989125/)
___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>

- - -

This page is synchronized from the post: ['Code review of the new bandwidth system for HF20'](https://steemit.com/@holger80/code-review-of-the-new-bandwidth-system-for-hf20)
