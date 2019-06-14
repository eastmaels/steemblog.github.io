
---
title: 'Account names in follow operation are not checked by design'
permlink: account-names-in-follow-operation-are-not-checked-by-design
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-27 21:11:12
categories:
- steemdev
tags:
- steemdev
- steemit
- follow
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmcCX6yJTkdyd8k9JDRvDHVmusZAoE8eouTpUKeWdpm7aZ'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I was asking me, what will be the output of the following script

```
from beem import Steem
from beem.account import Account

if __name__ == "__main__":
    stm = Steem(keys=["5BEEMBOTPOSTINGKEY"])
    account = Account("beembot", steem_instance=stm)
    
    account.follow("holger80\u0020")
    account.follow("holger80+")
    account.follow("holger80_that_is_great")
   
   print(account.get_following())
```
The output is
```
['holger80 ', 'holger80+', 'holger80_that_is']
```

Is holger80 now followed by beembot?
```
account2 = Account("holger80", steem_instance=stm)
"beembot" in account2.get_followers()
False
```
No beembot does not follow holger80, but three non existing accounts.
```
account.follow("holger80")
```
Now beembot follows holger80
```
"beembot" in account2.get_followers()
True
```

```
for h in account.history_reverse(only_ops=["custom_json"]): print(h)
{'required_auths': [], 'required_posting_auths': ['beembot'], 'id': 'follow', 'json': '["follow", {"follower": "beembot", "following": "holger80", "what": ["blog"]}]', 'trx_id': 'daa6ee4a808d37fc0348cee11ada95b6d558d2d2', 'block': 24537865, 'trx_in_block': 34, 'op_in_trx': 0, 'virtual_op': 0, 'timestamp': '2018-07-27T08:36:00', 'account': 'beembot', 'type': 'custom_json', '_id': 'b5aeae7e5cd4190d6c3c37d90c156aafeec4142a', 'index': 31}
{'required_auths': [], 'required_posting_auths': ['beembot'], 'id': 'follow', 'json': '["follow", {"follower": "beembot", "following": "holger80_that_is_great", "what": ["blog"]}]', 'trx_id': 'dee2f27051e0ba3090c332d1503ac8cd88e5a1a2', 'block': 24537774, 'trx_in_block': 18, 'op_in_trx': 0, 'virtual_op': 0, 'timestamp': '2018-07-27T08:31:27', 'account': 'beembot', 'type': 'custom_json', '_id': '64e4791010c3039b0e3fc33edcc5abf48ea22fed', 'index': 30}
{'required_auths': [], 'required_posting_auths': ['beembot'], 'id': 'follow', 'json': '["follow", {"follower": "beembot", "following": "holger80+", "what": ["blog"]}]', 'trx_id': '98c0d36c57789924345171f5a058dfa0758ea702', 'block': 24537759, 'trx_in_block': 18, 'op_in_trx': 0, 'virtual_op': 0, 'timestamp': '2018-07-27T08:30:42', 'account': 'beembot', 'type': 'custom_json', '_id': '0f0a637bc89b4c4e88c4c88dac4c92c1076a25ee', 'index': 29}
{'required_auths': [], 'required_posting_auths': ['beembot'], 'id': 'follow', 'json': '["follow", {"follower": "beembot", "following": "holger80 ", "what": ["blog"]}]', 'trx_id': 'cc33218787cc7708d3f43ea9da7d0f1114a63cd5', 'block': 24537735, 'trx_in_block': 54, 'op_in_trx': 0, 'virtual_op': 0, 'timestamp': '2018-07-27T08:29:30', 'account': 'beembot', 'type': 'custom_json', '_id': '4e59c7246f786c1e88180551c097e5a34e7c1846', 'index': 28}
```


![image.png](https://ipfs.busy.org/ipfs/QmcCX6yJTkdyd8k9JDRvDHVmusZAoE8eouTpUKeWdpm7aZ)

![image.png](https://ipfs.busy.org/ipfs/QmQM1W9Bp2JiYk2T4p2u6cLgLSyZMdN6cQE59DFW5VFT8m)


I'm able to unfollow the non-existing accounts:
```
account.unfollow("holger80_that_is_great")
account.get_following()
['holger80', 'holger80 ', 'holger80+']
```
@holger80 is also not working
```
account.unfollow("holger80")
account.follow("@holger80")
account.get_following()
['@holger80', 'holger80 ', 'holger80+']
"beembot" in account2.get_followers()
False
```

I opened a [new issue on github](https://github.com/steemit/steem/issues/2670) but closed it. It seems this is the intended behavior and won't be fixed. So check twice before you broadcast follow operations.

![image.png](https://ipfs.busy.org/ipfs/QmZfTK8CocTnHcZy1iz17xkeBFqV3KqdJihAycUjTdCbJe)



- - -

This page is synchronized from the post: ['Account names in follow operation are not checked by design'](https://steemit.com/@holger80/account-names-in-follow-operation-are-not-checked-by-design)
