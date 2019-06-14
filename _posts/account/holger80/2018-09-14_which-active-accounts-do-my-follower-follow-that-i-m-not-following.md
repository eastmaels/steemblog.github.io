
---
title: 'Which active accounts do my follower follow that I''m not following?'
permlink: which-active-accounts-do-my-follower-follow-that-i-m-not-following
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-14 09:35:21
categories:
- follower
tags:
- follower
- steemdev
- python
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


I'm always looking for interesting accounts to follow. I want to know which accounts do my followed accounts following? As I'm only interested in active accounts (posted in the last 30 days), I will limit the search to active accounts.   

```
from beem.account import Account
from beem.nodelist import NodeList
from beem import Steem
from beem.utils import addTzInfo
from datetime import datetime


if __name__ == "__main__":
    nodes = NodeList()
    nodes.update_nodes()
    node_list = nodes.get_nodes(normal=False, appbase=True)
    stm = Steem(node=node_list, num_retries=5, call_num_retries=3, timeout=15)
    
    following_1 = Account("holger80", steem_instance=stm).get_following()
    following_2 = []
    following_1_cnt = {}
    following_2_cnt = {}

    cnt = 0
    for a in following_1:
        cnt += 1
        try:
            acc = Account(a, steem_instance=stm)
        except:
            continue
        count = acc.get_follow_count()
        if count["following_count"] > 5000:
            print("skipping %s as following_count to huge (%d)" % (acc["name"], count["following_count"]))
            continue
        new_list = acc.get_following(limit=1000)
        for n in new_list:
            if n not in following_1 + following_2:
                following_2.append(n)

            if n in following_1:
                if n in following_1_cnt:
                    following_1_cnt[n] += 1
                else:
                    following_1_cnt[n] = 1
            if n in following_2:
                if n in following_2_cnt:
                    following_2_cnt[n] += 1
                else:
                    following_2_cnt[n] = 1                
        if cnt % 100 == 0:
            print("2. degree following added %s (len %d), %d/%d" % (a, len(following_2), cnt, len(following_1)))

    following_1_cnt_list = []
    for n in following_1_cnt:
        try:
            f = Account(n, steem_instance=stm)
            last_post = (addTzInfo(datetime.utcnow()) - (f["last_root_post"])).total_seconds() / 60 / 60 / 24
            if last_post < 30:
                following_1_cnt_list.append({"name": n, "cnt": following_1_cnt[n], "last_post": last_post})
        except:
            continue
    following_2_cnt_list = []
    for n in following_2_cnt:
        try:
            f = Account(n, steem_instance=stm)
            last_post = (addTzInfo(datetime.utcnow()) - (f["last_root_post"])).total_seconds() / 60 / 60 / 24
            if last_post < 30:
                following_2_cnt_list.append({"name": n, "cnt": following_2_cnt[n], "last_post": last_post})
        except:
            continue
    sorted_list_1 =  sorted(following_1_cnt_list, key=lambda x: x['cnt'], reverse=True)
    sorted_list_2 =  sorted(following_2_cnt_list, key=lambda x: x['cnt'], reverse=True)
    
    print("| type | acounts | active accounts |")
    print("| --- | --- | --- |")
    print("| my followings | %d | %d |" % (len(following_1), len(following_1_cnt_list)))
    print("| followings of my followings | %d | %d |"% (len(following_2), len(following_2_cnt_list)))
    
    print("| followed count | account | last post [days] |")
    print("| --- | --- | --- |")
    for a in sorted_list_2[:25]:
        print("| %d | %s | %.2f |" % (a["cnt"], a["name"], a["last_post"]))
```

## Results

| type | acounts | active accounts |
| --- | --- | --- |
| my followings | 215 | 157 |
| followings of my followings | 30951 | 8873 |

I follow 215 accounts from which 157 posts during the last 30 days. The unique count of all accounts that my followings follow is 30951. 8873 (28.7 %) accounts are active. 

Let's see which active accounts that I'm currently not following are followed most often by my followings:

| followed count | account | last post [days] |
| --- | --- | --- |
| 75 | good-karma | 3.71 |
| 71 | roelandp | 6.32 |
| 70 | aggroed | 0.75 |
| 60 | blocktrades | 19.85 |
| 59 | kevinwong | 17.31 |
| 58 | reggaemuffin | 9.56 |
| 57 | kingscrown | 0.15 |
| 50 | drakos | 12.61 |
| 49 | officialfuzzy | 3.29 |
| 47 | klye | 7.43 |
| 45 | flauwy | 0.34 |
| 45 | holger80 | 2.44 |
| 44 | inertia | 0.52 |
| 44 | papa-pepper | 0.08 |
| 43 | gavvet | 0.56 |
| 43 | minnowbooster | 2.97 |
| 42 | fabien | 21.68 |
| 42 | jerrybanfield | 1.78 |
| 41 | abit | 21.25 |
| 41 | dollarvigilante | 1.48 |
| 41 | heiditravels | 3.66 |
| 41 | neoxian | 2.34 |
| 41 | rok-sivante | 1.24 |
| 39 | hilarski | 0.28 |
| 39 | nanzo-scoop | 0.94 |

So I have 25 new accounts to check out. Seems that I missed a lot of interesting accounts.

___
When you also want to see these both tables for your account, leave a comment and I will post the results for your account as reply.

- - -

This page is synchronized from the post: ['Which active accounts do my follower follow that I''m not following?'](https://steemit.com/@holger80/which-active-accounts-do-my-follower-follow-that-i-m-not-following)
