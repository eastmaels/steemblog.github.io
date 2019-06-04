
---
title: '测试了一下bitshares新API: get_account_history_by_operations (cli_wallet & rpc)'
permlink: bitshares-api-getaccounthistorybyoperations-cliwallet-and-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-04 14:47:12
categories:
- bitshares
tags:
- bitshares
- api
- rpc
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前[更新了一下bitshares节点以及轻钱包](https://steemit.com/bitshares/@oflyhigh/7vyz83-bitshares)文章中，我们提到了除了修复了一些BUG以外，还增加了一些新功能，比如说新的API: ***`get_account_history_by_operations`***。但是光知道有新的API，不去用一下肯定是不行的，至少也要测试一下嘛。

![](https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png)

# cli_wallet  中测试

首先cli_wallet连接到节点上
`./cli_wallet -w mywallet -s ws://127.0.0.1:8090`

其中：
`-w mywallet` 指定钱包文件
`-s ws://127.0.0.1:8090` 指定rpc节点

首次连接钱包会提示设置密码：
>`Please use the set_password method to initialize a new wallet before continuing`

`set_password passwd`
在提示符后边输入上述指令，设置密码(请使用复杂密码，上述示例仅供参考)

输入`help`可以查看指令列表。

其中***`get_account_history_by_operations`***说明如下：
> `account_history_operation_detail get_account_history_by_operations(string name, vector<uint16_t> operation_types, uint32_t start, int limit)`


按照这个说明，我们的指令应该是这个样子：
`get_account_history_by_operations oflyhigh [] 1 10`
可惜返回如下内容：
![](https://steemitimages.com/DQmdXuXZUy6oyxinAXQghvYDThDyL41ZSgC1DLzk1E4KcZB/image.png)

我想了一下，可能和我节点***`account_history插件`***只开通两天有关，也就是两天之前的操作都找不到。

随便去bts浏览器那找了或比较活跃的账户，比如这个demo.btsbots
![](https://steemitimages.com/DQmYLrNDSu2zmXttwNFd5jpRzFaryzKi4tVHiJyJM72PyWB/image.png)

我们也可以指定操作类型列表来只提取我们感兴趣的操作类型
![](https://steemitimages.com/DQmPGKT7BYgtVyeku9c6TJcq5zc4mNZ46X5rmrphjw71gPQ/image.png)

# curl 直接访问RPC节点


钱包操作，相当于钱包程序直接帮你封装了对RPC节点的访问，那么我们是否可以直接访问RPC节点呢？答案是可以的。

在使用之前，我们依旧首先看看它是如何被定义的
![](https://steemitimages.com/DQmXrcWE9fsAhDGX2unoGXbB2xNHFiUgmfo19PJUrGaD3jZ/image.png)
>`history_operation_detail history_api::get_account_history_by_operations(account_id_type account, vector<uint16_t> operation_types, uint32_t start, unsigned limit)`

和钱包中定义比较相似，但是需要注意的是***第一个参数是account_id_type而不是用户名***，我传入用户名一直出错。

还是用上边的用户作为例子，我们首先用公众号获取***用户id***
![](https://steemitimages.com/DQmbGv195pe7kx4ZCSVjDGsKy1e9b99AYB2gmJGvzb2MkTB/image.png)

我们组合成下列CURL调用：
`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["history", "get_account_history_by_operations", ["1.2.36449", [], 1, 10]], "id": 1}' http://127.0.0.1:8090/rpc`


![](https://steemitimages.com/DQmee9EdswRPbTkqzQbo2N8FdoMe4MTjrWijGyYeh4VAus2/image.png)
然而这是什么鬼？为什么没有数据呢？

仔细研究了一下钱包实现，原来这个***`uint32_t start`***参数也大有说道，这玩意不是我想象的从1开始，而是需要知道具体的id，那么咋知道呢？这就略复杂了

#### 用户统计数据对象

首先要找到用户统计数据对象，我们知道了用户ID，可以用***`get_accounts`***或者***`get_objects`***获取。

比如：
`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["database", "get_accounts", [["1.2.36449"]]], "id": 1}' http://127.0.0.1:8090/rpc`

其中统计对象为：
![](https://steemitimages.com/DQmeUfkjhRqhWuRm8v6NsZ8iW54PsHRz4xmU5PDTa7yCC4T/image.png)

#### 读取统计对象

`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database", "get_objects", [["2.6.36449"]]], "id": 1}' http://127.0.0.1:8090/rpc`

![](https://steemitimages.com/DQmVkP1AN8iZumzk4knaQJ2ch5p8ACp1AkinQXLeXgp5weF/image.png)

好了，这里边有一个`removed_ops`以及`total_ops`
***(注：和节点相关，不同节点上这个数值有所差异）***

简单的来讲，已经`removed`的`ops`我们是读取不到的，我们只能读取`total_ops`与`removed_ops`之间的数据。

所以我们可以构造下列指令
`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["history", "get_account_history_by_operations", ["1.2.36449", [], 29650, 5]], "id": 1}' http://127.0.0.1:8090/rpc`

读取最近五条记录，返回结果有点多，并且没有返回txid
![](https://steemitimages.com/DQmaigjJrsWJpbkULFCL6paxzCaBDcoBuzDo7pbqnrFQFsj/image.png)

也就是说txid是cli_wallet中给生成的，看了一下代码，果然如此
![](https://steemitimages.com/DQmdNwSeQdinCodnE19SHS3KPo6xbyqs2B6RaKwdXD3FySP/image.png)

# 结论

原本以为很简单的API，如果使用RPC节点访问，还真的很复杂呢。不过一番探索下来，也了解了不少东西。回头看看能不能做个简单的脚本来使用这个API。想必应该很好玩。


# 参考链接

* [更新了一下bitshares节点以及轻钱包](https://steemit.com/bitshares/@oflyhigh/7vyz83-bitshares)
* https://github.com/bitshares/bitshares-core/releases/tag/2.0.180202
* https://github.com/bitshares/bitshares-core/pull/430

- - -

This page is synchronized from the post: [测试了一下bitshares新API: get_account_history_by_operations (cli_wallet & rpc)](https://steemit.com/@oflyhigh/bitshares-api-getaccounthistorybyoperations-cliwallet-and-rpc)
