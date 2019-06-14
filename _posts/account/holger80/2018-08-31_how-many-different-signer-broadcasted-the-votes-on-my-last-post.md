
---
title: 'How many different signer broadcasted the votes on my last post?'
permlink: how-many-different-signer-broadcasted-the-votes-on-my-last-post
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-31 12:42:18
categories:
- tutorial
tags:
- tutorial
- python
- steemdev
- beem
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


After reading the last [analysis post](https://steemit.com/utopian-io/@crokkon/what-is-the-reward-pool-share-of-vote-sellers-bid-bots-and-autovotes-1535479520399) from @crokkon, I wanted to know how many different signer broadcasted the votes for my last post. 


The provided script checks the signature of all broadcasted votes. This is done by the following steps:
1. extracting the vote timestamp
2. finding the blocknumber with `get_estimated_block_num`
3. extracting the signature of the vote operation that belongs to the vote
4. extract the public key from the signature  by `Signed_Transaction` using `verify`
5. using a steem rpc-call to get the account name
6. compare the signer account name with the voter account name

```

from beem.wallet import Wallet
from beem.block import Block
from beem.blockchain import Blockchain
from beem.comment import Comment
from beem import Steem
from beemgraphenebase.base58 import Base58
from beembase.signedtransactions import Signed_Transaction


if __name__ == "__main__":

    stm = Steem()
    wallet = Wallet(steem_instance=stm)
    b = Blockchain(steem_instance=stm)

    authorperm = "@holger80/holger80-s-curation-league-week-7"
    c = Comment(authorperm)
    
    new_votes = []
    voter = {}
    signer = {}
    cnt = 0
    current_block_num = b.get_current_block_num()
    for v in c["active_votes"]:
        cnt += 1
        print("%d / %d" % (cnt, len(c["active_votes"])))
        block_num = b.get_estimated_block_num(v["time"])
        transaction = None
        block_search_list = [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5]                       
        block_cnt = 0
        while transaction is None and block_cnt < len(block_search_list):
            if block_num + block_search_list[block_cnt] > current_block_num:
                block_cnt += 1
                continue
            block = Block(block_num + block_search_list[block_cnt], steem_instance=stm)
            for tt in block.transactions:
                for op in tt["operations"]:
                    if isinstance(op, dict) and op["type"][:4] == "vote":
                        if op["value"]["voter"] == v["voter"]:
                            transaction = tt
                    elif isinstance(op, list) and len(op) > 1 and op[0][:4] == "vote":
                        if op[1]["voter"] == v["voter"]:
                            transaction = tt
            block_cnt += 1
        key_accounts = []
        if transaction is not None:
            signed_tx = Signed_Transaction(transaction)
            public_keys = []
            for key in signed_tx.verify(chain=stm.chain_params, recover_parameter=True):
                public_keys.append(format(Base58(key, prefix=stm.prefix), stm.prefix))                            
            
            for key in public_keys:
                pubkey_account = wallet.getAccountFromPublicKey(key)
                if pubkey_account is not None:
                    key_accounts.append(pubkey_account)

        if len(key_accounts) > 0:
            if key_accounts[0] in signer:
                signer[key_accounts[0]].append(v)
            else:
                signer[key_accounts[0]] = [v]
    
    signer_list = []
    signer_is_voter = 0
    signers_not_voters =  []
    for s in signer:
        rshares = 0
        for v in signer[s]:
            rshares += v["rshares"]
        signer_list.append({"signer": s, "votes": len(signer[s]), "rshares": rshares})
        if len(signer[s]) == 1 and s == signer[s][0]["voter"]:
            signer_is_voter += 1
        elif len(signer[s]) == 1:
            signers_not_voters.append({"signer": s, "voter": signer[s][0]["voter"]})
            
    
    sorted_signer_list = sorted(signer_list, key=lambda x: x["votes"], reverse=True)
    
    print("%d signer broadcasted votes for %d accounts" % (len(signer), len(c["active_votes"])))
    print("| # | signer | votes | SBD | votes / n_all_votes")
    print("| --- | --- | --- | --- | --- |")
    rank = 0
    for s in sorted_signer_list[:10]:
        rank += 1
        if s["votes"] > 1:
            print("| %d | %s | %d | %.2f | %.2f %% |" % (rank, s["signer"], s["votes"], stm.rshares_to_sbd(s["rshares"]), 100 * s["votes"] / len(c["active_votes"])))
    print("| signer | voter |")
    print("| --- | --- |")
    for s in signers_not_voters:
        print("| %s | %s |" % (s["signer"], s["voter"]))
```
# Results
42 signer broadcasted votes of 60 different accounts

| # | signer | votes | SBD |
| --- | --- | --- | --- |
| 1 | steemauto | 11 | 0.05 |
| 2 | buildteam | 5 | 0.01 |
| 3 | steemconnect | 4 | 0.01 |
| 4 | steemdunk | 2 | 0.15 |

Additionally to the listed votes above, one account did sign the vote of a different account:

| signer | voter |
| --- | --- |
| remindme.bot | isnochys |

# Conclusion
Around 20% of the votes are broadcasted from auto voting services as steemauto and steemdunk. 9 of the 60 voters did use a different dApp / interface to vote. One vote was signed by another account.

By analysing the signatures of the broadcasted votes, the number of automatically casted votes can be estimated.

If you want to try out the script, you have to do the following steps:
1. install [beem](https://github.com/holgern/beem)
2. save the provided script in a file
3. run it with `python filename.py` inside the python terminal

- - -

This page is synchronized from the post: ['How many different signer broadcasted the votes on my last post?'](https://steemit.com/@holger80/how-many-different-signer-broadcasted-the-votes-on-my-last-post)
