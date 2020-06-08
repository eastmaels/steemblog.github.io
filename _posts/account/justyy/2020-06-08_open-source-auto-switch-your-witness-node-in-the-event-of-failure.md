
---
title: 'Open Source: Auto Switch Your Witness Node In the Event of Failure'
permlink: open-source-auto-switch-your-witness-node-in-the-event-of-failure
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-08 18:28:54
categories:
- witness-tool
tags:
- witness-tool
- programming
- witness-node
- whalepower
- steem-tool
- steem-dev
thumbnail: 'https://cdn.steemitimages.com/DQmd38mcjMAznHsoSMjDCsnRJmVJALuAtbWRHE1V21tGNJW/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My main witness node crashed for no reason when I was asleep around 1.AM midnight. 


![image.png](https://cdn.steemitimages.com/DQmd38mcjMAznHsoSMjDCsnRJmVJALuAtbWRHE1V21tGNJW/image.png)


Thanks for @fancybrothers who notified me on the discord channel.  When I got the message, it has been 5 hours and I 've missed 310 blocks.

Sh*t happens!

Thus, I decide to write a tool that monitors the witness node, in case of failure, it will detect and switch to your backup node. 

Project: https://github.com/DoctorLai/SteemWitnessAutoSwitch

It is easy to use: you first need to configure:

```
{
    "account": "Your Steem Witness Account",
    "key": "Your Active Key",
    "signing_keys": [
        "Witness Signing Key 1",
        "Witness Signing Key 2",
        "STM1111111111111111111111111111111114T1Anm"
    ],
    "url": "https://steemyy.com",
    "fee": "3.000 STEEM",
    "interval": 60,
    "period": 360,
    "threshold": 4  
}
```

Make the last siging key disabled one so it will disable your node in case all your witness nodes are down.  I have taken out the code to send a email for notification since it is quite customised to my settings but you can easily add it, the easily way to send a email would be to launch the `mail` utility.


![image.png](https://cdn.steemitimages.com/DQmRhQtAkAgTHoARkuQLAtAeY5ZmqioDp5dg2W3phTocg2S/image.png)


The default setting is to switch if there are 4 missed blocks in the last 6 minutes. You can adjust if you are outside TOP 20. The `interval` is the time interval to check if there are new misses. 

Last but not least, I would recommend running this using `screen` or `pm2`

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Open Source: Auto Switch Your Witness Node In the Event of Failure'](https://steemit.com/@justyy/open-source-auto-switch-your-witness-node-in-the-event-of-failure)
