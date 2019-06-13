
---
title: 'Google Interview Question – Print Message - 去年 Google 的面试题 - 打印消息'
permlink: google-interview-question-print-message-google
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-04 19:55:27
categories:
- cn
tags:
- cn
- cn-programming
- google
- interview
- algorithms
thumbnail: https://www.executivegrapevine.com/uploads/articles/Google-Interview-Qs.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>This is my technical phone interview question from Google (last year). Google has offices in London but the call was from Google Switzerland (+41). The interview lasts for 45 minutes.&nbsp;</p>
<p><img src="https://www.executivegrapevine.com/uploads/articles/Google-Interview-Qs.jpg" width="600" height="400"/></p>
<p>The engineer didn’t provide any interface (so you can come up with the function signature). We don’t need to store all the messages and the frequency for the function call could be several per second. &nbsp;</p>
<pre><code>00:00:01 foo<br>
00:00:02 bar<br>
00:00:06 bar // should not print<br>
..<br>
..<br>
00:00:10 foo // should not print<br>
00:00:11 foo // print again</code></pre>
<h3>USING HASHMAP</h3>
<p>Using a hashmap to store the printed messages and their corresponding time is trivial but this will have a memory issue (<a href="https://helloacm.com/how-does-it-look-like-when-windows-phone-out-of-memory/">Out-Of-Memory</a>) if this function is running for weeks. Hashmap will grow, especially that all the messages are unique! &nbsp;</p>
<h3>USING QUEUE+HASHMAP</h3>
<p>We can use queue to store the messages in last 10 seconds. We can use <a href="https://helloacm.com/coding-exercise-cjava-leetcode-online-judge-two-sum-hashmap/">hashmap</a>/set to store the messages printed, in order to speed up lookup. This method is the combination of both queue and hashmap/set. The following C++ code demonstrates the idea. We use the <strong>int</strong> type to represent the time type for simplification.</p>
<pre><code><em>// member variables</em><br>
unordered_set&lt;int&gt; cache;<br>
queue&lt;pair&lt;time, int&gt;&gt; last10;<br>
&nbsp;void PrintMessage(int time, string msg) {<br>
&nbsp; &nbsp; <em>// compute the string hash as a 32-bit integer</em><br>
&nbsp; &nbsp; int hash = compute_hash(msg);<br>
&nbsp; &nbsp; <em>// remove invalid entries</em><br>
&nbsp; &nbsp; while (!last10.empty()) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; auto key = last10.front();<br>
&nbsp; &nbsp; &nbsp; &nbsp; if (time - key.first &gt;= 10) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; last10.pop();<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cache.erase(key.second); <em>// remove from hash set</em><br>
&nbsp; &nbsp; &nbsp; &nbsp; } else {<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>break</strong>;<br>
&nbsp; &nbsp; &nbsp; &nbsp; }<br>
&nbsp; &nbsp; } &nbsp; <br>
&nbsp; &nbsp; if (cache.count(hash)) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; return; <em>// &nbsp;printed in last 10 seconds</em><br>
&nbsp; &nbsp; }<br>
&nbsp; &nbsp; <em>// we can print the message now</em><br>
&nbsp; &nbsp; cout &lt;&lt; msg &lt;&lt; endl;<br>
&nbsp; &nbsp; <em>// inserting the entry</em><br>
&nbsp; &nbsp; cache.insert(hash);<br>
&nbsp; &nbsp; last10.push(make_pair(time, hash));<br>
}</code></pre>
<p>I did make some mistakes in writing the code on the Google Docs without an actual <a href="https://helloacm.com/c-coding-exercise-counting-bits-using-dynamic-programming/">Programming IDE</a>!It would be good that someone can make testing data for this question. To adapt it for Online Judge, we can re-write the function signature to: &nbsp;</p>
<pre><code>bool PrintMessage(int time, string msg); <em>// return whether to print this message</em></code></pre>
<p>The engineer also asks me the test cases if I want to write <a href="https://helloacm.com/using-fluentassertions-library-to-write-a-better-unit-test-in-net-c/">unit tests</a> for it. I can think of three cases:</p>
<ol>
  <li>Empty Messages, what to do?</li>
  <li>11 foos</li>
  <li>foo, bar, foo bar … after 6 times</li>
</ol>
<p>Do you have more corner cases to test? Please comment below.</p>
<p>去年我参加了 Google 的初面(电话面试), 可惜没有通过. Google 瑞士的一个软件工程师打电话面试, 电话面试就考了一道算法题, 虽然我也准备了近一个月的时间, 但是我回答的并不完美.</p>
<p>虽然和我联系的Google 是在伦敦, 但是面试的时候手机上显示的是 +41 电话 来自 Google 瑞士, 整个面试大约45分钟.</p>
<p>题目是:</p>
<p>给了一些消息 和对应的日期和时间, 如果消息并不在最近10秒钟内打印过 那么就打印. 同时有可能多条消息到达(1秒之内).</p>
<p>就这么一个题目并没有指定接口, &nbsp;而我们也不需要把所有消息都保存起来, 并且我们知道 &nbsp;这个 打印函数可能一秒内被调用多次:&nbsp;</p>
<pre><code>00:00:01 foo<br>
00:00:02 bar<br>
00:00:06 bar // should not print<br>
..<br>
..<br>
00:00:10 foo // should not print<br>
00:00:11 foo // print again</code></pre>
<p>我的第一个想法就是使用<a href="https://justyy.com/archives/4987">哈希表 HashMap</a>, 但是这里有一个问题就是: 如果这个系统运行了好久好久, 这么一来, 内存就会不够了, 特别是到达的消息都是唯一的话.</p>
<p>面试官在我给出上面这个初步的答案后并不满意, 当然他会给提示指出问题(out of memory), 我在思考后给出了一个用队列+哈希表的方案:</p>
<p>我的方案是: 用队列来保存最近10秒打印过的消息, 并且我们用<a href="https://justyy.com/archives/2006">哈希表</a>来加速查找. 以下<a href="https://justyy.com/archives/3725">C++代码</a>就是这种组合的方式:&nbsp;</p>
<pre><code><em>// member variables</em><br>
unordered_set&lt;int&gt; cache;<br>
queue&lt;pair&lt;time, int&gt;&gt; last10;<br>
void PrintMessage(int time, string msg) {<br>
&nbsp; &nbsp; <em>// 把消息字符串变成32位的哈希值</em><br>
&nbsp; &nbsp; int hash = compute_hash(msg);<br>
&nbsp; &nbsp; <em>// 去除超过10秒的记录</em><br>
&nbsp; &nbsp; while (!last10.empty()) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; auto key = last10.front();<br>
&nbsp; &nbsp; &nbsp; &nbsp; if (time - key.first &gt;= 10) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; last10.pop();<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cache.erase(key.second); <br>
&nbsp; &nbsp; &nbsp; &nbsp; } else {<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>break</strong>;<br>
&nbsp; &nbsp; &nbsp; &nbsp; }<br>
&nbsp; &nbsp; } &nbsp; <br>
 &nbsp;&nbsp; if (cache.count(hash)) {<br>
&nbsp; &nbsp; &nbsp; &nbsp; return; <em>// &nbsp;已经在过去10秒钟打印过了</em><br>
&nbsp; &nbsp; }<br>
&nbsp; &nbsp; <em>// 打印消息</em><br>
&nbsp; &nbsp; cout &lt;&lt; msg &lt;&lt; endl;<br>
&nbsp; &nbsp; <em>// 插入消息</em><br>
&nbsp; &nbsp; cache.insert(hash);<br>
&nbsp; &nbsp; last10.push(make_pair(time, hash));<br>
}</code></pre>
<p>我并不是一下子就把代码写对, 有一些小细节的错误. &nbsp;虽然没再进入下一轮面试, 但是还是体验了一把.</p>
<p>第二阶段就是问了单元测试相关知识, 比如上面的方法 可以定义接口为:&nbsp;</p>
<pre><code>bool PrintMessage(int time, string msg); <em>// 返回是否打印</em></code></pre>
<p>那么测试用例(Test Cases) 可以是:</p>
<ol>
  <li>空字符串</li>
  <li>11 个 foo</li>
  <li>6 次 foo, bar, foo bar</li>
</ol>
<p>您还有什么比较刁钻的测试用例么? 在下面评论吧.</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
<p><code>// 根据我的</code><a href="https://justyy.com/archives/4992"><code>中文博客</code></a><code> 和 </code><a href="https://helloacm.com/google-interview-question-print-message/"><code>英文博文</code></a><code>整理而得.</code></p>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/quick-r-tutorial-how-to-plot-sigmoid-function-using-r-r-sigmoid">Quick R Tutorial – How to Plot Sigmoid Function using R? 如何用R语言画Sigmoid函数?</a></li>
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

This page is synchronized from the post: [Google Interview Question – Print Message - 去年 Google 的面试题 - 打印消息](https://steemit.com/@justyy/google-interview-question-print-message-google)
