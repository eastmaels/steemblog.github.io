
---
title: '修复见证人列表收益估算功能 / Fixed revenue estimation function of the witness list'
permlink: --fixed-revenue-estimation-function-of-the-witness-list-2019-08-01
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-01 09:39:24
categories:
- witness-category
tags:
- witness-category
- witness
- steemit
- busy
- cn
thumbnail: 'https://cdn.steemitimages.com/DQmeD7qGz8gDcyd7pku6SRe386yBD1BAHZwRjnk7ifqzGRZ/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



在之前的帖子[《关于见证人收益估算功能出错的说明》](https://steemit.com/witness-category/@oflyhigh/--api-steemit-com-was-suddenly-upgraded-to-0-21-0-2019-07-30)中，我提到由于节点`api.steemit.com`升级到0.21.0导致了我见证人列表收益估算功能出错。

![](https://cdn.steemitimages.com/DQmeD7qGz8gDcyd7pku6SRe386yBD1BAHZwRjnk7ifqzGRZ/image.png)

具体的出错原因是，API节点0.21.0版本中，移除了如下两个参数：
>`STEEM_CONTENT_REWARD_PERCENT`
>`STEEM_VESTING_FUND_PERCENT`

程序去读取这两个参数，又读取不到，所以导致收益估算功能严重偏差。

在0.21.0版本的API节点中，这两项内容被更新为：
>`STEEM_CONTENT_REWARD_PERCENT_HF16`
>`STEEM_VESTING_FUND_PERCENT_HF16`

所以如果仅仅是为了让程序可以正常运作，只需使用上述参数名替换之前的参数名即可，如此我们得出的STEEM每个区块的通胀以及分配如下：
>![](https://cdn.steemitimages.com/DQme2cZYbXYH6GWrsHwQZC39G2jmQGNzKhU8CPHM8FgfyUz/image.png)

但是事情到此为止的话，当硬分叉21启动后，程序估算功能又会出错，为何？因为HF21以后，每块通胀产生的收益，又多了一个分配者，那就是SPS ( @steem.dao)：
>The inflation budget has been changed to fund the SPS. The content rewards are being reduced from 75% of the budget to 65% to give 10% of the inflation budget to the SPS.

而HF21后，实际起作用的参数应该是：
>`STEEM_CONTENT_REWARD_PERCENT_HF21`
>`STEEM_VESTING_FUND_PERCENT_HF16`
>`STEEM_PROPOSAL_FUND_PERCENT_HF21`

所以正确的做法应该是调用`get_hardfork_version`获取硬分叉版本，如果是HF20，则使用之前的参数，否则则使用新的参数组合，调用的JSON如下：
>`{"jsonrpc": "2.0", "method": "condenser_api.get_hardfork_version", "params": [], "id": 1}`

当前还没有硬分叉，所以返回值如下：
>![](https://cdn.steemitimages.com/DQmX9Tjgi4bmtP8yW34GgSo9NdgDpE8u8inWbrXKgoFPcBs/image.png)


其实无论是HF20还是HF21，对于见证人收益来讲并没有变化因为：
>`STEEM_CONTENT_REWARD_PERCENT_HF16 = STEEM_CONTENT_REWARD_PERCENT_HF21 + STEEM_PROPOSAL_FUND_PERCENT_HF21`

如果再想完善些，应该用`get_version`获取API节点的版本，再做对应处理，不过我懒，好用就算啦，哈哈。

# 相关链接

* https://www.eztk.net/witnesses.php
* [关于见证人收益估算功能出错的说明](https://steemit.com/witness-category/@oflyhigh/--api-steemit-com-was-suddenly-upgraded-to-0-21-0-2019-07-30)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['修复见证人列表收益估算功能 / Fixed revenue estimation function of the witness list'](https://steemit.com/@oflyhigh/--fixed-revenue-estimation-function-of-the-witness-list-2019-08-01)
