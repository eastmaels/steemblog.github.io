
---
title: 'Scot and Scotbot going live!  Part 1: SE Node Hardfork.'
permlink: scot-and-scotbot-going-live-part-1-se-node-hardfork
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-02 12:35:42
categories:
- steem-engine
tags:
- steem-engine
- scot
- scotbot
- smt
- steem
thumbnail: 'https://i.imgur.com/OAPsDVj.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://i.imgur.com/OAPsDVj.png)


Scot is the Smart Contract Organizational token.  It's modeled after the SMT protocol and we literally use the SMT white paper as the basis for the design spec.  SMTs are quite delayed so if you'd like a way to create and tokenize your community **NOW** we're offering Scot as a way to do it through steem-engine.com!

Want to switch to SMTs later?  Go ahead!  We plan to help launch SMTs as well.  Want to use our smart contract tool that we're working on to distribute tokens in the future? That's ok too. You can switch!  We don't really care which tool you decide to use for your community so long as it's based on Steem!

Also, keep in mind, Scot and Scotbot are starting points to tokenize everything and they are expected to be available to the public starting in about a week (this is still notice of change rather than change itself) .  They aren't necessarily the end game.  Some people may prefer this, others may want different tools, we'll support as many tools as we can that we think will help grow Steem!

## What's happening?

In order for voting to work properly you need to be able to stake tokens.  On Steem, the comparative ability is to take liquid steem and power it up into steem power.  On the test server @harpagon made it so you can go from liquid tokens to token power and @beggars added a UI so users can Stake their tokens (aka power them up) with a few clicks.  

![](https://i.imgur.com/VidClHw.png)


**With staking enabled we're now able to run the voting bot that @holger80 made, which we're calling Scotbot (ND Scot is also a term we'll use).**

We've been testing the staking feature on the QA server for the last week with the scottest token.  We've been testing Scotbot with it too.  It's gone quite smoothly.  So, today we're announcing a Hard Fork for the Steem Engine platform to add the new staking functionality.

The hard fork is scheduled to take place on **Tuesday, May 7th at 8pm EST** on the main node that runs steem-engine.com. Anyone else who is running their own Steem Engine node should plan to update to the new software at around the same time (though it doesn't have to be exact since all of the data and consensus still happens on the Steem blockchain). 

Once the hardfork is done we'll technically be able to run Scot and Scotbot on the live server!  We will likely need time and tooling to bring on board everyone that wants their own community token, but you're welcome to message aggroed in [discord](https://discord.gg/whqnzqT) if you'd like to get moving as soon as possible.

## What happens after it's live?

Then we get rockin' and rollin' with Scot and Scotbot so anyone in the community can create a token and get their proof-of-brain-style reward system up and running.

* Step 1 you'll create a token.
* Step 2 you may want to then airdrop that token.  The interface for that should be out soon.
* Step 3 users will have to stake the token.  There's an easy UI built.
* Step 4 you'll setup scotbot to start distributing your tokens.
* Step 5 users will post normally through steempeak, busy, steemit etc and they'll add tags to the post based on the tokens they are looking to be rewarded in (yes, more than one will work, but we're limiting to 5)
* Step 6 when the post reaches the specified payout period you can claim your rewards in the available Steem Engine token(s).  After 7 days you can claim your Steem rewards normally.

![](https://i.imgur.com/LfnTD1A.jpg)


# It's changable
You screwed up how Scotbot works and want a different distribution framework.  This will be allowed!!!  So, no, it's not a smart contract yet.  The token distributor can change the dynamics/settings of how it's distributed.  This is good and bad!

If you mess up or find there's a better way for this to work with your community then you're going to be happy you can change it.  If you're investing money into a community token and someone changes how it distributes you might get pissed.  

This is a tool launch.  You have to do your own due diligence on tokens and communities you want to put your money into to make sure that the people leading them aren't horrible human beings that will rob you later.  It's crypto, be wary.  The benefit though is that if there's a better way for a token to operate then it can adjust easily on the fly.

## What will running a Scot cost?

We have programming, server, and support costs to run these.  I know lots of crypto people want everything for free, but we simply can't offer that and still be a business that's successful.  Here's the fees we'll be charging.

Scotbot setup = 1000 ENG
Sctbot monthly charge = 1 ENG per active account per month. 

This is billed in arrears.  So, at the end of 30 days we'll count how many unique, active accounts you had over the past month and invoice you for that many ENG.  Failure to pay will result in termination of the Scotbot instance.  (Tokens are still on chain, but it will cease distributing tokens).

Thinking of getting this rolling?  Feel free to message me on Discord!

## What's coming next?  Custom Interfaces!

What we're trying to put into place is the ability to run a condenser clone that will feature your token as the post rewards.  This is under development, but in theory you would go to a custom website like magictoken.xyz, and post there.  All the post rewards would show you how much magic you've earned.  It's like your own personally-branded white label version of steemit.com.  When you click the wallet it'll bring you back to your token wallet in Steem-engine.com.

It's under development and I'll keep you posted.




- - -

This page is synchronized from the post: ['Scot and Scotbot going live!  Part 1: SE Node Hardfork.'](https://steemit.com/@aggroed/scot-and-scotbot-going-live-part-1-se-node-hardfork)
