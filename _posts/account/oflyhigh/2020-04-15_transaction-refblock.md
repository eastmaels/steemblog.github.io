
---
title: '每天进步一点点：探索transaction中的ref_block_*'
permlink: transaction-refblock
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-15 12:10:45
categories:
- cn
tags:
- cn
- cn-programming
- python
- tapos
- transaction
thumbnail: 'https://cdn.pixabay.com/photo/2016/11/21/00/27/philatelist-1844081_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我们之前的文章中，我们没少接触到transaction，里边的内容诸如expiration、operations看字面意思就能理解，但是其中的`ref_block_num`以及`ref_block_prefix`是什么东西呢？有些让人犯迷糊。

![](https://cdn.pixabay.com/photo/2016/11/21/00/27/philatelist-1844081_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

今天来探索一下这都是啥，看看能不能搞懂一点点。

# ref_block_*  & TaPos

在STEEM/HIVE的文档和代码中找了大半天，也没找到说明，比如steem的transaction结构代码中：
>![image.png](https://images.hive.blog/DQmWnLViiCuqjw4LvgVb3kS2jGYvSLGWiafsKXzT8J3zT7E/image.png)

把变量往那一扔，谁管你来龙去脉的，好在steem和bitshares是一脉相承的，所以最终在bitshares的代码中找到两句说明：
>![image.png](https://images.hive.blog/DQmdzGq3FKYKLB2AcZac45poxpLdBERjXx25aQF6heJS6Qg/image.png)

其中关于`ref_block_num`的说明：
>Least significant 16 bits from the reference block number. If @ref relative_expiration is zero, this field must be zero as well.

其中关于`ref_block_prefix`的说明：
>The first non-block-number 32-bits of the reference block ID. Recall that block IDs have 32 bits of block number followed by the actual block hash, so this field should be set using the second 32 bits in the @ref block_id_type.

在EOS中，白皮书中把相关内容说的更明了一些了：
>![image.png](https://images.hive.blog/DQmVNxrNVg3ZJgKneyKzSM85VFk7aKPdtUYZGoqpzbSQitc/image.png)

简单来讲通过`ref_block_num`以及`ref_block_prefix`指向之前已经存在的一个块与hash来防止重播攻击等。

# Python代码

虽然我找了大半天资料，但是其实我一点也不懂它们在说啥，不过没关系，不懂装懂就好了。简单来讲，就是`ref_block_num`以及`ref_block_prefix`是transaction的重要组成部分，没有或者不正确，transaction就没法成功广播道网络上去。

接下来，我们只要研究咋把这两个值弄出来就好了。

最简便的一种方法是直接取head_block的`head_block_number`以及`head_block_id`来生成。而相关信息可以通过`get_dynamic_global_properties`来获取。

大致代码如下：
>`tx["ref_block_num"] = dgp["head_block_number"]& 0xFFFF`
>`tx["ref_block_prefix"] = struct.unpack_from("<I", unhexlify(dgp["head_block_id"]), 4)[0]`

（***之所以从第4个字节取起，是因为block_id的前4个字节就是block_num本身***）

再回头看steem-python中是如何做的：
>![image.png](https://images.hive.blog/DQmfA7XazP8YuPsWd5uL6MCM3vpg3N2LXgQTrdGkx8HCiNN/image.png)

通过代码可以得出，他取得是head_block往前数第三个块的`block_num`以及`block_id`来计算`head_block_number`和`head_block_id`。

取往前数第二个块的`previous`结果应该和取往前数第三个块的`block_id`是一样的，有些费解，steem-python中这样做的好处是什么呢？

# 为什么不用head_block

虽然我不知道该咋回滚，但是据说没变成不可逆块（`irreversible_block`）的区块是有可能被回滚的（分叉时丢弃？）

假设微分叉(micro-fork)发生时，那么应该有两个头块，我们引用头块的话，就有二分之一的概率引到被废弃的分叉上的头块。

这样之后分叉出来的头块被丢弃，我们又引用了这个块，我们的transaction也将会被丢弃。所以steem-python中往前数三个块再引用的方法是相同安全的。

貌似更安全一些的方法是引用`last_irreversible_block_num`，首先用`get_dynamic_global_properties`获取`last_irreversible_block_num`，然后再用`get_block`读取出对应block中的`block_id`。


# 参考资料

* https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md#transaction-as-proof-of-stake-tapos
* https://github.com/steemit/steem/blob/master/libraries/protocol/include/steem/protocol/transaction.hpp
* https://github.com/bitshares/bitshares-core/blob/master/libraries/protocol/include/graphene/protocol/transaction.hpp
* https://github.com/steemit/steem-python

- - -

This page is synchronized from the post: ['每天进步一点点：探索transaction中的ref_block_*'](https://steemit.com/@oflyhigh/transaction-refblock)
