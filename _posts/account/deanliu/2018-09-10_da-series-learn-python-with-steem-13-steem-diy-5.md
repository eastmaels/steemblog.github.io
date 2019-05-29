
---
title: "[DA series - Learn Python with Steem #13] Steem 小工具DIY #5 交易紀錄查詢"
permlink: da-series-learn-python-with-steem-13-steem-diy-5
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-10 12:46:45
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

前情提要：[[DA series - Learn Python with Steem #12] Steem 小工具DIY #4 - 投票幫手](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-12-steem-diy-4)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#13堂課，嗨，繼續Python學習之旅，今天繼續「Steem 小工具」系列！

## 前言
最近剛好幫忙別人寫了Steem帳號的「收支報表」小程式，就順便上來分享了。其實這個功能個人覺得滿實用的，有時候很想知道自己究竟在Steem上面是賺錢還是花錢，就可以透過這樣一個小程式來看看究竟收支有沒有平衡。

今天的內容只會涵蓋到`transfer`，也就是轉帳的收支計算，並不包含文章收益、`Claim Reward`等等。我在文末也會提供一支順便產生**非轉帳**紀錄報表的腳本，有興趣的朋友可以自己玩玩看。

## Memo Key
其實只是從區塊鏈上抓下`transfer` 進出紀錄有點小看各位了，畢竟待會看程式就會發現其實方法還是陽春的爆蒐法，直接跑過以前到現在自己所有operation，找出屬於轉帳的項目，並進行紀錄。所以我決定加入**Memo Key**，來把整個程式功能變得更完整，大家也可以進一步了解memo key的權限。

大家應該都知道，用Steem轉帳時有一個欄位叫做`memo`，當作傳遞訊息的欄位。例如在使用一些voting bot的時後，就需要利用該欄位傳送要upvote的文章網址。在一般情況下，我們可以直接公開memo讓所有人看，也就是正大光明的transfer，但實際上STEEM也提供了大家加密此欄訊息的選項。在上一篇文章中我們介紹到了三種key，分別是`active`,`posting`,`memo`，其中每一種key其實都是一組**key pair**，含有一個**公鑰**以及一個**私鑰**。memo key當運作方式可以算是全部的key裡面最好理解的：當我傳送一個訊息想要加密時，我就拿別人的memo 公鑰進行加密。如此一來，就只有持有memo私鑰的人，也就是帳號所有人，有辦法還原這一則訊息。

如果有使用Steem上面其他的一些APP，其中包含資產轉帳的時候，常常都會提供加密這個選項，或是預設的通知就是加密過的。我們可能不會發現是因為登入Steemit錢包觀看轉帳memo時，有加密的都會自動解密了。但如果我們去看別人的wallet交易紀錄，就不難找到一些`#`開頭看似亂碼的 memo 訊息，這些就是被加密過的訊息。今天我們要做的Script就是可以解密這些訊息的。

### 來寫程式囉～
今天的主要程式架構也是透過`get_account_history()`來取得所有的歷史資料，再從中篩選`transfer`的項目來記錄。所以迴圈的架構跟之前的程式碼大同小異（程式碼可看[get_steem_transfer_record.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/steem-python%20examples/get_steem_transfer_record.py)）。我們先來看看執行這個腳本時需要給入的參數：

```
python get_steem_transfer_record.py antonsteemit 2018-01-03 2018-07-29 P5K_MY_PRIVATE_MEMO_KEY
```
一共傳入了四個參數，分別是自己的帳號名稱、起訖日、還有最後是private memo key(memo私鑰的取得方法類似posting 私鑰，就是進入`wallet` -> `permission` 中點選`show private memo key`)。

第一部分的腳本就是讀取input參數，其中`datetime.datetime.strptime()`是用來**把字串轉為時間物件**，都成為時間物件之後就可以輕鬆比大小（明天>今天）。而最後一行中，我們建立Steem類別時跟上次一樣，多帶入了`keys=[]`的參數，並在其中放入我們從終端機讀取來的memo私鑰。這麼一來，我們的這個`s`待會就可以直接調用我們的memo key了。

```
from steem import Steem
from steem.amount import Amount
from steem.account import Account
import sys
import datetime

account_name = sys.argv[1]
start_date = datetime.datetime.strptime(sys.argv[2], '%Y-%m-%d')
end_date = datetime.datetime.strptime(sys.argv[3], '%Y-%m-%d')
memoPrivkey = sys.argv[4]

print('Searching Transfer Balance: @{} from {} to {}'.format(account_name, start_date, end_date))
target_account = Account(account_name)

s = Steem(keys=[memoPrivkey])

```
<br>
第二部分是我們熟悉的「抓取所有operation總量」，在這裡多做了一個開檔，準備好`output/transfer_{USERNAME}_memo.csv`作為待會要表格形式輸出的檔名，並且先把我的欄位寫好：
```
total_operations = latest_operation[0][0]
num_iteration = int(total_operations/1000) + 1 # Num of times we have to request get_account_history

transfer_file = open('output/transfers_{}_memo.csv'.format(account_name), 'w')
transfer_file.write('Timestamp,Transfer Type,Dealer,STEEM,SBD,TX ID,memo\n')

```
<br>

第三部份就是迴圈了，對於迴圈的架構我們是熟悉的，跟之前不同的只在於我們現在不再搜尋`operation['type']=='post'`，而是要找尋`operation['type']=='transfer'`的交易紀錄。找到transfer的紀錄之後，首先我們一樣要用`strptime()`換算成時間，拿來跟起訖時間比大小，看有沒有在欲查詢的範圍內。太早的就skip掉、如果已經過期就可以用break結束迴圈。

接著我們要用交易的`to`和`from`來判斷這筆轉帳是轉出還是轉入。如果`from`是自己，表示是轉出，反之則是轉入。這裡我們還會用到Steem提供的一個很好用的Class叫做`Amount`。如果你把`operation['amount']`印出來看會發現他是`'0.05 STEEM'`這樣的字串格式，我們可以直接把這個字串丟入Amount()中，並用`.amount()`來呼叫它的**值**，並且用`.asset() `來判斷這個轉帳是屬於`'Steem'`還是`'SBD'`轉帳。我設計的表格是把Steem跟SBD分成兩欄紀錄，所以最後一段寫檔時，交易的是哪種貨幣的差異在於要寫在哪個欄位。
```
for i in range(1, num_iteration+1):
    _index_from = i*1000
    history = target_account.get_account_history(index=_index_from,limit=1000, order=1)
    for operation in history:
        if operation['type'] =='transfer':
            
            # Check if Transaction Timestamp is in the given period of time
            timestamp = datetime.datetime.strptime(operation['timestamp'],"%Y-%m-%dT%H:%M:%S")
            if timestamp < start_date:
                continue
            elif timestamp > end_date:
                break

            # Classify transfers into IN transfers and OUT transfers
            if operation['from'] == account_name:
                dealer = operation['to']
                transfer_type = 'transfer to'
                amount = -1* Amount(operation['amount']).amount
            else:
                dealer = operation['from']
                transfer_type = 'transfer from'
                amount = Amount(operation['amount']).amount
            
            # Decrypt Memo if the message is decrypted
            try:
                if operation['memo'][0] == '#':
                        memo = s.decode_memo(operation['memo']).replace(',',' ').replace('\n',' ')
                else:
                    memo = operation['memo'].replace(',',' ').replace('\n',' ')
            except:
                memo = ''
            
            # Write File
            if Amount(operation['amount']).asset =='STEEM':
                transfer_file.write('{},{},{},{},{},{},{}\n'.format(operation['timestamp'],transfer_type, dealer, amount,0,operation['trx_id'], memo))
            else:
                transfer_file.write('{},{},{},{},{},{},{}\n'.format(operation['timestamp'],transfer_type, dealer,0, amount,operation['trx_id'], memo))
```
### decode_memo()
`s.decode_memo()`是我們用來解密memo用的method。
可以看到我在一段`try - except`中，判斷memo是否是`'#'`開頭來決定要不要進行`s.decode_memo()`。這裡用`try`的理由是有可能有一般訊息以`'#'`開頭，這時候解密就會失敗，但是這種情況我也不希望程式終止，所以就忽略這種小錯誤繼續執行。

由於我們一開始創建`s = Steem(keys=[PRIVATE_MEMO])`時已經導入私鑰，這時解密就不會有任何問題。但若是你想要用這個程式來搜尋別人的帳號交易紀錄，在遇到解密環節時就會失敗，因為我們沒有別人的private key啊～


![](https://cdn.steemitimages.com/DQmYvM9AEUDKYKZKwfndDD5BGp3gmo9siqBebRwHnLrK7PR/image.png)
執行結果滿漂亮的，秀一下吧～怎麼都是來廣告的人帶來的收入啊zzz

## 後記
就這樣我們就又寫完一個腳本啦！有沒有越來越上手的感覺呢～ 這裡給大家參考另外一個版本，並沒有用到private memo key，但是多了紀錄`delegation`以及`claim_reward`的紀錄，也就是更精確地記錄了所有資產包括**SP**的成長啦！有興趣的人也可以拿來玩玩看呦～
程式碼：[get_steem_balance_sheet.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/steem-python%20examples/get_steem_balance_sheet.py)


![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #13] Steem 小工具DIY #5 交易紀錄查詢](https://steemit.com/@deanliu/da-series-learn-python-with-steem-13-steem-diy-5)
