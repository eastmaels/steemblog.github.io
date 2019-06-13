
---
title: 'Introducing the Batch Utility for Windows - mem.cmd 想知道CHROME到底有多占内存么？'
permlink: introducing-the-batch-utility-for-windows-mem-cmd-chrome
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-15 20:16:51
categories:
- programming
tags:
- programming
- cn-programming
- steemstem
- busy
- witness-category
thumbnail: https://ipfs.busy.org/ipfs/QmeFoAm3h6p4h6byNFC2DX9Qf3QDRzHPS1QnvGZx9rE3jn
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I use [HPZ800](https://helloacm.com/review-hpz800-server-workstation-hp-z800-workstation-desktop-pc-tower-computer-powerhouse-2x-intel-xeon-x5650-48gb-ddr3-memory-2tb-hdd-1gb-nvidia-quadro/) server at home, which is almost never turned off or restarted. And I see this today:
> 我家里用的是[HPZ800](https://justyy.com/archives/2380)的服务器，所以长年不关机不重启，今天我看了CHROME好吃内存：

![image.png](https://ipfs.busy.org/ipfs/QmeFoAm3h6p4h6byNFC2DX9Qf3QDRzHPS1QnvGZx9rE3jn)

And the Proceses Tab  gives you rough idea how big memory is consumed by [Chrome.exe](https://helloacm.com/the-chromebookmark-cryptocurrency-lookup-tool-in-javascript/)
> 在 Processes 页，操作系统列出了每个程序的吃内存情况，我们可以看到[CHROME](https://justyy.com/archives/5876)很吃内存。

![image.png](https://ipfs.busy.org/ipfs/QmfKNusCNaDzg8jEtac9QNrh4U14LkbNJxU4s8n5NcQ9kW)

However, I'd like to have a command line/tool that prints the memory usage for a given application. 
> 然而，我想着写一个小命令行工具，练练手。

[Github](https://github.com/DoctorLai/BatchUtils/blob/master/mem.cmd):

```
@echo off
REM Calculate Total Memory Consumption for a Process

setlocal enabledelayedexpansion
set prog=%1

if [%1]==[] (
  echo Usage: %0 Process
  goto end
)
set sum=0
@for /F "tokens=5" %%i in ('tasklist ^| grep !prog!') do (
	set mem=%%i
	set mem=!mem:,=!
	set /a sum=sum+!mem!
)

echo Total Memory for !prog! is !sum! K
set /a sum=sum/1024
echo Total Memory for !prog! is !sum! MB
set /a sum=sum/1024
echo Total Memory for !prog! is !sum! GB

:end
```

The idea is to use `for /f` in windows command line shell that will split the lines by default delimiter space and with `tokens=5` that will extract the memory usage for that process.
> 原理就是用 `for /f` 来对每一行的输出进行字符串分割，`tokens=5` 会只选择第五列，也就是内存用量。

And we can use `!variable:,=!` to remove the `,` from the numbers and use `set /a` do sum up the number strings. However, you need to `setlocal enabledelayedexpansion` to allow variables updated at runtime (instead of pre-interpreted)
> 我们需要用  `!variable:,=!` 来把数字中的逗号去掉，然后用 `set /a` 来进行数字叠加，最后面我们需要启用 `setlocal enabledelayedexpansion` 在WINDOWS[批处理](https://justyy.com/archives/2492)中开启变量支持 - 否则变量只会在批处理启动的时候替换一次。

However, at Linux, you wouldn't need this at all, because you can use `wc`,  [awk](https://helloacm.com/awk-tutorial-when-are-you-expected-to-produce-your-next-witness-block-steemit/), `cut` etc existing tools to achieve the same task by piping these commands one by one i.e. Where there is a shell, there is a way!
> 在LINUX下我们就不需要这么麻烦了，因为已经有很多现成好用的工具，比如 `wc`, [awk](https://justyy.com/archives/6111), `cut` 这些命令可以通过管道来完成同样的任务。

![image.png](https://ipfs.busy.org/ipfs/QmTduNvYfPSY8dEuFmZ2KucayFMCW4qETxRkdcFu73zcRX)

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

Reposted to: https://helloacm.com/introducing-the-batch-utility-for-windows-mem-cmd/

> ## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
> 1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
> 2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).
> 谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
> ## 股东工具
> 1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
> 2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)
> 请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

博文刚刚同步到了：https://justyy.com/archives/6413

- - -

This page is synchronized from the post: [Introducing the Batch Utility for Windows - mem.cmd 想知道CHROME到底有多占内存么？](https://steemit.com/@justyy/introducing-the-batch-utility-for-windows-mem-cmd-chrome)
