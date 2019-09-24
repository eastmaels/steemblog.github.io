
---
title: '怎么用JS写个STEEM转账程序？'
permlink: jssteem-gnsdaiwklj
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-23 20:39:48
categories:
- cn
tags:
- cn
- cn-reader
- whalepower
- cn-stem
- steemstem
- cn-programming
- build-it
- steemleo
- jjm
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- sct
- sct-cn
- sct-freeboard
- busy
thumbnail: 'https://cdn.pixabay.com/photo/2018/08/06/20/49/money-transfer-3588301_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center><img src="https://cdn.pixabay.com/photo/2018/08/06/20/49/money-transfer-3588301_960_720.jpg" alt="" /><br/>
(Image source: <a href="https://cdn.pixabay.com/photo/2018/08/06/20/49/money-transfer-3588301_960_720.jpg">Pixabay</a>)</center>

有没有好奇NBC每日的自动分红程序是怎么实现的？或者那些给很多账号发送0.001 STEEM打小广告的程序是怎么实现的？

在steemjs里，提供了一个function用于转账：

<pre><code class="">steem.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
</code></pre>

你只需填入相应的信息就可以进行转账了。比如我想给team-cn发送0.001 STEEM，并留言hello：

<pre><code class="">steem.broadcast.transfer(活动密钥, ericet, team-cn, '0.001 STEEM', 'hello', function(err, result) {
  console.log(err, result);
});
</code></pre>

只需几行代码，一个简单的转账程序就写好了。

是不是有点过于简单？那加点难度，比如给多个账号发送0.001 STEEM，就像打小广告的程序一样：

~~~
const steem = require('steem');
const accounts =['team-cn','steem-drivers','teamcn-shop']; //要转账的账号
const myAccount='ericet'; //你的账号
const wif='活动密钥';
const memo='hello'; //附言


for (let i in accounts) {
    transfer(accounts[i]);
}
function transfer(account) {
    steem.broadcast.transfer(wif, myAccount, account, '0.001 STEEM', memo, function (err, result) {
        console.log(err, result);
    });
}
~~~

运行以上代码，就会自动给team-cn,steem-drivers和teamcn-shop转0.001 STEEM并且附言“hello”：

<img src="https://files.steempeak.com/file/steempeak/ericet/7mfmN1rI-image.png" alt="image.png" /><br/>

是不是很简单？

<hr />

STEEM编程系列：
* <a href="https://www.steemcn.org/cn/@ericet/js">怎么用JS写个自动点赞程序？</a>
* <a href="https://www.steemcn.org/cn/@ericet/js-nddsi4obip">怎么用JS写个召唤机器人？</a>

- - -

This page is synchronized from the post: ['怎么用JS写个STEEM转账程序？'](https://steemit.com/@ericet/jssteem-gnsdaiwklj)
