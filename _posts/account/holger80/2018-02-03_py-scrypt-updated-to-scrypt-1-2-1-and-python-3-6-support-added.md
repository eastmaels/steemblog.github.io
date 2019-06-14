
---
title: 'py-scrypt updated to scrypt-1.2.1 and python 3.6 support added'
permlink: py-scrypt-updated-to-scrypt-1-2-1-and-python-3-6-support-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-03 13:51:06
categories:
- utopian-io
tags:
- utopian-io
- scrypt
- update
- python
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


py-scrypt is a Python binding for the [scrypt](https://www.tarsnap.com/scrypt.html) library and needed for installing [steem-python](https://github.com/steemit/steem-python). However, the package is outdated and did not use the newest version of scrypt. The second problem is that no wheels for python 3.6 are created. I decided to fix py-scrypt by updating scrypt to 1.2.1 and add wheels for python 3.6. All tests from py-scrypt are passed and the wheels can now be downloaded from: https://github.com/holgern/py-scrypt/releases/tag/v0.8.2. The downloaded wheel can then be installed by:
```
pip install scrypt-0.8.2-cp36-cp36m-win_amd64.whl
```
___

### Bug Fixes
- py-scrypt 0.8.0 uses the old scrypt 1.2.0 and there was not updated since 2016. There are 17 open issues.
- py-scrypt builds no wheel for python 3.6 for windows.
- I cloned py-scrypt from https://bitbucket.org/mhallin/py-scrypt/ and uploaded my changes to [github](https://github.com/holgern/py-scrypt)

### New Features
- Newest scrypt 1.2.1 used
- Wheel for python 3.6 for Windows are build and can be downloaded [here](https://github.com/holgern/py-scrypt/releases/)
- I asked the original author for permission to upload the new created wheels to https://pypi.python.org/pypi/scrypt
- travis build added

### Next steps
-  When I recieve permission, I will upload my version 0.8.2 to pypi.
- When I do not recieve an answer, should I upload 0.8.2 under a new Name to pypi? This has to be discussed now.
- I will try to add py-scrypt to conda-forge

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/py-scrypt-updated-to-scrypt-1-2-1-and-python-3-6-support-added">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['py-scrypt updated to scrypt-1.2.1 and python 3.6 support added'](https://steemit.com/@holger80/py-scrypt-updated-to-scrypt-1-2-1-and-python-3-6-support-added)
