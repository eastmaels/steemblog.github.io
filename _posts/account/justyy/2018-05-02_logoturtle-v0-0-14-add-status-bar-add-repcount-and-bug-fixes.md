
---
title: 'LogoTurtle v0.0.14: Add Status Bar, Add Repcount and Bug Fixes'
permlink: logoturtle-v0-0-14-add-status-bar-add-repcount-and-bug-fixes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-02 10:21:51
categories:
- utopian-io
tags:
- utopian-io
- programming
- steemstem
- busy
- graphics
thumbnail: https://steemitimages.com/DQmQ2rR8tFiqqg28mNXE9rTtgbG98N9btf8xdre2vQEEboD/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[LogoTurtle](https://helloacm.com/logoturtle-v0-0-14-add-status-bar-add-repcount-and-bug-fixes/) is the first and currently only one Chrome Extension for Logo Programming. I personally use this tool to teach my sons the [turtle graphics](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/).

My sons Eric (5 year old) and Ryan (4 year old) they work together to build a green house and they enjoy it.
![](https://steemitimages.com/DQmQ2rR8tFiqqg28mNXE9rTtgbG98N9btf8xdre2vQEEboD/image.png)

## How to Install?
Chrome Webstore: https://chrome.google.com/webstore/detail/logo-turtle/dcoeaobaokbccdcnadncifmconllpihp

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install LogoTurtle.

## New Features v0.0.14
Commits: [here](https://github.com/DoctorLai/LogoTurtle/commit/e33d654df9bf8ea974fdbb625432119b7b6c5636) and [here](https://github.com/DoctorLai/LogoTurtle/commit/f41f9715925f6737dfe6a007ca58bb84a9f06d4c)

Status Bar added so that you can see the status of turtle (position, angle, pendown or penup) and the last error message.
![](https://steemitimages.com/DQmUo5ydN9H2ebz3zJ9G6AM4iahTrmEkGCopecD4bTLqW3s/image.png)

Add ShortCode - `cube` and `star`
![](https://steemitimages.com/DQmVuGF2whJVwR4vK5W7KyECU4Tezvh4rNfwQvGLKYPCyrH/image.png)

![](https://steemitimages.com/DQmSdLC7m7fVxWv87ckEd3jXMz2FRDzNx9MrSzCNqHVNkae/image.png)

Add Variable `repcount`
So you can do something like this:

```
cs repeat 200 [fd :repcount rt 89]
```

![](https://steemitimages.com/DQmU2bYW4WMJEj4oondWGhZZYXAcEDMtQvbT54j7yE5FtbT/image.png)

Bug fixes for commands `setxy`, `dotxy` and etc where the command fails when the parameters are zero because in [Javascript](https://helloacm.com/ppap-in-cpp-and-javascript-for-beginner/) `0 == ''` is true and we should use `0 === ''` instead to check the validity of the parameters.

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [LogoTurtle v0.0.14: Add Status Bar, Add Repcount and Bug Fixes](https://steemit.com/@justyy/logoturtle-v0-0-14-add-status-bar-add-repcount-and-bug-fixes)
