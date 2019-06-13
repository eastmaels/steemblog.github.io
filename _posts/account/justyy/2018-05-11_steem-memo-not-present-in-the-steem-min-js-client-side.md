
---
title: 'steem.memo Not present in the steem.min.js (Client-Side)'
permlink: steem-memo-not-present-in-the-steem-min-js-client-side
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-11 23:43:45
categories:
- utopian-io
tags:
- utopian-io
- bug-hunting
- steemit
- busy
- steem-js
thumbnail: https://steemitimages.com/DQmbCAkoUVAa8kFGYDaveS6JCYoPTo7LiWuDrMB7A1TJqzJ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Contribution to SteemIt.com  - reporting a bug regarding steem-js
## Github Respository: http://github.com/steemit/steem-js/

I was trying to use the `steem.memo`  as exposed in the source code:

https://github.com/steemit/steem-js/blob/master/src/index.js

![](https://steemitimages.com/DQmbCAkoUVAa8kFGYDaveS6JCYoPTo7LiWuDrMB7A1TJqzJ/image.png)

But it is not present in `steem.min.js`

## Expected Behavior
The `steem.memo` should be present in you use it in the browsers via `steem.min.js`.

## Actual Behavior
The `steem.memo` is only present in NodeJs (server side) but not Client-Side via `steem.min.js`.

## How to produce
Create a HTML file:

```
<script src='https://cdn.steemjs.com/lib/latest/steem.min.js'></script>
<script>
console.log(steem.memo);
</script>
```
Or simply visit:  https://steemyy.com/steem-memo-test.html

If you press F12 in Chrome, it will print `undefined`:

![](https://steemitimages.com/DQmSTYswp35MZN4nFujLY3nNKT5JhAXUpCDgd5bWyuRywSH/image.png)

At the console, if you type in `steem.` you can clearly see `memo` is missing..
![](https://steemitimages.com/DQmWRVQnkMdWV6478zXut7K3SCP4qcMVWq3UhaP1QPTKiSi/image.png)

## Conclusion
It will be great if this can be fixed. As `steem.memo.decode()` is a useful function in decoding the wallet message using the memo key.

- - -

This page is synchronized from the post: [steem.memo Not present in the steem.min.js (Client-Side)](https://steemit.com/@justyy/steem-memo-not-present-in-the-steem-min-js-client-side)
