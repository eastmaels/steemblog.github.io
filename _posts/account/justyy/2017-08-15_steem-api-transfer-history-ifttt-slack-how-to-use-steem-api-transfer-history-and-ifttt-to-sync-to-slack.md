
---
title: '如何使用Steem API/transfer-history和IFTTT同步到Slack消息? How to Use Steem API/transfer-history and IFTTT to sync to Slack?'
permlink: steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-15 11:51:33
categories:
- cn
tags:
- cn
- cn-programming
- programming
- steemit
- api
thumbnail: https://justyy.com/wp-content/uploads/2017/08/ifttt-configure.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This post, I show you how to use the [Steem API/transfer-history](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api) and the [IFTTT](https://helloacm.com/how-to-save-gmail-attachments-backup-to-dropbox-folder-using-ifttt/) to sync the wallet activities to your Slack so you can get messages/updates pushed to your specific Slack channel.

在[上回的帖子里](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)，我介绍了一API，但是很多人不清楚如何使用，或者说，到底能拿来干啥。今天我就介绍一个小应用。 

我们公司用的内部聊天软件是[SLACK](https://justyy.com/archives/3751)，这玩意可以开放API给第三方，可以整合很多其它工具，特别是可以用[IFTTT](https://justyy.com/archives/4213) (If This Then That) 来连接其它的工具。

比如，我就想，如果别人给我帐号里送钱了，我想第一时间知道，而不是时不时的去刷 steemit.com 的钱包页面。我想这个消息能自动的推送到我公司用的聊天工具  [Slack](https://justyy.com/archives/3705) 上。

怎么用？很简单，首先你需要在你的机器（可以是服务器）上创建一个脚本，比如PHP脚本 （假设文件名为 check-transfer-history.php）：

```
<?php
$id = 'justyy';
$tx = json_decode(file_get_contents("https://uploadbeta.com/api/steemit/transfer-history/?id=" . $id), true);
foreach ($tx as $r) {
  $t =  $r['time'];
  $desc = $r['time_desc'];
  $memo = $r['memo'];
  $tx = $r['transaction'];
  if (preg_match('/(\d)+\s+(second|minute|hour)s? ago/i', $desc, $matches)) {
    if (
          ($matches[2] == 'second') || 
          (($matches[2] == 'minute') && ($matches[1] == '1'))
    ) { // 这里只捕获2分钟内的消息 可以根据你的需求更改
      $cmd = 'curl -s -X POST -H "Content-Type: application/json" -d \'{"value1":"'.$desc.'","value2":"'.$tx.'","value3":"'.$memo.'"}\' https://maker.ifttt.com/trigger/{steemit_transfer}/with/key/YOUR_APP_KEY';
      echo $cmd;
      shell_exec($cmd);             
    }    
  } else {
    break;
  }
}
```

这里需要替换的是第一行你的STEEM ID 和 你的 YOUR_APP_KEY, 这个值是 IFTTT 里的 Web Request 频道。 然后 接下来你需要 在 [IFTTT](https://justyy.com/archives/1507)里添加应用 Slack , 并且创建一个规则：

![](https://justyy.com/wp-content/uploads/2017/08/ifttt-configure.jpg)

可以看到，我们可以传入3个值，那么就可以根据 steemit/transfer-history 提供的时间，事件和MEMO依次定制这些消息。

然后我们需要把上面那个PHP脚本 添加到 [crontab](https://justyy.com/archives/1586) 里  *crontab -e*  这里2分钟运行脚本进行检查，2分钟和上面PHP脚本里是对应的。

```
*/2 * * * * php /path/to/check-transfer-history.php   
```

然后呢，我们试验一下， 我试着给我媳妇 @happyukgo 发了钱

![](https://justyy.com/wp-content/uploads/2017/08/send-message.jpg)

然后 2分钟内就收到了推送：

![](https://justyy.com/wp-content/uploads/2017/08/slack-receive-messages-via-ifttt.jpg)

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍候同步到我的[中文博客](https://justyy.com)和[英文博客](https://codingforspeed.com)。
-  [如何使用Steem API/transfer-history和IFTTT同步到Slack消息?](https://justyy.com/archives/5072)
-  [How to Use Steem API/transfer-history and IFTTT to sync to Slack?](https://helloacm.com/how-to-use-steem-apitransfer-history-and-ifttt-to-sync-to-slack/)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)
- [机器学习 用 MySQL 来演示 KNN算法 The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL](https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [如何使用Steem API/transfer-history和IFTTT同步到Slack消息? How to Use Steem API/transfer-history and IFTTT to sync to Slack?](https://steemit.com/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
