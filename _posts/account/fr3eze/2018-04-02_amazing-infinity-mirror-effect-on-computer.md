
---
title: 'Amazing infinity mirror effect on computer!'
permlink: amazing-infinity-mirror-effect-on-computer
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-02 08:34:57
categories:
- fun
tags:
- fun
- technology
- computer
- cn
- busy
thumbnail: 'https://gateway.ipfs.io/ipfs/QmPEt4YzRxQaVevuGQVoQEaknTfG5RGYukTjRkyaMKVG57'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://gateway.ipfs.io/ipfs/QmPEt4YzRxQaVevuGQVoQEaknTfG5RGYukTjRkyaMKVG57)

Missing my old game so much that I remote login to my home PC from office via TeamViewer for some remote gaming session. While the game itself is running on my home pc VM, it would be good to remote control the VM from office laptop for more direct connection.

This is how I accidentally discovered the secret recipe for forming **Infinite Mirror effect** on computer. Have a look:

![2018-04-02_11-00-49.gif](https://gateway.ipfs.io/ipfs/QmevPdjG5GAMS6WmN3sDDbJ25zwwPPPtMajM5H4qdwscuM)

## How to do this:
Prepare a remote control software like TeamViewer and three computer sessions. We need at least one physical computer and the rest of two can be VM within it. In my case it was:

- `Machine A`: Office laptop
- `Machine B`: Home PC
- `Machine C`: VM inside `Machine C`

From `Machine A` remote login to `Machine B`. From remote session `Machine B`, initiate the VM `Machine C` and start the TeamViewer in it. Lastly, remote login to the 
`Machine A` from `Machine C`.

`Machine A` -> `Machine B` -> `Machine C` -> `Machine A`

![2018-04-02_11-01-40.gif](https://gateway.ipfs.io/ipfs/QmaSDTf1URVgKDdfBg2NFT58rZERqaEk75PZ1SyyBPx14C)

Nice tailing effect caused by the network delay, glad that this infinite loop didn't crash the sessions. Have fun!

---

我们知道把两块镜子面对面放在一起就会产生”无限镜效应“。今天碰巧 发现了如何在电脑上呈现这个效果。首先准备三台电脑（起码要有一台是真实的，另外两个可以虚拟的 VM。），分别为 `A``B` 和 `C`。接下来就简单了，使用远程登入软件例如 TeamViewer 依次登入：

`A` ->`B` -> `C` -> `A`，大功告成！

网路上的延迟造就了长尾延迟效果，相当 amazing 吧！

---

# <center>Take part in the [MoxyOne ICO](https://moxy.one?ref=462f2aa2c5fe6522) now!</center>

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>




- - -

This page is synchronized from the post: ['Amazing infinity mirror effect on computer!'](https://steemit.com/@fr3eze/amazing-infinity-mirror-effect-on-computer)
