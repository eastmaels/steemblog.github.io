
---
title: 'API endpoints for snax.one and registering for snax.one'
permlink: api-endpoints-for-snax-one-and-registering-for-snax-one
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-15 09:08:48
categories:
- free-snaxaccount
tags:
- free-snaxaccount
- snax
- api
- steemdev
- snaxbountyprogram
thumbnail: 'https://cdn.steemitimages.com/DQmNbLoxhZsXpGirb3ipAYkjYXoTC5sFiSZCz7UuSw6WMKR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


You might have seen some snax.one registration posts on steem lately. At the moment, 78 steem account have been registered ([source](https://explorer.snax.one/) :
![](https://cdn.steemitimages.com/DQmNbLoxhZsXpGirb3ipAYkjYXoTC5sFiSZCz7UuSw6WMKR/image.png)

It seems that snax.one does not know that steem is not steemit. The internal platform codename for steem is `p.steemit`.

## User ID and snax username
You need your snax username and the platform ID for receiving more information using the snax API.

Both can be received from the snax blockchain raw data. When registering on a platform, an addaccount operation is broadcasted. In this operation, a platform  (in our case it is `p.steemit`), a steem account, a snax account, a platform user id and the verification post. 
```
act:Object 
{"account":"p.steemit",
"name":"addaccount",
"authorization":
[{"actor":"p.steemit","permission":"active"}],
"data":["creator":"p.steemit",
"account":"bobokyaw",
"id":306643,
"account_name":"bobokyaw",
"verification_post":74786076,
"verification_salt":"d8ea45790b9b2df8c20dd937e00a9c1c",
"stat_diff":[]},"hex_data":"0000c84e2a9531a8000000dc78480f3dd3ad04000000000008626f626f6b7961771c2575040000000020643865613435373930623962326466386332306464393337653030613963316300"}
```
In this case, the steem-account and snax-account is boboyaw and the steem user ID is 306643.

This transaction can be found by going through all transactions id provided by the v1/history/get_actions call from the p.steemit account.

## snax.one API
There is already an API, you can use to find out more about single transactions or blockchain parameter. The API is on [github](https://github.com/SnaxFoundation/es-history-api), but not fully documented. I found some API calls that were not yet documented.

The API endpoint URL is https://cdn.snax.one/.

## history API calls - Account related calls
These calls can be used to receive transaction details from a single account.

### v1/history/get_actions
This API needs `{"account_name": "bobokyaw", "pos": -1, "offset": -20}`

```
 curl -X POST -H "Content-Type: application/json" --data '{"account_name": "bobokyaw", "pos": -1, "offset": -20}' https://cdn.snax.one/v1/history/get_actions
```
and returns an  array of actions of a given account

## v1/history/get_transaction
This call needs an transaction id `{"id": "8c5a1fe143c5fbd202ec3620eb4ec3b6248938308779a35e65ee2de82496e49f"}`
```
curl -X POST -H "Content-Type: application/json" --data '{"id": "8c5a1fe143c5fbd202ec3620eb4ec3b6248938308779a35e65ee2de82496e49f"}' https://cdn.snax.one/v1/history/get_transaction
```
and returns content of the transaction.

### v1/history/get_key_accounts
This call returns an account name for a given public key, the call needs:
`{"public_key": "SNAX83XFetwYpt7aqxKoKxV3AAP6cuTP3FcyvYh9o5bkkWXtEB73gi"}`:

```
curl -X POST -H "Content-Type: application/json" --data '{"public_key": "SNAX83XFetwYpt7aqxKoKxV3AAP6cuTP3FcyvYh9o5bkkWXtEB73gi"}' https://cdn.snax.one/v1/history/get_key_accounts
```

### /v1/history/get_transfers_by_account
This call returns all transfers for the account. The call needs: `{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}`
```
 curl -X POST -H "Content-Type: application/json" --data '{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}' https://cdn.snax.one/v1/history/get_transfers_by_account
```

### /v1/history/get_platform_transfers_by_account
This call returns all transfers for the account on the given platform. The call needs: `{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}`
```
 curl -X POST -H "Content-Type: application/json" --data '{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}' https://cdn.snax.one/v1/history/get_platform_transfers_by_account
```

### /v1/history/get_rewards_by_account
This call returns the received rewards for the account on the given platform. The call needs: `{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}`
```
 curl -X POST -H "Content-Type: application/json" --data '{"account_name": "bobokyaw", "platform": { "p.steemit": {"id": "306643"} }, "pos": -1, "offset": -20}' https://cdn.snax.one/v1/history/get_rewards_by_account
```

### /v1/history/get_controlled_accounts
This call returns the controlling accounts for a given one. The call needs `{"controlling_account": "bobokyaw"}`
```
 curl -X POST -H "Content-Type: application/json" --data '{"controlling_account": "bobokyaw"}' https://cdn.snax.one/v1/history/get_controlled_accounts
```

## Chain related calls
### v1/chain/get_account
This API needs `{"account_name": "bobokyaw"}` and returns account information
```
 curl -X POST -H "Content-Type: application/json" --data '{"account_name": "bobokyaw"}' https://cdn.snax.one/v1/chain/get_account
```

### v1/chain/get_block
This call needs a block number and returns the block raw data. json input is `{"block_num_or_id": 5934124}`.
```
curl -X POST -H "Content-Type: application/json" --data '{"block_num_or_id": 5934124}' https://cdn.snax.one/v1/chain/get_block
```

### v1/chain/get_info
This call needs no input and returns some information about the snax blockchain
```
curl -X POST -H "Content-Type: application/json"  https://cdn.snax.one/v1/chain/get_info
```

### v1/chain/get_table_rows
This call returns information about a specific platform. The json input is `{"json":true,"code":"p.steemit","scope":"p.steemit","table":"state","table_key":"","lower_bound":"","upper_bound":"","index_position":1,"key_type":"","limit":1`
```
curl -X POST -H "Content-Type: application/json" --data '{"json":true,"code":"p.steemit","scope":"p.steemit","table":"state","table_key":"","lower_bound":"","upper_bound":"","index_position":1,"key_type":"","limit":1}' https://cdn.snax.one/v1/chain/get_table_rows
```

### v1/chain/get_currency_balance
This call returns the supply. The input json is `{"code":"snax.token","account":"p.steemit","symbol":"SNAX"}`. 
`account` can be:
* `snax`
* `p.twitter`
* `snax.creator`
* `snax.airdrop`
*  `p.steemit`
```
 curl -X POST -H "Content-Type: application/json" --data '{"code":"snax.token","account":"p.steemit","symbol":"SNAX"}' https://cdn.snax.one/v1/chain/get_currency_balance
```


## Register on snax
When creating a new account, I was asked to publish a post on steem with the following content:

![](https://cdn.steemitimages.com/DQmRbqrZxEr8ysVHYpJ7cHMnLEGL9MffwzE8AR8LmcSrdg3/image.png)

You have to post this  on steem and have clicked on the Authenificate with Steem:

![](https://cdn.steemitimages.com/DQmWdryoVeuXdzVqo749sDZt6dkSfkac6Dn1aFhvuT16Les/image.png)
____

Edit:
The post must not contain any other text then the shown one. I will start over and create a new empty post for registering on stax.

- - -

This page is synchronized from the post: ['API endpoints for snax.one and registering for snax.one'](https://steemit.com/@holger80/api-endpoints-for-snax-one-and-registering-for-snax-one)
