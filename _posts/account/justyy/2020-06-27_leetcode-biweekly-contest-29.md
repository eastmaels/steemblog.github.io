
---
title: 'Leetcode Biweekly Contest 29'
permlink: leetcode-biweekly-contest-29
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-27 16:48:30
categories:
- witness-category
tags:
- witness-category
- programming
- whalepower
- algorithms
- coding
- leetcode
- contest
- codeonsteem
thumbnail: 'https://cdn.steemitimages.com/DQmSywLc4bEhgdLtbNxPDqkMwkWdR7UEGEiRP7kFTf8Xdhh/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have recently started to attend the online coding contest. Leetcode has held weekly contests on Sunday early mornings - which isn't ideal for coders living in Europe.

However, they have biweekly contests, which is run the Sat 3:30 to 5:30 (BST) every two weeks.

Today's contest: https://leetcode.com/contest/biweekly-contest-29

I have finished the four puzzles using around 1 hour.

The programming language I choose is C++. I have 1 Wrong Answer submission for Problem 2 and 4 - which adds total 10 minutes time penalization

![image.png](https://cdn.steemitimages.com/DQmSywLc4bEhgdLtbNxPDqkMwkWdR7UEGEiRP7kFTf8Xdhh/image.png)

## Average Salary Excluding the Minimum and Maximum Salary
https://leetcode.com/contest/biweekly-contest-29/problems/average-salary-excluding-the-minimum-and-maximum-salary
Simple - use std::accumulate to get sum, min_element and max_element to get the min and max value, then compute the average without them

## The kth Factor of n
https://leetcode.com/contest/biweekly-contest-29/problems/the-kth-factor-of-n
Again, easy, straightforward.

## Longest Subarray of 1's After Deleting One Element
https://leetcode.com/contest/biweekly-contest-29/problems/longest-subarray-of-1s-after-deleting-one-element
Use two arrays to hold the maximum continuous 1's in the left and right direction. The answer is thus max(left[i] + right[i])

## Parallel Courses II
https://leetcode.com/contest/biweekly-contest-29/problems/parallel-courses-ii/
Topology sorting? Greedy... I use DFS.

I'll share the solutions on the [blog](https://leetcode.com/contest/biweekly-contest-29/problems/average-salary-excluding-the-minimum-and-maximum-salary) in more details soon.

Although the contest has ended, you can try to participate on the virtual contest.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Leetcode Biweekly Contest 29'](https://steemit.com/@justyy/leetcode-biweekly-contest-29)
