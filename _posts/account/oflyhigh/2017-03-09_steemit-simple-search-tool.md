
---
title: '预告：文章搜索工具 (Steemit simple search tool)'
permlink: steemit-simple-search-tool
catalog: true
toc_nav_num: true
toc: true
date: 2017-03-09 13:32:54
categories:
- cn-programming
tags:
- cn-programming
- steemit
- steemit-dev
- cn
- steemdata
thumbnail: https://steemitimages.com/DQmdqam1hxbxKhWwd5ysMRX7c23A8R1BeXoo7ZFkatTiwvH/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmdqam1hxbxKhWwd5ysMRX7c23A8R1BeXoo7ZFkatTiwvH/image.png)

来steemit这么久，觉得有一个非常不方便的地方，就是搜索功能不强。

# 搜索方法

* 内置搜索
steemit在隐蔽的角落里放了个搜索按钮，但是，貌似似乎使用的google引擎，墙内用户，不用多说，你懂的
![](https://steemitimages.com/DQmStLcVdWrKVu4ZeRiNdTdYYi52pcAeWpdsoBcEJX6yMGy/image.png)

* 搜索引擎
除了只能看不能用的内置搜索，我们似乎还可以使用其它搜索引擎，比如微软bing
![](https://steemitimages.com/DQmYu1q3raSZZM3XPrAwUJ6u7U9yT9ZdRdhbaJDaqLKcHR3/image.png)
也试了一下百度，结果只有寥寥几条结果。

* 使用程序
前些天我想找一些内容，但是我不知道作者，bing也没有搜到，于是我想了个馊主意，写了一堆代码找到文章的链接，然后在复制到浏览器里，傻得不要不要的。

* 最笨的方法
比如我想找我的一篇文章，那么我就进我的主页，使劲翻啊翻啊，只要网络状况好，那么还是有机会找到的。

# 简单搜索工具

于是我就想能不能有个便捷的搜索工具呢，用上述各种方法搜了一圈，貌似没有理想的工具，于是萌生出自己做一个的想法。说干就干，作为菜鸟，做点事情还是很有难度的，于是边学边弄，一夜一天，总算有个雏形了。

工具基于:  [steemdata](http://www.steemdata.com)
**感谢 steemdata 团队**

我给她取个名字叫：`Steemit simple search tool`，功能如下：
* 搜索标题或者正文中指定关键字
* 可以指定文章作者(不指定则默认所有作者)
* 返回结果按时间排序(最新的在最前边)
* 点击链接，自动打开steemit上对应内容
* 支持多国语言(比如关键字输入`台湾`或`台灣`)



测试如下：
* 指定作者，指定关键字，标题检索
![](https://steemitimages.com/DQmaMPXNd4prR9K3JUViXZ53ggzjq1RyN9trDLwadqQsn9R/image.png)

* 指定作者，指定关键字，正文检索
![](https://steemitimages.com/DQmTof6ADmuJGradAxgFvQ2cwszQnGVoQRUXGYAxzHSnd5j/image.png)

* 不指定作者，标题检索
![](https://steemitimages.com/DQmZXkPJzM3QshJZhVBTXpuadAJhxqSJKmJoFeWArcPDR7a/image.png)

* 不指定作者，正文检索
![](https://steemitimages.com/DQmWNkHQ7iaViqH6a7iazRQoTJzjsKuUq4jN62Jg3n46LTL/image.png)

* 测试繁体 (比如搜索刘老师的帖子)
![](https://steemitimages.com/DQmYrizLkwLY3stmKhdjt9aZKAp6e3g1Jkj7KNdEbUSLPjG/image.png)

# 更多有趣的玩法

比如查查刘老师在多少个帖子中提到过`美食`
比如都谁的帖子中@过你
等等等

# 需要完善的地方

* 设置关键字忽略大小写(当前是大小写敏感)
* 放到主机上，主机已经买好
* 注册个新域名？有点舍不得啊
* 返回一些更详细的信息，比如`类目，作者，时间`等
* 美化网页，这个太难了，55555555555555555555555555555555555555
* 限制返回结果长度(用户可选)
* 查询过程给用户提示(更友好？)
* ......

自己玩很简单，要想做完善，真的很麻烦。

欢迎同志们多提宝贵意见

- - -

This page is synchronized from the post: [预告：文章搜索工具 (Steemit simple search tool)](https://steemit.com/@oflyhigh/steemit-simple-search-tool)
