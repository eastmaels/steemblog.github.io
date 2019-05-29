
---
title: "[DA series - Learn Python with Steem #12] Steem 小工具DIY #4 投票幫手"
permlink: da-series-learn-python-with-steem-12-steem-diy-4
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-06 15:57:24
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

前情提要：[[DA series - Learn Python with Steem #11] Steem 小工具DIY #3 - 我的文章列表（二）](https://steemit.com/da-learnpythonwithsteem/@deanliu/da-series-learn-python-with-steem-11-steem-diy-3)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbeN1PpqQC2JE5HbpXatb3apUfFhe68fPLctT95FiiRHq/cover.png)

第#12堂課，嗨，繼續Python學習之旅，今天繼續「Steem 小工具」系列吧！

## 前言
最近好久沒有更新steem-python系列文了，真是對不起各位好學生啊（掩面）～到今天之前，我們所做的小工具都只有對於Steem區塊鏈的「觀察」，也就是像是讀取資料庫一樣。今天我們要稍微進階一點，來進行對區塊鏈的「寫入」，就從最基本的`upvote`著手吧！

在區塊鏈中，寫入也就意味著製造transaction，簽署交易，並且被區塊所驗證。在這過程中我們需要透過自己的private key來進行簽章，也就意味著我們必須在程式碼當中使用的我們的私鑰，所以大家要小心不要不小心暴露啦！

## Keys on STEEM
在這之前我們要先對steem的私鑰管理系統有多一點的理解。在Steem的設計中，把一個用戶的權限一共分在了三把私鑰上，每個人可以依據使用情境不同決定只用某一把私鑰登入，以保障帳號安全。這三把私鑰分別為：
1. Posting Key：授權貼文、投票、轉貼、回覆等等基本操作
2. Active Key：授權**與資產相關**的轉帳、Powerup等等
3. Memo Key：授權讀取加密的轉帳memo

當然，還有一把Master Key作為掌管一切的主密碼。不過在我們接下來要實作的例子中，由於只是要進行投票，所以只會用到posting key的權限，也建議大家在執行程式時只要導入自己的posting key就好，免得意外發生造成損失。

取得Posting Key的方法：
1. 進入Steemit Wallet頁面
2. 點選Permission頁籤
3. 點選Posting Key旁的`show private key`按鈕顯示私鑰，並存下來等著待會用。

## Upvote 小工具
今天我們來寫一個可以upvote特定使用者最新文章的腳本。其實Steem-python函式庫已經把整個簽章投票過程變得超級無敵簡單，我們只要在一開始呼叫Steem類別時「代入我們的Posting Key」，並且找到我們目標upvote文章的**identifier**，剩下的事情就可以交給Steem-python函式庫去處理。

如同我們剛剛說到的，在程式碼中寫死自己的posting key雖然比較方便，但也比較容易不小心暴露出去，所以在這裡也建議大家使用如同之前的`argv[]`的寫法來讀取執行時寫入的私鑰。這裡一共設計了四個參數要在執行腳本時傳入，分別是`target_user`,`account_username`,`account_posting_key`以及`upvote_weight`。因此腳本執行時輸入如下：

```
python upvote_username.py eosasia antonsteemit 5JMYPOSTINGKEY000000BLAHBLAHBLAH 50
```

代表我們想要使用帳號@antonsteemit，給@eosasia最新的文章投票，voting_weight 為 50%。因此在此一腳本中，分別將這些傳入的三數存入四個變數中如下：（此篇教學的程式碼可以參考[upvote_username.py](https://github.com/antoncoding/Python-x-Steem-tutorial/blob/master/steem-python%20examples/upvote_username.py)）

```
from steem import Steem
import sys

def upvote(account_name ,post, weight):

target_username = sys.argv[1]
account_name = sys.argv[2]
account_postkey = sys.argv[3]
vote_weight = sys.argv[4]

s = Steem("https://api.steemit.com", keys=[account_postkey])

```

其中最後一行，宣告Steem 類別時，我們要將posting key放入 `keys=[]`這個參數中傳入，來建立這個可以動用我們posting key的類別。到這裡，其實稍有不同的部分就做完了，後面我們只要透過類似之前尋找發文紀錄的機器人的做法，找到`target_username`最新的文章，接著就可以利用內建的mothod: `Steem.commit.vote()`來投票了。

我們可以直接看主要程式部分的程式碼：
```
target_post = {}
history = s.get_account_history(target_username, index_from=-1, limit=1000)
for operation in reversed(history):
    op = operation[1]['op']
    if op[0] == 'comment':
        if op[1]['parent_author'] == '':
            _permlink = op[1]['permlink']

            # Check if the Post has already been upvoted by my account
            if account_name in [v["voter"] for v in s.get_active_votes(target_username, _permlink)]:
                print("Already voted on this. Skipping... {}".format(op[1]['title']))
                continue
            
            # Save target vote in a dictionary structure
            target_post["permlink"] = _permlink
            target_post["title"] = op[1]['title']
            target_post["identifier"] = '@{}/{}'.format(target_username, target_post["permlink"])
            print('Target Post: {}'.format(target_post["identifier"]))
            upvote(account_name, target_post, 5)
            break
```
### 重複投票檢驗
前半段迴圈的架構跟之前的程式是相同的，可以直接複製過來使用。其中略微不同的點在於，每當我們找到該做找最新文章，我們要先確認我們有沒有upvote過這篇文章。檢驗的方法是透過`s.get_active_votes(author, permlink)`這個呼叫來看看，他會回傳一個list of dictionary，我們只要檢查每個dictionary中的 `["voter"]` 都不是我們的帳號，就可以確定沒有投過此文章，確保投票會成功。

### Identifier
再來是關於目標文章，我們使用`target_post`這樣一個字典來儲存，然後再一起丟到upvote()這個函式裡。其中存了一個叫做的`target_post["identifier"]`的變數，他就是一個形式為`"@username/permlink"`的**字串**。為這麼做是因為在steem-python投票的這個method當中，就是要我們輸入這樣格式的identifier來辨認這篇文章。

最後來介紹這個簡單自製的upvote function。其實大家也沒有必要一定要單獨寫一個函式，因為在裡面做的事情也只是去呼叫`steem.commit.vote()`罷了。

```
def upvote(account_name ,post, weight):
    try:
        s.commit.vote(post["identifier"], weight, account=account_name)
        print("Casted vote({}%) on: {}.".format(weight,post["identifier"]))
    except Exception as error:
        print("Error : {}".format(error))
```

可以看到這個小函式中，只是把`s.commit.vote()`包在一個`try - except`的架構裡。這樣可以防範如果投票失敗，並不會終止程式，而只會印出錯誤代碼。這種`try - except`的語法被稱作`Error Handler`，在編寫比較大，或是需要長期運作的程式時可以透過它來避免小bug直接造成程式停止。就這麼簡單！我們的小小跟班程式就完成啦！以後可以透過這個程式每天upvote自己的好朋友囉～


### 更多功能
為了防止有人覺得太簡單沒有挑戰性，大家可以回去練習實作自己的「篩選機制」。例如：還記得`get_account()`可以用來獲取帳戶訊息嗎？可以設計成只有在自己voting_power大於某個值時才進行投票，或是依照其他因素選擇upvote_weight。就讓大家自己發揮創意囉～


![class-377117_1280.jpg](https://cdn.steemitimages.com/DQmbTcEoAB7HRTxy11a1eDN8vREiGqxEMd7P3jJ3TGvGSTv/class-377117_1280.jpg)
<sub>*image - pixabay*</sub>

- - -

This page is synchronized from the post: [[DA series - Learn Python with Steem #12] Steem 小工具DIY #4 投票幫手](https://steemit.com/@deanliu/da-series-learn-python-with-steem-12-steem-diy-4)
