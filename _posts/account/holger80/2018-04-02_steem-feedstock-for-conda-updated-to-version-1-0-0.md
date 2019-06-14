
---
title: 'steem-feedstock for conda updated to version 1.0.0'
permlink: steem-feedstock-for-conda-updated-to-version-1-0-0
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-02 09:18:48
categories:
- utopian-io
tags:
- utopian-io
- python
- steem-python
- conda
- steemdev
thumbnail: 'https://cdn.utopian.io/posts/96bd51ebd0f7d5981e9f8b0334ecf9586840image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A new version was released for [steem-python](https://pypi.python.org/pypi/steem). I updated the conda-feedstock for steem, so that steem can be easily installed with:
 ```
conda install steem
 ```
`conda-forge` has to be added once:
```
conda config --add channels conda-forge
```

Using conda, is the easiest way to install steem on windows. The second advantage is that all cli-tools work out of the box! Without using conda, the cli-tools `steempy`,  `piston` and `steemtail` are not callable directly. For steempy for example, conda creates a `steempy.exe` and a  `steempy-script.py` inside the Scripts directoy of Anaconda/Miniconda. 

Just start the Anaconda Prompt and enter  `steempy` , as you can see in the screenshot:
 <center>
![image.png](https://cdn.utopian.io/posts/96bd51ebd0f7d5981e9f8b0334ecf9586840image.png)
</center>


# Changes
The following changes are merged into PR [#2](https://github.com/conda-forge/steem-feedstock/pull/2)
## Fix entry points
https://github.com/conda-forge/steem-feedstock/commit/8b09f5d54b41d68624d0dd01c8af2ff75f5a4168
## fix conflict
* https://github.com/conda-forge/steem-feedstock/commit/7f3db590a3151bb902017410b27caa7dc25c2559
## Remove some packages
* https://github.com/conda-forge/steem-feedstock/commit/48848e896dafdf9a199811137b14da1c8ab642e9
## fix missing package
* https://github.com/conda-forge/steem-feedstock/commit/44110f071ca1999df1302663c13f5038d90663b2
## New release 1.0.0
* https://github.com/conda-forge/steem-feedstock/commit/8e2bcde32ad1559c459c6acfdad71e8b5cb86805

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/steem-feedstock-for-conda-updated-to-version-1-0-0">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['steem-feedstock for conda updated to version 1.0.0'](https://steemit.com/@holger80/steem-feedstock-for-conda-updated-to-version-1-0-0)
