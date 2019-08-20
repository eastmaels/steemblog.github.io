
---
title: '[Leetcode] 100.same-tree'
permlink: leetcode-100-same-tree
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-21 16:41:03
categories:
- jjangjjangman
tags:
- jjangjjangman
- leetcode
- kr-dev
- busy
- kr-study
thumbnail: 'https://ipfs.busy.org/ipfs/QmPAagqsAskxnaDDDho8dE7V2ZcE3BWytDLs3fivvG9p26'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### 문제 

* [100] Same Tree
* Easy (47.95%)
* Total Accepted:    270.6K
* Total Submissions: 564.2K
* https://leetcode.com/problems/same-tree/description/
* 두 개의 트리가 있을 때, 같은 트리인지 확인하라.

#### 풀이 과정
같은 트리인지 어떻게 확인하지?
1. 트리 구조가 같은지 체크한다.
2. 두 개의 트리에서 특정 노드의 value가 같은지 체크한다.

탐색 순서는?
1. preorder로 하자.
2. 재귀적으로 가자.

#### Submission Fail
* []\n[] --> NULL인 경우를 신경 안썼다. --> 런타임 에러 발생
* [1]\n[] --> 마찬가지이다. -->런타임 에러 발생
* [1,2,1]\n[1,1,2] --> 트리 구조만 같은지 체크했었다. --> 에러

![image.png](https://ipfs.busy.org/ipfs/QmPAagqsAskxnaDDDho8dE7V2ZcE3BWytDLs3fivvG9p26)

일주일에 최소 2개 이상  꾸준히 풀어보고 싶어요!

- - -

This page is synchronized from the post: ['[Leetcode] 100.same-tree'](https://steemit.com/@jacobyu/leetcode-100-same-tree)
