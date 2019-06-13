
---
title: 'Adding VBScript Defuscator'
permlink: adding-vbscript-defuscator
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-08 19:36:18
categories:
- utopian-io
tags:
- utopian-io
- vbscript
- defuscator
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1512761597/z3lec0r0ozxbcpa90axg.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In [VBScript Obfuscator in VBScript](https://utopian.io/utopian-io/@justyy/vbscript-obfuscator-in-vbscript) the simple but yet powerful VBscript obfuscator is written in VBScript. The obfuscator allows you to obfuscate the VBScript source code and still the VBScript can run as expected. If you don't have the original source code,  the process can still be reverted.

The VBScript Defuscator reverts the process. The [defuscator](https://isvbscriptdead.com/vbs-obfuscator/) tries to look for the function keyword `Execute` and evaluate the expression, writes the original clean source code back to the console.

The source code of the VBScript defuscator is as follows, which only works for the specific version of VBScript obfuscator:

```
Option Explicit
Function Defuscator(vbs)
	Dim t
	t = InStr(1, vbs, "Execute", 1)
	t = Mid(vbs, t + Len("Execute")) 
	t = Eval(t)
	Defuscator = t
End Function
Dim fso, i
Const ForReading = 1
Set fso = CreateObject("Scripting.FileSystemObject")
For i = 0 To WScript.Arguments.Count - 1
	Dim FileName
	FileName = WScript.Arguments(i)
	Dim MyFile
	Set MyFile = fso.OpenTextFile(FileName, ForReading)
	Dim vbs
	vbs = MyFile.ReadAll	
	WScript.Echo Defuscator(vbs)
	MyFile.Close
Next
Set fso = Nothing
```

You can revert the process via the following `vbs_defuscator.vbs`

```
cscript.exe vbs_defuscator.vbs sample_defuscated.vbs > sample.vbs
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512761597/z3lec0r0ozxbcpa90axg.png)

# TODO
Adding more complex obfuscation/deobfuscation steps. e.g. add a character map and reference the characters in complicated ways.

# Online VBScript Obfuscator/Defuscator
https://isvbscriptdead.com/vbs-obfuscator/

# Proof of work
doctorlai is my github ID and you can view my profile https://github.com/DoctorLai which has my steemit URL page.

- Commit: https://github.com/DoctorLai/VBScript_Obfuscator/commit/1bde003d20439456ce9acd13f2d5b1fc4a80a8f3



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-vbscript-defuscator">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding VBScript Defuscator](https://steemit.com/@justyy/adding-vbscript-defuscator)
