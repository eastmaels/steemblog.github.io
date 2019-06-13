
---
title: 'The SteemIt Discord Bot Upgrade and API'
permlink: the-steemit-discord-bot-upgrade-and-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-03 16:31:06
categories:
- busy
tags:
- busy
- steemtools
- steemapps
- steemdev
- steemstem
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520082114/bomfp0xqnyejg4fhdo0k.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, we talked about the [steemit discord bot](https://helloacm.com/the-steemit-discord-bot-with-php-source-code/) (public bot), which can be invited to any discord server using the following link. 

https://discordapp.com/oauth2/authorize?client_id=418196534660694037&permissions=522304&scope=bot

Today, it has been [upgraded to](https://helloacm.com/the-steemit-discord-bot-upgrade-and-api/) support the *P* command.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520082114/bomfp0xqnyejg4fhdo0k.png)

The command can take an optional parameter (which is default 100). The output will suggest if you should choose *Power Up 100%* or *50%/50%* given the current feed price, market sbd/steem price etc.

If the final amount of payout difference is no more than 1 USD, it should say `It doesn't matter`

# API
``https://helloacm.com/api/steemit/pu/?amount=500``

Example output:

```
{"feed_price": 3.263, "suggestion": "50/50", "sp_100": 153.23322096230464, "total_sbd_100": 142.6369755201814, "total_sbd_50": 309.32883604232825, "sbd_50": 250.0, "market_price_100": 533.5136377566657, "sbd_100": 0, "market_price_50": 1157.0012051792828, "sp_50": 76.61661048115232, "sbd_market_price_usd": 3.74036, "sp_market_price_usd": 3.48171}
```

Enjoy! 

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by voting for me [here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)

### Some of My Contributions: [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [The SteemIt Discord Bot Upgrade and API](https://steemit.com/@justyy/the-steemit-discord-bot-upgrade-and-api)
