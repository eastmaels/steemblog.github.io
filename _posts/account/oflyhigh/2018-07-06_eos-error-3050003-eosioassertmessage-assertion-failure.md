
---
title: '解决EOS "Error 3050003: eosio_assert_message assertion failure"的小技巧'
permlink: eos-error-3050003-eosioassertmessage-assertion-failure
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-06 15:29:12
categories:
- cn
tags:
- cn
- eos
- error
- nodeos
- cn-programming
thumbnail: https://cdn.steemitimages.com/DQmSBPu9DLmXcveqJnmXQzo98TNEobMbsGf7gKhQDXxPptX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天想注册一个EOS账户，然后进行EOS操作的时候，怎么操作也不成功，然后提示就一句
>Error 3050003: eosio_assert_message assertion failure

![](https://cdn.steemitimages.com/DQmSBPu9DLmXcveqJnmXQzo98TNEobMbsGf7gKhQDXxPptX/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

然后下面就没有了，用网络流行语来讲，变太监了 😵，为啥出错给个提示嘛，我查啊查啊，死活也查不出来问题在哪，我查看了无数次的命令行帮助，总觉得我的命令不会有错的。

既然命令不会有错，那么是哪里出错了呢，我还是去EOSIO的Github上瞧瞧吧，结果好多人遇到和我类似的问题，简单来讲，就是提示上述出错信息，但是不知道错在哪里。

我翻啊翻啊，前几个issue页面里边没啥实质内容，最可气的是有一个家伙问完问题后，又在底下回复他已经解决，然后好些人问他如何解决的，他竟然消失了~~~

哼，我要是解决了这个问题，我准保共享给大家，毕竟困扰我大半天呢，我找啊找啊，功夫不负有心人，看到有人提`--verbose-http-errors` 于是我在cleos的命令里加上这个参数，竟然提示我错误参数，这又是咋回事呢？

后来想想这个eos，除了cleos，就是keosd，要么就是nodeos，看来看去，给nodeos加个参数更靠谱，停掉nodeos，加上参数重启
>`nodeos --verbose-http-errors`

貌似一切正常，再重新执行创建用户命令，提示信息果然变了：
>Error 3050003: eosio_assert_message assertion failure
Error Details:
assertion failure with message: no active bid for name
![](https://cdn.steemitimages.com/DQmdT36qFdv7HDeNEk13X29e52vW6gsZGnBF8PrxnXK4MvQ/image.png)

bidname不是竞价抢注用户名吗？我就是正常注册而已啊，普通的12位用户名嘛。咦，等等，让我好好数数，1、2、3......10、11，咦，我的第12个字母呢？

原来我想好的用户名只有11位，话说我记得我数了无数遍呢。哎，看来这个名没法用了，绞尽脑汁重新想了一个名，注册，耶，成功啦。

你看，有出错的细节信息，定位和解决问题就无比简单，可惜这么简单一个问题，耗费我大半天时间，我早知道有`--verbose-http-errors`参数就好啦。

![](https://cdn.steemitimages.com/DQmUpEwMEXtzvk7V8EYJsRfze7wHmWkgg1DTqvGT12XoJBm/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

所以，小伙伴们遇到类似问题不要慌，加上这个参数就好啦。不过小伙伴们用公共节点的话，一般他们都会设置好，如果遇到这类问题，换个节点就好啦，只有像我这样自己弄私有节点瞎折腾的，才会有这个问题呢😔

- - -

This page is synchronized from the post: [解决EOS "Error 3050003: eosio_assert_message assertion failure"的小技巧](https://steemit.com/@oflyhigh/eos-error-3050003-eosioassertmessage-assertion-failure)
