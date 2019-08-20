
---
title: 'Personal Steemit Notification Bot'
permlink: personal-steemit-notification-bot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-05 14:10:48
categories:
- utopian-io
tags:
- utopian-io
- utopian-io
- busy
- python
- dev
thumbnail: 'http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180205_204405837-e1517831597906.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### What is the project about?
I want to introduce my project "Personal Steemit Notification Bot".

There are many notification bots, but this project helps each user develop steemit notification bot by yourself.

This project is python-based notification bot that anyone can modify.

It's main function is to receive notifications of <strong>tags</strong> and <strong>author's</strong> messages that you want on your own computer like below image.

<img class="alignnone size-full wp-image-941" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180205_204405837-e1517831597906.jpg" alt="" width="240" height="416" />
### Some contributions.
<ul>
 	<li>It has scalability. Users can put everything they want.</li>
 	<li>This project is implemented to use the information needed for the yaml file without using a DB like mysql.</li>
 	<li>Personally, when I received a notification, I make the BB-8 shine.
I included this module to my git repository.</li>
</ul>
https://www.youtube.com/watch?v=ttgnnL8t2TA

### Technology Stack
<ul>
 	<li>Program based on Python
<ul>
 	<li>version - 3.6</li>
 	<li>library
<ul>
 	<li>ruamel.yaml 0.15.35</li>
 	<li>steem 0.18.103 (<a href="https://github.com/steemit/steem-python">https://github.com/steemit/steem-python</a>)</li>
 	<li>python-telegram-bot 9.0.0 (<a href="https://github.com/python-telegram-bot/python-telegram-bot">https://github.com/python-telegram-bot/python-telegram-bot</a>)</li>
</ul>
</li>
</ul>
</li>
 	<li>Linux server is needed</li>
 	<li>telegram bot account</li>
</ul>

<hr />

### How it works?
<ul>
 	<li>Request bot-father of telegram app to generate telegram-bot</li>
</ul>
<img class="alignnone size-full wp-image-943" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180205_212658140-e1517834068977.jpg" alt="" width="240" height="417" />
<ul>
 	<li>Save bot key, data about users in db.yaml.</li>
</ul>
You can write db.yaml as shown below.

<img class="alignnone wp-image-946 size-full" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/02/-2018-02-05-22-28-12-e1517839562914.png" alt="" width="240" height="194" />
<ul>
 	<li>write <strong>'/start'</strong> and check your telegram id</li>
</ul>
<img class="alignnone size-full wp-image-947" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/02/KakaoTalk_20180205_222715311-e1517837827756.jpg" alt="" width="240" height="198" />
<ul>
 	<li>python main.py for excuting our bot.</li>
 	<li>If you have bb-8, let me know and I add comments.</li>
</ul>

### Roadmap
<ul>
 	<li>Integrate mysql and users can choose mysql or yaml.</li>
 	<li>When users set data in the telegram, data are applied to yaml or db.</li>
 	<li>Develop notification functions that users want</li>
</ul>

### How to contribute?
If you have any questions, please comment or contact @jacobyu on steemit.chat.

Thank you.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@jacobyu/personal-steemit-notification-bot">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Personal Steemit Notification Bot'](https://steemit.com/@jacobyu/personal-steemit-notification-bot)
