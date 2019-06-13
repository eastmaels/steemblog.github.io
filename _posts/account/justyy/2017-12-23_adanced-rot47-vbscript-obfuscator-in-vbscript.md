
---
title: 'Advanced ROT47 VBScript Obfuscator in VBScript'
permlink: adanced-rot47-vbscript-obfuscator-in-vbscript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-23 21:01:09
categories:
- utopian-io
tags:
- utopian-io
- vbs
- vbscript
- obfuscator
- rot47
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514062667/nopo3msbyijbrojdjiti.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the very basic [VBScript obfuscator](https://utopian.io/utopian-io/@justyy/vbscript-obfuscator-in-vbscript) has been accepted by utopian. However, the obfuscated source code is lengthy, which is made up by `chr` functions.

Today, I have added another [VBScript obfuscator](https://isvbscriptdead.com/vbs-obfuscator/) using the [rot47](https://rot47.net) technique. Here is How it looks like for original un-obfuscated VBScript source:

```
MsgBox "Hello, @justyy"
```

And after obfuscation, here is the version that protects itself from an easy glance.

```
Function l(str):Dim i,j,k,r:j=Len(str):r="":For i=1 to j:k=Asc(Mid(str,i,1)):If k>=33 And k<=126 Then:r=r&Chr(33+((k+14)Mod 94)):Else:r=r&Chr(k):End If:Next:l=r:End Function
Execute l("|D8q@I Qw6==@[ o;FDEJJQ")
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514062667/nopo3msbyijbrojdjiti.png)

Similar to previous obfuscator, you can obfuscate the VBS via the command line, for example:

```
cscript.exe vbs_rot47_obfuscator.vbs sample.vbs > sample-obfuscated.vbs
```

# How it works?
The ROT47 is a Caesar cipher by 47 chars. If you apply rot47 on the same string twice, you will get its original version:

```
Function Rot47(str)
	Dim i, j, k, r
	j = Len(str)
	r = ""
	For i = 1 to j
		k = Asc(Mid(str, i, 1))
		If k >= 33 And k <= 126 Then
			r = r & Chr(33 + ((k + 14) Mod 94))
		Else
			r = r & Chr(k)
		End If
	Next
	Rot47 = r
End Function
Function Obfuscator(vbs)
	Dim length, s, i, F
	F = "Function l(str):Dim i,j,k,r:j=Len(str):r=" & Chr(34) & Chr(34) & ":For i=1 to j:k=Asc(Mid(str,i,1)):If k>=33 And k<=126 Then:r=r&Chr(33+((k+14)Mod 94)):Else:r=r&Chr(k):End If:Next:l=r:End Function"
	length = Len(vbs)
	s = ""
	For i = 1 To length
		s = s & Rot47(Mid(vbs, i, 1))
	Next	
	Obfuscator = F & vbCrlf & "Execute l(" & Chr(34) & (s)& Chr(34) &")" & vbCrLf 
End Function
```

Github: https://github.com/DoctorLai/VBScript_Obfuscator
This commit: https://github.com/DoctorLai/VBScript_Obfuscator/commit/3465706f2e27b159a4a8769ca644fdb0a62de963#diff-eee917fa686f483d877fc2b1d9e7e886

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adanced-rot47-vbscript-obfuscator-in-vbscript">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Advanced ROT47 VBScript Obfuscator in VBScript](https://steemit.com/@justyy/adanced-rot47-vbscript-obfuscator-in-vbscript)
