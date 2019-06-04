
---
title: '天价费用的消息接收软件 / Test Bitshares Memo Monitor'
permlink: test-bitshares-memo-monitor
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-15 04:03:15
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmNTkhtJgnNGK5WL2ncoXRsHWJfzTzFq2WG2ehUVYBHs2N/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


闲着无聊，合计做一个bitshares的Memo监视功能，应该挺好玩的。比如说，谁给我转了50W BTS，并附加了备注，我一下子就会收到消息。如果再加上声光报警，***语音提示，滴，你收到了一笔50W BTS的转账***，这该多美啊！😍

![](https://steemitimages.com/DQmNTkhtJgnNGK5WL2ncoXRsHWJfzTzFq2WG2ehUVYBHs2N/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 规划

说干就干，初步设想是这样滴：
* 监控bitshares区块链上的转账操作
* 如果转账的接收方是我指定的ID
  * 解密Memo信息
  * ~~发布消息到MQTT代理~~
  * ~~MQTT客户端收到订阅消息后在液晶屏上显示~~
  * ~~MQTT客户端声光报警~~
  * 在屏幕上显示Memo

想来想去，我的MQTT服务器早就被我扔垃圾堆里了，MQTT的客户端的代码我也早忘干净了，那么还是简化一下任务吧，在屏幕一下凑合吧。

# 代码

有了上述思路，以及我们之前的学习，那么代码实现起来是很简单的
一个粗糙无比的代码示例如下：


```
from pprint import pprint

from bitshares import BitShares
from bitshares.blockchain import Blockchain
from bitshares.memo import Memo

account = 'test2018'

bts = BitShares()
chain = Blockchain()

id = bts.rpc.get_account_by_name(account)['id']
print(id)

def get_memo_text(op):
        m = Memo(op['from'], op['to'])
        enc = op['memo']
        plaintext = m.decrypt(enc)
        return plaintext

for operation in chain.stream(opNames=['transfer']):
        if operation['to'] == id:
                print("You got Message")
                msg = get_memo_text(operation)
                from_user =  bts.rpc.get_account(operation['from'])['name']
                print(f"Message from {from_user}: {msg}")
        #pprint(operations)
```
# 测试

下面我们来测试一下上边的代码是否工作。

![](https://steemitimages.com/DQmRTQ8zhaZEiPti5x7wBAdu4NscPBivfWaMjEM597kzkfH/image.png)

接收到的信息如下(后边两条文本)：
![](https://steemitimages.com/DQmQ4j941C8MKGTvq4jFLCfXwNi2imWNmwu4DDxLBLaURsp/image.png)
看起来我的程序是正常工作地。


# 需要改进的地方

* 监控多个用户
* 指定节点以提升处理速度
* 在Blockchain以及Memo类实例中指定bitshares_instance
* 在Blockchain实例中使用head模式，提升响应速度
* 在消息输出中显示时间
* 在消息中输出接收到的资产类型以及数量

如果再加上转账(发消息)功能，这就是一个聊天软件嘛。

# 问题

![](https://steemitimages.com/DQmadFGRoYMVSbJESJnymcsUFdmz6CNmx5x4EupGM1DyFJb/image.png)
(图源 ：[pixabay](https://pixabay.com/))

尽管这个听起来很好玩，但是我不打算再去玩了，也不打算去完善了。为啥？上边截图中显示的转账费用竟然高达0.01759 BTS，按现在BTS 3.51人民币的价格计算，***一条消息竟然需要至少6分钱***！这太奢侈了吧，像我这种话痨，每天聊个几十万条不费劲，姑且算10W条吧，那就是6000多块钱啊。

如果这软件普及了，估计能让大家更深刻地理解***沉默是金***的道理吧。


# 相关链接


* [继续探索python-bitshares的Memo类 / Pub(Alice) * Priv(Bob) = Pub(Bob) * Priv(Alice)](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-memo-pub-alice-priv-bob-pub-bob-priv-alice)
* [python-bitshares 边学边记 (九) / Memo类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-memo)
* [python-bitshares 边学边记 (八) / Blockchain类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-blockchain)

- - -

This page is synchronized from the post: [天价费用的消息接收软件 / Test Bitshares Memo Monitor](https://steemit.com/@oflyhigh/test-bitshares-memo-monitor)
