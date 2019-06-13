
---
title: 'Hide Payout Update: Add Customize Rules + Hide busy.org Wallet'
permlink: hide-payout-update-add-customize-rules-hide-busy-wall-wallet
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-08 10:48:12
categories:
- utopian-io
tags:
- utopian-io
- steemtools
- busy
- steemapps
- software
thumbnail: https://cdn.utopian.io/posts/0ad4abce17b88ffec9c38ec1e9b22a5ca89eimage.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### Introduction
[Hide-SteemIt-Payout](https://helloacm.com/hide-steemit-payout/)  is a chrome extension that [hides payout](https://helloacm.com/hide-steemit-payoutwallet-simple-but-useful-chrome-extension/)  and [wallets](https://helloacm.com/steemit-hide-payout-update-add-customize-rules-hide-busy-wall-wallet/) for most steemit sites. I am adding a customize rule editor in this version so that in the future the users can add rules by themselves without need for a new version.

The tool's slogan **If payout makes you unhappy, why not hide it?** Indeed, the steemit is not a place to make money, at least it should not be advertised in this way. Steemit is a social platform, where we make friends and promote healthy, useful contents.

### New Features
- What feature(s) did you add?
1. Adding customize rules editor
2. Hide busy.wall wallet

- How did you implement it/them?
1. [here](https://github.com/DoctorLai/hide-steemit-payout/commit/bb7f98c7ba09466afcc6f692fce4919be0ad1f8f) and
2. [here](https://github.com/DoctorLai/hide-steemit-payout/commit/e1a213a6c555eec81f8b5873f6ccaa8b8e96a67e)

### ScreenShots
add customize rule:

![image.png](https://cdn.utopian.io/posts/0ad4abce17b88ffec9c38ec1e9b22a5ca89eimage.png)

wallet removed:

![image.png](https://cdn.utopian.io/posts/4953969f0f51ed9fcb572ae8fc55d4ba32e5image.png)

## Javascript to clear payout
Hide payout via Javascript DOM:

```
function clearPayout() {
	let url = location.href;
	if (IsSteemWebsite(url)) {
		let e = document.querySelectorAll('span.FormattedAsset');
		for (let i = e.length - 1; i >= 0; -- i) {
			e[i].innerHTML = XXX;
		}
		e = document.querySelectorAll('span.post-payout');
		for (let i = e.length - 1; i >= 0; -- i) {
			e[i].innerHTML = XXX;
		}
		e = document.querySelectorAll('span.Payout');
		for (let i = e.length - 1; i >= 0; -- i) {
			e[i].innerHTML = XXX;
		}					
		e = document.querySelectorAll("a[href*=transfers]");
		for (let i = e.length - 1; i >= 0; -- i) {
			e[i].innerHTML = '';
			e[i].setAttribute("href", "#");
		}
		for (let i = 0; i < ruleslen; ++ i) {
			let rule = arr[i];
			if (rule) {
				let [domain, dom] = /([^\s]+)\s(.+)/.exec(rule).slice(1);
				if (domain && dom) {
					let e = document.querySelectorAll("li[data-key=transfers]");
					if (e) {
						for (let i = e.length - 1; i >= 0; -- i) {
							e[i].innerHTML = '';
							e[i].setAttribute("href", "#");
						}									
					}
				}
			}
		}
		if (url.includes("busy.org")) {
			let e = document.querySelectorAll("li[data-key=transfers]");
			for (let i = e.length - 1; i >= 0; -- i) {
				e[i].innerHTML = '';
			}
		}
	}
}	
```

### Chrome Webstore
Chrome Extension Available:  https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you!  You may also like: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/hide-payout-update-add-customize-rules-hide-busy-wall-wallet">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Hide Payout Update: Add Customize Rules + Hide busy.org Wallet](https://steemit.com/@justyy/hide-payout-update-add-customize-rules-hide-busy-wall-wallet)
