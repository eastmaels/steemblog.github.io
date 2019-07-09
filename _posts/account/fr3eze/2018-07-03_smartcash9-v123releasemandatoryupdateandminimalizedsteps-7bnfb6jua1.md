
---
title: 'SmartCash#9 - V1.2.3 Release, mandatory update and minimalized steps.'
permlink: smartcash9-v123releasemandatoryupdateandminimalizedsteps-7bnfb6jua1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-03 14:24:36
categories:
- steempress
tags:
- steempress
- invest
- masternode
- smartcash
- teammalaysia
thumbnail: 'https://gateway.ipfs.io/ipfs/QmQ2MXGFeUh86BrXZrk3NwrwoQborPKSSM45JyQ6tWgmrH'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p><img src="https://gateway.ipfs.io/ipfs/QmQ2MXGFeUh86BrXZrk3NwrwoQborPKSSM45JyQ6tWgmrH" alt="SmartCash Logo (L).png" /><br/></p>

<blockquote>
  <p>This series is to record my SmartNode journey. This is very much a high risk experimental act and I'm prepared to lose all the fund invested. Do your own research as this is not a financial advice.</p>
</blockquote>

<hr />

<h2 id="themandatorysmartcashv123update">The mandatory SmartCash V1.2.3 update</h2>

<p>I know SmartCash has been in a rapid development recently and there are several updates on the node program as well as wallet. I was so caught up recently in different project that could not afford to take a look at them as long as my SmartNode is still running. However, I can't continue to ignore the update anymore few days ago when the SmartNodeMonitor(awesome tool again) gave me a ping that my node was not going to keep running until the mandatory update was implemented.</p>

<p>Oh right, guess I have to put everything away and settle this urgent matter as the top priority. </p>

<h2 id="whattodotoenablethesmartnodeagain">What to do to enable the SmartNode again?</h2>

<p>In short, you can refer to this official post that includes all the important announcement, change log, and instructions for the updates:https://smartcash.cc/smartcash-v1-2-release-announcement-and-instructions/</p>

<p>For those who only care about the part to get SmartNode/VPS running normally again, I will summarized the steps below and those are what I've done exactly:</p>

<ul>

<li>Open up the old desktop wallet and have a backup of the wallet.dat or you are in the risk of losing all the SMART.</li>

<li>Go <a href="https://smartcash.cc/wallets/">here</a> and download the <strong>Node Client</strong>(not the Electrum Wallet!). Close the old SmartCash desktop wallet if it is running, install the Node Client on the <em>same directory</em> of the original Smartcash wallet.</li>

<li>Open the Node Client and you shall see everything inside the client is still the same as before, let it sync.</li>

<li>Access the SmartNode/VPS, execute <code>sudo apt update &amp;&amp; sudo apt install smartcashd -y; smartcash-cli stop; smartcashd reindex</code></li>

<li><code>smartcash-cli getinfo</code> should return <code>“protocol version”: 90026</code> which is the latest protocol version”</li>

<li>On the Node Client, <strong>Start alias</strong> the SmartNode and you shall see the status will change to ENABLED eventually in a few minutes.</li>
</ul>

<h2 id="afewthingstotakenote">A few things to take note</h2>

<ul>
<li>Start alias will restart the queue number of the node but this is inevitable if you are updating from 1.2 version and above. I was coming from 1.1.</li>

<li>Node will have a 3 days initial waiting time. But this quickly changed and I got in the middle of queue after 2 days, the system somehow was quite in a mess.</li>

<li>Use SmartNodeMonitor <code>/detail</code> to check node status to make sure things is running smooth.</li>
</ul>

<p>Happying SmartNod-ing again!</p>

<hr />

<p><sub>Official site: https://smartcash.cc</sub>
<sub>Twitter: https://twitter.com/scashofficial</sub>
<sub>Discord: https://discordapp.com/invite/BDUh8jr</sub>
<sub>Steemit: https://steemit.com/@smartcash or @smartcash</sub></p>

<h4 id="relatedpost">Related post:</h4>

<p><a href="/@fr3eze/smartcash-1-my-first-crypto-node-setup-for-a-passive-income">SmartCash#1 - My first crypto node setup for a passive income</a>
<a href="/@fr3eze/smartcash-1-acquiring-10-000-smart">SmartCash#2 - Acquiring 10,000 SMART</a>
<a href="/@fr3eze/smartcash-3-setting-up-a-wallet">SmartCash#3 - Setting up a wallet</a>
<a href="/@fr3eze/smartcash-4-vps-service-that-accepting-steem">SmartCash#4 - VPS service that accepting STEEM</a>
<a href="/@fr3eze/smartcash-5-start-the-smartnode">SmartCash#5 - Start the SmartNode</a>
<a href="/@fr3eze/smartcash-6-smartbot-and-the-weekly-prizes">SmartCash#6 - Smartbot and the weekly prizes</a>
<a href="/@fr3eze/smartcash-7-received-the-node-reward-for-the-first-time-after-23-days">SmartCash#7 - Received the node reward for the first time after 23 days!</a>
<a href="/@fr3eze/smartcash-8-smartreward-is-good-but-it-can-be-great">SmartCash#8 - Smartreward is good, but it can be great!</a></p>

<hr />

<p><a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /><br/></a></p><br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/smartcash9-v1-2-3-release-mandatory-update-and-minimalized-steps/</em><hr/></center>

- - -

This page is synchronized from the post: ['SmartCash#9 - V1.2.3 Release, mandatory update and minimalized steps.'](https://steemit.com/@fr3eze/smartcash9-v123releasemandatoryupdateandminimalizedsteps-7bnfb6jua1)
