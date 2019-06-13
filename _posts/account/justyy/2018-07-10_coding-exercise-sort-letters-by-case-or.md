
---
title: 'Coding Exercise - Sort Letters by Case | 编程练习题 - 排序字母'
permlink: coding-exercise-sort-letters-by-case-or
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-10 00:27:30
categories:
- programming
tags:
- programming
- busy
- cn-programming
- coding-exercise
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


![image.png](https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED)

Given a string which contains only letters. Sort it by lower case first and upper case second.

## Example
For "abAcD", a reasonable answer is "acbAD"

## Challenge
Do it in one-pass and in-place.

## C++ Solution
No additional space should be used. We can use two pointers to skip in-place characters from both end, swap them if they are not until they meet in the middle.

The space complexity is O(1) and the time complexity is O(n).
```
class Solution {
public:
    /*
     * @param chars: The letter array you should sort by Case
     * @return: nothing
     */
    void sortLetters(string &chars) {
        int i = 0, j = chars.length() - 1;
        while (i <= j) {
            // skipping in-place lower characters from the begining
            while ((chars[i] >= 'a') && (chars[i] <= 'z') && i < j) i ++;
            // skipping in-place upper characters from the end
            while ((chars[j] >= 'A') && (chars[j] <= 'Z') && i < j) j --;
            // swap
            auto t = chars[i];
            chars[i] = chars[j];
            chars[j] = t;
            i ++; 
            j --;
        }
    }
};
```

## Support me and [my work](https://helloacm.com/coding-exercise-sort-letters-by-case-c/) as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

Also reposted to my blog: https://helloacm.com/coding-exercise-sort-letters-by-case-c/

---------------------
这题的关键在于不能额外开内存。我们可以分别从字符串的首尾开始来检查，直到它们在中间相遇。如果首指针遇到了大写字母，尾指针遇到了小写字母 就把它们交换一下即可。

时间复杂度是 O(n), 空间复杂度是 O(1)

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Sort Letters by Case | 编程练习题 - 排序字母](https://steemit.com/@justyy/coding-exercise-sort-letters-by-case-or)
