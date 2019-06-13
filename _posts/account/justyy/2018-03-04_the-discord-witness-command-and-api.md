
---
title: 'The Discord Witness Command  and API'
permlink: the-discord-witness-command-and-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-04 10:55:06
categories:
- steemtools
tags:
- steemtools
- steemapps
- witness
- programming
- busy
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520160589/itbcdzx92goroqb9argo.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Discord `steemit` Bot now can query the [witness](https://helloacm.com/the-discord-witness-command-and-api/), using the command `w` for example,

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520160589/itbcdzx92goroqb9argo.png)

Invite the `steemit` robot to your discord server via the following URL (enter ? or help to view other commands):

https://discordapp.com/oauth2/authorize?client_id=418196534660694037&permissions=522304&scope=bot

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520160647/jms8ot1oxn5t5alxxr2g.png)

## Witness API
Example, you can pass more than 1 witness account ID separated by comma,

```
https://helloacm.com/api/steemit/witness/?id=justyy,abit,bobdos,skenan,ety001
```

JSON array is returned containing each witness account (if given account ID is not witness, it will not be in the returned result set).

```
[{"account_creation_fee": 0.1, "last_sbd_exchange_update": "2018-03-04 10:18:00", "signing_key": "STM7RNZS2DXtTHm5Msv1TRLuRRPH1ioCfuq13562nemQWGPU6ydPc", "running_version": "0.19.2", "sbd_exchange_rate_quote_symbol": "STEEM", "hardfork_time_vote": "2017-06-20 15:00:00", "votes_count": 3433, "sbd_interest_rate": 0, "name": "abit", "sbd_exchange_rate_base": 3.48, "sbd_exchange_rate_quote": 0.08, "votes": 33234291249155141, "maximum_block_size": 65536, "sbd_exchange_rate_base_symbol": "SBD", "created": "1970-01-01 00:00:00", "last_confirmed_block_num": 20377601, "total_missed": 187, "hardfork_version_vote": "0.19.0", "account_creation_fee_symbol": "STEEM", "url": "https://steemit.com/witness-category/@abit/abit-witness-post", "last_aslot": 20441022}, {"account_creation_fee": 0.1, "last_sbd_exchange_update": "1970-01-01 00:00:00", "signing_key": "STM5MBbggmtnuYfVxvVxa8B5Vh19Xs1TJJEeFH9zzbUeZgXweiTCA", "running_version": "0.19.2", "sbd_exchange_rate_quote_symbol": "STEEM", "hardfork_time_vote": "2016-03-24 16:00:00", "votes_count": 59, "sbd_interest_rate": 0, "name": "bobdos", "sbd_exchange_rate_base": 0.0, "sbd_exchange_rate_quote": 0.0, "votes": 215727909611413, "maximum_block_size": 65536, "sbd_exchange_rate_base_symbol": "STEEM", "created": "2018-02-24 23:04:51", "last_confirmed_block_num": 20361918, "total_missed": 0, "hardfork_version_vote": "0.0.0", "account_creation_fee_symbol": "STEEM", "url": "https://steemit.com/@bobdos", "last_aslot": 20425333}, {"account_creation_fee": 0.1, "last_sbd_exchange_update": "2018-03-04 08:25:45", "signing_key": "STM7cKkyBCxTRkdxoGSP5ypagNeaVYeR7oWcBsNfKurXg5jnAtNqm", "running_version": "0.19.2", "sbd_exchange_rate_quote_symbol": "STEEM", "hardfork_time_vote": "2016-03-24 16:00:00", "votes_count": 44, "sbd_interest_rate": 0, "name": "ety001", "sbd_exchange_rate_base": 3.5, "sbd_exchange_rate_quote": 1.0, "votes": 312977200665086, "maximum_block_size": 65536, "sbd_exchange_rate_base_symbol": "SBD", "created": "2018-01-19 07:38:54", "last_confirmed_block_num": 20286437, "total_missed": 0, "hardfork_version_vote": "0.0.0", "account_creation_fee_symbol": "STEEM", "url": "https://steemit.com/witness-category/@ety001/to-be-a-witness-i-need-your-vote", "last_aslot": 20349815}, {"account_creation_fee": 0.2, "last_sbd_exchange_update": "2018-03-04 07:43:39", "signing_key": "STM74CtVWtymPb3F3QQUZKKT8oKmfsmg6r9Fj75jLC4L5xnnTk1Sw", "running_version": "0.0.0", "sbd_exchange_rate_quote_symbol": "STEEM", "hardfork_time_vote": "2016-03-24 16:00:00", "votes_count": 93, "sbd_interest_rate": 0, "name": "justyy", "sbd_exchange_rate_base": 3.45, "sbd_exchange_rate_quote": 1.0, "votes": 552265978180366, "maximum_block_size": 65536, "sbd_exchange_rate_base_symbol": "SBD", "created": "2018-02-25 22:17:18", "last_confirmed_block_num": 0, "total_missed": 2, "hardfork_version_vote": "0.0.0", "account_creation_fee_symbol": "STEEM", "url": "https://steemit.com/witness-category/@justyy/justyy-just-another-witness", "last_aslot": 0}, {"account_creation_fee": 0.1, "last_sbd_exchange_update": "2018-03-04 09:16:00", "signing_key": "STM6qBQzkXcoT8yh1WybBmkyMdpGB5ScTkmCPz5XcRezWSxuZuKYR", "running_version": "0.19.2", "sbd_exchange_rate_quote_symbol": "STEEM", "hardfork_time_vote": "2016-03-24 16:00:00", "votes_count": 106, "sbd_interest_rate": 0, "name": "skenan", "sbd_exchange_rate_base": 3.48, "sbd_exchange_rate_quote": 1.0, "votes": 2253378471835157, "maximum_block_size": 65536, "sbd_exchange_rate_base_symbol": "SBD", "created": "2017-10-12 02:51:15", "last_confirmed_block_num": 20370210, "total_missed": 6, "hardfork_version_vote": "0.0.0", "account_creation_fee_symbol": "STEEM", "url": "https://steemit.com/witness-category/@skenan/skenan-witness-application-let-s-bring-more-chinese-people-to-steemit-skenan", "last_aslot": 20433626}]
```

<BR/>
This feature has also been integrated in the wechat channel *justyyuk*
![](https://steemitimages.com/DQmTYBxq59yKEBMNs6Wn8Qq1P1E4dC8ME6UvrA9pod1u4bt/image.png)

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by voting for me [here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)

### Some of My Contributions: [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [The Discord Witness Command  and API](https://steemit.com/@justyy/the-discord-witness-command-and-api)
