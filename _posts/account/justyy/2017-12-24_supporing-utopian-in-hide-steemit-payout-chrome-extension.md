
---
title: 'Supporting Utopian in `Hide SteemIt Payout` Chrome Extension'
permlink: supporing-utopian-in-hide-steemit-payout-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-24 23:06:51
categories:
- utopian-io
tags:
- utopian-io
- steemit
- payout
- chrome-extension
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514156597/lnt0dzyubdhevb1a5fhj.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Payout makes you unhappy, so why not hide it? I have added the support for utopian.io front-end for my Chrome Extension `Hide SteemIt Payout`.

This chrome extension will hide payout so you can focus on  writing good content. 

The Chrome Webstore: https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh
The Github: https://github.com/DoctorLai/hide-steemit-payout
This commit: https://github.com/DoctorLai/hide-steemit-payout/commit/921355c651d01a0dae719b42e6de8a38dbc09030#diff-101067c3b9fd4c4a9df7b3faf1103da3

# It works!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514156597/lnt0dzyubdhevb1a5fhj.png)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514156615/xwef6yzblelo5884rvfz.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514156627/edgav1quydtc7h9vsh1s.png)

The key idea is to look for HTML elements that is `span.Payout` and replace them (payout figures) by pre-defined strings.

```
var e = document.querySelectorAll('span.Payout');
for (var i = e.length - 1; i >= 0; -- i) {
   e[i].innerHTML = XXX;
}		
```

# Previous Posts:
- [Introducing the `Hide SteemIt Payout`](https://helloacm.com/hide-steemit-payoutwallet-simple-but-useful-chrome-extension/)
- [Why Hide the Payout](https://helloacm.com/hide-steemit-payout/)

# Proof of Work
`doctorlai` is my github ID and the steemit ID is written on it.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/supporing-utopian-in-hide-steemit-payout-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Supporting Utopian in `Hide SteemIt Payout` Chrome Extension](https://steemit.com/@justyy/supporing-utopian-in-hide-steemit-payout-chrome-extension)
