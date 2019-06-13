
---
title: 'Quick R Tutorial – How to Plot Sigmoid Function using R? 如何用R语言画Sigmoid函数?'
permlink: quick-r-tutorial-how-to-plot-sigmoid-function-using-r-r-sigmoid
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-04 08:04:30
categories:
- cn
tags:
- cn
- cn-programming
- r-language
- sigmoid
thumbnail: https://justyy.com/wp-content/uploads/easy-latex-cache/tex_efb0648c94ba8faddeebcfe92a094903.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>The R programming language is designed for statistic computing, and has drawn much attentions due to the emerging interests of Big Data, Data Mining and <a href="https://helloacm.com/the-machine-learning-case-study-how-to-predict-weight-over-heightgender-using-linear-regression/">Machine Learning</a>. It is very similar to Matlab and Python, which has a interactive shell where you type in commands to execute or expressions to evaluate (like a intermediate calculator). You can also save the scripts in *.R script files.</p>
<p>R is best for statistics computation, and it is free, very lightweight (the install package is smaller than 70MB). It can be run on multi platforms e.g. MAC, <a href="https://helloacm.com/the-c-windows-command-line-tool-to-wait-and-timeout-on-createprocess/">windows</a>, or linux. This tutorial will guide you through the very quick example of plotting a <a href="https://en.wikipedia.org/wiki/Sigmoid_function">Sigmoid function</a> using R.&nbsp;</p>
<p>&nbsp;以前听说过R语言不过不是很感冒, 因为很多事情都能用Python或者是Matlab搞定, 并不需要特别去再学一门语言. 最近在做大数据分析/数据挖掘, 又听说了这门语言, 于是感到很有意思就<a href="https://cran.r-project.org/bin/windows/base/">下载了</a>下来玩了一下.&nbsp;</p>
<p>&nbsp;R语言很轻巧 安装包只有70M, 免费的, 在<a href="https://justyy.com/archives/2468">Linux</a>, MAC 和<a href="https://justyy.com/archives/2388">Windows</a> 下都可以运行(并且有<a href="https://justyy.com/archives/2532">64</a>位的版本). R语言和Python, Matlab很像, 特别是装完启动后都会有一个交互式的界面, 这时候你输命令或者表达式就可以立马看到结果. 当然也有一个脚本编辑器可以把长一点的R语言脚本编辑另存为 *.R 扩展名.&nbsp;</p>
<p>&nbsp;R语言是属于统计学领域(天生具有统计基因), 据说是学统计领域的人(并不是专业编程人员)设计的, 所以可能性能上并不能和Python, Matlab 相比(不如软件工程师编写的软件那么健壮). R语言的思维和传统编辑语言不太一样, R结合了很多数学, 概率, 统计的基础知识. 初学起来有一定门槛, 但是并不难. 可以对照着<a href="https://justyy.com/archives/911">Python</a>等来学习.&nbsp;</p>
<p>&nbsp;接下来就介绍如何用R语言来画数学中的<a href="https://en.wikipedia.org/wiki/Sigmoid_function">Sigmoid函数</a>. Sigmoid函数也称S函数(因其长得像S形). S函数可用于将数学中的变量重新映射到0和1期间. 该函数数学定义如下:&nbsp;</p>
<p>&nbsp;The Sigmoid function in mathematics is defined as:&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/easy-latex-cache/tex_efb0648c94ba8faddeebcfe92a094903.png" width="106" height="24"/></p>
<p>&nbsp;在R语言中可以通过以下语法来定义: &nbsp;</p>
<p>&nbsp;and we can define a function in R.&nbsp;</p>
<pre><code>sigmoid = function(x) {<br>
 &nbsp;&nbsp;1 / (1 + exp(-x))<br>
}</code></pre>
<p>&nbsp;That is it! Like <a href="https://helloacm.com/learning-powershell-recursive-fibonacci-computation/">powershell</a>, the last expression is the return value of the function (there is no return keyword like <a href="https://helloacm.com/how-to-determine-linked-list-cycle-in-cc/">C/C++</a>!) and you don’t need to explicitly define the parameter type. Now, let’s make input x a discrete vector that have values separated by step 0.01 between -5 to 5.&nbsp;</p>
<p>&nbsp;其中等于号也可以换成 &lt;- (小于+减号, 语法糖). R语言中数据类型不需要定义类型, 并且函数返回值是函数的最后一个表达式(这点和<a href="https://justyy.com/archives/1031">Powershell</a>是一样的, 没有return语句). 定义函数后我们可以用以下来生成-5到5期间的离散点(间隔0.01), 存储成向量. &nbsp;</p>
<pre><code>x &lt;- seq(-5, 5, 0.01)</code></pre>
<p>&nbsp;这时候x的值为:</p>
<p>&nbsp;It is easy to understand that the parameters for <em>seq</em> function is start, stop and step. What x contains now is:&nbsp;</p>
<pre><code>[1] -5.00 -4.99 -4.98 -4.97 -4.96 -4.95 -4.94 -4.93 -4.92 -4.91 -4.90 -4.89<br>
 &nbsp;[13] -4.88 -4.87 -4.86 -4.85 -4.84 -4.83 -4.82 -4.81 -4.80 -4.79 -4.78 -4.77<br>
 &nbsp;[25] -4.76 -4.75 -4.74 -4.73 -4.72 -4.71 -4.70 -4.69 -4.68 -4.67 -4.66 -4.65<br>
...<br>
...<br>
 [985] &nbsp;4.84 &nbsp;4.85 &nbsp;4.86 &nbsp;4.87 &nbsp;4.88 &nbsp;4.89 &nbsp;4.90 &nbsp;4.91 &nbsp;4.92 &nbsp;4.93 &nbsp;4.94 &nbsp;4.95<br>
 [997] &nbsp;4.96 &nbsp;4.97 &nbsp;4.98 &nbsp;4.99 &nbsp;5.00</code></pre>
<p>最后我们只需要通过 和Python, Matlab 一样的 plot(x, y) 函数来画图. &nbsp;</p>
<p>&nbsp;Now, you can just plot it (very similar to the plot function in Python and Matlab).&nbsp;</p>
<pre><code>plot(x, sigmoid(x), col='blue')</code></pre>
<p><img src="https://justyy.com/wp-content/uploads/2016/08/sigmod-function-r.jpg" width="477" height="385"/></p>
<p>&nbsp;The Sigmoid function is also known as the S function (it has shape of S). The function can be used to map values to (0, 1) so the input can be from negative infinity to infinity. The Sigmoid function is used in the <a href="https://helloacm.com/a-short-introduction-logistic-regression-algorithm/">Logistic Regression</a>.&nbsp;</p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p><em>// 根据我的博文 </em><a href="https://justyy.com/archives/3413"><em>这里</em></a><em> 和 </em><a href="https://helloacm.com/quick-r-tutorial-how-to-plot-sigmoid-function-using-r/"><em>这里</em></a><em> 整理而得。</em></p>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/the-chess-ai-model-base-or-machine-learning">The Chess AI - Model Base or Machine Learning 浅谈棋类博弃的两种实现方式：模式化和机器学习&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity">Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity 软件工程师面试技巧之 使用哈希表降复杂度&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/5hgpar">记录那些值得回忆的精彩瞬间</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-visit-to-fen-drayton-lake-photography-fen-drayton">One Day Visit to Fen Drayton Lake (Photography) - 村庄附近的 Fen Drayton 湖</a></li>
  <li><a href="https://steemit.com/cn/@justyy/luton-brookes">One Night in Luton. 回到Luton十一年前打工的酒巴Brookes喝酒</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-travel-photography-fen-drayton-lake-st-ives-fen-drayton-lake-st-ives">One Day Travel (Photography) Fen Drayton Lake + St Ives 英国 Fen Drayton Lake 坐公交到 St Ives 游玩</a></li>
  <li><a href="https://steemit.com/cn/@justyy/what-is-data-overfitting-in-machine-learning">What is Data Overfitting in Machine Learning? 机器学习中的过拟现象</a></li>
</ol>
</html>

- - -

This page is synchronized from the post: [Quick R Tutorial – How to Plot Sigmoid Function using R? 如何用R语言画Sigmoid函数?](https://steemit.com/@justyy/quick-r-tutorial-how-to-plot-sigmoid-function-using-r-r-sigmoid)
