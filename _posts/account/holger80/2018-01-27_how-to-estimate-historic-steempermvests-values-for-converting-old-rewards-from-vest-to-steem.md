
---
title: 'How to estimate historic steem_per_mvests values for converting old rewards from vest to steem.'
permlink: how-to-estimate-historic-steempermvests-values-for-converting-old-rewards-from-vest-to-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-27 20:00:39
categories:
- steemdev
tags:
- steemdev
- steem
- steemit
- dev
- steemdata
thumbnail: 'https://steemitimages.com/DQmTtw1x7mRg73WKp5a6hmoAmoXdw7R6a32bgq62uncuqSg/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I tried to calculate old rewards using https://steemdata.com/. I noticed then that old `steem_per_mvests` values are not included in the database. As all rewards are saved in Vests,  the `steem_per_mvests` value from the payout date must be known for calculating the amount of claimed rewards in Steem power.

## Small example
Reward payout for old posts is stored in vests: https://steemdb.com/deutsch/@holger80/virtuelle-cloud-mining-ponzi-schemen-auch-bekannt-als-hypt/data
```
	
{
    "author": "holger80",
    "permlink": "virtuelle-cloud-mining-ponzi-schemen-auch-bekannt-als-hypt",
    "sbd_payout": 0.558,
    "steem_payout": 0,
    "vesting_payout": 167.986184,
    "app_name": "steemit",
    "app_version": "0.1",
    "_id": "18745605\/holger80\/virtuelle-cloud-mining-ponzi-schemen-auch-bekannt-als-hypt",
    "_ts": {
        "$date": {
            "$numberLong": "1515257697000"
        }
    }
}
```
In order to calculate the recieved Steem Power, I need the `steem_per_mvests` value from the 06.01.2018 (calculated from "$numberLong": "1515257697000"). For the example, the error is only small when instead of the correct value the newest  `steem_per_mvests` value is used. In mosts example scripts, `Converter().vests_to_sp( )` is used for this:
```
Converter(steemd_instance=steem).vests_to_sp(167.986184)
0.08208576818168924 # recieved Steem Power
```
But this value is only an estimation, as the `steem_per_mvests` value from the 27.01.2018 and not from the 06.01.2018 is used. The error for this example is only very small, but when the error would increase for older posts with high payouts.

## Getting old `steem_per_mvests` values
After some research, I found out that old values can be downloaded as a  JSON-file from https://steemdb.com/api/props. The oldest data that can be downloaded is from 19.01.2017.

The result is plotted here:
![](https://steemitimages.com/DQmTtw1x7mRg73WKp5a6hmoAmoXdw7R6a32bgq62uncuqSg/image.png)
Data from https://steemdb.com/api/props are used to generate this plot.
As can be seen that `steem_per_mvests` is changing linearly over time. 

## Searching for old data
 Luckily, I found old posts, in which `steem_per_mvests` values as mentioned:
`steem_per_mvests` | Date
--- | ---
129.229 | 2016-5-31
196.001 | 2016-7-6
229.8 | 2016-7-19
236.342 | 2016-7-22
275.51502255278 | 2016-8-14
448.195 | 2016-11-19

I added the data to the plot:
![](https://steemitimages.com/DQmZnrtrxT26zdZzm4eyAcjT46Djcf1edos5gkPmmFffP49/image.png)
It seems that using two linear approximations can be used to estimate the complete  `steem_per_mvests` data.
There is only one change due to the 16th hard fork from December 2016, in which the yearly inflation rate was reduced to 9.5%.
After applying `np.polyfit(x, y, 1)`on the https://steemdb.com/api/props dataset and saving the parameter to `a2` and `b2`, I applyed `np.polyfit(x, y, 1)` to the older data (which is shown in the table) and saved the parameter to `a` and `b`. The result estimation function is shown here:
```
def est_steem_per_mvests(timeStamp):
    a = 2.1325476281078992e-05
    b = -31099.685481490847
# Parameter a2 and b2 apply after the 16th hard fork in December 2016.
    a2 = 2.9019227739473682e-07
    b2 = 48.41432402074669
    
    if (timeStamp < (b2-b)/(a-a2)):
        return a * timeStamp + b
    else:
        return a2 * timeStamp + b2
```

```
def est_vests_to_sp(vests, timeStamp):
    return calcMVestSteem(timeStamp) * (vests/1e6)

def est_vests_to_sp_numberlong(vests, numberLong):
    return calcMVestSteem(float(numberLong)/1000) * (vests/1e6)
```
The estimated `steem_per_mvests` is shown in the following two plots.  The root mean square error of the estimated data to the real data which are shown in the first plot is 0.0351 Steem per MVests (1e6 vests).
![](https://steemitimages.com/DQmUQ8ooBTwVsqJKKKdQaxor3BffRqLXGm1DtMupAFLyBVT/image.png)

![](https://steemitimages.com/DQmZyKP79fz2dzDXKAZmt37sZ8E6uZiigZSeqa4HL5dPeS6/image.png)

## Estimation of future `steem_per_mvests` values
My prediction of future values (not accurate as the in inflation is reduced every year):
Date | `steem_per_mvests`
--- | ---
2019-01-01 | 497.13
2020-01-01 | 506.2
2025-01-01 | 552.1
2030-01-01 | 597.9

- - -

This page is synchronized from the post: ['How to estimate historic steem_per_mvests values for converting old rewards from vest to steem.'](https://steemit.com/@holger80/how-to-estimate-historic-steempermvests-values-for-converting-old-rewards-from-vest-to-steem)
