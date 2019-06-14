
---
title: 'steemdesktop - a new pyQt5 desktop app for steem'
permlink: steemdesktop-a-new-pyqt5-desktop-app-for-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-21 17:08:21
categories:
- utopian-io
tags:
- utopian-io
- development
- steemdesktop
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qmc4d6RQQGsf3u95z8cyk3tCqZGGNWeUHuhw2dcEqiGevS'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Repository
https://github.com/holgern/steemdesktop

## steemdesktop
steemdesktop is a new QT5 python app that allows it to check the current state of an steem account. This release is a first step in which I'm learning how to use pyQt5. I will add more useful features. At the moment only an installer for windows is available [download link](https://github.com/holgern/steemdesktop/releases/download/v0.1.0/steemdesktopSetup.exe).
I will setup a CI and build installer also for OSX and linux for the next relase.

## Installing steemdesktop
![image.png](https://ipfs.busy.org/ipfs/Qmc4d6RQQGsf3u95z8cyk3tCqZGGNWeUHuhw2dcEqiGevS)
![image.png](https://ipfs.busy.org/ipfs/QmYzjdxRuUWm2R6UBFLxfZfUkxHZeLU3an7qGc7L4kwyWV)
![image.png](https://ipfs.busy.org/ipfs/QmXBVTD4gEFMHwyFyDn7UqtASi77dSGJndJBcsuARCsrw3)
![image.png](https://ipfs.busy.org/ipfs/QmUNk9WagY5YWQH1Y6A6ffM5vWGGQjwEMaqGiUAKpG9kG4)

## Running steemdesktop
After starting steemdesktop, a steem user name can be set:
![image.png](https://ipfs.busy.org/ipfs/QmTXbgjPgYBBBVsoEofsiE2vhCMaEZL78S7q5p8RrwsSpV)

When auto refresh is enabled, the account information are updated every 5 seconds.
The steem name and the auto refresh box is stored and load on start.

It is also possible to view account information about drugwars:
![image.png](https://ipfs.busy.org/ipfs/QmbBvtrgY5TUWQ3M9fZ85Jyq2PiMkfKF8jX3FxoP7Qpi6r)
Just press the `Show drugwars stats` button and wait. During waiting a notification is shown:
![image.png](https://ipfs.busy.org/ipfs/QmeQ6HdfTKixH4RxsdvNB3DEqWSVudpA8cUnNJeQEnMCnu)

## Technology Stack
steemdesktop uses pyQt5 and the great [fman build system](https://github.com/mherrmann/fbs) which allows it to build Python GUIs for linux / macos / windows with pyQt5.

## Roadmap
At the moment the desktop app is on a very basic level. I'm planing to add step by step new features.
I will explore how to create installer for linux / macos / windows using CI. Possible new features:
* store account history in a file for faster acccess
* show information about a steem post (votes and curation)
* stream the blockchain and notify on account related events
* Add more bookkeeping stats
* Improve the layout
* show steem-engine token
* Add a wallet
* Unlock the internally used beem wallet and allow to send token/steem

## How to contribute
Bugs and ideas can be added as issue to github: https://github.com/holgern/steemdesktop
Pull requests are welcome. 

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemdesktop - a new pyQt5 desktop app for steem'](https://steemit.com/@holger80/steemdesktop-a-new-pyqt5-desktop-app-for-steem)
