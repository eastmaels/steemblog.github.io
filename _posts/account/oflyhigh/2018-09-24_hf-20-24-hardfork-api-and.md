
---
title: 'HF 20倒计时24个小时: Hardfork相关查询API & 公众号新功能'
permlink: hf-20-24-hardfork-api-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-24 15:22:42
categories:
- steem
tags:
- steem
- steemdev
- hardfork
- api
- cn
thumbnail: https://cdn.steemitimages.com/DQmZSWYvQZ2Epuc7g58mqMceNWuSCCMiUc7NJKkyjUmr7bR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


距离激动人心的STEEM HF20，还剩仅仅24小时多一点啦。HF 20的时间定为***`UTC时间2018-09-25 15:00:00`***，换算成北京时间则为***`北京时间2018-09-25 23:00:00`***。

特意去了解了一下几个和硬分叉相关的API，并为微信公众号增加了一个小功能。

![](https://cdn.steemitimages.com/DQmZSWYvQZ2Epuc7g58mqMceNWuSCCMiUc7NJKkyjUmr7bR/image.png)

# 查询硬分叉

#### get_next_scheduled_hardfork

硬分叉的时间可以通过：***`get_next_scheduled_hardfork`*** API获得，完整的json代码为：
>`{"jsonrpc": "2.0", "method": "call", "params": ["condenser_api", "get_next_scheduled_hardfork", []], "id": 1}`

返回信息为：
>![](https://cdn.steemitimages.com/DQmYYvrnwKpxVzn2tHwMUC5GWuasp9hZqKSB1Z9UCZJUeEa/image.png)

#### get_hardfork_version

那么如何如何判断硬分叉是否已经发生呢？答案是使用***`get_hardfork_version`***，完整的json代码为：
>`{"jsonrpc": "2.0", "method": "call", "params": ["condenser_api", "get_hardfork_version", []], "id": 1}`

比如现在HF 20分叉还没有发生，调用上述API返回内容如下：
>![](https://cdn.steemitimages.com/DQme6NfW2zQ6mnSo7caHTnomvkQeXMBdqtE8G2kLmSHoNq7/image.png)

如果你有程序或者脚本需要针对HF 20做对应修改的话，可以使用上述API进行判断，并做针对性调整。

#### get_hardfork_properties

另外还有一个API***`get_hardfork_properties`***可以用来查询历次分叉信息。调用JSON为：
>`{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_hardfork_properties", {}], "id": 1}`

返回信息为：
>![](https://cdn.steemitimages.com/DQmXERuBwCBCUEvG5nem7gGmsoUySa3D3vEq4RzQm46Z8GK/image.png)

# 微信公众号新功能

为了方便大家判断，我在公众号的info命令中加入了Hardfork版本判断。加入此功能后，使用***`info`***命令返回信息如下：
![](https://cdn.steemitimages.com/DQmQzCPGgqhAeHmugGP5CrHXtSZFZ4JRZib1KW8tNVz1GVu/image.png)
红色方框内为STEEM区块链当前Hardfork版本号。


#### 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://cdn.steemitimages.com/DQmeb7AmnB3ET3ScfouuMpruURQzwXJJiyfekkrJFEGZgDC/image.png)


----
###### 继续厚颜无耻地求见证人票😀
###### 通过steemconnect
* [点此链接投见证人票给我](https://v2.steemconnect.com/sign/account_witness_vote?approve=1&witness=oflyhigh)
* [点此链接将我设置为投票代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=oflyhigh&approve=1)

###### 通过steemit.com
访问： https://steemit.com/~witnesses 并拉到页面末尾
* 给我投见证人票
![](https://cdn.steemitimages.com/DQmRTvADYG33UkiN2R4xS9N5ryrwNaer35PWj3SAj6rxS6Y/image.png)
* 将我设置为投票代理
![](https://cdn.steemitimages.com/DQmWU46t7erLMrcvwWfCz4Vb9NS1x7HBbPwLWNxf2wcbjte/image.png)

- - -

This page is synchronized from the post: [HF 20倒计时24个小时: Hardfork相关查询API & 公众号新功能](https://steemit.com/@oflyhigh/hf-20-24-hardfork-api-and)
