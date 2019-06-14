
---
title: 'How to easily get the markdown source from any post without programming'
permlink: how-to-easily-get-the-markdown-source-from-any-post-without-programming
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-07 11:00:36
categories:
- steemit
tags:
- steemit
- markdown
- json
- steemdev
thumbnail: 'https://steemitimages.com/DQmRMe4RpdMFyNqiqPZ73M7X1MNjEfuVy6kKre47magxDXA/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Do you want to get your markdown source from your old post? Or you want to learn markdown by taking a look on other posts and their markdown source?

## Install a json viewer on your browser
I'm using the open-source extension [json-viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)

# Viewing posts

## Extracting the markdown code
* add `.json` to the steemit url of a post.
* copy everything after `body": ` between `"` and `",` 
* All newlines are replaced by \n, so you can replace all \n by a newline. You can do this with notepad++ for example.

## Replace `\n` with a line break
* Open [notepad++](https://notepad-plus-plus.org/) and copy the source.
* Open Replace or press `STRG+h` and use the following settings:
<center>![](https://steemitimages.com/DQmRMe4RpdMFyNqiqPZ73M7X1MNjEfuVy6kKre47magxDXA/image.png)</center>
* Press `replace all`

## Example
Enter into your browser: https://steemit.com/steem/@steemitblog/dev-portal-update-new-steem-developer-resources.json. 
You see then something like:
<center>![](https://steemitimages.com/DQmcar3seBLcEpwhdoArYu3giGGMPMiQ1RLGAVX5gyzEupC/image.png)</center>
Replace all `\n` with notepad++ and copy everything to an editor of your choice. Now, you can take a look at the source code:
<center>
![](https://steemitimages.com/DQmYtx4Btizb2AXKUvtVoY7EYh3D18hiYzcDZ46WLLnnetG/image.png)
</center>

# Viewing accounts
You can also take a look on the raw data of an account.
## Take a look on an account
* add `.json` to the steemit url of an account.

## Example
Enter into your browser: https://steemit.com/@steemitblog.json
___
I hope this short information was helpful for you. For me this is very useful and I did not know this for a long time. Now, I can easily copy some parts from the markdown code of my old post.

- - -

This page is synchronized from the post: ['How to easily get the markdown source from any post without programming'](https://steemit.com/@holger80/how-to-easily-get-the-markdown-source-from-any-post-without-programming)
