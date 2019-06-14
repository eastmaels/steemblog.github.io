
---
title: 'How to reduce the curator reward from 25 % to 0.54 % with example'
permlink: how-to-reduce-the-curator-reward-from-25-to-0-54-with-example
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-11 15:40:51
categories:
- curator-friendly
tags:
- curator-friendly
- nobidbot
- steemit
- community
- curation
thumbnail: 'https://gateway.ipfs.io/ipfs/QmQiFWYTdpktNXANcYFkgPXTLpo2AdGXaFPSR8JWG1HktB'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Without self-vote and no other vote within the first 30 minutes, all curators receive the full 25 % of post payout after 7 days. Today I  was shocked how much curation rewards can be removed by self-voting and buying votes from bit-bods. I was analyzed a contribution from bitcoinflood with [beempy](https://github.com/holgern/beem) (I have nothing against the author or his contribution, I use this post just as example):

```
beempy curation https://steemit.com/bitcoin/@bitcoinflood/robinhood-now-more-available-including-my-state
+------------------+-------------+-------------+-----------------+----------+-------------+

| Voter            | Voting time | Vote        | Early vote loss | Curation | Performance |
+------------------+-------------+-------------+-----------------+----------+-------------+

| bitcoinflood     | 0.3 min     | 1.321 SBD   | 1.308 SBD       | 0.013 SP | 3.4 %       |
| minnowbooster    | 2.8 min     | 179.424 SBD | 162.678 SBD     | 1.380 SP | 2.6 %       |
| alanmirza        | 3.0 min     | 0.028 SBD   | 0.025 SBD       | 0.000 SP | 2.0 %       |
| gameapk          | 3.2 min     | 0.027 SBD   | 0.024 SBD       | 0.000 SP | 2.1 %       |
| fuzzyvest        | 3.9 min     | 68.102 SBD  | 59.362 SBD      | 0.296 SP | 1.5 %       |
| ridhomaslizal    | 6.1 min     | 0.003 SBD   | 0.003 SBD       | 0.000 SP | 1.9 %       |
| fitnessfirst     | 6.2 min     | 0.006 SBD   | 0.005 SBD       | 0.000 SP | 2.0 %       |
| xeniaioannou     | 6.9 min     | 0.003 SBD   | 0.002 SBD       | 0.000 SP | 2.0 %       |
| stranded         | 7.0 min     | 0.003 SBD   | 0.002 SBD       | 0.000 SP | 2.3 %       |
| hungryhustle     | 7.8 min     | 0.023 SBD   | 0.017 SBD       | 0.000 SP | 2.5 %       |
| mike-mike        | 8.5 min     | 0.007 SBD   | 0.005 SBD       | 0.000 SP | 2.7 %       |
| boity            | 9.6 min     | 0.034 SBD   | 0.023 SBD       | 0.000 SP | 3.1 %       |
| ajijulhakimimran | 9.8 min     | 0.001 SBD   | 0.001 SBD       | 0.000 SP | 2.5 %       |
| jcharles         | 11.4 min    | 0.003 SBD   | 0.002 SBD       | 0.000 SP | 3.6 %       |
| visionarypush    | 11.8 min    | 0.003 SBD   | 0.002 SBD       | 0.000 SP | 3.8 %       |
| dylanhobalart    | 12.9 min    | 0.007 SBD   | 0.004 SBD       | 0.000 SP | 4.3 %       |
| laritheghost     | 14.8 min    | 0.017 SBD   | 0.008 SBD       | 0.000 SP | 4.8 %       |
| trendygran       | 14.9 min    | 0.001 SBD   | 0.001 SBD       | 0.000 SP | 4.2 %       |
| sam7             | 15.4 min    | 0.001 SBD   | 0.001 SBD       | 0.000 SP | 4.7 %       |
| linvestidor      | 15.6 min    | 0.003 SBD   | 0.002 SBD       | 0.000 SP | 4.9 %       |
| sheikhsalman     | 16.4 min    | 0.002 SBD   | 0.001 SBD       | 0.000 SP | 4.9 %       |
| richardgreen     | 16.7 min    | 0.003 SBD   | 0.001 SBD       | 0.000 SP | 5.3 %       |
| jibon975         | 19.1 min    | 0.003 SBD   | 0.001 SBD       | 0.000 SP | 6.2 %       |
| newageinv        | 21.1 min    | 0.126 SBD   | 0.037 SBD       | 0.003 SP | 6.9 %       |
| gigpen           | 21.9 min    | 0.003 SBD   | 0.001 SBD       | 0.000 SP | 6.9 %       |
| scubacoin        | 22.1 min    | 0.003 SBD   | 0.001 SBD       | 0.000 SP | 7.0 %       |
| speda            | 22.8 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 7.7 %       |
| cryptoeagle      | 23.7 min    | 0.103 SBD   | 0.022 SBD       | 0.002 SP | 7.8 %       |
| kojot97          | 24.0 min    | 0.003 SBD   | 0.001 SBD       | 0.000 SP | 7.9 %       |
| evesick          | 24.1 min    | 0.012 SBD   | 0.002 SBD       | 0.000 SP | 7.8 %       |
| ehabakhdar       | 24.6 min    | 0.039 SBD   | 0.007 SBD       | 0.001 SP | 8.1 %       |
| cryptobeans      | 26.9 min    | 0.025 SBD   | 0.003 SBD       | 0.001 SP | 8.9 %       |
| stackin          | 28.4 min    | 0.076 SBD   | 0.004 SBD       | 0.002 SP | 9.3 %       |
| wanizubair       | 28.6 min    | 0.033 SBD   | 0.002 SBD       | 0.001 SP | 9.4 %       |
| minnowsupport    | 28.7 min    | 0.131 SBD   | 0.006 SBD       | 0.004 SP | 9.4 %       |
| pqbd             | 30.5 min    | 0.004 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| gmichelbkk       | 31.1 min    | 0.013 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| seanlloyd        | 32.2 min    | 0.033 SBD   | 0.000 SBD       | 0.001 SP | 9.9 %       |
| sammir           | 32.5 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| gekko            | 32.7 min    | 0.018 SBD   | 0.000 SBD       | 0.001 SP | 9.9 %       |
| midas            | 33.0 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| gvincentjosephm  | 33.4 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.1 %      |
| mrwalt           | 35.0 min    | 0.000 SBD   | 0.000 SBD       | 0.000 SP | 10.7 %      |
| neonartist       | 36.1 min    | 0.262 SBD   | 0.000 SBD       | 0.008 SP | 9.9 %       |
| hyperguru        | 36.4 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| rasel49          | 38.2 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| bobnevv          | 40.1 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| nievogro         | 43.1 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| dimon14          | 48.0 min    | 0.074 SBD   | 0.000 SBD       | 0.002 SP | 9.9 %       |
| kofibeatz        | 51.0 min    | 0.024 SBD   | 0.000 SBD       | 0.001 SP | 9.9 %       |
| zackyy           | 53.6 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| allyouneedtoknow | 57.4 min    | 0.448 SBD   | 0.000 SBD       | 0.013 SP | 9.9 %       |
| heyimsnuffles    | 62.5 min    | 0.007 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| robinhoodupme    | 62.6 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.1 %      |
| fastpromoter     | 63.3 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| digitaldruid     | 65.8 min    | 0.013 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| firefoxxxxx1     | 66.0 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| markeverlasting  | 70.8 min    | 0.005 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| lost-tiger-films | 79.9 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.3 %      |
| joyfulstar       | 82.3 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| synergenius      | 82.7 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| verotti          | 92.6 min    | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| biblegateway     | 93.0 min    | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| biffboff         | 102.5 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 9.6 %       |
| bigbiggi70       | 102.9 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.2 %      |
| nima11           | 109.8 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| samue2013        | 139.7 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 9.3 %       |
| etka             | 193.6 min   | 0.062 SBD   | 0.000 SBD       | 0.002 SP | 9.9 %       |
| susanalara       | 202.5 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| sergnak          | 262.5 min   | 0.002 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| lpge2392         | 274.8 min   | 0.011 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| minestein        | 290.8 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| badabing94       | 308.4 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.1 %      |
| originalathena   | 308.5 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 9.0 %       |
| senseicat        | 381.2 min   | 0.082 SBD   | 0.000 SBD       | 0.002 SP | 9.9 %       |
| amtarek23        | 483.2 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| josewaldemar20   | 504.4 min   | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.6 %      |
| mecarlo          | 573.6 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| aldahyr77        | 669.9 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| spllouder        | 706.9 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| mars000          | 709.7 min   | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| wcw15wc          | 761.4 min   | 0.002 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| drac59           | 803.5 min   | 0.015 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| james0603        | 886.1 min   | 0.002 SBD   | 0.000 SBD       | 0.000 SP | 10.0 %      |
| grownsolutions   | 952.3 min   | 0.002 SBD   | 0.000 SBD       | 0.000 SP | 9.7 %       |
| anarchistpreneur | 1012.4 min  | 0.008 SBD   | 0.000 SBD       | 0.000 SP | 9.9 %       |
| lulita           | 1152.7 min  | 0.079 SBD   | 0.000 SBD       | 0.002 SP | 9.9 %       |
| izatullah        | 1179.0 min  | 0.003 SBD   | 0.000 SBD       | 0.000 SP | 9.8 %       |
| qbearer          | 1203.2 min  | 0.001 SBD   | 0.000 SBD       | 0.000 SP | 10.4 %      |
|                  |             |             |                 |          |             |
| High. vote       | 2.8 min     | 179.424 SBD | 162.678 SBD     | 1.380 SP | 2.6 %       |
| High. Cur.       | 35.0 min    | 0.000 SBD   | 0.000 SBD       | 0.000 SP | 10.7 %      |
| Sum              | -           | 250.818 SBD | 223.562 SBD     | 1.740 SP | 2.36 %      |
+------------------+-------------+-------------+-----------------+----------+-------------+
```
<center>
![image.png](https://gateway.ipfs.io/ipfs/QmQiFWYTdpktNXANcYFkgPXTLpo2AdGXaFPSR8JWG1HktB)
</center>

### Early vote penalty 
The early vote penalty reduces the curation rewards pot, as the penalty amount is directly transfered from the curators to the author. In the example 223.562 SBD were removed from the complete reward pot and only 27.256 SBD remains. From these 27.256 SBD 75 % goes to the author and the remaining 25 % (6.814 SBD) remains for all curators. 
```
curation percentage = ((250.818 -  223.562) * 0.25) / 250.818 * 100 %
````
The curation rewards go from 25 % down to 2.7 %.

### Early votes reduces the curation rewards even more
The bid bot vote was high and early, (179.424 SBD vote, 2.8 minutes after post creation). Thus, 80 % of the curation rewards pot goes to the bid bot. 
So in the end, the curation rewards are only 0.54 % or 0.36 SP.

### Any curation rewards left?
By self-voting within the first minute and using bot votes within the first 3 minutes, the curation reward pot was reduced from 25 % to  0.54 % for all other curators (from 18.44 SP to 0.36 SP). The individual curation rewards are after 30 minutes around 10 %. 

### Gain for the author
![image.png](https://gateway.ipfs.io/ipfs/QmQ4ht5K3WJcHzSFxhfTGVRTmfQvHS1ttz1bVitbYEtb4C)
The bid bot vote has cost 100 SBD.
![image.png](https://gateway.ipfs.io/ipfs/QmdaGoiXdA6XD6VCFjaPuxnGigHm3M3o6WV3LwohJyH7s8)
With a current market conversion price of 0.8 SBD/STEEM,
The remaining reward for the author after subtracting 100 SBD will be 22.524 SBD + 36.058 SP.

### Using bid bots without Hardfork 20 (current situation)
Without any other vote than the self-vote and the bid-bot vote, the resulting payout would be
```
Author reward = (Votes  - ((Votes - Early vote loss) * 0.25)) / 2  - Bid bot costs SBD + (Votes  - ((Votes - Early vote loss) * 0.25)) / 2 / STEEM price SP 
Author reward = ((1.321 + 179.424)  - (((1.321 + 179.424) - (1.308 + 162.678)) * 0.25)) / 2 - 100 SBD +  ((1.321 + 179.424)  - (((1.321 + 179.424) - (1.308 + 162.678)) * 0.25)) / 2 / 3.40 SP 
Author reward =  -11.722 SBD + 25.964 SP
```
The current market conversion price  is 0.8 SBD/STEEM, so in the end the author gaines 9.05 SBD for an article that nobody has seen and upvoted.
Currently, the proof of brain does not work. It is possible to make money with posts that nobody must read.

### Using bid bots with Hardfork 20
Luckily there will be soon a new Hardfork 20 on steemit. In this hardfork, the early vote loss window is reduced to 15 minutes and the early vote loss is not added to author rewards but given back to the pool.
What will happen when HF 20 is active with our example:
```
Author reward = Votes * 0.75 * 0.5 - Bid bot costs +Votes * 0.75 * 0.5 / Steem median price 
Author reward = (1.321 + 179.424) * 0.75 * 0.5 - 100 SBD + (1.321 + 179.424) * 0.75 * 0.5 / 3.4 SP 
Author reward = -32.22 SBD + 19.93 SP
```
The  current market conversion price is 0.8 SBD/STEEM, so in the end the author looses 16.28 SBD.


### Solution to the Visibility - Curation reward dilemma
When not using a bid bot, the curation reward pot remains high, but nobody may see the post and the author may receive nothing for his hard work. So using bid bots increase visiblity and assure that the author will receive something in return. At the moment curators are not necessary and only a nice gift when using bid bots within the first minutes.

Luckily, a lot of bid bot seller allow only posts with a minimum age of 15 / 20 or 30 minutes. So by not using bid bots within the first 15 minutes, curators do not lose almost all curation. They have the chance to vote before and can gain high curation rewards.

### Curator-friendly contribution
This post is curator-friendly, I will self-vote my post after 1400 minutes (24 hours) to reward my voters. The chance is high that i will forget this, so I created a vote rule in steemdunk.xyz:
![image.png](https://gateway.ipfs.io/ipfs/QmPtHNw35e7hkhsEWbfQzfEoEeiMVxLeDKNxF75kPv6q3Q)
I will not use bid-bots, only the nice automatic vote from qurator, Steembased income and others. 
### Conclusion
With Hardfork 20, the proof of brain concept will be working again. I'm looking really forward to the fork!! 

There is also a second benefit from HF 20:
All websites which are showing pending rewards will finally show the correct author reward with HF 20 (At the moment, the Early vote loss is not added to the pending author rewards).

I have nothing against bid bots, only when they are used within the first minutes so that the maximum possible curation rewards are strongly reduced.

- - -

This page is synchronized from the post: ['How to reduce the curator reward from 25 % to 0.54 % with example'](https://steemit.com/@holger80/how-to-reduce-the-curator-reward-from-25-to-0-54-with-example)
