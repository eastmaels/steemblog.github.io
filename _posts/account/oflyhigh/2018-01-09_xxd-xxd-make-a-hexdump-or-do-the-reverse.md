
---
title: 'xxd 命令学习笔记 / xxd - make a hexdump or do the reverse.'
permlink: xxd-xxd-make-a-hexdump-or-do-the-reverse
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-09 13:22:33
categories:
- xxd
tags:
- xxd
- cn-programming
- study
- hexdump
- cn
thumbnail: https://steemitimages.com/DQmQcsmEuVok31FvayWbGn4XFiNKfftSEQVT8WZ5FsSNxHZ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天工作的时候遇到一个命令:***`xxd`***，说来惭愧，虽然曾在Linux系统下工作了好多年，但是这个命令我却真的是第一次看到。为了搞明白这个命令，我对着man手册做了一些测试，我将学到的东西记录到这里，一则方便自己以后查找，二则希望给和我一样第一次遇到这个命令一头雾水的朋友一些参考。

![](https://steemitimages.com/DQmQcsmEuVok31FvayWbGn4XFiNKfftSEQVT8WZ5FsSNxHZ/image.png)
(图源 ：[pixabay](https://pixabay.com))

# xxd的使用

对于给定的文件或者标准输入，以十六进制显示其内容，或者反过来转换

为了演示xxd的使用，我创建了一个简单的文本文件***`hello.txt`***:
`Hello World, I am oflyhigh!`
`xxd - make a hexdump or do the reverse.`

#### 不带参数的xxd命令
`xxd hello.txt`
![](https://steemitimages.com/DQmWEjFeydZwHNAVg8fNvuhfTxv2xh8QmJQY2W6keV6PPag/image.png)
通过对比输出内容，我们的出结论：
不带参数的xxd命令，以16进制形式输出文件内容，前边是地址，数据2个字节一组，每行显示8组，后边显示对应的文本内容。

#### `-g` 分组参数
通过分组参数，我们可以指定多少个字节为一组，默认为2。
`xxd -g 1 hello.txt`
![](https://steemitimages.com/DQmcwDTfGn88EJKGMdSYF5f3DpAWr4kwdoYpYuAEUuC1poo/image.png)


#### `-c` 列参数
通过 `-c` 参数，我们可以指定每列显示几个字节
`xxd -g 1 -c 8 hello.txt`
![](https://steemitimages.com/DQmWP3tDyEfCRQpmwN8wUjB7tpbu2aKSg6fX2nYhRA2FQaw/image.png)

#### `-b` 二进制形式显示
通过 `-b` 参数，我们可以指定以二进制形式显示内容
`xxd -b -g 1 -c 6 hello.txt`
![](https://steemitimages.com/DQmWzkrr1V5YoFhVNyhzTJ3fwb4NnSJTjhHVbsXFA5xC1Uy/image.png)

#### `-i` 参数，生成C语言格式的数组
通过`-i` 参数，我们生成C语言格式的数组，同时可以通过`-c`参数控制格式
`xxd -i -c 10 hello.txt`
![](https://steemitimages.com/DQmX1DjqxS2uNAZSQaMEvANdohMHhk7R36JWCRJ3XmMyXPz/image.png)

#### `-l` 参数，指定长度
通过`-l` 参数，我们指定要处理的内容长度(字节数)
`xxd -l 24 -g 1 -c 12 hello.txt`
![](https://steemitimages.com/DQmaoCrojiwhJB1zVmFbnKfuU2RaaRShmQwMhRUfAz1KASE/image.png)

#### `-p` 参数，纯HEX转储
通过`-p` 参数，我们输出内容的纯HEX显示
`xxd -p -l 24 -c 12 hello.txt`
![](https://steemitimages.com/DQmdTcFw1gvTUN9jqcUGYT7YtjJNsKkWX6yMDjedsoBbHiT/image.png)

#### ` -s [+][-]seek` 搜索功能
我们通过` -s [+][-]seek`来实现从文件首尾指定开始长度的功能
 `xxd -g 1 hello.txt`
![](https://steemitimages.com/DQmNZAJmt2YtefCougPSEJ3AR2n1iMiPLBSvuQu9Uv4UEFK/image.png)
` xxd -s 0x10 -g 1 hello.txt`
![](https://steemitimages.com/DQmUD5rkcxeZxtvHvviY5iBvemzprQRC6gVS8Jdm8sRmZGC/image.png)

#### ` -r` 参数
通过 ` -r` 参数，可以将类似这样输出，转出成普通文件
![](https://steemitimages.com/DQmUD5rkcxeZxtvHvviY5iBvemzprQRC6gVS8Jdm8sRmZGC/image.png)

比如我们将上述例子中的输出存储到文件
`xxd -s 0x10 -g 1 hello.txt > example.txt`

打开这个文件，可以发现文件中包含如下文本：
```
0000010: 6d 20 6f 66 6c 79 68 69 67 68 21 0a 78 78 64 20  m oflyhigh!.xxd
0000020: 2d 20 6d 61 6b 65 20 61 20 68 65 78 64 75 6d 70  - make a hexdump
0000030: 20 6f 72 20 64 6f 20 74 68 65 20 72 65 76 65 72   or do the rever
0000040: 73 65 2e 0a                                      se..
```

`xxd -r example.txt`
![](https://steemitimages.com/DQmUVAZfMY26P8WhLqJ2YRLCnjw5x4ahdKN2GGeMnebRsQm/image.png)
是不是非常神奇？

# 用途

通过上述介绍，我们应该想到xxd有很多用途啦。

不过一个重要的用途就是***十六进制编辑***，比如上述介绍的最后一条，我们可以编辑生成的十六进制的文本文件，再通过`xxd -r`保存成文件，这样就达到了十六进制编辑的目的。

***地址编辑***，我们还可以通过编辑上述文件中的地址，达到在指定地址写入指定内容的目的。

***文件截取***，在学习`-r`参数时，我组合出下列一条指令，猜猜它干什么用的？
`xxd -s 0x10 -g 1 hello.txt | xxd -r -seek -0x10 >1.txt`

# 更多内容

想了解关于***xxd***的更多内容，请输入***`man xxd`***

- - -

This page is synchronized from the post: [xxd 命令学习笔记 / xxd - make a hexdump or do the reverse.](https://steemit.com/@oflyhigh/xxd-xxd-make-a-hexdump-or-do-the-reverse)
