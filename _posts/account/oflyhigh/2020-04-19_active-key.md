
---
title: '用Active Key来发表文章'
permlink: active-key
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-19 12:46:12
categories:
- cn
tags:
- cn
- cn-programming
- study
- post
- key
thumbnail: 'https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


玩过STEEM/HIVE一段时间的朋友，一般都会听说，POSTING Key用于发文/点赞，Active KEY用来转账/投见证人票等。很长一段时间，我也是这样认为的。

![](https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

但是后来一个朋友和我说，***Posting Key、Active Key、Owner Key的级别一个比一个高，而后者能做前者的所有操作***。

也就是说，Active Key除了可以进行转账等需要Active Key权限的操作外，还可以用来发帖/点赞，Hive钱包中的一副权限图也表明了这个问题：
>![image.png](https://images.hive.blog/DQmZUeJM3X4K7pJbQDkqA9B63g5kmsAr37AwFbRYk3AypRU/image.png)

对此我非常好奇，一直想测试一下，到底能不能用Active Key发帖，然而当我尝试用Active登录https://hive.blog 时，却得到如下提示：
>![image.png](https://images.hive.blog/DQmbgFnKurvjhjBj9iWJWaNwoBdW7Lh4PGCNbhzk2oycy3i/image.png)

也就是说，尽管我知晓并愿意承担用Active Key 登录可能带来的风险，它还是不让我登录：
>This password is bound to your account's active key and can not be used to login to this page. 

好在我之前学会了如何用程序去进行HIVE区块链的写操作，那么让我来试试能不能用Active Key把帖子发出去。

在这之前，我先来看看发帖的操作大概长什么样子，经过分析，它大概长成这个样子：
```
op_comment = ['comment',
   {'author': '',
    'body': '',
    'json_metadata': '',
    'parent_author': '',
    'parent_permlink': '',
    'permlink': '',
    'title': ''
    }]
```

对于主贴来讲，`parent_author`是空的，所以我们可以先不理会。`parent_permlink`是分类目录（也就是正常发文时第一个tag，我们可以设置为`test`

其它的就好理解多了，`author`是作者，`title`是标题，`body`是内容，`permlink`是文章链接(相同用户名下标识文章的独立标志，`json_metadata`是文章tags等数据我们可以先设置为空。

经过代码处理，并***用Active Key签名*** 我们得出如下签名后transaction：
```
{'expiration': '2020-04-19T12:29:00',
 'extensions': [],
 'operations': [['comment',
                 {'author': 'oflyhigh.test',
                  'body': 'Test Active Key Post, Hello World!',
                  'json_metadata': '',
                  'parent_author': '',
                  'parent_permlink': 'test',
                  'permlink': 'testpost',
                  'title': 'Test Active Key Post'}]],
 'ref_block_num': 12864,
 'ref_block_prefix': 901786240,
 'signatures': ['202e162abc10900c23fb22d11f2ab2f2a31c71a6c1c3d1db031c3698c7d816b0fa511dad561514007b4f9b20e7ffcec7e25ca3bc0914017dcc87a74de96d1335ed']}
```

广播如上transaction，发现成功发布到网络上，所以证实了使用Active Key发帖是完全可行的。
>![image.png](https://images.hive.blog/DQmXgeGqZ3Cbt3ceE2Kk768Fq1CP9cw5RHfn2zMSAdYS5pT/image.png)

感兴趣的朋友还可以尝试用我之前的从签名恢复公钥的方法来试试从签名中恢复出来的到底是不是Active Key 对应的公钥，我就不做尝试啦。


尽管如此，必须强调的是，***在进行发表文章/点赞等操作时，为了安全，请使用Posting Key登录***，本文仅作探究之用，不建议这样使用。

# 相关链接

* [两年半前的大坑：区块链的写操作](https://hive.blog/hive-105017/@oflyhigh/fmwnf)
* https://hiveblocks.com/tx/389f3469ef31544eec98c67281e62914d01b5fe4

- - -

This page is synchronized from the post: ['用Active Key来发表文章'](https://steemit.com/@oflyhigh/active-key)
