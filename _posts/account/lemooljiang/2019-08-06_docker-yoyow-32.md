
---
title: 'Docker 运行 yoyow见证人节点  / 网络研习社#32'
permlink: docker-yoyow-32
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-06 11:12:15
categories:
- cn
tags:
- cn
- network-institute
- docker
- yoyow
- witness
thumbnail: 'https://cdn.steemitimages.com/DQmRudrqxe8eTo6ByqHsLmBjk9x4exGH5Cccn5fd2X9tFs8/docker-yoyow.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![docker-yoyow.jpg](https://cdn.steemitimages.com/DQmRudrqxe8eTo6ByqHsLmBjk9x4exGH5Cccn5fd2X9tFs8/docker-yoyow.jpg)

这两天学Docker有些心得，也做了些小镜像，都还挺好用的。边做边学的过程中，有些更深地体会。比如镜像的概念：**镜像=系统+软件（应用）**。当我们的思想还停留在安装软件的阶段时，镜像们已经自带系统满世界乱跑了！镜像真真是很方便：软件都不用安装了，run起来就能用！像MySQL这种难安装的软件，有镜像就方便很多了。

**镜像=精简地系统！**正因为镜像都自带系统，所以才无需安装。最精简好用的Alpine只有5.58M，Ubuntu18的镜像也才只有64.2M。所以不要有什么不好地联想，以为什么系统都像windows一样动辄几十个G。在这些精简的系统上构建软件（或是应用），打包成镜像。别人拿到这个镜像就可以直接使用了。

像github一样有个docker-hub（https://hub.docker.com），里面有无数前辈们的成果，你需要做的仅仅是拿来用而已。

在做docker练习的时候，就想着把yoyow见证人节点做成镜像，因为它还蛮符合镜像单一功能的特点。找来Ubuntu18的镜像，构建一个容器，在容器内把yoyow见证人程序下载进去，然后运行起来，一下子就成功了。根据步骤，写成Dockerfile,就可以成功构建出镜像了！当然，你也可以直接从已成功容器的基础上commit成镜像也是可以的。

### Dockerfile是长成这样的
```
FROM ubuntu:18.04
MAINTAINER lemooljiang <jackeyjiang2015@gmail.com>

RUN apt update \
    && apt install -y wget \
    && wget https://github.com/yoyow-org/yoyow-core/releases/download/v2.0.0-190531/yoyow-v2.0.0-ubuntu16-20190531.tgz \
    && tar zxvf yoyow-v2.0.0-ubuntu16-20190531.tgz \
    && rm yoyow-v2.0.0-ubuntu16-20190531.tgz \
    && cd yoyow-v2.0.0-ubuntu16-20190531 \
    && cp yoyow_client / \
    && cp yoyow_node / \
    && cd .. \
    && rm -fr yoyow-v2.0.0-ubuntu16-20190531

ENTRYPOINT ["/yoyow_node"]
```
<br/>
看起来蛮容易吧，这和虚拟机中安装是一个道理。所以，会虚拟机的小伙伴用起docker来也是一样便利的。

### 运行时

`docker run -d --name yoyow lemooljiang/yoyow --rpc-endpoint -w 384452518 --private-key '["YYW5kTRfff554DDD","5KfDSDSh56"]'`

这条命令有点长，有点难度也就是它了。大家应该注意到Dockerfile中`ENTRYPOINT ["/yoyow_node"]`,它就是要在容器运行时要执行的命令，见证人后面的参数都跟在后面呢。

稍微解释一下这条命令： `-d`--守护式容器， `--name yoyow`--容器名， `lemooljiang/yoyow`--所需使用的镜像名，`--rpc-endpoint -w 384452518 --private-key '["YYW5kTRfff554DDD","5KfDSDSh56"]'`--这一长条就是见证人后面的参数了。

### 维护和查看
也就一个命令`docker exec -it yoyow /bin/bash`就可以进入到容器里面，这和虚拟机操作是一模一样的。

用Docker 来运行 yoyow见证人节点是可以考虑的，它有Docker镜像所有的优点，比如**守护进程、运行简便、管理便利、多环境适用**等。

 yoyow见证人镜像我已上传到docker-hub上了，大家可以找来试试吧，地址在这：https://hub.docker.com/r/lemooljiang/yoyow

我的 yoyow见证人号是：**384452518**，大家多给我投票吧！

- - -

This page is synchronized from the post: ['Docker 运行 yoyow见证人节点  / 网络研习社#32'](https://steemit.com/@lemooljiang/docker-yoyow-32)
