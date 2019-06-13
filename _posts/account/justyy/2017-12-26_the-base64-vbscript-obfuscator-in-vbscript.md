
---
title: 'The Base64 VBScript Obfuscator in VBScript'
permlink: the-base64-vbscript-obfuscator-in-vbscript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-26 23:34:03
categories:
- utopian-io
tags:
- utopian-io
- vbscript
- obfuscator
- base64
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514331098/n06jclc5bukeogtbu2l3.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Adding more VBScript obfuscation techniques are not just fun but also useful. Previously, the accepted VBScript repro: https://github.com/DoctorLai/VBScript_Obfuscator  has provided two obfuscation methods: the default [Chr](https://isvbscriptdead.com/vbs-obfuscator) and the [ROT47](https://rot47.net), today I have spent some time adding the [BASE64 Obfuscator](https://rot47.net/base64encoder.html).

Here is how it looks like to obfuscate the original VBScript source:

```
msgbox "Hello, @justyy"
```

to the obfuscated source:

```
Function l(a): With CreateObject("Msxml2.DOMDocument").CreateElement("aux"): .DataType = "bin.base64": .Text = a: l = r(.NodeTypedValue): End With: End Function
Function r(b): With CreateObject("ADODB.Stream"): .Type = 1: .Open: .Write b: .Position = 0: .Type = 2: .CharSet = "utf-8": r = .ReadText: .Close:  End With: End function
Execute l("TXNnQm94ICJIZWxsbywgQGp1c3R5eSI=")
```

The github: https://github.com/DoctorLai/VBScript_Obfuscator/blob/master/vbs_obfuscator_base64.vbs
This commit: https://github.com/DoctorLai/VBScript_Obfuscator/commit/caa0591786e49b3933bd0b58040a17da66ff37f4#diff-7f7f2ac63e7c129755a085f80305f3f8

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514331098/n06jclc5bukeogtbu2l3.png)

# Core VBScript obfuscation function
The obfuscation process has been implemented in the following function:

```
Function Obfuscator(vbs)
	Dim s, F1, F2
	s = str_to_base64(vbs)
	F1 = "Function l(a): With CreateObject(" & Chr(34) & "Msxml2.DOMDocument" & Chr(34) & ").CreateElement(" & Chr(34) & "aux" & Chr(34) & "): .DataType = "& Chr(34) & "bin.base64"& Chr(34) & ": .Text = a: l = r(.NodeTypedValue): End With: End Function"
	F2 = "Function r(b): With CreateObject("& Chr(34) & "ADODB.Stream"& Chr(34) & "): .Type = 1: .Open: .Write b: .Position = 0: .Type = 2: .CharSet = "& Chr(34) & "utf-8"& Chr(34) & ": r = .ReadText: .Close:  End With: End function"
	Obfuscator = F1 & vbCrLf & F2 & vbCrLf & "Execute l(" & Chr(34) & (s)& Chr(34) &")" & vbCrLf 
End Function
```

## Proof of Work
`doctorlai` is my github ID and you can see my steemit URL at github profile: https://github.com/DoctorLai/



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/the-base64-vbscript-obfuscator-in-vbscript">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [The Base64 VBScript Obfuscator in VBScript](https://steemit.com/@justyy/the-base64-vbscript-obfuscator-in-vbscript)
