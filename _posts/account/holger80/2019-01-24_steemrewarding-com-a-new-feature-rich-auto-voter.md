
---
title: 'steemrewarding.com - a new feature rich auto voter'
permlink: steemrewarding-com-a-new-feature-rich-auto-voter
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-24 12:23:24
categories:
- utopian-io
tags:
- utopian-io
- development
- steemdev
- autovoter
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmezYEovfKm4Mox5XvsVaZv11HLuqrvCmySPTCaLacKa4d'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/steemrewarding

### steemrewarding
steemrewarding is a new feature rich auto voter for the steem blockchain. It can be found at: https://steemrewarding.com. The @rewarding account is used for voting.

As soon as posting authority is given to @rewarding by [steemconnect](https://steemconnect.com/authorize/@rewarding), vote rules can be created and posts or comments will be automatically upvoted when fitting.

It is now possible to create two rules per author, one for posts and one for comments. Each rule has the fields:
* `voter` - account name of the voter, must has given posting authority to @rewarding. Cannot be set at the homepage, as only rules for accounts for which I have the keys can be added or edited.
* `author` - steem account for which the rule apply
* `main_post` - defines if the rule apply for posts or for comments
* `vote_delay_min`:  - When `vote_when_vp_reached` is False, the post/comment is voted when the post is `vote_delay_min` minutes old and all other rule parameter are fitting.
* `vote_weight`: - 0% - 100% defines the vote weight. (Can be modified by setting `vp_scaler`)
* `enabled`: Rule is enabled, when this is set to True
* `vote_sbd`: Not active yet
* `max_votes_per_day`: limites the number of votes (votes are counted in a sliding window), only votes given by the auto voter are counted.
* `max_votes_per_week`: limites the number of votes (votes are counted in a sliding window), only votes given by the auto voter are counted.
* `include_tags`: Comma separated list of tags that must be included. E.g. python,c means the post/comment must either have a python tag or a c tag. Tags can be combinded with &. E.g. python&c,js. In this case, posts/comments are voted, when they have a js tag or a python and a c tag.
* `exclude_tags`: Same as `include_tags`, posts/comments with tags that were added here, will not be upvoted. The tags, must be comma separated and the & sign can be used. E.g. python&c, js. In this case, posts/comments that have a js or a python and c tag will not be upvoted.
* `vote_when_vp_reached`: When enabled, posts/comments will be upvoted when the `min_vp` is reached. 
* `min_vp`: Minimum vote power applies for timed and vp based votes. When `vote_when_vp_reached` is False and vp is below `min_vp`, the comment/post will not be upvoted.
* `vp_scaler`: When higher than 0, the vote weight is reduced by this scaler depending on the votepower. E.g. `vp_scaler` is 0.5, then the vote weight is multiplied by 1 - ((100-vp) / 100 *vp_scaler). When vp is 100, the vote weight is not changed. When vp is 80, the new vote weight is multiplied by 0.9.
* `leave_comment`: not implemented yet
* `minimum_word_count`: When the post/comment word count is below, the post/comment is not upvoted.
* `include_apps`: comma-separated list of apps that will be upvoted, when set.
* `exclude_apps`: comma-separated list of apps that will not be upvoted, when set.
* `exclude_declined_payout`: When True, posts/comments with declined payout will not be upvoted.
* `vp_reached_order`: When `vote_when_vp_reached` is True, this defines which posts is upvoted first. The pending post with the lowest `vp_reached_order` is upvoted first.
* `max_net_votes`: When set, the post/comment is only upvted when the number of given votes is below.
* `max_pending_payout`: When set, the post/comment is only upvted when the pending payout  is below.
* `include_text`: When set, the post/comment is only upvoted when its the given text is included.
* `exclude_text`: When set, the post/comment is not upvoted when its the given text is included.

### Database structure
Posts/comments for which a rule exists, are stored in the posts database. New posts/comments are found by streaming all blocks. This is performed in the `stream_blocks.py` script. 

Then in the `apply_vote_rules.py` script, not processed posts/comments that were stored in the database are checked if one rule applies. When this is the case, teh authorperm with some addional information is stored in the pending votes database.

Finally, the `upvote_post_comments.py` script checks of one of the pending votes can be upvoted. Sucessfully upvoted posts or comments will be added to the vote log database.

### Homepage
Each steem user can add rules and use steemrewarding through the https://steemrewarding.com homepage. 
![image.png](https://ipfs.busy.org/ipfs/QmezYEovfKm4Mox5XvsVaZv11HLuqrvCmySPTCaLacKa4d)
After logging in with steemconnect (I'm using the @beem.app steemconnect account for this)
![image.png](https://ipfs.busy.org/ipfs/Qmeq1iR4r4966b9qiSLQF4EngsYFgetB5MgH1ujMpriG54)
The homepage can be used:
![image.png](https://ipfs.busy.org/ipfs/QmbAXz4rVF8jWfhXVcwUesDdUxA5CWX85HvPqwGgEXCqGj)
The steemconnect link is only be used to verify the steem account.

* Show rules: prints all stored rules. It is possible to edit and delete rules here.
* Add a new rule: Can be used to create a new voting rule.
* Show vote log: Shows sucessfully upvoted posts
* Show Pending votes: shows pending votes for the current logged in account.
* Logout can be used to remove the steemconnect token from the session.

### Technology Stack
The postgres database is used to store rules, posts, pending votes, given votes and some more information. The scripts are programmed with python 3 using [beem](https://github.com/holgern/beem). Python3 + flask is used for the homepage.

### Roadmap
The not used rules: `vote_sbd` and `leave_comment` will be added next. When `leave_comment` is set, a comment from the voter with a defined text should be broadcasted.

I plan also a user settings page, where global parameter can be set.

Vote trails is also a missing feature which will be added.

The @rewarding account was used before for upvoting posts, when a command was written in a comment. This functionality will be added to the github in the next update. It will then be possible to upvote a post/comment without having a rule for but, but writing a command in a comment below this post.


### How to contribute?
The issue tracker at  https://github.com/holgern/steemrewarding can be used for feature wishes, ideas, and bug reports. Pull request can also be created after forking the repository for improving the code or the homepage.

I created also a new discord server for discussing everything about steemrewarding:
https://discord.gg/qpsR8hf

#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - a new feature rich auto voter'](https://steemit.com/@holger80/steemrewarding-com-a-new-feature-rich-auto-voter)
