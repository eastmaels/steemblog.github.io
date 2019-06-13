
---
title: 'SteemTool v0.0.9 - Sending Money to Multiple Addresses!'
permlink: steemtool-v0-0-9-sending-money-to-multiple-addresses
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-08 02:08:18
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- steemtools
- steemapps
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520474732/a7f6pjrojbkk4eox0mzc.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## SteemTools
[[SteemTools](https://helloacm.com/steemtool-v0-0-9-sending-money-to-multiple-addresses/)](https://helloacm.com/steemtools-v0-0-8-update-witness-lookup/) is a Chrome Extension that aims to provide useful tools and data for SteemIt Users.

## Github
https://github.com/DoctorLai/SteemTools/

## Previous Contributions
- [SteemTools v0.0.8](https://helloacm.com/steemtools-v0-0-8-update-witness-lookup/) Update: Witness Lookup
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

## New Features of SteemTools v0.0.9
[Commit here](https://github.com/DoctorLai/SteemTools/commit/9423abb542ece36d3ecf05bb97b476e45ed3a371). This version has the wallet tab that allows you to send money easily to multiple addresses at the same time.

## Wallet Tab
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520474732/a7f6pjrojbkk4eox0mzc.png)

Click `Send` requires a confirmation.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520474756/ziobsidp0ogvtrkw7ci9.png)

Success!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520474776/grbjsum0dlqxr8kjwkdc.png)

You need to configure you Steem ID and Private Active Key if you want to use this feature!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520474977/i6jnumhad4hkh9xgl78w.png)

PS: Your Keys are only stored locally in your Chrome browser!

# Steem-Js Sending Money
```
if (confirm("Send " + amount.toFixed(3) + " " + unit + " to " + addresses.join(',') + " with MEMO=" + memo + "?")) {
    let active_key = $("input#posting_key").val().trim();                              
    for (let i = 0; i < count; ++ i) {
        let who = addresses[i].trim().replace('@', '');
        if (who.length > 0) {
            logit($('textarea#console_wallet'), "Sending " + amount.toFixed(3) + " " + unit + " to @" + who + "...");
            steem.api.setOptions({ url: $("select#nodes").val() });
            steem.broadcast.transfer(active_key, from_user, who, amount + " " + unit, memo, function(err, result) {
                if (err) {
                    logit($('textarea#console_wallet'), err);
                } else {
                    console.log(result);
                    logit($('textarea#console_wallet'), amount.toFixed(3) + " " + unit + " sent from @" + from_user + " to @" + who);
                }
            });
        }
    }
}
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtool-v0-0-9-sending-money-to-multiple-addresses">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTool v0.0.9 - Sending Money to Multiple Addresses!](https://steemit.com/@justyy/steemtool-v0-0-9-sending-money-to-multiple-addresses)
