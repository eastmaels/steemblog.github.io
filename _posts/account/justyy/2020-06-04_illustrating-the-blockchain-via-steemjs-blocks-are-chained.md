
---
title: 'Illustrating the Blockchain via SteemJs  - Blocks are Chained'
permlink: illustrating-the-blockchain-via-steemjs-blocks-are-chained
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-04 20:56:33
categories:
- blockchain
tags:
- blockchain
- steemjs
- tutorial
- steem-block
- whalepower
thumbnail: 'https://cdn.steemitimages.com/DQmXaJmxUfNazHDigysEw4A6upLxkUmQFPiM7AgVSPqXXpD/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Blockchain is a fancy word, and not many people understand it. If you want to explain this to your GF/partner, what would be the most simple way?

Right, blocks are chained in one way, as time goes on, in particular for STEEM blockchain, every 3 seconds, we append a new block to the end of the current chain. So the chain goes longer and longer each day.

![image.png](https://cdn.steemitimages.com/DQmXaJmxUfNazHDigysEw4A6upLxkUmQFPiM7AgVSPqXXpD/image.png)

We need a way to tell if the current block can be attached (we can't just produce a random block and force appending it). For each block, we will have a unique block ID, and we will have a previous field that match the previous Block ID. The first block on steem blockchain has `previous` set to 0000000000000000000000000000000000000000. 

Run this in <a href="https://steemyy.com/steemjs/?s=steem.api.getBlock(1%2C%20function(err%2C%20result)%20%7B%0D%0A%20%20log(result)%3B%0D%0A%7D)%3B">SteemJS</a>
```
const blockNum = 1;
steem.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

You will see the block_id and previous value of the first block.

```
{"previous":"0000000000000000000000000000000000000000","timestamp":"2016-03-24T16:05:00","witness":"initminer","transaction_merkle_root":"0000000000000000000000000000000000000000","extensions":[],"witness_signature":"204f8ad56a8f5cf722a02b035a61b500aa59b9519b2c33c77a80c0a714680a5a5a7a340d909d19996613c5e4ae92146b9add8a7a663eef37d837ef881477313043","transactions":[],"block_id":"0000000109833ce528d5bbfb3f6225b39ee10086","signing_key":"STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX","transaction_ids":[]}
```

And the second block gives:

```
{"previous":"0000000109833ce528d5bbfb3f6225b39ee10086","timestamp":"2016-03-24T16:05:36","witness":"initminer","transaction_merkle_root":"0000000000000000000000000000000000000000","extensions":[],"witness_signature":"1f3e85ab301a600f391f11e859240f090a9404f8ebf0bf98df58eb17f455156e2d16e1dcfc621acb3a7acbedc86b6d2560fdd87ce5709e80fa333a2bbb92966df3","transactions":[],"block_id":"00000002ed04e3c3def0238f693931ee7eebbdf1","signing_key":"STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX","transaction_ids":[]}
```

As you can see, the previous value is the same as the block_id for the Block 1. This goes on and on. Let's print the first 10 blocks' previous and block_id:

Run the Code in <a href="https://steemyy.com/steemjs/?s=%0D%0Afunction%20getBlock(blockNum)%20%7B%0D%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20steem.api.getBlock(blockNum%2C%20function(err%2C%20result)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(err)%20reject(err)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20resolve(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20block%3A%20blockNum%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20previous%3A%20result.previous%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20block_id%3A%20result.block_id%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%20%20%20%20%0D%0A%20%20%20%20%7D)%3B%0D%0A%7D%0D%0A%0D%0A(async%20function()%20%7B%0D%0A%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%3D%2010%3B%20%2B%2B%20i)%20%7B%0D%0A%20%20%20%20%20%20%20%20log(await%20getBlock(i))%3B%20%20%20%20%0D%0A%20%20%20%20%7D%0D%0A%7D)()%3B">SteemJS</a>
```
function getBlock(blockNum) {
    return new Promise((resolve, reject) => {
        steem.api.getBlock(blockNum, function(err, result) {
            if (err) reject(err);
            resolve({
                block: blockNum,
                previous: result.previous,
                block_id: result.block_id,
            });
        });    
    });
}

(async function() {
    for (let i = 1; i <= 10; ++ i) {
        log(await getBlock(i));    
    }
})();
```

And you will see the rule applies. In fact, this is the fundamental rule of the blockchain - the rule to chain the blocks.

```
{"block":1,"previous":"0000000000000000000000000000000000000000","block_id":"0000000109833ce528d5bbfb3f6225b39ee10086"}
{"block":2,"previous":"0000000109833ce528d5bbfb3f6225b39ee10086","block_id":"00000002ed04e3c3def0238f693931ee7eebbdf1"}
{"block":3,"previous":"00000002ed04e3c3def0238f693931ee7eebbdf1","block_id":"000000035b094a812646289c622dba0ba67d1ffe"}
{"block":4,"previous":"000000035b094a812646289c622dba0ba67d1ffe","block_id":"00000004f9de0cfeb08c9d7d9d1fe536d902dc4a"}
{"block":5,"previous":"00000004f9de0cfeb08c9d7d9d1fe536d902dc4a","block_id":"00000005014b5562a1133070d8bee536de615329"}
{"block":6,"previous":"00000005014b5562a1133070d8bee536de615329","block_id":"00000006e323e35687e160b8aec86f1e56d4c902"}
{"block":7,"previous":"00000006e323e35687e160b8aec86f1e56d4c902","block_id":"000000079ff02a2dea6c4d9a27f752233d4a66b4"}
{"block":8,"previous":"000000079ff02a2dea6c4d9a27f752233d4a66b4","block_id":"000000084f957cc170a27c8330293a3343f82c23"}
{"block":9,"previous":"000000084f957cc170a27c8330293a3343f82c23","block_id":"00000009f35198cfd8a866868538bed3482d61a4"}
{"block":10,"previous":"00000009f35198cfd8a866868538bed3482d61a4","block_id":"0000000aae44a2f4d57170dab16fb1619f9e1d0e"}
```

[Steem Blockchain](https://helloacm.com/recursive-algorithm-to-get-proxy-votes-on-steem-blockchain/) is a public database. Every 3 seconds, [one witness](https://steemyy.com/witness-ranking) helps to package operations (comment, vote, transfer etc) into a block, seal it with the signing key, and finally push to the chain for a small reward.

As the blockchain gets bigger and bigger, it takes enormous efforts to alter the chain, as you will need to modify every prior blocks.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/illustrating-the-blockchain-via-steemjs-blocks-are-chained/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Illustrating the Blockchain via SteemJs  - Blocks are Chained'](https://steemit.com/@justyy/illustrating-the-blockchain-via-steemjs-blocks-are-chained)
