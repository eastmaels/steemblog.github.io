
---
title: 'Inconsistent behavior of ScriptControl 64-bit to the msscript.ocx'
permlink: inconsistent-behavior-of-scriptcontrol-64-bit-to-the-msscript-ocx
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-29 15:24:00
categories:
- utopian-io
tags:
- utopian-io
- scriptcontrol
- msscript
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1511968951/bsijrxfqzj0amcjj7odt.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Microsoft provides a 32-bit `msscript.ocx` which allows you to easily do some scripting inside your application, however, they do not have an official 64-bit version of ScriptControl and they are not planning to make one.

64-bit computing and applications are gradually accepted and in an increasing demand recent years. I found [tablacus/TablacusScriptControl](https://github.com/tablacus/TablacusScriptControl)  is a very good alternative that provides the 64-bit Scripting Control and I use it quite a lot in my applications.

As one can imagine, nowadays, usually the same source code can be compiled to both 32-bit and 64-bit, therefore, we have to make sure the behavior has to stay consistent in either mode. The [behavior is somewhat different](https://helloacm.com/inconsistent-behavior-of-scriptcontrol-64-bit-to-the-msscript-ocx/) between the 64-bit ScriptControl and the Microsoft's 32-bit `msscript.ocx`.

# How to reproduce?
create two [vbs](https://isvbscriptdead.com/) files, with the 32-bit version:

```
Dim SC
Set SC = CreateObject("MSScriptControl.ScriptControl")

SC.Reset 
WScript.Echo SC.Language
```

and 64-bit version:

```
Dim SC
Set SC = CreateObject("ScriptControl")

SC.Reset 
WScript.Echo SC.Language
```

If you run both, you will see the 32-bit version throws:

```
ScriptControl (4, 1) : The operation could not be completed because the script engine has not been initialized to a valid language.
```

but the 64-bit ScriptControl silently swallows the error.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1511968951/bsijrxfqzj0amcjj7odt.png)






<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/inconsistent-behavior-of-scriptcontrol-64-bit-to-the-msscript-ocx">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Inconsistent behavior of ScriptControl 64-bit to the msscript.ocx](https://steemit.com/@justyy/inconsistent-behavior-of-scriptcontrol-64-bit-to-the-msscript-ocx)
