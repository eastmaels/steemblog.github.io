
---
title: 'python 命令行神器：Click (三) / docstring & short_help'
permlink: python-click-docstring-and-shorthelp
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-28 03:23:27
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


之前用了两篇文章的篇幅介绍了命令行神器click，有了click，做一个功能强大，文档完善的命令行工具，简直容易的不要不要的。（为啥感觉像是卖假药的呢？）

原本我打算写完之前两篇就结束的，但是在第二篇快结尾的地方遇到一个问题，就是没法给参数加帮助信息，这样就让我这两篇文章看起来不是那么完美，强迫症患者表示不解决掉，睡不好觉。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](https://bing.com)）

#  argparse 

看了一下steempy，人家就支持给参数添加帮助信息，比如：
`steempy upvote --help`

![](https://steemitimages.com/DQmUuWfdzkt8xNXCHccpXMknThGN8WHtYP3KEWnqFxYX9Lh/image.png)

看了一下它的代码，使用的是[argparse](https://docs.python.org/3/library/argparse.html)，据说也是很强大的命令行解析工具，而且是Python 自带。不过问题是，我刚吹嘘完 click 如何如何牛逼，然后再去换[argparse](https://docs.python.org/3/library/argparse.html)，这有点啪啪打脸的嫌疑嘛。

还好，click 网站上自己也吹的很好，[Why Click?](http://click.pocoo.org/6/why/) 我能说你王婆卖瓜自卖自夸吗？不过如果你看一下这篇文章[Comparing Python Command-Line Parsing Libraries – Argparse, Docopt, and Click](https://realpython.com/blog/python/comparing-python-command-line-parsing-libraries-argparse-docopt-click/) 或许就会了解click还是挺好的(我没看哦，太长了😵)

# 代码内文档字符串

按照click的文档，代码内的文档字符串会自动生成帮助信息，比如下边这段代码：

```
@click.group()
@click.option('--node', default='https://api.steemit.com', help='Steem RPC Node')
def mysteem(node):
        """A simple client tool to demonstrate how to use click!"""
         click.echo('The RPC Node: ' + node)
```
`./mysteem.py --help`
![](https://steemitimages.com/DQmS5qHGpLm5TxwScw8mKJRBtL2dRAY7WHawsa33mqRtGSL/image.png)

这不错，我们在这写很多信息了，比如说加上点广告？（黄金广告位出租）

# help 与 文档字符串

按照上述思路，我们应该也可以在子命令中加入文档字符串，比如说介绍一下参数咋用。

我来加一些文档字符串试试看
```
@click.command(help='Vote Post')
@click.option('--account', default='oflyhigh', help='The voter account name')
@click.option('--weight', default=100.00, help='Actual weight (from 0.1 to 100.0)')
@click.option('--b', type=bool, default=True, help='bool test')
@click.argument('post')
def vote(account, weight, b, post):
        """
        Vote post with the specified weight.

        \b
        Arguments:
        POST: Permlink of post(e.g. @oflyhigh/python-click)
        """
        if b:
                click.echo('Voter: ' + account)
                click.echo('Weight: ' + str(weight))

        click.echo('Post: ', post)
```

`./mysteem.py vote --help`
![](https://steemitimages.com/DQmW4VaaBiBdr8j362orzbyoHjc9rY3Us332oWi95KX5PSB/image.png)
然而并没有如我所期望的那样显示帮助信息！

我想到的一个思路是把帮助文档加到`@click.command(help='Vote Post')`这个help中，但这样一来，我用`./mysteem.py --help`就会显示一大堆无关信息了，这不可取。

# Command Short Help

经过一番调查，总算搞明白了，help和函数内的文档字符串只能有一个起作用。help缺省时，显示函数内文档字符串，否则help会覆盖函数内文档字符串内容。

这可咋办，我即想在程序总帮助那显示命令的简介，又想在命令帮助那显示参数的详细信息。

找了半天，`short_help`应该是我想要的东西，改一下代码：

```
@click.command(short_help='Vote Post')
@click.option('--account', default='oflyhigh', help='The voter account name')
@click.option('--weight', default=100.00, help='Actual weight (from 0.1 to 100.0)')
@click.option('--b', type=bool, default=True, help='bool test')
@click.argument('post')
def vote(account, weight, b, post):
        """
        Vote post with the specified weight.

        \b
        Arguments:
        POST: Permlink of post(e.g. @oflyhigh/python-click)
        """
        if b:
                click.echo('Voter: ' + account)
                click.echo('Weight: ' + str(weight))

        click.echo('Post: ', post)
```

再执行一下两级帮助
`./mysteem.py --help`
![](https://steemitimages.com/DQme3RMxxUby6Q6LcM235iDgFeELYGRftCmwnhQznpC3Lnb/image.png)

`./mysteem.py vote --help`
![](https://steemitimages.com/DQmTVJaA1EChuq96LXxwYBAKj8P3ViC4PxneueTZcAcLTen/image.png)

耶，成功，这样的帮助信息对我而言足矣，这回终于可以放心结帖了。

**（全文终）**

# 参考链接

* [python 命令行神器：Click (二)](https://steemit.com/python/@oflyhigh/4civzn-python-click)
* [python 命令行神器：Click (一)](https://steemit.com/python/@oflyhigh/python-click)
* [Documenting Scripts](http://click.pocoo.org/6/documentation/)
* https://github.com/pallets/click
* http://click.pocoo.org/6/

- - -

This page is synchronized from the post: [python 命令行神器：Click (三) / docstring & short_help](https://steemit.com/@oflyhigh/python-click-docstring-and-shorthelp)
