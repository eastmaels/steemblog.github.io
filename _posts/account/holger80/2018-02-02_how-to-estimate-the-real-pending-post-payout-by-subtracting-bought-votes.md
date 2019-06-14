
---
title: 'How to estimate the real pending post payout by subtracting bought votes'
permlink: how-to-estimate-the-real-pending-post-payout-by-subtracting-bought-votes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-02 12:20:42
categories:
- steemdev
tags:
- steemdev
- python
- tutorial
- steem
- steemit
thumbnail: 'https://steemitimages.com/DQmNk6F3rj6jaWZXSGR6YXhAFBgbbybt8wfZEzJt1gASpUY/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I wrote in my last post that I bought votes for my last post. I was asking me then: What is the real value of my post?
For answering this question, the pending post-payout and the wallet history must be known. I wrote a small python script, that analyzes the transfer history and is able to calculate the resulting value.

___

In order to run the script, steem python must be installed. I wrote a [small tutorial](https://steemit.com/utopian-io/@holger80/how-to-install-steem-python-for-windows) how to install steem on a windows pc. 
The script can also be downloaded from [Gist](https://gist.github.com/holgern/ca78a832f61a2d8080f95e80ea53c37d).
In the script, the author variable `author = "holger80"` and the postURL `postURL = "https://steemit.com/steemdev/@holger80/how-to-estimate-historic-steempermvests-values-for-converting-old-rewards-from-vest-to-steem"`must be adapted. `author_curate_reward`can set to a value higher than zero, when the author did a self-upvote. The value can be extracted from steemd.com, as explained [here](https://steemit.com/steem/@holger80/how-to-estimate-your-author-reward-payout-with-a-calculator).
## Script output
![](https://steemitimages.com/DQmNk6F3rj6jaWZXSGR6YXhAFBgbbybt8wfZEzJt1gASpUY/image.png)
```
Bought vote with 0.400000 SBD from qustodian
Bought vote with 0.100000 SBD from kobusu
Bought vote with 0.150000 SBD from minnowbooster
0.001000 SBD send back from minnowbooster with memo: You got an upgoat worth roughly 0.4$ in post rewards that will be done by sozdemir. We detected an open value of 0.003 SBD, worth 0.001 SBD in send and refunded that. 
Bought vote with 0.939000 SBD from smartmarket
Bought vote with 0.500000 SBD from minnowbooster
0.002000 SBD send back from minnowbooster with memo: You got an upgoat worth roughly 1.34$ in post rewards that will be done by simnrodrguez. We detected an open value of 0.006 SBD, worth 0.002 SBD in send and refunded that. 
Bought vote with 3.000000 SBD from buildawhale
Bought vote with 2.000000 SBD from smartsteem
Bought vote with 2.000000 SBD from ipromote
---------------
Results for https://steemit.com/steemdev/@holger80/how-to-estimate-historic-steempermvests-values-for-converting-old-rewards-from-vest-to-steem
Estimated payout: 7.963875 SBD and 1.622301 SP
9.086000 SBD used for buying votes, the estimated real post value in SBD (including SP) is 0.803388
```
So I can see that I used 9.08 SBD to buy votes and that the real estimated payout value is only 0.8 SBD.
I converted the Steem Power author reward to SBD. 
___
Let me know if you tried my script and if it's worked or not. 

## Script

```python
from steem import Steem
from steem.amount import Amount
from steem.account import Account
from steem.post import Post
from steem.dex import Dex

if __name__ == "__main__":
    nodes = ['https://api.steemit.com','https://steemd.privex.io','https://steemd.pevo.science','https://rpc.steemliberator.com',
             'https://rpc.buildteam.io','https://steemd.minnowsupportproject.org','https://gtg.steem.house:8090','https://seed.bitcoiner.me']    
    steem_instance = Steem(nodes=nodes)
    # set the Author name
    author = "holger80"
    acc = Account(author, steemd_instance=steem_instance)
    # Set the PostURL here
    postURL = "https://steemit.com/steemdev/@holger80/how-to-estimate-historic-steempermvests-values-for-converting-old-rewards-from-vest-to-steem"
    author_curate_reward = 0.00 # You can get this value fomr steemd.com
    history = acc.get_account_history(-1,4000,order=1,filter_by="transfer")
    buy_vote_amount = 0
    last_vote_buy = ""
    
    vote_bought = False
    for h in history:
        if h['memo'] == postURL:
            buy_vote_amount += Amount(h['amount']).amount
            last_vote_buy = h['to']
            vote_bought = True
            print("Bought vote with %f SBD from %s"%(Amount(h['amount']).amount, h['to']))
        elif vote_bought:
            if h['from'] == last_vote_buy and h['to'] == author and h['memo'].find("http") != 0:
                buy_vote_amount -= Amount(h['amount']).amount
                vote_bought = False
                print("%f SBD send back from %s with memo: %s"%(Amount(h['amount']).amount, h['from'], h['memo']))
    
    p = Post(postURL,steemd_instance=steem_instance)
    
    pending_payout = Amount(p.pending_payout_value).amount
    feed_price = Amount(steem_instance.get_current_median_history_price()['base']).amount
    
    dex = Dex(steemd_instance = steem_instance)
    market_ticker = dex.get_ticker()
    steem_to_sbd = market_ticker['latest']    
    
    payoutSBD = pending_payout * 0.5 * (0.75 + (0.25*author_curate_reward))
    payoutSP = pending_payout * 0.5 * (0.75 + (0.25*author_curate_reward)) / feed_price
    
    realPostValue = payoutSBD + payoutSP * steem_to_sbd - buy_vote_amount
    print("---------------")
    print("Results for %s" %(postURL))
    print("Estimated payout: %f SBD and %f SP"%(payoutSBD,payoutSP))
    print("%f SBD used for buying votes, the estimated real post value in SBD (including SP) is %f"%(buy_vote_amount,realPostValue))
```

- - -

This page is synchronized from the post: ['How to estimate the real pending post payout by subtracting bought votes'](https://steemit.com/@holger80/how-to-estimate-the-real-pending-post-payout-by-subtracting-bought-votes)
