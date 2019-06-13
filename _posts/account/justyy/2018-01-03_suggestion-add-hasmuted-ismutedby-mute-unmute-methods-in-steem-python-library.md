
---
title: 'Suggestion: Add has_muted, is_muted_by, mute, unmute methods in Steem Python Library'
permlink: suggestion-add-hasmuted-ismutedby-mute-unmute-methods-in-steem-python-library
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-03 00:26:09
categories:
- utopian-io
tags:
- utopian-io
- programming
- steemdev
- steem-python
- steemstem
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have been studying the official Steem Python library at https://github.com/steemit/steem-python  and IMHO it lacks of checking if any given ID is muted by the Account. Simply put, the `has_muted` is useful in checking if current account has muted a given ID, and `unmute` will simply unmute the ID. These two can be described by the following:

```
id = Account("justyy")
if id.has_muted("someone"):
   id.unmute("someone")
```

Similarly, `is_muted_by` checks the other way around and `mute` will mute the given ID:

```
id = Account("justyy")
if id.is_muted_by("someone"):
    id.mute("someone")
```

These four methods should be a great add-on features to the steem python library!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/suggestion-add-hasmuted-ismutedby-mute-unmute-methods-in-steem-python-library">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Suggestion: Add has_muted, is_muted_by, mute, unmute methods in Steem Python Library](https://steemit.com/@justyy/suggestion-add-hasmuted-ismutedby-mute-unmute-methods-in-steem-python-library)
