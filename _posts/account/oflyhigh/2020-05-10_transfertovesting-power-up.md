
---
title: '每天进步一点点：transfer_to_vesting / Power UP'
permlink: transfertovesting-power-up
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-10 03:10:33
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- vesting
- rc
- powerup
thumbnail: 'https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天在测试memo的时候，放了几段长长的古文，比如《得道多助，失道寡助》之类的，结果用力过猛，@oflyhigh.test RC不够用了。

![](https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

# RC告急

看着这段提示就很闹心，何况还要等很久等RC恢复，这我不能忍受😳
>'plugin exception:Account: oflyhigh.test has 436004956 RC, needs 535083479 '
 'RC. Please wait to transact, or power up HIVE.rethrow'

大家都知道RC和HP相关，HP越多，可用RC越多，恢复起来也越快，既然RC不够了，还要继续测试memo，那么只好Power UP了，于是用cli_wallet 的`transfer_to_vesting`功能给@oflyhigh.test Power UP了一些HP，总算可以继续愉快地测试了。
>![image.png](https://images.hive.blog/DQmcYjkqofRjgSFXwvjZtjNQxxTEp39fU9kKLTd48NmHXxz/image.png)


不过等忙完memo的事，我不禁想，自己在写程序，然后还要用cli_wallet来搞定Power UP，这多嘲讽啊，应该直接搞一个Power UP的功能嘛。
# Power UP 功能

其实Power UP的功能很好搞，首先定义如下operation：
```
op_transfer_to_vesting = ['transfer_to_vesting',{
    'from': '',
    'to':'',
    'amount':''
  }]
```
然后写类似如下的代码：
>`op[1]['from'] = from_account`
>`op[1]['to'] = to_account`
>`op[1]['amount'] = HIVE_ASSET(asset)`

>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

将其中的asset设置为`1.000 HIVE`并广播，广播出去的transaction类似如下：
>![image.png](https://images.hive.blog/DQmc5RrH7cXn9WiPt71kaA6xTVRyNRSvYVMmdjMkj5VRURJ/image.png)

在https://hiveblocks.com/ 上查看，可见Power UP已经成功了：
>![image.png](https://images.hive.blog/DQmaih3fkAeyp2cjz8bpfmh8ngJSH1HzHbV7wMTgy4HBCy1/image.png)

# 其它测试

虽然明知道Power UP HBD是不可以的，还是忍不住用`1.000 HBD`测试了一下：
>'Assert Exception:amount.symbol == STEEM_SYMBOL || ( amount.symbol.space() == '
 'asset_symbol_type::smt_nai_space && amount.symbol.is_vesting() == false ): '
 'Amount must be HIVE or SMT liquid'

注意到这个内容了吗？`Amount must be HIVE or SMT liquid`，好熟悉既陌生的SMT字样，也不知道SMT何时能上线啊？

不感慨SMT的事情了，总之***transfer_to_vesting / Power UP***功能搞定了，以后可以愉快地用自己的工具Power UP啦。

- - -

This page is synchronized from the post: ['每天进步一点点：transfer_to_vesting / Power UP'](https://steemit.com/@oflyhigh/transfertovesting-power-up)
