
---
title: 'Verify EOS private key by mapping to public key'
permlink: verify-eos-private-key-by-mapping-to-public-key
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-13 17:33:09
categories:
- eos
tags:
- eos
- invest
- crypto
- cryptocurrency
- busy
thumbnail: 'https://gateway.ipfs.io/ipfs/Qmaovnkn14F8yKWyUj69CygTofK5x5dBi7ztbDw2HtBeFb'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


EOS has been one of the hottest topics now as getting closer to its launching date. I've posted days ago about [how to validate ETH address registration with EOS](/eos/@fr3eze/validate-eth-address-registration-with-eos-before-it-is-too-late) but realise there is one more important issue to verify.

![image.png](https://gateway.ipfs.io/ipfs/Qmaovnkn14F8yKWyUj69CygTofK5x5dBi7ztbDw2HtBeFb)
Image [source](https://medium.com/eosio)

After EOS registration user will receive an EOS key pair that consists of a public and private key. This key pair is useless until 1st June the EOS blockchain is finally established. The abovementioned method can validate the ETH address that temporarily stores the EOS as ERC20 tokens will be snapshot at the launch day. Upon the establishment of EOS network, user will need to use the EOS private key to access their EOS as those funds will be moved from ETH network to the new one. 

Paranoid investor like me will have a real worry now, how to verify the EOS private key is valid before the mainnet?

# Offline tool to verify your EOS private key and mapping to public key

This is a great tool I've found in Github: https://github.com/webdigi/EOS-Offline-Private-key-check

This is a simple tool to verify EOS private key by generating the public key using a web browser. Take note that I did my verification in Google Chrome as Internet Explorer failed me. And the instruction is simple:

>Steps to running this tool with peace of mind!
>1. Turn your device offline. This page will work without an internet connection.
>2. Paste your EOS private key and then click on "Map to EOS public key"
>3. Your EOS private key and corresponding public key will show up. All done! You can close this page and then turn on internet connection :)

You may [generate a random EOS key pair](https://nadejde.github.io/eos-token-sale/) to test this tool before using the real key. 

<center>![](https://steemitimages.com/DQmVQnzXJJS3hKHcw3PcQyvHvSS8gbjnTx1JzbqkbfjaXB8/image.png)
*Testing result of an example key pair*</center>

# Overall steps to verify your EOS is properly ready for launching day

1. Register ETH address that is used to store EOS, refer this [guide](https://steemit.com/eos/@sandwich/contributing-to-eos-token-sale-with-myetherwallet-and-contract-inner-workings) for MyEtherWallet. User receive a EOS key pair.
2. Use this [guide](/eos/@fr3eze/validate-eth-address-registration-with-eos-before-it-is-too-late) to make sure ETH address is registered with EOS. It requires the user to provide ETH address and return with a **EOS public address**  which has to be in match with the EOS pubic key user received in Step 1.
3. Use the [offline tool](https://github.com/webdigi/EOS-Offline-Private-key-check) to verify EOS private key. The generated EOS public key has to be same as the EOS pubic key user received in Step 1 as well.

These steps are crucial if the user were to store EOS inside private wallet. **Failing to do so might risk your access to the EOS you have bought after mainnet was launched after 1st June.**

---

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>

- - -

This page is synchronized from the post: ['Verify EOS private key by mapping to public key'](https://steemit.com/@fr3eze/verify-eos-private-key-by-mapping-to-public-key)
