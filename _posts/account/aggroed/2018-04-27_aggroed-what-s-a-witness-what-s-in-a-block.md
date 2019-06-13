
---
title: '"Aggroed, what''s a witness?  What''s in a block?"'
permlink: aggroed-what-s-a-witness-what-s-in-a-block
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-27 04:15:30
categories:
- witness
tags:
- witness
- steem
- steemit
- life
- crypto
thumbnail: 'https://steemitimages.com/DQmdpYcYDeCBcBrKZUPof7gZ7XGCnaVwyEnesi2UJjSMHy2/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmdpYcYDeCBcBrKZUPof7gZ7XGCnaVwyEnesi2UJjSMHy2/image.png)

Hey Minnow.  I'm glad you asked.  That's a great question.  There is a simple answer, and then there is a more complicated answer.  I typically think there are two things called a witness.  A witness is a server running a program that helps create a blockchain.  A witness is also a man/woman/furry/team that runs the witness server.  Most people that are asking me this question are from the Steem community.  Most blockchains don't have a witness role.  They operate on Proof of Work rather than Delegated Proof of stake.  There are benefits and drawbacks to both approaches.  PoW is harder to compromise.  DPoS tends to be orders of magnitude faster.

## Server
What's it take to run a witness server?  Running the server isn't the world's most impossible task.  You can get a VPS from a number of places and use @someguy123's Steem in a box setup to get it launched.  Other's choose to build it from scratch, but the Docker image makes the whole thing pretty quick and easy to get up and running.  Once you have a server running you're going to want to get a price feed up and running.  There are several options for that.  Then you might consider a backup server to make sure you never miss blocks.  Then you probably want a failover script to make sure if you start missing blocks that it switches to your second server.  You might also want to run a seed node or a RPC node so that you can get street cred and votes for adding more value to the block than simply a witness node.

It can get pricey to be a witness.  It's best to do it because you love Steem rather than looking to make money.  Often times getting started as a witness is slow, painful, and expensive.  So, it's a labor of love.  It might also be part of a business.  If you need a dependable way to queery the blockchain than there's no better assurance than your own dedicated RPC.

## Success

How do you succeed as a witness?  You have to add value to the chain.  Lots of people can run servers.  So, just running a server isn't enough.  You have to provide value.  What adds value?  That's a pretty broad question.  I generally reference two ways that people have been succesful earning votes: building cool things for the block or building good communities for the block.  @jesta is my goto for awesome block creations.  Homie made steemd.com which I use every day and vessel which I also use every day.  I think @clayop is a great example of a community builder, and the value that brings.  He helped establish the Korean community, which later became a powerhouse trading Steem and helped bring us to the prices we enjoy today.  I do think there's room for creative types up here too, but thus far most of the top witnesses don't blog frequently.  So, you gotta create a great app/dapp or community that helps grow the block or it's capabilities.  Then you also have to be noticed, kind, political, help others, and answer a million DMs and send a million requests for support.  After that you're a witness, and you'll start "getting blocks."  

## Building the chain

The number of blocks you add to the chain as a witness is dependent on the votes you've received.  The whole chain is stake weighted.  So, it doesn't technically matter to your rank how many votes you have.  What determines rank is the combined SP that your votes represent.  The top 20 witnesses are treated as if they all achieved the same level.  

There's a new block added to the chain every 3 seconds.  In a 63 second rotation each of the top 20 witnesses will add one block to the chain and once during that 63 seconds a backup witness will join in on the fun.   The top witnesses receive about 0.194 Steem for each of those blocks and will get roughly 1400 blocks per day.   The witnesses below the top 20 have a shot at being the backup witness porportional to the amount of SP supporting them as witnesses.  As a result the 21st witness will often witness 60 blocks per day and a brand new witness might get a block every few days.  Backup witness blocks reward backup witnesses with 0.97 Steem per block.

Where does the Steem for that come from?  Well, the platform has inflation.  The current inflation is between 9-10% and it goes down roughly 1/2 a percent every year for the next 18 years or so.  That inflation is paid out to current users of the Steem blockchain.  It's split between curation (when you upvote some goes back to you), authors (post authors), comment authors (write a comment and get upvotes), stake weighted interest (those that own steem get a proportional amount given to them by the block), and witnesses.

![](https://steemitimages.com/DQmS8eRhgyfXajGFY64rTcLKMRjh99b8CK8RbvgFN8ovHo1/image.png)

This is how the chain attracts witnesses who then work on building communities and proejcts that add value to the blockchain.

## What's a block and what's in it?

A block is a list of all the stuff that happened on the chain in the last 3 seconds.  Some blocks are practically empty.  Some blocks are filled to max capacity and stuff moves into later blocks.  Blocks can contain votes, follows, posts, comments, transactions to name a few operations.  Let's check some out!

[Here's](https://steemdb.com/block/21921888) a block that I recently witnessed.  So, let's open it up and explore what's in there.

The first thing you'll notice is a block number, who witnessed the block, and a date.
![](https://steemitimages.com/DQmX9tixTxXwQJUMLwW5spxL9EdBA6gvgjZZEaFnTWnyT5k/image.png)

Today I'm only going to discuss operations.  The first few operations in this block are a few votes.  In the top one @bruce-wayne is voting for a post by @mariobros.

![](https://steemitimages.com/DQmYqXJLAWzmy8XVNsyiovbWtfuaRDAPbCnR6AQMoP1oPmo/image.png)





Here you can see what a follow looks like.  In this case @genagena is choosing to follow @ramizraja.

![](https://steemitimages.com/DQmVeCAYKLjvk6ntHQMj1zqo3KsF45Zzx29wi2RKUE2WsnY/image.png)


This one is neat.  It's a "reply."  In this case because there is no parent_author that "reply" is actually a new post that's going out.  This one is under the primary tag "spanish" and as you may notice the author is speaking in spanish.

![](https://steemitimages.com/DQmSQpEJDshVboJ7CUTogiefQpofDPfdTwP8aMzYbmHyCrQ/image.png)

In this next part we have @spaceginger who is claiming their rewards balance of 2 vests.  What's a vest?  Well, before there was steem power there were vests.  In part because vests were super hard to explain and they needed to rescale them pretty drastically they changed the name to Steem Power, but underneath steem power are vests.  There's currently a ratio of 2036 vests per steem power.  So, 2 vests is a very small amount to claim.

![](https://steemitimages.com/DQmef2aotvc33G1ZNDiZcoSDDFD93pLngJ67sRbu2DqH8J1/image.png)

OOh Cool!  I got a second post in the same block!  This one is by @ejemai and it's called "... there's nothing better than love."  Notice how the whole post is nothing but text when read by the chain?  We keep the block smaller by using html links to images and youtube rather than storing the actual data on the chain itself.

![](https://steemitimages.com/DQmPKmsbqUtuRREadjxmYdjFjvzf78a7YksCr3Hgr4hk9bu/image.png)

Here's a reply that's actually a reply.  In this case it's @cheetah laying down the law with @maffiarules.  
![](https://steemitimages.com/DQmbRsMxLWy29fMjQqbVZ6HTjCPouLcWGRsPiA6TXCjmDYz/image.png)

Here's a transfer.  In this case @steemflow is buying a vote from @booster for his [post](https://steemit.com/steemit/@steemflow/calling-opinions-steemit-a-money-making-platform-or-community-development)
![](https://steemitimages.com/DQmQKLFWcJiqsU5QwQKtdsGhvLXWv8Bdj4rveiDoZYuSHyv/image.png)

There's many examples of these in any given block, but in case you've never explored a block I thought I would help shine a light on it and let you guys take a peek under the hood.  It's worth taking a look.  [You'll never know how awesome a thing you might find in there](https://steemit.com/community/@aggroed/witness-repot-what-i-ve-already-witnessed-as-a-witness-has-brought-me-to-tears-this-community-is-amazing).

## Witnessing in pictures

I also commissioned these art pieces to help describe some of the various roles that you take on as a Witness.  Remember, these are elected positions in a 1M account community.  It's a huge honor and a big deal.  I've loved my job as a Witness.  It can be extremely taxing and the job never stops and there's a few hundred people that want the gig, but this place is pretty freaking special and it's my digital home.  It's been worth the effort over the last 2 years.

![20170612__100__Advocate.png](https://steemitimages.com/DQmW5Vdd9ybLHwFF1mac47ymBQGaqHBUkYjLkN27YQQPtLV/20170612__100__Advocate.png)

![20170612__090__Professor.png](https://steemitimages.com/DQmTh5NLuwUcya2EEEE3UPrrpsx1ejbv2Dt4LLvu8ADJqEj/20170612__090__Professor.png)

![20170612__080__Curator.png](https://steemitimages.com/DQmVn2gK3U6S1yrHk7TqQAJVVMD5SkoVATn2CwJtkg52GqN/20170612__080__Curator.png)

![20170612__070__Author.png](https://steemitimages.com/DQmbxVMUwAiKwUaQuuwzNwU7Z1WR1hV5xrcHAVenqNENj6G/20170612__070__Author.png)

![20170612__060__Protector.png](https://steemitimages.com/DQmUJhS8LufBuKyAdAeu13ffiuEmP29v1SR4MJsZpJeTZwq/20170612__060__Protector.png)


![20170612__050__Ambassador.png](https://steemitimages.com/DQmdmPseEoBuviieCogCPGxzxJmnJ1zuEpf2u6FetR2vQYG/20170612__050__Ambassador.png)




![20170612__040__Community_Organizer.png](https://steemitimages.com/DQmd7paCdRkF6QAnXHfZTgAyKhELmeKkGnubdJ9fQpSKSN6/20170612__040__Community_Organizer.png)





![20170612__030__Programmer.png](https://steemitimages.com/DQmWVRLdihb9sAoJ4ASFMpZsHpvTG9ZzFnVDH1LgCQRTG14/20170612__030__Programmer.png)





![20170612__020__Chain_Builder.png](https://steemitimages.com/DQmSPcYwvpfJWLRqtyQ6bva12PqHoXNhgx75LDUCXmMgtcC/20170612__020__Chain_Builder.png)





![20170612__010__Visionary.png](https://steemitimages.com/DQmT8k8nufDKJ61THS4jPWY2scLBPghJfhaNpGAv2bGhEwo/20170612__010__Visionary.png)

- - -

This page is synchronized from the post: ['"Aggroed, what''s a witness?  What''s in a block?"'](https://steemit.com/@aggroed/aggroed-what-s-a-witness-what-s-in-a-block)
