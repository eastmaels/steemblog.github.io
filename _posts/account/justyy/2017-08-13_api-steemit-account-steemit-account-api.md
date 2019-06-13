
---
title: 'API steemit/account 简单封装了一下 steemit/account 的 API'
permlink: api-steemit-account-steemit-account-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-13 19:25:57
categories:
- cn
tags:
- cn
- steemstem
- cn-programming
- steemit
- api
thumbnail: https://justyy.com/wp-content/uploads/2017/08/steemit-account-api-example.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I have simply wrapped the code from <a href="https://steemit.com/cn/@oflyhigh/steemsql">第一次使用STEEMSQL查询谷哥点名数据</a></p>
<p>onto four servers, located at East USA, West USA, Tokyo Japan and London, UK.</p>
<p>This simplifies the API call if you want to retrieve account information, for example, using PHP, you can retrieve that with just two lines of code.</p>
<p><code>$account = json_decode(file_get_contents("https://uploadbeta.com/api/steemit/account/?id=justyy"), true);</code></p>
<p><code>echo $account[0]['voting_power']; // e.g. returns 9002</code></p>
<p>Cloudflare CDN Edge servers are also available if you invoke the API endpoint via GET method and provides a ?cached parameter i.e.</p>
<p><code>https://uploadbeta.com/api/steemit/account/?</code><code><strong>cached</strong></code><code>&amp;id=justyy</code></p>
<p>Thanks @oflyhigh &nbsp;!</p>
<p>前几天看了O哥的大作 &nbsp;<a href="https://steemit.com/cn/@oflyhigh/steemsql">第一次使用STEEMSQL查询谷哥点名数据</a></p>
<p>觉得PHP如此的强大，不愧为星球上最好的编程语言。几行代码就可以把官方提供的API给用了起来。但是在使用的时候还是得引入一些代码，并且有一些参数对于初学者来说比较难懂。</p>
<p>我今天其实想做一个小功能的，突然就想到，如果只是想根据<a href="https://justyy.com/archives/5051">STEEM</a> ID来得到一些帐户的基本信息，能简单一点是一点。于是在O哥的代码上简单封装了一下API，并且提供4个服务器供世界各地的爱好者使用。</p>
<p>我的四个服务器位于：日本东京，英国伦敦，美国西部还有一个美国东部，我长年（好几年）自己花钱租VPS主机，提供免费的API使用，并且用了付费的 &nbsp;<a href="https://justyy.com/archives/4186">Cloudflare</a> CDN 用于保证服务器的安全和稳定，所以尽可以放心用在你的项目上。</p>
<p>这四个API服务器调用是：</p>
<ul>
  <li>美国东部 (East USA)：https://helloacm.com/api/steemit/account/</li>
  <li>美国西部 (West USA)：https://steakovercooked.com/api/steemit/account/</li>
  <li>日本东京 (Tokyo Japan)：https://happyukgo.com/api/steemit/account/</li>
  <li>英国伦敦 (London, UK)：https://uploadbeta.com/api/steemit/account/</li>
</ul>
<h1>API &nbsp;steemit/account 的使用方法</h1>
<p>怎么用呢？很简单：你可以直接在浏览器里打开 （以GET的方式）：</p>
<p>https://uploadbeta.com/api/steemit/account/?id=justyy</p>
<p>返回JSON数据。或者你可以通过POST方式，比如这样：</p>
<p>curl -X POST -d "id=justyy" https://uploadbeta.com/api/steemit/account/</p>
<p>返回：</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/steemit-account-api-example.jpg" width="859" height="500"/></p>
<p>这里还需要指出的是，如果你想获取速度快（比如上面4个服务器都离你太远了 比如<a href="https://justyy.com/archives/2756">澳洲</a>），而你又不是那么需要实时更新的速度，这时候可以用上CloudFlare 的CDN服务器，只要在调用的时候使用：</p>
<p>https://uploadbeta.com/api/steemit/account/?<strong>cached</strong>&amp;id=justyy</p>
<p>这样调用 API的结果会1小时更新1次，结果缓存于CloudFlare CDN的Edge结点。</p>
<p>弄了这么多，你在<a href="https://justyy.com/archives/3637">PHP</a>里只需要这样两行就可以了：</p>
<p><code>$account = json_decode(file_get_contents("https://uploadbeta.com/api/steemit/account/?id=justyy"), true);</code></p>
<p><code>echo $account[0]['voting_power']; // 获取能量 如 9002</code></p>
<p>再次感谢 @oflyhigh &nbsp;我这是站在巨人的肩膀上！</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>&nbsp;Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;// 稍候同步到我的<a href="https://justyy.com/">中文博客</a>和<a href="https://codingforspeed.com/">英文博客</a>。&nbsp;&nbsp;</p>
<ul>
  <li><a href="https://justyy.com/archives/5063">简单封装了一下 steemit/account 的 API</a></li>
  <li><a href="https://helloacm.com/how-to-retrieve-steemit-account-information-via-api-steemitaccount/">How to Retrieve SteemIt Account Information via API steemit/account?</a></li>
</ul>
<p>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li><a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/code-review-series-value-not-used">[Code Review Series] - Value Not Used [坑爹的代码] - 变量未使用&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/steemit-don-t-let-steemit-ruin-your-life">别让SteemIt毁了你原本的生活 (新老用户都应该看一看) Don’t Let SteemIt Ruin Your Life!</a></li>
  <li><a href="https://steemit.com/steemit/@justyy/technically-images-can-be-stored-on-blockchain-steemit">Technically Images can be Stored on BlockChain 差一点 SteemIt 就可以把图片也存在区块链上了</a></li>
  <li><a href="https://steemit.com/cn/@justyy/adsense-steemit">从互联网广告(Adsense)来谈谈 影响 SteemIt 的收入因素</a></li>
  <li><a href="https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql">[机器学习] 用 MySQL 来演示 KNN算法 The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL</a></li>
  <li><a href="https://steemit.com/cn/@justyy/xy-xy-yzz">XY + XY = YZZ 大白 + 大白 = 白胖胖&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/the-fox">The Fox 英式午餐</a></li>
  <li><a href="https://steemit.com/cn/@justyy/early-autumn-2017-cambridge-uk-photography">Early Autumn 2017, Cambridge, UK (Photography) 英国慢节奏的村庄生活 – 每日散步村口溜娃&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity">Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity? 进一步改进动态规化的空间复杂度&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/24-poker-game-24">24 Poker Game 24点扑克游戏&nbsp;</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/@justyy/api-steemit-account-steemit-account-api)
