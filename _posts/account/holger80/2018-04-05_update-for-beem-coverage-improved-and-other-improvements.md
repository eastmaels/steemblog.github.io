
---
title: 'Update for beem - coverage improved and other improvements'
permlink: update-for-beem-coverage-improved-and-other-improvements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-05 09:11:36
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- appbase
- steemdev
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[beem](https://github.com/holgern/beem) is  a python library for accessing the steem blockchain. I build beem from scratch using [python-bitshares](https://github.com/bitshares/python-bitshares) as template. At the moment, beem is not really used, as the github has around 1 unique visitor each day and thats maybe me. The newest version of beem is 0.19.19.

I created a discord channel for answering question or discussing beem: https://discord.gg/4HM592V 


beem is not a copy of python-steem, thus the classes and functions are different. beem is almost feature complete and should be able to do all things that python-steem can do. Differences to python-steem:

| | beem | python-steem |
| --- |--- | --- |
| websocket nodes | yes | no |
| native appbase calls | yes | no |
| python 2.7 supportet | yes | yes |
| python 3.3 supportet | yes | no |
| python 3.4 supportet | yes | no |
| python 3.6 supportet | yes | yes |
| number of unit tests | 340 | 70 |
| coverage | 75 % - 83% | ? |
| can be used on android | yes | no |

I decided to create an own library for steem and not participating to python-steem by pull-requests for the following reasons:
* as python-steem is the official library, all changes have to be reviewed carfully. This takes a lot of time.
* python-steem is used by many, therefore it is not possible to change classes or functions easily.
* I like it to have my own repo, in which I can do what I want :).

beem is open source, so my work may improve python-steem.

# Changes
## Sync changes from python-graphenelib
* https://github.com/holgern/beem/commit/e9f07b48478c0f59ae625ef397c4a727d44723f0
## Remove register_api and api_id calls 
* https://github.com/holgern/beem/commit/69948415b7fc403e11a3198066e3cc3d8f4100e2
* All rpc calls are handled with direct api call. Register api was a relict from bitshares.
## Import Wallet changes from bitshares and bug fixes 
* https://github.com/holgern/beem/commit/af565903fe916f35c15e28165a5efda48d9bc0f2
* Nodes can be given as ,or ; seperated string
* is_connected added in steem
## Removed not used classes
* https://github.com/holgern/beem/commit/f8f33b3426d76683d7ea38235e0c0a55fe8b2128
## Improved test coverage
* https://github.com/holgern/beem/commit/8559d6da01907f8fe2bc348bf5cb7009fc1f64a2
* Fix vote tests
* improved transactionbuilder tests
* Improved detection of MissingRequiredActiveAuthority
## Several changes and improvements
* https://github.com/holgern/beem/commit/cdd778096a04cf4b922b67a54b6028fa6f9299a1
* Fix blocks for threaded and batched calls
* add blockchain_version function on steem
* Fix node input on graphenerpc
* Improve benchmark_nodes
* Add unit tests for bateched and threaded blocks calls
* Use https://api.steemit.com as default appbase node
## Update test_steemnoderpc.py
* https://github.com/holgern/beem/commit/68cad02f65701c31a63472606824b906432f1fec
## Fix depreated function warning
* https://github.com/holgern/beem/commit/e3262e45bfa809381c7cc9422059e1165b3a71ee
* Improve blockchain unittests
## Improve coverage of test_cli
* https://github.com/holgern/beem/commit/712a81745c2fe35cad05fc2447592cd06b362e9a
## Improve coverage for Price
* https://github.com/holgern/beem/commit/c3fb3fccde1866cc995a9c87663c378f5230937c
## Move post and comment_options to steem class
* https://github.com/holgern/beem/commit/9fb1330590c25736adcbe74040a093a82d446189
* RecentReplies improved
* Comment init improved
* test coverage for comment and steem improved.
## Improve coverage for steem
* https://github.com/holgern/beem/commit/de8527ffd04f6cac5698438b7929726ecb79d65c
## Remove steemitstage and improve coverage for steemnoderpc
* https://github.com/holgern/beem/commit/988ff02990eccc42dfdd072ab9c772760bcbb96d
## Improvements for blockchain parameter reading and nodes benchmark
* https://github.com/holgern/beem/commit/582f3414cc9b6ac2e3fed8899acd8bb172b880af
### steem
* Robustify reading of blockchain parameters
### utils
* improve formatTimedelta output
### Examples
* improve benchmark_nodes by added account history
## Speedup wait_for_and_get_block
* https://github.com/holgern/beem/commit/421627a93cb8f12f814aaea654919b7e19e9fc3f
### blockchain
* reduced times in which get_current_block_num is called
* when last_fetched_block_num is given, get_current_block_num is only called when block_number is greater than last_fetched_block_num
### storage
* default nodes list enhanced
### steemnoderpc
* Service Temporarily Unavailable and Bad Gateway added to exception detection
### graphenerpc
* check for Service Temporarily Unavailable and Bad Gateway
* Improved handling of Client returned invalid format. Expected JSON! when output is int
### Unit test
* test_utils fixed
## num_retries improved
* https://github.com/holgern/beem/commit/3ff0b8904bdf36acd8467fcf90cd2bd28e87f45e
### Steemnoderpc
* self.errror_cnt_call used instead of local variable doRetryCount
### Graphenerpc
* num_retries_call added for setting a max number of retries on a rpc call
* self.n_urls added for getting the number of given nodes
* sleep on retry removed, when switching over to the next node
self.error_cnt_call used for counting rpc call retries
### rpcutils
* sleep_and_check_retries improved
### Unit tests
* num_retries added
* test_golos reduced
## Add option to set block_numbers as start and stop in history and history revers
* https://github.com/holgern/beem/commit/8fc729be60c8c61439e70356f71304498d7eae27
### Account
* add option use_block_num to history, history_reverse and get_account_history
## Reduce duplicate code 
* https://github.com/holgern/beem/commit/8d6478e7eb2a9fc4e6d4e55359088e6dca431fc6
### Wallet
* reduce code duplication
### operations
* reduce code duplication

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-coverage-improved-and-other-improvements">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - coverage improved and other improvements'](https://steemit.com/@holger80/update-for-beem-coverage-improved-and-other-improvements)
