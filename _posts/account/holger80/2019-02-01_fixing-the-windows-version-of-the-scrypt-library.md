
---
title: 'Fixing the windows build of the scrypt library'
permlink: fixing-the-windows-version-of-the-scrypt-library
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-01 23:55:15
categories:
- steemdev
tags:
- steemdev
- python
- scrypt
- steemtank
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmQXphZbUwCzd3YF84Qmz1dxY9bjrivVp3etSfiZ2MxUYG'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


After seeing that scrypt no longer works for windows:
![image.png](https://ipfs.busy.org/ipfs/QmQXphZbUwCzd3YF84Qmz1dxY9bjrivVp3etSfiZ2MxUYG)


I had to act, as I'm the maintainer of the scrypt package. The package can be found here https://bitbucket.org/mhallin/py-scrypt/. The original author gave me write access to the repository as he is no longer maintaining it.

scrypt is an important package and is used in several python libraries as dependency (e.g. [python-bitshares,](https://github.com/bitshares/python-bitshares), [steem-python](https://github.com/steemit/steem-python), [beem](https://github.com/holgern/beem) )

The reason why it failed unter windows, is that a library in the OpenSSL package is renamed in the newest windows version of it. By fixing the names, I could compile it again.

![image.png](https://ipfs.busy.org/ipfs/QmQewtkBgGfCfqRqgS31aLvM532XF1LEhLvBFYUWdv5KJu)


### Compile scrypt in windows
A c compiler must be installed (e.g. Visual Studio 2017). Then, 
Win64 OpenSSL v1.1.1a from https://slproweb.com/products/Win32OpenSSL.html must be installed to `c:\\OpenSSL-Win64`
A 
```
python setup.py build
```
should now work.

## Precompiled wheels
I uploaded also several pre-compiled wheels.
![image.png](https://ipfs.busy.org/ipfs/QmceFwkpAjbkjsxJecxpTTgjUetR4sjWcmjbGJ47of7Sky)

A 
```
pip install scrypt
```
under windows should also work without having a compiler. 

## Anaconda
I pushed the changes to conda-forge and  working packages are available for windows:

![image.png](https://ipfs.busy.org/ipfs/QmUF3LXsCAy5puQU3HhsRFDYFHqNWz8TvS8vaZGetCbpgt)



- - -

This page is synchronized from the post: ['Fixing the windows build of the scrypt library'](https://steemit.com/@holger80/fixing-the-windows-version-of-the-scrypt-library)
