
---
title: 'Utopian v0.0.12: Search Top Projects!'
permlink: utopian-v0-0-12-search-top-projects
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-21 23:17:18
categories:
- utopian-io
tags:
- utopian-io
- programming
- steemtools
- steemapps
- steemstem
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519254880/yaz3yqyxfxofnolhvx4f.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Utopian Moderators & Supervisors
[Utopian Moderators & Supervisors](https://helloacm.com/utopian-v0-0-12-search-top-projects/) is a Chrome Extension that can be installed via Chrome Webstore:
https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

Utopian Moderators & Supervisors, as its name suggests, help the moderators & supervisors during their moderation or supervision by providing a few useful tools, charts and statistics.

# Technology Stack
Javascript that runs in Chrome.

# Previous Contributions
- v0.0.11 [ Adding Statistics Charts, Improved Reputation Formatter and Sponsor Chart](https://helloacm.com/utopian-v0-0-11-adding-statistics-charts-improved-reputation-formatter-and-sponsor-chart/)
- v0.0.10 [Utopian Moderators & Supervisors v0.0.10 – Steem Nodes Ping Tool + Sponsors Tab](https://helloacm.com/utopian-moderators-supervisors-v0-0-10-steem-nodes-ping-tool-sponsors-tab/)
- v0.0.9 [Utopian Chrome Extension v0.0.9:  Integrate Stats API + Add Node List](https://helloacm.com/utopian-chrome-extension-v0-0-9-integrate-stats-api-add-node-list/)
- v0.0.8 [Make Utopian Moderator](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/) [Chrome Extension Perfect by Adding Posts and Tools Tab](https://steemit.com/utopian-io/@justyy/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab)
- v0.0.7 [Utopian Moderator Chrome Extension](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/): [Improved Supervisor Tab by Showing Acceptance Rate and Pie Chart](https://steemit.com/utopian-io/@justyy/utopian-moderator-chrome-extension-improved-supervisor-tab-by-showing-acceptance-rate-and-pie-chart)
- v0.0.6 [Adding Supervisor Tab](https://helloacm.com/adding-supervisor-tab-to-utopian-moderator-chrome-extension/) to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-supervisor-tab-to-utopian-moderator-chrome-extension)
- v0.0.5 [Adding Unreviewed Contributions](https://helloacm.com/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension/) + [List of Approved/Rejected Posts to Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-unreviewed-contributions-list-of-approved-rejected-posts-to-utopian-chrome-extension)
- v0.0.4 [Adding Approved/Rejected Stats](https://helloacm.com/adding-approved-rejected-stats-and-showing-friends-vp-rep-to-utopian-moderator-chrome-extension/), Showing Friends' VP/Rep to [Utopian Moderator Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-approved-rejected-stats-showing-friends-vp-rep-to-utopian-moderator-chrome-extension)
-  v0.0.3 [Adding Moderators Tab](https://helloacm.com/adding-moderators-tab-to-utopian-chrome-extension/) to [Utopian Chrome Extension!](https://steemit.com/utopian-io/@justyy/adding-moderators-tab-to-utopian-chrome-extension)
- v0.0.2 Adding [Easy Switch Between Utopian and Steem Posts](https://helloacm.com/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension/)  to [Utopian Moderator Chrome Extension](https://steemit.com/utopian-io/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension)
- v0.0.1 The First [Utopian Moderator](https://helloacm.com/the-first-utopian-moderator-chrome-extension/) [Chrome Extension](https://steemit.com/utopian-io/@justyy/the-first-utopian-moderator-chrome-extension)

## This Commits
[**Commits**](https://github.com/DoctorLai/utopian-moderator/commit/012a49ca907c799a2ead6a29aa8f07c9e1ef84bf) 

It adds the following features:

1. Add User Image Avatar in Moderator Tab.
2. Add Projects Tab which allows you to search top projects.

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519254880/yaz3yqyxfxofnolhvx4f.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519254902/jiximgrfbpvsm2nuefxm.png)

# Javascript calls Utopian Top Projects API
```
    // top projects and contributions
    $('button#btn_top').click(function() {
        $('div#top_result').html("<img id='loading' src='images/loading.gif' />");
        let limit = parseInt($('input#top_limit').val());
        let start = $('input#top_start').val().trim();
        let end = $('input#top_end').val().trim();
        let sort1 = $('select#top_sort1').val().trim();
        let sort2 = "projects";
        let only_new = $('input#top_new').is(":checked") ? "true" : "false";
        let api = "https://api.utopian.io/api/posts/top?limit=" + limit + "&start_date=" + start + "&end_date=" + end + "&sort_by=" + sort1 + "&retrieve_by=" + sort2 + "&only_new=" + only_new;
        logit("calling " + api);
        saveSettings(false);
        $.ajax({
            type: "GET",
            url: api,
            success: function(result) {
                let s = "<table style='width:100%'>";
                s += "<thead>";
                s += "<tr><th>Project Name</th><th>Description</th><th>Count<th>Rewards</th><th>License</th></tr>";
                s += "</thead>";                                
                let len = result.length;
                for (let i = 0; i < len; ++ i) {
                    s += "<tr>";
                    let github = result[i].github;
                    let lic = github.license;
                    let home_url = github.home_url;
                    let project_name = github['name'];
                    let description = github['description'];
                    let count = result[i]['count'];
                    let rewards = result[i]['rewards'];
                    let license = lic ? lic['name'] : '';
                    s += "<td><a target=_blank href='" + home_url + "'>" + project_name + "</a></td>";
                    s += "<td>" + description + "</td>";
                    s += "<td>" + count + "</td>";
                    s += "<td>" + rewards.toFixed(3) + "</td>";
                    s += "<td>" + license + "</td>";                    
                    s += "</tr>";
                }                
                s += "</table>";
                $('div#top_result').html(s);
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
    });
```

# Roadmap
Any good suggestions, please shout at @justyy !

# Chrome Webstore
Install the [Utopian Chrome Extension](https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc) Now!

# Contribution Welcome
Github: https://github.com/DoctorLai/utopian-moderator
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/utopian-v0-0-12-search-top-projects">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Utopian v0.0.12: Search Top Projects!](https://steemit.com/@justyy/utopian-v0-0-12-search-top-projects)
