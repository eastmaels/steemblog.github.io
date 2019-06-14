
---
title: 'update for beem - account snapshot added and fix for 0.19.5'
permlink: update-for-beem-account-snapshot-added-and-fix-for-0-19-5
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-09 15:36:18
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
<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 527 unit tests and a coverage of 74 %. The current version is 0.19.47.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
___
### Bug Fixes
In order to fix the frozen steem blockchain, steem was updated to 0.19.5 and 0.19.10. Due to this changes, beem stopped working. 

Commits [4523f59](https://github.com/holgern/beem/commit/4523f590ab83bb3be5cbed6a9395f5961b2755bc), [a37f108](https://github.com/holgern/beem/commit/a37f108727ad580e7c4fe62bae1ee01ce3badc94), 
[2795f9d](https://github.com/holgern/beem/commit/2795f9d0dd2f13a68f0e13fc130a3558b73f6d10),  [d1b15a9](https://github.com/holgern/beem/commit/d1b15a92e8e9f4129254e0ee372e6fee67c402b2), and
[bedd1b1](https://github.com/holgern/beem/commit/bedd1b168d20886b3d4075748400ea98203f0867) where able to fix all problems. 

Problem was the appbase ready node detection which depends on the RPC-node version. Before the update, all nodes with a version below 0.19.4 were not appbase ready and 0.19.4 was appbase ready. 
After the blockchain fix, 0.19.5 was not appbase ready and 0.19.10 was appbase ready. This inconsitent versioning was addressed by implementing a version comparison function and by adding three different chains to `chains.py` (with min_version `0.0.0`, `0.19.5` and `0.19.10`).

### New Features
#### ObjectCache is now threadsafe
In commits [d56e822](https://github.com/holgern/beem/commit/d56e82279efe262732fe994387e16e78d85d746d), [94a7c13](https://github.com/holgern/beem/commit/94a7c135bae2c823f964222e7cdcbcc297bba9d5), [dd9b5b4](https://github.com/holgern/beem/commit/dd9b5b4ff5728aaa1d472047470352ea5314b532),  [6925794](https://github.com/holgern/beem/commit/6925794341f53a0c337788763ad02203863db1ff), and [b1c3205](https://github.com/holgern/beem/commit/b1c3205402b50e63acdddd9f8051ae55c66114d6), a robust solution was found to make all BlockchainObjects thread safe. In each cache function a `with self.lock:` where `self.lock = threading.RLock()` was added. This prevents that one thread add something to the cache while an other thread is reading at the same time.

#### AccountSnapshot class added
In commits  [bedd1b1](https://github.com/holgern/beem/commit/bedd1b168d20886b3d4075748400ea98203f0867), [29d685a](https://github.com/holgern/beem/commit/29d685a7c4b9c188f4ae11b7e2e88f438f676f64), and   [c54180e](https://github.com/holgern/beem/commit/c54180ea44bc8567895fc61d3a95084dff15f322) a new class was implemented which can be used to access historic account states.

The plot shows the effective SP and own SP of an account over time. The SP is only calculated based on account operation. In the end the difference is only 8958.65 SP - 8961.9 SP = 3.25 SP.
![sp_over_time-holger80.png](https://ipfs.busy.org/ipfs/QmbBDShMUuFiUrrPHhQyF1QZHTWGngYFsYd4K1i1zpy8Q8)

```
from beem.snapshot import AccountSnapshot
acc_snapshot = AccountSnapshot("holger80")
acc_snapshot.get_account_history()
acc_snapshot.build()
acc_snapshot.build_sp_arrays()
```
`get_account_history()` fetches the complete account op history. `build()` goes then through every operation and adds or removes vests to internal state. Delegations are also tracked in a separate state variable. `build_sp_arrays()` creates then an array for plotting the effective and owning Steem power.

![curation_per_week-holger80.png](https://ipfs.busy.org/ipfs/QmccVxNmn8xhTErQnMXn526goyarhXJLvDw6p1iVrjEMRm)

`AccountSnapshot` can also be used to plot the curation rewards.
``` 
acc_snapshot = AccountSnapshot(account)
acc_snapshot.get_account_history()
acc_snapshot.build(enable_rewards=True)
acc_snapshot.build_curation_arrays()
```
`enable_rewards` is now set `True` in the `build()` function. This creates an second internal state which trackes all curation_reward operations. `build_curation_arrays()` builds an array which contain the curation_reward per week and 1000 effective Steem Power. 

At the moment, `AccountSnapshot` is not well documented, but two examples were added the repository:
* `account_curation_per_week_and_1k_sp.py`
* `account_sp_over_time.py`

`AccountSnapshot` is based on  [account_sp_over_time.py](https://gist.github.com/crokkon/89969688b0aa3ecb1712fd628c697d73) by @crokkon and was enhanced by tracking of Steem and Sbd balance as well as tracking of curation rewards. Some missing operation were added and some bugs fixed. 
___
## Commit history
#### Prepare next release and improve parse_body for post()
* [commit 8f87197](https://github.com/holgern/beem/commit/8f871977e02c502630cc85cb95e22534edcec711)

#### Add conversion of datetime objects to timestamp in get_steem_per_mvest
* [commit c96afa4](https://github.com/holgern/beem/commit/c96afa470f2aa0bf7f21c765349600c471777318)

#### Fix is_network_appbase_ready for newest steem update
* [commit 4523f59](https://github.com/holgern/beem/commit/4523f590ab83bb3be5cbed6a9395f5961b2755bc)

#### Fix known chains and network versions
* [commit a37f108](https://github.com/holgern/beem/commit/a37f108727ad580e7c4fe62bae1ee01ce3badc94)

#### Fix wrong version number in known_chains
* [commit 2795f9d](https://github.com/holgern/beem/commit/2795f9d0dd2f13a68f0e13fc130a3558b73f6d10)

#### Prepare next release and add chain for testnet.steemitdev.com
* [commit 552c9be](https://github.com/holgern/beem/commit/552c9be24399b1a89a1f4d1ae16b172483a5d87f)

#### Add lazy as option to all discussion classes
* [commit 4c7c83d](https://github.com/holgern/beem/commit/4c7c83d2e64eb0b976360b5490398fb0b53df243)

#### Fix start and stop for history_reverse
* [commit 101bb1e](https://github.com/holgern/beem/commit/101bb1e6f714769284d34cb7b607fb65266f902d)

#### Add option use_del to ObjectCache, for making the cache thread safe
* [commit d56e822](https://github.com/holgern/beem/commit/d56e82279efe262732fe994387e16e78d85d746d)

#### Try to fix clear_expired_items
* [commit 94a7c13](https://github.com/holgern/beem/commit/94a7c135bae2c823f964222e7cdcbcc297bba9d5)

#### Add bool for clear_expired_items to make it thread safe
* [commit dd9b5b4](https://github.com/holgern/beem/commit/dd9b5b4ff5728aaa1d472047470352ea5314b532)

#### Add RLock to Cache for make it thread safe
* [commit 6925794](https://github.com/holgern/beem/commit/6925794341f53a0c337788763ad02203863db1ff)

#### Remove use_del again from ObjectCache and optimize OpjectCache
* [commit b1c3205](https://github.com/holgern/beem/commit/b1c3205402b50e63acdddd9f8051ae55c66114d6)
##### Example
* A cache performance evaluation script was added to examples
##### Blockchain
* `set_cache_auto_clean` disabled

#### Add support for nodes with version below 0.19.5 and fix node version comparision
* [commit d1b15a9](https://github.com/holgern/beem/commit/d1b15a92e8e9f4129254e0ee372e6fee67c402b2)

#### Replace recursive call by while loop
* [commit 3c78ac8](https://github.com/holgern/beem/commit/3c78ac8da820f4b226e54a4ef5152c89cec750e2)
* Update nodes in Nodelist
* Disable seed.bitcoiner.me node

#### Release of 0.19.46
* [commit bedd1b1](https://github.com/holgern/beem/commit/bedd1b168d20886b3d4075748400ea98203f0867)
##### Snapshot added
* This class can be used to access old account states. At the moment, only changes in vests are tracked over time.
* example added for plotting SP over time
##### Steem
* last_node added and refresh of json_config data is forced on node switch

#### snapshot improved and unit tests fixed 
* [commit 29d685a](https://github.com/holgern/beem/commit/29d685a7c4b9c188f4ae11b7e2e88f438f676f64)
##### Snapshot
* improved  STEEM and SBD history added
* Documentation added
* get_data, reset, build functions added

#### Fix unit test and improve documentation
* [commit 48f2b5e](https://github.com/holgern/beem/commit/48f2b5ed0ed6ab2395b8e7b36298fe2c7b449af9)

#### Snapshot improved 
* [commit c54180e](https://github.com/holgern/beem/commit/c54180ea44bc8567895fc61d3a95084dff15f322)
* get_data is now fast
* update_rewards added
* enable_rewards added to build
* build_curation_arrays added

#### Add blocknumber check to wait_for_and_get_block
* [commit a666910](https://github.com/holgern/beem/commit/a666910702c3704fcfd2dd9251ae8c16b015820c)
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)). 

- - -

This page is synchronized from the post: ['update for beem - account snapshot added and fix for 0.19.5'](https://steemit.com/@holger80/update-for-beem-account-snapshot-added-and-fix-for-0-19-5)
