
---
title: 'steemrewarding.com - tables improved (links and sortable) and more options for trail vote rules'
permlink: steemrewarding-com-tables-improved-links-and-sortable-and-more-options-for-trail-vote-rules
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-03 14:37:21
categories:
- utopian-io
tags:
- utopian-io
- development
- rewarding
- autovote
- bsuy
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

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).

steemrewarding is currently used by 109 users which created 945 rules for posts, 70 rules for comments and 19 trail vote rules. In the last 7 days were 4381 time based votes and 865 vp based votes broadcasted through steemrewarding. 

## Improved table layout which is now partly sortable
![image.png](https://ipfs.busy.org/ipfs/QmWg2GzQJ7GRi8YZUBVKgmJ2EUqGyHMtDTcTvwahs6Ntpi)
The header are now links when the column is sortable. When clicking on it, it calls the same site with a `sort` and a `direction`parameter:
```
https://steemrewarding.com/show_vote_log?sort=author&direction=asc
```
These parameter are parsed:
```
    sort = request.args.get('sort', 'timestamp')
    reverse = (request.args.get('direction', 'desc') == 'desc')
```
and the array is sorted:
```
    try:
        sorted_log = sorted(logs, key=lambda x: x[sort] or 0, reverse=reverse)
    except:
        sorted_log = logs
```
The try/except prevent a crash when a wrong sort parameter was given.

The header links are created by implementing a sort_url function in the Table class:
```
class VotesLog(Table):
...
...
    allow_sort = True
    def sort_url(self, col_key, reverse=False):
        if col_key in ["authorperm", "author", "vote_weight", "vote_delay_min", "voted_after_min"]:
            direction = 'asc'
        else:
            direction = 'desc'
        return url_for('show_vote_log', sort=col_key, direction=direction)
```

## Authorperm and authors are now links
A new class was defined:
```
class ExternalURLCol(Col):
    def __init__(self, name, url_attr, **kwargs):
        self.url_attr = url_attr
        super(ExternalURLCol, self).__init__(name, **kwargs)

    def td_contents(self, item, attr_list):
        text = self.from_attr_list(item, attr_list)
        url = self.from_attr_list(item, [self.url_attr])
        return element('a', {'href': 'https://steemit.com/' + url, 'target': "_blank", 'class': 'table'}, content=text)

class ExternalAuthorURLCol(Col):
    def __init__(self, name, url_attr, **kwargs):
        self.url_attr = url_attr
        super(ExternalAuthorURLCol, self).__init__(name, **kwargs)

    def td_contents(self, item, attr_list):
        text = self.from_attr_list(item, attr_list)
        url = self.from_attr_list(item, [self.url_attr])
        return element('a', {'href': 'https://steemit.com/@' + url, 'target': "_blank", 'class': 'table'}, content=text)
```
That can be used to create a field in the table by:

```
author = ExternalAuthorURLCol('author', url_attr='author', attr='author', allow_sort = True)
```

## vote_when_vp_reached added to trail vote rules

![image.png](https://ipfs.busy.org/ipfs/QmRUm6XQSYwhvSj1bE17p9vZ58tfAmQdnRjNHkyDwhQXvA)
It is now possible to vote posts that were upvoted by a certain voter, when the vote power reaches a defined percentage. A trail vote rule with enabled `vote_when_vp_reached ` will create a pending vote, when the voter to follow upvotes something. This new created pending vote has a `min_vp` and an enabled `vote_when_vp_reached`, which will keep the vote in a pending state until the vote power is suffient high or `maximum_vote_delay_min` is reached.

## exclude all authors that have an enabled vote rule
It is possible to  exclude all authors that have an enabled vote rule when following a vote trail.
![image.png](https://ipfs.busy.org/ipfs/QmayasD9rdbRVeTev84WXnrjUSx2dZ9UpN6TRdyzi53PQo)
When the followed voter upvotes a main post, it is checked if a vote rule for a main post from the author exists. When the followed voter upvotes a comment, it is checked if a vote rule for a comment from the author exists. When a rule exists, the post/comment is skipped.

## `maximum_vote_delay_min` was added as parameter for a vote rule
It is possible to define the maximum post/comment age. When defined, posts/comments are only upvoted when their age is younger than the defined one. The value is the maximum age in minutes.

## Commits
### add option exclude_authors_with_vote_rule that exclude authors that have an enabled rule for trail votes
* [commit 5352b0e](https://github.com/holgern/steemrewarding/commit/5352b0e567fde9d0ee8db48d3933dc2238c51410)
### sql database improved, vote_sbd fixed and new parameter added
* [commit ba4b6a0](https://github.com/holgern/steemrewarding/commit/ba4b6a01533a9493f6f1d3b1b1d4f0d426cc1b91)
### Use BoolCol for boolean and add sortable tables to vote rules and trail vote rules
* [commit c660046](https://github.com/holgern/steemrewarding/commit/c6600466f138d3cee7e74ce6842308b65685b6b4)
### add sortable tables and add hyperlinks to authorperm and author
* [commit 69d74d0](https://github.com/holgern/steemrewarding/commit/69d74d0a51930012bac0d937d9650179889a6e0d)
### add vote_when_vp_reached and vp_reached_order to trail vote rules
* [commit 55c833b](https://github.com/holgern/steemrewarding/commit/55c833bb5abd23aeeed072650d2a7ce17552cb8c)
### add maximum_vote_delay_min and add some more checks 
* [commit d7201f1](https://github.com/holgern/steemrewarding/commit/d7201f128b1a58c594da7d81cc37206b624894d3)
* max_votes_per_day and max_votes_per_week is fixed
* get_account added in trail_vote_rule_storage.py
* get_voter added in vote_rule_storage.py

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - tables improved (links and sortable) and more options for trail vote rules'](https://steemit.com/@holger80/steemrewarding-com-tables-improved-links-and-sortable-and-more-options-for-trail-vote-rules)
