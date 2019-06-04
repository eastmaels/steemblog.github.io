
---
title: '发奖有STEEM啦，来分析一下发奖的变化(其实没啥变化😰)'
permlink: 3veklk-steem
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-19 04:27:24
categories:
- steem
tags:
- steem
- sbd
- steemit
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmRrd6RXs9JtbqGEwQR3mq9894RZ8VhtAu4d9fY9Re9jQW/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天看到不少朋友说文章收益中包含STEEM部分啦，进去一看还真是那么回事，原本发奖都是**`SBD`**和**`STEEM POWER`**，现在则变成了**`SBD`**、**`STEEM`**、以及**`STEEM POWER`**，不少朋友惊呼STEEM有重大变革了，硬叉20是不是要来了？

![](https://steemitimages.com/DQmRrd6RXs9JtbqGEwQR3mq9894RZ8VhtAu4d9fY9Re9jQW/image.png)
(图源：[pixabay.com](https://pixabay.com))

# sbd_print_rate

先别激动，如果我告诉你发奖方式其实一直是**`SBD`**、**`STEEM`**、以及**`STEEM POWER`**你会不会很惊讶？其实这是真的。我们之前之所以没有看到**`STEEM`**，是因为系统算出来的应发**`STEEM`**为0而已。其实HF19之前，我们的文章也曾收到过**`STEEM`**奖励，不过这事说起来太久远了，很多朋友新来的不清楚而已。


那么什么时候发奖含**`STEEM`**呢？这要从系统的一个参数说起，这个参数名字叫做：**`sbd_print_rate`**，就是下图中的这个东西：

![](https://steemitimages.com/DQmTA9EHfg8gqMpSEd2AnzN3Noi4sUDdcLwd2JzrWvz7Dzp/image.png)
9933就是99.33%啦

这个代表最后发奖时，你的**奖励中的SBD奖励分成两部分发放**，其中99.33%以SBD形式发放，0.67%以STEEM的形式发放。

# 从代码看奖励发放

让我们从代码**`sbd_print_rate`**来看看它如何影响奖励发放的

奖励发放的部分代码如下：
![](https://steemitimages.com/DQmW8NP5eXuzHHoD1cZ54dNzE61oaeMCxHnQjjumkB9b6zu/image.png)
之前给点赞者的奖励以及收益分享啥的奖励我没有截取，感兴趣的自己去看。

上边这段代码大意就是按照用户设置的发放比例（50%/50% 或者 100% Power UP）来将奖励分成两部分，一部分以SP形式发放**`create_vesting`**，一部分以**SBD和STEEM形式发放`create_sbd`**，别被这个函数名误导，或许它应该叫做**`create_steem_sbd`**更合理一些。

**`create_sbd`**中有关steem和sbd发放比例相关的代码如下：
![](https://steemitimages.com/DQmcnqvDwyKuYdEtQVvHCWh6qwzpdp2YySgdATpQ2wCTyv9/image.png)
这是简单明了的，无需多解释啦。

# 影响sbd_print_rate的因素

那么问题来了，到底是什么影响**`sbd_print_rate`**的变化呢？我们继续翻代码，代码如下：

![](https://steemitimages.com/DQme22JtZb9tKRyenmcA7DUMcS6xTN3RZ7WQCn5vHDYcZik/image.png)
为了显示效果，没截全，感兴趣的去自己看代码吧。

从中我们不难看出，和current_supply、current_sbd_supply、以及current_median_history等参数以及 STEEM_SBD_START_PERCENT、STEEM_SBD_STOP_PERCENT两个系统常量有关。

![](https://steemitimages.com/DQmNRavULb81a8Tgicvcg3eDHsxRCopbZRwZHHnG99tkXj9/image.png)
两个常量分别为2%和5%

对照我们不难得出结论：
* **`SBD供应量<=总供应量的2%`，系统加速印SBD** （奖励只发放SBD+SP)
* **`如果`SBD供应量>=总供应量的5%`, 系统停止印SBD** （奖励只发放STEEM+SP)
* **`如果`SBD供应量位于2%和5%区间`, 系统按一定比例印SBD**  （奖励发放SBD+STEEM+SP)

# 结论

其实STEEM没做啥更新，之所以出现奖励变化，只不过是系统的一种自我调节机制。所以大家表激动啦，该忙啥忙啥吧。

- - -

This page is synchronized from the post: [发奖有STEEM啦，来分析一下发奖的变化(其实没啥变化😰)](https://steemit.com/@oflyhigh/3veklk-steem)
