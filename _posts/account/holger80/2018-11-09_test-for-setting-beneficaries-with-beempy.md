
---
title: 'Test for setting beneficaries with beempy'
permlink: test-for-setting-beneficaries-with-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-09 16:21:39
categories:
- test
tags:
- test
- steemdev
- beempy
thumbnail: 'https://cdn.steemitimages.com/DQmewshLSKrVk5X1Y3mebfdL2ABdWGbzYiq2qDoQ4G3o6hW/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My intention was to use my testing account beembot, for creating this post. I did a logout and a login with beembot, apperently holger80 was in the cache and used for posting.

I created this post with the steemit.com interface, no beneficiaries are set.

![](https://cdn.steemitimages.com/DQmewshLSKrVk5X1Y3mebfdL2ABdWGbzYiq2qDoQ4G3o6hW/image.png)

Now, I'm using the new beempy command:
```
beempy beneficiaries @holger80/test-for-setting-beneficaries-with-beempy fullnodeupdate:5%,utopian-io:5%
```
I was to slow this time and the command failed with:
```
beemapi.exceptions.UnhandledRPCError: Assert Exception:_c.abs_rshares == 0: Comment must not have been voted on before specifying beneficiaries.
```

The new beempy command will be added to the new beem version.

## second test with beembot

I created https://steemit.com/test/@beembot/setting-beneficiaries-with-beempy-second-test with the normal steemit.com interface and set no beneficiaries.

Then I use the beempy command:
```
beempy beneficiaries @beembot/setting-beneficiaries-with-beempy-second-test holger80:10,fullnodeupdate:10
```
It failed with
```
beemapi.exceptions.RPCError: Assert Exception:beneficiaries[i - 1] < beneficiaries[i]: Benficiaries must be specified in sorted order (account ascending)
```
I tried again with
```
beempy beneficiaries @beembot/setting-beneficiaries-with-beempy-second-test fullnodeupdate:10,holger80:10
```
and succeeded!

![](https://cdn.steemitimages.com/DQmU3vKcbbtMnjg8cTeM5kRZCgP8eSMSUSPxNfkZjDLkW9N/image.png)

![](https://cdn.steemitimages.com/DQmeCEdTtXrQixzTLftsY3NNE4Ws8UAjxYJEHkxpASTgdik/image.png)

So, setting beneficiaries with beempy will be added to the next update!

- - -

This page is synchronized from the post: ['Test for setting beneficaries with beempy'](https://steemit.com/@holger80/test-for-setting-beneficaries-with-beempy)
