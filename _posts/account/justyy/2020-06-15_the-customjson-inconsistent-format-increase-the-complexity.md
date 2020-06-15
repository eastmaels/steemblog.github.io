
---
title: 'The custom_json inconsistent format increase the complexity'
permlink: the-customjson-inconsistent-format-increase-the-complexity
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-15 18:08:18
categories:
- codeonsteem
tags:
- codeonsteem
- whalepower
- custom-json
- witness-category
- witness
- programming
- steem-dev
- json
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have been wanting to make a few tools that require pre-processing the custom_json fields. however the script gets exceptions from time to time due to the inconsistent format of the custom_json.

For example,  sometimes, I see this format:

```
{'required_auths': [], 'id': 'follow', 'required_posting_auths': ['steemit'], 'json': '["follow", {"follower":"steemit","following":"steem","what":["posts"]}]'}
```

And sometimes this:

```
{'required_auths': [], 'id': 'follow', 'required_posting_auths': ['steemit'], 'json': '{"follower":"steemit","following":"steem","what":["posts"]}'}
```

I assume that it is up to the front-end to interpret if the format is correct. At this point,  the steem blockchain is just a public immutable database, and it has no idea what the JSON data means.

And also, this is worse:

```
{'required_auths': [], 'required_posting_auths': ['jpphoto'], 'id': 'follow', 'json': '"[\\"reblog\\",{\\"account\\":\\"jpphoto\\",\\"author\\":\\"photovisions\\",\\"permlink\\":\\"travel-norway-27-autumn-in-sylan-mountains-snow-and-reindeers\\"}]"'}
```

First JSON decode gives a valid JSON string which needs to be decoded. It might be obvious for human to understand the data, but for computer programs, you would need to handle all these cases, at least, you would need to realise the incorrect format, discard it, and move on - instead of throwing exception and halt.

Life is hard.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
Reposted to [Blog](https://helloacm.com/how-to-renew-the-free-ssl-certificates-nginx-server/)
------------------


If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['The custom_json inconsistent format increase the complexity'](https://steemit.com/@justyy/the-customjson-inconsistent-format-increase-the-complexity)
