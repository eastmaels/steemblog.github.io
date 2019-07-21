
---
title: 'JS版一次领取所有代领取SCOT代币'
permlink: jsscot-8shgjxo27y
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-20 19:29:27
categories:
- palnet
tags:
- palnet
- lassecash
- sct
- mediaofficials
- cn-reader
- cn
- marlians
- jjm
- zzan
- actnearn
- neoxian
- cn-programming
- programming
- whalepower
thumbnail: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center><img src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg" alt="" /><br/>
    (Image source: <a href="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg">Pixabay</a>)</center>

昨天看到@holger80介绍怎么通过python一次性领取所有待领的Steem-engine代币： <a href="https://steempeak.com/scot/@holger80/how-to-claim-all-pending-token-rewards-at-once-improved-claim-command">How to claim all pending token rewards at once - improved claim command</a>

我对Python不熟，加上Python在windows系统安装麻烦，所以我一般使用JS。

之前用JS写过一个自动领取代币的小程序，现在SCOT支持一次领取多个代币后，对现有的版本进行了小修改。有兴趣的可以使用：

<pre><code class="">const fetch = require("node-fetch");
const request = require('request');
const steem = require('steem');
const account = 'steem id';//你的steem id
const wif = 'posting Key'; //你的发帖密钥

(async() =&gt; {
    let tokens = await getClaimable(account);
    if (tokens.length &gt; 0) {
        claimToken(tokens);
    } else {
        console.log("Nothing to claim.")
    }

})();

function claimToken(tokens) {
    let json = [];
    for (let i in tokens) {
        json.push({
            symbol: tokens[i].symbol
        })
    }
    steem.broadcast.customJson(wif, [], [account], 'scot_claim_token', JSON.stringify(json), (err, result) =&gt; {
        if (err)
            console.log(err);
        else {
            console.log(tokens.length + " tokens claimed");
        }

    });

}

async function getClaimable(account) {
    let claimable = [];
    let token = await(await fetch('https://scot-api.steem-engine.com/@' + account, {
                method: 'GET'
            })).json();
    for (let i in token) {
        if (token[i].pending_token &gt; 0) {
            claimable.push({
                symbol: i,
                token: token[i].pending_token
            })
        }
    }
    return claimable;
}


</code></pre>

如果你不会编程，也不会运行程序。那你可以使用阿盐@robertyan弄的自动领取SCOT 代币奖励的程序. 具体查看：<a href="https://steempeak.com/steem-engine/@robertyan/4syhlf-autopilot-claim-scot-token-rewards-automatically-or-scot">自动领取 SCOT 代币奖励</a>

自己动手弄点小程序也是挺有意思的，@windenchanter来尝试一下吧。 ---

- - -

This page is synchronized from the post: ['JS版一次领取所有代领取SCOT代币'](https://steemit.com/@ericet/jsscot-8shgjxo27y)
