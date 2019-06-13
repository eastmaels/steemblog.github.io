
---
title: 'Fixing Profile Query due to API Change in SteemIt'
permlink: fixing-profile-query-due-to-api-change-in-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-12 12:05:57
categories:
- witness-update
tags:
- witness-update
- steem-api
- programming
- steemsql
- busy
thumbnail: https://ipfs.busy.org/ipfs/QmZJjjzcD8S6ESknbwXL51BMBxgjvDxK8rpLrMiQJ4SgjT
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Due to an API change in SteemIt [see this post](https://steemit.com/steemit/@steemitdev/additional-public-api-change), the following code to get the last vote time is not working any more - as it says the API is depreciated.

```
acc = Account(id, steemd_instance = steem)
av = acc.get_account_votes()
account['last_vote_time'] = av[-1]['time']
```

The last vote time is useful to get the current VP for a user (the last recorded voting power + the VP restored since)

```
vot = av[-1]['time']  
vot = datetime.datetime.strptime(vot, '%Y-%m-%dT%H:%M:%S')
vot = time.mktime(vot.timetuple())
tnow = datetime.datetime.utcnow().timestamp()
dif = (((tnow-vot) / 60) * 0.0139) + account_vp
account['vp'] = min(100, dif)
```

There is no easy way to get last voted time. You can scan the account history in reverse order and look for the voting action.

Thanks to @steemsql , I have replaced this bit using a simple SQL

```
def get_last_vote_time(id):
  global cursor
     
  sql = "select top 1 timestamp from TxVotes (NOLOCK) where voter='" + id.strip() + "' order by timestamp desc"
  cursor.execute(sql)

  while 1:
    row = cursor.fetchone()
    if not row:
      break
    return row[0].strftime("%Y-%m-%d %H:%M:%S")
  return None 
```

So the services for querying the profile using Discord Bot or Wechat Bot has been fixed!

![image.png](https://ipfs.busy.org/ipfs/QmZJjjzcD8S6ESknbwXL51BMBxgjvDxK8rpLrMiQJ4SgjT)
![image.png](https://ipfs.busy.org/ipfs/QmYXFxxU5bHGbm1MWX1L8mSsTAVyptYr84awhSMy1DEEz9)

// [https://helloacm.com/fixing-profile-query-commadn-due-to-api-change-in-steem-blockchain/](https://helloacm.com/fixing-profile-query-commadn-due-to-api-change-in-steem-blockchain/)

**Enjoy and Steem On!**

## Delegate to @justyy
@justyy runs a automatic delegation service for a long time. Delegate to @justyy for at least 5 SP and start receiving daily payout as interests (from 8% to 10% APR). Also, as a supporter, the delegators will start to receive complimentary/curation upvotes (as a thank you) per day from e.g @justyy and a few other curation trails. For more information, [read this](https://github.com/DoctorLai/steemit-wechat-group). The voting weight algorithm is [open source](https://steemit.com/busy/@justyy/bank-of-china-implements-a-new-voting-algorithm).

- Delegate to @justyy - [at least 5 SP to join (automatically)](https://steemyy.com/sp-delegate-form/?delegatee=justyy)
- [Undelegate to @justyy (Quit) - SP returned by steem blockchain in 5 days](https://steemyy.com/sp-delegate-form/?delegatee=justyy&amount=0)
- [View Current Delegators/Supporters](https://steemyy.com/delegators/?id=justyy)

![image.png](https://ipfs.busy.org/ipfs/QmVgdx1YkrSAtgzeaCfsgnTZ55YDQCiQPxMQbUa1PPwHe9)

*@justyy is the 7-th delegated project on steem blockchain*

> Please note that the SP you enter is the final amount to delegate. For example, if you already delegate 10 SP and you want to delegate another 5 SP, you will need to enter 15 SP (instead of 5 SP) in the delegation form.

##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)

# Happy New Year to all Steemians! I wish the Steem Price Go Rocket in 2019!
![image.png](https://ipfs.busy.org/ipfs/Qmevxtf9nddbwSd8XEesHbt9GdNkM5VMfasP7jweURQbpe)

- - -

This page is synchronized from the post: [Fixing Profile Query due to API Change in SteemIt](https://steemit.com/@justyy/fixing-profile-query-due-to-api-change-in-steemit)
