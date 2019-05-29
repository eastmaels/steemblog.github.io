
---
title: "Lightning Network:  Scalable, Instant Bitcoin Transactions."
permlink: lightning-network-scalable-instant-bitcoin-transactions
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-18 00:59:39
categories:
- bitcoin
tags:
- bitcoin
- cryptocurrency
- lightning-network
- scalability
- blockchain
thumbnail: https://steemitimages.com/DQmPGif4zkq2uL3oDXjTAFvGcL4RyaighRZ4yqu3qBDQDNS/maxresdefault.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Hi investors, Dean (@deanliu) and Dan (@tradealert) are back and today we're talking about the Bitcoin Lightning Network and how it could change the financial world as we know it.

![maxresdefault.jpg](https://steemitimages.com/DQmPGif4zkq2uL3oDXjTAFvGcL4RyaighRZ4yqu3qBDQDNS/maxresdefault.jpg)

The Lightning Network (LN) is a scalability solution for the Bitcoin block-chain aiming at solving many of the issues that currently prevent Bitcoin from becoming a true global form of decentralized digital cash.

In this article we will first talk about the origin of Bitcoin and the problems that the network is currently facing (I). We'll then explore how the LN will address these issues and talk about some of the technology's most exciting applications (II). Finally, we'll discuss some of the most common criticism which have been raised against the LN (III).

# I- Problems.
 
The Bitcoin network was originally launched by the anonymous [**Satoshi Nakamoto**](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) in 2008 as a proof-of-concept for a revolutionary, decentralized financial network . Its first application was a distributed ledger allowing users to transact value trustlessly: bitcoin.

In these early days, the network was small and didnít require large blocks to process transactions quickly but as Bitcoin started to gain in popularity, so grew the congestion on the network causing fees to skyrocket and unconfirmed transactions to pile in the mempool. 

![hacker.jpg](https://steemitimages.com/DQmWAbYJqk7yjxS6jaLLtfERP15b9LjUy6M7aDVMmTEN4So/hacker.jpg)

The fee crisis reached a peak on December 22, 2017 when, at the apex of the Bitcoin bubble, a single transaction reached the price of $54 dollars while some users saw their bitcoin stuck on the block-chain for days.
          
Although fees have gone down considerably since ($1.5 at the time of writing), that episode was evidence that Bitcoin wasn't ready to scale to Satoshiís original vision.
          
# II- Solution(s).

The issue of scalability is a very divisive one and has already led to a split in the Bitcoin community when, in July 2017, a powerful group of miners and developers elected to fork off the legacy chain to create Bitcoin-Cash, a version of Bitcoin with bigger blocks (8Mb) and faster mining latency.


![48749491-15155778136031818.png](https://steemitimages.com/DQmUD6TUXvwhTTBfRjJqUdasX9dJBCTUbiQf5xGUZ3CQTab/48749491-15155778136031818.png)

Scaling the Bitcoin block-chain can be implemented in two different ways:

1. by making on-chain transactions faster, either by increasing the block-size to allow more transaction to be mined in a single block or by reducing the latency between two mining events;
1. by taking some of the transaction volume off the main chain onto side-chains or servers.

The "on-chain" approach chosen by Bitcoin Cash is heavily criticized by the legacy Bitcoin community which believes that increasing the blocksize will only lead to concentrating mining and node-running into the hands of only a few operators, eventually compromising the decentralized and trustless nature of the network.
          
The "off-chain" option is the one that relates to the Lightning Network.

![maxresdefault.jpg](https://steemitimages.com/DQmP7sAMzqHmEChSfvSguGBv5f7uU9Q8oC6mQjAUYcYwYoN/maxresdefault.jpg)

The Lightning Network (LN) is a potentially game-changing scalability solution wich is currently being implemented on the "legacy/Segwit" Bitcoin blockchain.  Inspired by payment systems used by financial institutions, the LN is designed to allow Bitcoin to scale to billions of instantaneous, quasi-free transactions per second while preserving the decentralized nature of the network.
          

          
## a- How the LN works.
          
At a basic level, the LN can be best imagined as a network of user-to-user payment channels secured by the Bitcoin block-chain.

![2.PNG](https://steemitimages.com/DQmP3mvMrazMdQ738oiyXj8oe3fUsGSnYD3W8aJiZdyPkqj/2.PNG)

A payment channels is a multi-signature bitcoin address shared by two users and managed by a smart contract. The smart contract is responsible for creating and managing an off-chain ìbalance sheetî which allows the parties to transact indefinitely or for a set amount of time. Once funded, this balance sheet can then be freely and instantly modified until the parties decide to settle their transaction by closing the channel (for a very tiny fee).

![528e948fda31ac641e1abf178399ccd3.png](https://steemitimages.com/DQmecCwdn9zeTGLozjD9ETUn6i3X3b8W3o7f1KKogUMLTDj/528e948fda31ac641e1abf178399ccd3.png)

If any dispute arises between the parties, the smart contract will turn to the blockchain to automatically settle the payment and distribute the bitcoin. In this regard, the role of the blockchain is very much similar to the role of a judiciary court settling a dispute between two contracting parties.
          
Once created, payment channels can then be used to process payments originating from any user in the network. The system is optimized so a payment from user A will hop its way through the network to user B; using existing payment channels or automatically creating new ones as it goes along but always taking the shortest and cheapest route similarly to how packets of information are routed on the internet.
          
In practice, this technology will allow anyone to send instant, cheap payments of any size to anybody on the planet through a simple exchange of QR codes, all in a secure, entirely trust-less and permission-less fashion.

If you wish to know more about how the LN works, I recommend you watch this great video from Savjee's [**YouTube channel**](https://www.youtube.com/channel/UCnxrdFPXJMeHru_b4Q_vTPQ):

https://www.youtube.com/watch?v=rrr_zPmEiME
             
The Lightning Network is currently in development on the  [**Bitcoin test-net**](https://explorer.acinq.co/#/) and is expected to roll-out on the main-net sometime during the year 2018.
          
*PS: The deployment of the LN wonít require a hard-fork so be wary of fraudster who will certainly try to scam unsuspecting users as we near the launch.*

Beside being an elegant scaling solution for the Bitcoin blockchain, the LN also allows for very exciting applications which could end up revolutionizing finance way beyond simple peer-to-peer payment channels.
          
## b- Applications.

Although the LN is still very early in its development, its underlying technology already opens the door to a myriad of exciting applications.


### 1. Lightning Fast Mobile Wallets.

Mobile wallets will play a critical role in Bitcoin's consumer adoption. In their current form, Lightning wallets are rather complex interfaces reserved for technical users. However, as the technology  improves, so will their design and the user experience they provide.

Ideally, the Lightning wallets of the future will hide all the complexities of the LN, letting users only interact with two basic *Send* and *Receive* options while the wallet processes transactions at the best possible price under the hood.

![unnamed.png](https://steemitimages.com/DQmWQsaCCvLeNABFrLj9hSwXxvbUbLDo6dR5x29tH8Ebhit/unnamed.png)

One of the biggest improvement lightning wallets will bring is the ability for users to send micro-transactions to third-parties, merchants or service providers. One can imagine the wallets of the future automatically managing a whole range of services from tipping, to paying bills to micro-transact with IOT device, the possibilities are amazing. 

If you wish to experience first-hand the power and speed of lightning wallets, there are currently two implementations we can recommend: [**Zap**](https://zap.jackmallers.com/) and [**Eclair**](https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet&hl=en), the last one being a mobile wallet on Android and MacOs. Be aware that these projects are still at an alpha stage of development and should be used only on the [**Bitcoin test-net**](https://explorer.acinq.co/#/), doing otherwise would expose you to a loss of funds if things start getting buggy.

         
Hereís a great video tutorial from Ivan on Tech's [**YouTube channel**](https://www.youtube.com/channel/UCrYmtJBtLdtm2ov84ulV-yg) on how to use a Lightning wallet:
https://www.youtube.com/watch?v=B5IPheyaNHA
          
          
          
### 2. Decentralized Exchange of Crypto-Currencies and Financial Assets.

Decentralize exchanges (DEX) are a *very* important part of the crypto ecosystem because they allow anyone to freely trade assets without the need to trust, or be authorized, by a third party. Many DEX solutions have already been implemented on other blockchains. The most popular being  [**WAVES**](https://wavesplatform.com/), [**EtherDelta**](https://etherdelta.com/) or [**0x protocol-based**](https://steemit.com/cryptocurrency/@deanliu/0x-protocol-decentralized-trading-on-ethereum) DEX like [**Paradex**](https://paradex.io/) or [**Radar Relay**](https://radarrelay.com/).

![pros-cons.png](https://steemitimages.com/DQmV3eSt9jj9dQcZvD3jMbphLUJ1EYmtqosbaZmQPnYpovj/pros-cons.png)


For a long time, DEX solutions weren't practical to implement on Bitcoin. Projects like [**Coloured Coins**](http://coloredcoins.org/) or [**Counterparty**](https://counterparty.io/) for example pioneered the idea of transacting traditional financial assets (like securities) on the Bitcoin blockchain.  However the problem these projects encountered was that renting security services from the Bitcoin blockchain to secure assets and provide immutability also meant inheriting Bitcoinís limitations? in terms of transaction time and fees. 

With the  existence of the LN though, digitized financial assets like securities could theoretically be  transferred P2p with no verification time, almost no fees and with the security offered by the bitcoin block-chain.

Traditional finance is a slow and fossilized industry so the transition from NASDAQ to DEX will certainly be an uphill battle (if it ever happens). Nonetheless, weíre starting to see forward-thinking fin-tech companies like Cinnober [**express interest**](https://www.cinnober.com/blog/the-potential-of-the-lightning-network) in setting full-nodes on the LN with the goal of researching the technology and its possible applications in the traditional financial sector.

![What-are-atomic-swaps.jpg](https://steemitimages.com/DQmZ3hKRBAwmppgi1YKKWXzkyfPCP6rin2yExfncWC1Avh2/What-are-atomic-swaps.jpg)

Another path to DEX are *atomic swaps*, a new technology which allows cryptocurrencies and digital assets to be transacted *across* block-chains instantly and for almost no fee. 
Since most cryptocurrencies will in time implement atomic swaps and probably their own version of the LN (ex: Zcashís BOLT network or Litecoin's own Ligthning Network), one  can imagine  a future where bitcoin will be used to instantaneously purchase services or assets managed on third party blockchains. 

> *"Bob wants to diversify his financial portfolio which is mainly in Bitcoin.  He decides to send some bitcoin over to the Tezos blockchain to buy digitized stocks and some to the Ethereum blockchain to buy a digitized fraction of a Picasso painting *via* the [**Maecenas app**](https://www.maecenas.co/). Bob can do all this simply from his wallet, without any friction and for a fraction of a penny."*

The promise of the Lightning network and how it could revolutionize the way we think about finance are indeed tantalizing. However, the LN is not without issues and some of the criticism against it should be addressed.

# IV-Criticism against the LN.

## a- Will the LN create Bitcoin banks?

As we've seen, the speed and low fees of the LN will allow users to send microtransactions over the network. Microtransactions are easy to route through the network due to their small size, however bigger transactions need richer payment channels to be pushed through the network.

Some have predicted that this limitation will lead the lightning network to naturally produce large liquidity hubs akin to banks which over time will lead to yet another form of centralization on the network. This is a fair criticism but there are a couple of elements that might invalidate this prediction.

![pros-cons.png](https://steemitimages.com/DQma21qviYzRDsx3S3S1bn7MirCbNe3R3bQgwfMdK8nKgUg/pros-cons.png)
          
First, creating channels staked with massive balances of bitcoin expose stakers to serious risks of being hacked which is why itís likely that the network will actually organically decentralize itself into smaller-sized payment channels. In this configuration, large payments can still be routed through multiple smaller channels without sacrificing speed of security.

Second, even if the network does happen to foster some degree of centralization, smaller users could still be able to to stake their bitcoin with other users to create their own pool of liquidity and collect fees from the transaction traffic.

          
## b- Will LN Node Operators be Subject to Anti-Money-Laundering (AML) Regulations.

This last concern is much more difficult to predict. In his YouTube Bitcoin Q&A series [**Andreas Antonopoulos**](https://www.youtube.com/channel/UCJWCJCWOxBYSi5DhCieLOLQ) notes that:

>  "*AML regulations only apply to flows of money greater than a certain amount [...] Characterizing all [node operators] a  banks is preposterous  and would only lead to more stealthy implementation*". 

![Science-Law-icon.png](https://steemitimages.com/DQmZYxJEnpYzQruv63BpgsL3RtivNpBF6DhXJC9mNCCZfLF/Science-Law-icon.png)

He also points that those fears already existed in the early days of Bitcoin but that none of the legacy node operators were ever prosecuted for running illegal money transmitting operations.

It's worth pointing though that there is a regulatory risk here and as Bitcoin will gain in popularity and rise to challenge the traditional banking system we could see some regulators take a stricter stance on this issue. After all very few revolutions were ever conducted without a struggle and the financial disruption promised by Bitcoin is likely to provoke a lot of resistance from the traditional banking system.

Exciting times ahead.


****

 **_If you liked this post please consider supporting Dan's blog @tradealert and if you're interested in learning more about cryptocurrencies, come join our  [**awesome community on Discord**](https://discord.gg/4VGVHrs). Don't be shy, it's free!!_**

![TA Discord.jpg](https://steemitimages.com/DQmQbrCF2UW8b69NWRVTBu2crKozuVob2SVVbrzFrALQ9y3/TA%20Discord.jpg)

Also, make sure to go check out Dan's latest review this time on  [**SpankChain**](https://steemit.com/cryptocurreny/@tradealert/spankchain-porn-on-ethereum) and his [**interview with Ernie from Trader of Futures**](https://steemit.com/cryptocurrency/@tradealert/interview-with-ernie-varitimos-the-trader-of-futures).

Dan & Dean.

- - -

This page is synchronized from the post: [Lightning Network:  Scalable, Instant Bitcoin Transactions.](https://steemit.com/@deanliu/lightning-network-scalable-instant-bitcoin-transactions)
