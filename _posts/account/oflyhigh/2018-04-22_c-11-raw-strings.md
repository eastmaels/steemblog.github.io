
---
title: '每天进步一点点：C++11 中的原生字符串/ raw strings'
permlink: c-11-raw-strings
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-22 05:06:48
categories:
- programming
tags:
- programming
- cn-programming
- study
- learning
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


最近学习时C++遇到个小麻烦，我想在程序中放一段JSON代码，比如说读取steem区块链创世块信息的JSON：

>`{"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1}`

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

如果在Python中，我可以直接这样写：
>`j1 = '{"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1}'`

但是在C++中，这样是行不通的。如果想在字符串中包含双引号，我们需要使用转义字符**`\`**，也就是说，我们想存储上边的JSON字符串，我们需要写成类似这样的方式：
>`string s1 = "{\"jsonrpc\": \"2.0\", \"method\": \"call\", \"params\": [\"database_api\", \"get_block\", [1]], \"id\": 1}";`

如果我们的数据中包含很多需要转义的内容，那**`\`**会输入到让人抓狂，一不小心漏一个或者多一个，那么要么编译不过去，要么会导致程序行为和期待的不一致。如果能像Python那样方式使用，就爽歪歪了。

好消息是，在C++11标准中，引入了`raw_characters`概念，使用方式如下：
>**`prefix(optional) R "delimiter( raw_characters )delimiter"`**
详情可以参考：[string literal](http://en.cppreference.com/w/cpp/language/string_literal)

[string literal](http://en.cppreference.com/w/cpp/language/string_literal)里介绍得很详细，支持很多功能，我一向的原则是用啥学啥，所以其它的先不研究了，只学一下raw strings就行了。

# 简单例子

先来个简单的例子，如果想实现之前说的，类似Python的写法，该如何做呢？答案很简单：
>`string s3 = R"({"jsonrpc":"2.0","method":"call","params":["databae_api","get_block",[1]],"id":1})";`

其实就是把字符串原封不动地放到`R"()"`当中即可。妈妈再也不用担心我数转义字符累坏眼睛了。

# 多行文本

继续那Python举例，在Python中，我们是可以传入多行文本的，比如说：
![](https://steemitimages.com/DQmUr63mnp7UnTPULqm5BapKEfPk6L3DzWLPbqiKt6fuqXw/image.png)

那么这个`R"()"`是否也能这样用呢？答案是肯定的：
![](https://steemitimages.com/DQmbtFL7NBo1BqNgwvhqwoFenmxLY9qyY54ufmWt6P7uqAa/image.png)

# 定界符/delimiter

通过上边的简单例子以及多行文本的例子，我们发现这个`R"()"`就是个超级法宝啊，我用我用我使劲用，结果我擦，咋崩溃了呢？

好吧，让我们来看一个让人崩溃的例子：
>`string s = R"(Let's test R"()")";`

我的目的是在s中存入：**`Let's test R"()"`**，按照我们之前的学习，把内容放到 `R"()"`中就应该可以了，可是为啥编译不过去呢？答案就是编译器处理的时候遇到字符串中的第一个`)"`以为已经是字符串结尾了，那后边真正的结束符`)"`，编译器反而不知道如何处理了。

这种情况也不能赖编译器傻，毕竟已经比我聪明多了。好吧，不开玩笑，这种情况，我们需要用到***`定界符/delimiter`***，让编译器知道真正的起止位置。

定界符可以用任何内容，比如`<abcd>`，那么`R"()"`就变成`R"<abcd>()<abcd>"`，上述代码就可以写成
>`string s4 = R"<abcd>(Let's test R"()")<abcd>";`
`cout << s4 << endl;`

上述代码将会输出：![](https://steemitimages.com/DQmcN4iE6xJAh9GSsMrm4zZDbt2zq6jXi1QoUjz4ZtbJyDh/image.png)

好像应该写成：`Let's test R"()"!`更好看，不过我们重点是介绍raw strings，其它细节滥就滥吧（其实是我懒得改）。

# 参考链接

* [string literal](http://en.cppreference.com/w/cpp/language/string_literal)

- - -

This page is synchronized from the post: [每天进步一点点：C++11 中的原生字符串/ raw strings](https://steemit.com/@oflyhigh/c-11-raw-strings)
