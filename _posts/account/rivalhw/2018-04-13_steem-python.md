
---
title: 'steem-python的安装和配置'
permlink: steem-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-13 04:17:36
categories:
- steem-python
tags:
- steem-python
- steemit
- cn-reader
- python
- steempy
thumbnail: 'https://steemitimages.com/DQmUVhXDPUxy7DdLXzKHSHFwotmpD5PA7A2G55BSbbHbjJD/document.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>　　关于steem-python的资料非常少，我在网上搜索了下，百度几乎没有，而google也只找到了如下这份文档：</p>
<p><img src="https://steemitimages.com/DQmUVhXDPUxy7DdLXzKHSHFwotmpD5PA7A2G55BSbbHbjJD/document.png" width="977" height="909"/></p>
<p>　　就拿着这份我认为很粗略的文档，我开始了研究steem-python的艰辛过程，在花了一整个下午和上午后，基本算弄明白了其安装和基础命令操作。如果你也对steem-python感兴趣的话，可以参考下我写的这篇文章内容。</p>
<p>　　在开始正式内容之前，我们先来了解下steem-python可以做什么？</p>
<p>　　简单地讲，利用steem-python，可以操作任何你在steemit网站上的一些比如upvote/downvote、follow/unfollow、transfer、powerup/powerdown、buy/sell等，除此之外，还可以设置多用户管理同一账户发帖等，比如我们即将新开始的茶馆，因为将要聘请多个店小二进行共同管理，每个店小二需要独立发帖，这个时候利用steem-python就可以完成上述这些管理操作了。</p>
<p>　　当然，steem-python的功能不仅如此，我看了下文档，利用steem-python可以进行编程，甚至还提供api等，虽说文档做的很粗糙，但功能还是较为全面的，对此有兴趣和时间的朋友，可以继续研究哦。</p>
<p>　　要想安装和配置steem-python，你需要首先安装python环境，看了下官方文档，提示如下：</p>
<p>　　steem-python requires Python 3.5 or higher. We don’t recommend usage of Python that ships with OS. If you’re just looking for a quick and easy cross-platform solution, feel free to install Python 3.x via easy to use Anaconda installer.</p>
<p>　　大意是安装的Python需要至少3.5版本或以上，官方不推荐使用系统自带的python，并且建议使用Anaconda下的python安装。</p>
<p>　　这里注意，强烈建议使用官方推荐的Anaconda下的python安装环境，包括如果你有安装旧版本，也建议卸载后安装新的。我刚开始使用时没注意这个，导致出现一些莫名其妙的问题。</p>
<p>　　以下我会详细介绍具体的操作步骤，重要步骤我会用<strong>粗体</strong>注明，而具体操作命令部分，我会用<em>斜体</em>来注明，以方便大家阅读和操作。</p>
<p><br></p>
<p>　　<strong>1、安装Python环境</strong></p>
<p>　　<strong>1&gt;下载</strong></p>
<p>　　去Anaconda下载Python安装环境，地址如下：</p>
<p>　　https://www.anaconda.com/download/</p>
<p>　　比如我使用的是centoslinux6.4环境，以下同操作：</p>
<p>　 &nbsp;&nbsp;<em>&nbsp;wget https://repo.continuum.io/archive/Anaconda3-5.1.0-Linux-x86_64.sh</em></p>
<p><img src="https://steemitimages.com/DQmSU3cZPohTXFoFwQSCuDpnp9hqraNoZamDzxo7vEbKjyL/1.png" width="1285" height="140"/></p>
<p>　　注意，选择适合你自己的版本</p>
<p><br></p>
<p>　　 <strong>2&gt;安装</strong></p>
<p>　　 <em>chmod+xAnaconda3-4.4.0-Linux-x86_64.sh</em></p>
<p>　　 <em>./Anaconda3-4.4.0-Linux-x86_64.sh</em></p>
<p><img src="https://steemitimages.com/DQmeoH4VFwP9W1g3jxgHXTgDnHmWQrTSVcqaqoH4xY3nbB6/1-1.png" width="1896" height="805"/></p>
<p>　　 <img src="https://steemitimages.com/DQmfFreY1ze3jTJ1Jeb558tp4HbgDFC8qj7aJZBUpbitimv/1-2.png" width="1884" height="531"/></p>
<p><img src="https://steemitimages.com/DQmWCMkgiGyMf7SrgLbqprUh9k3j5RteSJzKYUPxnDBayED/1-3.png" width="1893" height="198"/></p>
<p><img src="https://steemitimages.com/DQmZuAT1i6CK2fWBXzUm9KNiQL2Bvj4qDN3pvsBbkSZRPup/1-4.png" width="1890" height="428"/></p>
<p><br></p>
<p>　　<strong> 3&gt;验证安装是否成功</strong></p>
<p>　　 <em>python-V</em></p>
<p>　　 返回：</p>
<p>　　 Python3.6.4::Anaconda,Inc.</p>
<p><img src="https://steemitimages.com/DQmZ4xeg1gjZ6JBvaj8doBsm3BSPuBcyfdwL5QUB7LoUJ57/pythonok.png" width="355" height="40"/></p>
<p>　　<strong>2、安装steem-python</strong></p>
<p>　　 <strong>1&gt;&gt;&gt;安装steem-python</strong></p>
<p>　　 <em>pip install steem</em></p>
<p><img src="https://steemitimages.com/DQmdBfFnfBmqp6CmrZY2qUnCzcSCGGxoGEf4qXaejo5AFg6/2.png" width="1880" height="785"/></p>
<p>　　 <strong>2&gt;验证是否安装成功</strong></p>
<p>　　<em> steempy--version</em></p>
<p>　　 返回：</p>
<p>　　 steempy1.0.0　　</p>
<p><img src="https://steemitimages.com/DQmcdUKqhbPF6wuxemGAETjFwg5EzMasPLTiNdf5taRxWM7/steempyok.png" width="467" height="32"/></p>
<p>　　好了，大功告成，我们终于安装好了steem-python，接下来就可以正式使用它了。</p>
<p>　　下一篇我会讲下steem-python 的命令行具体如何使用和操作。</p>
</html>

- - -

This page is synchronized from the post: ['steem-python的安装和配置'](https://steemit.com/@rivalhw/steem-python)
