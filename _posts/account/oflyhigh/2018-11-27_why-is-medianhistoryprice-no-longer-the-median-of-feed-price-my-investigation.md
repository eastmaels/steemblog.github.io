
---
title: 'Why is median_history_price no longer the median of feed price? My investigation.'
permlink: why-is-medianhistoryprice-no-longer-the-median-of-feed-price-my-investigation
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-27 13:26:24
categories:
- witness-category
tags:
- witness-category
- witness
- feed
- price
- steem
thumbnail: https://cdn.steemitimages.com/DQmYCUwxt2NH6XQRL58aFkSTXvFQ42KWE9ahPrwWTnMfd59/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


According to my previous understanding,  witnesses feed prices for steem blockchain, as shown in the figure below.

![](https://cdn.steemitimages.com/DQmYCUwxt2NH6XQRL58aFkSTXvFQ42KWE9ahPrwWTnMfd59/image.png)
(From: https://www.eztk.net/witnesses.php)

And about per hour(***`STEEM_FEED_INTERVAL_BLOCKS`***), STEEM read the feeds from the 21 witnesses(***`current_shuffled_witnesses`***) in current round, and sort the feeds value, get the median value of it.

Then STEEM ***`push_back`*** the median feed value got in above step to the globe feed history object(get_feed_history/price_history), and then remove the oldest feed by pop_front(). The price_history looks like the picture below.

![](https://cdn.steemitimages.com/DQmUVcRNePEH1u1xxHmnhRVQjysFrrgM1kiq4kXhV5Tdx3w/image.png)

The  price_history length keeps 84, is defined as follows:
>***`#define STEEM_FEED_HISTORY_WINDOW             (12*7) // 3.5 days`***

Then sort the price_history and return the median value as the ***`current_median_history`***.

But now I found two questions, 
* The price of STEEM has been under $0.35 for a long time,  Why is  the  ***`current_median_history`*** still higher than $0.4?

* In the past, we always get the feed price in the form of ***`{'base': '0.308 SBD', 'quote': '1.000 STEEM'}`***, Why now become such a form of ***` {'base': '117738879.462 SBD',  'quote': '285479893.989 STEEM'}`***? This problem also leads to the ***`Estimated Account Value`*** of the wallet shows abnormal.


To find the answers to these two questions, I went to learn the code STEEM, then the following code was found:
https://github.com/steemit/steem/blob/master/libraries/chain/database.cpp#L3258
>![](https://cdn.steemitimages.com/DQmeXHPjd931ujx4akfnMcVGBpxwy41C4DC4hUbCbwg9jQj/image.png)

The intent of the code has been written in the comments, so I will not repeat them. This code perfectly explains two of my questions.

In the current market conditions(***`min_price > fho.current_median_history`***),median_history_price is no longer calculated by witnesses feeds and history feeds(price_history), it's determined by the supply of STEEM and SBD.
>![](https://cdn.steemitimages.com/DQmZub8kRn2CBKgs9HaC31WkyjuaSdKNx1LbT4EKvVnTzyN/image.png).

Why hasn't this happened before? I guess it's because we modified ***`STEEM_SBD_START_PERCENT`***  and ***`STEEM_SBD_STOP_PERCENT`***  in HF20. Before HF20 there are 2% & 5%, in HF20 they are 9% & 10%.
>![](https://cdn.steemitimages.com/DQmdsLG2MwTMF5Lz8sB5sSsmPW8DbnbNofoY8HY8mkbxX7p/image.png)

# New question

But the new question comes:
The ***`sbd_print_rate`*** is calculated from the supply of STEEM & SBD and the ***`median_history_price`*** and will be zero when ***`STEEM_SBD_STOP_PERCEN(10%)`*** reached. 

But the  ***`median_history_price`*** always be checked to force SBD to remain at or below 10% of the combined market cap of STEEM and SBD.

It seems that we will never get a SBD percentage greater than 10%, So ***`sbd_print_rate`*** will never be zero? If my calculation is correct, it's really an interesting thing😀.

# Related links:
* https://www.eztk.net/witnesses.php
* https://github.com/steemit/steem/blob/master/libraries/chain/database.cpp#L3258

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Why is median_history_price no longer the median of feed price? My investigation.](https://steemit.com/@oflyhigh/why-is-medianhistoryprice-no-longer-the-median-of-feed-price-my-investigation)
