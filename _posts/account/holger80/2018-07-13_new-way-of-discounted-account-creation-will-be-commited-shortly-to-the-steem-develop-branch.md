
---
title: 'New way of discounted account creation will be commited shortly to the steem develop branch'
permlink: new-way-of-discounted-account-creation-will-be-commited-shortly-to-the-steem-develop-branch
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-13 13:10:12
categories:
- steemit
tags:
- steemit
- steemdev
- development
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXtkESzjY4r4toiGAe7UGiWChNLhcEGQBc22Xygn3XATY'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I don't know if this was already proper announced by the steemit team, but there is an interesting [PR](https://github.com/steemit/steem/pull/2561) ready to be merged the development branch.

There will be new poperties in `witness_schedule`:
* `account_subsidy_print_rate` // Per block print rate with precision 6
* `single_witness_subsidy_limit`  // Per witness limit

The `top19` are renamed to `elected` witness (there will be 20 elected witnesses in HF 20).

There will be new properties in `get_dynamic_global_properties`:
* `available_account_subsidies` 

# What does this mean?
When an account should be created and the set fee is lower than the creation fee (currently 3 STEEM)

`if( paid_fee < creation_fee )`

it may be created when:

*  the current block creation witness is an elected witness
```
FC_ASSERT( current_witness.schedule == witness_object::elected, "Subsidized accounts can only be claimed by elected witnesses" );
```
There is a decay when a witness creates too many accounts:
```
 // linear decay to enforce no more than 10% max by a single witness over 48 hours.

```
* the  current witness does not create already too many free accounts
```

new_subsidies += STEEM_ACCOUNT_SUBSIDY_PRECISION;

FC_ASSERT( new_subsidies <= wso.single_witness_subsidy_limit, "Witness has claimed too many subsidized accounts recents. Claimed: ${claimed} Limit: ${limit}",
```
* sufficient `available_account_subsidies` is left 
```
FC_ASSERT( gpo.available_account_subsidies >= percent_unpaid, "There are not enough subsidized accounts to claim" );
```

The VESTS amount of the created account is not zero, it is founded from the subsidies and equal to the account creation fee.
# Let's go through the unit test, they explain quite sufficient what is going to change:

## Printing of subsidies
In each block, new subsidies will be printed:
![image.png](https://ipfs.busy.org/ipfs/QmXtkESzjY4r4toiGAe7UGiWChNLhcEGQBc22Xygn3XATY)

## Free account creation 
A new account with zero fee is created and the amount of vests is subtracted from the available subsidies:
![image.png](https://ipfs.busy.org/ipfs/QmWqiENqKo7NRaymjXXt5JrjXhhiZAntLDfwWWsxutt7nv)

## Discounted account creation
A new account with a fee below the necessary fee is created and less subsidies are needed:
![image.png](https://ipfs.busy.org/ipfs/QmSRMZtWorpFXekfQqmmxeo3JzsPD8xkv46NSDuVdMTAzE)

## It takes one block to generate a discounted account
After broadcasting the account creation op, the account is created but pending. After a block was generated, the account is fully working.
![image.png](https://ipfs.busy.org/ipfs/QmZtnkbTYRAAH8XBDXdjQ3pqpCFwjUDPMp4FYPZP8uUgLa)


# Conclusion
An account creation operation with a fee lower than the required fee can only be broadcasted when the block signing witness is one of the top 20 and when the witness created not too many free accounts already. `available_account_subsidies` must also be greater than the necessary account creation fee.

When the block signing witness is not a top 20 witness, the op is rejected. 

So when 19 of 20 witness already created too many accounts, I have to wait and broadcast the op in the correct timepoint, so that my op is broadcasted when this witness is signing. 

I don't know If I correctly understand the source code, but his sounds quite strange to me.

> Instead of powering up the account creation fee to the new account, it should be "burned" by transferring it to the null account. [# 1762](https://github.com/steemit/steem/issues/1762)

So it seems this creates then an account with zero vests inside it

> Minimum accounts (with 0 SP) should have a limit of certain operations over some unit time.  [# 2595](https://github.com/steemit/steem/issues/2595)

which is able to some basic stuff.

- - -

This page is synchronized from the post: ['New way of discounted account creation will be commited shortly to the steem develop branch'](https://steemit.com/@holger80/new-way-of-discounted-account-creation-will-be-commited-shortly-to-the-steem-develop-branch)
