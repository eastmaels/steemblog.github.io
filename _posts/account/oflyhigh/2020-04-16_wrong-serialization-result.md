
---
title: 'Wrong serialization result  与签名错误'
permlink: wrong-serialization-result
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-16 12:05:39
categories:
- hivedev
tags:
- hivedev
- hive
- programming
- life
thumbnail: 'https://cdn.pixabay.com/photo/2016/11/30/12/09/question-mark-1872634_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In many client programs, a signature failure occurs when an operation such as a transfer is performed.

![](https://cdn.pixabay.com/photo/2016/11/30/12/09/question-mark-1872634_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

A temporary and useful solution is to replace symbols such as "HIVE" and "HBD" in operations (such as transfer) with "STEEM" and "SBD". But it feels strange.

Today I'm trying to figure out what's causing this problem.

I created a transaction like this one:
```
{'expiration': '2020-04-16T09:30:55',
 'extensions': [],
 'operations': [['transfer',
                 {'amount': '0.001 HIVE',
                  'from': 'oflyhigh.test',
                  'memo': 'Hello',
                  'to': 'oflyhigh'}]],
 'ref_block_num': 54383,
 'ref_block_prefix': 2003201470,
 'signatures': []}
```

Then use `get_transaction_hex` to serialize it. I got the result like this one:
>Hex b'o\xd4\xbemfw\xcf%\x98^\x01\x02\roflyhigh.test\x08oflyhigh\x01\x00\x00\x00\x00\x00\x00\x00\x03STEEM\x00\x00\x05Hello\x00\x00'

It's not hard to see "oflyhigh", "oflyhigh.test", "Hello", etc., but why the "STEEM" character? Shouldn't it be the HIVE character?

I tried to sign and broadcast on top of that, what happened? It worked!
>![image.png](https://images.hive.blog/DQmeQ7y9GvFSwppHmx5K2hjRk7HanssZzPdNLiZTkSSKEhV/image.png)


Therefore, it is not difficult to conclude that the server-side (chain side) serialized token symbol is "STEEM" "SBD", which also explains why many client programs have errors like "Missing Active Authority".

Because on the client side, “HIVE” and “HBD” are typically used as token symbols and serialized on the client side, The result of serialization is not the same as that of the server-side (chain side) .

So the best approach is not to replace "HIVE" &" HBD" with "STEEM" &"SBD" in the client script, but to solve the problem completely on the server-side (chain side) .

But as far as I know it's a super complicated thing and there's nothing I can do about it.😳

- - -

This page is synchronized from the post: ['Wrong serialization result  与签名错误'](https://steemit.com/@oflyhigh/wrong-serialization-result)
