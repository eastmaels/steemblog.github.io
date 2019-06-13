
---
title: 'The Steem Conversations Viewer!'
permlink: the-steem-conversations-viewer
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-02 12:58:03
categories:
- utopian-io
tags:
- utopian-io
- development
- busy
- witness-category
- steemtools
thumbnail: 'https://ipfs.busy.org/ipfs/QmbbeGRoTMbTp3YbZFctKGrmNXmGJSat2rH9GxzDgoVZUu'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# New Project - Steem Conversations Viewer
Steem Conversations Viewer has now been made alive and can be accessed via the following URL:
https://steemyy.com/steem-conversations/

Want to quickly locate your conversations between you and your friend on the steem blockchain? This tool will retrieve the conversations (comments) between two steem accounts - and you can search for a specific keywords.

# Screenshot
![image.png](https://ipfs.busy.org/ipfs/QmbbeGRoTMbTp3YbZFctKGrmNXmGJSat2rH9GxzDgoVZUu)

# Technologies
JQuery and Steem-JS. It may be easier to use the @steemsql or other centralised database (cached data) - but this tool will directly fetch the data from the blockchain via two threads.

Also... I am kinda struggling to pay the 20 SBD fee for @steemsql and this tool will not be impacted whatsoever.

# Github Project
https://github.com/DoctorLai/SteemConversationsViewer

# License
[GPL](https://github.com/DoctorLai/SteemConversationsViewer/blob/master/LICENSE)

# Roadmap
1. To make the process faster - currently two threads are in parallel search entire account blockchain
2. Add more search criteras such as time period, NOT-containing words etc.
3. Consider revisions - currently the revision comments are skipped because they start with "@@"
4. Keyword searches are currently done via simple replacing without considering the word boundary for example, searching "to" will match "today" - would be nice to use regex to enforce strict searches using "\b"

------------------------------------------------
### My Witness Campagin
Support me and my work: [my witness campagin](https://steemit.com/witness-category/@justyy/justyy-just-another-witness):
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

### Some of my contributions: 
1. [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
2. [VPS Database](https://anothervps.com/vps-database/)
3. [Video Downloader](https://weibomiaopai.com/download-video-parser.php)

- - -

This page is synchronized from the post: ['The Steem Conversations Viewer!'](https://steemit.com/@justyy/the-steem-conversations-viewer)
