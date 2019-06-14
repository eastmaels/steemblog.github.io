
---
title: 'How much curation did my post voter earn?'
permlink: how-much-did-my-post-voter-earn-by-curation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-11 19:30:30
categories:
- curation
tags:
- curation
- python
- steemdev
- beem
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I wanted to know how much my post curators did earn by voting my last 100 posts (If you also want to know this, just leave a short comment and I will reply with the script results).

After fetching all my blog posts with `get_blog`, I'm going through all votes and use the `beem` function `get_curation_rewards`. As I did not wanted to fetch all historic STEEM price data, I calculate all curation rewards in SBD. As the vote is also known in SBD, a curation performance can be calculated: `curation_SBD / vote_SBD * 100`.

```
from beem import Steem
from beem.account import Account
from beem.comment import Comment


if __name__ == "__main__":
    stm = Steem()
    account = Account("holger80", steem_instance=stm)
    all_received_votes = {}
    all_received_replies = {}
    blog = []
    rows = []
    sum_curation = {"vote_sbd": 0, "vote_panelty": 0, "curation_sbd": 0}
    for b in account.get_blog(limit=100):
        if b["authorperm"] != '@/':
            blog.append(b)
            comment = Comment(b)
            comment.refresh()
            curation_rewards_SBD = comment.get_curation_rewards(pending_payout_SBD=True, pending_payout_value=None)
            for vote in comment["active_votes"]:
                vote_sbd = stm.rshares_to_sbd(int(vote["rshares"]))
                curation_SBD = curation_rewards_SBD["active_votes"][vote["voter"]]
                if vote_sbd > 0:
                    penalty = ((comment.get_curation_penalty(vote_time=vote["time"])) * vote_sbd)
                    performance = (float(curation_SBD) / vote_sbd * 100)
                else:
                    performance = 0
                    penalty = 0
                vote_time_min = (((vote["time"]) - comment["created"]).total_seconds() / 60)
                sum_curation["vote_sbd"] += vote_sbd
                sum_curation["vote_panelty"] += penalty
                sum_curation["curation_sbd"] += float(curation_SBD)
                row = {"voter": vote["voter"],
                       "authorperm": comment["authorperm"],
                       "vote_time_min":vote_time_min,
                       "vote_sbd": vote_sbd,
                       "vote_penalty": penalty,
                       "curation_sbd": float(curation_SBD),
                       "performance": performance}
                rows.append(row)
    
    sorted_curation_perf = sorted(rows, key=lambda x: x['performance'], reverse=True)
    sorted_curation_cur = sorted(rows, key=lambda x: x['curation_sbd'], reverse=True)
    
    print("Overall curation performance: %.2f %% earned from given votes with a total value of %.2f SBD" % (sum_curation["curation_sbd"] / sum_curation["vote_sbd"] * 100, sum_curation["vote_sbd"]))
    print("The voter earned %.2f SBD curation rewards in the last 100 posts." % (sum_curation["curation_sbd"]))
    print("%.2f SBD were removed from the 25%% curation share by voting within the first 30 min. (%.2f %%)" % (sum_curation["vote_panelty"], sum_curation["vote_panelty"] / sum_curation["vote_sbd"] * 100))
    curation_voter = {}
    vote_sbd = []
    curation_sbd = []
    performance = []
    for v in rows:
        if v["vote_sbd"] > 0:
            vote_sbd.append(v["vote_sbd"])
            curation_sbd.append(v["curation_sbd"])
            performance.append(v["curation_sbd"]/v["vote_sbd"] * 100)
        if v["voter"] not in curation_voter:
            curation_voter[v["voter"]] = {"vote_sbd": v["vote_sbd"],  "vote_penalty": v["vote_penalty"],  "curation_sbd": v["curation_sbd"]}
        else:
            curation_voter[v["voter"]]["vote_sbd"] += v["vote_sbd"]
            curation_voter[v["voter"]]["vote_penalty"] += v["vote_penalty"]
            curation_voter[v["voter"]]["curation_sbd"] += v["curation_sbd"]

    if account["name"] in curation_voter:
        print("Self vote percentage %.2f %% (%.2f SBD)" % (curation_voter[account["name"]]["vote_sbd"] / sum_curation["vote_sbd"], curation_voter[account["name"]]["vote_sbd"]))
    
    print("%d different voter" % len(curation_voter))
    print("Maximum achieved curation performance %.2f %%" % sorted_curation_perf[0]["performance"])
    print("Maximum achieved curation reward %.2f SBD" % sorted_curation_cur[0]["curation_sbd"])
    
```
## Results

Overall curation performance: 50.47 % earned from given votes with a total value of 2492.89 SBD.
The voter earned 1258.12 SBD curation rewards in the last 100 posts.
59.81 SBD were removed from the 25% curation share by voting within the first 30 min. (2.40 %).
Self vote percentage (SBD value) 0.01 % (13.64 SBD).

5236 different voter.
Maximum achieved curation performance 8808.12 %.
Maximum achieved curation reward 50.55 SBD.

## Conclusion
The curation performance of my voter is quite high at 50%. As I stopped self-voting some time ago, I did not reduce the 25% curation share for my voters. My self-voting share across the last 100 posts is only 0.01%. It will not change much for me and my voters when HF20 is live. The 2.4% which is now removed from the curation rewards and added to my author rewards will then be moved back to the reward pool instead.

The highest curation performance is achieved by small and early votes and the highest curation amount was achieved by utopian-io.
___
I will run the script for everyone who asks in a comment and will print the result in a comment as reply.

- - -

This page is synchronized from the post: ['How much curation did my post voter earn?'](https://steemit.com/@holger80/how-much-did-my-post-voter-earn-by-curation)
