
---
title: '介绍一个JSON C++ 库 / JSON for Modern C++'
permlink: json-c-json-for-modern-c
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-25 02:53:21
categories:
- json
tags:
- json
- programming
- cn-programming
- study
- cn
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们都知道，在Python或者PHP等语言使用JSON是非常方便的，因为两种语言本身就带强大的JSON库，在Python脚本里只需调用`json.dumps()`或`json.loads()`即可；在PHP脚本中，只需调用`json_encode()`或者`json_decode()`就都能搞定。那么在C++中，是否可以一样方便呢？

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

我学习了几个JSON库，感觉用起来都怪怪的，直到后来看到[nlohmann/json](https://github.com/nlohmann/json)，宣称是JSON for Modern C++ ，看起来舒服多了。

#  项目地址 & 使用

这个项目托管在Github上，地址如下：
https://github.com/nlohmann/json

有别于其它复杂的项目，这个项目可以通过直接包含一个.h文件来在我们自己的程序中加入JSON的支持，简直是简单的不得了，尤其是对我这种脑容量小的，特别适合。(单个.h提供使用上的便利，但是我不推荐）

只需下列包含语句就可以在程序中使用JSON功能了
>`#include <nlohmann/json.hpp>`
`using json = nlohmann::json;`


因为所有内容/功能都在文件中了，所以编译的时候，我们无需链接额外的库。（但是这样考虑电脑的性能，老一点的机器可能需要编译一会呢）

需要说明的是，因为这个JSON库中大量地使用了C++11的一些功能和特性，所以需要设置编译器使其支持C++11，对G++而言，添加 **`-std=c++11`**即可。

# 简单示例

项目页面[nlohmann/json](https://github.com/nlohmann/json)的下边有很多例子演示如何使用这个库，我没必要做些重复的工作，这里我只给大家简单演示一下即可。

#### 创建JSON

假设我们需要下列JSON代码：
>`{"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1}`

很熟悉，是不是，就是STEEM区块链上读取创世块的代码。那么如何从头构造这个JSON结构呢？其实很简单，代码如下：

>`json j;`
`j["jsonrpc"] = "2.0";`
`j["method"]="call";`
`j["params"] = {"databae_api","get_block",{1}};`
`j["id"] = 1;`


好吧，这看起来还是有些费劲，那么有没有更简单的方法呢，答案有的，还记得我们讲过的[C++11 中的原生字符串/ raw strings](https://steemit.com/programming/@oflyhigh/c-11-raw-strings)吗？

上边代码可以这样写：
>`json j_02 = R"({"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1})"_json;`

没错，就是字符串后边加个**`_json`**，就自动将字符串转成json类型了。

继续，还觉得不直观，那有更直观的方式：
>`json j_02 = json::parse(R"({"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1})");`

有没有一种很熟悉的感觉？没错，这不就是Python中的**`json.loads()`**嘛。

#### 修改JSON

其实修改的方式我们已经讲过了
>`json j;`
`j["jsonrpc"] = "2.0";`
`j["method"]="call";`
`j["params"] = {"databae_api","get_block",{1}};`
`j["id"] = 1;`

这样操作即可，是不是太简单了

#### 序列化 / Serialize

既然能实现类似`json.loads()`的反序列化，那么如何实现`json.dumps()`呢？答案更是简单，比如针对我们上边创建好的JSON数据只需使用如下方法即可：
>`std::string s = j.dump();`

另外对于复杂的Json数据，有时候我们需要它显示的美观一些，那么我们可以用下列语句实现：
>`std::string s = j.dump(4);`

![](https://steemitimages.com/DQmbsfrSbeUFmrUAAbJA6jSxh3Td3Fbr5eXaGJqv6TRkLgg/image.png)
是不是挺好看滴？

# 总结


[nlohmann/json](https://github.com/nlohmann/json)是一个很简单易用的JSON C++ 库。本文只对其进行了简单的介绍，想发掘它强大的功能的朋友，自己来玩吧。

# 相关链接

* [nlohmann/json on Github](https://github.com/nlohmann/json)
* [每天进步一点点：C++11 中的原生字符串/ raw strings](https://steemit.com/programming/@oflyhigh/c-11-raw-strings)

- - -

This page is synchronized from the post: [介绍一个JSON C++ 库 / JSON for Modern C++](https://steemit.com/@oflyhigh/json-c-json-for-modern-c)
