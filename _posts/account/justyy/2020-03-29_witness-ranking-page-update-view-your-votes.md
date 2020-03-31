
---
title: 'Witness Ranking Page Update: View Your Votes'
permlink: witness-ranking-page-update-view-your-votes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-29 16:47:51
categories:
- witness
tags:
- witness
- steem-tools
- steem-dev
- steem-witness
- programming
- steemjs
thumbnail: 'https://cdn.steemitimages.com/DQmRxr1ALdG4KzjnWRPyjZeuHHtbi7WmurULMtUcxs3z6aJ/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Now you'll be able to view your votes in the witness ranking page. For example:

https://steemyy.com/witness-ranking/?id=justyy


![image.png](https://cdn.steemitimages.com/DQmRxr1ALdG4KzjnWRPyjZeuHHtbi7WmurULMtUcxs3z6aJ/image.png)



This is made possible by the steem-js at the client. Thus, the votes are obtained from your browser, after the DOM of the page finished loading.

Steem Js code: 
```
steem.api.getAccounts(["justyy"], function(err, result) {
  if (!err) {
    var proxy = result[0].proxy;
    var votes = result[0].witness_votes;
    if (proxy !== "") {
        $("div#votes").html(link(result[0].name) + " sets " + link(proxy) + " as witness voting proxy.");
    } else {
        var msg = "<B>" + link(result[0].name) + "</B> has voted <B>" + votes.length + "</B> <span style='background-color:yellow'>witnesses</span>, <B>" + (30 - votes.length) + "</B> slots left.";
        $("div#votes").html(msg); 
        for (var v of votes) {
            $("tr#" + v).children('td, th').css("background-color","yellow");
        }
    }
  } else {  
    $("div#votes").html("<font color=red>" + JSON.stringify(err) + "</font>");  
  }
});
```

If you set a proxy, of course, you will see something different.

![image.png](https://cdn.steemitimages.com/DQmVnZRtL4k5amGPSTxSB57XTxLxzUSn5tdBSRBNHn3ZTs6/image.png)

Yes, I know. I am a terrible UI design, and choosing colours is not my thing. Let me know the options!


This tool is also available in Chinese:  https://steemyy.com/witness-ranking-table/?id=justyy


------------

I hope this helps!

**Steem On!~**

------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could proxy to me via [steemconnect](https://steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) if you are too lazy to vote!**

- - -

This page is synchronized from the post: ['Witness Ranking Page Update: View Your Votes'](https://steemit.com/@justyy/witness-ranking-page-update-view-your-votes)
