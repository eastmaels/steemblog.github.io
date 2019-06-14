
---
title: 'I''m working on an automatic steem voter'
permlink: i-m-working-on-an-automatic-steem-voter
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-21 22:18:21
categories:
- steemdev
tags:
- steemdev
- rewarding
- automation
- beempy
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmTvaivvuMPA58wk6kEteLoRr7tATXhFuUnhu7pEycMEfX'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I think most steem user are using steemauto or steemvoter to automatically upvote new posts from their favorite authors. Due to the fact that high curation rewards can only be achieved within the first 15 minutes, I'm automatically upvoting posts within the optimal time frame using an auto voter.

On steemauto.com, it is possible to set 
* vote weight
* time delay in minutes
* daily limit

for an author. This is too limited, I would like to set included and excluded tags. I also have the problem, that my voting power is sometimes at 100% over night.

## Work in progress

I'm currently rewriting the python code for my @rewarding helper. I'm using now a database.

I added the following option for a voting rule:
* include tags -> list of tags that must be included for an automatic upvote (e.g. utopian-io, development)
* exclude tags -> list of tags that will not be upvoted from the author
* set vote weight in SBD equivalent

It is also possible to automatic upvote pending posts when my voting power is at 100% from specified authors.
By doing this, my voting power is used. 

## Simple Web interface
I'm currently working on a simple web form application, that would allow others to use my auto voter.

![image.png](https://ipfs.busy.org/ipfs/QmTvaivvuMPA58wk6kEteLoRr7tATXhFuUnhu7pEycMEfX)

I will post new updates on the development.
____
What do you think? Would you use such an automatic voter (It works similar to steemauto only when posting rights are granted to a specified account).

Do you need more options beside include_tags and exclude_tags? Do you have also the problem, that the vote power is sometimes at 100%?


- - -

This page is synchronized from the post: ['I''m working on an automatic steem voter'](https://steemit.com/@holger80/i-m-working-on-an-automatic-steem-voter)
