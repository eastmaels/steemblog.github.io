
---
title: 'update for beem - discussions, post creation and threaded blocks improved'
permlink: update-for-beem-discussions-post-creation-and-threaded-blocks-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-28 18:20:24
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
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 526 unit tests and a coverage of 76 %. The current version is 0.19.41.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

### Bug Fix for Connections errors with threaded Blockchain.stream() - [#32](https://github.com/holgern/beem/issues/32)
The problem is described [here](https://steemit.com/utopian-io/@stmdev/beem-race-condition-slowing-down-multi-threaded-blockchain-stream).
The problem was that  `b.stream(start=start, stop=stop, threading=True, thread_num=8)` was much slower than the non-threaded version  `b.stream(start=start, stop=stop, threading=False)`.
The problem was the usage of the non thread-safe websocket function`ws.recv()`. The bug could be solved by creating `thread_num-1` steem instances:

``` 
steem_instance = [self.steem]
nodelist = self.steem.rpc.nodes.export_working_nodes()
for i in range(thread_num - 1):
    steem_instance.append(stm.Steem(node=nodelist,
                                    num_retries=self.steem.rpc.num_retries,
                                    num_retries_call=self.steem.rpc.num_retries_call,
                                    timeout=self.steem.rpc.timeout))
```
By using `return int(self['block_id'][:8], base=16)` as block_num reference, wrong numbered blocks could be completely prevented.

By using 8 threads, the duration for fetching 200 blocks could be reduced to 10 seconds.
```
Results:
No Threads with wss duration: 27.43 s 
No Threads with https duration: 140.73 s 
8 Threads with wss duration: 9.67 s 
8 Threads with https duration: 10.60 s
```

## New Features
### Post creation improved
The tag limit was removed, It is now possible to define more than 5 tags.
A new option `parse_body` was added and when set it to `True` (default value is `False`), the body is parsed for mentioned users, included images and links. All found entries will be written into the  `users`, `links` and `image` arrays and will be included into the `json_metadata` structure.

```
from beem import Steem
stm = Steem(keys=["5xxxx..."])
title = "Testing beem"
body = "![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)"
body += "\n You can found the beem library from @holger80 on [github](https://github.com/holgern/beem)."
tags = ["beem", "python", "steemdev", "test", "donotvotethis", "pleasedonotflag"]

stm.post(title, body, author = "beembot", tags=tags, parse_body=True)

```
results in
```
{'expiration': '2018-06-28T15:47:11', 'ref_block_num': 63107, 'ref_block_prefix': 3297716676, 'operations': [['comment', {'parent_author': '', 'parent_permlink': 'beem', 'author': 'beembot', 'permlink': 'testing-beem', 'title': 'Testing beem', 'body': '![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)\n You can found the beem library from @holger80 on [github](https://github.com/holgern/beem).', 'json_metadata': '{"app": "beem/0.19.41", "tags": ["beem", "python", "steemdev", "test", "donotvotethis", "pleasedonotflag"], "users": ["holger80"], "image": ["https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png"], "links": ["https://github.com/holgern/beem"]}'}]], 'extensions': [], 'signatures': ['1f1f10c99dd8c47e8190ee9fbbfd2c15935935501517c04331e1848663607929a23975b5b2fbc586b1ed27ec472519970b9c2717839c8611ca3f3a9e4a43684751']}
```
More than 5 tags are possible as can be seen [here](https://steemit.com/beem/@beembot/testing-beem):
![image.png](https://ipfs.busy.org/ipfs/QmZUF3GJQCX372fwkn9wZsYwKDkcCQCfcVeYAXsiff8oAS)

## Receiving more than 100 Discussions
I added a new Discussions class to beem, which allow fetching of more than 100 posts.
`get_discussions` uses yield for providing the results. As parameter for discussion_type the following values are possible: `trending, author_before_date, payout, post_payout, created, active, cashout, votes, children, hot, feed, blog, comments, promoted, replies, tags`. 
```
from beem.discussions import Query, Discussions
query = Query(limit=51, tag="steemit")
discussions = Discussions()
count = 0
for d in discussions.get_discussions("tags", query, limit=1000):
    print(("%d. " % (count + 1)) + str(d))
    count += 1

```
with the result:
```
1. {'name': '', 'total_payouts': '56441280.045 SBD', 'net_votes': 4283609, 'top_posts': 296216, 'comments': 961106, 'trending': '3995353899'}
2. {'name': 'life', 'total_payouts': '12372405.343 SBD', 'net_votes': 1690935, 'top_posts': 127436, 'comments': 40404, 'trending': '530590415'}

....
1000. {'name': 'music', 'total_payouts': '1498263.485 SBD', 'net_votes': 217679, 'top_posts': 14200, 'comments': 6615, 'trending': '65817815'}

```


## Commit history
### At some checks in block and blockchain.stream
* [commit c9a0865](https://github.com/holgern/beem/commit/c9a08658b99cd6d9e901f63d2c9b128c44e1fbdb)

### Try to improve blocks and streams with threading 
* [commit fe039357](https://github.com/holgern/beem/commit/fe039357cab0b26d8fe3eb2a1d9568724cd66cf2)
* stream_threading_performance example added to evaluate threading
* `switch_to_next_node` added to Steemnoderpc
* 5 tags restriction removed from post()

### Several fixes and improvements 
* [commit 7387a96](https://github.com/holgern/beem/commit/7387a965b99ced8290b98ff34954c89bd0f4f7d3)
Block
* switch to condenser when api call does not work on appbase node
* blocknum property returns Null when block is empty
Blockchain
* check improved in  threading blocks
Discussions
* set_next_node_on_empty_reply set to False
Steemnoderpc
* Request Timeout added
Unit tets
* test_account for appbase nodes improved

### New steem instance for each thread
* [commit fe0bc6d](https://github.com/holgern/beem/commit/fe0bc6d51173d4aa5c83a2773e56c9163875b3a7)
* "Bad or missing upstream response" is handled

### export_working_nodes added to node
* [commit 0c4ac4b](https://github.com/holgern/beem/commit/0c4ac4bdbe4b78ea0f79e79705f9fd0fd549de85)

### Use thread_num - 1 instances for blocks with threading
* [commit a38865](https://github.com/holgern/beem/commit/a38865682b3b92fd33bc8b7aff36d88360c7928c)

### Fix missing repsonses in market and add parse_body to post()
* [commit c677f49](https://github.com/holgern/beem/commit/c677f49407434167078d3c65809fd47602a62cee)

### Discussions improved and Prepare release 0.19.41 
* [commit e316a5e](https://github.com/holgern/beem/commit/e316a5ec82d2cb95a8c0982b3fe13f7651ae2387)
#### Discussions
* Examples added to all classes
* Discussions add for fetching more than 100 posts

### GitHub Account
https://github.com/holgern
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['update for beem - discussions, post creation and threaded blocks improved'](https://steemit.com/@holger80/update-for-beem-discussions-post-creation-and-threaded-blocks-improved)
