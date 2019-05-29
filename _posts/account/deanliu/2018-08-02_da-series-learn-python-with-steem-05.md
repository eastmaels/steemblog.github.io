
---
title: "[DA series - Learn Python with Steem #05] 基本資料結構"
permlink: da-series-learn-python-with-steem-05
catalog: true
toc_nav_num: true
toc: true
date: 2018-08-02 01:27:18
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

前情提要：[[DA series - Learn Python with Steem #04] 迴圈](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-04)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#05堂課，今天我們來學習Python的～～**基本資料結構** ！

## Python的基本資料結構(Data Structure)

介紹完了一些基本運算之後，我們還差一點點基本觀念就可以進入比較有「寫程式」感覺的地方了。我們這章節要教的是**資料結構**，也就是一些有效率儲存自己資料的方式。例如上一章的最後面我們介紹到的List(傳統稱為Array，陣列)，就是一個可以想像成**清單**的**資料結構**，讓我們把東西一樣一樣的放到裡面。

在我自己的經驗裡面，最基本也最實用的資料結構就是**List**以及**Dictionary**，基本上有了這兩種資料結構之後就可以很有效的解決大部分的問題了。所以我們今天就針對這兩種最基本的資料結構來做介紹。

## List
首先我們來說說List。
List這種資料結構應該就是你想像得到最直觀的「清單」。首先我們可以宣告一個List，之後就可以慢慢的取用裡面所紀錄的變數（或是其他資料結構）。程式碼可以參考[tutorial_5_list.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_5_list.py)

![](https://cdn.steemitimages.com/DQmXK5dWbeELdY9ua7erNE4WKjPQNwH4rnS9daRmMRE9pLX/image.png)

這裡我們用一個List：`my_todo_list`來紀錄了三個字串，分別是今天待辦的三項事物。而 `count_todo` 就是`my_todo_list`的長度：`len(my_todo_list)`，也就是待辦事項數量。
接著透過一個For迴圈**依照順序**列印出裡面的內容。執行結果：

```
I have 3 tasks on my todo list today! They are:
Homework
Write on Steem
Get a haircut
```
List有一些非常好用的method可以使用，其中最好用的就是 `.append()`跟 `.remove()`兩個。`append`就是加上去的意思，會把一個新的元素加到原本List的最後面。例如剛剛的`my_todo_list`，可以如下加入新的元素：

![](https://cdn.steemitimages.com/DQmaRtbbdDFvASf9uyLEWPhHxJ6ft48zKjWsdRpmiBaocZF/image.png)

首先我們先看看現在my_todo_list裡面有什麼東西，接著就把兩樣新的代辦事項加入本張清單。最後我們可以再次印出目前清單裡的任務數量。執行結果如下：
```
['Homework', 'Write on Steem', 'Get a haircut']
I have 5 tasks on my todo list now!
```
原本只有三個東西的list，經過我們的兩次append之後就變成五樣待辦事項了。而相反的，當我們想要移除一樣東西時，我們可以使用`.remove()`：

![](https://cdn.steemitimages.com/DQmRqwNVZzJ179MXUrpuZkABwyM5brUBY71EGBG5YYjZqGE/image.png)

執行結果：
```
['Homework', 'Write on Steem', 'Get a haircut', 'Watch a movie', 'Sleep']
['Get a haircut', 'Watch a movie', 'Sleep']
```

更多可以使用List的操作可以參考這份[官方文件](https://docs.python.org/3/tutorial/datastructures.html)。使用方法大多大同小異，就是在你的list後面加上`.method名稱(參數)`。

另外還有一個十分重要，如何access List裡面物件的方法就是使用它的index，也就是編號。在程式語言裡面，通常第一個元素的index都是0，然後慢慢累加。所以在上面這個長度只剩下三的`my_todo_list`裡面，我們可以分別使用`my_todo_list[0], my_todo_list[1], my_todo_list[2]`來取用這三個字串：

例如 
```
print(my_todo_list[1])
```
就會印出從頭數來第二個元素，也就是`Watch a movie`。


## Dictionary
接著我們來介紹另外一個實用的資料結構，就是Dictionary。在剛剛介紹的List裡面，我們只能依照順序來存取裡面的檔案，或是只有在我們知道我們要的物件在「List的第幾個」時，才可以直接用index選用。
不過，在Dictionary裡面我們可以一次存進一個**Key - Value pair**，也就是一個`key`對應一個`值`，每次查詢的時候只要我們知道`key`就可以找到相對應的值。Dictionary在一個在生活中感覺比較容易想像的資料結構，就好像我們在查字典的時候，輸入`Apple`就會出現蘋果的相關介紹、輸入`Zoo`就會出現動物園的介紹，我們不需要知道Apple是字典裡的第幾個字、也不需要遍歷字典裡面所有的元素來找到他。
我們下面使用一個簡單的**電話簿**例子來操作。(範例程式位於[tutorial_5_dictionary.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_5_dictionary.py))。Dictionary的宣告是使用`{ }`符號，裡面則放滿了 `key : value`這樣的結構。要讀取資料時也跟List類似，是使用`[]`裡面放上你用來搜尋的key：

![](https://cdn.steemitimages.com/DQmXbob9o8uWs5p8E5s9SjjXEK5RPcrkRHmgZhHvu1vzwWU/image.png)

```
0906882331
876543219
Traceback (most recent call last):
  File "tutorial_5_dictionary.py", line 4, in <module>
    print(my_phone_book['Bob'])
KeyError: 'Bob'
```
這裡我們先在裡面存了兩筆紀錄，分別是我的與**Alice**的電話號碼。可以發現後面我們在取用前兩筆資料時都十分順利，直到第三比Bob的資料時，由於他並不在Dictionary裡面，所以程式就顯示了`KeyError`。

至於要怎麼增加新的key-pair到字典裡面呢？可以使用以下幾種方法：
![](https://cdn.steemitimages.com/DQmRmgVNgWRFq131gnL3oAQaejDL9eozKRjLczTRYQ93Lmu/image.png)

一種是直接使用類似**Assign**值的方式，以後my_phone_book裡面的 Bob值就等於後面那串數字。另一種方法算是比較正規，是使用Dictionary裡面的`.update()` method來做更新。使用update的好處是可以一次增加好幾筆，其實也就是字面上「以後面傳入的字典幫忙這個字典更新」的意思，如：
```
my_phone_book.update({'Joey':'4738273643', 'Rachel':'8372381298', 'Monica':'8327192039'})
```
上面的例子就是一次加入了一大堆新的資料到原本的`my_phone_book`裡面。

如果有一天，你想要列出所有的人還有電話，也可以使用一個for迴圈來遍歷整個字典。但是寫法有一點小小的不同，要使用`dictionary.items()`來當作被遞迴的主體，才能同時看到key跟value。

![](https://cdn.steemitimages.com/DQmSL7fFPNBmx22uajzGXcBb627et3eAq3xFmrL395HKM4r/image.png)
執行結果:
```
Joey 	 : 4738273643
myself 	 : 0906882331
Monica 	 : 8327192039
Rachel 	 : 8372381298
Alice 	 : 876543219
Bob 	 : 09080706023
```

其中還有其他有用的method。例如可以列出所有的key的`.keys()`:
```
print(my_phone_book.keys())
```
結果：
```
['Bob', 'Alice', 'Monica', 'Rachel', 'myself', 'Joey']
```
更多的method或細節依然可以參考比較完整的[官方文件](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)，我個人是覺得這些就滿夠用的啦！

## Homework time：練習題！
今天我們學了兩大資料結構，就來練習一下他們與迴圈的結合吧：
題目：使用一個python程式，製造出一個dictionary和一個list：dictionary的key是1~10的整數，value分別是他們的平方。而list則是紀錄了1~10的三次方 ([1, 8, 27,...,1000])。最後分別列印出這個list和dictionary。


參考解答: [tutorial_5_exercise.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_5_exercise.py)

我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #05] 基本資料結構](https://steemit.com/@deanliu/da-series-learn-python-with-steem-05)
