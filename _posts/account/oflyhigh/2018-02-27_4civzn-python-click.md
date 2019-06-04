
---
title: 'python 命令行神器：Click (二)'
permlink: 4civzn-python-click
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-27 12:53:27
categories:
- python
tags:
- python
- click
- programming
- cn-programming
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


咳，做人做事要有始有终，继续完成今天的click 学习。（偷摸回顾了一下，我挖下的坑似乎很多了😭）
![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](https://bing.com)）

在[之前的帖子](https://steemit.com/python/@oflyhigh/python-click)中，我们学习了`click`的安装，以及实现命令组，以及通过`@click.option`修饰命令组实现全局的选项，还有在`@click.command()`中添加类似`help="Vote Post"`的内容来为命令添加帮助。

# Options 选项 (命令)

我们之前用`@click.option`修饰命令组，其实用来修饰命令是一样一样滴

```
@click.command(help='Vote Post')
@click.option('--account', default='oflyhigh', help='The voter account name')
@click.option('--weight', default=100.00, help='Actual weight (from 0.1 to 100.0)')
def vote(account, weight):
        click.echo('Voter: ' + account)
        click.echo('Weight: ' + str(weight))
```

上述代码给投票指令加了两个选项，一个是投票人，一个是投票权重。

一个很有趣也很有用的特性就是自动生成子命令的帮助信息
`./mysteem.py vote --help`
![](https://steemitimages.com/DQmZyuScCgrTPKa2CoKes88sN9e2p6b2ESziq1bBzNzp9G4/image.png)
(`@click.option`可以根据默认值自动判断选项的类型）

我们执行一下子命令
`./mysteem.py vote`
可以看到默认值都已经生效了
![](https://steemitimages.com/DQmaaVdwdMRRC6cjC8WMyTsJ3bvZMwTVVbeQPFdwXXLzTkb/image.png)

`@click.option`支持指定选项的类型，详情可以参考[Parameter Types](http://click.pocoo.org/6/parameters/#parameter-types)
比如我们可以加一个逻辑类型的选项：
`@click.option('--b', type=bool, default=True, help='bool test')`
具体信息就不赘述了。

# Arguments 参数

在click中，Parameters分为两种，
* 一种是Options(选项)
* 一种是Arguments(参数)。

原谅我的英语，Parameters和Arguments如何翻译成汉语，才能让它们区别开来？

Option更灵活，支持好多强大的功能，可选的。
Argument更严格，必选的。

上边我们在vote命令中实现了`--account`以及`--weight`选项，如果不填，就用默认值。
但是投票总涉及到给哪个帖子投啊，所以我们需要再给它加个参数
比如说：

`@click.argument('post')`

让我们检查一下帮助
`./mysteem.py vote --help`
![](https://steemitimages.com/DQmYeWhQFznSYXcJX4pbm6LD6c693pyqCzr3oWacCADA49D/image.png)
似乎有些美中不足，比如这个post到底是啥玩意？
是`https://steemit.com/python/@oflyhigh/python-click` 还是`@oflyhigh/python-click` ？

如果能给post加个帮助就好了，比如说：
`@click.argument('post'， help='Permlink of post(e.g.  @oflyhigh/python-click))`
然而我被click打脸了，运行出错：
>TypeError: __init__() got an unexpected keyword argument 'help'

看了一下文档
http://click.pocoo.org/6/documentation/
>Arguments cannot be documented this way. This is to follow the general convention of Unix tools of using arguments for only the most necessary things and to document them in the introduction text by referring to them by name.

好吧，你咋说都有理，那难道就没有办法加帮助了吗？

这块我还没测试明白，回头我研究明白再补上吧。😭

# 总结

有了click，做一个功能强大，文档完善的命令行工具，简直容易的不要不要的。

click还有很多强大的功能，但是我一时半会也发掘不了多少，想必日后使用时，会给我越来越的惊喜吧。

# 参考链接

* [python 命令行神器：Click (一)](https://steemit.com/python/@oflyhigh/python-click)
* https://github.com/pallets/click
* http://click.pocoo.org/6/

- - -

This page is synchronized from the post: [python 命令行神器：Click (二)](https://steemit.com/@oflyhigh/4civzn-python-click)
