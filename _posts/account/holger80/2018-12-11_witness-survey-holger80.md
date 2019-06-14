
---
title: 'Witness survey - holger80'
permlink: witness-survey-holger80
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-11 17:03:03
categories:
- witnesssurvey
tags:
- witnesssurvey
- witnessupdate
- witness
- witness-category
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My answers to the [first witness survey](https://steemit.com/witnesssurvey/@witnesssurvey/witnesssurveyv1-asqhhy51rj):

> What is your position/stance on bid-bots (ownership/delegations/opinion)? - @abh12345, @ammonite

As there are technically possible, they are existing. They are useful as they allow that everyone can boost the visibility of their post without investing heavily and self-vote. They should only be used for high-quality posts.


> What does the witness want to do to make the blockchain more user-friendly and help to on-board new users. What do THEY personally want to see done and what will they do to get it there? - @ericwilson

I'm working very hard on a user-friendly python library (beem) for steem. With this library, it is easier for developer to create more user-friendly tools to help onboarding new users. I'm writing posts with useful examples which demonstrate the usage of my python library. 

I'm maintaining [beempy](https://beempy.com), in which each new steem user can see the remaining RCs and how many votes, posts or transfer are possible.


> Do you think votes for witnesses should last indefinitely or should they time out (or perhaps decay over time) so that periodically voters will need to reevaluate and affirm their positions by recasting their votes? - @harvhat

Both choices have their advantages, but steem has more important issues at the moment which should be solved first. A decay over time is not easy to implement and may increase the costs in running the nodes, as each vote has to be handled separately (each vote has a unique decay time).

> Do you think the 30 witness votes each steemian gets is the correct number, especially in light of the fact there are only 20 top witnesses to be seated? - @harvhat

I'm in favor for 30 witness votes, so that smaller witnesses have a chance.

> What is a concern or two that you have about the #steem blockchain? - @johnspalding

I think that it is important that the costs of full node APIs are strongly reduced. Without fast full node APIs, nobody can use steem. When this succeeds, we can onboard more users without increasing the costs. The problem is that viewing old posts is quite costly, the post data cannot just be stored on a disc, they have to be partly stored in RAM, which is too expensive. I hope that steemit succeed in bring the down the costs.

> What are you hopeful about for the #steem blockchain? - @johnspalding

There are really great projects on steem (e.g. stemmonsters, actifit, steem keychain, utopian-io, steemstem, ...). They all show that the steem blockchain is not just a place to earn by posting, it allows far more.

> What is the monthly cost of equipment? - @abh12345

At the moment, my witness rewards are almost equal to my server costs.

> Where do your earnings go? - @abh12345

I do no powing down. I support steem-ua ( 5000 SP) and comedyopenmic (500 SP).

> [What are some of your] Current projects? - @abh12345

I'm working since February 2018 on [beem](https://https://github.com/holgern/beem) and continuously improving it. 

I maintain @fullnodeupdate which benchmark continuously (every 3 hours) all full node server and publishes the result on the blockchain.

I'm working on @rewarding a small and free helper for delayed upvotes. @rewarding can also be used to reward already payout posts.

I maintain and develop https://beempy.com, a small and useful site about steem and steemonsters.

> [Will you provide an] Alt accounts list? - @abh12345

I have created several accounts, but I'm actively using:
@rewarding, @fullnodeupdate, @holger.random (posting actifit and other stuff), @curbot (for doing curation experiments), @beembot and @beempy for testing

> What are the benefits associated with being a witness? - @klassic

You actively helping that the steem blockchain is securely running. You can also decide for what your witness rewards are being used.

> How do I become a witness? - @steemingmark

The technical site is not so complicated. The most important part is to participate in projects that provide value for the blockchain and the community.

> What do you think the SBD [STEEM] price for a new account should be? - @harvhat

In order to protect that someone claims all namespaces, they should have a fee. I have set the fee to 3 STEEM as the majority of witnesses.

> What is a witness and how I become a good worker? - @rubaethsyed

A witness provides and run a witness node, on which a block is signed by the witness key on the given schedule. It is important to monitor the server and check for new releases in the github repository. Sometimes there are emergency fixes and it is important that the witnesses update their node.

> Have you implemented any new procedures for evaluating potential hardforks? - @patrickulrich
I wrote some python scripts for testing new steem changes. I'm also doing code reviews of the steem code and post it on steem.

> How does a new user make the availability of his vote known to the cabal of witnesses wannabes trying to overthrow the current witness regime? - @grimgriz

Read blog posts of the witness and check it's github repository, when available.

> Should we have interest for SBD? - @patrickulrich

Not in the current market situation.

> What takeaways do you have from the Hardfork 20 issues that occurred? - @patrickulrich

Code review and a separated testnet is not sufficient. The next HF should be tested on a mirrored (transaction are copied from the steem network) steem network with real data.

> Do you think 20/21 top witnesses a good number or should there be more or less? - @harvhat

I think that number is a good tradeoff between security and costs.

- - -

This page is synchronized from the post: ['Witness survey - holger80'](https://steemit.com/@holger80/witness-survey-holger80)
