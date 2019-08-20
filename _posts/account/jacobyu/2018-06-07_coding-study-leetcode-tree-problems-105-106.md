
---
title: '[Coding study (leetcode)]  Tree problems. 105, 106'
permlink: coding-study-leetcode-tree-problems-105-106
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-07 16:53:09
categories:
- kr-dev
tags:
- kr-dev
- leetcode
- busy
- jjangjjangman
- kr-study
thumbnail: 'https://ipfs.busy.org/ipfs/QmZ6E7v4xxgzXWSwXBor1NQNGmNyPqfaSbBjCo8PbsVUuk'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmZ6E7v4xxgzXWSwXBor1NQNGmNyPqfaSbBjCo8PbsVUuk)


#### 이야기
Leetcode에서 트리관련 문제를 이어서 풀고 있습니다.

Leetcode와 유사한 서비스로 Hackerank도 있는데요.

Hackerank도 잘 되어있어 둘다 활용하여 코딩테스트 공부를 하고있습니다.

#### 문제

> 104. Given inorder and postorder traversal of a tree, construct the binary tree.
> 105. Given preorder and inorder traversal of a tree, construct the binary tree.

아래 그림과 같이, 

입력으로 inorder traversal의 결과와 postorder traversal의 결과가 주어질 때,

두 결과가 나올 수 있는 트리를 만들어야한다.

마찬가지로 105번 문제는 postorder 대신에 preorder traversal의 결과가 주어질 때, 두 결과가 나올 수 있도록 하는 트리를 찾는 것이다.

거의 동일하기 때문에 104번에 대해서만 풀이하겠다.

![image.png](https://ipfs.busy.org/ipfs/QmbYqD5effPkRZNUAMRxYxxMUynf92dkv6w1vsYDtCMaAw)


#### 풀이 과정

잘 모르겠어서 Discuss를 봤다.

inorder와 postorder의 특징을 활용하라고 했다.

postorder의 특징은 left, right, 그 다음에 root 순으로 순회(traversal)한다.

그래서 postorder 순회의 마지막 순서는 root이다.

inorder 순회의 경우, left, root, right 순으로 움직인다.

그래서 root는 왼쪽 subtree와 오른쪽 subtree 사이에 존재하게 된다.

위의 특징을 알고 문제를 보면 쉬워진다.

1. preorder 순회의 마지막 순서가 root이다.
2. root의 value가 inorder 순회에서는 어디에 있는지 파악한다.
3. inorder 순회에서 root의 양쪽으로 subtree이다. (아래 그림의 노란 부분이 subtree이다.)
4. 각각 subtree에 대해서도 root가 존재한다. 1번으로 돌아간다.

![image.png](https://ipfs.busy.org/ipfs/QmQ3oYUydZkJyFt43soo9edkyEzkMzWh2Bbh2JhUp1rTeg)

위의 순서대로 풀기 위해 나는 재귀적인 방법으로 문제를 풀었다.

Top-down으로 생각했다. root에서 바닥까지!

#### 어려웠던 점
* preorder/inorder/postorder가 어떻게 순회하는지는 알았지만, 그 특징을 이용해야하는지는 몰랐다.
* 이용해야한다는 것을 알고서부터는 구현을 할 수 있었다.
* 문제를 풀고 다른사람이 푼 것을 보니 같은 방법이나 반복적으로 해결한 사람도 있었고, 같은 방법이나 좀 더 빠르게 해결한 것도 있었다.

#### 제출
![image.png](https://ipfs.busy.org/ipfs/QmfF5oXVQxgN9maVtkViRymNd1WkdeK6LRusjxSuXj3Lem)


- - -

This page is synchronized from the post: ['[Coding study (leetcode)]  Tree problems. 105, 106'](https://steemit.com/@jacobyu/coding-study-leetcode-tree-problems-105-106)
