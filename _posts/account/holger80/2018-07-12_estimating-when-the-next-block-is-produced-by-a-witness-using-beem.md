
---
title: 'Estimating when the next block is produced by a witness using beem'
permlink: estimating-when-the-next-block-is-produced-by-a-witness-using-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-12 11:13:24
categories:
- witness-category
tags:
- witness-category
- python
- beem
- witness
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmV6ktuHSDrbq2AJgDDFMBCdaa4GM5Nv7gWy6jaSqE9Rn3'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


You probably know http://steem.arcange.eu/schedule/, where a witness can see the `virtual_sheduled_time` difference, but what is this difference in hours, minutes and seconds?

**The following calculations are only correct for witnesses with a rank below 21!**

In order to calculate this, we need the total vote count, the number of top witnesses and the `VIRTUAL_SCHEDULE_LAP_LENGTH2`.
 `VIRTUAL_SCHEDULE_LAP_LENGTH2` is a constant and is `340282366920938463463374607431768211455`.

When summing up all votes (I estimated the sum by calculating the witnesses with the most votes) we have the vote_sum which is currently (considering the first 400 witnesses)
`2692955397423812592`. Currently we have 21 top witnesses.
The conversion from `virtual_shedule_time` to `block_numbers` is then `1.661915774761242e-19`.
![carbon (1).png](https://ipfs.busy.org/ipfs/QmV6ktuHSDrbq2AJgDDFMBCdaa4GM5Nv7gWy6jaSqE9Rn3)


If we take then the `virtual_scheduled_time` of a witness and subtracting it from the `current_virtual_time`, we receive the number of blocks which have to pass until a new block is produced by the witness:

![carbon (2).png](https://ipfs.busy.org/ipfs/QmNtuzqhPTciv2xY3FXKbxkjKcuMc9VboqPPj87hEP9YvZ)

As a new block time is 3 seconds, we can calculate the time difference until a new block is produced.


![carbon.png](https://ipfs.busy.org/ipfs/QmYfiz2DqqYtJ6Bp4oL5i8zkxWZTmawkVmN2RuuvhC2Wro)
[source code](https://github.com/holgern/beem/blob/master/examples/next_witness_block_coundown.py)
___
The calculation result has an error when the active rank and the total rank of a witness is not equal. In this case, disabled witnesses are skipped which reduces the time until a new block is produced.
___
I found out about this by reading the [steem source code](https://github.com/steemit/steem/blob/master/libraries/chain/witness_schedule.cpp):
![image.png](https://ipfs.busy.org/ipfs/QmeZ6YbBb579X9NagcFLCytherjEkd97Dw8hvscw46wHrP)


___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['Estimating when the next block is produced by a witness using beem'](https://steemit.com/@holger80/estimating-when-the-next-block-is-produced-by-a-witness-using-beem)
