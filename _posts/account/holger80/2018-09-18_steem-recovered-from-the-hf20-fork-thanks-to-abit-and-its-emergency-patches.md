
---
title: 'Steem recovered from the hf20 fork thanks to abit and its emergency patches'
permlink: steem-recovered-from-the-hf20-fork-thanks-to-abit-and-its-emergency-patches
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-18 05:50:30
categories:
- witness
tags:
- witness
- witness-category
- witness-update
- steem
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


After the hf20 fork was activated, blocks that produced by hf20 nodes were not accepted anymore by hf19 nodes. This lead to a fork and as the exchanges are on hf19, it was decided to move to the hf19 chain.

Thank to @abit and its four patches:
* [checkpoint fix](https://github.com/abitmore/steem/commit/91d9ca782ef0de87015f2d3d14bea4571aa98811)
* [2048 fork db fix](https://github.com/abitmore/steem/commit/250e9b96be7080c35220e948e84a9b4b2d255b71)
* [plus 2048](https://github.com/abitmore/steem/commit/2e7dca8e9639df6a62429f58a24803978bbc5b7b)
* [filter out blocks on the bad fork](https://github.com/abitmore/steem/commit/9ef9052e00ddf61dbff6d2a3f1e1a839d3db190e)

@gtg was able to start the steem blockchain again together with @abit. Then @roelandp could also jump in and the steem block production was slowly starting again.

I voted for @abit as witness now, to express my gratitude that he saved steem :).

____
After downgrading to 0.19.12 and applying the patches, my witness server is running again. Now, I'm waiting for official patches.

___
my config.ini  (remaining parts as usual):
```
p2p-seed-node = seed-east.steemit.com:2001 seed-central.steemit.com:2001 seed-west.steemit.com:2001 steem-seed1.abit-more.com:2001 52.74.152.79:2001 seed.steemd.com:34191 anyx.co:2001 seed.xeldal.com:12150 seed.steemnodes.com:2001 seed.liondani.com:2016 gtg.steem.house:2001 seed.jesta.us:2001 steemd.pharesim.me:2001 5.9.18.213:2001 lafonasteem.com:2001 seed.rossco99.com:2001 steem-seed.altcap.io:40696 seed.roelandp.nl:2001 steem.global:2001 seed.esteem.ws:2001 seed.timcliff.com:2001 104.199.118.92:2001 seed.steemviz.com:2001 steem-seed.lukestokes.info:2001 seed.steemian.info:2001 seed.followbtcnews.com:2001 node.mahdiyari.info:2001 seed.curiesteem.com:2001 seed.riversteem.com:2001 148.251.237.104:2001 seed1.blockbrothers.io:2001 steemseed-fin.privex.io:2001 seed.jamzed.pl:2001 seed1.cryptobot.news:2001 seed.thecryptodrive.com:2001 seed.brandonfrye.us:2001 seed.firepower.ltd:2001

checkpoint = [26037575, "018d4d47225e6cada82b9aaabc8503ee318c547c"]

```

- - -

This page is synchronized from the post: ['Steem recovered from the hf20 fork thanks to abit and its emergency patches'](https://steemit.com/@holger80/steem-recovered-from-the-hf20-fork-thanks-to-abit-and-its-emergency-patches)
