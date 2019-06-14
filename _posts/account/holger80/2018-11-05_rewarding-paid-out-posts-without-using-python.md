
---
title: 'Rewarding paid-out posts without using python'
permlink: rewarding-paid-out-posts-without-using-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-05 00:07:12
categories:
- steemdev
tags:
- steemdev
- steemtank
- rewarding
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmRxdvcMNiNe2ZnxjEAGq1sz2dZmpRMEQrqLG7gek1nLk3'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Yesterday I wrote a [post](https://steemit.com/steemdev/@holger80/steem-forever-rewarding-old-posts-with-beem) where a python script is used for rewarding already paid-out posts. As not everybody can handle python scripts, I created a simple solution that does not need any scripts or coding.

I created the account [@rewarding](https://steemd.com/@rewarding) which can be used to create comments under already paid-out posts where the beneficiaries is set to 100% for supporting the author.

![image.png](https://ipfs.busy.org/ipfs/QmRxdvcMNiNe2ZnxjEAGq1sz2dZmpRMEQrqLG7gek1nLk3)

I hope my 50 SP delegation is sufficient for now.

# How does it work
Send 0.001 SBD to @rewarding with a post link of an already paid-out post that is not upvoted by you.

![image.png](https://ipfs.busy.org/ipfs/QmVhMUPaKZzohUVac8o5vnfKAAGpytzTYtZ4j7oiPVtHzF)

After sending the transfer, a comment is created by @rewarding, where the beneficiaries are set to 100% supporting the author. There is no automatic upvoting, after sending the transfer, the created comment has to be upvoted manually after 15 minutes.

![image.png](https://ipfs.busy.org/ipfs/QmYgVUz1oGJKYUhThv9Eu2EGg5fcFamS6UzXgHMoNwtDUb)

It is possible to easily check if the benificiaries are set correctly by replacing steemit.com by steemd.com. 
![image.png](https://ipfs.busy.org/ipfs/QmPDafXFmv2W6tYTqBuaZJabR6YMAdtfLavnXXTSh4vJBK)


# Some restrictions
It is not possible to create comments when:
* post author and the memo sender are the same person,
* the post has not paid out yet,
* unexpired comment was already created,
* the given link points to a comment and not a post,
* the post was already upvoted by the memo sender.

___
I have no idea if this is useful or will be used. If you really like the idea you can delegate some SP to @rewarding, so that the account will not run out of RCs.

- - -

This page is synchronized from the post: ['Rewarding paid-out posts without using python'](https://steemit.com/@holger80/rewarding-paid-out-posts-without-using-python)
