
---
title: "Blockchain's A Hard Forkin' Thing To Do"
permlink: blockchain-s-a-hard-forkin-thing-to-do
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-09 15:34:27
categories:
- bitcoin
tags:
- bitcoin
- blockchain
- cryptocurrency
- crypto
- ethereum
thumbnail: https://cdn.steemitimages.com/DQmQqrv4gB4wSWLWtmVYvfL9hh8fL7JDodEnwyaC7UhfL7E/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When I first started getting into blockchain, I found myself confused by a great many of the new vocabulary I had to learn to make myself dangerous in the cryptocurrency space. My friends and I, who have begun their blockchain journey at different times, started a little [podcast called *Block Runners*](https://soundcloud.com/user-535980100) in order to provide the community with a quality resource to satisfy its collective curiousity.

This week [in our podcast](https://soundcloud.com/user-535980100/show-3-what-the-fork-is-a-fork) we discussed one of those fundamental concepts of blockchain that sometimes people tend to gloss over:

### Forks. ###

![](https://cdn.steemitimages.com/DQmQqrv4gB4wSWLWtmVYvfL9hh8fL7JDodEnwyaC7UhfL7E/image.png)
> Bear sculpture from [Gary Hovey](http://www.hoveyware.com)
>  

So let's begin with the most basic question...

# What the fork is a fork? #

The short answer is that when an existing blockchain is forked it creates two new chains at the block height of the fork. At the point of the fork, the two blockchains would start to create new transaction histories distinct from one another. But all blocks of transactions created before the block where the fork takes place would be the same on both chains. The newly forked chain shares the history of all previous transactions made on the parent chain. As it creates its new history, it does so according to a new set of rules. This procedure is, technically, a **hard fork** and that's where the fun begins! Just like fancy silverware, there are different kinds of forks that have different uses.

![](https://cdn.steemitimages.com/DQmc6xDr8Y4Qt7dREwK224dcYGDfDhBmggEqenqajjMfmJ2/image.png)
> [Source](https://masterthecrypto.com)

## It’s free money! ##
As a finance professor, I approach the question from, predictably, a finance perspective. A fork can be well compared to a spin-off IPO of an unwanted, or incompatible, subsidiary in the stock world. For example, processed foods giant Conagra [recently spun-off](https://www.conagrabrands.com/news-room/news-conagra-foods-completes-spin-off-of-lamb-weston-business-and-becomes-conagra-brands-2221373) its frozen potato products division into an entirely new and separately traded company, Lamb Weston (LW). Some investors reinvest earnings from forked coins back into BTC, others accumulate a fat wallet of forked coins on the off-chance that maybe they will be as valuable as BTC one day. But this is very dangerous! You need to do your due diligence on these projects or you might miss your opportunity to maximize profit, as we'll see below.

## It's an upgrade! ##
My podcast cohost, Mr. Lo, contributes a developer's perspective. The word “fork” has multiple meanings in software development depending on the context. Most recently, the term has been used as an integral part of the process of social software development, a practice made more efficient when Linus Torvald, creator of Linux, unleashed git to the world. Forking allows collaborators on git-based code repositories to organize a project in a decentralized manner. Each contributor has a copy of the original project (OP) and makes changes and improvements locally that they submit as pull-requests to the OP. It’s just a part of the workflow where you “fork” a copy of the code in order to experiment with it. For blockchain projects, a “fork” is an upgrade mechanism. If the "fork" is based on consensus, the blockchain doesn’t change. If there are political or philosophical differences, the "fork" can lead to a new coin and a split in the developer community.

# What kind of forks are there? #

There are three basic types of forks: unintentional, soft fork, and hard fork.

*Unintentional forks* occur in a proof of work consensus system when two miners simultaneously find and broadcast a block to the network. Some miners will hear about one discovery and will start mining on that block, while another set of miners hear about another discovery and starting mining on that one. This confusion causes two concurrent chains to be constructed with slightly different histories. As a protocol, nodes accept the longest chain as the valid chain. In time, one chain will get ahead of the other and that chain will be the sole accepted chain again. Due to this possibility, miners have adopted a rule of thumb to wait for six block confirmations. If there are six block confirmations after the block containing your transaction, the chances that your transaction resides on the longest block is virtually 100%.

*Soft forks* are backward compatible with the old chain. New block rules are more strict and follow a subset of the old block rules so they coexist in the same chain. Miners can choose to adopt the change and if a certain amount of support is generated, the change will be adopted by the network.

*Hard forks* are when a new chain is incompatible with the old chain. This incompatibility happens if the upgrade causes nodes to reject blocks generated by the old node client software. Nodes must simultaneously switch to the new software in order to continue accepting and generating blocks on the new chain. Hard forks are generally used when there is consensus around a network change. Sometimes you just gotta upgrade that software. This type of hard fork, which enjoys consensus of all the miners on the chain, can be called an intentional hard fork. This very STEEM blockchain has conducted 20 hard forks with community consensus that, although they may have been a hassle to the community, provided robust upgrades and wholesale changes to the protocol.

However, if a hard fork does not enjoy consensus, splitting the network can have dire consequences for the system. The community may splinter into two warring factions due to political or philosophical differences.

# What are the most important forks in crypto history? #

In the short history of blockchain, there are two fork events that every crypto enthusiast should know about. The first occurred on July 20, 2016 when developers on Ethereum, led by Vitalik Buterin and Consensys among others, rolled back the DAO hack and created a fork on the Ethereum blockchain. The coders that disagreed with this decision stayed on the Ethereum Classic chain. They were apparently okay with this little bit of crypto history:

![](https://cdn.steemitimages.com/DQme7KdF81pw4xmbrCozPWgaq81T3hKcNMpNUiCJaJD2wgJ/image.png)

The second must-know fork occurred on August 1, 2017 when, again due to philosophical differences, a subset of BTC miners chose to create a fork of the bitcoin core code in order to increase the block size of BTC blocks from 1 MB to 8 MB. This fork created Bitcoin Cash (BCH). Both of these forks represent contentious hard forks. By contrast, 

In general, knowing about forks in the blockchain industry is important because, as we like to say on [*Block Runners*](https://soundcloud.com/user-535980100), we want to delineate the good from the bad. Although many forks occur due to legitimate divergences in philosophy, some of these projects are outright cash grabs! If you want to determine the quality of your forked coins, we suggest checking the project’s activity on GitHub and the LinkedIn profiles of project leadership. If you find yourself questioning the future of the project after that little bit of research, sell those forking coins!

If you have any questions or comments, please let us know in the comments below! 👇👇👇

# Shownote Resources: #
- https://vitalik.ca/general/2017/03/14/forks_and_markets.html
- https://www.coindesk.com/short-guide-bitcoin-forks-explained
- https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git
- https://www.linuxfoundation.org/blog/2015/04/10-years-of-git-an-interview-with-git-creator-linus-torvalds/
- https://www.cryptocompare.com/coins/guides/the-dao-the-hack-the-soft-fork-and-the-hard-fork/
- http://fortune.com/2017/08/11/bitcoin-cash-hard-fork-price-date-why/

# Social Media: #
- Find us on [LinkedIn](http://www.linkedin.com/company/blockrunners)
- Find us on [iTunes](https://itunes.apple.com/us/podcast/block-runners/id1437172347)
- Find us on [SoundCloud](https://soundcloud.com/user-535980100)
- Find us on Twitter: [@CBvids](https://twitter.com/CBvids) [@shanghaipreneur](https://twitter.com/shanghaipreneur) [@cdsudama](https://twitter.com/cdsudama)

- - -

This page is synchronized from the post: [Blockchain's A Hard Forkin' Thing To Do](https://steemit.com/@shanghaipreneur/blockchain-s-a-hard-forkin-thing-to-do)
