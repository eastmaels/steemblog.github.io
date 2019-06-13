
---
title: 'Coding Exercise - Add Two Numbers on Singly-Linked List 编程练习题: 对两单向链表求和'
permlink: coding-exercise-add-two-numbers-on-singly-linked-list
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-21 19:18:54
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

> Question: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example: 
> Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

The definition of a [singly-linked](https://helloacm.com/cc-coding-exercise-how-to-swap-nodes-in-pairs-in-a-singly-linked-list/) list:

```
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
```

One solution will be to transform each singly-list into a integer, add both up and then transform back to a singly-list. However, this is not the simplest and easiest way. We notice that the number is in reverse order in a singly linked-list, therefore we can add digits by digits when walking through both list. Just remember to add the carry when the sum of two digits is more than 9. 

The head pointer of the result list should be preserved. We create a dummy head pointer and return its next when exiting the function.

```
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head = new ListNode(0), *prev = head;
        int c = 0;
        while (l1 != NULL || l2 != NULL) {
            int sum = c + (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
            c = sum / 10;
            prev->next = new ListNode(sum % 10);
            prev = prev->next;
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }      
        if (c > 0) {
            prev->next = new ListNode(c);
        }
        return head->next;
    }
};
```

Assume the length of both list are A and B, the overall runtime complexity is O(A+B), obviously.

Reposted to my [blog](https://helloacm.com/coding-exercise-add-two-numbers-on-singly-linked-list/) for better indexing.

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

----------------------------------
这题难度中等，原因就是在实现的时候细节很多，不容易一次性搞对。还好这两个列表表示的整数是反过来的，所以实现上可以边遍历边相加，只需要在累加每一位的时候记得记住进位即可。

当然，还有更笨的方法，就是先把每个列表转换成数字，然后想加再把结果换成列表。

我们需要创建一个dummy结点，记住，在函数返回的时候返回 dummy.next （下一个节点）即可。算法复杂度是 O(A+B) 其中A和B分别是两个输入列表的长度。

[C++代码](https://justyy.com/archives/6422)看上面。

刚刚同步到[博文](https://justyy.com/archives/6424)。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Add Two Numbers on Singly-Linked List 编程练习题: 对两单向链表求和](https://steemit.com/@justyy/coding-exercise-add-two-numbers-on-singly-linked-list)
