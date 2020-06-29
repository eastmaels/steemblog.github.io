
---
title: 'DA-ChainTalk #8 — 如何發行ERC-20的Token？'
permlink: da-chaintalk-8-erc-20-token
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-20 11:54:00
categories:
- da-chaintalk
tags:
- da-chaintalk
- ethereum
- erc-20
- ico
- cn
thumbnail: 'https://cdn.steemitimages.com/DQmeTYeF9n8uegEr1QvZ2MPLxo5BF3RajEkNqAi785oDwNa/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位好，上次我與 @antonsteemit探討了：

[DA-ChainTalk #7 — 挖礦，交易的確認與共識的形成。](https://steemit.com/da-chaintalk/@deanliu/da-chaintalk-7)

這次，我們想滿足一下大家發幣的夢想，或至少知道發幣(ERC-20 Tokens)其實是怎麼一回事，當然啦，ICO遠比發幣這個技術活要宏大得多，但發幣畢竟是這一切的基礎喔！

此一系列以「DA-ChainTalk」的名稱開頭，您亦可從 #da-chaintalk來追蹤我們的文章。謝謝！

![](https://cdn.steemitimages.com/DQmeTYeF9n8uegEr1QvZ2MPLxo5BF3RajEkNqAi785oDwNa/image.png)
<sub> Image Source: https://pixabay.com/en </sub>

#### 首先，給想發行ICO卻覺得很困難的你
相信在關注幣圈的大家，看到這麼多ICO囂張跋扈，動不動就募資個幾千枚ETH，一定也想過：「不如，我也來發個token吧！」如果你也動過這個念頭，我們今天就來實現你的夢想：一起來看看這些**Token**究竟是什麼，以及，在Ethereum區塊鏈上面發行自己的Token是多麼簡單的一件事！

如果你不知道**Token**跟**Coin**的差別，建議可以先看看 @antonsteemit之前的文章：[Coin vs Token - 幣與代幣](https://steemit.com/cn/@antonsteemit/coin-vs-token)，因為我們今天要介紹的是ETH上面的代幣，不是運行一條新的區塊鏈（這太複雜了一點都不容易阿～）。

## 什麼是Token
每當我們參與ICO，用寶貴的ETH寄到某一個地址，換取回Token時，總覺得無比興奮，因為錢包裡又多了一種新玩意兒。其實錢包的設計讓我們有種錯覺，好像錢包裡真的多了幾枚硬幣。但實際上如果我們看細一點，Token只是一個存在某個合約地址裡的變數罷了。一個包含代幣的合約，通常會使用一個變數紀錄每個使用者所剩下的代幣餘額，而這些合約往往也會要求你在執行動作時，支付這些代幣當作價錢的標準單位。

可以這樣想像：**每一個智能合約就像一家銀行，每家銀行開業時都會自己發行一個貨幣，並由銀行負責紀錄所有人的轉帳以及餘額管理**。例如我今天開了一家銀行並發行了A幣，並聲稱A幣總共有一百萬枚。在開張時，所有100萬枚幣都會被紀錄在我自己的名下，但我也開放大家拿美金(就像ETH)來跟我購買：當我收到你給我一塊美金，我將一枚A幣紀錄到你的名下。而當你擁有了A幣之後，你就可以拿這些A幣來跟別人交易了：例如，你要付100個A幣給你的朋友，那麼你只要把這件事告訴銀行，銀行就會幫你在你的銀行戶頭「扣款」，並在你的朋友戶頭「收款」。

不過如果只是這樣的話，我們就有點小看智能合約了。我之所以買一家銀行的代幣，總不會只是為了拿來付錢吧。這就是各家銀行（各個智能合約）各顯神通吸引客人的時候了。每家銀行總是會提出一些特別的功能，但必須要透過這些Token來付款或是交易。例如：可以用`A coin`來跟A銀行裡的其他人玩德州撲克、或是用一個`B coin`來B銀行裡面參加拍賣。由於Token數量有限，因此越多人想要，價格當然也就越高了。但要記得的是，他們都只是存在銀行裡的變數而已。

# ERC20 Token Standard

![](https://cdn.steemitimages.com/DQmPJAoKwWbTKbbrpiodtvDqaSy9zn6XMbZSGfVLD6cLvfv/image.png)
<sub> Image Source: http://cryptoczars.com/top-5-ethereum-erc20-token-projects/</sub>


為什麼要一直強調這些Token是「存在智能合約裡的變數」呢？因為這些Token只有在發行的合約裡面有用處，而不能被拿到別的地方使用。換句話說，所有關於這個Token的交易，都是由同一個智能合約掌管的。就像我今天雖然可以把A coin輕易付給朋友Bob，但我並不能從錢包拿出三個硬幣直接給他，而是必須告訴這個A銀行的合約：「`Transfer 3 Acoin to Bob`」，而由銀行的合約代為完成。

**我們也可以說，代幣的本體是一個智能合約。**

相信大家多多少少都聽過ERC20這個詞，其實雖然看似複雜，但其實只是ETH上的一個規定：**如果一個合約地址，可以完成轉帳(Transfer)、餘額查詢(balanceOf)等呼叫的話，我們就稱它所掌管的Token符合ERC20 Token Standard。**

為什麼要統一這個規章呢？原因也很簡單，這樣就能夠用一個統一的界面幫忙大家呼叫代幣數量、餘額、轉帳等等功能。

如果一個合約地址符合這個規範，在我們對這個地址呼叫 `name()`的時候，它就會乖乖回傳Token的名字；當我們呼叫`balanceOf (address)`的時候，它就會回傳address 的餘額；當我們呼叫`transfer(address_to, 1000)`的時候，就會將我們戶頭下1000個Token轉帳給`address_to`。關於ERC20的更細節規範，可以參考[這個連結](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)，裡面一共定義了9個合約應該配合的函式。

在這裡我們並不打算涵蓋程式的細節(除非想要發幣的朋友眾多xD)，但真的有興趣的朋友可以參考這篇文章:[How To Create Your Own Ethereum Token In An Hour](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)。裡面有寫好的程式碼，只要複製貼上換成自己想要的代幣名稱、自己決定一下發行數量、再把合約Deploy到Ethereum上，就算是「發幣成功」了。

>整理簡易步驟如下：
>1. 安裝metamask，並創立地址。如果只是想要佈到Testnet(Ropsten Testnet)上的話，可以到這個[水龍頭網址](https://faucet.bitfwd.xyz/)填寫自己的eth地址獲得免費的Ropsten ETH。（也要記得在MetaMask上方點選Mainnet切換到Ropsten）
>2. 到這個[網址](https://github.com/bitfwdcommunity/Issue-your-own-ERC20-token/blob/master/contracts/erc20_tutorial.sol)，複製裡面的程式碼（就是合約了）。
>3. 到[Remix](http://remix.ethereum.org/)這個網頁ETH編譯器中，貼上剛剛的程式碼。貼上之後還要做一些更動
>4. 點選右邊欄位的`Start Compile`。編譯完成後切換到`Run`欄位，如果Metamask運行正確，應該會在這裡抓到你的地址，接著點選Token Name下方的`Deploy`。
>5. 接著Metamask會跳出警告視窗，點選submit。之後就可以在Metamask裡面看到一筆交易，點選可以進入etherscan觀察細節。
>6. 圖中最下面一行的Token Address就是你的Token地址，可以去裡面觀察你偉大的Token所有交易紀錄。
>![](https://cdn.steemitimages.com/DQmVBEWjTUsMAdYhV4evP2sTY8E7iKEkejqsSJQ9gDG6Ei4/image.png)
>7. 接著只要複製這個Token Address，到Metamask終點選Token欄位，填好名稱並貼上地址，就可以看到自己超級無敵多的Token Balance了。不過 Metamask目前還不能Send Token，想要送Token給別人的話就要進到[Myetherwallet](https://www.myetherwallet.com/)才行呦~


## 合約地址
在這裡小小補充一下：每一個合約部署成功之後，都會擁有於Ethereum上的一個`Contract Address`。當我們要呼叫不同合約的函式運作時，要用其指名是在呼叫「哪一個合約」。幾乎所有ICO都會有『How to Import OO-Token into your ETH Wallet？』之類的教學文章，道理很簡單：其實所有的ETH錢包都支援顯示或是轉帳ERC-20 Token，你只要告訴錢包新的Token的Address，它就能呼叫這個合約`balanceOf()`來得到你錢包的餘額；或是幫你呼叫`transfer()`函式來轉此代幣給別人。所以，要在myetherwallet或是其他ETH錢包中交易自己的代幣，只要把你的代幣**合約地址**告訴ETH錢包就沒問題了。

## 所以，說好的ICO呢...?
![](https://cdn.steemitimages.com/DQmT65evHvxRuFDiiBTrDsUiRRo1H1hReah8kU8VKvCgz1G/image.png)
<sub> Image Source: https://edgylabs.com/startups-are-looking-ico-not-ipo </sub>

當然啦，到這裡都只是講了如何製造符合「ERC20規定」的Token而已，你的合約當中如果只有這幾種功能的話，百分之百是沒有人會想玩的。智能合約的價值在於各位的想像，要用這些Token做什麼事情、支援哪些服務、功能，或是讓不同使用者互動，就是各個ICO各憑本事的地方了。

這篇文章只是要告訴各位，這些Token的本質都只是智能合約中的一小部份，而要發一個自己的ERC20代幣(或是在NEO上面稱作NEP5代幣)都是很簡單的，所以，下次再動了發幣的念頭時，不如就發個自己Steemit ID的同名貨幣來娛樂一下自己吧！

*****
#da-chaintalk

- - -

This page is synchronized from the post: ['DA-ChainTalk #8 — 如何發行ERC-20的Token？'](https://steemit.com/@deanliu/da-chaintalk-8-erc-20-token)
