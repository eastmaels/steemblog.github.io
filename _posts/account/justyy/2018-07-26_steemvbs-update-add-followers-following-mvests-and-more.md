
---
title: 'SteemVBS Update - Add Followers, Following, MVests and More'
permlink: steemvbs-update-add-followers-following-mvests-and-more
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-26 01:59:30
categories:
- utopian-io
tags:
- utopian-io
- development
- steemvbs
- busy
- witness-category
thumbnail: https://steemitimages.com/DQmWEvXLocCvB96wNF1qFaFuRnAck75hrxuVp9BzPFmv35C/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmWEvXLocCvB96wNF1qFaFuRnAck75hrxuVp9BzPFmv35C/image.png)

[SteemVBS](https://helloacm.com/steemvbs-yes-it-is-vbscript/) is the first Steem Library written in [VBScript](https://helloacm.com/get-following-and-followers-details-via-steemvbs/). Yes, it is [VBScript](https://helloacm.com/scriptunit-vbscriptjscript-unit-tests-runner/). ;)

# SteemVBS
[VBScript](https://isvbscriptdead.com) is still being used nowadays, especially on windows platforms. You can do so much thing using VBScript. The aim of the SteemVBS is to provide a few useful functions that connect Network Adminstrators or MS Officer users (via VBA) to Steem Blockchain.

Fully open source: https://github.com/DoctorLai/steemvbs
Submit PR or Issue.

# New Features
A few functions and unit tests have been added in:
- [Commits on Jul 26, 2018](https://github.com/DoctorLai/steemvbs/commits?author=DoctorLai)

## GetAccount_Recovery
```
Dim SteemIt
Set SteemIt = New Steem

Dim re
re = SteemIt.GetAccount_Recovery("justyy")

AssertTrue re = "steem", "justyy's account recovery is not steem."

Set SteemIt = Nothing
```

## GetAccount_Followers
```
Dim SteemIt
Set SteemIt = New Steem

Dim Util
Set Util = New Utility

Dim followers
followers = SteemIt.GetAccount_Followers("justyy")

AssertTrue Util.InArray("ericet", followers), "ericet should follow justyy"

Set SteemIt = Nothing
Set Util = Nothing
```

## GetAccount_Following
```
' test GetAccount_Following

Dim SteemIt
Set SteemIt = New Steem

Dim Util
Set Util = New Utility

Dim followers
followers = SteemIt.GetAccount_Following("justyy")

AssertTrue Util.InArray("abit", followers), "justyy should follow abit"
AssertTrue Util.InArray("ericet", followers), "justyy should follow ericet"
```

## GetAccount_FollowingCount And GetAccount_FollowersCount
```
Dim SteemIt
Set SteemIt = New Steem

Dim c1, c2
c1 = SteemIt.GetAccount_FollowingCount("justyy")
c2 = SteemIt.GetAccount_FollowersCount("justyy")

AssertTrue c1 < c2, "GetAccount_FollowingCount < GetAccount_FollowersCount"
AssertTrue c1 > 100, "GetAccount_FollowingCount > 100"
AssertTrue c2 > 100, "GetAccount_FollowersCount > 100"
```

## GetAccount_FollowersMVest
```
Dim SteemIt
Set SteemIt = New Steem

Dim c1, c2
c1 = SteemIt.GetAccount_FollowersMVest("justyy")
AssertTrue c1 > 154101235.57696211338, "GetAccount_FollowersMVest > 154101235"
```

# Unit Tests
Unit tests can be run via

```
cscript.exe /Nologo tests.wsf tests\test_account.vbs
```

or you can call `run_tests.cmd` to run all tests in the test folder `tests`.

![](https://github.com/DoctorLai/steemvbs/blob/master/run_tests.jpg?raw=true)

# Roadmap
The features of Steem-Js and Steem-Python will be brought in. 

# Notice
This library is under development. Beware.

-------------------------

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [SteemVBS Update - Add Followers, Following, MVests and More](https://steemit.com/@justyy/steemvbs-update-add-followers-following-mvests-and-more)
