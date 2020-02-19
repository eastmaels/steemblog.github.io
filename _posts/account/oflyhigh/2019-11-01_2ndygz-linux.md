
---
title: '每天进步一点点：Linux下校验文件'
permlink: 2ndygz-linux
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-01 02:10:36
categories:
- cn
tags:
- cn
- hash
- md5sum
- linux
- study
thumbnail: 'https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子中，我介绍了[axel这个多线程下载工具](https://steemit.com/cn/@oflyhigh/axel-wget)，用来替换wget进行多线程下载。

每天进步一点点
![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

不过在用axel下载了一个数百G的文件后，我突然发觉心里没底，万一这个文件里边丢失哪怕一个字节的内容，这个文件都算白下了，那么如何校验我下载的文件和原始文件一致呢？


# md5sum

其实最简单的方法就是校验文件的hash值了，而校验文件hash值最常用的就是md5sum啦。

Ubuntu 18.04发行版中已经包含了md5sum（包含在[GNU Core Utilities](http://www.gnu.org/software/coreutils/)中），所以我们直接使用即可，无需安装。

调用方式如下：
>`md5sum [option]… [file]…`

比如我要检查文件aaa.tgz的md5，那么只需调用：
>`md5sum aaa.tgz`

输出结果如下：
>![](https://cdn.steemitimages.com/DQmbqwA6KiEmLjyfCfFKfJnH95mag76SmLy9WAKyKu4HHdn/image.png)

之后再去服务器上执行同样的命令，获取服务器对应文件的hash，并进行对比就可以啦。

# 使用校验文件

在对单个文件进行处理时，只要不是头昏眼花，上述人工肉眼判断是没有问题的，但是如果多个文件需要校验，那么估计就该头昏眼花了。

所以使用-c参数就很有必要了：
>`-c, --check          read MD5 sums from the FILEs and check them`

简单的来讲，就是把原始文件生成的md5sum输出写入到文件中，下载或复制等传播后，md5sum会直接处理文件并对比校验码。

举例如下：
我们在服务器上生成aaa.tgz的校验码并保存到本地文件md5.txt，内容如下：
>`d41d8cd98f00b204e9800998ecf8427e aaa.tgz`

在本地执行如下命令：
>`md5sum -c md5.txt`

返回内容如下，说明文件校验成功。
>![](https://cdn.steemitimages.com/DQmPRDaVR6pwStx7fQZZBkJdsz6TJZQxQfBDigZphxz5jhR/image.png)

下面我们手工破坏一下文件，再测试一下：
>`echo "hello" >> aaa.tgz`
>`md5sum -c md5.txt`

再来看测试结果，会发现提示校验检查出错：
>![](https://cdn.steemitimages.com/DQmY35hAWfHZjBm91W2H5wY4PAiWnLevmHVKYjFSQsANrvn/image.png)

# 其它补充

除了md5sum，还有好多内置的校验工具可用：
>![](https://cdn.steemitimages.com/DQmT1EMQYAT7dksyvNJJpdYiPxXyFdKatnLCG9XH64CS5KE/image.png)

对我而言，校验自己的文件，用md5sum足够啦。


# 相关链接

* http://www.gnu.org/software/coreutils/md5sum
* http://www.gnu.org/software/coreutils/sha256sum
* [每天进步一点点：使用axel替代wget进行高速多线程下载](https://steemit.com/cn/@oflyhigh/axel-wget)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['每天进步一点点：Linux下校验文件'](https://steemit.com/@oflyhigh/2ndygz-linux)
