
---
title: 'Utopian Moderators & Supervisors v0.0.10 - Steem Nodes Ping Tool + Sponsors Tab'
permlink: utopian-moderators-and-supervisors-v0-0-10-steem-nodes-ping-tool-sponsors-tab
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-15 01:53:03
categories:
- utopian-io
tags:
- utopian-io
- steemtools
- steemdev
- steemapps
- steemstem
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518659312/uxftoia8audu684dx0au.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Utopian Moderators & Supervisors
Utopian Moderators & Supervisors is a Chrome Extension that can be installed via Chrome Webstore:
https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

Utopian Moderators & Supervisors, as its name suggests, help the moderators & supervisors during their moderation or supervision by providing a few useful tools, charts and statistics.

# Technology Stack
Javascript that runs in Chrome.

## This Commits
[This Commits version 0.0.10](https://github.com/DoctorLai/utopian-moderator/commit/2c9d77f73b344191cf850d28a419413961cc8fd1) Includes: [Bug Fixes, Minor Tweaks](https://helloacm.com/utopian-moderators-supervisors-v0-0-10-steem-nodes-ping-tool-sponsors-tab/), Code Refactoring, most importantly the following:

1. Steem Node Ping Tool
2. Sponsor Tab includes the list of Witness sponsors and Opted-out sponsors.

## Screenshots
This Ping Tool allows you to know the status and speed from you to the Steem Nodes:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518659312/uxftoia8audu684dx0au.png)

The list of sponsors that are also witnesses.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518659327/nbmjpr1ocqukdfynkhxw.png)

The list of generous sponsors that do not ask for payout.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518659354/pv3uq0ew2knv0mkhhoyy.png)

## Github
https://github.com/DoctorLai/utopian-moderator/

# Previous Contributions
- v0.0.9 [Utopian Chrome Extension v0.0.9:  Integrate Stats API + Add Node List](https://helloacm.com/utopian-chrome-extension-v0-0-9-integrate-stats-api-add-node-list/)
- v0.0.8 [Make Utopian Moderator](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/) [Chrome Extension Perfect by Adding Posts and Tools Tab](https://steemit.com/utopian-io/@justyy/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab)
- v0.0.7 [Utopian Moderator Chrome Extension](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/): [Improved Supervisor Tab by Showing Acceptance Rate and Pie Chart](https://steemit.com/utopian-io/@justyy/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart)
- v0.0.6 [Adding Supervisor Tab](https://helloacm.com/adding-supervisor-tab-to-utopian-moderator-chrome-extension/) to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-supervisor-tab-to-utopian-moderator-chrome-extension)
- v0.0.5 [Adding Unreviewed Contributions](https://helloacm.com/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension/) + [List of Approved/Rejected Posts to Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension)
- v0.0.4 [Adding Approved/Rejected Stats](https://helloacm.com/adding-approved-rejected-stats-and-showing-friends-vp-rep-to-utopian-moderator-chrome-extension/), Showing Friends' VP/Rep to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-approved-rejected-stats-showing-friends-vp-rep-to-utopian-moderator-chrome-extension)
-  v0.0.3 [Adding Moderators Tab](https://helloacm.com/adding-moderators-tab-to-utopian-chrome-extension/) to [Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-moderators-tab-to-utopian-chrome-extension)
- v0.0.2 Adding [Easy Switch Between Utopian and Steem Posts](https://helloacm.com/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension/)  to [Utopian Moderator Chrome Extension](https://steemit.com/utopian-io/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension)
- v0.0.1 The First [Utopian Moderator](https://helloacm.com/the-first-utopian-moderator-chrome-extension/) [Chrome Extension](https://steemit.com/utopian-io/@justyy/the-first-utopian-moderator-chrome-extension)

# Some code changes in this commit
```
// get sponsor data
const getSponsors = (api, dom) => {
    logit("calling " + api);
    $.ajax({
        type: "GET",
        url: api,
        success: function(result) {
            let s = '';
            s += "<h3>Witness Sponsors</h3>";
            let data = result.results;
            let datalen = data.length;
            s += "<ul>";
            let count = 0;
            for (let i = 0; i < datalen; ++ i) {
                if (data[i]['is_witness']) {
                    s += "<li>" + getSteemUrl(data[i].account) + "</li>";
                    count ++;
                }
            }
            s += "</ul>";
            s += "<div>Total: <B>" + count + "</B><div>";
            s += "<h3>Opt-out Sponsors</h3>";
            s += "<ul>";
            count = 0;
            for (let i = 0; i < datalen; ++ i) {
                if (data[i]['opted_out']) {
                    s += "<li>" + getSteemUrl(data[i].account) + "</li>";
                    count ++;
                }
            }
            s += "</ul>";
            s += "<div>Total: <B>" + count + "</B><div>";
            dom.html(s);
        },
        error: function(request, status, error) {
            logit('Response: ' + request.responseText);
            logit('Error: ' + error );
            logit('Status: ' + status);
        },
        complete: function(data) {
            logit("API Finished: " + api);
        }             
    });        
}
```

# Roadmap
Adding more graphs/data/analysis related to Sponsors.
Any good suggestions, please shout!

# Chrome Webstore
Install the [Utopian Chrome Extension](https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc) Now!

# Contribution Welcome
Github: https://github.com/DoctorLai/utopian-moderator
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/utopian-moderators-and-supervisors-v0-0-10-steem-nodes-ping-tool-sponsors-tab">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Utopian Moderators & Supervisors v0.0.10 - Steem Nodes Ping Tool + Sponsors Tab](https://steemit.com/@justyy/utopian-moderators-and-supervisors-v0-0-10-steem-nodes-ping-tool-sponsors-tab)
