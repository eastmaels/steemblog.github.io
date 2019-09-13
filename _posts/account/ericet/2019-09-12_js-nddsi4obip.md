
---
title: '怎么用JS写个召唤机器人？'
permlink: js-nddsi4obip
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-12 18:28:45
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
thumbnail: 'https://files.steempeak.com/file/steempeak/ericet/yYg6Bsnu-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


你是否在STEEM上看到很多只需在回复输入命令就可以召唤来的机器人？

比如小卖部@teamcn-shop的机器人，只需输入!shop就可以召唤来送币或者送美食。

<img src="https://files.steempeak.com/file/steempeak/ericet/yYg6Bsnu-image.png" alt="image.png" /><br/>

看起来是不是很神奇？实现这种召唤机器人其实很简单。

实现只需要3步：
* 实时查看所有发布到STEEM链上的操作
* 查看是否有指定的关键词
* 如果有，自动回复

我们先来第一步，实时查看所有发布到STEEM链上的操作

steemjs 提供了一个function来获取实时发布到STEEM链上的操作：

<pre><code class="">steem.api.streamTransactions(mode, function(err, result) {
    console.log(err, result);
});
</code></pre>

利用这个function我们就可以开始获取实时发布到STEEM上的操作，代码如下：

<pre><code class="">function start() {
    steem.api.streamTransactions("head", function(err, result) {
        if (result &amp;&amp; !err) {
          console.log(result);//显示结果
        } 
    });
}
</code></pre>

运行上面的代码会显示所有发布到STEEM上的操作，比如转账，点赞，发帖，回复等。

但是我们只需要看回复的操作，所以我们需要过滤掉其他的操作，并且只看有发布指定关键词的回复。

具体实现如下：

<pre><code class="">    let txType = result.operations[0][0]; //获取操作类别
    let txData = result.operations[0][1];//获取操作内容
    if (txType == "comment") {//如果操作是回复
        let commentBody = txData.body;
    let mention= '!hello';
        if(commentBody.includes(mention)){
        console.log('hello');
    }
    }
</code></pre>

找到关键词后，你就可以让机器人自动回复了。
Steemjs提供broadcast function来实现回复/发帖：

<pre><code class="">steem.broadcast.comment (
    private_posting_wif,  //发帖密钥
    parent_author,        // 如果是发帖留空
    parent_permlink,      // 主标签
    author,               // 作者
    permlink,             // permlink
    title,                // 标题
    body,                 // 内容
    json_metadata         // json
)
</code></pre>

最后一步是，当有人回复了某个关键词后，机器人自动回复“HELLO”

代码如下：

<pre><code class="">    steem.broadcast.comment(
        "发帖密钥",
        txData.parent_author,
        txData.parent_permlink,
        "steem id",
        txData.permlink,
        "",
        "HELLO",
        '{"app":"bot"}',
        function(err, result) {
            console.log(err, result);
        });
</code></pre>

好了，一个只会回复HELLO的机器人就这样实现了。

把上面的三步骤合在一起的完整代码：

~~~
const steem = require("steem");
const steemid = 'steemid';
const postingKey = 'postingKey';

start();

function start() {
    steem.api.streamTransactions("head", function(err, result) {
        if (result &amp;&amp; !err) {
            let txType = result.operations[0][0];
            let txData = result.operations[0][1];
            let includesMention = checkContentForMention(txType, txData);
            if (includesMention) {
               reply(txData);
            }
        } else {
            console.log("Error found", err);
                start();
        }
    });
}

function checkContentForMention(txType, txData) {
    if (txType == "comment") {
        let commentBody = txData.body;
        let mention= '!hello';
        return (commentBody.includes(mention));
    }
}

function reply(txData) {
    steem.broadcast.comment(
        postingKey,
        txData.parent_author,
        txData.parent_permlink,
        steemid,
        txData.permlink,
        "",
        "text here",
        '{"app":"bot"}',
        function(err, result) {
            console.log(err, result);
        });
}
~~~




是不是很简单？好好利用上面的代码，可以玩出不同的花样，比如写个剪刀石头布机器人，比大小机器人，等等。

只有没想到，没有做不到~

发挥自己的想象力吧~

- - -

This page is synchronized from the post: ['怎么用JS写个召唤机器人？'](https://steemit.com/@ericet/js-nddsi4obip)
