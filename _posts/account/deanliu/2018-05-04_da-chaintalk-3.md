
---
title: 'DA-ChainTalk #3 — 智能合約之前世今生'
permlink: da-chaintalk-3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-04 03:24:39
categories:
- da-chaintalk
tags:
- da-chaintalk
- blockchain
- cn-programming
- dapp
- cn
thumbnail: 'https://steemitimages.com/DQmPACz2EHrzRFo6hguBVa63YC49YLSkYYQqysKeNeGvtuo/danbo-2495978_1280.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位好，上次我與 @antonsteemit探討了區塊鏈應用的層次架構：

[DA-ChainTalk #2 — 區塊鏈應用的分層解析](https://steemit.com/da-chaintalk/@deanliu/da-chaintalk-2)

今日我們將談談另一個大家耳熟能詳，但是卻不一定清楚其內涵的一個名詞：**智能合約（smart contracts）**。智能合約真的多有智慧嗎？以太坊是怎麼崛起的？今天這一篇文章，都可以給你一點，基礎但紮實的訊息喔！<del>去騙錢再也不會心虛了！^_^</del>

此一系列以「DA-ChainTalk」的名稱開頭，您亦可從 #da-chaintalk來追蹤我們的文章。謝謝！

![danbo-2495978_1280.jpg](https://steemitimages.com/DQmPACz2EHrzRFo6hguBVa63YC49YLSkYYQqysKeNeGvtuo/danbo-2495978_1280.jpg)
<sub> Image Source: pixabay</sub>

# 智能合約之前世今生

## 前言
今天我們來聊聊什麼是智能合約(Smart Contracts)。

大家在這圈內久了，沒聽說過**智能合約**這幾個字幾乎是不可能的。但如果你完全不懂程式，去搜尋什麼是智能合約的話，常常搞的一頭霧水：**部署在區塊鏈上的程式**、**可以與其他的合約互動做出決策**，盡是一些聽起來很厲害的敘述。也有些人聽到Smart這個字，就把整個東西跟機器學習、AI聯想在一起了。究竟智能合約是什麼，又為什麼會跟區塊鏈扯上邊，就是我們今天想要討論的主題。

如果你也是個對於智能合約概念不太了解的人，那麼希望看完這篇文章之後你會有豁然開朗的感覺。但是先警告大家，在了解智能合約之後，你應該就不會覺得他很「智能」了，沒關係，聰明的永遠是你喔！XD

![](https://steemitimages.com/DQmZZM7Sm6k1P9DPgqY7gmFC4srmQUEeSQGA5Q5nCrxPfiF/image.png)
<sub> Image Source: https://www.openxcell.com/smart-contracts-development</sub>

## 智能合約的源起

首先，非常重要的一點是，**智能合約並不是一個新的想法**。它是在1996年由電腦科學家[Nick Szabo](https://en.wikipedia.org/wiki/Nick_Szabo)提出的電腦協議。當時正是一個網路蓬勃發展的年代，而Nick Szabo第一次關於智能合約的發表，就是想要將它用在電子商務上。他心目中的「智能合約」就像是網路上電子合約的進化版，除了像傳統合約兩人簽名後使其有效之外，它也能確保某些合約內容被實踐。

#### Why "Smart"?

> I call these new contracts "smart", because they are far more functional than their inanimate paper-based ancestors. No use of artificial intelligence is implied.


為什麼稱為「智能」合約？Nick Szabo自己說，因為這些電子合約比以前紙筆簽的合約要聰明，它自己本身就能夠透過事先寫的協議等等來確保內容被執行。他還有特別提到，這跟AI沒有關係。也就是說，這個智能合約，其實就只是因為**比紙筆合約聰明，所以叫做Smart Contract**。

![](https://steemitimages.com/DQmebRJap3xUvmsBNapMqb528wxhvYPiDzbeH8gYdm6oTEA/image.png)
<sub> Image Source: http://ggllaw.net/areas-of-practice/ </sub>

## 智能合約的本質
好了，現在我們搞清楚智能合約的由來了，我們來看看今天的智能合約是什麼樣的面貌。
就如同Nick Szabo在二十年前提出的想法，智能合約的宗旨在於創造一個「可信任、獨立運作」的機器；它接受所有使用者的指示，並且執行一個大家所同意的合約內容。

一個被廣為利用也最容易理解的比喻，就是「自動販賣機」。我們可以把智能合約想像成一台自動販賣機，每當我們想要買飲料時，我們來到一台販賣機面前，投錢、選飲料，然後機器就吐一瓶飲料給我們。啊，爽！

![](https://steemitimages.com/DQmRLCwWPH3WnCfBJjGUhyrb6BPaqggtrLrabMvgxWfvhpp/image.png)
<sub> [Image Source](https://www.reddit.com/r/spongebob/comments/6l3796/why_does_mr_krabs_have_a_vending_machine_to_begin)</sub>

一台販賣機上除了買飲料外，也可以有其他的動作，例如退錢、補貨、老闆領錢之類的。還有，自動販賣機並不是一個永遠在進行中的程式，只有在有人「Trigger」它的時候才會做出對應的動作。這就跟智能合約一樣，它並不是一個一直在執行的程式，而是一個「**隨時能被喚醒並運作的機器**」。這台機器的合約內容被大家所信任，並且被放在一個**穩定**且**公開**的地方，所有人都可以去存取。

自動販賣機的比喻讓我們更容易的理解智能合約的概念，但為什麼我們不把自動販賣機稱為智能合約呢？這是因為販賣機這樣的機器，是存在弱點的。

## 真正智能合約之要件
一個「智能合約」要符合所有的定義，必須要確保他擁有「**穩定運作**」、「**公開透明**」這兩個重要的條件。

首先先講關於「**穩定運作**」這一點，其中又可以分為兩個面向。
第一個是***機器本身的穩定***，也就是合約本身的穩定性。一台販賣機本身有「硬體不穩定性」的問題，搞不好某一陣子天氣變化多端忽冷忽熱，或是品質製造太差，導致機器裡某些零件無預期地壞掉，從此無法退幣，所以他不符合要成為偉大的「智能合約」的條件。

再者，對於***機器執行環境的穩定***。假如今天在百貨公司裡有一台的販賣機，在你投錢之後突然整個百貨公司停電了，那麼你的飲料當然也就吐不出來了。或著如果這個百貨公司充斥著流氓，在你拿出飲料之後會拿刀把你的飲料搶走，那麼這整個想法也件變成不可行的。這就是為什麼「存在於一個穩定而且公平的執行環境」是非常重要的條件。

再來是關於「**公開透明**」。
公開透明是為了讓合約可以被大眾檢驗，也是被大家信任的基礎。就好像一般合約內容公開透明我們才願意簽字一樣，假如看不到內容，我們該如何信任一個合約呢？

我們對於自動販賣機的信任並不來自於它的公開透明，而是來自它我們的經驗認知，加上它被廣大用戶給測試過，也沒有人貼上「騙子」的便條紙，所以我們相信在投錢進去後，它會乖乖掉出我們要飲料零嘴。所以嚴格來說，這樣的信任並不是真的信任，就好像今天有一台販賣機告訴你，你投一百萬進去，他會吐給你兩百萬，我想大家都是不會相信的。

這兩個條件都是現實生活中非常非常難完成的，以執行一個程式而言，對於公開透明，我們還可以透過開源等方式來讓大家驗證，但是關於「穩定及公平的環境」這一點，幾乎是難以達到的。即使我們把程式放在全球最穩定的亞馬遜雲端平台上，它也不是「公平」的：因為亞馬遜是一家公司，是中心化的，我們使用亞馬遜當作合約運行平台，就代表著我們「信任」這個第三方平台，而這違背了智能合約的宗旨：我們不用透過任何對第三方的信任，就可以確保執行這個合約。

這些種種困難，讓「智能合約」這個詞雖然問世已久，卻遲遲不能得到實踐，直到中本聰2008年的比特幣論文之後，才讓大家眼睛一亮。

## 區塊鏈成為智能合約興起的舞台
看到這裡大家應該心裡有數了。區塊鏈的出現提供了一個「去中心化」的系統當底層，如果我們把它看成一個運作程式的平台，那麼他幾乎擁有所有的必要條件：**公開、透明、去中心化**，如果我們在上面放了一台販賣機，除了大家都可以檢視它的構造（程式碼）之外，全世界的電腦都在利用自己的算力確保平台穩定，因此我們幾乎可以確定它可以永遠運作並且不會突然中止或被人操縱。

這根本是個完美的舞台呀！因此，當Vitalik Buterin將比特幣的運作基礎稍加以改變之後，於是就以「運行智能合約」為目的創造了以太坊(Ethereum)這一個宏偉的體系！如果想要了解更多以太坊做的改變，可以參考我們系列之前的文章：[State，從宏觀到微觀：以太坊如何將智能合約帶入區塊鏈世界](https://steemit.com/da-chaintalk/@deanliu/state)。是不是非常地戲劇化呢？

![](https://steemitimages.com/DQmXEHau5L3Tq1vxcvD4P55ZsVTYzhZycYJBRiGoD5MX6V6/image.png)
<sub> Image Source: https://unhashed.com/cryptocurrency-coin-guides/ethereum/</sub>

## 小結
這大概就是智能合約的前世今生了，不知道大家看完有何感想或指教呢？歡迎分享或提出喔！
雖然說Smart Contract聽起來十分酷炫，但實際上只是發想於簡單合約的進化而已。我認為真正的核心在於「實踐的環境」這一點，而配合了**區塊鏈**的出現，這樣的概念不但得以實現，也大大提昇區塊鏈的價值，讓區塊鏈不再只是金錢交易系統，而是能讓我們對未來世界有更多想像的新技術。有時候，創造歷史，就只是那麼一點點想法的改變！

*****
#da-chaintalk

- - -

This page is synchronized from the post: ['DA-ChainTalk #3 — 智能合約之前世今生'](https://steemit.com/@deanliu/da-chaintalk-3)
