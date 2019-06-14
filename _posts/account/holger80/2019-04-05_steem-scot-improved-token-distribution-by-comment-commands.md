
---
title: 'steem-scot - improved token distribution by comment commands'
permlink: steem-scot-improved-token-distribution-by-comment-commands
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-05 11:26:15
categories:
- utopian-io
tags:
- utopian-io
- development
- scot
- steem-engine
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPGDMzbLsMnAF1T2bCAe7Cqg11CKjQxLoZzfr1ApiXVZL'
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

![image.png](https://ipfs.busy.org/ipfs/QmPGDMzbLsMnAF1T2bCAe7Cqg11CKjQxLoZzfr1ApiXVZL)



## New features
### More than one scot account/token can specified and more options are available
The config for `scot_by_comment` has now the following structure:
```
{
        "config": [{
        "scot_account": "scotaccount",
        "scot_token": "SCOT",
        "token_memo":"Here is your token thanks to %s",
        "reply": true,
        "sucess_reply_body": "Dear %s, The token are on its way!",
        "fail_reply_body": "You need to stake 10 token, in order to use this service.",
        "no_token_left_body": "Please retry later...",
        "comment_command": "!SCOT",
        "user_can_specify_amount": true,
        "maximum_amount": 10,
        "min_staked_token": 50,
        "usage_upvote_percentage": 0
        },
        {
        "scot_account": "token_issuer",
        "scot_token": "TOKEN",
        "token_memo":"You got a token",
        "reply": true,
        "sucess_reply_body": "Here is your token",
        "fail_reply_body": "Sorry, you need more token in order to use this service.",
        "no_token_left_body": "Sorry, out of token, please retry later...",
        "comment_command": "!TOKEN",
        "user_can_specify_amount": false,
        "maximum_amount": 1,
        "min_staked_token": 10,
        "usage_upvote_percentage": 0
        }],
        "no_broadcast": false,
        "print_log_at_block": 300,
        "wallet_password": "walletpass"
}
```
Each comment is parsed and all specified commands are checked in a fore loop:
```
token = None
for key in self.token_config:
    if op["body"].find(self.token_config[key]["comment_command"]) >= 0:
        token = key
if token is None:
    continue
```
When a fitting config was found, a reply comment is broadcasted and the token are sent, when the user has sufficient (`min_staked_token`) tokens.


There are more options available that can modify the behavior of the bot.


|        Option       | Value                                                |
|:-------------------:|------------------------------------------------------|
| scot_account | steem account name, which should distribute the token       |
| scot_token   | token symbol, which should be distributed                   |
| token_memo   | memo which is attached to each token transfer               |
| reply        | when true, a reply comment is broadcasted                   |
| wallet_password | Contains the beempy wallet password |
| no_broadcast | When true, no transfer is made |
| min_staked_token | Minimum amount of token a comment writer must have |
| maximum_amount | Maximum Amount of token that will be send|
| user_can_specify_amount | When true, the user can specify the amount to send up to maximum_amount, when false maximum_amount is always sent |
| sucess_reply_body | Reply body, when token are send|
| fail_reply_body | Reply body, when no token are sent (not min_staked_token available) |
| no_token_left_body | Reply body, when no token are left to send |
| comment_command | Command which must be included in a comment, to activate the bot |
| usage_upvote_percentage | When set to a percentage higher than 0, the comment with the command will be upvoted by the scot_account |

#### `maximum_amount` and `user_can_specify_amount`
It is now possible to allow user who staked sufficient tokens specify the amount of token the parent author should receive.

![image.png](https://ipfs.busy.org/ipfs/QmZa1Lj1aAdriDre83hEPhhWAMu2cD6krL8cd8Y9FR5KhZ)

Here, `maximum_amount` is set to 100 and `user_can_specify_amount` was set to true.

The amount is parsed be the following code:
```
# parse amount when user_can_specify_amount is true
amount = self.token_config[token]["maximum_amount"]
if self.token_config[token]["user_can_specify_amount"]:
    start_index = c_comment["body"].find(self.token_config[token]["comment_command"])
    stop_index = c_comment["body"][start_index:].find("\n")
    if stop_index >= 0:
        command = c_comment["body"][start_index + 1:start_index + stop_index]
    else:
        command = c_comment["body"][start_index + 1:]
    command_args = command.replace('  ', ' ').split(" ")[1:]          
    if len(command_args) > 0:
        try:
            amount = float(command_args[0])
        except:
            logger.info("Could not parse amount")
```

### There is a new message when the token supply from the token sending account is empty
```
# Load scot token balance
scot_wallet = Wallet(self.token_config[token]["scot_account"], steem_instance=self.stm)
scot_token = scot_wallet.get_token(self.token_config[token]["scot_token"])
.....
elif float(scot_token["balance"]) < amount:
    reply_body = self.token_config[token]["no_token_left_body"]
```
When not sufficient tokens are left, a reply with `no_token_left_body` is broadcasted.

### The config file, the scot_account and the scot_token is checked 
The config file is now checked for missing parameters. It is also checked if the scot_account exists and if the token is valid:
```
config_cnt = 0
necessary_fields = ["scot_account", "scot_token", "min_staked_token", "comment_command",
                    "token_memo", "reply", "sucess_reply_body", "fail_reply_body", "no_token_left_body",
                    "user_can_specify_amount", "maximum_amount", "usage_upvote_percentage"]
for conf in self.config["config"]:
    config_cnt += 1
    # check if all fields are set
    all_fields_ok = True
    for field in necessary_fields:
        if field not in conf:
            logger.warn("Error in %d. config: %s missing" % (config_cnt, field))
            all_fields_ok = False
    if not all_fields_ok:
        continue
    # Check if scot_account exists (exception will be raised when not)
    Account(conf["scot_account"])
    # Check if scot_token exists
    if token_list.get_token(conf["scot_token"]) is None:
        logger.warn("Token %s does not exists" % conf["scot_token"])
        continue
    self.token_config[conf["scot_token"]] = conf

```

### Improved logging
It can now be specified how often a logging message is printed by the `print_log_at_block` parameter. Every `print_log_at_block` block the following message will now be printed:
![image.png](https://ipfs.busy.org/ipfs/QmaX7J2eTXHZoRpnvVyZNF6SjmuqAfu2TDZwuXh8NazAg6)

The block number of the last log message is stored in a dict:
```
self.log_data = {"start_time": 0, "last_block_num": None, "new_commands": 0, "stop_block_num": 0,
                 "stop_block_num": 0, "time_for_blocks": 0} 
```
This allows it to print exactly after the same amount of blocks a new log message.



## Commits
### adapt readme to chagnes
* [commit 83c4a40](https://github.com/holgern/steem-scot/commit/83c4a40a48a9b15897052a9496600158bcbb3c4f)
### add better logging, it is possible to define the block diff at which a new logging messaage should be send
* [commit 95fd97](https://github.com/holgern/steem-scot/commit/95fd97d08b141f2ffd129903ee58c9f5814cd7ea)
### check configs and check if token and token_sender account exists
* [commit 8b9d07c](https://github.com/holgern/steem-scot/commit/8b9d07cf5677fc14c849e6820036d65498e2b6f8)
* * add option to upvote token command user
### It is possible to user more than one account and more than one token in scot_by_comment
* [commit e65564b](https://github.com/holgern/steem-scot/commit/e65564bb09a97f5e98102a09af027c51f2e0dd08)
* datadir can be specified
* token amount to sent can be specified
* new message when no token are left


## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steem-scot - improved token distribution by comment commands'](https://steemit.com/@holger80/steem-scot-improved-token-distribution-by-comment-commands)
