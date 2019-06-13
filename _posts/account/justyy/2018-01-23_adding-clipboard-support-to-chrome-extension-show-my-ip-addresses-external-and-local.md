
---
title: 'Adding Clipboard Support to Chrome Extension: Show My IP Addresses (External and Local)'
permlink: adding-clipboard-support-to-chrome-extension-show-my-ip-addresses-external-and-local
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-23 19:34:06
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- chrome-extension
- ip-addresses
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516735773/pwatljps8ldy3f0jjkwd.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[Show My IP Addresses](https://helloacm.com/what-is-my-ip/) is a Chrome Extension that displays both Local and External IP addresses by one click.  

# Technology Stack
The Chrome Extension is written in [Javascript](https://helloacm.com/steemit-javascript-function-to-get-original-post-from-comments-permlink/), that is specifically targeting the [Chrome Browser](https://helloacm.com/how-to-enable-inline-chrome-extension-installation-in-chrome-browser/).

# New Features
For latest version 0.6.8, I have spent some time adding the Clipboard support so that with one click, the network administrator can [copy the addresses to clipboard](https://helloacm.com/adding-clipboard-support-to-chrome-extension-show-my-ip-addresses-external-and-local/).

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516735773/pwatljps8ldy3f0jjkwd.png)

## Clipboard-related code
```
// Copy text to the clipboard.
function copyToClipboard(text, t) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
    $(t).html('Copied!');
}
```

The UI has been simplified quite a bit as well, so that the API log is hidden by default. The users can click to see more data:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516735799/reawgwsulxbtddtuyxle.png)

# This Commit
[Commits](https://github.com/DoctorLai/what-is-my-ip/commit/150b18ec8af9223d86807c9f6760b6db9e0097c3)

# Chrome Webstore
The chrome extension can be installed via Chrome Webstore directly: https://chrome.google.com/webstore/detail/opljiobgnagdjikipnagigiacllolpaj/

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516735891/xyceneh1znpxzqiu54ct.png)

# Contribute
Github: https://github.com/DoctorLai/what-is-my-ip/

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-clipboard-support-to-chrome-extension-show-my-ip-addresses-external-and-local">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding Clipboard Support to Chrome Extension: Show My IP Addresses (External and Local)](https://steemit.com/@justyy/adding-clipboard-support-to-chrome-extension-show-my-ip-addresses-external-and-local)
