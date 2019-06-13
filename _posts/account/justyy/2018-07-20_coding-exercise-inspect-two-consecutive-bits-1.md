
---
title: 'Coding Exercise - Inspect Two Consecutive Bits - 编程练习题 ：判断是否有连续两个1'
permlink: coding-exercise-inspect-two-consecutive-bits-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-20 19:36:33
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

Question: Implement the *inspect_bits* function to check if any given 32-bit integer contains 2 or more consecutive ones in its binary representation. If it does, the function should return 1 otherwise it should return 0.

For example, given 13, the function should return 1 because it contains 2 consecutive ones in its binary representation (1101).

We know we can use `x & (-x)` to get the [least significant byte (LSB)](https://helloacm.com/c-coding-exercise-number-of-1-bits-revisited/) of any given integer. Therefore, the idea is to get its current LSB and compare to its previous LSB. If there are two consecutive 1 bits, the current LSB will be exactly twice big as its previous LSB. At each iteration, the LSB will be subtracted from the given input until the number becomes zero.

The C code is as follows.

```
int inspect_bits(unsigned int number)
{
    int cur, prev = 0;
    while (number > 0) {
        cur = number & (-number);
        if (prev * 2 == cur) {
            return 1;
        }
        number -= cur;
        prev = cur;
    }
    return 0;
}
```

The complexity is O(log N) because it takes at most O(log N) times to scan the bits of the integer.

# Any better (or other) approaches?
Reposted to [my blog](https://helloacm.com/c-programming-exercise-inspect-two-consecutive-bits-of-integer/).

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

---------------------------------------------

题意就是判断一个整数的二进制表达式里是否有连续两个1。我们知道 我们可以用 x & (-x) 来获取一个整数二进制表示里最右边的那个1。那么我们就可以写一个循环不停的返回最右边的那个1的值，并且我们记录了上一个1的值，这样只要有连续两个1，那么这两个1的值的关系就是两倍。

C代码看上面，复杂度是 O(log N) 因为最多需要 log N 次就可以把一个整数的二进制位过一遍。

本文刚刚同步到博文：[https://justyy.com/archives/6422](https://justyy.com/archives/6422)

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Inspect Two Consecutive Bits - 编程练习题 ：判断是否有连续两个1](https://steemit.com/@justyy/coding-exercise-inspect-two-consecutive-bits-1)
