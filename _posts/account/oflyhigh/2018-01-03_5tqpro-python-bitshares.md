
---
title: '又遇灵异事件 —— python-bitshares 升级啦'
permlink: 5tqpro-python-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-03 13:35:27
categories:
- python-bitshares
tags:
- python-bitshares
- python
- bitshares
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmbP65aSBtedZ1xC5zCUrNvRNphK7GKrgvQdBScRZwe7hz/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在以往python-bitshares文章中，我都是一遍读github上的代码，一边进行学习和测试。但是这两天用到Asset类，却遇到一个麻烦。

![](https://steemitimages.com/DQmbP65aSBtedZ1xC5zCUrNvRNphK7GKrgvQdBScRZwe7hz/image.png)
封面图源：https://pixabay.com

# 灵异事件

python-bitshares在github上的代码中有如下代码：
![](https://steemitimages.com/DQmWzjEi959mpq3p7NEXXaQ89uDcoktvK2LcuuwNULPENPH/image.png)

光看代码很好理解，一个是读取***资产的符号***，一个是读取***资产的精度***。

但是我测试这两个属性时，却遇到错误。
```
>>>from bitshares.asset import Asset
>>>asset = Asset("CNY")
>>>print(asset.precision)
```

![](https://steemitimages.com/DQmTaFY3oTggJtFaLUwP2r2YAUL9coMhKpbxWEDEGdjzC14/image.png)

或者
```
>>>from bitshares.asset import Asset
>>>asset = Asset("CNY")
>>> print(asset.symbol)
```
![](https://steemitimages.com/DQmerqDw3BXZNX1iC5evpej9WAfaXszoe1Ez5wamycn3xLv/image.png)

这让我如何也理解不了，明明代码中存在两个属性，为啥执行就报不存在呢？这不科学呀，在各大引擎找了半天，有说让删除缓存文件的，有说是命名和已有模块冲突的，但是怎么对照也感觉不像，明明就是***灵异事件***！

想到前些天在[《Python PrettyTable 模块学习 (格式化打印内容)》](https://steemit.com/python/@oflyhigh/python-prettytable)这个帖子中也曾遇到过灵异事件，最后检查的结果是***我编辑文件A，运行文件B***。我因此得出结论：***遇到灵异事件时不要轻易放弃😳***

那么这次灵异事件也是我哪里搞错了吗？

# python-bitshares 升级啦

我挠头发、拍脑瓜，怎么也没觉得我弄错什么。揉了揉太阳穴、深呼一口气，还是先看看我今天早晨发的steemd节点升级里别人给我的回复吧。等等，我灵光一闪，升级？会不会是python-bitshares升级了呢？

于是看了一下github库里的信息
![](https://steemitimages.com/DQmWUmxTh5tpKiMZWqEBCeb8x9wRjCDjQDwTTedbD9wwa34/image.png)

OMG，果然，python-bitshares 6天以前发行了***`新版本: 0.1.9`***

按github上的升级指令升级一下，结果提示我：
>You must give at least one requirement to install (see "pip help install")

这又是什么鬼？看提示是说我至少要告诉它我要安啥！我难道没告诉它吗？仔细一下，果然没告诉。再一对照，官网给的更新指令就没给目标：![](https://steemitimages.com/DQmdAb3DA73PRJwZS5ortekTyUZ5Qee39P6JXE3CSnBVSot/image.png)看来，适度动脑还是很有必要的，将指令改为：***`pip3 install --upgrade bitshares`***，更新成功。

# 测试

再来测试一下
![](https://steemitimages.com/DQmYGwVxbiPY98mFPDe7ZKNDbHnpRAvRryXGxDMp6yN3RDZ/image.png)
一切正常。

总结

* python-bitshares 已经升级至 0.1.9
* 升级指令: pip3 install --upgrade bitshares (我使用的virtualenv无需加--user)
* 灵异事件被证实还是我的问题 (没及时更新版本)

另外，需要注意的是，如果你有应用使用python-bitshares以前版本，那么***升级前请务必检查程序的兼容性***，如果不确定是否兼容，并且原来的程序都还好用，那么不必急着升级。这个和api节点那个不一样，那么你不升级就没法用啦。

一天遇到两起升级事件，我也是醉啦😳😰

- - -

This page is synchronized from the post: [又遇灵异事件 —— python-bitshares 升级啦](https://steemit.com/@oflyhigh/5tqpro-python-bitshares)
