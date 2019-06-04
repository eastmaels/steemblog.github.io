
---
title: '喂价(feed_price)以及STEEM的历史中间价(current_median_history)'
permlink: feedprice-steem-currentmedianhistory
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-16 04:37:48
categories:
- steemdev
tags:
- steemdev
- witness
- feed
- price
- cn
thumbnail: https://steemitimages.com/DQmWFkBr4DYg3RXfbNKNRiRhw3YvfW1CS129eoiDCnDLsDm/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我以前的不少帖子中，都有涉及到**`喂价(feed_price)`**以及**`STEEM的历史中间价(current_median_history)`**等信息。在被问及喂价是怎么回事，历史中间价是多久的历史，这些价格如何得来等诸多问题时，我要么装作没看到，要么回答得语焉不详，原因是我也不知道啊。

![](https://steemitimages.com/DQmWFkBr4DYg3RXfbNKNRiRhw3YvfW1CS129eoiDCnDLsDm/image.png)
(图源 ：[pixabay](https://pixabay.com))

所以今天看了一下代码，了解了一下相关内容，这样以后再被问到，就不会丢人啦。

# 见证人提供并更新喂价

涉及到喂价，我们难免会问到，喂价是哪里来的呢？答案是喂价由见证人提供。

见证人可以通过**`witness_set_properties_operation`**或者**`feed_publish_operation`**设置或者发布喂价。

第一个操作可以对witness的诸多属性进行设置，比如说**`account_creation_fee`**、**`max_block_changed`**以及**`sbd_exchange_rate`**等

第二个操作仅仅用来发布喂价，因为大多数时候见证人的大多数属性不需要修改，但是STEEM价格变动是非常频繁的，使用**`feed_publish_operation`**可以减少数据传输量并节省系统开销。

发布喂价操作处理很简单，就是将对应见证人的喂价信息更新。
![](https://steemitimages.com/DQmUBut8Q4sXJMopDuqpA33VuzBJYsVbRdbBjfaDnJeQ9B6/image.png)

见证人的喂价一般来源于交易所STEEM兑美元的价格，因为系统认为SBD锚定一美元，所以见证人价格提供的方式为**`SBD/STEEM`**。原则上见证人可以提供任意价格，比如说100000 SBD，系统的处理机制会保证偏离过大的价格不会采纳。

# current_median_history的获得

前边我们说了，见证人提供并更新喂价，但是那么多见证人提供的喂价，用谁的呢？还是用平均值？听我慢慢道来。

#### 更新间隔

尽管STEEM市场行情每分每秒都在变化，但是系统的喂价每小时更新一次，调用的函数为：**`update_median_feed`**。

![](https://steemitimages.com/DQmWrNn3CV2sjWeoYM8X2VKyV4iEXmyetCWw1H4pvUsGmwX/image.png)
尽管每出一个块都调用**`update_median_feed`**，但是以上代码使得实际被调用的周期是每小时一次。

其中：
>`#define STEEM_BLOCKS_PER_HOUR                 (60*60/STEEM_BLOCK_INTERVAL)`
`#define STEEM_FEED_INTERVAL_BLOCKS            (STEEM_BLOCKS_PER_HOUR)`


#### 中间喂价(median_feed)

接下来的步骤是获取本轮见证人列表，以及对应见证人提供的喂价：
![](https://steemitimages.com/DQmUgTCpSbFqEjVgc32kQNdKscKJezdv8bksqF8nfSPtFuK/image.png)

有关每轮见证人是如何产生的，可以参考我之前的文章：[《STEEM 见证人的选择方法》](https://steemit.com/witness/@oflyhigh/51sugk-steem)

对获取的喂价进行排序，取其中间的那个值
![](https://steemitimages.com/DQmcr4bznytLQcskiw4hvMteo34GgJWVyTAtWfmP56brn2m/image.png)
**这段代码解答了为何见证人的超高超低报价都是无效的这个问题。因为报价取的不是平均值，而是取中间的报价。**

#### 历史喂价(price_history)

有了中间喂价(median_feed)，确切地说应该叫做**当前喂价中间价**，我们就可以更新历史喂价了。
![](https://steemitimages.com/DQmWjHTGo4B9TkbeNy2PZtbraM3apanLkoJ8n1YYfyChxKg/image.png)

其中`STEEM_FEED_HISTORY_WINDOW`为：
>`#define STEEM_FEED_HISTORY_WINDOW             (12*7) // 3.5 days`

从代码不难看出，所谓的历史喂价就是保存了3.5天（84组median_feed）的队列，新的**当前喂价中间价**追加到最后，最老的数据（最前边的）弹出。

接下来对历史喂价进行排序，并取中间值，这个就是**`current_median_history`**了。

代码最下边的段落用于调整**`current_median_history`**，以限制SBD在市场总份额中的占比，这个至少目前没被触发，先略过不谈了，回头计算一下。

# 总结

通过学习，我们得出如下结论：
* 见证人提供并更新喂价
* 系统每小时更新一次系统的喂价数据
  * 选择本轮见证人的喂价数据
  * 排序取中间值/median_feed（所以偏差较大数据无效）
  * 将median_feed追加到price_history末尾，并丢掉price_history头部数据
  * 排序取price_history中间值作为current_median_history

好吧，这回**`喂价(feed_price)`**以及**`STEEM的历史中间价(current_median_history)`**总算清楚了。


需要注意的是不同语境下，**`喂价(feed_price)`**代表不同意思。比如对于见证人而言，**`喂价(feed_price)`**指的是见证人提供的STEEM报价，对于STEEM区块链系统而言，**`喂价(feed_price)`**指的是**`STEEM的历史中间价(current_median_history)`**。

- - -

This page is synchronized from the post: [喂价(feed_price)以及STEEM的历史中间价(current_median_history)](https://steemit.com/@oflyhigh/feedprice-steem-currentmedianhistory)
