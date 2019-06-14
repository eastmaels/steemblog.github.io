
---
title: 'I''m rewriting  the amount class in beem for using fixed-point arithmetic'
permlink: i-m-rewriting-the-amount-class-in-beem-for-using-fixed-point-arithmetic
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-06 21:36:03
categories:
- beem
tags:
- beem
- amount
- busy
- python
- steemdev
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)</center>

I'm currently rewriting the Amount class of [beem](https://github.com/holgern/beem), my python library for steem. The amount class represents STEEM, SBD and VESTS amounts:
```
from beem.amount import Amount
a = Amount(6.104, "STEEM")
print(a)
print(float(a))
print(a.amount)
print(a.symbol)
print(int(a))
```
will results in
```
6.104 STEEM
6.104
6.104
STEEM
6104
```


 Currently, a float number is internally used to 
represent STEEM and SBD amounts. I'm trying to improve this by using the decimal class. 

This changes may lead to different results in your code.

## What will change
STEEM and SBD are fix point numbers, which means that they are basically integers.

6.104 STEEM can be represent as 6104. When I now divide or multiply, I could round the amount to an integer.

When I now divide the amount by 6, and multiply it again by 6, I will have the following operations:
```
int(int(6104 / 6) * 6)
```
which will be
```
int(1017 * 6) = 6102
```
Which has the meaning, we have 6.104 STEEM and want it divide by 6, so that 6 accounts can receive the same amount. As this is not possible, we need to send 0.002 STEEM first to @null and then it can be done.


In the same way, when I try to add 0.0001 to 6.104 STEEM, the amount will not change, no matter who often I add 0.0001 to 6.104 STEEM. As  0.0001 STEEM are not valid, it means basically that I try to add 0 STEEM to 6.104 STEEM. Thus, the amount will not change, no matter how often I try to add 0.0001.
```
int(6104 + 0.1) = 6104
```

### What will change

The results of multiplication and addition may be different.
```
(6.104 STEEM + 0.0009) + 0.0009) = 6.104 STEEM
```
Before, the output of this equation was 6.105 STEEM

```
(6.104 STEEM / 6) * 6 = 6.102 STEEM
```
Before, the output was 6.104 STEEM

## What do you think?
Are my planed changes to the Amount class usefull? As the amount is a fixed point number, fixed point arithmetic should be applied, or?



- - -

This page is synchronized from the post: ['I''m rewriting  the amount class in beem for using fixed-point arithmetic'](https://steemit.com/@holger80/i-m-rewriting-the-amount-class-in-beem-for-using-fixed-point-arithmetic)
