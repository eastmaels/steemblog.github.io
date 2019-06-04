
---
title: 'How to calculate estimated account value: Part Two / 如何计算账户估值：第二部分'
permlink: how-to-calculate-estimated-account-value-part-two
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-02 05:27:12
categories:
- steemdev
tags:
- steemdev
- steemit
- wallet
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmbJsbAdBGz7L6r7nkrEuJjeZHGcpb3Lh2ABo7iei98v1S/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In my [previous article](https://steemit.com/steemdev/@oflyhigh/how-to-calculate-estimated-account-value-part-one), we concluded that:
To calculate estimated account value, we need to get items from these four parts:
1) The assets in wallet( And in SAVINGS)
2) The assets in internal market
3) The assets(SBD) in conversion processes
4) The assets(rewards) to be claimed

I will explain how to get them in this article.

![](https://steemitimages.com/DQmbJsbAdBGz7L6r7nkrEuJjeZHGcpb3Lh2ABo7iei98v1S/image.png)

# The assets in wallet( And in SAVINGS)

The following assets need to be fetched.

* STEEM
* STEEM POWER
* STEEM DOLLARS
* STEEM in SAVINGS
* STEEM DOLLARS in SAVINGS

There is a API named **`get_accounts`** will retrieve the account information which contained the above items.
` vector< extended_account > get_accounts( vector< string > names ) const;`

To retrieve them we need to put the account name into list, and then call API with this list as arguments. We can read the item value from the result using the corresponding key.


Item | Key 
----|----
STEEM | balance
STEEM POWER | vesting_shares
STEEM DOLLARS| sbd_balance
STEEM in SAVINGS| savings_balance
STEEM DOLLARS in SAVINGS | savings_sbd_balance

![](https://steemitimages.com/DQmePGpEQhp6GcCRfqPrqWHop4eKarF4pmEZ77s21NprFLR/image.png)
![](https://steemitimages.com/DQmQETyNWCmG71g62JbedfCg58PZXiEjCtaMiD4FVYarFq2/image.png)
![](https://steemitimages.com/DQmNnnmDmmVpJ8hWjZieRdR6pEZmvLXS1JtQm4wwwdj4MB6/image.png)
![](https://steemitimages.com/DQmc6REL5iKYF6hDDxvMeFWvPEDNXcAHyaMmK3SnE6ZGNwX/image.png)

An additional note, STEEM POWER was expressed in the form of  VESTS, we need to convert it to equivalent STEEM.

# The assets in internal market

To simplify the problem, In order to simplify the problem, we define two type of operations: ***BUY*** and ***SELL***.
* **BUY**: We pay SBD, and want to receive STEEM
* **SELL**: We pay STEEM, and want to receive SBD

So, We get the following correspondence

Asset| How to calculate
---|----
STEEM in internal market |  Remaining STEEM in all opening SELL order
STEEM DOLLARS in internal market | Remaining SBD in all opening BUY order

There is a API named **`get_open_orders`**, will return all open orders in internal market for specified account.
`vector<extended_limit_order> get_open_orders( string owner )const;`

The example return information for my account.
![](https://steemitimages.com/DQmXaRGkLLRGHDviC7YUT6RtuNmAaiP4z4523ehkimF2oM5/image.png)

We can draw the results from above information: we have 0.586 STEEM and 2 SBD in internal market.

# The assets(SBD) in conversion processes

As I mentioned in previous article, if we try to convert some amount SBD to STEEM, it will disappear from the wallet. So to accurately calculate the estimated account value, we need to get this part of SBD.

Fortunately, there is a API called **`get_conversion_requests`**.
`vector<convert_request_api_obj> get_conversion_requests( const string& account_name )const;`

The result should like this one, We can work out the total amount of SBD easily.
![](https://steemitimages.com/DQmbQyo4FaENctoreWzudn9cEpfqp9U4ZZeCHNSziMf7omf/image.png)

# The assets(rewards) to be claimed

And after HF18, users need to claim their rewards manually, so to accurately calculate the estimated account value, we need to add this part: Rewards to be claim.

The good news is we can retrieval them directly from user info,  with same API  **`get_accounts`** and the same way.


Item | Key 
----|----
STEEM Reward to be claimed |  `reward_steem_balance`
STEEM DOLLARS to be claimed | `reward_sbd_balance`
STEEM POWER to be claimed | `reward_vesting_balance` / `reward_vesting_steem`

![](https://steemitimages.com/DQmTRx1tH8Cp7J2rQP5raa23fxB2iray8MDa6BkPc51ZhHd/image.png)
For STEEM POWER to be claimed, we can obtain it from **`reward_vesting_balance`** or **`reward_vesting_steem`**, but the previous one need to be converted, so the later one is better.

For detailed usage of APIs, Please refer to the [**steem source code** on Github](https://github.com/steemit/steem).

# 中文

上篇文章中我们得出结论，精确计算账户估值，我们需要读取：

* 钱包资产（包括存款账户）
* 内部市场资产
* 转换中的资产
* 待收取的资产

我们可以使用：
**`get_accounts`**读回钱包资产（包括存款账户）
**`get_open_orders`**读回并计算出内部市场资产
**`get_conversion_requests`**读回并计算出 转换中的资产
**`get_accounts`**读回待收取的资产

API的详细用法，请参考[Github上的steem源码](https://github.com/steemit/steem)

- - -

This page is synchronized from the post: [How to calculate estimated account value: Part Two / 如何计算账户估值：第二部分](https://steemit.com/@oflyhigh/how-to-calculate-estimated-account-value-part-two)
