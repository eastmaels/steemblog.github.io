
---
title: 'Add ''Steem-JS'' console to SteemTools!'
permlink: add-steem-js-console-to-steemtools
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-10 12:37:36
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemdev
- steemstem
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518266124/q9henznskwkmhzrbocx2.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I am a [Utopian moderator](https://helloacm.com/being-part-of-utopian-moderating-team-is-great-intro-post/) and sometimes I need to quickly evaluate a few steem-js bugs. I have added a console so that I can quickly experiment something in the SteemTool chrome extension

## SteemTools
SteemTools is inspired by its sister project: [Utopian Moderators & Supervisors](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/) and it provides a set of useful data, tools, statistics for SteemIt Users.

# Github
https://github.com/DoctorLai/SteemTools/

# Previous Contributions
- [SteemTools v0.0.3 New Features: Query Delegators and Nodes/Server Configuration](https://helloacm.com/steemtools-v0-0-3-new-features-query-delegators-and-nodes-server-configuration/)
- [SteemTools v0.0.2 New Features: Query Delegatees and Basic Search and More](https://helloacm.com/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more/)
- [SteemTools v0.0.1](https://helloacm.com/chrome-extension-steemtools-v0-0-1/)

# Technology Stack
Javascript that runs in the Chrome Browser (Chrome Extension)

## Chrome Webstore
It is online, and you can install SteemTools via:
https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

## New Features of v0.0.4
[Add Steem-Js Console.](https://helloacm.com/add-steem-js-console-to-steemtools/)

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/02ee1bcb9c448b3630f9d86844ea5bf1c1cd6b2a)

## How it works?
Put the source code in the code editor under `Steem-Js` Tab, and the code will be evaulated via `eval` which we enable after adding the following to the *manifest.json*

```
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
```

And you can use Alt + Enter to run the source and Alt + BACKSPACE to clear the console.

```
   // alt + enter to evalute
    // alt + backspace to clear
    $('textarea#steemjs-source').keydown(function (e) {
        if (e.altKey && e.keyCode == 13) {
            $('input#btn_run').click();
        }
        if (e.altKey && e.keyCode == 8) {
            $('input#btn_clear').click();
        }        
    });  
```

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518266124/q9henznskwkmhzrbocx2.png)

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


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/add-steem-js-console-to-steemtools">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Add ''Steem-JS'' console to SteemTools!](https://steemit.com/@justyy/add-steem-js-console-to-steemtools)
