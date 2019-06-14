
---
title: 'How to write a post when all condensers are not useable'
permlink: how-to-write-a-post-when-all-condensers-are-not-useable
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-26 11:44:03
categories:
- steem
tags:
- steem
- python
- beem
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


At the moment it is not possible for most accounts to publish a post through condenser. This state will be resolved when https://api.steemit.com has replayed and works with version `0.20.3`. There are other full nodes that already have replayed, as `https://api.steem.house` for example. With `beem`, it is therefore possible to publish a post.

## Install beem

```
pip install beem -U
```

or 

```
conda install beem
```

## Store the following script as publish_post.py file 

```
#!/usr/bin/python
from beem import Steem
import getpass


if __name__ == "__main__":
    author = "holger80"
    title = "How to write a post when all condensers are not useable"
    with open('body.md') as f:
        body = f.read()
    parse_body = True
    tags = ["steem", "python", "beem"]
    wif = getpass.getpass(prompt='Enter your posting key.')
    stm = Steem(node="https://api.steem.house", keys=[wif])
    stm.post(title, body, author=author, tags=tags, parse_body=parse_body, self_vote=False)

```

## Store your post body in body.md

Write your post with an editor and store it as `body.md` in the same directory as the python script.

## Publish your post

You can now publish your post with:

```
python publish_post.py
```

Enter your posting key into the prompt and the post will be posted.



- - -

This page is synchronized from the post: ['How to write a post when all condensers are not useable'](https://steemit.com/@holger80/how-to-write-a-post-when-all-condensers-are-not-useable)
