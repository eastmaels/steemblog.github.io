
---
title: '论PHP是世界上最好的语言 PHP is the best programming language in the world!'
permlink: php-php-is-the-best-programming-language-in-the-world
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-22 11:21:24
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- php
thumbnail: https://steemitimages.com/DQmcm4Jqp99HiWVU2URNBss6rT5mADWXXCNq3TAJXzfWBp3/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmcm4Jqp99HiWVU2URNBss6rT5mADWXXCNq3TAJXzfWBp3/image.png)
*Image Credit: Pixabay.com*

# ABSTRACT:   PHP is the best programming language in the world!

[PHP](https://justyy.com/archives/4917)为啥是世界上最好的语言？你也许听过这个梗：

> 女孩：“你能让这个论坛的人都吵起来，我今晚就跟你走。”程序员：“PHP是最好的语言! ”论坛炸锅了，各种吵架...女孩：“服了你了，我们走吧你想干啥都行。”程序员：“今天不行，我一定要说服他们，[PHP](https://justyy.com/archives/3679)必须是最好的语言。”

今天 我就来说说 [PHP](https://justyy.com/archives/3650) 为什么 **真是** 世界上最好的语言。

# 函数特别多
比如你想读取一个文件，只需要这么一句话：

```
$data = file_get_contents("文件 或者 是URL");
```

真是没有比它更简单明了的了。 PHP强大的地方在于 它的函数特别特别的多，你只需要拿来用就可以了，并不需要重新造轮子。

7年前 PHP 的函数就有 将近6000个，更不用提最新的PHP 7了。

> 三个程序员坐在格子间里编程。一个程序员一言不发，他用的是python.一个程序员写一会儿就按一下编译，然后就玩会儿手机。他用的是C++。一个程序员坐在那里浏览网页，不时飞快的键入一些字符。经理看到，怒道：你怎么不干活，尽在上网。回答：我在查实现这个功能需要用什么函数。他用的是PHP。

# 门槛低
PHP 入门门槛低， C类型的语法容易理解，并不需要特别配置就可以很轻松的运行WEB程序。比如你安装完 apache2 再安装一个PHP，然后在WEB目录下创建一个PHP：

```
<?php
   echo "PHP 是世界上最好的语言";
```

就可以在浏览器里运行服务端PHP代码了，真是太方便了。

# 框架多
各种现成的框架把 逻辑层和表现层分开，你只要拿来用就可以了。比如：Laravel

# PHP 主宰 WEB
PHP在 TIOBE 每月编程语言排名 长期排名前10，这很大程序得易于 wordpress 是PHP写的，并且互联网上大多数网站都用到了PHP。

![](https://steemitimages.com/DQmdWT3zM5DFJiM1vjyiwXfHxoue8bwD6AC6nUgPqWfvn8W/image.png)
*// source: https://w3techs.com/technologies/details/pl-php/all/all*

PHP是贫民出生，有着广泛的群众基础，现在已然是一门顶级WEB编程语言。

# 运行速度快
PHP5之前 也许我们会说 PHP的代码效率太差运行慢，但是[PHP7](https://justyy.com/archives/3637)之后，代码执行效率已经很快了。不过相比 C++还是慢，但是处理 WEB，跑跑 wordpress 已经足够了。

# PHP访问数据库
PHP和 [MySQL](https://justyy.com/archives/3009) 简直是天造的一对，访问数据库的方式太简单了，连接数据库只要：

```
<?php
$conn = mysqli_connect("localhost","my_user","my_password","my_db");
```

还有人调侃 离开 [MYSQL](https://justyy.com/archives/5043)的PHP就没用啦。
![](https://steemitimages.com/DQmTpJN84mG8Sbey6WQ25GM6TvmMzmK5QSzgh2jL2r5CSPC/image.png)
*Source: https://helloacm.com/a-quick-performance-comparison-on-languages-at-codeforces/*

但是实际上我用 [sublime text](https://steakovercooked.com/ch/Life.Record/text/article/2016/11/sublime-text-3-registration-license-key.txt)  配置 php, 时常也用PHP来写些小程序 比如参加 @kenchung  的数学编程比赛，为啥？因为配置方便，函数多，写起代码来快，运行速度快：很快速的能验证一些想法。

# PHP是严谨的
比如在类方法里面访问 类成员需要 加上 $this

```
public class JustYY {
   private $rep = 67;
   
   public function getReputation() {
      return $this->rep;
  }
}
```

而在 [C#](https://justyy.com/archives/2396)，[C++](https://justyy.com/archives/5345) 或JAVA里，你都是不用写这个 $this 的了，所以有时候很容易搞错：特别是你方法里有一个同名的变量。

# PHP的缺点
当然 PHP也有缺点，比如 不支持多线程，可是我们并不需要啊。现在 web 服务器可以配置成多个 server, 完全可以做到多个　PHP　进程（不是线程）来同时跑多个程序。

PHP入门低，所以很容易上手，写出来的代码　参差不齐，很容易把逻辑和表现层混在一块，日后很不容易维护和调试，一些公司往往招一些新手过来没有经过怎么培训就写代码，写出来一团糟，但是PHP完全可以跑，只是别人在看代码的时候一头雾水，这往往也是编程老手看不上PHP程序员的原因之一吧。

最后，弄一个 GIF，PHP[是最好的语言](https://justyy.com/archives/3637)，不服来战！

![](https://justyy.com/gif/justyy-php-is-the-best.gif)

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

**[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-22)**

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [论PHP是世界上最好的语言！](https://justyy.com/archives/5358)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

![](https://steemitimages.com/0x0/https://justyy.com/gif/steemit.gif)

**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [虽然不挣钱，但是CN区低保计划还会继续下去](https://steemit.com/cn/@justyy/cn)

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [论PHP是世界上最好的语言 PHP is the best programming language in the world!](https://steemit.com/@justyy/php-php-is-the-best-programming-language-in-the-world)
