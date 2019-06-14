
---
title: 'Measuring seed-node ping times with python'
permlink: measuring-seed-node-ping-times-with-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-06 06:45:54
categories:
- witness-category
tags:
- witness-category
- seed-node
- python
- witness-server
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmP3GVKjv8Grj44JT4EBogR6ofrBFFuoPBRvcsNGxNUBXt'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Almost every tutorial for setting up a witness node mention that it is important to ping all seed-nodes and add the fastest nodes to the `config.ini` file. For improving this process, I wrote a small python script, which:

* measure ping times
* sort the seed nodes
* exclude slow nodes
* creates entries for the  `config.ini` file

You can find the script here https://github.com/holgern/steem-witness-tools. Steps for running the script on your witness server:

1. install python3 and pip3
2. install ping3 by  ` pip3 install ping3 --user` 
3. cloning my git:   `git clone https://github.com/holgern/steem-witness-tools.git`
4. You may copy the newest seednodes.txt from https://github.com/steemit/steem/blob/master/doc/seednodes.txt
5. Enter the sort_seed_nodes directory (`cd sort_seed_nodes`)
6. Run the script by   `sudo python3 ping_seed_nodes.py` as root
7. Copy the result directly to your `config.ini`

## Script arguments
![image.png](https://ipfs.busy.org/ipfs/QmP3GVKjv8Grj44JT4EBogR6ofrBFFuoPBRvcsNGxNUBXt)

It is possible to modify the maximum allowed ping time in milliseconds. Default is 100 ms, which means that all seed nodes are included with a ping time better than 100 ms. In the following example, the maximum time is set 50 milliseconds:
```
 sudo python3 ping_seed_nodes.py  --maxdelay 50
```

It also possible to use a different seed-node.txt file as source. It must follow the same structure as the seed-node.txt file.
```
seed-east.steemit.com:2001          # steemit
seed-url:port                       # owner
```
The `input `parameter allows to use different files as source:
```
sudo python3 ping_seed_nodes.py --input my-seed-nodes.txt
```
## Result
![image.png](https://ipfs.busy.org/ipfs/QmR2eytxv2pjcZyje6mbmvcHpEhK9sEngFpq3Xf47LiMuM)

The results are also stored in `sorted_seednodes_6_6_2018.txt`, the name is adapted to the date.

___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approve your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)
</center>

- - -

This page is synchronized from the post: ['Measuring seed-node ping times with python'](https://steemit.com/@holger80/measuring-seed-node-ping-times-with-python)
