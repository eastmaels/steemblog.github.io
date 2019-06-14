
---
title: 'How to post using typora and beempy'
permlink: how-to-post-using-typora-and-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-21 13:46:09
categories:
- beempy
tags:
- beempy
- steemdev
- steemtank
- steemtools
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmSLxSsWierfRArm6mSkFwcycu15uPJfv9yS598r5eptYC/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---




### beempy

Broadcasting a markdown file with beempy needs at least version 0.20.12. You can check it by:

```
beempy --version
```

Windows use can find a exe-file without the need to install python or other software in [github](https://github.com/holgern/beem/releases). The current version is beempy-0.20.12-1166-49a8db87-py36_win64.zip. After downloading, the content can be extracted anywhere. Then the powershell can be used for using beempy, when the directory was changed to the directory in which the beempy.exe was stored.

When python is already installed, beempy can be installed by

```
pip install beem -U
```

pip3 should be used when python 3 is installed. When no wallet was created yet, it can be created by

```
beempy createwallet
```

Before being able to broadcast a post, the posting key must be added by:

```
beempy addkey
```

When entering this command, a first prompt asks for the wallet password and a second prompt asks for the posting key. It is useful to try copy/past to the terminal before. Depending on the terminal, pasting could be possible by right-click or ctrl-v.

### Post parameter

By using the YAML extension, it is very convenient to write a steem post with typora. It is possible to set:

* title - set the post title
* tags - set the tags, at least one must be set
* permlink - when not set, it is derived from the title
* benficiaries - set's beneficiaries 
* reply_identifier - when a authorperm is set as reply_identifier, the broadcasted content will be a reply to the reply_identifier
* percent-steem-dollars - can be 0 for 100% SP or 10000 for 50%/50%
* max-accepted-payout - can be used to reduce the payout, default is 1000000.000
* community - defines the community, when not set the first tag is used as community



The yaml part of this post consists of

![](https://cdn.steemitimages.com/DQmSLxSsWierfRArm6mSkFwcycu15uPJfv9yS598r5eptYC/image.png)

It starts with three `-` and ends with three `-`. There must be one space after each`:`. I will also try to improve robustness in a next update.

Please do not use the three - somewhere else in the markdown file. This is something that I have to fix for the next beempy release! Thus, I used a screenshot to show the yaml part.

Be sure to use always a new title, otherwise you would edit your old post. Maybe I will add a prompt, that will ask if the post should really be edited...

### Uploading images

Uploading images can be done by copy and pasting the image into the steemit.com editor and copying the steemitimages.com llink:

![](https://cdn.steemitimages.com/DQmXghVMJaZzN2Em17cPsoWQySSsX8n4dHqb3PCu9HpNo8k/image.png)

A simple image uploader is already implemented into beem. I will work on a command for beempy, so that upload is easily possible.



### Typora

I enjoying writing my post with [typora](https://typora.io/). It has some advantages over the steemit.com editor:

* build in spellchecker which shows possible corrections
* What you see is what you get:

![](https://cdn.steemitimages.com/DQmaBZhD1CGLcQfBSZMAL2DweY4Kacis5VRV1GgiLsoHp6v/image.png)

* improved speed
* easy to store all written posts in markdown
* working offline
* less distraction during writing 
* I can work on several post at once or working on a specific post  for a longer time
* By storing the md-file in a cloud, editing on the smart phone / tablet or on a different notebook is possible

### Editing a post

When I do not change the title, or when I add the permlink field, I can easily edit a post by re-posting it with beempy. Just edit the file and repost it with

```
beempy post -a author file_name.md
```



### Broadcasting the post

I'm now finish with writing my post. I stored the file as How-to-post-with-typora-and-beempy.md.

I go now to the terminal and write:

```
beempy post -a holger80 How-to-post-with-typora-and-beempy.md
```

After entering my wallet password, my post is broadcasted.

### Summary

* Write the post with typora and store the content as md-file.
* Add a YAML field and do never use the three`-`somewhere else in the post. I will improve this in the next update.
* Upload images to steemitimages.com by pasting them into the steemit.com editor, I will add an uploader for beempy.
* Be careful not to use the same title again, otherwise the old post will be edited. I will work an a prompt that asks in this case for a confirmation.
* You can change the payout to 100% SP by setting `percent-steem-dollars:0`

- - -

This page is synchronized from the post: ['How to post using typora and beempy'](https://steemit.com/@holger80/how-to-post-using-typora-and-beempy)
