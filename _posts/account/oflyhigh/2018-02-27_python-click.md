
---
title: 'python 命令行神器：Click (一)'
permlink: python-click
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-27 04:25:36
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


说到Python 命令行参数，我只会用 `sys.argv`，简单粗暴，适合我这种半吊子程序员写写垃圾程序，至于对别人是否友好，哪管得了那么多，反正又没脸开源。据说`getopt模块`也挺好用，但是作为我这种深得**差不多先生**思想精髓的人，既然差不多，我何必非得去用呢，程序不出错就是真理！

但是读 @xeroc 大神写的代码，我发现了一个好东西，那就是**`click`**，用来做命令行程序，简直堪比神器啊，太优雅了！好东西不敢独享，分享给大家。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](https://bing.com)）

# 安装

click 不是Python 自带的库，所以使用之前要先安装啦

安装指令如下：
`pip install click`

官网强烈推荐安装在virtualenv 环境下，我也推荐。
有关如何使用virtualenv，可以参考[官网相关链接](http://click.pocoo.org/5/quickstart/#virtualenv)，这里就不再赘述啦。

# 说明

安装之后，我们来学学咋玩。

为了便于说明，我假装实现steem工具，支持投票以及转账。然后我慢慢加些选项和参数之类的。当然了，这是假装的，只是为了演示click的使用。


# 命令组

因为要实现好多功能，那么单纯的用一个指令带一堆选项或者参数的方式可能不够用，所以这里引用了命令组。


```
#!/usr/bin/env python

import click

@click.group()
def mysteem():
        pass

@click.command()
def vote():
        pass

@click.command()
def transfer():
        pass

mysteem.add_command(vote)
mysteem.add_command(transfer)

if __name__ == '__main__':
        mysteem()
```

用`@click.group()`修饰的函数为命令组的入口，`@click.command()`修饰命令，用`mysteem.add_command(add)`类似这样的方式，将命令加入到命令组中。

现在一个命令行程序的框架搭起来啦，接下来我给大家演示一个神奇的功能
`./mysteem.py --help`
![](https://steemitimages.com/DQmfBAZMFJ8Uj3iQTbKEDLdD5XEWN1c8wX9SQUmSno7L6qU/image.png)

**妈妈再也不用担心我写的程序没帮助啦！，程序自动生成了非常优雅的帮助。**

# Options 选项 (命令组)

下边我假装给这个STEEM工具加些选项啦。比如我们指定一下RPC Node


```
@click.group()
@click.option('--node', default='https://api.steemit.com', help='Steem RPC Node')
def mysteem(node):
        click.echo("The RPC Node: " + node)
```

在这里我们用`@click.option`修饰命令组，这样我们可以在执行各项命令之前指定选项啦。

![](https://steemitimages.com/DQmQ2T39Cq6f1zD2vHWY99qhaH4ywD5WHWxrpXNPfBFi7vc/image.png)
帮助依旧是自动生成的，太帅了

我们假装执行一下，先用默认值
`./mysteem.py vote`

输出如下：
>The RPC Node: https://api.steemit.com

再手动指定一下：
`./mysteem.py --node https://mynode.com vote`

输出如下：
>The RPC Node: https://mynode.com

除了修饰命令组，@click.option 还可以修饰命令
呸呸，举毛线数据库的例子，我编个啥选项好呢？愁死我了！
这样，自动加序号吧，就叫`autoseq`吧，大家别纠结数据库是否合理，我只是为了演示命令行，举了个不恰当的例子😭

# 命令帮助

现在我们似乎搭好了程序的框架，但是感觉少了点什么呢？

仔细找了一下，发现使用`./mysteem.py --help` 生成的帮助有点单薄
![](https://steemitimages.com/DQmQ2T39Cq6f1zD2vHWY99qhaH4ywD5WHWxrpXNPfBFi7vc/image.png)
其中命令列表后竟然没有帮助，是可忍孰不可忍，婶也不能忍！

```
@click.command(help="Vote Post")
def vote():
        pass

@click.command(help="Transfer Money")
def transfer():
        pass
```
给命令加上帮助

`./mysteem.py --help`
![](https://steemitimages.com/DQmTogqRgsKXxYWqxSeQqVv6AKhUtCwNrwrjXhCLvfjcxnU/image.png)
这回舒服多了！

# 总结

这篇文章，我们模仿 steempy，做了个命令行程序的框架。实际上一点功能也没有，但是用来理解click的使用，还是略有帮助的。

当然了，限于篇幅，本文只讲了一部分，回头继续更新，敬请期待！

# 参考链接
* https://github.com/pallets/click
* http://click.pocoo.org/6/

- - -

This page is synchronized from the post: [python 命令行神器：Click (一)](https://steemit.com/@oflyhigh/python-click)
