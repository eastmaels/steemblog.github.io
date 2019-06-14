
---
title: 'Current state of hardfork 0.20.0 development - 30.05.2018'
permlink: current-state-of-hardfork-0-20-0-development-30-05-2018
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-30 08:50:06
categories:
- steemit
tags:
- steemit
- hardfork
- hf20
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmUqgKHPfkYcZ9JZPzhTx7jedEgXeFcFhptygErSEbCVu7'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center> ![image.png](https://ipfs.busy.org/ipfs/QmUqgKHPfkYcZ9JZPzhTx7jedEgXeFcFhptygErSEbCVu7)
[source](https://pixabay.com/en/update-upgrade-board-renew-improve-1672385/)
</center>
Currently merged issues for hardfork 0.20.0:
[0_20.hf](https://github.com/steemit/steem/blob/develop/libraries/protocol/hardfork.d/0_20.hf)  
```
#define STEEM_HARDFORK_0_20__409  (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1620 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1760 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1764 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1765 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1782 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1811 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__1815 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__2019 (STEEM_HARDFORK_0_20)
#define STEEM_HARDFORK_0_20__2428 (STEEM_HARDFORK_0_20)
```
# Merged changes

## Potential unexpected behavior while calculating median feed? [#409](https://github.com/steemit/steem/issues/409)
* no impact,  assert is added to assure correct entering of price feed by witnesses

## Flexible witness parameter operation [#1620](https://github.com/steemit/steem/issues/1620)
* minor impact: creates a new api function for allowing witnesses to set one parameter instead of all at once.

## Deprecate account_create_with_delegation_operation [#1760](https://github.com/steemit/steem/issues/1760)
* medium impact: the account_create_with_delegation_operation will be removed. In HF 20, it is possible to create a new account by paying STEEM and there will be a limited possibility to create a new account for 0 STEEM ([Discount Account Creation](https://github.com/steemit/steem/issues/1771).

## (Remove ?) vote dust threshold [#1764](https://github.com/steemit/steem/issues/1764)
* medium impact: This change reduces all casted votes by around 1.23 SP. With the current implementation, 2.46 SP are needed to cast a successful vote. This change will strongly reduce the effectiveness of small account vote accounts.
```
   if( db.has_hardfork( STEEM_HARDFORK_0_20__1764 ) )
   {
      info->abs_rshares -= STEEM_VOTE_DUST_THRESHOLD;
      info->abs_rshares = std::max( int64_t(0), info->abs_rshares );
   }
   if( db.has_hardfork( STEEM_HARDFORK_0_14__259 ) )
   {
      FC_ASSERT( info->abs_rshares > STEEM_VOTE_DUST_THRESHOLD || vote_weight == 0, "Voting weight is too small, please accumulate more voting power or steem power." );
   }
```


## Witness Parameter: Daily Discounted Account Limit [#1765](https://github.com/steemit/steem/issues/1765)
* medium impact: witnesses can control how many accounts can be created for 0 STEEM each day.

## Temp Account Creation Recovery Account [#1782](https://github.com/steemit/steem/issues/1782)
* minor impact: Accounts created by `STEEM_TEMP_ACCOUNT ` will not have a recovery_account anymore



## Move sufficient balance checks to adjust_balance [#1811](https://github.com/steemit/steem/issues/1811)
* no impact: adds assert checks to assure all balances are not negative

## Change assert() in database::match() to FC_ASSERT() [#1815](https://github.com/steemit/steem/issues/1815)
* no impact: code cleanup


## Remove challenging authorities [#1848](https://github.com/steemit/steem/issues/1848)
* state: merged
* no impact, this change is a code clean up, challenging authorities were never implemented


## removal of 20s comment limit [#2019](https://github.com/steemit/steem/issues/2019)
* medium impact: comment interval is reduced to 3s. (Post interval remains at 5 minutes)

## Possible reward pool gaming by cycling delegations [#2428](https://github.com/steemit/steem/issues/2428)
* medium impact: The delegation return period is increased from 7 days to 10 days.

# Unmerged changes


## Block size can eclipse p2p max message size. [# 1655](https://github.com/steemit/steem/issues/1655)
* state: soft fork changes merged
* no impact: creates a new maximum block size boundary (2 MB)

## Revert Modified Account Creation Fee [#1761](https://github.com/steemit/steem/issues/1761)
* the account creation fee, which is specified by the witnesses, will be the true creation fee (30x removed)

## Lost curation rewards from the reverse auction should go back to rewards pool #[1877](https://github.com/steemit/steem/issues/1877)
* major impact: lost curation rewards (voting within the first 30 minutes /15 minutes on HF20) will not go to the author anymore, it will go back to the rewards pool instead.

## Reduce reverse auction time [#1878](https://github.com/steemit/steem/issues/1878)
* major impact: The vote curation penalty window is reduced from 30 minutes to 15 minutes

There are 12 further issues on the to-do list, which I will not list here. You can find them here https://github.com/steemit/steem/projects/3:
![image.png](https://ipfs.busy.org/ipfs/QmZLnnggfH1QsJvRRpbWcpKo4VznBjv7JmAWT9WxtBoV7g)

- - -

This page is synchronized from the post: ['Current state of hardfork 0.20.0 development - 30.05.2018'](https://steemit.com/@holger80/current-state-of-hardfork-0-20-0-development-30-05-2018)
