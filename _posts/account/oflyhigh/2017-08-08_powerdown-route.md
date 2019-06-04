
---
title: '如何查询 PowerDown Route'
permlink: powerdown-route
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-08 11:40:51
categories:
- cn
tags:
- cn
- cn-programming
- route
- api
- steem
thumbnail: https://steemitimages.com/DQmRRHJbz1yoett4WsQDkzKfST6Ex3PCj4bxw9N3PGfnRSk/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中：
* [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/cn/@oflyhigh/steemit-steem)

我提及了一个大家或许不知道的功能***PowerDown Route***，通过这一功能，你可以把一个账户里的SP提现到另外一个账户，也可以选择提现的时候PowerUp到另外一个账户。
![](https://steemitimages.com/DQmRRHJbz1yoett4WsQDkzKfST6Ex3PCj4bxw9N3PGfnRSk/image.png)

当时为了理解这个事，特意拿个测试账户测试了一下，***设置测试号A的PowerDown Route为B***, 然后我今天突然想看一下我设置的***B***是哪个账户，结果尴尬了，在steemd.com 找不到。

steemd.com上只有这个信息： ![](https://steemitimages.com/DQmcGdYMdMaqBvv8YJUonp9Qfsyp4gYeAscJMN9K2MzHKUf/image.png)
如果你从未设置过，那么应该是： ![](https://steemitimages.com/DQmeJTSrXg6hCkFiymSXomEz8qsvQ58foVXPtcQZCRoBKK4/image.png)

好吧，我知道我设置过，但是我设置哪里去了呢？

# API get_withdraw_routes

研究半天发现有一个API
`vector< withdraw_route > get_withdraw_routes( string account, withdraw_route_type type = outgoing )const;`

相关结构体和类型定义：
```
struct withdraw_route
{
   string               from_account;
   string               to_account;
   uint16_t             percent;
   bool                 auto_vest;
};

enum withdraw_route_type
{
   incoming,
   outgoing,
   all
};
```

# curl 测试

有了上述API定义，我们就可以使用curl进行调用了

#### 查询account_a的PowerDown Routes
`curl --data '{"jsonrpc": "2.0", "method": "get_withdraw_routes", "params": ["account_a", 1], "id": 1}' https://steemd.steemit.com`

得出如下结果：
`{"id":1,"result":[{"from_account":"account_a","to_account":"account_b","percent":10000,"auto_vest":false}]}`

#### 查询将account_a设置为PowerDown Route的账户列表
`curl --data '{"jsonrpc": "2.0", "method": "get_withdraw_routes", "params": ["account_a", 0], "id": 1}' 
https://steemd.steemit.com`

查询结果为空：
`{"id":1,"result":[]}`

# steem python 库

直接使用API可以查询账户的PowerDown Route(Incoming, outgoing)
当然也可以自行对API就行封装

庆幸的是， steem python 库已经帮我们做好了封装

#### get_withdraw_routes

```
    def get_withdraw_routes(self, account: str, withdraw_route_type: str):
        """ get_withdraw_routes """
        return self.exec('get_withdraw_routes', account, withdraw_route_type, api='database_api')
```

#### 简单的测试代码
```
from steem import Steem
from pprint import pprint
steem = Steem()
routes = steem.get_withdraw_routes('account_a', 'all')
pprint(routes)
```
#### 结果

```
[{'auto_vest': False,
  'from_account': 'account_a',
  'percent': 10000,
  'to_account': 'account_b'}]
```

# 设置& 取消PowerDown Route

#### 设置
可以使用steem python 库提供的API设置PowerDown Route
`set_withdraw_vesting_route`
详情见代码内注释即可
可以设置N个Routes，并对其分配不同比例，***总量不超过100%***

#### 取消
如果想取消对account_a设置的PowerDown Route
只需将account_a的PowerDown Route 设置为account_b，并将percent设置为0 即可

----

说明： 文中 account_a， account_b 仅为说明问题，非实际账户。

- - -

This page is synchronized from the post: [如何查询 PowerDown Route](https://steemit.com/@oflyhigh/powerdown-route)
