
---
title: 'Algorithms Series: 0/1 BackPack  ACM题解 - 经典0/1背包问题'
permlink: algorithms-series-0-1-backpack-acm-0-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-22 02:11:54
categories:
- programming
tags:
- programming
- cn
- steemstem
- cn-programming
- busy
thumbnail: https://gateway.ipfs.io/ipfs/QmfZeF9fBXMi4skDgmtiHpLjfW5Zfy8rwafYq2h4HrmyEJ
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://gateway.ipfs.io/ipfs/QmfZeF9fBXMi4skDgmtiHpLjfW5Zfy8rwafYq2h4HrmyEJ)

Given *n* items with size *A[i]* (i from 0 to n - 1), an integer *m* denotes the size of a backpack. How full you can fill this [backpack](https://helloacm.com/algorithms-series-0-1-backpack-dynamic-programming-and-backtracking/)?

Put this mathematically, you are trying to:

> max(sum(j[i] * A[i]))
subject to: j[i] = {0, 1} and sum(j[i] * A[i]) <= m
where 0 =< i < n

*j[i]* indicates that whether you put item *i* in the backpack. 

## Backtracking
If we start from the first item, we have two choices, put it or do not put it in the bag. So it is a decision binary tree of depth n where each level corresponding to a item. The complexity is O(2^n) . 

If the remaining capacity is enough (bigger than the current size of item), otherwise we can choose skipping current item.

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
        pack(0, m, A);
        return curMax;
    }

    void pack(int n, int weight, vector<int> &A) {
        int sz = A.size();
        int m = 0;
        for (int i = n; i < sz; i ++) {
            pack(n + 1, weight, A);  // do not put it
            if (weight >= A[i]) {   // we can put it
                m += A[i];
                if (m > curMax) {
                    curMax = m;
                }
                weight -= A[i];
                pack(n + 1, weight, A);  // put it
            } 
        }
    }
    
private:
    int curMax = 0;
};
```

However, this recursion backtracking is too slow because of the large search space especially if n is large.

## Dynamic Programming
If, we use *dp[i][j]* to represent that if we can use first *i* items (maximum, could use less) to pack at most *j* weight. Thus, the following stands:

> dp[i][j] = dp[i - 1][j] || dp[i - 1][j - A[i - 1]];

This can be interpreted as: 
1. by achieving dp[i][j] we automatically achieve dp[i + 1][j]
2. by achieving dp[i][j] we automatically achieve dp[i + 1][j + A[i + 1]]

The [DP solution](https://helloacm.com/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity/) allows you to cache intermediate results so you don't have to calculate them over and over again.

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
            int size = A.size();
            vector< vector<bool> > dp(size + 1, vector<bool>(m + 1, false));
            for (int i = 0; i < size + 1; ++ i) {
                dp[i][0] = true;
            }
            for(int i = 1; i < A.size() + 1; i++) {
                for(int j = 1; j < m + 1; j++) {
                    if(j < A[i - 1]) { // insufficient capacity
                        dp[i][j] = dp[i - 1][j];
                    } else {
                        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - A[i - 1]];
                    }
                }
            }
            for (int i = m; i >= 0; i--) { // reverse checking the maximum weight
                if (dp[size][i]) {
                    return i;
                }
            }
            return 0;
    }
};
```

The O(nm) solution (with O(mn) space) fills the DP array and in the end, we need to check if we can fulfil the backpack from *m* downards to *zero* (get the maximum)

## Memory Optimisation
We can see that the dp[i] is fully dependent on the dp[i-1], thus, we can optimise the memory consumption from O(mn) to O(m).

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
            int size = A.size();
            vector<bool> dp(m + 1, false);
            dp[0] = true;
            for (int i = 1; i < A.size() + 1; i++) {
                for (int j = m; j >= 1; --j) {
                    if(j >= A[i - 1]) {
                        dp[j] = dp[j] || dp[j - A[i - 1]];
                    }
                }
            }
            for (int i = m; i >= 0; i--) {
                if (dp[i]) {
                    return i;
                }
            }
            return 0;
    }
};
```

The runtime complexity is still O(mn) where you need to reverse the inner loop from m downwards to 1.

-----------------------------------

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

------------------------------------------------------------------

[0/1背包问题](https://justyy.com/archives/6271)是非常经典的算法问题。要求是：给定 n 个物件，每个物件的重量（或体积）是 A[i] 那么请问一个最多装重（或体积） m 的背包最多可以装下多少这些物件。

如果用数学表示这个问题：

> max(sum(j[i] * A[i]))
subject to: j[i] = {0, 1} and sum(j[i] * A[i]) <= m
where 0 =< i < n

*j[i]* 就是控制是否装下第 i 个 物件 的变量（0或者1）

## 回溯算法
把整个搜索空间从第一个物件开始当成树根，那么这是一棵二叉树，每层的节点就能对应到每个物品，两个分叉分别代表是否把当前节点（物品）装入背包中。

不难想像，时间复杂度为 O(2^n)。如果当前背包并不能装下当前物件，那么我们需要继续尝试下一个物品，直到所有物品尝试完并回溯。

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
        pack(0, m, A);
        return curMax;
    }

    void pack(int n, int weight, vector<int> &A) {
        int sz = A.size();
        int m = 0;
        for (int i = n; i < sz; i ++) {
            pack(n + 1, weight, A);  // 不放
            if (weight >= A[i]) {   // 可以放
                m += A[i];
                if (m > curMax) {
                    curMax = m;
                }
                weight -= A[i];
                pack(n + 1, weight, A);  // 放
            } 
        }
    }
    
private:
    int curMax = 0;
};
```

这个算法的问题就是慢。特别是物品数量多的时候，整个搜索空间就变得巨大。

## 动态规化
如果我们用 *dp[i][j]* 来表示是否可以用最多 前 i 件物品来装最多重量（或者体积） 为 j 。那么：

> dp[i][j] = dp[i - 1][j] || dp[i - 1][j - A[i - 1]];

我们可以反过来理解：
1. 如果dp[i][j] 那么下一件物品我们不装的话： dp[i + 1][j]
2. 如果dp[i][j] 那么装下下一件物品： dp[i + 1][j + A[i + 1]]

[动态规化](https://justyy.com/archives/5004)的优点就是可以把中间结果给缓存起来，这样就不会像递规回溯一样有些结果（中间节点）会重复计算。

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
            int size = A.size();
            vector< vector<bool> > dp(size + 1, vector<bool>(m + 1, false));
            for (int i = 0; i < size + 1; ++ i) {
                dp[i][0] = true;
            }
            for(int i = 1; i < A.size() + 1; i++) {
                for(int j = 1; j < m + 1; j++) {
                    if(j < A[i - 1]) { // 装不下了
                        dp[i][j] = dp[i - 1][j];
                    } else {
                        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - A[i - 1]];
                    }
                }
            }
            for (int i = m; i >= 0; i--) { // 反过来从大到小检查能装下的最大重量
                if (dp[size][i]) {
                    return i;
                }
            }
            return 0;
    }
};
```

时间复杂度和空间复杂度都是 O(nm)。最后面我们只要反过来检查 dp[A.size()][j] 为 true 的第一个下标 j 就是当前背包能装下的最大重量。

## 内存优化
上面的DP公式我们不难发现， 在计算 dp[i] 的时候只依赖于 dp[i-1], 这样我们就可以只用一维来存取 dp[i-1] 的情况。这样，空间复杂度从 O(mn) 就降到了 O(m).

```
class Solution {
public:
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
     
    int backPack(int m, vector<int> &A) {
            int size = A.size();
            vector<bool> dp(m + 1, false);
            dp[0] = true;
            for (int i = 1; i < A.size() + 1; i++) {
                for (int j = m; j >= 1; --j) { // 内循环需要从 m 到 1 的检查
                    if(j >= A[i - 1]) {
                        dp[j] = dp[j] || dp[j - A[i - 1]];
                    }
                }
            }
            for (int i = m; i >= 0; i--) {
                if (dp[i]) {
                    return i;
                }
            }
            return 0;
    }
};
```

-----------------------------------
## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn)
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 为[代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

您可能还会喜欢：**[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)**
.

- - -

This page is synchronized from the post: [Algorithms Series: 0/1 BackPack  ACM题解 - 经典0/1背包问题](https://steemit.com/@justyy/algorithms-series-0-1-backpack-acm-0-1)
