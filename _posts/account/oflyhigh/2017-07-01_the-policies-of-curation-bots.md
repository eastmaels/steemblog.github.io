
---
title: '聊聊点赞机器人的点赞策略 /The Policies of Curation Bots'
permlink: the-policies-of-curation-bots
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-01 12:39:12
categories:
- cn
tags:
- cn
- robot
- curation
- policies
thumbnail: https://steemitimages.com/DQmQCkZarjQNbik1oDDdybgcfVDemWy8ykXGpaxQfUjZ5fB/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在前文：
* [聊聊机器人🤖 / Robots on STEEMIT](https://steemit.com/cn/@oflyhigh/robots-on-steemit)

我们粗略的谈及了点赞机器人/Curation Bots， 这里我们来聊聊点赞机器人的策略。

# 策略/Policies
![](https://steemitimages.com/DQmQCkZarjQNbik1oDDdybgcfVDemWy8ykXGpaxQfUjZ5fB/image.png)

无论是出于支持指定作者还是攫取点赞收益，点赞机器人都不能瞎点乱点。
那么点谁的帖子、何时点、点多少比例就是点赞机器人需要解决的问题，在这里，我将这些笼统的概况为策略/Policies。
大致可以归结为以下几点：

* 点谁 / Who
* 何时点 / When
* 点多少/  How much

# 点谁 / Who

![](https://steemitimages.com/DQmewwmJLGNU1vjxv8SmdVcDi8jpzPZJnJLy5c4UqvvBFQt/image.png)

关于点谁的帖子，一般有以下策略：

* 逮谁点谁 / Upvote every post

逮谁点谁的主要目的就是混脸熟，当然也可能是为了支持所有人

下表为SteemIT 创立以来点赞最多的三个ID
Rank.	|ID	|Votes	|SP	|VP(%)	|Rep	|Online
----|----|----|----|----|----|----
1	|@fyrstikken|215493|491880.04|56.58|72.84|362
2	|@sqube|129641|12281.60|98.00|38.65	|256
3	|@ubg	|103831|3241.64|0.97|57.89	|351

我没去统计现在STEEMIT一共多少文章正文了，但是我知道fyrstikken的机器人开动的时候，是逢帖必点的。有些新作者，零人气，突然有个大户给点了一票，尽管可能给的权重是1%或者0.01%，但是依旧足以让人欣喜若狂了。可惜的是fyrstikken时不时的停机，尤其HF19之后，可能不再按之前的策略开动了，所以新人们享受不到这项福利了。

而ubg，大家注意一下这个哥们的VP，已经低至0.97%，也就是说他100%的一票，相当于满权重时的1%，而1%的一票则相当于万分之一了。

由此可见，逮谁点谁，这种策略不可取，HF19之后，更是行不通了。

* 跟谁指定的作者 / Upvote the specified authors

这是另外一种简单的策略，也是应用最广的策略。
1）某些作者一向收益奇高，点他可以获得巨额回报
2）某些作者是我们的好友或者值得支持，文章质量非常好，值得逢帖必点

操作起来也很简单，机器人监控steemit上的新帖，发现有这些作者的帖子，就加入处理列表，什么时候点，点多少就是另外的话题了。

* 跟随指定的操作者 / Follow the specified curator

这个策略白话描述就是别人点谁我点谁。
@wang 作为全网知名的点赞机器人，有段时间监控 @deanliu 的操作，只要@deanliu 点的帖子，他就必点，@deanliu 为此兴奋过好长一段时间😀

这个策略相当于一个领头人，领头人的操作被大家所认同，curie 等一些点赞机器军团之前也是这样的策略。
这个策略有一个弊端，可能存在几伙机器人，而几伙机器人中的几个号码可能互相跟点，然后就串号了，几波大军跟点一个帖子，对帖子主人来讲，当然是极好的啦，尤其HF19之前，收益倍增啊

* 动态分析 / Analysis Dynamically

这种形式相对复杂，通过作者(信用、发帖频度、SP等等)以及文章(标签、长度、图片、内容等等)以及其它点赞者对帖子的行为(点赞、差评、回复等等)来动态分析这个作者的帖子是否可以点。这个模式相对复杂，但是会筛选出相对比较优秀的帖子。

* 组合策略 / Combined The Policies

组合策略很好理解，就是综合以上几种策略中的两种或者N种，所形成的点赞策略，不用过多描述啦。

# 何时点 / When
![](https://steemitimages.com/DQmdjpYaChqbym7Q1snJoxF3t1MKYfwhK99JCgCtcGu4nUe/image.png)

确定了点谁、点哪个帖子之后，就是何时点的问题，关于这个问题主要涉及两个方面：
* 早鸟惩罚
* 迟到者抬轿

所谓早鸟惩罚，就是为了避免机器人抢投所有的帖子，限定了30分钟以内点贴，点赞收益与作者按比例分成。而所谓迟到者抬轿，就是先点的比后点的分得更多的点赞收益。所以对于机器人点赞而言，点早了不合算，点晚了也不合算，而正好30分钟点，对不起，很多人在20分钟时候就开始抢投了。具体什么时间合适，可能需要经过精细的计算以及对帖子当前的收益状态进行分析，并对其它大鲸鱼是否跟点这一作者、什么时机点这一作者进行针对性对待，这个工作量可谓大矣。


# 点多少/  How much

![](https://steemitimages.com/DQmNf5BhMmCtRhnoCCpT8S2sH1v7uDaorDrMXCU6X53tmiK/image.png)

大家可能注意到一些机器人号对不同作者不同帖子点赞时给予了不用的权重，有的1%，有的100%

当解决了点谁以及何时点之后，点多少比重这个事情其实就很简单了，无外乎一下几点：
* 这个作者平时的文章质量如何： 是否值得全力支持
* 点这个帖子会获得多少收益： 潜在收益越高，比重越大
* 当前的Voting Power 情况： VP低的时候降低比重可以保持VP回复较快（或下降较慢）

# 如何被机器人爱上
![](https://steemitimages.com/DQmZcxf22D22yfPcS1dpx245w6TMnZXN8omZuFLuaXnWZBT/image.png)

通过上述分析，我们会发现机器人的策略有的简单、有的复杂，那么对于普通作者而言，如何让机器人爱上呢？这个问题其实不太好回答，但是我尝试给出以下结论：

* 声望(Reputation)： 信用几乎是大部分机器人策略考察的重点，信用越高，被盯上的可能性越大
* 金钱(Money)： 你拥有的等效SP(SP+代理)决定了你点贴收益，也是机器人们判断你的帖子潜在收益的重要依据
* 质量(Quality)： 声望和金钱，一时半会解决不了，但是如果质量不高，那么就更无望了
* 人际交往(Relationship)： 和每个人交朋友，让更多的人看到你的帖子，如果遇到伯乐，你还是千里马，那么你就有可能被加入名单了

其中声望和金钱要一时半会解决不了，就只能从质量和交往两方面着手了。有句话叫做: ***是金子总会~~花光的~~发光的***，保持高质量水准，万一被curie啥的发现了呢！至于人际交往，切记***要真心和人做朋友***，如果你交朋友的目的就是让人家给你点赞，那么相比朋友和点赞你都收获不到。


以上是随便聊聊机器人的点赞策略，个人见解，不可能面面俱到，也可能有失偏颇。
欢迎讨论，欢迎指正。

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [聊聊点赞机器人的点赞策略 /The Policies of Curation Bots](https://steemit.com/@oflyhigh/the-policies-of-curation-bots)
