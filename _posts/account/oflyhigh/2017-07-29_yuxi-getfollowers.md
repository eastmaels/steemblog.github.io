
---
title: '回答 @yuxi 关于get_followers 的问题'
permlink: yuxi-getfollowers
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-29 12:37:27
categories:
- cn
tags:
- cn
- cn-programming
- python
thumbnail: https://steemitimages.com/DQmP5Rdr7qEsmDXFW5jnmwN4nw2d5BCSpEHqJcwNFYgYWQ2/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


中文区网友发了一篇文章，[介绍Python piston库](https://steemit.com/cn/@yuxi/python-piston-api-1-8-sbd)

并在其中提出了几个问题。

问题之一：
>在查看粉丝的时候，如果某人关注了你，又取消了关注，为什么他／她还会出现在粉丝列表里？

问题之二：
>程序获取的Voting Power 很低，为何给别人投票后反而会涨，然后投票会降？

昨天我在他帖子中回复的第二个问题，第一个问题因为需要测试，没有直接回答
![](https://steemitimages.com/DQmP5Rdr7qEsmDXFW5jnmwN4nw2d5BCSpEHqJcwNFYgYWQ2/image.png)


# get_followers 问题没法重现

![](https://steemitimages.com/DQmV2GN3Pa2XGmgbVgoaYXAkPgJnkki8GZDDgk8z31uQhSK/image.png)

很抱歉，才抽出时间测试
经过我的测试，没法重现你帖子中描述的问题

![](https://steemitimages.com/DQmf7aUTZv6ecBnZ36vJ3VcrJkFibTopu7iSSSTtwA4WP6J/image.png)
测试之前我有1405个关注者

![](https://steemitimages.com/DQmX3HNHsZAAACuCZD8ovNzP7QBqkzmtzKVWkrtLLpUa7dM/image.png)
获取关注者数量，让某人取消关注后再次获取，让某人重新关注后再次获取
从数量上看没有错，我把名单显示出来也没有错

我看了一下steem python 库 以及 piston 库，两者的实现是一样的
都是封装并调用以下两个API
* get_followers
* get_following

steem中两个API定义如下：
```
vector< follow_api_obj > get_followers( string to, string start, follow_type type, uint16_t limit )const;
vector< follow_api_obj > get_following( string from, string start, follow_type type, uint16_t limit )const;
```

我这没法重现你说的问题，建议你重新测试一下
如果还存在，建议提供你的详细代码以及重现步骤

# 其它

关于Voting Power 问题我已经解答了，就不再赘述了。

***Python 库推荐大家用官网的***
官网的库是复制piston并经过重构的，更易读
并且HF18后很多新功能，piston里是不支持的

* piston_lib上次更新时间： ***Latest commit cb94d72 on May 15***
* 官网Python库上次更新时间： ***Latest commit 93ac4db on Jun 24***

该如何选择，大家已经有了决定了吧？

- - -

This page is synchronized from the post: [回答 @yuxi 关于get_followers 的问题](https://steemit.com/@oflyhigh/yuxi-getfollowers)
