
---
title: 'Store all posts from an author in markdown files'
permlink: store-all-posts-from-an-author-in-markdown-files
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-23 13:05:54
categories:
- steemdev
tags:
- steemdev
- steemtank
- python
- beem
thumbnail: 'https://cdn.steemitimages.com/DQmQRi5odZ7Np5TmoUDEG4aRJ9JdjLw4bxu56LCPjv33b3C/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I would find it very convenient to have all my written posts in one folder on my hard drive. The content of each file should be identical to the blockchain data. I did not found a tool for this task, so I wrote a python script.

The script does the following:

* it reads the blog section of the given author (limited to the newest 500 posts)
* skip resteemed posts
* extracts title, timestamp, permlink  and store them as YAML extension at top of the md file
* saves the content as markdown file

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from beem.account import Account
import os
import io
import argparse


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("author")
    parser.add_argument("path")
    args = parser.parse_args()
    author = args.author
    path = args.path
    stm = Steem(node="https://api.steemit.com")
    account = Account(author, steem_instance=stm)
    for comment in account.get_blog(limit=500):
        if comment["author"] != author:
            continue
        markdown_content = comment.body
        title = comment.title
        timestamp = comment.json()["created"]
        author = comment["author"]
        permlink = comment["permlink"]
        yaml_prefix = '---\n'
        yaml_prefix += 'title: %s\n' % title
        yaml_prefix += 'date: %s\n' % timestamp
        yaml_prefix += 'permlink %s' % permlink
        yaml_prefix += 'author: %s\n---\n' % author
        filename = os.path.join(path, timestamp.split('T')[0] + '_' + permlink + ".md")
        
        with io.open(filename, "w", encoding="utf-8") as f:
            f.write(yaml_prefix + markdown_content)

```

Store this file as `save_posts_as_md.py`. `beem` need to be installed. The script needs two parameter:

```
python save_posts_as_md.py <author> <path>
```

The posts from the author are stored in the given path. The filename consists of the date and the permlink.

### Result for holger80

```
python save_posts_as_md.py holger80 .
```

![](https://cdn.steemitimages.com/DQmQRi5odZ7Np5TmoUDEG4aRJ9JdjLw4bxu56LCPjv33b3C/image.png)

Viewing the markdown files works best using the great [typora](https://typora.io/) editor.

### Storing one post as markdown file

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from beem.account import Account
import io
import argparse


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("authorperm")
    parser.add_argument("filename")
    args = parser.parse_args()
    authorperm = args.authorperm
    filename = args.filename
    stm = Steem(node="https://api.steemit.com")
    comment = Comment(authorperm, steem_instance=stm)
    markdown_content = comment.body
    title = comment.title
    timestamp = comment["created"]
    author = comment["author"]
    yaml_prefix = '---\n'
    yaml_prefix += 'title: %s\n' % title
    yaml_prefix += 'date: %s\n' % str(timestamp)
    yaml_prefix += 'author: %s\n---\n' % author
    
    
    with io.open(filename, "w", encoding="utf-8") as f:
        f.write(yaml_prefix + markdown_content)

```

This script works when a authorperm and filename was given:

```
python save_post_as_md.py @holger80/how-to-post-using-typora-and-beempy how-to-post-using-typora-and-beempy.md
```

- - -

This page is synchronized from the post: ['Store all posts from an author in markdown files'](https://steemit.com/@holger80/store-all-posts-from-an-author-in-markdown-files)
