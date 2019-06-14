
---
title: 'Task request for beem: bug-hunting'
permlink: task-request-for-beem-bug-hunting
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-04 09:50:39
categories:
- utopian-io
tags:
- utopian-io
- task-bug-hunting
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


### Repository
 https://github.com/holgern/beem
<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)</center>

### About beem
beem is an unofficial python library for steem, which I created from scratch by forking [python-bitshares](https://github.com/bitshares/python-bitshares). The library name is derived from a beam maschine, similar to the analogy between steem and steam. A documentation about beem can be found here: http://beem.readthedocs.io/en/latest/.

I pushed the first commit on the  14 Feb. 2018 to github. Since then, the code base was growing from 5288 lines of python code to 18232 lines of code.
<center>
![image.png](https://ipfs.busy.org/ipfs/QmQzUFJXpTJ3kfcuz8oQE7c7HWcgT1FoPyiuHdL6vYjWD1)
</center>

The current version is 0.19.35 and it contains the following features:

* RPC interface (ttps and websocket) for full API nodes
* Node failure handling
* Support for almost all steem API calls
* JSON-based blockchain objects (accounts, votes, comments, blocks, prices, markets, etc)
* a simple to use yet powerful API
* transaction construction and signing
* appbase ready
* steemconnect v2 integration
* it’s own (bip32-encrypted) wallet for key and token storage
* command line tool beempy

Although the total test coverage is on a good level (78% currently), it is not everything covered. High code coverage does also not mean that the code cannot contain bugs anymore. It shows that the code can run without error and returns the predefined output for certain input data.
<center>
![image.png](https://ipfs.busy.org/ipfs/QmVWxrN9fZBfGnevMVXdZ27DxAqLw8vPu94ofm1ngbe8Sm)
</center>

Manual testing remains very important for beem, due to the high number of code lines and the huge functionality which beem has to offer. So, I'm asking everyone to help me improving beem, by finding bugs in beem.

### Details /  Components
This task request is about finding bugs inside the python library beem. 
This includes all function inside the following python modules:
* beem
* beemapi
* beembase
* beemgraphenebase

The request is not about errors that occurred in installing dependent python libraries (e.g. scrypt). 



### Content of a good bug hunting post
A good bug hunting post must contain the following sections:

#### Expected behavior
Please describe in detail about the expected behavior. "It must return a value", or similar platitudes are not sufficient. After reading this section, it must be clear, what the expected behavior is. This helps me to understand the described error. 

*  Example (not related to beem):
The `int_sum` function should return the sum of two `integer` numbers.

#### Actual behavior
Please describe shortly about the current situation. "It does not work", is not sufficient.

* Example (not related to beem):
When one number is zero, the `int_sum` function returns zero instead of the other non-zero number.

#### How to reproduce
A python script with output, which is able to reproduce the described error, helps a lot in finding the source of the error.
* Example (not related to beem):
```
import int_sum
x = int_sum(0, 1)
print(x)
```
Output:
```
0
```
#### Environment
The used python and beem version is important for repoducing the error (Different behavior for unicode strings on python 2.7 and 3.6, for example).
The beem version can be obtained by `beempy --version`.


### Creating an issue on https://github.com/holgern/beem
After writing a utopian-io post about a bug, a new issue should be created in the beem github repo: https://github.com/holgern/beem/issues/new. This is important for collecting all bug reports in one place and for mention it when fixing it.

#### Deadline
This task request has no deadline, as it will stay open.

#### Communication
For more information please visit the beem discord server: https://discord.gg/4HM592V

#### Github
https://github.com/holgern

- - -

This page is synchronized from the post: ['Task request for beem: bug-hunting'](https://steemit.com/@holger80/task-request-for-beem-bug-hunting)
