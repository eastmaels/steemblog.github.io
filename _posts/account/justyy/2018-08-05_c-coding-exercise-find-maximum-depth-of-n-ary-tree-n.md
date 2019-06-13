
---
title: 'C++ Coding Exercise - Find Maximum Depth of N-ary Tree - 编程练习题：找出N叉树的深度'
permlink: c-coding-exercise-find-maximum-depth-of-n-ary-tree-n
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-05 11:09:09
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

> Given a n-ary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. For example, given a 3-ary tree:

![image.png](https://ipfs.busy.org/ipfs/QmVcB8FG1fdD6NaZejAMZ3kUdKBKuvbEKfeiuR5CpwDubm)

> We should return its max depth, which is 3.  Note: The depth of the tree is at most 1000.  The total number of nodes is at most 5000.

## Definition of N-ary Tree
```
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
```

## DFS (Depth First Search)
[DFS](https://helloacm.com/c-coding-exercise-sum-of-left-leaves-bfs-dfs-recursion/) is usually easy to implement using [recursion](https://helloacm.com/how-to-check-symmetric-tree-in-c-iterative-and-recursion/). The depth of N-ary tree is the maximum depth of its subtree (children) plus one. 

```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == NULL) {
            return 0;
        }
        int depth = 0;
        for (const auto &subTree: root->children) {
            auto d = maxDepth(subTree);
            depth = max(depth, d);
        }
        return depth + 1; // children depth plus one
    }
};
```

## BFS (Breadth First Search)
BFS travels the tree level by level. This is done by maintaining a queue and expanding the children nodes node by node. At each iteration, we also need to calculate its depth and push the depth together with the node in the queue.

```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == NULL) return 0;
        queue<pair<Node*, int>> Q;
        Q.push(make_pair(root, 1));
        int depth = 1;
        while (Q.size() > 0) {
            auto p = Q.front();
            Q.pop();
            for (const auto &n: p.first->children) {
                Q.push(make_pair(n, p.second + 1)); // push children to queue
                depth = max(p.second + 1, depth);   // record the maximum depth of current node
            }
        }
        return depth;
    }
};
```

Both [BFS](https://helloacm.com/cc-coding-exercise-word-break-dp-bfs-dfs/) and DFS need to walk through the entire tree, and therefore, performance-wise, there is no much difference.

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

// Reposted to my blog for better indexing:  https://helloacm.com/c-coding-exercise-find-maximum-depth-of-n-ary-tree/

---------------------------

题意：找出N叉树的最大深度。

![image.png](https://ipfs.busy.org/ipfs/QmVcB8FG1fdD6NaZejAMZ3kUdKBKuvbEKfeiuR5CpwDubm)

上面这颗树，深度为3.

## N叉树的C++定义
```
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
```

## 深度优先 DFS (Depth First Search)
用[递归](https://justyy.com/archives/6431)来实现深度优先最合适了。这题的解法就是递归的找出子树的深度，然后答案就是这些子树深度最深的那个加上一。

```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == NULL) {
            return 0;
        }
        int depth = 0;
        for (const auto &subTree: root->children) {
            auto d = maxDepth(subTree);
            depth = max(depth, d);
        }
        return depth + 1; // 子树最大深度加1就是答案
    }
};
```

## 广度优先 BFS (Breadth First Search)
[广度优先](https://justyy.com/archives/6433)一层一层的遍例树，可以用队列来实现，每次从队列中取出一个节点，然后把子树结点依次的添加到队列中并计算当前深度。

```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == NULL) return 0;
        queue<pair<Node*, int>> Q;
        Q.push(make_pair(root, 1));
        int depth = 1;
        while (Q.size() > 0) {
            auto p = Q.front();
            Q.pop();
            for (const auto &n: p.first->children) {
                Q.push(make_pair(n, p.second + 1)); //子节点依次入队列
                depth = max(p.second + 1, depth);  // 记录并更新当前节点的深度
            }
        }
        return depth;
    }
};
```

两种方法都需要把整颗树走完才能算出最大深度，所以时间复杂度都是类似的。

// 同步到我的博客： https://justyy.com/archives/6444

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: ['C++ Coding Exercise - Find Maximum Depth of N-ary Tree - 编程练习题：找出N叉树的深度'](https://steemit.com/@justyy/c-coding-exercise-find-maximum-depth-of-n-ary-tree-n)
