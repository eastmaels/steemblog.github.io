
---
title: 'What is Data Overfitting in Machine Learning?  机器学习中的过拟现象'
permlink: what-is-data-overfitting-in-machine-learning
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-07-30 06:12:12
categories:
- cn
tags:
- cn
- cn-programming
- machine-learning
- overfitting
thumbnail: https://justyy.com/wp-content/uploads/2016/04/overfit.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>My understating of data overfitting is that: &nbsp;You have a training set, and you come out with a model, but that model is tuned too much that it only works on a specific dataset like the training set. If you apply the model to other dataset (scenarios), the results are bad.</p>
<p>Data are not perfect. In most cases, the training set contains noise, which needs to be filtered out instead of taken into account in the model.&nbsp;</p>
<p>I have also written this post:</p>
<p><a href="https://helloacm.com/the-machine-learning-case-study-how-to-predict-weight-over-heightgender-using-linear-regression/">The Machine Learning Case Study – How to Predict Weight over Height/Gender using Linear Regression?</a>&nbsp;</p>
<p>Base on the many samples of Weight/Height relations:</p>
<p><code>Male Weight = -101.24 + 1.061 * Height</code></p>
<p><code>Female Weight = -110.20 + 1.062 * Height</code></p>
<p>I am 174cm, the weight should be 83.2kg, but I am in fact 80.0kg, so according to this model, I am fit, which is soooo much better than the &nbsp;<a href="https://justyy.com/archives/2640">BMI</a>.</p>
<p>&nbsp;大数据这年头很火. 有着大数据 甚至不需要做什么就能发财. 一般来说, 你有了数据 然后就可以通过一些算法进行学习 得到一些模型. 通过这些模型来进行预测.&nbsp;</p>
<p>&nbsp;但是很有可能你的数据 (Training Set – 训练集) 是含有一些特殊例子, 或者称为噪声, 我们需要过滤掉这些数据 或者在学习的过程中不考虑它们. 否则得到的模型就会是一个过分拟合的现象. 过拟表现就是对于当前训练集, 你的模型十分的拟合, 但是这个模型却不适合于其它的场景.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2016/04/overfit.png" width="555" height="140"/></p>
<p>&nbsp;过分拟合 // 图片来自于<a href="http://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html">网络</a> &nbsp;// Image Credit: <a href="http://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html">Here</a></p>
<p>&nbsp;推荐数据学习的英文: <a href="https://helloacm.com/the-machine-learning-case-study-how-to-predict-weight-over-heightgender-using-linear-regression/">The Machine Learning Case Study – How to Predict Weight over Height/Gender using Linear Regression?</a>&nbsp;</p>
<p>&nbsp;这个文章学习了大量的 男性/女性 体重对于身高的关系, 得出了两组模型: &nbsp;</p>
<p><code>男性体重 = -101.24 + 1.061 * 身高</code></p>
<p><code>女性体重 = -110.20 + 1.062 * 身高</code></p>
<p>&nbsp;我身高174cm, 所以体重应该是 83.2kg, 我实际体重是 80.0kg, 所以是不胖滴… 这比 <a href="https://justyy.com/archives/2640">BMI</a> 靠谱多了 . &nbsp;<a href="https://en.wikipedia.org/wiki/%F0%9F%98%82">😂</a>&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.</p>
<p><em>// 根据我的博文 </em><a href="https://helloacm.com/the-machine-learning-case-study-how-to-predict-weight-over-heightgender-using-linear-regression/"><em>这里</em></a><em> 和 </em><a href="https://justyy.com/archives/2887"><em>这里</em></a><em> 整理而成。</em></p>
<p>&nbsp;<strong>近期热贴 Reent Popular Posts</strong>&nbsp;</p>
<ol>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/just-throw-away-the-things-you-don-t-need">Just throw away the things you don't need 断舍离</a></li>
  <li><a href="https://steemit.com/cn/@justyy/microsoft-interview-question-get-the-area-of-the-triangle">Microsoft Interview Question – Get the Area of the Triangle 微软面试题:三角形的面积是多少?</a></li>
  <li><a href="https://steemit.com/cn/@justyy/poloniex-is-not-a-wallet-how-to-transfer-sbd-from-poloniex-to-steemit-poloniex-poloniex-sbd-steemit">Poloniex is Not A Wallet! How to Transfer SBD from Poloniex to SteemIt? Poloniex 不是个钱包 – 从Poloniex转出SBD到SteemIt的经历</a></li>
  <li><a href="https://steemit.com/cn/@justyy/team-building-events-bowling-to-celebrate-the-new-release-of-software">Team-building Events (Bowling) to celebrate the new release of software 公司组织到剑桥打保龄球</a>&nbsp;</li>
  <li><a href="https://steemit.com/steemit/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api">SteemIt API Tool - Check If Your Followers Have Voted Your Post 撸了一个工具 - 快速检查你的粉丝到底有没有给你点赞！（带 免费API）</a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/a-quick-tour-to-british-museum-the-british-are-not-returning-the-china-collections-to-china">A Quick Tour to British Museum - The British are not returning the china collections to China! 大英博物馆的中国展区就是最好的爱国主义教育基地</a></li>
  <li><a href="https://steemit.com/cn/@justyy/travel-with-me-windsor-castle-photography">#Travel with me - Windsor Castle (Photography) 再访温莎城堡</a></li>
</ol>
</html>

- - -

This page is synchronized from the post: [What is Data Overfitting in Machine Learning?  机器学习中的过拟现象](https://steemit.com/@justyy/what-is-data-overfitting-in-machine-learning)
