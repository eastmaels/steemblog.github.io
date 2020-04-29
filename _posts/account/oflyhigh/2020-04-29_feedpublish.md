
---
title: '每天进步一点点：发布喂价(feed_publish)'
permlink: feedpublish
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-29 04:06:51
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- feed
- price
- witness
thumbnail: 'https://cdn.pixabay.com/photo/2016/07/02/22/27/european-union-1493894_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


喂价(feed price)是保证HIVE系统正常运作的基础之一，喂价由见证人根据HIVE的市场价来获取并提交给系统，这个提交的过程就是发布喂价(`feed_publish`)。

![](https://cdn.pixabay.com/photo/2016/07/02/22/27/european-union-1493894_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

系统会取3.5日内见证人喂价的中值作为系统喂价，注意是中值而不是平均值，更多细节我们就不在这篇文章中讲述了，这篇文章着重介绍发布喂价这个操作。

作为见证人，以往我都是使用 @furion的`conductor`应用来发布喂价的，这是一个基于steem-python的应用，读取很多交易所的价格，计算出实际价格并发布。但是HIVE系统上，`conductor`应该没法工作了，之前我都是使用命令行钱包发布喂价，很是不及时，所以使用程序发布很有必要。

# 发布喂价

发布喂价的Operation结构大致如下：
```
op = ['feed_publish',{
    'publisher': '',
    'exchange_rate': {
          'base': '',
          'quote': ''}
    }]
```

其中`publisher`是发布者，`exchange_rate`(兑换率)就是喂价了。关于`quote`和`base`我总是搞晕，以前总结过的结论再拿出来：
>* ***Base***: 基础资产，用于计价的资产
>* ***Quote***: 买卖资产，就是要买卖的资产

尽管`quote`和`base`可以传入任意数值的资产对，比如说1000个HIVE的价格为418HBD，但是为了便于系统处理，还是传入诸如1个HIVE价值0.480HBD的资产对比较好。

因为我使用的是`network_broadcast_api`来广播交易，所以需要将资产处理成`network_broadcast_api`识别的方式，所以对上述`op`结构赋值如下：
>`op[1]['publisher'] =  publisher`
>`op[1]['exchange_rate']['base'] = HIVE_ASSET(base)`
>`op[1]['exchange_rate']['quote'] = HIVE_ASSET(quote)`

其中`quote`为`1.000 HIVE`，`base`为当前市场行情，我撰写文章时为`0.418 HBD`。

将操作追加至事务(transaction)并用active私钥签名广播：
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

最终处理后并广播出去的事务类似如下：
>![image.png](https://images.hive.blog/DQmVbYhsi3MRLruYGb62wzQDTP6QNWfmhtZZQQRBwF1Jt6w/image.png)

在https://hiveblocks.com/ 上查看，可以看到我的喂价已经成功发布：
>![image.png](https://images.hive.blog/DQmcPWxnNeq4m9kB78a2xmoajn1hzKgNCBUyzDqxvCXUgED/image.png)

# 其它测试

如果使用Posting私钥来发布喂价会是怎样一种情况呢？我测试一下，返回结果如下:
>'missing required active authority:Missing Active Authority oflyhigh'


如果一个并不是见证人的用户，尝试发布喂价，会是什么情况呢？我尝试用@oflyhigh.test 这个用户的active key发布喂价，系统给了我如下提示：
>'unknown key:unknown key: '

# 补充

尽管已经可以使用程序发布喂价，但是实际上并不比命令行钱包方便多少。

需要更进一步完善，读取已上币交易所的行情，根据行情动态发布喂价，这样才算是完善的程序。

- - -

This page is synchronized from the post: ['每天进步一点点：发布喂价(feed_publish)'](https://steemit.com/@oflyhigh/feedpublish)
