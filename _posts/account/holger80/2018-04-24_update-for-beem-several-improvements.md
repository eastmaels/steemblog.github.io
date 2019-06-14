
---
title: 'update for beem - several improvements'
permlink: update-for-beem-several-improvements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-24 15:46:45
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- beempy
- python-steem
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>

[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 425 unit tests and a coverage of 84 %. The current version is 0.19.23. Please visit my discord channel for answering question or discussing beem: https://discord.gg/4HM592V

beem has gained some attention lately and there are now some visitors in my github repository:
<center>
![image.png](https://cdn.utopian.io/posts/bf62a4c4c638829b7e3262b945f59a1af76fimage.png)
</center>

# What feature(s) did you add?
 The following commands are added to the command line tool `beempy`:
## currentnode
`beempy currentnode` shows the current node url and its version.

![image.png](https://cdn.utopian.io/posts/bc16d2717fa69f0aa2e1287079fbeb112e30image.png)

## mute
`beempy mute test` mutes account `test`.

## muter
`beempy muter` shows a summarize about all account that mutes the default account.

![image.png](https://cdn.utopian.io/posts/b96b67f7b9a2540cb66c1ff26551891282ceimage.png)
## muting
`beempy muting` shows a summarize about accounts which where muted by the default account.

![image.png](https://cdn.utopian.io/posts/15d3db0f03dddb86b4845e9527eddea28e13image.png)
## nextnode
`beempy nextnode` switches to the next node in line.

## pingnode
`beempy pingnode` measures how long a get_config rpc call takes. The output is in milli seconds.

![image.png](https://cdn.utopian.io/posts/92d65e0d9d7a1c44ef435f851bdfba7d7363image.png)

## power
`beempy power` shows vote power, balance and account bandwidth.

![image.png](https://cdn.utopian.io/posts/79bfd6d595412e04fef0a93aa66160f5aa7aimage.png)

## votes
`beempy votes --direction in --days 3` shows the incoming votes of the last 3 days.

![image.png](https://cdn.utopian.io/posts/a8dcf184b98e0ded1e14e17f0c6a0f5457a0image.png)

`beempy votes --direction out --days 1` shows the outgoing votes of the last day.

![image.png](https://cdn.utopian.io/posts/850f9ab02b5cac0a38403cb2827934221d85image.png)

## Support for read-only systems is added
`beem` can now be used in a read-only system. The config variables can not be stored and the wallet can not be used in a read-only system.

## Writing operation in a read-only system lead to an `NoWriteAccess ` exception
The following operation should be avoided in a read-only system:
* storing configs:
```
from beem import Steem
stm = Steem()
stm.set_default_account("test")
stm.config["default_account"] = "test"
```
* using the wallet

## Using private keys in a read-only system
Private keys must be provided directly to the Steem object:
```
from beem import Steem
stm = Steem(keys=[wif])
```
It is also possible to build the transaction by hand:
```
from beem.transactionbuilder import TransactionBuilder
from beembase.operations import Transfer
tx = TransactionBuilder()
tx.appendOps(Transfer(**{"from": 'user_a',
                         "to": 'user_b',
                         "amount": '1.000 SBD',
                         "memo": 'test 2'}))
tx.appendWif('5.....') # active private key
tx.sign()
tx.broadcast()
```

## Receiving more than one account in one rpc call
```
from beem.account import Accounts
account_list = ["utopian-io", "busy.org", "minnowsupport"]
a = Accounts(account_list)
a
```
`[<Account utopian-io>, <Account busy.org>, <Account minnowsupport>]`
# Changes
## Several improvements
* https://github.com/holgern/beem/commit/80ab8897b68b2784c1bd774ef15f80379f458d61
### Account
* refactoring of  init
* Doku improved
### Asset
* AssetNotFound handling improved
* Operation for equal and unqual added
### Price
* usage of the new equal operation from Asset
### Steem
* Improve key handling in account creation
### Storage
* add sqlite3_copy and recover_with_latest_backup
### beemgraphenebase/account
* add get_blind_private, get_public_key, get_secret, derive_private_key, child and derive_from_seed
### Unit tests
* Use setUpClass to speed unit tests up (Steem is now created at the begging auf each unit test class
* Add unit tests for asset
* Add unit test for new beemgraphenebase/account functions
## Json export improved and Muting and muter added
* https://github.com/holgern/beem/commit/078fb1b6178cd0a742cc9a4b735a4956513bce1f
### Account
* Json export improved
* All times are converted to datetime
* Doku about ignore for muting improved
* Accounts and AccountsObject added
* mute for Mute another account added
* get_muters and get_mutings added
### CLI
* refactoring of follows and following
* muter and muting for showing muted and muting accounts
* mut added
* doku for unfollow improved
### Comment
* json() improved
### Unit tests
* test_account adapted to steemit/steem bug for appbase
* test_json_export added
* test for muter and muting for cli added
## Add new amount dict format for appbase and other improvements
* https://github.com/holgern/beem/commit/d3483242d2054241ecc59dc7b30927596dd1fcae
### Account
* Remove set_next_node_on_empty_reply(True) for get_account_history calls
* Retry when native get_account_history raises ApiNotSupported with condenser_api
* Refactoring and use of addTzInfo from utils
* Improved logic and bugfixes for history()
* print_summarize_table moved from cli.py to Accounts
### Amount
* New appbase amount dict format supported
### cli
* Refactoring of print_account_table
### Comment
* New appbase amount dict format supported
### utils
* addTzInfo added to reduce code
* testing nodes added to get_node_list (disabled by default)
### Vote
* votee added
* printAsTable improved and PrettyTable used
* get_list added to recieve vote properties as list
* print_stats added but not finished yet
* ActiveVotes improved with start and stop to limit stored votes
### Witness
* return_str added to printAsTable
### unit tests
* more unit tests for history and history_reverse
* unit test for new appbase amount format added
## Add votes command to cli
* https://github.com/holgern/beem/commit/ad9dc230d1121cb1b418a30e90d4d6dace467868
### cli
* add votes command to view outgoing/incoming  votes of an account
### Unit tests
* improve unit tess for account and vote
* Add test_instance to check if set_shared_steem_instance, shared_steem_instance is working
* Add new command to test_cli
## Add support for read-only systems
* https://github.com/holgern/beem/commit/cd4aaf225a28713dccfa64910f77a14e11d1c0bc
### Exception
* NoWriteAccess added, is raised when try to set configs on a read-only system
### Storage
* On a read-only system beem.sql is not created. Default values for config are returned and it is not possible to use the wallet. Bug wif can be directly set.
### Unit test
* test_storage added to test sqlite read and write
## Sell and Buy in cli improved
* https://github.com/holgern/beem/commit/906996d36b4b935ea9dbf2845568ccef75f8e890
### CLI
* market adapted on asset for buy and sell
### market
* quote and base asset can be set
### unit test
* more unit tests for buy and sell
## Several improvements and refactoring
* https://github.com/holgern/beem/commit/5a4fa4d79cff18e7a3fd45a4c232bacc3377bfd0
### Account
* get_bandwidth refactored
* get_account_bandwidth added
### Cli
* power added for showing vote power and bandwidth
### Steem
* Improvements and refactoring for get_config, get_network, get_hardfork_properties, get_current_median_history, get_reward_funds, get_feed_history, get_reserve_ratio and get_dynamic_global_properties
### Steemnoderpc
* get_network moved to graphenerpc
### Chains
* removed to beemgraphenebase/chains.py
### Unit tests
* add unit test for power for cli
* golos test reduced
## Improved account info and node info
* https://github.com/holgern/beem/commit/eceb7d6f2ba41417feca47d82ed2269ea27ece2d
### Account
* Improved print_info, table output is possible
### Blockchain
* stream is ready for newest changes and work with api.steemitdev.com
### CLI
* nextnode, pingnode, currentnode added
### Exception
* BatchedCallsNotSupported added, raised when batched blockchain failed
### Steem
* set_default_node improved
* get_default_node added
### Unit test
* new unit test for new functions added
## Documentation and market improved
* https://github.com/holgern/beem/commit/2e863dd56c9af5190f30ff9aefffe73082f6d498
### Account
* Example for history and history_reverse added
### Market
* base and quote added to init to define what buy and what sell means
### Documentation
* tutorials improved
### Unit tests
* test_market improved
## Some small improvements and final changes for 0.19.23
* https://github.com/holgern/beem/commit/6fa17330298ee0d26eeeaec120a73b5f1ef0d68a

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-several-improvements">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['update for beem - several improvements'](https://steemit.com/@holger80/update-for-beem-several-improvements)
