
---
title: 'bookkeeping - improved  and more detailed reports'
permlink: bookkeeping-improved-and-more-detailed-reports
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-20 13:11:03
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


![image.png](https://ipfs.busy.org/ipfs/QmSy6iTve7UFS3QxUNTYWUXXXUYnWVGdT41Pw2SJkjXinq)[image source](https://pixabay.com/de/geld-geldturm-m%C3%BCnzen-euro-2180330/)

Thanks for using my new service! Since launch, 161 reply comments were broadcasted and I had to increase my delegation to 300 SP:

![image.png](https://ipfs.busy.org/ipfs/QmYg2B8ts5LoBsYrzuwkS5VSDEpEV1paKjLhBCwqkhWbqH)

## Improved layout
I improved the comment layout and seperated spent and received STEEM/SBD better:

![image.png](https://ipfs.busy.org/ipfs/QmVLWkFumS8CmGSK58Eia3qHqktHbkGe11zy8dtRjQHhzg)


I did also add more categories for drugwars, magicdice and steemmonsters:

#### drugwars
daily, heist and referal are shown for received STEEM. As the transfer layout changed, there are also incoming  transfers without category.

#### magicdice
* Receiving transfers from referral, delegation and dividends are shown separately.

#### Steemmonsters
* Vested Steem and Affiliate transfer are shown

## smartsteem and minnowbooster were added
I added two new commands. It is now possible to view the receiving and sent transfer from/to smartsteem and minnowbooster.

The transfer memo are not categorized, only summed up. For smartsteem, all transfers from/to:
* smartsteem
* smartmarket
are analyzed.
#### Usage for smartmarket
```
!bookkeeping smartmarket
```

For minnowbooster, only the transfer from/to minnowbooster are considered.

#### Usage for minnowbooster
```
!bookkeeping minnowbooster
```
## What is missing
Please let me know, which services I should add next. Please let me also know, if I could improve some output.
## What next
I will try to add USD (paypal / creditcard) payments for steemmonsters.

Keeping track of transfer from/to exchanges seems also a good idea to me.

I think a daily report which shows the updated results is usefull and will help to reduce the high RC consumption of @bookkeeping.

I will work on a automatic daily post, which shows stats from opt in user. Opting in and out will be done by a special comment cmmand.

- - -

This page is synchronized from the post: ['bookkeeping - improved  and more detailed reports'](https://steemit.com/@holger80/bookkeeping-improved-and-more-detailed-reports)
