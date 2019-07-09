
---
title: 'EOS is usable again, thank god.'
permlink: eosisusableagainthankgod-52gqcn971g
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-18 16:07:12
categories:
- cpu
tags:
- cpu
- crypto
- eos
- teammalaysia
- technology
thumbnail: 'https://cdn.steemitimages.com/DQmPeESWSmBe3oC7nKpUJPf4jEvqUtHw4qpHbQbgbAD9EpP/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmPeESWSmBe3oC7nKpUJPf4jEvqUtHw4qpHbQbgbAD9EpP/image.png" alt="" /><br/>

EOS developers finnally get the CPU jamming problem resolved by activating proposal below:

https://github.com/eosrio/proposals/blob/master/updateparams.md

<blockquote>
  Since the mainnet launch the global blockchain parameters were left as default, and now with a recent increase of the usage, the users noticed that the system contract is triggering the <strong>CPU congestion mode</strong> too early. As soon as a block hits 10% of the total 200ms of CPU time allowed per block, the CPU allocation algorithm switches to the congestion mode and every user is left with his share of the remaining allocation based on their stake in proportion to the whole network stake. What ended up happening is that while the actual CPU usage of the validators is very low, the CPU price became higher.

</blockquote>

It seems like the sudden surge of network usage has triggered the self-protection mechanism too early and we can very much relate this phenomena to the rising stars, <strong>Betdice and EOSBet</strong>, the biggest twin dapps in EOS network.

Interestingly, the solution in the proposal was very alike with our Steem's RC disaster:

<blockquote>
  This proposal aims to change the current value for target_block_cpu_usage_pct from 1000 (10%) to 2000 (20%)

</blockquote>

Not enough RC? Multiply the RC! Not enough CPU? Double the CPU! Problem solving has never been this easy.

<h2>Not bad as a stress test</h2>

While the hot gambling dapps get so popular that the crazy trading volume <em>paralyzed</em> the whole network for a few days, this is actually healthy for the long term stability.

Take a look at the difference of CPU price before and after the CPU congestion incident:

<img src="https://cdn.steemitimages.com/DQmSerN5HgBwmTdyb3kZ8Ao3MvGYeg7ySuPBzMvGXXV2jGX/chrome_2018-10-16_22-16-57.png" alt="chrome_2018-10-16_22-16-57.png" /><br/>

<img src="https://cdn.steemitimages.com/DQmVNa7cjYjq4NiD3U8VydLN2baoESMRy9NpHWEZmnTBgGd/chrome_2018-10-18_23-49-25.png" alt="chrome_2018-10-18_23-49-25.png" /><br/>

<center>Screenshots from <a href="https://www.eosrp.io/">EOS Resoource Planner</a></center>

$2.733/ms/day then vs $0.014/ms/day now. EOS network back in business with silkly smooth transaction once again. Good job devs!<br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/eos-is-usable-again-thank-god/</em><hr/></center>

- - -

This page is synchronized from the post: ['EOS is usable again, thank god.'](https://steemit.com/@fr3eze/eosisusableagainthankgod-52gqcn971g)
