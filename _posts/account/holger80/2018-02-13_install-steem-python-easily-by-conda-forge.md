
---
title: 'Install steem-python easily by conda-forge'
permlink: install-steem-python-easily-by-conda-forge
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-13 21:10:54
categories:
- utopian-io
tags:
- utopian-io
- python
- steem
- installation
- conda
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1518553836/qd0jroyyfglsshyc104a.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### Installing steem-python is very frustrating:
- At the moment, it is not easily possible to install steem-python on windows
- The steem python version from pypi cannot be compiled, as it requires a wrong toml version which does not exists
- the cli programms do not run, as the node cannot be changed and the default node is offline
## Bug fixes
Installing steem-python by [conda-forge](https://github.com/conda-forge/steem-feedstock) fixes:

* https://github.com/steemit/steem-python/issues/90
* https://github.com/steemit/steem-python/issues/92
* https://github.com/steemit/steem-python/issues/96
* https://github.com/steemit/steem-python/issues/97
* https://github.com/steemit/steem-python/issues/106
* https://github.com/steemit/steem-python/issues/111
* https://github.com/steemit/steem-python/issues/112
* https://github.com/steemit/steem-python/issues/114
* https://github.com/steemit/steem-python/issues/144

These open issues have been fixed by patching the source code of the release [source from pypi](https://pypi.python.org/pypi/steem/0.18.103) and by using only conda packages for installing steem. The patches to fix the broken node can be found in this [commit](https://github.com/conda-forge/steem-feedstock). 
I pushed them here https://github.com/conda-forge/steem-feedstock/commit/751b620e91d60a5a9152e684aa5f8de968362949.
In order to install steem with conda, I also pushed the following PR:

* https://github.com/conda-forge/staged-recipes/pull/5109
* https://github.com/conda-forge/staged-recipes/pull/5107
* https://github.com/conda-forge/staged-recipes/pull/5106

## Installing steem-python
After installing [Miniconda](https://conda.io/miniconda.html) / [Anaconda](https://www.anaconda.com/download/) on either Linux, OSX or Windows just do:
```
conda config --add channels conda-forge
conda install steem
 ```

You can use the three cli-programs (steempy and piston are doing the same):
* steempy / piston
* steemtail

<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518553836/qd0jroyyfglsshyc104a.png)
</center>


and the python classes

* `import steem`
* `import steembase`

Please test this and report bugs regarding installation steem in the steem-feedstock:

* https://github.com/conda-forge/steem-feedstock

I patched the released source code less as possible. You can see the patches here:
* https://github.com/conda-forge/steem-feedstock/blob/master/recipe/Pipfile.lock.patch
* https://github.com/conda-forge/steem-feedstock/blob/master/recipe/cli.py.patch
* https://github.com/conda-forge/steem-feedstock/blob/master/recipe/steemd.py.patch

In order to be able to add steem to conda-forge, I added the following feedstocks:
* https://github.com/conda-forge/scrypt-feedstock/
* https://github.com/conda-forge/sphinxcontrib-programoutput-feedstock/
* https://github.com/conda-forge/sphinxcontrib-restbuilder-feedstock/
* https://github.com/conda-forge/pytest-pylint-feedstock/
* https://github.com/conda-forge/pylibscrypt-feedstock/
* https://github.com/conda-forge/pipfile-feedstock/

If you have issues, please report them in the specific repository.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/install-steem-python-easily-by-conda-forge">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Install steem-python easily by conda-forge'](https://steemit.com/@holger80/install-steem-python-easily-by-conda-forge)
