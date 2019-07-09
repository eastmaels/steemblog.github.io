
---
title: 'Steem-python installation on Linux'
permlink: steem-pythoninstallationonlinux-1ryocg7ebu
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-30 15:51:51
categories:
- computer
tags:
- computer
- linux
- python
- steem
- teammalaysia
thumbnail: 'https://cdn.steemitimages.com/DQmQLrKNFShJK4AW6HVx5ahkUYVYHjNdEtmwz2pnTh4uEpj/VirtualBox_2018-09-30_09-07-20.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


After the <a href="https://steemit.com/steem/@fr3eze/a-failed-attempt-to-install-steem-python-on-windows">failed attempt</a> in installing <code>steem-python</code> in Windows. I decided not to waste more time on solving the problems and move on to a Ubuntu virtual machine which is practically a more friendly environment for such work.

<h3>Install VM and set up Python environment via Anaconda</h3>

Anaconda is the recommended python environment by the <a href="https://steem.readthedocs.io/en/latest/install.html">official document</a>. After installing Ubuntu in Virutalbox which is quite straight-forward, I proceeded with the <code>git clone</code> method instead of the <code>pip</code> as the former would be getting the source code from official github repository.

<pre><code>sudo apt install git
git clone https://github.com/steemit/steem-python
cd steem-python
sudo make install
</code></pre>

<h2>Errors in the installation</h2>

Here are the common errors the installation will hit under Linux environment and already being reported by many users.

<pre><code>scrypt-1.2.1/libcperciva/crypto/crypto_aes.c:6:10: fatal error: openssl/aes.h: No such file or directory
#include &lt;openssl/aes.h&gt;
          ^~~~~~~~~~~~~~~
compilation terminated.
error: Setup script exited with error: command 'x86_64-linux-gnu-gcc' failed with exit status 1
Makefile:18: recipe for target 'install' failed
make: *** [install] Error 1
</code></pre>
<br>

<pre><code>Traceback (most recent call last):
  File "/usr/local/bin/steempy", line 6, in &lt;module&gt;
    from pkg_resources import load_entry_point
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 3088, in &lt;module&gt;
    @_call_aside
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 3072, in _call_aside
    f(*args, **kwargs)
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 3101, in _initialize_master_working_set
    working_set = WorkingSet._build_master()
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 574, in _build_master
    ws.require(__requires__)
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 892, in require
    needed = self.resolve(parse_requirements(requirements))
  File "/usr/lib/python2.7/dist-packages/pkg_resources/__init__.py", line 778, in resolve
    raise DistributionNotFound(req, requirers)
pkg_resources.DistributionNotFound: The 'scrypt&gt;=0.8.0' distribution was not found and is required by steem
</code></pre>

This is mainly due to the Ubuntu system was not able to find the <code>scrypt</code> package which can be easily fixed by

<code>sudo apt-get install libssl-dev</code>

Or as suggested by the <a href="https://github.com/steemit/steem-python">official doc</a>

<pre><code>brew install openssl
export CFLAGS="-I$(brew --prefix openssl)/include $CFLAGS"
export LDFLAGS="-L$(brew --prefix openssl)/lib $LDFLAGS"
</code></pre>

<h2>Test and done</h2>

Use <code>python</code> to enter pyton prompt mode and test with the simple <code>get_account</code> function and it works.

<img src="https://cdn.steemitimages.com/DQmQLrKNFShJK4AW6HVx5ahkUYVYHjNdEtmwz2pnTh4uEpj/VirtualBox_2018-09-30_09-07-20.png" alt="VirtualBox_2018-09-30_09-07-20.png" /><br/>

Test with <code>steempy</code> which is a practical CLI utility for Steem and it should be working without errors too.

<img src="https://ipfs.busy.org/ipfs/QmWKPEZZpK5Cs5Bw7hpDKSaLNbLCf2Lz9MUTxfgKSCaike" alt="VirtualBox_2018-09-30_09-11-11.png" /><br/><br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/steem-python-installation-on-linux/</em><hr/></center>

- - -

This page is synchronized from the post: ['Steem-python installation on Linux'](https://steemit.com/@fr3eze/steem-pythoninstallationonlinux-1ryocg7ebu)
