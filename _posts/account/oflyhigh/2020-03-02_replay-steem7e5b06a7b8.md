
---
title: '再也不敢瞎折腾啦：replay STEEM遇到怪问题'
permlink: replay-steem7e5b06a7b8
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-02 03:03:51
categories:
- cn
tags:
- cn
- witness-category
- witness
- steem
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmY7P97QWUaMtvHcyptfXGXDxBLjAJiAP3VD2WoGh1YoD1/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



昨晚在尝试在备机上replay STEEM，等了好久也不见响应，想想可能是反应迟钝，按着以往的经验，4-6个小时肯定会replay完成，于是就放到一旁忙其它事情去了。

![image.png](https://cdn.steemitimages.com/DQmY7P97QWUaMtvHcyptfXGXDxBLjAJiAP3VD2WoGh1YoD1/image.png)
(图源 ：[pixabay](https://pixabay.com/))

结果消停了三两个小时，还没等我去看replay是否完成呢，我用于监控另外一个程序的报警器就开始嗷嗷报警了。

登录主机，看了一眼，并没有搞明白发生了什么事情，然后打算看一样另外那个程序的配置文件，发现打开文件时出现如下提示：
>`"E297: Write error in swap file"`

啥？明明就是打开个小文件，咋还用到swap file了，百度一下，说这种出现这类错误有可能是硬盘满了，然后看了一下，果然硬盘占用已经达到100%。

想想我就操作STEEM了，过去一看，果然罪魁祸首在这呢：
>![image.png](https://cdn.steemitimages.com/DQmZi2xKfN9ncromL6ypFXwjRi23RMiftbegpQMBKtrQapH/image.png)

可是这个问题咋引起的呢？难道是因为Soft fork 0.22.2？我换用0.22.1 replay 问题依旧，***block_log.index，不讲道理地迅速增长***。
>![image.png](https://cdn.steemitimages.com/DQmaEbAd3sufTVkzZucySseBK5UJoX9DW9c6s6cu1aMnz18/image.png)

为此我又尝试了清除block_log.index & shared_memory.bin， 也尝试重启VPS，问题依旧，这就让我有些抓狂了。

于是在群里向@ety001 以及 @abit请教，均判断可能是block_log 文件损坏，@ety001 还提供了 @someguy123 提供的一个block_log下载链接。
>`: ${BC_RSYNC="rsync://files.privex.io/steem/block_log"}`

确定了问题所在，剩余的事情就简单了，我用truncate把文件尾剪裁掉一部分
>`truncate -s 245G block_log`

(咳咳，手抖，裁多了，裁了约10G，其实裁掉1-2G就够用了。（让文件比rsync://files.privex.io/steem/block_log block_log这个小即可）

用rsync同步一下文件：
>`rsync -av --progress --append rsync://files.privex.io/steem/block_log block_log`

之所以没用`--append-verify`而使用`--append`，因为我觉得我网络挺好的，不用校验。

弄完之后，再replay，终于出现熟悉的画面：
>![image.png](https://cdn.steemitimages.com/DQmUKjg97XkUvdpYhXpPMMuGEP1HQP3VoTuP12ubMRGqLEj/image.png)

早晨起床看，已经恢复了正常：
>![image.png](https://cdn.steemitimages.com/DQmX43q8Z6LrnN2TzWGNM7mBZ9HMc1ey5XKGp5tPtK1mzRu/image.png)


这个折腾劲啊，不过总算折腾好了，让我热泪满眶，下次再也不敢瞎折腾了。


# 相关链接
* https://github.com/Someguy123/steem-docker/blob/master/run.sh#L40

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['再也不敢瞎折腾啦：replay STEEM遇到怪问题'](https://steemit.com/@oflyhigh/replay-steem7e5b06a7b8)
