
---
title: 'Three ways of Running a continuous NodeJS Application on Your Server'
permlink: three-ways-of-running-a-continuous-nodejs-application-on-your-server
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-03 17:52:30
categories:
- whalepower
tags:
- whalepower
- steem
- nodejs
- pm2
- crontab
thumbnail: 'https://cdn.steemitimages.com/DQmSTwjoWBZjLzuJ5HeTVvKCddGuyaiyqo2w4EzGshBpLFb/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Let's say, I have an application that is written in NodeJs, that process the latest blocks of the [steem blockchain](https://helloacm.com/recursive-algorithm-to-get-proxy-votes-on-steem-blockchain/) and write data into a database. I have three ways of running it on my server.

# Using Screen
As you probably know, when you are disconnected from a SSH session, the programs that are launched in the session will be terminated. There is any easy way to fix this. You can start a session by using command `screen -S name` before you run any long-running program e.g. system updates or a program that needs to run forever.

In case the [SSH](https://helloacm.com/a-nice-alternative-for-putty-termius-a-very-nice-portable-ssh-connection-tool/) is disconnected, the programs will be still running. And you can use command `screen -r name` to re-connect to the session. You can `screen -ls` to list the current sessions, and `screen -d name` to detach a session.

The advantage of using this method is:
1. you can easily monitor the application (by seeing its output)
2. you can easily terminate or restart the application e.g. Ctrl + C
3. the application runs continuously, meaning that you can keep up to the latest blocks and provide a less than 3 second sync time.

Some disadvantages:
1. If the application exists abnormaly, it is not restarted automatically - thus you would need to add the error-handling in your code.
2. Long-running code may tend to have more problems: e.g. memory-leaks, crash at some point.

# Putting it in Crontab
Another way is to run your program in [crontab](https://helloacm.com/crontab-generator-secure-fast-handy-tool-to-generate-the-crontab-lines/). However, the finest granularity is every minute i.e. you can specify your application to run every minute.

Advantages are:
1. You probably don't need to do error-handling. In case it fails, it fails. You can just wait for next minute (restart automatically).
2. Not to worry about memory leaks. It is less likely to go wrong due to memory issue.

Disadvantages:
1. Lose the ability to sync real-time with the blocks
2. Not easy to monitor the output (you can redirect the errors to files though)

# Using a Process Manager
You can combine the both advantages using a Process Manager. For example, if it is a NodeJs application, you can use `pm2` utility.

Advantages:
1. automatically restart your application in case it crashes or some conditions are met e.g. memory constraints, age.
2. easy to monitor the output of each application e.g. you can `pm2 show app`
3. easy to terminate `pm2 delete app` or restart `pm2 restart app`
4. the application runs continuously
5. error-handling is optional - but considered a good practise not to let `pm2` restart your app.

![image.png](https://cdn.steemitimages.com/DQmSTwjoWBZjLzuJ5HeTVvKCddGuyaiyqo2w4EzGshBpLFb/image.png)

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/three-ways-of-running-a-continuous-nodejs-application-on-your-server/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Three ways of Running a continuous NodeJS Application on Your Server'](https://steemit.com/@justyy/three-ways-of-running-a-continuous-nodejs-application-on-your-server)
