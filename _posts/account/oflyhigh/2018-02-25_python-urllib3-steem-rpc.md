
---
title: '每天进步一点点：Python中使用urllib3访问STEEM RPC'
permlink: python-urllib3-steem-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-25 13:33:09
categories:
- python
tags:
- python
- urllib3
- steem
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


在之前的文章中，我们学习在[Python中使用Requests访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-requests-steem-rpc)、[Python中使用urllib访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-urllib-steem-rpc)、[Python中使用PycURL访问STEEM RPC](https://steemit.com/pycurl/@oflyhigh/python-pycurl-steem-rpc)，原本这三把板斧足够我用了，但是阅读好些代码都是用的urllib3，所以拿来试试啦。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](https://bing.com)）

# 介绍

urllib3是一个强大的、健全友好的Python HTTP客户端，包括requests、pip在内的很多Python生态系统都使用了urllib3。

urllib3具有如下特性：
* 线程安全
* 连接池
* 客户端SSL/TLS校验
* 多部分编码文件上传
* 请求重试以及HTTP重定向
* gzip以及deflate编码
* HTTP以及SOCKS代理
* 100%测试覆盖


# 安装

urllib3是第三方的库，所以使用之前需要先安装。

pip安装的指令为：
`pip install urllib3`

因为我安装过requests，所以会提示我已经安装啦。

# 代码

继续拿我们之前的命令为例来学习：

>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}' https://api.steemit.com`

使用urllib3改写后的简单代码为：
```
import urllib3
import json

payload = {"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}
rpc = "https://api.steemit.com"

http = urllib3.PoolManager()
r = http.request('POST', rpc, body=json.dumps(payload).encode('utf-8'))
print(r.data.decode('utf-8'))
```

# 结果

执行结果为：
>`InsecureRequestWarning: Unverified HTTPS request is being made. Adding certificate verification is strongly advised. See: https://urllib3.readthedocs.io/en/latest/advanced-usage.html#ssl-warnings
  InsecureRequestWarning)
{"id":1,"result":[["oflyhigh"]]}`

加上这样一句就好啦
`urllib3.disable_warnings()`
![](https://steemitimages.com/DQmWxUdaVa77QNb3WRXooSitp7dyTipXUhwFZos1sfgUm4v/image.png)

但是实际使用中，不校验证书是不安全、不被提倡的做法。如何校验证书，将在其它文章中另行阐述。


# 高级功能

类似keep-alive等高级功能可以通过在构建urllib3.PoolManager类实例时通过参数指定。

\********************************************************
比如Keep-Alive功能，需要在上述代码中加入如下内容：
```
from urllib3.connection import HTTPConnection
socket_options = HTTPConnection.default_socket_options + \
[(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1), ]
http = urllib3.poolmanager.PoolManager(socket_options=socket_options)
```
\*********************************************************
***注：这段代码我理解有误，并非用于实现Keep-Alive功能***


更多功能和详情，参考用户手册吧。

# 参考链接
* https://urllib3.readthedocs.io/en/latest/index.html
* [每天进步一点点：Python中使用PycURL访问STEEM RPC](https://steemit.com/pycurl/@oflyhigh/python-pycurl-steem-rpc)
* [每天进步一点点：Python中使用urllib访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-urllib-steem-rpc)
* [每天进步一点点：Python中使用Requests访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-requests-steem-rpc)

- - -

This page is synchronized from the post: [每天进步一点点：Python中使用urllib3访问STEEM RPC](https://steemit.com/@oflyhigh/python-urllib3-steem-rpc)
