
---
title: 'Adding `Easy Switch Between Utopian and Steem Posts` to Utopian Moderator Chrome Extension'
permlink: adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-30 23:58:36
categories:
- utopian-io
tags:
- utopian-io
- utopian
- chrome-extension
- steemstem
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1517356408/upjm03wfh2lbvnahgcbt.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Utopian Moderator & Supervisor
[Utopian Moderator & Supervisor](https://helloacm.com/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension/) is the FIRST chrome extension that is intended to help the Utopian Moderators & Supervisors in moderating work. 

# New Feature
[As promised earlier](https://steemit.com/utopian-io/@justyy/the-first-utopian-moderator-chrome-extension), I am adding a very useful feature to the version 0.0.2:  Allow Easy switch between Utopian and SteemIt posts. 

# Configuration
Adding a Dropdown menu to allow user select the prefered 'steem' sites i.e. steemit.com or busy.org (more can be added in the future)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517356408/upjm03wfh2lbvnahgcbt.png)

Now, as you are moderating utopian posts, you can easily switch between Utopian to the preferred steem sites by Alt+S short cut. For example,  utopian.io -> busy.org  and busy.org -> utopian.io

# How to do?
In Chrome Extension, you need to inject the scripts to the page, which is a bit tricky. The commits are: [here](https://github.com/DoctorLai/utopian-moderator/commit/8431c8ff46ce69641bde2c8d572eba5e166692e7#diff-2650fb3e14b7f42d68a8766269c54434)

Add this to `manifest.json`
```
  "content_scripts": [{
      "matches": ["<all_urls>"],
      "js":[
          "js/jquery-3.2.1.min.js",
          "js/content.js"
      ],
      "run_at":"document_start"
  }],
```

The logic code:

```
$(function() {
	let id;
	let website;

	// load settings 
	chrome.storage.sync.get('utopian_settings', function(data) {
	    if (data && data.utopian_settings) {
	        let utopian = data.utopian_settings;
	        if (utopian["steemit_id"]) {
	            id = utopian["steemit_id"].trim();
	        }
	        if (utopian["steemit_website"]) {
	            website = utopian["steemit_website"].trim();
	        }
	    }
	});

	// use steemit.com if not set
	website = website || "steemit.com";

	// short cut Alt + S to switch between utopian and steemit
	$(document).keydown(function(e) {
	    if(e.key.toLowerCase() == "s" && e.altKey) {
	    	var url = document.location.href;
	    	if (url.includes("utopian.io")) {	    		
	    		document.location.href = url.replace("utopian.io", website);
	    	} else if (url.includes("steemit.com")) {
	    		document.location.href = url.replace("steemit.com", "utopian.io");
	    	} else if (url.includes("busy.org")) {
	    		document.location.href = url.replace("busy.org", "utopian.io");
	    	}    	
	    }
	});
})();
```

# Roadmap
I am adding the following features in the next coming versions:
1. Show More statistics for a given category.
2. Show Personal Moderating statistics

# Contributing
Github: https://github.com/DoctorLai/utopian-moderator
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

Install now at Chrome Webstore: https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding `Easy Switch Between Utopian and Steem Posts` to Utopian Moderator Chrome Extension](https://steemit.com/@justyy/adding-easy-switch-between-utopian-and-steem-posts-to-utopian-moderator-chrome-extension)
