
---
title: 'SteemVBS - Adding Reputation, GetProfile, GetWitnessVotes, ValidateAccountName'
permlink: steemvbs-adding-reputation-getprofile-getwitnessvotes-validateaccountname
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-15 22:57:00
categories:
- utopian-io
tags:
- utopian-io
- development
- steemvbs
- programming
- busy
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
[SteemVBS](https://helloacm.com/steemvbs-yes-it-is-vbscript/) is the first Steem Library written in [VBScript](https://helloacm.com/scriptunit-vbscriptjscript-unit-tests-runner/). Yes, it is VBScript. ;)

## SteemVBS
[VBScript](https://isvbscriptdead.com) is still being used nowadays, especially on windows platforms. You can do so much thing using VBScript. The aim of the SteemVBS is to provide a few useful functions that connect Network Adminstrators or MS Officer users (via VBA) to Steem Blockchain.

Fully open source: https://github.com/DoctorLai/steemvbs
Submit PR or Issue.

## New Features
[**Commits**](https://github.com/DoctorLai/steemvbs/commit/d997a6debcb1981e198bbb3e0f4848412c186961): A few functions/classes  and unit tests have been added in:

### Formater Reputation
```
Dim Format
Set Format = New Formatter

Const EPSILON = 1e-3

AssertEqualFloat Format.Reputation(95832978796820), 69.833, EPSILON, "Format.Reputation 95832978796820"

AssertEqualFloat Format.Reputation(10004392664120), 61.0017, EPSILON, "Format.Reputation 10004392664120"

AssertEqualFloat Format.Reputation(30999525306309), 65.42219, EPSILON, "Format.Reputation 30999525306309"

AssertEqualFloat Format.Reputation(-37765258368568), -16.193832, EPSILON, "Format.Reputation -37765258368568"

Set Format = Nothing
```

### ValidateAccountName
```
' Test ValidateAccountName

Dim u
Set u = New Utility

AssertEqual u.ValidateAccountName("justyy"), "", ""

AssertEqual u.ValidateAccountName("justyy**"), "Account name should have only letters, digits, or dashes.", ""

AssertEqual u.ValidateAccountName("a    "), "Account name should have only letters, digits, or dashes.", ""

AssertEqual u.ValidateAccountName("12341234"), "Account name should start with a letter.", ""

AssertEqual u.ValidateAccountName("  askd f"), "Account name should start with a letter.", ""

AssertEqual u.ValidateAccountName("-"), "Account name should be longer.", ""

AssertEqual u.ValidateAccountName("-aasdfasdfasdfasdfasdfasdfasdfasdf"), "Account name should be shorter.", ""

Set u = Nothing
```

### Get Profile String
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.GetAccount_Profile("justyy")
```

### Get Witness Votes
```
' test GetAccount_WitnessVotes

Dim SteemIt
Set SteemIt = New Steem

Dim Util
Set Util = New Utility

Dim witness
witness = SteemIt.GetAccount_WitnessVotes("justyy")

AssertTrue Util.InArray("abit", witness), "justyy should vote abit"

AssertTrue Util.InArray("jerrybanfield", witness), "justyy should vote jerrybanfield"

Set SteemIt = Nothing
Set Util = Nothing
```

## Roadmap
Most of the features of [Steem-Js](https://helloacm.com/the-steemjs-editor-test-your-steemjs-code-snippet-easily/) and Steem-Python will be brought in.

## Notice
This library is under development. Beware.

--------------------------------------------
Support me and [my work](https://helloacm.com/steemvbs-adding-reputation-getprofile-getwitnessvotes-validateaccountname/) as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by

1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)** Thank you!

- - -

This page is synchronized from the post: [SteemVBS - Adding Reputation, GetProfile, GetWitnessVotes, ValidateAccountName](https://steemit.com/@justyy/steemvbs-adding-reputation-getprofile-getwitnessvotes-validateaccountname)
