
---
title: '64-bit Tablacus Scripting Control'
permlink: 64-bit-tablacus-scripting-control
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-07 10:58:48
categories:
- utopian-io
tags:
- utopian-io
- scriptingcontrol
- programming
- vbscript
- coding
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1512641502/xovmsgkkzpsynctt5ptb.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Tablacus [Scripting Control](https://helloacm.com/inconsistent-behavior-of-scriptcontrol-64-bit-to-the-msscript-ocx/) is the 64-bit Alternative of `msscript.ocx`. Microsoft does not have and will not plan to make a 64-bit Script Control. The Script Control is a very powerful and easy to use tool when you want to do some scripting in your application. This tutorial will guide you with the basis of the 64-bit Tablacus [Scripting Control](https://helloacm.com/run-as-administrator-in-vbscriptjscript-wsh/).

# Installation & Uninstallation
You can `git clone` the source code and compile to `tsc64.dll` using [Visual Studio](https://helloacm.com/visual-studio-online-a-couple-of-tips/) 2015/2017 compiler. Also, you can directly download the pre-compiled binaries.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512641502/xovmsgkkzpsynctt5ptb.png)

The essence of the Tablacus Scripting Control is the `tsc64.dll` which you need to register as a [COM library](https://helloacm.com/how-to-call-com-object-from-visual-studio-c/). You can throw that file into the `%WINDIR%\System32` (optional) and run the following command using administrator privileges .

```
regsvr32 tsc64.dll
````

On successful registration, it will show the following message indicating `tsc64.dll` has been installed successfully.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512642115/r9omrvaflivorgk7aolr.png)

To remove the script control, you just need to add `/u` parameter for example:

```
regsvr32 /u tsc64.dll
```

# How to Use?
For 32-bit Microsoft Script Control, you create a Scripting Object like this:

```
// JScript
var Obj = new ActiveXObject("MSScriptControl.ScriptControl");
// VBScript
Set Obj = CreateObject("MSScriptControl.ScriptControl")
```

In 64-bit Tablacus Scripting Control, you need to replace with the following:

```
// JScript
var Obj = new ActiveXObject("ScriptControl");
// VBScript
Set Obj = CreateObject("ScriptControl")
```

## Setting Language
After creation of the [Script Control](https://helloacm.com/quick-tutorial-to-64-bit-tablacus-scripting-control/) object, you need to set its language (by default, the `Language` property is empty), if you don't do this, you probably will run into the following error:

```
The operation could not be completed because the script engine has not been initialized to a valid language.
```

You can set to [VBScript](https://justyy.com/archives/3383) via `sc.Language="VBScript"` or `sc.Language="VBS"` or JScript via `sc.Language = 'JScript'` or `sc.Language = 'Javascript'`.  [JScript](https://helloacm.com/how-to-get-the-guid-using-vbscript-or-javascript-jscript-using-scriptlet-typelib/) is the Microsoft Implementation of Javascript.

## AddCode
You then can Add Some code on the fly, for example,

```
Set Obj = CreateObject("ScriptControl")
Obj.Language = "VBScript"
Obj.AddCode "x = 100"
Obj.AddCode "Msgbox x"
```

This will print value of variable `x` which is 100. The `AddCode` will be executed sequentially. However, the variables defined will be scoped locally so you can't get the variable `x` via  `Msgbox x` outside, for example.

## AddObject
You can pass the object into the [script control](https://helloacm.com/running-vbscript-in-ms-scriptcontrol/). This is quite useful as you can pass the UI Object into the script control and the UI can be scripted easily. 

```
Set Obj = CreateObject("ScriptControl")
Obj.Language = "VBScript"
Obj.AddObject "Obj", Obj
Obj.AddCode "Msgbox Obj.Language"
```
In the above example, the ScriptControl `Obj` is passed into the script control so you can run code with this object on the fly.

## Eval
`Eval` is to evaluate some expression, for example,

```
Msgbox Obj.Eval("1+2+3")
```

will output 6. and the assignment symbol will be treated as comparison instead of 'assignment'. The following output `False` instead of setting `x` to 2.

```
Obj.AddCode("x=1")
MsgBox Obj.Eval("x=2")
```

## ExecuteStatement
Similar to `AddCode`, `ExecuteStatement` will be useful to execute a single statement. For example:

```
Obj.AddObject "Obj", Obj
Obj.ExecuteStatement "Msgbox Obj.Language"
```

## Reset
`Reset` is useful to clean the [Script Control](https://helloacm.com/running-vbscript-in-ms-scriptcontrol/) and make a fresh start e.g. clearing the errors and variables. For example:

```
Obj.AddCode("x=1")
Obj.Reset  ' After Reset, x is deleted.
MsgBox Obj.Eval("x=1")
```

# Conclusion
[Scripting Control](https://isvbscriptdead.com) is fun. Tablacus Scripting Control is 64-bit which allows you to add scripting feature e.g. Macros to your application without re-compiling the application.


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/64-bit-tablacus-scripting-control">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [64-bit Tablacus Scripting Control](https://steemit.com/@justyy/64-bit-tablacus-scripting-control)
