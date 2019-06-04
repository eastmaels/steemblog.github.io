
---
title: 'O哥闲扯淡：标签(tags)SPAM并不可取'
permlink: o-tags-spam
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-09 12:36:12
categories:
- cn
tags:
- cn
- tags
- categories
- steemit
thumbnail: https://steemitimages.com/DQmYYskEruGcMvUvEGNLtqBEmknhhV4JZkpGVww7KohrFmQ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天一个朋友问我，“O哥O哥，我看别人发的帖子用了好多好多好多标签，为什么我的帖子只能放五个？如果我能多放一些标签，比如说把热门标签都放进去，那么我的帖子曝光率是不是大大的增加了？收益是不是哗哗增长？财富自由是不是指日可待？”

哦，这不就是标签SPAM嘛，那今天咱们就来扯扯这个，正好好久没找到话题扯了，闹心。

![](https://steemitimages.com/DQmYYskEruGcMvUvEGNLtqBEmknhhV4JZkpGVww7KohrFmQ/image.png)
(图源 ：[pixabay](https://pixabay.com))

**安全提示：O哥闲扯淡系列本就是闲扯淡，诸位千万别当真！**

# 标签(tags)SPAM

在扯这个话题之前，我们先来定义一下什么叫做标签SPAM。Tag是STEEM上用来给文章分类的重要手段之一（还有啥手段？）。将相同话题或者相同类目的文章放到一个标签下，便于感兴趣的人按类别阅读。

比如你喜欢看美食贴，那么就可以去`food`这类标签下浏览，喜欢大自然的可以去`nature`类目下查看，喜欢艺术的可以去`art`类目下查看，和steem相关的开发类文章，可以去`steemdev`那边瞧瞧，这样对于读者而言就不用去浩如烟海的文章堆中找自己感兴趣的文章了。

但是一些作者为了增加文章的曝光率（以及收益），就会在文章中加一些热门标签，比如我拍俩照片发个帖子加上`steemit`以及`steemdev`等毫不相关的标签。**这种为了曝光率以及收益而给文章打上毫不相关标签的行为，我称之为标签SPAM。**

# 如何进行标签SPAM

有句话叫做没有调查就没有发言权，如果我连标签SPAM是啥，如何实现标签SPAM都不知道，那么我在这侃侃而谈就成为了彻底的笑料。所以在进行分析之前，我先实践一下标签SPAM。

使用STEEMIT发帖的同学都知道，STEEMIT最多只能用5个标签，那么SPAM的余地就小了很多，毕竟一篇文章加五个相关的标签是很容易的，没必要再去其它标签下SPAM了。
![](https://steemitimages.com/DQmZDrEHWDCke1THY422Qb79AhFWdXNZfvHpMiBnas33zyH/image.png)

但是别人是如何实现标签SPAM呢？比如我刚刚看到某热门作者的刚发的帖子的标签
![](https://steemitimages.com/DQmcXEBQ2rSS25N3xSg7XEuJc4VwpBMTZeGpuY8HtzxwpE2/image.png)
为了避免曝光此作者，我只截取了一半标签，没错，实际更多！

其实实现标签SPAM的根本原因在于发文时，STEEM区块链不对标签数量进行检查，所有的检查全是客户端做的（比如STEEMIT.COM)，所以如果第三方APP(dlive等)不做标签数量检查，那么就可以发N个标签。

让我来用steem-python实践一下。
使用steem-python发表个帖子，其中标签内容我设置为：
`tags = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10']`
然后我得到如下提示：
>ValueError: Can only specify up to 5 tags per post.

然后去steem-python代码那找到对应的检查代码，删除掉，然后再次尝试发帖，耶成功了，帖子标签是这样：
![](https://steemitimages.com/DQmQVURu85SXP4w1CZo2w3TKwbTbxXRFWLqHi4FFK8y6iJQ/image.png)
SPAM成功。

# 标签SPAM不起作用

既然我们已经成功的给帖子加上了10个标签，那么是不是意味着我们的帖子会在十个类目下显示？被N多读者点赞？别做梦了，其实多个标签根本不起作用，起作用的只有五个！

起作用的大致是这段代码(我也叫不准😀)
![](https://steemitimages.com/DQmNxo84Zi8Ry9UbG7GAebRPkQ4M5YTEGKszraCpNyedGmg/image.png)
也就是说系统中只处理了5个tags，其余的尽管在那，但是白加！

我访问 https://steemit.com/created/a1 
一直到 https://steemit.com/created/a10
来查看我的测试贴是否出现在对应标签下，结果发现帖子在a1-a4以及a10下出现，没有在a6-a9标签下出现（为啥不是a1-a5呢？奇怪）

结论就是，**你加了N多标签但是实际上只有5个起作用！**
(或许第三方实现可以用数据库等方式获取帖子，那么多余的标签根据实现的不同还是有可能被访问到的）

# 标签SPAM没人点赞

通过分析代码（我瞎找的不知道对不对）和实际测试（我就是随便试试）发现起作用的最多只有五个标签，和STEEMIT上的限制一致。

那么假设我们加上N个标签，并且N个标签都起作用，曝光率大大增加，那么会不会得到很多赞，赚到很多钱呢？别做梦啦，写的非常好的帖子加上了相关标签，都不见得有人点呢！给你点贴的都是你的真爱粉，无论你加不加乱七八糟的标签，都会看到你的帖子，都会给你点的。

**那么标签SPAM没有一点用吗？当然不是，也许哪个大神看着烦，就会帮你踩一脚的。**前一阶段，STEEMIT的首席程序员（哈哈，我不知道该叫啥头衔），就使劲踩steemit标签下的无关帖子。所以，想投机取巧的，悠着点哦~~

# 总结

* 标签SPAM不起作用的
* 标签SPAM不但不会骗到赞还可能被踩
* 老老实实按规则玩吧

- - -

This page is synchronized from the post: [O哥闲扯淡：标签(tags)SPAM并不可取](https://steemit.com/@oflyhigh/o-tags-spam)
