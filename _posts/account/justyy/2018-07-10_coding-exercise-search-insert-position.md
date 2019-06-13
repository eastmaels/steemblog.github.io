
---
title: 'Coding Exercise - Search Insert Position 编程练习题 - 寻找插入位置'
permlink: coding-exercise-search-insert-position
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-10 12:54:12
categories:
- programming
tags:
- programming
- busy
- cn-programming
- coding-exercise
- algorithms
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmfPN8W19QLM76b6UdUgKfFQvZ6niiF1VD4Zk4SqBC2LED)

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.

> Example 1:
Input: [1,3,5,6], 5
Output: 2

> Example 2:
Input: [1,3,5,6], 2
Output: 1

> Example 3:
Input: [1,3,5,6], 7
Output: 4

> Example 4:
Input: [1,3,5,6], 0
Output: 0

## O(n) naive solution
Try from the begining of the array and see if it is bigger or equal than the current element, thanks to the fact that the vector is already sorted. One pass if we don't find the target i.e. the number to insert is bigger than all the numbers, we need to insert the number at the end of the vector.
```
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        for (auto i = 0; i < nums.size(); ++ i) {
            if (nums[i] >= target) {
                return i;
            }
        }
    }
};
```

## O(logn) solution - binary search
We know the array is sorted, so we can reduce the search to O(logN) via [binary search](https://helloacm.com/how-to-validate-binary-search-tree-in-cc/). If not found, `i>=j` then we need to compare target with the `nums[i]`, return `i + 1 ` if the target is bigger (insert after) or `i` otherwise (insert before).

```
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int i = 0, j = nums.size() - 1;        
        int mid;
        while (i < j) {
            mid = i + (j - i) / 2;            
            if (target == nums[mid]) {
                return mid;
            }
            if (target > nums[mid]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return (target > nums[i]) ? i + 1 : i;
    }
};
```

## Support me and [my work](https://helloacm.com/c-coding-exercise-search-insert-position/) as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

Reposted to my [blog](https://helloacm.com/c-coding-exercise-search-insert-position/) for better archiving.

---------------------
水题。最简单粗暴的方法就是从头开始比较直到找到比目标大的或者相当的数，返回数组下标即可。算法复杂度为O(n)。

因为数组本身就是排序的，而且没有重复，所以可以直接用二分查找算法把这部分复杂度降到 O(logN), 找到的话直接返回数组下标，否则得判断 nums[i] 的值，如果大于，则返回 i + 1, 否则返回 i。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Search Insert Position 编程练习题 - 寻找插入位置](https://steemit.com/@justyy/coding-exercise-search-insert-position)
