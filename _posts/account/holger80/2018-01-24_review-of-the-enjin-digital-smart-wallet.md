
---
title: 'Review of the Enjin digital smart wallet'
permlink: review-of-the-enjin-digital-smart-wallet
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-24 19:56:18
categories:
- cryptocurrency
tags:
- cryptocurrency
- wallet
- security
- erc20
thumbnail: 'https://steemitimages.com/DQma3424gXSSSTvqTKiPW8EP62dBhdKouPNzpFUBTUJe7x4/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQma3424gXSSSTvqTKiPW8EP62dBhdKouPNzpFUBTUJe7x4/image.png)
[source](https://enjinwallet.io/)
As the [Ledger Nano S](https://www.ledgerwallet.com/products/ledger-nano-s) is currently not available for a reasonable price, I was searching for a good alternative wallet for storing my ERC20 token and ETH. After testing [MEW](https://www.myetherwallet.com/) and [MetaMask](https://metamask.io/), I finally found the [Enjin wallet](https://enjinwallet.io/).  After getting familiar with the wallet, I decided to send some ETH to it. It worked! As the Enjin wallet is not widely known, I decided to write a small review about it.

# Security
* The Enjin wallet has an own keyboard which appears for entering the password. This prevents leaking through third-party keyboards. The own keyboard is also used for restoring.
* When creating a new wallet address, the 12-word seed is not copyable. This prevents leaking through the clipboard and the seed is not temporally stored in the RAM. It is also not possible to save the seed. It is only shown on the screen.
* The 12-word seed is encrypted by a password which the user sets. The password field is protected against copy and paste.
* The wallet blocks screenshots and video recording. I verified this by using Screenshot Pro. After taking a screenshot, the recorded image is just black.
* The wallet claims to have Ram encryption. This is an important feature, due to Meltdown and Spectre.
* The Ejin company has also its own ERC20 coin. This means that security of the Enjin wallet has their highest priority. In case of a bug which leads to money lost, their coin would crash.
* Save against fishing sites (a problem of MEW when not using an hardware wallet)
* The encrypted seed is not stored in a file and cannot be accidentially uploaded into the cloud.


# What do I like
* Very good security features (the best security that I have seen on a mobile wallet)
* When losing my phone, restoring the wallet is easily possible. At the same time, the wallet on the phone is protected by my password until I removed all tokens.
* All ERC20 tokens are supported.
* Possible to add custom ERC20 with custom abbreviation when their contract adress is known.
* Advanced transaction mode, it is possible to set a Gas limit and the transaction cost (Gwei is selectable between 0.1 and 160).
* The value of all stored coins is shown in fiat.
* Free and without ads

# What do I not like
* Closed source
* Audit-report is not finished yet
* No transaction time estimation 

The Enjin wallet is only available for Android at the moment. It can be downloaded from the [Play store](https://play.google.com/store/apps/details?id=com.enjin.mobile.wallet) or as APK from their [website](https://enjinwallet.io/). A version for IOS is planned.

- - -

This page is synchronized from the post: ['Review of the Enjin digital smart wallet'](https://steemit.com/@holger80/review-of-the-enjin-digital-smart-wallet)
