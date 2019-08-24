
---
title: '[EOS学习笔记]认识ABI文件 Understanding ABI Files'
permlink: eos-abi-understanding-abi-files
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-12 14:12:57
categories:
- eos
tags:
- eos
- cn-reader
- partiko
- sct
- zzan
thumbnail: 'https://cdn.steemitimages.com/DQmVppNUY1TvTAhntZXbLTYnhVj3w4GmGZqxRjzmK2UZL7s/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


ABI是什么？
每一个看到这里的读者都会跟我一样疑惑，ABI是个什么玩意儿。
我们先来看下官方对ABI的定义解释：
The Application Binary Interface (ABI) is a JSON-based description on how to convert user actions between their JSON and Binary representations. 
ABI就是应用程序二进制接口，一个基于JSON的描述，介绍如何在JSON和二进制表示之间转换用户操作。
没明白，是不是？没关系，我们继续看下边。


 创建一个ABI文件  
Create an ABI File
eosio.token.abi

一个标准的ABI文件结构内容，如下图：
![](https://cdn.steemitimages.com/DQmVppNUY1TvTAhntZXbLTYnhVj3w4GmGZqxRjzmK2UZL7s/image.png)
当然，这个是个空的ABI文件，没有内容的。

但我们可以从中看出，一个标准的ABI文件主要包括types，structs，actions，tables等。

接下来我们分别来看。
Types 
![](https://cdn.steemitimages.com/DQmfKzWX7SpXz9CunAhDVz5KqQnG8zY6piUbDNXZQTDrEUz/image.png)

Structs
structs分别由 name ， base，和 fields 组成。
{
   "name": "issue", //The name 
   "base": "", 			//Inheritance, parent struct
   "fields": []			//Array of field objects describing the struct's fields. 
}
其中fields为数组

![](https://cdn.steemitimages.com/DQmVkgmTVwuf2Bc4WEvjaS7uYEkT5r2YuTqheYEBJPpGa6n/image.png)



Actions

actions定义类似如下，
![](https://cdn.steemitimages.com/DQmPDp9KFT1sotP3Cv5sWfV14jfhXeZjxy7paaBzMv5TWY2/image.png)

我的理解是，每一个action可以完成一个事件（或内容），而一个智能合约里可以包含一个或多个action

action 部分的作用是声明智能合约有哪些可以调用的 action

![](https://cdn.steemitimages.com/DQmYT5v1LPbCjaYg4enBJB4wfrF5JmCECT8F2pKSgJ7hFCu/image.png)


Tables
table的定义类似如下图
![](https://cdn.steemitimages.com/DQmSR148GAjWAp32tMdhBzVQigUo4fdt1bCeUjcHfDMS2Vt/image.png)

例如，
![](https://cdn.steemitimages.com/DQmShbGBvL28so5vDjbPpCo1VRPKv4CvUAPunjw9gxJyGhR/image.png)

我的理解，tables应是定义数据结构，类似数据库中的表结构

- - -

This page is synchronized from the post: ['[EOS学习笔记]认识ABI文件 Understanding ABI Files'](https://steemit.com/@rivalhw/eos-abi-understanding-abi-files)
