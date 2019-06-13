
---
title: 'LogoTurtle v0.0.15: Add GOTO and Configure Project CI on Travis'
permlink: logoturtle-v0-0-15-add-goto-and-configure-project-ci-on-travis
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-27 16:13:39
categories:
- utopian-io
tags:
- utopian-io
- programming
- steemstem
- busy
- development
thumbnail: https://ipfs.busy.org/ipfs/QmU5XJ5RsVchdxifDgw3WqvsoqoCmuHu9aKnWjjpEkibf8
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[LogoTurtle](https://helloacm.com/logoturtle-v0-0-14-add-status-bar-add-repcount-and-bug-fixes/) is the first and currently only one Chrome Extension for Logo Programming. I personally use this tool to teach my sons the [turtle graphics](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/).

Last update was made 9 months ago: [LogoTurtle v0.0.14: Add Status Bar, Add Repcount and Bug Fixes](https://steemit.com/utopian-io/@justyy/logoturtle-v0-0-14-add-status-bar-add-repcount-and-bug-fixes)

This is probably the [first version of LOGO that supports GOTO keyword](https://helloacm.com/the-goto-keyword-in-logo-turtle-programming/).

## How to Install?
Chrome Webstore: https://chrome.google.com/webstore/detail/logo-turtle/dcoeaobaokbccdcnadncifmconllpihp

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install LogoTurtle.

## New Features v0.0.15
1. Add GOTO: [Merged PR](https://github.com/DoctorLai/LogoTurtle/pull/2)
![image.png](https://ipfs.busy.org/ipfs/QmU5XJ5RsVchdxifDgw3WqvsoqoCmuHu9aKnWjjpEkibf8)
```
rt 10
goto @start
repeat [5 fd 100 rt 144]
@start
make "i 0
@hello
fd 100
rt 90
make "i :i+1
if :i<4  [goto @hello] 
fd 100
```
2. Move Project on Travis-CI so  you should see a green build: https://travis-ci.com/DoctorLai/LogoTurtle
![image.png](https://ipfs.busy.org/ipfs/QmTPDL9yk88qQABo5AR5mXP9ULP45HTd4bjtEELiuUbubB)

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [LogoTurtle v0.0.15: Add GOTO and Configure Project CI on Travis](https://steemit.com/@justyy/logoturtle-v0-0-15-add-goto-and-configure-project-ci-on-travis)
