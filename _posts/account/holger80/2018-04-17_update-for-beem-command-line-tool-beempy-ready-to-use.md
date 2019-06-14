
---
title: 'Update for beem - command line tool beempy ready to use'
permlink: update-for-beem-command-line-tool-beempy-ready-to-use
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-17 15:40:06
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

[beem](https://github.com/holgern/beem) is a python library for steem. beem has 395 unit tests and a coverage of 84 %. The current version is 0.19.22. beem can be installed by:
```
pip install -U beem
```
or 
```
conda config --add channels conda-forge
conda install beem
```

I created a discord channel for answering question or discussing beem: https://discord.gg/4HM592V

## New Features
- In this update, the command line tool `beempy` was completed. `beempy` has the now same syntax and functions as `steempy`, the command line tool from python-steem. 
- `beempy` is rewritten from scratch and contrary to `steempy` it uses the [Click](http://click.pocoo.org) library.

The following new functions (not available in `steempy`) are added to `beempy`
* witnesses 
* createwallet
* walletinfo
* openorders
* orderbook
* claimreward
* follower
* following
* unit tests for all cli functions
### How to start using `beempy` and transfer `1 SBD` from `user_a` to `user_b` with memo `hello`
First create a new wallet and set a wallet password by:
```
beempy createwallet
```
Set the default account:
```
beempy set default_account user_a
```
Then enter your active wif
```
beempy addkey
```
Creating a wallet and entering private keys has to perform only once. The data are stored in a sql database on the PC. All private keys are encrypted with the wallet password.

At first, the help of the transfer function is shown:
```
beempy transfer --help
Usage: beempy transfer [OPTIONS] TO AMOUNT ASSET [MEMO]

  Transfer SBD/STEEM

Options:
  -a, --account TEXT  Transfer from this account
  --help              Show this message and exit.
```
Now the syntax for a transfer is clear and a transfer can be performed by:
```
beempy transfer user_b 1 SBD hello
```
After entering the wallet password, 1 SBD is transfered to `user_b`. When `user_a` is not the default account, the command changes to:
```
beempy transfer --account user_a user_b 1 SBD hello
```

## Complete listing of all available commands
* output of `beempy --help`
<center>
![image.png](https://cdn.utopian.io/posts/94b71017881fac51fc6aaeae7869c7eaa23cimage.png)
</center>
# New commands for beempy (not available in steempy)
## createwallet
`beempy createwallet`
wipes the wallet without knowing the old password. Asks then for a new password and creates a new wallet.
<center>
![image.png](https://cdn.utopian.io/posts/8e86089860b618cd03eefeef73dbe9e5724bimage.png)
</center>
## witnesses
`beempy witnesses`
lists all witnesses and shows their stats.

`beempy witnesses holger80`
lists only witnesses which were voted by `holger80`

<center>
![image.png](https://cdn.utopian.io/posts/bef86bafc64c2d211a34108219845c010491image.png)
</center>
## walletinfo
`beempy walletinfo`
Shows information about the wallet
<center>
![image.png](https://cdn.utopian.io/posts/b922ada0c389c66d9f66e628b7b9150880ebimage.png)
</center>

## openorders
`beempy openorders beem`
shows all open orders of account `beem`
<center>
![image.png](https://cdn.utopian.io/posts/12062d4c2b726e2d349c2f1491390b4d8cdfimage.png)
</center>

## orderbook
`beempy orderbook`
shows the last orders, can be limit with `--limit 10`
<center>
![image.png](https://cdn.utopian.io/posts/62d13c0c19554906d014d740bf8e258950a1image.png)
</center>

## claimreward
`beempy claimreward holger80`
claims all unclaimed rewards. Rewards to claim can be specified by `--reward_steem`,  `--reward_sbd` or  `--reward_vests`.

## follower
`beempy follower holger80`
shows statistics about the followers.
<center>
![image.png](https://cdn.utopian.io/posts/aec2fc6418562d10ea560bf6cff08bf02c92image.png)
</center>

## following
`beempy following holger80`
shows statistics about following accounts.
<center>
![image.png](https://cdn.utopian.io/posts/52ac38997adb17d0428cb0b6469ad8935a7cimage.png)
</center>
# Improved commands for beempy (also available in steempy but with limited function)
## buy and sell
`beempy buy 1 STEEM` or `beempy sell 1 STEEM`
can be called without price. The price is then taken from the last entry in the orderbook.
<center>
![image.png](https://cdn.utopian.io/posts/61d6e53d9c4b6f65e219adb3f6da8a24c39eimage.png)
</center>

## set nodes
`beempy set nodes ""` resets nodes to the standard node list.

## info
`beempy info -1` shows the last block. Transaction are not shown, only the number of transaction in the block.

`beempy info -1:1` shows the  first transaction of the last block together with stats about the block.

# Changes
## CLI improved and extended
* https://github.com/holgern/beem/commit/6fa269dfe030928d80f224228708870d81059406
### account
* get_account_history is more robust against empty rpc returns
### steem
* add functions to store default vote weight and nodes
### cli
* Same parameter as in steempy are used
* main parameter improved
* set improved
* addkey improved
* delkey added
* listkeys improved
* info improved and info about a block, an account, post and a public key added
### Unit tests
* test_testnet improved
* test_cli adapted on changes
## CLI improved
* https://github.com/holgern/beem/commit/6acef303b3cb805c0952d81e5b17106aabd246fd
### cli
* unlock_wallet and asset_callback added
* upvote and downvote improved
* transfer, powerup and powerdown added
### unit_test
* missing commands added to test_cli
 ## More function added to cli 
* https://github.com/holgern/beem/commit/64b51c01ec8a9070358b2f3f4cb77a58262806df
### account
* set_withdraw_vesting_route added
### cli
 * powerdownroute, convert and interest added
### steemnoderpc
* error messages improved
* _check_api_name added
* ApiNotSupported when Api is not supported by node but exists
### graphenerpc
* error messages improved
### rpcutils
* error messages in sleep_and_check_retries improved
### unit tests
* new function added
## Improved CLI und unit tests
* https://github.com/holgern/beem/commit/665befaa519beab35a45b3c8be545143a65e480e
### CLI
* improved password handling and confirmation for changewalletpassphrase, delkey and createwallet
### unit tests
* improved test_cli
* removed uneeded test for test_websocket
## More cli functions added
* https://github.com/holgern/beem/commit/649f02af701c61469e2345ec15b7be9e1037d681
### cli
* permissions, allow, disallow, updateMemoKey, approvewitness, disapprovewitness and witnesses added
* upvote and downvote improved
### unit tests
* new functions added to test_cli
* test_upvote and test_downvote improved
## More cli function added
* https://github.com/holgern/beem/commit/717d1897fb1c0257de80e49dca95a7d4a558458e
### account
* follow and unfollow improved
### cli
* newaccount, importaccount, orderbook, buy, sell, cancel, openorders, resteem, follow, unfollow, witnessupdate and witnesscreate added
### steem
* witness_update added
### witness
* update uses steem.witness_update
### unit tests
* new cli functions added to unit tests test_cli
## Doku for cli added
* https://github.com/holgern/beem/commit/199d7b31fe0b691f42da04ca4b5aba20519959d8
* Dokumentation for cli added
* Profile added
### cli
* sign, broadcast, setprofile and delprofile added
* refactoring
* wallet password from UNLOCK environment variable works
### utils
* detection of complete urls added
### unit tests
* tests for profile added
* new functions tests added to test_cli
* unit tests for utils improved
## Add claimreward to cli
* https://github.com/holgern/beem/commit/ab9465eda8856b77f632518cb6ffebd70f6afced
### cli
* add claimreward
### unit test
* add unit test for claimreward
## Improved coverage for cli tool
* https://github.com/holgern/beem/commit/2e82abf52a81bfe960949f16e453f171d4ea9ce4
## Add price prediction for buy and sell of cli 
* https://github.com/holgern/beem/commit/5bbbaf487116dcf44f15d0c17599f024c09d3c8c
### cli
* Add price prediction for buy and sell of cli
### steemnoderpc
* refactoring
### Exceptions
* CallRetriesReached added
### unit tests
* tests for test_cli added
## Follower and following added to cli 
* https://github.com/holgern/beem/commit/b0fa7a9cb1a1b3cb7e4d56d97416423be2353aab
### cli
* follower and following added
### witness
* is_active added
### Witnesses
* printAsTable improved
### unit tests
* follower and following added to test_cli
## Some improvements for cli 
* https://github.com/holgern/beem/commit/edc35333d1a32f57ecd48afd2c98a2e47b23e69d
### cli
* some improvements and additions
## Add parsewif to cli
* https://github.com/holgern/beem/commit/c21d78471dee8589ec198b05db9bed29801892cd

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-command-line-tool-beempy-ready-to-use">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - command line tool beempy ready to use'](https://steemit.com/@holger80/update-for-beem-command-line-tool-beempy-ready-to-use)
