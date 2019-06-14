
---
title: 'How to reply to a post using beem'
permlink: how-to-reply-to-a-post-using-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-26 11:54:03
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


It is possible to write comments with the following script:

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
import getpass


if __name__ == "__main__":
    wif = getpass.getpass(prompt='Enter your posting key.')
    stm = Steem(node="https://api.steem.house", keys=[wif])
    author = "holger80"
    authorperm = "@emrebeyler/how-to-create-a-post-with-the-current-state"
    with open('reply_body.md') as f:
        body = f.read()    
    c = Comment(authorperm, steem_instance=stm)
    c.reply(body, author=author)
```

steps:

- install beem (`pip install beem -U`)
- store script as `reply_post.py`
- change `authorperm` and `author` in the script
- write your reply and store it as `reply_body.md`
- Run the script with `python reply_body`



- - -

This page is synchronized from the post: ['How to reply to a post using beem'](https://steemit.com/@holger80/how-to-reply-to-a-post-using-beem)
