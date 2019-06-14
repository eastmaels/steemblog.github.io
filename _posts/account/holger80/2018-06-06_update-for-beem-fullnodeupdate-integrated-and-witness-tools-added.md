
---
title: 'Update for beem - fullnodeupdate integrated and witness tools added'
permlink: update-for-beem-fullnodeupdate-integrated-and-witness-tools-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-06 21:19:21
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
 https://github.com/holgern/beem

<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 500 unit tests and a coverage of 78 %. The current version is 0.19.36.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

### Bug fix for: Cannot fetch account history of early created accounts, block number estimation gives negative values 
* The bug was described in detail [here](https://steemit.com/utopian-io/@stmdev/beem-cannot-fetch-account-history-of-early-created-accounts-block-number-estimation-gives-negative-values).
* Fix in [commit 6f30570](https://github.com/holgern/beem/commit/6f305700af83a1a5c550245458eefa3eb94cdccc)
* The bug could be fixed by allowing only positive block_numbers inside the block number estimation function.

### Obtain a ranked full API node list from @fullnodeupdate
I created the new account [fullnodeupdate](https://steemd.com/@fullnodeupdate) and I'm sending an account update every hour with JSON Metadata including:

* `nodes`
* `failing_nodes`
* `report`
* `parameter`

I will publish a post about this project and releasing the source code.

I created a `update_nodes` function in the `NodeList` class. First, I'm extracting the json-metadata:
```
account = Account("fullnodeupdate", steem_instance=steem)
metadata = json.loads(account["json_metadata"])
report = metadata["report"]
failing_nodes = metadata["failing_nodes"]
parameter = metadata["parameter"]
benchmarks = parameter["benchmarks"]
```
The obtained data are used to generate a score for each working node.
```
from beem.nodelist import NodeList
nodes = NodeList()
nodes.update_nodes()
print(nodes.get_nodes())
```
returns the ranked nodes:
```
['wss://rpc.steemviz.com', 'wss://steemd.pevo.science', 'wss://steemd.minnowsupportproject.org', 'wss://steemd.privex.io', 'wss://rpc.buildteam.io', 'wss://gtg.steem.house:8090', 'https://rpc.buildteam.io', 'https://api.steemit.com', 'https://api.steem.house', 'https://rpc.steemviz.com', 'https://gtg.steem.house:8090', 'https://steemd.pevo.science', 'https://steemd.minnowsupportproject.org', 'https://rpc.curiesteem.com']
````
I'm using `update_nodes()` in the beginning of each unit test now and it worked great.
### beempy nodesupdate
![image.png](https://ipfs.busy.org/ipfs/QmW94J3aSGXh6jjSWDBq1Fw1PFyDsRyS6au4FxxFRgvFd4)
` beempy nodesupdate --show`
![image.png](https://ipfs.busy.org/ipfs/QmUuE9C74Gix9hV5o25yF8ZeiREWFLHEEasf4exwmjLqpS)
Nodes with negative scores will not be considered.

### beempy keygen 
This command creates a new random brain key, which is not related to any account. This can be used as witness signing key.
![image.png](https://ipfs.busy.org/ipfs/QmaqM1fwEjjWN5qTCj7G3YCxhg6FCmBHNCPtXxVzJvYsrQ)

### beempy witnessfeed
![image.png](https://ipfs.busy.org/ipfs/QmVii9o4QipC1tBvQ4yJ38MUwDSjnkXiHBReTngmKhRLYt)

Uses the exchange API calls to determine the current BTC_USD and the STEEM_USD prices and calculates the base base from it. The quote can be either "1 STEEM", or when ` support-peg` is set, it will be inverse of the SBD_USD price. This price is calculated from the internal STEEM_SBD market. 
I used source code from https://github.com/Netherdrake/conductor/blob/master/conductor/markets.py.
 
`beempy witnessfeed holger80`
![image.png](https://ipfs.busy.org/ipfs/QmViJigMk7xR9kiySKBAwUpyM8RARE4j7Kit1yF3JrXuT4)


### beempy witness
This command shows information about a witness.
`beempy witness holger80`
![image.png](https://ipfs.busy.org/ipfs/QmYGgLSnu2VDWfzMhTNNwedVnaUdj2o7P3htxZnMiFqfBM)
Added information:
* rank: witness rank
* active_rank: active witness rank
* `virtual_time_diff`: Difference between `virtual_scheduled_time` and `current_virtual_time`
* `block_diff_est`: `virtual_time_diff`*`int(witness_schedule["num_scheduled_witnesses"]) / (lap_length / (vote_sum + 1))`, where `lap_length ` = `config["VIRTUAL_SCHEDULE_LAP_LENGTH2"]` and vote_sum is the summed up votes of the first 250 witnesses.
* `time_diff_est` : `block_diff_est` * 3 seconds

The `virtual_scheduled_time` increases every 21 block by  `VIRTUAL_SCHEDULE_LAP_LENGTH2/(vote_sum + 1)`. I used this information, for a time estimation of the next block signing of a witness.

### beempy witnessenable
Can be used to enable a disabled witness or for a fall-back to a second witness server with a different signing key.

### beempy witnessdisable
Disables a witness by replacing the signing key by  `STM1111111111111111111111111111111114T1Anm`.

### Commit history
#### Fixes #17 
* [commit 6f30570](https://github.com/holgern/beem/commit/6f305700af83a1a5c550245458eefa3eb94cdccc)

#### Several Bug fixes 
* [commit e7159e2](https://github.com/holgern/beem/commit/e7159e255b3b04f861e9161222ae3373ab87a6b1)
* added use_stored_data to all steem function that uses constants e.g. get_config()
* Fix author for steem.post(), when a account object is entered
* **kwargs added to all broadcast function of steem
##### Account
* fix desribtion of update_account_profile
* added update_account_metadata

#### More bug fixes 
 * [commit b4f8cfb](https://github.com/holgern/beem/commit/b4f8cfb49c7ab64240291de531b6261b28a762fc)
##### Votes
* fix ActiveVotes when no vote are made for a comment
##### Steemconnect
* Try to fix for python 2.7
Fix test_wallet unit test

#### More improvements
* [commit 5f156fd](https://github.com/holgern/beem/commit/5f156fdf5a75367c32d85efb02e456abfa2719f6)
* Raise OfflineHasNoRPCException in offline mode, when rpc should be used
* Unit test for beneficiaries
* Fixes bug for python 2.7 in blockchain

#### Use fullnodeupdate for updating the node score in all unit tests
* [commit 7a9fe77](https://github.com/holgern/beem/commit/7a9fe77c99ab0722535055c57ea8b4cd37042786)
##### CLI
* updatenodes added, this command can be used to update the nodes list
##### NodeList
* update_nodes added, this command reads the metadata from fullnodeupdate, which contain newest nodes information
* add option wss and https fo get_nodes
##### Unit tests
* use updatenodes in all tests

#### Add more witness commands to cli
* [commit 6b89da1](https://github.com/holgern/beem/commit/6b89da14031a9b16a942eea37b64edb950b73874)
##### CLI
* add witnessenable, witnessdisable, witnessfeed and witness
##### Vote
* fix reputation

#### Huge witness update
* [commit 709efc7](https://github.com/holgern/beem/commit/709efc7994e74c3b2322ad7c2c37aa571c42f5b8)
##### Market
* _weighted_average, btc_usd_ticker, steem_btc_ticker and steem_usd_implied added
##### Witness
* get_votes_sum added to witnesses object
##### Graphenerpc
* fix handling of WebSocketConnectionClosedException
##### CLI
* witnessfeed: uses the new market ticker to calculate the current steem_usd price as base. When using support-peg the sbd_usd price is calculated from the internal ticker and used for quote.
* Witness: shows the rank and active rank (when it is below 250). virtual_time_to_block_num is calculated from num_scheduled_witnesses, VIRTUAL_SCHEDULE_LAP_LENGTH2 and vote_sum. This is then used to estimate the next block producing time.
* witnesses uses a proxy now, when set.

#### Add vote count and remove suppress import
* [commit 46f0a76](https://github.com/holgern/beem/commit/46f0a76a9f33863aee7765b74bdb297020f75de2)

#### keygen added and parasewif improved
* [commit cb05ee5](https://github.com/holgern/beem/commit/cb05ee5e4f348dccde7d7cf4f3f0c3abdd02634d)

### GitHub Account
https://github.com/holgern

___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)). 

- - -

This page is synchronized from the post: ['Update for beem - fullnodeupdate integrated and witness tools added'](https://steemit.com/@holger80/update-for-beem-fullnodeupdate-integrated-and-witness-tools-added)
