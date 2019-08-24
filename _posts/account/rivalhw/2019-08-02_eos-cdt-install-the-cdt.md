
---
title: '[EOS学习笔记]安装CDT  Install the CDT'
permlink: eos-cdt-install-the-cdt
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-02 13:34:03
categories:
- eos
tags:
- eos
- cn-reader
- partiko
- sct
- zzan
thumbnail: 'https://cdn.steemitimages.com/DQmTXxVsrCmM8qd5qWrPtsDdTNS8nYXwoUh6YexLNt9Vypp/001%20install%20cdt.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


CDT 是什么？
英文全称是：The EOSIO Contract Development Toolkit
中文翻译过来的意思就是：EOSIO 合约开发工具包

tips:
从1.3.x开始，CDT开始支持Mac OS X brew，Linux Debian和RPM软件包。
你也可以选择用源码安装，但最省事和方便的方法，就是选择安装包的方式进行安装。
比如我在Ubuntu下，分两步骤，

下载CDT安装包
wget https://github.com/EOSIO/eosio.cdt/releases/download/v1.6.1/eosio.cdt_1.6.1-1_amd64.deb
![001 install cdt.png](https://cdn.steemitimages.com/DQmTXxVsrCmM8qd5qWrPtsDdTNS8nYXwoUh6YexLNt9Vypp/001%20install%20cdt.png)

![002 install cdt.png](https://cdn.steemitimages.com/DQmd83HobmbMdjVBMPUHkwNERh3tpVwxJLBGLx7zDiHcoXj/002%20install%20cdt.png)

下载完成后
安装CDT
sudo apt install ./eosio.cdt_1.6.1-1_amd64.deb
![003 install cdt.png](https://cdn.steemitimages.com/DQmSGicWeePKErXPFXAaZJXyKNCB5Fs9yZgutYbAbFAnGE9/003%20install%20cdt.png)

提示
tips

如果你的系统之前安装过eosio.cdt 1.3.0或之前版本，要在安装之前先卸载旧的版本先。

If you have versions of eosio.cdt prior to 1.3.0 installed on your system, please uninstall before proceeding


Next  Create Development Wallet

- - -

This page is synchronized from the post: ['[EOS学习笔记]安装CDT  Install the CDT'](https://steemit.com/@rivalhw/eos-cdt-install-the-cdt)
