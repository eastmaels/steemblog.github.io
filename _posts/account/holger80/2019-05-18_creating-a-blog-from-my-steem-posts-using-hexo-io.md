
---
title: 'Creating a blog from my steem posts using hexo.io'
permlink: creating-a-blog-from-my-steem-posts-using-hexo-io
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-18 22:33:15
categories:
- steemdev
tags:
- steemdev
- blog
- markdown
- hexo
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmTDGm3Ma8WokRTbGNyt1dp3GYKAmAUbTtY66C3fsgqKdL'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I'm experimenting with a approach to download all my posts as markdown file and build a website from these files. I found [hexo.io](https://hexo.io/) which is a blog framework that can parse markdown files. I used this framework and a python script to generate a blog website at https://holger80.de



### hexo template
I installed the hexo npm package by:
```
npm install hexo-cli -g
```
I'm using the icarus theme: https://github.com/ppoffice/hexo-theme-icarus/tree/site
I did a checkout and installed all missing packages by:
```
npm install
```
inside the main directory.

### Storing all posts as markdown files

I wrote a small python script that downloads the posts and adds a yaml header to it.

```
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
from builtins import bytes, int, str
from beem import Steem
from beem.comment import Comment
from beem.account import Account
from beem.amount import Amount
from beem.nodelist import NodeList
from beem.utils import addTzInfo, resolve_authorperm, construct_authorperm, derive_permlink, formatTimeString
from datetime import datetime, timedelta
import click
import logging
import sys
import os
import io
import argparse
import re
import six
   
click.disable_unicode_literals_warning = True
log = logging.getLogger(__name__)

if __name__ == "__main__":
    
    image_path = None
    path = ".\\source\\_posts"
    author = "holger80"
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    account = Account(author, steem_instance=stm)
    permlink_list = []
    cnt = 0
    for h in account.history(only_ops=["comment"]):

        if h["parent_author"] != '':
            continue
        if h["author"] != author:
            continue
        if h["permlink"] in permlink_list:
            continue
        else:
            permlink_list.append(h["permlink"])

        # get newest version
        comment = Comment(h, steem_instance=stm)
        comment.refresh()
        markdown_content = comment["body"].replace('<center>','').replace('</center>', '')
        title = comment["title"]
        timestamp = comment.json()["created"]
        author = comment["author"]
        permlink = comment["permlink"]
          
        yaml_prefix = '---\n'
        yaml_prefix += 'title: "%s"\n' % title.replace('"', '')
        yaml_prefix += 'catalog: true\n'
        yaml_prefix += 'toc_nav_num: true\n'
        yaml_prefix += 'date: %s\n' % timestamp.replace('T', ' ')
        yaml_prefix += 'tags:\n'
        for tag in comment.json_metadata["tags"]:
            yaml_prefix += '- %s\n' % tag
        yaml_prefix += 'categories:\n'
        yaml_prefix += '- %s\n' % comment.json_metadata["tags"][0]
        yaml_prefix += 'toc: true\n'
        yaml_prefix += '---\n\n'
        filename = os.path.join(path, timestamp.split('T')[0] + '_' + permlink + ".md")
        
        with io.open(filename, "w", encoding="utf-8") as f:
            f.write(yaml_prefix + markdown_content)

        cnt += 1
        if cnt % 10 == 0:
            print("Receiving posts ... (%d stored)" % cnt)
```
The script must be stored in the main directory and the `author = "holger80"` must be changed.

When running the script, all steem posts will be stored in `./source/_posts`

### Configuration of the site

I modified the `_config.yml` and `_config.theme.yml` configuration files. 
It is possible to test the outcome by
```
hexo server
```
and view the site at http://localhost:4000/.

### Create a static site
These commands generate  static html pages that can be uploaded to any webserver.
```
hexo clean
hexo generate
```

### Results
After experimenting a little bit, you can find my blog at https://holger80.de

My newest posts are shown on top:
![image.png](https://ipfs.busy.org/ipfs/QmTDGm3Ma8WokRTbGNyt1dp3GYKAmAUbTtY66C3fsgqKdL)

On the left side, my profile is shown:
![image.png](https://ipfs.busy.org/ipfs/QmV7jfdJSk6f5TWwNeEbq3tSyZHukNAm6XcHJhVBkGe7aD)

Categories are shown below this:
![image.png](https://ipfs.busy.org/ipfs/QmfK8m1sWc8iCLSJsLhHwD9w1Z5asQGBqXPFxvmmKNYCYs)
and a tag cloud:
![image.png](https://ipfs.busy.org/ipfs/QmPLxZszmjLjMsy9k5ZPLZnWPncwrJkiQax9bKjMaENPqd)

On the right side, my recent posts are shown:
![image.png](https://ipfs.busy.org/ipfs/QmSL3qLCJHhEQ7RJadTMoc1Y5dsS9sgEZrYGns4FagweYf)
and a archive:
![image.png](https://ipfs.busy.org/ipfs/QmT6grFCFq3JedWnkesyMnueH7BMW52UQzUJ8vEUF2Gj3Q)

When clicking on a archive entry, a timeline is shown:
![image.png](https://ipfs.busy.org/ipfs/QmSY8FdCUTjeWQ1Z7Eve4CP3u5yL2mY9CjA8qD6pxWZ7qz)

It is also possible to search all posts for a keyword:
![image.png](https://ipfs.busy.org/ipfs/QmavNy3YASrHXEjGadiY3XE6q6AgvrL8qoLmw26c8hhHsP)


When opening a posts,  all used header are shown on the left side as navigation help:
![image.png](https://ipfs.busy.org/ipfs/Qmax9Qqb6Ny89BtjgTTedM3KjwRbGne2nRe2M3rqpnReMN)


The markdown parser could handle almost every post. Only `<center>` tags lead to an error, I solved this y removing all `<center>` tags.

What do you think? Would you like to have something like  this for your steem account as well?

- - -

This page is synchronized from the post: ['Creating a blog from my steem posts using hexo.io'](https://steemit.com/@holger80/creating-a-blog-from-my-steem-posts-using-hexo-io)
