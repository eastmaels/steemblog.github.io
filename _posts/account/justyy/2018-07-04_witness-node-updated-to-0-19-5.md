
---
title: 'Witness Node updated to 0.19.5!'
permlink: witness-node-updated-to-0-19-5
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-04 00:11:42
categories:
- witness-category
tags:
- witness-category
- witness-update
- busy
- steem
- witness
thumbnail: https://ipfs.busy.org/ipfs/QmPq5fJ2y8tDmLuvqaBmonD19QduirjDMKjBtS8SM8eSwo
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you are probably aware of, the steem blockchain has halted for a few hours today due to someone power-down some negatived amount of vest 7 days ago.

![image.png](https://ipfs.busy.org/ipfs/QmPq5fJ2y8tDmLuvqaBmonD19QduirjDMKjBtS8SM8eSwo)

The Steem Dev team has acted quickly and rolled out the fix here: https://github.com/steemit/steem/commit/ecb2a90e9e2268e40916eb5bc57fde07aade5260

![image.png](https://ipfs.busy.org/ipfs/QmSfWann9Jj49SY95qVXEMaDgDCfqUYUmGp7wnHQcKFjj2)

The account assets are safe in this incident. and the steem [blockchain](https://helloacm.com/london-cryptocurrency-show-steem-is-the-no-1-blockchain-in-the-world/) has resumed normal operations.
![](https://cdn.steemitimages.com/DQmWX1EGFyDJdiFtQ2HUVFuR9zBMkpkbgXzK58LzsTC1Suh/image.png)

Witness nodes hang and have to be upgraded to 0.19.5 manually. Thanks to the help (in particular @drakos @timcliff @therealwolf @emrebeyler etc) from #witness channel in steem.chat, I have followed the correct steps to upgrade (see @someguy123 's [post on how to upgrade](https://steemit.com/witness-category/@someguy123/emergency-update-for-steem-in-a-box-witnesses-seeds-and-rpcs))

Unfortunately, my node needs a replay/[reindexing](https://helloacm.com/steem-witness-replay-time-takes-longer-and-longer/), and it took time - about 16 hrs this time.

![image.png](https://ipfs.busy.org/ipfs/QmUPy9FtrNBcow7fvjLjceoDnJpKAaoxa76uR5ywdP4S5m)

I check `./run.sh logs` from time to time to monitor the progress of node reindexing. I can confirm from the `docker logs ID | head` that it clearly says `blockchain version: 0.19.5` and as soon as I see the first line of `Got XX transactions on block ... by ...` I enable my witness node by `conductor enable KEY`.

After a few minutes, it started to produce blocks:

![image.png](https://ipfs.busy.org/ipfs/QmUy7yUb9ZKPp1MkFuBoswuWZkLLLqfoeUNp4KPyuWNf2n)

Nice, although I am just a backup witness, I am still so thrilled that I do actually contribute to the steem blockchain - **my ID is written to the steem blockchain about once every 2 hours** - How Cool Is That!

## Support me and my [work](https://helloacm.com/steem-blockchain-incident-of-negative-vesting-and-witness-node-updated-to-0-19-5/) as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [Witness Node updated to 0.19.5!](https://steemit.com/@justyy/witness-node-updated-to-0-19-5)
