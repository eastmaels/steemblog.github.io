
---
title: 'steemrewarding.com - several improvements'
permlink: steemrewarding-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-30 21:14:42
categories:
- utopian-io
tags:
- utopian-io
- development
- rewarding
- autovote
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![rewarding_batch2.png](https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a)
</center>
### Repository
https://github.com/holgern/steemrewarding

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, using several parameters. It is possible to automatically optimize vote delay times in order to increase curation rewards.

Posting authority needs to be given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).

steemrewarding is currently used by 131 users which created 2200 rules for posts, 88 rules for comments and 27 trail vote rules. In the last 7 days, 8477 time based votes and 1904  vp based votes were broadcasted through steemrewarding. 

## New Features
### Votes are optimized withing `minimum_vote_delay` and `maximum_vote_delay` 
Votes are only optimized within both parameter, which can be set in the settings page. This prevents that vote which are placed outside the  15 minute are optimized.
```
if best_performance > performance * optimize_threshold and vote_delay_min <= maximum_vote_delay + 0.1 and vote_delay_min >= minimum_vote_delay -0.1:
    if optimize_ma_length > 1:
        vote_delay_min = (vote_delay_min * (optimize_ma_length - 1) + best_vote_delay_min) / optimize_ma_length
    else:
        vote_delay_min = best_vote_delay_min
    if vote_delay_min > maximum_vote_delay:
        vote_delay_min = maximum_vote_delay
    elif vote_delay_min < minimum_vote_delay:
        vote_delay_min = minimum_vote_delay
```

## optimization calculation performance improved
The optimization performance was improved by excluding votes from vote trails and by adding a new field `vote_delay_optimized` to the vote_log table. Votes that were not yet optimized have `vote_delay_optimized` set to True. In each voting round, 4 votes with this flag are optimized when the vote delay is greater than 15 minutes. As each vote is only optimized once, this speed up the process.


## The frontend for opening permlinks and authors urls is changeable
Two new Col classes were constructed from a `Col` class, in which the frondend can be be given as parameter. The frontend parameter can be changed in https://steemrewarding.com/settings
![image.png](https://ipfs.busy.org/ipfs/QmTgQp29TKC3okqLPHpuFCRLQbhdzWrFH6hxtR7A9Yzrss)

```
class ExternalURLCol(Col):
    def __init__(self, name, url_attr, frontend, **kwargs):
        self.url_attr = url_attr
        self.frontend = frontend
        super(ExternalURLCol, self).__init__(name, **kwargs)

    def td_contents(self, item, attr_list):
        text = self.from_attr_list(item, attr_list)
        url = self.from_attr_list(item, [self.url_attr])
        return element('a', {'href': self.frontend + url, 'target': "_blank", 'class': 'table'}, content=text)

class ExternalAuthorURLCol(Col):
    def __init__(self, name, url_attr, frontend, **kwargs):
        self.url_attr = url_attr
        self.frontend = frontend
        super(ExternalAuthorURLCol, self).__init__(name, **kwargs)

    def td_contents(self, item, attr_list):
        text = self.from_attr_list(item, attr_list)
        url = self.from_attr_list(item, [self.url_attr])
        return element('a', {'href': self.frontend + '@' + url, 'target': "_blank", 'class': 'table'}, content=text)
```

## note field added
![image.png](https://ipfs.busy.org/ipfs/QmbA26Gh9rGJzz9tS6diQzPr6ZoCXrTMoAYKTKV2kFBbTY)
A new field was added to the vote rule table, which can be used to store notes and information about a rule.

## votes per day parameter is switchable between sliding and once a day

![image.png](https://ipfs.busy.org/ipfs/QmXNhQ5WsftVTHu8Ssgbcyn6KCLGMdZ5KCajx4CD5yr9M5)

The maximum allowed vote rules per day are now switchable between a sliding 24h window and once a day (0:0:0 UTC).
```
        if sliding_window:
            date_24h_before = datetime.utcnow() - timedelta(hours=24)
        else:
            date_24h_before = datetime.today().replace(hour=0, minute=0, second=0, microsecond=0)
```

## New `optimize_vote_delay_slope` parameter
A new parameter was added, which can be set in the settings page. When this parameter is greater than 0, it changes the vote weight during vote delay optimization.

```
vote_weight = vote_weight + (vote_delay_min - old_vote_delay_min) * acc_data["optimize_vote_delay_slope"]
```
This parameter can be used to adapt the vote weight for the case that the vote delay optimum is far way from 15 minutes. 
Let's make an example: optimize_vote_delay_slope is set to 3%/min, vote delay is 15 min and vote weight is 50%. When the optimum is at 1 minute, the vote weight is changed to 
```
50% + (1 - 15) * 3 % = 8 %
```
This prevents that votes with high weight are broadcast within the first minutes that have a high vote penalty and that reduce the curation rewards for all other voters.  The parameter can be used to reduce the vote weight when the vote delay optimization shifts the vote to the front.

## vote round delay time included into vote delay
A new parameter `voting_round_sec` was added to the config file, which is the time of a vote round in seconds.  The half vote round is then subtracted from the `vote_delay_min` parameter of a vote, so that the vote is broadcasted `voting_round_sec / 2.0 / 60` minutes earlier. By this, the mean vote delay could be reduced to 1.17 seconds.

```
        if age_min < pending_vote["vote_delay_min"] - voting_round_sec / 2.0 / 60:
            continue
```

## Rules are editable from the vote log
It is possible to directly edit a rule from the vote log page.
![image.png](https://ipfs.busy.org/ipfs/QmZtboLL49VDtezEhr1hjVow2f8nnXHBnfc4HckWyhB7UN)

##  Commits
### add voting_round_sec buffer to maximum_vote_delay_min
* [commit 1ff8331](https://github.com/holgern/steemrewarding/commit/1ff83315fc792e1f49400ad4ba7e26b08ba2454c)
### Add new optimize_vote_delay_slope parameter for adapting the vote weight 
* [commit 939e0f3](https://github.com/holgern/steemrewarding/commit/939e0f361ff6672716db178ee599f86c052b833b)
* Add Edit link to vote log, necessary perameter (author, main_post and voter_to_follow) are added to the databases
### Add note and add setting for switching votes_per_day to once a day/once every 24h
* [commit de35c93](https://github.com/holgern/steemrewarding/commit/de35c93a0e95b892de6a38e15bd14a14fa711482)
### The frontend for opening permlinks and authors urls is changeable now
* [commit 9e7c797](https://github.com/holgern/steemrewarding/commit/9e7c7975a038e6022a1dd99ac7614bffc648deb7)
* the rshares_divider can be set in settings
### Optimize Vote time by considering vote round duration
* [commit 647b02e](https://github.com/holgern/steemrewarding/commit/647b02ef69c65a1ce07feca6fbf4b0aa1bb2b973)h
* Improve curaton reward calculation
* Add trail_vote info to pending_votes and vote_log

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - several improvements'](https://steemit.com/@holger80/steemrewarding-com)
