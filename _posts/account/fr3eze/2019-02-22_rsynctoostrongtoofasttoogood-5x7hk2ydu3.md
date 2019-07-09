
---
title: 'Rsync, too strong too fast too good.'
permlink: rsynctoostrongtoofasttoogood-5x7hk2ydu3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-22 16:25:21
categories:
- computer
tags:
- computer
- linux
- sysadmin
- technology
- unix
thumbnail: 'https://cdn.steemitimages.com/DQmcYLPTffasyedEePz9P6acrmdYMhraHRUSCxQqvBbXw4v/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmcYLPTffasyedEePz9P6acrmdYMhraHRUSCxQqvBbXw4v/image.png" alt="" /><br/>

This is a note as a sysadmin. After being a heavy user of <code>scp</code> when it comes to remote file transfering, it has come to the time to kiss it goodbye after the discovery of <code>rsync</code>.

<code>rsync</code> is so much better than <code>scp</code> in most aspect. 
- <strong>Faster transfer speed</strong> - A lot faster especially in large file transferring.
- <strong>Interruption handling</strong> - Network interruption is not a nightmare to transfer that 1T file anymore.
- <strong>Better progress report</strong> - It shows the bit/s speed and progress bar in real-time.

All in all, <code>scp</code> is only suitable for a single file transfer. Anything larger and more than that, <code>rsync</code> is always the winner. Take a look at this <a href="https://stackoverflow.com/questions/20244585/how-does-scp-differ-from-rsync">question</a> on StackOverflow for a better idea. <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/rsync-too-strong-too-fast-too-good/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Rsync, too strong too fast too good.'](https://steemit.com/@fr3eze/rsynctoostrongtoofasttoogood-5x7hk2ydu3)
