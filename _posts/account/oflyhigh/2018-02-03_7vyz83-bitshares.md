
---
title: '更新了一下bitshares节点以及轻钱包'
permlink: 7vyz83-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-03 02:56:09
categories:
- bitshares
tags:
- bitshares
- bts
- cn
- cn-programming
- node
thumbnail: https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


早晨起来看群里说bitshares发布新版本了，修复了一些BUG，并且增加和改进了一些功能，***建议所有节点尽快升级***。

原本想我的节点自己用，用着也还可以，那么就不用费力气升级啦，懒得不得了。但是看里边新增加了一个API***`get_account_history_by_operations`***，看着就挺吸引人的，那就升级一下喽。另外，听官方的建议，总没错的。

![](https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png)

# 升级节点

对这些指令傻傻的不懂，但是我有笨办法啊，重新来一遍好了。

#### 重新编译

```
git clone https://github.com/bitshares/bitshares-core.git
cd bitshares-core
git checkout <LATEST_RELEASE_TAG>
git submodule update --init --recursive
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make witness_node cli_wallet
```

新版本的版本号为[2.0.180202](https://github.com/bitshares/bitshares-core/releases/tag/2.0.180202)，所以`<LATEST_RELEASE_TAG>`处要做对应修改。

#### 重启节点

编译完成后，先停掉原来的winess_node与cli_wallet
将新生成的winess_node与cli_wallet 复制到目标目录，覆盖原有文件。

重启witness_node
`./witness_node --rpc-endpoint "1.2.3.4:8090"`
其中`1.2.3.4`是服务器的IP，如果你只想本地使用，那么替换成`127.0.0.1`即可。

重启witness_node自动开始了replay-blockchain，虽然我没加 --replay-blockchain参数
这个可能和我替换了节点程序有关
![](https://steemitimages.com/DQmPZDGSmKwGwQKa5AMRKcqpMtYZcknaw5yxHaxNnFrB25R/image.png)

等了一个小时replay-blockchain完成了77%，估摸还得至少半个小时，耐心等待好了
这期间，轻钱包只能用其中自带的其它节点喽
![](https://steemitimages.com/DQmaTQwxzDqHJ34Xxj8F38GbZaX4y5CQxUJPpeWB7nbci5H/image.png)

# 轻钱包

顺便看了一下，[轻钱包也有升级](https://github.com/bitshares/bitshares-ui/releases/tag/2.0.180201)，现在每次打开轻钱包，都会看到左下角有类似这样的提示![](https://steemitimages.com/DQmZyPaf5f164e7NAvNBqv9FnvTfRv9HgVsfitZTwUV7R8v/image.png)强迫症表示不把它消掉受不了，那就升一下喽。


下载地址：
https://bitshares.org/download/
https://github.com/bitshares/bitshares-ui/releases/latest

当前最新版本是2.0.180201，因为我用的是Windows，所以下载[BitShares.Setup.2.0.180201.exe](https://github.com/bitshares/bitshares-ui/releases/download/2.0.180201/BitShares.Setup.2.0.180201.exe)就可以啦。

![](https://steemitimages.com/DQmcRciqot1y8e4HFn1uP6xKfBjejjw1FcUCwo9cbm9kBhQ/image.png)
下载完成后直接运行就可以啦，如果当前轻钱包开着，会自动给关掉。

安装完成后自动打开轻钱包，里边的账户啥的还都在，不用重新导入。轻钱包界面上做了一些修改，比原来略顺眼。另外感觉交易界面买单卖单列表中的文字有点巨大，虽然看着清晰，但是我还是喜欢精细优雅点的。

![](https://steemitimages.com/DQmTNX8M1m29uhuWSm4H3qxAcpkNfTjzD2hDhJmLGTbhHfn/image.png)
这上下字号一对比，就觉得不优雅了，希望下一版本改进吧。





# 参考链接

* [尝试编译BitShares Core](https://steemit.com/bitshares/@oflyhigh/bitshares-core)
* [开始同步节点数据](https://steemit.com/bitshares/@oflyhigh/5mqv5m)
* [用上了bitshares轻钱包 + 私有节点](https://steemit.com/bitshares/@oflyhigh/4dbash-bitshares)
* [BTS交易所对接指南（单节点版）by @abit](https://github.com/abitmore/bts-cn-docs/blob/master/BTS%E4%BA%A4%E6%98%93%E6%89%80%E5%AF%B9%E6%8E%A5%E6%8C%87%E5%8D%97%EF%BC%88%E5%8D%95%E8%8A%82%E7%82%B9%E7%89%88%EF%BC%89.txt)
* https://github.com/bitshares/bitshares-core
* https://github.com/bitshares/bitshares-core/releases/tag/2.0.180202
* https://github.com/bitshares/bitshares-ui/releases/tag/2.0.180201

- - -

This page is synchronized from the post: [更新了一下bitshares节点以及轻钱包](https://steemit.com/@oflyhigh/7vyz83-bitshares)
