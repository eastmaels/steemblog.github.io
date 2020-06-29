
---
title: 'SteemPlus 1.3: Manage Your Steemit Feed! 新增 Feed+，終於可以好好管理你凌亂的Feed了！'
permlink: steemplus-1-3-manage-your-steemit-feed-feed-feed
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-14 09:53:39
categories:
- cn
tags:
- cn
- steemdev
- steemit
- steem
- dev
thumbnail: 'https://steemitimages.com/DQmZorMWKg7CZmVY3HeyeEbAeDu9Zwjzm4m3K9t49XYaN7q/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Hey guys! This post is a translation (in Chinese) of kunting's ( @stoodkev) [SteemPlus 1.3 Update](https://steemit.com/steemdev/@steem-plus/steemplus-1-3-with-feed-take-control-of-your-feed-and-find-the-posts-you-want-to-see)! 
#### I love this little tool very much so I decide to help him spread the news by translating it into Chinese, and it would be great to let more Steemians have the chance to know about this news. 
#### Check it out in English here - [SteemPlus 1.3 Update](https://steemit.com/steemdev/@steem-plus/steemplus-1-3-with-feed-take-control-of-your-feed-and-find-the-posts-you-want-to-see)!
****
<sub>*80% of the SBD income from this post will go to SteemPlus' developer @stoodkev*</sub>
****
<center>https://steemitimages.com/600x600/https://steemitimages.com/DQmaUmLkmsvNQfyGLtLmFbM2NdJGpWaFdD3K2gtxpEV1Fe6/image.png</center>

<div class="pull-left">https://steemitimages.com/DQmStFvPpXGJVgyuaM7nG6Hb3ZY6udVMKnp4M11RiKEAm46/steemfeed.png</div>

各位好，本篇是我們台灣群可愛的法國<del>小鮮肉</del>帥哥 @stoodkev，所幫大家開發的好用的Feed管理工具SteemPlus的更新版[SteemPlus 1.3 Update](https://steemit.com/steemdev/@steem-plus/steemplus-1-3-with-feed-take-control-of-your-feed-and-find-the-posts-you-want-to-see)的中文翻譯版本。

因為我覺得這是很不錯的工具，所以就幫他推廣一下，SBD收入的80%會轉交給他，讓他繼續為大家提供更好用的工具喔！

這次新的 **feed+ tab**可以讓您以 tag/resteem/reputation 來過濾你的訂閱 (feed)，以及可以採用 time/payout/votes 來進行排序顯示，聽起還很好用吧？

如果您喜歡[SteemPlus 1.2](https://steemit.com/steem/@steem-plus/steemplus-update-you-can-now-use-white-blacklists-and-reputation-to-filter-resteems)，喜歡它可以隱藏惹人厭resteem文章的功能，那你一定會喜歡這次更新！這次你將可以有效管理你的訂閱，讓它只顯示你想看的文章喔！SteemPlus是Chrome、Opera以及Firefox等瀏覽器上的擴充功能（extension），請參閱文章後面的安裝教學。

# 新功能: feed+ #
<br>
![](https://steemitimages.com/DQmZorMWKg7CZmVY3HeyeEbAeDu9Zwjzm4m3K9t49XYaN7q/image.png)

如圖所示，如果安裝完成後可以看到你Steemit平常習慣的主頁上新增加了一個 feed+的tab！點下去之後，會先顯示一個載入的頁面，然後載入你最近的300篇訂閱文章。如果您的連線正常，然後node狀況穩定的話，大概只需要10-15秒的時間。後續的文章過濾與排序功能，則可以幾乎即時同步完成。未來我會將載入文章數量列為可改變的參數，讓您能依據願意等候時間與想看到的文章數量來做調整。

總之，等待幾秒鐘之後，你可以看到類似如下的畫面

![](https://steemitimages.com/DQmf531Jp9xL2TsoU5yLMkScuCjr8CWvHuJKqjYncTMTU4C/image.png)

你可以看到，我已經力求跟Steemit展示文章的風格保持一致，然後右手邊會新增一個選單，一起看看吧！

<div class="pull-right">https://steemitimages.com/DQmVavX4iMTNy83ix2WLcQnkpuFVq7sLdaFkgLRYJdEDkR8/image.png</div>

## Sort By （以...排序）

<br>
一旦文章載入完成，你就可以馬上利用這個功能來為訂閱文章排序。

上一個畫面中，文章是以payout為排序依據，越高越靠前；但您也可以採用點讚數量，或是時間（新舊）來排序的。

## Filters （過濾器）

<div class="pull-right">https://steemitimages.com/DQmYV28ZUJZynKytKzGhFXiM1ZDFRBeaUnT9sad89Jo7zQE/image.png</div>

### Filter by Tag （以tag過濾）
 <br>

此一功能很直觀，且很好用。如果您希望只看到有特定tag的訂閱文章，就可以使用這個功能。Tag可以多個，所以有個列表，每個tag之間必須以空白作為間隔。這裡的tag指的是所有使用的tag，不單單指第一個主tag。

<br>
<div class="pull-right">https://steemitimages.com/DQmQZtrrUYNnBFtHpibndqjFW8d8QbNecF9hBZAfTWjvcco/image.png</div>

### Filter the Resteems （以resteem與否過濾）
<br>

關於轉推文章resteems，這部分跟SteemPlus 1.2是一樣的，您可以：

- Show all Resteems 顯示所有Resteems
- Hide all Resteems  隱藏所有Resteems
- Blacklist 黑名單：隱藏所有你列入黑名單的用戶Resteems （名單中多個用戶名稱同樣以空白隔開）。

![](https://steemitimages.com/DQmNaJWTfqzA2mv2LEGoNjvoR84VCVwQVjRSf8CH7pzZXkL/image.png)

- Whitelist 白名單：只顯示所有你列入白名單的用戶Resteems （名單中多個用戶名稱同樣以空白隔開）。

<div class="pull-right">https://steemitimages.com/DQmZuwRdjFY5GkDHYAq9xgLCKCrXWcNTzqEioMZRVheBb74/image.png</div>

## 其他 
<br>
此一功能可以用信用分Reputation來過濾，通常可以過濾掉較低品質的文章。未來我們會再加入其他新的過濾功能，敬請期待，也歡迎建議喔！

<div class="pull-right">https://steemitimages.com/DQmZ5C7Gomhkb1jq1Wgt7y1wd5kFpGzyGJYEb4EH7EUup3z/image.png</div>

# 前版已有之舊功能：小魚點讚工具
<br>

此一工具可以協助小魚們選擇點讚比重，請點擊瀏覽器右上方的SteemPlus標示，就會跳出視窗來。然後，輸入您的用戶ID，Posting WIF，以及您所希望設定的點讚比重，那就完成設定啦！

關於安全性，永遠不嫌保守。但您的私鑰Posting WIF只會儲存在本地瀏覽器中，我們沒有辦法存取您的帳戶的，請放心！但仍提醒要小心任何來路不明的人，請關掉自動更新，或是乾脆直接從Github的開發模式中安裝SteemPlus更好。

總之，一旦設定完成，要進行點讚時，請在您想點的文章或回帖的**發布時間**上（.... ago）點擊，如此，瀏覽器上方的網址就會改變，然後您就可以點讚了！

此外，此處亦會顯示您的點讚能量水平。

未來，這部分也會有更多功能推出喔！

# 未來開發方向 #
<br>
- 在Feed+中增加 'Sort by Cheerleader/Idol'功能  (以為你點讚最多的，或是被你點讚最多的作者，來排序訂閱文章)
- 可能新增過濾已點讚文章的選項
- 可能讓 feed+提供可調整的載入文章數量
- 以社區為過濾條件（待定）
- 以鍵盤快捷鍵來點讚

# 如何安裝 #

# Chrome #
如果您是使用Chrome，那就很簡單，<a href="https://chrome.google.com/webstore/detail/steemplus/mjbkjgcplmaneajhcbegoffkedeankaj?hl=en" rel="noopener"> 直接從Chrome Store安裝SteemPlus</a>吧！</p>
<p></p><h1> Opera</h1><p></p>
<ul>
<li>從add-ons gallery新增並安裝 <a href="https://addons.opera.com/en/extensions/details/download-chrome-extension-9/" rel="noopener">Download Chrome Extension </a></li>
<li>在<a href="https://chrome.google.com/webstore/detail/steemplus/mjbkjgcplmaneajhcbegoffkedeankaj?hl=en" rel="noopener">這裡</a>選擇Add to Opera</li>
<li>聲明選擇接受</li>
<li>畫面會跳到 extension manager page，選擇SteemPlus前面的Install</li>
<li>完成！</li>
</ul>
<p></p><h1>Firefox</h1><p></p>
<ul>
<li>安裝<a href="https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/" rel="noopener">Chrome Store Foxified</a>.</li>
<li>在<a href="https://chrome.google.com/webstore/detail/steemplus/mjbkjgcplmaneajhcbegoffkedeankaj?hl=en" rel="noopener">這裡</a>選擇Add to Firefox</li>
<li>如果你希望永久性安裝這個 add-on， 那就需要登入addons.mozilla.org並啟用cookies！</li>
</ul>

SteemPlus是開源軟體，可以從<a href="https://github.com/stoodkev/SteemPlus">Github這裡</a>獲得。

<p>希望能幫到你們！<br>
<p><a href="/@stoodkev">@stoodkev</a> for <a href="/@steem-plus">@steem-plus</a></p>

- - -

This page is synchronized from the post: ['SteemPlus 1.3: Manage Your Steemit Feed! 新增 Feed+，終於可以好好管理你凌亂的Feed了！'](https://steemit.com/@deanliu/steemplus-1-3-manage-your-steemit-feed-feed-feed)
