
---
title: 'beempy.com shows curation performance as plot and works for paid out posts'
permlink: beempy-com-shows-curation-performance-as-plot-and-works-for-paid-out-posts
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-17 23:55:18
categories:
- steemdev
tags:
- steemdev
- beempy
- curation
- performance
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmWMgGHEprT4jUccERvzQwTqR5q6cvPBuVK9sq2JK9MqRr'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


It is now much easier to view the estimated curation performance of a post with [beempy.com](https://beempy.com).

### Usage

Just replace steemit.com 
![image.png](https://ipfs.busy.org/ipfs/QmWMgGHEprT4jUccERvzQwTqR5q6cvPBuVK9sq2JK9MqRr)
 by beempy.com
![image.png](https://ipfs.busy.org/ipfs/QmbQRXnpKZNvZWC3fP4texHrmA8nhqGdLdf9P8EUQc84pQ)

(works also by busy.org and others).

## Curation performance estimation
The estimated curation performance and the all votes are plotted for the first 30 minutes  as this is the most important time period for curation:
![image.png](https://ipfs.busy.org/ipfs/QmNtuBhweiwdYwb7qm6XzrVrHcieFq5kkXcFUFmEa8ksL8)

The curation performance is calculated by the beem function `get_curation_rewards`.
A 100 % performance means that the equivalent in STU is received in Steem power as curation rewards. E.g. the median steem price is 0.5 $ and the vote was 1 STU. 100 % performance will be achieved when 2 SP will be received as curation rewards. 100% performance is equivalent to a selfvote casted to a post/comment after 15 min which is not voted by others (75% author reward + 25 % curation reward).
## Curation performance for paid out posts
The curation performance works now also for already paid out posts.
The curation rewards for @steemchiller/steemworld-weekly-support-18 were paid out:
![image.png](https://ipfs.busy.org/ipfs/QmSdtVt7xYxZqucYZbpGe9zivJjdPJsDThnfCqxEpnabtS)
and I received 0.133 SP.

beempy estimates:
![image.png](https://ipfs.busy.org/ipfs/Qmb44z2MYPysFzeto6j2XiB4byQAAn6FJuRQdHLYm4vVeu)
0.134 SP, which is very close. beempy uses the estimated performance, the vote value and the current median steem price for it's estimation.

For paid out posts, I use the beem class `ActiveVotes`.


- - -

This page is synchronized from the post: ['beempy.com shows curation performance as plot and works for paid out posts'](https://steemit.com/@holger80/beempy-com-shows-curation-performance-as-plot-and-works-for-paid-out-posts)
