
---
title: 'How to transfer SBD or STEEM to multiple accounts? (Batch transfer with steem-python) / 如何向多个账户批量转账'
permlink: how-to-transfer-sbd-or-steem-to-multiple-accounts-batch-transfer-with-steem-python
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-06 10:49:18
categories:
- steemdev
tags:
- steemdev
- steemit
- transfer
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmUHD9RHmyNtEJz1TRbTyEEvAi2ZsYJHsbqV6s5gnXirTh/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Manual transfer

Some of my friends held some very interesting activities on steemit. Such as `谷哥点名` by @jubi, and `七夕征文大赛`by @rivalhw. The activities are very successful, plenty of people did participate and many people won the prize.

But, How to pay bonuses is a bit of a hassle, organizers need to log on to the website and transfer bonuses to each winner.

![](https://steemitimages.com/DQmUHD9RHmyNtEJz1TRbTyEEvAi2ZsYJHsbqV6s5gnXirTh/image.png)

![](https://steemitimages.com/DQmPisdDLX5W6C3gkgeb6nrds6fGR3FPZ1mFRhgs1PsxFmw/image.png)

If there are a large number of winners, We need to do the same thing over and over again.

# Batch transfer

Fortunately, we can implement batch transfers using program.
Just installed ***the official python library for STEEM*** as I mentioned in [my previous article](https://steemit.com/steemdev/@oflyhigh/how-to-claim-your-rewards-automatically)

But, We need ***Active private key*** this time, follow the same steps  in [my previous article](https://steemit.com/steemdev/@oflyhigh/how-to-claim-your-rewards-automatically) but select  ***Active private key***, and then import it to our local wallet.

A simplest script maybe like this:
```
#!/usr/bin/env python
import sys
from steem import Steem

from_account = 'oflyhigh'
to_accounts = ['oflyhigh.test', 'jubi', 'deanliu']
amount = 0.001
asset = 'SBD'
message = 'Test transfer!'

def main(argv=None):
        steem=Steem()
        for to_account in to_accounts:
                steem.transfer(to_account, amount=amount, asset=asset, memo=message, account=from_account)

if __name__ == "__main__":
        sys.exit(main())
```

Now, we can transfer 0.001 SBD to multiple accounts ( @oflyhigh.test, @jubi, @deanliu) by executing the script. A message  ***Test transfer!*** was added at the same time.

Now, let me check my wallet:
![](https://steemitimages.com/DQmYxoV4dimck8qB5YRFa263XcpiQ7kWZc9dUmUiaUUHHEf/image.png)
We made it successfully!

# For encrypted messaging

***`steem-python`*** also supports message encryption.

To issue a encrypted message, just plus **`#`** prefix for your message.
For example, 
`message = '#Test transfer!'`

And you must import ***memo  private key*** to your local wallet, otherwise you will get the following error message like this one:
`steembase.exceptions.MissingKeyError: Memo key for oflyhigh missing!`

There's a small issue of  **`steem-python`** for encrypted memo
![](https://steemitimages.com/DQmZuR52Aj7Tf25pH7KDDPjLfYyM55rmURrpxNnGgYx3Myf/image.png)
We get two **'#'** in the memo,   which should be one, but it doesn't matter.

# 中文

我的一些朋友在STEEMIT举办了很多有意思的活动，比如 @jubi 的***谷哥点名***，  @rivalhw 的 ***七夕征文大赛***等等。这些活动非常成功，吸引了很多朋友参加并且很多朋友赢得了奖励。

但是，如何发放奖励是很麻烦的事情，组织者要登陆网站给每个获奖者一笔一笔的转账。如果获奖者很多，那么我们就要一次又一次的做相同的事情。

幸运的是，我们可以用程序实现批量转账并附加备注信息，代码参见英文部分。

程序同时支持备注消息加密，在消息前边加个**`#`**号就可以了。但是**`steem-python`**有点小BUG，转账后的消息里多了一个**`#`**号，但是这没啥大影响。

- - -

This page is synchronized from the post: [How to transfer SBD or STEEM to multiple accounts? (Batch transfer with steem-python) / 如何向多个账户批量转账](https://steemit.com/@oflyhigh/how-to-transfer-sbd-or-steem-to-multiple-accounts-batch-transfer-with-steem-python)
