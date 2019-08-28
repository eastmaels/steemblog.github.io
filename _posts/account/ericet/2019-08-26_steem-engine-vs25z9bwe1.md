
---
title: '怎么查看自己的Steem-Engine上的挖矿币挖矿收益?'
permlink: steem-engine-vs25z9bwe1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-26 18:05:48
categories:
- cn
tags:
- cn
- cn-reader
- whalepower
- jjm
- ctp
- steemleo
- sct
- sct-freeboard
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- sct-cn
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/ericet/6ZBdmNou-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://files.steempeak.com/file/steempeak/ericet/6ZBdmNou-image.png" alt="image.png" /><br/>

在Steem-engine上有很多不同的挖矿币，比如LEOMM，PALM，SCTM，ZZANM，LM，PHOTOM, CTPM，等等

之前也讨论过，这些挖矿币与其说是挖矿，不如说是抢红包，因为挖矿收益的多少，取决于购买挖矿币的数量和占有的比例。

每个小时会有一定数量的代币分成一定的份数分给挖矿币持有者。如果你锁仓的挖矿币比例越高，获得的代币份数就越多。

那要怎样查看你在挖矿币上的收益呢？

@holger80对scot api进行了更新，添加了挖矿币收益的历史记录。

查看挖矿币收益链接：
http://scot-api.steem-engine.com/get_account_history?account=用户名&type=mining_reward&amp;token=代币符号

比如，我要查看我在PHOTOM上挖矿收益，我可以输入：
http://scot-api.steem-engine.com/get_account_history?account=cn-exchange&type=mining_reward&token=PHOTO

得到JSON格式的结果：

<pre><code class="">[
  {
    "account": "cn-exchange",
    "int_amount": 6090000,
    "precision": 5,
    "timestamp": "2019-08-26T11:43:09",
    "token": "PHOTO",
    "trx": "9d5f37f6e6281c4c2bbe7c955ed7a82790bdfdb8",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6045000,
    "precision": 5,
    "timestamp": "2019-08-25T21:36:27",
    "token": "PHOTO",
    "trx": "453768e52ba69f307b113e26c5721838074fcfc8",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-25T20:35:57",
    "token": "PHOTO",
    "trx": "803d0417186138f8f8a46eb5df36df4bbc380eb1",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-25T11:31:21",
    "token": "PHOTO",
    "trx": "1a126fcbc946cb6309c8ceb28e262a9cfa0a955b",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6000000,
    "precision": 5,
    "timestamp": "2019-08-25T05:29:27",
    "token": "PHOTO",
    "trx": "41fba22fccf9ba1530ba2d4d966620fed50f6a7d",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6075000,
    "precision": 5,
    "timestamp": "2019-08-24T17:25:51",
    "token": "PHOTO",
    "trx": "f282f638721f1dbee8109764261598274622e429",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6075000,
    "precision": 5,
    "timestamp": "2019-08-24T17:25:51",
    "token": "PHOTO",
    "trx": "f282f638721f1dbee8109764261598274622e429",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-23T08:51:36",
    "token": "PHOTO",
    "trx": "10c8f4a29fa67f9628adad77207b530d42f82877",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6045000,
    "precision": 5,
    "timestamp": "2019-08-23T00:48:00",
    "token": "PHOTO",
    "trx": "18321511e99652afd57fb37d8d2b3fdc1e59a248",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-22T23:47:33",
    "token": "PHOTO",
    "trx": "075da53488815cbbf8b531913d0b4f8ed0c844bc",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6060000,
    "precision": 5,
    "timestamp": "2019-08-22T15:42:42",
    "token": "PHOTO",
    "trx": "73cdbda0e509180f2a333ce4820b8e89d4c20474",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-22T13:40:54",
    "token": "PHOTO",
    "trx": "e2b13fb21e589dea474d01d83a5ac566eddffe4c",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6030000,
    "precision": 5,
    "timestamp": "2019-08-22T05:38:21",
    "token": "PHOTO",
    "trx": "af260ffe2e42f780da79a78d19a7e471b87d156b",
    "type": "mining_reward"
  },
  {
    "account": "cn-exchange",
    "int_amount": 6015000,
    "precision": 5,
    "timestamp": "2019-08-21T23:36:24",
    "token": "PHOTO",
    "trx": "0b8969fd60bd5caa04d481b0544f02e551381839",
    "type": "mining_reward"
  }
]
</code></pre>

总共有14个结果，代表挖到14次矿。int_amount代表这次挖矿的收益，precision代币小数点几位数。
21号到25号，总共挖到14x60=740 PHOTO. 看起来挖矿收益不错。

目前查看的方式对普通用户来说比较难查看，但是很快就会有人弄出有UI的查看方式了。 ---

- - -

This page is synchronized from the post: ['怎么查看自己的Steem-Engine上的挖矿币挖矿收益?'](https://steemit.com/@ericet/steem-engine-vs25z9bwe1)
