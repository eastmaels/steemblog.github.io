
---
title: '[EOS学习笔记]Create Development Wallet'
permlink: eoscreate-development-wallet-1564921880
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-05 14:31:39
categories:
- eos
tags:
- eos
- cn-reader
- partiko
- sct
- zzan
thumbnail: 'https://cdn.steemitimages.com/DQmRr8LLyaymnA1Y9WfieWp9Q7iwzCnAv4GTyM1zAgt7gXK/1%20walletcreate.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Step 1: Create a Wallet

cleos wallet create --to-console

![1 walletcreate.png](https://cdn.steemitimages.com/DQmRr8LLyaymnA1Y9WfieWp9Q7iwzCnAv4GTyM1zAgt7gXK/1%20walletcreate.png)

Step 2: Open the Wallet

cleos wallet open

cleos wallet list
![2 cleoswalletlist.png](https://cdn.steemitimages.com/DQmQDvV2XuKMJgaYUiZprx9exSbGFUCkMGCRiEnkeCKEHCg/2%20cleoswalletlist.png)

Step 3: Unlock it

cleos wallet unlock

![3 cleoswalletunlock.png](https://cdn.steemitimages.com/DQmdZeQE84y4m33tnriJUzD49GMReMfUi1X34RWYfFkHG9b/3%20cleoswalletunlock.png)

再次查看wallet
cleos wallet list
![4 cleoswalletlist.png](https://cdn.steemitimages.com/DQmQmzckmH61bDbCvYfcntW763ucRjdPgkYGG8m1kb3Tq4U/4%20cleoswalletlist.png)

注： * 表示wallet 当前处于 unlock状态

Step 4: Import keys into your wallet

cleos wallet create_key
![5 cleoswalletcreate_key.png](https://cdn.steemitimages.com/DQmTpVuWM24F5KFyQk7zUsoHUTGxQF6sqbGN2QpzMnL4YZ3/5%20cleoswalletcreate_key.png)

Step 5: Follow this tutorial series more easily
![](https://cdn.steemitimages.com/DQmTyPBYMxaAkYvaKGLjF1fQ1N9UsYc8et1oinZmzHraHhx/image.png)
这里有点困惑，为何要这样做？哪位可以指点下，提前先谢谢了。

Step 6: Import the Development Key

cleos wallet import
![6 cleoswalletimport.png](https://cdn.steemitimages.com/DQmWDVS2m6atY6TC1PFwV88aVeeFRkvE7K8kRfoaeDPCFz3/6%20cleoswalletimport.png)

注意，
development key 仅供测试开发使用，绝对不可以用于实际产品应用环境。

- - -

This page is synchronized from the post: ['[EOS学习笔记]Create Development Wallet'](https://steemit.com/@rivalhw/eoscreate-development-wallet-1564921880)
