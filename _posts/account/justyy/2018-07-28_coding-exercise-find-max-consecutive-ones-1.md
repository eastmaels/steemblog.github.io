
---
title: 'Coding Exercise - Find Max Consecutive Ones 编程练习题 - 最多连续的 1'
permlink: coding-exercise-find-max-consecutive-ones-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-28 23:18:42
categories:
- programming
tags:
- programming
- coding-exercise
- cn-programming
- busy
- coding
thumbnail: 'https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED)

> Given a binary array, find the maximum number of consecutive 1s in this array.
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note: The input array will only contain 0 and 1. 
The length of input array is a positive integer and will not exceed 10,000

We count of the current consecutive 1s and the maximum count when iterating the numbers from left to right. If current element is 1, we increment the counter and compare to the maximum. Otherwise, we reset the current counter.

```
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        auto r = 0, m1 = 0;
        for (auto n: nums) {
            if (n == 1) {
                r ++;
                m1 = max(m1, r);
            } else {
                r = 0;
            }
        }
        return m1;
    }
};
```

Using [Python](https://helloacm.com/interview-coding-exercise-nested-string-python/), this can be solved in a slightly different way - join the array as a string, split by delimiter '0' and get the maximum length of the 1s.

```
return max([len(i) for i in "".join(map(str, nums)).split('0')])
```

Reposted to: https://helloacm.com/coding-exercise-find-max-consecutive-ones/

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

-------------------------------------------------

题意：给定一个只含有1或0的数组，求连续为1最长长度是多少。

两个变量，记录当前遇到最长的长度m1，还有从上一次遇到0以来最长1的长度r，边遍历边更新。遇到0就重置r。

用[PYTHON](https://justyy.com/archives/5217)的另一种做法：把数组连接成字符串，然后按0重新分组，求出剩下为1字符串的分组中最长的那个即可。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

刚刚同步到我的[博客](https://justyy.com/archives/6434)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: ['Coding Exercise - Find Max Consecutive Ones 编程练习题 - 最多连续的 1'](https://steemit.com/@justyy/coding-exercise-find-max-consecutive-ones-1)
