
---
title: 'Code Review - Bound Parameter 代码审核之限制参数范围'
permlink: code-review-bound-parameter
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-20 09:22:15
categories:
- cn
tags:
- cn
- cn-programming
- code-review
thumbnail: https://steemitimages.com/DQmQj7gNr2hX126jWuUbMr43zbnpTp3xFw4aSVPaBjfxokg/how-to-test-bad-smell-code.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


There is a piece of bad-smelling code, I happen to read today. The following aims to compute the angle between two line vectors.

这两天又看到一个历史遗留下来写得很糟糕的代码。这个代码大概是求两条线的夹角。

![how-to-test-bad-smell-code.jpg](https://steemitimages.com/DQmQj7gNr2hX126jWuUbMr43zbnpTp3xFw4aSVPaBjfxokg/how-to-test-bad-smell-code.jpg)

This code has been in the code repro for a long time, and it is brought to attention because of a failing [unit test](https://helloacm.com/simple-javascript-unit-testing/), where the input to the *Math.acos* function is bigger but very close to 1. *Math.acos* function returns Nan in this case.

发现这代码是因为有一个[单元测试](https://justyy.com/archives/4917)不通过，DEBUG进来 发现是因为 Acos 函数在输入参数大于 1的时候返回 Nan，浮点运算有误差返回了类似 1.00000012 之类的大于1但是却很靠近1的数值。

Easy verification in JS:
比如JS里：
![](https://steemitimages.com/DQme13kmGFScZKqRQf34L6JJJagmhNCf3AGje4QpVwjL1HH/image.png)

Our 'final' solution is to bound the parameter to the function.
最后面的解决方法是：

```
Math.acos(Math.max(Math.min(1, x), -1));
```

It is not elegant, but it works. If the precision is a high priority, we can create a class that stores the parts of the floating number (integer and fraction) using integer type. The integers do not lose precision and we need to implement the arithmetic operations e.g. how to carry over the values.

通过这种方法把参数强制规定在-1到1期间。但是这样的代码并不优美。如果精度要求更严格，可以自定义一个数值类型的类，分开用整数来保存整数部分和小数部分，这样需要定义加减乘除的运算，但是由于整数部分参加运算没有精度损失，所以不会有这样的问题。不过得小心处理像进位这样的问题。

We also have the Math.Net library which provides a rich set of library regarding to Math vectors so this is totally [re-inventing the wheel](https://helloacm.com/code-review-reinventing-the-wheel/), however if this is a sandbox code, you may also consider operator overloading the vector type. The above code is easily error-prone because it is easy to mess up with the array indices.

撇开[重新造轮子](https://justyy.com/archives/5082)的问题（.NET 有像 Math.Net的库了），所以完全可以用现成的库来操作这些向量。即使你不用，你也需要考虑重载这些三维向量的加减乘除运算，上面的代码很容易下标给弄错了。不好维护。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[算法](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Code Review – Bound Parameter](https://helloacm.com/code-review-bound-parameter/)
- [代码审核之限制参数范围](https://justyy.com/archives/5102)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [节流、开源、投资](https://steemit.com/cn/@justyy/3stbmm)
- [The Trip to Prague 捷克布拉格之旅 by @justyy](https://steemit.com/cn/@someone/the-trip-to-prague--by-justyy)
- [出租些SP 当一回债主 - 怎么样把你多余的SP租出去收点利息？](https://steemit.com/cn/@justyy/sp-sp)
- [The profiler told me I wrote some useless code (An Example of Defensive Programming) 性能评估软件说我写了几行无用的代码](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)
- [步子迈太大容易扯到蛋](https://steemit.com/cn/@justyy/4z2jif)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [Code Review - Bound Parameter 代码审核之限制参数范围](https://steemit.com/@justyy/code-review-bound-parameter)
