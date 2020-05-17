
---
title: 'Upvote/Flag Tools Re-worked'
permlink: upvote-flag-tools-re-worked
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-17 14:13:45
categories:
- witness-category
tags:
- witness-category
- witness-tools
- steem-witness
- whalepower
- steem-dev
- steem-tools
- steem
- software
thumbnail: 'https://cdn.steemitimages.com/DQmbgKA6phBcAHYCkyvuRpCWsfCQkffYsXRGCk6GRNqjFyf/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, the following tools (upvote and flags) are based on @steemsql

<ul>
<li><a href='https://steemyy.com/who-downvote-you/' title='Steem - Check Downvoted Your Posts/Comments'>Steem Who Flagged You?</a></li>
<li><a href='https://steemyy.com/flag/' title='Steem - Check Your Downvote History'>Steem Your Downvote/Flag History</a></li>
<li><a href='https://steemyy.com/outgoing/' title='Steem Outgoing Votes Report'>Steem Outgoing Votes Report</a></li>
<li><a href='https://steemyy.com/outgoing-votes/' title='Steem Outgoing Votes Checker - Check Last Upvotes/Downvotes by a Steem ID'>Steem Outgoing Votes Checker</a></li>
<li><a href='https://steemyy.com/incoming/' title='Steem Incoming Votes Report'>Steem Incoming Votes Report</a></li>
<li><a href='https://steemyy.com/lastvotes/' title='Steem Incoming Votes Checker - Check Last Upvotes/Downvotes from Steem IDs'>Steem Incoming Votes Checker</a></li>
</ul>

And Chinese versions:

<ul>
<li><a href='https://steemyy.com/who-downvote-you-steemit/' title='Steem - 看看谁踩了你'>Steem 看看谁踩了你</a></li>
<li><a href='https://steemyy.com/list-of-flag/' title='Steem - 你踩了谁'>Steem 查看你踩(downvote)过谁的记录</a></li>
<li><a href='https://steemyy.com/list-of-outgoing/' title='Steem 大鱼投票报告'>Steem 大鱼投票报告</a></li>
<li><a href='https://steemyy.com/list-of-outgoing-votes/' title='Steem 投票查询，大鱼最近给谁投票了？'>Steem 投票查询，大鱼最近给谁投票了？</a></li>
<li><a href='https://steemyy.com/list-of-incoming/' title='Steem 金主报告'>Steem 金主报告</a></li>
<li><a href='https://steemyy.com/list-of-lastvotes/' title='Steem 投票查询，谁最近给您投票了？'>Steem 投票查询，谁最近给您投票了？</a></li>
</ul>

I decided to abandon @steemsql and thus spent this weekend reworking these tools. The upvotes/flags data are slow to search at realtime but we can always process the previous blocks and store the processed data in the (centralised) database similar to what @steemsql does.

It is roughly 10,000,000 blocks per year on Steem Blockchain (3 second per block), i have processed the last 3,000,000 (around 3 months) and modified the underneath [APIs](https://steemyy.com/list-of-api.php) uses in all above tools. The database size is around 11G for the latest 3 month's data.

Also, charting has been added to 3 of them. For example:


![image.png](https://cdn.steemitimages.com/DQmbgKA6phBcAHYCkyvuRpCWsfCQkffYsXRGCk6GRNqjFyf/image.png)


------------

I hope this helps!

**Steem On!~**
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Upvote/Flag Tools Re-worked'](https://steemit.com/@justyy/upvote-flag-tools-re-worked)
