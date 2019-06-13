
---
title: 'SteemTools Update (v0.0.12):  Your Downvotes, Wallet Update, Top Witnesses, Switch To'
permlink: steemtools-update-v0-0-12-your-downvotes-wallet-update-top-witnesses-switch-to
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-22 17:50:54
categories:
- utopian-io
tags:
- utopian-io
- witness-category
- software-development
- steemtools
- steemdev
thumbnail: https://cdn.utopian.io/posts/aca1a4af3dd60ff948a05fc6e16750f5675awallet-update.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to SteemTools and Installation
[SteemTools](https://helloacm.com/steemtools-update-v0-0-12-your-downvotes-wallet-update-top-witnesses-switch-to/) is a Chrome Extension that provides a set of useful tools for the steemians. It can be downloaded via Google Webstore:

https://chrome.google.com/webstore/detail/steem-tools/emjfpeecopppojbhkigjjmcahbfahhbn

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install SteemTools.

## Contribution
Fully Open Source: https://github.com/DoctorLai/SteemTools 
You can either submit a Pull Request or open a issue (for suggestions and bug reports)

## Technology Stack
Javascript in Chrome Browser

## New Features of v0.0.12
Commits [here](https://github.com/DoctorLai/SteemTools/commit/2c3deb2dc82f0c321dcdd3fad2ddeee79a89cb39) and [here](https://github.com/DoctorLai/SteemTools/commit/df2b13c9893ccb898c9fe0781f793fc5d6a7dc30)

1. Exclusive Server API access to avoid API overloading the server.
2. Wallet Tool Update: expanding *[username]* when sending to multiple accounts
3. Top Witnesses
4. Switch-To Context Menu
5. Your Downvotes History (Tab)

## Screenshots
expanding *[username]* when [sending to multiple accounts](https://helloacm.com/steemtool-v0-0-9-sending-money-to-multiple-addresses/)
![wallet-update.jpg](https://cdn.utopian.io/posts/aca1a4af3dd60ff948a05fc6e16750f5675awallet-update.jpg)

top witnesses 
![image.png](https://cdn.utopian.io/posts/8d29e3ee7675161a8ae02afd58af187387d5image.png)

your downvoting history
![image.png](https://cdn.utopian.io/posts/4ebb50ec19b26a7e41d413d4253d1dc3baf4image.png)

now you can easily switch between steem domains in context menu
![image.png](https://cdn.utopian.io/posts/9c528c2c19d610a3a2ad2804ccc68a70fe2dimage.png)

## How to Implement Switch-To?
```
'use strict';

chrome.contextMenus.removeAll();

// all supported steem domains
let steem_websites = [
	"steemit.com",
	"busy.org",
	"steemd.com",
	"utopian.io"
];

// create parent context menu item
let parent = chrome.contextMenus.create({
	title: "SteemTools - Switch To",
	contexts: ['all']
});

// switch to click and sub menus
let sz = steem_websites.length;
for (let i = 0; i < sz; ++ i) {
	let cur_domain = steem_websites[i];
	let child = chrome.contextMenus.create({
		title: cur_domain, 
		parentId: parent, 
		onclick: (info, tab) => {
			let url = tab.url;
			let domain = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
			if (domain) {
				domain = domain.toLowerCase();
				// only redirects when it is steemit domain
				if (steem_websites.includes(domain)) {
					if (domain != cur_domain) {
						url = url.replace(domain, cur_domain);
						chrome.tabs.update(info.tab, {"url": url});
					}
				}
			}
		}	
	});	
}
```
-----------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/steemtools-update-v0-0-12-your-downvotes-wallet-update-top-witnesses-switch-to">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [SteemTools Update (v0.0.12):  Your Downvotes, Wallet Update, Top Witnesses, Switch To](https://steemit.com/@justyy/steemtools-update-v0-0-12-your-downvotes-wallet-update-top-witnesses-switch-to)
