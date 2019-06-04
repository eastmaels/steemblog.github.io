
---
title: '升级Ubuntu 16.04 到 18.04 / 测试do-release-upgrade'
permlink: ubuntu-16-04-18-04-do-release-upgrade
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-01 13:32:36
categories:
- cn
tags:
- cn
- linux
- blog
- ubuntu
- upgrade
thumbnail: https://cdn.steemitimages.com/DQmbYY8ZKJY4s98TXGKUwU3gP9UAxuQgFXpeVLbyEGCJSQy/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


登陆一台VPS，看到如下提示信息。

>New release '18.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

哦？竟然可以直接从Ubuntu 16.04 升级到 18.04。其实对于一个在使用中的VPS，我是不赞同这么做的，我更倾向于重做系统再重新部署应用。

![](https://cdn.steemitimages.com/DQmbYY8ZKJY4s98TXGKUwU3gP9UAxuQgFXpeVLbyEGCJSQy/image.png)
(图源 ：[pixabay](https://pixabay.com/))

不过很好奇运行***do-release-upgrade***会是什么效果，手痒得抑制不住，那么就找一台相对空闲的VPS试一下吧。


![](https://cdn.steemitimages.com/DQmTchU3C8FTvdg6Tm1TqVW4bVA4ZjvgrqgNvDbCs6xpFNu/image.png)


在命令行下直接运行如下命令：

>`do-release-upgrade`

提示为了安全起见，要在新端口上启动一个SSH服务
![](https://cdn.steemitimages.com/DQmcQjE6DF2tib9aYRow7HxdsXXvnbqBR5bDc7afsZ6iQiA/image.png)

选择y，完成启动额外sshd后提示输入sudo密码。
![](https://cdn.steemitimages.com/DQmNoJmro9tgJeuSYEZuyZZKTVcR4XfozzM1ruKCDhKKrAX/image.png)

![](https://cdn.steemitimages.com/DQmQftuZi64PG8W2S5KR8hYEgBjXJ9mMuDTkzJxe3mTeV7w/image.png)

将更新源内的链接从xenial（Ubuntu 16.04代号） 切换至bionic（Ubuntu 18.04代号）
![](https://cdn.steemitimages.com/DQmSUpgph8UpEAL27CJe2MDFKLopFBF5cZyXLs34DCHHzCp/image.png)

不用多想啥，快点开始吧。
![](https://cdn.steemitimages.com/DQmYpN9vt6MQS2uXE5LsVBgFmPaaaQK4WfosqxYtSGNyyU9/image.png)

![](https://cdn.steemitimages.com/DQmbyThKUfTVeQK5DtzfKYorP3NthNQ7KQaTCRC3os7oCBE/image.png)

接下来就开始更新过程了，信息太长太多，无法截图了。

提示选择键盘布局国家等
![](https://cdn.steemitimages.com/DQmdKs4p8Z1uX8Kfrd4ydjursrJVT9afMJZwZhuT3G4tEGQ/image.png)

![](https://cdn.steemitimages.com/DQmeaCD4AU4cmo7yqDKeM1CjbxLdLESJPLiEGWYzMTDi9P4/image.png)

然后继续一堆更新信息，信息太长太多，无法截图了。

然后停到这里
![](https://cdn.steemitimages.com/DQmbATc2VbsXs2h4SCsaDnP266MbwxeCJXqZMpMqHadkWS4/image.png)
直接回车选择默认项目。

然后继续一堆更新信息，信息太长太多，无法截图了。

![](https://cdn.steemitimages.com/DQmanU9MwkaTBnfakoCUg6WqNGLnUzmPMTA3t8sZZmUJrfb/image.png)

我选择
>***install the package maintainer's version***    

然后继续一堆更新信息，信息太长太多，无法截图了。

![](https://cdn.steemitimages.com/DQmY69NaA7ndFd2N1HVEsxwztD5jWVaZ1mhkvFVH9WXqE6y/image.png)
My God，都要删除啥啊？让我瞧瞧，选择***`d`***吧


![](https://cdn.steemitimages.com/DQmPUEDtNgkMZDromRojuWGH5ZtQ6QzHsuXZFXeLH3JqwQE/image.png)
似乎大概好像我也没用到啥啊？删吧删吧，返回后按***`y`***

然后继续一堆更新信息，信息太长太多，无法截图了。

![](https://cdn.steemitimages.com/DQmZQ6tnGJnyNx4xSb9UR7wjuReCs4Wn8ZpvYndN9jbi8BL/image.png)
曙光终于来了？选择***`y`***，重启瞧瞧。

然后尝试重新登陆，结果死活登陆不上，换默认的22端口试试，一下子登陆上了。额，我以为用新的配置文件会把一些旧的配置迁移过来，看来我想错了。

![](https://cdn.steemitimages.com/DQmTwZH1FL9gB2HttsZDx71dvcxgeB9Ltk4U87Lt4TRoopL/image.png)
升级成功了。

----

尽管升级成功，但是过程还是过于繁琐，这么烦劲，还不如重做系统呢，回头我还是直接重做系统到Ubuntu18.04吧，总感觉这样更靠谱，强迫症伤不起。至于这翻折腾白折腾了，这就是手痒的代价吧。

- - -

This page is synchronized from the post: [升级Ubuntu 16.04 到 18.04 / 测试do-release-upgrade](https://steemit.com/@oflyhigh/ubuntu-16-04-18-04-do-release-upgrade)
