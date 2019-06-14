
---
title: 'How to install and use beempy using anaconda'
permlink: how-to-install-and-use-beempy-using-anaconda
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-16 08:53:24
categories:
- python
tags:
- python
- steemit
- beem
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmajNFpEkEWhhpRYZ4mTgNuqHXU3LpVsgwrWf3h5hxP74m'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


`beempy` is a python based command line tool for doing stuff on the steem blockchain. It is based on my python library [beem](https://github.com/holgern/beem) and provides several useful commands:
```
Commands:
  addkey                  Add key to wallet When no [OPTION] is given,...
  addtoken                Add key to wallet When no [OPTION] is given,...
  allow                   Allow an account/key to interact with your...
  approvewitness          Approve a witnesses
  balance                 Shows balance
  broadcast               broadcast a signed transaction
  buy                     Buy STEEM or SBD from the internal market...
  cancel                  Cancel order in the internal market
  changewalletpassphrase  Change wallet password
  claimreward             Claim reward balances By default, this will...
  config                  Shows local configuration
  convert                 Convert STEEMDollars to Steem (takes a week...
  createwallet            Create new wallet with a new password
  curation                Lists curation rewards of all votes for...
  currentnode             Sets the currently working node at the first...
  delkey                  Delete key from the wallet PUB is the public...
  delprofile              Delete a variable in an account's profile
  deltoken                Delete name from the wallet name is the...
  disallow                Remove allowance an account/key to interact...
  disapprovewitness       Disapprove a witnesses
  downvote                Downvote a post/comment POST is...
  featureflags            Get the account's feature flags.
  follow                  Follow another account
  follower                Get information about followers
  following               Get information about following
  importaccount           Import an account using a passphrase
  info                    Show basic blockchain info General...
  interest                Get information about interest payment
  keygen                  Creates a new random brain key and prints its...
  listaccounts            Show stored accounts
  listkeys                Show stored keys
  listtoken               Show stored token
  mute                    Mute another account
  muter                   Get information about muter
  muting                  Get information about muting
  newaccount              Create a new account
  nextnode                Uses the next node in list
  openorders              Show open orders
  orderbook               Obtain orderbook of the internal market
  parsewif                Parse a WIF private key without importing
  pending                 Lists pending rewards
  permissions             Show permissions of an account
  pingnode                Returns the answer time in milliseconds
  power                   Shows vote power and bandwidth
  powerdown               Power down (start withdrawing VESTS from...
  powerdownroute          Setup a powerdown route
  powerup                 Power up (vest STEEM as STEEM POWER)
  pricehistory            Show price history
  resteem                 Resteem an existing post
  rewards                 Lists received rewards
  sell                    Sell STEEM or SBD from the internal market...
  set                     Set default_account, default_vote_weight or...
  setprofile              Set a variable in an account's profile
  sign                    Sign a provided transaction with available...
  ticker                  Show ticker
  tradehistory            Show price history
  transfer                Transfer SBD/STEEM
  unfollow                Unfollow/Unmute another account
  updatememokey           Update an account's memo key
  updatenodes             Update the nodelist from @fullnodeupdate
  upvote                  Upvote a post/comment POST is...
  userdata                Get the account's email address and phone...
  verify                  Returns the public signing keys for a block
  votes                   List outgoing/incoming account votes
  walletinfo              Show info about wallet
  witness                 List witness information
  witnesscreate           Create a witness
  witnessdisable          Disable a witness
  witnessenable           Enable a witness
  witnesses               List witnesses
  witnessfeed             Publish price feed for a witness
  witnessupdate           Change witness properties
```

The python anaconda distribution is an easy and fast solution to gain fast access to `beempy` on a computer without dealing with system packages.

## 1. Download the anaconda GUI installer
Download the anaconda for python 3.6 for your operating system: [anaconda download](https://www.anaconda.com/download/).

![image.png](https://ipfs.busy.org/ipfs/QmajNFpEkEWhhpRYZ4mTgNuqHXU3LpVsgwrWf3h5hxP74m)

## 2. Run the installer and follow the steps
The installer looks similar for other operation systems.
![image.png](https://ipfs.busy.org/ipfs/QmTCvhYARpEp1bTqj6e7bNoTT7szoYn9W36EpmZ23rGMHq)
![image.png](https://ipfs.busy.org/ipfs/QmQ9EsmhvEmiWEThuhkZChXsGh9uykLLRvgt2GpBUqiH27)
![image.png](https://ipfs.busy.org/ipfs/QmT3jnqoPxXzURbLWrCyQJWbQigoHeEJALQVqKSYTbkjzV)
![image.png](https://ipfs.busy.org/ipfs/QmevTjdhkp1ip1EviG9ZfgzNW1JuaFomFCDawwHCW7HBwd)
![image.png](https://ipfs.busy.org/ipfs/QmVJPj57LtTXidjafUKGZofiNeWi3Km9oZ3a6ie8ZALJuB)

## 3. Start the Anaconda Prompt and add the conda-forge channel
Start the Anaconda Prompt ( You find it under Anaconda3 (64-bit))
Add the conda-forge channel by entering the following into the prompt:
```
conda config --add channels conda-forge
```
![image.png](https://ipfs.busy.org/ipfs/QmS9MfuZ7mCKz4ivpqXg8D42MJJeHySVn47xyhmBwx9wJw)

## 4. Install beem inside the Anaconda Prompt
![image.png](https://ipfs.busy.org/ipfs/QmbsAuxKz256GbqJhq4LAQyHAXjAmH3S8QoZAtKSZA1ySn)
```
conda install beem
```
## 5. Using `beempy`
All available commands can be printed by
```
beempy --help
```

The help for an individual command can be printed by:
```
beempy claimreward --help
```
## 6. Tips and tricks
Update the node list:
```
beempy updatenodes --show
```
![image.png](https://ipfs.busy.org/ipfs/Qmc79FgZnWBU59vL89sbjS4RdVnpmApYyRE5daTgTXwAzR)

Set your account as default account:
```
beempy set default_account holger80
```
Check your settings by:
```
beempy config
```
Create a new wallet for storing posting, active or memo keys:
```
beempy createwallet --wipe
```
enter a password twice
![image.png](https://ipfs.busy.org/ipfs/QmZiqW6iipqv6ubh5cphGff8AttwtpFq6Bc18PbSVL9dQJ)
and add your posting key and/or your active key:
```
beempy addkey
```
Enter the wallet password to unlock and paste your key
![image.png](https://ipfs.busy.org/ipfs/QmSR1NaJ4V1M1raDegrHFey5ogzV2jBbjqs2xeUHUVfHjj)

You can now use beempy to broadcast! For example, we will use `beempy` to claim all rewards:
```
beempy claimreward
```
![image.png](https://ipfs.busy.org/ipfs/QmVAowNSXPMY2i2UNq3Y5DhCBgbTDMoE61dG8EBb7Rsm7H)

## 7. Read the manual
You can find a complete command listing here: https://beem.readthedocs.io/en/latest/cli.html

- - -

This page is synchronized from the post: ['How to install and use beempy using anaconda'](https://steemit.com/@holger80/how-to-install-and-use-beempy-using-anaconda)
