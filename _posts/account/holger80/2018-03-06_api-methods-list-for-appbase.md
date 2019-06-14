
---
title: 'API methods list for AppBase'
permlink: api-methods-list-for-appbase
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-06 21:15:00
categories:
- appbase
tags:
- appbase
- steemdev
- blockchain
- dev
thumbnail: 'https://steemitimages.com/DQmUxXY5fsWaN5RPFya8q8uzyXVdiQZ2kMwzp8ayvhJZ2CW/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://steemitimages.com/DQmUxXY5fsWaN5RPFya8q8uzyXVdiQZ2kMwzp8ayvhJZ2CW/image.png)
[source](https://pixabay.com/de/verkehr-autobahn-beleuchtung-nacht-332857/)</center>

As you might know, testing of AppBase has started on a large scale. The node  ` https://api.steemitstage.com` runs version `v0.19.4` and is ready for testing. You can read more in this post [AppBase: The next step forward for the Steem blockchain (let the testing begin)](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin). There is backward compatibility api which is called  `condenser_api`. Using this api you can use all old api calls. In the following, I show you a complete list of the new API calls (the list is generated with `jsonrpc.get_methods` and `jsonrpc.get_signature`).

## Assets

|asset | precision | symbol |
| --- | --- | --- |
|"@@000000013" | 3 |"SBD" |
|"@@000000021" | 3 |"STEEM" |
|"@@000000037" | 6 | "VESTS" |

Amounts are stored as list, e.g.: ['1000', 3, '@@000000021']. The float value can be calculated by:
```
int(amount[0]) / (10 ** amount[1])
```
## Possible values for the 'order' argument in the database_api
I wrote all possible 'order' combination in the table.

## account_by_key_api

| method | args | return |
| --- | --- | --- |
| get_key_reference  | {'keys': []} | {'accounts': []}  |

## account_history_api

| method | args | return |
| --- | --- | --- |
| get_account_history                 | {'account': '', 'start': '18446744073709551615', 'limit': 1000}    | {'history': []} |
| get_ops_in_block                    | {'block_num': 0, 'only_virtual': False}  | {'ops': []} |

### account_history_api.get_transaction 

| args |
| --- | 
| {'id': '0000000000000000000000000000000000000000'} |
| return |
| {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': [], 'transaction_id': '0000000000000000000000000000000000000000', 'block_num': 0, 'transaction_num': 0} | 

## block_api

| method | args | return |
| --- | --- | --- |
| get_block | {'block_num': 0} | {} |
| get_block_header    | {'block_num': 0} | {} |

## database_api

| method | args | return |
| --- | --- | --- |
| find_account_recovery_requests             | {'accounts': []}  | {'requests': []}         |
| find_accounts    | {'accounts': []}    | {'accounts': []}  |
| find_change_recovery_account_requests      | {'accounts': []}     | {'requests': []}        |
| find_comments                              | {'comments': []}        | {'comments': []}    |
| find_decline_voting_rights_requests        | {'accounts': []}   | {'requests': []}   |
| find_escrows                               | {'from': ''} | {'escrows': []}|
| find_limit_orders                          | {'account': ''}   | {'orders': []}  |
| find_owner_histories                       | {'owner': ''} | {'owner_auths': []} |
| find_savings_withdrawals                   | {'account': ''} | {'withdrawals': []}   |
| find_sbd_conversion_requests               | {'account': ''}| {'requests': []} |
| find_vesting_delegation_expirations        | {'account': ''}   | {'delegations': []}   |
| find_vesting_delegations                   | {'account': ''} | {'delegations': []}|
| find_votes                                 | {'author': '', 'permlink': ''}| {'votes': []}|

### database_api.find_withdraw_vesting_routes                    

|  args | return |
|  --- | --- |
| {'account': '', 'order': 'by_withdraw_route'}| {'routes': []}    |
| {'account': '', 'order': 'by_destination'}| {'routes': []}    |

## database_api

| method | args | return |
| --- | --- | --- |
| find_witnesses                             | {'owners': []}   | {'witnesses': []}   |
| get_active_witnesses                       | {}   | {'witnesses': []}   |
| get_config                                 | {} | {}    |
| get_current_price_feed                     | {}     | {'base': ['0', 3, '@@000000021'], 'quote': ['0', 3, '@@000000021']}   |

### database_api.get_dynamic_global_properties              

|  args | return |
|  --- | --- |
| {}   | {'id': 0, 'head_block_number': 0, 'head_block_id': '0000000000000000000000000000000000000000', 'time': '1970-01-01T00:00:00', 'current_witness': '', 'total_pow': '18446744073709551615', 'num_pow_witnesses': 0, 'virtual_supply': ['0', 3, '@@000000021'], 'current_supply': ['0', 3, '@@000000021'], 'confidential_supply': ['0', 3, '@@000000021'], 'current_sbd_supply': ['0', 3, '@@000000013'], 'confidential_sbd_supply': ['0', 3, '@@000000013'], 'total_vesting_fund_steem': ['0', 3, '@@000000021'], 'total_vesting_shares': ['0', 6, '@@000000037'], 'total_reward_fund_steem': ['0', 3, '@@000000021'], 'total_reward_shares2': '0', 'pending_rewarded_vesting_shares': ['0', 6, '@@000000037'], 'pending_rewarded_vesting_steem': ['0', 3, '@@000000021'], 'sbd_interest_rate': 0, 'sbd_print_rate': 10000, 'maximum_block_size': 0, 'current_aslot': 0, 'recent_slots_filled': '0', 'participation_count': 0, 'last_irreversible_block_num': 0, 'vote_power_reserve_rate': 40}  |

### database_api.get_feed_history                           

|  args | return |
|  --- | --- |
| {}  | {'id': 0, 'current_median_history': {'base': ['0', 3, '@@000000021'], 'quote': ['0', 3, '@@000000021']}, 'price_history': []}     |

### database_api.get_hardfork_properties                    

|  args | return |
|  --- | --- |
| {}   | {'id': 0, 'processed_hardforks': [], 'last_hardfork': 0, 'current_hardfork_version': '0.0.0', 'next_hardfork': '0.0.0', 'next_hardfork_time': '1970-01-01T00:00:00'}   |

## database_api

| method | args | return |
| --- | --- | --- |
| get_order_book                             | {'limit': 0}    | {'asks': [], 'bids': []}  |
| get_potential_signatures                   | {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}}  | {'keys': []}  |
| get_required_signatures                    | {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}, 'available_keys': []}   | {'keys': []}    |
| get_reward_funds                           | {}        | {'funds': []}|
| get_transaction_hex                        | {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}}  | {'hex': ''}  |

### database_api.get_witness_schedule          

|  args | return |
|  --- | --- |
|  {}  | {'id': 0, 'current_virtual_time': '0', 'next_shuffle_block_num': 0, 'current_shuffled_witnesses': [], 'num_scheduled_witnesses': 240, 'top19_weight': 189, 'timeshare_weight': 31, 'miner_weight': 3, 'witness_pay_normalization_factor': 0, 'median_props': {'account_creation_fee': ['1', 3, '@@000000021'], 'maximum_block_size': 131072, 'sbd_interest_rate': 1000, 'account_subsidy_limit': 0}, 'majority_version': '0.0.0', 'max_voted_witnesses': 240, 'max_miner_witnesses': 189, 'max_runner_witnesses': 31, 'hardfork_required_witnesses': 3}|

### database_api.list_account_recovery_requests

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_account'}   | {'requests': []}  |
| {'start': None, 'limit': 0, 'order': 'by_expiration'}   | {'requests': []}  |


### database_api.list_accounts

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_name'}  | {'accounts': []}  |
| {'start': None, 'limit': 0, 'order': 'by_proxy'}  | {'accounts': []}  |
| {'start': None, 'limit': 0, 'order': 'by_next_vesting_withdrawal'}  | {'accounts': []}  |

### database_api.list_change_recovery_account_requests 

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_account'} | {'requests': []}  |
| {'start': None, 'limit': 0, 'order': 'by_effective_date'} | {'requests': []}  |

### database_api.list_comments

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_cashout_time'} | {'comments': []}   |
| {'start': None, 'limit': 0, 'order': 'by_permlink'} | {'comments': []}   |
| {'start': None, 'limit': 0, 'order': 'by_root'} | {'comments': []}   |
| {'start': None, 'limit': 0, 'order': 'by_parent'} | {'comments': []}   |
| {'start': None, 'limit': 0, 'order': 'by_last_update'} | {'comments': []}   |
| {'start': None, 'limit': 0, 'order': 'by_author_last_update'} | {'comments': []}   |

### database_api.list_decline_voting_rights_requests

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_account'}   | {'requests': []}  |
| {'start': None, 'limit': 0, 'order': 'by_effective_date'}   | {'requests': []}  |

### database_api.list_escrows

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_from_id'}| {'escrows': []}  |
| {'start': None, 'limit': 0, 'order': 'by_ratification_deadline'}| {'escrows': []}  |

### database_api.list_limit_orders

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_price'} | {'orders': []} |
| {'start': None, 'limit': 0, 'order': 'by_account'} | {'orders': []} |

### database_api.list_owner_histories

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0} | {'owner_auths': []} |

### database_api.list_savings_withdrawals

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_from_id'}| {'withdrawals': []}  |
| {'start': None, 'limit': 0, 'order': 'by_complete_from_id'}| {'withdrawals': []}  |
| {'start': None, 'limit': 0, 'order': 'by_to_complete'}| {'withdrawals': []}  |

### database_api.list_sbd_conversion_requests

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_conversion_date'}  | {'requests': []}  |
| {'start': None, 'limit': 0, 'order': 'by_account'}  | {'requests': []}  |

### database_api.list_vesting_delegation_expirations

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_expiration'}  | {'delegations': []}|
| {'start': None, 'limit': 0, 'order': 'by_account_expiration'}  | {'delegations': []}|

### database_api.list_vesting_delegations 

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_delegation'} | {'delegations': []}|

### database_api.list_votes

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_comment_voter'} | {'votes': []} |
| {'start': None, 'limit': 0, 'order': 'by_voter_comment'} | {'votes': []} |
| {'start': None, 'limit': 0, 'order': 'by_voter_last_update'} | {'votes': []} |
| {'start': None, 'limit': 0, 'order': 'by_comment_weight_voter'} | {'votes': []} |

### database_api.list_withdraw_vesting_routes

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_withdraw_route'}  | {'routes': []}   |
| {'start': None, 'limit': 0, 'order': 'by_destination'}  | {'routes': []}   |

### database_api.list_witness_votes

|  args | return |
|  --- | --- |
|  {'start': None, 'limit': 0, 'order': 'by_account_witness'} | {'votes': []} |
| {'start': None, 'limit': 0, 'order': 'by_witness_account'} | {'votes': []} |

### database_api.list_witnesses

|  args | return |
|  --- | --- |
| {'start': None, 'limit': 0, 'order': 'by_name'}  | {'witnesses': []}  |
| {'start': None, 'limit': 0, 'order': 'by_vote_name'}  | {'witnesses': []}  |
| {'start': None, 'limit': 0, 'order': 'by_schedule_time'}  | {'witnesses': []}  |

### database_api.verify_account_authority

|  args | return |
|  --- | --- |
| {'account': '', 'signers': []}    | {'valid': False}|

### database_api.verify_authority                           

| args |
|  --- | 
|  {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}}  |
| return |
|{'valid': False}  |

### database_api.verify_signatures                          

| args |
| --- | 
| {'hash': '0000000000000000000000000000000000000000000000000000000000000000', 'signatures': [], 'required_owner': [], 'required_active': [], 'required_posting': [], 'required_other': []}   |
|  return |
 |{'valid': False} |

## follow_api

| method | args | return |
| --- | --- | --- |
| get_account_reputations                      | {'account_lower_bound': '', 'limit': 1000} | {'reputations': []}   |
| get_blog                                     | {'account': '', 'start_entry_id': 0, 'limit': 500} | {'blog': []} |
| get_blog_authors                             | {'blog_account': ''} | {'blog_authors': []}|
| get_blog_entries                             | {'account': '', 'start_entry_id': 0, 'limit': 500}| {'blog': []}|
| get_feed                                     | {'account': '', 'start_entry_id': 0, 'limit': 500} | {'feed': []} |
| get_feed_entries                             | {'account': '', 'start_entry_id': 0, 'limit': 500}  | {'feed': []} |
| get_follow_count                             | {'account': ''} | {'account': '', 'follower_count': 0, 'following_count': 0} |
| get_followers                                | {'account': '', 'start': '', 'type': 'undefined', 'limit': 1000}  | {'followers': []}|
| get_following                                | {'account': '', 'start': '', 'type': 'undefined', 'limit': 1000} | {'following': []} |
| get_reblogged_by                             | {'author': '', 'permlink': ''} | {'accounts': []} |

## jsonrpc

| method | args | return |
| --- | --- | --- |
| get_methods                                     | {}  | [] |
| get_signature                                   | {'method': ''} | {'args': None, 'ret': None} |

## market_history_api

| method | args | return |
| --- | --- | --- |
| get_market_history                   | {'bucket_seconds': 0, 'start': '1970-01-01T00:00:00', 'end': '1970-01-01T00:00:00'} | {'buckets': []}  |
| get_market_history_buckets           | {}  | {'bucket_sizes': []} |
| get_order_book                       | {'limit': 500} | {'bids': [], 'asks': []}  |
| get_recent_trades                    | {'limit': 1000} | {'trades': []}   |

### market_history_api.get_ticker                           

| args |
| --- |
| {}    |
| return |
| {'latest': '0.00000000000000000', 'lowest_ask': '0.00000000000000000', 'highest_bid': '0.00000000000000000', 'percent_change': '0.00000000000000000', 'steem_volume': ['0', 3, '@@000000021'], 'sbd_volume': ['0', 3, '@@000000013']}   |

## market_history_api

| method | args | return |
| --- | --- | --- |
| get_trade_history                    | {'start': '1970-01-01T00:00:00', 'end': '1970-01-01T00:00:00', 'limit': 1000}   | {'trades': []}    |
| get_volume                           | {} | {'steem_volume': ['0', 3, '@@000000021'], 'sbd_volume': ['0', 3, '@@000000013']}  |

## network_broadcast_api

### network_broadcast_api.broadcast_block                   

| args |
| --- |
| {'block': {'previous': '0000000000000000000000000000000000000000', 'timestamp': '1970-01-01T00:00:00', 'witness': '', 'transaction_merkle_root': '0000000000000000000000000000000000000000', 'extensions': [], 'witness_signature': '000000000000000000000 000000000000000000000000000000 00000000000000000000000000000000 00000000000000000000000000000000000000000000000', 'transactions': []}} |
| return| 
|{} |

### network_broadcast_api.broadcast_transaction

|  args | 
| --- | 
| {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}, 'max_block_age': -1} | 
|  return| 
|{} |

### network_broadcast_api.broadcast_transaction_synchronous

| args | 
|  --- | 
| {'trx': {'ref_block_num': 0, 'ref_block_prefix': 0, 'expiration': '1970-01-01T00:00:00', 'operations': [], 'extensions': [], 'signatures': []}, 'max_block_age': -1}           |
| return|                                                                                                                                                                                            
|  {'id': '0000000000000000000000000000000000000000', 'block_num': 0, 'trx_num': 0, 'expired': False} |

## tags_api

| method | args | return |
| --- | --- | --- |
|get_active_votes                               | {'author': '', 'permlink': ''}  | {'votes': []} |
| get_comment_discussions_by_payout              | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0} | {'discussions': []} |
| get_content_replies                            | {'author': '', 'permlink': ''} | {'discussions': []}   |

## tags_api.get_discussion      

| args |
| --- |
| {'author': '', 'permlink': ''}   |
| return | 
| {'id': 0, 'author': '', 'permlink': '', 'category': '', 'parent_author': '', 'parent_permlink': '', 'title': '', 'body': '', 'json_metadata': '', 'last_update': '1970-01-01T00:00:00', 'created': '1970-01-01T00:00:00', 'active': '1970-01-01T00:00:00', 'last_payout': '1970-01-01T00:00:00', 'depth': 0, 'children': 0, 'net_rshares': 0, 'abs_rshares': 0, 'vote_rshares': 0, 'children_abs_rshares': 0, 'cashout_time': '1970-01-01T00:00:00', 'max_cashout_time': '1970-01-01T00:00:00', 'total_vote_weight': 0, 'reward_weight': 0, 'total_payout_value': ['0', 3, '@@000000021'], 'curator_payout_value': ['0', 3, '@@000000021'], 'author_rewards': 0, 'net_votes': 0, 'root_author': '', 'root_permlink': '', 'max_accepted_payout': ['0', 3, '@@000000021'], 'percent_steem_dollars': 0, 'allow_replies': False, 'allow_votes': False, 'allow_curation_rewards': False, 'beneficiaries': [], 'url': '', 'root_title': '', 'pending_payout_value': ['0', 3, '@@000000021'], 'total_pending_payout_value': ['0', 3, '@@000000021'], 'active_votes': [], 'replies': [], 'author_reputation': 0, 'promoted': ['0', 3, '@@000000013'], 'body_length': 0, 'reblogged_by': []} |

## tags_api

| method | args | return |
| --- | --- | --- |
| get_discussions_by_active                      | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}       |

## tags_api.get_discussions_by_author_before_date          

| args |
| --- | 
| {'author': '', 'start_permlink': '', 'before_date': '1970-01-01T00:00:00', 'limit': 100}    |
 | return |
| {'discussions': []}  |

## tags_api

| method | args | return |
| --- | --- | --- |
| get_discussions_by_blog                        | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}  | {'discussions': []}    |
| get_discussions_by_cashout                     | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}  | {'discussions': []}   |
| get_discussions_by_children                    | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}    |
| get_discussions_by_comments                    | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}    |
| get_discussions_by_created                     | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}|
| get_discussions_by_feed                        | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0} | {'discussions': []}   |
| get_discussions_by_hot                         | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}  |
| get_discussions_by_promoted                    | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}   | {'discussions': []}   |
| get_discussions_by_trending                    | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}  | {'discussions': []}  |
| get_discussions_by_votes                       | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0} | {'discussions': []}  |
| get_post_discussions_by_payout                 | {'tag': '', 'limit': 0, 'filter_tags': [], 'select_authors': [], 'select_tags': [], 'truncate_body': 0}  | {'discussions': []}   |
| get_replies_by_last_update                     | {'start_parent_author': '', 'start_permlink': '', 'limit': 100}  | {'discussions': []}   |
| get_tags_used_by_author                        | {'author': ''} | {'tags': []}|
| get_trending_tags                              | {'start_tag': '', 'limit': 100} | {'tags': []}  |

## witness_api

| method | args | return |
| --- | --- | --- |
| get_account_bandwidth                       | {'account': '', 'type': 'post'}| {}  |
| get_reserve_ratio                           | {} | {'id': 0, 'average_block_size': 0, 'current_reserve_ratio': 1, 'max_virtual_bandwidth': '0'}   |

- - -

This page is synchronized from the post: ['API methods list for AppBase'](https://steemit.com/@holger80/api-methods-list-for-appbase)
