
---
title: 'list of bots: move list of bots into a separate file'
permlink: list-of-bots-move-list-of-bots-into-a-separate-file
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-17 22:43:18
categories:
- utopian-io
tags:
- utopian-io
- code-refactoring
- utopian-bots
thumbnail: https://utopian.io/img/utopian-logo-120x120.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://utopian.io/img/utopian-logo-120x120.png)

I can see there are currently some other PR waiting to go in to the master branch on *utopian-bots.js* and there are some conflicts.

Maintaining a long list in the middle of a JS file which contains lots of logics is never a good idea. Thus, I have created a PR to move the list of bots into a separate file *list-of-bots.js*

The PR is at:  https://github.com/utopian-io/api.utopian.io/pull/34/files

Future contributions of adding/removing new bots are obviously dealing with this file only and this will reduce the number of conflicts.  And you can use use the following two lines of code to retrieve the list of bots, which is quite self-explanatory:

```
// get a list of bots
var list_of_bots = require('./list-of-bots.js');
var bots = list_of_bots.bots();   
``` 

This is the code refactoring, which is quite important as I believe.  This PR serves to *decouple* the changes of bots with the main logics of the utopian bot. Also, some other JS files can also read the bot list later without problems.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/list-of-bots-move-list-of-bots-into-a-separate-file">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [list of bots: move list of bots into a separate file](https://steemit.com/@justyy/list-of-bots-move-list-of-bots-into-a-separate-file)
