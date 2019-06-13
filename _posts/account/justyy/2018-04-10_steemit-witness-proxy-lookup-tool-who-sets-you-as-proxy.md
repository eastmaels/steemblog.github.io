
---
title: 'SteemIt Witness Proxy Lookup Tool - Who Sets You as Proxy?'
permlink: steemit-witness-proxy-lookup-tool-who-sets-you-as-proxy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-10 22:14:45
categories:
- witness-category
tags:
- witness-category
- witness
- busy
- steemtools
- steemdev
thumbnail: https://gateway.ipfs.io/ipfs/QmTVx53eoHN2iuhGMKLGb8JwdwmGUobCcccS9ocM4doT6Q
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A SteemIt witness proxy is a representative.  People vote you as a proxy so they vote who you vote. They trust your choices (votes).

It is a true love, so have you wondered who they are? I have made a tiny tool that allows you to see a list of your proxy supporters.

Here you go: https://helloacm.com/tools/steemit/proxy/

Enter ID and press Enter or Click the green button, wait a few seconds and you should see a list. 

![image.png](https://gateway.ipfs.io/ipfs/QmTVx53eoHN2iuhGMKLGb8JwdwmGUobCcccS9ocM4doT6Q)

## API
API Calling Example is:
> https://helloacm.com/api/steemit/proxy/?cached&id=justyy

It will return JSON-encoded array and each contains the following fields:
> account
proxy
timestamp

If \$\_GET parameter s is not specified, this API will use the \$\_POST variable id instead.

> curl -X POST https://helloacm.com/api/steemit/proxy/ -d "id=justyy"

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! You may also like: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [SteemIt Witness Proxy Lookup Tool - Who Sets You as Proxy?](https://steemit.com/@justyy/steemit-witness-proxy-lookup-tool-who-sets-you-as-proxy)
