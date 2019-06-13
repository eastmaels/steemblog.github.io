
---
title: 'SteemIt API Tool - Check If Your Followers Have Voted Your Post 撸了一个工具 - 快速检查你的粉丝到底有没有给你点赞！（带 免费API）'
permlink: steemit-api-tool-check-if-your-followers-have-voted-your-post-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-07-27 02:06:51
categories:
- steemit
tags:
- steemit
- cn
- cn-programming
- steem-tools
thumbnail: http://i.imgur.com/xIOMJmG.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>In 3 hours, I have managed to develop and test the API and Tool that can be used to check which of your followers have not voted your post.</p>
<p>It is based on this idea:</p>
<ol>
  <li>Based on a SteemIt.com or Steemd.com URL for example, &nbsp;&nbsp;<em>https://steemit.com/cn/@happyukgo/i-don-t-understand-this-t-shirt-t-shirt </em>&nbsp;&nbsp;&nbsp;we can extract the ID which is &nbsp;my wife @happyukgo</li>
  <li>Based on the webapi &nbsp;&nbsp;we can get the list of followers: <em>https://webapi.steemdata.com/Accounts?where=name==happyukgo</em></li>
  <li>Based on <em>https://steemd.com/cn/@happyukgo/i-don-t-understand-this-t-shirt-t-shirt &nbsp;</em>we extract the current followers using regular expression.&nbsp;</li>
  <li>&nbsp;That is it. Using array_diff in PHP, we know the list of followers that do not vote your post yet.</li>
</ol>
<p>AND..... this is the online tool with API documentation.</p>
<p><a href="https://helloacm.com/tools/steemit/who-has-not-voted/"><strong>https://helloacm.com/tools/steemit/who-has-not-voted/</strong></a><strong>&nbsp;</strong></p>
<p><strong>Bugs reported to &nbsp;&nbsp;@justyy &nbsp;</strong></p>
<p><strong>Following are the screenshots, &nbsp;as you can see, very easy to use, you just need to copy the URL and press Enter (or click the button).</strong></p>
<p>花了三小时，总算把这个小工具（自带API）的做出来的，主要的用法就是给定一个STEEM贴，然后分析出ID号，然后得出粉丝列表，然后再解析HTML源代码分析出当前点赞的粉丝，最后面计算两个数组的差别就是没有点赞的粉丝。</p>
<p>工具试一下好不好用。有问题联系 @justyy &nbsp;&nbsp;好困啊。。要睡觉去了 zZZZZZZ</p>
<p><strong>中文界面 https://helloacm.com/tools/steemit/who-has-not-voted-yet/</strong><img src="http://i.imgur.com/xIOMJmG.jpg" width="747" height="435"/></p>
<p><img src="http://i.imgur.com/HtCVM0C.jpg" width="738" height="764"/></p>
<h3>API (Application Programming Interface)</h3>
<p>The API following has a <a href="https://helloacm.com/easy-rate-limit-in-php-using-simple-strategy-an-api-example/">rate-limit</a> 1 call per <a href="https://helloacm.com/adsense-earnings-with-one-visit-per-second/">second</a>.</p>
<pre><code>https://uploadbeta.com/api/steemit/who-has-not-voted/?url=https://steemd.com/cn/@justyy/a-quick-tour-to-british-museum-the-british-are-not-returning-the-china-collections-to-china</code></pre>
<p>It will return JSON-encoded data:</p>
<pre><code>{"id":"justyy","who-has-not-voted-yet":["a-jeffrey","aaronli","abit","abupasi.alachy","aijeong","akomoajong","alecsadler","alienposts","always1success","angelamei","aqeelmalik","arielthemermaid","arnoldwish","artcenter1","avilsd","azazqwe","azirgraff","beautifulbella","biddle","bilalhaider","blueheaven","bobiecayao","bocaiwen","boyhaqi","brianchen","britt.the.ish","brnofre","calinconst","carlobelgado","cenai07","changkun","chelseanews","chinadaily","cjstewart1984","cnfund","cnjinbo","coinbitgold","coldhair","crypto.don","cryptomonitor","cryptopie","cryptoriddler","crystone","dan-wilson","daniellimcm","dapeng","davinger","deanliu","dimidrolshina","dixonloveart","dixydator","dolov","dreamcatchers","drrq","duckmast3r","dukekjams","dwightjaden","elements","ellocosaurus","eltooni","emonandels","epeakinfo","evgsk","excessivetravel","exploretraveler","firepower","fitexercise","fkofficials","followseveryone","fonnh","forthecraic","fractal","freethink","gabrieliusart","gamemusic","globaldoodlegems","go4it","gowldie","grildrig","hamzaoui","hannahwu","hansen7","harmonyhomestead","helene","hengist-horsa","hereforawhile","herlife","hiroyamagishi","hoof","hqfzone","htliao","iamnotageek","imagediet","imako","imash","infinitysci","initnas","instructor2121","iqbalbireuen","irishabstainer","irphotography","isacoin","ishaq","itissimple","izbing","jack8831","jacker","jackmiller","jetmirm","jezhead","jhenyen-17","joanaltres","johnnyray","jones420","joseburgos","joythewanderer","julee","junyi","kam.ila","kartikk","katythompson","kimamaxgreen","kingscoin","kingvelt","kinimusic26","kristiana","laboulangdexav","landeberg","lautenglye","ldn-undiscovered","ledygaga25","liangfengyouren","lifetech101","liflorence","lordgangler","lunaticenigma","luocj","lydiachan","lykencrypto","lynx","mac-gallery","machhour","madsweeney","madus","mady27","manosteel211","mardah.resonance","markd","mastergreen","maxer27","maxtill94","mikega","mikeshoman","mohammedfelahi","monalishabiswas","moneyminer","mouradb4","mrceebo","mydarlings2","mytamilabiz","nanosesame","nationalpark","nigelmarkdias","nollza","notonlyfood","notregme","ouba2","pakforex","peterchen145","physicfactor","phytonian","pistox","polyurethane","pqlenator","qipashuo","quintomudigo","quoteoftheday","raheelaslam111","rasool584","rdickey","reachfem24","reyes907","rivalhw","roba","robertolopez","robi8888","rodneyaspiras","rojo","ryan313","schlijk","sebcamtv","sergey44","shaheer001","shahzaib","sharebaby","showoff","siniceku","skyefox","sofiya","soi-green","sosolala","stacee","steem.engine","steemit1234","steemitph","steemlinks","sweety170","swssmarketing","sylviamiller","tarakki","team101","teddy7","the-housewife","the-mountain","thestar","thisjourney","tigerhite1","timelessvolcano","timknip","tinoe","tinoei","tonyboney","tumuta","tumutanzi","ulfr","vajola","vargapauline","victorialuxx","vsoutdoorsnaps","wanderwithtwo","whydowork","wiedy","worldwidetravel","xiaokongcom","xiobus","yangyang","ygern","yuxi","zainalabidin","zauberware","zero9","zeroshiki","zerozero777","zoef"]}</code></pre>
<p>If <em>$_GET</em> parameter <em>s</em> is not specified, this API will use the <strong>$_POST</strong> variable <em>url</em> instead.</p>
<pre><code>curl <strong>-X POST</strong> https://helloacm.com/api/steemit/who-has-not-voted/ -d "url=https://steemd.com/cn/@justyy/a-quick-tour-to-british-museum-the-british-are-not-returning-the-china-collections-to-china"</code></pre>
<h4>API Servers</h4>
<p>You could use the following four servers:</p>
<ul>
  <li><strong>East USA:</strong> https://helloacm.com/api/steemit/who-has-not-voted/?url=</li>
  <li><strong>Tokyo Japan:</strong> https://happyukgo.com/api/steemit/who-has-not-voted/?url=</li>
  <li><strong>London UK:</strong> https://uploadbeta.com/api/steemit/who-has-not-voted/?url=</li>
  <li><strong>West USA:</strong> https://steakovercooked.com/api/steemit/who-has-not-voted/?url=</li>
</ul>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>&nbsp;Originally Published in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p><a href="https://justyy.com/archives/4913">原创首发</a> SteemIt, 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容。&nbsp;</p>
<p><strong>近期热贴</strong>&nbsp;</p>
<ol>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/a-quick-tour-to-british-museum-the-british-are-not-returning-the-china-collections-to-china">A Quick Tour to British Museum - The British are not returning the china collections to China! 大英博物馆的中国展区就是最好的爱国主义教育基地</a></li>
  <li>&nbsp;<a href="https://steemit.com/travel/@justyy/the-best-way-to-travel-to-london">The best way to travel to London? 怎么样去伦敦游玩更方便省钱?</a></li>
  <li><a href="https://steemit.com/cn/@justyy/travel-with-me-windsor-castle-photography">#Travel with me - Windsor Castle (Photography) 再访温莎城堡</a></li>
  <li><a href="https://steemit.com/cn/@justyy/how-to-convert-transfer-steem-or-steem-dollars-sbd-to-bitcoins-sbd-steem">How to Convert/Transfer Steem or Steem Dollars (SBD) to Bitcoins? 小白教程 – 如何把 SBD或者STEEM转出到比特币钱包?</a></li>
  <li><a href="https://steemit.com/cn/@justyy/taking-kids-to-cinema-my-first-cinema-experience">Taking Kids to Cinema - My First Cinema Experience 带孩子到电影院看电影</a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/the-first-steem-couple-steemit">The FIRST Steem Couple? SteemIt 上第一对公开秀恩爱的夫妻?</a></li>
</ol>
<p><strong>****　and... I am putting the source code on github &nbsp;if this post reaches &nbsp;500 votes! *******</strong></p>
<p>&nbsp;<strong>****　500人点赞我就把代码放到 github 上，虽然没几行 LOL &nbsp;*******</strong>&nbsp;</p>
</html>

- - -

This page is synchronized from the post: [SteemIt API Tool - Check If Your Followers Have Voted Your Post 撸了一个工具 - 快速检查你的粉丝到底有没有给你点赞！（带 免费API）](https://steemit.com/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api)
