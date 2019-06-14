
---
title: 'Update for Steem Basic Income Automation - improved account history storage and sbi status command added'
permlink: update-for-steem-basic-income-automation-improved-account-history-storage-and-sbi-status-command-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-22 23:27:00
categories:
- utopian-io
tags:
- utopian-io
- development
- steembasicincome
- steemdev
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png)
## Repository
https://github.com/holgern/steembasicincome

## Bug fixes
I found out that the account history index is not reliable ([post](https://steemit.com/steemdev/@holger80/by-carefull-with-account-history-index-it-is-not-reliable)), so I had to change the database structure. I changed it from using the account index as a primary index to a combined index using block number, trx number, op in trx number and virtual operation count.

The following example code shows how it works:
```
        start_block = 1000
        trx_in_block = 0
        op_in_trx  = 0
        virtual_op = 0

        last_block = 0
        last_trx = 0
        for op in account.history(start=start_block - 3, use_block_num=True):
            if op["block"] < start_block:
                last_block = op["block"]
                continue
            elif op["block"] == start_block:
                if op["virtual_op"] == 0:
                    if op["trx_in_block"] < trx_in_block:
                        last_trx = op["trx_in_block"]
                        continue
                    if op["op_in_trx"] <= op_in_trx and (trx_in_block != last_trx):
                        continue
                else:
                    if op["virtual_op"] <= virtual_op and (trx_in_block == last_trx):
                        continue
            start_block = op["block"]
            virtual_op = op["virtual_op"]
            trx_in_block = op["trx_in_block"]

            if trx_in_block != last_trx or op["block"] != last_block:
                op_in_trx = op["op_in_trx"]
            else:
                op_in_trx += 1
            if virtual_op > 0:
                op_in_trx = 0
                if trx_in_block > 255:
                    trx_in_block = 0

            # do something with the op dict

            start_index += 1
            last_block = op["block"]
            last_trx = trx_in_block
```
The code uses now `history` with `use_block_num=True`. Instead of an unreliable index, the block number is used. As  a block has more than one transaction, it is also checked that:
* virtual_op is higher than the last op when it is a virtual operation (only inside the same block)
* trx_in_block is higher and also op_in_trx  is increased for non-virtual operations (only inside the same block)

I found that the op_in_trx value in the dictionary is not always reliable, so I increased it by myself.

I adapt the database structure so that `virtual_op`,`block`,`trx_in_block`,`op_in_trx` are the primary keys.


## New features
I added a way for user to receive information about their sbi unit state. As already all posts and comments are obtained in `sbi_stream_post_comment.py`, I additionally scan the comments body for `!sbi status`. When a sbi unit holder wrote a comment, containing this text, a sbi account will reply with some information regarding this user.
The sbi units are returned and the rshares balance. The next upvote is estimated and also returned.

![image.png](https://ipfs.busy.org/ipfs/QmaWueSnc67u7YpNKuqytztEBgr4MPLSbWpiwsGhkVreAS)



In this case, the next upvote value would be below the upvote threshold and the sbi user has to wait until his rshares balance is above the upvote threshold

![image.png](https://ipfs.busy.org/ipfs/QmbjfwNcDhXwjwEYAkhpizGwXK9kUKDnYm6soZVokJed9E)

## Commits
### Several improvements
* [commit 8e98c97](https://github.com/holgern/steembasicincome/commit/8e98c97a2981075cea552bff07737decc54ce9fc)
* Execution time is measured
* Store account history ops based on block, trx_num, op_num and virtual_op_num

### Change table structure
* [commit cc7faae](https://github.com/holgern/steembasicincome/commit/cc7faae4e64636cdd9330858488b81b002c8d04f)


### Clean up code and remove old steembasicincome_ops database (replaced by sbi_ops)
* [commit 227c625](https://github.com/holgern/steembasicincome/commit/227c6251945f7d19e2839e794e51887477c536b1)

### Remove deprated create_table and exists_table
* [commit 046bfe1](https://github.com/holgern/steembasicincome/commit/046bfe181c9357902299a87bb2935bb7ca86bd75)

#### Remove unused steembasicincome_ops in which account history ops were stored by index
* [commit 13ef090](https://github.com/holgern/steembasicincome/commit/13ef090842d82ca41a2d606b8fa78fadeeea7dd3)

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for Steem Basic Income Automation - improved account history storage and sbi status command added'](https://steemit.com/@holger80/update-for-steem-basic-income-automation-improved-account-history-storage-and-sbi-status-command-added)
