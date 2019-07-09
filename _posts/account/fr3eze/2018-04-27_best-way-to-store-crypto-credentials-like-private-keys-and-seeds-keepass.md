
---
title: 'Best way to store crypto credentials like private keys and seeds -- Keepass'
permlink: best-way-to-store-crypto-credentials-like-private-keys-and-seeds-keepass
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-27 16:49:54
categories:
- security
tags:
- security
- crypto
- busy
- cryptocurrency
- cn
thumbnail: 'https://gateway.ipfs.io/ipfs/QmeBeWRhvjkCV8T4ZhDjDJtvqwXzhQETLL5ARQRw7Z8yLt'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![image.png](https://gateway.ipfs.io/ipfs/QmeBeWRhvjkCV8T4ZhDjDJtvqwXzhQETLL5ARQRw7Z8yLt)</center>


Password manager is not only meant for managing password for logging in website on a browser, I should have thought of this idea much early, how silly me. 

Before entering the circle of cryptocurrency, I never so been so paranoid about the security of some digital random phrase. The most important digital text to me was probably my online banking password, which I could easily retrieve by clicking on the "Forgot your password?" link.

## Crypto is a completely different game

The rule is simple here -- who owns the private key, who owns everything in it. There is no authority the victims could ask for help because they themselves are the only authority. While the hardware wallet like Trezor is the best device every crypto investor should get, there are still too many of interesting coins which haven't partnered with hardware wallet. Steem is one of them so let's take it as example.

We all know how important is the Steem owner key, but how do you store them? How do you secure this ultra-sensitive long phrase that represents the absolute ownership of your Steem account?

I used to store them using [7z built-in encryption method](/utopian-io/@fr3eze/encrypt-cryptocurrency-credentials-using-7-zip) up to the moment before I'm writing this post. 7z does good in offering simple encrypting feature but it is designed for protecting truly sensitive data.

## KeepPass maybe the best and final solution here

>KeePass is a free open source password manager, which helps you to manage your passwords in a secure way. You can put all your passwords in one database, which is locked with one master key or a key file. So you only have to remember one single master password or select the key file to unlock the whole database. The databases are encrypted using the best and most secure encryption algorithms currently known (AES and Twofish).

KeePass has everything to be a perfect candidate of the crypto guardian:
- Open source so anyone can throw an security audit to it anytime.
- Offline so no one is hosting the database other than the user.
- Key file could be the best solution against key logging.
- Cross-platform
- Made to store various of password or complex code
- Use one of the most advanced encryption algorithms

## How to setup

1)Download it [here](https://steemit.com/security/@fr3eze/best-way-to-store-crypto-credentials-like-private-keys-and-seeds-keepass). Create a KeePass database file, in this case it is `crypto_keys.kdbx`.

![1.png](https://gateway.ipfs.io/ipfs/QmSAXFHu3H1tS6m3BD3yYh6hk4WyrGCSpNj87wdBiUd35D)

2)Create a strong password is the key here. It should be strong enough to withstand any brute-forcing cracking process in case the database file is compromised. For the expert you might want to explore the [key file method](https://keepass.info/help/base/keys.html).

![2.png](https://gateway.ipfs.io/ipfs/QmNgG9dZmeThNAGKWcnds8WuzEfLTq5r94fRVVyH7rvMkf)

3)Simply give it a database name, keep the rest setting as default unless you want customize it further.

![3.png](https://gateway.ipfs.io/ipfs/Qmecux8WyRqwYgT4TVcJVnsAGz1q2nWy3LQY11QiYodr7V)

4)First let's see how it store Steem's key. I set `fr3eze` as the user name and put some random key as the password. 

![4.png](https://gateway.ipfs.io/ipfs/QmafayxL8B9RNT1dVoerK3xyrdMkhUHsDxE5k41wwHVgRR)

5)I will add another entry using EOS key pair. In this case I put 'EOS' as the title and leave the username empty. Private key in the password column while the public key in the note area. I leave other settings as default for both entry.

![5.png](https://gateway.ipfs.io/ipfs/QmRSQgtEjrrfv51PYVy9bf3RkUWcrV9CXbpMnKchWx8zqQ)

6)This is how the database looks like so far with the Steem and EOS entry. 

![sdfsdf.PNG](https://gateway.ipfs.io/ipfs/Qmem1cCJFXLbgy1GStcMhUjNH6p5J5DarQWavbngEpDzyi)

7)Here is what making the KeePass really handy if you need to copy the user name, password or notes. Just double click on the text and you shall see the bottom bar indicating the click phrase is copied to the clipboard and will be cleared in 12 seconds.

![6.png](https://gateway.ipfs.io/ipfs/QmVamWS7Mk5GTbUR6NkmoqGyNJeueTQ8zTaG8Sp3CZkoxE)

8)Save and quit the KeePass. This is the database that I just created and it will be all you need to care about. Spread it over your private cloud or flash drive for better portability. There are many third party plugins from various platform to access this file but the general rule is stick only to those reputable or open source programs.

![7.png](https://gateway.ipfs.io/ipfs/QmVVYLhJYzo4rNTz5bH8JyuZKxfK7Tw5CQzDersNUiRmva)

---

This is by far the best method to store private information about crypto to me. Are you with me?

---

[KeePass](https://steemit.com/security/@fr3eze/best-way-to-store-crypto-credentials-like-private-keys-and-seeds-keepass) 是开源项目里最有名气的密码管家，作为管理加密货币的绝密资讯最适合不过。比如恢复种子和私钥等等，之前都是用 7z 来简单的加密，使用 KeePass 的好处有：

- 免费开源，所以每个人都可以审核监督软件的安全程度。
- 离线设计，没有人拥有你的数据库，全是自己说了算。
- 加密设计非常先进。
- 跨平台。
- 本来就为收藏多种密码而设计。

不知你有什么更好保护货币密码的方法？

---

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>






- - -

This page is synchronized from the post: ['Best way to store crypto credentials like private keys and seeds -- Keepass'](https://steemit.com/@fr3eze/best-way-to-store-crypto-credentials-like-private-keys-and-seeds-keepass)
