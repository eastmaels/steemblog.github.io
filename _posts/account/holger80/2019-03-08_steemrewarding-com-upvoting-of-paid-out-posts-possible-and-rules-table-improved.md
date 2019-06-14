
---
title: 'steemrewarding.com - upvoting of paid-out posts possible and rules table improved'
permlink: steemrewarding-com-upvoting-of-paid-out-posts-possible-and-rules-table-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-08 23:18:45
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

## New features
### Upvoting already paid-out posts
The delayed vote tab can now also be used to upvote already paid-out posts. When a paid-out post is given, a comment is replied with 100% benficiaries set to the author and upvoted.

There are three ways to do this:
* Go to https://steemrewarding.com/delayed_vote and enter the authorperm
* replace steemit by steemrewarding: e.g.: https://steemrewarding.com/steempeak/@steempeak/keychain-integration-now-live-on-steempeak-com
* Write a comment as:

![image.png](https://ipfs.busy.org/ipfs/QmW6WTJT4TsY4Jxjt9L1LkEmYsJg6QsvZhVuAWLZNkX1rJ)

The created comment has 100% beneficiaries set to the author. In 7 days, the author of the already paid out post will receive the author rewards of the upvoted comment.


### Assuring that a command is only parsed once
 New checks have been added for assuring that each command is only parsed once. The timestamp of the last parsed commend `last_command` is stored in a json file at the end of the script. When the json file would be deleted, all rewarding commands would be parsed again.

In order to prevent this, a command inside a comment must be not older than 3 hours:

```
        # Skip not processed commands that are older than 3 hours
        if (datetime.utcnow() - command["created"]).total_seconds() / 60 / 60 > 3:
            continue
```
A second check is implemented that checks of the comment that contains the comment was already upvoted by @rewarding:
```
        already_voted = False
        for v in c_comment["active_votes"]:
            if v["voter"] == rewarding_account:
                already_voted = True
        if already_voted:
            continue
```
As a comment containing a rewarding command is alsways upvoted, checking for upvotes from rewarding will also prevent that accidentially a command is parsed twice.

### Improved rules/trail rules table and copying of rules possible
It is now possible to add the author and change if comments or posts ( `main_post ` flag) should be upvoted.

After pressing the button in the rule editing from:
```
            rule_dict = rule_dict_from_form(name, form)
            if rule_dict["author"] != author or rule_dict["main_post"] != main_post:
                if copy_rule is None or not copy_rule:
                    voteRulesTrx.delete(name, author, main_post)
                voteRulesTrx.add(rule_dict)
            else:
                voteRulesTrx.update(rule_dict)
```
It is checked of the author and/or the main_post flag was changed. If this is the case, a new rule is created. When copy_rule is not set, the old rule is deleted. 

The vote rule table has been improved. Links for edit/copy/delete a rule are now on the left side:
![image.png](https://ipfs.busy.org/ipfs/QmWsrzKUoE7ros5TaDKUeGvUKsjhGuDdNkx3LQxZFbGeNo)
When I press the edit link:
![image.png](https://ipfs.busy.org/ipfs/QmNjQ3o6UayhrJpxisJByRRJdB71rzqYNJsyZuSUJtG5fe)
All changes at the author field will create a new rule and the old rule will be deleted.

When I press the copy link:
![image.png](https://ipfs.busy.org/ipfs/QmSDtcPapsBxZDZjfaUiVbrmcxJUyXfa9PEKFR2kT5Bm3H)
All changes at the author field will create a new rule with the same parameters. The old rule stays unchanged.

## Maximum vote delay parameter added
A new parameter was added for vote rules: 
![image.png](https://ipfs.busy.org/ipfs/QmV8nAes35ve8bH18wAg3U5wA8Wh7jyqtCqtfsgf1vZd6Y)
It is now possible to limit the validity of a rule which is vote power based. A post/comment is then upvoted when `min_vp` is smaller than the vote power and when the delay is below of `maximum_vote_delay_min`.

## min_vp, vote_sbd  and vote_when_vp_reached  added to delayed vote
It is now possible to queue vote-power based votes. The following setting will queue a vote which is later upvted when a vote power of 90% is reached.
![image.png](https://ipfs.busy.org/ipfs/QmaZsbbBY69PnVvv7vGvW3K952z3XfPmuf2rJyweLATc8D)


## Commits
### Add creating of of comments with beneficiaries to flask app
* [commit 5cd3292](https://github.com/holgern/steemrewarding/commit/5cd32924adcb5a6d276c8e65c572051e7f98fea4)
### fix permlink of comment for upvoting
* [commit e8363fd](https://github.com/holgern/steemrewarding/commit/e8363fdc481dd448099878ec6bf42024959c4576)
### Copy item added to vote rules and trail vote rules 
* [commit ead68fc](https://github.com/holgern/steemrewarding/commit/ead68fc1fc88ccb86e37900eea345dd5389e1cd7)
* table layout improved
* description added to edit and delete rule/trail rule
* copying a rule/trail rule is possible
* form field for deleting a rule / trail rule is shorted
### Add more form fields for delayed vote and add max vote delay
* [commit 047fb78](https://github.com/holgern/steemrewarding/commit/047fb7816fedb8567ae8a93fd947458a1dceb940)
* show account information at start page
* More form fields for delayed vote
* maximum vote delay added as form field
### Add checks for command parsing that will prevent that a comment is parsed twice
* [commit 6c0f481](https://github.com/holgern/steemrewarding/commit/6c0f4817fb34735f87bf6fae738681aab9e2efb3)
### add rewarding of paid-out post (older than 7days post) 
* [commit fdc6921](https://github.com/holgern/steemrewarding/commit/fdc6921af2b01cdff92d3d88039f10f3bab21e64)
* when a already paid-out post should be upvoted, a comment
 with beneficiaries is upvoted instead.
* add short notice to dalayed vote tab
### add more help text to forms and improve scripts
* [commit 8305093](https://github.com/holgern/steemrewarding/commit/8305093383408fbf023d88cea21e0f17ab566ab7)
* prevent negative vote weight
* add pool_recycle to database connector
* add hours, minutes and days to command parsing
* sorting rules by author
* improve app check in post
* add unit tests for command parsing
* add try/except for loading post/comment from authorperm

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - upvoting of paid-out posts possible and rules table improved'](https://steemit.com/@holger80/steemrewarding-com-upvoting-of-paid-out-posts-possible-and-rules-table-improved)
