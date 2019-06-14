
---
title: 'steemrewarding.com - new api functions and pause votes when below a global VP threshold have been added'
permlink: steemrewarding-com-new-api-functions-and-pause-votes-when-below-a-global-vp-threshold-have-been-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-27 14:34:51
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

steemrewarding is currently used by 242 users which created 3029 rules for posts, 115 rules for comments and 51  trail vote rules. In the last 7 days, 12377 time based votes and 1727  vp based votes were broadcasted through steemrewarding. 

## New Features
### Pause votes when below a global VP threshold have been added


A new global vote power threshold has been added to https://steemrewarding.com/settings
![image.png](https://ipfs.busy.org/ipfs/QmVHFDuyBD8fDGhDAvKpPmWGBrebVZ6tzpHYyDS8YtXp9L)

When the vote power of the voter goes below this threshold:
* a VP based vote will be hold until the accounts VP is above this global threshold
* all time based votes will be canceled, when the accounts VP is below this global threshold

### Curation performance calculation for already paid out posts have been implemented
When a post is not pending anymore, its active vote field is cleared.
The votes are obtained now by the ActiveVotes class from beem:
```
 activeVotes = ActiveVotes(authorperm, steem_instance=stm).get_sorted_list()
```

### API functions have been implemented
All new api functions needs at least an `access_token` parameter. POST and GET requests are supported on all API functions.
This access token is used together with the me function from steemconnect to receive the account name and to validate the token:

```
    try:
        steemconnect.set_access_token(access_token)
        name = steemconnect.me()["name"]
    except:
        return jsonify([])
```

Each API call starts with `https://steemrewarding.com`, a valid api call would be: `https://steemrewarding.com/api/vote_rules?access_token=...`

The API functions could be used to build an alternative frontend for steemrewarding.

#### /api/vote_rules
Returns all vote rules as array.

#### /api/new_trail_vote_rule
Can be used to create a new trail vote rule. A `voter_to_follow` parameter must be given.

#### /api/new_vote_rule
Creates a new vote rule. `author` and `main_post` must be given.

### /api/delayed_vote
Adds a new pending vote for a post. `authorperm` must be given.

### /api/delete_vote_rule
Removes a vote rule. `author` and `main_post` must be given.

### /api/delete_trail_vote_rule
Deletes a trail vote rule. A `voter_to_follow` parameter must be given.

### /api/edit_vote_rule
Edits an existing vote rule.  `author` and `main_post` must be given. Only variable names shown at `/api/vote_rules` are accepted. The parameter of a vote rule are changed when attached to the api.

For example, the `min_vp` parameter can be changed with:

https://steemrewarding.com/api/edit_vote_rule?author=abh12345&main_post=true&min_vp=90&access_token=...

### /api/edit_trail_vote_rule'
Edits an existing trail vote rule. A `voter_to_follow` parameter must be given. Only variable names shown at `/api/trail_vote_rules` are accepted. The parameter of a vote rule are changed when attached to the api.


### /api/trail_vote_rules
Shows all trail vote rules. 
### /api/failed_vote_log
Shows all failed votes.
### /api/pending_votes
Shows all pending votes.
### /api/settings
Shows the user settings. All settings can be modified by adding the parameter with a new value.
E.g.:
https://steemrewarding.com/api/settings?pause_votes_below_vp=50&access_token=...
sets the `pause_votes_below_vp` parameter to 50.



## Commits
### All API functions support now POST and GET requests
* [commit 6d7082fb7](https://github.com/holgern/steemrewarding/commit/6d7082fb7dd664aa9b4a3a70028ef621cae18e34)
### Add pause votes when below a global VP threshold to settings
* [commit 8c5d628](https://github.com/holgern/steemrewarding/commit/8c5d628e619f5574c2801fc0a88bc739e912de7d)
### add api functions for viewing and creating new vote and trail vote rules
* [commit 897265f](https://github.com/holgern/steemrewarding/commit/897265fa3e7a1f83ca9041e87772fcd470a37343)
* the api allows to delete and edit rules
* It is possible to add a single delayed vote
### Add curation performance calculation for paid out posts 
* [commit 6a9f109](https://github.com/holgern/steemrewarding/commit/6a9f10930207c14d3b18e505078cd157fac1eee1)
* Robustify comment parsing
* Some bug fixes
* Limit the number of shown failed votes at the homepage

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - new api functions and pause votes when below a global VP threshold have been added'](https://steemit.com/@holger80/steemrewarding-com-new-api-functions-and-pause-votes-when-below-a-global-vp-threshold-have-been-added)
