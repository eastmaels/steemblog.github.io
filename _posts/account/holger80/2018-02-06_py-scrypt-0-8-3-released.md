
---
title: 'py-scrypt 0.8.6 released'
permlink: py-scrypt-0-8-3-released
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-06 16:22:33
categories:
- utopian-io
tags:
- utopian-io
- scrypt
- update
- python
- pip
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I received write permission for
the py-scrypt [repository](https://bitbucket.org/mhallin/py-scrypt) and [pypi](https://pypi.python.org/pypi?name=scrypt). I will maintain py-scrypt and fix issues now.


I submitted 
* https://bitbucket.org/mhallin/py-scrypt/commits/abb8e09326404b8fc24420be5187abf4165a13ae
* https://bitbucket.org/mhallin/py-scrypt/commits/471d081ac562e03ed155d7a4f0de148c9bc1c62a
* https://bitbucket.org/mhallin/py-scrypt/commits/d142549dedf982c230db508ec14d124806d52e0e

to https://bitbucket.org/mhallin/py-scrypt and published version 0.8.3 to [pypi](https://pypi.python.org/pypi?:action=display&name=scrypt&version=0.8.3).
The new version can be updated with
```
pip install --upgrade scrypt
```
### Addition
As the current steem depends on scrypt 0.8.0, I uploade wheels for python 3.6 under Windows to pypi. It is now possible to easily install steem also under windows. Do the following to install steem with pip
under windows using python 3.6:
```
pip install --upgrade scrypt==0.8.0
pip install steem
```
### Addition 2
I released three more bug fixes, 0.8.4, 0.8.5 and 0.8.6.

### The following issues could be fixed by release 0.8.3
* #29: Build issue?
* #21: Test breaks: "ImportError: No module named test_scrypt_c_module"
* #31: Please include license file in source distribution
* #32: Cannot install on Windows due to it looking for unix file
* #33: Scrypt Still not pip installable

### The following issues could be fixed by release 0.8.4
* #27: please add __version__ attribute to scrypt module
* missing void in sha256.c fixed

### The following issues could be fixed by release 0.8.5
* MANIFEST.in fixed
* scrypt.py moved into own scrypt directory with __init__.py
* openssl library path for osx wheel repaired

### The following issues could be fixed by release 0.8.6
* setup.py fixed

The status of the issues can be seen here https://bitbucket.org/mhallin/py-scrypt/issues.

### New Features
- [Scrypt](https://github.com/Tarsnap/scrypt) was updated to 1.2.1
- wheels for python 3.6 for windows are added to pypi. `pip install scrypt` is now easily possible under windows when using anaconda with python 3.6.
- wheel for windows and osx are generated in https://github.com/holgern/py-scrypt/
- conda feedstock repo

## Update - scrypt on conda-forge now
I did it, scrypt 0.8.0 can be installed via conda-forge!
`conda install -c conda-forge  scrypt`
You can find the feedstock here:
https://github.com/conda-forge/scrypt-feedstock

Please test and let me know if the conda-forge packages work.

I already posted here https://steemit.com/utopian-io/@holger80/py-scrypt-updated-to-scrypt-1-2-1-and-python-3-6-support-added. I hope that I follow  the Utopian Rules this time. I spend 24 hours for everything. Here is the quote from my last review:
> Since you saying that there are quite a bug fixes, what you can do it to fork the original repo and add it as a Pull Request, if the pull request is merged we can accept it as a Valid Contribution.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/py-scrypt-0-8-3-released">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['py-scrypt 0.8.6 released'](https://steemit.com/@holger80/py-scrypt-0-8-3-released)
