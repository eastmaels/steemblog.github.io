
---
title: 'Followers不对、热门tags不对、回复加载不出来，谁的锅？'
permlink: followers-tags
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-22 09:28:15
categories:
- cn
tags:
- cn
- steemdev
- api
- steemit
- steem
thumbnail: https://cdn.steemitimages.com/DQmVwkMp1e8Sfv2QWeoFwE4epLtB3W8L8Bz1ua66ora3UY7/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必最近两天大家访问STEEM，都曾遇到过Followers不对、热门tags不对、网站打不开、回复刷不出来等诸多问题（现在貌似正常了）。

![](https://cdn.steemitimages.com/DQmVwkMp1e8Sfv2QWeoFwE4epLtB3W8L8Bz1ua66ora3UY7/image.png)
(图源 ：[pixabay](https://pixabay.com/))

比如前天就有朋友提到热门标签中，#cn 找不到了，对于习惯于在站点左侧找cn标签来进入到STEEMIT中文区的朋友来讲，这会造成很大的困扰。

原本排名尚可的cn标签，怎么突然就排到千里之外了呢？其实这并非是cn标签或者其它标签热度变化所引起的，而是steemit使用的API节点变化所导致的BUG。

以获取热门tags为例，使用的API为***`get_trending_tags`***

比如获取前100个热门标签的JSON为：
>`{"jsonrpc": "2.0", "method": "call", "params": ["condenser_api", "get_trending_tags", ["", 100]], "id": 1}`

我向***` api.steemit.com`***发送上述JSON，返回类似如下内容：
>![](https://cdn.steemitimages.com/DQmUcfk3mheECFUWy8Vow4X8gfq4PDHH6zB5Gnrhs3C8cC5/image.png)

限于篇幅我没截完整，不过可以看到的是，cn排名不是千里之外哦，而如果向***`api-int.steemit.com`***信息，cn标签就沉没到太平洋底了😂

>![](https://cdn.steemitimages.com/DQmRvw5ob8rZMQwMcNz5etcqkg2ytzoRg4VnHxFgn5ZsXw3/image.png)

而可以确定的是，前两天steemit.com使用的是***`api-int.steemit.com`***。那么现在为何显示标签正常了呢（或者说排名和一直以来的排名相比变化不大）？我随便打开steemit.com，看了一下源码，现在使用的节点已经换回到***` api.steemit.com`***。

不得不说，STEEMIT的开发人员很有胆量，***直接在STEEMIT上测试，而不是先在测试环境上测试好再迁移***。不过我猜测是他们测试人员有限（都裁掉了？），所以直接修改，把STEEMIT.com的所有用户当做免费测试员，真是打了一幅好算盘。

我看了一个***`api-int.steemit.com`***以及***`api.steemitdev.com`***，BUG多多，所以如果STEEMIT开发者再把STEEMIT.COM切回上述节点，那么出各种奇怪的问题概率还是很大的。

至于为何***` api.steemit.com`***问题不大，而***`api-int.steemit.com`***以及***`api.steemitdev.com`***BUG多多，这应该是STEEMIT公司缩减开支计划，在steem节点中应用`hivemind`以及`mira`所引起的BUG，至于它们两个谁的锅，我就没法判断了。更多详情参见@steemdev 以及@steemitblog的帖子吧。

之所以发这个帖子，就是告诉大家，如果访问STEEMIT.COM或者其它应用，发现了啥奇奇怪怪的问题，不要太惊讶，团队在做事，努力~~写BUG~~改BUG中。😂

# 相关链接

* [Upcoming Changes to api.steemit.com](https://steemit.com/steemit/@steemitdev/upcoming-changes-to-api-steemit-com)
* [Introducing MIRA](https://steemit.com/steem/@steemitblog/introducing-mira)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Followers不对、热门tags不对、回复加载不出来，谁的锅？](https://steemit.com/@oflyhigh/followers-tags)
