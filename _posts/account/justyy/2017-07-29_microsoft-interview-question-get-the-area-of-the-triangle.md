
---
title: 'Microsoft Interview Question – Get the Area of the Triangle 微软面试题:三角形的面积是多少?'
permlink: microsoft-interview-question-get-the-area-of-the-triangle
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-07-29 07:20:51
categories:
- cn
tags:
- cn
- interview-question
- microsoft
- math
- triangle
thumbnail: https://helloacm.com/wp-content/uploads/2016/06/triangle.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>&nbsp;The following seems an easy question, to get the area of the rectangluar <a href="https://helloacm.com/coding-exercise-pascal-triangle-ii-c-and-python-solution/">triangle</a> with the slope equals to 10 and the height equals to 6.&nbsp;</p>
<p>&nbsp;据说是一个印度人杀入微软最后的面试,<a href="https://justyy.com/archives/2899"> 面试官</a>给了这么一道小学数学几何题:&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/2016/06/triangle.jpg" width="349" height="235"/></p>
<p>&nbsp;If your answer is 30 (10×6/2), then you are falling into the trap: Such triangle doesn’t exist at all!</p>
<p>&nbsp;这哥门也有疑问 可是最后还是坚持 答案 30 (底 X 高 / 2)</p>
<h3>不存在 It Doest Not Exist</h3>
<p>这是个陷井: 这个直角三角形是不存在的. &nbsp;&nbsp;If we label the triangle with the following,&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/2016/06/triangle-labels.jpg" width="349" height="235"/></p>
<p>&nbsp;两个小直角三角形的勾股定理: &nbsp;&nbsp;What we can get are:&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_4f814a1217a6831bbc03afc9a75ad41f.png" width="101" height="18"/><br>
 <img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_41a661184ef62c05c3babfb5ff0651e8.png" width="98" height="18"/></p>
<p>&nbsp;两者相加: &nbsp;&nbsp;If we add these two equations:&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_d87681d39b0bc775fda529b522c2824b.png" width="247" height="18"/></p>
<p>&nbsp;简化一下: &nbsp;&nbsp;&nbsp;After simplification, we have:&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_b8f301d39fae8e7dcdc25b916ba1f88c.png" width="177" height="21"/></p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_5ddfffe16cc6b2c0456f0deb19e18b13.png" width="199" height="21"/></p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_0a33a75166efb5b3b3e8cffcc4859aee.png" width="246" height="18"/></p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_5f66e5f1119fad0b135eca1f97f3b384.png" width="80" height="16"/></p>
<p>&nbsp;最后我们得到: &nbsp;Thus&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_f81cfccd924d8a8d9242e2987627715b.png" width="184" height="21"/>&nbsp;&nbsp;&nbsp;因为 &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_a98e62ed64d140985c87c4e2aabb0bc7.png" width="88" height="16"/></p>
<p>&nbsp;如果 &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_8f059fdf555f1bf1176803e20f6110ca.png" width="48" height="14"/>&nbsp;并且 &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_8034e0663ee10d48b52b2e9e30b04416.png" width="51" height="20"/>&nbsp;&nbsp;把函数 &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_a1cb1e8465541d8e1231bcd334c91818.png" width="135" height="21"/>&nbsp;&nbsp;&nbsp;画出来是这样的&nbsp;</p>
<p>If &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_8f059fdf555f1bf1176803e20f6110ca.png" width="48" height="14"/>&nbsp;&nbsp;&nbsp;and &nbsp;&nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_8034e0663ee10d48b52b2e9e30b04416.png" width="51" height="20"/>&nbsp;&nbsp;&nbsp;the function of &nbsp;<img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_a1cb1e8465541d8e1231bcd334c91818.png" width="135" height="21"/>&nbsp;&nbsp;&nbsp;is plotted below.</p>
<p><img src="https://helloacm.com/wp-content/uploads/2016/06/plot-for-triangle-max.jpg" width="533" height="304"/></p>
<p>&nbsp;最大值是 25 也就是说 c 的最大值是 5 所以这样的三角形是不存在的(斜高是6)</p>
<p>The maximum value for function y is 25, which means that the maximum value of c is 5.&nbsp;</p>
<p>Such triangle does not exist (the height is 6, which exceeds the maximum length)!&nbsp;</p>
<blockquote>这个问题的意义在于,在实际工作中,尤其是面对开放性,创造性的工作时,不能仅仅作为一个执行者,要怎么做,我也不知道</blockquote>
<blockquote>&nbsp;Typical Microsoft. If something is wrong then it is by design…and you are stuck with it.&nbsp;</blockquote>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容。&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p><em>根据我的博文</em><a href="https://helloacm.com/microsoft-interview-question-get-the-area-of-the-triangle/"><em>这里</em></a><em>和</em><a href="https://justyy.com/archives/3177"><em>这里</em></a><em> 整理而得.</em></p>
<p>&nbsp;<strong>近期热贴 Reent Posts</strong>&nbsp;</p>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/poloniex-is-not-a-wallet-how-to-transfer-sbd-from-poloniex-to-steemit-poloniex-poloniex-sbd-steemit">Poloniex is Not A Wallet! How to Transfer SBD from Poloniex to SteemIt? Poloniex 不是个钱包 – 从Poloniex转出SBD到SteemIt的经历</a></li>
  <li><a href="https://steemit.com/cn/@justyy/team-building-events-bowling-to-celebrate-the-new-release-of-software">Team-building Events (Bowling) to celebrate the new release of software 公司组织到剑桥打保龄球</a>&nbsp;</li>
  <li><a href="https://steemit.com/steemit/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api">SteemIt API Tool - Check If Your Followers Have Voted Your Post 撸了一个工具 - 快速检查你的粉丝到底有没有给你点赞！（带 免费API）</a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/a-quick-tour-to-british-museum-the-british-are-not-returning-the-china-collections-to-china">A Quick Tour to British Museum - The British are not returning the china collections to China! 大英博物馆的中国展区就是最好的爱国主义教育基地</a></li>
  <li><a href="https://steemit.com/travel/@justyy/the-best-way-to-travel-to-london">The best way to travel to London? 怎么样去伦敦游玩更方便省钱?</a></li>
  <li><a href="https://steemit.com/cn/@justyy/travel-with-me-windsor-castle-photography">#Travel with me - Windsor Castle (Photography) 再访温莎城堡</a></li>
  <li><a href="https://steemit.com/cn/@justyy/how-to-convert-transfer-steem-or-steem-dollars-sbd-to-bitcoins-sbd-steem">How to Convert/Transfer Steem or Steem Dollars (SBD) to Bitcoins? 小白教程 – 如何把 SBD或者STEEM转出到比特币钱包?</a></li>
</ol>
</html>

- - -

This page is synchronized from the post: [Microsoft Interview Question – Get the Area of the Triangle 微软面试题:三角形的面积是多少?](https://steemit.com/@justyy/microsoft-interview-question-get-the-area-of-the-triangle)
