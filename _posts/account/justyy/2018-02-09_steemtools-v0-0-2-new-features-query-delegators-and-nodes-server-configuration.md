
---
title: 'SteemTools v0.0.3 New Features: Query Delegators and Nodes/Server Configuration'
permlink: steemtools-v0-0-2-new-features-query-delegators-and-nodes-server-configuration
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-09 20:13:06
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemdev
- steemstem
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518207017/ipqt7lun53aqrdnp4sa4.png
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

# Github
https://github.com/DoctorLai/SteemTools/

# Previous Contributions
- [SteemTools v0.0.2](https://steemit.com/utopian-io/@justyy/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more)
- [SteemTools v0.0.1](https://helloacm.com/chrome-extension-steemtools-v0-0-1/)

# Technology Stack
Javascript that runs in the Chrome Browser (Chrome Extension)

## Chrome Webstore
It is online, and you can install SteemTools via:
https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

If you are using Firefox, you can still install this Extension by [Chrome Extension Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/)

## New Features of v0.0.3
Along with Bug fixes and code refactoring, [this new version](https://helloacm.com/steemtools-v0-0-3-new-features-query-delegators-and-nodes-server-configuration/) adds the following features:

1. Allow users to query the list of delegators.
2. Allow users to specify a different node when querying the API or Steem Blockchain.

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/5df76a09c315d3abdf39d1f07a2bfad365e85b39)

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518207017/ipqt7lun53aqrdnp4sa4.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518207035/x7yqm9aecwojeu3kpi0f.png)

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

# Javascript Code that gets a a list of SteemIt delegators
```
    // find a list of delegators
    // search a id when press Enter
    textPressEnterButtonClick($('input#delegatorid'), $('button#delegators_btn'));
    $('button#delegators_btn').click(function() {
        let id = prepareId($('input#delegatorid').val());
        let server = getServer();
        server = server || default_server;
        $('div#delegators_div').html('<img src="images/loading.gif"/>');
        if (validId(id)) {
            $.ajax({ 
                dataType: "json",
                url: "https://" + server + "/api/steemit/delegators/?cached&id="+id,
                cache: false,
                success: function (response) {
                    let result = response;
                    if (result && result.length > 0) {
                        let s = '<h4><B>' + result.length + '</B> Delegator(s)</h4>';
                        s += '<table id="dvlist2" class="sortable">';
                        s += '<thead><tr><th>Delegator</th><th>Steem Power (SP)</th><th>Vests</th><th>Time</th></tr></thead><tbody>';
                        let total_sp = 0;
                        let total_vest = 0;
                        for (let i = 0; i < result.length; i ++) {
                            total_sp += result[i]['sp'];
                            total_vest += result[i]['vests'];  
                            s += '<tr>';
                            s += '<td><a target=_blank rel=nofollow href="https://steemit.com/@' + result[i]['delegator'] + '">@' + result[i]['delegator'] + '</a><BR/><img style="width:75px;height:75px" src="https://steemitboard.com/@' + result[i]['delegator'] + '/level.png"></td>';
                            s += '<td>' + (result[i]['sp']).toFixed(2) + '</td>';
                            s += '<td>' + (result[i]['vests']).toFixed(2) + '</td>';
                            s += '<td>' + result[i]['time'] + '</td>';
                            s += '</tr>';
                        }              
                        s += '</tbody>';
                        s += '<tfoot><tr>';
                        s += '<th>Total: </th><th></th><th>' + (total_sp.toFixed(2)) + ' SP</th><th>' + (total_vest.toFixed(2)) + ' VESTS</th><th></th>'; 
                        s += '</tr></tfoot>';
                        s += '</table>';
                        $('div#delegators_div').html(s);
                        $('div#delegators_div_stats').html(total_sp.toFixed(2) + " SP, " + total_vest.toFixed(2) + " VESTS");
                        sorttable.makeSortable(document.getElementById("dvlist2"));
                    } else {
                        $('div#delegators_div').html("<font color=blue>It could be any of these: (1) No Delegators (2) Invalid ID (3) API or SteemSQL server failed. Contact <a rel=nofollow target=_blank href='https://steemit.com/@justyy/'>@justyy</a> if you are not sure. Thanks!</font>");
                    }          
                },
                error: function(request, status, error) {
                    $('div#delegators_div').html('<font color=red>API/SteemSQL Server (' + server + error + ') is currently offline. Please try again later!' + request.responseText + '</font>');
                },          
                complete: function(data) {
                
                }
            });
        } else {
            alert('Not a Valid Steem ID.');
        }        
    })            
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-2-new-features-query-delegators-and-nodes-server-configuration">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.3 New Features: Query Delegators and Nodes/Server Configuration](https://steemit.com/@justyy/steemtools-v0-0-2-new-features-query-delegators-and-nodes-server-configuration)
