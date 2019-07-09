
---
title: 'Basic VPS hardening tips from Privex'
permlink: basicvpshardeningtipsfromprivex-53lw8za18v
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-05 16:01:03
categories:
- computer
tags:
- computer
- security
- ssh
- technology
- web
thumbnail: 'https://cdn.steemitimages.com/DQmcYnW3buE28G9XxixaN33pzv3hUrLbMThfNUgb6a5N4zF/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmcYnW3buE28G9XxixaN33pzv3hUrLbMThfNUgb6a5N4zF/image.png" alt="" /><br/>

I've been a long time @privex customer for their awesome VPS service. Awesome uptime and very reasonably positioned price. When I said awesome uptime, I mean zero downtime and in fact the only downtime I had was due to Privex schedule upgrade maintenance.

I was looking back at the old mails and found an interesting security tips by Privex upon the VPS distribution to me few months ago which I has been ignored. Some really basic but essential tricks to implement on one VPS for security hardening:

<ul>
<li>Install fail2ban apt install fail2ban to block SSH brute force attacks</li>
<li>Move your SSH port above 10000, this prevents SSH brute force attacks causing network problems</li>
<li>Change your password using <code>passwd</code></li>
<li>Update your system with <code>apt update</code> and <code>apt upgrade -y</code></li>
</ul> <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/basic-vps-hardening-tips-from-privex/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Basic VPS hardening tips from Privex'](https://steemit.com/@fr3eze/basicvpshardeningtipsfromprivex-53lw8za18v)
