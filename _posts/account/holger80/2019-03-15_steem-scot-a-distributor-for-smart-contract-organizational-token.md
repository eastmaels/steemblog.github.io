
---
title: 'steem-scot - a distributor for Smart Contract Organizational Token'
permlink: steem-scot-a-distributor-for-smart-contract-organizational-token
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-15 00:08:00
categories:
- utopian-io
tags:
- utopian-io
- development
- scot
- steem-engine
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXZMR6VTgyPuEarv4ekrNgFE8dwFxJPVkwEDEpWznrcRv'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



![image.png](https://ipfs.busy.org/ipfs/QmXZMR6VTgyPuEarv4ekrNgFE8dwFxJPVkwEDEpWznrcRv)


### Repository
https://github.com/holgern/steem-scot

### steem-scot
The python scitp steem-scot is an implementation for distribute Smart Contract Organizational Token (SCOT). 
It is possible to define a yearly inflation of the SCOT token. Each day, one part of the SCOT token are transferred from the SCOT account to accounts that were upvoted by SCOT token holders.
The amount of SCOT token that is sent, depends on the upvote weight, the amount of SCOT token the voter had and the inflation. It is possible to include only posts that are from a specific app, have the token symbol as tag or have the token symbol inside a new `SETokensSupported` field in the post json_metadata.

This post is a contribution to the [SCOT Dev contest](https://steemit.com/steem-engine/@aggroed/dev-contest-1000-eng-open-source-steem-engine-voting-bot).

### How does it work
At the beginning, I'm calculating the block number from yesterday (UTC) 0:00:00 and 23:59:59 by
```
        b = Blockchain(steem_instance=self.stm)
        
        yesterday = date.today() - timedelta(days=1)
        yesterday_0_0_0 = datetime(yesterday.year, yesterday.month, yesterday.day)
        yesterday_23_59_59 = datetime(yesterday.year, yesterday.month, yesterday.day, 23,59, 59)
        start_block = b.get_estimated_block_num(addTzInfo(yesterday_0_0_0))
        stop_block = b.get_estimated_block_num(addTzInfo(yesterday_23_59_59))
```
Then I check if there is any token transfer of the SCOT token in this period:
```
        token_sent_last_24_h = 0
        for hist in self.token_wallet.get_history(self.scot_token["symbol"]):
            timestamp = datetime.strptime(hist["timestamp"], timeFormatZ)
            if timestamp <= yesterday_23_59_59:
                continue
            print(hist)
            if hist["from"] != self.config["scot_account"]:
                continue
            token_sent_last_24_h = float(hist["quantity"])
```
When there was no token transfer, I proceed.
I fetch all token holder:
```
        offset = 0
        get_holder = self.scot_token.get_holder()
        offset += 1000
        new_holder = self.scot_token.get_holder(offset=offset)
        while len(new_holder) > 0:
            get_holder.append(new_holder)
            offset += 1000
            new_holder = self.scot_token.get_holder(offset=offset)  
```
calculate how many token are there:
```
        token_sum = 0
        for item in get_holder:
            if item["account"] == self.config["scot_account"]:
                continue
            token_sum += float(item["balance"])
```
and calculate, based on the daily inflation how many token should be send for a 100% upvote:
```
        for item in get_holder:
            if item["account"] == self.config["scot_account"]:
                continue
            token_sum += float(item["balance"])
            if float(item["balance"]) > 0:
                token_per_100_vote[item["account"]] = (float(item["balance"]) / token_sum) * self.daily_inflation / 10
```
`(float(item["balance"]) / token_sum)` is the part of the holder on all available tokens. ` (float(item["balance"]) / token_sum) * self.daily_inflation` is then the daily amount for the holder to distribute. As there are 10 upvotes a day, token_per_100_vote is the number divided by 10.

In the next step, I stream all vote ops from the last day:
```
        token_to_authors = {}
        b = Blockchain(steem_instance=self.stm)
        for op in b.stream(start=start_block, stop=stop_block, opNames=["vote"], max_batch_size=50):
            if op["voter"] not in token_per_100_vote:
                continue
            if not self.config["downvotes"] and op["weight"] < 0:
                continue
            if not self.config["upvotes"] and op["weight"] > 0:
                continue
            comment = Comment(op, steem_instance=self.stm)
            try:
                comment.refresh()
            except:
                print("Could not fetch %s" % comment["authorperm"])
                continue
            json_metadata = comment["json_metadata"]
            app = None
            SETokensSupported = None
            if isinstance(json_metadata, str):
                json_metadata = json.loads(json_metadata)
            if "app" in json_metadata:
                app = json_metadata["app"]
                if isinstance(app, dict) and "name" in app:
                    app = app["name"]
                elif isinstance(app, dict):
                    app = ""
            if "SETokensSupported" in json_metadata:
                SETokensSupported = json_metadata["SETokensSupported"]
            
            app_or_symbol = False
            if app is not None and len(self.config["included_apps"]) > 0 and app != "" and app in self.config["included_apps"]:
                app_or_symbol = True
            elif self.config["include_token_as_tag"] and self.scot_token["symbol"] in comment["tags"]:
                app_or_symbol = True
            elif SETokensSupported is not None and len(SETokensSupported) > 0 and self.scot_token["symbol"] in SETokensSupported:
                app_or_symbol = True
            if not app_or_symbol and not self.config["include_all_posts"]:
                continue
    
            token_amount = abs(op["weight"]) / 10000 * token_per_100_vote[op["voter"]]
            if op["weight"] < 0:
                if op["voter"] not in token_to_authors:
                    token_to_authors[op["voter"]] = token_amount
                else:
                    token_to_authors[op["voter"]] += token_amount
            else:
                if op["author"] not in token_to_authors:
                    token_to_authors[op["author"]] = token_amount
                else:
                    token_to_authors[op["author"]] += token_amount
```
and add the token to the token_to_authors dict.

As now less then 10 votes could be done per holder, I correct the token to the maximum available token amount:
```
token_to_authors[author] = token_to_authors[author] * self.daily_inflation / token_amount_to_sent
```
I take also the token precision into account and round the amount to sent:
```
token_to_authors[author] = math.floor(token_to_authors[author] * 10**self.scot_token["precision"]) / 10**self.scot_token["precision"]
```

Finally, the token are transferred:
```
        for author in token_to_authors:
            if token_to_authors[author] < 10**(-self.scot_token["precision"]):
                continue
            if self.config["no_broadcast"]:
                logger.info("Sending %f %s to %s" % (token_to_authors[author], self.scot_token["symbol"], author))
            else:
                self.token_wallet.transfer(author, token_to_authors[author], self.scot_token["symbol"], memo=self.config["token_memo"])
                time.sleep(4)
```

### Installation

The package can be installed by
```
pip install steem-scot
```
### Usage
Then a config.json need to be created and the token can be  distributed once a day (after UTC 0:0:0) by:

```
scot config.json
```

A beempy wallet must be created and the active key of the scot_account must be added before.

The following fields must be included into the config.json:

|        Option       | Value                                                |
|:-------------------:|------------------------------------------------------|
| scot_account | steem account name, which should distribute the token       |
| scot_token   | token symbol, which should be distributed                   |
| token_memo   | memo which is attached to each token transfer               |
| yearly_inflation | yearly_inflation / 365 is the amount which is distributed daily |
| included_apps | When set to [], it is skipped. Can include a list of apps which should be included into the distribution |
| include_token_as_tag | When true, posts which have the token as one tag, are included |
| include_all_posts | When false, a upvote of a post is only included when the app is added to included_apps, the symbol is added as tag or the symbol is added as SETokensSupported field in the post json_metadata |
| downvotes | When true, downvoter which downvoted included posts will receive token |
| upvotes | When true, post authors, which were upvoted by token holder will receive token |
| wallet_password | Contains the beempy wallet password |
| no_broadcast | When true, no transfer is made |

### Example
Let's assume the DRAGON token are a SCOT. The config.json could then be:

```
{
        "scot_account": "legendarydragons",
        "scot_token": "DRAGON",
        "token_memo":"Daily token share, please visit ... for more information.",
        "yearly_inflation": 10000,
        "included_apps": [],
        "include_token_as_tag": true,
        "include_all_posts":true,
        "downvotes":false,
        "upvotes":true,
        "wallet_password": "wallet_pass",
        "no_broadcast": true
}
```
The output of `scot config.json` is then:
```
INFO:scot.scot:Check token transfer from legendarydragons...
INFO:scot.scot:No token transfer were found, continue...
INFO:scot.scot:58 token holder were found.
INFO:scot.scot:Start to send 27.397232 token to 556 accounts
INFO:scot.scot:Sending 0.154256 DRAGON to steemsports
INFO:scot.scot:Sending 0.030952 DRAGON to linnyplant
INFO:scot.scot:Sending 1.238393 DRAGON to intrepidphotos
.....
```


#### Technology Stack
steem-scot uses [beem](https://github.com/holgern/beem) and the [steemengine](https://github.com/holgern/steemengine) library.

#### Roadmap
I'm planing to add more configuration methods. At the moment two restriction are in place:
transfers can only be made once a day after 0:0:0 UTC. Maybe, adding a timezone and allow distribution of token more than once are good ideas.


#### How to contribute
Bugs and ideas can be added as issue to github: https://github.com/holgern/steem-scot
Pull requests are welcome.

#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steem-scot - a distributor for Smart Contract Organizational Token'](https://steemit.com/@holger80/steem-scot-a-distributor-for-smart-contract-organizational-token)
