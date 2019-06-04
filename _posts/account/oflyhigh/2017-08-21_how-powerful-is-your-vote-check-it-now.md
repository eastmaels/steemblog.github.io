
---
title: 'How powerful is your vote? Check it Now! / 你的投票值多少钱？'
permlink: how-powerful-is-your-vote-check-it-now
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-21 11:32:57
categories:
- cn
tags:
- cn
- cn-programming
- php
- tools
- steemit
thumbnail: https://steemitimages.com/DQmbgHcYjBX5iXsoNdTCegKu9XosZmNTufg24Xd4WEduHvV/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Some of my friends on steemit always ask me how much their vote is worth? I am also very curious about this question.

>我的一些朋友总问我，咋知道自己一票值多少钱啊，其实我也挺好奇的。

![](https://steemitimages.com/DQmbgHcYjBX5iXsoNdTCegKu9XosZmNTufg24Xd4WEduHvV/image.png)

Before, my method to check it:
1) Check my voting power at steemd, and remember it
2) Record the reward of a specific post
3) Upvote the post with 100% weight
4) Check the reward of the post again

Then I will figure out how much my vote  is worth, at current voting power, and at full voting power.

>在这之前，我的方法是
>1) 现去steemd.com看一下自己的Voting Power
>2) 找一个帖子，看下当前收益
>3) 100%投一票
>4) 再查看这个帖子的收益

>然后我就可以根据收益增加的数量判断出在当前Voting Power下，我的一票值多少钱，进而可以推算出100%Voting Power的时候，我的一票值多少钱。

I think this method is very stupid, especially when someone voted before me, between the step (2) and step(3),  I will get completely wrong result!

>这个方法太愚蠢了，尤其是如果有人在步骤二和步骤三之间投了这个帖子，我得出的结果就会完全不对。

So I think that if there's a better way to check the vote value? More accurate and easier to use. I found some tools, but not what I wanted. So I wrote this one, for myself, my friends, and you.

>所以我就想，有没有一个更好的方法呢？更加精确和易用。我找了一下工具，但是感觉不是我想要的，于是自己写了一些，给自己和朋友们使用。

----

# The URL & Interface

http://steemit.serviceuptime.net/check_vote_value.php

![](https://steemitimages.com/DQmefJ2AU9rfwN8jCugXHdHn1seofpESJZXpZFZz2NzePv9/image.png)

Just input the account name you want to check, then press ***Return*** or click ***Check*** Button, you will get the results.

这个工具用起来非常简单啦，输入你要查看的用户名，然后回车或者点***Check*** 按钮，就会得到结果了。

# The Results Filed

For example, the results for ***oflyhigh***
![](https://steemitimages.com/DQmedJWYPALsDKzW73H1tmw8fPaN7NkyZVnVcYSt1FQ2Jks/image.png)

>以上是***oflyhigh***的检查结果。

All the results are based on that you upvote a post  with 100% weight ! If your want  to know the value of different vote weight, just multiply the value and the percent you want to use.

>所有的结果都是基于你100%比例投票，如果你想知道不同投票比例的结果，只需用结果乘以百分比即可。

Besides showing the vote value, I also show some useful information on the result page, such as ***the price of STEEM***(current_median_history_price) and ***your Effective Steem Power***

>除了显示投票的价值，我还在页面上显示了一些有用的信息，比如当前STEEM的价格(系统价)以及你的等效STEEM POWER.

----

Are you want to know how powerful is your vote?  [Check it Now! ](http://steemit.serviceuptime.net/check_vote_value.php)

- - -

This page is synchronized from the post: [How powerful is your vote? Check it Now! / 你的投票值多少钱？](https://steemit.com/@oflyhigh/how-powerful-is-your-vote-check-it-now)
