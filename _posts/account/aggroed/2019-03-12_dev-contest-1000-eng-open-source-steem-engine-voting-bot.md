
---
title: 'Dev Contest// 1000 ENG // Open Source Steem Engine Voting Bot'
permlink: dev-contest-1000-eng-open-source-steem-engine-voting-bot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-12 03:26:30
categories:
- steem-engine
tags:
- steem-engine
- eng
- crypto
- life
- scot
thumbnail: 'https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmTFFL2YuUFxFC1UTEZiV5feVC8o64ff2FXKoxEApgX1h9/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmTFFL2YuUFxFC1UTEZiV5feVC8o64ff2FXKoxEApgX1h9/image.png)

Steem-Engine is hosting a competition to invent S.C.O.T.  SCOT stands for Smart Contract Organizational Token.  SCOT is essentially a voting botlayered on top of a Steem Engine token.  SCOT tracks and distributes Steem Engine tokens beyond just Steem.  It's a baby step to creating decentralized community tokens on the Steem Engine platform.

This project is inspired by the quote "anything you can do with a smart contract I can do with a bot and a set of keys." This seems like a really quick way to get these tokens distributed to users within a community.  We will likely work on additional smart contract approaches, but they will take many months to develop where as we expect SCOT should be a fairly quick project.

The first person/team to create SCOT which meets the requirements and project objective  will be given 1000 ENG tokens.  Runners up may be chosen and given 500 ENG tokens.

SCOT requirements-

It must be open source
It must use Steem-Engine tokens
It must distribute tokens based on voting patterns on the steem blockchain

## Story mode

A community organizer creates a token on the Steem Engine platform and sets a high enough supply cap such that they feel confidant that inflation has enough time to ramp up.  SCOT has the active key and issues tokens every day based on infation rules.  

Users go through either a token specific app (like partiko, appics, steepshot) or through a more general condenser instance (steemit, mspsteem, steempeak) and vote normally.  Tokens are either chosen automatically based on the app or chosen manually through an interface.

Users of the app vote and interact normally, but based on the voting pattern the bot is also distributing Steem-Engine tokens once per day.

Users can choose to boost their posts using the voting bot script attached.  This will foster token specific custom trending and ranking pages for the different tokens/communities.

## Details
A user can set the amount of inflation (by year if they so choose).
The inflation is paid out daily through voting.
The amount of inflation earned daily by a user is determined by how many votes they receive and how much Token Power the voter had and chose to use.
There is no Staking in this system so 1 Token = 1 Token Power.
A user gets 10 votes per day.  (Bonus if you can allow the program to accept non 100% votes, bonus for figuring out downvoting).
We suspect an app will have a special json code automatically applied to all posts through their interface to note those posts are accepting a certain token.  Non app specific condenser instances will have to build a UI to allow users to choose a handful (5 or fewer) tokens to be able to receive on a post they make. 

So, a user goes through an app, makes a post and other users upvote them.  They don't have much steem, but the voters do have a lot of app/SE tokens.  The user receives little steem, but gets a lot of app tokens at the end of the day. 


## Global Setting
 We suggest Steem Engine create a key like "SETokensSupported" which would be an array of SE Tokens symbol, for example, a json_metadata:
 
``{
  "app": "steemit/1.23",
  "SETokensSupported": ["TKN1", "TKN2", "TKN3"]
  "format": "html",
  "tags": ["steemit", "steem"],
  "users": ["ned", "dan"],
  "images": ["https://img.busy6.com/@ned"],
  "videos": [
    "https://www.youtube.com/watch?v=rkQ7b-u8_6g",
    "https://www.youtube.com/watch?v=H399YZ0pv0o"
  ],
  "status": "archived",
  "canonical":
    "http://blog.steem.io/steem/@ned/the-first-phase-of-the-steem-faq-and-wikee-consolidation-of-knowledge"
}``

If you have a different suggestion or approach be sure to include that in your submission.

## Best of luck!  Contact us in Discord if you have any questions

- - -

This page is synchronized from the post: ['Dev Contest// 1000 ENG // Open Source Steem Engine Voting Bot'](https://steemit.com/@aggroed/dev-contest-1000-eng-open-source-steem-engine-voting-bot)
