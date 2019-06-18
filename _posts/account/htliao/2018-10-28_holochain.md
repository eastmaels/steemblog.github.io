
---
title: 'Holochain相比區塊鏈更安全嗎？'
permlink: holochain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-28 16:17:09
categories:
- cn-cryptocurrency
tags:
- cn-cryptocurrency
- cn
- busy
- holochain
- hot
thumbnail: 'https://cdn.steemitimages.com/DQmW84P5h8QwjFP5hbJ2FKLcf5FJEmtj9a5UyCA95esLmX6/mr.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


各位Steemit上的朋友你們好，這是我和Mr Block的第二次合作，希望為大家帶來更多關於Holochain和不同區塊鏈技術的資訊，大家喜歡他的文章的話也可以用微信掃碼關注他的公眾號。

作者簡介：Mr Block 本為一名法律從業者，在2017年數字貨幣交易與價格急速上升，吸引了Mr Block注意。
慢慢由觀察者變為數字貨幣的投資人，對區塊鏈相關技術產生喜好，相信區塊鏈相關技術及數字化資產會為未來經濟及互聯網帶來新模式。
除了投資外，也積極在行業不同的社區中擔當不同的角色，致力推動行業發展和知識普及。
目前是Holochain的社區自願者，HoloPorts中國的認可銷售商。此外，也在行業中的投資機構擔任社區推廣工作。
Mr Block的文章主要是為不同的項目進行盡職調查，研究技術為主。希望能讓更多朋友了解項目背後的技術，行業面對的問題，由淺入深解讀項目相關應用及原理。


<center>![mr.jpg](https://cdn.steemitimages.com/DQmW84P5h8QwjFP5hbJ2FKLcf5FJEmtj9a5UyCA95esLmX6/mr.jpg)</center>
<center>Block is one thing that transcends time and space.</center>


<hr>

> 安全性是在區塊鏈的發展過程中需要高度重視的問題，使用者的資產安全和數據的準確性都是非常重要，需要獲得保障。目前關於安全性方面最常遇到的問題是雙重支付攻擊 (Double spending attack)。


雙重支付攻擊 (Double spending attack)是區塊鏈上的礦工試圖在該區塊鏈上用一等份的數字貨幣花費兩次。

<center>現實生活的例子</center>

我們在星巴克購買一杯價值20元的咖啡，以現金支付。 20元的現金存入星巴克的現金庫中。當你支付20元的賬單時，星巴克的服務員當場確認你的付款，並且你也很快收到了你點的咖啡。

<center>![1.jpg](https://cdn.steemitimages.com/DQmUWbdZZ3HDgDHvGFiqrLfu2GAdFjEtsqxURWnzLLJ3hGj/1.jpg)</center>


但數字貨幣不是實物現金。因此，數字貨幣交易可能會被覆制和重新播送到網絡。這可能導致數字貨幣持有人可以使用同一個BTC/ETH花費兩次。

就以星巴克作為例子，你支付了現金，此筆付款已經通過另外一個人的即時確認和驗證。可是數字貨幣，缺少了這種即時的驗證機制，任何人都有機會覆制數字貨幣並在其他地方付款。

<center>![2.jpg](https://cdn.steemitimages.com/DQmShFzPbdyw4DegjEy5KaXCGT9yEByR18HuSyFhwpvorBZ/2.jpg)</center>

當BTC持有者發送一筆交易後，它將被放進未經驗證的交易池中等待驗證。礦工們從該池中選擇需要被驗證的交易幫助建立交易區塊。為了把這個交易區塊加入區塊鏈上，礦工需要解決非常覆雜的數學問題。礦工會使用計算力找到這個解決方案。礦工的計算能力越強，他就越有可能比其他礦工更快找到解決方案。一旦礦工找到解決方案，他就會廣播給其他礦工，如果該區塊內的所有交易根據區塊鏈上的現有交易記錄是有效的，其他礦工就會接受它。即使是惡意的礦工也不能為其他人創建交易，因為他們需要BTC持有者的數字簽名才能這樣做（他們的私鑰）。因此，如果沒有的私鑰，就無法從其他人的帳戶發送BTC。

但是，惡意礦工可以嘗試撤消現有的交易。當礦工找到解決方案時，他們通常會將其廣播給所有其他的礦工，以便其他礦工可以驗證它，然後將區塊添加到區塊鏈中（礦工達成共識）。然而，惡意的礦工可以故意不將其區塊的解決方案廣播到其他網絡，創建另一個版本的區塊鏈。

![3.jpg](https://cdn.steemitimages.com/DQmdSmy9wsXQpNgmvap4qsgrkwS9ELKnuEZxBYTiAi7Ew1e/3.jpg)

當有兩個版本的區塊鏈，其中一個被正常的礦工跟隨，另一個被惡意的礦工跟隨。惡意的礦工正在扭曲版本的鏈上工作，不將其廣播到網絡上，與網絡的其他部分隔離。惡意的礦工現在可以把他所有的BTC花在真實版本的區塊鏈上。比方說，他現在用BTC購買了一輛跑車。在真實版本的區塊鏈上，他的BTC在購買跑車後已經用完了。可是他沒有將這些交易記錄在他隔離版本的區塊鏈中。在他的自己版本區塊鏈上，他仍然擁有那些BTC。

![4.jpg](https://cdn.steemitimages.com/DQmQvA9HnAxcg3iCs2pWwREnQvPuDeN9WzKhFmuBWdqENb4/4.jpg)

<hr>

<center>雙重支付攻擊的解決方法</center>


雙重支付攻擊Double spending attack常被稱為51％攻擊，因為惡意礦工需要擁有比其他網絡更高的哈希值(Hashing Power)，發動此攻擊需要51%的哈希值(Hashing Power)，以便更快將區塊添加到惡意礦工自己版本的區塊鏈中。然而，控制一個網絡50%以上的挖礦力(哈希值 Hashing Power)不是一件容易，需要有大量的礦工大規模組織同流合汙。

<center>擴容性與安全性的平衡</center>

一直以來，一些以高TPS (每秒處理交易次數)為主題的區塊鏈項目不斷推出 ，聲稱能夠快速傳輸交易及處理數據。但其中不少都犧牲了安全性而換取高吞吐量，達成共識所需要的節點數量大大減少，惡意的礦工只需控制更低的哈希值 (Hashing Power)發動攻擊。

> Holochain其非區塊鏈的性質，雙重支付攻擊 (Double spending attack) 並不太可能在其鏈上發生。

<center>Holochain 不是區塊鏈，那究竟是什麼?</center>

Holo使用另一種名為相互信用貨幣 (mutual credits currency)的體制，這是一種有資產支持的幣，在運作上跟區塊鏈有完全不同的邏輯。在裏面，沒有人可以憑空產出Holofuel，不能挖礦也沒有燃燒，必須要通過提供資源分享的服務來換取Holofuel。所有的交易都是以覆式記賬法被記錄，當一方的余額增加，另一方的余額減少，供應凈額永遠為0。所有交易都是平衡和相互抵消的。

<hr>

<center>數據或交易如何在Holochain上被認證 ?</center>
在Holochain上，每個負責接收交易記錄的節點都會根據應用程序上公開並預先定立的規則進行驗證，運用Gossip Protocol，將其傳播 (Gossips) 到其他節點(Peers)。如果規則被破壞，驗證者將拒絕驗證該筆交易。


<center>Gossip Protocol的原理</center>

Gossip Protocol利用一種隨機的方式將信息散播到整個網絡中。正如Gossip本身的含義一樣，Gossip協議的工作流程即類似於緋聞的傳播，就像在辦公室的同事喜歡間聊是非，當信息告訴某位同事，消息就會在辦公室裏傳開，在有限的時間內辦公室的的人都會知道該八卦的信息，這種方式也與病毒傳播類似。因此 Gossip也有“病毒感染算法”、“謠言傳播算法”之稱。

Gossip Protocol可分為Push-based和Pull-based兩種。
Push-based Gossip Protocol的具體工作流程如下
擁有狀態新信息的節點隨機選擇聯系節點並想起發送自己得到信息。
網絡中的某個節點隨機的選擇其他b個節點作為傳輸對象。
該節點向其選中的b個節點傳輸相應的信息
接收到信息的節點重覆完成相同的工作

Pull-based Gossip Protocol的協議過程剛好相反
發起信息交換的節點隨機選擇聯系節點並從對方獲取信息。
某個節點v隨機的選擇b個節點詢問有沒有最新的信息
收到請求的節點回覆節點v其最近未收到的信息
為了提高Gossip協議的性能，還有基於Push-Pull的混合協議，發起信息交換的節點向選擇的節點發送信息。

<hr>

<center>Gossip Protocol - Holochain </center>
Holochain沒有全球性的“準確性” 或 “共識”。相反，每個負責接收交易記錄的節點都會根據應用程序訂立的規則對其進行驗證，而你的交易方會成為第一個為你交易驗證的驗證人，並將其傳播(Gossips) 到其他節點(Peers)。如果規則被破壞，驗證者將拒絕驗證該筆交易。如果在節點上檢測到任何犯規的事，例如某個節點正在傳播或驗證錯誤數據，該節點會被封鎖並向其他人發送警告。 Holochain使用以問責制的系統通過其他節點(Peers)進行數據驗證，而不是全球性的共識系統。

<center>假設我們在Holochain上建立一個Happs - 分布式版本的Airbnb</center>

<center>![airbnb.jpg](https://cdn.steemitimages.com/DQmTqgsDWpADo79kz4NjqTiUn9sDkrHiotmFjSa4P2smU5t/airbnb.jpg)</center>
假若程序員在該應用程序寫下一條規則 “不能同時將你的公寓租給兩位客人”。當用戶同時將公寓租給兩位客人時，在DHT上接收該數據的節點會根據應用程序的規則進行驗證，假若，檢測到用戶的行為與規則有沖突，將會拒絕驗證。在Holochain的gossip protocol的設計下，其他節點 (gossiping peers) 幾乎可以即時檢測到沖突的出現。
作為Happs的用戶，使用者不需要信任Happs提供者，只需要同意Happs上預先建立的協議。 Happs提供者除了負責日常的維護的和程序安全之外，Happs提供者並不會像現在傳統的應用程序(例如:Facebook/Twitter) 托管你的數據，因為你的數據是由你個人和Happs上其他隨機的用戶存儲的。

<center>當節點離開網絡時，數據會發生什麼變化？</center>

當Happs的使用者關閉他們的設備，離開網絡時。 Happs上的DHT可確保網絡上有足夠的節點保存數據，以防止節點離開時數據丟失。此外，DHT上數據的冗余要素 (redundancy factor) 是可配置的，因此可以針對任何目的進行微調。例如，為成員較少的群組設計的聊天應用程序可能會將冗余要素(redundancy factor) 設置為100％以防止長時間加載，相反具有數千個用戶的應用程序可能具有非常小的冗余要素(redundancy factor)。

Holochain在有關安全性方面的設計有效保障了使用者在Holochain上資產的安全和Holo網絡上數據的準確性。在維持高效率交易及數據傳輸的同時沒有在安全性的問題上妥協。


<center> 關於Holo的資訊或更新，我將會定期發布在公眾號和大家分享，喜歡的朋友請關註訂閱。</center>

<center>![news.jpg](https://cdn.steemitimages.com/DQmNXdrMfeXaNhXXwLp9BibEghuBWzD5EsHYMQ4GhhxLuHt/news.jpg)</center>

- - -

This page is synchronized from the post: ['Holochain相比區塊鏈更安全嗎？'](https://steemit.com/@htliao/holochain)
