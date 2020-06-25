
---
title: 'Why the Most Popular Accounts Query is Slow compared to Most Blocked Accounts Query?'
permlink: why-the-most-popular-accounts-query-is-slow-compared-to-most-blocked-accounts-query
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-25 17:03:00
categories:
- witness-category
tags:
- witness-category
- codeonsteem
- programming
- whalepower
- sqlite
- steemit
- steem-dev
- performance
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Similarly to [Most Blocks Accounts on Steem Blockchain](https://steemyy.com/top-muted.php) I was going to have a page that lists the most popular accounts (most followed).

However, after analysis, I decide to pause it because the query to get the most popular accounts is very slow - it takes more than 20 minutes to retrieve results.

On the other hand, the query to get the most blocked accounts is fast - less than a minute - which makes it feasible to do so. 

When a query takes ages, the SQLite suffers a known database lock problem. SQLite is not very good at concurrency - when a thread is reading all rows, all other write operations (such as insertion) will be locked:

```
database is locked
Traceback (most recent call last):
  File "test.py", line 135, in <module>
    con.commit()
sqlite3.OperationalError: database is locked
```

Almost Same query - but with different parameters. For 'most blocked' the filtering is `where what = 'ignore'` and for 'most popular' the filtering is `where what = 'blog'`

This is the table schema and indices:

```
sqlite> .schema
CREATE TABLE mute (
who text,
whom text,
what text,
time text,
block integer,
constraint pkey primary key (who, whom)
);
CREATE INDEX index_from on mute(who);
CREATE INDEX index_to on mute(whom);
CREATE INDEX index_time on mute(time);
CREATE INDEX index_what on mute(what);
CREATE INDEX index_block on mute(block);
```

And if we run the query to see the number of the candidate rows:

```
sqlite> select count(rowid) from mute where what='ignore';
332096
sqlite> select count(rowid) from mute where what='blog';
100757608
```

It is a huge difference! Yes, for both queries, SQLite will utilize the index `what` and process the result set by grouping - the more rows - the more time it requires!

This can be confirmed by the `explain` statement which takes you how the SQLite will process your query.

```
sqlite> explain select whom,count(1) from mute where what='blog' group by whom order by count(1) desc limit 100;
addr  opcode         p1    p2    p3    p4             p5  comment      
----  -------------  ----  ----  ----  -------------  --  -------------
0     Init           0     57    0                    00  Start at 57  
1     OpenEphemeral  1     4     0     k(1,-B)        00  nColumn=4    
2     Integer        100   1     0                    00  r[1]=100; LIMIT counter
3     SorterOpen     2     1     0     k(1,B)         00               
4     Integer        0     5     0                    00  r[5]=0; clear abort flag
5     Integer        0     4     0                    00  r[4]=0; indicate accumulator empty
6     Null           0     8     8                    00  r[8..8]=NULL 
7     Gosub          7     49    0                    00               
8     OpenRead       0     2     0     3              00  root=2 iDb=0; mute
9     OpenRead       3     7     0     k(2,,)         02  root=7 iDb=0; index_what
10    String8        0     10    0     blog        00  r[10]='blog'
11    SeekGE         3     18    10    1              00  key=r[10]    
12      IdxGT          3     18    10    1              00  key=r[10]    
13      DeferredSeek   3     0     0                    00  Move 0 to 3.rowid if needed
14      Column         0     1     11                   00  r[11]=mute.whom
15      MakeRecord     11    1     12                   00  r[12]=mkrec(r[11])
16      SorterInsert   2     12    0                    00  key=r[12]    
17    Next           3     12    1                    00               
18    OpenPseudo     4     11    1                    00  1 columns in r[11]
19    SorterSort     2     51    0                    00  GROUP BY sort
20      SorterData     2     11    4                    00  r[11]=data   
21      Column         4     0     9                    00  r[9]=        
22      Compare        8     9     1     k(1,B)         00  r[8] <-> r[9]
23      Jump           24    28    24                   00               
24      Move           9     8     1                    00  r[8]=r[9]    
25      Gosub          6     37    0                    00  output one row
26      IfPos          5     51    0                    00  if r[5]>0 then r[5]-=0, goto 51; check abort flag
27      Gosub          7     49    0                    00  reset accumulator
28      Integer        1     12    0                    00  r[12]=1      
29      AggStep0       0     12    3     count(1)       01  accum=r[3] step(r[12])
30      Column         4     0     2                    00  r[2]=        
31      Integer        1     4     0                    00  r[4]=1; indicate data in accumulator
32    SorterNext     2     20    0                    00               
33    Gosub          6     37    0                    00  output final row
34    Goto           0     51    0                    00               
35    Integer        1     5     0                    00  r[5]=1; set abort flag
36    Return         6     0     0                    00               
37    IfPos          4     39    0                    00  if r[4]>0 then r[4]-=0, goto 39; Groupby result generator entry point
38    Return         6     0     0                    00               
39    AggFinal       3     1     0     count(1)       00  accum=r[3] N=1
40    Copy           2     15    0                    00  r[15]=r[2]   
41    Copy           3     13    0                    00  r[13]=r[3]   
42    Sequence       1     14    0                    00  r[14]=cursor[1].ctr++
43    MakeRecord     13    3     17                   00  r[17]=mkrec(r[13..15])
44    IdxInsert      1     17    13    3              00  key=r[17]    
45    IfNotZero      1     48    0                    00  if r[1]!=0 then r[1]--, goto 48
46    Last           1     0     0                    00               
47    Delete         1     0     0                    00               
48    Return         6     0     0                    00  end groupby result generator
49    Null           0     2     3                    00  r[2..3]=NULL 
50    Return         7     0     0                    00               
51    Sort           1     56    0                    00               
52      Column         1     2     15                   00  r[15]=whom   
53      Column         1     0     16                   00  r[16]=count(1)
54      ResultRow      15    2     0                    00  output=r[15..16]
55    Next           1     52    0                    00               
56    Halt           0     0     0                    00               
57    Transaction    0     0     20    0              01  usesStmtJournal=0
58    Goto           0     1     0                    00      
```

SQLite is a relational database - which makes it inefficient in handling a large dataset. The steem <a href="https://helloacm.com/illustrating-the-blockchain-via-steemjs-blocks-are-chained/" title="Illustrating the Blockchain via SteemJs – Blocks are Chained">blockchain</a> has been running for years - the data accumulates quickly.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/sqlite-explan-why-the-most-popular-accounts-query-is-slow-compared-to-most-blocked-accounts-query/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Why the Most Popular Accounts Query is Slow compared to Most Blocked Accounts Query?'](https://steemit.com/@justyy/why-the-most-popular-accounts-query-is-slow-compared-to-most-blocked-accounts-query)
