
---
title: '[Leetcode] 102, 104. Tree problems'
permlink: leetcode-102-104-tree-problems
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-31 16:59:57
categories:
- kr-dev
tags:
- kr-dev
- kr
- busy
- jjangjjangman
- kr-daily
thumbnail: 'https://ipfs.busy.org/ipfs/QmXcsUipncCjJXXWJryBdaX7MBKwKS1x1m5ccwkN51WAeH'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmXcsUipncCjJXXWJryBdaX7MBKwKS1x1m5ccwkN51WAeH)


#### 이야기

Leetcode에서 트리관련 문제를 이어서 풀고 있습니다.

일주일에 2개 이상 문제를 꾸준히 풀어보자라고 친구를 꼬셨습니다.

친구랑 요즘 IT 회사들은 코딩테스트를 다본다더라

준비해야한다. 이런이야기를 하다가

왜 트리문제를 풀어야되냐? 자료구조를 해야하냐? 라는 질문을 받았는데
답변을 못했습니다.

검색을 해봤는데 아래 정도의 이유들을 찾았습니다.
* 자료구조가 프로그래밍의 기본이 된다.
    * 여러 선택지 중에 좋은 선택을 할 수 있다. 각각 자료구조마다의 특징을 알 필요가 있다.
    * 시간복잡도, 공간복잡도를 계산하는 연습을 할 수 있다.
    * 문제해결능력을 키운다.
* 많은 코딩문제들이 자료구조는 기본적으로 알아야 잘 풀 수 있다.

---

다른 분들은 어떻게 생각하는지 궁금합니다.
아무튼 꾸준히 Leetcode에서 문제는 풀어볼 예정입니다.

---

#### 문제
Input
![image.png](https://ipfs.busy.org/ipfs/QmPixQaCv9pmkjA7FkcMF84xXqg3S5b7pXy1aAEJAAF8Gw)

* Binary Tree Level Order Traversal - 이진 트리가 주어질 때, 각 레벨별로 노드들의 값을 반환하라.

Output - [3], [9,20], [15,7]

* Maximum Depth of Binary Tree - 트리의 깊이를 구하라. 여기서 깊이는 root로부터 가장 멀리 떨어진 leaf까지 노드의 개수를 말한다.
Output - 3

---

#### 풀이 과정

1번 문제의 경우, queue를 사용하면 편하다는 힌트를 받았다.

Queue는먼저 들어온 입력이 먼저 나간다.

* 큐에 남아 있는 노드들을 모두 꺼내고 레벨 벡터에 넣는다.
* 꺼낸 노드들의 자식들을 모두 큐에 넣는다.
* 반복한다.

---

2번의 경우도 힌트를 봤다.
재귀함수로 풀어라.

나는 루트의 깊이는 = 1 + max (왼쪽 자식의 깊이, 오른쪽 자식의 깊이)로 풀었다.

#### 어려웠던 점

힌트 없이 이 방법들을 생각해내기 어려운 것 같다.
푼다면 어떻게든 풀겠지만, 복잡했을 것이다.
힌트를 받고 쉽게 풀었다.

#### 제출

![image.png](https://ipfs.busy.org/ipfs/QmZ9V9d2vGyvWuqQFvoW5jxcM5dYfVRC5EZ9d5AyvEHE11)


- - -

This page is synchronized from the post: ['[Leetcode] 102, 104. Tree problems'](https://steemit.com/@jacobyu/leetcode-102-104-tree-problems)
