
---
title: '@ilovecoding - The SteemRebloggerService supports BlackList Tags and Automatic Voting'
permlink: ilovecoding-the-steemrebloggerservice-supports-blacklist-tags-and-automatic-voting
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-28 22:30:39
categories:
- utopian-io
tags:
- utopian-io
- development
- busy
- programming
- witness-category
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Project Github
Github: https://github.com/DoctorLai/SteemRebloggerService/

# Introduction
@ilovecoding is a steem account that only reblogs programming-related articles

# Changes and New Features
[Commit here](https://github.com/DoctorLai/SteemRebloggerService/commit/c8782283735239edf09b0e2a134c7ecda14bb278):  Refactoring to reduce the CPU overload and make code better.

[Commit here](https://github.com/DoctorLai/SteemRebloggerService/commit/56a2a00d0d66292755687c67b25fc749cb648144): Adding blacklist tags so that it does not reblog test posts under tag test. 

[Commit here](https://github.com/DoctorLai/SteemRebloggerService/commit/4d9987f0bf6657c35df648d4b3a3dc47beaada00): Automatic voting on programming posts as a support. The voting percentage is set in `config.json`:

[Default is 5% upvote](https://github.com/DoctorLai/SteemRebloggerService/commit/4d5bb2dafb1258daf0bf8c03c762089fa4349b70)

```
// voting
const voting_post = (account, permlink, weight) => {
  /* @params username, password, author, permlink, weight */
  if (weight <= 0) return;
  steem.broadcast.vote(config.posting_key, config.account, account, permlink, weight, function(err, result) {
    if (result && !err) {
      log("voted on " + account + "/" + permlink);
    } else {
      log(err);
      log(result);
    }
  });   
}
```

I hope this encourages steemians write more programming-related posts on steemit! If you want to help this little project or like this initiatives, you can delegate to @ilovecoding - any amount of delegation is appreciated!

To delegate to @ilovecoding, you can use this [simple SP delegation tool](https://helloacm.com/tools/steemit/sp-delegate-form/?delegatee=ilovecoding)

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: ['@ilovecoding - The SteemRebloggerService supports BlackList Tags and Automatic Voting'](https://steemit.com/@justyy/ilovecoding-the-steemrebloggerservice-supports-blacklist-tags-and-automatic-voting)
