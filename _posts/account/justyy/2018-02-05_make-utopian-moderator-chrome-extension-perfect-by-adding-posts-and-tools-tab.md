
---
title: 'Make Utopian Moderator Chrome Extension Perfect by Adding Posts and Tools Tab'
permlink: make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-05 22:56:36
categories:
- utopian-io
tags:
- utopian-io
- utopian
- chrome-extension
- steemstem
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1517871161/wdrotpjt1bzwrj55qwho.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Utopian Moderators & Supervisor
*Utopian Moderators & Supervisor* is a Chrome Extension that is made exclusively for Utopian Moderators and Supervisors. It is available for download at the following Chrome Webstore:

https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

## Latest Version v0.0.8
[This Commit](https://github.com/DoctorLai/utopian-moderator/commit/56837bf6bc2adb8e35181475a5681d372347d74b): along with some bug fixes and minor tweaks, I am adding two tabs:  *Posts* and *Tools*  for showing the latest activities from @utopian-io and a simple tool to convert the raw reputation (in the future, this tab will be added with more useful tools).

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517871161/wdrotpjt1bzwrj55qwho.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517871175/azivflruovhyfycne0lo.png)

## New Dependency Library
The new features are based on [steem.js](https://github.com/steemit/steem-js). For example:

```
const getPosts = (id, dom, num = 10) => {
    steem.api.setOptions({ url: 'https://api.steemit.com' });

    var query = {
        tag: id,
        limit: num
    };

    steem.api.getDiscussionsByBlog(query, function (err, discussions) {
        console.log(err, discussions);
        if (!err) {
            discussions.map(function (discussion) {
                var li = document.createElement('li');
                li.innerHTML = "<font color=gray><I>" + discussion.created + "</I></font>: <a target=_blank href='https://steemit.com/@" + discussion.author + "/" + discussion.permlink + "'>" + discussion.title + "</a>" + " @" + discussion.author;
                dom.append(li);
            });
        }
    });
}

const getData = (id, dom, item) => {
    steem.api.setOptions({ url: 'https://api.steemit.com' });

    steem.api.getAccounts([id], function(err, result) {
        let s = "<ul>";
        console.log(result);
        $.each(item, function(index, value) {
            s += "<li><i>" + value + "</i>: " + result[0][value] + "</li>";
        });
        s += "</ul>";
        dom.html(s);
    });
}
```

## Github
https://github.com/DoctorLai/utopian-moderator/

# Previous Contributions
- v0.0.7 [Utopian Moderator Chrome Extension](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/): [Improved Supervisor Tab by Showing Acceptance Rate and Pie Chart](https://steemit.com/utopian-io/@justyy/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart)
- v0.0.6 [Adding Supervisor Tab](https://helloacm.com/adding-supervisor-tab-to-utopian-moderator-chrome-extension/) to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-supervisor-tab-to-utopian-moderator-chrome-extension)
- v0.0.5 [Adding Unreviewed Contributions](https://helloacm.com/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension/) + [List of Approved/Rejected Posts to Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension)
- v0.0.4 [Adding Approved/Rejected Stats](https://helloacm.com/adding-approved-rejected-stats-and-showing-friends-vp-rep-to-utopian-moderator-chrome-extension/), Showing Friends' VP/Rep to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-approved-rejected-stats-showing-friends-vp-rep-to-utopian-moderator-chrome-extension)
-  v0.0.3 [Adding Moderators Tab](https://helloacm.com/adding-moderators-tab-to-utopian-chrome-extension/) to [Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-moderators-tab-to-utopian-chrome-extension)
- v0.0.2 Adding [Easy Switch Between Utopian and Steem Posts](https://helloacm.com/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension/)  to [Utopian Moderator Chrome Extension](https://steemit.com/utopian-io/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension)
- v0.0.1 The First [Utopian Moderator](https://helloacm.com/the-first-utopian-moderator-chrome-extension/) [Chrome Extension](https://steemit.com/utopian-io/@justyy/the-first-utopian-moderator-chrome-extension)

# Technology Stack
Javascript that runs in Chrome.

# Roadmap
This project is on fire!

1. Add more handy tools/features regarding to the post.
2. Add more global statistics.
3. Add some real time statistics.

# Chrome Webstore
Install the [Utopian Chrome Extension](https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc) Now!

# Contribution Welcome
Github: https://github.com/DoctorLai/utopian-moderator
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.




<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Make Utopian Moderator Chrome Extension Perfect by Adding Posts and Tools Tab](https://steemit.com/@justyy/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab)
