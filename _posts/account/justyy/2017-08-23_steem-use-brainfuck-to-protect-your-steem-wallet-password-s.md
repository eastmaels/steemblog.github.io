
---
title: '通过脑残语言来保护你的STEEM钱包密码 - Use BrainFuck to Protect Your Steem Wallet Password(s)'
permlink: steem-use-brainfuck-to-protect-your-steem-wallet-password-s
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-23 21:12:00
categories:
- cn
tags:
- cn
- cn-programming
- programming
- brainfuck
- steemstem
thumbnail: https://steemitimages.com/DQmUTyTCnJ6aVmJAo8XFAAaqpaNtwBCZhFnj7L9bDdx38pB/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Brainfuck is a programming language that can be used to secure your steemit wallet password or active keys. Here is a [post](https://helloacm.com/brainfuck-interpreter-in-python/) that I wrote long time ago about implementing a [Python BF interpreter](https://helloacm.com/brainfuck-interpreter-in-python/). And here are two online tools that you need to encrypt your password text strings:

- [Convert Any Text to BF](https://steakovercooked.com/Application/php.text2bf)
- [Interpret the BF Program](https://steakovercooked.com/Application/php.brainfuck):  **Verify the BF output** by interpreting it, store the BF string instead and then you can (optionally) delete the password (**use it at your own risk**)

先来看看这一天书：

![](https://steemitimages.com/DQmUTyTCnJ6aVmJAo8XFAAaqpaNtwBCZhFnj7L9bDdx38pB/image.png)

我告诉你，这是一段程序，执行后输出结果是 `steemit @justyy` 你是不是有点蒙？是的，这是一种只有8种字符组成的编程语言，名字叫 BrainFuck 直译为（自己看吧）

![](https://steemitimages.com/DQmUHoU2AVsjcjmw1XhgN12WB2AJ5MiAomjZhuQUqT8gGLR/image.png)

我们先来看看这8种字符是什么。假设有一个长度无限的数组，每个数组里存放的一个数字。

- 大于号： 相当于 `++ptr` 把数据指针往右移一格
- 小于号： 相当于 `--ptr`  把数据指针往左移一格
- 加号： 把指向的当前格数据值加1 相当于 `++*ptr`
- 减号： 把指向的当前格数据值减1相当于 `--*ptr`
- 英文句号：把当前数据指针指向的单元格数据按 ASCII编码数组字符 相当于`putchar(*ptr)`
- 英文逗号：从键盘输入一个字符，并把值存于当前指针处，相当于 `*ptr = getchar()`
- 左方括号：如果指针处不为0，则执行代码直到 遇到右方括号，相当于 `while (*ptr) {`
- 右方括号：如果指针处为0，则代码跳到右方括号后，相当于 `}`

麻雀虽小，五脏具全。上面的8个字符就可以支持输入输出、循环。判断语句（IF ELSE）也可以用循环来模拟。

# Hello, World!
来看看 这种脑残语言的 Hello, World! 怎么写：

![](https://steemitimages.com/DQmco966osjTAhaxmPdsCt1wiyQnnt5k9VQheaXLKdLRgqK/image.png)

大写字母A-Z的ASCII码是65到90，小写字母a-z的ASCII码是97到122。那么通过不断的调整数组里数值的值（通过加号和减号），然后分别输出不同的字符。

字符串的输出方式组合就可以千变万化。源代码的长度就可以有长有短，所以萌生出了各种来求最短脑残语言的算法。

我之前写的两个小工具可以用来加密你的STEEM帐号密码：
- [执行任意一段脑残语言](https://steakovercooked.com/ch/Application/php.brainfuck)
- [把一段文字翻译成脑残源代码](https://steakovercooked.com/ch/Application/php.text2bf)（可以用作加密用途，比如你小金库的密码，或者你[STEEM](https://justyy.com/archives/5137)帐号的密码哈）

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [通过脑残语言来保护你的STEEM钱包密码](https://justyy.com/archives/5151)
- [How to Use BrainFuck to Protect Your Steem Wallet Password(s) ?](https://helloacm.com/how-to-use-brainfuck-to-protect-your-steem-wallet-passwords/)

# 近期热贴 Recent Popular Posts 
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草 (Hello Autumn! Hello Lavender)](https://steemit.com/cn/@justyy/8-hitchin)
- [Fen Drayton村每年举行1万米比赛](https://steemit.com/cn/@justyy/fen-drayton-1)
- [碎碎念第365天 (The Day 365 at SteemIt)](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [出租 SP 的一些经验之谈](https://steemit.com/cn/@justyy/sp)
- [很好用的 桌面版 Steem 钱包 - Vessel](https://steemit.com/cn/@justyy/steem-vessel)
- [节流、开源、投资](https://steemit.com/cn/@justyy/3stbmm)
- [The Trip to Prague 捷克布拉格之旅 by @justyy](https://steemit.com/cn/@someone/the-trip-to-prague--by-justyy)
- [出租些SP 当一回债主 - 怎么样把你多余的SP租出去收点利息？](https://steemit.com/cn/@justyy/sp-sp)
- [The profiler told me I wrote some useless code (An Example of Defensive Programming) 性能评估软件说我写了几行无用的代码](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)
- [步子迈太大容易扯到蛋](https://steemit.com/cn/@justyy/4z2jif)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [通过脑残语言来保护你的STEEM钱包密码 - Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
