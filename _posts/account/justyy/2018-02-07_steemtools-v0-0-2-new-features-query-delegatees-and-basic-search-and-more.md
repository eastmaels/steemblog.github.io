
---
title: 'SteemTools v0.0.2 New Features: Query Delegatees and Basic Search and More'
permlink: steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-07 22:50:09
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemdev
- steemstem
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518043621/zh3shqlnclpzj7kt30bc.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## SteemTools
SteemTools is a Chrome Extension that aims to  provide useful tools and information in your Chrome browser. It is inspired by its sister project: [Utopian Moderators & Supervisors](https://steemit.com/utopian-io/@justyy/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab)

# Github
https://github.com/DoctorLai/SteemTools/

# Previous Contributions
- [SteemTools v0.0.1](https://helloacm.com/chrome-extension-steemtools-v0-0-1/)

# Technology Stack
Javascript that runs in the Chrome Browser (Chrome Extension)

## Chrome Webstore
It is online, and you can install SteemTools via:
https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

## New Features of v0.0.2
Along with Bug fixes and code refactoring, [this new version](https://helloacm.com/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more/) adds the following features:

1. Allow users to query the list of delegatees
2. Allow users to query the basic information (reputation, voting power, account value) of a given ID
3. Show account value in the general tab
4. Change shortcut from Alt+S to Alt+W (so it doesn't conflict with Utopian Moderators!)

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/bcf31169187faaf2529724cab3b031e5613a2161)

## Screenshots
account value is shown in the general tab.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518043621/zh3shqlnclpzj7kt30bc.png)

@mkt 's reputation is incorrectly shown as 70, which I have raised a bug in [here](https://steemit.com/utopian-io/@justyy/incorrect-reputation-calculated-using-steem-js)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518043647/ffbwplshmo4l0m0ccw7u.png)

enter the steem account you would like to search the delegatees.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518043685/lgsett5nigmjxypo15zg.png)

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
11. and [more](https://helloacm.com/tools/steemit)...

# Some code that is based on Steem-JS
```
// get reputation 
const getRep = (id, dom, server) => {
    server = server || default_node;
    steem.api.setOptions({ url: server });

    steem.api.getAccounts([id], function(err, result) {
        if (!err) {
            dom.html("<i>@" + id + "'s Reputation is</i> <B>" + steem.formatter.reputation(result[0]['reputation']) + "</B>");
            logit("getRep Finished: " + server + ": " + id);
        } else {
            logit("getRep Error: " + err);
        }
    });    
}

// get account value
const getAccountValue = (id, dom, server) => {
    server = server || default_node;
    steem.api.setOptions({ url: server });

    steem.api.getAccounts([id], function(err, result) {
        if (!err) {
            var av = steem.formatter.estimateAccountValue(result[0]);
            av.then(x => {
                dom.html("<i>@" + id + "'s Account Value is</i> <B>$" + x + "</B>");
            });
            logit("getAccountValue Finished: " + server + ": " + id);
        } else {
            logit("getAccountValue Error: " + err);
        }
    });    
}

// get voting power
function getVP(id, dom, server) {
    server = server || default_node;
    steem.api.setOptions({ url: server });

    steem.api.getAccounts([id], function(err, response) {
        if (!err) {
            let result = (response[0].voting_power) / 100;
            dom.html("<i>@" + id + "'s Voting Power is</i> <B>" + result + "%</B>");
            if (result < 30) {
                dom.css("background-color", "red");
            } else if (result < 60) {
                dom.css("background-color", "orange");
            } else {
                dom.css("background-color", "green");
            }
            dom.css("color", "white");
            dom.css("width", result + "%");
            logit("API Finished: VP - " + server + ": " + id);
        } else {
            logit("API error: " + server + ": " + err);
        }
    });   
}
```

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.2 New Features: Query Delegatees and Basic Search and More](https://steemit.com/@justyy/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more)
