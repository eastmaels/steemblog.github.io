
---
title: "[DA series - Learn Python with Steem #02] 變數與資料型態"
permlink: da-series-learn-python-with-steem-02
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-27 05:15:54
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

前情提要：[[DA series - Learn Python with Steem #01] 安裝Python、文字編輯器與哈囉！](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-01-python)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#02堂課，我們要從根基開始打底囉：先來學學 **變數與資料型態** 吧！

## Python的變數

今天我們要來介紹在程式語言裡面，一個非常基本也重要的的元素：**變數**。在程式的運行過程中，變數是一個被操作的主體。我們會利用變數儲存不一樣的資訊，並且彼此交互運算。

例如我們要寫一個程式計算自己的薪水，我們用變數`work_hour`來紀錄我們今天工作了多久，用`dollar_per_hour` 紀錄了一小時的薪水。接著下一步我們透過數學的乘法運算(*)來成功算出一天的薪水，並把它的值存在`salary_per_day`這個變數裡面。

![](https://cdn.steemitimages.com/DQmb9JQXc8EvF5K1wwW9opCPRdy9AAS1WqgecYbw9ADHygA/image.png)

注：本篇教學的程式碼可至[GitHub/tutorial_2.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_2.py)中參考或下載。

在上面的語法中，`=`的作用就是「賦值」，其實跟小時候寫二元一次方程式x=1, y=2是一樣的。但是程式中我們如果都只使用x, y這種東西當變數名稱的話，我們很快就會忘記他代表的意義了，所以都會在命名上稍微花一點心思，訂一個看了一目了然的名字。

我把這個檔案存檔為`example1_variable.py`，一樣利用command line執行之後就會顯示我們一天的工錢：110塊。

得到這個`salary_per_day`之後，我們還可以把他拿來做各種事。例如算一週薪水、一個月的薪水、一年的薪水等等。

![](https://cdn.steemitimages.com/DQmRNt2L3ir5w5wVsSibNdhULuKxAS19tLMNorv1cEr4RDA/image.png)

執行結果：
```
550
2200
26400
```

變數的好處還有，寫好這段程式之後，我們只要在程式中改變任何一個變數的值（例如把dollar_per_hour換成10），就可以算出完全不同的結果。這樣我們就可以輕鬆的比較做不同工作，一年賺得錢會差多少了xD

![](https://cdn.steemitimages.com/DQmZotBjzMzyksqZS5MD73STBHx72biPPv9Cgn14EgYwMyE/image.png)

執行結果 `24000`。因此知道每個小時多領一塊錢是多麼重要的了吧！

## 資料型態

在程式語言中，不同變數又會有不同的資料型態(Type)，例如有些「年齡是正整數」、「名字是文字字串」等等。這是為了讓程式對於你存在變數裡的資訊有所了解，以便做出正確的運算。

頭昏眼花了嗎？沒關係，看一些幾本例子就會豁然開朗了。

![](https://cdn.steemitimages.com/DQmZ2yJqgizQvin6xM1ZoCFjfB1Puu8cty14cHwUWZyJ43C/image.png)

這裡我宣告了`my_name`這個變數是一個字串（用'' 或是""括號起來），來儲存Anton這個名字。
`my_age`就跟剛剛的薪水一樣，是個未來可能要那來做加減運算的「數字」。
第三個`is_married`就比較特別了，是一種叫做布林值(Boolean Algebra)的型態，此類資料只有兩種狀態，即是真或假、True or False。這個`True of False`在通常被拿來做判斷用，這個在未來我們學判斷式跟迴圈的時候會特別重要。

現在我們用不同種類的資料來紀錄訊息了，但為什麼要這麼做呢？因為不同種類的資料在一般情況下是不能放在一起運算的。而不同的資料型態也被python定義了不同的運算規則。

例如，我們改變程式碼如下：

![](https://cdn.steemitimages.com/DQmassWkkwqaSNfDrxKKfsrVqyndX7wekLk2rTNfK2oT7Lk/image.png)

我們分別來看看三種資料型態經過**乘2**之後會變什麼。會發現執行結果為：
```
AntonAnton
44
0
```

在python的定義中，字串乘以二把字串重複兩次，所以`'Anton'*2 = 'AntonAnton'`。
第二個比較簡單理解，數字的乘法跟我們想像也是一樣的。22 * 2 = 44 。
但最後一個又很奇怪了。原來python在遇到把`True or False`拿來做數學運算時，會把他們視為`1` and `0`。所以這裡`False`*2 被當成了`0*2 = 0`，所以output就變成0了。

所以我們可以看出，有些奇怪屬性做奇怪運算會有難以預期的結果，因此在設計程式時應該很清楚每個變數的屬性、意義，才能避免這些可能讓程式壞掉的地方。這也讓我們看出不同變數種類存在的必要性，因為彼此差異頗大，要完成一項任務往往需要這些不同元素互相幫忙。

下一篇介紹判斷式的介紹中，大家應該就可以有更深刻的體會了。

我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #02] 變數與資料型態](https://steemit.com/@deanliu/da-series-learn-python-with-steem-02)
