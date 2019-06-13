
---
title: 'SteemVBS Update - GetVotingPower, Get Post URL from Comment, Suggested Password, Effective SP, VestsToSP and more!'
permlink: steemvbs-update-getvotingpower-get-post-url-from-comment-suggested-password-effective-sp-veststosp-and-more
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-21 23:46:48
categories:
- utopian-io
tags:
- utopian-io
- development
- witness-category
- busy
- steemvbs
thumbnail: https://steemitimages.com/DQmbfQjSSMXs98nNaQF8i9mhk6L9a4kdTt23sV2VUSJCnwV/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmbfQjSSMXs98nNaQF8i9mhk6L9a4kdTt23sV2VUSJCnwV/image.png)

SteemVBS is a steem library that is written in [VBScript](https://helloacm.com/steemvbs-yes-it-is-vbscript/). It aims to provide interface between [VBScript](https://isvbscriptdead.com) and the Steem Blockchain so that you can easily access steem blockchain via e.g. Microsoft Office VBA or if you are simply a windows administrator.

#### Repository
https://github.com/DoctorLai/steemvbs/

### New Features
#### Adding Real time Voting Power
```
' test GetAccount_VotingPower

Dim SteemIt
Set SteemIt = New Steem

Dim vp
vp = SteemIt.GetAccount_VotingPower("justyy")

AssertTrue vp >= 60 And vp <= 100, "justyy vp should be between 60 and 100"

Set SteemIt = Nothing
```

#### Adding Account Effective Steem Power
```
' test GetAccount_EffectiveSteemPower

Dim SteemIt
Set SteemIt = New Steem

Dim esp
esp = SteemIt.GetAccount_EffectiveSteemPower("justyy")

WScript.Echo esp
AssertTrue esp >= 20000, "justyy esp should be larger than 20000"

Set SteemIt = Nothing
```

#### Adding CreateSuggestedPassword
```
Dim x
Set x = New Utility

WScript.Echo x.CreateSuggestedPassword

Set x = Nothing
```

#### GetUrlFromCommentPermLink
This function returns the steem post url given a comment url

```
' Test GetUrlFromCommentPermLink

Dim x
Set x = New Utility

AssertEqual x.GetUrlFromCommentPermLink("re-tvb-re-justyy-re-tvb-45qr3w-20171011t144205534z"), "https://steemit.com/@tvb/45qr3w", ""

AssertEqual x.GetUrlFromCommentPermLink("re-justyy-daily-quality-cn-posts-selected-and-rewarded-promo-cn-20180520t153728557z"), "https://steemit.com/@justyy/daily-quality-cn-posts-selected-and-rewarded-promo-cn", ""

Set x = Nothing
```

#### Vests to Steem Power
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.VestsToSp(1234234)

Set SteemIt = Nothing
```

#### Invalidate Cache
```
Dim SteemIt
Set SteemIt = New Steem

' fresh
WScript.Echo SteemIt.GetAccount_VotingPower("justyy")
' cached
WScript.Echo SteemIt.GetAccount_VotingPower("justyy")
' do not use cache
SteemIt.Cache = False
WScript.Echo SteemIt.GetAccount_VotingPower("justyy")

Set SteemIt = Nothing
```

#### Vests
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.GetAccount_VestingShares("justyy")

Set SteemIt = Nothing
```

#### Delegated Vests
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.GetAccount_DelegatedVestingShares("justyy")

Set SteemIt = Nothing
```

#### Received Vests
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.GetAccount_ReceivedVestingShares("justyy")

Set SteemIt = Nothing
```

### How did you implement it/them?
[Commits](https://github.com/DoctorLai/steemvbs/commit/6586ee4dac41ad6059836d8d6613a8afedb1618b) and [Docs Update](https://github.com/DoctorLai/steemvbs/commit/8b71805cf423694258ad606be423e08c0d913adc)

#### GitHub Account
https://github.com/DoctorLai

--------------------------------------------
Support me and [my work](https://helloacm.com/steemvbs-development-getvotingpower-get-post-url-from-comment-suggested-password-effective-sp-veststosp-and-more/) as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by

1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)** Thank you!

- - -

This page is synchronized from the post: [SteemVBS Update - GetVotingPower, Get Post URL from Comment, Suggested Password, Effective SP, VestsToSP and more!](https://steemit.com/@justyy/steemvbs-update-getvotingpower-get-post-url-from-comment-suggested-password-effective-sp-veststosp-and-more)
