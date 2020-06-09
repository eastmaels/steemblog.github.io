
---
title: 'How to Set Up Your On-Call Duty when Your Witness is Missing a Block?'
permlink: how-to-set-up-your-on-call-duty-when-your-witness-is-missing-a-block
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-09 18:23:24
categories:
- witness-tool
tags:
- witness-tool
- programming
- witness-node
- whalepower
- steem-tool
- steem-dev
- ifttt
thumbnail: 'https://cdn.steemitimages.com/DQmeUtmtxvsoPnZiqntQTc8HLa4nGfGs1viShbKWwNGzZ3W/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


What is On-Call? You know many Software Engineers at Big Companies need to do On-Call Duties to fix service related issues when they arise.

Yesterday, I presented a utility to switch your node in case of missing too many blocks. But wouldn't it be a lot nicer if we can be notified (be paged) when this happens?

Please be warned that if you like less intrusive notification, you should go for SMS (which should be easy to set up using the method below) or even just email.

Post: [Open Source: Auto Switch Your Witness Node In the Event of Failure](https://steemit.com/witness-category/@justyy/open-source-auto-switch-your-witness-node-in-the-event-of-failure)
Open Source Utility: https://github.com/DoctorLai/SteemWitnessAutoSwitch

This is how we can set up the on-call when missing blocks.

# IFTTT
You may have heard of IFTTT which stands for If This Then That. This is a powerful service that allows you to connect two or more services. 

First, you would need to register a IFTTT account, then you would need to connect the "Webhooks" service which allows you to send a message to the hook. Then, the "That" part would be to connect the "Voip Call" part which will call you - alternatively, you could choose other notification methods such as SMS or Emails, or even make a tweet if you like!


![image.png](https://cdn.steemitimages.com/DQmeUtmtxvsoPnZiqntQTc8HLa4nGfGs1viShbKWwNGzZ3W/image.png)

![image.png](https://cdn.steemitimages.com/DQmZsYpkYR9WAzcd6A9zyW2xnJxi7YCX6TN3VLMTGNRyEmy/image.png)


![image.png](https://cdn.steemitimages.com/DQmaDD5ZTDd8DcwxDSbr1qbPFJs1HcbhpS5w4ivjgCEYvmZ/image.png)


![image.png](https://cdn.steemitimages.com/DQmXDSwJGimEdkCQi76szNbscLgSW5idAyv9zwHEx9p7XGY/image.png)


This is how the final recipe looks like:

![image.png](https://cdn.steemitimages.com/DQmbPn5A7HJZzia8QPNezNNH1AswZTzRk3Wt8znbWy89ixc/image.png)

Note that we can pass a *value1* parameter to report the current missing blocks.
Here is how you send a notification message to the webhook aka "This"

> curl -X POST -H "Content-Type: application/json"  -d '{"value1":"123"}'  https://maker.ifttt.com/trigger/{steem-witness}/with/key/YourIFTTTKeyHere

You will see this message on success.
**Congratulations! You've fired the steem-witness event**

Then, on the github code https://github.com/DoctorLai/SteemWitnessAutoSwitch/blob/master/monitor-witness.js  , you can modify a little bit:

```
const execSync = require('child_process').execSync;

function reportMissing(missed) {
    log("Report missing: " + missed);
    // TODO: You can send a email/SMS here
   execSync('curl -X POST -H "Content-Type: application/json" -d \'{"value1":"' + missed + '"}\' 
 https://maker.ifttt.com/trigger/{steem-witness}/with/key/YourIFTTTKeyHere');
}
```

That is it, everytime there is a missing block, you will get a call who will tell you total missed blocks aka the parameter *value1*


![image.png](https://cdn.steemitimages.com/DQmVmc4wjiJ1Hv9d1uyFmxaZe5piMH7dSRtp3GaZqv7jYqY/image.png)

![image.png](https://cdn.steemitimages.com/DQmWYGifPn4VcSmPGhWeeaS3weokmJssKu8C3eUPDkrhPno/image.png)


![image.png](https://cdn.steemitimages.com/DQmS85JM5C35dVhazMqDYFnEZ9LHfgXXgo79GSqv4cid97n/image.png)

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

This page is synchronized from the post: ['How to Set Up Your On-Call Duty when Your Witness is Missing a Block?'](https://steemit.com/@justyy/how-to-set-up-your-on-call-duty-when-your-witness-is-missing-a-block)
