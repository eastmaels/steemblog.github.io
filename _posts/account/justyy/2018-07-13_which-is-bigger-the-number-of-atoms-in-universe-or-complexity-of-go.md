
---
title: 'Which is Bigger - The Number of Atoms in Universe or Complexity of Go? 围棋的走法和宇宙原子总量谁更多？'
permlink: which-is-bigger-the-number-of-atoms-in-universe-or-complexity-of-go
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-13 23:33:36
categories:
- busy
tags:
- busy
- cn
- cn-reader
- math
- complexity
thumbnail: https://ipfs.busy.org/ipfs/QmX7Dr4W9noQFbuN8gdjaHaiiDKNgM7XyxeipMEK4pR1Mq
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmX7Dr4W9noQFbuN8gdjaHaiiDKNgM7XyxeipMEK4pR1Mq)
*Image Credit: Wiki*

The board of Go Game has 19x19 lines. Players place stone on the line intersections. Therefore the complexity of all state space is `pow(3, 361)` because each intersection could have three 3 possibilities: black, white or nothing.

Researchers have estimated the number of Atoms in universe is somewhat between 10^78 to 10^82 [[Ref](https://www.thoughtco.com/number-of-atoms-in-the-universe-603795)] let's assume it is 10^80.

# So, which is bigger?

Of course, with the help of computers, these two numbers can be calculated first and then compared. But we human don't (and can't) calculate the actual values of both. Instead, we do a little math here.

Let's denote N is the number of atoms in universe i.e. 3^361 and M, the all state space complexity of Go i.e. 10^80. We know which is bigger by comparing the value of M/N with one.

Let's take `lg(M/N)`, we know that equals `lg(M) - lg(N)` so

```
    lg(3^361) - lg(10^80)
= 361*lg(3) - 80*lg(10)
= 172.24 - 80
= 92.24 
```

Therefore, M/N = 10^92.24 that means M is a lot larger than N! The Go State complexity is way more huge than the number of atoms in universe. Even the computers cann't [bruteforce](https://helloacm.com/how-to-solve-math-puzzle-using-powershell-script-with-bruteforce-algorithm/) all the possibilities!

Reposted to my blog: https://helloacm.com/which-is-bigger-the-number-of-atoms-in-universe-or-complexity-of-go/

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

--------------------------------------------

围棋的棋盘是19乘于19条线，棋手在线交叉的位置上放棋子。每个地方可以有三种状态：白的、红的、或者为空。所以不考虑棋子有效性，围棋所有棋盘的数目是 3的361次方。

科学家们估计了宇宙中原子的数目大约在 10的78次方到10的82次方间 [[Ref](https://www.thoughtco.com/number-of-atoms-in-the-universe-603795)] 我们就姑且认为是 10的80次方吧。

# 问题来，哪一个更多呢？

当然，计算机可以先分别算出两个值的大小直接粗暴的比大小。不过，我们却不能。相反，我们可以简单的推算一下。

假定围棋状态数为M，宇宙原子 数为N，那么我们只需要比较M/N和1的大小即可。

取LOG 10为底 `lg(M/N)`，转换一下变成 `lg(M) - lg(N)` 

```
    lg(3^361) - lg(10^80)
= 361*lg(3) - 80*lg(10)
= 172.24 - 80
= 92.24 
```

所以, M/N = 10^92.24 也就是说 M 比N 要大得多。围棋的状态数远远比宇宙的原子数多，怪不得计算机[穷举](https://justyy.com/archives/1626)是不可能的！

刚刚同步到博文：https://justyy.com/archives/6407

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Which is Bigger - The Number of Atoms in Universe or Complexity of Go? 围棋的走法和宇宙原子总量谁更多？](https://steemit.com/@justyy/which-is-bigger-the-number-of-atoms-in-universe-or-complexity-of-go)
