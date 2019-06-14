
---
title: 'How to get the number of accounts per level using Robo 3T and steemdata'
permlink: how-to-get-the-number-of-accounts-per-level-using-robo-3t-and-steemdata
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-11 11:25:45
categories:
- steemdata
tags:
- steemdata
- steemit
- statistic
- stats
thumbnail: 'https://steemitimages.com/DQmTzeYJUa9GLsnGcZe5L6aHoxd68k5xJkD5hfF8HSJKcyM/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Do you want to calculate by yourself how many whales are currently in steem? You can do this by using [steemdata](https://steemdata.com/) by @furion. Please do not forget to vote for @furion  as one of your  witnesses, if you want to use steemdata (server are costly). The steem data are provided as a MongoDB service. In order to get familiar with MongoDB you can use [Robo 3T](https://robomongo.org/download).  Download it and install it.

Create a new connection and enter the following data:
![](https://steemitimages.com/DQmTzeYJUa9GLsnGcZe5L6aHoxd68k5xJkD5hfF8HSJKcyM/image.png)
and
![](https://steemitimages.com/DQmcNzQJv9M8mYpH1FVUhiVpe2wkQX8rsuyypkhRqP9jsbg/image.png)

The following collections are available:
* AccountOperations - Same as Operations but with account ownership,
* Accounts - All steem accounts can be found here,
* Comments - contains all comments,
* Operations - contains all blockchain operations,
* Posts - contains all posts,
* PriceHistory - contains the Steem, SBD, BTC and USD price,
* stats - contains information about the database. 
You can find more information in this [guide](https://steemdata.com/guide).

## Number of inactive users
Double-click on Accounts, to open a new tab in Robo 3T. You can now enter your own commands in the dark
terminal at the top.

Let's find out how many inactive fishes are currently in steemit. Inactive means:
* no post within the last 30 days or
* no comment within the last 30 days or
* no vote within the last 30 days.

At first, we need a time constraints:

```
 time_constraints = {
    '$gte': ISODate('2018-01-11 00:00:00.000Z'),
}
```
 `$gte` is a [comparison query operator](https://docs.mongodb.com/manual/reference/operator/query-comparison/) and stands for  greater than or equal. `ISODate`  is a date datatype. In the next step, we build a condition using the [logical query operator ](https://docs.mongodb.com/manual/reference/operator/query/or/) `$or`: 
```
conditions = {
    $or: [
    {'last_post': time_constraints}, 
    {'last_root_post': time_constraints}, 
    {'last_root_post': time_constraints}
    ]
}
```
We will now substract the number of all account by  the number of account that fullfill the condition:
```
db.getCollection('Accounts').find().count() - db.getCollection('Accounts').find(conditions).count()
```
It should look now like this:
![](https://steemitimages.com/DQmWseb631ucdqoZkqHxwzYBXopw2YMhKrxyyDQVDQMj92B/image.png)

## Number of red fishes
We need now a condition for vesting_shares:
```
vesting_condition = {
    'vesting_shares.amount': {'$lte': 999999}
}
```
The find condition can then be extended by
```
db.getCollection('Accounts').find({$and: [conditions,vesting_condition]}).count()
```
![](https://steemitimages.com/DQmPKLgp864pniPoEuZBzkcS4A8xSeYEaH2rub3aqWY2Z7p/image.png)

## Number of Minnows
The `vesting_condition`changes to
```
vesting_condition = {
     $and: [
     {'vesting_shares.amount': {'$lte': 9999999 }},
     {'vesting_shares.amount': {'$gte': 1000000  }},
     ]
}
```
## Number of Dolphins
The `vesting_condition`changes to
```
vesting_condition = {
     $and: [
     {'vesting_shares.amount': {'$lte': 99999999 }},
     {'vesting_shares.amount': {'$gte': 10000000  }},
     ]
}
```
## Number of Orcas
The `vesting_condition`changes to
```
vesting_condition = {
     $and: [
     {'vesting_shares.amount': {'$lte': 999999999 }},
     {'vesting_shares.amount': {'$gte': 100000000  }},
     ]
}
```
## Number of Whales
The `vesting_condition`changes to
```
vesting_condition = {
     'vesting_shares.amount': {'$gte': 1000000000  }
}
```

## Results

| Type | Vests | Number of account |
| --- | --- | --- |
| Inactive |- |604089 |
| Red fish | between 0 and 999999 VESTS | 146109 |
| Minnow | 	between 1000000 and 9999999 VESTS | 4026 |
| Dolphin | 	between 10000000 and 99999999 VESTS | 919 |
| Orca |	between 100000000 and 999999999 VESTS | 141 |
| Whale | more than 1000000000 VESTS |12 |
___
Do you have questions or comments? Please let me know.

- - -

This page is synchronized from the post: ['How to get the number of accounts per level using Robo 3T and steemdata'](https://steemit.com/@holger80/how-to-get-the-number-of-accounts-per-level-using-robo-3t-and-steemdata)
