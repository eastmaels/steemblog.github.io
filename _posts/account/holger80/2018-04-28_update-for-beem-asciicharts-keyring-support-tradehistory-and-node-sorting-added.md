
---
title: 'Update for beem - AsciiCharts, keyring support, trade_history and node sorting added'
permlink: update-for-beem-asciicharts-keyring-support-tradehistory-and-node-sorting-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-28 11:38:21
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- beempy
- python-steem
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>

[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 430 unit tests and a coverage of 83 %. The current version is 0.19.25.

I created a discord channel for answering question or discussing beem: https://discord.gg/4HM592V

# New Features
## AsciiChart for beempy
A new class `AsciiChart ` was added to beem. It switches automatically to ascii symbols, when using it with python 2.7.

### Price history
` beempy pricehistory` shows the price history and the current median price. Width and height can be changed by e.g. ` beempy pricehistory --height 10 --width 10`.

![image.png](https://cdn.utopian.io/posts/46dee9f3fa7993ac1eaf8c8b5a63244407daimage.png)

### Trade history
` beempy tradehistory` shows the market conversion of STEEM/SBD of the last 7 days. It uses the new `trade_history `  function. The default settings of the optional parameter are:
`beempy tradehistory --days 7 --hours 2 --limit 100 --height 75 --width 15`. 

* ` days` is the time horizont of trades to be included
* `hour` is the intervall time from which `limit` trades are taken into account. E.g.  ` --hours 1 --limit 25` means that every hour 25 trades are fetched from the node and the mean value is calcuated from it.
It is not possible to use all trades as this would take too long.

![image.png](https://cdn.utopian.io/posts/9fedecbbe58e2c5be001c8ca7db0f2626b47image.png)

### Chart for orderbook
` beempy orderbook --chart` visualize the current open orders. The vertical line shows where bids and asks face each other. `--limit` can be used to include more openorders. ` --height <int> --width <int>` can be used to change heigth and width of the chart.

![image.png](https://cdn.utopian.io/posts/3eb3f4faa813f23890e7d2f8ca1f5e31645aimage.png)

## Sort nodes regarding their ping times
` beempy pingnode --sort --remove` goes through all nodes in the lists and measures how long a `get_config` RPC call takes. The nodes are then sorted and all nodes which raise an exception are removed from the nodes list (inf is shown in the table). 

![image.png](https://cdn.utopian.io/posts/6aea21f6ba51d7e727fde20d0f3978a29c23image.png)

## currentnode and nextnode skip not working nodes now
` beempy currentnode ` and ` beempy nextnode ` skipping not working nodes and putting them at the end of the list. When calling   ` beempy currentnode ` the shown node is then the first node in the list.  ` beempy nextnode ` changes the  first entry in the node list to the next working node in the list.

## keyring support for beempy and wallet
In order to use keyring for storing the wallet password, the following steps are necessary:

* install [keyring](https://pypi.org/project/keyring/): ` pip install keyring`
* Change `password_storage` to keyring: ` beempy set password_storage keyring` and enter the wallet password.
* It also possible to change the password in the keyring by ` python -m keyring set beem wallet`
* `python -m keyring get beem wallet` will show the set password in the terminal.

When `keyring` is set as `password_storage`, `keyring.get_password("beem", "wallet")` is called whenever  `beempy` needs to access the wallet.  If everything works can be tested with:
` beempy walletinfo --test-unlock`

![image.png](https://cdn.utopian.io/posts/86d4e99fe99a13d75ce70d6a789ca930b845image.png)


This can also be used in scripts and unlocks the wallet automatically.

![image.png](https://cdn.utopian.io/posts/b3933f10b1f7899063328084a128bb06702eimage.png)
    

## trade_history added to market
 `trade_history ` allows to recieve all trades from the market. It calls internally trades. At the moment it returns a list. I'm thinking about a generator concept as in history from account. Parameter are:

* `start` - datetime object - defines the Start date
* `stop` - datetime object - defines the stop date, when set to None, the current date is taken.
* `intervall` - timedelta object. When not None, only `limit` trades will be returned at each intervall time point
* `limit` int - limits the batch call size and the number of trades which are fetched when `intervall` is set.
* `raw_data` bool when true the jaw json data will be returned.

The output is a list. When using intervall, each object in the list is a list width `limit` trades inside. 

## Memory consumption fer requests and websocket reduced when creating more instances of steem
I used now request.Session for https nodes and created a singelton class for the websocket object. This reduces memory consumption when creating several `Steem()` objects without using shared_steem_instances.

## Condenser calls from appbase nodes now possible
`Steem(node="https://api.steemit.com", use_condenser=True)`  will replace any api by ` condenser_api` for all RPC calls. 


# Changes
## Market improved and keyring support added to wallet
* https://github.com/holgern/beem/commit/3643d438496e7fe1a1544d63eaaf743886463b80
* Dokumentation for several functions of market improved
* dict keys for ticker renamed to small names width underscore (identical to python-steem)
* trade_history added. This function allows to fetch a fixed number of trades at each intervall to reduce the time. E.g. it is possible to receive the from the last 7 days 100 trades each 6 hours.
* utc time transformation is added to trades
### wallet
* keyring can be used to unlock the wallet. Please store the masterpassword with  `python -m keyring set beem wallet`
## AsciiChart added and charts added to cli
* https://github.com/holgern/beem/commit/1ccf4f3281b9b70f5685b5c79ffdccfdc1e85c67
### AsciiChart
* new ascii curve plot class created
* width and height can defined and plot() prints an ascii string, which can be interpreted as plot
### CLI
* keyring functionallity added
* walletinfo shows if UNLOCK env is set, keyring is installed and if it possible to unlock the wallet (--test-unlock)
* ticker shows a table with the latest market prices
* pricehistory plots the history of the last 3 days together with the median price
* tradehistory shows the STEEM/SBD market price history
* orderbook has now a working chart option
* The sum of SBD and STEEM for open orders was added
### Unit test
* tests for new cli function were added
## Added password_storage to config for managing keyring/environment for walletpassword
* https://github.com/holgern/beem/commit/ef61625893852ec83c4e4bcc93289b938f2f9428
### cli
* set password_storage keyring or set password_storage environment added. password_storage = environment  is the default behavior and compatible with all old version.
* when keyring is used, the wallet password can be stored with the keyring module.
* nextnode when the first node and the current url not matches, will this command changes the nodes list, in way that the first node and the current url matches
* nextnode skipps now not working nodes
* createwallet improved and keyring added
* changewalletpassphrase improved
### steem
* set_password_storage added to set the password_storage config
* move_current_node_to_front function added, which shifts the nodes  until current url and first node matches
### storage
* add default for password_storage
### wallet
* password_storage is used
### unit tess
* test_cli adapted
* test_market adapted on changes
## Add sorting nodes by ping times 
* https://github.com/holgern/beem/commit/167873a9f6b07d3652b60c57674969d80b8fd888
### cli
* nodes can be sorted by ping times with pingnode --sort
* nodes with error can be removed by pingnode --sort --remove
* add wipe option for createwallet
## Memory consumption for graphenerpc reduced and other improvements
* https://github.com/holgern/beem/commit/8cc6342d07e3b113929a3579bdd64de5666bfa5a
### Memo
* make prefix changeble
Transationbuilder
* sign() return the signed struct now
### Graphenerpc
* Session are used for requests
* Singleton for websocket instance added
* Both measures reduce ram consumption when more than one Steem object is created.
Add missing scrypt package to dependency
## New asscii char set for asciichart
* https://github.com/holgern/beem/commit/9e401fd7ccde3d7978de0d47cc6457c02f1197ec
### Asciichart
* added ascii charset for python 2.7
### CLI
* adapted to new charset
## Allow condenser_api calls for appbase nodes
* https://github.com/holgern/beem/commit/fa98397a4d73a876c31f88a577cc5bfc51e1d628
steem
* add option use_condenser
steemnoderpc
* refactoring
Graphenerpc
* condenser_api calls shen use_condenser=True is set.
unit tests
* test_comment and test_discussion uses 19.4 nodes now

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-asciicharts-keyring-support-tradehistory-and-node-sorting-added">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - AsciiCharts, keyring support, trade_history and node sorting added'](https://steemit.com/@holger80/update-for-beem-asciicharts-keyring-support-tradehistory-and-node-sorting-added)
