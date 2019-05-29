
---
title: "[DA series - Learn Python with Steem #01] 安裝Python、文字編輯器與哈囉！"
permlink: da-series-learn-python-with-steem-01-python
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-26 01:57:06
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

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

首堂課，我們做三件事：**安裝Python，安裝文字編輯器，以及.... 著名的Hello World!!**

## 安裝Python

安裝python不是一件太困難的事情，基本上就跟安裝其他應用程式大同小異。

1 . 到[Python官網下載頁](https://www.python.org/downloads/) 點選頁面上最大的**Download Python 3.7.0**。直接在這裡選這個選項它會幫你下載匹配現在作業系統的安裝檔。

>[提示：關於安裝版本，請參考一下回帖裡 @antonsteemit的說明更新！謝謝！]

![](https://cdn.steemitimages.com/DQmWTYaCjmRC9KreS9jkohUv14n5ZF9EE7VhCoTVhHiyZ6v/image.png)

2 . 下載完成後，啟動程式開始安裝。在第一頁先勾選下方的 `Add Python 3.7 to PATH`，選完就直接選擇`Install Now`

![](https://cdn.steemitimages.com/DQmdJaJNvYAsupT1aj9g5VG4Vekh84gK71wMq2qrvtRogVr/image.png)

3 . 等待安裝完成後，你的電腦就可以執行python的程式了！可以試著在搜尋欄輸入cmd，打開傳說中的command line (命令提示字元)，試著在裡面直接輸入`python`，按下`enter`，如果有跳出結果就代表安裝成功囉～

<div class=pull-left>https://cdn.steemitimages.com/100x100/https://cdn.steemitimages.com/DQmaPCMkSbDFE2KwbaDaXRWwmbbSGN4msFnLQ4QCFqdk5FG/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202018-07-26%20%E4%B8%8A%E5%8D%889.51.13.png</div>

>**提示！**此處所謂cmd命令是Windowns系統下的指令。Mac用戶請至：**應用程式-->工具程式-->終端機**進入命令提示模式。以下提及cmd或command line之段落處亦同。


****
![](https://cdn.steemitimages.com/DQmQQH3qLkD4b3oxhq1FFG9Lo2HYVjp6SmcAuMn98L8Xuod/image.png)

## 安裝文字編輯器
安裝完python之後我們還需要安裝一個方便我們打程式的「文字編輯器」。其實要執行的程式碼也可以用「文字筆記本」等程式來寫，只是易讀性會比較差，也不會有帥氣的變色。因此今天推薦大家使用`Sublime`，一個開源而且非常輕便的文字編輯器～

1 . 前往[Sublime官網下載頁面](https://www.sublimetext.com/3)，點選有粗體字的版本下載：

![](https://cdn.steemitimages.com/DQmRR452aFVWjtGY1JWmEvHmMG85wfdqffQ8ehpTQijU4pm/image.png)

2 . 執行下載檔案並安裝，應該不會遇到任何問題。安裝完就可以在`開始`的地方找到`Sublime`然後執行了。

![](https://cdn.steemitimages.com/DQmUcKxCXUxxixg1tJndF4hxouTtcRVpaKzZ3u7gL3guX2m/image.png)

就這麼簡單，現在你已經準備好可以開始啦！

## Hello World
所有程式語言的第一課，都是要讓程式印出「**Hello World!**」，所以我們也來Follow一下大家的腳步。不過為了讓自己的電腦不至於混亂，我建議大家建立一個資料夾，把所有我們會用到的檔案都放在裡面。我這裡在桌面的地方建立了一個名叫`python_steem`的資料夾，建立完成之後可以用sublime點選 `File` -> `Open folder`，然後選擇剛剛建立的資料夾，就可以開啟並在左邊看到現在還空空如也的資料夾。

![](https://cdn.steemitimages.com/DQmbKM2BxRThWiXJsqeq4yZLmFqebKmL5xCDB7qpHJWSWri/image.png)

好了，現在萬事具備，我們可以來寫第一個程式了。但希望大家不要太失望，因為這個程式只有一行：
```
print('Hello World!')
```
其中`print()`就是我們要學會python的第一個function。它的作用很簡單，就是在螢幕上印出我們想要的東西。

如果發現你的Sublime文字編輯器都沒有變色，可以去右下角原本是`Plain Text`的地方改選為`Python`，Sublime就會很聰明的幫忙你標注出python的特殊語法了。或者你也可以直接選擇存檔(ctrl + s)，假設存檔檔名叫做`helloworld.py`（下方副檔名選擇`.py`），存檔之後sublime也會自動辨識你的程式碼是python程式碼。

![](https://cdn.steemitimages.com/DQmfFu8TGFqUpgMV9DwxpQJBJgBjRup7d5y7jucndmPiDAJ/image.png)
<sub>手動選擇語言</sub>

![](https://cdn.steemitimages.com/DQmeaZPfhKRemmmdgpDSAx6Ujj12oH5f4sLGJZjGhq5noja/image.png)
<sub>存檔為`helloworld.py` </sub>

完成之後就會看到你的Sublime左邊目錄結構下，已經多出了helloworld.py，並且也有帥氣的變色了～

![](https://cdn.steemitimages.com/DQme9jBRYb3ekn63SEcoLNtP5Xy9Pj4HSrcUnLQXQLuyH7J/image.png)

接著我們就可以透過終端機(Command Line)來執行我們第一個腳本啦！

一樣先在搜尋欄輸入cmd，開啟命令提示字元。

![](https://cdn.steemitimages.com/DQmdwixuM46BBRERYZwWGCE6BbzD3SbEfwaa48EqyeBfEP5/image.png)

接著我們會用到人生第一個command，就是`cd`。它的意思是change directory，就是移動現在所在位置。我們的command line一開啟的時候會在家目錄的地方，我們的python檔是放在桌面裡的`steem_python`資料夾，所以我們要將我們的command line先移動到該資料夾：

```
cd Desktop
cd python_steem
```
![](https://cdn.steemitimages.com/DQmZtb1AFARRGwUt9U87HeR2Zgm3CMQRwsiM3Jsbn1CjV68/image.png)

接著就執行
```
python helloworld.py
```
前面的python，亦即我們要用`python`程式來run這個腳本，後面的helloworld.py就是我們剛剛寫好的那一段程式碼啦！執行結果，就會在command line上面看到`Hello World`的字樣囉！

![](https://cdn.steemitimages.com/DQmc2H9dt8aGCgsnamftsZUZhuPDSQELPkum1cAGyK9xWZX/image.png)

是不是很輕鬆寫意呢？所以說python真的是一個很好上手的語言吧！
今天的介紹也就到這裡為止，下一次我們再來繼續探索python更多奇妙的功能吧！

我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #01] 安裝Python、文字編輯器與哈囉！](https://steemit.com/@deanliu/da-series-learn-python-with-steem-01-python)
