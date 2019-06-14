
---
title: 'Update for Steem Basic Income Automation - Blacklist database, automatic enrollment transfers and improve status reply'
permlink: update-for-steem-basic-income-automation-blacklist-database-automatic-enrollment-transfers-and-improve-status-reply
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-18 13:41:51
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

## Blacklist database added
A new blacklist database with a `tags`, `apps` and `body` field was added.
![image.png](https://ipfs.busy.org/ipfs/QmWuD9S6E5HhoTxo4Tr5DkMX4tdi9cirEBikw7s2b1Yxa6)
The blacklisted tags,apps and keywords can be changed anytime directly in the database.

The fields are read out in `sbi_stream_post_comment.py` and three lists were build:
```
    blacklist = blacklistStorage.get()
    
    blacklist_tags = []
    for t in blacklist["tags"].split(","):
        blacklist_tags.append(t.strip())
    
    blacklist_apps = []
    for t in blacklist["apps"].split(","):
        blacklist_apps.append(t.strip())

    blacklist_body = []
    for t in blacklist["body"].split(","):
        blacklist_body.append(t.strip())
```

The tags from the posts are then checked of one is stored in `blacklist_tags`.
If a blacklisted tag was found, the post will be skipped.
```
for tag in c["tags"]:
    if tag is not None and tag.lower() in blacklist_tags:
        skip = True
```

In the next step the app, which was used to create the post, is extracted. As there are some different ways to store the app, the script is doing some checks first:

```
json_metadata = c.json_metadata
if isinstance(json_metadata, str):
    try:
        json_metadata = json.loads(json_metadata)
    except:
        json_metadata = {}
if "app" in json_metadata:
    app = json_metadata["app"]
    if isinstance(app, dict) and "name" in app:
        app = app["name"]
    if app is not None and isinstance(app, str) and app.find("/") > -1:
        app = app.split("/")[0]
    if app is not None and isinstance(app, str) and app.lower() in blacklist_apps:
        skip = True
```
Finally, the body is scanned for blacklisted words. This is useful for letting a member disabling upvotes for a specific comment, as it is not easily possible to attach tags to a comment (which could be used for disabling upvotes on the comment instead).
```
for s in blacklist_body:
    if c.body.find(s) > -1:
        skip = True
```

## Sending automatic enrollment transfer memos to new members

Enrollment to new member is now done automatically. A new database `transfer_memos` has been added, in which the memo text for the diffect memo transfer types `welcome` (is sent to new members), `sponsoring` (is sent to new sponsored members), `sp_delegation` (can be sent when a member is delegating SP), `update_rshares` (can be sent when a member increases their shares), `sponsoring_update_rshares` (can be sent when a member is sponsored and receive more shares).

![image.png](https://ipfs.busy.org/ipfs/QmPCFmfXjk38uSCQEK7s6GH9D8iohH3igjs8jkeEYmvftB)

For each type a new function was created:
```
def memo_sponsoring(transferMemos, memo_transfer_acc, s, sponsor):
    if "sponsoring" not in transferMemos:
        return
    if transferMemos["sponsoring"]["enabled"] == 0:
        return
    if memo_transfer_acc is None:
        return    
    try:
        if "%s" in transferMemos["sponsoring"]["memo"]:
            memo_text = transferMemos["sponsoring"]["memo"] % sponsor
        else:
            memo_text = transferMemos["sponsoring"]["memo"]
        memo_transfer_acc.transfer(s, 0.001, "STEEM", memo=memo_text)
    except:
        print("Could not sent 0.001 STEEM to %s" % s)
```
The try/except check prevents the script from crashing when for example the active key is wrong, not sufficient STEEM are left on the account or the RC is to low.

It is checked every 144 minutes in `sbi_update_member_db.py` if new members should be enrolled or if existing member are increasing their sbi units. It is now possible to send everytime a 0.001 STEEM memo with a configurable memo text (the sponsoring account name and the sbi units are added and a %s / %d placeholder is used. A memo is only sent when it is enabled by setting `enabled` to 1 in the database.

## Improved sbi status replies.
The reply of the `!sbi status` command has been enhanced. 
![image.png](https://ipfs.busy.org/ipfs/QmYCPXJGS9n65wTw9DbTN5ZrUqWBpHSzv9zZTwG3cqQiqz)

The percentage of `subscribed_rshares`, `delegation_rshares`, `curation_rshares` and `other_rshares` which build the total SBI upvote value is now shown in the reply to a comment containing `!sbi status`.

## Commits
### new sql table structure
* [commit b17de96](https://github.com/holgern/steembasicincome/commit/b17de9658b1b8ea4f1d6cc455299ba6c1d6f4d3e)
### Improve reply layout
* [commit f7b771e](https://github.com/holgern/steembasicincome/commit/f7b771e216da778f306134326eac8b2528d97017)
### Add transfer memo database and sending transfers to new members
* [commit 2b7bbcb](https://github.com/holgern/steembasicincome/commit/2b7bbcb131302a85f613e74d652bc8e6b5cba492)
* Add flag for transfer memo account
* Implement transfer memo functions for the different memo types (welcome, sponsoring, update_shares and sponsoring_update_shares)
### Add blacklist database
* [commit 2cedbb2](https://github.com/holgern/steembasicincome/commit/2cedbb2a58f38993217dfdd973b96e6a24216204)
* votes on posts with a blacklisted content word, a blacklisted tag or app are skipped
* sbi status reply improved, it is now shown from where the sbi upvote value is build

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for Steem Basic Income Automation - Blacklist database, automatic enrollment transfers and improve status reply'](https://steemit.com/@holger80/update-for-steem-basic-income-automation-blacklist-database-automatic-enrollment-transfers-and-improve-status-reply)
