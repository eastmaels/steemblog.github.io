
---
title: 'How to install steem-python for Windows'
permlink: how-to-install-steem-python-for-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-19 21:56:15
categories:
- utopian-io
tags:
- utopian-io
- steem-dev
- python
- tutorial
- steemit
thumbnail: 'https://steemitimages.com/0x0/https://i.imgur.com/l8XMygV.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/0x0/https://i.imgur.com/l8XMygV.png)
I wrote this post, as it is not easy at the moment to install `steem-python` on Windows using Anaconda 5 with python 3.6.
#### 1. Install Anaconda 5 with python 3.6
* Go to https://www.anaconda.com/download/ and download the installer for Python 3.6
* Start the installer (I normally choose that all user can use Python and change the path to _C:\Anaconda3_)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394205/nua3xhsar42b7sjx9e3l.png)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394223/iofwqe3x5ugekzz62t5t.png)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394270/xcflgahhodqbnwcl8pf8.png)
#### 2. Download the wheel for scrypt-0.8.0
I forked https://bitbucket.org/mhallin/py-scrypt and added Python 3.6 to _appveyor.yml_ after line 33: 
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516429648/n2gtp6aid4tntbaygyk4.png)
Then i added my forked repository in https://www.appveyor.com/ and started the build process. As a result, you can download the wheel for scrypt:
* 32 Bit - https://ci.appveyor.com/api/buildjobs/k1dr2pmqf8ltt6ov/artifacts/dist%2Fscrypt-0.8.0-cp36-cp36m-win32.whl
* 64 Bit - https://ci.appveyor.com/api/buildjobs/9lk03sim4m3avixp/artifacts/dist%2Fscrypt-0.8.0-cp36-cp36m-win_amd64.whl
#### 3. Start the Anaconda Prompt and install steem-python
* Start the _Anaconda Prompt_ ( You find it under Anaconda3)
* Install either the scrypt-wheel for 64Bit - Anaconda : `pip install scrypt-0.8.0-cp36-cp36m-win_amd64.whl`
* Or  install the scrypt-wheel for 32 Bit - Anaconda : `pip install scrypt-0.8.0-cp36-cp36m-win_amd32.whl`
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516398141/ngvnt7tbzimilzwfmnj2.png)
* Install ujson: `conda install ujson`
* Install steem by: `pip install steem`
#### 4. Using steem-python
* Enter  `python ` into the _Anaconda Prompt_ window
* set the node with  `nodes=['https://api.steemit.com']`
* import steem: `from steem import Steem`
* create a Steem object: `s = Steem(nodes)`
* read the number of created accounts: `s.get_account_count()`
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516392587/jfkce820hon88gei4bjm.png)
#### 5. Uninstall steem-python
In order to uninstall steem, you have to perform the following steps:
```
pip uninstall steem voluptuous toml pylibscrypt pipfile maya pendulum  
pytzdata langdetect humanize funcy ecdsa diff_match_patch dateparser  
regex tzlocal ruamel.yaml appdirs scrypt w3lib prettytable
```

#### 6. Optional - Use environment for installing steem
By creating an environment, the steem installation is kept separated and can be easily removed.
Before proceeding with step 3, apply the following:
```
conda create --name steemenv
```
Activate the environment every time by:
```
activate steemenv
```
You can now proceed with step 3.

Uninstalling can be performed by:
```
conda remove --name steemenv --all
```
   Please let me know if something does not work! Thanks for reading.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/how-to-install-steem-python-for-windows">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['How to install steem-python for Windows'](https://steemit.com/@holger80/how-to-install-steem-python-for-windows)
