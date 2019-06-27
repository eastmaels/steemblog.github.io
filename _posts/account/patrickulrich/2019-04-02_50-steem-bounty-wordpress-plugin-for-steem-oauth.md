
---
title: '[50 Steem Bounty] WordPress Plugin for Steem OAuth'
permlink: 50-steem-bounty-wordpress-plugin-for-steem-oauth
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-02 20:53:15
categories:
- wordpress
tags:
- wordpress
- steem
- steemconnect
- utopian-io
- bounty
thumbnail: 'https://files.steempeak.com/file/steempeak/patrickulrich/y18t0z7r-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Do you have experience with PHP or even better experience with creating WordPress plugins? If so I'm hoping you will help me solve a problem for many Steemians who have a WordPress blog and want to be able to use their Steem keys to sign in. Not only will you be helping many different Steemians out but I'll give you 50 Steem for taking the time to help us all. Everybody wins!

The really good news is that you won't need to spend a lot of time coding. That's because most of the work has already been done by @guix77. The bad news is that for some reason this is no longer working and I personally can't find why. That's where I'm hoping you'll be able to step in to fix it!

## @guix77's Solution
Guide - https://steemit.com/drupal/@guix77/do-you-want-steem-users-to-login-to-your-drupal-wordpress-or-other-php-site
Updated Git - https://github.com/patrickulrich/wordpress-social-login/tree/steemconnect/

I've started a fork from @guix77's original base with updated v2.steemconnect references converted to app.steemconnect. Each time I try to authenticate using the plugin I get taken to SteemConnect, which is good, but after signing there I'm taken back to the WordPress site and told that the authentication failed. I noticed that @guix77's [test site](https://wordpress.guillaumeduveau.com/steemconnect) is also returning the same results so I'm assuming something in the plugin needs to be updated for SteemConnect.

![image.png](https://files.steempeak.com/file/steempeak/patrickulrich/y18t0z7r-image.png)

## Rules of the Bounty
1. You need to have a working demo or at least a working code base where I can build and test your working plugin.
2. If any custom steps need to be made you'll need to provide a brief guide to replicate those.
3. I will tip 50 Steem from my wallet to the first person to provide a working solution for this.

## Notes
If you are confident that you can fix this but are in need of a fresh WordPress installation to test then please don't hesitate to let me know. I will be happy to give you an admin account to upload your plugin to and be able to test if it will connect for you.

Finally even if you don't code or play with PHP/WordPress please resteem and share this post. The more eyes that are taking a shot at this will mean that much better chance of getting this fixed and bringing Steem to that many more websites and services.

*EDIT: Bounty has been claimed by @chansetheguy.*

- - -

This page is synchronized from the post: ['[50 Steem Bounty] WordPress Plugin for Steem OAuth'](https://steemit.com/@patrickulrich/50-steem-bounty-wordpress-plugin-for-steem-oauth)
