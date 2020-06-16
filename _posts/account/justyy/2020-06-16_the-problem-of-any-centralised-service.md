
---
title: 'The problem of Any Centralised Service'
permlink: the-problem-of-any-centralised-service
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-16 17:58:15
categories:
- codeonsteem
tags:
- codeonsteem
- whalepower
- account-creation
- witness-category
- account-tickets
- programming
- steem-dev
- mysql
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I took a look at the number of registered users https://steemyy.com/reg.php  by running the following SQL:

```
mysql> select DATE_FORMAT(`ts`, '%Y-%m-%d') as datestr, count(1)  from reg where  password!=''  group  by  datestr order by datestr;
+------------+----------+

| datestr    | count(1) |
+------------+----------+

| 2020-05-08 |        2 |
| 2020-05-09 |       10 |
| 2020-05-10 |        3 |
| 2020-05-16 |        1 |
| 2020-05-17 |        1 |
| 2020-05-18 |        2 |
| 2020-05-19 |        1 |
| 2020-05-21 |        2 |
| 2020-05-22 |        1 |
| 2020-05-25 |        2 |
| 2020-05-28 |        2 |
| 2020-05-30 |        1 |
| 2020-05-31 |        1 |
| 2020-06-02 |        1 |
| 2020-06-03 |        1 |
| 2020-06-04 |        1 |
| 2020-06-05 |        2 |
| 2020-06-06 |        2 |
| 2020-06-08 |        1 |
| 2020-06-09 |        2 |
| 2020-06-11 |        4 |
| 2020-06-12 |        1 |
| 2020-06-13 |        9 |
| 2020-06-14 |        6 |
| 2020-06-15 |        2 |
| 2020-06-16 |        4 |
+------------+----------+
26 rows in set (0.01 sec)
```

Obviously, it is getting popular. For now, it is fine as the numbers are still quite small even it is growing. With my SP, I could claim around 50 free tickets per day, and with my current ticket number, this service can sustain itself in the next few months or years.

However, if, sometime in the future, this service is getting quite popular, and let's say more than 1000 user registration per day, apparently the number of the free tickets claimed will be a bottleneck. Let's say we fix this problem magically, and the number of the users increases to 1000 per second, then the main problem will be techincally on the scaling part - which can be solved by introducing a load balancer, and migrating data to non-relational database rather than MySQL.

With current design on steem blockchain, the free tickets can be claimed, but cannot be given to others. It would be great if we can trade the tickets, or delegate those tickets and in return are rewarded for account creation.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
Reposted to [Blog](https://helloacm.com/how-to-renew-the-free-ssl-certificates-nginx-server/)
------------------


If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['The problem of Any Centralised Service'](https://steemit.com/@justyy/the-problem-of-any-centralised-service)
