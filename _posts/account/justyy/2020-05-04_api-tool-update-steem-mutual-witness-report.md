
---
title: 'API/Tool Update: Steem Mutual Witness Report'
permlink: api-tool-update-steem-mutual-witness-report
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-04 21:42:57
categories:
- witness-category
tags:
- witness-category
- api
- witness-update
- steem-api
- whalepower
- programming
- curl
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmXjjVwhYeUpTegwag88EJypDzYpi51caApKbbN8NkcBGj/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A while ago, I implemented this tool: https://steemyy.com/mutual-witness/  which allows you to see who you vote, who also vote you back, and who hasn't.

The API was based on SteemSQL but fortunately, this can be easily replaced using SteemJS.  

The following SteemJS search the proxy chain:

```
async function getWitnessProxy(id) {
    return new Promise((resolve, reject) => {
        steem.api.getAccounts([id], async function(err, result) {
            if (err || (!result) || (!result[0]) || (result.length === 0)) {
                resolve("");
            }
            if (result && result[0] && result[0].proxy) {
                const data = await getWitnessProxy(result[0].proxy);
                resolve(result[0].proxy + " " + data);
            }  
            resolve("");
        });
    });
} 
```

The API:  https://steemyy.com/api/steemit/witness_voters/?cached&id=STEEM_ID   will return the following JSON object.
```
{
  votes: [],   // who you vote
  both: [],    // and who have voted you back
  not: [],      // and who haven't voted you back
  proxy_chain: []    // the proxy chain separated by space.
}
```

You can invoke the API via GET or POST by passing the parameter `id`.

The GUI tool that calls the API looks something like this: https://steemyy.com/mutual-witness/?id=justyy


![image.png](https://cdn.steemitimages.com/DQmXjjVwhYeUpTegwag88EJypDzYpi51caApKbbN8NkcBGj/image.png)



![image.png](https://cdn.steemitimages.com/DQmQPLdRmeaV3AmFmzxw8aXcgquAYYfmRTwbHx2BTqwn8RB/image.png)



------------

I hope this helps!

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

This page is synchronized from the post: ['API/Tool Update: Steem Mutual Witness Report'](https://steemit.com/@justyy/api-tool-update-steem-mutual-witness-report)
