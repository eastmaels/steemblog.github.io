
---
title: '每天进步一点点：Python项目的打包与发布'
permlink: 6fcxmq-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-15 04:04:06
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- setup
- pypi
thumbnail: 'https://cdn.pixabay.com/photo/2017/06/02/14/38/package-2366468_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想将自己写的python3 代码部署到另外一台VPS上，自己最常用的方式就是用`scp`复制了，但是总是感觉这样很繁琐也不优雅。你看别的项目用pip install安装多好呀。

![](https://cdn.pixabay.com/photo/2017/06/02/14/38/package-2366468_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

于是去学了一下怎么打包，怎么弄pip，发现网上的文章太多，并且很多都已经过时了，最后参考[Packaging Python Projects](https://packaging.python.org/tutorials/packaging-projects/)，大致搞明白了怎么做，在这记录一下。

# 打包操作

打包操作就是把python项目放到一个安装包/分发包里，这样无论是传输还是安装使用时，都只需和一个文件打交道就好了，不必面对一大堆目录。

#### 安装支持工具

在进行打包之前，首先需要安装相应的支持工具，主要是`setuptools`与`wheel`。
>`python3 -m pip install --user --upgrade setuptools wheel`

我的系统中这两个已经存在了。

#### setup.py

之后就是弄好项目的目录结构以及创建setup.py。

项目的目录结构大致这样：
>![image.png](https://images.hive.blog/DQmQRRP8ZYGJcC2oMk32HkhAHYh1kBvT4VupsLG2ZFqQus6/image.png)

setup.py的内容以及各项内容的意义请参考这里：https://packaging.python.org/tutorials/packaging-projects/#creating-setup-py

除了setup.py外，弄个README.md以及LICENSE会让项目看起来更加正规与友好。当然了，像我这种自己用的小项目，其实没有这俩文件也没啥。

#### 生成分发包

做好上述工作以后，就可以生成分发包了。

生成分发包的命令如下：
>`python3 setup.py sdist bdist_wheel`

可以用如下命令查看setup.py后边具体命令的解释：
>`python3 setup.py --help-commands`

返回信息如下：
>![image.png](https://images.hive.blog/DQmfHyJpYagcAQx4CZBVjcSsi7FfT9bBQQcGz4BEfdd5UXN/image.png)

所以我们知道`sdist`是创建源码分发包，而`bdist_wheel`是创建wheel格式分发包。

执行完成后，我们就会在dist目录下发现与`sdist`和`bdist_wheel`相对应的两个文件，这两个文件就可以用于安装/分发等操作啦。

# 发布项目

其实项目打包好，并且能安装，对我而言已经足够了，不过还是探索了一下发布项目的流程。

首先强调一点，仅仅是测试的话，应该使用[Test PyPI](https://test.pypi.org/)。以下内容以pypi为例，大部分同样适用于TestPyPI。

#### 创建API token

在上传项目之前，先创建API token。

访问如下链接：
>https://pypi.org/manage/account/

点击***`Add API token`***
>![image.png](https://images.hive.blog/DQmeaQdczMN4guVqRGmuS4Lz4oyhcSDgYF3dWf8ANGzdoWn/image.png)

起个名字：
>![image.png](https://images.hive.blog/DQmSLAdxshu6gmN4YBeQSX9ad9SQKoHRzy597vgvKSEbgPj/image.png)

查看生成的token，主要保存好：
>![image.png](https://images.hive.blog/DQmRp29UAC4ncr3eRcmRqEEMRBfJhM2MRKaM2fHpiQXXVdc/image.png)

#### 使用Token

pypi 上给出如下提示：
>To use this API token:
>* Set your username to __token__
>* Set your password to the token value, including the pypi- prefix

所以我们编辑`$HOME/.pypirc`文件，加入如下内容：

```
[pypi]
  username = __token__
  password = pypi-xxxxxxxx
```

#### 上传项目

在上传项目之前，需要安装twine
>`python3 -m pip install --user --upgrade twine`

关于[twine的介绍](https://packaging.python.org/key_projects/#twine)（主要解决加密上传的问题）：
>Twine is the primary tool developers use to upload packages to the Python Package Index or other Python package indexes. It is a command-line program that passes program files and metadata to a web API. Developers use it because it’s the official PyPI upload tool, it’s fast and secure, it’s maintained, and it reliably works.

然后使用如下指令就可以上传/发布项目啦：
>`python3 -m twine upload --repository pypi dist/*`

# 其它补充

上传项目可以上传源码版或者wheel版(或者其它版本)，都可以用pip安装的，推荐wheel版。

setup.py文件还是挺复杂的，我现在还有点晕头转向，弄好还真不容易呢。关于setup.py更详细内容，可以参考：[Writing the Setup Script](https://docs.python.org/3.7/distutils/setupscript.html)




# 参考链接

* [Python Packaging User Guide](https://packaging.python.org/)
* [Packaging Python Projects](https://packaging.python.org/tutorials/packaging-projects/)
* [Writing the Setup Script](https://docs.python.org/3.7/distutils/setupscript.html)
* [Building and Distributing Packages with Setuptools](https://setuptools.readthedocs.io/en/latest/setuptools.html)
* https://packaging.python.org/key_projects/#twine
* https://test.pypi.org/
* https://packaging.python.org/guides/using-testpypi/

- - -

This page is synchronized from the post: ['每天进步一点点：Python项目的打包与发布'](https://steemit.com/@oflyhigh/6fcxmq-python)
