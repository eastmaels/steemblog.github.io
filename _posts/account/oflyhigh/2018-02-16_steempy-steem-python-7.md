
---
title: '使用steempy / steem-python 转发7天以前的帖子'
permlink: steempy-steem-python-7
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-16 13:38:45
categories:
- python
tags:
- python
- steemdev
- steempy
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在文章[《O哥闲扯淡： 转发才是真爱粉吗？》](https://steemit.com/cn/@oflyhigh/o)中，我提到我以前对转发进行了一些研究，比如说做了一个丑陋无比的[检查谁转发了你的文章的网页工具](https://steemit.com/cn/@oflyhigh/who-resteemed-rebloged-your-posts)以及测试了[如何使用SteemConnect转发7天以上的文章](https://steemit.com/reblog/@oflyhigh/how-to-reblog-resteem-articles-which-posted-7-days-ago-with-steemconnect-steemconnect-7)。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](bing.com)）

当时写这篇O哥闲扯淡的时候，我突然就想，我怎么没测试一下使用steem-python来测试转发功能呢？回头一定要补上，今天终于抽出时间来把这个补上喽。

# 安装和导入私钥

#### 安装

现在有两个版本的steem-python，分别是
* https://github.com/Netherdrake/steem-python
* https://github.com/steemit/steem-python

我个人推荐使用 Netherdrake (@furion)的版本，或者官网的早期版本，官网的新版本加了很多功能，但是同样也使得这个库变得复杂和臃肿。

选择你要使用的版本，安装见对应github链接的安装说明即可。

#### 导入私钥

在STEEMIT上，进入**`Wallet->Permissions->Show private key`**获取你的POSTING 私钥。

在命令行使用
**`steempy addkey`**
按提示导入私钥即可，如果是首次创建钱包，会提示你为钱包设置密码。

# 使用steempy转发文章

安装完steem-python库以后，就可以使用steempy命令行工具了。

比如使用：`steempy --help` 查看帮助
或者使用：`steempy resteem --help`查询关于转发的详细帮助

![](https://steemitimages.com/DQmRTSwwRdWBhGNcvPJd1uetax6EaVNGxjayMyCJwz7C9rY/image.png)

有了这些准备后，我们就可以用它来转发文章了，比如转发[《O哥闲扯淡： 转发才是真爱粉吗？》](https://steemit.com/cn/@oflyhigh/o)到oflyhigh.test账户下：

指令： `steempy resteem --account oflyhigh.test @oflyhigh/o`

按提示输入钱包密码后提示如下，说明操作成功了。
![](https://steemitimages.com/DQmUMhfHXecXXHwVMhvkfdYoX4xV4y1UXP1F4W1Xwph5YwX/image.png)

我们可以用同样的方式转发8个月以前的文章
`steempy resteem --account oflyhigh.test @oflyhigh/19-informal-translation-hf19-equality-coming-soon-linear-rewards`

进入 @oflyhigh.test 的主页，可以看到两篇转发的文章

![](https://steemitimages.com/DQmSRj42po8km1vvQy3fHayDRxSNgWk4aFeizFaEk14ggtY/image.png)


# 使用 python 脚本转发

除了使用命令行，使用python脚本来操作也一样简单。
比如我要转发这篇[《那年夏天》](https://steemit.com/cn/@oflyhigh/341nku)，那么最简单的脚本示例如下：
```
from steem import Steem

identifier = '@oflyhigh/341nku'
account = 'oflyhigh.test'

steem = Steem()
steem.commit.resteem(identifier, account)
```

脚本执行成功后，再访问我们的 @oflyhigh.test 的主页
![](https://steemitimages.com/DQmV1UAfnfsmyzGuJK7JWNCRBVDue7ziTytToK4vt4Srbds/image.png)

耶，成功了！

# 结论

无论使用steempy还是python脚本转发文章都非常简单，重要的是，我们可以转发7天以前(任意时间)的文章，而不像在steemit上，我们要受到只能7天以内文章的限制。

尽管如下，我依然建议大家读读[《O哥闲扯淡： 转发才是真爱粉吗？》](https://steemit.com/cn/@oflyhigh/o)，慎重的转发有价值的内容，而不要见啥转啥。


# 关联阅读
* [O哥闲扯淡： 转发才是真爱粉吗？](https://steemit.com/cn/@oflyhigh/o)
* [Who resteemed/rebloged your posts? / 谁转发了你的文章？](https://steemit.com/cn/@oflyhigh/who-resteemed-rebloged-your-posts)
* [📌 How to reblog/resteem articles which posted 7 days ago with SteemConnect? / 使用SteemConnect转发7天以上的文章](https://steemit.com/reblog/@oflyhigh/how-to-reblog-resteem-articles-which-posted-7-days-ago-with-steemconnect-steemconnect-7)

- - -

This page is synchronized from the post: [使用steempy / steem-python 转发7天以前的帖子](https://steemit.com/@oflyhigh/steempy-steem-python-7)
