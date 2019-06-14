
---
title: 'Update for beem - autoclean, new CLI commands, virtual op estimation, new Comment functions and stand alone beempy'
permlink: update-for-beem-autoclean-new-cli-commands-virtual-op-estimation-new-comment-functions-and-stand-alone-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-09 10:04:57
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- steemdev
- python
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

[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 463 unit tests and a coverage of 82 %. The current version is 0.19.28.

I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

### Bug Fixes
#### [blockchain.stream and blockchain.ops are missing virtual operations](https://steemit.com/utopian-io/@stmdev/blockchain-stream-and-blockchain-ops-are-missing-virtual-operations)

* Is fixed by adding `only_ops` and `only_virtual_ops` to `beem.block.Block`. When one is set to `True`, the `get_ops_in_block` api call is used.
* `beem.blockchain.ops()` is obsolete now.
* `beem.blockchain.stream()` stream virtual operations, when `only_ops` or `only_virtual_ops` is set to `True`.
* `beem.blockchain.stream()` and `beem.blockchain.blocks()` uses now `beem.block.Block` internally.
* The changes are in [commit 8fef554](https://github.com/holgern/beem/commit/8fef5541ef22cbd53f5629f6fddf7faee70f1d31)

#### [Bug: steem-verifier crashes on certain transaction ids](https://steemit.com/utopian-io/@holger80/bug-steem-verifier-crashes-on-certain-transaction-ids)

* This bug was also affecting `beembase.signedtransaction.Signed_Transaction.verify` and lead to the same error messages as seen in steem-verifier.
* This error was fixed by disabling `recover_parameter` estimation from the first signature byte in `beemgraphenebase.ecdasig.verify_message`. `beembase.signedtransaction.Signed_Transaction.verify` verifies now the signature with `recover_parameter` going from 0 to 3. Whenever a valid public key is returned it is stored in the list and then returned. This new behavior can be disabled by setting `verify(recover_parameter=True)`.
* A second related bug and fix were applied to `beemgraphenebase.type.PointInTime.__bytes__`. In some cases, the bytes from a Date before 1970 should be converted into bytes. This could be fixed by Changing Unsigned int to Integer when `unixtime` is negative: `return struct.pack("<i", unixtime)`.
* The changes are in [commit f0509f6](https://github.com/holgern/beem/commit/f0509f620417e7434196228a8ba8e783f3691e7c).

### New Features
#### Block supports now virtual operations
```
from beem.block import Block
block = Block(22277588)
len(block.operations)
40
block = Block(22277588, only_ops=True)
len(block.operations)
97
block = Block(22277588, only_ops=True, only_virtual_ops=True)
len(block.operations)
57
```
The `beem.block.Block` can now be used  to access virtual operations. The properties `transactions` and `operations` can now be used to access on all transactions bzw. operations as list array.

#### Estimation of virtual account operation number from a date or a block number
The history of account operation can be huge, e.g. the account `gtg` has currently 826453 account operations. It is very time-consuming to find out which virtual operation number corresponds to a given block number or date. 
The new `estimate_virtual_op_num()` can be used to receive an estimated value for a given date or blocknumber within less than a second.

```
import pytz
from beem.account import Account
from beem.blockchain import Blockchain
from datetime import datetime, timedelta
from timeit import time as t
acc = Account("gtg")
block_num = 21248120
start = t.time()
op_num = acc.estimate_virtual_op_num(block_num, stop_diff=1, max_count=10)
stop = t.time()
print(stop - start)
for h in acc.get_account_history(op_num, 0):
    block_est = h["block"]
print(block_est - block_num)
```
Results for different `stop_diff` and `max_count`:

| `stop_diff` | `max_count` | Dur. [s] | block diff |
| --- | --- | --- | --- |
| 1 | 100 | 0.45 | -2 |
| 1 | 5 | 0.45 | -2 |
| 1 | 3| 0.65 | -20 |
| 1 | 1 | 0.34 | 36585 |
| 1 | 0 | 0.32 | 192476 |
| 10 | 10 | 0.41 | 17 |
| 100 | 10 | 0.38 | -20 |
| 10000 | 10 | 0.27 | 36585  |
The parameter `stop_diff` and `max_count` have a strong influence on the result. `stop_diff` stops the estimation process when the difference between two estimation steps is below `stop_diff`. `max_count` limits the number of iterations. When set to zero, the inital guess is taken, otherwise, the estimation is improved until `max_count` iterations are reached or the difference is below `stop_diff`.

There is also an infinity cycle detection implemented, will lead to an stop of the estimation.
`estimate_virtual_op_num()` is used in `beem.account.Account.history()` and  `beem.account.Account.history_reverse()` when an start point is given.  

`estimate_virtual_op_num()`  can handle dates and blocknumbers.

#### `__repr__` added to some classes
* `__repr__` was added to `beem.steem.Steem`, `beem.witness.WitnessesObject` and `beem.vote.VoteObject`
In the example the output of the steem object is show:
![image.png](https://gateway.ipfs.io/ipfs/QmeWZYvR7sTrSQVRFcXhJw7nZ69YWZNQNntqPH3sAJNVyS)

#### Autoclean added to cache
All `BlockchainObject` classes use a global cache to reduce read operations to the blockchain. In this update, the cache is automatically auto cleaned on each access.
![image.png](https://gateway.ipfs.io/ipfs/QmecLteTHYvK4xydPCPHpiBRE3RT4TvCiev7UZxrytAM36)

#### Accurate estimation of pending payouts and other functions added to the comment class
The following functions were added to `beem.comment.Comment`:

* `reward()`
* `is_pending()`
* `time_elapsed()`
* `curation_penalty_compensation_SBD()`
* `estimate_curation_SBD(vote_value_SBD, estimated_value_SBD=None)`
* `get_curation_penalty(vote_time=None)`
* `get_vote_with_curation(voter=None, raw_data=False, pending_payout_value=None)`
* `get_beneficiaries_pct()`
* `get_rewards()`
* `get_author_rewards()`
* `get_curation_rewards()`

More information about these function can be found in the help section.
`get_curation_rewards()` works better than the prediction from other sites as steem.supply,.. as the unclaimed curation reward is taken into account:
```
            unclaimed_rewards = max_rewards.copy()
            pending_rewards = True
        active_votes = {}
        for vote in self['active_votes']:
            if total_vote_weight > 0:
                claim = max_rewards * vote['weight'] / total_vote_weight
            else:
                claim = 0
            if claim > 0 and pending_rewards:
                unclaimed_rewards -= claim
            if claim > 0:
                active_votes[vote['voter']] = claim
            else:
                active_votes[vote['voter']] = 0
```
The `unclaimed_rewards` grows when votes are within the first 30 minutes. The `unclaimed_rewards` from the curation is directly moved to the author reward. 
The `total_vote_weigth` value is taken from `['total_vote_weight']`.
#### verify - a new beempy command for receiving the signer from a signature
![image.png](https://gateway.ipfs.io/ipfs/QmbEj1sxad458cSRuw4uFJuzqhPTZD9uJ76KHCJrhRM9Z5)
The transaction id `d6457b3ad20583b3434f3a06c2c648b3a770c341` which crashes `steem-verifier`  can now be analyzed with `beempy verify d6457b3ad20583b3434f3a06c2c648b3a770c341` without any error:
![image.png](https://gateway.ipfs.io/ipfs/QmbEiBj21CXEe9UFSAcp8GCZ3dKM68EHgRwwA5FCYnu4L3)
It is also possible to verify a block number with or without a given transaction number.

#### curation - a new beempy command for estimation voting curation for a post
`beempy curation` uses the new function `beem.comment.get_curation_rewards()` for listing all pending curation rewards.
![image.png](https://gateway.ipfs.io/ipfs/Qmdcy8sj7Z4mHZiYjz4p1eTgNmcQN4cevbC7V1SkqGngxs)

![image.png](https://gateway.ipfs.io/ipfs/QmV4kTSqRMDfesveh24tZf9fV9dYwUEAGEpUuCiktTBWLX)
Result of `beempy curation`:
![image.png](https://gateway.ipfs.io/ipfs/QmQbj26rvu6ZNLJVB73bC3rXdVtbt3MJrkfFDm1MCmDzBc)
and the actual rewards after 7 days:
![image.png](https://gateway.ipfs.io/ipfs/Qma9eGAYvTtHN4pe3pB2h6ZSH9Ks3nqW6KiDfpQw5QCgVF)
The difference is only `0.001` STEEM POWER for the second one, whereas the estimation for the first entry was 100 % correct.

#### pending - a new beempy command for estimating pending rewards for accounts
`beempy pending` uses the new `beem.comment.get_author_rewards()` and the new `beem.comment.get_curation_rewards()` functions to show pending rewards for given accounts (one or more accounts possible).  It can be selected if post, comment or curation rewards will be shown.
![image.png](https://gateway.ipfs.io/ipfs/QmZk6XP8JNfPBv4cTMqUm2Woi5PDJWHzKzCi5c17K1HN7V)


The pending reward estimation for _@holger80/currently-only-6-full-rpc-nodes-are-working-without-errors_ is 9.463 SBD and 2.415 STEEM POWER.
![image.png](https://gateway.ipfs.io/ipfs/QmcSntgtKN8Q6KqNQ8hfGwVYJkWpqJ8j5Gtn3eiPaRacna)
Other popular tools as steem.supply estimates a payout of 8.59 SBD and 2.19 STEEM POWER
![image.png](https://gateway.ipfs.io/ipfs/QmWvEqizjZGxQ1N2rqA9Z8LzzhDYVYMoPMKAaEza6MyyRE)
The site steem.supply estimates  8.593 SBD and 2.193 STEEM POWER.
![image.png](https://gateway.ipfs.io/ipfs/QmbDPSS3dHPBos1tBBurUKUNjCZYHtBUhFZ3dNcxiBof5i)
Let's see whos prediction is correct:
![image.png](https://gateway.ipfs.io/ipfs/QmcXbg9H5srCvSjcU978nkL3EayZCXatamZsTV4C3wuntg)
The prediction of `beempy pending` is the best one.

#### rewards- a new beempy command for listing rewards for accounts
`beempy rewards` uses the account history to display received rewards for given accounts (one or more accounts possible). It can be selected if post, comment or curation rewards will be shown.
![image.png](https://gateway.ipfs.io/ipfs/QmXh3HEjxkYMzLhMhPdvEzYZUfiKfjovJEBr4eYAFny6TE)


#### Stand alone excutables for beempy created
[pyinstaller](https://www.pyinstaller.org/) is used to build stand alone excecutables for linux, osx and windows an the CI server. The excecutables are created directly from the git source code and after packing, sha256 hash sum is calculated. This hash can be found in the build log. `beempy` can directly be used after unpacking, there are no dependencies necessary.

This allows it to use `beempy` outside of the anaconda prompt, without changing PATH variables.

![image.png](https://gateway.ipfs.io/ipfs/QmcSprJZJHUu35eCLNDd3cjAkJGiXgWjJ9FfNe6Y3G9xTo)

A stand alone version is crated by:
`pyinstaller beempy-onedir.spec`

There is also the possibility to crate a one file version with:
`pyinstaller beempy-onefile.spec`
but the onefile version is much slower than the onedir version.

### Commit history
#### Autoclean for Objectcache, improved graphenrpc and threaded pingnode
* [commit 726a419](https://github.com/holgern/beem/commit/726a419a0502484de215bf819d9ee5e101e5c175)
##### Blockchainobject
* `auto_clean` function added. Everytime a new item is stored into the cache, all expired elements are removed.
* The `__contains__` function sets now data ot None, when the date is expired, in order to reduce memory consumption
##### CLI
* threading for pingnode added. with `--threading`, all nodes are tested simultanously.
##### Steemnoderpc
* Error count and exception improved when only one node is available
##### Graphenerpc
* `requests.session` is stored as singelton
* `requests_retry_session` removed
* `shared_session_instance` and `set_session_instance` is used to get and set the global `requests.session` object
* `create_ws_instance` added; A websocket is created everytime and the singleton is removed
* `error_cnt` and `num_retries_call` handling improved
##### RpcUtils
* `sleep_and_check_retries` improved
##### Examples
* `benchmark_node2` uses threads (one thread for each node)
* `memory_profiler2` added to check memory consumption for creating multiple account objects
##### Unit tests
* Test for objectcache improved

#### Try to build exe with pyinstaller
* [commit bd1b7da](https://github.com/holgern/beem/commit/bd1b7da868b8cb29b371a46d92025594fb63c104)
* spec file added for building a onedir and a onefile standalone solution with pyinstaller for `beempy` without needing python

#### `history` and `history_reverse` improved by `estimate_account_op()`
* [commit c539773](https://github.com/holgern/beem/commit/c539773d086b72888e27f46a8ca04b8fd0383b48)
##### Account
* `print_info` improved (Last Vote added)
* entryId changed to `start_entry_id` in `get_feed`, `get_blog_entries` and `get_blog`
* `rpc.get_account_history` moved to `_get_account_history`
* `estimate_account_op` added, can be used to fastly get account op numbers from dates or block nums
* `history` and `history_reverse` uses `estimate_account_op`
##### Exception
* `KeyNotFound` removed
##### Memo
* raises `MissingKeyError` instead of `KeyNotFound`
##### Price
* small improvement
##### Steem
* `__repr__` added
##### Transactionbuilder
* `get_potential_signatures`, `get_transaction_hex` and `get_required_signatures` added
* raises `MissingKeyError` instead of `KeyNotFound`
##### VotesObject
* `__contains__`, `__str__` and `__repr__` added
##### Wallet
* raises `MissingKeyError` instead of `KeyNotFound`
##### Witness
* `__contains__`, `__str__` and `__repr__` added to `WitnessObject`
##### Steemnoderpc
* small improvements
##### Operationsid
* producer_reward added
##### Unit tests
* new function added and tests adapted to changes

#### Verify fixed, by trying all recover_parameter from 0 to 3
* [commit f0509f6](https://github.com/holgern/beem/commit/f0509f620417e7434196228a8ba8e783f3691e7c)
* Certain transaction could not be verified, as the recover parameter in verify_message from ecdasig was wrong.
* Signed_Transaction.verify() iterates now always through all 4 cases and returns all found key combination.
* Unit test added for this case.

#### Virtual-Ops support added for block and blockchain. Comment improved. More CLI commands
* [commit 8fef554](https://github.com/holgern/beem/commit/8fef5541ef22cbd53f5629f6fddf7faee70f1d31)
##### Account
* `estimate_account_op` renamed to `estimate_virtual_op_num`
##### Block
* `only_ops` and `only_virtual_ops` added as new parameter
* the transactions property returns a list of transactions
* The operations property returns a list of operations
* Block which contain only only_ops can be received now
##### Blockchain
* `only_ops` and `only_virtual_ops` added to `get_current_block`, `blocks`, `wait_for_and_get_block` and `stream`
* `ops()` is obsolete now
* `stream()` uses now `blocks()` internally
* `only_ops=True` streams now also virtual operations
##### beempy
* autoconnect is the to False now and only when needed a `stm.rpc.rpcconnect()` is performed
* ascii option added to all plots
* `rewards` added, this new command lists outstanding rewards (posts, comment and votes)
* `curation` added which shows the vote curation rewards for a single post
* `verify` added, which returns the public signing key and the signer of a transaction
##### Comment
* `reward`, `is_pending`, `time_elapsed`, `curation_penalty_compensation_SBD`, `estimate_curation_SBD`, `get_curation_penalty`, `get_vote_with_curation`, `get_beneficiaries_pct`, `get_rewards`, `get_author_rewards` and `get_curation_rewards` added

##### Unit tests
* new function added and tests adapted to changes

#### Prepare next version with several improvements
* [commit b9509ed](https://github.com/holgern/beem/commit/b9509edfe2947dd785648f647a57dbad02a0fdca)
##### Account
* Parameter accuracy renamed to stop_diff
* Doku for estimate_virtual_op_num improved
* Several improvements and fixes for estimate_virtual_op_num
##### CLI
* rewards command improved and more parameter added
##### Comments
* Assure Amount class for all amounts
* is_pending improved
##### Doku
* tutorial about showing all posts of an account added
##### Unit tests
* test_account, test_cli and test_comment improved

#### Fix and improve `estimate_virtual_op_num`
* [commit cd5df63](https://github.com/holgern/beem/commit/cd5df6361d122743aabba379157397ba2d07c95c)
* Improved mathematics and estimation

#### Improvements for `estimate_virtual_op_num`, `history and history_reverse`
* [commit dc1ef5a](https://github.com/holgern/beem/commit/dc1ef5af30be2e8a2f79ee5b06cddc039c4b5477)
* Skip estimate_virtual_op_num when max_virtual_num is smaller than batch_size
* `reverse` is removed from estimate_virtual_op_num
* it is assured in history and history_reverse that the estimated start is really before or after the given one.

#### New cli commands: pending and rewards
* [commit 71b2dd2](https://github.com/holgern/beem/commit/71b2dd2f2db0c5caa2019f7ca1b41cb0ec7d9757)
##### Account
* Example added and improved
* same bug fixes
##### CLI
* pending shows now all pending rewards and rewards shows all already received rewards
##### Steem
* Doku improved
##### Unit tests
* tests improved

#### Proof of Work Done
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for beem - autoclean, new CLI commands, virtual op estimation, new Comment functions and stand alone beempy'](https://steemit.com/@holger80/update-for-beem-autoclean-new-cli-commands-virtual-op-estimation-new-comment-functions-and-stand-alone-beempy)
