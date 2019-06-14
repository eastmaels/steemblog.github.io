
---
title: 'Update for beem - all broadcast operation are now supported and beempy curation improved'
permlink: update-for-beem-all-broadcast-operation-are-now-supported-and-beempy-curation-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-27 20:21:03
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

[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 477 unit tests and a coverage of 81 %. The current version is 0.19.32.

I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

### New Features
#### Missing broadcast operation were added

* Account_witness_proxy added
* Custom added
* Custom_binary added
* Prove_authority added
* Limit_order_create2 added
* Request_account_recovery added
* Recover_account added
* Escrow_transfer added
* Escrow_dispute added
* Escrow_release added
* Escrow_approve added
* Decline_voting_rights added
#### active key permission can be used for posting operation
When no posting key is found, an active key is used instead for signing posting operation (e.g. voting).
When no key could be found, MissingKeyError is now always raised when a transaction should be signed.

#### refactoring of beem
* beemgrapheneapi is depreated and all python files are moved to beemapi
* GrapheneRPC uses now a Nodes class instead of cycle([urls])
* get_nodes_list is removed from beem.utils and available in beem.nodelist.
#### get_replies added to Comment class
 ```
from beem.comment import Comment
c =Comment("@utopian-io/people-of-utopian-2-nepeta")
replies = c.get_replies()
```
#### Keys for accounts with more than one key can be obtained
* getKeysForAccount added
* getOwnerKeysForAccount, getActiveKeysForAccount, getPostingKeysForAccount added
#### beempy curation improved
<center>
![image.png](https://ipfs.busy.org/ipfs/QmUCy4RsViUs63smw1NqqmSCJSbSxFSFuW2cKiqCsMy2UV)
</center>
Besides the curation of a single post, the complete curation history of the last ` d (default is 7)` days can be displayed. The curation command shows all votes from now on and goes backward. The first 7 days are pending rewards and then paid curation rewards are shown, when `-d ` is set to a number higher than 7.
E.g.
```
beempy curation -a holger80 -v 0.5 -x 100 -s
```
shows the curation of the last 7 days for votes higher than 0.5 SBD and with a performance better than 100 %. ` -s` supresses the summery:
![image.png](https://ipfs.busy.org/ipfs/QmTtTiE2MXNzj62dFd2VeqUuDGuDBQsyuU6gFogKBMGHvd)
There are two votes with a performance better than 100%. 
Without `-s`:
![image.png](https://ipfs.busy.org/ipfs/QmdTLegAF6Yim3TXi2c7jVqRy8teYeixm1um2Bmku8MTQL)
The highest vote and the vote with the highest curation performance are addionally shown for each post. The sum shows the resulting sum of all votes. The performance is in this case the curation percentage (maximum value is 25 %).

It possible to analyze a post by taking the id which is shown by the author name (`ihtiht/logo-design-contribution-for-gplanner` can also be used instead of `24`) :
![image.png](https://ipfs.busy.org/ipfs/QmWqHDsNcxJb3d2kFqgCHPQBK4sumTesatXu872rM1a3g5)
* `-e curation.html` exports the result as html file
*  `-p`  shows the permlink
* `-t` shows the title
#### 
### Commit history
#### Add missing operations with unit tests
* [commit 17679d6](https://github.com/holgern/beem/commit/17679d6b128c2504a78e310ef32039e62df5ca92)
#### beembase\objects
* Amount improve handling of new appbase Amount format
#### beembase\operations
* missing broadcast operation were added
#### Unit tests
* add test_order_create2, test_witness_proxy, test_custom, test_request_account_recovery,  test_recover_account, test_escrow_transfer, test_escrow_dispute, test_escrow_release, test_escrow_approve, test_decline_voting_rights, test_delegate_vesting_shares, test_account_create_with_delegation added

#### Comment: get_replies added, get_curation_penalty improved and get_rewards fixed
* [commit 25ce837](https://github.com/holgern/beem/commit/25ce837358b65970417edcb3dac71cd720e9d3ca)

####  beemgrapheneapi is deprecated, all classes and functions are available under beemapi
* [commit 951d832](https://github.com/holgern/beem/commit/951d83220a4aa00d0de69be4b13bae90ef34929a)

#### Fix remaining references to beemgrapheneapi and fix not working wss:/testnet.steem.vc
* [commit 0c0fbf2](https://github.com/holgern/beem/commit/0c0fbf2c321810433c3a377fe1dab0b5d24b0341)

#### common steem constants added and used in account, comment and steem
* [commit bac8b3c](https://github.com/holgern/beem/commit/bac8b3c4e7bbb592616614dd01ff3f6a276d1c42)

#### Add unit test for constants
* [commit 9199f83](https://github.com/holgern/beem/commit/9199f83505e90559b53682debd0efe1e6fab7505)

#### Add export option for curation and votes
* [commit 1b7ab8c](https://github.com/holgern/beem/commit/1b7ab8c76bc055df883917e0d43c183847df1b42)
##### CLI
* speed up votes and added export to text file
* curation can be used to export all pending curation rewards of one account

#### New nodes class for better node url handling
* [commit a261c53](https://github.com/holgern/beem/commit/a261c53ed744ca91124e5d6d0f5cc5d198843578)
##### Wallet
* getKeysForAccount added
* getOwnerKeysForAccount, getActiveKeysForAccount, getPostingKeysForAccount added
##### beemapi
* WorkingNodeMissing is raised when no working node could be found
##### GrapheneRPC
* cycle([urls]) is replaced by the nodes class
##### Nodes
* Node handling and management of url and error_counts is performed by the nodes class
* sleep_and_check_retries is moved to the nodes class
* Websocket, steemnodrpc were adpapted to the changes
##### Unit tests
* new tests for the nodes class
* tests adapted for websocket and rpcutils

#### NodeList class added for better nodelist handling
* [commit 223ac87](https://github.com/holgern/beem/commit/223ac872ae4bb57f2da737bfd57a25cd0260dd66)
##### NodeList
* replaces get_node_list from utils.py
* is a list and contains all nodes as dict
* get_nodes() returns the url in a list
##### Utils
* get_node_list removed
##### Unit Tests and Examples adapted to the changes

#### Several improvements
* [commit ](https://github.com/holgern/beem/commit/818c8f1b54d159889e1c0bd0ffe39fa1c1680855)
##### Account
* datetime.date is also supported
##### CLI
* curation improved
##### Comment
* doc improved
##### Transactionbuilder
* doc fixed
* owner key is used, when provided and when no other permission is given
##### utils
* datetime.date supported
##### Wallet
*   raise MissingKeyError when a wrong key is given by Steem(keys=[])
##### Unit tests
* several unit tests has to be changed as now it is really tested if a given wif belongs to the account or not.
#### If keys are empty try with next higher permission
* [commit 56faf8c](https://github.com/holgern/beem/commit/56faf8c42a2093bfeeb7e9fcd4f0973568c8be63)
#### Fix flake8 and add unit tests for permission downgrade
* [commit b66d97f](https://github.com/holgern/beem/commit/b66d97fc861624976e4d76fc4e290fa2e608d6d3)
#### Fix and improve curation even more
* [commit 122e234](https://github.com/holgern/beem/commit/122e2348a79249b98e481fb2120d12dead561628)
#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for beem - all broadcast operation are now supported and beempy curation improved'](https://steemit.com/@holger80/update-for-beem-all-broadcast-operation-are-now-supported-and-beempy-curation-improved)
