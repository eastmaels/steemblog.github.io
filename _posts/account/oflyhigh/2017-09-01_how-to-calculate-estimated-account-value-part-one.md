
---
title: 'How to calculate estimated account value: Part One / 如何计算账户估值：第一部分'
permlink: how-to-calculate-estimated-account-value-part-one
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-01 10:47:03
categories:
- steemdev
tags:
- steemdev
- steemit
- wallet
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmbJsbAdBGz7L6r7nkrEuJjeZHGcpb3Lh2ABo7iei98v1S/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Are you curious about your estimated account value?  Or,  curious about estimated account value of your friends?

![](https://steemitimages.com/DQmbJsbAdBGz7L6r7nkrEuJjeZHGcpb3Lh2ABo7iei98v1S/image.png)

# Get estimated account value in wallet page

You can check your estimated account value in your wallet after your logged in steemit.com, and you can check your friend's wallet by visit https://steemit.com/@yourfriendid/transfers without login. But, Have you noticed that there are some differences between them?

Take my account for example:

#### ✅️Check my wallet after logged-in
![](https://steemitimages.com/DQmVgdiMVYtEMNuy8fSHKPibUHyoQUyiycq3VfJuo94GJse/image.png)

----

#### ❌️Check my wallet without  logged-in
![](https://steemitimages.com/DQmNnate1fykMWgdBVzFcQ7bx98jbQUV5VUFLoF78hojpQr/image.png)

Pay attention to where I marked it, the estimated account value after logged-in in is  more than without logged-in. Why? ⚠️Because ***the assets in internal market are not counted in estimated account value if this account is not logged in***.

So, if your friends have a lot of assets  in internal market, you will get a completely wrong value.

# How to solve this problem?

There is a API `get_open_orders`, will return all open orders in internal market of the specified account, and then we can calculate the assets in internal market of this account. 

Is it enough? No!
After we got account's assets in internal market by script, we need to manually add them to the values we got from web page(wallet), This is very annoying thing.  A better way is to read the user's wallet information by script too, and then add the corresponding information together.

# What we need to get?

To read the user's wallet information, we need to get the following information:
* STEEM
* STEEM POWER
* STEEM DOLLARS
* STEEM in SAVINGS
* STEEM DOLLARS in SAVINGS

Is it enough now? No!

There a function in wallet called  ***Convert to Steem***, if you use it to convert SBD to STEEM, your SBD will disappear from the wallet, until it be converted successfully. 

So, It should be better if we can obtain the assets(SBD) to be converted.
Fortunately, there is a API called `get_conversion_requests`. We can use it to calculate the amount of assets(SBD).

And after HF18, users need to claim their rewards manually, so to accurately calculate the estimated account value, we need to add this part:  ***Rewards to be claim***

# Conclusions

Estimated account value contains four parts:

1) The assets in wallet( And in SAVINGS)
2) The assets in internal market
3) The assets(SBD) in conversion processes
4) The assets(rewards) to be claimed

To calculate estimated account value, we need to get following items:

* STEEM
* STEEM POWER
* STEEM DOLLARS
* STEEM in SAVINGS
* STEEM DOLLARS in SAVINGS
* ***STEEM in internal market***
* ***STEEM DOLLARS in internal market***
* ***STEEM DOLLARS in conversion requests***
* ***STEEM Reward to be claimed***
* ***STEEM POWER to be claimed***
* ***STEEM DOLLARS to be claimed***

I'll explain how to get these items in my next article.
Thank you for reading.

# 中文

登陆查看用户账户估值，和不登录查看，结果会有一些区别。
如果没有登陆，或者ID A登录查看ID B的钱包, 在内部市场的资产不被显示。

除此之外，转换中的资产， 以及待收取的收益，也没有计算在内。
所以要精确计算账户估值，我们需要读取
* 钱包资产（保护存款账户）
* 内部市场资产
* 转换中的资产
* 待收取的资产

我将在下篇文章中介绍如何获得这些内容，感谢阅读。

- - -

This page is synchronized from the post: [How to calculate estimated account value: Part One / 如何计算账户估值：第一部分](https://steemit.com/@oflyhigh/how-to-calculate-estimated-account-value-part-one)
