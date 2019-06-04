
---
title: 'How to claim your rewards automatically? / 如何自动收取你的收益'
permlink: how-to-claim-your-rewards-automatically
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-05 04:23:24
categories:
- steemdev
tags:
- steemdev
- steemit
- wallet
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmTVK8tNiHwxToLDc6d22641zVhCYSiAp33ovJXgEmCeTh/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmTVK8tNiHwxToLDc6d22641zVhCYSiAp33ovJXgEmCeTh/image.png)

# Ways to claim rewards

In my [previous article](https://steemit.com/steemdev/@oflyhigh/a-simple-tool-to-check-estimated-account-value), I had introduced you a simple tool written by me. Using it  you can easily check wallet assets and also can accurately calculate the estimated account value.  

And I also added a feature to remind the user if there are rewards to be claimed. In such a situation, the page will display a highlighted text: ***You have rewards to be claimed***.  When we get this prompt message, we can log in our wallet and click ![](https://steemitimages.com/DQmURauyLWqFaswX5uYo3tMD47FU7MFjrefkgfZ8NFCqB2t/image.png) to claim our rewards.

But, Are you tired of this way?  `Check->Login->Claim` or `Login->Check->Claim`, We do the same thing over and over again. Is there a way to help us do these things automatically? The answer is yes!

There is a operation called `claim_reward_balance_operation`
![](https://steemitimages.com/DQmcbBPuyQgMj1LJ9gzxd7qV5wCQL3AFfjCXo74y2cDMQxp/image.png)

Unlike the Steem API, which we can call directly,  to initiate this operation you need to fill out this structure, and make a transaction structure from it, sign it with your posting private key, and then broadcast it. 

# Script with the official python library for STEEM
It's too complicated for me. 😭
Fortunately, the official python library for STEEM did a lot of work for us, such as to fill out this structure, to make a transaction structure and to sign the translation with your posting private key, and to broadcast it.  

All we need to do is call the method `claim_reward_balance` of Steem Class.
![](https://steemitimages.com/DQmNedSN1dJUjrVe86bNXCvCLijYRwgq824r6WJrxJu6AXE/image.png)

A simplest script maybe like this:
```
#!/usr/bin/env python
from steem import Steem
steem=Steem()
steem.claim_reward_balance(account = 'oflyhigh')
```

Let me save it as ***claim_rewards_for_oflyhigh.py***.
To run the above script, we MUST do following things first:
*  Install steem-python with pip
`pip install -U steem`

* Get Posting private key
Get ***Posting private key*** from `Wallet`->`Permissions`->`Show private key`

* Import Posting private key to local wallet
`steempy addkey`
Input private key and set password for local wallet (First time)

* Set UNLOCK environment variable
UNLOCK=mysecretpassword

* `chmod u+x claim_rewards_for_oflyhigh.py`

# Run the script automatically

You can add this script to cron  job to let it run automatically at specified intervals.
`crontab -e`
`0 0 * * * /path/claim_rewards_for_oflyhigh.py >>log.txt 2>&1`

Then the script will be executed at 00:00 every day.
More details about crontab can be found by `man crontab`.

To claim rewards for multiple accounts is  just as easy. 
Create scripts for each account, and then setup cron job for each file. The benefit is that you can set different intervals for different users.

If you want to claim rewards for multiple account with same  same interval,  Place users in a list and then iterate through them may be the better way.

# 中文

每天检查钱包手动收取收益，是不是很累？
有么有啥办法自动完成呢？

答案是有的，steem中定义了一个操作：claim_reward_balance_operation
我们只需填充这个结构，然后生成事务，然后签名事务，然后广播它，就可以了。

听起来很简单，但是其实非常麻烦，总之我是搞不定啦。
幸运的是，STEEM官方Python库可以帮我们完成大部分工作，我们只需要调用`claim_reward_balance`就可以啦。脚本见英文部分。

为了让脚本能执行，我们还需要安装STEEM官方Python库，导出并导入Posting私钥，设置UNLOCK环境变量，以及修改脚本的执行权限等。

我们的目的是让脚本自动运行，这也没啥，加入到定时任务（Cron job)中就行啦。

如果有多个账户，就写多个脚本设置多个任务好了，这样的好处是可以设置不同的时间间隔。如果多个账户按相同的时间间隔收取呢，那么把用户放入列表然后再遍历是个不错的方法。

- - -

This page is synchronized from the post: [How to claim your rewards automatically? / 如何自动收取你的收益](https://steemit.com/@oflyhigh/how-to-claim-your-rewards-automatically)
