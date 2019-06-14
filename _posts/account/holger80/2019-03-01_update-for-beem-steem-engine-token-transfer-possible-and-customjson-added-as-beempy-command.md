
---
title: 'update for beem - steem-engine token transfer possible and customjson added as beempy command'
permlink: update-for-beem-steem-engine-token-transfer-possible-and-customjson-added-as-beempy-command
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-01 14:15:33
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- steem-engine
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### Repository
https://github.com/holgern/beem<center>
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 495 unit tests and a coverage of 70 %. The current version is 0.20.19.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

## New Features

##  Improve derive_permlink and allow replies of comments with permlink lenght > 235
It is now possible to reply to posts or comments which have a permlink longer than 235 characters.
The reply permlink is built in the `derive_permlink` function. The parent_permlink is now limited to 235 chars and the reply permlink is build corrently:
```
        permlink += "re-"
        permlink += parent_permlink[:(max_permlink_length - 20)]
        permlink += "-" + formatTime(timenow.time()) + "z"
```
Before this changes, the reply function could not broadcast a reply when the permlink of the parent was longer than 235 chars.

## Allow broadcasting custom_json with active keys
When the `required_auths` instead of the `required_posting_auths` field is set, the custom_json should be signed by the active key. This is now implemented:
```
        if len(required_auths) > 0:
            return self.finalizeOp(op, account, "active", **kwargs)
        else:
            return self.finalizeOp(op, account, "posting", **kwargs)
```

## The json field of a custom_json op is now compressed (spaces are removed)
All spaces in the json field of a custom_json op are now removed. This decrease the consumption of RC. And fix parsing errors for specific dapps (e.g. steem-token).

## Sending of steem-engine token is working
The implementation of signing a custom_json with active key  and broadcasting the json field compressed, allows it now to send a steem-engine token using beem:
```
from beem import Steem
stm = Steem(keys=["5xx"])
account = "holger80"
data = {"contractName": "tokens", "contractAction":"transfer",  "contractPayload":{"symbol":"DRAGON", "to":"beembot", "quantity":0.01, "memo":"Test"}}
stm.custom_json("ssc-mainnet1", data, required_auths=[account])
```

## beempy customjson
A new command was added to beempy, which allows it to broadcast custom_json ops.
```
Usage: beempy customjson [OPTIONS] JSONID [JSON_DATA]...
  Broadcasts a custom json

  First parameter is the cusom json id, the second field is a json file or a
  json key value combination e.g. beempy customjson -a holger80 dw-heist
  username holger80 amount 100

Options:
  -a, --account TEXT  The account which broadcasts the custom_json
  -t, --active        When set, the active key is used for broadcasting
  --help              Show this message and exit.
```
The `customjson` commands allows it to send easily all different kind of custom_jsons.
The first parameter `JSONID ` is the custom json id, for a follow, it is for example `follow`.  
The second parameter `JSON_DATA` can be either a json file or a combination of json key/value fields.

For not so complicated json_data fields, the keys and values can be given as parameters:
For example for a custom_json with an id = `dw-heist` and a simple json field = `{ "username": "holger80", "amount": "100"}`, it can directly entered by removing all `{`, `}`, `,`, `"`, and `:`:
```
beempy customjson -a holger80 dw-heist username holger80 amount 100
```
Giving the json field as key value sequence is only possible when all fields are strings.
This command is equivalent to the following command which reads the json data from a file:
```
beempy customjson -a holger80 dw-heist  dw_heist.json
```
with `dw_heist.json`:
```
{
    "username": "holger80",
    "amount": "100"
}
```
### Results:
![image.png](https://ipfs.busy.org/ipfs/QmTokj6x1Rej5YKZ2Lgc4dcc1PGyvsocV8D3U2KBcyuV3Z)


### Sending a steem-engine token:
For more complicated cases, where the values inside the custom_json consisting of lists or dicts, it should given to the beempy command through a json file:
```
beempy customjson -a holger80 --active ssc-mainnet1 send_token.json
```
with the json file: ` send_token.json`:
```
{
    "contractName": "tokens",
    "contractAction":"transfer",
    "contractPayload":{
        "symbol":"DRAGON",
        "to":"beembot",
        "quantity":0.01,
        "memo":"Test"
    }
}
```

### Results
![image.png](https://ipfs.busy.org/ipfs/QmXtHtBUnVxocwX9vmd7Ap2LiYDEU3W4jLiaPQhBvKG9sG)
It worked and the balance has changed:
![image.png](https://ipfs.busy.org/ipfs/QmZrynqeiQtVv37YT5MVWmvt5Srq8XWTBfr5BQKiQEz6B6)


## Commits
### Add new beempy command customjson
* [commit ec75681](https://github.com/holgern/beem/commit/ec75681169a4c26a4264df092305e79b26eb2b17)
* with beempy customjson sending of custom_json operation is easily possible
* Changelog adapted to 0.20.19
### Broadcast custom_json with active authority
* [commit 360f3e7](https://github.com/holgern/beem/commit/360f3e7736e44711b1a2aa8f300919e8e38bff8a)
* custom_json with required_auths are now broadcasted with active key
* json field in custom_json is broadcasted compact (spaces are removed)

### Improve derive_permlink and allow replies of comments with permlink lenght > 235
* [commit ba294ec](https://github.com/holgern/beem/commit/ba294ec1e90619b0f78e560b8b8f4b06974ced0f)
* derive_permlink was improved so that replys to posts/comments with a permlink length of more than 235 characters is possible
* unit tests added

## Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - steem-engine token transfer possible and customjson added as beempy command'](https://steemit.com/@holger80/update-for-beem-steem-engine-token-transfer-possible-and-customjson-added-as-beempy-command)
