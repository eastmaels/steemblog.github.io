
---
title: 'Obtain the number of active, ghost and dead followers using beem'
permlink: obtain-the-number-of-active-ghost-and-dead-followers-using-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-07 21:17:42
categories:
- python
tags:
- python
- steemdev
- follower
- beem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPRtDneCLfrzQ2DvCDt7fmBHeN1iFcbShURuJ9Tr9qeGD'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


After visiting http://www.steemspectacles.com/@holger80/followers, I wanted to calculate the number of my ghost, dead and active followers with [beem](https://github.com/holgern/beem). 

## Definition
* dead follower: not posted (post or comment) or voted within the last 30 days
* ghost follower: did not vote or reply to any of the last 100 posts
* active follower: is not a dead or ghost follower

## Python script
I solved this by fetching my last 100 post with `get_blog` and stored all active votes and all replies of these 100 posts using `get_votes` and `get_all_replies`.
Then I go through all followers.

```
from beem.account import Account
from beem.comment import Comment
from beem.utils import addTzInfo, resolve_authorperm, formatTimeString
from datetime import datetime

if __name__ == "__main__":
    account = Account("holger80")
    followers = account.get_followers(raw_name_list=False)
    blog = []
    all_received_votes = {}
    all_received_replies = {}
    for b in account.get_blog(limit=100):
        if b["authorperm"] != '@/':
            blog.append(b)
            c = Comment(b)
            c.refresh()
            for v in c.get_votes():
                if v["voter"] in all_received_votes:
                    all_received_votes[v["voter"]].append(v)
                else:
                    all_received_votes[v["voter"]] = [v]
                    
            for c in c.get_all_replies():
                if c["author"] in all_received_replies:
                    all_received_replies[c["author"]].append(c)
                else:
                    all_received_replies[c["author"]] = [c]
    n_votes = 0
    n_replies = 0
    for a in all_received_votes:
        n_votes += len(all_received_votes[a])
    for a in all_received_replies:
        n_replies += len(all_received_replies[a])
    own_mvest = []
    eff_sp = []
    rep = []
    last_vote_h = []
    last_post_d = []
    no_vote = 0
    no_post = 0
    last_votes = []
    last_posts = []
    last_comments = []
    returned_rshares = []
    returned_votes = []
    returned_replies = []
    for f in followers:
        rep.append(f.rep)
        own_mvest.append(f.balances["available"][2].amount / 1e6)
        eff_sp.append(f.get_steem_power())
        last_votes.append((addTzInfo(datetime.utcnow()) - (f["last_vote_time"])).total_seconds() / 60 / 60 / 24)
        last_posts.append((addTzInfo(datetime.utcnow()) - (f["last_root_post"])).total_seconds() / 60 / 60 / 24)
        last_comments.append((addTzInfo(datetime.utcnow()) - (f["last_post"])).total_seconds() / 60 / 60 / 24)
        votes = f.get_account_votes()
        returned_vote = 0
        returned_rshare = 0
        if f["name"] in all_received_votes:
            for v in all_received_votes[f["name"]]:
                returned_vote += 1
                returned_rshare += v["rshares"]
        returned_rshares.append(returned_rshare)
        returned_votes.append(returned_vote)
        returned_reply = 0
        if f["name"] in all_received_replies:
            for c in all_received_replies[f["name"]]:
                returned_reply += 1
        returned_replies.append(returned_reply)
                
    ghost_followers = 0
    dead_followers = 0
    active_followers = 0
    active_sp = 0
    for i in range(len(followers)):
        if returned_votes[i] == 0 and returned_replies[i] == 0:
            ghost_followers += 1
            
        if last_votes[i] > 30 and last_posts[i] > 30 and last_comments[i] > 30:
            dead_followers += 1
        elif returned_votes[i] > 0 or returned_replies[i] > 0:
            active_sp += eff_sp[i]
            active_followers += 1
        
    print("%s has %d (%d active, %d ghosts and %d dead) followers." % (account["name"], len(followers), active_followers, ghost_followers, dead_followers))
    print("%.2f %% are active (not ghost or dead)." % (active_followers / len(followers) * 100))
    print("%.2f %% of all %d votes are from followers." % (sum(returned_votes) / n_votes * 100, n_votes))
    print("%.2f %% of all %d replies are from followers." % (sum(returned_replies) / n_replies * 100, n_replies))
    print("%.2f %% of all effective SP owned by followers are from active followers." % (active_sp / sum(eff_sp) * 100))
```
## Results

holger80 has 916 (237 active, 663 ghosts and 197 dead) followers.
25.87 % are active (not ghost or dead).
13.50 % of all 9729 votes are from followers.
39.79 % of all 1616 replies are from followers.
96.44 % of all effective SP owned by followers are from active followers.


The obtained ghost followers are different from the result shown at http://www.steemspectacles.com:
![image.png](https://ipfs.busy.org/ipfs/QmPRtDneCLfrzQ2DvCDt7fmBHeN1iFcbShURuJ9Tr9qeGD)
The difference could be explained by a different obtained reply depth. Whereas my script took all replies into account, steemspectacles may only analyze first level replies.

- - -

This page is synchronized from the post: ['Obtain the number of active, ghost and dead followers using beem'](https://steemit.com/@holger80/obtain-the-number-of-active-ghost-and-dead-followers-using-beem)
