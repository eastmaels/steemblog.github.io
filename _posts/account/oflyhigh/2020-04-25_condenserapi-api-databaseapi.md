
---
title: '每天进步一点点：condenser_api 与其它API(database_api)等的异同'
permlink: condenserapi-api-databaseapi
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-25 04:00:03
categories:
- cn
tags:
- cn
- python
- api
- study
- condenser
thumbnail: 'https://cdn.pixabay.com/photo/2015/06/12/08/41/pencils-806604_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必用过API的都会有一点了解，那就是`condenser_api`，其实就是对其它各个API的封装，这样用户可以通过这个接口按一定的风格进行调用，可以忽略很多细节。

![](https://cdn.pixabay.com/photo/2015/06/12/08/41/pencils-806604_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

以我们最常用的API `get_dynamic_global_properties`为例，`condenser_api`其实是对其进行了如下封装：
>![image.png](https://images.hive.blog/DQmfQMdzdSq5T9DUS7unubrGCwAWdQiHFS4vn89svL4Chcy/image.png)

看起来就是***简单的映射***，如果都是这样的，那么直接调用别的API也未尝不可。

但是等等，略复杂一点的情况来了，比如这个API：`get_chain_properties`，并没有同名的直接映射，而是其它API的部分返回结果：
>![image.png](https://images.hive.blog/DQmZZb7Y5j6fgtf5nT28Nmv6pSTzjfimgCbhGHXQXokPQMk/image.png)

这种情况，如果你的程序依赖于`condenser_api`，那么就要***找出具体是哪个API的哪个返回部分***，复杂度略增。

以上两种还算简单，请看官继续看，更加复杂的马上就来了，让我们来看看我们最熟悉的`get_accounts`，我们使用`condenser_api`调用`get_accounts`会返回很多信息，比如我的声望分啊，我的见证人投票啊，那么我们来看看代码如何实现的：
>![image.png](https://images.hive.blog/DQmasr6eBqA9sbvPZUin4RydNrqWk5HGVCJTtuWGu5LeahJ/image.png)

从上述代码中，我们不难看出`condenser_api`的`get_accounts`除了获取账户本身信息外，还追加了见证人票以及从其它插件获取了reputation信息，***相当于多个API组合实现***，这样我们如果用底层API直接实现，就复杂了好多。

尽管`database_api`中`find_accounts`提供了类似方法，但是并没有额外返回投的见证人票数据以及repution数据。

除此之外，在***传递数据(输入)以及返回数据(输出)的格式方面，使用`condenser_api`以及直接使用其它API`database_api`等，也有很大的差异***。

`condenser_api`参数一般是作为数组传入`[]`，而其它API的参数一般作为字典传入`{}`，还是就是涉及资产类型比较头大，我为了这事卡住了三两天，总算理清一点眉目了。

![](https://cdn.pixabay.com/photo/2013/09/05/14/57/colored-pencils-179167_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

所以，真是试了其它API，才知道才知道`condenser_api`是多么便利啊。

- - -

This page is synchronized from the post: ['每天进步一点点：condenser_api 与其它API(database_api)等的异同'](https://steemit.com/@oflyhigh/condenserapi-api-databaseapi)
