
---
title: '用程序收取指定账户的收益 / Claim rewards from the specified account by scripts'
permlink: --claim-rewards-from-the-specified-account-by-scripts-2019-07-09
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-09 11:04:33
categories:
- cn
tags:
- cn
- steemdev
- steem
- cn-programming
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmVhD28n12QHLLmicANv13Akp2Z6tKbfdA8UyveiQ6Xiig/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



在好久之前，我曾写过一篇文章[How to claim your rewards automatically? / 如何自动收取你的收益](https://steemit.com/cn/@oflyhigh/auto-claim-rewards)，这个脚本很简单，我将其设置到crontab里，帮我自动Claim每天的奖励。

![](https://cdn.steemitimages.com/DQmVhD28n12QHLLmicANv13Akp2Z6tKbfdA8UyveiQ6Xiig/image.png)
(图源 ：[pixabay](https://pixabay.com/))


虽然这个脚本工作良好，但是偶尔我也需要手动claim一下账户的收益，以往steemit网站和steemit钱包在一起的时候，我只需登录网站然后进入钱包页面，点一下Claim就好。

可是自从steemit网站和steemit钱包分离，这个操作就变得相当繁琐，我要重新登录一下钱包网站然后输入密码，再进行操作。

所以我简单改造了一下之前的脚本，让其更适合在命令行使用。

```
#!/usr/bin/env python
import click
from steem import Steem

@click.command()
@click.argument('account')

def claim_reward(account):
        steem=Steem()
        try:
                user_info = steem.get_account(account)
                reward_sbd = float(user_info['reward_sbd_balance'].split(' ')[0])
                reward_steem= float(user_info['reward_steem_balance'].split(' ')[0])
                reward_vesting = float(user_info['reward_vesting_balance'].split(' ')[0])
                reward_sp = float(user_info['reward_vesting_steem'].split(' ')[0])

                if reward_sbd > 0 or reward_steem > 0 or reward_vesting > 0:
                        steem.claim_reward_balance(account = account)
                        print(f"{account}	Claimed rewards: {reward_steem} STEEM  {reward_sbd} SBD {reward_sp} STEEM POWER")
                else:
                        print('No rewards need to be claimed: {}'.format(account))
        except:
                print("Error occured!")
                raise

if __name__ == "__main__":
        claim_reward()
```

使用起来极其简单：
>`./claim.py oflyhigh`

与之前的脚本相比，这个会简单的打印出收取到的奖励的数量，比如：
>![](https://cdn.steemitimages.com/DQmUmKzn947Bb74MgZUPAEyfdZQYQFnzLcS7Hzyb3Y1GPGD/image.png)

如果没有奖励可以收取，也会提示：
>![](https://cdn.steemitimages.com/DQmd9Zq7rf4QcLiWQbvhBDxSRSd1zQmfMErAQ6nga8fdepJ/image.png)

另外，一些相关技术背景以及如何设置steem-python以及私钥等内容，请参考文末链接，我就不再赘述了。

编码水平有限，如有谬误，请及时指正，深表谢意。

# 相关链接

* [How to claim your rewards automatically? / 如何自动收取你的收益](https://steemit.com/cn/@oflyhigh/auto-claim-rewards)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['用程序收取指定账户的收益 / Claim rewards from the specified account by scripts'](https://steemit.com/@oflyhigh/--claim-rewards-from-the-specified-account-by-scripts-2019-07-09)
