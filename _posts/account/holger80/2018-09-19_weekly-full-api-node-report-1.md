
---
title: 'Weekly full API node report #1'
permlink: weekly-full-api-node-report-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-19 09:44:45
categories:
- fullnode
tags:
- fullnode
- statistics
- steemdev
- report
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPafiapcnNAhjdwN5vt5kKwJRMZU4LjR4Xg7vJJ2AiHfD'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I'm collecting hourly the stats of all available fullnode API server for interacting with steem and store the state in an update account data operation inside @fullnodeupdate.

## Results 12.09.2018 - 19.09.2018
The plots show the best result of all working nodes at the specific timestamp. `-1` means that no node could answer the specific call.
![api_call.png](https://ipfs.busy.org/ipfs/QmPafiapcnNAhjdwN5vt5kKwJRMZU4LjR4Xg7vJJ2AiHfD)
![blocks_per_second.png](https://ipfs.busy.org/ipfs/QmXV4uhQ68Vx75JcX88K3npC3mtRQ77S7nJDxU6DZWUsQK)
![history_ops.png](https://ipfs.busy.org/ipfs/QmbX2dXDFuzXTTRJu9RS2SmX561mW4nPk1aEDdAsw9iieM)
![number_working_nodes.png](https://ipfs.busy.org/ipfs/QmaWJKsEEicxqYT9X2cHAjzAvh3Ya6Ej29v1DdxonKWYDx)
![block_time_diff.png](https://ipfs.busy.org/ipfs/QmbuPfrhxupFJrK3rp3Rc6CmDsvAb6uquEM2ejUzEqzNjz)

## Summary
The last two days, the number of working nodes dropped from around 14 to 4 nodes. The mean API call duration rises from 0.33s to 2s. The number of fetchable blocks per second dropped from 30 to 7. The number of account history operations per seconds dropped from 2500 to 250. The time difference from the latest provided immutable block number to the newest produced block rises from 50 to 60 seconds.

- - -

This page is synchronized from the post: ['Weekly full API node report #1'](https://steemit.com/@holger80/weekly-full-api-node-report-1)
