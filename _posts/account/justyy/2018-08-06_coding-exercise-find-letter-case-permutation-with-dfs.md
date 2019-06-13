
---
title: 'Coding Exercise - Find Letter Case Permutation with DFS 编程练习题：找出字符串的所有大小小组合'
permlink: coding-exercise-find-letter-case-permutation-with-dfs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-06 20:00:03
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

> Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create. Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
Input: S = "3z4"
Output: ["3z4", "3Z4"]
Input: S = "12345"
Output: ["12345"]
Note: S will be a string with length at most 12. S will consist only of letters or digits.

## DFS (Depth First Search) using Recursion
Starting from the first letter, we recursively concat it. Each letter could have maximum two variants (lowercase and uppercase). When we reach the end of the string, we push the current string to the result vector.

[DFS](https://helloacm.com/c-coding-exercise-sum-of-left-leaves-bfs-dfs-recursion/) can be implemented using a helper function in [recursion](https://helloacm.com/how-to-check-symmetric-tree-in-c-iterative-and-recursion/).

```
class Solution {
public:
    vector<string> letterCasePermutation(string S) {
        search("", S, 0, S.length() - 1);
        return r;
    }
    
private:
    vector<string> r;
    void search(string cur, string S, int i, int j) {
        if (i > j) {
            r.push_back(cur);
            return ;
        }
        auto ch1 = string(1, std::toupper(S[i])); // convert character to string
        search(cur + ch1, S, i + 1, j);
        auto ch2 = string(1, std::tolower(S[i]));
        if (ch2 != ch1) { // if it has a uppercase or lowercase
            search(cur + ch2, S, i + 1, j);
        }
    }
};
```

Reposted to [my blog](https://helloacm.com/c-coding-exercise-find-letter-case-permutation-with-dfs/) for better indexing.

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

----------------------------------------------

题意：给定一个字符串，输出所有字符大小写都可以组成的字符串。
如： "ab1" 能成生 ["ab1", "Ab1", "aB1", "AB1"]

## DFS 深度优先 - 递归
我们可以从字符串的开头[递归](https://justyy.com/archives/6431)的把当前字符给添加到最终的字符串中，当当前字符是字母的时候，就有两种可能了。当到达字符串尾部的时候我们把当前字符串添加到结果数组中即可。

```
class Solution {
public:
    vector<string> letterCasePermutation(string S) {
        search("", S, 0, S.length() - 1);
        return r;
    }
    
private:
    vector<string> r;
    void search(string cur, string S, int i, int j) {
        if (i > j) {
            r.push_back(cur);
            return ;
        }
        auto ch1 = string(1, std::toupper(S[i])); // 把字符转成串
        search(cur + ch1, S, i + 1, j);
        auto ch2 = string(1, std::tolower(S[i]));
        if (ch2 != ch1) { // 如果是字母
            search(cur + ch2, S, i + 1, j);
        }
    }
};
```

刚刚同步到我的博客：https://justyy.com/archives/6445

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Find Letter Case Permutation with DFS 编程练习题：找出字符串的所有大小小组合](https://steemit.com/@justyy/coding-exercise-find-letter-case-permutation-with-dfs)
