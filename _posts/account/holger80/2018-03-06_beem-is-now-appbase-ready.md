
---
title: 'beem is now AppBase ready'
permlink: beem-is-now-appbase-ready
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-06 15:07:30
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- appbase
- steem-python
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


beem has now 10,948 lines of code, 204 unit tests and a coverage of 70%. The current version is 0.19.12. beem is now ready for[ AppBase](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin) testing. I implemented most api calls natively (without using condenser_api). You an run the `print_appbase_calls.py` from the example directory of beem. You can find it on [github](https://github.com/holgern/beem). beem can now handle websocket and https node addresses simultanously. You can mix both type of addresses in the node list.

# AppBase
```
from beem.steem import Steem
stm = Steem(node="https://api.steemitstage.com")
stm.rpc.get_signature({"method": "block_api.get_block"}, api="jsonrpc")
{'args': {'block_num': 0}, 'ret': {}}
stm.rpc.get_block({"block_num": 1}, api="block")
{'block': {'previous': '0000000000000000000000000000000000000000', 'timestamp': '2016-03-24T16:05:00', 'witness': 'initminer', 'transaction_merkle_root': '0000000000000000000000000000000000000000', 'extensions': [], 'witness_signature': '204f8ad56a8f5cf722a02b035a61b500aa59b9519b2c33c77a80c0a714680a5a5a7a340d909d19996613c5e4ae92146b9add8a7a663eef37d837ef881477313043', 'transactions': [], 'block_id': '0000000109833ce528d5bbfb3f6225b39ee10086', 'signing_key': 'STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX', 'transaction_ids': []}}
```
You can also use the node from timcliff (this node has no block_api):
```
from beem.steem import Steem
stm = Steem(node="wss://appbasetest.timcliff.com")
stm.get_config()["STEEM_BLOCKCHAIN_VERSION"]
'0.19.4'
```
You can use the condenser api to be compatible with calls before 0.19.4. In order to enable this, set appbase to False in Steem.
```
stm = Steem(node="wss://appbasetest.timcliff.com", appbase=False)
stm.rpc.get_accounts(["holger80"])
```

The rpc calls are handled in the background in all classes. New AppBase-calls are used when, the node version is _0.19.4_ and when steem.appbase is set to True (default).

The new assets are also handled:
```
from beem.steem import Steem
from beem.amount import Amount
stm = Steem(node="https://api.steemitstage.com")
stm.get_current_median_history()
{'base': ['3424', 3, '@@000000013'], 'quote': ['1000', 3, '@@000000021']}
a = Amount(stm.get_current_median_history()['base'], steem_instance=stm)
3.424 SBD
Amount(stm.get_current_median_history()['quote'], steem_instance=stm)
1.000 STEEM
```

# Changes
## Code improvements and new examples added
* https://github.com/holgern/beem/commit/fba87a0789a3269648f9d497fed05cc0fa531cf1
* https://github.com/holgern/beem/commit/fcda1b96ef358bf8cbb91d658f49840ae8701849
* https://github.com/holgern/beem/commit/154de1ccfc03acb139456e07e71918b9d6732136
* https://github.com/holgern/beem/commit/68856dad35327e060fe10b930bba100b52200932
* https://github.com/holgern/beem/commit/13225ce2dd319b2398ef1045407db06d5d5cbc00
* https://github.com/holgern/beem/commit/822674836c5f481d1d6ad6b7b2c2c416c23f979e
## beem is now AppBase ready
* https://github.com/holgern/beem/commit/614c17744a4a23cd8e36cd71a70a3a055f4eb8f4
### Account:
* Add appbase calls
* Parse all amounts
### Asset
* Made appbase ready
* Supports different assets, defined in chains.py
### Block
* Add appbase calls
### Blockchain
* Improved get_estimated_block_num (accured search possible)
* Add threaded blocks method (Only a first try, has to be improved)
### Comments
* Add appbase calls
### Discussions
* Add appbase calls
### Market
* Add appbase calls
### Steem
* current_median_history_price -> get_current_median_history
* get_reward_fund -> get_reward_funds
* get_next_scheduled_hardfork -> get_hardfork_properties
* get_hardfork_version removed
* get_reserve_ratio added
* get_witness_schedule added
### Transactionbuilder
* appbase calls added
### Vote
* appbase calls added
### Wallet
* appbase calls added
### Witness
*appbase calls added
* WitnessesByIds removed
* LookupWitnesses -> ListWitnesses
### steemnoderpc
* Uses now GrapheneRPC
* appbase property added
* get_use_appbase added
* network_version added for check which chain is used from chains.py
### Chains
* chain for appbase added
* assets restructured
* min_version added (AppBase has 0.19.4 as min_version)
### Graphenapi removed
### Graphenesrpc removed
### graphenerpc added
* Supports websocket and https, automatic switching depending on the url (https or wss).
* Nodes-list can include https and wss adresses.
* Checks the blockchain_version, if 0.19.4 -> appbase ready and appbase calls are used.
* Add requests structure for appbase
* Handing for request and websocket added
### Examples
* benchmark_beem is ready for appbase
* print_appbase_calls added
* print_comments added
* watching the watchers added
### Unit tests fixed
## Example for notify added
* https://github.com/holgern/beem/commit/3ee1291d0c94b3e886f0b96615b6df8ed2375bc4
## Bugfix release 0.19.12
* https://github.com/holgern/beem/commit/65f47b02b024f5c52d0f4008788235da8fd8d51d


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/beem-is-now-appbase-ready">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['beem is now AppBase ready'](https://steemit.com/@holger80/beem-is-now-appbase-ready)
