
---
title: 'Guess Steem Price - Winners Announcement'
permlink: guesssteemprice-winnersannouncement-8zv5gcdrjz
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-06 08:17:42
categories:
- contest
tags:
- contest
- giveaway
- prediction
- prize
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmPdXYzCb6gkv791TT6pjCoF2LbsVB6MQ46zJ1E6bsgxim/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmPdXYzCb6gkv791TT6pjCoF2LbsVB6MQ46zJ1E6bsgxim/image.png" alt="" /><br/>

<h2>The result is $0.796711</h2>

So the final result the market has given us is here, <strong>Close Price of Steem in term of USD on 4 Nov 2018(UTC time) = $0.796711</strong> which can be verified under <a href="https://coinmarketcap.com/currencies/steem/historical-data/">CMC Steem page</a>.

Original contest post: https://steemit.com/steem/@fr3eze/i-m-a-dolphin-finally-giveaway-30-steem-as-celebration-or
Participant listing: https://steemit.com/contest/@fr3eze/guesssteempricecontestparticipantslisting-v7dum3cz5u

<img src="https://cdn.steemitimages.com/DQmZnWTPiihFWKpcZvrdxctQaA1i8LDQT3B9fVTa9abJz1D/chrome_2018-11-05_18-54-55.png" alt="chrome_2018-11-05_18-54-55.png" /><br/>

<h2>Sorting the winners out</h2>

This part would explain how the winners are being filtered and finalized:

1] Used SQLSteem to query the total entries under the original contest post using LINQPad5.

<pre><code>SELECT
     last_update, author, body
FROM
    Comments (NOLOCK)
WHERE
    parent_permlink LIKE 'i-m-a-dolphin-finally-giveaway-30-steem-as-celebration-or'  and
    last_update &lt; '11/2/2018 11:59:00 PM' 
</code></pre>

2] Export the result to Excel without formatting. Trimmed down excessive cells and rows in manually and produce 1 account align with 1 answer per row.

3] I was struggling finding a programmatic way to extract numbers(prediction) from the body of comment consists of string and numbers. This formula does help a lot:

<code>=CONCATENATE("0.", SUMPRODUCT(MID(0&amp;C26, LARGE(INDEX(ISNUMBER(--MID(C26, ROW(INDIRECT("1:"&amp;LEN(C26))), 1)) * ROW(INDIRECT("1:"&amp;LEN(C26))), 0), ROW(INDIRECT("1:"&amp;LEN(C26))))+1, 1) * 10^ROW(INDIRECT("1:"&amp;LEN(C26)))/10))</code>

4] Once I got the numbers-only column, added one result row in anywhere and sorted everything in small to the big order. The closest 3 rows to the result row would be our winners.

5] Verification of the winners including objectively judging if their account is duplicate or bot or not, did they upvoted the post or not, and so on. Fortunately, although I do not know all the 3 winners before the contest, their entries are valid.

<h2>Congratulations to the winners!</h2>

<img src="https://cdn.steemitimages.com/DQmNiBJgiFiq2umP23zjcrba2BEv1m1K5onML4JoLVmKktb/EXCEL_2018-11-05_20-02-00.png" alt="EXCEL_2018-11-05_20-02-00.png" /><br/>

The first prize winner was just $0.000291 away from the correct Steem price while the third prize winner was $0.001027 away. The prizes would go to the following winners:

<ul>
<li>@divine-sound - First place(15 STEEM)</li>
<li>@tonygreene113 - Second place(10 STEEM)</li>
<li>@dernierdiaz - Third place(5 STEEM)</li>
</ul>

Prizes would be sent shortly after this post. Once again, thanks for the participants and let's keep each other active on the platform!

<hr />

前几天举办的<a href="https://steemit.com/steem/@fr3eze/i-m-a-dolphin-finally-giveaway-30-steem-as-celebration-or">Steem 价竞猜游戏</a> 已经落幕，成绩分别是：

<ul>
<li>首奖 - @divine-sound</li>
<li>二奖 - @tonygreene113</li>
<li>三奖 - @dernierdiaz</li>
</ul>

有点遗憾的是，并没有我熟悉的朋友在内。而值得庆幸的是，过程中发现了一些马甲号来参赛，但是这三位的参赛都没有问题。再一次，为大火的踊跃参与道谢咯。<br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/guess-steem-price-winners-announcement/</em><hr/></center>

- - -

This page is synchronized from the post: ['Guess Steem Price - Winners Announcement'](https://steemit.com/@fr3eze/guesssteemprice-winnersannouncement-8zv5gcdrjz)
