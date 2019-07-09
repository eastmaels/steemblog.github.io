
---
title: 'Transfer ERC20 tokens from exchange to MyEtherWallet via Trezor'
permlink: transfer-erc20-tokens-from-exchange-to-myetherwallet-via-trezor
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-23 09:08:30
categories:
- utopian-io
tags:
- utopian-io
- wallet
- cryptocurrency
- tutorial
- teammalaysia
thumbnail: 'https://www.myetherwallet.com/images/myetherwallet-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![aa](https://www.myetherwallet.com/images/myetherwallet-logo.png)
<sub>Image from [myetherwallet](https://www.myetherwallet.com/)</sub></center>

#### What Will I Learn?

- How to add custom token in MyEtherWallet(MEW).
- How to transfer ERC20 tokens from exchange to MEW via Trezor. 

Recently I plan to hold Cindicator(CND) for long-term and an exchange is never a good place to hold your coins. I have a Trezor hardware wallet with a MEW tied to it, by using this combination I can secure my coin safety at maximum level. Hence, we will use CND token (one of the ERC20 tokens) to demonstrate the depositing process.

#### Requirements

- You have a MEW created.
- You have some ERC20 tokens to play with.
- You have a Trezor.

OS: Windows 7
Browser: Google Chrome

#### Difficulty

Basic

#### Tutorial Contents

![1.png](https://steemitimages.com/DQmUcXpssPVhZKr27Zyyymm2PYi3mA9ZRnt4nZU8cwragHt/1.png)

1\) Connect Trezor to your PC. Open [https://wallet.trezor.io/](https://wallet.trezor.io/) and unlock the wallet. Select `Ethereum` from the top left drop-down menu.

---

![2.png](https://steemitimages.com/DQmUujswzm55W4uSQUcXZ94Yo9Qw3WrSSd1SYtbEwtqqSzr/2.png)

2\) Select `TREZOR` in the access list and select `Connect to TREZOR`. You can access the wallet according to your personal setup method, we will stick to Trezor in this method. 

---

![3.png](https://steemitimages.com/DQmYneTWDMwJmweBYG3exvS6p2G1c8x9bGXxsjPznH5xkvD/3.png)

3\) Select the correct HD derivation path and you will see several addresses being listed in the bottom part. Simply choose any address you would send custom tokens to. In this case, I stick to my original ETH address. Press on `Unlock your wallet`.

---

![4.png](https://steemitimages.com/DQmYdSvEfxBh5n9zAFfZtkEB9ExZiX4rx6VBQ1eNzw5EcWk/4.png)

4\) Inside the wallet you will able to view your ETH balance and public address. A ERC20 token list is located at the right bottom part `Token Balances`. 

---

![5.png](https://steemitimages.com/DQma3bFrWJdLMwct8DZC3T5NqDoDvit7BRqXbTAyGSMfZJS/5.png)

5\) First we have to add CND token to the list as it doesn't host it originally. Click on 'Add Custom Token'.

---

![6.png](https://steemitimages.com/DQmPdQJTd2x9N2rMArge3ShVTLJjZYqLRyVq8HX3oSyPhzc/6.png)

6\) Fill in all the 3 fields. Put `0xd4c435F5B09F855C3317c8524Cb1F586E42795fa` in `Token Contract Address`. Refer to [etherscan.io](https://etherscan.io/address/0xd4c435f5b09f855c3317c8524cb1f586e42795fa#tokentxns) to verify the official contract address if in doubt, you can use this site to determine any other ERC20 token's contract address as well. Put `CND` into `Token Symbol` and `18` into `Decimals`. Save it.

---

![7.png](https://steemitimages.com/DQmSbigmnLHRxuS9xd1NAKiLCp9AAReHpEaLiviAXpxVmx3/7.png)

7\) Click on the `Show All Tokens` you will see the newly added CND tokens with zero balance. Click on the minus button beside it to remove if you want to, but the fund attaches to this address will still remain in the network. You can add it back anytime by redoing previous step.

---

![8.png](https://steemitimages.com/DQmQH5N7YGFt1KsAHFqpXgN77XjKG56PSXdytDWNr3nxhqW/8.png)

8\) Go to the exchange where you want to withdraw CND from. In my case it is Binance. **Put your ETH address in the `CND Withdrawal Address`** as all the ERC20 tokens are using ETH address to receive transaction. Transfer any amount and click `Submit`. 

*Tips: It is always a good habit to send the minimum amount to newly generated address just to make sure things are fine. For CND, the minimum sending amount is 400.*

---

9\) Wait for a few minutes, the transfer speed depends on the network traffic as well. Check the status of your transaction using [https://etherscan.io](https://etherscan.io) by providing **Transaction ID/Txid**. As the transaction is confirmed, you should now see them appear in the custom token list in your MEW.

---

#### Summary

- **Do not store coins on exchange where you don't own the private key.**
- **Use hardware wallet like Trezor or Ledger to host your MEW seed for maximum security.**
- **All ERC20 tokens using the ETH address as receiving address.**
- **Send minimum amount to try if the new destination wallet is working without problem.** 



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/transfer-erc20-tokens-from-exchange-to-myetherwallet-via-trezor">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Transfer ERC20 tokens from exchange to MyEtherWallet via Trezor'](https://steemit.com/@fr3eze/transfer-erc20-tokens-from-exchange-to-myetherwallet-via-trezor)
