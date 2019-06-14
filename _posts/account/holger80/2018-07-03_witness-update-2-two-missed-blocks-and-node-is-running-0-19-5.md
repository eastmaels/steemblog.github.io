
---
title: 'Witness update #2 - two missed blocks and node is running 0.19.5'
permlink: witness-update-2-two-missed-blocks-and-node-is-running-0-19-5
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-03 20:59:24
categories:
- witness-category
tags:
- witness-category
- witness
- steem
- witness-update
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmdwCeXfRBDwW5PgumwMhgauXbWMUPeAu7ankCkBTU2q9s'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmdwCeXfRBDwW5PgumwMhgauXbWMUPeAu7ankCkBTU2q9s)


I wrote about my first produced block as witness 23 days ago ([post](https://steemit.com/witness-category/@holger80/i-produced-my-first-block-as-witness)). 



After updating my witness node to 0.19.5, I had to replay the complete blockchain. The process is now finished and my node is waiting for the next schedule slot. This was necessary due to the  [frozen blockchain](https://steemit.com/steem/@holger80/the-account-nijeah-managed-it-to-freeze-the-entire-steem-blockchain) due to a negative vesting amount. This event caused also my first two missed blocks.

## Witness rank and activity
My active rank is now 96 and my full rank is 137. This means that I'm close paying my server costs with the block producer rewards that I'm collecting.

### beem
Since my last witness update, I released 7 new versions of [beem](https://github.com/holgern/beem). The last two releases make beem running smooth with 0.19.5 and 0.19.10. Please read also my last [utopian-io](https://steemit.com/utopian-io/@holger80/update-for-beem-discussions-post-creation-and-threaded-blocks-improved) post.

You can also visit my discord-channel: https://discord.gg/4HM592V.

### fullnodeupdate
I improved my @fullnodeupdate project even further. Every day, a post with statistics about all fullnode servers is posted. I added block delay as a performance measure.
I'm pushing an  account data update every hour  to @fullnodeupdate with the following content:
``` 
{"nodes": 
["wss://rpc.buildteam.io", "wss://gtg.steem.house:8090", "wss://steemd.privex.io", "https://api.steemit.com", "wss://rpc.steemliberator.com", "https://api.steem.house"], 
"failing_nodes": 
{"https://steemd.steemgigs.org": "NumRetriesReached", "wss://steemd.steemgigs.org": "NumRetriesReached", "wss://rpc.steemviz.com": "NumRetriesReached", "https://api.steemitdev.com": "NumRetriesReached", "https://seed.bitcoiner.me": "NumRetriesReached", "wss://seed.bitcoiner.me": "NumRetriesReached", "wss://steemd.minnowsupportproject.org": "NumRetriesReached", "wss://appbasetest.timcliff.com": "NumRetriesReached", "https://rpc.steemviz.com": "NumRetriesReached", "https://api.steemitstage.com": "NumRetriesReached", "https://appbasetest.timcliff.com": "NumRetriesReached", "https://steemd.minnowsupportproject.org": "NumRetriesReached", "wss://steemd.pevo.science": "NumRetriesReached", "https://steemd.privex.io": "", "https://rpc.steemliberator.com": "NumRetriesReached", "https://steemd.pevo.science": "NumRetriesReached"}, 
"report": [
{"node": "wss://rpc.buildteam.io", "version": "0.19.5", "block": {"rank": 1, "ok": true, "count": 236, "time": 30.07}, "history": {"rank": 2, "ok": true, "count": 17373, "time": 15.01}, "apicall": {"rank": 1, "ok": true, "time": 6.94, "access_time": 0.151}, "config": {"rank": 1, "ok": true, "time": 0.54, "access_time": 0.05}, "block_diff": {"rank": 2, "ok": true, "head_delay": 1.3, "diff_head_irreversible": 17.0, "time": 16.5}}, 
{"node": "https://api.steemit.com", "version": "0.19.10", "block": {"rank": 4, "ok": true, "count": 80, "time": 30.25}, "history": {"rank": 6, "ok": true, "count": 3435, "time": 15.16}, "apicall": {"rank": 3, "ok": true, "time": 2.0, "access_time": 0.424}, "config": {"rank": 2, "ok": true, "time": 1.73, "access_time": 0.1}, "block_diff": {"rank": 6, "ok": true, "head_delay": 5.93, "diff_head_irreversible": 20.0, "time": 19.0}}, 
{"node": "wss://gtg.steem.house:8090", "version": "0.19.5", "block": {"rank": 2, "ok": true, "count": 161, "time": 30.12}, "history": {"rank": 3, "ok": true, "count": 12727, "time": 38.13}, "apicall": {"rank": 2, "ok": true, "time": 3.63, "access_time": 0.211}, "config": {"rank": 3, "ok": true, "time": 2.56, "access_time": 0.05}, "block_diff": {"rank": 1, "ok": true, "head_delay": 1.21, "diff_head_irreversible": 15.0, "time": 16.81}},
{"node": "https://rpc.buildteam.io", "version": "0.19.5", "block": {"rank": 7, "ok": true, "count": 3, "time": 39.89}, "history": {"rank": 8, "ok": true, "count": 910, "time": 16.81}, "apicall": {"rank": -1, "ok": false, "error": "NumRetriesReached", "time": 125.4, "access_time": 30.0}, "config": {"rank": 4, "ok": true, "time": 3.02, "access_time": 0.12}, "block_diff": {"rank": 7, "ok": true, "head_delay": 2.89, "diff_head_irreversible": 23.0, "time": 32.09}}, 
{"node": "https://api.steem.house", "version": "0.19.10", "block": {"rank": 5, "ok": true, "count": 32, "time": 31.14}, "history": {"rank": 7, "ok": true, "count": 2223, "time": 15.46}, "apicall": {"rank": 6, "ok": true, "time": 3.93, "access_time": 1.201}, "config": {"rank": 5, "ok": true, "time": 3.2, "access_time": 0.26}, "block_diff": {"rank": 4, "ok": true, "head_delay": 3.31, "diff_head_irreversible": 20.0, "time": 23.02}}, 
{"node": "https://gtg.steem.house:8090", "version": "0.19.5", "block": {"rank": -1, "ok": false, "error": "Could not receive dynamic_global_properties!", "count": 4, "time": 12.0}, "history": {"rank": 5, "ok": true, "count": 3637, "time": 15.15}, "apicall": {"rank": 7, "ok": true, "time": 4.24, "access_time": 1.223}, "config": {"rank": 6, "ok": true, "time": 7.31, "access_time": 0.33}, "block_diff": {"rank": -1, "ok": false, "error": "output: None of identifier 23860331", "head_delay": 0.0, "diff_head_irreversible": 0.0, "time": 23.32}}, 
{"node": "https://rpc.curiesteem.com", "version": "0.19.5", "block": {"rank": -1, "ok": false, "error": "Could not receive dynamic_global_properties!", "count": 0, "time": 9.65}, "history": {"rank": 9, "ok": true, "count": 910, "time": 18.01}, "apicall": {"rank": -1, "ok": false, "error": "'NoneType' object is not subscriptable", "time": 16.71, "access_time": 30.0}, "config": {"rank": 7, "ok": true, "time": 9.23, "access_time": 1.0}, "block_diff": {"rank": -1, "ok": false, "error": "Could not receive dynamic_global_properties!", "head_delay": 0.0, "diff_head_irreversible": 0.0, "time": 21.77}}, 
{"node": "wss://steemd.privex.io", "version": "0.19.5", "block": {"rank": 3, "ok": true, "count": 134, "time": 30.31}, "history": {"rank": 1, "ok": true, "count": 21615, "time": 15.02}, "apicall": {"rank": 4, "ok": true, "time": 26.27, "access_time": 0.503}, "config": {"rank": 8, "ok": true, "time": 10.25, "access_time": 0.05}, "block_diff": {"rank": 3, "ok": true, "head_delay": 1.41, "diff_head_irreversible": 17.0, "time": 16.96}}, 
{"node": "wss://rpc.steemliberator.com", "version": "0.19.5", "block": {"rank": 6, "ok": true, "count": 32, "time": 30.41}, "history": {"rank": 4, "ok": true, "count": 4041, "time": 15.17}, "apicall": {"rank": 5, "ok": true, "time": 6.56, "access_time": 1.012}, "config": {"rank": 9, "ok": true, "time": 17.29, "access_time": 0.25}, "block_diff": {"rank": 5, "ok": true, "head_delay": 4.7, "diff_head_irreversible": 20.0, "time": 52.14}}], 
"parameter": {"num_retries": 3, "num_retries_call": 3, "timeout": 30, "threading": false, "beem_version": "0.19.43", "start_time": "2018-07-03T19:20:02", "end_time": "2018-07-03T19:39:03", "script_version": "1.2.3", "benchmarks": {"block": {"data": ["count"]}, "history": {"data": ["count"]}, "apicall": {"data": ["access_time"]}, "config": {"data": ["access_time"]}, "block_diff": {"data": ["diff_head_irreversible", "head_delay"]}}}
 ```

### pricefeed
My price feed is updated with ` beempy`:

```
beempy updatenodes
beempy witnessfeed holger80
```
`beempy updatenodes` updates the node list with the current node stats posted in @fullnodeupdate.


### steemhive.com
I created a new website https://steemhive.com, on which it is easily possible to see new posts from a community:
![image.png](https://ipfs.busy.org/ipfs/QmNo7BvjPguXkQjkvQKmUTwA6WygwJ9toxmRrjxadTC52u)

steemhive is opensource and available on [github](https://github.com/holgern/steemhive).

### comedy open mic
I'm also active in the @comedyopenmic community and I'm currently a judge in round 20. You can view new contribution using steemhive: http://steemhive.com/#comedyopenmic?all
You can find out more in the [COM round 20](https://steemit.com/comedyopenmic/@comedyopenmic/comedy-open-mic-comedy-contest-round-20) post.
___
[image source](https://pixabay.com/de/milchpackung-milch-fehlt-31473/)
___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>

- - -

This page is synchronized from the post: ['Witness update #2 - two missed blocks and node is running 0.19.5'](https://steemit.com/@holger80/witness-update-2-two-missed-blocks-and-node-is-running-0-19-5)
