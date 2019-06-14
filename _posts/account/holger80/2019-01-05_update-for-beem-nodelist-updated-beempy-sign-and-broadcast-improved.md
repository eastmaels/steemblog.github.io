
---
title: 'update for beem - nodelist updated, beempy sign and broadcast improved'
permlink: update-for-beem-nodelist-updated-beempy-sign-and-broadcast-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-05 14:16:51
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/beem<center>
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 494 unit tests and a coverage of 72 %. The current version is 0.20.16.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
The newest beem version can be installed by:

```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

## New Features
### Check for `ùtf-16` coding
`beempy sign` and `beempy broadcast` can now read `utf-8` files which occur when using
```
beempy -xd -e 3600 <command> <options> > unsigned_transaction.json
```
on windows. It is now checked if the file contains any `\0` characters. When this is the case it is loaded as utf-16 file.
```
        if tx.find('\0') > 0:
            with open(file, encoding='utf-16') as fp:
                tx = fp.read()
```
### Add oufile to `beempy sign`
As `beempy sign` asks for the wallet password, a
```
beempy sign --file unsigned.json > signed.json
```
is not working properly. I added a new option `--outfile` which allow it to store the signed file and enter the wallet password:
```
beempy sign --file unsigned.json -o signed.json
```

## Prevent that `beempy sign` deletes signatures
Before this commt, `beempy sign` was deleting already stored signatures. This prevents that more than one signing was possible.
By adding a new option`reconstruct_tx` to `steem.sign()` which allows to set `reconstruct_tx` of `TransactionBuilder.sign()`, it is now possible to use `steem.sign` with `stem.sign(reconstruct_tx=False)` which allows to sign without deleting old signatures.

It is now possible to create a unsigned.json and let it sign by several signers. 
```
beempy -xd -e 3600 <command> <options> > unsigned_transaction.json
beempy sign --file unsigned_transaction.json -o sign1.json
beempy sign --file sign1.json -o sign2.json
```
`sign2.json` has now the signatures from the first and the second signing.

## beempy walletinfo
```
beempy walletinfo
```
works now without going offline (using -o).

## Nodelist updated
Not working nodes:
* wss://rpc.curiesteem.com
* wss://anyx.io
* https://rpc.buildteam.io

were removed.

## Commits

### Fix beempy walletinfo and sign
* [commit 577ec41](https://github.com/holgern/beem/commit/577ec41752bdf32faaf059328dddf2fdf69617a3)

### Disable not working nodes and improve beempy sign and broadcast
* [commit 915107d](https://github.com/holgern/beem/commit/915107d6516bb22e6022c8d6eb9e64e0d2af17bb)
* Improve file reading for beempy sign and broadcast
* add option to write file for beempy sign

### Fix unit tests
* [commit 4aef469](https://github.com/holgern/beem/commit/4aef469e6a9a02628289ea7e5dbee137900a32a7)


### Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - nodelist updated, beempy sign and broadcast improved'](https://steemit.com/@holger80/update-for-beem-nodelist-updated-beempy-sign-and-broadcast-improved)
