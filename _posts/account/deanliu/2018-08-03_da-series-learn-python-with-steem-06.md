
---
title: '[DA series - Learn Python with Steem #06] 函式'
permlink: da-series-learn-python-with-steem-06
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-03 02:03:30
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

前情提要：[[DA series - Learn Python with Steem #05] 基本資料結構](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-05)


![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#06堂課，今天我們來學習Python的～～**函式** ！

## Python的函式 (Function)

前面我們介紹完了Python基本的變數、迴圈、資料結構以及if - else判斷等等，其實結合起來已經可以做很多很多事情囉。今天我們要提的一個新概念就是Function，這算是寫程式必備的元素，雖然聽起來很Fancy但其實一點都不，它的功能是可以大大簡化我們的程式，增加易讀性。

## Function 函式
何謂Function？在一個程式的運作過程中，我們可以把Function看做成一個「讓我們人生變簡單的東西」。例如我們之前教過的`print()`就是一個基本的Function，只要在print()裡面輸入想要顯示的變數等等，就可以輕鬆的把這個東西印在螢幕上。但大家仔細想想會覺得神奇，`print()`裡面究竟是什麼神奇的魔法，可以把東西以正確格式顯示出來到螢幕上呢？答案是，我不知道，我也不需要知道。這就是一個Function，每當我們要印出一段字的時候，我們不用寫一大段複雜的程式碼來執行，只要透過包好的這個function，輕輕鬆鬆打一個`print()`就完成了。

### 寫程式一直在複製貼上？代表你該用function了！
為什麼需要這樣的東西呢？設想，如果每一段print()函式的原始程式碼有100行，難道我們每次要輸出東西時都要重複打這100行嗎？這樣我們如果要輸出十筆資料就需要1000行了。所以寫程式的人喜歡把這些**常用的東西寫成function**，像python為了我們的方便就幫我們設計了`print()`，而我們在自己的程式中，也可以設計將自己**常常重複使用的東西**寫成function。這樣我們就可以在自己的程式中不斷重複利用。

以下是一個簡單的小例子：我們想要設計一個程式，顯示出一個人的基本資料。我們可以自己定義這樣一個簡單的Function，接這就可以不斷的重複利用：（今天的範例程式碼可以至[tutorial_6.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_6.py)中參考喔！）

![](https://cdn.steemitimages.com/DQmZ2EirFqcPiLLJGnSLtsrpfVo6L7XtP7sMCzmqZV6ocHv/image.png)

可以看到第一行開始`def` (definition，定義的意思)的地方開始，就是我們定義function的地方。當我們要定義function的時候，我們首先要想好這個function的**輸入**是什麼，也就是這個function的**參數**(parameters)。在這個例子中，我們的**參數**就是名字、年齡以及國家 （接在我們function名字後面括號裡的`(name, age, country)`），這些是會改變我們Function產出的東西。
接著我們的function就可以拿這些輸入值來做他想做的事情。最後如果有需要，還要讓function回傳一個或多個值。在我們這個case裡，只有基本的列印功能，最後也沒有要回傳，因此這樣就可以拿來使用了。

可以看到我們後面的程式中，就只要用三行呼叫我們定義的Function名字，就可以執行裡面的動作。我們呼叫自己的function時，也要放入(name, age, country)相應的變數作為Function的參數，他們才能順利運作：如: `print_basic_info('Anton', 22, 'no where')`

執行結果：
```
My name is Anton
I'm 22 years old.
I'm from no where
My name is Sanchez
I'm 28 years old.
I'm from Spain
My name is Lilian
I'm 18 years old.
I'm from United State
```

可以看到，Function的魅力在於他可以讓程式碼看起來更簡潔。在主要執行的程式裡，我們透過Function name (print_basic_info())來讓人一看就知道我們這一步是要做什麼。當然print_basic_info這種函式可能大家看了還是不知道你要print什麼，但如果是其他函式如：計算BMI、計算最大公因數等等、讀者能夠比較輕易透過function name知道你想要幹什麼。假如我們沒有使用function把這些部份分離出來的話，不但像之前說的一樣，每遇到一次要重新打一次，而且還會讓整個程式碼看起來亂糟糟的，因為大家都不知道現在發生什麼事了。

在程式設計裡，有一個重要的概念就是「模組化」。基本概念就是，我們要將我們常使用的不同功能設計成分開的「模組」，再由這些小元件(小function)組成各式各樣的大function，最終組成我們的程式碼。我們用之前做過得BMI例子，再透過「function」的概念重組一遍給大家看：

![](https://cdn.steemitimages.com/DQmex3KE5t5ZgLbzUoWnYj7kFCqvTvUixre3PKqYsS4t6tq/image.png)

這段程式之中，我們先透過input取得我們想要的資訊並轉換成float (浮點數，有小數點的數字)後，就丟到我們先寫好的`calculate_BMI()`這個function裡面計算bmi。這個function就是我們說有回傳值的function，可以看到最後面有一個**return**，是一個python的保留字，表示function到此結束，並且把`bmi`這個變數**回傳到呼叫這個function的地方。**因此在我們主要程式碼的地方可以寫成
```
bmi = calculate_BMI(user_height, user_weight)
```
就像我們說 `x = 1, my_name = 'anton'`一樣，我們現在可以把右邊function**算出來並回傳回來的值**賦予給bmi。這就是function有回傳值的用處。而我們的最後一個function: **print_warnings**就跟最前面的例子一樣，只是要依照bmi不同，列印出不同的訊息，並不需要回傳值，因此在call最後一個function時不用寫什麼東西**=** 這個function，而是直接呼叫就可以了。 

執行結果：
```
Please enter your height: 1.78
Please enter your weight: 65
Your BMI is 20.515086478979924
You are just fit!
```
### 其他的function架構
當然這樣子的設計只是我開心而已啦！有些人不喜歡在function裡面列印任何東西，也可以把最後一個function設計成**回傳**message，而在外圍主程式部份設計成
```
warning_message = get_warning_message(bmi)
print(warning_message)
```
這樣的架構。不過這些就是個人習慣了，大家可以看看哪樣看起來比較順暢xD。今天介紹Function也就到此先告一段落了。簡單的說，在自己的程式中設計function，可以很好的增加自己程式易讀性，重複利用寫過得code，否則你寫的艱難，別人讀的也艱難呀！

## Homework time：練習題！
今天我們來練習寫個簡單的function吧！來設計一個叫做**my_average()**的Function，輸入值為一個list，而輸出則為這個list扣除最大值與最小值之後，剩餘數的平均值。範例輸出輸入：
```
my_list = [1,8,3,6,2,345,-23,7]
answer = my_average(my_list)
print(answer)

>>> 4.5
```
參考解答：[tutorial_6_exercise.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_6_exercise.py)


我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: ['[DA series - Learn Python with Steem #06] 函式'](https://steemit.com/@deanliu/da-series-learn-python-with-steem-06)
