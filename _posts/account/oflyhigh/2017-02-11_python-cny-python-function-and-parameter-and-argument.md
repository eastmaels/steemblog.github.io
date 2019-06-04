
---
title: '不求甚解之Python函数参数 (元组，字典）/ Python function & parameter & argument'
permlink: python-cny-python-function-and-parameter-and-argument
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-11 13:54:15
categories:
- bananapi
tags:
- bananapi
- python
- cn
- parameter
- cn-programming
thumbnail: http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![M3](http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

前文我们因为一段测试程序不好用，特意装了Python 3.5.3
[How to install python 3.5 on Banana-Pi M3 / 如何香蕉派上的安装python 3.5](https://steemit.com/bananapi/@oflyhigh/how-to-install-python-3-5-on-banana-pi-m3-python-3-5)
导致问题的程序代码如下：
```
foo = {'1': 1}

def bar(*args, **kwargs):
     print(kwargs)

bar(**foo, baz=2)
````

最终我们通过的升级Python到3.5.3 解决了这个问题
(把传入的参数顺序调换一下也可以解决这个问题）

但是，这到底是咋回事呢？ **kwargs，前边的**到底是啥意思呢？
作为菜鸟，不求甚解是不对的，为此我特意学习了一下

什么位置参数，关键字参数就不用说啦，来看看那个`*`和`**`是什么鬼?

# 函数参数

为此，我特意写了一段程序测试一下：

````
def func(arg1, *arg2, **arg3):
        print(arg1)
        print(arg2)
        print(arg3)
        print("End Func\n--------")
````

* 调用 func(1)
```
1
()
{}
End Func
--------
```
结果一如所料，位置参数传入1，元组以及字典为空

* 调用 func(1, 2, 3)
```
1
(2, 3)
{}
End Func
--------
```
位置参数传入1，多余的直接传入的参数被放入元祖，字典为空

* 调用 func(1, a='aaa', b='bbb')
````
1
()
{'b': 'bbb', 'a': 'aaa'}
End Func
--------
````
位置参数传入1，元祖为空，多余的关键字参数被放入字典

* 调用 func(1, 2, 3, a='aaa', b='bbb')
````
1
(2, 3)
{'b': 'bbb', 'a': 'aaa'}
End Func
--------
````
位置参数传入1，多余的直接传入的参数被放入元祖，多余的关键字参数被放入字典

至此已经大致明白了
对于`def func(arg1, *arg2, **arg3):`
除了正常的位置参数，关键字参数外，多余的位置参数放入元组(arg2)，多余的关键字参数放入字典(arg3)

注意：顺序是不能乱的，例如
`func(1, a='aaa', 2, 3, b='bbb')`会出错误提示：`SyntaxError: non-keyword arg after keyword arg`

# 传入元组以及字典

在回头看我们最初的代码，它定义了一个字典，并把字典加了两个星号传入函数，这是又是什么鬼？

* 测试传入`*元组`

为此我测试了如下代码：
```
tup = (2, 3)
func(1, *tup)
```
结果如下：
```
1
(2, 3)
{'b': 'bbb', 'a': 'aaa'}
End Func
--------
```
等同于 `func(1, 2, 3)`

* 测试传入`**字典`
```
dict = { 'a':'aaa', 'b':'bbb'}
func(1, **dict)
```
结果如下：
```
1
()
{'a': 'aaa', 'b': 'bbb'}
End Func
--------
```
等同于 `func(1, a='aaa', b='bbb')`

由此可知：
`*元组`将元祖内的元素直接拿出来
`**字典`将字典改变为`key1=value1, key2=value2, ...`的形式
有人将此称之为：元组解包，字典解包，倒是挺恰当的

# 混合传入
```
tup = (2, 3)
#注意关键字参数不能重复，所以此处不能用dict = { 'a':'aaa', 'b':'bbb'}
dict = { 'c':'ccc', 'd':'ddd'}  
func(1, 2, 3, *tup, a='aaa', b='bbb', **dict)
```
结果如下：

```
1
(2, 3, 2, 3)
{'c': 'ccc', 'b': 'bbb', 'a': 'aaa', 'd': 'ddd'}
End Func
--------
```

好了，这回总算明白个大概了，不怕蒙头转向了。
需要注意的是，位置啥的是不能乱写的，不然会把编译器搞蒙圈的
所以，虽然我们最初的例子，Python 3.5.3 支持，但是我觉得还是按规矩来比较好呢。

PS:
同之前的文章一样，把这个过程写下来，一则做个备忘，二则给遇到同样问题的朋友一点参考
我是初学者，边学边试边玩，有错漏的地方，烦请各位大神指正。

# 参考链接
https://docs.python.org/3/reference/compound_stmts.html#function-definitions
https://docs.python.org/3/glossary.html#term-parameter
https://docs.python.org/3/glossary.html#term-argument

- - -

This page is synchronized from the post: [不求甚解之Python函数参数 (元组，字典）/ Python function & parameter & argument](https://steemit.com/@oflyhigh/python-cny-python-function-and-parameter-and-argument)
