
---
title: 'How long does it take to stream the entire steem blockchain?'
permlink: how-long-does-it-take-to-stream-the-entire-steem-blockchain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-26 05:02:09
categories:
- steemdev
tags:
- steemdev
- fullnode
- python
- benchmark
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qmem4xyx72kLoqgMj4Rd4q5352C6poFhBoCy6o9QiKgHKJ'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/Qmem4xyx72kLoqgMj4Rd4q5352C6poFhBoCy6o9QiKgHKJ)
[source](https://pixabay.com/en/blockchain-cryptocurrency-network-3277336/)

I was asking me, how long does it take to stream the entire steem blockchain to my computer? In order to find out, I wrote the following script:

```
from beem.blockchain import Blockchain
from beem.nodelist import NodeList
from beem import Steem
from beem.instance import set_shared_steem_instance
import time

if __name__ == "__main__":
    
    # Update current node list from @fullnodeupdate
    nodes = NodeList()
    
    setup = [{"appbase": True, "https": True, "threading": False, "max_batch_size": 50}, {"appbase": True, "https": False, "threading": False, "max_batch_size": 50},
             {"appbase": False, "https": False, "threading": True, "max_batch_size": None}, {"appbase": False, "https": False, "threading": False, "max_batch_size": None},
             {"appbase": True, "https": False, "threading": True, "max_batch_size": None}, {"appbase": True, "https": False, "threading": False, "max_batch_size": None},
             {"appbase": False, "https": True, "threading": True, "max_batch_size": None}, {"appbase": False, "https": True, "threading": False, "max_batch_size": None},
             {"appbase": True, "https": True, "threading": True, "max_batch_size": None}, {"appbase": True, "https": True, "threading": False, "max_batch_size": None}]
    result_setup_days =[]
    start_block_list = [1000, 10e6, 20e6]
    for s in setup:
        print(s)
        nodes.update_nodes(weights={"hist": 1})
        stm = Steem(node=nodes.get_nodes(appbase=s["appbase"], https=s["https"], wss=not s["https"]))
        set_shared_steem_instance(stm)
    
        b = Blockchain()
        end_block = b.get_current_block_num()
        for start_block in start_block_list:
            print(start_block)
            last_block_num = None
            block_diff = 1000
            result_days = []
            
            print("Starting to stream at block %d." % start_block)
            for op in b.stream(start=int(start_block), max_batch_size=s["max_batch_size"], threading=s["threading"], thread_num=8):
                block_num = op["block_num"]
                if last_block_num is None:
                    start_time = time.time()
                    last_block_num = block_num
        
                if (block_num - last_block_num) > block_diff:
                    time_for_blocks = time.time() - start_time
                    print("\n---------------------\n")
                    running_days = (end_block - 1) * time_for_blocks / block_diff / 60 / 60 / 24
                    print("Duration for %d blocks: %.2f s (%.3f s per block) -- %.2f days to go" % (end_block, time_for_blocks, time_for_blocks / block_diff, running_days))
                    start_time = time.time()
                    last_block_num = block_num
                    result_days.append(running_days)
                    break
        result_setup_days.append(result_days)
```

I'm measuring for each setup three times 1000 blocks and I calculate based on this measurement, how long it would take.

## Setups
1. https with 0.19.10 nodes,  max_batch_size=50
2. wss with 0.19.10 nodes, max_batch_size=50
3.  wss with 0.19.5 nodes, 8 threads
4. wss with 0.19.5 nodes
5. wss with 0.19.10 nodes, 8 threads
6. wss with 0.19.10 nodes
7.  https with 0.19.5 nodes, 8 threads
8. https  with 0.19.5 nodes
9. https with 0.19.10 nodes, 8 threads
10. https with 0.19.10 nodes

# Results
This table should the mean duration calculated from the three block streaming durations.

| # | appbase | https | threading | max_batch_size | days |
| --- | --- | --- | --- | --- | --- |
| 1 | True | True | False | 50 | 1.837 |
| 2 | True | False | False | 50 | - |
| 3 | False | False | True | None | 4.973 |
| 4 | False | False | False | None | 11.583 |
| 5 | True | False | True | None | 7.54  |
| 6 | True | False | False | None | 11.99 |
| 7 | False | True | True | None |193.966  |
| 8 | False | True | False | None | 433.633 |
| 9 | True | True | True | None | 14.67 |
| 10 | True | True | False | None | 85.63 |

In this table, the estimated duration to stream the entire blockchain was calculated based on the time duration to stream 1000 blocks starting at the given block numer.

| # | Block: 1000 | Block: 10000000 | Block: 20000000 |
| --- | --- | --- | --- |
| 1 | 0.96 | 1.32 | 3.23 |
| 2 | -  | -| - |
| 3 | 3.36 |  1.74 | 9.82 |
| 4 |  7.96 | 8.65 | 18.14 |
| 5 |  3.67  | 1.52  | 9.89  |
| 6 | 9.27 | 8.90 | 17.80 |
| 7 | 276.56 | 145.90 | 159.44 |
| 8 |434.91 | 430.40 | 435.59 |
| 9 | 31.49 |5.82 | 6.72 |
| 10 |  84.87  | 85.05 | 86.98 |

# Conclusions
The fastest way to stream the entire blockchain with beem is using batched calls on a 0.19.10 https node. It takes then only around 2 days. The result could be improved even more, by adding also threading to batched block streaming.

Using https nodes without batch calls is not recommended, it takes at least 14.6 days (0.19.10 node with threading). 

Using Websocket nodes is also an alternative, using threading it takes 5 days on a 0.19.5 node and 7 days on a 0.19.10 node.

Batch calls on a 0.19.10 Websocket node did not work, as fetching 1000 blocks did take more than several hours. I aborted this test run for this configuration.

Streaming 1000 blocks around block 10 million takes less time and streaming around block 20 million takes longer. The reason for this is the increased block size over time. Sometimes, streaming blocks starting from 1000 takes longer, this could be caused by the fact that these old blocks were not cached in the nodes.

- - -

This page is synchronized from the post: ['How long does it take to stream the entire steem blockchain?'](https://steemit.com/@holger80/how-long-does-it-take-to-stream-the-entire-steem-blockchain)
