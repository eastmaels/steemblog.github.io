
---
title: 'The Python Function to Retrieve the Producer Reward for Witness'
permlink: the-python-function-to-retrieve-the-producer-reward-for-witness
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-02 19:12:24
categories:
- codeonsteem
tags:
- codeonsteem
- whalepower
- witness-category
- python
- programming
- steem-dev
- witness
- producer-reward
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you know, the witness is rewarded for produce a block. The TOP 20 gets to produce the blocks more frequently than the backup witnesses, but the reward for each block is different: currently 484 VESTS for TOP 20 while around 2425 VESTS for others on the <a href="https://helloacm.com/steemjs-programming-what-happens-on-the-steem-blockchain-in-the-last-24-hours/" title="SteemJs Programming: What Happens on the Steem Blockchain in the Last 24 Hours?">steem blockchain</a>.

How do we get the reward given a block number? Unfortunately, it is not through the `get_block` api. Instead, we need to use `get_ops_in_block` which is provided by `account_plugin_history`

> curl -s --data '{"jsonrpc":"2.0", "method":"condenser_api.get_ops_in_block", "params":[43880000,true], "id":1}' https://api.steemit.com

This returns like:

> {"jsonrpc":"2.0","result":[{"trx_id":"0000000000000000000000000000000000000000","block":43880000,"trx_in_block":4294967295,"op_in_trx":0,"virtual_op":1,"timestamp":"2020-
06-01T17:49:18","op":["producer_reward",{"producer":"hinomaru-jp","vesting_shares":"481.663694 VESTS"}]}],"id":1}

Then, we can wrap it up in a Python function (please note that we need to scan the transactions array and look for the `producer_reward` ops.

```
def getReward(block):
  data={"jsonrpc":"2.0", "method":"condenser_api.get_ops_in_block", "params":[block, True], "id":1}
  result = requests.post(url="https://api.steemit.com", json = data)
  jsonData = result.json()
  for tx in jsonData:
    if tx['op'][0] == 'producer_reward':
      return tx['op'][1]['vesting_shares']
  return None
```

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to Blog](https://helloacm.com/the-python-function-to-retrieve-the-producer-reward-for-witness/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['The Python Function to Retrieve the Producer Reward for Witness'](https://steemit.com/@justyy/the-python-function-to-retrieve-the-producer-reward-for-witness)
