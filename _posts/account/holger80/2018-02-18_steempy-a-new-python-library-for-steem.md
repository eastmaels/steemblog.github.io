
---
title: 'steempy - a new python library for steem'
permlink: steempy-a-new-python-library-for-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-18 21:52:36
categories:
- utopian-io
tags:
- utopian-io
- python
- steem
- steem-python
- steempy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


We all know the official [python library for steem](https://github.com/steemit/steem-python).


I decided to write a new python library for steem, as steem-python do not uses synergies with the BitShares network. Furthermore, the source code of steem-python is in a bad shape and there are almost no unit-tests. In meantime, [python-graphenelib](https://github.com/xeroc/python-graphenelib) is actively developed and it is a obvious step to use this library for any Graphene 2.0 blockchain.

So I present today a new python library for steem called _steempy_. This new library is at the beginning of its developement. [steempy](https://github.com/holgern/steempy) is based on [python-bitshares](https://github.com/xeroc/python-bitshares) and [python-graphenelib](https://github.com/xeroc/python-graphenelib). steempy can be installed besides the official steem-python library. 

At the moment, steempy has a different API than steem-python. Unlike steem-python, steempy  uses a RPC-Websockt for connection with the steem nodes. So the node-address must start with wss, e.g. wss://gtg.steem.house:8090.

## Important links
* https://github.com/holgern/steempy
* http://steempy.readthedocs.io/en/latest/
* https://pypi.python.org/pypi/steempy
## Installation
 ```
pip install steempy
 ```
or
 ```
git clone https://github.com/holgern/steempy.git
cd steempy
python setup.py build
python setup.py install --user
 ```

## Python files inside steempy
### Account
* Is a BlockchainObject class
* Contains information about one account 
* history and balances functions
### Amount
* dict class with amount, symbol and asset
* regular mathematical expression possible
### Block
* Is a BlockchainObject class
* Contains information about one block
### Blockchain
* Is a BlockchainObject class
* Contains information about the blockchain
* Stream function
* get_all_accounts, feed_history, current_median_history_price, get_current_block, block_time and more functions
### BlockchainObject
* dict class
* cache function
### Memo
* uses the wallet class for message encryption/decryption
### Notify
* Is a Events class and uses Websocket
* Can be used to stream all blocks
### Price
* Is a dict class
* Can be used for things like  `Price("0.315 SBD/STEEM")`
### Steem
* Connect to the Steem network.
* Uses the SteemNodeRPC class to send calls to the Steem network
* Functions for finalizes transaction and key management
### Storage
* Uses a sql3-database to store user keys
### Transactionbuilder
* dict class
* Simplifies the creation of transactions
### Vote
* Represents a vote
* Is used by ActiveVotes (all votes from a post) and AccountVotes (all votes from an account)
### Wallet
* Manages private keys for an account
### Witness
* Read data about a witness 
## Python files inside steempybase
### account
* Wrapper for graphenebase.account 
### bip38
* Wrapper for graphenebase.bip38
### memo
* Function for encryption/decryption of a memo
### objects
* Containts classes which represents objects, which are used in operations in the steem blockchain, as  Account, Amount, Operation, Permission, ...
* Used for signing a transaction
### operations
* Contains classes which represents operations on the blockchain as Transfer, Vote, Account_create,...
* Used for signing a transaction
### signedtransaction
* Wrapper for graphenebase.signedtransactions
## Python files/classes inside steempyapi
### SteemNodeRPC
* Wrapper for grapheneapi.graphenewsrpc
### SteemWebsocket
* Event class
* Create a websocket connection and request push notifications
* Can be used to stream each Block

## How does steempy work
### Read a account
 ```
from steempy.account import Account
account = Account("holger80")
print(account)
<Account holger80>
 ```
### Access the Blockchain
 ```
from steempy.blockchain import Blockchain
b = Blockchain()
b.get_all_accounts()
b.get_current_block()
b.current_median_history_price()
b.feed_history()
 ```
### Votes
 ```
from steempy.vote import AccountVotes
allVotes = AccountVotes("holger80")
 ```
### Stream all blocks
 ```
 from pprint import pprint
 from steempy.notify import Notify

notify = Notify(  on_block=print  )
notify.listen()
 ```

### Current state
* The current version is 0.19.2
* Account, Amount, Asset, Block, Blockchain, Instance, Memo, Message, Notify, Price, Steem, Transactionbuilder, Vote, Witness are working
* Signed transactions are working
* At the moment, only transfer-transaction is implemented
* 67 % coverage by unit tests
* Used CI-tools: travis, appveyor, circeci and codecov
* published to [pypi](https://pypi.python.org/pypi/steempy)
* [documentation](http://steempy.readthedocs.io/en/latest/) available

### Roadmap
* Add all missing transactions, as posts,comments, votes, ...
* Add more function regarding the account
* Add Post and Comment class
* Add CLI-programms
* Rename the library to beem, steempy is the name of the CLI tool from python-steem.

## How to contribute
* You are invited to fork my [repo](https://github.com/holgern/steempy) and submit pull requests
* If you have an issue, please let me know

___
What do you think? Do you have suggestions? What do think about the name of my library? Is steempy a good name or should I change it?
   


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/steempy-a-new-python-library-for-steem">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['steempy - a new python library for steem'](https://steemit.com/@holger80/steempy-a-new-python-library-for-steem)
