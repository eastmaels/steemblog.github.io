
---
title: 'Are Top 20 Witnesses Voting Each Other? Introducing Witness-voting Factor'
permlink: are-top-20-witnesses-voting-each-other-introducing-witness-voting-factor
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-07 18:06:42
categories:
- witness
tags:
- witness
- steem-witness
- whalepower
- programming
- steemjs
- witness-factor
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Let's introduce a concept i.e. witness-voting factor that represent the average witness voting each other in the TOP 20. The maximum value is 20, and the minimal is 0.

If the witness-voting factor is 20, it means that all top 20 witnesses are voting each other. This is not healthy as the gap (of votes) between TOP 20 and the rest will be always increasing. Also, since witnesses are voting each other, it is kinda controlled by a group of people who share the same interests - this is centralisation admit it or not.

# SteemJs code to compute the witness-voting factor
The idea is to retrieve the list of the votes of the TOP 20, and group them, count the frequency and sort them. Compute the average. The witness-voting factor for Top 20 on [STEEM blockchain](https://helloacm.com/steemjs-how-many-witnesses-are-running-on-23-1/) is 4.5, compared to 12.65 on HIVE.

Run the following in <a href="https://steemyy.com/steemjs/?s=function%20getTotalWitnesses()%20%7B%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20%20%20steem.api.getWitnessCount(function(err%2C%20result)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(!err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(result)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%7D%0A%0Afunction%20getAllWitnessAccounts(total)%20%7B%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20steem.api.getWitnesses(%5B...Array(total).keys()%5D%2C%20function(err%2C%20result)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(result)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%7D%20%20%20%0A%0Afunction%20getAccounts(accounts)%20%7B%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20steem.api.getAccounts(accounts%2C%20function(err%2C%20result)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(result)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%7D%20%20%20%0A%0A%0A(async%20function%20()%20%7B%0A%20%20%20%20const%20totalWitnesses%20%3D%20await%20getTotalWitnesses()%3B%0A%20%20%20%20let%20data%20%3D%20await%20getAllWitnessAccounts(totalWitnesses)%3B%0A%20%20%20%20data%20%3D%20data.filter(x%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(x.votes%20%3E%200)%20%26%26%20(x.running_version%20%3D%3D%3D%20%220.23.1%22)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20data.sort((a%2C%20b)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20b.votes%20-%20a.votes%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20data%20%3D%20data.slice(0%2C%2020)%3B%0A%20%20%20%20let%20top%20%3D%20%5B%5D%3B%0A%20%20%20%20data.map((x)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20top.push(x.owner)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20accountData%20%3D%20await%20getAccounts(top)%3B%0A%20%20%20%20let%20votes%20%3D%20%7B%7D%3B%0A%20%20%20%20data.map((x)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20account%20%3D%20accountData.filter(v%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20v.name%20%3D%3D%3D%20x.owner%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20for%20(let%20w%20of%20account%5B0%5D.witness_votes)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(typeof%20votes%5Bw%5D%20%3D%3D%3D%20%22undefined%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20votes%5Bw%5D%20%3D%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20votes%5Bw%5D%20%2B%2B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20var%20items%20%3D%20Object.keys(votes).map(function(key)%20%7B%0A%20%20%20%20%20%20return%20%5Bkey%2C%20votes%5Bkey%5D%5D%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20items.sort(function(first%2C%20second)%20%7B%0A%20%20%20%20%20%20return%20second%5B1%5D%20-%20first%5B1%5D%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20let%20x%20%3D%200%2C%20cnt%20%3D%200%3B%0A%20%20%20%20for%20(let%20w%20of%20items)%20%7B%0A%20%20%20%20%20%20%20%20if%20(top.includes(w%5B0%5D))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20log(w%5B0%5D%20%2B%20%22%2C%20%22%20%2B%20w%5B1%5D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20x%20%2B%3D%20w%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cnt%20%2B%2B%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20log(x%2Fcnt)%3B%0A%7D)()%3B%0A%0A">SteemJs Editor</a>

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

function getAccounts(accounts) {
    return new Promise((resolve, reject) => {
          steem.api.getAccounts(accounts, function(err, result) {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
           }
        });
    });
}   


(async function () {
    const totalWitnesses = await getTotalWitnesses();
    let data = await getAllWitnessAccounts(totalWitnesses);
    data = data.filter(x => {
        // reduce the noise
        return (x.votes > 0) && (x.running_version === "0.23.1");
    });
    // sort by votes
    data.sort((a, b) => {
        return b.votes - a.votes;
    });
    // only count TOP 20 witnesses
    data = data.slice(0, 20);
    let top = [];
    data.map((x) => {
        top.push(x.owner);
    });
    const accountData = await getAccounts(top);
    let votes = {};
    data.map((x) => {
        const account = accountData.filter(v => {
            return v.name === x.owner
        });
        // count the vote frequency for each witness
        for (let w of account[0].witness_votes) {
            if (typeof votes[w] === "undefined") {
                votes[w] = 1;
            } else {
                votes[w] ++;
            }
        }
    });    
    
    var items = Object.keys(votes).map(function(key) {
      return [key, votes[key]];
    });
    
    items.sort(function(first, second) {
      return second[1] - first[1];
    });
    
    let x = 0, cnt = 0;
    for (let w of items) {
        // TOP 20 witnesses only
        if (top.includes(w[0])) {
            log(w[0] + ", " + w[1]);
            x += w[1];
            cnt ++;
        }
    }
    log(x/cnt);
})();
```

Here is the detail list:
```
future.witness, 7
justyy, 7
steem-agora, 7
steemchiller, 7
dev.supporters, 6
dlike, 6
maiyude, 6
steem-supporter, 6
symbionts, 6
steem-dragon, 4
scissor.sisters, 4
cryptoking777, 3
hivei0, 3
hoasen, 3
juddsmith079, 3
matreshka, 3
protoss20, 3
hinomaru-jp, 2
inwi, 2
rnt1, 2
```


<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/are-top-20-witnesses-voting-each-other-introducing-witness-voting-factor/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Are Top 20 Witnesses Voting Each Other? Introducing Witness-voting Factor'](https://steemit.com/@justyy/are-top-20-witnesses-voting-each-other-introducing-witness-voting-factor)
