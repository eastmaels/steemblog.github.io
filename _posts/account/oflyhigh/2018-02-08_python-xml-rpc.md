
---
title: '每天进步一点点：在Python 中使用 XML RPC'
permlink: python-xml-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-08 13:34:00
categories:
- python
tags:
- python
- xml
- rpc
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


Steem和Bitshares都支持RPC，也就是远程过程调用(Remote Procedure Call)，这东西要我给出个正式的定义有点难，总之我理解就是通过RPC可以像调用本地函数一样使用远程服务的一些函数，来实现很多功能。


![](https://steemitimages.com/DQmXQzDMbiUMFVUWX8A9qodarzSPfjvgJH9NufV46enHncb/image.png)
（图源：[bing.com](bing.com)）


steem和bitshares都支持JSON PRC，在之前的文章中我没少和大家一起探讨，感兴趣的可以去翻翻。今天我来介绍一个Python自带的XML RPC库，来了解一下这东西咋玩。

# Python 2.X

在Python 2.X里使用***SimpleXMLRPCServer***很简单，举一个简单的例子：

#### xmlrpc_server.py2
```
from SimpleXMLRPCServer import SimpleXMLRPCServer

def hello():
        return "Hello World!"

server = SimpleXMLRPCServer(("localhost", 8001))
server.register_function(hello)
server.serve_forever()
```
#### xmlrpc_client.py2

```
import xmlrpclib
client = xmlrpclib.ServerProxy("http://localhost:8001")
print client.hello()
```

#### 运行 & 结果

首先启动server
`python2 xmlrpc_server.py2`

然后我们在另外的终端中运行client
`python2 xmlrpc_client.py2`

在server所在终端会显示类似如下信息：
>`127.0.0.1 - - [08/Feb/2018 20:45:54] "POST /RPC2 HTTP/1.1" 200 -`

在client所在终端，我们会得出结果：
>`Hello World!`


# Python 3.X

在Python 3中，xmlrpclib被移到xmlrpc.client, SimpleXMLRPCServer被移到xmlrpc.server，所以上述代码要略作修改。

#### xmlrpc_server.py
```
from xmlrpc.server import SimpleXMLRPCServer

def hello():
        return "Hello World!"

server = SimpleXMLRPCServer(("localhost", 8001))
server.register_function(hello)
server.serve_forever()
```

#### xmlrpc_client.py
```
import xmlrpc.client
client = xmlrpc.client.ServerProxy("http://localhost:8001")
print(client.hello())
```

#### 运行 & 结果

首先启动server
`python3 xmlrpc_server.py`

然后我们在另外的终端中运行client
`python3 xmlrpc_client.py`

在server所在终端会显示类似如下信息：
>`127.0.0.1 - - [08/Feb/2018 21:06:14] "POST /RPC2 HTTP/1.1" 200 -`

在client所在终端，我们会得出结果：
>`Hello World!`

# 结论

在Python中使用XML RPC还是很简单的，当然了，还有一些较高深的使用方式以及出错处理等，可以去参考手册了解更多，本文就不再赘述了。

另外尽管XML RPC很方便，我还是倾向于使用JSON RPC，回头在和大家分享一下Python里JSON RPC的库吧。

# 参考链接

* https://docs.python.org/2/library/xmlrpclib.html
* https://docs.python.org/3/library/xmlrpc.html

- - -

This page is synchronized from the post: [每天进步一点点：在Python 中使用 XML RPC](https://steemit.com/@oflyhigh/python-xml-rpc)
