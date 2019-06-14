
---
title: 'steemhive.com - communities for steemit'
permlink: steemhive-com-communities-for-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-25 10:47:39
categories:
- community
tags:
- community
- steem
- steemit
- steemhive
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmYLqpciRyw3tNgLfhzwH5tYGmhr541kjrGRjGxGGZLyzr'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmYLqpciRyw3tNgLfhzwH5tYGmhr541kjrGRjGxGGZLyzr)

You probably have heard of [hivemind](https://github.com/steemit/hivemind), which will allow building communities inside of steem. In order to improve communities in steemit right now, I created a new site [steemhive.com](http://steemhive.com). 
This site allows you to select a community by its mainly used tag. E.g. for the german community, "deutsch". 

At the moment, the selected community is used as tag in `get_discussions_by_*`, and the additionally defined tag selection filters the results. 100 results are fetched for each community, the additionally selected tag reduces the number of shown posts.

When another tag is selected, e.g. "life" both tags will be combined. So all new posts with tags "deutsch" and "life" are shown.

It is possible to directly set a community by adding its tag name with a `#` behind the domain name:
```
http://steemhive.com/#spanish
```
and it is possible to define a tag with a `?` by:

```
http://steemhive.com/#spanish?life
```

The certificate is not yet activated, therefore only http works. This site is only a first version. At the moment, the community selector was written by hand, and there might be missing some.

Cookies are not supported, so the website does not remember settings.

___

Please give me some feedback about my new project. What should I improve? How should I proceed?

___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>

- - -

This page is synchronized from the post: ['steemhive.com - communities for steemit'](https://steemit.com/@holger80/steemhive-com-communities-for-steemit)
