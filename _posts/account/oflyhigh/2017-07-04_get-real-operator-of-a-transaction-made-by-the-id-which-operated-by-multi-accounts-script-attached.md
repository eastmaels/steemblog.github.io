
---
title: '获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of  a transaction made by the ID which operated by multi accounts, script attached'
permlink: get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-04 02:36:39
categories:
- cn
tags:
- cn
- cn-programming
- steem
- steemit
- python
thumbnail: https://steemitimages.com/DQmd41ttqyVU8yUVY6NGg4RT887uiJRzkVF18oiBMenMpyJ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmd41ttqyVU8yUVY6NGg4RT887uiJRzkVF18oiBMenMpyJ/image.png)

我在之前一系列文章中讲过多人如何共同操作一个(公共)账户，以及如何获取共同操作账户所做操作的真实操作者等。
* [STEEMIT高级操作之：如何多人共同维护一个公共STEEMIT账户(ID)](https://steemit.com/cn/@oflyhigh/steemit-steemit-id)
* [通过事务ID(transaction id) 获取事务(transaction) / Database API: get_transaction](https://steemit.com/cn-programming/@oflyhigh/id-transaction-id-transaction-database-api-gettransaction)
* [珍惜羽毛 / STEEM区块链忠实的记录你的操作 / 获得共同操作账户的真实操作者](https://steemit.com/cn/@oflyhigh/steem)

但是很多朋友可能依旧是一头雾水，这里我来总结一下，并附上简单的脚本：

# 获取共同操作账户的操作者列表 / Obtain the operator list

首先，所谓共同操作账户，亦即一个账户有多个操作者：
以 @laodr 为例：

![](https://steemitimages.com/0x0/https://steemitimages.com/DQmPaGAdfFcFLgNgmFKZdzPuP7ovhMvomfkhWUUomSD57NA/image.png)

茶馆的几位茶东，分别是 @lemoojiang  @ace108 @oflyhigh @deanliu @rivalhw (排名不分先后)
所以可以知道这六组公钥分别是五位茶东加laodr 本身。
分别对比六组公钥以及五位茶东的公钥，即可得知操作这列表

如果一个公共账户有多个操作者，但是操作者并未公开，这时候想知道操作者列表略有难度，基本思路是对比，但是几万个账户如何逐一对比？这时候可以考虑把账户数据整个拉下来，本地比较，或者使用数据库服务，比如steemdata, 这些属于另外的话题，暂不做深入探讨了。

# 获取共同操作账户的某项操作信息 /  Obtain information of a transaction 

或者共同操作账户的某项操作信息很简单，使用steem查看对应账户即可，当然也可以用API: `get_account_history`取出一定数量的操作，然后找到需要的内容。

简单来讲，为了获取真实操作者，我们需要两项信息：
* block_num
* transaction_id
比如以下操作：
![20170704100617.png](https://steemitimages.com/DQmRAX9URbnY2tH4MasStzZKsvQwwAr7scd1bC2ZGAVruqp/20170704100617.png)

block_num 为：13362801
transaction_id 为： fca06cc1cb09a93c2edf57d30bbf1583a59b1f26

# 脚本 / The script

以下为获取共同操作账户某个操作的真实操作者的简单脚本
使用官网的python库

其中通过Signed Transaction 计算出对应公钥部分应该有简洁的方式，但是我试了一下不工作，可能我调用方式有误，感兴趣的读者可以自己试试。

公钥列表部分请按上述描述方法，以及你要查询的共同操作账户自行补充。


```
#!/usr/bin/env python

import sys
from pprint import pprint
from steem import Steem
from steembase import transactions
from steembase.account import PublicKey
steem_node='https://steemd.steemit.com'

pk_dict = {
'STM8Jee8GQJTNyeonvrd5xcKhNNDbCWbgWB5JuBs4wpxZEfXXXXXX':'user1',
'STM5tT6fKtodfdMGxtcgsQuEYypmMwuLCVaZdsQ7HcbSKCXXXXXXX':'user2',
'STM4wU99xY8zty7LsJFABsPw54iMMxtkndXvr4AAmJufpkLXXXXXX':'user3',
'STM84UFE7DCn8fjMgLw5t2aKBRvQW1qxcwBVWYbek6knJSbCXXXXX':'user4',
'STM8Jee8GQJTNyeonvrd5xcCWbgWB5JuBs4wpxZEfB3KDzXXXXXXX':'user5'
}

help_msg = '''Usage: {} block_num txid 
    Example: {} '''

def get_real_operator(steem, block_num, tx_id):

	block = steem.get_block(block_num)
	index = block['transaction_ids'].index(tx_id)
	tx =  block['transactions'][index]
	
	real_operator = 'Unknown'
	tx_obj = transactions.SignedTransaction(**tx)
	
	for pk_str in pk_dict.keys():
		pk = PublicKey(pk_str)
		pks = [pk]
		try:
			tx_obj.verify(pks, "STEEM")
		except:
			continue
		
		real_operator = pk_dict[pk_str]
		break

	return real_operator, tx

def main(argv=None):

	if len(sys.argv) != 3:
		print(help_msg.format(sys.argv[0], sys.argv[0]))
		print(sys.argv)
		exit()

	block_num = int(sys.argv[1])
	tx_id = sys.argv[2]

	print('-------------------------------------------------------')
	steem = Steem(node=steem_node)

	real_operator, tx = get_real_operator(steem, block_num, tx_id)
	pprint(tx)
	print(f"The real operator of above tx: {real_operator}")
	print('Done!')
	
# ****************************
# main function
# ****************************

if __name__ == "__main__":
        sys.exit(main())
```

# 结论 / Conclusion

* STEEMIT 可以多人操作同一个账户
The steemit ID can be operated by multi accounts
* 通过对比公钥的方式可以获得操作者列表（名单及对应公钥）
We can obtain the operator list by compare the public keys
* 通过steemd或者`get_account_history`可以获取block number 以及 transaction id
We can get block number & transaction id from a transaction by steemd or API
* 通过block number 以及 transaction id 可以获取Signed Transaction
Get Signed Transaction from block
* 通过Signed Transaction 与公钥列表可以判断出哪个公钥对应的私钥对Transaction进行的签名
Calculated public key which correspond to this transaction
* 通过公钥获取操作者亦即我们说的`真实操作者`
Get the real operator 

欢迎讨论，欢迎指正。

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of  a transaction made by the ID which operated by multi accounts, script attached](https://steemit.com/@oflyhigh/get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached)
