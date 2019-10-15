
---
title: 'Markdown语法规范(修订)'
permlink: rzj3n-markdown
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-15 10:44:24
categories:
- cn
tags:
- cn
- network-institute
- markdown
- html
thumbnail: 'https://cdn.steemitimages.com/DQmUS1HNBQzjUm1JHcTEJLBur2xcHaEv8pU7soVNTr8mz9t/markdown.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![markdown.jpg](https://cdn.steemitimages.com/DQmUS1HNBQzjUm1JHcTEJLBur2xcHaEv8pU7soVNTr8mz9t/markdown.jpg)


# <center>Markdown</center>

## 目录
  * [一、基础语法](#一、基础语法)
     1. [标题设置](#1.标题设置)
     2. [首行缩进](#2.首行缩进)
     3. [引用文字](#3.引用文字)
     4. [斜体和粗体文字](#4.斜体和粗体文字)
     5. [分割线](#5.分割线)
     6. [删除线](#6.删除线)
     7. [无序列表](#7.无序列表)
     8. [有序列表](#8.有序列表)
     9. [链接（Links](#9.链接（Links)
     10. [图片（Images）](#10.图片（Images）)
     11. [视频（videos）](#11.视频（videos）)
     12. [表格](#12.表格)
     13. [页内锚点](#13.页内锚点)
     14. [使用目录](#14.使用目录)
  * [二、高级点的语法](#二、高级点的语法)
     1. [代码区块（HTML中所谓的Code）](#1.代码区块（HTML中所谓的Code）)
     2. [反斜杠](#2.反斜杠)
     3. [目录](#14.目录)
  * [三、好用的HTML标签](#三、好用的HTML标签)
     1. [文字居中](#1.文字居中)
     2. [分栏排版](#2.分栏排版)
     3. [图文混排](#3.图文混排)
     4. [其它支持的标签](#4.其它支持的标签)

****

## 简介
Markdown 轻量化的标记语言，一种适用于网络的书写语言。Markdown 是一个面向写作的语法引擎，Markdown 的最终目的都是解析成 HTML 用于网页浏览，所以它兼容 HTML 语法，即你可以在 Markdown 文档中使用原生的 HTML 标签。

**本文分三部分：基础语法，高级点的语法和好用的HTML标签。**

## 一、基础语法

### 1.标题设置

在文字开头加上 “#”，后接一个空格。通过“#”数量表示几级标题。（一共只有1~6级标题，1级标题字体最大），如下：
注意：后要加空格
```
# 一级标题
## 二级标题
### 三级标题
```

### 2.首行缩进

中文在排版时首行都有缩进两格，或是编辑时要有多个空格。

实现方法：
1. 编辑器中要在全角状态下才能输入空格！在中文输入法时用shift+空格键切换成全角，再输入两个空格。
2. 使用HTML空格标签：` &nbsp; ` ，直接在行首加入` &nbsp;`，需要几个加几个。

### 3.引用文字

在句首加上">"即可。格式如下：> 引用文字，结束时换行。如下：

`>这是毛主席说的，枪杆子里出政权。`


### 4.斜体和粗体文字
将需要设置为斜体的文字两端加*或是_ ；粗体的文字两端加**或__，(注意：文字两端不能有空格)，如下：
```
*这是一段斜体文字*
**这是一段粗体文字**
_这是一段斜体文字_
__这是一段粗体文字__
```

### 5.分割线
` **** `


### 6.删除线
` ~~删除线~~ `

### 7.无序列表

在文字开头添加(*, +, 或 -)实现无序列表。注意在(*, +, 或 -)和文字之间需要添加空格。如下：
```
* 花生
* 柿子
```

### 8.有序列表

使用数字后面跟上点号`.`（还要有空格）如下：
```
1. 第一条
2. 第二条
```

### 9.链接（Links）

Markdown中有两种方式实现链接，行内式链接和参考式链接
1. 行内式链接：`[文章名](文章url)`。例如：
`[新人生存指南之一：steem介绍](https://steemit.com/steemit/@lemooljiang/3f5j36-steem) `

2. 参考式链接，例如：
```
关于markdown的语法有可以参考这三篇文章，oflyhigh的[《使用Markdown来让你的文章更易于阅读、更美观》][1] 和lemoojiang的[《图文编辑三板斧》][2] ，还有 carinewhy的[《新手教學-在steemit内改變圖片大小和圖片排位的方法》][3]。
...
[1]: https://steemit.com/cn/@oflyhigh/markdown
[2]: https://steemit.com/cn/@lemooljiang/4mddsq 
[3]: https://steemit.com/cn-tutorial/@carinewhy/625apt-steemit
```

### 10.图片（Images）

图片的处理方式和链接的处理方式，非常地类似(前面加!)，有行内式链接和参考式链接。

1. 行内式链接：`![图片名称](图片url)`，例如：
`![sea](https://steemitimages.com/DQmS5CXgThWGHKzmzU5ombr87dWXzvPXpVsTBowkNKjtWuU/sea.jpg)`


2. 参考式链接：
```
![名称1][id1] 
![名称2][id2]
...
[id1]:图片url
[id2]:图片url
```

### 11.视频（videos）
利用视频服务器的插入代码，例如：

`<iframe width="560" height="315" src="https://www.youtube.com/embed/1eTj_TGJMvw" frameborder="0" allowfullscreen></iframe>`


### 12.表格
下面的例子是设计三列的表格，要几列，就用几个“|”分隔。
```
序号|内容|作者        
------------|------------|------------ 
1|天龙八部|金庸
2|绝代双娇|古龙   
```
效果如下：

序号|内容|作者        
------------|------------|------------ 
1|天龙八部|金庸
2|绝代双娇|古龙 


### 13.页内锚点
```
<a href="#2">钱包介绍</a>
......
<a id="2">2、钱包介绍</a> 
```

### 14.使用目录
```
1、手动添加
## 目录
  * [一、基础语法](#一、基础语法)
     1. [标题设置](#1.标题设置)
     2. [serializer](dates/serializer.md))
  * [二、高级点的语法](#二、高级点的语法)
     1. [反斜杠](##2.反斜杠)
     2. [目录](###14.目录)

2、使用Markdown TOC自动生成
 2.1 在VScode拓展中安装 Markdown TOC
 2.2 在需要生成目录的地方鼠标右键选择刚才安装的扩展功能，Markdown TOC:Insert/Update。
 2.3 如果TOC标签的目录格式异常，可略做调整。settings -> 搜索设置里面搜索Eol -> 将auto更改为 \n 换行符即可。
 2.4 缺点：会错误地获取带 # 的文字 ，还有无法获取长文件的目录。
```

## 二、高级点的语法

### 1.代码区块（HTML中所谓的Code）
```
a. 单行
使用 ` 括起来。（左上角的ESC下面~中的`）
b. 多行
使用三个连续的 ` 括起来 ,如下：
``` 这是代码块 ```
```

### 2.反斜杠

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果，如下：

`\*这是需要强调的部分\*`


## 三、好用的HTML标签

### 1.文字居中

用HTML的一对标签来实现，就是`<center>`。格式如下：

`<center><h2>这是标题（文字）</h2> </center>`


### 2.分栏排版
段落分成两列或是三列排版，可以用`<div>`或`<table>`标签来实现。
两栏的版式：

第一种：
`<div class="pull-left">这是文字部分1</div>这是文字部分2`
注：steemit上支持这种写法的。

或者使用 style 来控制：
`<div style="width:50%; float:left; margin-right:12px">这是文字部分1</div>这是文字部分2`


第二种：
```
<table>
  <tr>
    <td>这是文字部分1</td>
    <td>这是文字部分2</td>
  </tr>
</table> 
```

三栏的版式
```
<table>
  <tr>
    <td>这是文字部分1</td>
    <td>这是文字部分2</td>
    <td>这是文字部分3</td>
  </tr>
</table>
```
注：以上样式中都可以加上 style 属性来加强控制，但各个网站对 style 属性的支持度是不一样的(steemit,github都不支持)，请自行调试后使用。


### 3.图文混排

第一种：使用div
`<div class="pull-left"><img src="https://cn.bing.com/tt.jpg"</div>这是文字部分`
注：steemit上支持这种写法。

第二种：给 img 加上style属性：
`<img src="https://cn.bing.com/tt.jpg" style="width:200px; float:left; margin-right:12px">这是文字部分`


### 4.其它支持的标签
```
（1）<h1>这是标题</h1>
（2）<br/> 换行
（3）<hr/>水平线
（4）<b>这是粗体</b>
（5）<del>删除的文本</del>
（6）<code>代码块<div></code>
（7）<strong>加强的文本</strong>
（8）<em>这是强调</em>
（9）<i>这是斜体</i>
（10）<blockquote>引用的文本</blockquote>
（11）<sub>这是下标文本（小号字）</sub>
（12）<a href="www.baidu.com">百度</a>
```


@lemooljiang  2019.10.15

- - -

This page is synchronized from the post: ['Markdown语法规范(修订)'](https://steemit.com/@lemooljiang/rzj3n-markdown)
