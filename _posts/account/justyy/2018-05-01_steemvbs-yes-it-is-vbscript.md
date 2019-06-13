
---
title: 'SteemVBS - Yes, It is VBScript'
permlink: steemvbs-yes-it-is-vbscript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-01 00:56:09
categories:
- utopian-io
tags:
- utopian-io
- steemdev
- steemstem
- programming
- steem
thumbnail: https://cdn.utopian.io/posts/5c7652368a6cfcb07b0f06ad7fad14f184c6image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


SteemVBS is the first Steem Library written in VBScript. Yes, it is VBScript. ;)

## Why VBS?
VBScript is my favorite. [It is not dead](https://isvbscriptdead.com/). VBScript comes with almost every Windows since Win98. With COM support, the language is neat and can do almost anything.

Steem library has been ported to many high-level and modern languages e.g. Steem-Python, Steem-JS. Nowadays, the VBScript is still being used by many network administrators on Windows. SteemVBS aims to provide a easy interface to Steem Blockchain using VBScript.

However, Coding in VBScript may be sometimes quite tricky considering VBScript lacks of modern features (the last update was a bug fix almost 20 years ago).

## SteemVBS 
Fully open source: https://github.com/DoctorLai/steemvbs
Submit PR or Issue.

## Examples
Currently, what [SteemVBS](https://helloacm.com/steemvbs-yes-it-is-vbscript/) does is quite limited, except getting the account information.

Class `Steem` is declared in `lib\steem.vbs` and you can do something like this

```
Dim SteemIt
Set SteemIt = (New Steem)("https://rpc.steemviz.com")

WScript.Echo SteemIt.Node
SteemIt.Node = "https://api.steemit.com"
WScript.Echo SteemIt.Node

Dim Account
Set Account = SteemIt.GetAccount("justyy")
WScript.Echo Account("voting_power")
```

To run the example:

```
cscript.exe /Nologo steem.wsf examples\account.vbs
```

![image.png](https://cdn.utopian.io/posts/5c7652368a6cfcb07b0f06ad7fad14f184c6image.png)

## Unit Tests
[VBScript Unit tests](https://helloacm.com/writing-unit-tests-in-vbscript/) can be run via:

```
cscript.exe /Nologo tests.wsf tests\test_account.vbs
```

## Roadmap
Most of the features of Steem-Js and Steem-Python will be brought in.

## Notice
This library is under development. Beware.

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [SteemVBS - Yes, It is VBScript](https://steemit.com/@justyy/steemvbs-yes-it-is-vbscript)
