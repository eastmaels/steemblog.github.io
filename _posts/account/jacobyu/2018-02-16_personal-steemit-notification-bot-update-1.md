
---
title: 'Personal Steemit Notification Bot - update #1'
permlink: personal-steemit-notification-bot-update-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-16 11:04:27
categories:
- utopian-io
tags:
- utopian-io
- busy
- python
- dev
thumbnail: 'http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180216_193434797-e1518777857274.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# What is the project about?
This project helps people build their own telegram bots.

This contribution is made to <a href="https://github.com/passionbull/steemit-alarm-posting" rel="nofollow noopener">passionbull/steemit-alarm-posting</a>. If you would like to find more info - I recommend reading <a href="https://utopian.io/utopian-io/@jacobyu/personal-steemit-notification-bot">this post</a> first.

## PR
<a href="https://github.com/passionbull/steemit-alarm-posting/pull/1">https://github.com/passionbull/steemit-alarm-posting/pull/1</a>
## Details:
<ul>
 	<li>This update makes it easy for people to set up users, tags, and so on through telegrams.</li>
 	<li>The configured information is updated to the bot system.</li>
 	<li>Users can also choose between mysql and yaml as the database.</li>
</ul>
Details are below.
<ul>
 	<li>
<h3>I developed a module that executes queries to mysql.</h3>
</li>
</ul>
<a href="https://github.com/passionbull/steemit-alarm-posting/blob/master/func/dbfunc.py">https://github.com/passionbull/steemit-alarm-posting/blob/master/func/dbfunc.py</a>

&nbsp;
<ul>
 	<li>
<h3>MySQL-module is applied to this system.</h3>
</li>
</ul>
This system accesses db and updates user information.

&nbsp;
<ul>
 	<li>
<h3>Users can select database type in yaml or mysql.</h3>
</li>
</ul>
If you set <code>isUseMySQL</code> to 1, you have chosen mysql. And you need to set the parameters for connect mysql.

<a href="https://github.com/passionbull/steemit-alarm-posting/blob/master/db_sample.yaml#L4-L8">https://github.com/passionbull/steemit-alarm-posting/blob/master/db_sample.yaml#L4-L8</a>

&nbsp;
<ul>
 	<li>
<h3>Users can set users and tags using telegram.</h3>
</li>
</ul>
I add some handler for setting user information.

https://github.com/passionbull/steemit-alarm-posting/blob/master/func/telefunc.py#L93-L100

<img class="alignnone wp-image-970 size-full" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180216_193434797-e1518777857274.jpg" alt="" width="360" height="624" />
<h2>How to contribute?</h2>
If you have any questions, please comment or contact <a href="https://utopian.io/@jacobyu">@jacobyu</a> on steemit.chat.

Thank you.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@jacobyu/personal-steemit-notification-bot-update-1">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Personal Steemit Notification Bot - update #1'](https://steemit.com/@jacobyu/personal-steemit-notification-bot-update-1)
