
---
title: '获取帖子的投票用户列表(Voter list)'
permlink: voter-list
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-23 14:55:15
categories:
- cn
tags:
- cn
- python
- cn-programming
thumbnail: https://steemitimages.com/DQmSMU9fXZab1KtFx92xj2scUKVK1yGG8zGtoUwxdPPASZH/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmSMU9fXZab1KtFx92xj2scUKVK1yGG8zGtoUwxdPPASZH/image.png)

在前一篇帖子中
* [Python程序中使用集合计算简化问题处理](https://steemit.com/cn/@oflyhigh/4j3232-python)
我们聊到如何使用集合的差集功能***筛查出用户组A中不属于用户组B的元素***

并举了一个栗子：
找出用户组A中没有给帖子@oflyhigh/xxxx 投票的用户

你可能很惊讶，莫非O哥用技术手段排查不给他投票的用户，然后拉黑吗？
比如说台湾第一美女 @deanliu 老师就吓哭了
![](https://steemitimages.com/DQmUy1rsgy58B8HR6tSZsbZdBpvuGrtxUStGAGnMfF3pDAG/image.png)
其实O哥没那么小气的啦

不过还真是用来查谁没投票的，至于用途嘛，暂且保密

然后恰逢 @jubi 小兄弟问到：
>代码是看懂了，就是不知道这个list_user怎么得到 哈哈，我用上了我所有了编程知识了。:)
PS 我可是点赞了哟

就一并多说点。

# 获取帖子投票列表

获取帖子投票列表，我知道的至少有四种方法：
1) 使用SteemData
2) 使用官方Python库中的Post类
3) 使用API get_content
4) 使用API get_active_votes

当然其实还有JS, PHP, Ruby等各种库各种类，你可以选择你擅长的，我不懂的就不多说啦。

#### 1. 使用SteemData

有关如何使用 [SteemData](https://steemdata.com/)
可以参考我以前的一些文章
* [简单介绍一下SteemData](https://steemit.com/cn/@oflyhigh/steemdata)
* [steemit 隐藏神技之: 富豪榜 / The rich list of steemit & How to get it from SteemData](https://steemit.com/cn/@oflyhigh/steemit-the-rich-list-of-steemit-and-how-to-get-it-from-steemdata)

使用SteemData 你可以有好多种方式来查询出投票列表
比如说从Posts中查询, 或者从Operations中查询，或者从AccountOperations中查询
比如我从Posts中查询Steemit上第一篇文章： ***[Welcome to Steem!](https://steemit.com/meta/@steemit/firstpost)***

部分投票如下：
![](https://steemitimages.com/DQmYYs3wv8JXBJK1odg9iQWdrGVeiLvxxw556SFGRodoJEG/image.png)

是不是很好玩？
不过SteemData目前有个问题，就是数据延迟，说白了，不新鲜，这就尴尬了
人家给你投过了，你查出来没投，岂不是冤枉人了？
我在Github上反馈过这个问题，作者的答复是自建节点，值得期待啊
![](https://steemitimages.com/DQmNpL7Zk2ZLVw1RuPjZbz1pUyDM8r3iVRuKTDdUZGLFJF4/image.png)

#### 2. 使用官方Python库中的Post类

Post类其实是对API get_content的封装
用起来就不用太关心下边的东西啦
`post = Post('@author/permlink')`
这样就取到帖子啦

然后
`post['active_votes']`就是帖子的投票信息啦
以我之前一个测试的帖子为例,  `post['active_votes']`部分如下：
```
 'active_votes': [{'percent': 5000,
                   'reputation': '129952225494384',
                   'rshares': '736202067284',
                   'time': '2017-07-23T08:43:33',
                   'voter': 'oflyhigh',
                   'weight': 875336},
                  {'percent': 5000,
                   'reputation': 0,
                   'rshares': 407577814,
                   'time': '2017-07-23T08:43:33',
                   'voter': 'eval',
                   'weight': 194}],
```

#### 3. 使用API get_content

之前我们说过，Post类其实是对API get_content的封装，所以两者其实是类似的
Post类经过封装更易使用
而get_content更直截了当

API定义如下：
`discussion get_content( string author, string permlink )const;`

#### 4. 使用API get_active_votes

你可能会问既然，有了1， 2，3 种方法，为何还要第四种呢？是不是没啥写的在凑字数？😡
呃，不是这样的

如果你使用过第二、第三种方法，就会发现它们返回好多信息，比如文章内容、作者信用、奖励信息等等。这些信息在做复杂的判断时非常有用，但是如果就是为了找到投票信息，读回来一火车的数据，岂不是浪费？

浪费是可耻的行为，既增加系统负载又费电，所以我们要杜绝浪费。
所以 get_active_votes 就勇敢的站了出来。
这个API 很好理解，就是拿出对应帖子的投票信息。

API 定义如下：
`vector<vote_state> get_active_votes( string author, string permlink )const;`

# 代码示例

超简单的哦
```
from steem import Steem
steem = Steem()

active_votes = steem.get_active_votes('oflyhigh', '4j3232-python')
list_voter = [vote['voter'] for vote in active_votes]
print(list_voter)

list_user = ['oflyhigh', 'laodr', 'deanliu', 'ace108', 'rivalhw', 'lemoojiang']
list_x = list(set(list_user) - set(list_voter))
print(list_x)
```
咳咳咳，后边三段代码是我不小心加上去的。我胸怀宽广，不会记仇的😕

- - -

This page is synchronized from the post: [获取帖子的投票用户列表(Voter list)](https://steemit.com/@oflyhigh/voter-list)
