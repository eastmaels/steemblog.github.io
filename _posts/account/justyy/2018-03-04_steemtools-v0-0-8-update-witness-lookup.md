
---
title: 'SteemTools v0.0.8 Update: Witness Lookup'
permlink: steemtools-v0-0-8-update-witness-lookup
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-04 18:54:57
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- steemtools
- steemapps
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520189304/pt6yiejzsnovwa2xgxh0.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## SteemTools
[[SteemTools](https://helloacm.com/steemtools-v0-0-8-update-witness-lookup/)](https://helloacm.com/steemtools-v0-0-8-update-witness-lookup/) is a Chrome Extension that aims to provide useful tools and data for SteemIt Users.

## Github
https://github.com/DoctorLai/SteemTools/

## Previous Contributions
- [SteemTools v0.0.7](https://helloacm.com/steemtools-v0-0-7-query-powerdown-status-add-sbds-api-server-backend-fix-voting-power/) Query Powerdown Status, Add SBDS API Server (Backend), Fix Voting Power
- [SteemTools v0.0.6](https://helloacm.com/steemtools-v0-0-6-check-who-downvoted-you-api-server-ping/) Check Who Downvoted You + API Server Ping
- [SteemTools v0.0.5](https://helloacm.com/steemtools-v0-0-5-reveal-deleted-comments-load-save-steem-js/) Reveal Deleted Comments, Load & Save Steem-Js!
- [SteemTools v0.0.4](https://helloacm.com/add-steem-js-console-to-steemtools/) Add 'Steem-JS' console to SteemTools!
- [SteemTools v0.0.3](https://helloacm.com/steemtools-v0-0-3-new-features-query-delegators-and-nodes-server-configuration/) New Features: Query Delegators and Nodes/Server Configuration
- [SteemTools v0.0.2](https://helloacm.com/steemtools-v0-0-2-new-features-query-delegatees-and-basic-search-and-more/) New Features: Query Delegatees and Basic Search and More
- [SteemTools v0.0.1](https://helloacm.com/chrome-extension-steemtools-v0-0-1/)

## Technology Stack
Javascript that runs in the Chrome Browser (Chrome Extension)

## Chrome Webstore
It is online, and you can install SteemTools via:
https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

If you are using Firefox, you can still install this Extension by Chrome Extension [Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/).

## New Features of SteemTools v0.0.8
[Commit here](https://github.com/DoctorLai/SteemTools/commit/46119deb1e441f70d6c53eb5d5a361c0b3df32f9). This version has the following changes:
1. Fix Reputation Bug Error (see https://github.com/steemit/steem-js/pull/345)
2. Add Witness Lookup
3. Save Source code in the Steem-Js Console.

## Witness
Get witness details.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520189304/pt6yiejzsnovwa2xgxh0.png)

None-witness ID is entered.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520189320/h3dvlnqcpftanyw25yqy.png)

## Get Steemit Witness in Javascript
```
// find witness information
// search a id when press Enter
textPressEnterButtonClick($('input#witness_id'), $('button#witness_btn'));
$('button#witness_btn').click(function() {        
    let id = prepareId($('input#witness_id').val());
    let server = getServer();        
    server = server || default_server;
    $('div#witness_div').html('<img src="images/loading.gif"/>');
    if (validId(id)) {
        // disable the button while API is not finished yet.
        $('button#witness_id').attr("disabled", true);
        $.ajax({ 
            dataType: "json",
            url: "https://" + server + "/api/steemit/witness/?cached&id="+id,
            cache: false,
            success: function (response) {
                let result = response;
                if (result && result.length > 0) {
                    let s = '<h4>Witness Details for ' + getSteemUrl(id) + '</h4>';
                    s += '<table id="dvlist_witness">';
                    s += '<thead><tr><th style="width:30%">Key</th><th>Value</th></tr></thead><tbody>';
                    s += "<tr><td>signing_key</td><td><pre>" + result[0]['signing_key'] + "</pre></td></tr>";

                    const addKeyValue = (result, x) => {
                        return "<tr><td>" + x + "</td><td>" + result[0][x] + "</td></tr>";
                    }

                    s += addKeyValue(result, "total_missed");
                    s += addKeyValue(result, "last_confirmed_block_num");
                    s += addKeyValue(result, "running_version");
                    s += "<tr><td>witness_post</td><td><a target=_blank href='" + result[0]['url'] + "'>" + result[0]['url'] + "</a></td></tr>";
                    s += addKeyValue(result, "votes");
                    s += addKeyValue(result, "votes_count");
                    s += addKeyValue(result, "last_aslot");
                    s += addKeyValue(result, "hardfork_version_vote");
                    s += addKeyValue(result, "hardfork_time_vote");
                    s += addKeyValue(result, "created");
                    s += addKeyValue(result, "account_creation_fee");
                    s += addKeyValue(result, "account_creation_fee_symbol");
                    s += addKeyValue(result, "maximum_block_size");
                    s += addKeyValue(result, "sbd_interest_rate");
                    s += addKeyValue(result, "sbd_exchange_rate_base");
                    s += addKeyValue(result, "sbd_exchange_rate_base_symbol");
                    s += addKeyValue(result, "sbd_exchange_rate_quote");                        
                    s += addKeyValue(result, "sbd_exchange_rate_quote_symbol");                        
                    s += addKeyValue(result, "last_sbd_exchange_update");                        
                    
                    s += '</tbody>';
                    s += '</table>';
                    $('div#witness_div').html(s);
                    sorttable.makeSortable(document.getElementById("dvlist_witness"));
                } else {
                    $('div#witness_div').html("<font color=blue>It could be any of these: (1) Not a Witness Account (2) Invalid ID (3) API or SteemSQL server failed. Contact <a rel=nofollow target=_blank href='https://steemit.com/@justyy/'>@justyy</a> if you are not sure. Thanks!</font>");
                }          
            },
            error: function(request, status, error) {
                $('div#witness_div').html('<font color=red>API/SteemSQL Server (' + server + error + ') is currently offline. Please try again later!' + request.responseText + '</font>');
            },          
            complete: function(data) {
                // re-enable the button
                $('button#witness_btn').attr("disabled", false);
            }
        });
    } else {
        alert('Not a Valid Steem ID.');
        $('div#witness_div').html('');
    }        
});   
```

## Roadmap of Steem Tools
- UI Language Setting
- [Powerdown Lookup](https://helloacm.com/tools/steemit/powerdown/)
- Add [Downvote Checker](https://helloacm.com/tools/steemit/who-downvote-you/)
- Add [Delegator](https://helloacm.com/tools/steemit/delegators/)/[Delegatee](https://helloacm.com/tools/steemit/delegatees/) List Checker
- Steemit [Top 100 Delegations](https://helloacm.com/tools/steemit/top-delegations/)
- SteemIt [Followers](https://helloacm.com/tools/steemit/who-has-not-voted/)/[Votes](https://helloacm.com/tools/steemit/who-has-not-voted/) Checker
- Steemit [Incoming Votes Report](https://helloacm.com/tools/steemit/lastvotes/)
- Steemit [Payout Report](https://helloacm.com/tools/steemit/payout/)
- Steemit [Outgoing Votes Report](https://helloacm.com/tools/steemit/outgoing/)
- Steemit [Who Resteem Your Posts?](https://helloacm.com/tools/steemit/reblogs/)
- Steemit [Recover Deleted Posts/Comments](https://helloacm.com/tools/steemit/deleted-comments/)
- Steemit [Powerdown Status](https://helloacm.com/tools/steemit/powerdown/)
- and [more tools](https://helloacm.com/tools/steemit)

## License
[MIT](https://github.com/DoctorLai/SteemTools/blob/master/LICENSE)

## Contribution Welcome
Github: https://github.com/DoctorLai/SteemTools/

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request.

## Chrome Webstore
Install the [SteemTools Chrome Extension](https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn) Now!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-v0-0-8-update-witness-lookup">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools v0.0.8 Update: Witness Lookup](https://steemit.com/@justyy/steemtools-v0-0-8-update-witness-lookup)
