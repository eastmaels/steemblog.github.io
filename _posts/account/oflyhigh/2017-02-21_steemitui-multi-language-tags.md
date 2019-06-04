
---
title: '聊聊中文标签 /steemitui multi-language tags'
permlink: steemitui-multi-language-tags
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-21 01:54:18
categories:
- cn-programming
tags:
- cn-programming
- cn
- steemitui
- multi-language
- tags
thumbnail: https://steemitimages.com/DQmXeyLVQdXPHHKsPphEGBf78Hm9BbFRJeYERsUx89qCotA/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


来steemit 这么久，我看到steemit做了很多改进，一点点向大家所期待的完美的方向前进，当然了，可能路途崎岖、任重道远：）

尽管改进了这么多，有几个我所期望的功能却一直没有加上。其一是书签功能，似乎大家讨论了很多了，这里不重复了。
另外，两个功能一个是`中文标签`一个是`标签云`，本文聊一下中文标签

# 知链的`中文标签`

知链似乎宣称实现了中文标签
我试了一下，他的中文标签，应该是做了个常用标签的词典，然后遇到对应的英语， 在前台自动查表翻译成中文。这个功能能避免不懂英文的读者的阅读障碍，值得赞赏。但是我还是期望原生的中文标签，写在链里，这样能真实表达作者的意愿。

# steemit上测试

但是直接在steemit 网站提交文章，确不支持写入中文标签
![](https://steemitimages.com/DQmXeyLVQdXPHHKsPphEGBf78Hm9BbFRJeYERsUx89qCotA/image.png)

我通过程序发了个测试贴，可以看到写入中文标签是没问题的

[测试中文标签](https://steemit.com/cn-programming/@oflyhigh/chinese-tags)

但是却无法点入：
https://steemit.com/created/%E6%B5%8B%E8%AF%95
出404错误
![](https://steemitimages.com/DQmYfTqRENZwSymRR8ezSRmUnMCTV4Nv8mw75Cj1KoJZbKC/image.png)

# steemdb 和busy 

都可以正常阅读帖子和便签，但是无法进入到标签所在类目

![](https://steemitimages.com/DQmUni8eBrRpypGArwZrjaCisxftvi4oXaQp5YF25pv36o1/image.png)

![](https://steemitimages.com/DQmbiA6oQ6D9ikXwpoiTJXhXQmk22Xy9jxmHMdbn3wt6Mar/image.png)

# 总结

中文标签可以正常的写入到链中并读取（和title其实没啥区别）
网站UI上可以显示，但是无法进入标签对应的类目（我猜测涉及URL编码、解码之类的）
所以支持中文标签，应该不是啥难题，如果加上对应功能，对中文用户（包括其它语种用户）将会是极大的便利。

- - -

This page is synchronized from the post: [聊聊中文标签 /steemitui multi-language tags](https://steemit.com/@oflyhigh/steemitui-multi-language-tags)
