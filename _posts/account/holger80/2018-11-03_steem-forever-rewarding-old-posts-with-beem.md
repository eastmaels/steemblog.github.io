
---
title: 'steem forever (rewarding old posts) with beem'
permlink: steem-forever-rewarding-old-posts-with-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-03 22:50:06
categories:
- steemdev
tags:
- steemdev
- steemtank
- python
- beem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmabsaZb6Ka6H1SwLcuak5RjAYnvpnNJNH5tCqaDy7wdhT'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


What to do when you want to reward an old post with an upvote? There are services that are doing this as steem-forever but they charge some percentage for their service.

We need a script that creates a comment under the post, set the beneficiaries and upvote the comment.
We are using beem:
```
pip install beem
```
for this. Store the following script as steem-forever.py

```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from datetime import datetime, timedelta
import time
import getpass
import argparse


def valid_age(post, hours=156):
    """
    Checks if post is within last twelve hours before payout.
    """
    if post.time_elapsed() > timedelta(hours=hours):
        return False
    return True


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("authorperm")
    parser.add_argument("votepercentage")
    args = parser.parse_args()
    authorperm = args.authorperm
    votepercentage = float(args.votepercentage)
    
    wif = getpass.getpass(prompt='Enter your posting key.')
    stm = Steem(keys=[wif])
    account = stm.wallet.getAccountFromPrivateKey(wif)

    c = Comment(authorperm, steem_instance=stm)
    if c.is_pending() and valid_age(c):
        while c.time_elapsed() < timedelta(seconds = 60 * 15):
            print("waiting that the post is 15 minute old")
            time.sleep(60)        
        c.upvote(weight=votepercentage, voter=account)
    else:
        body = "The reward of this comment goes 100 %% to the author %s. This is done by setting the beneficiaries of this comment to 100 %%." % (c["author"])
        beneficiaries = [{"account": c["author"], "weight": 10000}]
        stm.post("rewarding %s" % c["author"], body, author=account, reply_identifier=c["authorperm"], beneficiaries=beneficiaries)
        c.refresh()
        c_comment = None
        created = None
        for r in c.get_all_replies():
            if r["author"] == account:
                if created is None:
                    created = r["created"]
                    c_comment = r
                elif created < r["created"]:
                    created = r["created"]
                    c_comment = r
        while c_comment.time_elapsed() < timedelta(seconds = 60 * 15):
            print("waiting that the comment is 15 minute old")
            time.sleep(60)
        c_comment.upvote(weight=votepercentage, voter=account)
        print("Comment upvoted")
```
When running this script, it asks for the posting key. This key is only temporarly stored in the steem object and will be forgotten when the program exits.


## Rewarding a paid out post
I selected an old post from fullnodeupdate and will reward it with my test account @beembot with a 50% upvote:
```
python steem-foreever.py https://steemit.com/full-nodes/@fullnodeupdate/full-api-node-update---25102018 50
```
A new comment is created and after 15 minutes in a loop the comment is upvoted with 50 %.
![image.png](https://ipfs.busy.org/ipfs/QmabsaZb6Ka6H1SwLcuak5RjAYnvpnNJNH5tCqaDy7wdhT)
The beneficiaries are set to 100 % for giving the complete comment reward to the author.
![image.png](https://ipfs.busy.org/ipfs/QmNTH6jV5r5mLzyAmUKupvWobVkEpqXpwKKiCCnkdWvYjj)

- - -

This page is synchronized from the post: ['steem forever (rewarding old posts) with beem'](https://steemit.com/@holger80/steem-forever-rewarding-old-posts-with-beem)
