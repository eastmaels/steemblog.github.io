
---
title: 'Holochain的Dapps時代'
permlink: holochain-dapps
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-18 02:46:45
categories:
- cn-cryptocurrency
tags:
- cn-cryptocurrency
- holochain
- hot
- busy
- cryptocurrency
thumbnail: 'https://cdn.steemitimages.com/DQmZ9HSvuhbaoxLduJ9dZoFPYDtAytrMWXWrafrCJqPdZeL/1.jpeg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位Steemit上的朋友你們好，未來我會和Mr Block合作為大家帶來更多關於Holochain和不同區塊鏈技術的資訊，大家喜歡他的文章的話也可以用微信掃碼關注他的公眾號。



作者簡介：Mr Block 本為一名法律從業者，在2017年數字貨幣交易與價格急速上升，吸引了Mr Block注意。
慢慢由觀察者變為數字貨幣的投資人，對區塊鏈相關技術產生喜好，相信區塊鏈相關技術及數字化資產會為未來經濟及互聯網帶來新模式。
除了投資外，也積極在行業不同的社區中擔當不同的角色，致力推動行業發展和知識普及。
目前是Holochain的社區自願者，HoloPorts中國的認可銷售商。此外，也在行業中的投資機構擔任社區推廣工作。
Mr Block的文章主要是為不同的項目進行盡職調查，研究技術為主。希望能讓更多朋友了解項目背後的技術，行業面對的問題，由淺入深解讀項目相關應用及原理。

<hr>

## 首先，简单介绍一下什么是Dapps？



  

> Dapps是分散式的应用程式，是由许多用户在去中心化的网络上运行的协议。它能解决信任的问题，主要特征是会开放源始码，而且没有中心点。在Dapps上互联网用户无法单独控制他们在网络共享的数据。


<center>![1.jpeg](https://cdn.steemitimages.com/DQmZ9HSvuhbaoxLduJ9dZoFPYDtAytrMWXWrafrCJqPdZeL/1.jpeg)</center>






> 区块链就像一个去中心化的AppStore的，任何人都可以在链上发布应用程序Dapps，这些应用程序和现在普遍使用的应用程式不同，不需要中间人来运行或管理用户的信息，Dapps可以直接连接用户和提供者。举一个简单的例子，我们可以将这种设计用于Twitter，建立一个分散式的Twitter可以抵抗审查。将消息发布到区块链后，即使是创建这个系统的公司也无法删除消息。





<hr>

## <center>Dapps的类别</center>



目前开发者采用率最高的区块链为以太坊，有许多不同种类的Dapps建立于以太坊的区块链上。


__第一类最普遍为资金管理类Dapps__



用户可能需要兑换ETH作为与其他用户履行合约的方法，利用网络分散式的运算节点作为帮助发布数据的方法。



<center>![2.jpeg](https://cdn.steemitimages.com/DQmVPFUr4EaUA76dvRzNzXPyzjvy13Pr3wvavSmv1a3rvxU/2.jpeg)</center>


__第二类为混合资金和链外资讯的Dapps__

以一个保险类的应用程式作为例子，农民在Dapps上购买收成保险，承保方为灾难发生导致农作物失收的损失赔偿。当旱灾发生时，智能合约的赔偿条件满足，赔偿金会自动转帐至受保方的帐户。
履行这一类的智能合约依赖于外在的因素，合约能自动侦测某些预定的条件是否被满足。


<center>![3.jpeg](https://cdn.steemitimages.com/DQmcHzvrERiF7rbcbk9ddFxJ6PBQinppgzzdnYveYa72Ftz/3.jpeg)</center>

而其他类别的Dapps包括各种投票和管理系统等等，去中心化的自治组织（Decentralized Autonomous Organization）是其中一个例子，目的是成立一个没有领导人，通过那些编写在智能合约里的规则而运行的组织。
最有表代性的例子是The Dao，它是以一组合约的形式存在于以太坊的网络上的风险投资基金，它没有实体的地址和正式的管理人员。设计者最初的理念是把董事被授予的权力废除，并将其置于拥有者的手中，防止基金管理者滥用投资者的资金。投资者以拥有的电子代币的数量而获得相等的投票权，他们可以按立约人提交的投资建议书进行投票。在通过白名单前，自愿者群组里的监护人会对项目的合法性和建议书递交者的身份进行查核。投资获得的利润会按比例发放给代币持有人。

<center>![D.png](https://cdn.steemitimages.com/DQmR6pGiVHLi9WK7SgW2VPwwyTwM3HNY7KKjqaGQ7EU4w6A/D.png)</center>

在全球各地不同开发团队已经孜孜不倦投入了许多时间和精力研发不同的工具，目前不少基础设施已经建立于以太坊的网络上，像Web3.js，OpenZeppelin，Truffle，Infura，Geth，Ganache，MetaMask，MyCrypto以及Etherscan等。其中这些开发框可以帮助开发者更轻松在以太坊上构建Dapps。

<center>![DappRadar.png](https://cdn.steemitimages.com/DQmbAuBrpsZRnPQBUApuVyEF1kNaZobWRWQYQpwr2z3TmkL/DappRadar.png)</center>







在DappRadar上可以查看目前已上线的Dapps，网站大致把Dapps分为游戏类，赌博类，交易所类以及收藏类等。每天会更新Dapps的使用率等数据，发布综合排名榜。


<center>![top.png](https://cdn.steemitimages.com/DQmRYHtpo45RMFcn68EuppjNcWcZWqtb6hA4LzcZp77VjrV/top.png)</center>



<hr>


# <center>Ethereum 的弱点</center>



> 随着以太坊的生态的发展，开发者也慢慢发现目前以太坊的性能应付不到庞大Dapps的使用量。由于以太坊目前只有大概15 TPS（每秒交易次数），即是每秒只能处理约15笔交易。单单是去年推出的一款区块链小游戏CryptoKitties，玩家可以通过发送ETH繁殖属于自己的卡通小猫与其他玩家进行交易。游戏刚推出时吸引了很多人追棒，其交易量堵塞整个以太网络，近乎瘫痪。


<center>![Cryptokitty.png](https://cdn.steemitimages.com/DQmP5WaiBjopv47QKGznSzR52UBrSpB5pqPVYJ8MTZJXG8u/Cryptokitty.png)</center>


 

自2017年CryptoKitties推出以来，至2018年的第一季，链上等待处理的交易数量增加了6倍。


<center>![chart.png](https://cdn.steemitimages.com/DQmQ3EcLmp8jVjwt32co2UhStu1mQNm739AoPhyaCJk5umd/chart.png)</center>


扩容性与交易及数据传输速度是以太坊网络和整个区块链行业遇上的颈瓶，如果未来希望推出一个完全去中心化的社交软件取代的Facebook，技术必须能支持每天高达上千百万的讯息能畅通无阻发放在平台上。





<hr>


# <center>Holo与区块链不同之处</center>





Holo认为区块链对于大多应用程序Dapps来说是根本性的缺陷，因为区块链是以数据为中心(data-centric)，强调普遍共识，每项交易或数据传输都需要经过链上每一个节点验证，导致效率下降。



### 相反，Holo是以代理为中心(agent-centric)，强调个人观点和主权。



Holo构建的数据链不是由所有节点（以数据为中心）保持一个完全相同的单一链，而是由每个用户维护的自己独立的链（以代理为中心）。使用与bittorrent - 分布式哈希表（DHT）相同的技术验证每一个独立链的有效性。

<center>![arch.png](https://cdn.steemitimages.com/DQmSzwM3Tb4Z3hnfZxejnQCfha3Kvck2xsyrNrWj3mne8RW/arch.png)</center>





Holo每一个代理人只需要管理自己的本地账户和交易。不像区块链要所有人达成共识去决定交易，这就是说每一个人的余额被记录在自己的链上。当有两个人进行交易，他们只需要审计交易双方的历史记录去确保双方有足够的Fuel用作消费。不需要第三方的共识或允许。当一方的余额增加，另一方的余额减少。所有交易都是平衡和相互抵消的。 Holochain上的数据不需要与所有人分享，Dapps A发生的事不需要被传播去Dapps B或C。如果A先生在去中心化的社交平台发简讯给B小姐，C先生并不需要知道。



因此，Holo的技术比起区块链，能够更兼容我们使用应用程式的习惯， 在Holochain上的交易和数据传输效率更高，并且不需要使用任何为环境带来灾害的挖矿式的算法。对于我们未来Dapps的发展更友好。



# <center>Holochain的Dapps - Happs</center>



<center>作为Holo的支持者，在Holochain上的Dapps，我更喜欢用Happs形容，更显它们的独特性。</center>



这一个命名为Clutter的Happs是目前在Holochain alpha上其中一个Happs的模版，其功能是一个去中心化的Twitter，由使用者直接运行，不需要通过企业的服务器，并不会受到任何形式的审查或控制。

<center>![cat.png](https://cdn.steemitimages.com/DQmPVyMC5XCVvyM8BwBZnfy4pPyfP4FuLGsSKzzdwGrwxmd/cat.png)</center>



Holo已经在美国各地、欧洲不同城市举办了多场黑客松(Hackathon)，聚集来自不同地方的程序员，分享技术。教导他们如何在Holochain上开发Happs。

<center>![hackathon.png](https://cdn.steemitimages.com/DQmeVQ9YnSG6AddqB3fubmrUJPn7H81QEpBxbAev7Shq4Ci/hackathon.png)</center>




未来数年内，当Holo的技术和生态慢慢发展成熟时。我们可以期待有更多的Happs陆续建立在Holochain上，或许哪一天广泛普及时，我们甚至会在不知情的情况下用上了Happs。



关于Holo的资讯或更新，我将会定期发布在公众号和大家分享，喜欢的朋友请关注订阅。


<center>![AC97C5ED-FD27-4190-B064-1B4AAEC970F0.jpeg](https://cdn.steemitimages.com/DQmcx3ziXUfwTVvhVcNCLqpBFG4Rr1TWTzhzw8pNqdVpcaH/AC97C5ED-FD27-4190-B064-1B4AAEC970F0.jpeg)</center>

- - -

This page is synchronized from the post: ['Holochain的Dapps時代'](https://steemit.com/@htliao/holochain-dapps)
