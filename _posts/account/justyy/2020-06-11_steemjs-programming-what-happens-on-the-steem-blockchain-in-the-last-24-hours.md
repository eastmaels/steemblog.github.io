
---
title: 'SteemJs Programming: What Happens on the Steem Blockchain in the Last 24 Hours?'
permlink: steemjs-programming-what-happens-on-the-steem-blockchain-in-the-last-24-hours
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-11 19:10:21
categories:
- whalepower
tags:
- whalepower
- witness-tool
- programming
- witness-node
- steem-dev
- steem-witness
- steemjs
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Many questions are interesting but the answers are not obvious or easy to get. For example:  Who comments most in the last 24 hours?

I am going to show you a pattern to find out the answers to such questions using [SteemJs](https://steemyy.com/steemjs/). 

## Get Current Lastest Block
We need to get the latest block number on the steem blockchain, and we can work out roughly the last 24 hours block range by subtracting 20*60*24 (3 seconds a block).

```
function getBlockchainData() {
    return new Promise((resolve, reject) => {
      steem.api.getDynamicGlobalProperties(function(err, result) {
          if (!err) {
              resolve(result);
          } else {
              reject(err);
          }
      });
    });
}
```

The current block number is:

```
    const blockchain = await getBlockchainData();
    const maxBlock = blockchain.head_block_number;
```

## Getting the Block Content
Each block contains transactions, here you would need to parse the list of transactions and look for the particular ones that you are interested. For example, if we want to compute the total producer rewards by witnesses, we can look for "producer_reward".

```
function getBlock(block) {
    return new Promise((resolve, reject) => {
        steem.api.getOpsInBlock(block, false, function(err, result) {
          if (!err) {
              const txCount = result.filter(x=>x.virtual_op===0).length;
              const producer = result.filter(x=>x.op[0] === "producer_reward");
              const witness = producer[0].op[1].producer;
              const reward = producer[0].op[1].vesting_shares;
              resolve({
                count: txCount,
                witness: witness,
                reward: reward.replace(" VESTS", ""),
                time: producer[0].timestamp.replace("T", " ")
              });
          } else {
              reject(err);
          }        
        });
    });
}
```

## Writing to Database or a File
We need to write the data into a database, or for simplicity, we can write to a CSV file for later process.

```
(async function() {
    const blockchain = await getBlockchainData();
    const maxBlock = blockchain.head_block_number;
    for (let block = maxBlock - 20*60*24; block <= maxBlock; ++ block) {
        try {
            const data = await getBlock(block);
            const s = '"' + data.time + '",' + block + ',"' + data.witness + '",' + data.count + "," + data.reward + "\n";
            log(s);
            fs.appendFileSync('data.csv', s);
        } catch (e) {
            log(e);
        }
    }  
})();
```

Of course, if you want to further develop into a tool, you would need a database, and a background daemon that automatically syncs with the [blockchain](https://helloacm.com/illustrating-the-blockchain-via-steemjs-blocks-are-chained/).

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/steemjs-programming-what-happens-on-the-steem-blockchain-in-the-last-24-hours/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['SteemJs Programming: What Happens on the Steem Blockchain in the Last 24 Hours?'](https://steemit.com/@justyy/steemjs-programming-what-happens-on-the-steem-blockchain-in-the-last-24-hours)
