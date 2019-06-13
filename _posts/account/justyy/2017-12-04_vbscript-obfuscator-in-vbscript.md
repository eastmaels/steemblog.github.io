
---
title: 'VBScript Obfuscator in VBScript'
permlink: vbscript-obfuscator-in-vbscript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-04 15:53:12
categories:
- utopian-io
tags:
- utopian-io
- vbscript
- obfuscator
thumbnail: https://github.com/DoctorLai/VBScript_Obfuscator/raw/master/vbscript-obfuscated-in-vbscript.png?raw=true
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is the VBScript Obfuscator written in VBScript. You can [obfuscate your VBS](https://isvbscriptdead.com/vbs-obfuscator/) source file easily with this command line utility.

Github: https://github.com/DoctorLai/VBScript_Obfuscator
![](https://github.com/DoctorLai/VBScript_Obfuscator/raw/master/vbscript-obfuscated-in-vbscript.png?raw=true)

# How does it work?
The obfuscator will parse each character of your VBS file, and obfuscate it via a random character. The source code is thus obfuscated with concatenation of these characters. 

The obfuscated source can be run with the VBScript function `Execute` but the source code looks pretty obfuscated.

```
Function vbs_obfuscator(n)
	Dim r, k
	r = Round(Rnd() * 10000) + 1
	k = Round(Rnd() * 2) + 1
	Select Case k
		Case 0
			vbs_obfuscator = "CLng(&H" & Hex(r + n) & ")-" & r
		Case 1
			vbs_obfuscator = (n - r) & "+CLng(&H" & Hex(r) & ")"
		Case Else
			vbs_obfuscator = (n * r) & "/CLng(&H" & Hex(r) & ")"
	End Select			
End Function
```

```
Function Obfuscator(vbs)
	Dim length, s, i
	length = Len(vbs)
	s = ""
	For i = 1 To length
		s = s & "chr(" & vbs_obfuscator(Asc(Mid(vbs, i))) + ")&"
	Next
	s = s & "vbCrlf"
	Obfuscator = "Execute " & s
End Function
```

# Passing multiple filenames
You can pass multiple VBScript file names at command line, and the obfuscator will obfuscate each source and print the obfuscated string one by one to the console.

You can also redirect the console to save to new vbs via `cscript.exe vbs_obfuscator.vbs sample.vbs > sample_obfuscated.vbs`

# Proof of work
`doctorlai` is my github ID and you can view my profile https://github.com/DoctorLai  which has my steemit URL page.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/vbscript-obfuscator-in-vbscript">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [VBScript Obfuscator in VBScript](https://steemit.com/@justyy/vbscript-obfuscator-in-vbscript)
