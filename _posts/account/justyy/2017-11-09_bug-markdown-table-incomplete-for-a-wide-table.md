
---
title: 'Bug: Markdown Table Incomplete for a wide table'
permlink: bug-markdown-table-incomplete-for-a-wide-table
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-09 12:43:21
categories:
- utopian-io
tags:
- utopian-io
- steem-bug
- table
- markdown-table
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1510231289/oedt4caoqg6wgxaqn7s1.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Steemit.com is likely to hide the last few columns of a Markdown table if the table contains many columns. For example,

```
| | Delegator| Delegatee| Vests| SP| UTC|
|:--|:--|:--|:--|:--|:--|
| 1 | @misterdelegation | @utopian-io | 2083312462.0 | 1013931.8 | 2017-11-07 13:43:57 | 
| 2 | @ned | @utopian-io | 2065354335.0 | 1005191.7 | 2017-11-07 11:29:06 | 
| 3 | @snowflake | @peaceandlove | 370083713.0 | 180116.8 | 2017-11-02 03:37:15 | 
```
is shown as:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1510231289/oedt4caoqg6wgxaqn7s1.png)

The URL for the post is:
https://steemit.com/stats/@dailystats/daily-top-delegations-2017-11-08

The busy.org does not have this problem, here is how it looks like in busy.org:
https://busy.org/stats/@dailystats/daily-top-delegations-2017-11-08

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1510231347/o8swlqd7jeolancnx6ey.png)



<br /><hr/><em>Open Source Contribution posted via <a href="https://utopian.io/utopian-io/@justyy/bug-markdown-table-incomplete-for-a-wide-table">Utopian.io</a></em><hr/>

- - -

This page is synchronized from the post: [Bug: Markdown Table Incomplete for a wide table](https://steemit.com/@justyy/bug-markdown-table-incomplete-for-a-wide-table)
