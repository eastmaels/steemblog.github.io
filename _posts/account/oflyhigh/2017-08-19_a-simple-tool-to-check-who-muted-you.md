
---
title: 'A simple tool to check who muted you! / 查询谁把你拉黑了'
permlink: a-simple-tool-to-check-who-muted-you
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-19 02:29:24
categories:
- cn
tags:
- cn
- cn-programming
- php
- tools
- mute
thumbnail: https://steemitimages.com/DQmQfFDRvriutBX87tjW2DABbf95UMX3QgP4pqMnk2Z35az/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmQfFDRvriutBX87tjW2DABbf95UMX3QgP4pqMnk2Z35az/image.png)

On Steemit, you may mute the people you do not like，and can check who are muted by you at the setting field. For example, I muted three users for test purpose 😀 

在STEEMIT，你可以拉黑不喜欢的人，比如SPAMER啥的，你可以在SETTING区域查看你都把谁拉黑了。比如为了测试，我随便拉黑了三个用户(对不起了，稍后会恢复)，在设置区域可以看到如下内容：

![](https://steemitimages.com/DQmfSFxyVBbf8bexodcA5UWsy1QCBq6T6E2zq5gLk1CshgP/image.png)

But，I can not find out where to check that who muted me, This may not make sense, but it is interesting!😀 So I wrote a script to do this，very simple, but easy to use. Let me introduce it to you.

但是，遗憾的是在STEEMIT，却没法查到都谁把我拉黑了。这数据或许没啥意义，但是很有意思，不是吗？所以我写了个脚本来查查看，很简陋的脚本，但是好用。让我来简单介绍一下。

----

#### The URL 

http://steemit.serviceuptime.net/mute.php
随便找个空间把脚本放上去，起名啥的大家就别纠结了。

#### The Input Form / 输入表单
![](https://steemitimages.com/DQmYpNk5j4BhbKhwfkiHg1dcm4zbT3sh54twKzGxSauREkT/image.png)

Input the username you want to check, for example, your steemit account, and then click ***Check*** Button, you will get the list who mute you.

输入区域很简单，一个输入框加一个提交按钮。输入你先检查的用户名，比如你的steemit账户，然后点 ***Check***，就会得到拉黑你的人的名单。

#### The Results Filed / 结果区域
![](https://steemitimages.com/DQmQ7chAnH5SEdEkvXu4mzvVkYkDnUn1cqZochTwyoDLfX9/image.png)
So sad, a lot of users do not like me. 😭

如果输入无误，并且有人拉黑你，就会显示一个列表，左侧是用户名，右侧是对应用户的steemit主页，你可以点击直达。嗯，好多人不喜欢我，好伤感。

----
Are you curious about who doesn't like you?  [Check it now!](http://steemit.serviceuptime.net/mute.php)
是否好奇谁不喜欢你? [赶快来查查](http://steemit.serviceuptime.net/mute.php)吧。

- - -

This page is synchronized from the post: [A simple tool to check who muted you! / 查询谁把你拉黑了](https://steemit.com/@oflyhigh/a-simple-tool-to-check-who-muted-you)
