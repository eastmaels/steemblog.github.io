
---
title: 'How to keep your steemit account safe'
permlink: how-to-keep-your-steemit-account-safe
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-14 21:36:27
categories:
- steemit
tags:
- steemit
- security
- password
- memo
thumbnail: 'https://steemitimages.com/200x0/https://steemitimages.com/DQmSa9hKwLxpM497GY5K31HBoA57fdrHnLYtc9D5e3QLVLa/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Today, I read a post [people-still-post-their-private-keys-on-memos](https://steemit.com/steem/@emrebeyler/) that private keys can be found in memos inside the blockchain. So I will describe my security setup for preventing such things. As you might know,  there are 4  different key types:

* posting key for posting and voting,
* active key for transfers and market orders,
* owner key for changing the private keys,
* memo key for creating and reading encrypted memos.


Each key type consists of a public and a private key. The public key is known to each user and starts always with  `STM`. The private owner key starts always with a    `P`,  and the other private keys have no prefix.

<center>![](https://steemitimages.com/200x0/https://steemitimages.com/DQmSa9hKwLxpM497GY5K31HBoA57fdrHnLYtc9D5e3QLVLa/image.png)
[source](https://pixabay.com/en/key-entry-door-castle-door-key-3125904/)</center>

Once logged into steemit, the user credentials are stored for a while. So it is not a good idea to use the active or owner key for login. If you do so, everyone who has short access to your PC can go to the steemit site and move your STEEM/SBD (If you not have pressing the logout button).

The second and bigger problem is the following scene:
You are logged in with your posting key, and want to transfer some SBD to different accounts. You are in hurry.
You are copying your post-url into the memo field and press submit.
Then you are copying your active key and pasting it into the dialog. Then you want to transfer some more SBD to a second account. So writing down the recipient, the SBD amount and then pasting again into the memo field and finally press submit.

... ups .. your have sent your active key into the blockchain ...

You are not fast enough to save your remaining fluid SBD/STEEM but your SP are save. Monitoring every memo for pasted keys and automatically withdraw all founds is easy to implement and fast.

## What to do?
Never, never use your private owner key for posting or transfers! Never store any key in the internal password manager of your browser, as this is not secure.

Use a password manager which automatically clears the clipboard after 10 seconds when copying the active key. Use only a password manager which do not use autofill!
By doing this its more unlikely that you copying your active key accidientially into the memo field.

I'm using [1password 6](https://1password.com/) with the following settings:
![](https://steemitimages.com/DQmRQUYsD1U7Mvb6H4oayXknfBVcSsv3RkXzzqdPAPnk8Ai/image.png)

[Keepass 2](https://keepass.info/) is also a good and free password manager. 
![](https://steemitimages.com/DQmaZoYypWzbXM2ju2X5VLAF5PbBeWueqMvnSMK3DvLKjKP/image.png)

[enpass](https://www.enpass.io/) has also a clear clipboard feature and is free.
___
What are your security measures for preventing that you accidientially pasting your active/owner key into a transfer memo?

- - -

This page is synchronized from the post: ['How to keep your steemit account safe'](https://steemit.com/@holger80/how-to-keep-your-steemit-account-safe)
