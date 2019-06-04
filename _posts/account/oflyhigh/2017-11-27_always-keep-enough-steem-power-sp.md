
---
title: 'Always keep enough STEEM POWER / 账户内记得保留足够的SP'
permlink: always-keep-enough-steem-power-sp
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-27 11:36:54
categories:
- steem
tags:
- steem
- power
- bandwidth
- cn
- lesson
thumbnail: https://steemitimages.com/DQmUdPojC6sWf2m8iawyUTP6mui5nVj6ChD8U1hQrMyFctZ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


One of my friend asked me for help, he got ***Bandwidth Limit Exceeded*** when he tried to transfer his STEEMs to blocktrades.

So I took a look at his account to find out what happens?

![](https://steemitimages.com/DQmUdPojC6sWf2m8iawyUTP6mui5nVj6ChD8U1hQrMyFctZ/image.png)
(Image source: pixabay)

# Zero SP leads to zero available bandwidth
I checked his account at [steemd.com](https://steemd.com/),  and I found that there are ***ZERO STEEM POWER*** in his account.

In steem source code, the following codes are used to calculate whether users have bandwidth available:
***`has_bandwidth = ( account_vshares * max_virtual_bandwidth ) > ( account_average_bandwidth * total_vshares );`***

And in that codes,  ***`account_vshares`*** is  just another representation of  ***STEEM POWER***.

So, If the account have zero STEEM POWERs, then the bandwidth limit of this account should be zero!

In the other words,  this account can not do any operation, and will always get ***Bandwidth Limit Exceeded*** if try to do any operation using this account.

# How to solve this issue?

Wow, that's really a bad news. But there are hundreds STEEM in this account, if we can not do anything using it, how can we take out the STEEM?

My friend try to power up this account, but when he log in and tried to power up, the  ***Bandwidth Limit Exceeded*** error appeared again. ***Sure, if you have zero STEEM POWERs in account, you can not do anything using this account!***

 Is there no way out?  Don't worry!

This is a method power up other's account using your STEEM. Click the ***Advanced*** link when you do power up, then you can input other's account which you want to power up.

![](https://steemitimages.com/DQmUqzMZQVioCYyTSeAJCupos8bf7TfJLna8KUcwLo4zPHF/image.png)

# The Lesson

The story ends here, my friend's account had been powered up by  his friend, and then he transfer all of his STEEMs to blocktrades.

***This gave us a lesson:  Always keep enough STEEM POWER***

Just as the  tip when power down
>Leaving less than 5 STEEM POWER in your account is not recommended and can leave your account in a unusable state.
![](https://steemitimages.com/DQmPgNcR2p4wMFGUA6Aw7Kh4zmowAjKCLREfCC5xpYK9tgN/image.png)

# 中文版

一个朋友把STEEM POWER down光光了，然后发现啥也做不了啦，账户里的钱也没法转出去。最后按我的建议，找朋友给他POWER UP了一点点SP，然后才可以操作。

这个事情给我们的教训是不要把SP down光光哦。

另外，STEEM POWER就是你在STEEM上的点赞权、话语权或者说一切一切权力和权益的根本，***所以如何处理STEEM POWER，是保留还是DOWN光或者代理给别人，三思而后行吧！***

- - -

This page is synchronized from the post: [Always keep enough STEEM POWER / 账户内记得保留足够的SP](https://steemit.com/@oflyhigh/always-keep-enough-steem-power-sp)
