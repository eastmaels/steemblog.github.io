
---
title: 'Coding Exercise - Search in a Binary Search Tree 编程练习题：二叉查找树BST'
permlink: coding-exercise-search-in-a-binary-search-tree-bst
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-15 23:39:57
categories:
- programming
tags:
- programming
- cn-programming
- busy
- coding
- cn
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

> Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL. For example, 

> Given the tree:
```
        4
       / \
      2   7
     / \
    1   3
```
> And the value to search: 2
> You should return this subtree:
```
      2     
     / \   
    1   3
```
> In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
> Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null

## C/C++ Definition of a Binary Tree Node
A [Binary tree](https://helloacm.com/c-coding-exercise-binary-tree-postorder-traversal/) can be recursively defined using struct.
```
 struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 };
```

## Recursion
The Binary Search Tree (BST) 's one important characteristics: the left node is smaller than the parent and the right node is larger than the parent. So, instead of searching the entire tree, we can cut one branch at each iteration, to reduce to complexity from O(n) to O(logn).

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        if (root->val == val) return root;
        return val > root->val ? searchBST(root->right, val) : searchBST(root->left, val);
    }
};
```

## Iterative
You can convert above [recursion](https://helloacm.com/c-coding-exercise-sum-of-left-leaves-bfs-dfs-recursion/) to iterative implementation using Stack - pushing one subtree to the stack.

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        stack<TreeNode*> st;
        st.push(root);
        while (st.size() > 0) {
            auto cur = st.top();
            st.pop();
            if (cur == nullptr) continue;
            if (val == cur->val) {
                return cur;
            }            
            if (val > cur->val) {
                st.push(cur->right);
            } else {
                st.push(cur->left);
            }
        }
        return NULL;
    }
};
```

As the task is to find the element in the tree, and each iteration, you only search one branch (and cut another branch), you can use Queue as well.

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        deque<TreeNode*> Q;
        Q.push_back(root);
        while (Q.size() > 0) {
            auto cur = Q.front();
            Q.pop_front();
            if (cur == nullptr) continue;
            if (val == cur->val) {
                return cur;
            }            
            if (val > cur->val) {
                Q.push_back(cur->right);
            } else {
                Q.push_back(cur->left);
            }
        }
        return NULL;
    }
};
```

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

// Reposted to [https://helloacm.com/c-c-coding-exercise-search-in-a-binary-search-tree/](https://helloacm.com/c-c-coding-exercise-search-in-a-binary-search-tree/) for better indexing.

---------------------------------------------
题意：给定一个二分查找树 BST, Binary Search Tree, 查找指定的元素，返回该节点开始的子树。如果没找到就返回NULL。

## 二叉树在C/C++中的定义
二叉树可以用结构体来定义，其中左右子树都是递归的定义。

```
 struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 };
```

## 递归
二叉查找树BST的最重要的特性就是左节点比根节点小，而右节点比根子树大。这样我们就可以每次根据根节点的大小，相应的在左子树或者右子树中递归查找。每次都摒弃一棵子树，这样时间复杂度大约是 O(logn) ，如果遍历所有的节点则时间复杂度 O(n).

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        if (root->val == val) return root;
        return val > root->val ? searchBST(root->right, val) : searchBST(root->left, val);
    }
};
```

## 迭代
递归实现可以用[迭代](https://justyy.com/archives/6431)来实现，自己操作堆栈，每子把左子树或者右子树添加到堆栈中。

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        stack<TreeNode*> st;
        st.push(root);
        while (st.size() > 0) {
            auto cur = st.top();
            st.pop();
            if (cur == nullptr) continue;
            if (val == cur->val) {
                return cur;
            }            
            if (val > cur->val) {
                st.push(cur->right);
            } else {
                st.push(cur->left);
            }
        }
        return NULL;
    }
};
```

由于这题和搜索的顺序关系不太大，我们还可以用[队列](https://justyy.com/archives/4992)来实现，按层来查找。

```
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr) return NULL;
        deque<TreeNode*> Q;
        Q.push_back(root);
        while (Q.size() > 0) {
            auto cur = Q.front();
            Q.pop_front();
            if (cur == nullptr) continue;
            if (val == cur->val) {
                return cur;
            }            
            if (val > cur->val) {
                Q.push_back(cur->right);
            } else {
                Q.push_back(cur->left);
            }
        }
        return NULL;
    }
};
```

// Reposted to: [https://justyy.com/archives/6465](https://justyy.com/archives/6465)

## 支持我的工作 支持我成为 [见证人 - Witness Thread](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为见证人代理 Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Coding Exercise - Search in a Binary Search Tree 编程练习题：二叉查找树BST](https://steemit.com/@justyy/coding-exercise-search-in-a-binary-search-tree-bst)
