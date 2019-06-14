
---
title: 'How to install steem-python on windows'
permlink: how-to-install-steem-python-on-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-18 09:41:09
categories:
- python
tags:
- python
- steempy
- steemdev
- tutorial
- python-steem
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394205/nua3xhsar42b7sjx9e3l.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


There are a lot of posts about installing `steem-python` on windows.
# What is the source of the problems?
`steem-python` needs [pycrypto](https://github.com/dlitz/pycrypto). `pycrypto` has seen its last update in 20 Jun 2014. It has 112 unsolved issues and 54 open pull requests. 20 open issues are about installing `pycrypto` on windows.

# Solution
The solution is to use Anaconda/Miniconda and to
install `pycrypto` from `conda-forge`. In the [feedstock](https://github.com/conda-forge/pycrypto-feedstock), four patches are applied to the source in order to fix all problems. 

### 1. Install Anaconda 5 with python 3.6
* Go to https://www.anaconda.com/download/ and download the installer for Python 3.6
* Start the installer (I normally choose that all user can use Python and change the path to _C:\\Anaconda3_)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394205/nua3xhsar42b7sjx9e3l.png)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394223/iofwqe3x5ugekzz62t5t.png)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516394270/xcflgahhodqbnwcl8pf8.png)

### 2. Start the Anaconda Prompt and add the conda-forge channel 
* Start the _Anaconda Prompt_ ( You find it under Anaconda3)
* Add the conda-forge channel by entering the following into the prompt:
```
conda config --add channels conda-forge
```
### 3. Install steem-python
There are now three different ways to install `python-steem`.

#### 3.1. Install steem-python with conda
* Open the _Anaconda Prompt_ ( You find it under Anaconda3)
* Install python-steem by
```
conda install steem
```
* The command line tools are available inside of the  _Anaconda Prompt_ and can be called by
```
steempy
```
* The command line tools are inside _AnacondaDir_\Scripts, so when adding this directory and _AnacondaDir_ to the path variable of windows, the tools are also available outside the _Anaconda Prompt_.

#### 3.2. Install the development version of steem-python
* Go to the [github of python-steem](https://github.com/steemit/steem-python/)
* Clone the repository to your drive
* Open the _Anaconda Prompt_ ( You find it under Anaconda3)
* Install all dependencies by:
```
conda install --only-deps steem
```
* build `python-steem` by
```
cd <dir_of_python_steem>
python setup.py build
python setup.py install --user
```
* The command line tools are not available when installing steem-python in this way.
#### 3.3. Install  steem-python with pip
* Open the _Anaconda Prompt_ ( You find it under Anaconda3)
* Install all dependencies by:
```
conda install --only-deps steem
```
* Install python-steem by
```
pip install steem
```
* The command line tools are not available when installing steem-python in this way.

___
I'm managing the [steem-foodstock](https://github.com/conda-forge/steem-feedstock/) for python-steem. In case of problems please create a new issue.

- - -

This page is synchronized from the post: ['How to install steem-python on windows'](https://steemit.com/@holger80/how-to-install-steem-python-on-windows)
