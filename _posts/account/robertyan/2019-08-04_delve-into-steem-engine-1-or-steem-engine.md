
---
title: 'Delve into Steem Engine (1) | 深入理解 Steem Engine (一)'
permlink: delve-into-steem-engine-1-or-steem-engine
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-04 18:35:51
categories:
- steem-engine
tags:
- steem-engine
- steem
- cn-reader
- cn-curation
- steem-guides
- sct
- cn-stem
- steemstem
- cn-programming
- cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- busy
thumbnail: 'https://avatars0.githubusercontent.com/u/51540775?s=200&v=4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


本系列文章的目的是帮助开发者（Developers）学习和了解 Steem Engine 系统的基本原理，引导阅读 Steem Engine 核心项目的源代码。同时，本文也是对《Steem Engien手册》的《开发与数据》章节的投稿。


<center>
![](https://avatars0.githubusercontent.com/u/51540775?s=200&v=4)
<sup>image source: https://github.com/steem-engine-exchange</sup>
</center>


## 缘由：导读

做学问的一般方法：“学、问、思、辨、行”。其中“学”是以阅读和观察为主，对于不同的知识领域都是如此，所谓“欲求创新，必先通达”。举例来说，对于自认为有“知识”的人而言，如果并不熟悉和深入阅读人类智慧的经典或对世界的现象有深入观察，便难以称得上是有智慧。对于“技术”领域亦如是，如果对于人类技术的核心发展脉络并没有清晰的了解，那么对于“技术”概念在不同尺度的把握，也会存在一些误区。

狭隘一些来讲，对于所谓的“程序员”（Programmer或Developer），想要对于计算机技术有一定程度的掌握的话，恐怕也要对于最经典的代码（Code）有一定程度阅读和理解。这是个浅显的道理，但不见得有多少“程序员”真正下了苦功夫去认真“阅读”和掌握这些智慧，这与当下趋于功利、缺乏耐性、追寻变化的时代背景不无关系。具体来说，操作系统、计算机语言、数据存储和处理、计算引擎、Web浏览器、常用协议和工具等的代码，是最值得阅读的经典代码的例子，而这些代码中有很多都是开放源代码的（Open Source），可以轻松获取。

经典虽在，却少有人阅读。一方面，这是由于缺乏“夫学须静也”的心态，另一方面，阅读过程上的挑战可能在于缺少对于项目的背景、缘由、设计哲学、基本概念、系统结构、发展方向等“情境”（Context）的理解，所以要着手深入阅读对于很多人而言是困难的，换句话说，缺少“导读”。相对应地，我们有时能看到一些解读这些项目的书籍，也确实能降低普通读者了解这些项目的成本。但需要警惕的是，“导读”无法替代“阅读”，从整体上把握这些人类的智慧，需要系统、深入地“阅读”。

本文的目的正是“导读”。Steem Engine作为一个项目而言，其生命周期或难以预料，但至少它勾勒了一种构建现代应用和货币生态的可能性，并处在一个较为独特的位置，可以作为一个案例来阅读和学习，这是我们建议“阅读”它的原因。既为导读，难免失之笼统，而疏于细节；但求能把握住一些最核心的思想和方法，有益于读者。

## 结构：社群 = 货币 + 应用 + 人

对于 Steem Engine的详细介绍，请参考[《Steem Engine手册》](http://steem-engine.steemh.org)中的内容。但如果要用一句话来总结 Steem Engine 的价值，我认为便是：“创建社群”（Create Tribes）。

首先，这里的“社群”（Tribe）的概念指一种通过货币（token）为媒介、应用（app）为载体，推动具有某一个或多个维度上具有共同特征的人群进行社会互动的组织形式。

其次，“创建”的含义在于 Steem Engine使得“社群”的形成，其依赖于社会、经济和技术的基础。Steem Engine的主要贡献是在技术上（app）和经济上（token）使其成为可能。至于社交上的可行性，则已经由 Steem 社区本身提供了“用户基础”；但同时，Steem 在技术上和经济上的基础功能，也不可忽视。

Steem Engine 从产出上来看，为各个“社群”的形成提供了（1）Token（2）App（或dApp）。所以帮助社群的组织者们创建Token和App，成为其最核心的能力。

相对应的，Steem Engine的核心代码模块，也为满足这些功能而服务。为了进一步理解 Steem Engine 的项目，我们应当了解它的项目的基本结构是怎样的。

<center>
![image.png](https://files.steempeak.com/file/steempeak/steem-guides/43ExkaZz-image.png)
<sup>image source: https://steem-engine.com</sup>
</center>


### 货币 Token

首先，为了基于 Steem 创建货币，Steem Engine 使用了 Steem Smart Contract 用于支持货币的创建（create token）。毫无疑问，Steem Smart Contract 是 Steem Engine 最为核心的项目之一。

- Steem Smart Contract: https://github.com/harpagon210/steemsmartcontracts

其次，为了进行 Token 的交易，Steem Engine 需要创建交易所用于协助用户的交易行为和钱包的管理，这就是 Steem Engine Exchange。这包括了最早期的版本 https://steem-engine.com，以及开发中的 Steem Engine DEX。

- Steem Engine Exchange: https://github.com/MattyIce/steem-engine
- Steem Engine DEX: https://github.com/steem-engine-exchange/steem-engine-dex

最后，为了方便交易权限管理，以及查看各类Token，Steem Keychain 得到了广泛的使用，以精确和安全地控制用户权限。Steem Keychain 是实际上的 Steem 钱包的最新标准。

- Steem Keychain: https://github.com/MattyIce/steem-keychain

以上这几个项目，是基于 Steem 创建货币（Token）的重要组件。我们将在之后的项目中依次介绍和解读其源代码。

### 应用 App

除了货币（Token）之外，帮助社群（Tribe）的组织者快速构建应用（App）是推动社群发展的有力条件。基于 Steem 社区建立的 SCOT 社群，常常希望可以借鉴 Steem 的 Curation 等机制，用于激活社群。

为了实现这一点，Steem Engine 提供了如何创建 Smart Contract 以及对应的 App 的解决方案。但需要注意的是，目前 Steem Engine 支持特定的 Smart Contract，并通过 Scotbot 将 Steem 主链上的 transaction，翻译为 Sidechain 上的 transaction。由于 Scotbot 并非开源项目，我们只能查看它的 API 文档进行了解和使用：

- ScotBot API: https://github.com/steem-engine-exchange/scotbot-docs/tree/master/docs/api

为了创建 SCOT 应用，目前最常用的项目模板是基于 Steemit 的 Condenser 项目改写的 Nitrous:

- Nitrous: https://github.com/steem-engine-exchange/nitrous

此外 TokenBB、DTube 等也有对应的应用模板，但目前最常用的，还是 Nitrous 项目。

除此之外，用户还可以使用 Steem Smart Contract 和 Steem Engine 的API，构建自己的应用。目前使用较多的类库有：

- sscjs (Steem Smart Contract JavaScript Library): https://github.com/harpagon210/sscjs
- steemengine (python): https://github.com/holgern/steemengine

在之后的章节，我们将导读这些核心项目的源代码，帮助开发者了解如何开发和完善 SCOT 应用。


### 工具 Tool

为了更好地管理和运营货币、应用和用户，一些列工具被创建出来。

其中，最为重要的是对于基于 Steem Smart Contract 的侧链（Sidechain）的块查询工具。目前，使用最多的是 https://steem-engine.rocks 项目：

- Block Explorer: https://github.com/inertia186/tender

我们也将在之后的章节介绍这些工具的源代码。



## 方法：主题阅读

最后，既然是导读，那不得不简要谈一谈阅读方法。

如果你读过 [《如何阅读一本书》](https://book.douban.com/subject/1013208/) 这本书，你可能了解它将阅读分类为基础阅读（基本的语言文字能力）、检视阅读（即略读）、分析阅读（即精度），以及主题阅读（阅读一系列同主题的书）。

作为类比，我们可以认为代码阅读也有这种分类：

1. 会阅读基本模块（如函数、文件等），可以对应为“基础阅读”；
2. 能够快速阅读整个项目的目的、结构、核心方法等，是为“略读”；
3. 能够深入逐行阅读代码的设计方法和实现细节，是为“精读”；
4. 容易被忽视的可能是“主题阅读”的方法，即对某一特定主题的一系列项目进行综合把握，回答或解决某个特定问题。

需要注意的是，虽然很多人上过“语文课”或“国文课”，但在阅读一本书的基本能力上，并不过关，且不具备好的阅读习惯。其实代码的阅读也是同样，有些人虽然有能力参与写一些简单或者复杂的应用，但在如何阅读完整的源代码上，并不具有完备的能力。以至于对应到“写作”也是一样，有些在大型公司工作的“开发者”，经常面对的也是局部的算法或模块，以至于对于整体的把握能力也有所不足。

《深入理解 Steem Engine》 系列，可以认为是一次**主题阅读**，以回答几个主要问题为目标：

1. Steem Engine 的各个模块是如何设计的？如果要修改应当如何着手？
2. Steem Engine 的设计有哪些优秀之处？值得我们学习和借鉴
3. Steem Engine 存在哪些问题和挑战？它应该朝何处改进？

为了更好的进行主题阅读，我们将分详略和表现形式，依次介绍 Steem Engine 项目的各个组成部分。例如，Steem Smart Contract 会是我们深入阅读的重点，但基于它构建的 sscjs 则可以快速略读。

接下来，我们将依次阅读这些开源项目。如有兴趣，欢迎你和我们一起阅读。

让我们从 [Steem Smart Contract](https://github.com/harpagon210/steemsmartcontracts) 开始。



## 参考文献

1. 斯平内利斯，[《代码阅读方法与实践》](https://book.douban.com/subject/1151672/)，清华大学出版社，2004年
2. Amy Brown, [The Architecture of Open Source Applications](https://book.douban.com/subject/6430747/), lulu.com, 2012
3. 莫提默·J. 艾德勒 / 查尔斯·范多伦, [《如何阅读一本书》](https://book.douban.com/subject/1013208/), 商务印书馆, 2004年
4. @aggroed, [Scotbot launch! Time to make your own custom token powered by proof of brain on Steem!](https://steemit.com/steem-engine/@aggroed/scotbot-launch-time-to-make-your-own-custom-token-powered-by-proof-of-brain-on-steem), 2019/05/09

- - -

This page is synchronized from the post: ['Delve into Steem Engine (1) | 深入理解 Steem Engine (一)'](https://steemit.com/@robertyan/delve-into-steem-engine-1-or-steem-engine)
