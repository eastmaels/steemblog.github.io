
---
title: "DA-ChainTalk #10 — 區塊鏈上的手續費"
permlink: da-chaintalk-10
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-15 23:34:42
categories:
- da-chaintalk
tags:
- da-chaintalk
- transaction-fee
- bandwidth
- blockchain
- cn
thumbnail: https://cdn.steemitimages.com/DQmf8EkBHSRi9ypJDw5zMD9affUGqd1rfyra1cjx3L1wzSH/highway-370005_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位好，上次我與 @antonsteemit探討了：

[DA-ChainTalk #9 — 共識機制介紹：POS的前世今生](https://steemit.com/da-chaintalk/@deanliu/da-chaintalk-9-pos)

相信大家現在對於所謂共識機制都有了一些基本認識了吧！今天，我們談一個大家都一定會“有感”的議題：手續費。在不同系統中，手續費似乎都有所不同，甚至，有些系統例如Steem，根本就不收手續費？怎麼回事？為什麼可以不必付錢呢？請看今天的介紹吧！

此一系列以「DA-ChainTalk」的名稱開頭，您亦可從 #da-chaintalk來追蹤我們的文章。謝謝！

![highway-370005_1280.jpg](https://cdn.steemitimages.com/DQmf8EkBHSRi9ypJDw5zMD9affUGqd1rfyra1cjx3L1wzSH/highway-370005_1280.jpg)
<sub> Image Source: https://pixabay.com/en </sub>

## 前言
最近被問到這個問題：「為什麼比特幣跟ETH上交易需要手續費，而Steem跟EOS上面沒有手續費呢？」這是一個很有趣的問題，讓我重新釐清了一下自己對於「手續費」的思路。想要搞清楚這些觀念，我們可以一起從區塊鏈的發展源頭看起。

### 比特幣時代
在最一開始的比特幣設計中，交易者就需要付一筆手續費給礦工，請礦工幫忙打包交易，這也讓「支付手續費」似乎成為了區塊鏈的原罪。為什麼這樣設計呢？我們要回想一下中本聰設計比特幣時的中心思想：比特幣是個在**所有人都只在乎自身利益情況下，可以運作的支付系統**。在比特幣中，挖到下一個區塊的礦工除了會有**區塊獎勵**外，同時也可以收取所有交易的手續費，使得礦工們傾向於「乖乖打包交易」，而不是單純一直提交「空的區塊」。這樣的設計下，使得去中心化的各種匿名礦工仍願意收錄大家的每一筆交易。

![](https://cdn.steemitimages.com/DQmbEne8u5oQkjHmBB4twHTwepWPFB2XwrDqmhMhdzhuwuR/image.png)
<sub>Image Source: [Medium](https://medium.com/@ed_resende/why-are-bitcoin-transaction-fees-so-high-f6dea69e7db7)</sub>

### ETH時代
時間快轉來到以太坊時代，由於它承接了比特幣使用「POW」的共識機制，對於未知的區塊產生者，一樣只能使用「經濟利益動機」來加以控制。也就是說。唯有要求使用者支付手續費。能夠確保礦工願意打包交易。

在這同時，ETH對於「交易」也有了新的定義。ETH是一個旨在執行智能合約的平台，「Transaction」除了簡單的送錢之外，現在還包括了各種與Dapp互動的Function。執行這些函式都是需要花費運算資源的，因此ETH也設計出了GAS這樣「**使用者付費**」的概念，每次要呼叫一個智能合約時，都要支付一筆Gas費用，免得有人在區塊鏈上的程式中寫了一個無限迴圈，搞的礦工都當機。這個設計彷彿讓區塊鏈、智能合約與「使用者付費」這件事情幾乎劃上等號。直到POS系統出現之後，才有了新的改變。

![](https://cdn.steemitimages.com/DQmWdZnw35PwY3JbQk3jWcGVcvUgtAvYeYy1z78tRwa7wgH/image.png)
<sub>https://www.coindesk.com/7-cool-decentralized-apps-built-ethereum/</sub>

### POS 的好處
第一個POS的虛擬貨幣 PeerCoin 就大膽的改變了手續費的運作方式，不再把手續費當成獎勵分給礦工，而是直接毀掉。這讓我們看見POS的一個大好處：所有Block Producer都持有大量貨幣(Stake)，所以他們有強烈動機要維持網路運行順暢。如果他們遲遲不打包一筆交易，使用者生氣了，不用了，幣價一跌，那麼這些BlockProducer都會成為最大輸家。所以我們會發現絕大多數POS的區塊產生者，都只會拿到「產生區塊獎勵」，而不是手續費收入。

不過在區塊產生者不會拿到手續費的情況下，有些貨幣(如PeerCoin)仍然會要求支付少量手續費，這就是秉持了使用者付費的原則，同時避免有人透過大量交易故意癱瘓網路。

#### NEO
值得一提，收費方式有趣的系統還有NEO。在NEO上，單純的轉帳是不需要手續費的，但是如果要**呼叫智能合約**，在Function複雜度超過某一個程度之後就會要求支付**GAS**，稱為Smart Contract Fee。這樣的設計也是為了在提供方便性的同時，不忘透過手續費的方式限制惡意的智能合約呼叫來攻擊網路。

### Steem 的創新
看到這裡就發現Steem的厲害了。在Steem上，你應該這輩子還沒有付過誰交易手續費吧（有的話就是被騙了）。在Steem上，一個transaction可以是付款，也可以是`Upvote`或是`Comment`、`Follow`等等，這當然不能收手續費了（就像你上Facebook按讚要收錢的話成何體統！）於是Steem出於他們POS的本質想到了一個很好的方法限制大家合理使用網路：「頻寬限制（Bandwidth Limit）」。

![](https://cdn.steemitimages.com/DQmQGqC7nm39udDwLPhj9apkwzyFDkDxmtmf96h6XkCdX4T/image.png)

如果你有上過 https://steemd.com/ 觀察自己的帳號，應該多少會注意過像上面圖上兩條顯眼的圖示，下面綠色那一條所畫的就正是你的頻寬用量限制。在Steem的設計中，「**你的Steem Power越大、你有權使用更多運算資源。**」這個基本概念就是說，如果我擁有全世界1/5的Steem，那麼就可以使用所有Steem網路1/5的流量。由於`Steem Power`可以看作是「Staked Steem」，好比你定存在系統裡的Steem，所以是透過Steem Power來作為判斷依據。

在Steem上，並沒有所謂的智能合約，所有的交易都僅限於`Vote`、`Comment`等等，同時由於dPOS的共識機制給了Steem非常好的總運作效能，所以其實這些頻寬是很夠用的。就算你是一隻SP很低的小小魚，也不會遇到遭遇頻寬上限的問題。通常會因頻寬受到限制的，都是透過程式的方式大量`Follow`或是`Reblog`的流量（Spamming），所以一般人也不需要太擔心。


### EOS - 不用手續費的智能合約
大家都知道EOS就像是升級板的 Steem，也承襲了這種透過Staking加以限制流量的發明。不過EOS上想要運行的是大量的應用程式，於是EOS進一步規定，若是有人想要在EOS上發布應用程式，他同時需要Stake一定量的EOS，作為抵押換取頻寬、CPU資源以及RAM等等。

![](https://cdn.steemitimages.com/DQmUZS4eK9SFCiz7E6L6aa5ZjkviUXzAro4eVsVsXJcAL1L/image.png)

EOS用這種方式限制了一個Dapp的運算權力，免於惡意攻擊，同時相當於**免除使用者付費**！

在ETH世界中，Gas為許多人帶來不便，因為你無論何時都需要在錢包裡存有ETH用以支付手續費。同時這也讓人們使用智能合約的意願降低，畢竟要叫個程式還要花錢，儘管不多但總是會擋掉不少使用者。於是EOS把這一切轉嫁到了開發者的身上，開發者只需要「存入」夠多的EOS就可以確保大家開心、免費的使用你的應用程式，而當開發者有天想要領出這些錢時，也一塊都不會少，所以不會有人真的「付錢」給Block Producer。是不是很開心呢？

## 總結
突然發現，怎麼一篇文章寫到最後好像在推銷EOS呢？哈哈！不過希望大家看完這篇文章後，能夠理解整個區塊鏈與手續費之間的恩怨情仇。基本上，我認為趨勢一定是走向「免手續費」的，但為什麼能夠由有手續費轉為非手續費，確實是一個大家可以花時間來理解的過程。再為大家整理本篇重點如下，以後再被問到這種問題就能夠很有邏輯的回答了！

* 比特幣需要手續費，因為POW中只能透過「利益」確保礦工紀錄每筆交易。
* 以太坊中仍然有手續費，同時也是透過手續費在限制「Dapp」的行為。
* 轉變成為POS後，開始有別的動機讓區塊產生者「不拿手續費仍然乖乖工作」(他們領到Block Reward就好)
* POS中透過Staking機制限制流量、CPU資源等作法，確保沒有人能夠Spam網路，因此解決了ETH要求使用智能合約時「使用者付費」的問題。
* 現在Steem、EOS都沒有手續費，因為「區塊產生者仍會繼續乖乖工作」，而且「沒有人能夠透過大量或運算量大交易癱瘓網路」，所以就不需要手續費啦！

![](https://cdn.steemitimages.com/DQmYDbaGcE76H1pfVTBXLRCi9f8kU4v2Ch6SJoHpfQbhrKm/image.png)
<sub>Image Source: https://www.merchantmike.com/nofeemerchantaccounts/</sub>


******
#da-chaintalk

- - -

This page is synchronized from the post: [DA-ChainTalk #10 — 區塊鏈上的手續費](https://steemit.com/@deanliu/da-chaintalk-10)
