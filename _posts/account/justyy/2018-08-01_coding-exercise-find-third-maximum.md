
---
title: 'Coding Exercise - Find Third Maximum 编程练习题 - 找出第三大的数'
permlink: coding-exercise-find-third-maximum
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-01 15:41:36
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

> Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

The third maximum number should ignore [duplicate numbers](https://helloacm.com/cc-coding-exercise-find-the-duplicate-number/), for example, [1, 2, 2, 3] the third maximum is 1 instead of 2. 

## Using std::set
The std::set keeps a sorted unique set of elements. We can update the set when iterating the numbers, keeping a maximum 3 numbers. If there are more than 3 elements in the set, we erase the smallest one. As we can't directly access the elements in the set by index, we use the iterator *rbegin* and *begin* to retrieve the biggest and smallest number respectively.

```
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> data;
        for (const auto &n: nums) {
            data.insert(n);
            if (data.size() > 3) {
                data.erase(data.begin()); // removing the smallest
            } 
        }
        return data.size() < 3 ? *data.rbegin() : *data.begin();
    }
};
```

## Using std::priority_queue
By default, std::priority_queue keeps a queue that guarantees top() returns current maximum  in the queue. We can revert the priority by using std::greater in the third parameter. It is based on the heap where the construction of heap is O(nlogn). However, as we keep the maximum size of 3, the actual complexity of building the priority queue when iterating the number is O(logn). We use std::unordered_set to make sure no duplicates are inserted into the priority queue. Likewise, we maintain the queue of maximum size 3 when iterating the numbers. 

```

class Solution {
public:
    int thirdMax(vector<int>& nums) {
        unordered_set<int> cache;
        priority_queue<int, vector<int>, std::greater<int>> data; // priority in non-descending order
        for (const auto &n: nums) {
            if (cache.count(n)) {
                continue;  // skip the duplicates
            }
            cache.insert(n); // mark it 
            data.push(n); // insert into the priority queu
            if (data.size() > 3) {
                data.pop();
            } 
        }
        if (data.size() < 3) {
            while (data.size() > 1) {
                data.pop();  // removing numbers from small to big
            }
            return data.top(); // the maximum of less 3
        }
        return data.top(); // third maximum
    }
};
```

## using std::vector
Using vector is quite similar to set, however, you will need to skip the duplicate numbers. We have a find() and sort() in the for loop, however the complexity is still O(n) as these two method's running time complexity is independent of the problem size.

```
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        vector<int> max3;
        for (const auto &n: nums) {
            if (std::find(max3.begin(), max3.end(), n) != max3.end()) {
                continue; // skip the duplicates
            }
            max3.push_back(n);
            sort(max3.begin(), max3.end()); // sort array of size 3
            if (max3.size() > 3) {
                max3.erase(max3.begin()); // remove the smallest one
            }
        }
        if (max3.size() == 3) {
            return max3[0];
        } else {
            return max3[max3.size() - 1];
        }
    }
};
```

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

Updated: Reposted to [my blog](https://helloacm.com/c-coding-exercise-find-third-maximum-in-on/) for better indexing.
------------------------

题意：给出一个数组，求第三大的数字是多少，重复的数字并不算在内，比如 [1, 2, 2, 3] 第3大的数字是1 而不是 2。

## Using std::set
set 是集合，是有序的（从小到大），集合中不包含重复的元素，所以我们可以[遍历数组](https://justyy.com/archives/6434)并把数字添加到集合中。在这过程中，如果集合大小大于三个，就把最小的元素删除。我们不能直接按照索引的访问集合中的元素，但是我们可以用迭代器 *rbegin()* 和 *begin()* 来访问集合中最大和最小的元素。

```
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> data;
        for (const auto &n: nums) {
            data.insert(n);
            if (data.size() > 3) {
                data.erase(data.begin()); // 去掉最小的
            } 
        }
        return data.size() < 3 ? *data.rbegin() : *data.begin();
    }
};
```

## Using std::priority_queue
默认，优先队列每次取出的元素都是队列中最大的，我们可以用 std::greater 来取反。创建优先队列的复杂度是 O(nlogn)，但是由于我们保持最大长度为3，所以实际上复杂度是 O(logn)。我们还需要借住 unordered_set 无序集合来保持优先队列中的元素是唯一的。

```

class Solution {
public:
    int thirdMax(vector<int>& nums) {
        unordered_set<int> cache;
        priority_queue<int, vector<int>, std::greater<int>> data; // 从小到大出列顺序
        for (const auto &n: nums) {
            if (cache.count(n)) { // 已经出现过了
                continue;
            }
            cache.insert(n); // 标记
            data.push(n);  // 入列
            if (data.size() > 3) {
                data.pop(); // 去掉最小的
            } 
        }
        if (data.size() < 3) {
            while (data.size() > 1) {
                data.pop(); // 去掉最小的
            }
            return data.top();  //剩下就是最大的
        }
        return data.top(); //第三大
    }
};
```

## using std::vector
我们还可以用 vector来存储任意时刻的最大三个数。循环内部有 查找和排序 ，但由于数组大小都是3，所以整体的复杂度是 O(n)。

```
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        vector<int> max3;
        for (const auto &n: nums) {
            if (std::find(max3.begin(), max3.end(), n) != max3.end()) { // 如果有重复就跳过
                continue;
            }
            max3.push_back(n);
            sort(max3.begin(), max3.end()); //排序3个数
            if (max3.size() > 3) {
                max3.erase(max3.begin()); // 删掉最小的那个数
            }
        }
        if (max3.size() == 3) {
            return max3[0];
        } else {
            return max3[max3.size() - 1];
        }
    }
};
```

刚刚同步到博文： [https://justyy.com/archives/6440](https://justyy.com/archives/6440)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: ['Coding Exercise - Find Third Maximum 编程练习题 - 找出第三大的数'](https://steemit.com/@justyy/coding-exercise-find-third-maximum)
