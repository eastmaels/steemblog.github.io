
---
title: 'rewarding - delayed upvote and paid-out post upvote helper'
permlink: rewarding-an-delayed-upvote-and-paid-out-post-upvote-helper
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-10 22:32:00
categories:
- steemdev
tags:
- steemdev
- steemtank
- rewarding
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmNWhtsn5mhiHVTSQHonKYCJhoX1a7tvDK91Xi1afyPwzn'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



![image.png](https://ipfs.busy.org/ipfs/QmNWhtsn5mhiHVTSQHonKYCJhoX1a7tvDK91Xi1afyPwzn)
[source](https://pixabay.com/de/update-upgrade-aktualisieren-1672363/)

You probably saw me using the @rewarding bot for giving delayed upvotes. Always waiting until a post is 15 minutes old before I can finally give a vote, has annoyed me. Thus, I coded this little helper. It is open to everyone but works only when giving @rewarding the posting role. Giving rewarding the posting authority can be done by https://steemconnect.com/authorize/@rewarding.

Giving the other account posting authority means that this account can broadcast all operation that need only posting authority as voting in the name of the account.



In order to disable commands for a post/comment, I can add 
```
$rewarding skip
```
to the post/comment.

## Only the first version of a post / comment is parsed.
Edited posts/comments are skipped and not parsed for commands.

## Delayed upvotes of pending posts / comments
### Command in a post
```
$rewarding 100% 15min
```
This command triggers a self-vote after 15 minutes with 100%.

```
$rewarding set account1:10%,account2:20%
```
This command tries to set beneficiaries for the post. The works only when no vote arrives before. The rewarding bot parses the head blocks for commands. When one is found, it is analyzed and a comment option operation is broadcasted in this case. Due to the parsing, there is some delay and setting beneficiaries may not work when there arrived a vote before.
```
$rewarding set account1:10%,account2:20% upvote 100% 15 min
```
This command sets beneficiaries and trigger a self-vote after 15 min with 100 %.

### Command in a comment
```
$rewarding 90% 14min
```
This command triggers a vote of the direct parent of the comment after 14 minutes (time is relative to creation time of the parent comment / post).

```
$rewarding 90%
```
Triggers a vote after 15 minutes.

```
$rewarding set account1:10%,account2:20%
```
This command triggers a command_options command that tried to set beneficiaries for the comment in which the command was included. By this, I could give the post author something in return. As mentioned above, this works only when in the short delay until the operation is broadcasted no vote has arrived.

```
$rewarding set account1:10%,account2:20% upvote 100% 15 min
```
This command sets beneficiaries for the comment itself and triggers an upvote of the parent post / comment.

## Upvoting paid-out posts
### Command in a comment
```
$rewarding 90%
```
This command let @rewarding creates a comment in which beneficiaries are set 100% to the post author. In this case, the comment and the comment_options are broadcasted in the same block. Thus setting beneficiaries will always work. After 15 minutes, the created comment is upvoted with 90%. 

## Using the commands without giving rewarding posting authority
When rewarding has not a posting authority, it will not upvote the post/comment but reply after the given time with a reminder comment which includes the name of the account that wrote the comment. When using a notification service as GINA this will lead to a reminder to upvote the post manually.

###  Using the commands without giving rewarding posting authority on paid-out posts
In this case a comment with 100% beneficiaries is created and after 15 min, the account is reminded to upvote by broadcasting a new reply comment with a account name mention.

## Transfer 0.001 STEEM/SBD to rewarding
### Paid-out post
When the memo an authorperm of a paid-out post includes, a comment with 100% beneficiaries is created. 

### When posting authority is given
Sending a memo with the following content:
```
100%,15min,authorperm
```
will trigger an upvote of the given authorperm.
When the given authorperm is a paid-out post, a comment is created with 100% beneficiaries and this comment is then upvoted with 100%


### Thanks to all Delegators that allow me to run this project:
Incoming - 300.000 SP
50 SP delegated by @idikuci
50 SP delegated by @dimitrisp
50 SP delegated by @condeas
50 SP delegated by @dj123
50 SP delegated by @pechichemena

____
Please let me know if you have ideas of other commands that I should implement or other suggestions. Please report also bugs.


- - -

This page is synchronized from the post: ['rewarding - delayed upvote and paid-out post upvote helper'](https://steemit.com/@holger80/rewarding-an-delayed-upvote-and-paid-out-post-upvote-helper)
