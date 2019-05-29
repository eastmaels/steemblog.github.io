
---
title: "DA-ChainTalk #9 — 共識機制介紹：POS的前世今生"
permlink: da-chaintalk-9-pos
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-04 13:00:57
categories:
- da-chaintalk
tags:
- da-chaintalk
- pos
- blockchain
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmZF39mx6pt6DaKooaamibwPLDr23jg2UCMiC3b1syXwuE/poker-3024531_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位好，上次我與 @antonsteemit探討了：

[DA-ChainTalk #8 — 如何發行ERC-20的Token？](https://steemit.com/da-chaintalk/@deanliu/da-chaintalk-8-erc-20-token)

共識機制我們談過最古老的PoW，這次，進入另一個也已經應用廣泛的PoS！希望帶領各位進入PoS的新紀元！

此一系列以「DA-ChainTalk」的名稱開頭，您亦可從 #da-chaintalk來追蹤我們的文章。謝謝！

![poker-3024531_1280.jpg](https://cdn.steemitimages.com/DQmZF39mx6pt6DaKooaamibwPLDr23jg2UCMiC3b1syXwuE/poker-3024531_1280.jpg)
<sub> Image Source: https://pixabay.com/en </sub>

## 前言
繼上次[對PoW的介紹](https://steemit.com/da-chaintalk/@deanliu/da-chaintalk-7)之後，今天我們來談談另一個大家熟悉又陌生的詞彙：**Proof of Stake** (PoS)。PoS從2011年的PeerCoin開始，發展至今經歷許多改變，至今已經幾乎成了區塊鏈共識機制的唯一解，更衍生出了dPoS等等更有效率的新算法。所以，就讓我們一起來進一步了解PoS吧。

## PeerCoin 
PeerCoin是PoS共識機制的鼻祖，他們提出了PoS共識機制，以**鑄幣**(Minting)取代有較高「硬體限制」的挖礦(Mining)行為。在他們的設計中，一個使用者只需要在冷錢包裡存入PeerCoin，Unlock自己的錢包，就可以在自己的電腦上幾乎沒有壓力的進行Minting，收穫PeerCoin作為回報。這樣的機制鼓勵大家時不時就打開錢包賺點被動收入，達到真正的去中心化。

<sub>PeerCoin Logo</sub>
![](https://cdn.steemitimages.com/DQmX65nQAV8QaJJ68e8GfCjvYPexndNSV4tZKecJTJB8vHJ/image.png)

PoS的運作過程很簡單，跟PoW的運作過程幾乎相同，只是少了「競爭成為區塊產生者」的環節。在PoS中，每輪靠著「Staked Coin」的數量為比例，透過「**公平分享代替競爭**」的方式，隨機選出區塊產生者。其餘的過程就跟PoW一模一樣，產生之後要接上哪個鏈是自己的自由。實際的過程可以操考下列圖示：

1. 任何Coin Holder(有些會有點基本門檻要求或是要求抵押)都有資格成為Validator
2. Validators依照所持有的貨幣數量，獲得相對機率的權力廣播區塊
3. 被選中的Validator獲得Transaction fee作為獎賞

![](https://cdn.steemitimages.com/DQmQSAaDXJZCamYtZ5EdTsnqEfChU3dJFqYiFhrB4LzKvqf/image.png)
<sub> Image Source: https://lisk.io/academy/blockchain-basics/how-does-blockchain-work/proof-of-stake </sub>


在PeerCoin的實際運作過程中，一個錢包主人究竟多有機會產生區塊，決定於他的「**CoinAge**」，而CoinAge的就是**幣的數量**乘上**幣的年齡**，而所謂**幣的年齡**指的是上次交易到現在的時間，也就是你把這些幣放在錢包閒置越久、權重就越大。這個「CoinAge」是PeerCoin的設計，目的只是要讓大家被分配「權重」更加公平罷了。


使用PoS有許多的好處，除了對環境好、運算有效率、出塊速度快，他也可以很好的防治51%攻擊，因為原則上你需要有51%以上的貨幣才可以隨心所欲製造最長鏈。就算攻擊者成功搞壞一個PoS貨幣，他也將損失大量財產，因為他剛剛買下全網一半的貨幣。


## ETH Casper
相信許多人會聽過PoS是因為Ethereum偉大的「**PoW轉PoS計畫**」吧，ETH在轉換跑道到PoS這方面可以說是盡心盡力了，我們也可以比較一下他與最原始的PoS有何不同。

![](https://cdn.steemitimages.com/DQmQXcy3dC7fQswQtn864TvL27ZNo3gJcV7zJqiu1tULUUZ/image.png)
<sub> Image Source: https://blockonomi.com/ethereum-casper/ </sub>

首先，Casper中區快的產生以及驗證都如上面圖示一般，由一個叫做**Validator**的角色來負責，他們一樣按照Staked ETH比例選擇下一個區塊產生者，但這些Validator可不是所有人都可以當，也不是Have Nothing to Lose，Casper要求它的驗證者們全部抵押1000個以上的ETH，**如果你產生了不好的區塊，或是在分叉中「選擇含惡意交易區塊」等等不利網路的行為，就直接沒收你所有的ETH**。這樣的設計提高了加入PoS行列的成本，也可以有效解決PoS容易造成多分叉的問題 -- 「Nothing At Stake Problem」。

@antonsteemit以前寫過一篇關於Casper的文章：[Ethereum Casper - 以太坊PoS協議簡介](https://steemit.com/ethereum/@antonsteemit/ethereum-casper-pos)，如果對於「Nothing At Stake Problem」有興趣、想稍微深入一點理解的朋友可以參考。


## PoS變身：NEM - Proof of Importance?
介紹完PoS的大概，來說說他的變形。如果第一次搜尋NEM這個加密貨幣，一定會被這個潮到出水的共識機制: **Proof of Importance**給吸引。難道是什麼超級突破嗎？其實這可以看作PoS的一個變形：在POI的共識機制中，每一個地址會有一個「重要度」的分數（Importance，有點像Steem裡面的Reputation），重要度越高的人越有機會取得簽下個區塊的權力。**PoI一樣是透過「分享代替競爭」這樣的PoS核心思想**，只是在他們的重要度計算中，用更多元化的角度(例如交易頻率、交易對象分數)來評斷一個使用者的權重，而不是大部分倚靠**幣的數量**。當然，幣的數量當然還是十分重要的，因為NEM中也有規定要有一定的*Vest*才能啟動**Harvest**(也就是Mint啦)的程序。

https://i2.wp.com/smartereum.com/wp-content/uploads/2018/01/NEM-Price-Prediction-XEM-USD-Why-this-cryptocurrency-is-on-the-radar-of-investors-for-future.jpg?fit=810%2C422&ssl=1
<sub>Image Source: [https://smartereum.com/](https://smartereum.com/2525/nem-price-prediction-2018-2020-xem-usd-why-this-cryptocurrency-is-on-the-radar-of-investors-for-future-xem-price-today-tue-jul-03/) </sub>

## dPOS - 傳說升級
竟然在Steem之上寫文章，總不能不提最近因為EOS再次紅起的dPOS了。dPOS就是Delegated Proof of Stake的縮寫，簡單的理解就是把所有區塊生產的權力**全權交付給被選中的人們**，也就是STEEM上面偉大的21位Witness、EOS上偉大的21位Block Producer、Lisk中偉大的101位Delegates。想想看原本全世界這麼多PoW節點在挖礦、PoS中這麼多節點在當區塊生產候選人，光是處理大家資料互相同步的問題就已經很頭痛了，每個節點之間所帶來的「延遲」也成了區塊鏈整體效能很難跨越的一堵高牆。為此，BitShares透過人類發展出「民主」的思想，為區塊鏈世界帶來了dPOS。我們大家不再需要花費龐大的經歷成本參政，而是透過「投票」的方式選出有利社群的領頭羊。其中心思想還是PoS的(看票數決定)，只是讓候選人更加集中，更有效率的產生區塊。

dPOS最常被批評的就是所謂「中心化」的問題，畢竟21個人掌管了網路，要利誘他們癱瘓系統相對容易。但相信正如同STEEM上的大家有目共睹，這樣的機制並沒有帶來社群的崩壞，而這個世界「希望平台成功的好人」還真的比壞人多。

看看我們STEEM上21位Witness (From https://steemd.com/witnesses )，其中大家應該都認識幾位是平台上活躍的精神領袖吧！也不乏許多致力於應用開發的個人或團隊。dPOS在STEEM上的成功無疑帶給了大家更多信心，相信未來有更多平台都會轉而選擇類似的方式作為共識機制。

![](https://cdn.steemitimages.com/DQmNZvc6vReMB6VRxPoGXRZWVb6nNoizgfhcyyrpy9fF6dU/image.png)

## 結語
當然，我們都知道這條共識機制的道路是不會有盡頭的。這一路走來風雨不斷，究竟誰好誰壞誰能勝出都不好說，除了對dPoS的諸多質疑之外，就連ETH的Casper都被PeerCoin創辦人批評過度複雜化PoS過程，究竟五年後回頭看看哪些會是好的構想、哪些有所疏漏，又或著有哪些神一般的構想是我們今天都還沒有人能想到的呢？可能只有時間能夠告訴我們答案了。但可以肯定的是，這些共識機制的翻新、優化，必定會將區塊鏈帶向更新更好的境界吧！

******
#da-chaintalk

- - -

This page is synchronized from the post: [DA-ChainTalk #9 — 共識機制介紹：POS的前世今生](https://steemit.com/@deanliu/da-chaintalk-9-pos)
