
---
title: '使用HiveSigner移除账户中无用的授权'
permlink: hivesigner
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-22 03:50:30
categories:
- cn
tags:
- cn
- account
- security
- hivesigner
thumbnail: 'https://images.hive.blog/DQmZTmyjyR6gcUieBjxv8FNEyUA7kGRTKnfdBNTWJneZQht/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天被一个用户问及如何移除她账户下对某个其它账户的授权。其实对于新手来讲，我一直不建议授权给其它用户，因为授权给其它用户，就意味着其它用户可以以你的名义做任何事情，有可能导致一些不可预料的后果。

![image.png](https://images.hive.blog/DQmZTmyjyR6gcUieBjxv8FNEyUA7kGRTKnfdBNTWJneZQht/image.png)
(图源 ：[pixabay](https://pixabay.com/))

当然了，对于一些~~老油条~~老鸟来讲就无所谓了，因为他们做某项操作都会知道自己在做什么，是权衡利弊后的最佳选择，即便引发一系列后果，那么也是可以承受的。

关于授权导致的问题，最近的各种事情我就不说了。~~上古时期~~，当年影响比较广的就有Utopian.io 被黑，导致一大堆授权的用户被拿来点赞或者踩别人；还有就是某自动跟赞的工具，会动用用户的点赞去赞某些推广贴（在服务条款中有说明，但是很多人并不清楚）。

所以总结起来就是：
* ***不清楚授权可能有哪些不良影响的，不要去授权；***
* ***如果账户中有无用的授权，那么要及时移除。***

# 移除授权

移除授权有好多方式，比如使用hive-python的命令行工具实现，不过最简单的方式就是使用`HiveSigner`，下边来演示一下如何移除账户中无用的授权。

首先使用https://hiveblocks.com/ 查看自己账户下有哪些授权：
>![image.png](https://images.hive.blog/DQmdQxgoakm11sd3eXftLWnqx2VDVDLT3evVnZ9BCFbPhgR/image.png)

不难发现我的测试账户下有dpoll.xyz以及partiko-steemcon两个额外的授权，也都没啥用了，我先来移除dpoll.xyz，在浏览器中输入如下链接：
>https://hivesigner.com/revoke/dpoll.xyz

会出现如下提示：
>![image.png](https://images.hive.blog/DQmbMPqgF8WS1VEMrTbPFG3yfgo9XSgt8zt7R5nGEQSe6sA/image.png)

点击***Continue***按钮之后会被要求输入用户名以及主密码或者Active私钥：
>![image.png](https://images.hive.blog/DQmR7t3wYgxJjBMF7QoTyBkfFp36Mo1oHr2b2t19MdzmxnH/image.png)

输入用户名以及Active私钥后(***除非有必要，否则尽量避免使用主密码***)，再次出现提示信息：
>![image.png](https://images.hive.blog/DQmUaxX1nGeWpCGkzbuB1p2ZfVhrLga3d87jiU68o5PBbFD/image.png)

点击***`Revoke`***按钮，完成操作并返回txid：
>![image.png](https://images.hive.blog/DQmewMtgkbTna4LvRuVgQH2C6RqUV5RAR8xtcN75zXdutx5/image.png)

再次到https://hiveblocks.com检查自己的账户，发现dpoll.xyz已经被移除。
>![image.png](https://images.hive.blog/DQmS7iLzSmdLTyeA4nKXCfYQruK16XxE4TVQwGxPByLkEgB/image.png)


用同样的方法和步骤移除partiko-steemcon，现在干干净净，清清爽爽真舒服。

是不是很简单，***你还在等什么呢，快去移除账户中的无用授权吧！***


# 相关链接

* [⚠️ Utopian.io 被黑，你可能关心的一些问题 / 如何移除授权](https://hive.blog/utopian-io/@oflyhigh/utopian-io)
* [O哥闲扯淡：快来看看你有没有***被点赞***！](https://hive.blog/cn/@oflyhigh/fw5xu-o)

- - -

This page is synchronized from the post: ['使用HiveSigner移除账户中无用的授权'](https://steemit.com/@oflyhigh/hivesigner)
