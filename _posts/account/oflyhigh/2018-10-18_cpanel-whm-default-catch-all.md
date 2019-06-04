
---
title: 'cPanel/WHM使用default/catch-all设置生成无限多邮件地址'
permlink: cpanel-whm-default-catch-all
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-18 03:34:09
categories:
- mail
tags:
- mail
- email
- address
- cpanl
- cn
thumbnail: https://cdn.steemitimages.com/DQmNq53coQbfywAgGgi7HqcsQjNmUViatkMS2NyK9XLWbyJ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


看到最近好多和投票相关的帖子，突然想到如何生成无限多邮件地址的问题。其实cPanel/WHM主机中就有这个功能，简单来讲，***就是对一个域名而言，发到任意前缀的邮件，都会转发到指定的地址***。

![](https://cdn.steemitimages.com/DQmNq53coQbfywAgGgi7HqcsQjNmUViatkMS2NyK9XLWbyJ/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

# WHM全局设置

在WHM如下设置中：
>`Home »Server Configuration »Tweak Settings`

有一项***`Initial default/catch-all forwarder destination`***
>![](https://cdn.steemitimages.com/DQmXTbQXAmEkt32ZQ1zgvJyFZ47EKvh73g6R1Cyfr4uzvGh/image.png)

其中默认账户就是cPanel的主账户，Fail就是返回失败信息，Blackhole就是默默丢弃信息。


虽然通过此处将default/catch-all设置为System account可以实现无限多地址的目的，但是有诸多弊端，弊端之一就是这个是全局设置，所有用户都设置了开启default/catch-all，这会导致大量的垃圾邮件投递到用户主信箱中；其二就是这个没法指定信箱。

# 在cPanel中设置

另外一种方法就是在用户的cPanel中设置。但是为了安全，一般不允许用户进行此项操作，所以这个功能一般是被屏蔽的（用户在cPanel中看不到）

开启这项功能很简单：
* 在Feature Manager的disabled列表中取消对***`Default Address`***的选择。
* 添加新的Feature list，并在其中挑选***`Default Address`***
* 添加一个新的Package(Add a Package)使用新的Feature list
* 将对应账户的Package改成新的Package

再登陆cPanel，我们就可以看到多出来***`Default Address`***设置选项了
>![](https://cdn.steemitimages.com/DQmUvgqc43ughAWmAxeQ2SF3GWxGGGpfYTqmmp9koUgVehr/image.png)

剩下的事情就简单了，按提示操作即可
>![](https://cdn.steemitimages.com/DQmUasioVoqy488oubh1GUhCNceEespbDcQLsLSVMKBhPBR/image.png)

# 高级功能

除了转发到对应地址以外，还可以将邮件转发给指定程序（比如说让程序去自动处理/点击邮件中的链接等等😀）
>![](https://cdn.steemitimages.com/DQme1LmdYkzS2FNETpLSPk5rPxdJpqdyjQ7qtdxwtd7p2hM/image.png)


# 其它

除了cPanel/WHM，其它面板或者程序应该都可以实现类似功能，不过我也不懂，就不多说啦。

另外本文仅探讨对于拥有自己域名以及空间的用户，生成无限多对外邮件地址的可行性，不建议大家用这样的手段去干坏事哦。😀

- - -

This page is synchronized from the post: [cPanel/WHM使用default/catch-all设置生成无限多邮件地址](https://steemit.com/@oflyhigh/cpanel-whm-default-catch-all)
