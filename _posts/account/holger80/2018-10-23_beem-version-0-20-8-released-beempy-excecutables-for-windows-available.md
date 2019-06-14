
---
title: 'beem version 0.20.9 released - beempy excecutables for windows available'
permlink: beem-version-0-20-8-released-beempy-excecutables-for-windows-available
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-23 12:47:42
categories:
- steemtank
tags:
- steemtank
- steemdev
- beem
- python
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem ([beem discord channel](https://discord.gg/4HM592V))

The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```
### Changelog for release 0.20.8
* fix hardfork property in steem
* Fix resource_market_bytes calculation
* Adding additional parameter to recharge time calculations by flugschwein (PR #103)
* fix Comment reward calculations by crokkon (PR #105)
* Fix typo in witness update feed
* Fix appveyor CI

## 0.20.9 - bug fix release to fix beempy excecutables for windows 
* add missing scrypt to the pyinstaller
* prepare for removed witness api in rpc nodes

As all changes are pull requests or bug fixes, I did not create a utopian-io post.

### Using beempy on windows without python
In version 0.20.9, I fixed the appveyor CI. Thus executables for beempy are available for windows as download. The executables do not need an installed python.
In the [current build](https://ci.appveyor.com/project/holger80/beem), pyinstaller is used to create a standalone exe-file of beempy inside the ci environment:
![image.png](https://ipfs.busy.org/ipfs/QmZfftSQy1MHo2UQn5XT8qmBp4MrVwvUYh8FRDiVvaed77)

As you can see in the screenshot the sha256 checksum for [beempy-0.20.8-1137-ecbefc7f-py36_win64.zip](https://github.com/holgern/beem/releases/download/0.20.8/beempy-0.20.8-1137-ecbefc7f-py36_win64.zip) and [beempy-onefile-0.20.8-1137-ecbefc7f-py36_win64.zip](https://github.com/holgern/beem/releases/download/0.20.8/beempy-onefile-0.20.8-1137-ecbefc7f-py36_win64.zip) is
```
BA214B4603B0740E467612D758400F0716D4E7096758BDA7D37F336133A4C7B8
7F8FE471EEA226E753ECE37A11355644EFF055920F089DFB315C43C4B8D33808
```
I copied both zip files with its sha256 checksum from the artifact section of 
![image.png](https://ipfs.busy.org/ipfs/QmW4MhQx9BYnWJzBp45Kue6hPuXPAvmwPbEvDhRS88F6A3)
and uploaded it to the github release section. You can find it here: https://github.com/holgern/beem/releases/tag/0.20.8.

You will find a one-file version and a normal version in the release. The one-file version consists of a single EXE file, but is a lot slower than the normal release, as its content has to extracted every time, the exe is started.

## Installation of the  beempy-exe
At first, the file should be downloaded from the [github release site](https://github.com/holgern/beem/releases/tag/0.20.8). 
After downloading  [beempy-0.20.9-1140-3794947a-py36_win64.zip](https://github.com/holgern/beem/releases/download/0.20.9/beempy-0.20.9-1140-3794947a-py36_win64.zip) and extracting the zip file, you will find a directory called `beempy`. Move this directory to e.g.` C:\`:
![image.png](https://ipfs.busy.org/ipfs/QmS7ZS9eLytvrrAkBWJHvPebNMdDFjNsgdVe2TViWmfyAE)

Open the powershell (win+x -> Windows PowerShell)
![image.png](https://ipfs.busy.org/ipfs/QmUdpdmb6BdkCAtwQ7JWMyY8Je66SLVqjD38LjkdJP1Rge)

As C:\beempy was not added to the PATH variable, `beempy.exe` must be started by `.\beempy.exe`
![image.png](https://ipfs.busy.org/ipfs/QmUzymTkve85UcQt7fgNAFDeM9U2QoUH9fSBFB73XHuiQB)

We can now add `C:\beempy` to the path. First, start the normal cmd as admin (Windows+R, enter cmd and press Ctrl+Shift+Enter)
```
setx PATH "$env:path;C:\beempy" -m
```
New restart the powershell and `beempy` can be started everywhere:
![image.png](https://ipfs.busy.org/ipfs/Qmf9MJSiZn1BBGcGnJ77HQ3kTJxzGgx4R3EXbcsR2LWFzq)


beempy.exe uses the same sqlite database, as the python script.
___
Edit:
Please download the binaries from release 0.20.9:
* [beempy-0.20.9-1140-3794947a-py36_win64.zip](https://github.com/holgern/beem/releases/download/0.20.9/beempy-0.20.9-1140-3794947a-py36_win64.zip)
* [beempy-onefile-0.20.9-1140-3794947a-py36_win64.zip](https://github.com/holgern/beem/releases/download/0.20.9/beempy-onefile-0.20.9-1140-3794947a-py36_win64.zip)

- - -

This page is synchronized from the post: ['beem version 0.20.9 released - beempy excecutables for windows available'](https://steemit.com/@holger80/beem-version-0-20-8-released-beempy-excecutables-for-windows-available)
