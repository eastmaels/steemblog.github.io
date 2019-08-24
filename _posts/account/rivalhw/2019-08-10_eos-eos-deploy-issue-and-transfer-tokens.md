
---
title: '[EOS学习笔记]如何在EOS上发行代币 Deploy, Issue and Transfer Tokens'
permlink: eos-eos-deploy-issue-and-transfer-tokens
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-10 14:43:21
categories:
- eos
tags:
- eos
- cn-reader
- partiko
- sct
- zzan
thumbnail: 'https://cdn.steemitimages.com/DQmczdDq3SqhyG1Q19uEwYS79FhsEoBHqNFGp8775oc7Ns3/001%20gitclone.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


如何在EOS上部署，发行和转账(代币)?
今天这个学习笔记会带你来完成学习此操作。

Step 1: Obtain Contract Source
git clone [https://github.com/EOSIO/eosio.contracts](https://github.com/EOSIO/eosio.contracts) --branch v1.5.2 --single-branch

![001 gitclone.png](https://cdn.steemitimages.com/DQmczdDq3SqhyG1Q19uEwYS79FhsEoBHqNFGp8775oc7Ns3/001%20gitclone.png)

下载完成后进入eosio.contracts/eosio.token 目录下
![002 cdtoeken.png](https://cdn.steemitimages.com/DQmTtUCZoDkJ7HfiGGLv224UHJf2xStDc85DTm6mMhX9pJ1/002%20cdtoeken.png)

Step 2: Create Account for Contract 为合约创建账户

tips提示:在创建账号之前，要确保钱包状态为带*的unlock状态，如下图：
![002-1.png](https://cdn.steemitimages.com/DQmYxFQE4kDaXtoqfcu7gDyjB8UKow1bguQARHrfX3MBiZZ/002-1.png)

cleos create account eosio eosio.token EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
这里使用 Development Key

![003 createaccount.png](https://cdn.steemitimages.com/DQmRrPFkYcx7BxFLq9xErLGRoGJVfkBPs2eDe7rgsFy9Mpt/003%20createaccount.png)

Step 3:  编译合约文件 Compile the Contract
eosio-cpp -I include -o eosio.token.wasm src/eosio.token.cpp --abigen

![004 compile.png](https://cdn.steemitimages.com/DQmeZ742jt7azLVaArw7DnVQU68MAQBxyxokWrHprV9etvW/004%20compile.png)

Step 4: 部署合约 Deploy the Token Contract
cleos set contract eosio.token contracts/eosio.contracts/eosio.token --abi eosio.token.abi -p eosio.token[@active](https://steemit.com/@active)

![005 deploy token.png](https://cdn.steemitimages.com/DQmQmXKJ3BF89MND6brx6xQnNns8dpBL4xxBQeSxBPGoPDu/005%20deploy%20token.png)

Step 5: 创建token代币 Create the Token
cleos push action eosio.token create '[ "eosio", "1000000000.0000 SYS"]' -p eosio.token[@active](https://steemit.com/@active)
![005-1.png](https://cdn.steemitimages.com/DQmcetAhZADrmSoDfvxDJELUDhzpdM2bkukXkgYKkqgaeDo/005-1.png)

Step 6: 发行代币 Issue Tokens
cleos push action eosio.token issue '[ "alice", "100.0000 SYS", "memo" ]' -p eosio[@active](https://steemit.com/@active)
![006 issue tokens.png](https://cdn.steemitimages.com/DQmRFTng21T5zQdKyHtJra9xr2pWqpAfX7VGYovj2ham9wK/006%20issue%20tokens.png)

cleos push action eosio.token issue '["alice", "100.0000 SYS", "memo"]' -p eosio[@active](https://steemit.com/@active) -d -j
![006-1.png](https://cdn.steemitimages.com/DQmYKA6HZecBAVfrTb5KiJdVePZf5PtJP1j12akoiMKErLc/006-1.png)

Step 7: Transfer Tokens (代币)转账
cleos push action eosio.token transfer '[ "alice", "bob", "25.0000 SYS", "m" ]' -p alice[@active](https://steemit.com/@active)
![007.png](https://cdn.steemitimages.com/DQmTER9i5kHF8ydYzNv4eXPVZAqadJm4e9Eu85S4eKAZWWq/007.png)

cleos get currency balance eosio.token bob SYS
![007-1.png](https://cdn.steemitimages.com/DQmf6xun5Rht83mTUpFBY1fXKgX57TKzPdCsnSFae23bwGW/007-1.png)

cleos get currency balance eosio.token alice SYS
![007-2.png](https://cdn.steemitimages.com/DQmR1jvu9WLK1HQa4fTEZ8qHUQMyHpASCmduaDjYYwD94sd/007-2.png)

well done!

Next Understanding ABI Files

- - -

This page is synchronized from the post: ['[EOS学习笔记]如何在EOS上发行代币 Deploy, Issue and Transfer Tokens'](https://steemit.com/@rivalhw/eos-eos-deploy-issue-and-transfer-tokens)
