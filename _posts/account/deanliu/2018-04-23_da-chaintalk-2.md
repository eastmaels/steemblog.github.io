
---
title: "DA-ChainTalk #2 — 區塊鏈應用的分層解析"
permlink: da-chaintalk-2
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-23 03:49:12
categories:
- da-chaintalk
tags:
- da-chaintalk
- blockchain
- cn-programming
- cn-cryptocurrency
- cn
thumbnail: https://steemitimages.com/DQmS99XjS22SRRVNMTG6kckJDb2zTfAkbKaZJrS6fu2YPzk/block-chain-3055701_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位好，上次我與 @antonsteemit探討了區塊鏈中State的內涵：

[State - 從宏觀到微觀：以太坊如何將智能合約帶入區塊鏈世界](https://steemit.com/da-chaintalk/@deanliu/state)

今天我們希望針對一個完整的區塊鏈應用，來「分層」解析其概念上的運作內容，希望能夠讓讀者們未來在考察一個區塊鏈應用時，能夠更清楚地認識其運作方式。

日後，此一系列將以「DA-ChainTalk」的名稱開頭，您亦可從 #da-chaintalk來追蹤我們的文章。謝謝！

![block-chain-3055701_1280.jpg](https://steemitimages.com/DQmS99XjS22SRRVNMTG6kckJDb2zTfAkbKaZJrS6fu2YPzk/block-chain-3055701_1280.jpg)<sub>*source-pixabay*</sub>

# 區塊鏈應用的分層解析

## Blockchain as a whole
現在許多人討論到「區塊鏈」時，其所涵蓋的範疇非常廣泛：從共識機制(PoS、PoW)、區塊鏈系統運作、挖礦、智能合約到應用等，全部都可能是討論的內容。如果你上網搜尋「Blockchain」也可以找到大量介紹這些**基本成份**的文章，但聚焦於這些成分的討論，卻容易使我們對一個區塊鏈應用少了一些「整體性」的了解，所以例如當我們在考察一個新的ICO項目時，不太容易充分理解其關於架構(Architecture)方面的說明。

所以今天我們希望比較系統性地，把整個區塊鏈應用從底層開始解析，除了讓我們了解各個「層」的作用之外，更重要的是了解「分層的意義」。如果你也覺得自己是個對於區塊鏈概念有基本的了解，卻還是時常感覺有些應用似乎還不是太懂，希望這篇文章能對你有所幫助。

##  Architecture of Blockchain Applications
你可能會問：為什麼要分層呢？其實真正在一個區塊鏈中，不一定會按照這個分層方法來將他們的程式模組化，但是了解各個分層，可以讓我們更容易理解區塊鏈整體運作的方式。整個節點的程式在運作時，可以想像成這是一家大公司，要處理的事情非常多，而分層就好像是一家公司分「部門」一樣，透過這樣的解析方式，能讓我們更清楚每一個我們所知道的知識，在一個大公司中是被運用在哪一個環節。

區塊鏈應用的分層並不像網路的分層有個標準，因此我在這裡選了一個我覺得最好理解的分層方式來介紹。分層方式如下：

![](https://steemitimages.com/DQmZCUZ1s6zPvfXni6b7Xo4RVnJcmaAYwHwEiw5BSLri9Hg/image.png)
(Image Source: [github/pandoraboxchain](https://github.com/pandoraboxchain/blockchain-abstractions-layers/))


### 1. P2P Network Layer 
這個`P2P Network Layer`是一個分散式系統的底層，可以想像成**負責節點之間通訊的協議**，也就是定義了在這個區塊鏈世界中，節點之間是如何互相溝通的。這一層的協議內容是門高深的網路架構學問，如Ethereum使用的是他們稱作[DEVP2P](https://github.com/ethereum/devp2p)的函式庫，有興趣的可以點連結進去看看他們的協議細節，例如ETH的[Node Discovery Protocal](https://github.com/ethereum/devp2p/blob/master/discv4.md)，了解在所謂「分散式」世界中，他們是如何知道新的節點加入以及退出網路。

基本上這一塊不是一般人會接觸的。我們只要知道，要在分散式環境中讓節點互相溝通不是件容易的事情啊！

### 2. Consensus Layer 共識層
這一層則是定義了一個區塊鏈中大家要用什麼協議來達成共識，也就是大家最熟悉的Consensus Protocal啦！在一個節點運行時，這部份的程式碼負責處理這些「共識」問題，若拿我們熟悉的PoW來說的話，就是負責「挖礦」還有「驗證」別的節點傳來的區塊資訊。
當然，現在共識方式已經發展出非常多種，這也是區塊鏈議題中討論度最高的問題之一，如果對PoS、PoW這方面還不太熟悉的朋友，一定要找機會好好了解一下這個區塊鏈的「精髓」!

### 3. Virtual Machine Layer 虛擬機層
這個VM(虛擬機)層，最重要的任務就是**改變區塊鏈狀態**（這裡說的狀態，可以參考我們[前一篇State討論文章](https://steemit.com/da-chaintalk/@deanliu/state)多一點了解）。其實再簡單點說，這就是**執行智能合約**的地方：當每個智能合約被執行完之後，都會對合約地址內的資料或是某人的帳戶地址下的資產有所改變，這就是所謂的「狀態改變」。

現在不同的鏈常常運行自己的開發的VM，例如 以太坊所用的[Ethereum VM](https://themerkle.com/what-is-the-ethereum-virtual-machine/)、Neo的[Neo VM](http://docs.neo.org/en-us/sc/tutorial.html#virtual-machine-architecture)或是Cardano 的 [IELE](https://iohk.io/blog/iele-a-new-virtual-machine-for-the-blockchain)。這些新VM的開發都是為了增進智能合約的執行效率等等，而不同的VM架構理論上也可以移植到不同的Consensus Layer上，因此現在大家傾向把VM當作獨立一層，特別分開來討論。我個人認為VM層是未來幾年內也會不斷翻新的一個關鍵點，如何讓一個區塊鏈能夠承載全球規模的交易，VM的設計可是非常關鍵的角色啊！

### 4. API  Layer | VM Programming Language
從第四層開始，可以分成兩端探討。第三層的VM是負責執行合約，因此第四層可以想像成我們一般人跟Blockchain VM之間溝通的橋樑。我們跟區塊鏈上VM溝通的方式大概就可分為
1. 撰寫新的智能合約並部屬到區塊鏈上
2. 透過API存取區塊鏈上的智能合約

這也是為什麼會分成VM Programming Language，以及API Layer來討論。

#### VM Programming Language
如果你有寫過智能合約就會知道，我們可以用不同的程式語言進行智能合約的開發，但最後都需要編譯成為VM可以理解的二元編碼。而我們所說的Programming Language層，簡單說就是提供「不同語言到二元碼的編譯器」或是「新的程式語言」。

這些程式碼不一定是官方開發團隊所提供的(也就是說已經不算是區塊鏈本體的一部分了)，例如Neo智能合約開發中`python`語言的編譯器`neo-python`就是由另一個開發團隊City of Zion所開發(如果你想學NEO智能合約開發也可以看Anton的[這篇文章](https://steemit.com/neo/@antonsteemit/neo-development-deploy-your-first-smart-contract)教學xD)。透過這個編譯器，一般python開發者可以輕鬆的利用python撰寫智能合約並且編譯後直接部署到鏈上，不用學習新的語言。但是以目前來看，這些編譯器沒辦法支援絕大多數的套件，所以並不一定比較方便。

現在最多人使用的智能合約開發語言還是非**Solidity**莫屬，它被歸類為EVM languages，因為它就是一種為了智能合約開發而被設計出來的新語言，因此有許多內建的函式等等都是為了跟區塊鏈溝通而設計，十分方便。因此如果想要走上智能合約開發這條路，Solidity應該是目前社群最廣大、功能最完整的開發語言。

#### API Layer
API就好像是一個規定好的溝通格式，讓我們能夠向特定的伺服器要求特定資料。
而區塊鏈上的API，就是一個讓鏈下程式跟區塊鏈溝通的接口。其中最有名也最廣被使用的就是以太坊的**Ethereum JSON RPC protocol**。如果你會寫`javascript`的話，可以用`Web3.js`函式庫很輕鬆的透過這個協議跟區塊鏈上的節點溝通，存取智能合約等等。如果沒有這種類似的接口的話，我們就不知道要怎麼叫區塊鏈上的智能合約跑起來啦！

![](https://steemitimages.com/DQmbiBkqdKam9qRxhdtk6Mp8QLHaYRtLqrZZvRjrpC3fxa7/image.png)

### 5. Application Business Logic Layer
第五層之後就完全不再是核心開發團隊的事了，而是大家利用區塊鏈來「實現商業價值」的地方，也就是大部份ICO的位置。現在市面上99%的ICO都是在現有的區塊鏈上面運行智能合約並發行自己的token，只有少部份ICO是在做其他層的突破並運行新的鏈。這也是我們常聽到的一個討論議題： Token與Cryptocurrency的差別，不過這不是今天的重點，所以就先不討論了。總之這整個第五層（和第六層）就是我們所稱的Dapp。

一個Dapp的後台內容可以分為鏈上合約以及鏈下程式部份，上圖的`App Business Logic`也因此被分為`on-chain`以及`off-chain`，其實簡單說`on-chain`部份就是一個新的ICO公司所寫的「智能合約」。這部份的程式被編譯後被放到區塊鏈上並且被公正公開的運作，所以稱為on-chain，通常也是現在大部分ICO的核心內容。至於off-chain的部份，以一家Dapp新創公司來說，就是像傳統系統服務一樣的的業務邏輯，設計在什麼情況下要trigger哪一個合約的函式。在合約部屬到區塊鏈上之後，這些呼叫合約函式的動作都要透過剛剛介紹的第四層中的`API`來完成，也因此在這中圖中，off-chain 被畫在 API Layer 之上。

### 6. Application UI Layer
在這張圖中的五六層就是一個完整的Dapp，而如果第五層是一個新的應用程式背後的合約與邏輯的話，第六層就是它的「包裝」囉！現在大多數都是利用網頁當作互動界面，當然也有做成桌面應用或是App的，例如我們常用的錢包們。

## 報告完畢，謝謝收看！
以上就是如何分層理解一個「區塊鏈應用」的方式，一個不知不覺就寫多了！不過，其實概念上並不難，希望大家看完之後會覺得有點幫助～如果有什麼問題或指教也歡迎留言告訴我們囉！下次再見！^^

- - -

This page is synchronized from the post: [DA-ChainTalk #2 — 區塊鏈應用的分層解析](https://steemit.com/@deanliu/da-chaintalk-2)
