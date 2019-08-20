
---
title: '[EpicDice] 為什麼EpicDice的獎金池常常是滿的？'
permlink: 23admy-epicdice-epicdice
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-19 15:34:27
categories:
- sct
tags:
- sct
- epicdice
- cn
- jjm
- busy
thumbnail: 'https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmbzs8Wbbm1WE5qwHTwd4iRqBwicQCdf5ETZtrAkozDRC4/Artboard%205@20x.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmbzs8Wbbm1WE5qwHTwd4iRqBwicQCdf5ETZtrAkozDRC4/Artboard%205@20x.png)

不不不，今天不談賭。談數學。

題目是：為什麼EpicDice的獎金池最近常常是滿的？（獎金池注入後上限是300 STEEM，現在常常是滿的，或是接近滿的）

![螢幕快照 2019-08-19 下午11.02.57.png](https://cdn.steemitimages.com/DQmbYpwTrdQTqtLG8KDj5jV4z1xtG7r1T4V89w1TUFWNEfB/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-19%20%E4%B8%8B%E5%8D%8811.02.57.png)

先說一下，獎金池是用EPC token來下注時所可以獲得的STEEM即時數量總額。

也就是說，這是賭EPC時用的，跟平常下注用STEEM沒有關係。

下注EPC的規則是：贏的時候，按照內部價格（目前是100k EPC = 1.117 STEEM）來賠，並且扣除5%的EPC。輸的話，很簡單，下注的EPC都燒毀啦！

#### 那麼到底為什麼獎金池常常是滿的呢？

*****

讓我們用一個例子來試算：下注1,000,000EPC，賭高於50，因此機率是一半一半。

* 如果贏：下注金額相當於111.7 STEEM，賠1.96倍，所以是 111.7*1.96 = 218.932 STEEM，但是損失 50,000 EPC
* 如果輸：1,000,000EPC，ByeBye!!

目前，50,000 EPC市價相當於是 8 STEEM

因此，期望值是：( 218.932 - 8 ) * 50% = **105.466 STEEM**

1,000,000EPC按照市價換成160 STEEM，賭局期望值只有約105.5，不太有吸引力。

不過，原本賭博就必然是負的期望值，我們這裡要檢驗的是用不用EPC來賭。

所以，要對照1,000,000EPC按照市價換成16 STEEM來賭會如何？

* 如果贏：下注金額160 STEEM，賠1.96倍，所以是 160*1.96 = 313.6 STEEM
* 如果輸：160 STEEM，ByeBye!!

期望值等於：313.6 STEEM * 0.5 = 156.8 STEEM！！明顯高多了！

所以，自然，沒有人會想用EPC去賭囉～～～

這裡頭的重點就是：EPC市價高了，代價上升，自然就不划算了～～～

******
噢，對了！EpicDice剛剛完成EPC之前承諾的空投，總共發出1.5m的EPC，價值150 STEEM喔！

https://steemit.com/dice/@epicdice/airdrop-of-1-5m-of-epc-worth-at-least-150-steem-is-completed

如果錯過，下次一定還有機會的！

- - -

This page is synchronized from the post: ['[EpicDice] 為什麼EpicDice的獎金池常常是滿的？'](https://steemit.com/@deanliu/23admy-epicdice-epicdice)
