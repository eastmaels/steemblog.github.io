
---
title: '[DA series - Learn Python with Steem #03] 邏輯判斷'
permlink: da-series-learn-python-with-steem-03
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-30 02:13:48
categories:
- da-learnpythonwithsteem
tags:
- da-learnpythonwithsteem
- python
- steem
- cn-programming
- cn
thumbnail: 'https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[[DA series - Learn Python with Steem]](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-00-coding) 是DA（@deanliu & @antonsteemit）關於「從Python程式語言實做Steem區塊鏈的入門」的系列，歡迎趕緊入列學習！

前情提要：[[DA series - Learn Python with Steem #02] 變數與資料型態](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-02)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

新的一週開始了！讓我們繼續學習吧！

第#03堂課，今天我們來看一個相對簡單但非常重要的主題：**邏輯判斷** 吧！

## Python的 If Else 邏輯判斷

邏輯判斷可以說是程式語言最古老的基本成份，也是程式中非常常出現的語法。看懂了if else之後，加上我們之前對於變數的理解，看一個陌生的簡易程式碼已經可以理解五六成了。

其實我相信很多人看到If else這些英文字，就已經可以猜到大概的意義了。沒錯，正如他們的中文翻譯，`if`就是「如果」的意思：**如果符合這個情況（邏輯判斷）就執行下列程式**；而`else`則是跟隨在`if `後面的，代表不符合`if`的其他情況下，就執行這些程式。所以整個if else，可以翻譯成中文的「如果...否則...」

我現在舉一個非常簡單的例子，懂了之後再來看看一些比較細項的規定：
![](https://cdn.steemitimages.com/DQmTg97YpSunshVfTvQM9TGnkkke55LFbN6J3nT1Dp3qcMg/image.png)

執行程式：`python tutorial_3.py`
Output: `You are not overweight!`

注：本篇教學的程式碼可至[GitHub/tutorial_3.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_3.py)中參考或下載。

在Python語言中，所有的**判斷式**都是用冒號(`:`)並且加上**換行縮排**來表示邏輯的上下關係。由上面的程式碼中可以看出，縮排的（按tab，相當於在段落前增加一個大空格）的 `print('You are not overweighted!')`是屬於 `if`的範圍，因此在 `if`成立時會被執行。
而`else`會跟`if`在同樣的水平位置，在`else:`的下一行也是一排經過縮排的內容，表示**else**成立的話，要執行的範圍。

### 關於判斷式
放在 `if`後面的 `BMI>24`是一個 **Expression**，也就是一個會回傳「True or False」的式子。這裡的「大於小於」判斷很好理解，如果正確就回傳`True`、錯誤就回傳`False`。比較要注意的事，如果要判斷相等的話要使用`==`兩個等號，因為一個等號在程式中是`賦值`的意思，兩個等號才是一個會回傳True or False的Expression。


你可能會想說，上次學到的**布林值**不是也是`True` or `False`嗎？沒錯！所以可以在`if` 之類的地方放上以前學過的布林值。例如：
```
is_married = True
if is_married:
	print('You are married')
else:
	print('blah blah blah')
```

## 關於縮排 
這些縮排的規定是非常重要的，因為python中沒有使用任何括號來把if 的範圍刮起來，python完全是透過換行以及縮排來判斷要怎麼執行程式。如果你的換行與縮排有錯誤的話，會讓程式不知道何者屬於`if`的範圍，或何者屬於`else`的範圍。例如下面就是一個錯誤例子：
![](https://cdn.steemitimages.com/DQmcgTCmPYsmNXN74mFALiN2qfJfosLhD8JU22YMmsu2PWk/image.png)

錯誤代碼如下：
```
  File "tutorial_3.py", line 7
    else:
       ^
SyntaxError: invalid syntax

```
我們可以來練習怎麼讀這些錯誤。他告訴我們是在第七行的`else`出了問題，而他會跳出錯誤正是因為所有`else`出現前，都應該先有個**同縮排等級的if**。不然沒有「如果」哪來的「否則」阿？


如果你在執行程式的時候發現`IndentationError`的錯誤，很可能是因為每次縮排的方式不同。在python中，縮排不只水平距離看起來要一樣，若是用空白鍵按很多次按出來的，跟使用`tab`鍵一次跳一大步跳出來的，儘管肉眼看起來好像一樣，在程式編譯(執行前準備)也是會被擋下來的。


## 多重判斷
如果只有`if `跟`else`的話，我們要撰寫一個判斷BMI是否正常的程式需要「兩層的if-else」。**因為在確定沒有過胖的情況下，還要在透過一次if - else 確定也沒有過瘦**，才算正常。因此我們的完整邏輯判斷會變成：

![](https://cdn.steemitimages.com/DQmdgimkYyjsgoKarenLA3okbZgVKKJLZ8jXTuwMAdfmnme/image.png)

執行結果：`You are just fit!`

不過這種多重判斷是很常遇到的，我們通常會有很多的這種非類的情況，例如：假設我們要區分一個數字是位於0~10, 11~20, 21~30, 31~40 哪一個區間，如果只用單純的`if - else`的話，就需要**四層判斷**。當然我們的python不會讓我們這麼累啦！所以就發明了 `elif`的語法，意思就是 **Else if**，中文可以翻譯為「若不是，那如果...」

例如上面的BMI例子，就可以透過`elif`改寫如下：
![](https://cdn.steemitimages.com/DQmQQ2MXjBrFZp6MhfgkoRhXsxdBoNZD4cm8RSrDip1FKwx/image.png)

所以這個程式會先判斷我的BMI是否大於24，若是，則輸出「You are overweight!」。
**若不是，那如果** BMI < 18，就輸出「You are underweight」。而最後剩餘的情況，也就是 BMI介於18~24之間，就是屬於正常。這樣寫是不是很簡單阿！

### 讓程式變有趣的小撇步
今天最後來教大家一個很好用的功能：讀取使用者輸入的函式：`input()`。
我們剛剛那些變數：`my_weight`、`my_height`都是在程式碼內自行輸入指定的，每次要測試不同的身高體重就要重新更改程式碼，要是可以在執行的時候手動輸入想要查詢的值就好了！因此有了`input()`這樣一個方便好用的函式。使用方式如下：

![](https://cdn.steemitimages.com/DQmXnHcMWj9xrsq3ev2zedmCUEraZAuTPstD1uFEtkYnUS7/image.png)

`input()`裡面放的字串是我們想要顯示在command line上的提示字元，在這裡就是詢問使用者，你的身高及體重為何。輸入完成後，這兩個值分別被存到`my_height`以及`my_weight`裡面。
但要注意的是，`input()`所讀進來的變數**型態為字串**，還記得我們前面說過，字串的加減乘除跟數字是不一樣的，其中乘法就會出錯。因此我們在使用這兩個變數計算BMI前，**要把他們的資料型態由「字串」轉為「數字」**。Python中我們可以直接用`float(x)`把一個x轉成 「有小數點的數字」，或是用`int(x)`把x轉成「正整數」。我們這裡兩個都是可以輸入小數點的，因此選擇用`float()`把讀到的字串轉成 **float**(這種有小數點的數字稱為**浮點數**)

執行結果如下：
![](https://cdn.steemitimages.com/DQmWd9mDrvMqfgDAeimTwUcmivHEoJzu5ix14WJNUsW4ssp/image.png)

是不是程式都變好玩了呀！

如你所見，`input()`可以幫助我們設計很多跟使用者互動的界面，大家也可以試著自己做做看一些簡單的「輸入並判斷」程式囉！

## Homework time：練習題！
從這章節開始，我們都在文末來指派個小小練習題好啦！讓大家自己建立一點成就感。今天小小的練習題：

利用If-Else Statement，設計一個程式 **要求使用者輸入三個數字，最後印出最大值：**

範例輸入與輸出
![](https://cdn.steemitimages.com/DQmPwgM7RoWzqWRcNxEE32TwFqe9qUio184CarpnwFUE9qK/image.png)

參考解答：[GitHub/@antoncoding](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_3_exercise.py)


我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: ['[DA series - Learn Python with Steem #03] 邏輯判斷'](https://steemit.com/@deanliu/da-series-learn-python-with-steem-03)
