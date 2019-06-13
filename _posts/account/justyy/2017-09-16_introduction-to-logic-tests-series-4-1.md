
---
title: 'Introduction to Logic Tests Series 逻辑测试系列 - 一种只有4种语句的编程语言 - （1）'
permlink: introduction-to-logic-tests-series-4-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-16 16:05:24
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- interview
- coding
thumbnail: https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Many companies have IQ tests or logics tests as one of the [interviewing](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job) methods. These questions are not intended to test interviewee candidates for the specific programming knowledge, rather, they are to testing the if the candidates are 'intelligent enough'.  For programming jobs, the [candidates](https://helloacm.com/go-to-an-interview-even-if-you-are-not-changing-your-job/) are often required to solve problems (puzzles) in analytic manners. 

It is a bias to pick any programming languages simply for this purpose. Solving puzzles do not require specific knowledge of any programming languages. And how are we going to test the candidates?

Luckily, here is a programming language that consists of four instructions. The variables hold non-negative integers. You don't need to explicitly define variables but you have to zero or assign the values before using them, similar as [Python](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/).

- ZERO
Use ZERO instruction to clear a variable i.e. `X=0`

```
ZERO(X)
```

- Assign a variable
You can't assign arbitrary values (constants) to a variable, however, you can use ASGN(X, Y) to assign value of Y variable to X, which is equal to  `X=Y`

- INCR
 `X++` is implemented via `INCR(X)`

- LOOP
Use  `LOOP(X) {}` to start a Loop of X times. Inside the loop, you can change the X value however the loop still goes X times.

```
for (; x > 0; -- x) {

}
```

I am going to start a series of using this tiny programming language, and you will see even with four instructions, this language can be very powerful.

First example is to define a ADD procedure that takes two parameters X and Y and it will perform `X += Y`

```
ADD(X, Y) {
    LOOP(Y) {   // Loop Y times
       INCR(X)    // Increment X
   }
}
```

Do you get this?

![](https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg)
*Image Credit: pixabay.com*


一般[大公司](https://justyy.com/archives/5317)都会有类似逻辑测试或者IQ测试题，这些题考的并不是你对某种技能（编程语言）的掌握情况，相反，这是为了过滤掉比较笨的人，因为……我觉得太笨的人写不了程序。

所以，你选任何一种语言都是带有偏见的，碰巧，这里有一种语言，只有4条指令，处理所有的都是非负整数。在这种语言里，变量不需要定义，但是使用前需要像 [PYTHON](https://justyy.com/archives/5217) 一样赋值（或者清空），这种语言好理解，也能拿来当面试题。

- 清空
用 ZERO(X) 来把X变量清空，比如以下 相当于 `X=0`

```
ZERO(X)
```

- 赋值
用 ASGN(X, Y) 把 Y 变量赋值于X，相当于 `X=Y` 这里需要注意的事，我们并不能把任意一个常数值赋于变量，也就是说 Y 必须是变量而不是常量。

- 增加1
用 INCR(X) 把 X 变量增加1，相当于 `X++`

- 循环
用 LOOP(X) {} 来循环 X 次 花括号里的内容，X可以在循环里被改变，不过循环还是执行X次。 相当于：

```
for (; x > 0; -- x) {

}
```

我将会开启这个逻辑编程系列，你将会发现，尽管只有4条语句，但是可以做的事情实在是很强大。

比如，如何定义 `ADD(X, Y)` 使得  `X += Y`

```
ADD(X, Y) {
    LOOP(Y) {   循环 Y 次
       INCR(X)    每次把X加一
   }
}
```

是不是很有意思？

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Introduction to Logic Tests Series](https://helloacm.com/introduction-to-logic-tests-series/)
- [逻辑测试系列 – 一种只有4种语句的编程语言 – （1）](https://justyy.com/archives/5320)
- [即使你不打算换工作，你每年也得去面试](https://justyy.com/archives/5317)
- [Go to an Interview even if you are not changing your job.](https://helloacm.com/go-to-an-interview-even-if-you-are-not-changing-your-job/)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

- - -

This page is synchronized from the post: [Introduction to Logic Tests Series 逻辑测试系列 - 一种只有4种语句的编程语言 - （1）](https://steemit.com/@justyy/introduction-to-logic-tests-series-4-1)
