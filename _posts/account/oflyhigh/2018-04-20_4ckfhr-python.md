
---
title: '每天进步一点点：Python中使用函数作为参数'
permlink: 4ckfhr-python
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-20 02:45:09
categories:
- python
tags:
- python
- programming
- cn-programming
- learning
- cn
thumbnail: https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我的一个Python小脚本中，我有一个变态的需求，在一个函数中调用不同的函数，这个时候最简单的方法就是将待调用的函数作为参数传入。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](bing.com)）

# 函数也是对象

之所以可以这样操作的原因是因为Python中一切皆是对象，举例说，我们可以定义个简单的函数并打印相关信息：
```
def add(x, y):
        return x + y

print(add)
print(type(add))
print(id(add))
```

上述代码将输出类似如下信息：
><function add at 0xb6b8d618>
<class 'function'>
3065566744

# 函数作为参数

有了上述分析，我们就可以大胆的将函数作为参数传入其它函数中了，下边我们实现了简单的加法(add)、减法函数(sub)。同时我们定义了一个函数计算(calc)，这个函数接受一个函数以及其它两个参数。
```
def add(x, y):
        return x + y

def sub(x, y):
        return x - y

def calc(func, a, b):
        return func(a, b)

print(calc(add, 1, 2))
print(calc(sub, 1, 2))
```

可见，我们可以通过调用calc函数，并指定用于进行计算的函数（add或者sub)来计算对应的数值。上述代码输入结果如下：
>3
-1

# 函数参数的可变参数

上述例子中，我们直接在calc函数定义中指定了参数，并传递给其中的函数调用(add或sub)，但是如果我们没法确定其内被调用的函数有多少个参数，或者有些参数是关键字参数，可怎么办呢？

答案是很简单的，我们只需将其传入到calc函数即可。

```
def add(x, y):
        return x + y

def add_more(x, y, z):
        return x + y + z

def sub(x, y):
        return x - y

def calc(func, *args, **kwargs):
        return func(*args, **kwargs)

print(calc(add, 1, 2))
print(calc(sub, 1, 2))
print(calc(add_more, 1, 2, 3))
print(calc(add_more, x=1, y=2, z=3))
```

其中：
```
def calc(func, *args, **kwargs):
        return func(*args, **kwargs)
```
第一句代表将位置参数打包给args(tuple类型)，将关键字参数打包给kwargs(dict)类型。第二句函数调用括号内则代表将对应的数据解包。

将上述代码改进一下：
```
def add(x, y):
        return x + y

def add_more(x, y, z):
        return x + y + z

def sub(x, y):
        return x - y

def calc(func, *args, **kwargs):
        print(args)
        print(kwargs)
        return func(*args, **kwargs)

print(calc(add, 1, 2))
print()

print(calc(sub, 1, 2))
print()

print(calc(add_more, 1, 2, 3))
print()

print(calc(add_more, x=1, y=2, z=3))
```

结果如下：
>(1, 2)
{}
3
>
>(1, 2)
{}
-1
>
>(1, 2, 3)
{}
6
>
>()
{'x': 1, 'y': 2, 'z': 3}
6

# Python 内置函数

在Python内置函数中，有几个函数使用了函数作为参数，比如：
* map()
`map(function, iterable, ...)`
* filter()
`filter(function, iterable)`
* reduce()
`reduce(function, iterable[, initializer])`

本文就不做深入介绍了。

- - -

This page is synchronized from the post: [每天进步一点点：Python中使用函数作为参数](https://steemit.com/@oflyhigh/4ckfhr-python)
