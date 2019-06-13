
---
title: 'Data Structures & Algorithms Series - Majority Number | ACM 解题报告 - O(n)找多数算法'
permlink: data-structures-and-algorithms-series-majority-number-or-acm-o-n
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-02 19:14:51
categories:
- programming
tags:
- programming
- busy
- cn-programming
- steemstem
- algorithms
thumbnail: https://gateway.ipfs.io/ipfs/QmdnBXWWyeBTrqQW2i6KFc9TfTaKQAUNwtjPBDtkkkREm3
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://gateway.ipfs.io/ipfs/QmdnBXWWyeBTrqQW2i6KFc9TfTaKQAUNwtjPBDtkkkREm3)

> Given an array of integers, the majority number is the number that occurs more than half of the size of the array. Find it in O(n) time and O(1) space complexity.

A simple example: Given [1, 1, 1, 1, 2, 2, 2], return 1 because the number 1 has appeared 4 times which is bigger than half size i.e. 3.5 times.

The very straightforward approach will be using a [hashmap](https://helloacm.com/coding-exercise-cjava-leetcode-online-judge-two-sum-hashmap/) to record the number of occurrences for each number, and return the majority once its counter exceeds half size.

```
class Solution {
public:
    /*
     * @param nums: a list of integers
     * @return: find a  majority number
     */
    int majorityNumber(vector<int> &nums) {
        unordered_map<int, int> counter;
        int half = nums.size() / 2;
        for (auto n: nums) {
            if (counter.count(n) == 0) {
                counter[n] = 0;
            } 
            counter[n] ++;
            if (counter[n] >= half) {
                return n;
            }
        }
        return -1; // not found
    }
};
```

The `unordered_map` has complexity of O(1) in inserting and querying (worst case O(n)) and the above algorithm O(n) time complexity but O(n) space complexity.

## Boyer–Moore majority vote algorithm
The [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) is a O(N) one-pass algorithm that only needs O(1) constant space.

It works by only recording the counter for the current majority candidate. If there exists a majority, the algorithm guarantees to find it, otherwise it will output one of the sequence numbers as it finds it. A second pass is required to check if there is a majority. Let's take [1 1 1 2 2 3 1] for example, `m` is the current majority candidate and `c` is the counter. When `c` is zero in the next round, the `m` is set to the current number in the iteration.

When the current number is the same as 'candidate', we increment the counter (vote) otherwise, we decrement the counter (de-vote).

[*1 1 1 2 2 3 1]   m = 1,  c = 1
[1 *1 1 2 2 3 1]   m = 1,  c = 2
[1 1 *1 2 2 3 1]   m = 1,  c = 3
[1 1 1 *2 2 3 1]   m = 1,  c = 2
[1 1 1 2 *2 3 1]   m = 1,  c = 1
[1 1 1 2 2 *3 1]   m = 1,  c = 0
[1 1 1 2 2 3 *1]   m = 1,  c = 1

The second pass we know that `m=1` is the majority.  The entire process is illustrated in the [following C++ code](https://helloacm.com/data-structures-algorithms-series-majority-number-boyer-moore-majority-vote-algorithm/).

```
class Solution {
public:
    /*
     * @param nums: a list of integers
     * @return: find a  majority number
     */
    int majorityNumber(vector<int> &nums) {
        int c = 0, m = nums[0];
        for (int i = 0; i < nums.size(); ++ i) {
            if (c == 0) {
                m = nums[i];
                c ++;
            } else if (m == nums[i]) {
                c ++;
            } else {
                c --;   
            }
        }
        // check if there is a majority
        int counter = 0;
        for (int i : nums) {
            if (i == m) counter++;
        }
        if (counter < (nums.size() + 1) / 2) return -1;        
        return m;
    }
};
```

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

-------------------------------------------

> 给定一些整数，请找出它们中的的“多数”。 一个数字如果超过了一半，那么它就是多数。假定这样的数是存在的。

比如，给定 [1, 1, 1, 1, 2, 2, 2], 您的算法将给出 答案 1 因为1出现了4次超过了一半（3.5次）

最直接的算法就是通过 字典（或者[HASHMAP](https://justyy.com/archives/4992)）记录每个出现数字的次数，然后只要判断其中一个出现超过一半了，就返回它。

```
class Solution {
public:
    /*
     * @param nums: a list of integers
     * @return: find a  majority number
     */
    int majorityNumber(vector<int> &nums) {
        unordered_map<int, int> counter;
        int half = nums.size() / 2;
        for (auto n: nums) {
            if (counter.count(n) == 0) {
                counter[n] = 0;
            } 
            counter[n] ++;
            if (counter[n] >= half) {
                return n;
            }
        }
        return -1; // 没有找到
    }
};
```

C++中的`unordered_map`插入复杂度是常数 O(1)，平均情况下查找也是O(1) - 注意最坏情况下是 O(n). 上面的算法 时间复杂度是 O(n) 但是空间复杂度是 O(n) - 因为用了 `unordered_map`

## Boyer–Moore 多数投票算法
[Boyer–Moore 多数投票算法](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) 只需要常数O(1) 空间复杂度，况且，假定多数存在的话，也只需要一遍循环 O(n) 即可。

其实原理就是：我们只需要记录当前最多数的情况即可。如果存在多数，那么算法一定会找到它。否则，该算法返回顺序数字中的一个数。往往我们需要第二次循环用于确认有一个多数。

拿输入 [1 1 1 2 2 3 1]  为例， `m` 记录着当前的最多数， `c` 是计数。当 `c` 变成0的时候，则下一轮就得更新`m` 为下一轮的数字。

当这一轮的数字和 `m` 是一样的，我们就增加投票数 `c` 否则就把 `c` 减掉一。

[*1 1 1 2 2 3 1]   m = 1,  c = 1
[1 *1 1 2 2 3 1]   m = 1,  c = 2
[1 1 *1 2 2 3 1]   m = 1,  c = 3
[1 1 1 *2 2 3 1]   m = 1,  c = 2
[1 1 1 2 *2 3 1]   m = 1,  c = 1
[1 1 1 2 2 *3 1]   m = 1,  c = 0
[1 1 1 2 2 3 *1]   m = 1,  c = 1

第一次循环，我们知道 `m=1` 超过了一半。 整个过程可以用以下 [C++ 代码来演示](https://justyy.com/archives/6178)。

```
class Solution {
public:
    /*
     * @param nums: a list of integers
     * @return: find a  majority number
     */
    int majorityNumber(vector<int> &nums) {
        int c = 0, m = nums[0];
        for (int i = 0; i < nums.size(); ++ i) {
            if (c == 0) {
                m = nums[i];
                c ++;
            } else if (m == nums[i]) {
                c ++;
            } else {
                c --;   
            }
        }
        // check if there is a majority
        int counter = 0;
        for (int i : nums) {
            if (i == m) counter++;
        }
        if (counter < (nums.size() + 1) / 2) return -1;        
        return m;
    }
};
```

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

- - -

This page is synchronized from the post: [Data Structures & Algorithms Series - Majority Number | ACM 解题报告 - O(n)找多数算法](https://steemit.com/@justyy/data-structures-and-algorithms-series-majority-number-or-acm-o-n)
