
---
title: 'Witness Ranking Table and Account/Witness Page Update: Show How Much Your (Witness/SPS) Vote is'
permlink: witness-ranking-table-and-account-witness-page-update-show-how-much-your-witness-sps-vote-is
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-30 20:12:06
categories:
- witness
tags:
- witness
- whalepower
- steemjs
- programming
- steem-dev
- steem-tools
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmRM7kPsH1JQiw82EaZcRdEN9xGfMWwp3nstbAAV4HSsFP/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://cdn.steemitimages.com/DQmRM7kPsH1JQiw82EaZcRdEN9xGfMWwp3nstbAAV4HSsFP/image.png)


Your vote (used to vote for witness or SPS proposal) is calculated via:

Your SP (your money) + The Proxy votes (Whoever set you proxy)

The proxy votes are accumulated meaning that if A sets proxy to B which sets proxy to C, the vote of C is

The SP of C + The SP of B + The SP of A.

The SteemJS provides  `getAccounts` which has the `proxied_vsf_votes` and `vesting_shares`.

```
steem.api.getAccounts(['justyy'], function(err, result) {
  if (!err) {
      console.log("Proxy votes", result[0].proxied_vsf_votes);
      console.log("Vesting Shares", result[0].vesting_shares);
  } else {
   log("Steem API Error: ", err);
  }
}); 

```

<BR/>
**Run the code** <a href="https://steemyy.com/steemjs/?s=steem.api.getAccounts(%5B%27justyy%27%5D%2C%20function(err%2C%20result)%20%7B%0D%0A%20%20if%20(!err)%20%7B%0D%0A%20%20%20%20%20%20log(%22Proxy%20votes%22%2C%20result%5B0%5D.proxied_vsf_votes)%3B%0D%0A%20%20%20%20%20%20log(%22Vesting%20Shares%22%2C%20result%5B0%5D.vesting_shares)%3B%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20log(%22Steem%20API%20Error%3A%20%22%2C%20err)%3B%0D%0A%20%20%7D%0D%0A%7D)%3B%20">**in SteemJs Editor**</a>
<BR/>
![image.png](https://cdn.steemitimages.com/DQmZqsvpzSnybyLDNK5dgx5NvjcuFEJckn8RTKLc78pdWE4/image.png)

So, you can sum up those values and compute the power of your vote.

This has been integrated into witness ranking page:
https://steemyy.com/witness-ranking/?id=justyy

You will see:
```
@justyy has voted 30 witnesses, 0 slots left.
Total: 575.41M = Proxy VESTS: 518.55M + VESTS: 56.85M
```

Also, this information has been integrated into the following pages:
1. Witness Information Page: https://steemyy.com/witness-data/justyy
2. Account Information Page: https://steemyy.com/account/justyy


**------------ Chinese Version------------**
在以下页面加入显示 您投票的票权：
1. https://steemyy.com/witness-lookup/justyy
2. https://steemyy.com/account-data/justyy
3. https://steemyy.com/witness-ranking-table/?id=justyy

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

This page is synchronized from the post: ['Witness Ranking Table and Account/Witness Page Update: Show How Much Your (Witness/SPS) Vote is'](https://steemit.com/@justyy/witness-ranking-table-and-account-witness-page-update-show-how-much-your-witness-sps-vote-is)
