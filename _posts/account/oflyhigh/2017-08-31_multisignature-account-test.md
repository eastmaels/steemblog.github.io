
---
title: 'Multisignature account test / 多重签名测试'
permlink: multisignature-account-test
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-31 12:39:54
categories:
- multisignature
tags:
- multisignature
- cn-programming
- multisig
- cn
thumbnail: https://steemitimages.com/DQmSsfYazjF6THVCMUq75KxEtGrtgWR4o2HAALjCz3iGu7J/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmSsfYazjF6THVCMUq75KxEtGrtgWR4o2HAALjCz3iGu7J/image.png)

# Posting key test

#### Setting Multisignature posting key
`steempy permissions msa`
![](https://steemitimages.com/DQmNb1fZ358xBWo2wBjLK33pE1i1jn4E7fLs2gv5JyttJJ8/image.png)

`steempy allow --account msa --permission posting --weight 1 --threshold 2 oflyhigh.test`
![](https://steemitimages.com/DQmdAagy4mih4EK3t1tGFXueXtFgzBnkij8zNuRyireL5Tr/image.png)

`steempy permissions msa`
![](https://steemitimages.com/DQmTGqHia4p6SA2wGneoVApbDxAgMEcwGbN1PsWJjmtRq33/image.png)

Check it on steemd.com
![](https://steemitimages.com/DQmcve5JQvAXmF91qpjYRKMyu8XSQg8f5QHZFMdU6VGMYc2/image.png)

#### Upvote my post via command line tools
`steempy upvote --account msa --weight 100 @oflyhigh/7ukopr`
![](https://steemitimages.com/DQmcLbyT1TcebuB4ReesXTwG7ddfSTZttxpE2uv4bPpGCkE/image.png)
(Right:  	✅️ 	)

#### Login steemit with master password  and upvote my another post
![](https://steemitimages.com/DQmNc6EQ9v4vwFPyjcSSGpTtLhU9XSzH5cM5AcJu79UDsS4/image.png)
(Wrong: ❌️I expect it prompt error messages such as ***Missing Posting Authority msa*** or ***Threshold not satisfied***)

# Active key test

#### Setting Multisignature active key

`steempy allow --account msa --permission active --weight 1 --threshold 2 oflyhigh.test`
![](https://steemitimages.com/DQmPFPdaYgg9EFkiGKDJTe2cCuA8UkSzV5oZRuZ8DswaepY/image.png)

`steempy permissions msa`
![](https://steemitimages.com/DQmbevQCo3W6PvsBBMXMuXCRFxEVixH2kzqNDRFPFoePu8r/image.png)

#### Login steemit with master password and transfer 0.001 SBD to oflyhigh 
![](https://steemitimages.com/DQmXag1KyQ6dD7sAqoNuvx8v34xPTpBq2FZBorqShs77ph2/image.png)
(Wrong: ❌️I expect it prompt error messages such as Missing Active Authority msa or Threshold not satisfied)

Using oflyhigh.test active key to sign transaction and got broadcast error
![](https://steemitimages.com/DQmcmsfVa2zrHiCjkWmx8FLEfJ7BHtrr9UjRsY7Gn7GbXmQ/image.png)
![](https://steemitimages.com/DQmaUx8m6AmoHh1KiZRP582LSvk6st82CvwqGh5FqX9UoCU/image.png)
(Right: ✅️ )

# What's wrong?
Multisignature account is not working as I expected.
It should work only when the threshold is met, but it seems not.

When I almost finish writing this article, I test upvote and tranfer on steemit.com again.

I Login  steemit.com with master password  and upvote my another post, I got:
![](https://steemitimages.com/DQmP7Bd33bYTG1jfi4bynjtKK63yWeZrhwXryEYg6x2XrUV/image.png)
It seems right. (Does it take time to wait for effect?)

And I also tested transfer again.
The same as before, SBD can be transferred from this account to another account when I logged in with master password, This is not what I expected. 😭

----

中文：

测试了一下多重签名账户
但是结果和我期望的有些不一致，详见正文。
估计是我哪块没弄对，或者大脑秀逗了，明天再继续测试吧。

- - -

This page is synchronized from the post: [Multisignature account test / 多重签名测试](https://steemit.com/@oflyhigh/multisignature-account-test)
