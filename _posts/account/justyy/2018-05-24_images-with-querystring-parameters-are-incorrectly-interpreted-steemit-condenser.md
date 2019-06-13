
---
title: 'Images with QueryString Parameters are Incorrectly Interpreted (Steemit/Condenser)'
permlink: images-with-querystring-parameters-are-incorrectly-interpreted-steemit-condenser
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-24 00:06:18
categories:
- utopian-io
tags:
- utopian-io
- bug-hunting
- images
- steemit
- busy
thumbnail: https://uploadbeta.com/api/pictures/random/test/?key=aa
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Project Information
* Repository: https://github.com/steemit/condenser
* Project Name: SteemIt UI
* Publisher (if applicable): SteemIt Inc.

#### Expected behavior
Images that are with query string parameters should be displayed correctly.

#### Actual behavior
Images that are with query string parameters are ignored, and therefore displayed incorrectly or broken.

#### How to reproduce
I have got two images:
1. `https://uploadbeta.com/api/pictures/random/test/?key=aa`
2. `https://uploadbeta.com/api/pictures/random/test/`

As you can see, the first image URL has a query string,, they are two totally different images.  If you add them to steemit, they will automatically prepended:

1. `https://cdn.steemitimages.com/0x0/https://uploadbeta.com/api/pictures/random/test/?key=aa`
2. `https://cdn.steemitimages.com/0x0/https://uploadbeta.com/api/pictures/random/test/` 

However, The image with query string is shown incorrectly, in fact, it is shown as the second image.

First Image (with query string parameters )
![](https://uploadbeta.com/api/pictures/random/test/?key=aa)

Second Image
![](/https://uploadbeta.com/api/pictures/random/test/)

**Please note that if you use [busy.org](https://busy.org/@justyy/images-with-querystring-parameters-are-incorrectly-interpreted-steemit-condenser) to read this post, two images are displayed correctly**

This is a critical bug which I think has been introduced lately (regression). I found this bug because I use a API to insert pictures with query parameters but suddenly it doesn't work anymore.

* Browser/App version: Chrome v66
* Operating system: Win 10 64-bit

#### GitHub Account
https://github.com/doctorlai

- - -

This page is synchronized from the post: [Images with QueryString Parameters are Incorrectly Interpreted (Steemit/Condenser)](https://steemit.com/@justyy/images-with-querystring-parameters-are-incorrectly-interpreted-steemit-condenser)
