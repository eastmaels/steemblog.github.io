
---
title: 'SteemJs: How Many Witnesses are Running on 23.1?'
permlink: steemjs-how-many-witnesses-are-running-on-23-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-06 18:52:03
categories:
- steemjs
tags:
- steemjs
- whalepower
- programming
- tutorial
- coding
- steem-witnesses
thumbnail: 'https://cdn.steemitimages.com/DQmZcg5iThqQD4uUQwFsxtRBGm8DPxFP5q7ziRca1XJ9hnM/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


How many [witnesses](https://steemyy.com/witness-ranking/) are running on 23.1 and how many of them are active? It turns out answering this question does not require preprocess blocks on steem blockchain e.g. SteemSQL. Rather, we can get the answer by pure SteemJS.

# Get All Witnesses
First, we can use the `steemp.api.getWitnessCount` to return the list of all registered witnesses - which is a lot more than we thought, currently more than 1400 witnesses but of course many of them have been disabled or never produced a block.

```
function getTotalWitnesses() {
    return new Promise((resolve, reject) => {
      steem.api.getWitnessCount(function(err, result) {
          if (!err) {
              resolve(result);
          } else {
              reject(err);
          }
      });
    });
}
```

# Get All Witnesses Accounts
Then, we can use `steem.api.getWitnesses` to retreive the witnesses information for multiple accounts at the same time. 

```
function getAllWitnessAccounts(total) {
    return new Promise((resolve, reject) => {
          steem.api.getWitnesses([...Array(total).keys()], function(err, result) {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
           }
        });
    });
}   
````

# Filtering
Then, we can chain those two functions to filter out those witnesses that are running 23.1 and are active.

```
(async function () {
    const totalWitnesses = await getTotalWitnesses();
    let data = await getAllWitnessAccounts(totalWitnesses);
    log(data.filter(x => {
        return x.running_version === "0.23.1" && (x.signing_key !== "STM1111111111111111111111111111111114T1Anm");
    }).length);
})();
```

### The answer is 46 witnesses are running on 23.1 and all of them are active.
If we point the RPC node to HIVE chain, we get 107 witnesses running on 23.0.

Run the code using <a href="https://steemyy.com/steemjs/?s=function%20getTotalWitnesses()%20%7B%0D%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20steem.api.getWitnessCount(function(err%2C%20result)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20if%20(!err)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(result)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D)%3B%0D%0A%7D%0D%0A%0D%0Afunction%20getAllWitnessAccounts(total)%20%7B%0D%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20steem.api.getWitnesses(%5B...Array(total).keys()%5D%2C%20function(err%2C%20result)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!err)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(result)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D)%3B%0D%0A%7D%20%20%20%0D%0A%0D%0A(async%20function%20()%20%7B%0D%0A%20%20%20%20const%20totalWitnesses%20%3D%20await%20getTotalWitnesses()%3B%0D%0A%20%20%20%20let%20data%20%3D%20await%20getAllWitnessAccounts(totalWitnesses)%3B%0D%0A%20%20%20%20log(data.filter(x%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20x.running_version%20%3D%3D%3D%20%220.23.1%22%20%26%26%20(x.signing_key%20!%3D%3D%20%22STM1111111111111111111111111111111114T1Anm%22)%3B%0D%0A%20%20%20%20%7D).length)%3B%0D%0A%7D)()%3B%0D%0A">SteemJs</a>

Slightly changing the query, we know:
There are 24 Witnesses running at 0.23.0 but they are disabled.
And there are 9 witnesses running at 0.23.0 and they are 'active' which may be those HIVE witnesses who didn't take offline they witnesses.

BTW, i have added the dSteem into the SteemJs tool:  [https://steemyy.com/steemjs/](https://steemyy.com/steemjs/)
![image.png](https://cdn.steemitimages.com/DQmZcg5iThqQD4uUQwFsxtRBGm8DPxFP5q7ziRca1XJ9hnM/image.png)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/steemjs-how-many-witnesses-are-running-on-23-1/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['SteemJs: How Many Witnesses are Running on 23.1?'](https://steemit.com/@justyy/steemjs-how-many-witnesses-are-running-on-23-1)
