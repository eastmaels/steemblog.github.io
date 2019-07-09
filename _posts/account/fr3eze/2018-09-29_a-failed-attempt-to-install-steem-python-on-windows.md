
---
title: 'A failed attempt to install steem-python on Windows'
permlink: a-failed-attempt-to-install-steem-python-on-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-29 15:13:54
categories:
- steem
tags:
- steem
- python
- system
- busy
- teammalaysia
thumbnail: 'https://cdn.steemitimages.com/DQmU2d8GzrKo3KakQqbPSg78X4jJ766Q8SfgLrWJNm8cy3o/chrome_2018-09-29_21-04-50.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Finally I decided to try out the command line of `steempy` to interact with Steem blockchain after being in the ecosystem for over a year. My recent personal little project needs to me to know more about the fundamental of how Steem system is working. 

However, this blog is about how did I not manage to get the `steempy` installed successfully on Windows.

## The errors I was too lazy to solve

So here is the failed procedure for the sake of recording in case I figured out the way to get around with it in the future.

Download the [Anaconda for windows](https://www.anaconda.com/download/) as suggested by the official [document](https://steem.readthedocs.io/en/latest/install.html).

Installed the Anaconda successfully. Then open up the `Anaconda Prompt` and type in the command below to install `steem-python`.

`pip install steem`

Quickly, some errors poped out in my way:

```
Failed building wheel for ujson
Running setup.py clean for ujson
Failed to build ujson

distributed 1.21.8 requires msgpack, which is not installed.
```

The solution should be as easy as:

```
pip install msgpack
pip install ujson
```

Now the `ujson` should be fine and let's deal with the second error which is particularly exclusive in Windows platform:
  
```
error: Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools": http://landinghub.visualstudio.com/visual-cpp-build-tools
```

Seems like I have an outdated Microsoft Visual C++, easy, just go the [official Microsoft site](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2017) and get the Visual C++ Build Tools.

<center>![chrome_2018-09-29_21-04-50.png](https://cdn.steemitimages.com/DQmU2d8GzrKo3KakQqbPSg78X4jJ766Q8SfgLrWJNm8cy3o/chrome_2018-09-29_21-04-50.png)</center>

Installed a few essential or probably bloat plugins that might not be needed in this case.

<center>![vs_installershell_2018-09-29_21-37-29.png](https://cdn.steemitimages.com/DQmXBdSi7e7Et8LPaMBzN1XLsd9txpN6xx2hRVpqEvD1TtU/vs_installershell_2018-09-29_21-37-29.png)</center>

The installation took a while, rebooted the PC after that and sadly the errors still remains as I `pip install steem` once again.

## Windows is a disaster for such an attempt

To be honest I have close to zero experience in development in Windows environment so it would be fair to say it sucks but at least it is not a friendly environment for `steem-python`. 

Let's move on and try it on my Lubuntu virtual machine instead. Damn, I'm not a good sysadmin and I know it.

- - -

This page is synchronized from the post: ['A failed attempt to install steem-python on Windows'](https://steemit.com/@fr3eze/a-failed-attempt-to-install-steem-python-on-windows)
