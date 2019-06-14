
---
title: 'Update for Steem Basic Income Automation - get_blog and comment_history replaced and comment upvoting enabled'
permlink: update-for-steem-basic-income-automation-getblog-and-commenthistory-replaced-and-comment-upvoting-enabled
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-30 13:43:36
categories:
- utopian-io
tags:
- utopian-io
- development
- steembasicincome
- steemdev
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png)
## Repository
https://github.com/holgern/steembasicincome

## Comment upvote enabled and sbi_update_post_count.py removed
The old solution with `sbi_update_post_count.py` was checking only one account at a time. This was to slow and the `comment_upvote` flag could not be set fast enough.

The `comment_upvote` flag is set when `last_post` is older than 7 days and comments willl be upvoted until a post is written.

`last_post`, `last_comment` and `comment_upvote` are now updated in `sbi_store_member_hist.py` by:
```
for op in b.stream(start=int(start_block), stop=int(end_block), opNames=["vote", "comment"], threading=False, thread_num=8):
        if op["type"] == "comment":
            if op["author"] not in member_accounts:
                continue
            try:
                c = Comment(op, steem_instance=stm)
                c.refresh()
            except:
                continue
            main_post = c.is_main_post() 
            if main_post:
                member_data[op["author"]]["last_post"] = c["created"]
            else:
                member_data[op["author"]]["last_comment"] = c["created"]
                
            if member_data[op["author"]]["last_post"] is None:
                member_data[op["author"]]["comment_upvote"] = 1
            elif addTzInfo(member_data[op["author"]]["last_post"]) < date_7_before:
                member_data[op["author"]]["comment_upvote"] = 1
            elif member_data[op["author"]]["comment_upvote"] == 1:
                member_data[op["author"]]["comment_upvote"] = 0
            member_data[op["author"]]["updated_at"] = c["created"]
            updated_member_data.append(member_data[op["author"]])
```
where `b` is a Blockchain object from  `beem.blockchain` and `date_7_before` contains the datetime from 7 days before now.
## get_blog and comment_history replaced
As the full-node `api.steemit.com` does not support get_blog anymore, I replaced it with fetching the account history operation itself. I created a new function `get_newest` to read only the newest account history operation from the database:
```
    def get_newest(self, op_types = [], limit=100):
        ops = []
        table = self.db[self.__tablename__]
        for op in table.find(order_by='-op_acc_index'):
            if op["type"] in op_types or len(op_types) == 0:
                ops.append(op)
            if len(ops) >= limit:
                return ops
        return ops
```
This function can be used to replace `get_blog`:
```
if account["name"] == "steembasicincome":
    ops = accountTrx["sbi"].get_newest(op_types=["comment"], limit=500)
else:
    ops = accountTrx[account["name"]].get_newest(op_types=["comment"], limit=500)
blog = []
for op in ops[::-1]:
    comment = (json.loads(op["op_dict"]))    
    if comment["parent_author"] == "" and comment["author"] == account["name"] and formatTimeString(comment["timestamp"]) > addTzInfo(last_paid_post):
        try:
            c = Comment(comment, steem_instance=stm)
            c.refresh()
            blog.append(c)
        except:
            continue
```
`blog` contains now the same posts that would be returned by `get_blog`. `comment_history ` can be replaced with the same code, only 
```
 if comment["parent_author"] == "" and comment["author"] == account["name"] and formatTimeString(comment["timestamp"]) > addTzInfo(last_paid_post):
```
 is replaced by:
```
if comment["parent_author"] != "" and comment["author"] == account["name"] and formatTimeString(comment["timestamp"]) > addTzInfo(last_paid_comment):

``` 
## posts with a nsfw or sbi-skip tag will be skipped
This is hard coded at the moment:
```
skip = False
for tag in c["tags"]:
    if tag.lower() in ["nsfw", "sbi-skip"]:
        skip = True
```
The post and comment database has now a new boolean field which is set by`skip`. Only posts are upvoted with `skip == False`

## Commits
### Replace get_blog and comment_history with already stored account history ops
* [commit 733f0fb](https://github.com/holgern/steembasicincome/commit/733f0fb3009d0d9d40b74143256c2432d9d4cdfc)
* new function get_newest for receiving a limited number of account history ops from the database

### skip posts with specific tags
* [commit 7f453f4](https://github.com/holgern/steembasicincome/commit/7f453f46e290700b0eb4bf29187577216b50f9ad)
* update sql structure
* use accounts and other_accounts from database only
* skip posts with specific tags
* limit upvoted posts/comments to the last 24 hours

### last_comment and last post is took directly from the scanned blocks
* [commit 655122b](https://github.com/holgern/steembasicincome/commit/655122b526aa421f88b023ca8d8e940a99ea934b)
*  sbi_update_post_count.py removed, last_comment and last_post is took directly from the scanned blocks in sbi_store_member_hist.py
* sbi status comments improved, when comments from a member are upvoted
* post will be also upvoted when the comment_upvote flag is set

### Comment upvoting prepared
* [commit 1ab0bd1](https://github.com/holgern/steembasicincome/commit/1ab0bd1459e95b9b8cb64dee8403d8939dafacf5)
* 2x minimum_vote_threshold for comment upvoting
* sbi status adapted for comment upvoting
* bug fix for account history storage

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for Steem Basic Income Automation - get_blog and comment_history replaced and comment upvoting enabled'](https://steemit.com/@holger80/update-for-steem-basic-income-automation-getblog-and-commenthistory-replaced-and-comment-upvoting-enabled)
