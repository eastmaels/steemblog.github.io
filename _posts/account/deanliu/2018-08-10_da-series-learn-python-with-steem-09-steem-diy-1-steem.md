
---
title: "[DA series - Learn Python with Steem #09] Steem 小工具DIY #1  - 我的Steem小偵探"
permlink: da-series-learn-python-with-steem-09-steem-diy-1-steem
catalog: true
toc_nav_num: true
toc: true
date: 2018-08-10 00:56:36
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

前情提要：[[DA series - Learn Python with Steem #08] 函式庫(Modules)](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-08-modules-steem)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#09堂課，今天我們正式開始玩Steem階段！今天試試看來做做「我的Steem小偵探」！

## Steem 小工具DIY #1  - 我的Steem小偵探

經過了好幾篇的介紹，我們總算是把python編程的基礎都帶過了，剩下的我們就一邊做點有趣的事情一邊學習吧！

上次教學的最後面我們學會了安裝並導入steem-python，並且成功寫了第一支用來偷看別人帳號錢包餘額的程式([check_balance.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/steem-python%20examples/check_balance.py))。今天我們來做稍微進階一點的腳本，大家來練習抓取自己想要「觀察」一個帳號時，最想知道的資訊。在開始之前，先告訴大家，所有關於`steem-python`這個套件包的指令都可以在[Steem-Python Documentation](http://steem.readthedocs.io/en/latest/steem.html#steem.steemd.Steemd.get_account_bandwidth)這官方文件中找到，裡面的函式非常多，我也不會全部用到。若是大家有其他我範例之外想要抓取的資訊，可以先到這個Documentation裡面搜尋看看，照理說看完今天的介紹，應該大家都會比較了解如何看著Documentation自我學習啦！

首先我們可以先看看上週用到的程式：

```
account_name = sys.argv[1]
s = Steem()
balance = s.get_account(account_name)['sbd_balance']
print(balance)
```

可以看出，我們是首先創件了一個**Steem的Class**，接著透過裡面一個叫做`get_account`的method來取得他SBD 餘額資料。我們可以到剛剛提到的[官方文件](http://steem.readthedocs.io/en/latest/steem.html#steem.steemd.Steemd.get_account)中，搜尋關於`get_account`這個method的更多敘述：

![](https://cdn.steemitimages.com/DQmbQ3Pjmqwumpf6hBdmHnthRApZNVURS4jb2ScFQwLz8FN/image.png)

由敘述的**Return type: dict**我們可以知道：這個method會回傳給我們一個存滿了各種使用者資訊的dictionary。我們再回頭看看剛剛的範例寫法：
```
balance = s.get_account(account_name)['sbd_balance']
```

沒錯！ `s.get_account(account_name)`如果是一個字典的話，那麼後面使用括號的 ['sbd_balance']來取得這個字典中的SBD餘額，看起來就真的太合理了。沒錯，就這麼簡單，我們可能有更多想要的資訊存在`s.get_account(account_name)`裡面，不如我們先想辦法印出所有的key - value來看看吧！
```
from steem import Steem
import sys

account_name = sys.argv[1]
s = Steem()
account_info = s.get_account(account_name)

for key, value in account_info.items():
	print('----------')
	print(key)
	print(value)

```
這裡我們要教一個新的技巧，如何走遍一個dictionary並且把所有東西印出來。當然了，你可以直接`print(account_info)`把所有東西印出來，但是格式會很亂很複雜；因此可以使用dictionary內建的`.items()` method。這個method會把所有dictionary裡面的每個key-value變成一個List of tuple。tuple可以想像成「綁定」的多個物件，因此整個method會回傳的東西就是一個List，內含許多兩兩綁定的元素：[(key1, value1) ,(key2, value2) ,(key3, value3),...]。

在python的迴圈裡，如果我們知道走過得這個list裡面的東西都是兩兩綁定的，我們可以直接用我們上面的寫法，直接用不同的變數表示一個Tuple (key_A, value_A)裡的元素。這就是為什麼我們使用`for key,  value in `這樣的寫法，如此一來當我們走到這個List裡面的第一個tuple時，`key`就直接代表了tuple裡面的第一個數值，而`value`就直接代表tuple裡面的第二個數值。如果你看得不明白沒關係，執行看看就會了解囉！

執行程式`python check_info.py antonsteemit`：
```
----------
last_account_update
2018-07-12T14:16:45
----------
post_count
855
----------
savings_sbd_seconds_last_update
2017-12-19T09:36:33
(...)
----------
guest_bloggers
[]
----------
savings_sbd_seconds
0
```

天阿！直接列印出一大堆一大堆有的沒有的東西出來。當然了，其中有些可能滿重要的，如果是我想要的，我接著就可以透過他的key來存取它。依據我們剛剛規定的格式「------」下面第一行是字典的key名稱，再下來是值。我就稍微找了一下我對於一個account有興趣的幾個項目：例如我找了 `post_count`(文章&留言數)， `voting_power`, `reputation`,`last_root_post`(上次po文)

找到這些好玩的key之後，我們就可以透過他們來存取剛剛dictionary中這些我們想要的值了。因此我們先把程式改成以下寫法：
```
from steem import Steem
import sys

account_name = sys.argv[1]
s = Steem()
account_info = s.get_account(account_name)

post_count = account_info['post_count']
voting_power = account_info['voting_power']
reputation = account_info['reputation']
last_post_date = account_info['last_root_post']

display_message = '''
Username: \t{}
Reputation:\t{}
=============================
Total Posts:\t{}
Last Post: \t{}
Voting Power:\t{} %
'''.format(account_name, reputation, post_count, last_post_date, voting_power)

print(display_message)
```

其中最後一段的`display_message`一樣是個字串，不過我們可以使用`''' '''`這樣符號來定義「包含換行的字串」。後面`.format()`的用法跟以前介紹的相同，就是把`.format()`裡面的變數依序填到前面字串的框框裡。執行完這段程式之後我們會發現有一些小問題：
```
Username: 	antonsteemit
Reputation:	6266755755483
=============================
Total Posts:	855
Last Post: 	2018-07-29T16:15:24
Voting Power:	8696 %
```

其中Reputation好像是個奇怪的數字，有點不合理；再來Voting Power也是應該介於0~100之間，最後那個Last Post的日期格式有點醜。我們就來針對這三點做一點修正。

我馬上去Google，Steem Reputation 是怎麼計算的。果然馬上搜到一篇[文章](https://steemit.com/steemit/@digitalnotvir/how-reputation-scores-are-calculated-the-details-explained-with-simple-math)告訴我們，要如何把這個`raw_reputation`換算成1~100的名聲值。其中會用到`log`這個函數，而這個函數是在一個python內建的函式庫`math`裡面，因此我要在我的程式最上面加入`import math`導入此函式庫，接著把這個算式用python寫出來：
```
reputation = (math.log10(int(reputation))-9)*9+25
```
如此一來reputation就正常了。接下來來看看Voting Power。一樣Google之後發現很簡單，原來只要除100就是我們平常說的Voting Power了，所以我們也把Voting Power除100:
```
voting_power = int(voting_power)/100
```

剩下最後一個有點難看的是「時間格式」。現在的時間格式是含有T的**ISO 8601格式**，一樣可以使用一個python的套件`dateutil`來解析：
```
last_post_date = parser.parse(last_post_date)
```
解析之後`last_post_date`會成為一個**DateTime 物件**。還有另外一個常用的套件就叫做`datetime`，我們可以透過他獲取「現在時間」，並且透過兩者相減來獲得「距離上次po文時間」
```
time_since_last_post = datetime.datetime.now() - last_post_date
days_since_last_post = time_since_last_post.days
```
最後我的`days_since_last_post`就會是距離上次發文的天數了。所以我把這些東西都加到最後的display_message裡，最後完整的程式如下(可以參考[此處原始碼](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/steem-python%20examples/check_info.py))：

```
from steem import Steem
import sys
import math
from dateutil import parser
import datetime

account_name = sys.argv[1]
s = Steem()
account_info = s.get_account(account_name)

post_count = account_info['post_count']
voting_power = account_info['voting_power']
reputation = account_info['reputation']
last_post_date = account_info['last_root_post']

reputation = (math.log10(int(reputation))-9)*9+25
voting_power = int(voting_power)/100
last_post_date = parser.parse(last_post_date)
time_since_last_post = datetime.datetime.now() - last_post_date
days_since_last_post = time_since_last_post.days

display_message = '''
Username: \t{}
Reputation:\t{}
=============================
Total Posts:\t{}
Last Post: \t{} ({} days ago)
Voting Power:\t{} %
'''.format(account_name, reputation, post_count, last_post_date, days_since_last_post, voting_power)

print(display_message)

```
### 執行結果：
![](https://cdn.steemitimages.com/DQmTcp3LGb2J6HvmTuXwMWCdGQ8AUTwYxFpJAhHdmM8eox2/image.png)

怎麼樣，滿可愛的吧～

希望這樣的介紹可以幫助大家學習怎麼「自我教學」啦！雖然今天的例子只有用到`get_account()`而已，但是它提供的訊息也遠不只這些，回家作業就讓大家試試看作出自己的小偵探，再以起來分享吧！當然也可以去官方文件偷偷先學其他功能更強大的function來使用喔～


我們下篇文章再見囉～下課！

*課堂助教 @deanliu表示，最近剛剛開始進入玩Steem階段，甚至有些人安裝還不順利，下週開始課堂頻率會降低，讓大家能夠好好把握時間學習好，否則到最後都沒人在學了，殊為可惜～～ 或是還沒開始學的同學，也歡迎趕緊去前面補課Python，趕緊加入我們Learn Python with Steem的行列中來吧！^_^*

*有問題請持續在系列帖中發問，會請 @antonsteemit老師或是有經驗的其他高手同學有空來解惑的～～*

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #09] Steem 小工具DIY #1  - 我的Steem小偵探](https://steemit.com/@deanliu/da-series-learn-python-with-steem-09-steem-diy-1-steem)
