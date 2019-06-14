
---
title: 'Access steemit conveyor for reading account information with beempy'
permlink: access-steemit-conveyor-for-reading-account-information-with-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-18 10:20:12
categories:
- tutorial
tags:
- tutorial
- beem
- beempy
- conveyor
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmYFZfm3iVMooxo6mEX6zUV7Kf2d3RqdYF21HHZYj4piq6'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[conveyor](https://github.com/steemit/conveyor) is a steemit API for reading:
* Feature flags
* User data (email, phone, etc)

When an account is registered through steemit inc., email and phone data are stored and can be read (only with the account or admin credentials) by conveyor. `beempy` supports the `get_user_data` API call:

You can read how to install `beempy` [here](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda). For accessing the data, we need to store the posting key in beempy.
If 
```
beempy listaccounts
```
does not show a table with the user account and its posting key, please add the key as described in my last [post](https://steemit.com/tutorial/@holger80/how-to-write-a-post-with-image-using-beem).

## `get_user_data`
```
beempy userdata beembot
```
Replace `beembot` with your account name.
![image.png](https://ipfs.busy.org/ipfs/QmYFZfm3iVMooxo6mEX6zUV7Kf2d3RqdYF21HHZYj4piq6)
`beembot` was not created by steemit inc., thus we see no data here. Let's repeat this with my account. I added my posting key with `beempy addkey` and checked it with `beempy listaccounts`:

![image.png](https://ipfs.busy.org/ipfs/QmVBHEw18s6BbGnPGbbboVcVKKuJzxVp3dyhz2PsS7Byh5)

Now I can check my user data by

```
beempy userdata holger80
```
![image.png](https://ipfs.busy.org/ipfs/QmNmN8CTfPNHzrB6WtSzREdHeMtvszNi5WPeDWaq7Kw3R2)

## `get_feature_flags`

You probably read about  [Yotifications](https://steemit.com/steemit/@steemitblog/applications-team-update-notifications-condenser-and-more). 
> When the new Yotifications is rolled out, it will be done using this new feature flag system.

I'm checking now my feature_flags, maybe my account is already selected for Yotifications ?
```
beempy featureflags holger80
```
![image.png](https://ipfs.busy.org/ipfs/QmaS7tNCms8sq9o9kekLofpz6QKbEvCPD2a8S5ZGjihWNC)
No flag yet.... I will recheck later.
___
1. [How to install and use beempy using anaconda](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda)
2. [How to write a post with image using beem](https://steemit.com/tutorial/@holger80/how-to-write-a-post-with-image-using-beem)


- - -

This page is synchronized from the post: ['Access steemit conveyor for reading account information with beempy'](https://steemit.com/@holger80/access-steemit-conveyor-for-reading-account-information-with-beempy)
