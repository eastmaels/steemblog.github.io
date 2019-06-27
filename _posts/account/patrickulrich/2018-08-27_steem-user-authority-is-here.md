
---
title: 'Steem User Authority Is Here!'
permlink: steem-user-authority-is-here
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-27 16:54:57
categories:
- ua
tags:
- ua
- steem
- reputation
- userauthority
- news
thumbnail: 'https://cdn.steemitimages.com/DQmSREN1kFXbXoF4LesEBygzHfTEvuYByvwyPP5KPfHvnE8/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://cdn.steemitimages.com/DQmSREN1kFXbXoF4LesEBygzHfTEvuYByvwyPP5KPfHvnE8/image.png)</center>

I missed some big news yesterday until I seen a post this morning by the always informative @taskmaster4450 detailing the announcement of @steem-ua. I've been following the idea behind User Authority for some time so seeing their release is extremely exciting for me.

## What is User Authority?
The best way I've seen anyone describe it is to compare it to Google's PageRank  that they've used to determine search engine results. The difference here is that they are applying this to user profiles and posts. Essentially they are able to determine a user's rankings on the Steem chain by who you are connected to which enables a much better basis for identifying "good" users on Steem.

For example if you are new and have no followers then your UA will be much lower than someone that has tons of connections to other users. What's even better is that if you are connected to a network of 100,000 spam accounts that just post nothing material then your UA would be lower than someone that has 100 followers who are good Steemians and are a strong part of the community.

It's able to accomplish this task by determining who follows you and unfollows you. Each block their algorithm will look at who is in your follower graph, along with who left your graph, and assign a score. This is amplified by your connection back to the witnesses we elect on the Steem chain. So if you are followed directly by a bunch of the witnesses then your UA will be much stronger. For each level of separation from the witnesses, or other high ranked UA users, then their increase to your rank becomes slightly lower.

TL;DR - User Authority > Current Rep System

## How can I find my UA?

<center>![](https://cdn.steemitimages.com/DQmbwYFtDPeYLpNQsQbYXZaKq3szGFyJbFyGXD68EuR59bV/image.png)</center>

You can find your own UA score by visiting https://steem-ua.com/. From there simply click the ['View Your UA Score'](https://v2.steemconnect.com/oauth2/authorize?client_id=steem-ua.app&redirect_uri=https%3A%2F%2Fsteem-ua.com%3A5000%2Fauth&scope=login) link then sign in with SteemConnect to determine your score. Unfortunately due to server load you can only see your score on this link plus the top 100 UA accounts from the main page. That being said if you're interested to what mine would look like then you can see this screenshot:

<center>![](https://cdn.steemitimages.com/DQmP8Vw7KGWhfoewydVNY5XWhcgNFsvMjmeqfCScff4Zr9E/image.png)</center>

That being said if you're not already following me please think about doing so. I'd love to surpass a 5000 UA rank! :)

## Why is UA important?

User Authority is one of the biggest innovations for our chain in a while in my humble opinion. It will allow developers to build in features that utilize people's rank to better filter out spam or abuse. These are just a few ideas that I've seen tossed around or have thought up:

#### Bid Bot Rank Requirements

I can't take full credit for this because @smartsteem is already working to do this from my understanding. Imagine though that instead of allowing any user to buy bids you would only allow users with a UA of say 1. This would help to ensure that content that is actually useful is being promoted while spammers are unable to use the service. I think it would go a long way towards ending the animosity towards these types of services and ensure that trending is more reserved for actual 'good' content.

I happen to think this is so important that I've actually submitted an issue request for the open source Post Promoter project to begin integrating UA options into bidbots. I sincerely hope to see this looked at and more options for bot operators to become available.

#### Trending Pages

Speaking of trending this could be another great use. If you use any of the popular condensers like Busy.org or Steempeak.com they could eventually integrate UA to help you filter posts. This would allow you to see what well vetted individuals are posting without having to sort through the waves of nothing posts that are promoted by bidbots or other voting buying services. You could essentially filter to just the most connected users. The options are really endless!

#### Airdrops

If you're not familiar, Byteball recently offered an airdrop to Steemians based on our current rep system. Unfortunately the current system is fairly easy to game by using high repped bid bots to buy promotion on posts and improve your own. This allowed many spammers to create new accounts and then promote posts to redeem lots of Byteballs that they probably shouldn't have received. With a UA rank this would be much harder to accomplish as it would be much tougher to move up the rankings of UA. From some comments on the official release announcement it seems that they are already looking into doing just this for Byteball in the future!

#### Many, Many More

These were just a few examples but I'm sure you can put your imagination to many more opportunities. With the ability to determine an account's true reputation there are endless apps that can be built that were only slightly possible before but would have been far to easy to game to be efficient. Now some even more serious innovation can begin taking place. I'd love to hear some of your ideas in the comments below!

## I want to learn more!

The best place to start is going to be the @steem-ua steem account. They will be releasing many more updates so following them should help keep you in the know. Outside of that be sure to read their recent release at:

https://steemit.com/ua/@steem-ua/introducing-userauthority-ua-steem-ua-and-ua-api

- - -

This page is synchronized from the post: ['Steem User Authority Is Here!'](https://steemit.com/@patrickulrich/steem-user-authority-is-here)
