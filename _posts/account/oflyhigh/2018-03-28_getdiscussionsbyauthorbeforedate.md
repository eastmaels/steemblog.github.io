
---
title: '另一种遍历用户文章的方法 / get_discussions_by_author_before_date'
permlink: getdiscussionsbyauthorbeforedate
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-28 13:01:57
categories:
- cn
tags:
- cn
- cn-programming
- api
- steemdev
- programming
thumbnail: https://steemitimages.com/DQmWuTP2RBoE6Hi3ZDruc66hNJFs8yWyER3M8WkeyTEc2hk/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章[《BUG? 个人主页无法读取到500篇以上内容》](https://steemit.com/steemdev/@oflyhigh/bug-500)中，我们介绍了**`get_blog`** 方法，用于获取用户所有的文章。

![](https://steemitimages.com/DQmWuTP2RBoE6Hi3ZDruc66hNJFs8yWyER3M8WkeyTEc2hk/image.png)
(图源 ：[pixabay](https://pixabay.com))

但是这个方法有一个弊端，受限于API节点**`max_feed_size`**的限制，无法读取某个用户近**`max_feed_size`** （默认500篇）以前的内容。

# 数据库方法 & 其它

在那篇文章中，我给出的建议是使用[SteemSQL](https://steemsql.com)或者[SteemData](https://steemdata.com)等数据库来获取用户所有文章，但是[SteemSQL](https://steemsql.com)现在改成收费的了，[SteemData](https://steemdata.com)的MongoDB 没接触过的朋友用起来可能不太方便，总之，使用数据库加大了操作难度。

那么，有没有其它API能用于获取指定用户的所有文章呢？其实STEEM API中好多是可以传入用户信息，然后用用户信息来进行过滤的，比如一堆**`get_discussions_by_XXX`**系列API，都是可以传入**`discussion_query`**结构来进行筛选的（最终调用**`get_discussions`**)
![](https://steemitimages.com/DQmWinAeZVRtkjiPPGLEBwQuJnNbfge7mF4FxaPX4xkGgGb/image.png)
然而悲催的是，我从来没有试成功过。

# get_discussions_by_author_before_date

数据库方法比较繁复，传入**`discussion_query`**的方法我一直没有尝试成功，难道就没辙了吗？

**山重水复疑无路，柳暗花明又一村**，所幸的是，我发现了**`get_discussions_by_author_before_date`**这个方法。

它接受的参数如下：
![](https://steemitimages.com/DQmR3SQETJVH6bx8d8qHwu4pj3xhv3f9jMURfPcePSKpmvR/image.png)

简单的来讲，这个函数获取指定作者(author)、指定链接(start_permlink)、指定时间点(before_date)以前的文章。

但是，这个方法有一些怪癖，导致我一度认为它行为不正常。

#### 怪癖一

指定链接为空，指定时间点无效，返回用户最新文章列表(limit)

#### 怪癖二

指定链接创建时间晚于指定时间点，那么两者都无效，返回用户最新文章列表(limit)

所以，正确的使用方式是，**指定链接的创建时间早于指定时间点，返回早于指定时间点指定链接的文章列表(limit)。**

有点拗口是吧，我们来实际演练一下。

我一年多前折腾过一个自动浇花装置
[《基于Intel Edison自动浇花系统的最终报告/The automatic watering device with Intel Edison》](https://steemit.com/diy/@oflyhigh/intel-edison-the-automatic-watering-device-with-it-intel-edison)

>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_discussions_by_author_before_date", ["oflyhigh", "intel-edison-the-automatic-watering-device-with-it-intel-edison", "2018-03-28T12:44:18", 2]], "id": 1}' https://api.steemit.com`

那么上述指令就会返回我的自动浇花以及自动浇花之前的[那篇文章](https://steemit.com/bananapi/@oflyhigh/bananapi-m3-led)。
（咦，这么说来好像时间点并没有起到什么作用，我们指定当前时间戳对应的时间点即可，莫非可能影响查询效率？）

# 接下来如何做？

知道了**` get_discussions_by_author_before_date`**怎么用，那么遍历文章还有什么难度吗？这篇文章就不再赘述啦。

# 参考链接

* [BUG? 个人主页无法读取到500篇以上内容](https://steemit.com/steemdev/@oflyhigh/bug-500)

- - -

This page is synchronized from the post: [另一种遍历用户文章的方法 / get_discussions_by_author_before_date](https://steemit.com/@oflyhigh/getdiscussionsbyauthorbeforedate)
