
---
title: '@aggroed interviews Steemit''s hightech wizard @gtg aka @gandalf about the future and stability of the Steemit Blockchain.'
permlink: aggroed-interviews-steemit-s-hightech-wizard-gtg-aka-gandalf-about-the-future-and-stability-of-the-steemit-blockchain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-24 20:40:06
categories:
- steemit
tags:
- steemit
- steemdev
- witness
- witness-update
- steemwizard
thumbnail: 'https://steemitimages.com/DQmd1XAJWP37vfkXqMFXbxx61XAZVgGoVYe95Vp6bFaDPMg/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmd1XAJWP37vfkXqMFXbxx61XAZVgGoVYe95Vp6bFaDPMg/image.png)



It's a pleasure to share a special guest with you all today. I have the great honor of having @gtg (also known as @gandalf) speak a few words with us about the Steem blockchain. @gtg can often be found as the number 1 Witness on Steem and is well known for his technical skills as an IT wizard, system administrator, and developer. I've been following a story for a little bit about how the Steem Blockchain application is working, and I want to address some concerns about it's ultimate fate.  

While the website is called Steemit the blockchain program is called `steemd`.  When you blog on steemit.com, the website is actually pulling data from and pushing data to the blockchain through `steemd`. Steemit.com is basically a fairly convenient looking glass for what's written on the actual blocks, which is Steem. The program that powers steemit.com to look at the material on the blockchain is called `condenser`.  All the witnesses are running servers that store the information written into the Blockchain and it's our witness servers that build what you write and do as new blocks on the blockchain.

A few weeks back several of the larger RPC nodes, which are used by developers to run programs off of Steemd (not just for reading/writing blogs) crashed on the same day, and the witnesses and community were alarmed, annoyed at the loss of various bots, programs, and tools, and lastly concerned about the future of the Blockchain.  While the programs didn't cease to exist, many were temporarily disabled as they may not have been configured to go to backup nodes or re-establish connections after a loss, or the nodes they chose to re-establish connections to were also down.  Anyway, a lot of community members voiced concerns on the block.

In part, the severity of the concern at the time was caused by the account l0k1 who was writing about the immanent death of Steemd due to increasing RAM storage requirements that will eventually cause the program to shutdown.  (l0ki also goes by the handles elfspice and calibrae, they were joined by the additional account faddat).  It's worth noting they were simultaneously promoting their own blockchain application at the time.   @gtg responded then and has been working hard on the backend to minimize some requirements and also calm fears.  This article is designed to offer more clarity on the strength of the Steem blockchain, ecosystem, and the witnesses and developers behind it.

---

@gtg, can you state what happened in your opinion on the day that many of the full RPC nodes shut down?

> It's not what happened in my opinion. It's just what happened :-)

> One of my nodes was affected too. I remember that moment exactly. I was at the Warsaw Steem Meetup. [Mitchell](/@zurvanic) was giving his great speech, while I was looking at incoming alerts from my node.

> I've collected useful data from that crash and sent them to Steemit dev team. Just after 69 minutes I received the first feedback and 25 minutes after that there was a complete, detailed description of the cause along with solution proposal.

> The outage was caused by a bug in the tags plugin. Full RPC nodes run a number of non-consensus plugins to support various frontend features for condenser ([Steemit.com](https://steemit.com) is powered by [condenser](https://github.com/steemit/condenser)) and other apps.

> These plugins are not as robustly tested as the consensus logic. The blockchain itself and other types of nodes like seed nodes, witness nodes, exchange nodes, etc. were unaffected.

@gtg, do you think that those nodes are likely to keep running into the same problem?

>No. It is fixed now.

>Of course like with every software new issues might appear in the future but with such an awesome community and filled with skilled developers I'm sure they would be quickly addressed and fixed. That's how it works now (I've experienced it myself), but in a long term it would be even better.

> If you are paying attention on what changes are being made to the platform infrastructure you might notice that there are upcomming new features that will allow migration of the plugins functionality to services external to `steemd`. For steem powered service providers it would be a great improvement. It would not only let you use specialized data backends to deal with whatever functionality you need (graphs? sql? full text searches?) but also, in future if there were a similar bug, then only a specified service and a subset of frontend functionality would be affected until it's fixed and there would be no need to touch `steemd`.  This is a great upcoming improvement overall.

@gtg, for many witnesses a full node used to take under 100g of RAM on a server, and now without setting up unique configurations take over 100G of RAM.  You've recently stated that you can run a full RPC node under 64G of RAM.  What's the financial impact of being able to run on a smaller system, and how are you able to do it?

> For full node it is crucial to provide very fast access to the shared memory file. Low latency is the key. There's no need to keep whole file in RAM, but if portions of it are not there, they need to be quickly accessed. Using `tmpfs` is a very effective way to achieve that goal.

>When I get enough time I will write a post about my node setup.
I used to (until recently) run my public full node on a machine with 32GB RAM, and I moved out not because of a slow performance or lack of RAM but because of something more trivial: running out of disk space (no option to add it for reasonable price to that config).

>Please note, that hardware costs to run a node is just a very small factor of a total cost of running a public service. This is not a Steem specific, it's how things work in a real system administration and programming world.

@gtg, How do you see technology evolving here?  It seems you're using a combination of storage devices in conjunction with RAM, do you think this is going to be a long term stable approach to scaling Steemit to millions of users in addition to the hundreds of thousands of accounts we have now?

> With current approach we can scale 100x easily and there are ongoing optimizations that would help going beyond that. As for hardware resources, for example `i3.2xlarge` on Amazon EC2 is not only a good way to go as for now but has a lot potential to handle future growth.

>Of course there are many challenges that need to be addressed, and fortunately they can be addressed ahead of time.

@gtg, last question, @followbtcnews (and @crimsonclad) just started the steemd.minnowsupportproject.org RPC node.  Any tricks you can share with us to reduce it's requirements?  How can the other witnesses learn and repeat the success that you're having?

> All depends on your needs. My goal is to provide a service for general use, with all reasonable features. As I already mentioned using `tmpfs` for shared memory file is an effective method for keeping low latency access without need to have huge amounts of RAM.

> For that to work you need a fast storage for swap space and other assets like the `block_log`.

> Replaying the Steem blockchain is a really demanding process when it comes to I/O, but once the reindex is done, load on storage would be significantly lower.

> For production grade infrastructure environment, you might consider preparing snapshot of a consistent blockchain state (shared memory file and `block_log` with index) on a separate instance and deliver it to your public instance for faster turnaround.

---
![](https://steemitimages.com/DQmZP4FbhituiUovuFsfBFYZ6oYu351XrCVxpckcy2EFFYG/image.png)
"Steem Wizard" image by @inber

The first image is also by @inber entitled "Gandalf making Steem Wizardry"

---

Liquid rewards from this post will be split between @followbtcnews for the steemd.minnowsupport.org RPC node cost and @gtg for his RPC node.

- - -

This page is synchronized from the post: ['@aggroed interviews Steemit''s hightech wizard @gtg aka @gandalf about the future and stability of the Steemit Blockchain.'](https://steemit.com/@aggroed/aggroed-interviews-steemit-s-hightech-wizard-gtg-aka-gandalf-about-the-future-and-stability-of-the-steemit-blockchain)
