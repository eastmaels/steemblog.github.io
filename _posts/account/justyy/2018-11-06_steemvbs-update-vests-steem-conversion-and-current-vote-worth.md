
---
title: 'SteemVBS Update: Vests/Steem Conversion and Current Vote Worth'
permlink: steemvbs-update-vests-steem-conversion-and-current-vote-worth
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-06 01:27:57
categories:
- utopian-io
tags:
- utopian-io
- development
- steemvbs
- busy
- programming
thumbnail: 'https://helloacm.com/wp-content/uploads/2018/05/vbscript.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://helloacm.com/wp-content/uploads/2018/05/vbscript.png)

# Introducing to SteemVBS
[SteemVBS](https://helloacm.com/get-following-and-followers-details-via-steemvbs/)  is the first Steem Library written in VBScript. Yes, it is [VBScript](https://isvbscriptdead.com). ;)

# New Features
Adding the support for Vests/Steem Conversions and the functions to get the current vote worth. In particular, the following functions have been added to the library.

1. Steem_Per_MVests
2. Vests_To_Steem
3. GetRewardFund
4. GetRecentClaims
5. GetAccountVests
6. GetMedianPrice
7. GetAccount_UpvoteValue

# Examples
Vests and Steem:
```
Dim SteemIt
Set SteemIt = New Steem

WScript.Echo SteemIt.Steem_Per_MVests
WScript.Echo SteemIt.Vests_To_Steem(1)
WScript.Echo SteemIt.Steem_To_Vests(1)
```
Get Current Vote Worth:
```
' get account upvote value
Public Function GetAccount_UpvoteValue(id, vp, weight)
    Dim power
    power = (100 * vp * 100 * weight / 1e4 + 49) / 50
    Dim total_vests
    total_vests = GetAccountVests(id)
    Dim final_vests
    final_vests = total_vests * 1e6
    Dim rshares
    rshares = power * final_vests / 1e4
    Dim rewards
    rewards = GetRewardFund
    Dim sbd_median_price
    sbd_median_price = GetMedianPrice
    Dim estimate
    estimate = rshares / GetRecentClaims * rewards * sbd_median_price
    GetAccount_UpvoteValue = estimate
End Function
```

Fully Unit Tested:

```
Dim SteemIt
Set SteemIt = New Steem

Dim Util
Set Util = New Utility

Dim fund
fund = SteemIt.GetRewardFund
AssertTrue fund > 0, "Rewards Pool should be larger than zero"

Dim esp
esp = SteemIt.Vests_To_Steem(SteemIt.GetAccountVests("justyy"))
AssertTrue esp > 1000, "justyy's ESP should be at least 1000"

Dim price
price = SteemIt.GetMedianPrice
AssertTrue price > 0, "median price should be larger than 0"

Dim upvote_value
upvote_value = SteemIt.GetAccount_UpvoteValue("justyy", 100, 100)
AssertTrue upvote_value > 0.1, "full vote value should be at least $0.1"

Dim current_upvote_value
current_upvote_value = SteemIt.GetAccount_UpvoteValue("justyy", 50, 20)
AssertEqualFloat upvote_value * 0.5 * 0.2, current_upvote_value, 0.1, "current upvote value calculation error"

Set SteemIt = Nothing
Set Util = Nothing
```

![image.png](https://ipfs.busy.org/ipfs/QmbN52gNesLBi2tG4abwypGKoytmA3iFXExXaXL2cRaCbu)

# Github
https://github.com/DoctorLai/steemvbs

# Pull Requests
https://github.com/DoctorLai/steemvbs/pull/1

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)


- - -

This page is synchronized from the post: ['SteemVBS Update: Vests/Steem Conversion and Current Vote Worth'](https://steemit.com/@justyy/steemvbs-update-vests-steem-conversion-and-current-vote-worth)
