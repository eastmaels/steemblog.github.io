
---
title: "怎么让busy.org给你点赞？技能GET！"
permlink: busyorgget-0n4jshbzjq
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-24 16:59:00
categories:
- steempress
tags:
- steempress
- busy
- cn
- cn-reader
- steemit
thumbnail: https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1509116430/iitmzpkptw8r6lllhbnp.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1509116430/iitmzpkptw8r6lllhbnp.png" alt="" /><br/>
<p><center>(image source: <a href="https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1509116430/iitmzpkptw8r6lllhbnp.png">busy</a>)</center></p>
不知道大家知不知道，通过busy.org 发帖会得到busy.org的自动点赞。但是有些要求：
<ul>
 <li>需要通过busy.org发帖</li>
 <li>帖子必须包含busy的标签（不需要作为主标签）</li>
 <li>你的粉丝所有SP的总和必须超过1w SP或者20,000,000 vests</li>
</ul>
这些要求最主要的是最后那条“<strong>你的粉丝所有SP的总和必须超过1w SP或者20,000,000 mvests</strong>”

对的，这不是拼自身的SP总数，拼的是抱大腿的能力！

你粉丝的SP的总数直接影响到busy.org点赞的力度。

直接看busy点赞机器人的运行程序（https://github.com/busyorg/busy-bot）：

<img class="alignnone size-full wp-image-219" src="http://ericet.vornix.blog/wp-content/uploads/2018/07/1-3.png" alt="" width="593" height="226" /><br/>

这段代码主要说：

如果你粉丝的SP总数小于1w SP或者高于50亿SP，去去去，咋们不和你们这些没人疼和太多人疼的玩

如果你粉丝的SP总是在1W SP和50亿SP之间，恭喜你，busy.org将会给你至少0.06%的疼爱，最多不超过25%

<strong>怎么计算busy.org点赞的比例呢？</strong>

busy.org点赞比例公式：10000/50000000000*你粉丝mvests的总数 = 点赞比例

比如我粉丝的mvests总数=393536597 （可以通过https://steemdb.com/api/accounts?account=ericet （改成你的用户名）查看“followers_mvest” 这一栏)

套入公式：10000/50000000000*393536597=78，busy.org的点赞比例是0.78%
![image.png](https://ipfs.busy.org/ipfs/Qmd2uQ7pkDFh2jQuh1KanhJD8MwStuaY2wuvFZe1jUY23d)

所以busy.org点赞比例的多少，完全是看你抱大腿的能力！

还等什么，快去抱大腿~ <br /><center><hr/><em>Posted from my blog with <a href=&#039;https://wordpress.org/plugins/steempress/&#039;>SteemPress</a> : http://ericet.vornix.blog/2018/07/24/%e6%80%8e%e4%b9%88%e8%ae%a9busy-org%e7%bb%99%e4%bd%a0%e7%82%b9%e8%b5%9e%ef%bc%9f%e6%8a%80%e8%83%bdget%ef%bc%81/ </em><hr/></center> 

- - -

This page is synchronized from the post: [怎么让busy.org给你点赞？技能GET！](https://steemit.com/@ericet/busyorgget-0n4jshbzjq)
