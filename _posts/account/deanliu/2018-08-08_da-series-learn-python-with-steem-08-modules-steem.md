
---
title: '[DA series - Learn Python with Steem #08] 函式庫(Modules)的安裝與使用，準備好玩Steem！'
permlink: da-series-learn-python-with-steem-08-modules-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-08 05:02:33
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

前情提要：[[DA series - Learn Python with Steem #07] 類別](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-07)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#08堂課，今天我們來學習Python的～～**函式庫** ！準備進入玩Steem的階段囉～～

## Python的函式庫（Modules）安裝與使用

在介紹完了Python的基本指令之後，我們可以開始玩玩跟**Steem**有關的程式啦！

在程式設計的世界裡，常常我們都需要透過導入「別人寫好的程式」來協助我們更快速的完成工作，這些「現成的程式」比較正統的名字稱為**函式庫**(Modules)，或是比較通俗的說法是「套件」(Packages)。套一句我的老師說的話，這些人就像是**做慈善的**，免費幫我們寫好了一大堆的Function, Class等等，讓我們可以直接引入我們的程式中使用。在我們這系列簡介中，@yjcps很好心的為我們做了許多課後補充，其中他也先我們一步用到了 **import**這個關鍵字，其實這就是「導入函式庫」的過程。

在引入別人的程式之後，要怎麼使用通常要參考類似「說明書」的東西。這類文件被稱為Documentation（參考文件），在我們未來的教學裡面會用到`steem-python`這個套件，它的參考文件在[這裡](http://steem.readthedocs.io/en/latest/index.html)，大家可以先點進來參照一下，未來我們也會用到它。

## Python pip
pip是一個Python套件的「管理系統」。在Python的社群裡，這群愛做善事的開發者常常把自己寫好的套件包註冊到這個**pip**平台上，，如此一來大家都可以輕鬆的利用pip簡單的指令由終端機安裝這些套件包了。當然，STEEM的開發者們也不例外，我們要使用的套件包正是名叫`steem-python`的東西，也是要透過pip來安裝。聽起來簡單方便，但是由於大家電腦環境不同，很容易遇到各種安裝bug，所以今天就讓我們一起來想辦法安裝這個**steem-python**。

## Linux & Mac
Linux 跟 Mac的使用者，可以先到終端機試著輸入pip，看看自己的電腦認不認得這個指令。如果認得就不需要重新安裝，若還沒安裝的話則使用以下指令安裝pip:
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
```
有了pip之後，只要在終端機輸入
```
pip install steem
```
就可以快速安裝完成了。

## Windows
Windows的用戶們應該是最辛苦的，因為steem要用到的一些其他套件包在windows上很多都沒有支援，因此無法直接用簡單的`pip install`指令來安裝。經過我努力的尋找，發現最簡單的方法是直接安裝另一個名叫Anaconda的python環境。

1. 至[MiniConda](https://conda.io/miniconda.html)選擇下載Windows作業系統，python3.6的Conda（[64bit懶人連結](https://repo.continuum.io/miniconda/Miniconda3-latest-Windows-x86_64.exe)）。
2. 下載完成後就可以安裝了。安裝時建議勾選這兩個選項，可以直接讓新安裝的python變成預設的python。網路上有其他人建議大家在安裝之前先到**新增或移除程式**的地方刪除以前安裝的python3.6或是python3.7，免得以後不小心混淆。
![](https://cdn.steemitimages.com/DQmUaShuKr7fNPt3PcfLxAbJrxkL4jFJKxSQF6Pot7oBFRK/image.png)
3. 安裝完成之後重新開機，接著在開啟到command Line，輸入以下魔法指令:
conda config --add channels conda-forge
conda install steem

4. 如果到這裡結束都很順利的話，可以在終端機直接輸入`python`打開python的終端機，接著輸入import steem。順利執行的話代表自己已經順利安裝啦。
![](https://cdn.steemitimages.com/DQmahD24K96ieuDSnxPKCuV29i7j5iTZXpBPDqtjZf8GbWc/image.png) 

### Windows 安裝 C++ Build Tool
如果你在Windows安裝過程中出現 **Microsoft Visual C++ 14.0 is required**這樣的錯誤代碼，是因為你的環境中還缺少了編譯C++的工具。

1. 至[此位置](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=15)下載Visual Studio 安裝器
2. 下載完成後執行安裝器，並且在**工作負載**的頁面選擇「使用C++的工作開發」，接著等待電腦下載+安裝。
3. 安裝完成之後再試試看從壞掉的步驟開始重新執行。

## 安裝完成之後
儘管上述過程看似簡單，但每個人在安裝過程中還有可能遇到各種奇怪的問題，如果遇到了可以留在留言區大家互相幫忙一下，或是直接複製錯誤代碼去Google，應該也會有不少神人出來解惑。總之，先假設大家裝好了，就來個steem-python最簡單範例給大家玩玩看。

複製以下代碼，存成`check_balance.py`，並一樣於終端機執行:
```
from steem import Steem
s = Steem()
balance = s.get_account('antonsteemit')['sbd_balance']
print(balance)
```
當然，大家應該把中間get_account()的帳號名換成自己的帳號名啦!如果正常顯示出自己的SBD Balance，就真是太棒啦!以後就可以這樣偷窺別人的資產了。

### 補充內容:Argv
以上的程式碼已經可以成為我們第一個可以拿來使用的腳本工具了，只要我們想要查誰的帳號餘額，就只要替換中間的帳號名，重新執行即可。可是以一個腳本來說，每次要打開來更換內容好像有一點嫩，所以今天來教教大家利用Argv這個東西，來讀取command line啟動python時的其他參數:
```
from steem import Steem
import sys

account_name = sys.argv[1]
s = Steem()
balance = s.get_account(account_name)['sbd_balance']
print(balance)
```
執行:
```
python check_balance.py antonsteemit
```
### About Import
這裡首先我們先好好介紹上面兩個看似相似的import語法。這兩行分別想要導入steem以及sys(意思是system)這兩個函示庫，但是一個寫法是`from A import B`，一個是直接`import A`。其實這之間的差別就在於前者只想要導入函示庫中的**Class B (或Function B)**，而後者是把所有的內容都導入進來。

我們使用的**import sys**指令會把sys這個套件**所有內容都打包，稱為「sys」一起導入到程式中**，所以後來當我們要使用argv這個函示時，我們必須要使用**sys.argv**，python才知道我們是要使用sys這個函示庫裡面的東西。如果直接下argv的指令，會出現函示未定義的錯誤。

不過如果你真的很不喜歡這些「.」，又想要一次導入一整個函示庫所有的function的話，還可以使用`from A import *`這樣的寫法。import * 代表著導入裡面所有的內容，相當於from A import B, C, D,Ｅ,.... 所以現在ＢＣＤＥ這些函示都可直接在程式中被使用了。不過這樣的寫法會把程式變得比較混亂，因為讀者不容易知道哪個Function來自哪個套件。

我們這裡`import sys`的寫法其實可以換成 `from sys import argv`，因為我們的程式裡其實只是想要用到全部`sys`函式庫裡面`argv`這一個函式。

### About argv
接下來我們介紹一下argv這個函式。

注意到我們原本程式中的`account_name`是直接寫定了等於某一個字串，但現在改成了sys.argv[1]。它的意思就是「抓取我們執行程式時，輸入的內容」。我們這次執行這個python檔的時候不只是執行`python check_balance.py`，而是`python check_balance.py antonsteemit`，其中python指令之後所以用空格分開的元素都會被存在這個argv的List裡面，我們可以透過先後順序來存取； 其中argv[0]是我們腳本的名字(`check_balance.py`)，而我輸入的`antonsteemit`則是argv[1]來存取。

寫成這樣的版本之後，我們以後就可以盡情的搜尋所有人的balance啦!試著執行:

python check_balance.py antonsteemit
python check_balance.py deanliu
python check_balance.py BlahBlahBlah

是不是有自己越來越厲害的感覺呢~ 今天就先上課到這裡吧! 至於作業嘛... 那就幫助其他同學安裝steem-python好了!!! 


我們下篇文章再見囉～下課！

![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: ['[DA series - Learn Python with Steem #08] 函式庫(Modules)的安裝與使用，準備好玩Steem！'](https://steemit.com/@deanliu/da-series-learn-python-with-steem-08-modules-steem)
