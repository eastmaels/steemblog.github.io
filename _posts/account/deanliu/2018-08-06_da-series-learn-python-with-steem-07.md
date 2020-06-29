
---
title: '[DA series - Learn Python with Steem #07] 類別'
permlink: da-series-learn-python-with-steem-07
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-06 06:13:00
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

前情提要：[[DA series - Learn Python with Steem #06] 函式](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-06)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#07堂課，今天我們來學習Python的～～**類別** ！

## Python的類別（Class）

今天我們來介紹**類別**(class)，應該算是程式語言中比較進階的概念了。學完這部份之後，就差不多把程式的基本概念都大致帶過了，我們就可以來試試撰寫一些比較有趣實用的程式了。

## Class
什麼是class呢？其實我覺得中文的翻譯「類別」翻的挺不錯的。在程式設計的過程中，我們可以把一些「屬於同的類別」的東西放在一起，類似組成一個新的「物件」。這麼做最主要也是為了建構好理解的程式架構，讓我們在未來的呼叫中可以更得心應手。相信各位看到這裡應該完全聽不明白吧！這也是我第一次看到「Class」時的反應。沒關係，我們舉一個簡單的例子就可以了。

例如我們要設計一個程式時，要使用一些變數紀錄兩位使用者的姓名、身高、體重、性別等等。如果我們用之前的學過的東西，可能需要利用一個浮點數(float)變數來紀錄身高、體重，利用字串(string)來紀錄名字。如下：
```
my_name= 'Anton'
my_height = 1.75
my_weigt = 65
my_gender = 'male'

your_name = 'Felicity'
your_height = 1.6
your_weight = 53
your_gender = 'female'
```
目前看起來還算OK，並沒有太難看。但如果東西一多了，很容易整個程式變得混亂。Class就是在這種「多個大物件是由類似的小零件組成時」，可以拿來使用。在上面這個例子中，當我的程式撰寫到這個部份時，我意識到其實我是試著要用一些變數描述兩個「人」，而**Anton**跟**Felicity**都個別是一個「人」。這時我們就可以設計一個「人的Class」，並且規定：這個class裡面的元素就是我們描述一個「人」所需要的小部份，例如姓名、身高、體重、性別。或是說，身高體重等等是**屬於「人」這個大概念的「屬性」**。我們先以這些東西撰寫一個簡單的Class:
（參考程式碼位於[tutorial_7.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_7.py)）

![](https://cdn.steemitimages.com/DQmWn4LwcU5bXDhzcsiGZHMZrpxHpXeumLruVWx5QBkDtRT/image.png)

一開始跟在關鍵字`class`後面的`Person`就是這個類別的名字，通常以大寫表示。
接著看到class裡面的第一行，是一個像是 Function一樣的**def**關鍵字。在這裡這些「class的內建小function」被稱為methods（後面會有更完整介紹），而這邊看到的第一個：`__init__`(前後都有兩個底線)的method比較特別，是所有class都一定要有的method，意思為「initiate」，也就是「創建這個class的method」，或稱為Contructor。

在這個「創世method」裡面，我們丟入`(self, _name, _height, _weight, _gender)`五個參數。首先，所有的Class裡面的method的第一個參數都一定是**self**，代表他是屬於某一個class的method，而不是一個function。這個self指的就是class本身，而在這個method裡面，我們也會用self來帶指「現在這個class」。
所以在這個`__init__`這個method裡面，我們的就只是把其他接到的參數Assign給**Class裡面的
屬性(attributes)，也就是這個「人」物件的個資**。可以把這些attributes想像成class的內建變數，例如我的init內容是
```
self.name = _name
```
其中_name是我在外面創立這個class時傳送近來的參數，我把他指定給self(也就是這個class)底下一個叫做`name`的 attribute。同樣的道理應用在其他的參數中，所以在創立這個class的時候，我就已經將這個特殊的「人」的各個特徵都寫好到這個Class的各個屬性裡面了。
我後面主程式的部份寫到
```
me = Person('Anton',1.75, 65, 'Male')
print(me.name)
print(me.height)
```
所以現在 **me就是一個Person的物件**，當我們想要看看me內建了哪些屬性的時候，我們可以透過類似上面的`me.name`等叫法來取出。所以，上面這段程式碼執行結果為：
```
Anton
1.75
```
## Methods
接著我們來試試看寫Person這個class裡面的method。
長話短說，attribute就是class裡面內建的變數（如剛剛的name），method就是class裡面內建的function。我們可以仿造上次計算BMI的function，但這次把他寫在這個大class裡面，成為一個活在Person這個大物件之下的內建method。基本上邏輯沒什麼不同：

![](https://cdn.steemitimages.com/DQmfMXgawW3eLQ7Z3YHnwdFpufaZ5Qf8VmbwMQwP1BZ5BZ7/image.png)

不過這個method不像之前設計的function需要傳入(weight, height)，因為規定好一定要傳入的`self`，也就是**這個class自己**，裡面已經包含了我們需要的訊息。在同一個class裡面的method可以自由使用同一個class裡面的attributes(剛剛說的name,height等等)以及其他method。所以在`get_bmi`這個method裡面，我們只要寫 **self.weight**他就會去取得「這個Person物件的體重」，使用**self.height**就會取得「這個Person物件的height」。


因此最後我們可以使用
```
me = Person('Anton',1.75, 65, 'Male')
print(me.get_bmi())
```
他就會知道我們是要使用**me**這個「Person類別」，呼叫裡面的內建的get_bmi() method。執行結果就會是：21.224啦


## Functions and Methods
其實method這個字我們在先前的教學中就有提到了，例如List裡面的**append**、Dictionary的`.update()`都是常用的method。如上面所說，method有點像是那些物件的**內建功能**。例如：List這個物件有個內建的功能是`.append()`用來加上某個元素、Dictionary這個物件有個內建功能是`.update()`，可以用來更新字典；而String這種物建有個內建功能是`split()`，是將字串依照split()裡面的東西切斷。這些method僅存於某種class物件之下，所以我們學list時要學習它之下好用的methods，往往可以省去我們不少開發心力。
一個很好分辨別人寫的code是method還是function的方法是，兩者的呼叫方法有很大的不同：method是某個class的內建功能，因此必定是透過`class.method()`這樣的格式。如剛剛的：
```
me.get_bmi()
```
或是一些比較常用的method:
```
myList = []
myList.append('hey')
myDictionary = {}
myDictionary.update({'Amy':0906888222})
```

反觀我們上期學的function，用法會長的比較直接，不用接在誰的後面和誰的`.`後面，如：
```
print('I love you')
```
## Homework time：練習題！
今天的練習題比較特別一點：希望大家一起來試試看在我們今天Person這個class之下加上別的method以及attribute。其中要大家試試看設計一個rename()的method，呼叫時只要傳入(name)，用來更新我剛剛創件的Person物件。其中再用另一個attribute：**count_update**紀錄這個class一共被變更過幾次。
例如我的主程式部份輸入為：
```
me = Person('Anton',1.75, 65, 'Male')
print(me.name)
me.rename('Antoooon')
me.rename('Antonazzo')
print('========= After Update ===========')
print(me.name)
print(me.count_update)
```
輸出
```
Anton
========= After Update ===========
Antonazzo
2
```

祝大家好運啦！參考解答：[tutorial_7_exercise.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/tutorial_7_exercise.py)

我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: ['[DA series - Learn Python with Steem #07] 類別'](https://steemit.com/@deanliu/da-series-learn-python-with-steem-07)
