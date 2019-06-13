
---
title: 'Suggestion: Adding follow, unfollow, has_followed in Steem Python Library'
permlink: suggestion-adding-follow-unfollow-hasfollowed-in-steem-python-library
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-28 15:41:09
categories:
- utopian-io
tags:
- utopian-io
- steem-python
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have searched the library of steemit/steem-python, the official Steem Python library, in order to find methods that allow me to follow, unfollow or check if followed given a steem ID. Currently, there is no relative methods in steemit/steem-python librarys.

The closest methods are only read-only the lists. For example, in `Account.py`:

https://github.com/steemit/steem-python/blob/master/steem/account.py

The `get_following` is defined as:

```
def get_following(self):
  return [x['following'] for x in self._get_followers(direction="following")]
```

So, what I am proposing is to add `follow`, `unfollow` and `has_followed` methods that are self-explanatory. Example usage (in [Python](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/) code) will be something like this:

```
account = Account("justyy")
if not account.has_followed("utopian-io"):
   account.follow("utopian-io")
if account.has_followed("ned"):
   account.unfollow("ned")
```

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/suggestion-adding-follow-unfollow-hasfollowed-in-steem-python-library">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Suggestion: Adding follow, unfollow, has_followed in Steem Python Library](https://steemit.com/@justyy/suggestion-adding-follow-unfollow-hasfollowed-in-steem-python-library)
