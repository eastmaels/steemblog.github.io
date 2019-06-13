
---
title: 'The ever living poll, tokens, reputation 2.0, and envisioning community diagnostics'
permlink: the-ever-living-poll-tokens-reputation-2-0-and-envisioning-community-diagnostics
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-17 17:57:39
categories:
- steemit
tags:
- steemit
- steem
- reputation
- life
- makereputationgreatagain
thumbnail: 'https://i.imgur.com/yMJ3oS0.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



Problem: determining the reputation and consensus on community member value is hard and currently not very meaningful
Vision: Stake based voting on community chosen attributes
Objective: Implement ever living polls per account per community
Mission: Enable communities to self assess the “reputation” or value a member brings to a community via stake weighted voting

## The failure of reputation 1.0

If you look at the top of your personal page you’ll see a number up there that represents your reputation on the platform.  Anytime you try to boil a lot of things down to 1 number it’s going to have flaws, but reputation is particularly flawed.  

The number lives off chain and it’s largely based on the upvotes you’ve received.  If the upvotes came from people with high reputation and they had a lot of stake weight your scores would improve a lot.  If on the other hand the votes were from low stake and unknown accounts your score wouldn’t move much.  Flags can bring it down.

Reputation 1.0 was gamed from the beginning because a lot of early stake was mined, the mined stake was delegated, and the delegated mined stake had a very heavy influence on rep scores to start.  It wasn’t a level playing field for everyone that wanted to play.  Winners were picked and then because of how exponential voting used to work everyone would pig pile onto those posts to maximize curation rewards.  It lead to a pretty shitty distribution of rewards with a 10-30 authors getting the lion share of posts rewards

Linear rewards came along and screwed rep even more.  Linear rewards made it so that bid bots could exist.  In a sense bidbots already existed because users had been selling votes without them, but it wasn’t open or transparent.  Ok, so now the bid botts accumulate a ton of Steem Power and if you choose to spend a few hundred sbd you could rapidly change your reputation.  Buying your rep seems like a terrible way to have a community get a sense of your value to a community or how well your values mesh with a community.

## Higher Education and Mastery Scores

This is one of the few times being a chemical education minded PhD chemist comes in handy... So bear with me a second.

The whole education movement has been trying to get a much clearer picture of the abilities of students for decades.  If you get a 64 on a test what does it mean?  Are you all around a weak student?  Was that the best grade in the class at that time?  Were there some skills you excelled at and others where you couldn’t do the basics?  A single number isn’t very useful.

So, the education movement looks towards learning outcomes and "mastery scores."  A professor would go through the questions their students have to take and determine what the question is really asking about.  Is it math?  Reading? Vocabulary? Particular skills? And as you ask the question a program tracking your answers starts figuring out how well you’re doing not just as a whole, but for each particular thing you’re being assessed on.

Your 64 becomes a 15/23 for reading, a 19/43 for math, 30/34 for skills assessment.  Now as a professor or instructor you know that particular kid is a weak reader, sucks at math, but has the vast majority of a subset of skills.

Both the total value and the sub-scores have a lot more meaning now!

## Community Derived Reputation through Stake based voting and ever living polls

There’s a team of people that manage the PALnet Discord and Minnow Support Project.  The first mission of MSP is to spread the values of Peace, Abundance, and Liberty.  So, let’s say we launch a token on Steem-engine or later SMTs.  Those tokens get distributed.  We work with the hive mind/stratos/communities developers and get a MSP community page.  The administrators/mods/witnesses set 5 categories that we’re going to track for all of our community members:

1. Peaceful
2. Liberty Minded
3. Abundant
4. Troll
5. Harmful

So, now on every person's page you’re able to at least upvote, possibly downvote, each of these categories for your fellows.  It’s like link'd in skills verification, but for values rather than individual skills.

So, I interact with the community for a while and people start voting on my values.  After 3 months others have weighed in.

(Nerdy note: voting like this is often based on vests. Vests represent actual ownership where as Power represents what’s you’re holding right that minute.  So, the vote totals below are tracked based on the vests you hold for individual Steem engine tokens or SMTs)

7B Vests peaceful
6.2B vests Liberty Minded
9B vests Abundant
3.5B vests Troll
0.4B vests harmful

So, that’s the raw data, then we can do things like figure out what rank would that put me for Peaceful?  The most peaceful, the least?  I could show it as a percent of the total that’s voting.  So, 7B vests of 7B vests voting would give a 100% score, but 7B of 35B vests would give a score of 20%.  So, now I have a few ways to view the and get a sense of where I’m falling in the community.  

Then we could also get a single number too if we want.  We take the positive scores and add them up, and subtract the negative scores.  Maybe they aren’t all weighted equally, so being a troll is a negative, but being harmful is extremely negative.  So here I would get something like 7B+6.2B+9B-3.5B-4B(times 10 cause it’s weighted heavily on the backend)= 14.7B vests and when tracked as a percent of the total that gets me to something like the 92 percentile.

Now you have a general community score for me of 92% (I bet Crimmy gets a 99 or 100% that over achiever).  You can also know it’s coming from my Peacefulness, Liberty mindedness, Abundance, trolling, and the harm I cause and to what degree those are impacting it.

But it’s also an ever living poll, so as people change their behaviors you can adjust your sentiment towards them.  Start acting like an asshole and get value scores reflecting people thinking you are one.

## A community page
So, somewhere there’s a “leaderboard” and I can go through and see how community members in the community are voting for others.  Then as I think “I’d like to get into some kind of partnership or relationship with another person” they’re already somewhat vetted based off of group criteria that the community itself values.

## What might Steemit look like?

The categories I’d suggest are:
Active member
Community Manager
Developer
Business Manager
Investor
Trustworthy
Troll

And again, at a glance you can get a sense of what the rest of the community thinks someone adds to the community.  Then you could go looking for individual people.

## Conclusions

By combining vested tokens, with ever living polling, and the communities feature it’s possible for a community manager to assign values/attributes that individual communities can track and then stake holders can vote on them.  The values could be displayed showing community consensus on the what a person brings to the community as valued by that community.

Should be fun!

## Also, I'm not proposing to build this myself

So, here's to the communities minded guys looking to remake the world through individual communities.  I'm just tossing ideas and geeking out about it a little.


## What might it look like?

Here's a starting mockup.  It's factually wrong, but it doens't really matter, it's just a starting point to have the discussion.


![](https://i.imgur.com/yMJ3oS0.png)




- - -

This page is synchronized from the post: ['The ever living poll, tokens, reputation 2.0, and envisioning community diagnostics'](https://steemit.com/@aggroed/the-ever-living-poll-tokens-reputation-2-0-and-envisioning-community-diagnostics)
