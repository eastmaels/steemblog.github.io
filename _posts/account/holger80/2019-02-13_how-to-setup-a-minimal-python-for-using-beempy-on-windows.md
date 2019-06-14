
---
title: 'How to setup a minimal python for using beempy on windows'
permlink: how-to-setup-a-minimal-python-for-using-beempy-on-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-13 10:30:33
categories:
- beempy
tags:
- beempy
- windows
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXPQJMPD6TdqEvJYzaraFA857GHfb9Tw6fdbGocTYX1wc'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I worked on the scrypt wheels for windows ([post](https://steemit.com/scrypt/@holger80/fixing-scrypt-for-windows-a-second-time-tester-needed)). Due to my work, it is now easily possible to use `beempy` on windows. The setup can also be used to start small python scripts. It will not mess up with windows, as no PATH is set. Everything can easily removed.

## Install python 3.7

First we will download python from https://www.python.org/downloads/
![image.png](https://ipfs.busy.org/ipfs/QmXPQJMPD6TdqEvJYzaraFA857GHfb9Tw6fdbGocTYX1wc)

Then we Customize the Installation:
![image.png](https://ipfs.busy.org/ipfs/QmY7zLxmcWNfmcP7kSnDYZgBL3udUNuPtnnM5nDa41p86q)

We only need pip:
![image.png](https://ipfs.busy.org/ipfs/QmV493n4SVFRKqAWzSx1ZMXm4v1ZMEzAJyvMcT6uinRuRh)

Then we change the path, to find the python.exe easier:
![image.png](https://ipfs.busy.org/ipfs/QmRcV42fnJcD3h4GWGHDgc22r4Wcd5YZ7iC8C1Gzqm6ZgS)

Then we start the powershell and update pip and install virtualenv:
```
C:\Python37-32\python.exe -m pip install pip --upgrade
C:\Python37-32\python.exe -m pip install virtualenv
```

![image.png](https://ipfs.busy.org/ipfs/QmYxWEdCUVNYxkKGdAc5fJQrtUGxFEJFpgxuR8uqEAdgfp)


## Creating a working environment
At first we create a new directory in the explorer at `c:\beem`
We will create a working environment:
```
cd beem
 C:\Python37-32\python.exe -m virtualenv env
```
and activate it by
```
.\env\Scripts\activate
```
![image.png](https://ipfs.busy.org/ipfs/QmZNscead3KQtcdzKNwqRyNGaZc8Th5vvkrcmHXQoueV81)


## Install beem

We are now able to install beem:
```
pip install beem
```
Additionally, we install cryptography to speed up signing:
```
 pip install cryptography
```
We are now able to use beempy:

```
beempy --version
```
![image.png](https://ipfs.busy.org/ipfs/QmRY1dnLEXiGeLxLHv4MJqdDbZmAaZjpWtRvQ77fwgTU5g)


## Create a shortcut
Do a rightclick on activate.ps1 in C:\beem\env\Scripts and select Create shortcut.
Rightclick on the shortcut and then click on properties.

Change the target to:
```
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoExit  "C:\beem\env\Scripts\activate.ps1"
```
You can now move it to your desktop and have a fast access to beempy.

## Uninstall
Just delete `C:\beem\env`. Python itself can be uninstalled and `C:\Python37-32` deleted. This should clean everything.

## Using the 64 bit version of python
Everything is also working with the 64 bit version. Just replace `C:\Python37-32` with `C:\Python37`.

- - -

This page is synchronized from the post: ['How to setup a minimal python for using beempy on windows'](https://steemit.com/@holger80/how-to-setup-a-minimal-python-for-using-beempy-on-windows)
