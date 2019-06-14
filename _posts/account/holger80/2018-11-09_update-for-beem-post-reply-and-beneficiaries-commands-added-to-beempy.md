
---
title: 'update for beem - post, reply and beneficiaries commands added to beempy'
permlink: update-for-beem-post-reply-and-beneficiaries-commands-added-to-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-09 21:17:27
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- steemtank
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/beem<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 504 unit tests and a coverage of 72 %. The current version is 0.20.10.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

### New Features
#### `beempy beneficiaries`
```
beempy beneficiaries authorperm account1:10%,account2:20%,...
```
Adds beneficiaries to post/comment authorperm. This is only sucecssfully when the post/comment was not upvoted yet. More information about this can be found in this test [post](https://steemit.com/test/@holger80/test-for-setting-beneficaries-with-beempy).

#### `beempy post`
```
usage: beempy post [OPTIONS] BODY
  broadcast a post/comment

Options:
  -a, --account TEXT        Account are you posting from
  -t, --title TEXT          Title of the post
  -p, --permlink TEXT       Manually set the permlink (optional)
  --tags TEXT               A komma separated list of tags to go with the
                            post.
  --reply_identifier TEXT   Identifier of the parent post/comment, when set a
                            comment is broadcasted
  --community TEXT          Name of the community (optional)
  -b, --beneficiaries TEXT  Post beneficiaries (komma separated, e.g.
                            a:10%,b:20%)
  --no-parse-body           Disable parsing of links, tags and images
  --help                    Show this message and exit.
```
`BODY` is the link to a text file containing the body text of the post/comment. The `post` command can also parse a yaml header.

[typora](https://typora.io/) can be used to create a markdown with yaml header.
![image.png](https://ipfs.busy.org/ipfs/QmdHakPt3qXAaMYK3i1MzvMJ99Av1vaQjAeeqKqWyM3pej)

Broadcasting was done by:
```
beempy post beempy-post-test.md
```

 The broadcasted test post can be found [here](https://steemit.com/test/@beembot/beempy-test-post),
The yaml header of the example:
```
---
title: beempy test post
tags: test, beempy
author: beembot
beneficiaries: holger80:10%
---
```
The following keywords can be used:
* title
* author
* permlink
* reply_identifier
* community
* parse_body
* beneficiaries

Parameter set as option overwrite parameter defined in the YAML part. When e.g. `--title a` is set and in the file `title: b` is written, the resulting title is then `a`.

Editing of posts is possible. 
Just edit the markdown file and broadcast the post again. The `beneficiaries` must be removed when the post should be modified. 

#### `beempy reply`
```
Usage: beempy reply [OPTIONS] AUTHORPERM BODY

  replies to a comment

Options:
  -a, --account TEXT  Account are you posting from
  -t, --title TEXT    Title of the post
  --help              Show this message and exit.
```
The `reply` can be used to broadcast short comments.

#### New `GetWitnesses` class
```
from beem.witness import GetWitnesses
w_list = GetWitnesses(["gtg", "timcliff"])
print(w_list [0])
print(w_list [0])
```
results in 
```
<Witness gtg>
<Witness timcliff>
```
The class can be used to fastly fetch a list of witnesses at once.

#### RC costs adapted to the changes of 0.20.6
With 0.20.6 some parameter for RC costs calculation were changed. The changes are adapted in the RC class. Most important change is that `resource_execution_time` is included in the RC calculation.

#### update_account_keys function added
```
from beem import Steem
from beem.account import Account
stm = Steem(keys=["5xx"]) # owner key
account = Account("name", steem_instance=stm)
account.update_account_keys("new_password")
```
`new_password` is the new master password and the `posting_key`, `active_key`, `owner_key` and `memo_key` are calculated from the master password.
This is done by:
```
        for role in ['owner', 'active', 'posting', 'memo']:
            pk = PasswordKey(account['name'], new_password, role=role)
            key_auths[role] = format(pk.get_public_key(), self.steem.prefix) 
```


### Commit history
#### Fix typo and adapt changelog
* [commit a5adc41be](https://github.com/holgern/beem/commit/a5adc41be2a16bff5c4cc903cb25ca9fe9a7debf)
#### Add beempy post and beempy reply
* [commit 5b4d413](https://github.com/holgern/beem/commit/5b4d41309729d95a618807e8ced3d33ea69d924f)
#### Add beneficiaries command to beempy
* [commit 3145ffd](https://github.com/holgern/beem/commit/3145ffd764512c0c8f7cf1fac480b7e068281963)
* New anyx.io node added to nodelist
* GetWitnesses fixed
#### Fix issue #115 - Signing operations from Python2 throw beem.exceptios.InvalidWifError
* [commit 5e1e77be](https://github.com/holgern/beem/commit/5e1e77beec05f2a3c8074ae1af6d49f38aa6547b)
#### Fix for issue #109: Add missing get_witnesses
* [commit 71827a6](https://github.com/holgern/beem/commit/71827a624c34fcb841cdcb62b2509dd1a39a83d9)
* GetWitnesses added to witness
#### Several improvements and prepare next release 
* [commit 5b269ab9](https://github.com/holgern/beem/commit/5b269ab982b271e9f902886ab95b81558e34857a)
Account
* update_account_keys added for changing account keys
* comment fixed for chains without SBD
RC
* RC changes from 0.20.6 included
Witness
* Fixed for chains without SBD symbol
Operations
* Claim_reward_balance fixed for chains without SBD symbol

Chains
* VIT fixed

### Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - post, reply and beneficiaries commands added to beempy'](https://steemit.com/@holger80/update-for-beem-post-reply-and-beneficiaries-commands-added-to-beempy)
