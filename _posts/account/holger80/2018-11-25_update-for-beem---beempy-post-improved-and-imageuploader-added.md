
---
title: 'update for beem - beempy post improved and imageuploader added'
permlink: update-for-beem---beempy-post-improved-and-imageuploader-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-25 21:35:27
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- steemtank
- python
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/beem<center>
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 506 unit tests and a coverage of 72 %. The current version is 0.20.13.
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

### New Features

### `beempy post` improved

Utility functions `derive_beneficiaries`, `derive_tags` and `seperate_yaml_dict_from_body` are added to utils.py and unit tests are added for each function. The yaml dection was improved, it is now possible to use `---` everywhere in the document. `derive_tags`detects now tags correctly:

* a,b

* a, b

* a b

  are detected as `tags = ['a', 'b'].`

  The yaml-parameter  `percent-steem-dollars` and `max-accepted-payout` were added.

  100 SP payout is:

  ```
  percent-steem-dollars: 0
  ```

  50/50 payout is:

  ```
  percent-steem-dollars: 10000
  ```


### Too Many Requests error handled in graphenerpc

This server error lead before to a unhandled rpc exception (The problem occurred in whaleshares). With the changes, the error is now handled and the failed rpc call is automatically retried.

### `beempy uploadimage`added

It is now possible to upload images with Â´beempyÂ´ to steemitimages.

```
 beempy uploadimage -a holger80 -n beem-logo beem.png
```

When successfully uploaded, a markdown code for embedding the image is returned:

```
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
```

`-n` specify a image name (optional) and `-a`specify the account name which is used for uploading. An account must be specified and the posting key of this account must be available in the wallet.

### Issue #125 fixed

The prefix of the pubkey is now checked. It is now possible to store different keys from different chains  for the same account in the wallet. `beempy listaccounts` and `beempy listkeys` returns only the keys and accounts for the current chain, which is set by `beempy set nodes`  . The default chain is steem.

### VotedBeforeWaitTimeReached exception added

When voting twice within 3 seconds, an error with `Can only vote once every 3 seconds is returned.`

This raises now to an exception VotedBeforeWaitTimeReached.



### Commit history

#### Add uploadimage to beempy

* [commit 96e98c3](https://github.com/holgern/beem/commit/96e98c3a9c795183f587612ace1a3b481735fe68))

#### VotedBeforeWaitTimeReached exception added for "Can only vote once every 3 seconds"
* [commit 9c7594e](https://github.com/holgern/beem/commit/9c7594ef3bf0b6d64e4da3c4667146bbd5df9157)
#### Fix issue #126
* [commit e92cdf4](https://github.com/holgern/beem/commit/e92cdf464b6562b2f4924d280cbb01a0aede3b3e)
#### Improved key handling fixes issue #125 
* [commit 355042e](https://github.com/holgern/beem/commit/355042e568191df3fbfa956b840ea1a10b9b66b6)
* prefix is checked in getPublicKeys
#### derive_beneficiaries, derive_tags and seperate_yaml_dict_from_body added to utils
* [commit 5b17c5e](https://github.com/holgern/beem/commit/5b17c5e49b32671b2d1077803ece671a54f8dee4)
* unit tests added for all new functions
#### Fix claimaccount and improve post commands for beempy
* [commit d2cefde](https://github.com/holgern/beem/commit/d2cefdeae3e776be746962894cd8d63bc5d7324a)
#### Release 0.20.12
* [commit 49a8db8](https://github.com/holgern/beem/commit/49a8db878bff1a503b2e9acc9cd38f337efe9ba5)
* pep8 formating improved
* Too Many Requests error handled
* different limit handling in WLS fixed for account history
* percent-steem-dollars and max-accepted-payout added to beempy post
### Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - beempy post improved and imageuploader added'](https://steemit.com/@holger80/update-for-beem---beempy-post-improved-and-imageuploader-added)
