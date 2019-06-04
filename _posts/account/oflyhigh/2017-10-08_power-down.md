
---
title: '微信公众号增加账户Power Down信息查询'
permlink: power-down
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-08 11:22:09
categories:
- cn
tags:
- cn
- wechat
- cn-programming
- steemit
thumbnail: https://steemitimages.com/DQmW9vE7fZbZiuninvrvzkRaEi4GB7GrbY4Tef2bJ3kYa84/system-2660914_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前的一篇关于公众号的文章，我们希望征集一些意见以及反馈
* [公众号指令整合小实验 / 意见征集](https://steemit.com/cn/@oflyhigh/6yuntu)

![system-2660914_1280.jpg](https://steemitimages.com/DQmW9vE7fZbZiuninvrvzkRaEi4GB7GrbY4Tef2bJ3kYa84/system-2660914_1280.jpg)
(图源：[pixabay](https://pixabay.com))

可惜或许是因为十一长假大家都在玩的缘故，也或许是因为大家对这个兴趣不大，总之响应者寥寥。不过 @deanliu 美女倒是提出了一些很中肯的建议，比如这条：
>1) 加入next power down time, if not then Null

有个这个功能，你就可以用来检查别人是否在Power Down了，当然可以也可以用来查看自己Power Down的STEEM何时到账。

# 增加Power Down信息查询功能

但是单单查询Power Down时间，感觉还欠缺了点什么。
没错，我们可能还关心Power Down的数量。

Power Down 有好几种情况：
* Power Down周期为两年时发起的Power Down 操作
* Power Down 周期为13周时发起的Power Down 操作
* 还有可能是Power Down部分SP而不是全部SP
* 还有可能是Power Down 一段时间后停止，然后再重启Power Down
* 其它情况

这样导致我们无法从钱包内的SP资产直接估算出每次Power Down出来的STEEM数量。

所以除了 @deanliu 美女提出的***Next Power Down Time***外，我额外增加了一个***Next Power Down STEEM***.

为了不增加额外的信息，***只有当被查询的ID 存在Power down操作时，才显示相关内容***。

# 操作示例

#### `@oflyhigh`

以我的账户为例，当前没有Power Down 操作：
![](https://steemitimages.com/DQmNPCyJt9YgRaqUMaCfJm4fvii4WsbfaP9D3mQjoTZ7WFw/image.png)
所以查询结果中是没有Power Down信息的

#### 开始Power Down

让我尝试一下Power Down 功能
![](https://steemitimages.com/DQmTXCydj7W1aHJHqWKEXiEvidQVDfB9F9hG5TsYDWHc7Zs/image.png)

可见现在STEEMIT越来越完善
* 提示锁定的SP(代理出去的)
* 滑块(或直接输入)可选Power Down SP的数量

![](https://steemitimages.com/DQmVqcKbRMwacdfbEBMGYY2eodGxLYDQg3Vv9Cuwr1uuRbF/image.png)
为了便于测试，我选择了13000个STEEM POWER
按提示登陆并确认提交

#### `@oflyhigh`
![](https://steemitimages.com/DQmZ9rFVDAAoUTBeEQAnUi8MXDr1GATtYADHRPe5tyTVmAq/image.png)
再用微信公众号检查一下账户信息

可以看到返回信息中多了Power Down 时间以及Power Down Steem数量部分。
13000分成13周，恰巧是1000个每周。


# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/image.jpg)

# 意见征集

继续征集意见

希望大家积极反馈意见和建议，包括但不限于以下内容：
* 希望增加哪些新功能？
* 用户界面(UI)以及文字表达方面需要哪些改进？
* BUG反馈

我们一起把这个公众号做成steemit的小助手。

- - -

This page is synchronized from the post: [微信公众号增加账户Power Down信息查询](https://steemit.com/@oflyhigh/power-down)
