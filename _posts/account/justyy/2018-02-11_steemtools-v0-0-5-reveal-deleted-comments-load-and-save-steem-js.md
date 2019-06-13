
---
title: 'SteemTools v0.0.5 - Reveal Deleted Comments, Load & Save Steem-Js!'
permlink: steemtools-v0-0-5-reveal-deleted-comments-load-and-save-steem-js
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-11 11:17:24
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemdev
- steemstem
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518347212/xpwli2l6eawreegodcmx.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## SteemTools
SteemTools is inspired by its sister project: [Utopian Moderators & Supervisors](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/) and it provides a set of useful data, tools, statistics for SteemIt Users.

SteemTools so far has got a few positive feedbacks, Thanks!  As its name suggests, SteemTools is a chrome extension that contains a few useful tools, a few useful data for SteemIt Users.

# Github
https://github.com/DoctorLai/SteemTools/

# Previous Contributions
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

## New Features of v0.0.5
[This version](https://helloacm.com/steemtools-v0-0-5-reveal-deleted-comments-load-save-steem-js/) has the following new features.
1. Load & Save Steem-JS source so you can save your prototyping code in the Chrome Extension and it will load it next time automatically when you launch the SteemTools
2. Query buttons are disabled when API not return yet.
3. You can now restore the comments in the steem block chain!

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/2c70508803a9f57aef48abf4b13f7022fa8ab260)

## Screenshots
Save the source for later during your prototyping
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518347212/xpwli2l6eawreegodcmx.png)

Query button is disabled.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518347237/wfp7wvwa6xqw8kwuujvr.png)

Reveal Deleted Comments for a given Steem ID.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518347227/xaofghplodq2th8iwxrp.png)

## Some code in the Commit
The following restores a full Steem URL given a `permlink`

```
// given a perm link restore its full Steem URL
const restore = (url) => {
    var pat = /(re-\w+-)*((\w+\-)*)/g;
    var my = pat.exec(url);
    if (my[1] && my[2]) {       
        var author = my[1].split('-')[1];
        var link = my[2].slice(0, -1);
        return 'https://steemit.com/@' + author + '/' + link;
    }
    return null;
}
```

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


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-5-reveal-deleted-comments-load-and-save-steem-js">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.5 - Reveal Deleted Comments, Load & Save Steem-Js!](https://steemit.com/@justyy/steemtools-v0-0-5-reveal-deleted-comments-load-and-save-steem-js)
