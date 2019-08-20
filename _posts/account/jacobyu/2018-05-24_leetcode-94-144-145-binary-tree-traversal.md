
---
title: '[Leetcode] 94, 144, 145. binary tree traversal'
permlink: leetcode-94-144-145-binary-tree-traversal
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-24 17:22:06
categories:
- kr-dev
tags:
- kr-dev
- leetcode
- busy
- jjangjjangman
- kr-study
thumbnail: 'https://ipfs.busy.org/ipfs/QmT9zG5UGx3XCfvRrvHVGzdkTxBe5bJXUbHWDoZaNkVXdd'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### 서론

Leetcode를 아시나요?

Leetcode는 여러 프로그래밍 언어로 자료구조를 공부할 수 있고,

코딩문제들을 풀어볼 수 있습니다.

Leetcode에서는 easy, medium, hard로 분류되는 총 804개의 코딩 문제가 있습니다.

804개에서 자신이 원하는 키워드를 검색해서 풀 수도 있으며,

자료구조에 대해 공부하고, 문제를 풀 수 있게도 해줍니다.

![image.png](https://ipfs.busy.org/ipfs/QmT9zG5UGx3XCfvRrvHVGzdkTxBe5bJXUbHWDoZaNkVXdd)

거기다가 visual studio code에서 leetcode 플러그인은 연동하여,

vs code에서 코드를 작성하고, 제출할 수 있습니다. 편합니다.

![image.png](https://ipfs.busy.org/ipfs/QmZoQ3iT87KgfuBeA6PwJ7vigvmHMGNvnkeSqD7ohme1QA)

아래는 문제 풀이 후, 나중에 보기 위해 기록한 것입니다. 존댓말로 작성되어있지 않습니다.

----

#### 문제

트리 탐색 문제는 모아서 한번에 풀었다.

* [94, 144, 145] Binary Tree Preorder/Postorder/Inorder Traversal
* Binary Tree가 주어질 때, 각각 Preorder/Postorder/Inorder Traversal의 접근 방식으로 반환하라.
* https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/992/

#### 풀이 과정
* 재귀적으로 풀 것인가? (Recursive)
* 반복적인 방법을 풀 것인가? (Iterative)
* 재귀적인 방법은 공책에 그림을 그리면서 했다.
* **솔루션을 찾아보니 Tree 구조를 변경하는 방식도 있었다.**
* 항상 햇갈렸는데 트리를 봤을 때 아래 코드를 생각하면 어떤 순서로 접근할지 그려진다.
    * preorder이면 list에 값 넣는 것을 제일 먼저
    * inorder이면 left와 right 사이에
    * postorder이면 맨 뒤에 넣으면 된다.

----

![image.png](https://ipfs.busy.org/ipfs/QmfY1fCyR2T1gLRMx1QM8c9FuZwbuje7znrgp19CUyLCWa)

#### 어려웠던 점
* 재귀함수를 호출하지 않고, 구현을 하려고 하니 어려웠다.
* 다른 사람이 어떻게 했는지 한 번 보고 작성하였다.
* Stack을 활용하여 재귀함수를 호출하지 않고 구현 가능하였고, 나도 다시 구현을 해보았다.

#### Submission
* NULL 체크하는 것을 깜빡했다.
![image.png](https://ipfs.busy.org/ipfs/QmVtkcJqKZF9wJmUQp1qYtiLX7Y3gUpbGEUgVnX8izFm4Z)


---

감사합니다.

- - -

This page is synchronized from the post: ['[Leetcode] 94, 144, 145. binary tree traversal'](https://steemit.com/@jacobyu/leetcode-94-144-145-binary-tree-traversal)
