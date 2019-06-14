
---
title: 'New equilibrium reached for comment and vote RC costs'
permlink: new-euqilibrium-reached-for-comment-and-vote-rc-costs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-30 17:20:21
categories:
- steem
tags:
- steem
- hf20
- beempy
- resources
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXbiZmfHfe8o8VgB2t2mevGmoGXNpzBBs8v4oKUY6Aayr'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[beempy.com](https://beempy.com) shows now the different resource pools over time. It is possible to view the resource costs here: [resource_costs](https://beempy.com/resource_costs). The different pools can be viewed here: [resource_pool](https://beempy.com/resource_pool)

## The resource_state_bytes pool reaches a first equilibrium state after steem version 0.20.4. 
resource_state_bytes is an important factor for the RC costs of a vote and a comment.
![image.png](https://ipfs.busy.org/ipfs/QmXbiZmfHfe8o8VgB2t2mevGmoGXNpzBBs8v4oKUY6Aayr)

It can be seen that the comment costs are stable now:
![image.png](https://ipfs.busy.org/ipfs/Qmea3i39DTzvwLPETFe9Z4j9RADvaVQg5d4PRTmSEMsSCT)

Also the costs for a vote are stabilized now:
![image.png](https://ipfs.busy.org/ipfs/QmeBAd3ThV3hufHQ6VjqwfwFykZ79A4QjmvsmApAGuycB4)

## The resource_history_bytes pools is still growing
![image.png](https://ipfs.busy.org/ipfs/QmZUrNWYzNxh5tkZ9Mmu47cXHi11cwzbzjHfbQqYoyNZ1C)
The resource_history_bytes pool influences the costs of all operation. 
Transfer and custom_json operations are mainly determined by the resource_history_bytes  pool. Thus they keep falling:
![image.png](https://ipfs.busy.org/ipfs/QmTm9VyijBZb6HZN4z7bKwRcsS3cneE3CGjpNqHFfi62Pn)
![image.png](https://ipfs.busy.org/ipfs/Qmbfv1F6bPUf9o5Qs7xNwcDRsd8h6MocREYa4RE1pnbmJd)

## The resource_market_bytes and the resource_new_accounts pools  reach a maximum and stop rising
The resource_market_bytes pool influences all market operation (e.g. transfer).
![image.png](https://ipfs.busy.org/ipfs/QmczWUUezmGoTXMj8r5a29UvUJcxhkxmt1x3tMpFz15uGy)
The resource_new_accounts influences the claim account creation operation costs.
![image.png](https://ipfs.busy.org/ipfs/QmTvZcAfqy4TPAVsVCNjQR2fkbDgQ19MyvJ8c3KQiQZBj7)

- - -

This page is synchronized from the post: ['New equilibrium reached for comment and vote RC costs'](https://steemit.com/@holger80/new-euqilibrium-reached-for-comment-and-vote-rc-costs)
