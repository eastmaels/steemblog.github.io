
---
title: 'Trezor cannot claim Bitcoin Gold with its Claim Tool'
permlink: trezor-cannot-claim-bitcoin-gold-with-its-claim-tool
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-26 18:33:30
categories:
- utopian-io
tags:
- utopian-io
- bug
- teammalaysia
- wallet
- cn
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1516855669/nwsykdelopdgltje9hwt.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



#### Expected behavior

Trezor should show me the BTG amount that I can claim using the tool. Picture below is the expected result taken from [official Trezor blog](https://blog.trezor.io/claim-bitcoin-gold-bgold-btg-f66969e7f2c0).

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516855669/nwsykdelopdgltje9hwt.png)

#### Actual behavior
After selecting either *Standard account* or *Legacy account* to claim BTG, the page will wait for about 16 second and return with a error message.

#### How to reproduce

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516856141/y1sqylpkerp8cpymnkny.png)

1\) Login Trezor via [https://wallet.trezor.io](https://wallet.trezor.io). If you are prompted with firmware update, do it and update to latest firmware before the claiming process. Ihe the latest firmware, there will be a new wallet `Bitcoin Gold (BTG)`. Select it.

![chrome_2018-01-25_12-58-29.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516856346/ndtb6qznbnp3gudlixqr.png)

2\) Clink on the *coin-splitting tool* and a new tab will be opened up.

The alternative way is access Claim tool via [trezor.io/claim-btg](trezor.io/claim-btg)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516856513/rvpfkb2415owx2qxk9sw.png)

3\) In the Tool page, you will have to choose which Bitcoin account you want to claim from. In my case, I choose *Legacy account* as I store my BTC there during the fork.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516856880/qox4qbzps6fdowiwcany.png)

4\) Wait for about 16s, an error mesasge `Reading of accounts failed.` will poped up. Same thing happened if I claim from *Standard account*.

* Browser: Google Chrome [Version 63.0.3239.132 (Official Build) (64-bit)]
* Operating system: Windows 7 & 10
* Trezor firmware: 1.6.0


#### Recording Of The Bug

![ezgif.com-video-to-gif (2).gif](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516857444/caywpo0f04lfkqzn1rur.gif)


  ![ezgif.com-video-to-gif (1).gif](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516857400/ewpp6jilyg3pvbdduvou.gif)


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/trezor-cannot-claim-bitcoin-gold-with-its-claim-tool">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Trezor cannot claim Bitcoin Gold with its Claim Tool'](https://steemit.com/@fr3eze/trezor-cannot-claim-bitcoin-gold-with-its-claim-tool)
