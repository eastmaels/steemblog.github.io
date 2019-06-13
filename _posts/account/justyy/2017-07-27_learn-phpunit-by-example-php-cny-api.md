
---
title: 'Learn PHPUnit by Example 通过例子学写 PHP单元测试来确保API功能正常'
permlink: learn-phpunit-by-example-php-cny-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-07-27 19:22:03
categories:
- cn
tags:
- cn
- cn-programming
- phpunit
- unit-tests
- tdd
thumbnail: https://steakovercooked.com/static/blog/2017/phpunit.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>Yesterday, I published a handy online SteemIt tool to check the followers not voting your post:</p>
<p>&nbsp;<a href="https://steemit.com/steemit/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api">SteemIt API Tool - Check If Your Followers Have Voted Your Post&nbsp;</a></p>
<p>And I provide a free API to use. To ensure the API are working correctly (4 API servers), I have written the following unit test by PHPUnit. As you can see, the unit tests are very important and luckily, it is not difficult to write with modern programming language and test frameworks.&nbsp;</p>
<p>Have you used TDD (Test Driven Development) in your daily work? Writing tests first isn't a bad thing and I would recommend this good practice.</p>
<p>在<a href="https://justyy.com/archives/4913">昨天我们说到可以通过调用这个API来</a>检查你的哪些Steem粉丝没有点赞你的文章:</p>
<p><a href="https://steemit.com/steemit/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api">撸了一个工具 - 快速检查你的粉丝到底有没有给你点赞！（带 免费API）</a></p>
<p>&nbsp;那我们怎么确保这个API的功能是正常能用的呢? 万一服务器挂掉了又或者之后更新代码不小心改错了. 这些都是可以通过单元测试来确保功能可以用的并且以前能用的功能和行为并没有发生改变.&nbsp;</p>
<p>&nbsp;特别是我提供了四台API服务器: 美国东部, 美国西部, 日本东京和英国伦敦, 那我需要每天定时跑些测试来确保API一切正常. 可以通过 Crontab 每天定时跑, 一旦有错误就发邮件提醒或者记录到事件中.&nbsp;</p>
<p>&nbsp;<a href="https://justyy.com/archives/3679">PHP是世界上最好的语言</a>, 通过phpunit 测试API的调用, 首先, 你需要安装 phpunit (<a href="https://phpunit.de/getting-started.html">官网安装说明</a>), 安装完后可以运行以下命令来确认: &nbsp;</p>
<pre><code>$ <strong>which</strong> phpunit<br>
<strong>/</strong>usr<strong>/</strong>local<strong>/</strong>bin<strong>/</strong>phpunit</code></pre>
<p>&nbsp;然后我们可以开始写一个简单的 PHP单元测试, 代码如下: &nbsp;</p>
<pre><code><strong>&lt;?php</strong><br>
<strong>use</strong> PHPUnit\Framework\TestCase;&nbsp;<br>
<br>
<strong>class</strong> SteemTestsWhoHasNotVoted <strong>extends</strong> TestCase {<br>
&nbsp; <strong>public</strong> <strong>function</strong> dataProvider() {<br>
&nbsp; &nbsp; <em>// list of API servers &nbsp; &nbsp;</em><br>
&nbsp; &nbsp; $servers = [<br>
&nbsp; &nbsp; &nbsp; &nbsp; ["happyukgo.com"],<br>
&nbsp; &nbsp; &nbsp; &nbsp; ["uploadbeta.com"],<br>
&nbsp; &nbsp; &nbsp; &nbsp; ["helloacm.com"],<br>
&nbsp; &nbsp; &nbsp; &nbsp; ["steakovercooked.com"]<br>
&nbsp; &nbsp; ]; &nbsp;<br>
&nbsp; &nbsp; return $servers;<br>
&nbsp; } &nbsp;<br>
<br>
&nbsp; &nbsp;<em>/**</em><br>
<em>&nbsp; &nbsp;* @dataProvider dataProvider</em><br>
<em>&nbsp; &nbsp;*/</em> &nbsp; &nbsp;<br>
&nbsp; <strong>public</strong> <strong>function</strong> simpleTest($domain) {<br>
&nbsp; &nbsp; $data = file_get_contents("https://<strong>$domain</strong>/api/steemit/who-has-not-voted/?url=https://steemit.com/steemit/@justyy/steemit-api-tool-check-if-your-followers-have-voted-your-post-api");<br>
&nbsp; &nbsp; $result = json_decode($data, <strong>true</strong>);<br>
&nbsp; &nbsp; $this-&gt;assertEquals("justyy", $result['id']);<br>
&nbsp; &nbsp; $this-&gt;assertTrue(is_array($result['who-has-not-voted-yet']));<br>
&nbsp; }<br>
}</code></pre>
<p>&nbsp;然后我们保存为 <em>steemit-who-has-not-voted-yet-api-test.php</em> 在同文件夹下执行以下命令: &nbsp;</p>
<pre><code>$ phpunit steemit-who-has-not-voted-yet-api-test.php<br>
PHPUnit 6.0.6 by Sebastian Bergmann and contributors.<br>
.... &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4 <strong>/</strong> 4 <strong>(</strong>100<strong>%)</strong><br>
<br>
Time: 13.09 seconds, Memory: 8.00MB<br>
OK <strong>(</strong>4 tests, 8 assertions<strong>)</strong></code></pre>
<p>&nbsp;PHPUnit 就会加载该PHP文件然后在执行代码中 TestCase的子类(测试类中的公开方法), 其中 dataProvider 定义了API服务器数组这样就不用为每个服务器各写一份代码了.&nbsp;</p>
<p>&nbsp;假设我们把测试方法 simpleTest中的 assertEquals 第一个参数改成 justyy1, 再执行一次, 则会报错 (F 表示 Failure 断言出错了, E表示程序方面的错 而点号则是测试通过). &nbsp;</p>
<pre><code>$ phpunit steemit-who-has-not-voted-yet-api-test.php<br>
PHPUnit 6.0.6 by Sebastian Bergmann and contributors.&nbsp;<br>
FFFF &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4 <strong>/</strong> 4 <strong>(</strong>100<strong>%)</strong><br>
<br>
Time: 7.83 seconds, Memory: 8.00MB<br>
There were 4 failures:<br>
<br>
1<strong>)</strong> SteemTestsWhoHasNotVoted::simpleTest with data <strong>set</strong> <em>#0 ('happyukgo.com')</em><br>
Failed asserting that two <strong>strings</strong> are equal.<br>
--- Expected<br>
+++ Actual<br>
<strong>@@</strong> <strong>@@</strong><br>
-'justyy1'<br>
+'justyy'<br>
&nbsp;<br>
<strong>/</strong>var<strong>/</strong>www<strong>/</strong>phptests<strong>/</strong>steemit-who-has-not-voted-yet-api-test.php:19&nbsp;<br>
2<strong>)</strong> SteemTestsWhoHasNotVoted::simpleTest with data <strong>set</strong> <em>#1 ('uploadbeta.com')</em><br>
Failed asserting that two <strong>strings</strong> are equal.<br>
--- Expected<br>
+++ Actual<br>
<strong>@@</strong> <strong>@@</strong><br>
-'justyy1'<br>
+'justyy'<br>
<strong>/</strong>var<strong>/</strong>www<strong>/</strong>phptests<strong>/</strong>steemit-who-has-not-voted-yet-api-test.php:19&nbsp;<br>
3<strong>)</strong> SteemTestsWhoHasNotVoted::simpleTest with data <strong>set</strong> <em>#2 ('helloacm.com')</em><br>
Failed asserting that two <strong>strings</strong> are equal.<br>
--- Expected<br>
+++ Actual<br>
<strong>@@</strong> <strong>@@</strong><br>
-'justyy1'<br>
+'justyy'&nbsp;<br>
<strong>/</strong>var<strong>/</strong>www<strong>/</strong>phptests<strong>/</strong>steemit-who-has-not-voted-yet-api-test.php:19<br>
4<strong>)</strong> SteemTestsWhoHasNotVoted::simpleTest with data <strong>set</strong> <em>#3 ('steakovercooked.com')</em><br>
Failed asserting that two <strong>strings</strong> are equal.<br>
--- Expected<br>
+++ Actual<br>
<strong>@@</strong> <strong>@@</strong><br>
-'justyy1'<br>
+'justyy'<br>
<strong>/</strong>var<strong>/</strong>www<strong>/</strong>phptests<strong>/</strong>steemit-who-has-not-voted-yet-api-test.php:19&nbsp;<br>
FAILURES<strong>!</strong><br>
Tests: 4, Assertions: 4, Failures: 4.</code></pre>
<p>&nbsp;是不是很简单? 平时写程序都得要有单元测试, 没有单元测试的项目都不算大项目, 甚至你可以先写测试用例, 定义好接口, 然后写完测试再写实现, 这也就是传说中的 TDD (Test Driven Development). 以下是我的一个个人写的项目所写的<a href="https://helloacm.com/how-to-unit-test-url-connectivity-via-phpunit/">单元测试</a>, 每天没事打开SSH跑一跑, 有一种快感.&nbsp;</p>
<p><img src="https://steakovercooked.com/static/blog/2017/phpunit.jpg" width="651" height="231"/></p>
<p>&nbsp;未完待续…&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Originally Published in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p><a href="https://justyy.com/archives/4917">原创首发</a> SteemIt, 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容。&nbsp;&nbsp;</p>
</html>

- - -

This page is synchronized from the post: [Learn PHPUnit by Example 通过例子学写 PHP单元测试来确保API功能正常](https://steemit.com/@justyy/learn-phpunit-by-example-php-cny-api)
