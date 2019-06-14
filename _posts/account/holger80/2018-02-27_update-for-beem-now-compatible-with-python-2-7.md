
---
title: 'Update for beem - now compatible with python 2.7'
permlink: update-for-beem-now-compatible-with-python-2-7
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-27 21:42:30
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- python-steem
- library
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


beem is now the first (as far as I know) python library for steem which supports python 2.7, 3.4, 3.5 and 3.6. By supporting, I mean that 130 unit tests have passed with the specific python version.

## New Features
* beem is now compatible with the official steem-python library. Both can be installed in parallel!
* beem works now also for python 2. Be careful there might be some bugs. Please report!
* Code coverage is 75%
* The newest version 0.19.7 can be installed with   `  pip install beem` 

## Changes
* https://github.com/holgern/beem/commit/7356a5130d529bd7e5eb28767cfd75474511e639
### Account
*  docu improved
* get_feed, get_blog, get_blog_entries added
* get_account_votes added
* fix timezone
### Amount
* export to json and str fixed
### Block
* change_block_number added
### Blockchain
* get_estimated_block_num added
### Comment
* dates and Amounts are now converted
* json_export adapted
* get_reblogged_by added
* delete_comment added
### Storage
* 2 nodes removed from default
### Utils
* timezone information added to formatTimeString
### Unit tests
* more tests added for account, amount, comment, price and transaction
## More Changes
* https://github.com/holgern/beem/commit/3f6cee8cce8d1034d9955185e1e9df3bc96a588a
* The graphenelib was moved into beem, in order to prepare support for python 2.7
* pycryptodome was replaced by pycryptodomex, which allows to install steem-python in parallel.
## Changes to make beem compatible with python 2.7
* https://github.com/holgern/beem/commit/20f306fc7c612531a229c29de85a3d6e432c8db0
* https://github.com/holgern/beem/commit/9e65837c1e14e9fad95b6786fe1852a43abc23a0
* https://github.com/holgern/beem/commit/9c0d7e9a4fe94bef4c113b8ef7f4a8303bebb1d2
* https://github.com/holgern/beem/commit/026ad2837fcc94b9cbebd971b40632d5db7937a5
* https://github.com/holgern/beem/commit/57dec972ecf67397ba57fc1d61c1e6a41d5155f5
* https://github.com/holgern/beem/commit/c1a0949c53d3d5c88ee83f6c2c05818c9eabe5c3
* And all small commits between

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-now-compatible-with-python-2-7">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - now compatible with python 2.7'](https://steemit.com/@holger80/update-for-beem-now-compatible-with-python-2-7)
