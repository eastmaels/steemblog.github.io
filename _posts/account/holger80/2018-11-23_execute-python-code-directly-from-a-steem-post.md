
---
title: 'Execute python code directly from a steem post'
permlink: execute-python-code-directly-from-a-steem-post
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-23 00:04:51
categories:
- steemdev
tags:
- steemdev
- steemtank
- python
- beem
thumbnail: 'https://cdn.steemitimages.com/DQmdk5jqEXFfERZ2GAQesS5D19A8njiiy7b6oEMcg3VcGax/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


It is possible to execute python code directly from a post. I took my last [post](https://steemit.com/steemdev/@holger80/how-to-write-all-decrypted-memos-into-a-csv-file)  and stored the included python code in a post from @beempy: https://steemit.com/python/@beempy/decrypt-memos-csv

It is now possible to run this code without storing it on a file:

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
import argparse


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("authorperm")
    parser.add_argument("timestamp", nargs='?', default=None)
    args = parser.parse_args()
    authorperm = args.authorperm
    timestamp = args.timestamp
    stm = Steem(node="https://api.steemit.com")
    comment = Comment(authorperm, steem_instance=stm)
    if timestamp is not None and comment.json()["last_update"] != timestamp:
        print("%s != %s, aborting" % (comment.json()["last_update"], timestamp))
    else:
        start_position = comment.body.find("```") + 4
        end_position = comment.body.find("```", 2)
        python_file = comment.body[start_position:end_position]
        exec(python_file, globals())
    
```

This simple script reads the post and searches the position of the included python code. Then, the code is executed. Store the lines as python script `read_python_from_post.py` and execute it by

```
python read_python_from_post.py @beempy/decrypt-memos-csv
```

![](https://cdn.steemitimages.com/DQmdk5jqEXFfERZ2GAQesS5D19A8njiiy7b6oEMcg3VcGax/image.png)

The output and behavior are the same as when the script would be stored directly in the python file.

I added more security by checking the `last_update` timestamp. When the given timestamp is different from the comment parameter, the code is not executed:
```
python read_python_from_post.py @beempy/decrypt-memos-csv 2018-11-22T23:11:18
```
This prevents the execution of malicious code when the posting key of @beempy would have been leaked and someone had edited the posts.

It is also possible to store all python scripts that were published by @beempy:

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from beem.account import Account
import os


if __name__ == "__main__":
    output_file_path = "."
    stm = Steem(node="https://api.steemit.com")
    account = Account("beempy", steem_instance=stm)
    blog_posts = account.get_blog()
    index = 0
    for comment in blog_posts:
        print("writing %s.py" % comment["permlink"])
        start_position = comment.body.find("```") + 4
        end_position = comment.body.find("```", 2)
        python_file = comment.body[start_position:end_position]
        file_name = os.path.join(output_file_path, comment["permlink"] + '_' + comment.json()["last_update"] + ".py")
        with open(file_name, "w") as f:
            f.write(python_file)
   
     
```

At the moment, only one script is published, but I plan to add more content to @beempy.

- - -

This page is synchronized from the post: ['Execute python code directly from a steem post'](https://steemit.com/@holger80/execute-python-code-directly-from-a-steem-post)
