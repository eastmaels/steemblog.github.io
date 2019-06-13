
---
title: 'SCOT Testing underway!!!  Are you ready for your own token that can distribute like Steem?'
permlink: scot-testing-underway-are-you-ready-for-your-own-token-that-can-distribute-like-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-27 17:43:00
categories:
- steem-engine
tags:
- steem-engine
- scottest
- smts
- steem
- crypto
thumbnail: 'https://files.steempeak.com/file/steempeak/aggroed/P5EsF5W7-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://files.steempeak.com/file/steempeak/aggroed/P5EsF5W7-image.png)

SCOT stands for Smart Contract Organizational Token.  It's a Steem-Engine.com project.  We're taking the white paper for Smart Media Tokens (SMTs) and delivering on it to the best of our ability **NOW**.  This post marks the formal beginning of live testing of the prototype we call Novel Distribution: Smart Contract Organizational Token (ND SCOT).

## Who are we?
aggroed manages the project as a whole
crystalhuman and clayboyn help out with customer support and content

The project involves a number of contributing devs-
harpagon built the smart contract software and runs the node
yabapmatt built steem-engine.com as a private front end to the smart contract node.  He also realized and designed the SCOT system to operate on the Steem-Engine platform
he handed the development work off to beggars who is constructing the more recent additions
someguy123 built and manages the token converter that allows other cryptos like btc, bch, ltc, and doge to the exchange for trading
Holger80 has constructed the voting bot that we’re using to launch the SCOT service 
inertia has built a block explorer and helps us with engineering decisions, some programming, and customer concerns

(Special thanks to asgarth who built the dex, and wehmoen who made the first block explorer for the project)

## What's the Vision - Tokenize your community!

You have a community and you'd like to monetize it.  You create a token, distribute it, and users stake it.  They go to yourcoolwebsite.com where you run something that looks a lot like steemit.com (condenser) or your own custom UI; however, the rewards are in COOL tokens, the users don't see every steem post out there by default, and you have more control of what's happening on the site.  You've created your own custom website, from and for your own community, with your own token, and it distributes similarly to Steem.  It trades on steem-engine.com against Steem but you can trade it for  BTC, LTC, BCH, and DOGE nor or against ETH/EOS/BTS/Tron in the near future.

Your token is a success and you're able to sell what you bought, traded, mined, earned, or minted to the community.

It's like the vision for SMTs, but happening today through Steem-Engine.com.

## Where is the project at now?

This is literally my first post that's using the tag `scottest` which is SCOT test.  It's not live on the main production site now.  We're still on the test servers.  So, no, you can't start today, but we're going live with testing as of right now!  Hopefully before the end of May everyone who wants one can get their own community started.

The project is moving in iterative steps from centralized to decentralized as it's progressing.  Right now we're running the SCOT distribution features through essentially a python voting bot, which is a centralized service that is controlled by individual devs and project owners.  As we get this nailed down and working correctly we'll also implement a way to have the same distribution handled by smart contract through Steem-Engine.  We'll let both options exist, but the smart contract version reduces the amount of trust needed in the leaders for the project to be successful.

## How's it work?

Steem-Engine is a layer 2 solution facilitating proof of brain distribution.  Data is stored on the main chain through custom json operations that are added to the main chain by witnesses as users submit actions.  Steem as a blockchain has no idea what any of the Steem-Engine transactions mean, but the blockchain can make sure that all the data provided is validated by consensus.  Any standard Steem block that has transactions that are regarding Steem-engine are picked up and put into a separate chain we call a side chain. 

Our side chain is literally a subset of transactions that were stored on Steem.  The side chain ignores all but the Steem-Engine relevant transactions.  Then the Steem-Engine node kicks in to read the data that is stored on the side chain, interpret it, and execute on it.  "Transfer 17 COOL tokens from aggroed to yabapmatt."  "Issue 30 Drama Tokens" and other activities are executed by the node.  The node doesn't have a p2p layer beyond the witnesses yet, but before the end of the year we hope to have a fully functioning P2P consensus layer for the Steem-Engine nodes (as opposed to witness nodes) with separate block production and block production rewards.  In the meantime you get pretty close to that by independently running your own node to verify transactions so that you can see we're not randomly adding extra tokens to ourselves.

And yes, the node software is opensource!

## Want to run your own token and build your own community website?

We're working on making this as simple as possible.  Some trickiness we can't escape, but it should look something like this and be available in May-

Getting Started
Step 1.  Make a token, set some parameters, and work with us get the voting bot working and potentially (optionally) decide to create your own web portal with it
Step 2.  Issue tokens to users
Step 3.  Users stake tokens
Step 4.  Users create posts on regular steem sites (steempeak, busy, steemit, cryptoempirebot) and just use a tag, or they go through your custom website 
Step 5.  Users vote on each others posts in the normal way, but now they get Steem and other tokens as well!

## Why is this a big deal?

SMTs seem infinitely delayed.  They're likely game changing, but it's tough to know how far into the future we'd have to wait for them to arrive.  In the meantime everyone can create their own Steemit.com like site with their own tokenonimcs starting sometime in May.  If you don't have a community behind you it may not make a big deal.  If people with communities behind them start forming their own token based community here it'll have a drastic effect towards user acquisition, retention, and community empowerment.

People = Value

We need more people hodling Steem, and this can help get them!

Also, think of whaleshares, peerplays, bearshares, and some of the other chain forks that have happened.  Each time they go off on their own it causes some disruption to the main chain.  Imagine instead of forking all of Steem and moving off to a separate community they instead just issued their own token and stayed right here?  They could get the best of both worlds.  They'd still be on Steem which would limit the technical requirements of what they would need to setup a new token, they could still tap into the existing user base instead of starting from scratch, but now they can also get their own token with a distribution that may not be as fucked or be as fucked, but now benefiting new people.

Keeping people in the ecosystem and growing this ecosystem is how we moon.  SCOT facilitates creating and keeping new communities on the blockchain and that to me represents an amazing human growth potential for Steem and crypto as a whole.

## Is there a benefit to the layer 2 solution and this whole side chain thing?

The three biggest positives are timeline to readiness, not requiring Steem hardforks to make changes, and smart contract flexibility.

Speed:  I'd like to think SMTs would have already been here, but they aren't.  I'd like to think they might get formed this year, but I have my doubts.  Every day it seems Steem is slipping a little more on the rankings, and that's bad for price and community size.  Getting launched now puts us ahead of any other blockchain in terms of being able to really create a community that you own through tokenization.  It also removes some of the bad behavior seen on steem or bad actors.  Bad actors likely aren't going to interact much with your posts because they may not receive much steem, but they'll be worth tons of tokens so hopefully they'll be ignored by some of the usual suspects  We need growth and we need it now.  This gets us going.

Hardforks:  If SMTS are built onto the steem blockchain itself then serious changes are going to require hardforks of STEEM.  A hardfork is a particularly scary time.  Not all of the exchanges are good at handling them, and as a consequence any time they come around we risk being offline with some of the major exchanges for days, weeks, or months.  We could also end up with a stopped chain for a while as has happened before.  All of that is bad for the price of Steem and subsequently the activity on it.  If every time the community wants changes to SMTs we have to hardfork it then that's going to cause challenges to getting changes put into the system and changes when they are put into the system.

When we're on a side chain we can hardfork the side chain without worrying as much about the exchanges.  After we make more headway we'll create exchange nodes that the exchanges can run so they can trade our coins, but at the moment we don't have to worry about it.  This gives us some flexibility to grow and change the way the tool works without major disruptions to the entire ecosystem.

Smart Contracts:  SMTs are essentially a smart contract for distributing tokens.  It's pretty robust, but it reminds me of the Henry Ford Quote about the Model T: "it comes in whatever color you want so long as that color is black." Essentially, it's a robust tool, but it can do exactly one set of things.  We're instead creating a smart contract platform that has the potential to respond to any if:then statement and create logic around it.  We can replicate SMTs as we're doing now, but we don't have to stop there.  We can create other contracts and do so faster than the Steem blockchain can be changed.

## Cool Shit

Sit back and watch us, spread the word, come get a token, test this tool with us, build a community starting in May, or whatever.  It's all voluntary, but right now Steem-Engine has enormous potential and we're in the process of unlocking it.  Hopefully you'll join us.  

You can find us in Discord here: https://discord.gg/HykXgCQ

- - -

This page is synchronized from the post: ['SCOT Testing underway!!!  Are you ready for your own token that can distribute like Steem?'](https://steemit.com/@aggroed/scot-testing-underway-are-you-ready-for-your-own-token-that-can-distribute-like-steem)
