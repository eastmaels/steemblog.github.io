
---
title: 'Find RC Percentage in Javascript | RC小于50%就不跟随点赞了~'
permlink: find-rc-percentage-in-javascript-or-rc-50
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-14 02:12:39
categories:
- cn
tags:
- cn
- cn-programming
- cn-reader
- cn-curation
- steemjs
- sct
- sct-cn
thumbnail: 'https://cdn.steemitimages.com/DQmSn7mTmTELBpyNmqyrvWotMJGNPc6ww6Dn9v3eRD9Sr7V/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have a trail for both voting and downvoting. These are controlled by myself - i.e. a NodeJs application managed by PM2.

For Javascript, there is only 1 library which is the steem-js. The latest version is 0.7.7: https://github.com/steemit/steem-js/releases/tag/v0.7.7

And, there is no easy way to get the RC by using the library. Luckily I found @anyx  who provides a few RESTFUL APIs on his full Node.

![image.png](https://cdn.steemitimages.com/DQmSn7mTmTELBpyNmqyrvWotMJGNPc6ww6Dn9v3eRD9Sr7V/image.png)
// to see the ping time for other nodes, please visit https://steemyy.com

And the API is: https://anyx.io/v1/rc_api/find_rc_accounts?accounts=justyy (replace the ID)

JSON response, nice.
```
{
  "rc_accounts": [
    {
      "account": "justyy",
      "max_rc": "166759220940074",
      "max_rc_creation_adjustment": {
        "amount": "2020748973",
        "nai": "@@000000037",
        "precision": 6
      },
      "rc_manabar": {
        "current_mana": "166759220940074",
        "last_update_time": 1584150960
      }
    }
  ]
}
```

Then, we can easily compute the percentage by using the current_mana/max_rc. To wrap this up in a function:

```
function getPercentageRC(id) {
    const url = "https://anyx.io/v1/rc_api/find_rc_accounts?accounts=" + id;
    return new Promise((resolve, reject) => {
        fetch(url).then(data => {
            data.json().then(json => {
                const max_rc = json.rc_accounts[0].max_rc;
                const cur_rc = json.rc_accounts[0].rc_manabar.current_mana;
                resolve(cur_rc / max_rc);
            });
        });    
    });
}
```

Then you can use this like this:

```
async function test() {
  const PerRC = await getPercentageRC('justyy');
  //.. do something with PerRC
}
```

Or like this:

```
getPercentageRC('justyy').then(rc => {
    // do something with rc.
});
```

--------------- 以下是中文------------------------------

很久很久之前忽悠了些亲朋好友加入了“足球队”，也就是把 posting_key 放心交给行长，好处是：行长帮你收取收益 (claim rewards), 然后还有就是加入行长的点赞团队。

鱼老板的几个号玩游戏玩到 没有RC了，于是需要判断RC，如果低于50%就不参于点赞了。

其它库比如 beem, dsteem 都有相应的获得 RC 的方法，而 steem-js 却没有相应的API，找了一下，发现 anyx 有提供一个 restful api.

代码见上面英文的。加入后，点赞团如果RC小于50%就啥也不错。

![image.png](https://cdn.steemitimages.com/DQmWCL3L5HyA7BpvGc4scmSrJrTVqaphiEEtY3zhRUhNfjc/image.png)

### 如果你有些小号，不发贴，不想管理 可以把 post key 发给我哈（微信）

**Steem On!~**

------------------

### @justyy is the author of https://steemyy.com and he supports and promotes the CN community.

### Vote for My Witness 支持行长当STEEM的见证人，每人可以投30票。
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
Or [Vote @justyy via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=justyy&approve=1) **Thank you!**
或者 直接设置行长为见证人代理吧 - 投了行长就等于支持CN区的所有见证人。
Or voting me as [a witness proxy](https://beta.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

- - -

This page is synchronized from the post: ['Find RC Percentage in Javascript | RC小于50%就不跟随点赞了~'](https://steemit.com/@justyy/find-rc-percentage-in-javascript-or-rc-50)
