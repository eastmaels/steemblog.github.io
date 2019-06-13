
---
title: 'Coding Exercise - Flip the Integers (Bit Manipulation) - 编程练习题：翻转整数位'
permlink: coding-exercise-flip-the-integers-bit-manipulation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-23 23:17:09
categories:
- programming
tags:
- programming
- coding-exercise
- cn-programming
- busy
- coding
thumbnail: https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED)

Question: Write a function to compute the number of [bits](https://helloacm.com/c-programming-exercise-inspect-two-consecutive-bits-of-integer/) required to convert a integer to another.
For example, Input 29 (or 11101), 15 (or 01111) the output is 2.

It may seem complex but it is actually easy to do. The number of different bits can be counted by the exclusive OR (XOR). If the XOR of two bits are 1, which means a flip is required. In the following, we just shift the result of A xor B and count each bit if it is one:

```
int bitSwapRequired(int a, int b) {
  int count = 0;
  for (int c = a^b; c != 0; c >>>= 1) {
    count += c & 1;
  }
  return count;
}
```

However, this can be improved a little bit better. Instead of shifting one bit at a time, we can use `X & (X - 1)` to clear the least significant bit. 

```
int bitSwapRequired(int a, int b) {
  int count = 0;
  for (int c = a^b; c != 0; c &= (c - 1)) {
    count ++;
  }
  return count;
}
```

This Bit Manipulation question is often asked in a interview, so it is worth remembering the tricks!

Reposted to my [blog](https://helloacm.com/c-coding-exercise-flip-the-integers-bit-manipulation/)

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

----------------------------------------------

题意：给定两个整数，计算从一个整数需要翻转几个位才能到另一个整数。
比如：给定29 二进制为11101 和 15，二进制是01111，则答案是2次。

这题的关键就是用 XOR 异或来获得两个整数不同位。因为只有当两个位不一样的时候 异或的结果才是1。所以我们可以写成以下[循环](https://justyy.com/archives/6422)，每次向右移1位，累计 c & 1

```
int bitSwapRequired(int a, int b) {
  int count = 0;
  for (int c = a^b; c != 0; c >>>= 1) {
    count += c & 1;
  }
  return count;
}
```

我们还可以稍微改进一下，就是用 x & (x - 1) 来移除最右边的那个1。这样循环可以写成：

```
int bitSwapRequired(int a, int b) {
  int count = 0;
  for (int c = a^b; c != 0; c &= (c - 1)) {
    count ++;
  }
  return count;
}
```

这题还是在初面的时候挺常见的，也是较简单，但是如果没有看过当场还不一定想出一个很好的方法。

刚刚同步到我的[博客](https://justyy.com/archives/6428)。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Flip the Integers (Bit Manipulation) - 编程练习题：翻转整数位](https://steemit.com/@justyy/coding-exercise-flip-the-integers-bit-manipulation)
