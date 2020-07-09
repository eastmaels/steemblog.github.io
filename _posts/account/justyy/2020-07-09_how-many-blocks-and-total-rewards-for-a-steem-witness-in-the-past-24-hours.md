
---
title: 'How Many Blocks and Total Rewards for a Steem Witness in the Past 24 Hours?'
permlink: how-many-blocks-and-total-rewards-for-a-steem-witness-in-the-past-24-hours
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-09 16:57:18
categories:
- witness-category
tags:
- witness-category
- witness
- whalepower
- producer-reward
- steem
- sql
- steem-dev
- codeonsteem
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The blockchain is a public database, this shouldn't be hard to find out. In [this post](https://helloacm.com/the-python-function-to-retrieve-the-producer-reward-for-witness/) we know how to call the Steem API to find out the witness that procduce each block and the reward (in VESTS) he/she collects for generating the block (mining).

Let's create a database in SQLite - with the schema:

```
sqlite> .schema
CREATE TABLE witnessblocks (
witness text,
number integer,
vests real,
time text,
block integer,
constraint pkey primary key (block)
);
CREATE INDEX index_block on witnessblocks(block);
CREATE INDEX index_witness on witnessblocks(witness);
CREATE INDEX index_time on witnessblocks(time);
CREATE INDEX index_vests on witnessblocks(vests);
CREATE INDEX index_number on witnessblocks(number);
```

Then, we can run a SQL to find out the number of blocks and total rewards for each witness. Results are sorted by total rewards in SP (which can be computed by simply roughly divided by 1943 SP) - see this number at: [https://steemyy.com](https://steemyy.com)

Query:
```
sqlite> select witness,count(1), sum(vests/1943.761) as total from witnessblocks where time >= date('now', '-24 hour')  group by witness order by total desc limit 30;
```

Result (a bit surprising, more than expected, different than what the steemworld says @steemchiller): I double check the data and everything seems correct. My understanding is that a lot of misses are re-scheduled and that is why the TOP witnesses get more turns to produce blocks.

```
justyy|2326|578.82025257632
steemchiller|2324|578.325146664636
hinomaru-jp|2324|578.322147174472
hivei0|2323|578.073978002953
scissor.sisters|2322|577.826185736312
dlike|2321|577.5771644482
steem-supporter|2320|577.328037061142
inwi|2319|577.082116292075
beargame|2319|577.079035895361
smt-wherein|2318|576.832034089068
steem-dragon|2318|576.831055014993
roundblocknew|2318|576.828982039459
rnt1|2317|576.583037687762
hoasen|2317|576.582024700568
symbionts|2317|576.578049543128
steem-agora|2316|576.338157853255
maiyude|2316|576.336006269803
future.witness|2313|575.584969334193
protoss20|2309|574.593023568226
dev.supporters|2305|573.596812309745
matreshka|193|240.560583586665
parse|192|239.309574386974
cryptoking777|191|238.066390513031
menacamel|191|238.066344493484
juddsmith079|190|236.823358969544
enjoylondon|190|236.815291552305
rlawlstn123|187|233.082098971016
leverfile|186|231.834906382009
upeross|185|230.587764003393
roadofrich|30|37.3927565415707
```

Once this data is verified, I'll add it to the [witness ranking table](https://steemyy.com/witness-ranking/)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to Computing & Technology](https://helloacm.com/how-many-blocks-and-total-rewards-for-a-steem-witness-in-the-past-24-hours/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['How Many Blocks and Total Rewards for a Steem Witness in the Past 24 Hours?'](https://steemit.com/@justyy/how-many-blocks-and-total-rewards-for-a-steem-witness-in-the-past-24-hours)
