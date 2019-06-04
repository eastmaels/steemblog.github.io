
---
title: 'Python PrettyTable 模块学习 (格式化打印内容)'
permlink: python-prettytable
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-24 12:52:24
categories:
- python
tags:
- python
- prettytable
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmcXykUFo6aLJ3aC9Ga3sfZsnh7ZsYzXheXSGEfKANdM2g/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmcXykUFo6aLJ3aC9Ga3sfZsnh7ZsYzXheXSGEfKANdM2g/image.png)

今天在处理某些数据时，需要将数据显示出来。

结果我遇到一个问题，数据内容可以看成是一个表格，我在使用for循环逐行显示出来，显示出来的数据是这个样子：
![](https://steemitimages.com/DQmVXZih7VygBqHyvK6Uj3Fxafbgo8pMMmL46nkPqixvzPq/image.png)

好吧，如果我没有上年纪，眼睛又不花，并且有足够的时间和耐心，我觉得这数据还是有一点点意义的。但是如果遇到没有耐心的朋友，看到***这坨***数据，可能就会在心里不由自主地骂一句。

为了不被朋友骂，我将数据显示得漂漂亮亮的。那么如何才能让数据显示的漂亮一点呢？

# 放弃自己造轮子

我首先想到的是自己造轮子。比如说用***`\t`***，来分割数据。但是有时候一列里数据有长有短，那么可能有的需要***`\t`***两次，有的一次就够，那么我是不是要计算一下数据长度呢？短的就跳两次三次，长的则跳一次。然后是不是还有左对齐、右对齐的问题？那么我还是计算，然后通过在前边或者后边补空格实现对齐处理。还有加表头，分隔符等等等，好吧，我承认，我已经晕鸟。

既然自己造轮子，能力有限，造不出来，那么有没有现成的轮子可用呢？我记得无论是steempy还是uptick显示数据可都挺美观的。于是看了一下uptick中的代码，找到这样一句：
`from prettytable import PrettyTable`
原来它使用的是一个叫做PrettyTable的模块。

比如显示配置信息的时候：
![](https://steemitimages.com/DQmb6bsVXH25yuFyU5fcA85MV2kn5ihznzhA5ATJfKPWA3R/image.png)
代码看起来很简单嘛。

咱也试试

# PrettyTable 安装以及使用

#### 安装
使用以下命令安装PrettyTable
`pip install prettytable`

因为uptick已经帮我安装了这个，所以提示：
>Requirement already satisfied: prettytable in ./venv/lib/python3.6/site-packages

#### 使用

使用也很简单，我从[这里](https://stackoverflow.com/questions/18911984/align-column-names-with-data-in-a-csv-file-using-python)找了个例子：
```
from prettytable import PrettyTable

# Initialize the object passing the table headers
t = PrettyTable(['A', 'B', 'C'])

t.align='l'
t.border=False

t.add_row([111,222,333])
t.add_row([444,555,666])
t.add_row(['longer text',777,'even longer text here'])
print str(t)
```
以上代码很好理解，先是导入模块设置表头，然后设置样式，然后逐行添加数据，然后显示。

Python3上需要把`print str(t)`改成`print(str(t))`
以上代码执行效果如下：
![](https://steemitimages.com/DQmc9NYEuVZaoWrMXyPbvZ2kKsnCWeDb3sGk9Abh7QtWDhm/image.png)

# 应用到自己程序里

学会了PrettyTable的使用以后，我就把它应用到我的代码里去。我的一坨内容终于变得漂漂亮亮了，你猜猜这是啥？

![](https://steemitimages.com/DQmegxAczJQLNPDQkTijm4so8FSdk1RzqaoLP3rS5XNxKoa/image.png)

或许你看到我将PrettyTable应用到我的程序里很简单，实际上则是一波三折啊。

#### str转换

我的一坨代码之前都可以用print显示。但是将数据用`t.add_row()`的方式加进来以后，却提示出错。原因是print(var)会自动将其转换，而`t.add_row([var1, var2])`则不进行转换。

为了解决这个问题，需要进行类似`t.add_row([str(var1), str(var2)])`的处理。

#### 格式设置

PrettyTable默认格式应该是居中，但是 Collateral和 Debt条目居中显示非常难以阅读。
![](https://steemitimages.com/DQmPeCXLyoD7eaRqP8ySXBZJKEd3uqqUDpjm2RSnuUDS44b/image.png)

于是我通过
***`t.align["Collateral"] = "r"`***
***`t.align["Debt"] = "r"`***
设置这两列为右对齐
然而无论我怎么试，它也不生效。我去搜索PrettyTable格式设置不生效，不起作用等等，搜了半天也没找到解决方案。

最后，当我打算放弃时，我发现原来是我一直在A.py上修改，然后运行的是B.py 😳

# 总结

* 不要尝试自己制造轮子
* PrettyTable 模块格式化打印内容非常简单简单好用
* 遇到灵异事件时不要轻易放弃😳

# 参考链接
* https://stackoverflow.com/questions/18911984/align-column-names-with-data-in-a-csv-file-using-python
* https://pypi.python.org/pypi/PrettyTable
* http://blog.csdn.net/codeway3d/article/details/52798804

封面图源：https://pixabay.com

- - -

This page is synchronized from the post: [Python PrettyTable 模块学习 (格式化打印内容)](https://steemit.com/@oflyhigh/python-prettytable)
