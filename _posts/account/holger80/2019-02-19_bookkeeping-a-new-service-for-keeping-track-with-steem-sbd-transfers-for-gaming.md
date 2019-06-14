
---
title: 'bookkeeping - a new service for keeping track with steem/sbd transfers for gaming'
permlink: bookkeeping-a-new-service-for-keeping-track-with-steem-sbd-transfers-for-gaming
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-19 13:09:48
categories:
- bookkeeping
tags:
- bookkeeping
- steemdev
- steemmonsters
- drugwars
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmSy6iTve7UFS3QxUNTYWUXXXUYnWVGdT41Pw2SJkjXinq'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmSy6iTve7UFS3QxUNTYWUXXXUYnWVGdT41Pw2SJkjXinq)
[image source](https://pixabay.com/de/geld-geldturm-m%C3%BCnzen-euro-2180330/)

I created a new service provided by @bookkeeping which returns the STEEM/SBD transfer balance for the following games:

* [drugwars](https://staging.drugwars.io/)
* [steemmonsters](https://steemmonsters.com/)
* [magicdice](https://magic-dice.com/)
* [steemslotgames](https://steemslotgames.com/)
* [steembet](https://steem-bet.com/)

## How does it work
Just write a comment with:
```
!bookkeeping list_of_games
```
For example:
```
!bookkeeping drugwars
```
or 
```
!bookkeeping drugwars steemmonsters
```
or 
```
!bookkeeping magicdice drugwars
```

The following keywords are allowed:
```
drugwars steemmonsters magicdice steemslotgames steembet
```

The comment will be picked up, the transfer history will be fetched and all transfers to and from this account will be summed up. In the end, the balance is written into the answer to the comment.

![image.png](https://ipfs.busy.org/ipfs/QmVKiuqieTevFzZzRBAL6AT6k244UqAvr1EyzJDQDP6auA)


Please be patient, the reply comment needs some time (depending on the number of your account history).

## Daily report
I'm thinking about some daily report for user who opt in. What do you thing about this? If you would like to be included in a daily report, please write a comment with all the sites you want to be included. If there some accounts, that would like to have this, I will code a daily sent/receive summary.
___
Please let me know, if I forget a game or a account that sends and receives transfer for which you want to keep track.

- - -

This page is synchronized from the post: ['bookkeeping - a new service for keeping track with steem/sbd transfers for gaming'](https://steemit.com/@holger80/bookkeeping-a-new-service-for-keeping-track-with-steem-sbd-transfers-for-gaming)
