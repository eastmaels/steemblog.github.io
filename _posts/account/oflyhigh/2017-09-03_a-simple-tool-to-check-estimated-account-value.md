
---
title: 'A simple tool  to check estimated account value. / 检查账户估值的小工具'
permlink: a-simple-tool-to-check-estimated-account-value
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-03 10:53:57
categories:
- steemdev
tags:
- steemdev
- steemit
- wallet
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmQnHDRdLqkcdTTwkReGtaEdyLjWscUGZKJSL8f3yUnNzD/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have written two articles to explain how to calculate estimated account value.
* [How to calculate estimated account value: Part One / 如何计算账户估值：第一部分](https://steemit.com/steemdev/@oflyhigh/how-to-calculate-estimated-account-value-part-one)
* [How to calculate estimated account value: Part Two / 如何计算账户估值：第二部分](https://steemit.com/steemdev/@oflyhigh/how-to-calculate-estimated-account-value-part-two)

Although in fact that it is very simple, but it seems too technical for new users. So, in this article, I'd like to introduce a simple tool written by me.  Using it, you can easily check wallet assets and also can accurately calculate the estimated account value for any account, you or your friends.

![](https://steemitimages.com/DQmQnHDRdLqkcdTTwkReGtaEdyLjWscUGZKJSL8f3yUnNzD/image.png)

# The URL & Interface
Like all the other tools I've written, I'm not good at UI design, so it looks as ugly as ever.
http://steemit.serviceuptime.net/check_eav.php
![](https://steemitimages.com/DQmaRJUHSGe4iHK29pTdRmtjiVvW8a1QvUn3HJovGJHzytv/image.png)

Just input the account name you want to check, then press Return or click Check Button, you will get the results.

# The Results Filed

This tool will read all assets of the input account, report them, and then give a summarize.
The assets include following items:

* STEEM
* SBD
* STEEM Power
* STEEM in SAVINGS
* SBD in SAVINGS	
* STEEM in Market
* SBD in Market
* STEEM(Rewards)
* SBD(Rewards)
* STEEM Power(Rewards)
* SBD in Conversion

For example, the results of my account:
![](https://steemitimages.com/DQmWYUoKz6qWQnuyNiZvhFiWPDdaTSnyLtfBVVuhGaF93U2/image.png)

Using steemit, You can not obtain the items in the red box for other accounts, but my tool can.

I also added a feature to remind the user if there are rewards to be claimed. In such a situation,  the page will display a highlighted text: ***You have rewards to be claimed.***

For example, the check results of LAODR Tea House public account:  ***laodr***
![](https://steemitimages.com/DQmURJbDGkJLDrAgvsvdk78TG8AuydaLqBkJndpdogxFTmd/image.png)

----

Are you curious about your estimated account value? Or, curious about estimated account value of your friends?  Or, you want to see if you have rewards to be claimed? [Check it Now! ](http://steemit.serviceuptime.net/check_eav.php)

# 中文

之前用了两篇文章讲述如何计算账户估值，尽管其实很简单，但是新用户往往一头雾水。所以做了个小工具，来检查账户估值，一方面可以让大家用用，另一方面也是验证一下自己前边文章的结论。

贴图中红框内的部分，都是你查别人查不到的内容哦。

为了方便大家，我还特意加了个收益提醒功能，当有收益需要收取时，会显示一条高亮文本: ***You have rewards to be claimed.***

想知道自己或朋友的账户估值？或者想看看自己有没有收益需要收取？[快来查查吧](http://steemit.serviceuptime.net/check_eav.php)。

- - -

This page is synchronized from the post: [A simple tool  to check estimated account value. / 检查账户估值的小工具](https://steemit.com/@oflyhigh/a-simple-tool-to-check-estimated-account-value)
