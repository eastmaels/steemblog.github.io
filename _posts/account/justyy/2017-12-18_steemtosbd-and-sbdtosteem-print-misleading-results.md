
---
title: 'steem_to_sbd and sbd_to_steem print misleading results'
permlink: steemtosbd-and-sbdtosteem-print-misleading-results
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-18 23:07:33
categories:
- utopian-io
tags:
- utopian-io
- steem-python
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513638315/wc06kl9joidruo7bcgcp.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Python github `convert.py` is located at:
https://github.com/steemit/steem-python/blob/master/steem/converter.py

Here is a test script to print the feed price:
```
from steem.converter import Converter          
import sys

try:                      
  converter = Converter()                
  steem_to_sbd = converter.steem_to_sbd(1.0)
  sbd_to_steem = converter.sbd_to_steem(1.0)
  print("1 STEEM = " + str(steem_to_sbd) + " SBD")
  print("1 SBD = " + str(sbd_to_steem) + " STEEM")          
except:
  print("Unexpected error:", sys.exc_info()[0])    
```

So it prints the following, which is quite misleading... at least, the SBD should be more expensive than STEEM, as of today.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513638315/wc06kl9joidruo7bcgcp.png)



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtosbd-and-sbdtosteem-print-misleading-results">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [steem_to_sbd and sbd_to_steem print misleading results](https://steemit.com/@justyy/steemtosbd-and-sbdtosteem-print-misleading-results)
