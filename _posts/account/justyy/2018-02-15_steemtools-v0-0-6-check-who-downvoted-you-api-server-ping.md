
---
title: 'SteemTools v0.0.6 - Check Who Downvoted You + API Server Ping'
permlink: steemtools-v0-0-6-check-who-downvoted-you-api-server-ping
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-15 21:11:09
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- steemdev
- steemstem
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518728882/xwghkcgfud4rlymwbkc7.png
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

## New Features of v0.0.6
Along with bug fixes, code refactoring, [this version](https://helloacm.com/steemtools-v0-0-6-check-who-downvoted-you-api-server-ping/) has the following new features.
1. Tab Downvoters so you can see who downvoted you in the past year.
2. API Server Ping Tests

## Commits
[Here](https://github.com/DoctorLai/SteemTools/commit/24283592c488f23b0df4218982ecb801343d2496)

## Screenshots
API Server Ping Tests
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518728882/xwghkcgfud4rlymwbkc7.png)

Check who downvoted you in the past 365 days.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518728902/mzabnxmnyb9m1fmluhjl.png)

## Some code in the Commit
The following connects to API server and gets a list of downvoters.

```
    // check who downvoted you
    // search a id when press Enter
    textPressEnterButtonClick($('input#downvoters_id'), $('button#downvote_btn'));
    $('button#downvote_btn').click(function() {        
        let id = prepareId($('input#downvoters_id').val());
        let server = getServer();        
        server = server || default_server;
        $('div#downvoters_div').html('<img src="images/loading.gif"/>');
        if (validId(id)) {
            // disable the button while API is not finished yet.
            $('button#downvote_btn').attr("disabled", true);
            $.ajax({ 
                dataType: "json",
                url: "https://" + server + "/api/steemit/downvote/?cached&id="+id,
                cache: false,
                success: function (response) {
                    let result = response;
                    if (result && result.length > 0) {
                        let s = '<h4><B>' + result.length + '</B> downvotes in the past year.</h4>';
                        s += '<table id="downvote_list" class="sortable">';
                        s += '<thead><tr><th>Down-Voter</th><th>Permlink</th><th>Weight %</th><th>Time</th></tr></thead><tbody>';
                        let total = 0;
                        for (let i = 0; i < result.length; ++ i) {
                            s += '<tr>';
                            total += result[i]['weight'] / 100;
                            s += '<td>' + getSteemUrl(result[i]['voter']) + '<BR/><img style="width:75px;height:75px" src="https://steemitboard.com/@' + result[i]['voter'] + '/level.png"></td>';
                            s += '<td>' + '<a target=_blank rel=nofollow href="https://steemit.com/@' + id + '/' + result[i]['permlink'] + '">' + result[i]['permlink'] + '</a></td>';
                            s += '<td>' + (result[i]['weight']/100).toFixed(2) + '</td>';
                            s += '<td>' + result[i]['time'] + '</td>';
                            s += '</tr>';
                        }              
                        s += '<tfoot><tr>';
                        s += '<th>Total: </th><th></th><th></th><th>' + total.toFixed(2) + '</th><th></th>'; 
                        s += '</tr></tfoot>';
                        s += '</table>';                 
                        $('div#downvoters_div').html(s);
                        sorttable.makeSortable(document.getElementById("downvote_list"));
                    } else {
                        $('div#downvoters_div').html("<font color=blue>It could be any of these: (1) No Deleted Comments (2) Invalid ID (3) API or SteemSQL server failed. Contact <a rel=nofollow target=_blank href='https://steemit.com/@justyy/'>@justyy</a> if you are not sure. Thanks!</font>");
                    }          
                },
                error: function(request, status, error) {
                    $('div#downvoters_div').html('<font color=red>API/SteemSQL Server (' + server + error + ') is currently offline. Please try again later!' + request.responseText + '</font>');
                },          
                complete: function(data) {
                    // re-enable the button
                    $('button#downvote_btn').attr("disabled", false);
                }
            });
        } else {
            alert('Not a Valid Steem ID.');
            $('div#downvoters_div').html('');
        }        
    });  
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-6-check-who-downvoted-you-api-server-ping">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.6 - Check Who Downvoted You + API Server Ping](https://steemit.com/@justyy/steemtools-v0-0-6-check-who-downvoted-you-api-server-ping)
