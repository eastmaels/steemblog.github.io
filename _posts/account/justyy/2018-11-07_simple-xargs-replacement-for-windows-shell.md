
---
title: 'Simple xargs replacement for Windows Shell'
permlink: simple-xargs-replacement-for-windows-shell
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-07 14:43:21
categories:
- busy
tags:
- busy
- programming
- xargs
- windows
- shell
thumbnail: https://ipfs.busy.org/ipfs/QmaNTX8XDMbqgBkwFD6xwuVKUaZJSXeM4kugYYDaRYjEnk
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmaNTX8XDMbqgBkwFD6xwuVKUaZJSXeM4kugYYDaRYjEnk)

`xargs` builds the command from the standard input - however, it is not available for Windows command shell... therefore I 've decided to build one and it turns out a Batch script is enough...

Source: https://github.com/DoctorLai/BatchUtils/blob/master/xargs.cmd
```
@echo off
:: example:   git branch | grep -v "develop" | xargs git branch -D
:: example    xargs -a input.txt echo
:: https://helloacm.com/simple-xargs-batch-implementation-for-windows/
setlocal enabledelayedexpansion

set args=
set file='more'

:: read from file
if "%1" == "-a" (
    if "%2" == "" (
        echo Correct Usage: %0 -a Input.txt command
        goto end
    )
    set file=%2
    shift
    shift
    goto start
)

:: read from stdin
set args=%1
shift

:start
    if [%1] == [] goto start1
    set args=%args% %1
    shift
    goto start

:start1
    for /F "tokens=*" %%a in (!file!) do (
        %args% %%a
    )

:end
```

Building command from standard input:
![image.png](https://ipfs.busy.org/ipfs/QmVdK1EEQM7CVLLecTqzukaWHfsXEmmtwiQ1a8q2UP33ZB)

Building command from text file:
![image.png](https://ipfs.busy.org/ipfs/QmXrm2nGceyQR9YvFVtRexQaxTv3w8nsPfPtchSpfkF2fT)

Reposted to blog: [https://helloacm.com/simple-xargs-batch-implementation-for-windows/](https://helloacm.com/simple-xargs-batch-implementation-for-windows/)


----------------

**Enjoy and Steem On!**

## Delegate to @justyy
@justyy runs a automatic delegation service for nearly a year now. Delegate to @justyy for at least 5 SP and start receiving daily payout as interests (from 8% to 10% APR). Also, as a supporter, the delegators will start to receive complimentary/curation upvotes (as a thank you) per day from e.g @justyy and a few other curation trails. For more information, [read this](https://github.com/DoctorLai/steemit-wechat-group). The voting weight algorithm is [open source](https://steemit.com/busy/@justyy/bank-of-china-implements-a-new-voting-algorithm).

- Delegate to @justyy - [at least 5 SP to join (automatically)](https://steemyy.com/sp-delegate-form/?delegatee=justyy)
- [Undelegate to @justyy (Quit) - SP returned by steem blockchain in 5 days](https://steemyy.com/sp-delegate-form/?delegatee=justyy&amount=0)
- [View Current Delegators/Supporters](https://steemyy.com/delegators/?id=justyy)

![image.png](https://ipfs.busy.org/ipfs/QmSWCpf9CsSeRBd4go8aacNzLNUMVUS6SUjtSSryXb9jab)

> Please note that the SP you enter is the final amount to delegate. For example, if you already delegate 10 SP and you want to delegate another 5 SP, you will need to enter 15 SP (instead of 5 SP) in the delegation form.

##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://anothervps.com/digital-ocean-100-free-credit-during-hacktoberfest/) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)

- - -

This page is synchronized from the post: [Simple xargs replacement for Windows Shell](https://steemit.com/@justyy/simple-xargs-replacement-for-windows-shell)
