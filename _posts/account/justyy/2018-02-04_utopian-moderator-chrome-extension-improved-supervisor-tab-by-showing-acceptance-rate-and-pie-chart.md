
---
title: 'Utopian Moderator Chrome Extension: Improved Supervisor Tab by Showing Acceptance Rate and Pie Chart'
permlink: utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-04 21:56:18
categories:
- utopian-io
tags:
- utopian-io
- utopian
- chrome-extension
- steemstem
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1517781181/sew1yvbeulqilisdaovy.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Utopian Chrome Extension for Moderator
This is a handy Chrome Extension that is made exclusively for [Utopian](https://helloacm.com/being-part-of-utopian-moderating-team-is-great-intro-post/) Moderators and Supervisors. It aims to provide as much useful tools and data as possible regarding to the [Utopian moderation](https://helloacm.com/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart/).

# v0.0.7 New Feature
Along with some bug fixes and code refactoring, [this commit](https://github.com/DoctorLai/utopian-moderator/commit/a866ae18418768c5863208811d0d6e12e28a6f15) improves the supervisor tab by adding Acceptance Rate and Pie Chart.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517781181/sew1yvbeulqilisdaovy.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517781192/bm3qu3fzkv6fosrcyojg.png)

# Previous Contributions
- v0.0.6 [Adding Supervisor Tab](https://helloacm.com/adding-supervisor-tab-to-utopian-moderator-chrome-extension/) to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-supervisor-tab-to-utopian-moderator-chrome-extension)
- v0.0.5 [Adding Unreviewed Contributions](https://helloacm.com/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension/) + [List of Approved/Rejected Posts to Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension)
- v0.0.4 [Adding Approved/Rejected Stats](https://helloacm.com/adding-approved-rejected-stats-and-showing-friends-vp-rep-to-utopian-moderator-chrome-extension/), Showing Friends' VP/Rep to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-approved-rejected-stats-showing-friends-vp-rep-to-utopian-moderator-chrome-extension)
-  v0.0.3 [Adding Moderators Tab](https://helloacm.com/adding-moderators-tab-to-utopian-chrome-extension/) to [Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-moderators-tab-to-utopian-chrome-extension)
- v0.0.2 Adding [Easy Switch Between Utopian and Steem Posts](https://helloacm.com/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension/)  to [Utopian Moderator Chrome Extension](https://steemit.com/utopian-io/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension)
- v0.0.1 The First [Utopian Moderator](https://helloacm.com/the-first-utopian-moderator-chrome-extension/) [Chrome Extension](https://steemit.com/utopian-io/@justyy/the-first-utopian-moderator-chrome-extension)

# Technology Stack
Javascript that runs in Chrome.

# Github
https://github.com/DoctorLai/utopian-moderator

# Javascript Async and Await
As there is no direct API available to get the ratio by all moderators, it is easy to wrap the API in Javascript async/await syntax.

```
// return the total number for status posts
const getModeratedCount = (id, status) => {
    return new Promise((resolve, reject) => {
        let api = "https://api.utopian.io/api/posts/?moderator=" + id + "&status=" + status + "&skip=0&limit=1";    
        fetch(api, {mode: 'cors'}).then(validateResponse).then(readResponseAsJSON).then(function(result) {
            resolve(result.total);
        });        
    });
}

// async get two numbers
const getRatio = async(id) => {
    let accepted = await getModeratedCount(id, "reviewed");
    let rejected = await getModeratedCount(id, "flagged");
    return accepted / (accepted + rejected) * 100;
}
```

To update the fields in the table, use something like this:

```
getRatio("justyy").then(r => {
    if (r <= 60) {
        $('div#approved_ratio_' + _tid).html("<B><font color=green>" + r.toFixed(2) + "</font></B>");
    } else if (r <= 80) {
        $('div#approved_ratio_' + _tid).html("<B><font color=orange>" + r.toFixed(2) + "</font></B>");
    } else {
        $('div#approved_ratio_' + _tid).html("<B><font color=red>" + r.toFixed(2) + "</font></B>");
    }
});
```

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Utopian Moderator Chrome Extension: Improved Supervisor Tab by Showing Acceptance Rate and Pie Chart](https://steemit.com/@justyy/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart)
