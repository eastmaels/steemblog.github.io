
---
title: '每天进步一点点：Python中使用PycURL访问STEEM RPC'
permlink: python-pycurl-steem-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-14 13:27:03
categories:
- pycurl
tags:
- pycurl
- libcurl
- python
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


在之前的文章中，我们学习在[Python中使用Requests访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-requests-steem-rpc)以及[Python中使用urllib访问STEEM RPC](https://steemit.com/python/@oflyhigh/python-urllib-steem-rpc)，但是还有PycURL没测试过，这岂能罢休，必须继续折腾一下。

![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](bing.com)）

继续拿我们之前的命令为例来学习一下怎么使用PycURL达成：

>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}' https://api.steemit.com`

# PycURL 安装

如果你的Python还没有安装PycURL库，那么使用之前，你需要先安装它，安装命令如下：

` pip install pycurl`

但是，在我这出了如下错误：
>FileNotFoundError: [Errno 2] No such file or directory: 'curl-config'

看了一下好想要先装上`libcurl-dev`

让我试着安装一下：
>`sudo apt-get update`
`sudo apt-get upgrade`
`sudo apt-get libcurl4-openssl-dev`

再执行：` pip install pycurl`，安装成功！

# 使用PycURL访问STEEM RPC 节点

在参考手册中，一个简单的POST示例如下：
```
import pycurl
try:
    # python 3
    from urllib.parse import urlencode
except ImportError:
    # python 2
    from urllib import urlencode

c = pycurl.Curl()
c.setopt(c.URL, 'https://httpbin.org/post')

post_data = {'field': 'value'}
# Form data must be provided already urlencoded.
postfields = urlencode(post_data)
# Sets request method to POST,
# Content-Type header to application/x-www-form-urlencoded
# and data to send in request body.
c.setopt(c.POSTFIELDS, postfields)

c.perform()
c.close()
```

我们将其改写一下，让其能与STEEM RPC 节点交互，示例代码如下：
```
import pycurl
import json
from io import BytesIO

payload = {"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}
rpc = "https://api.steemit.com"
buffer = BytesIO()

c = pycurl.Curl()
c.setopt(c.URL, rpc)
postfields = json.dumps(payload)
c.setopt(c.POSTFIELDS, postfields)
c.setopt(c.WRITEDATA, buffer)
c.perform()
c.close()

body = buffer.getvalue()
print(body.decode('ascii'))
```

执行结果如下：
![](https://steemitimages.com/DQmaLr3qV4hFoxw6h7LST6ANwQM4irGV1PZ5eU5Bs9anuZa/image.png)

# 高级功能

阅读参考手册我们就会发现，PycURL其实就是libcurl的Python封装，比如手册中的介绍就是这么写的
>PycURL is a Python interface to libcurl, the multiprotocol file transfer library.

同样是由于这个原因，它比Requests啥的快好几倍，并且具有诸多特色，详情可以参考文末的参考链接。

我们要想把PycURL灵活运用，除了阅读PycURL手册以外，还需要了解libcurl的API 。比如`setopt(option, value)`其实对应的是libcurl中的[curl_easy_setopt](https://curl.haxx.se/libcurl/c/curl_easy_setopt.html)。

对于我们而言，需求相对简单，对速度和性能啥的没啥过分的要求，没必要使用PycURL。（这是个逃避的好借口啊）

# 总结

PycURL 比urllib和Requests用起来都要复杂。

虽然据说性能会更好一些，但是在我这种半吊子程序员手中，再强大的东西我也会给它用成小白的。所以我果断决定放弃使用PycURL了。

比较下来，还是Requests舒服，以后就用它玩了。嗯，就这样，不折腾了。

# 参考链接

* [PycURL Installation](http://pycurl.io/docs/latest/install.html)
* [PycURL Quick Start](http://pycurl.io/docs/latest/quickstart.html)
* [PycURL – A Python Interface To The cURL library](http://pycurl.io/docs/latest/index.html)
* [The libcurl API ](https://curl.haxx.se/libcurl/c/)

- - -

This page is synchronized from the post: [每天进步一点点：Python中使用PycURL访问STEEM RPC](https://steemit.com/@oflyhigh/python-pycurl-steem-rpc)
