
---
title: "对比steemit聊聊币乎——投票能量"
permlink: 3k8mzr-steemit
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-03 11:52:15
categories:
- cn
tags:
- cn
- cn-reader
- cn-007
- steemit
- bihu
thumbnail: https://steemitimages.com/DQmYN9yghykUcbXAzobjZpAjZWoybCbbrb9NPqefX2cX2Jr/01-1.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## 一、币乎与steemit投票点赞设计上的不同

---

在币乎app中我们可以看到，有一个能量的参数，比如图下：

![01-1.png](https://steemitimages.com/DQmYN9yghykUcbXAzobjZpAjZWoybCbbrb9NPqefX2cX2Jr/01-1.png)

这里的能量有什么用，在币乎app的帮助文件里有介绍：

* 能量用于点赞与踩，最高100点，消耗后每天自动线性恢复100点；
* 每次点赞或踩需要消耗10点能量；
* 能量小于10点时，点赞与踩不影响文章收益，点赞者也无KEY奖励。

**我们来看看币乎关于投票的设计：**

**1、能量恢复**

这里我不太清楚具体是怎样的一个线性恢复，我的理解是1小时可以恢复4.16个能量，每个人每天投有效票数的最多次数是10票。因为能量小于10点后投票无收益。

**2、点赞比例**

每个人投票产生的收益（给别人点赞的收益和点赞者收益）又跟自己账户锁定的KEY有关，也就是有人点赞的钱多，有人点赞的钱少，跟自己账户锁定的KEY有关。

公测的币乎，并没有发现设定点赞比例的按钮。比如，我的锁定的KEY让我点赞别人一次可以带来收益100元，但是我只能点赞送出100元，而不能说点赞但只送出50元的赞。意思是币乎每一次点赞必须使用自己100%比例送出收益。

同时，币乎应该是能量即使只有10%，也能送出100元的点赞。

**我们来看看steemit关于投票的设计：**

**1、能量恢复**

![02.png](https://steemitimages.com/DQmQ9yEwWPKoer1oxx7EGU35euupYo5wHxuQQQhpfn1uvE9/02.png)

steemit也有能量恢复的设计，但是steemit的能量并不是币乎那样的恢复方式。它的设计是，你能量消耗越大剩余能量越小，你每天恢复的速度越慢。在币乎里每天可以固定恢复100点，而在steemit里当你能量消耗过大剩余30%时，你一天也许只能恢复30%。steemit的设计是消耗越多恢复越慢。

**2、点赞比例**

在steemit当锁定的steem币超过500时，就多了一个功能，可以自定义点赞比例。比如图下：

![03.png](https://steemitimages.com/DQmd3Lsx9g197jDoUVtjgugo9nnnqnGBFUxy8e5LEg5d9w8/03.png)

假设我的100%点赞比例可以送出100元，我认可你的文章，但是在我这我觉得值60元，于是我可以控制我的点赞比例。设定60%的点赞比例相应的消耗的投票能量也少。

## 二、不同设计出现的不同结果和用户心态

---

**1、投票能量**

点赞者也可以获得收益，而币乎的设计有效投票数量很少，所以每个人投出自己有限票数时可能是较为慎重。

steemit因为设计了点赞比例，所以通过控制点赞比例，可以投出很多有效点赞。所以，steemit里投票更多时候不会特别筛选，这也让steemit的很多点赞就只是点赞，而并没有认真的阅读文章。

steemit通过设计消耗能量越多恢复越慢，来限制用户投票的泛滥。实际的情况也达到较好的效果，一般用户会自觉控制自己的能量保持在80%左右。

另外，币乎是10%的能量也能投出100%点赞比例的100元，但是，steemit里当你能量只有80%时，只能最多投出80元的点赞。

币乎与steemit都是可以自己给自己点赞。所以，在steemit里大家普遍的心态是尽量保持自己的能量消耗不要过大，尽量100%的能量给自己点赞获得更多收益（这是自己可控制的）。

币乎里主要是控制投票点赞次数，少投票，什么时候给自己投票都可以。所以，币乎的设计用户心态可能会尽量一天用完10次，不用就是浪费。

**2、点赞比例**

在早期的steemit并没有点赞比例的设计，当时经常容易出现单篇文章收入极高的情况，后来steemit引入点赞比例的设计，这种情况有所好转，文章收入高得不会特别离谱。

币乎没有点赞比例的设计，如果一个人的锁定的KEY很多点赞权重很大，一次能给一篇文章带来1000元收益，那么他只能送出1000元，这样可能导致的情况是，单篇文章收入非常高。币乎最近公测的实际情况也是如此，单篇文章收入甚至达到20万人民币。

---

其它文章：
[聊聊内测中的币乎(一)](https://steemit.com/cn/@yellowbird/2tansz)
[聊聊内测中的币乎(二)](https://steemit.com/cn/@yellowbird/3dzowe)
[聊聊内测中的币乎(三)](https://steemit.com/cn/@yellowbird/1bgfd)

---

<center>![logo-3.png](https://steemitimages.com/DQmS1TQzii73Nj2NaQSjdqPBy2rB39vj4rh5HxKYtqGtqPF/logo-3.png)</center>

- - -

This page is synchronized from the post: [对比steemit聊聊币乎——投票能量](https://steemit.com/@yellowbird/3k8mzr-steemit)
