
---
title: 'How to estimate your author reward payout with a calculator'
permlink: how-to-estimate-your-author-reward-payout-with-a-calculator
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-31 09:52:45
categories:
- steem
tags:
- steem
- steemit
- rewards
- tools
thumbnail: 'https://steemitimages.com/DQmXCxem66DhvBTNwufZ1Nxv4pnBwJSsJmMTmm4KmAVAYLn/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I was really wondering about the author reward payout of my last article. 
I already know that 75% of the payment is the guaranteed reward for the author. So this would be 7.3125 SBD. 
I did then found a great website: http://steem.supply from the witness @dragosroua on which the payout can be estimated. 

I checked then the payment one minute before payout time:
![](https://steemitimages.com/DQmXCxem66DhvBTNwufZ1Nxv4pnBwJSsJmMTmm4KmAVAYLn/image.png)
I entered my steemit-username and toggled the display from USD to SBD and Steem Power by pressing this button:
![](https://steemitimages.com/DQmNbZdag97yaAm5EyFEBUw992N7AyxWrfJzKiGUi1sLW5h/image.png).
One minute later, I received 
![](https://steemitimages.com/DQmTSQHXeDuwiH4zyQ4bMxS3Y7PcjG8wq2usk74JL2LR9xs/image.png)
So the results are not 100% accurate. Lets first understand how the author reward can easily be calculated:
___
# Estimate your rewards with a calculator
We need to know the averaged steem / USD conversion rate which is called feed price.
The current feed price can get from steemd.com:
![](https://steemitimages.com/DQmWUWYGaydKftoWbTzG3hPK8HdVTWw51N2ijphkTfRRutB/image.png)
The feed price for my article at payout time was:
```
feed_price = 5.9628
```
Then we need to know the pending payout value. 
![](https://steemitimages.com/DQmThVJEcdpt7P2nvue7z83khkwifFdp7UfUjeDq99fXEGf/image.png) 
The $-sign means SBD in this case. So my pending payout value (value with more decimal places is taken from steemd.com):
```
pending_payout_value = 9.7533
```
___
The next information that I need is my selected Rewards setting: Default (50% / 50%) or Power up (100%)?
___
## Default

| Payout in SBD | Payout in SteemPower |
| --- |--- |
| pending_payout_value * 0.375 | pending_payout_value * 0.375 / feed_price |
|  9.7533 * 0.375 SBD |  9.7533 * 0.375 / 5.9628 SP |
| 3.657 SBD | 0.613 SP |
The factor 0.375 is the multiplication of author reward percentage and 50 % SBD/SteemPower  (0.75 * 0.5)
___
## Power up

| Payout in SBD | Payout in SteemPower |
| --- |--- |
| pending_payout_value *0 | pending_payout_value * 0.75 / feed_price |
| 9.7533 * 0 SBD | 9.7533 * 0.75 / 5.9628 SP |
| 0 SBD | 1.227 SP |
___
So I could understand the numbers which are shown from steem.supply. But, these numbers are only correct if you do not upvote your own article during posting.
___
# Estimate your rewards with a calculator when using self-upvote

Why did I receive more? Because I upvoted my own article by selecting upvote post. By this, a certain percentage of the curation reward is transferred to the author. This information can be found on steemd.com.
Take a steemit url and replace _steemit_ by _steemd_. Then click on advanced and look for `author_curate_reward`.
In my case:
```
author_curate_reward = 28.67 %
```
Lets recalculate (28.67% -> 0.2867):
___
## Default

| Payout in SBD | Payout in SteemPower |
| --- |--- |
| pending_payout_value * 0.5 * (0.75 + (0.25*author_curate_reward)) | pending_payout_value * 0.5 * (0.75 + (0.25*author_curate_reward)) / feed_price |
|  9.7533 * 0.4108 SBD |  9.7533 * 0.4108 / 5.9628 SP |
| 4.007 SBD | 0.672 SP |
___
## Power up

| Payout in SBD | Payout in SteemPower |
| --- |--- |
| pending_payout_value *0 | pending_payout_value * (0.75 + (0.25*author_curate_reward)) / feed_price |
| 9.7533 * 0 SBD  | 9.7533 * 0.82168 / 5.9628 SP |
| 0 SBD | 1.344 SP |
___
Finally, I was able to understand why I recieved more than predicted. 
___
## Self-upvote
I follow the rule that I upvote my own posts (I write only 2-3 per week) but never my own comments. I normally work 1-2 hours (or more sometimes) on each single posts, so I think it is fair to reward myself with my small upvote.
___
Do you have questions or comments? Please let me know. All images are screenshots from steemit.com, steem.supply and steemd.com.

- - -

This page is synchronized from the post: ['How to estimate your author reward payout with a calculator'](https://steemit.com/@holger80/how-to-estimate-your-author-reward-payout-with-a-calculator)
