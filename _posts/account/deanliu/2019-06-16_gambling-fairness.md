
---
title: '簡談線上隨機亂數與Gambling Fairness'
permlink: gambling-fairness
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-16 02:59:48
categories:
- cn
tags:
- cn
- sct
- palnet
- epicdice
thumbnail: 'https://cdn.steemitimages.com/DQmfCinzjopQ66yEwwjY5ogbBkKnkLa9SahDLHjPuRgZfTo/roll-the-dice-1502706_640.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![roll-the-dice-1502706_640.jpg](https://cdn.steemitimages.com/DQmfCinzjopQ66yEwwjY5ogbBkKnkLa9SahDLHjPuRgZfTo/roll-the-dice-1502706_640.jpg)
_pixabay_

區塊鏈線上賭博，常常強調Provable Fairness，是想對玩家保證賭博的公平性。畢竟，沒有這件事，就沒有公平賭局，就沒有一切。

我因為持有EPC Tokens，所以對[EpicDice](https://epicdice.io/?ref=deanliu)比較熟悉。就以他們為例子來試著說明。先簡單說一下EpicDice的賭局數字產生機制：你按下ROLL按鍵投注時，就會在區塊鏈上產生一筆轉帳，把你賭金傳給莊家，這一筆交易會產生一個txid，莊家會把這個txid用網頁上那段代碼，轉換成1-100的數字，再跟你設定的條件比對(Below/Above某數字)，因此決定輸贏。

網頁上可以輕易找到Fairness這個頁面：

![螢幕快照 2019-06-16 上午10.11.53.png](https://cdn.steemitimages.com/DQmaE4vkPdraRknSozRwxbd7bVynxdALxqh9dQjGX3qK1Tm/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202019-06-16%20%E4%B8%8A%E5%8D%8810.11.53.png)

那麼，到底什麼是Provable Fairness呢？首先說Provable，這很簡單，就是說任何人（其實主要是玩家）都可以驗證每一個賭局的結果產生的“正確性“，是可以事後檢驗跟重複的。這只是第一步，畢竟，如果你的賭局每次都”可被驗證“地設計成坑玩家的機制，那還是Provable啊！在區塊鏈上，Provable這件事變成很容易，畢竟，如果有一中心化的莊家就算說我開放我的程式碼給你看，你也沒辦法確認這就是當初執行的代碼啊！這跟智能合約能夠出現的邏輯是一樣的。

那麼，上面的頁面就有代碼公開，你沒學過程式，也可以複製貼上，從區塊鏈上找你自己那一筆txid，填上之後，去驗證結果是否跟莊家宣稱的一樣。至於，莊家是否真的實際上用這一段代碼，那是無所謂的，因為重點是你用的這一段代碼，確實與其結果一致。

所以，Fairness就是接下來的重點：Fairness。這裡有兩層意義，第一，給訂設定好的規則跟代碼，你跟莊家是否都無法改變結果？你當然不行，在此例，莊家，同樣不行。重點在於區塊鏈上的東西，是莊家跟你都無法更動，只能被動取得的。區塊鏈以外的處理程序，已經公開，你也可以去驗證。所以，至少，你跟莊家之間是平等的。

另一個人們會關切的Fairness，跟賭局有關的，就是是否足夠隨機（randomess）。只要賭局發生的機率是純隨機過程，那麼1-100出線機率就會是均等的1%。這賭局的隨機性夠嗎？這問題就不好回答了。你可以用實測方式來觀察看看，我因為沒這能力所以沒辦法做，但概念上很簡單：持續取得區塊鏈上每一筆txid，transaction id，格式大概是這樣 3d2f91379fec271ee9137e4479c0cbf02117c74b，然後每一筆都按照上面方法轉換成1-100，持續統計，拉長時間，看看是否機率趨近於均等，就算是一種實驗觀測。

我採用另一個方式來分析。txid，在區塊鏈上產生的方式是什麼？txid，又稱為transaction hash，應該就是把交易內容的超長數字串，利用Hash function，轉換成固定長度的數字串如上。因此，Hash function的哈希輸出，是否有足夠的隨機性，成為重點。這一點特性，其實對於區塊鏈的運作並不重要（重要的是哈希碰撞不發生），所以不容易找到文章分析。只怕我找到了可能也看不懂吧？^_^.... 所以，這部分我就不知道了，如果有人去做第一種方式實測，也算是可以驗證看看。

當然，Fairness是否一定要包括(pure) Randomness？這是可以探討的問題。我個人認為，只要Randomness有到達一定程度，就可以了。Fairness主要的體現，應該在於莊家跟你對於規則都是平等的這件事上面。舉個極端例子說，如果這個Hash方式，透過這個代碼，會讓數字60-80出現機率特別高，那麼，其實莊家也得接受這事實，結果可能會是，厲害玩家們開始大量投注Above 60這個事件，造成莊家預期利潤下降，他們或許得考慮調整抽成或是吸收起來，但無論如何，這對於雙方都是平等的。

這或許是大家沒有Claim隨機性，而是宣稱Fairness了吧？

當然，在我看起來，Hash真的是很隨機啦～～～ XD

- - -

This page is synchronized from the post: ['簡談線上隨機亂數與Gambling Fairness'](https://steemit.com/@deanliu/gambling-fairness)
