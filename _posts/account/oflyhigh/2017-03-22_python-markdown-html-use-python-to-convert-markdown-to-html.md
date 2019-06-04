
---
title: '使用Python将Markdown转换成HTML / Use Python to convert Markdown to HTML'
permlink: python-markdown-html-use-python-to-convert-markdown-to-html
catalog: true
toc_nav_num: true
toc: true
date: 2017-03-22 03:18:27
categories:
- markdown
tags:
- markdown
- python
- cn-programming
- cn
- programming
thumbnail: https://pypi.python.org/static/images/python-logo.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://pypi.python.org/static/images/python-logo.png)

最近学习了一下使用Python解析Markdown，并做了一些尝试。
在这里记录一下，以便于以后查找，希望对有类似需求的朋友有些帮助。

据说Python的Markdown解析器有好多。
比如在这篇文章[Markdown Parsers in Python](http://lepture.com/en/2014/markdown-parsers-in-python)中列出了一大堆：
* Misaka: A python binding for Sundown. (CPython required)
* Hoedown: A python binding for Hoedown, successor of Misaka.
* Discount: A python binding for Discount. (CPython required)
* cMarkdown: Markdown for Python, accelerated by C. (CPython required)
* Markdown: A pure markdown parser, the very first implementation.
* Markdown2: Another pure markdown parser.

# Misaka

我搜索了一大圈都说：`Misaka`最好
我试着在我的设备上装了一下：`pip3 install misaka`
结果很不幸：
```
    c/_cffi_backend.c: In function ‘_testfunc10’:
    c/_cffi_backend.c:6466:1: internal compiler error: Segmentation fault
     }
     ^
    Please submit a full bug report,
    with preprocessed source if appropriate.
    See <file:///usr/share/doc/gcc-4.9/README.Bugs> for instructions.
    Preprocessed source stored into /tmp/ccSvKQ7S.out file, please attach this to your bugreport.
```

貌似是我的设备的GCC有些问题
学了半天怎么编译和升级GCC，结果由于网络的缘故，下载下来的包解压的时候校验出错，太麻烦了，先不研究它了。


# Markdown

另外几个名字里带`C`的或者和`Misaka`我也懒得尝试了
试试这个吧

文档在这：
https://pythonhosted.org/Markdown/
看起来是好简单啊

安装过程一切顺利
`pip3 install markdown`

用法也灰常简单
```
import markdown
html = markdown.markdown(your_text_string)
```

拿来试试读steemit的帖子
```
post = xxxxx
html=markdown.markdown(post['body'])
```
晕，为何好多内容都跑到一行里去了，为何没有换行？
还有，我的表格怎么还是Markdown文本？这样可不好！

研究了半天，才发现是自己没用明白
原来这些个Markdown解析器把以下链接定义的内容叫做`Markdown 核心`
http://daringfireball.net/projects/markdown/
其它一些后加的功能，表格之类的叫做`扩展`

Markdown （Python Markdown解析器之一）的可用扩展：
https://pythonhosted.org/Markdown/extensions/index.html

比如我想用表格，那么就要引入`markdown.extensions.tables`
想要自动把换成变成`<br>`，就要引入`markdown.extensions.nl2br`
所以上边的显示帖子内容的，就应该写成：
```
post = xxxxx
html=markdown.markdown(post['body']， extensions=['markdown.extensions.tables', 'markdown.extensions.nl2br' ])
```
好吧，这回显示的像些样子了。


# Markdown2

一般看到 `markdown`和`markdown2`
总会以为后者是前者的升级版本，然而并不是。

但是搜索到不少人说markdown2更快、结构更好
也有人说markdown2结构很烂，速度很慢、作者很能吹嘘
随便试试吧

安装没问题
使用和markdown基本没区别
```
import markdown2
html = markdown2.markdown(your_text_string)
```
显示帖子的代码，也用到了扩展，不过参数名字换了一个
`html = markdown2.markdown(post['body'], extras=['tables', 'break-on-newline' ])`

其它的没啥区别
需要说明的是，markdown2的可用扩展里，不知为何并没有列出换行到`<br>`
https://github.com/trentm/python-markdown2/wiki/Extras
我在代码里翻了半天才翻到这个参数

# 总结

* 使用Python将Markdown转换成HTML，因为有现成的解析器存在，所以非常简单。
* Markdown和Markdown2对我而言都好用、够用，孰优孰劣可能到实际工作中才能发觉吧。
* 能省事就不折腾了，编译和升级GCC以后有时间再说吧。


# 参考链接

* http://daringfireball.net/projects/markdown/
* http://lepture.com/en/2014/markdown-parsers-in-python
* https://pythonhosted.org/Markdown/
* https://github.com/trentm/python-markdown2

- - -

This page is synchronized from the post: [使用Python将Markdown转换成HTML / Use Python to convert Markdown to HTML](https://steemit.com/@oflyhigh/python-markdown-html-use-python-to-convert-markdown-to-html)
