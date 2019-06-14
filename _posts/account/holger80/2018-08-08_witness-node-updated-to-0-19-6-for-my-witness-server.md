
---
title: 'Witness node updated to 0.19.6 for my witness server'
permlink: witness-node-updated-to-0-19-6-for-my-witness-server
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-08 11:15:39
categories:
- witness-category
tags:
- witness-category
- witness-update
- witness
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Updating to 0.19.6/0.19.11 is strongly encourage for all witnesses.
> Bug Fixes for 0.19.6
There was a bug in how witness nodes were heuristically calculating the block size when generating a block that could lead a node to produce a block that was too large. (#2632)

>Authority membership size was not being enforced and is now checked.

After disabling my witness and stopping steemd, I updated the steem repository to [0.19.6](https://github.com/steemit/steem/releases/tag/v0.19.6). Compilation and installation works without problems.

The compilation and installation of  0.19.6 was smooth. After doing `systemctl start steemd.service`, steemd runs 0.19.6.

In around ten hours, I will sign my next block. My witness server version will then be correctly be shown as 0.19.6.

I will switch to 0.19.11 in the near future.

- - -

This page is synchronized from the post: ['Witness node updated to 0.19.6 for my witness server'](https://steemit.com/@holger80/witness-node-updated-to-0-19-6-for-my-witness-server)
