
---
title: 'Fixing scrypt for windows a second time - tester needed'
permlink: fixing-scrypt-for-windows-a-second-time-tester-needed
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-12 09:44:36
categories:
- scrypt
tags:
- scrypt
- python
- windows
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmdNh8jeiKuPfAxWjXziNF59FjUr3BLi2kFycxwnTdSZ7E'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I tried to fix again the windows precompiled builds for windows for the [scrypt](https://bitbucket.org/mhallin/py-scrypt) library in version 0.8.9 (now 0.8.10).
There were some problems with importing scrypt which results in an error:
```
The specified module could not be found
```

This time, I check if the libeay32 or the libcrypto library is available in the openssl directory and adapt the library name. When libcrypto is there, I will use the static version of the library and link also user32 and gdi32. 

```
elif sys.platform.startswith('win32'):
    define_macros = [('inline', '__inline')]

    extra_sources = ['scrypt-windows-stubs/gettimeofday.c']
    if struct.calcsize('P') == 8:
        if os.path.isdir('c:\OpenSSL-v111-Win64') and sys.version_info[0] > 3 and sys.version_info[1] > 4:
            openssl_dir = 'c:\OpenSSL-v111-Win64'
        else:
            openssl_dir = 'c:\OpenSSL-Win64'
        library_dirs = [openssl_dir + '\lib']
        includes = [openssl_dir + '\include', 'scrypt-windows-stubs/include']
    else:
        if os.path.isdir('c:\OpenSSL-v111-Win32'):
            openssl_dir = 'c:\OpenSSL-v111-Win32'
        else:
            openssl_dir = 'c:\OpenSSL-Win32'
        library_dirs = [openssl_dir + '\lib']
        includes = [openssl_dir + '\include', 'scrypt-windows-stubs/include']
    if os.path.isfile(library_dirs[0] + '\libcrypto.lib'):
        libraries = ['libcrypto_static', 'advapi32', 'user32', 'gdi32']
    else:
        libraries = ['libeay32', 'advapi32']
```

This allows it to compile scrypt with openssl 1.0.2  and 1.1.1. I created precomplied wheels for different python versions for 32 and 64 bit. For the 64bit version of python 2.7 and 3.4, I will use openssl 1.0.2 in the appveyer build server.

I downloaded all wheels from the appveyer build server:
![image.png](https://ipfs.busy.org/ipfs/QmdNh8jeiKuPfAxWjXziNF59FjUr3BLi2kFycxwnTdSZ7E)


and uploaded them to [Pypi](https://pypi.org/project/scrypt/).

## I need now some help in testing

I'm tested the python 3.7 build for 32 bit and 64 bit by:

```
pip install scrypt -U
```
It should say that 0.8.9 is installed:
![image.png](https://ipfs.busy.org/ipfs/QmPccCR2zgZma91Qq99qK5RrpqBb1X1jV94P4ibhQ7BFBy)

I check if itworks by importing scrypt:
First I go into the python interpreter
```
python
```
then I import scrypt
```
import scrypt
```
It has worked, when there is no error message.

When you are using windows, could you test if scrypt 0.8.9 is working for you? That would be great.
____
Edit
I found a small typo, in order to correct it, I had to increase the version number to 0.8.10.

- - -

This page is synchronized from the post: ['Fixing scrypt for windows a second time - tester needed'](https://steemit.com/@holger80/fixing-scrypt-for-windows-a-second-time-tester-needed)
