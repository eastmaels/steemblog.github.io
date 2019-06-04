
---
title: '给eztk.net加了个导航条'
permlink: 4tbazj-eztk-net
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-05 00:08:45
categories:
- cn
tags:
- cn
- steem
- eztk
- site
- ui
thumbnail: https://cdn.steemitimages.com/DQmTaoQjCcJXZbPbjEAmJTpjWY55enxLWqaAAtftmuNHrxb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前曾提及将[见证人列表工具(witness list)](https://www.eztk.net/witnesses.php)放到[eztk.net](https://www.eztk.net)根目录下。尽管这比记之前的链接要容易一些，但是用户还是要记一长串字符串。为了方便访问，我把eztk.net的index.php直接重定向到witnesses.php。

![](https://cdn.steemitimages.com/DQmTaoQjCcJXZbPbjEAmJTpjWY55enxLWqaAAtftmuNHrxb/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

如果这个站下只有一个文件，这么做显然并没有什么大问题，但是当我把[Resteem check](https://www.eztk.net/resteem.php)功能放上去以后，发现用户又需要记忆一个新的链接了😭

好在HTML有一个专门的功能叫导航，不过如果简单的堆砌到一起，我都是知道咋写HTML，但是放到页面上，让它不那么难看，并且最好还能手机友好(mobile friendly)，就让我有点懵了。

好在bootstrap中有导航条的概念(navbar)，拿来直接用，发现比自己写HTML要稍微不那么难看一点。

所以现在我的eztk.net站点，有导航啦！
>![](https://cdn.steemitimages.com/DQmXoNNMXToby5uVavUwsS7DVUmC7zzZvwT5yz3kvSfjQ1h/image.png)

虽然只有两个页面，但是罗马并不是一天建起的，***相信几十数百年以后***，我这个站点会越来越完善，内容越来越丰富与实用。😭

另外，真的手机友好哦，手机上也可以显示这个导航条（尽管不美观，方便第一嘛）
![](https://cdn.steemitimages.com/DQmaQFr9Ae68pCEiD5vnTs3csWvDXhwAXDf9cji5PkPsxZU/image.png) ![](https://cdn.steemitimages.com/DQmSHGM1PWAF3z4rkt3Vrnbwzj1XTvFiSPbhimq1LLbxXSt/image.png)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [给eztk.net加了个导航条](https://steemit.com/@oflyhigh/4tbazj-eztk-net)
