
---
title: 'SteemTools v0.0.7: Query Powerdown Status, Add SBDS API Server (Backend), Fix Voting Power'
permlink: steemtools-v0-0-7-query-powerdown-status-add-sbds-api-server-backend-fix-voting-power
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-17 23:54:24
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemtools
- steemit
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518911270/mf7aslonsxhj6l2outhl.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## SteemTools
SteemTools is a Chrome Extension that aims to provide useful tools and data for SteemIt Users.

# Github
https://github.com/DoctorLai/SteemTools/

# Previous Contributions
- [SteemTools v0.0.6 - Check Who Downvoted You + API Server Ping](https://helloacm.com/steemtools-v0-0-6-check-who-downvoted-you-api-server-ping/)
- [SteemTools v0.0.5 - Reveal Deleted Comments, Load & Save Steem-Js!](https://helloacm.com/steemtools-v0-0-5-reveal-deleted-comments-load-save-steem-js/)
- [SteemTools v0.0.4 Add 'Steem-JS' console to SteemTools!](https://helloacm.com/add-steem-js-console-to-steemtools/)
- [SteemTools v0.0.3 New Features: Query Delegators and Nodes/Server Configuration](https://helloacm.com/steemtools-v0-0-3-new-features-query-delegators-and-nodes-server-configuration/)
- [SteemTools v0.0.2 New Features: Query Delegatees and Basic Search and More](https://helloacm.com/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more/)
- [SteemTools v0.0.1](https://helloacm.com/chrome-extension-steemtools-v0-0-1/)

# Technology Stack
Javascript that runs in the Chrome Browser (Chrome Extension)

## Chrome Webstore
It is online, and you can install SteemTools via:
https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

## New Features of v0.0.7
[This version](https://helloacm.com/steemtools-v0-0-7-query-powerdown-status-add-sbds-api-server-backend-fix-voting-power/) has the following changes:

1. Fix voting power error, as described in the ISSUE of [Utopian Moderators](https://github.com/DoctorLai/utopian-moderator/issues/2)
2. Users can query Power Down Status
3. SBDS API server status (added as a backup)

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/9bf92651cd7dfbd63b0c90b9a93517a507786301)

## How to Get Current Voting Power for Steem Accounts?
The `voting_power` is not the real voting power, but the voting power recorded last time voted. So we have to calculate the voting power restored by the seconds since `last_vote_time`.

```
let result = response[0].voting_power;
last_vote_time = response[0].last_vote_time;
let diff = (Date.now() - Date.parse(last_vote_time)) / 1000;
let regenerated_vp = diff * 10000 / 86400 / 5;
let total_vp = (result + regenerated_vp) / 100;
total_vp = Math.min(100, total_vp);
```

## Screenshots
Clicking the blocknumber navigates to steemdb.com
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518911270/mf7aslonsxhj6l2outhl.png)

Powerdown status is looked up at startup.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518911297/ekmupbrp1mqufw074age.png)

Alternatively, you can query any account's power-down status.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518911369/mul2saiqhd0i6d6ikwvz.png)

# Roadmap of Steem Tools
1. UI Language Setting
2. Add [Downvote Checker](https://helloacm.com/tools/steemit/who-downvote-you/)
3. Add [Delegator](https://helloacm.com/tools/steemit/delegators/)/[Delegatee](https://helloacm.com/tools/steemit/delegatees/) List Checker
4. Steemit [Top 100 Delegations](https://helloacm.com/tools/steemit/top-delegations/)
5. SteemIt [Followers/Votes](https://helloacm.com/tools/steemit/who-has-not-voted/) Checker
6. Steemit [Incoming Votes](https://helloacm.com/tools/steemit/incoming/) [Report](https://helloacm.com/tools/steemit/lastvotes/)
7. Steemit [Payout Report](https://helloacm.com/tools/steemit/payout/)
8. Steemit [Outgoing Votes](https://helloacm.com/tools/steemit/outgoing/) [Report](https://helloacm.com/tools/steemit/outgoing-votes/)
9. Steemit [Who Resteem](https://helloacm.com/tools/steemit/reblogs/) Your Posts?
10. Steemit [Recover Deleted Posts/Comments](https://helloacm.com/tools/steemit/deleted-comments/)
11. Steemit [Powerdown Status](https://helloacm.com/tools/steemit/powerdown/)
12. and [more](https://helloacm.com/tools/steemit)...

# License
[MIT](https://github.com/DoctorLai/SteemTools/blob/master/LICENSE)

# Contribution Welcome
Github: https://github.com/DoctorLai/SteemTools/
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

# Chrome Webstore
Install the [SteemTools Chrome Extension](https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn) Now!


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-7-query-powerdown-status-add-sbds-api-server-backend-fix-voting-power">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.7: Query Powerdown Status, Add SBDS API Server (Backend), Fix Voting Power](https://steemit.com/@justyy/steemtools-v0-0-7-query-powerdown-status-add-sbds-api-server-backend-fix-voting-power)
