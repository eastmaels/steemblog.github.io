
---
title: 'Steemit Mutual Witness Report - Who Hasn''t Voted You Back?'
permlink: steemit-mutual-witness-report-who-hasn-t-voted-you-back
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-03 21:12:09
categories:
- witness-category
tags:
- witness-category
- witness
- steemtools
- steemapps
- busy
thumbnail: https://gateway.ipfs.io/ipfs/QmfSZfARQa5PAuB23PWjarogf4bJVPyScLgQGMMMueYeNC
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@jerrybanfield commented [here](https://steemit.com/witness-category/@justyy/witness-tool-update-showing-total-blocks-produced-and-miss-rate#@jerrybanfield/re-justyy-witness-tool-update-showing-total-blocks-produced-and-miss-rate-20180331t010922718z) suggesting a tool that shows votes back and forth because this will be very helpful to see which witnesses *voting for us and we vote for.*

This is a nice idea so here, I present this tool to you:

https://helloacm.com/tools/steemit/mutual-witness/

Enter Your Steem ID and press Enter, wait a few seconds, and the tool will give you these information:

1. How many vote you as witness (your supporters). The full list is linked via [this tool](https://helloacm.com/tools/steemit/who-vote-you-as-witness/).
2. How many you have supported (your witness votes), this tools has been presented in [here](https://helloacm.com/tools/steemit/witness/)
3. How many have not voted back? The list will be among your votes that do not vote you back as witness. Please note that some may vote you through their proxies (this is hard and I am still working on it).
4. Mutual Supporters:  You vote him/her and he/she votes you as well!

## Screenshots
![image.png](https://gateway.ipfs.io/ipfs/QmfSZfARQa5PAuB23PWjarogf4bJVPyScLgQGMMMueYeNC)

![image.png](https://gateway.ipfs.io/ipfs/QmZs3g6ZzRwxbaLQwvTQWv8XjMS1MrT6eqhNFxW8DN2WKj)

## Witness API
API Calling Example is:

> https://helloacm.com/api/steemit/witness_voters/?cached&id=justyy

It will return JSON-encoded data which has the four sub-arrays:

- voted (Who vote you)
- votes (Who you vote)
- not (Who has not voted you back)
- both (Mutual voters)

If \$_GET parameter s is not specified, this API will use the \$_POST variable id instead.

> curl -X POST https://helloacm.com/api/steemit/witness_voters/ -d "id=justyy"

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you!

- - -

This page is synchronized from the post: [Steemit Mutual Witness Report - Who Hasn''t Voted You Back?](https://steemit.com/@justyy/steemit-mutual-witness-report-who-hasn-t-voted-you-back)
