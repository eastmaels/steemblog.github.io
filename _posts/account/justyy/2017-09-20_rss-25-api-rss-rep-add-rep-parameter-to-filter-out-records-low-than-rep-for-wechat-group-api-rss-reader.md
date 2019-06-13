
---
title: '微信排行榜及RSS自动过滤掉声誉低于25级的名单 - API, RSS, 及阅读器支持 rep 参数！ Add Rep parameter to filter out records low than rep for Wechat Group API/RSS/Reader'
permlink: rss-25-api-rss-rep-add-rep-parameter-to-filter-out-records-low-than-rep-for-wechat-group-api-rss-reader
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-20 15:28:12
categories:
- cn
tags:
- cn
- cn-programming
- weechat
- steemdev
- steemit
thumbnail: https://cdn.pixabay.com/photo/2013/07/13/11/43/box-158523_960_720.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


*Abstract:*  I have added a paramter named *rep* to filter out members in the wechat group that have reputation lower than the given value (by default rep=25). It allows us to focus on good quality contents. This parameter can be used in JSON API, RSS Feed for both posts and comments, [Daily Ranking Table](https://helloacm.com/tools/steemit/wechat-ranking/) (and API) and the [Web Reader](https://helloacm.com/tools/steemit/wechat-ranking/rss/).

![](https://cdn.pixabay.com/photo/2013/07/13/11/43/box-158523_960_720.png)
*Image Credit: Pixabay.com*

声誉是积累起来，并且不能直接用钱立马买来的，积累声誉很慢，毁掉声誉却很容易。新注册的用户 声誉是 25级，如果干了些不明智的行为（比如抄袭）那么就会被踩，声誉就会很低甚至是负分。

所以，不管如何，一个人的声誉的确很大程度的反应他/她的文章的质量。声誉差的用户文章很有可能会被自动隐藏。我们想过滤掉低声誉的人的文章。说这么多，就是想给大家介绍一个微信群RSS（及API和阅读器）的参数： rep。默认是25，意思是低于25级声誉的数据将会被隐藏。

比如：https://helloacm.com/tools/steemit/wechat/  默认不显示 低于25级的成员（并不是加了微信群就可以轻松上榜的）
当然，你可以加上 参数 rep=20 来显示大于等于20级的所有成员资料:

https://helloacm.com/tools/steemit/wechat/?rep=20  

这有啥用呢？比如我就只想看等级高的文章，那么我可以：

https://helloacm.com/tools/steemit/wechat/rss/?rep=70

只看70级以上的文章。

这个参数适用于  JSON API,  RSS (文章和评论), 微信排行榜，还有WEB 阅读器的URL地址。

STEEMIT 中文区 RSS 工具和名单:
- [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/)
- [SteemIt 好友微信群文章列表](https://helloacm.com/tools/steemit/wechat/rss/)
- [SteemIt 好友微信群评论列表](https://helloacm.com/tools/steemit/wechat/rss/comments/)

如果同时指定了白名单，黑名单，还有这个等级，那么它们的先后顺序是：如果不在白名单就忽略，如果在黑名单中就忽略，如果等级低于 rep 就忽略，大概代码为：

```
    if ($white) {
      if (!in_array($username, $whitelist)) {
        continue;
      }
    }  
    if ($black) {
      if (in_array($username, $blacklist)) {
        continue;
      }      
    }    

    $repurl = 'members/' . $id;
    if (is_file($repurl)) {
      $tmp = json_decode(file_get_contents($repurl), true);
      if ($tmp) {
        if (isset($tmp['rep'])) {
          if ($tmp['rep'] < $rep) {
            continue;
          }
        }
      }
    }
```

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-20)

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

**@justyy 是CN 区的点赞机器人，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看： [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 和 [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 和 [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)**

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [微信排行榜及RSS自动过滤掉声誉低于25级的名单 - API, RSS, 及阅读器支持 rep 参数！ Add Rep parameter to filter out records low than rep for Wechat Group API/RSS/Reader](https://steemit.com/@justyy/rss-25-api-rss-rep-add-rep-parameter-to-filter-out-records-low-than-rep-for-wechat-group-api-rss-reader)
