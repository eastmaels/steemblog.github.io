
---
title: 'Introducing "Nitrous" to supercharge your Steem-Engine Community'
permlink: introducing-nitrous-to-supercharge-your-steem-engine-community
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-13 01:27:54
categories:
- steem-engine
tags:
- steem-engine
- scot
- smt
- scotbot
- nitrous
thumbnail: 'https://cdn.steemitimages.com/DQmUMYPDDAwDgXWHhLGusbpCq3B9zWqya9DDLn8GmLEEdbA/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmUMYPDDAwDgXWHhLGusbpCq3B9zWqya9DDLn8GmLEEdbA/image.png)

**Big Picture**: Your engine needs Nitrous to really blast off!  Nitrous is software to create a custom website that looks like Steem, but is built for your community and shows rewards in your Scot (token)! 

With Nitrous up and running you have your own version of Steemit.com, but tailored to you!  The style is yours, the colors are yours, the logo is yours, and the token rewards that are displayed are yours!  The service costs money, but if you do it well you'll make money through token sales, advertising, and new ways to monetize your community.

This is tricky.  It's also worth it.  Forgive me while I put a professor hat back on for a few minutes and try to get you all up to speed on the opportunity in front of you.

# What the hell is all this stuff?

**Steem Stuff**
**Steemit Inc** is a blockchain development company that built the steem blockchain

**Steem** is a blockchain which allows for custom data storage outside of posts through a thing called custom json.  It's like leaving post it notes on the blockchain.  Steem is also the name of the cryptocurrency used on the Steem blockchain.

**Steemit.com** is a website/application that distributes rewards through proof of brain and proof of bidbot.

As it turns out, steemit.com isn't the only way to view the blockchain.  You can use sites that aren't currently integrated with keychain (old school) like steemit.com or busy.org.  You can also visit more modern sites that do integrate with keychain like steempeak.com or cryptoempirebot.com.

**SMTs** are smart media tokens.  The white paper exists, but the tokens don't currently exist.  Some of the code has been written already, but it's unfinished.  SMT lite is a token that's issued directly on the Steem blockchain that can be issued and traded.  Full SMTs are custom tokens that distribute like a customizable version of Steem and live on the primary blockchain level.  

# Steem-Engine
**Steem-Engine** is comprised of two majors parts.  A front end and two back ends.  The front end is a private website.  Steem-engine.com is a proprietary front end owned by me and others.  The goals include turning steem-engine.com into a site where any asset class can be exchanged for any other, we help people create their own business or community through tokenization, and we plan to make it the premiere place on the web to launch a security or utility token!

**Steem Smart Contract**- Part of the Steem-engine.com backend for the tokens is run off of the steem smart contract platform that harpagon built.  I don't own it.  We coordinate with harpagon, but that's his baby and it's separate from the site.  It's a second layer smart contract platform.  Custom json operations are posted to the chain by users and interpreted and executed by the node (it reads your postit note, and does the thing).  

**Steem-Engine.com service backend** We (Steem-engine/beggars) are building services on a separate (second) backend to the site that allows things like automation of tasks to occur on the smart contract platform that harpagon built.  So, trading happens through the frontend by calling on the harpagon backend. Facilitating your airdrop runs on the front end by calling on the second (beggars) backend to execute transfers on the smart contract (harpagon) backend.  

**Smart Contract Node status**- The current smart contract node isn't yet fully decentralized, but it is opensource and completely verifiable by people familiar with basic node operation skills and access to github.  The plan is to have a completed Peer-to-Peer layer constructed before the end of 2019 so that the Smart Contract backend is completely decentralized.  This will include block production and rewards paid in newly minted ENG.

# Scot 

Scot stands for smart contract organizational token.  Scot is interchangeable with words like coin or token, but specific to Steem-Engine.  When you issue a Scot on Steem Engine it's a smart contract built on the smart contract platform.  After you create your Scot on Steem-Engine.com you have two additional options to help distribute it: Scotbot, and Nitrous!  

**Business tokens** -  The tokens you create on Steem-Engine.com we call Scot.  As it turns out Scot already has everything you need to serve as a business token.  You can issue and transfer Scot, and it turns out that's all a business really needs the token to do.  This is like all your IBM stock really needs to do is be issued and transfered.

If you're selling simple scot tokens it's pretty likely these are actual securities.  If you're selling them in the US then they'll need to be registered or an exemption filed with the SEC otherwise you may be illegally selling securities in the USA.  Our legal services partnership can do that work on your behalf and it'll cost around $10k and allows you to raise unlimited amounts of money from accredited investors (rich people) or up to $5M/yr from accredited and non-accredited investors while avoiding the challenges (financial and reporting) of full registration.  

The cost to create a simple Scot token on the steem-engine platform is 100 ENG.  ENG is initially priced at 1ENG=1Steem, but there's some good deals on the market at times.  So, just creating the token these days is $20-30 bucks and a one time fee.

# Community Tokens: Scotbot and Nitrous

A community token starts like a normal Scot, but distribution of the token is powered by proof-of-brain (or proof of bidbot).  It's a way to incentivize content creators to post to your specific community through rewarding them for the content they create.

**Scotbot; Community Tokens with proof of brain distribution**- If you're looking to distribute Scot similar to Steem then your options are Scotbot or wait for SMTs!  We will support SMTs too, but they don't exist yet.  So, if you want to start now Scotbot is your only option.

Scotbot is a python voting bot that holger80 built that utilizes design specs of the SMT white paper.  It's kinda like a really pimped out version of the postpromoter bidbots.  Scotbot is not an SMT.  It doesn't even live on the Steem blockchain.  It's on a separate server running python code to distribute Scot in a way similar to what's described for SMTs in the SMT whitepaper.

The bad news is that it costs 1000ENG to setup (~$200-350 on the market), and costs 1eng/active user every month to maintain.

The good news is that if you combine this with things like an ICO and/or you can monetize your content then you should be able to make more money than what you spend for the distribution service.  Additionally, as we automate we expect prices to come down, but for now there's still a fair amount of manual work that goes into this and we need this to operate as a profitable business or risk failing.

## Steps for Scotbot
If you're using Scotbot you have to issue tokens, users stake them, then start posting with a special tag that you coded in the settings when you initialized Scotbot.  

From then on any post on steemit.com, busy, steempeak, cryptoempirebot or others will reward posts with your token as long as voters have the token staked (and assuming your community is up to date on payment or the bot will auto shutoff).

If a user is a Steem whale and a Scot whale then you're gonna be a happy camper.  You'll be able to claim rewards in both Steem and Scot.  We're going to allow Steem +2 Scot to get claimed on any given post.  So, yeah, you can double/triple dip on the same content.

**Scotbot settings** - I'm not gonna lie.  There's a lot of options setting up Scotbot and if you're not techy or math inclined I'm sure it's pretty daunting.  If you have a sense of how you want it to operate, but you're unsure of the best settings message me or post in general in the Steem-Engine Discord.  Me or someone in there should be able to help you figure it out.  The official announcements section has the posts to read through to figure out how to set it up.

Keep in mind you can reconfigure settings if you screw up or want to change it, but we do make people burn 100 ENG whenever the account owner alters them.  We want to enable people to alter the settings, but also discourage people with an active community from changing the settings frequently.  It's a bad user experience if you invest and suddenly the rules change.  It's pretty likely that as communities grow larger we'll have a burn cost for making changes that grows with community size.

# New Service Offering: Nitrous

**Nitrous**- Nitrous is your own custom website for your own custom coin with it's own custom distribution!

Nitrous is a brand new service that you can get after you've created your Scot and setup Scotbot.  I had described it as a vision before and we just launched the prototype for it.  We know more changes are necessary, but we work with the theory of make it live and iterate rather than make it perfect before launch!

We (eonwarped) cloned the github repository (the code) for steemit.com and then started making changes.  We added in keychain, customized images and colors, and reconfigured how the promotional tabs will work (they'll be more useful).  Now we're already integrating custom Steem Engine tokens so post rewards show up as tokens earned rather than Steem earned.  

We're debating whether we open source or close source this.  For now it's close sourced, but we are actively considering if we want to go a different way in the future (can start closed and go open, but it's harder to go the other way).

Nitrous completes the picture of how you deliver tokens.  Create them, configure scotbot, and see them displayed on your own site.

# Nitrous Costs

Nitrous will cost $200 to setup and cost $50/month.  It will be charged and collected through steem-engine.com.  For now it's manual, but we should have it up and running in the next week or two.

## Sinks

Currencies require faucets and sinks.  Scotbot and Nitrous cover how to distribute them (the faucet).  Nitrous can also be used as a sink, which is why it's so critical!

Generally speaking distribution is only 10% of the problem.  The real value and the real challenge comes from the sinks for the currency.  Why does someone want to hold your Scot?  What gives it value?  Why should someone buy it?  The answer to those questions are heavily influenced by "what is the token good for?" or "what is the sink?"  even better "what is the sink for this currency that I can't get anywhere else?"


## Ad revenue and post promotion

So, our next step is to focus sinks for the token, and our first step is to focus on generating revenue for everyone that operates Nitrous.  By the time we're through you should be making much more money on your site than we're charging you.  

To start we're currently reconfiguring how the promotional tab works and we're in early stages of rolling out an ad service.

The short term ad service will likely just be adsense or something like it that can be plugged into your site.  The longer term picture will require building a crypto ad service.  

A few months down the line we'll match advertisers looking for sites and sites looking for advertisers together.  We'll take a small cut, and otherwise the plan is to help the entire ecosystem get monetized through advertisement!  The advertiser will pick some keywords and be able to float through 10k different custom communities to deliver their ads to their perfect target audience.  The site operators will be able to focus on content generation and not have to track down individual advertisers all day long.

If it's all working it'll be conventient for everyone and a great place for advertisers to get attention and site operators to get money.  What you do with that money will be up to you.  

## Community Token Distribution Decisions

You'll want to figure out how you're going to distribute your community token.  You will likely want to start with an ICO or an Airdrop.  The ICO starter is a feature we're working on.  The airdrop already exists on the site through the launch tab.  These are two examples of how to get your token in the hands of users (who then need to stake them in order for scotbot to use those tokens for voting calculations).

## Ongoing Distribution

Once your tokens are distributed you're going to want to figure out ongoing distribution.  You may have a few roles that earn your token (like a moderator).  You may also want to reward people that delegate to your primary steem account.  We'll be working on tools and scripts that make ongoing distribution possible and simple.

## I know this is a lot

I'm a flawed human and I over communicate.  I nerd out and I really like this stuff.  I want you to understand it so that you can make good decisions.  Hopefully you have a sense now of what it'll cost to operate, but also how you'll be able to make money back if you're successful.  

I think this will literally usher in a whole new era for steem where thousands of Scot are powered by Scotbot and fueled Nitrous.  Should be fun and I hope you come along for the ride.

On the off chance you didn't immediately absorb all that and still have questions: https://discord.gg/YhSuY6Y

I think as more examples come into the world it'll be easier to see how this whole thing will work.  Maybe you'll be one of them.

- - -

This page is synchronized from the post: ['Introducing "Nitrous" to supercharge your Steem-Engine Community'](https://steemit.com/@aggroed/introducing-nitrous-to-supercharge-your-steem-engine-community)
