
---
title: 'account.has_voted throws AttributeError'
permlink: account-hasvoted-throws-attributeerror
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-17 16:25:36
categories:
- utopian-io
tags:
- utopian-io
- steem-python
- attributeerror
- bugs
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1510935862/pgfbptrtcnsw5ogpvetp.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I am a fan of the steem-python library, and I think there is a bug in the *has_voted* method of the account class.

See this code:

```
from steem.account import Account
import sys

try:
  account = Account("justyy")
  if account.has_voted("@justyy/cn--2017-11-17"):
    print('voted already by has_voted')
except:
  print("Unexpected error:", sys.exc_info()[0])    
```

Let's run it using `python3 test.py` assuming above script is saved to `test.py`

It will **always** throws the `unexpected error - attribute error` which basically makes the method unusable.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1510935862/pgfbptrtcnsw5ogpvetp.png)

The source code is at 136-138 of the official steem-python github page:
https://github.com/steemit/steem-python/blob/master/steem/account.py



<br /><hr/><em>Open Source Contribution posted via <a href="https://utopian.io/utopian-io/@justyy/account-hasvoted-throws-attributeerror">Utopian.io</a></em><hr/>

- - -

This page is synchronized from the post: [account.has_voted throws AttributeError](https://steemit.com/@justyy/account-hasvoted-throws-attributeerror)
