
---
title: 'steem-scot - distributing token by comment command'
permlink: steem-scot-distributing-token-by-comment-command
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-29 23:18:27
categories:
- utopian-io
tags:
- utopian-io
- development
- scot
- steem-engine
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXE1oWFb5uj1sHHcbZSsuRAUFNjCZBpBUE3oRaGwPYTDz'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Repository
https://github.com/holgern/steem-scot

![image.png](https://ipfs.busy.org/ipfs/QmXE1oWFb5uj1sHHcbZSsuRAUFNjCZBpBUE3oRaGwPYTDz)

The python package steem-scot is an implementation for distribute Smart Contract Organizational Token (SCOT). It can be installed by

```
$ (sudo) pip install steem-scot
```
and depends on [beem](https://github.com/holgern/beem) and [steemengine](https://github.com/holgern/steemengine).

## Distribute token by specific comment commands
I added a second way for distributing token.  Every steem account which has sufficient Token, is allowed to issue token to other by writing a command into a reply.
![image.png](https://ipfs.busy.org/ipfs/QmSxPFCPwawjQYzwMDS64fCuGiWehcQ5SWUqy9eKPtqc1n)

![image.png](https://ipfs.busy.org/ipfs/Qmf4SNRy1rektqSrMoQNc1kNJvSMF2rdt1VousSYNmxzBU)

In this case, the scot-account was beembot and the scot-token is DRAGON. As I have more than 10 DRAGON, I'm  allowed to write the !DRAGON command as reply. Whenever I'm doing this, the scot-account will issue a certain amount of the token to the parent author of my comment.

An example is the DRAMA token, which works in this way. So everyone can have their own DRAMA by using the steem-scot package.


### Usage
The script should be running all day, so that new comments can be parsed and comments with the specified command can be found.

```
$ scot_by_comment /path/to/config.json
```

### config.json
In order to be using the script, a config.json must be created. All fields must be included.

|        Option       | Value                                                |
|:-------------------:|------------------------------------------------------|
| scot_account | steem account name, which should distribute the token       |
| scot_token   | token symbol, which should be distributed                   |
| token_memo   | memo which is attached to each token transfer               |
| wallet_password | Contains the beempy wallet password |
| no_broadcast | When true, no transfer is made |
| min_staked_token | Minimum amount of token a comment writer must have |
| send_token_amount | Amount of token that will be send|
| sucess_reply_body | Reply body, when token are send|
| fail_reply_body | Reply body, when no token are sent (not min_staked_token available) |
| comment_command | Command which must be included in a comment, to activate the bot |

The `sucess_reply_body` can have a placeholder `%s`, which will be filled with the comment parent author. token_memo   can also have a placeholder `%s`, which is replaced by the command issuer.

## How does the script work
The posting and active key of the scot account, which will sent the token and reply to the comment with the command, needs to be stored in the beem wallet.

The script parses all comment ops by:
```
       for op in self.blockchain.stream(start=start_block, stop=stop_block, opNames=["comment"],  max_batch_size=50):
            cnt += 1
            last_block_num = op["block_num"]
```
`last_block_num ` is stored in a shelve:
```
data_db = shelve.open('data.db')
data_db["last_block_num"] = last_block_num
data_db.close()
```
This allows it to start exactly there where the script was stopped. When a comment with a command was found (all comments which do not include the command string will be skipped):
```
if op["body"].find(self.config["comment_command"]) < 0:
    continue
if op["author"] == self.config["scot_account"]:
    continue
try:
    c_comment = Comment(op, steem_instance=self.stm)
    c_comment.refresh()
except:
    logger.warn("Could not read %s/%s" % (op["author"], op["permlink"]))
    continue
if c_comment.is_main_post():
    continue
if abs((c_comment["created"] - op['timestamp']).total_seconds()) > 9.0:
    logger.warn("Skip %s, as edited" % c_comment["authorperm"])
    continue
already_replied = False
for r in c_comment.get_all_replies():
    if r["author"] == self.config["scot_account"]:
        already_replied = True
if already_replied:
    continue
```

It is then checked if the comment writer has sufficient token. If this is the case, a comment is replied with the stored `sucess_reply_body` from the config file and `send_token_amount` token are sent to the parent author.

```
wallet = Wallet(c_comment["author"], steem_instance=self.stm)
token = wallet.get_token(self.config["scot_token"])
if token is None or float(token["balance"]) < self.config["min_staked_token"]:
    reply_body = self.config["fail_reply_body"]
elif c_comment["parent_author"] == c_comment["author"]:
    reply_body = "You cannot sent token to yourself."
else:
    if "%s" in self.config["sucess_reply_body"]:
        reply_body = self.config["sucess_reply_body"] % c_comment["parent_author"]
    else:
        reply_body = self.config["sucess_reply_body"]
    if "%s" in self.config["token_memo"]:
        token_memo = self.config["token_memo"] % c_comment["author"]
    else:
        token_memo = self.config["token_memo"]
    sendwallet = Wallet(self.config["scot_account"], steem_instance=self.stm)
    sendwallet.transfer(c_comment["parent_author"], self.config["send_token_amount"], self.config["scot_token"], token_memo)
reply_identifier = c_comment["authorperm"]
if self.config["no_broadcast"]:
    logger.info("%s" % reply_body)
else:
    self.stm.post("", reply_body, author=self.config["scot_account"], reply_identifier=reply_identifier)
time.sleep(4)

```
## Commits
### Version 0.2.0, added a way to distribution token by comment commands
* [commit b38664b](https://github.com/holgern/steem-scot/commit/b38664b4994f27b10c11337531bf9d262e189e39)

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steem-scot - distributing token by comment command'](https://steemit.com/@holger80/steem-scot-distributing-token-by-comment-command)
