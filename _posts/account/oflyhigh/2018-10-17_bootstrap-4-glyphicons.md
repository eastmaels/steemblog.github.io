
---
title: '每天进步一点点：在Bootstrap 4中使用Glyphicons'
permlink: bootstrap-4-glyphicons
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-17 12:45:45
categories:
- cn
tags:
- cn
- bootstrap
- glyphicon
- icon
- html
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


首先声明我是小白，白得不能再白的那种，本文就是小白学习笔记，不保证一定有效或者是最佳选择。如果专家们发现有问题，请及时指出，深表谢意。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


在[steemd.com](https://steemd.com)的[witnesses页面](https://steemd.com/witnesses)里边用到了一个链接图标，小图标红色的、灰色的以及断掉的，看起来很是精致漂亮。

然后我就想能不能在[我的页面](https://www.eztk.net/tools/my_witnesses.php)里也放上这个图标啊，研究下来发现原来它用的一种叫做字体图标(Glyphicons)的东西，比如链接图标代码：

![](https://cdn.steemitimages.com/DQmTpk1TVPvouQWChRNVZaNrHTnSDMkCbhudBSjFMFFp5vC/image.png)
>`<a href=""><span class="glyphicon glyphicon-link" style="" title=""></span></a>`

![](https://cdn.steemitimages.com/DQmPhoC8hrcoAxqbKs4HVeSukLdZzFA4W41jtDhBjaMUJBD/image.png)(断掉的链接)
>`<span class="glyphicon glyphicon-link" style="color: red" title="-"></span>`

看起来很简单呢，于是把对应代码放到我的文件里，等等，怎么啥也不出来？？

研究了半天才搞明白，bootstrap4已经不默认提供图标了(Glyphicons 需要商业许可)。这可愁煞我也，难道我要再用回bootstrap3？想了半天还是在想办法在bootstrap4上用其它方案更方便一些吧。

而找到的最好的方法就是使用Font Awesome替代Glyphicons，最简单的方法是在HTML的HEAD部分加入如下代码：
>`<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">`

然后把上述图标代码的做如下替换就可以搞定啦：
* glyphicon 替换成fa
* glyphicon-xxx 替换成fa-xxx

上边两段代码修改后的内容以及测试效果如下：
>`<a href=""><span class="fa fa-link" style="" title=""></span></a>`
`<span class="fa fa-link" style="color: red" title="-"></span>`
![](https://cdn.steemitimages.com/DQmPuwhjgpgPKSVXxsTcTvFmmL92roY1L2Ke65yAM4Az71T/image.png)



# 参考链接

* [The best alternatives to Glyphicons and how to integrate them](https://bootbites.com/articles/bootstrap-4-glyphicons-migration/)
* [Bootstrap 4 - Glyphicons migration?](https://stackoverflow.com/questions/32612690/bootstrap-4-glyphicons-migration)

- - -

This page is synchronized from the post: [每天进步一点点：在Bootstrap 4中使用Glyphicons](https://steemit.com/@oflyhigh/bootstrap-4-glyphicons)
