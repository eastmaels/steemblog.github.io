
---
title: 'update for beem - several improvements and optimizations'
permlink: update-for-beem-several-improvements-and-optimizations
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-15 20:23:24
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
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 501 unit tests and a coverage of 77 %. The current version is 0.19.38.

I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

## Bug fixed
* [Beem: blockchain.get_all_accounts() returns duplicate entries](https://steemit.com/utopian-io/@stmdev/beem-blockchain-getallaccounts-returns-duplicate-entries) was fixed in [commit 8137a6a](https://github.com/holgern/beem/commit/8137a6a9897aed8057c64ec5f43c7a098926594d).
* [Beem: blockchain.get_all_accounts() fails for limit > steps on appbase](https://steemit.com/utopian-io/@stmdev/beem-blockchain-getallaccounts-fails-for-limit-steps-on-appbase) was fixed in [commit 8137a6a](https://github.com/holgern/beem/commit/8137a6a9897aed8057c64ec5f43c7a098926594d).

## Improvements

### Empty profiles and empty metadata of an account are handled 
([commit c86b3aa](https://github.com/holgern/beem/commit/c86b3aa50fe88a2b8d9d9871a4a7b98559d6fdeb) and [commit c86b3aa](https://github.com/holgern/beem/commit/c86b3aa50fe88a2b8d9d9871a4a7b98559d6fdeb))

### New operation structure for appbase
* [commit 0260304](https://github.com/holgern/beem/commit/0260304fabf8fdf9acbec8b475e8b58c620f52ff)
The new operation structure looks like
```
[{"type":"vote_operation","value":{"voter":"steemit","author":"alice","permlink":"a-post-by-alice","weight":10000}}]
```
instead of
```
[["vote", {"voter":"steemit","author":"alice","permlink":"a-post-by-alice","weight":10000}]]
```
`Operation()` from `beembase\objects.py` has now a new option   `appbase`. `Operation(op, appbase=True)` will return the new format.

At the moment it does not seem to work and a broadcasted transaction in the new format returns
`'code': -32603, 'message': 'Internal Error'`.
Therefore, all broadcasting operation are now performed with the condenser_api. But beem is prepared for the new format.

### Account object handling was improved
In [commit c4a6feb](https://github.com/holgern/beem/commit/c4a6febdf980dda34dbc7e9ca8ef456ed9a792d5)
the account object handling was improved for several account functions. A string as well an account object can be used now. For example:
```
from beem.account import Account
acc = Account("test")
acc_to = Account("null")
acc.transfer_to_vesting(10000, to=acc_to)
```

### poloniex removed and huobi and ubpit added as source for a price feed
* commits  [commit faae081](https://github.com/holgern/beem/commit/faae0819158ce20fe0dcbe43d40a04ed9d87e861)
and  [commit 8219217](https://github.com/holgern/beem/commit/8219217fe1fba39a08da0aa85e6af5158dc14bfc)
huobi and upbit were added as source for a STEEM - BTC price information.
The following API-calls are used:
* `https://api.huobi.pro/market/history/kline?period=1day&size=1&symbol=steembtc`
* `https://crix-api.upbit.com/v1/crix/trades/ticks?code=CRIX.UPBIT.BTC-STEEM&count=` 
Error handling was added by:
```
        try:
            responses = list(requests.get(u, timeout=30) for u in urls)
        except Exception as e:
            log.debug(str(e))
```

### Timeout added to websocket connections
*  [commit b8d8be1](https://github.com/holgern/beem/commit/b8d8be1ff68baf9fc77fca7ab3d1f229e781fc69) and [commit 50827b1](https://github.com/holgern/beem/commit/50827b146074c9ad29708084a5a59235f66c6d72)

At fist the following thread interrupt function was tested:
```
@contextmanager 
def time_limit(seconds, msg=''): 
    timer = threading.Timer(seconds, lambda: interrupt_main()) 
    timer.start() 
    try: 
        yield 
    except KeyboardInterrupt: 
        raise TimeoutException("Timed out for operation {}".format(msg)) 
    finally: 
        # if the action ends in specified time, timer is canceled 
        try: 
            timer.cancel() 
        except: 
            raise TimeoutException("Timed out for operation {}".format(msg)) 
```
This implementation has the disadvantage that it suppresses the KeyboardInterrupt.
A better solution seems to be setting the timeout in the websocket object, which is now implemented:
```
self.ws.settimeout(self.timeout) 
```

### Proper passing of  lazy and full in Account, Block, Comment, Vote and Witness
* [commit 50827b1](https://github.com/holgern/beem/commit/50827b146074c9ad29708084a5a59235f66c6d72)
The parameter `lazy` and  `full`  are now correclty passed to `BlockchainObject`. The default settings are `lazy=False` and `full=True`.

At the moment, `full=False` has only an effect on an Account object: 
```
account = Account("gtg", full=False)
account.json()
{'id': 14007, 'name': 'gtg', 'owner': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5RLQ1Jh8Kf56go3xpzoodg4vRsgCeWhANXoEXrYH7bLEwSVyjh', 1]]}, 'active': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM8NWQYG4BvjGNu8zqqV9fbR7aSCZHcxkVib41PYnpGmPRe6BHVG', 1]]}, 'posting': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5tp5hWbGLL1R3tMVsgYdYxLPyAQFdKoYFbT2hcWUmrU42p1MQC', 1]]}, 'memo_key': 'STM4uD3dfLvbz7Tkd7of4K9VYGnkgrY5BHSQt52vE52CBL5qBfKHN', 'json_metadata': '{"profile":{"profile_image":"https://grey.house/img/grey_4.jpg","name":"Gandalf the Grey","about":"IT Wizard, Steem Witness","location":"Steem"}}', 'proxy': '', 'last_owner_update': '2017-03-21T18:37:42', 'last_account_update': '2017-03-21T18:37:42', 'created': '2016-06-30T17:22:18', 'mined': True, 'owner_challenged': False, 'active_challenged': False, 'last_owner_proved': '1970-01-01T00:00:00', 'last_active_proved': '1970-01-01T00:00:00', 'recovery_account': 'steem', 'last_account_recovery': '2016-07-21T21:48:03', 'reset_account': 'null', 'comment_count': 0, 'lifetime_vote_count': 0, 'post_count': 3604, 'can_vote': True, 'voting_power': 9725, 'last_vote_time': '2018-06-14T20:51:48', 'balance': '11.148 STEEM', 'savings_balance': '0.000 STEEM', 'sbd_balance': '735.300 SBD', 'sbd_seconds': '1665105253254', 'sbd_seconds_last_update': '2018-06-13T02:39:48', 'sbd_last_interest_payment': '2018-05-15T01:10:18', 'savings_sbd_balance': '0.000 SBD', 'savings_sbd_seconds': '0', 'savings_sbd_seconds_last_update': '1970-01-01T00:00:00', 'savings_sbd_last_interest_payment': '1970-01-01T00:00:00', 'savings_withdraw_requests': 0, 'reward_sbd_balance': '0.014 SBD', 'reward_steem_balance': '0.005 STEEM', 'reward_vesting_balance': '118328.674638 VESTS', 'reward_vesting_steem': '58.232 STEEM', 'vesting_shares': '478410729.379044 VESTS', 'delegated_vesting_shares': '365530704.381348 VESTS', 'received_vesting_shares': '0.000000 VESTS', 'vesting_withdraw_rate': '0.000000 VESTS', 'next_vesting_withdrawal': '1969-12-31T23:59:59', 'withdrawn': 0, 'to_withdraw': 0, 'withdraw_routes': 0, 'curation_rewards': 4589911, 'posting_rewards': 6452787, 'proxied_vsf_votes': ['17681482578502', 0, 0, 0], 'witnesses_voted_for': 29, 'average_bandwidth': '56849871754', 'lifetime_bandwidth': '3960159000000', 'last_bandwidth_update': '2018-06-14T20:59:12', 'average_market_bandwidth': 2159946428, 'lifetime_market_bandwidth': '251580000000', 'last_market_bandwidth_update': '2018-02-26T16:22:00', 'last_post': '2018-06-14T20:59:12', 'last_root_post': '2018-06-10T20:14:24'}
```
```
account = Account("gtg", full=True)
account.json()
{'id': 14007, 'name': 'gtg', 'owner': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5RLQ1Jh8Kf56go3xpzoodg4vRsgCeWhANXoEXrYH7bLEwSVyjh', 1]]}, 'active': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM8NWQYG4BvjGNu8zqqV9fbR7aSCZHcxkVib41PYnpGmPRe6BHVG', 1]]}, 'posting': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5tp5hWbGLL1R3tMVsgYdYxLPyAQFdKoYFbT2hcWUmrU42p1MQC', 1]]}, 'memo_key': 'STM4uD3dfLvbz7Tkd7of4K9VYGnkgrY5BHSQt52vE52CBL5qBfKHN', 'json_metadata': '{"profile":{"profile_image":"https://grey.house/img/grey_4.jpg","name":"Gandalf the Grey","about":"IT Wizard, Steem Witness","location":"Steem"}}', 'proxy': '', 'last_owner_update': '2017-03-21T18:37:42', 'last_account_update': '2017-03-21T18:37:42', 'created': '2016-06-30T17:22:18', 'mined': True, 'owner_challenged': False, 'active_challenged': False, 'last_owner_proved': '1970-01-01T00:00:00', 'last_active_proved': '1970-01-01T00:00:00', 'recovery_account': 'steem', 'last_account_recovery': '2016-07-21T21:48:03', 'reset_account': 'null', 'comment_count': 0, 'lifetime_vote_count': 0, 'post_count': 3604, 'can_vote': True, 'voting_power': 9725, 'last_vote_time': '2018-06-14T20:51:48', 'balance': '11.148 STEEM', 'savings_balance': '0.000 STEEM', 'sbd_balance': '735.300 SBD', 'sbd_seconds': '1665105253254', 'sbd_seconds_last_update': '2018-06-13T02:39:48', 'sbd_last_interest_payment': '2018-05-15T01:10:18', 'savings_sbd_balance': '0.000 SBD', 'savings_sbd_seconds': '0', 'savings_sbd_seconds_last_update': '1970-01-01T00:00:00', 'savings_sbd_last_interest_payment': '1970-01-01T00:00:00', 'savings_withdraw_requests': 0, 'reward_sbd_balance': '0.014 SBD', 'reward_steem_balance': '0.005 STEEM', 'reward_vesting_balance': '118328.674638 VESTS', 'reward_vesting_steem': '58.232 STEEM', 'vesting_shares': '478410729.379044 VESTS', 'delegated_vesting_shares': '365530704.381348 VESTS', 'received_vesting_shares': '0.000000 VESTS', 'vesting_withdraw_rate': '0.000000 VESTS', 'next_vesting_withdrawal': '1969-12-31T23:59:59', 'withdrawn': 0, 'to_withdraw': 0, 'withdraw_routes': 0, 'curation_rewards': 4589911, 'posting_rewards': 6452787, 'proxied_vsf_votes': ['17681482578502', 0, 0, 0], 'witnesses_voted_for': 29, 'average_bandwidth': '56849871754', 'lifetime_bandwidth': '3960159000000', 'last_bandwidth_update': '2018-06-14T20:59:12', 'average_market_bandwidth': 2159946428, 'lifetime_market_bandwidth': '251580000000', 'last_market_bandwidth_update': '2018-02-26T16:22:00', 'last_post': '2018-06-14T20:59:12', 'last_root_post': '2018-06-10T20:14:24', 'vesting_balance': '0.000 STEEM', 'reputation': '39850768931461', 'transfer_history': [], 'market_history': [], 'post_history': [], 'vote_history': [], 'other_history': [], 'witness_votes': ['abit', 'anyx', 'arcange', 'bhuz', 'blockchained', 'blocktrades', 'boatymcboatface', 'cervantes', 'chitty', 'clayop', 'drakos', 'followbtcnews', 'furion', 'good-karma', 'gtg', 'jesta', 'joseph', 'liondani', 'lukestokes.mhth', 'masteryoda', 'nextgencrypto', 'pfunk', 'pharesim', 'riverhead', 'roelandp', 'smooth.witness', 'steemed', 'themarkymark', 'timcliff'], 'tags_usage': [], 'guest_bloggers': []}
```

`lazy=True` disables loading of the object on creation and reloads the complete object on every call
```
account = Account("gtg", lazy=True)
account.json()
{'name': 'gtg'}
account.profile
{'profile_image': 'https://grey.house/img/grey_4.jpg', 'name': 'Gandalf the Grey', 'about': 'IT Wizard, Steem Witness', 'location': 'Steem'}
account.json()
{'name': 'gtg', 'id': 14007, 'owner': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5RLQ1Jh8Kf56go3xpzoodg4vRsgCeWhANXoEXrYH7bLEwSVyjh', 1]]}, 'active': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM8NWQYG4BvjGNu8zqqV9fbR7aSCZHcxkVib41PYnpGmPRe6BHVG', 1]]}, 'posting': {'weight_threshold': 1, 'account_auths': [], 'key_auths': [['STM5tp5hWbGLL1R3tMVsgYdYxLPyAQFdKoYFbT2hcWUmrU42p1MQC', 1]]}, 'memo_key': 'STM4uD3dfLvbz7Tkd7of4K9VYGnkgrY5BHSQt52vE52CBL5qBfKHN', 'json_metadata': '{"profile":{"profile_image":"https://grey.house/img/grey_4.jpg","name":"Gandalf the Grey","about":"IT Wizard, Steem Witness","location":"Steem"}}', 'proxy': '', 'last_owner_update': '2017-03-21T18:37:42', 'last_account_update': '2017-03-21T18:37:42', 'created': '2016-06-30T17:22:18', 'mined': True, 'owner_challenged': False, 'active_challenged': False, 'last_owner_proved': '1970-01-01T00:00:00', 'last_active_proved': '1970-01-01T00:00:00', 'recovery_account': 'steem', 'last_account_recovery': '2016-07-21T21:48:03', 'reset_account': 'null', 'comment_count': 0, 'lifetime_vote_count': 0, 'post_count': 3605, 'can_vote': True, 'voting_power': 8793, 'last_vote_time': '2018-06-15T11:50:45', 'balance': '0.000 STEEM', 'savings_balance': '0.000 STEEM', 'sbd_balance': '0.000 SBD', 'sbd_seconds': 0, 'sbd_seconds_last_update': '2018-06-15T10:22:51', 'sbd_last_interest_payment': '2018-06-15T10:22:51', 'savings_sbd_balance': '0.000 SBD', 'savings_sbd_seconds': 0, 'savings_sbd_seconds_last_update': '1970-01-01T00:00:00', 'savings_sbd_last_interest_payment': '1970-01-01T00:00:00', 'savings_withdraw_requests': 0, 'reward_sbd_balance': '0.014 SBD', 'reward_steem_balance': '0.005 STEEM', 'reward_vesting_balance': '135964.296711 VESTS', 'reward_vesting_steem': '66.912 STEEM', 'vesting_shares': '478748243.467364 VESTS', 'delegated_vesting_shares': '365530704.381348 VESTS', 'received_vesting_shares': '0.000000 VESTS', 'vesting_withdraw_rate': '0.000000 VESTS', 'next_vesting_withdrawal': '1969-12-31T23:59:59', 'withdrawn': 0, 'to_withdraw': 0, 'withdraw_routes': 0, 'curation_rewards': 4598591, 'posting_rewards': 6452787, 'proxied_vsf_votes': ['17742276687445', 0, 0, 0], 'witnesses_voted_for': 29, 'average_bandwidth': '54782946705', 'lifetime_bandwidth': '3963019000000', 'last_bandwidth_update': '2018-06-15T11:50:45', 'average_market_bandwidth': 2159935714, 'lifetime_market_bandwidth': '253740000000', 'last_market_bandwidth_update': '2018-06-15T10:23:27', 'last_post': '2018-06-15T09:17:03', 'last_root_post': '2018-06-10T20:14:24', 'vesting_balance': '0.000 STEEM', 'reputation': '39882771080971', 'transfer_history': [], 'market_history': [], 'post_history': [], 'vote_history': [], 'other_history': [], 'witness_votes': ['abit', 'anyx', 'arcange', 'bhuz', 'blockchained', 'blocktrades', 'boatymcboatface', 'cervantes', 'chitty', 'clayop', 'drakos', 'followbtcnews', 'furion', 'good-karma', 'gtg', 'jesta', 'joseph', 'liondani', 'lukestokes.mhth', 'masteryoda', 'nextgencrypto', 'pfunk', 'pharesim', 'riverhead', 'roelandp', 'smooth.witness', 'steemed', 'themarkymark', 'timcliff'], 'tags_usage': [], 'guest_bloggers': []}

```

### Automatic conversion of all dates, int and amounts in each account, block, comment, vote and witness object
* [commit 50827b1](https://github.com/holgern/beem/commit/50827b146074c9ad29708084a5a59235f66c6d72)
 and [commit af113d2](https://github.com/holgern/beem/commit/af113d242b79f652000df85f275a34ae5a2bc331)
The `json()` function returns the original json dict. `Signed_Transaction` works with a datatime object as expiration date.
```
from beem.block import Block
block = Block(2000000)
block["timestamp"]
datetime.datetime(2016, 6, 2, 23, 58, 45, tzinfo=<UTC>)
block.json()["timestamp"]
'2016-06-02T23:58:45'
block.transactions[0]["expiration"]
datetime.datetime(2016, 6, 2, 23, 58, 54, tzinfo=<UTC>)
block.json_transactions[0]["expiration"]
'2016-06-02T23:58:54'
```

```
from beem.block import Block
block1 = Block(2000000)

block2 = Block(2000001)
block2["timestamp"] - block1["timestamp"]
datetime.timedelta(0, 3)
```

### Thread and worker for `blocks(threading=True) ` implemented
In case of node failure, blocks were missing with the old implementation. The implementation in 
[commit 3c0f1cc](https://github.com/holgern/beem/commit/3c0f1cc414492c02b81c30a6f6a3d35723ceccfe)
is a first step in improving thread-based block fetching in blocks()

## Commit history
### Prepare next release and fixes two small bugs
* [commit d0c91b8](https://github.com/holgern/beem/commit/d0c91b81b9ca678e0cb46a817a500dc8495ad934)

### Fix profile for empty `json_metadata`
* [commit c86b3aa](https://github.com/holgern/beem/commit/c86b3aa50fe88a2b8d9d9871a4a7b98559d6fdeb)

### Fix handling of empty json_metadata
* [commit 9d969d7](https://github.com/holgern/beem/commit/9d969d79d9f3eb887d0e57e7bf04b00d8f4e6267)

### New operation structure for appbase
* [commit 0260304](https://github.com/holgern/beem/commit/0260304fabf8fdf9acbec8b475e8b58c620f52ff)
#### Transactionbuilder
* Prepare broadcasting in new appbase format
* Force condenser_api by now
#### RPCUtils
* Improve detection of conenser_api
#### Streemnoderpc
* Improved error message for Assert Exception:v.is_object()
#### beembase.Object
* Add new appbase Operation format
#### beemgraphenebase.object
* Add handling of new appbase operation format

### Release 0.19.37
* [commit 99e3541](https://github.com/holgern/beem/commit/99e3541d69cd850d5c9b3320065e21026cc068d0)
* Fix unit tests and WitnessesRankedByVote

### Prepare next version and improve Account object handling
* [commit c4a6feb](https://github.com/holgern/beem/commit/c4a6febdf980dda34dbc7e9ca8ef456ed9a792d5)
#### Account
* Account handling is improved and it is assured that an Account object or an account string name can be used in every function
#### Readme
* Advantages over the official steem-python library added (fixes #25)

### Several improvements
* [commit 01848a8](https://github.com/holgern/beem/commit/01848a8c250c3c6ba4911e97d67a525f433d1b7e)
#### Account
* json_metadata property
#### Blockchain
* add addTzInfo
#### Comment
* fix meta edit of post
#### Steem
* add use_stored_data

### poloniex removed and huobi and ubpit added to steem_btc_ticker()
* [commit faae081](https://github.com/holgern/beem/commit/faae0819158ce20fe0dcbe43d40a04ed9d87e861)

### Prepare next release and improved bool variable handling for steemconnect link creation
* [commit d59d379](https://github.com/holgern/beem/commit/d59d379236954c11b6a64bf27a4b0bfb7f032702)

### Add timeout to websocket connections 
* [commit b8d8be1](https://github.com/holgern/beem/commit/b8d8be1ff68baf9fc77fca7ab3d1f229e781fc69)
#### Comment
* Add example
#### Steem
* improve docu
#### Exception
* Add TimeoutException
#### GrapheneRPC
* add `time_limit` to implement a timeout for websocket connection
#### Unit test
* add test for timeout implementation

### several improvements and optimizations 
* [commit 50827b1](https://github.com/holgern/beem/commit/50827b146074c9ad29708084a5a59235f66c6d72)

#### Account
* lazy and full are correctly passed
* `_parse_json_data()` added to parse json
#### Block
* lazy and full are correctly passed
* empty operations are handled
* `op_statistics` improved
#### Blockchain
* virtual ops and ops statistics are separately calculated
#### Comment
* `_parse_json_data()` added to parse dates and amounts
* author_reputation is parsed to int
* lazy and full are correctly passed
#### Vote
* lazy and full are correctly passed
* `_parse_json_data` added to parse date and rshares and reputation
* vote.time is a datetime object
* json() returns the original string
#### Witness
* lazy and full are correctly passed
#### GrapheneRPC
* time_limit removed, as it suppresses KeyboardInterrupt
* `ws.settimeout()` is set for websocket
* `WebSocketTimeoutException`  handling added
#### Unit tests
* test_account fixed
* `test_time_limit` removed from `test_steemnoderpc`
* checks added to `test_blockchain_batch`

### add try catch to steem_btc_ticker() and btc_usd_ticker()
* [commit 8219217](https://github.com/holgern/beem/commit/8219217fe1fba39a08da0aa85e6af5158dc14bfc)

### All dates, ints, and amounts are parsed in account, block, comment, vote and witness
* [commit af113d2](https://github.com/holgern/beem/commit/af113d242b79f652000df85f275a34ae5a2bc331)
##### Account
* _parse_json_data improved and all missing ints and dates added
* json() adapted to `_parse_json_data()`
##### Block
* _parse_json_data added, expiration and timestamp are now datetime objects
* property json_transactions and json_operations added, which return trx and ops with date strings
* BlockHeader improved and datetime parsing added
##### Blockchain
* adapted to new datetime objects
##### CLI
* adapted to code changes
##### Comment
* int and dates inside active_votes are parsed
* Missing dates and int are parsed
##### Market
* date parsing to datetime added to market_history
##### Vote
* Some improvements
##### Witness
* _parse_json_data added
* all date and ints are parsed
* Demo added to Witnesses, WitnessesVotedByAccount, WitnessesRankedByVote and ListWitnesses 
##### beemgraphenebase/types
* datetime handling added to PointInTime
##### Unit tests
* test_account adapted
* test_export added to test_block
* test in test_comment fixed
* test_export added to test_witness

### Load missing blocks when using threads and fix issue #27 and #28
* [commit 8137a6a](https://github.com/holgern/beem/commit/8137a6a9897aed8057c64ec5f43c7a098926594d)
* Unit test for issue #27 added
* Exception handling added to blocks using threads
* get_all_accounts fixed for appbase calls (fixes #28)

### Thread and Worker class for blocks(threading=True)
* [commit 3c0f1cc](https://github.com/holgern/beem/commit/3c0f1cc414492c02b81c30a6f6a3d35723ceccfe)

#### Blockchain
* Check if all block could be fetched added
* Thread and Worker class for block fetching added

### GitHub Account
https://github.com/holgern
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['update for beem - several improvements and optimizations'](https://steemit.com/@holger80/update-for-beem-several-improvements-and-optimizations)
