
---
title: 'Is it possible to disallow replies to a post?'
permlink: is-it-possible-to-disallow-replies-to-a-post
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-11 15:55:39
categories:
- steemdev
tags:
- steemdev
- steemit
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmfGjotqeZ88yhVDF2hjDF8jfnkSpKbpKSGwdGMNyN1U8f'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Each post/comment has a `allow_replies` parameter:

![image.png](https://ipfs.busy.org/ipfs/QmfGjotqeZ88yhVDF2hjDF8jfnkSpKbpKSGwdGMNyN1U8f)

As written in https://developers.steem.io/apidefinitions/#broadcast_ops_comment_options, the parameter cannot be set with a `comment_options` operation.

After some digging, I found that the parameter was disabled on the 28 june  2016: https://github.com/steemit/steem/commit/5fcabd81b0f31862608533d2157e470f6db4e921.
with the comment:
> Remove disable replies from comment_options_operation. Require 0 abs_rshares to set a max accepted payout. Added an extensions field to the op.

![image.png](https://ipfs.busy.org/ipfs/QmP62LQ6ShE65GHLoDNk8JjKh6XLiCtjnhoJb1dKQXCUsA)

I found no reason why this change was made. I think it should be reverted and allow_replies should be added as parameter to `comment_options` again.

___
I opened an issue regarding this topic: https://github.com/steemit/steem/issues/3059.
___
Reply to the issue:
![](https://cdn.steemitimages.com/DQmXPoK1nXecY6PrZnn5fkZCbPmHFMAjyqPioM4tpMMj96E/image.png)

- - -

This page is synchronized from the post: ['Is it possible to disallow replies to a post?'](https://steemit.com/@holger80/is-it-possible-to-disallow-replies-to-a-post)
