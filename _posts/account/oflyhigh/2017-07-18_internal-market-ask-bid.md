
---
title: '内部市场(Internal market)要价(Ask)与出价(Bid)的区别'
permlink: internal-market-ask-bid
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-18 03:36:33
categories:
- cn
tags:
- cn
- market
- price
thumbnail: https://steemitimages.com/DQmfZPWG24sDAkRAcGdtzR4qNfJ2wiqcc52HpVc3rMS7bth/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


总是傻傻的搞不清楚内部市场中Ask与Bid的区别，今天特意理一下，并记录下来。
至于搞不清楚有啥影响？我才不会告诉你我把两者弄反，然后把测试交易用的STEEM赔光的糗事的。😭

![](https://steemitimages.com/DQmfZPWG24sDAkRAcGdtzR4qNfJ2wiqcc52HpVc3rMS7bth/image.png)

# Ask 是要价，亦即出售
![](https://steemitimages.com/DQmQP8BCEiEyNeUfdxH5tA6nS4kbM7jS8E3aVAKF5rBCf4p/image.png)

![](https://steemitimages.com/DQmPmZvS4dURWw9AWxaDz7aazx5HDJonQ7YzQZjqcyrPKXG/image.png)

内部市场中卖单是按出售价从低往高排列的，出售价最低的卖单最先被处理。
换句话说，我们欲购买STEEM的时候，要看谁卖的最便宜，当然挑便宜的买喽。

# Bid是出价，亦即购买

![](https://steemitimages.com/DQmYfmTvkCPN8pC84JpF1WXvVzmUV9rGuvb2cnoxYH6VvFZ/image.png)

![](https://steemitimages.com/DQmQVacr9Qr9AfWWxxoAdwYXCQnRmgKp9gkChmd7BoE3yQt/image.png)

内部市场中的买单是按购买价从高往低排列的，购买价最高的买单最先被处理。
换句话说，我们欲出售STEEM的时候，要看谁给的买价最高。


# 举个例子

还有点迷糊？我也是，让我们来一起举个栗子。

我去市场上卖土豆，为了便于理解，咱也论个卖。

我叫价： 土豆5元一个喽，五元一个喽，这就是： ***ASK***
然后那边有人收购土豆： 4元一个收土豆喽，4元一个收土豆喽，这就是: ***BID***

然后假设有N多卖土豆的和收土豆的，这就有了买单列表，和卖单列表
买单 (收土豆)|卖单 (卖土豆)
----|----
4.9 (Highest bid)|5.0  (Lowest ask)
4.5|5.2
4.0|5.5
3.2|6.0

买单中出价最高的，即： ***Highest bid***
卖单中叫价最低的，即： ***Lowest ask*** (看我多朴实，卖土豆都卖最低价)

假设你来买土豆，又想迅速成交(先不考虑量的问题)，那么当然挑最便宜的买喽（买我的，买我的)
假设你来卖土豆，又想迅速成交(先不考虑量的问题)，那么当然是卖给出价最高的喽

STEEM 这个菜市场的土豆行情
![](https://steemitimages.com/DQmRqmGLhhUenXRy6akaDgMhSnvsD4frJShEqmNS8BNHqQM/image.png)

# 结论

* Ask 是要价，亦即出售
* Bid是出价，亦即购买
* ***Highest bid*** 买单中出价最高的
* ***Lowest ask*** 卖单中叫价最低的

现在明白了吧?
还没明白? 来来来帮我用程序迅速帮你把STEEM赔光，你就会懂得很快的。

- - -

This page is synchronized from the post: [内部市场(Internal market)要价(Ask)与出价(Bid)的区别](https://steemit.com/@oflyhigh/internal-market-ask-bid)
