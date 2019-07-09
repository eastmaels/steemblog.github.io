
---
title: 'Tutorial: How to get back missing balance in IOTA wallet'
permlink: tutorial-how-to-get-back-missing-balance-in-iota-wallet
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-30 16:52:09
categories:
- utopian-io
tags:
- utopian-io
- iota
- wallet
- teammalaysia
- cryptocurrency
thumbnail: 'https://steemitimages.com/DQmXQ3u1NqBBiQrpWZpDWq1BYarGG6Ga3cp4q9FeiiiTFcS/11.PNG'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Recently due to the awakening of altcoins IOTA is getting a decent pump too. This leads me to check out the long resting IOTA wallet since I set it up a few months ago, only to find out I got a 0 balance. 

> We are conducting another snapshot in IOTA which is intended to finalize the Curl to Kerl upgrade and introduce a newly improved IRI release to the community.

The balance went missing is a result of [IOTA network snapshot from 22nd September](https://forum.iota.org/t/snapshot-public-validation-22-09-2017/4256). Don't worry, you fund is still safe inside the Tangle. Follow the simple steps below to reclaim all your balance.

![11.PNG](https://steemitimages.com/DQmXQ3u1NqBBiQrpWZpDWq1BYarGG6Ga3cp4q9FeiiiTFcS/11.PNG)

Get the latest wallet from iotaledger: https://github.com/iotaledger/wallet/releases. The latest version is **v2.5.4**, download whatever is applicable to your operating system. I'm using windows so I'm going to use the exe file.

------

<div class="pull-left"><center><img src="https://steemitimages.com/DQmNnzMacEJ8jeEG2VTrUqQkZTsqaANJZB3vjexo3W68mmY/1.PNG" /><br/></center></div>

Login the wallet using your **old seed**. You don't have to generate a new seed for this. Always backup the seed and keep it safe.

------

<div class="pull-left"><center><img src="https://steemitimages.com/DQmYEWP442owyUXE4yKWeDbSvWsmnqrr4dvkj9f9QakkcfD/4.PNG" /><br/></center></div>

After login, you will notice you still have the 0 balance. Access the *Edit Node Configuration* under the *Tools*.

------

<div class="pull-left"><center><img src="https://steemitimages.com/DQma4kUSTSrnEeDT1wviDWu9fbS6AjPS7dLwsZb6jcwz5bz/5.PNG" /><br/></center></div>

Change the *Min Weight Magnitude* to **14** and make sure *Curl Implementation* is **Webgl 2 Curl Implementation**. Save it.

------

<div class="pull-left"><center><img src="https://steemitimages.com/DQmNa1Yk9VYJLKPscdb1eXpfBqCfCE46oLwyoD4D8hdtS2K/3.PNG" /><br/></center></div>

Then *Generate Address* and *Attach to Tangle*. The balance shall reappears under the *Receive* tab.

------

<div class="pull-left"><center><img src="https://steemitimages.com/DQmWD67cHvEdVrR8hcmcWDyPcT4gFwnkfxMwtuvXD5iLvzc/6.PNG" /><br/></center></div>

You may want to do this repeatedly until all the fund is fully claimed. If you previously have received 5 transaction into this wallet, you should at least to see same number of transfer under the *History* tab.

------

If you are still having issues please try changing nodes, rebooting wallet and redo the process again. You can also try to get help from https://iotatangle.slack.com. If you need an invite see https://slack.iota.org.

This "fund missing: incident might be frightening to the non-techie person. But as long as you keep your seed well-kept you will always be fine. Do not share it with anybody else or store the seed in digital form. Tangle technology is something very new compared to the blockchain. I believe IOTA is still in its infant phase like what Bitcoin was in 2009. To the moon!

------

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/tutorial-how-to-get-back-missing-balance-in-iota-wallet">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Tutorial: How to get back missing balance in IOTA wallet'](https://steemit.com/@fr3eze/tutorial-how-to-get-back-missing-balance-in-iota-wallet)
