
---
title: '解不開的黑箱－也來說一下Price Feed，呼應O小嬸「也来说一下帖子的奖励」A Try to Decipher the Price Feed and Sharing with CN Newbies'
permlink: price-feed-o-a-try-to-decipher-the-price-feed-and-sharing-with-cn-newbies
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-07-10 07:46:12
categories:
- cn
tags:
- cn
- steem
- sbd
- witness
- cn-programming
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<h2>漣漪</h2>
<p><br>
看O小嬸的文章，總是帶給人想更進一步研究許多平台機制的渴望。[<a href="https://steemit.com/cn/@cnfund/49hh7y">為何叫他小嬸？</a>]</p>
<p>今天也不例外。我看到這篇「 <a href="https://steemit.com/cn/@oflyhigh/7kwevu">也来说一下帖子的奖励</a>」（<del>喂！太沒有文學氣息的標題了吧</del>），這篇談的是獎勵的計算，我大概都知道，大概啦！只是看到這裡頭關於<strong>系統價格</strong>部分提到</p>
<blockquote>&nbsp;这个价格据说是7日均价，具体核算过程我没研究，总之如果市场上steem价格一路走低，那么这个价格就会变低。&nbsp;</blockquote>
<p>這段話基本上是沒錯的（雖然可能有點小錯，但無傷大雅），但其實這裡頭藏著Steem最大的黑箱秘密！什麼秘密？看下去吧！</p>
<p>https://steemitimages.com/DQmZLEKUkZZy2obF9hdQiej8bRcgU71Q8f6kgaBi6Fj7ceC/danbo-1206484_640%20.jpg</p><hr>
<h2>圓桌上坐著19位超級大大</h2>
<p><br>
舉凡重要事情，似乎就該有個圓桌，一群有權力的 <del>黑幫老大 </del>大鯨魚們，圍坐著，室內雪茄味煙霧繚繞。他們嘴裡不清不楚地說著一堆我們通不懂的術語，悄悄地決定著許多無法坐上圓桌的芸芸眾生們的生計...&nbsp;</p>
<p>呵呵，被小說家影響了...&nbsp;</p>
<p>好的，回到Steem世界，大家可能都稍微聽過什麼是Witness了吧？這是Steem blockchain DPoS的重要實踐機制啊！不清楚地可以看O小嬸的<a href="https://steemit.com/cn/@oflyhigh/6dbdqm">這篇</a>，或是英文區大老的 @pfunk 的<a href="https://steemit.com/steemit-guides/@pfunk/a-full-steemit-user-s-guide-to-steem-witnesses">那篇</a>。(後者可能略舊了，但較全面，重點在於概念學習)&nbsp;</p>
<p>上頭說的系統價格，其實就是 "feed price"，亦即，<strong>系統內 1 單位的Steem價值多少SBD的基準</strong>。[後面再談其意義]</p>
<p>Witnesses，見證人們，就是決定這系統價格的寡頭們啊！怎麼決定？開會嗎？到哪裡開？視訊會議嗎？</p>
<p>https://steemitimages.com/DQmTgGGXmejpA6yuH55DjMbEr5y8Co6GsNWNED2PcaQkn5A/federal-chancellery-639100_640.jpg</p>
<p>傻孩子，區塊鏈上一切照protocal來的，開什麼會呢？按照另一位大老 @timcliff 六個月前曾經教過我的一段話</p>
<p>https://steemitimages.com/DQmWBubdUPfgFHnnaurnHQzuQ38UCbzpaWWWbGdgMm5p4n8/image.png</p>
<p>看過了，你就知道了。原來，每個Witness都有意義務提供系統一個自已決定的"feed price"。但只有前19個Witness的數據會被系統考慮，而採取19個數據當中的中位數（median price）來做為系統最終的那個數據（可以到steemd.com網站看這數據，往下拉在右側可以看到）</p>
<p>https://steemitimages.com/DQmWB6miXfDwpLxZNYWvCVdzLyKrMn1KMHi3eEnjPyb94o6/image.png</p>
<p>如果你跟我一樣，有事沒空就去偷看大"嬸" <del>洗澡</del> <a href="https://steemd.com/@abit">動態</a>，就會很熟悉這畫面，以及他常在做的事「 abit publish feed price: $1.395/STEEM」... 這就是囉！你要是看得夠久，不要以為他不睡覺，這可以自動化的...&nbsp;</p>
<p>https://steemitimages.com/DQmXYkPRo9BoxGpxitFELCN5bkkuFY6dFgk5BYr1zayXV8E/image.png</p>
<hr><h2>其中貓膩？</h2>
<p><br>
當 timcliff兄很久前提供我意見後，我一直想好好去確認這事，但後來就忘了，直到今天看到O小嬸的文章才想起，所以決定馬上來研究看看，確認一下... 結果... 怎麼出乎我意料，這難解啊... 請看...&nbsp;</p>
<p>首先我抓取這裡的<a href="https://steemd.com/witnesses">見證人即時數據</a>，可以看到我們大"嬸"排名18（快啊！還沒投票的快去吧，太低了點！）。這裡有很多訊息，我就不多說了，自己可以看看，如最右側大家都已經在run HF19了（這句話裡有很多問題的，原來可以有人不run HF19啊？那系統怎麼運作？這也是我的既有疑惑之一）...</p>
<p>好回到本議題。你可以看到每個見證人都有feed，就是feed price。</p>
<p>https://steemitimages.com/DQmRVQcpDBc9XXvCdVBMEiWrizTczW1EYMb6oABs39iGyga/image.png</p>
<p>於是乎我用excel排了一下前19大的數據如下，發現...&nbsp;</p>
<p>https://steemitimages.com/DQmNufHwT5X5rUSEwvr4BMHvzhPgjvRy16SXHzKK8zgcwnD/image.png</p>
<p>不對啊！系統的feed price應該是$1.51啊！（中位數）怎麼前面顯示的是 $1.613？怎麼回事？</p>
<p>好吧！我要告訴你本帖最大的笑話了－答案是：我也不知道！</p>
<p>我遍尋可能知識來源，找不到解釋方法。但至少我有一個可能的猜測，讓讀者別太生氣了... 那就是...&nbsp;</p>
<p><strong>這見證人的中位數並不是當下的19大見證人的數據中位數，而是過去3.5天內，根據時間長度與動態的前19位見證人提供的所有數據的中位數。</strong></p>
<p>這是我的猜測，且這猜測我無法只憑steemd來驗證，所以就有待賢者了...但我解釋一下</p>
<ol>
  <li>3.5天，不是7天，7天是舊制了，7天制在Steem改變power down週期那次改成3.5天了，可以參考<a href="https://steemit.com/steem/@steemitblog/final-review-of-steem-economic-changes">這裡</a>。這是我說的O文小錯之處。但當然我也不是100%有把握</li>
  <li>所謂「時間長度」猜測是因為，你把游標移到<a href="https://steemd.com/witnesses">witness page</a>的feed price旁，可以看到age的數據，這似乎暗示了age是重要參考。這也有道理，因為數據是隨時變的，時間確實是重要考量</li>
  <li>所謂「動態的前19位見證人」指的是當下的19位不一定是下一秒的19位，在其位謀其政，下去了就沒發言權了，這是dantheman常說的"state"的觀念了... 附帶說，19或20位後的見證人不是晾在那裏好看的，他們是非常重要的backup，是吧？如果前面哪位家裡停電了之類的，<del>我那珍貴的文章你賠得起嗎？</del>哈哈！</li>
  <li>似乎也有人說20位，這我不確定了。[update: O大說是20+1，見回帖]</li>
</ol>
<hr><h2>黑箱謎團</h2>
<p><br>
是的！黑箱。其實不是指見證人如何決定系統 feed price，區塊鏈沒有不透明這事的，只是你有沒有搞懂而已。黑箱在哪裡？不然要退錢了喔！好的，我給你黑箱...</p>
<p>黑箱在於<strong>Witnesses們如何思考feed price的決定</strong>，這可是大學問啊！每個人思考差異很大，因為這數據決定了整個Steem blockchain的運作效率，連結了所有一切！投資人、投機人、作者、大股東... 這裡面沒有定論。包括前一陣子難以理解的SBD溢價之謎，以及整個系統的估值、負債（是的！SBD是系統負債的概念）以及與美元的掛鉤等等... 一切經濟世界的邏輯就在這裡面了... 這已經超出區塊鏈的技術範疇，達到經濟運作的層次了...</p>
<p>你說，這黑箱好懂嗎？<del>我容易嗎我，都寫到這裡了？</del></p>
<p>但這也是樂趣所在。奧妙就在其中了。這將會是一個漫長的學習與探索的過程啊！:)</p>
<p><strong>再次感謝O小嬸給我的寫作靈感觸發</strong>.... [當然 @htliao 是觸發他的人... 可見小魚也有能力改變很多事的！:) ]</p>
<p>https://steemitimages.com/DQmXYrZWCUgwZD2XPrrEj34Hu25je6iY6pBSQhP1sqvnU52/danbo-1206478_640.jpg</p>
<hr><h2>English Summary</h2>
<p><br>
Dear English readers, I know there will be many asking but this post is not serious enough for me to write a bilingual post. So I will give you a sketch here. This is a post describing my endeavors to decipher how "price feed" works via witness system based on what @timcliff said to me in a comment 6 months ago [<strong>10% SBD of this post goes to you man, for sharing what you know with me :)</strong>]. He said that system's price feed is determined by the median price of top 19 witnesses.&nbsp;</p>
<p>I did the homework today and found out it seems weird... or, it is more complicated than I thought. As I search many information sources but cannot explain it, I have a conjecture - the system's price is based on <em><strong>all </strong></em>the witnesses' numbers during the past 3.5 days time frame <em><strong>dynamically</strong></em>. So it means that you cannot just look at steemd right now and calculate the final result. That's the main point of this post in Chinese. I share some commonly known knowledge to newbies in a relaxing way as well... Don't know if you can google translate to get the idea... haha!</p>
<p>@deanliu</p>
<hr>
<h6><p>images credit: pixabay, steemd, steemit</p><p><br></p></h6>
</html>

- - -

This page is synchronized from the post: ['解不開的黑箱－也來說一下Price Feed，呼應O小嬸「也来说一下帖子的奖励」A Try to Decipher the Price Feed and Sharing with CN Newbies'](https://steemit.com/@deanliu/price-feed-o-a-try-to-decipher-the-price-feed-and-sharing-with-cn-newbies)
