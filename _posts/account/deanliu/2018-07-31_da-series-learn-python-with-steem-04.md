
---
title: "[DA series - Learn Python with Steem #04] 迴圈"
permlink: da-series-learn-python-with-steem-04
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-31 02:21:06
categories:
- da-learnpythonwithsteem
tags:
- da-learnpythonwithsteem
- python
- steem
- cn-programming
- cn
thumbnail: https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[[DA series - Learn Python with Steem]](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-00-coding) 是DA（@deanliu & @antonsteemit）關於「從Python程式語言實做Steem區塊鏈的入門」的系列，歡迎趕緊入列學習！

前情提要：[[DA series - Learn Python with Steem #03] 邏輯判斷](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-03)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#04堂課，今天我們來學習另一個也是非常重要的主題：**迴圈** 。

## Python的迴圈 (Loop)
前一期說完了if-else判斷式，這一期來看看另一個重要的元素：迴圈。
迴圈簡單的說，就是讓電腦「重複執行某一動作」的語法。原因很簡單，我們使用電腦程式就是為了解決繁瑣的工作內容，而這種重複性很高的動作，我們可以透過迴圈的設定讓我們一個程式就執行完所有內容。舉個簡單的例子，若是我們未來要觀察區塊鏈上的內容，可以透過迴圈的方式不斷搜尋不同的block，不斷的回去翻找歷史直到第一個區塊為止。

迴圈又可以分為**While迴圈**跟**For迴圈**，其中只是是語法跟使用情境稍有不同，大部分的概念是一樣的。我們先來介紹While迴圈。

### While Loop
`While`迴圈的使用情境是「面對我們不知道何時會中止的程式時」。可以用以下一個簡單的例子讓大家稍微看一下這個邏輯：

註：本篇教學的程式碼可以到[GitHub](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_4.py)觀看。

![](https://cdn.steemitimages.com/DQmSgwvcDv7gcBkE8v3cwgv1xbf6iX2Ux6uzApt1Zgc6HVi/image.png)

執行結果：
```
Stop!
2097152
```

While的執行邏輯是：每次執行while的範圍內的程式前，會先確認`while`後面的expression是否為True。如果是True的話就會執行內容，反之則跳過迴圈。這裡我們先使用一個布林變數`continue_to_loop = True`來當作「要不要繼續迴圈的指標」，稍後我們只要改變這個變數，迴圈就會中止。

跟`if-else`相同的是，被包含在`while`迴圈裡面要做的事情，我們一樣要使用縮排一層一層的包好，免得讓系統誤會。這裡我們一開始令 n = 1，在每次迴圈裡都把他乘以二，並且判斷這個新的n有沒有大於1312300。如果有的話，我們就把**`continue_to_loop`這個變數設為False**，藉此中止程式。

所以等程式不知道經過多少次迴圈後，2的某個次方數變成2097152，也就大於一開始設定的`m`了，迴圈因此中止，並且最後印出`n`:這時已經是 2097152。

這種先設計一個**布林變數**來看要不要停止迴圈的手法，通常這個變數會被稱為`flag`，因為它的True or False決定了迴圈的命運。這種手法在很多情況下很好用，也會讓程式的運作邏輯很淺顯易懂。不過其實我們這一個例題是不需要用到Flag的，如果只是單純的數字比較的話，我們可以做一些簡化：

![](https://cdn.steemitimages.com/DQmYdWaiDnkv9DqoCHmFh423WwuqkuzywBzXmmLzKdMPgwQ/image.png)

這樣是不是簡單很多呢？我們將我們希望每個迴圈繼續執行的條件：`n < m `放在while的後面，而while迴圈的設計正好就是「不斷執行直到不滿足 `n < m`」，也就是在`n >= m`時就會自動停止了。

## For Loop
另一個迴圈是`for`迴圈，原本在程式語言中通常是用來執行「可以預期什麼時候結束的迴圈」。跟while loop不同的地方在於，我們一開始就會告訴程式我們要loop的範圍或是次數。舉一個最最簡單的例子，就是印出1～15的數字：

![](https://cdn.steemitimages.com/DQmcaLW9kBcbri1eVC2HDkswvzrFWHZtG8pFh85cUGXJE99/image.png)

執行結果：
```
0
1
2
...
14
```
在 for 的語法 公式就是 `for x in o:`，代表著：「走過`o`裡面所有的`x`」。上面的這段程式有一個新的部份叫做`range()`，專門用來產生這種一串的東西讓for迴圈走過。所以`range(15)`就會產生0,1,2,3,4,....,14 (從0開始直到大於等於15停止)(在預設情況下，只輸入一個數字n就是從零開始走到n，不含n)。如果我們想要指定從1開始走走到15，就可以寫成range(1,16)。

不過python好用的地方在於，我們往往不需要知道一個「O」裡面有多少個「x」，就可以直接很懶的使用`for`迴圈了。python的for迴圈很聰明，會自動幫我們想像「我們應該是要重複拿出裡面的某些東西」。

例如下列程式中，我們先把東西存在一個**陣列(array)**（後面我們會教更多關於陣列等等**資料結構**）裡面，然後就可以透過for迴圈「一個一個讀出來」。

![](https://cdn.steemitimages.com/DQmd7A8beBs7pLFZByfs21JRrwtDyV3BKj8R55dDBfz8f9w/image.png)

執行結果：
```
apple is in your shopping list
orange is in your shopping list
lemon is in your shopping list
Xiaomi 6 Plus is in your shopping list
iPhoneX is in your shopping list
```

這段程式當中，我們先把`shopping_list`定義好，把一堆的**字串**存在這個陣列裡。接著我們利用`for item in shopping_list`的語法，來走遍每一個item。

`python`聰明的地方是，我們可以直接叫for loop跑完整個清單，每次回傳一個東西，**並且這個回傳的東西叫做item**。我們前面完全沒有告訴過python說過item是什麼，這一句 `for item in shopping_list`就好像：「遍歷`shopping_list`裡面的東西，每次拿出一個，稱為item」。所以在這個迴圈中，第一次 item = `apple`，第二次 item = `orange` ，以此類推。

不過這裡的`print()`裡面我們多了一個函式，稱為`format()`，是今天要教大家第二個好用的小技巧。format()是**字串的一個class method (類別函式)**，也就是只有字串能夠用。我們可以用這樣的語法**在字串中加入我們要的變數**：

```
 'The value of variable a is {}'.format(a)
```

意思就是把a的值，以字串的形式放入前面那一串子裡面的`{}`中。

所以上一段例子裡，每次我們會印出 ' {} is in your shopping list  '，其中{}就會變成每次的item，也就是物品名子。這樣是不是在設計output的時候有比較方便阿！

## Homework time：練習題！
好了，今天簡單的for, while介紹就到此為止了，也來給大家出一個練習題，同時也是程式設計裡面的經典：**九九乘法表**。**問題：請用迴圈在螢幕上列出99乘法表**。提示：要使用雙重迴圈，也就是Loop in a Loop。

![](https://cdn.steemitimages.com/DQmaLo9WaZyuAHaWnDNGowdhYJhGrie8M9KuHMSYFmHijya/image.png)

不過要完成這個作業，大家可能還需要一點新技能，就是關於`print()`函數的多一點認識。print()在沒有任何設定的情況下，會印出你輸入的內容**並且換行**。在印九九乘法表的時候，我們並不是每次印出數字就要換行，因此會需要使用print 函數裡面的`end`設定來變更這個預設的**字莫換行 
print(number, end = ' ')，會在螢幕上印出number的值，並且不換行，而是在後面加上`'  '`。
如果想要印出**縮排**，也就是一個整齊的空格的話，可以設定`end = '\t'`，如下:
```
print(number, end = '\t')
```
(在程式語法裡，通常使用`\t`來表示縮排(tab)，而用`\n`表示換行)

接著就祝大家好運了，我們下回見～

寫完的朋友們，也歡迎來[GitHub@antoncoding](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_4_exercise.py)對對答案呀！不過這不是唯一的解法喔～


我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #04] 迴圈](https://steemit.com/@deanliu/da-series-learn-python-with-steem-04)
