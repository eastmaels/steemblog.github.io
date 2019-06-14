
---
title: 'steemrewarding.com - trail voting added'
permlink: steemrewarding-com-trail-voting-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-05 12:47:27
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


<center>
![rewarding_batch2.png](https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a)
</center>
### Repository
https://github.com/holgern/steemrewarding

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).

## Bug fixes
The following bugs were fixed:
* Checks and handling for the app field in post metadata improved
* bug with max_pending_payout fixed (integer instead of real in the database)
* max votes per week and day fixed (all votes were counted instead of the votes for the voter)

## New features
### Trail votes added
It is now possible to follow other voters. A new trail vote rule can be created at https://steemrewarding.com/new_trail_rule:
![image.png](https://ipfs.busy.org/ipfs/QmYPERHp15GAoUfUH8bdV6A1nwkkg9ZHKitdaGgtBL8igt)

Stored trail vote rules are listed at: https://steemrewarding.com/show_trail_rules.

A trail vote rule must contain a voter to follow. Only one rule can be stored per voter. Creating a new rule for a voter that already exists, will overwrite the old rule for this voter.

Votes that fit to rule will be stored in the votes database (this is done in the `stream_blocks.py` script). Then, pending votes will be created based on stored trail rules, in the `apply_trail_vote_rules.py`. From here on, it is not distinguished between a normal pending vote or a trail pending vote. Both are stored in the pending vote database.

The meaning of the parameter is the following:
* `vote to follow` - must not be empty and is the steem account name to follow
* `enabled` - when checked (True) the vote is active
* `only_main_post` - when checked (True), comments will be skipped
* `vote_weight_treshold` [%] - skips votes with lower weight (e.g. when set to 10%, a vote with a weight of 1% is skipped)
* `vote_weight_scaler` [%] - set the vote weight percentage in comparison to the vote to follow. when set to 100%, the casted vote will have the same vote weight. When set to 50%, the vote weigth is multiplied by 0.5.
* `vote_weight_offset` [%] - is added after applying vote_weight_scaler. When vote_weight_scaler is set to 0%, the  vote_weight_offset can be used to set a constant vote weight.
* `include_authors` - when set, only the list of given authors will be voted. The authors must be separated by a comma or a space (e.g. `a,b`)
* `exclude_authors` - when set, these authors will be skipped. The authors must be separated by a comma or a space (e.g. `a,b`)
* `include_tags` - when set, only posts which have at least one tag from the list of given tags will be voted. The tags must be separated by a comma or a space (e.g. `a,b`)
* `exclude_tags`- when set, only posts which do not have at one tag from the list of given tags will be voted. The tags must be separated by a comma or a space (e.g. `a,b`)
* `minimum_vote_delay_min` [minutes] - vote is delayed when earlier
* `maximum_vote_delay_min`  [minutes] - vote is skipped when older
* `max_votes_per_day` -  limits the maximum number of votes given through steemrewarding 
* `max_votes_per_week` -  limits the maximum number of votes given through steemrewarding 
* `min_vp` [%] - vote is skipped when vote power is below
* `vp_scaler `- When greater than 0, it can be used to adapt the vote weight to the vote power. When set to 1, the vote weight is equal to the vote power ( vote weight = 100 - ((100-vp) *vp_scaler)).
* `exclude_declined_payout` - When checked (True), a post/comment with declined payout is skipped
* `max_net_votes` - when greater than -1, a post/comment is skipped when more than max_net_votes voters already have voted.
* `max_pending_payout` - When greater than -1, a post/comment is skipped when the pending payout is greater than max_pending_payout

## Refactoring
A login decorator function was added to the flask app:
```
def login(func):
    @wraps(func)
    def check_access_token(*args, **kwargs):
        access_token = request.args.get("access_token", None)
        if access_token is None and 'access_token' not in session:
            login_url = steemconnect.get_login_url(
                "https://steemrewarding.com/welcome",
            )        
            return render_template('please_login.html', login_url=login_url)
        elif access_token is None:
            access_token = session['access_token']
        else:
            session['access_token'] = access_token
        try:
          
            steemconnect.set_access_token(access_token)
            name = steemconnect.me()["name"]
        except:
            login_url = steemconnect.get_login_url(
                "https://steemrewarding.com/welcome",
            )        
            return render_template('please_login.html', login_url=login_url)        
        return func(*args, **kwargs)
    return check_access_token
```
By adding this decorator, all functions could be reduced. `@login` decorater assure that a valid token is stored in the session variable.
```
@app.route('/')
@login
def main():
    name = steemconnect.me()["name"]
    return render_template('welcome.html', user=name, rewardingversion=rewardingversion)
```


## Commits
### upload changed sql database
* [commit 8d1db0e](https://github.com/holgern/steemrewarding/commit/8d1db0ee11b6af7ec2254354be2ede790c231535)
### refacktor string splitting and show version on the website
[commit 1a6b5ae](https://github.com/holgern/steemrewarding/commit/1a6b5ae97db4a4111431036536e53a1cadc364a5)
### Add decorator to flask app in order to reduce duplicated code lines
* [commit 24c8a5b](https://github.com/holgern/steemrewarding/commit/24c8a5bc1beb182beddf44591901610684f41a02)
### Add trail vote interface to the website
* [commit 6fd3d46](https://github.com/holgern/steemrewarding/commit/6fd3d46203ef2f4bde7c4b771c7698ff342f5d14)
### trail voting handling added
* [commit 3c3f624](https://github.com/holgern/steemrewarding/commit/3c3f624aef07379b542736cf53d26196865b85b6)
* new trail_vote_rules database added
* votes that belong to a trail vote rule are processed in apply_trail_vote_rules.py
### Several improvments
* [commit 5d67397](https://github.com/holgern/steemrewarding/commit/5d67397cc5403b7b683a5a37b81fbc4ba4900639)
* New string_included and string_excluded utility function with unit tests for checking if apps or author are included or excluded
* maximum_vote_delay_min added to pending vote and rule
* try catch added to curation reward calculation
* Checks and handling for the app field in post metadata improved
* bug with max_pending_payout fixed (integer instead of real in the database)
* max votes per week and day fixed (all votes were counted instead of the votes for the voter)
* app field in comments changed to rewarding

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - trail voting added'](https://steemit.com/@holger80/steemrewarding-com-trail-voting-added)
