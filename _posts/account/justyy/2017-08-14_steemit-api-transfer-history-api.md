
---
title: 'SteemIt API/transfer-history 最简单获取帐号钱包记录的API'
permlink: steemit-api-transfer-history-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-14 20:14:18
categories:
- cn
tags:
- cn
- cn-programming
- programming
- steemit
- api
thumbnail: https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


SteemIt API/transfer-history is made available to public, free of charge, on four API servers world wide.


今天我又想做一个小功能需要查询STEEM用户的钱包历史，结果又发现官方的API示例不够简单。挺麻烦的，查了半小时后没有得到自己想要的，于是果断直接爪取[SteemIt](https://justyy.com/archives/5051)线上的网页。在这里先感谢 SteemIt.com 不阻止[PHP](https://justyy.com/archives/3679)直接抓取。

Let's have a quick look on how to use this API
首先我们先来看看效果吧：

```
curl -X POST -d "id=justyy" https://uploadbeta.com/api/steemit/transfer-history/
```

It will soon returns a JSON-encoded string, with a first few lines that look like this:
很快的，就能返回一串JSON字符串，取前面几行，大概是这样的结构：

```
[{"time":"8\/14\/2017, 6:37:15 PM",
"time_desc":"1 hour ago",
"transaction":"Claim rewards: 8.203 SBD and 6.842 STEEM POWER",
"memo":""},
{"time":"8\/14\/2017, 6:00:12 PM",
"time_desc":"2 hours ago",
"transaction":"Claim rewards: 0.052 STEEM POWER",
"memo":""},... ...
```

And, here is how you use it in your production code.
怎么样，够好用吧，你直接可以用银河系里最好用的[PHP语言](https://justyy.com/archives/3637)这样来获取：

```
$id = 'justyy';
$tx = json_decode(file_get_contents("https://uploadbeta.com/api/steemit/transfer-history/?id=" . $id), true);
foreach ($tx as $r) {
  echo $r['time'];
  echo $r['time_desc'];
  echo $r['memo'];
  echo $r['transaction'];
}
```

# SteemIt API/transfer-history 服务器
Like the [API/steemit/account API](https://helloacm.com/how-to-retrieve-steemit-account-information-via-api-steemitaccount/), Four servers can also be chosen depending on your locations:
和 [SteemIt API/account](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api) 一样，一共有4个API服务器已经正常运行很多年。

- 美国东部 (East USA)：https://helloacm.com/api/steemit/transfer-history/
- 美国西部 (West USA)：https://steakovercooked.com/api/steemit/transfer-history/
- 日本东京 (Tokyo Japan)：https://happyukgo.com/api/steemit/transfer-history/
- 英国伦敦 (London, UK)：https://uploadbeta.com/api/steemit/transfer-history/

# Using CloudFlare CDN Edge Server 使用缓存服务器来提速
You could also use [CloudFlare CDN Edge](https://helloacm.com/how-to-cache-audiovideo-mp4-using-cloudflare-cdn/) servers to speed up the API requests by caching it on the edge servers, you need to use it like this:

```
/api/steemit/transfer-history/?cached&id=justyy
```

您需要使用 /api/steemit/transfer-history/**?cached**&id=justyy 的形式利用[CloudFlare CDN](https://justyy.com/archives/3400)节点来加速。

# How it works? 原理
The following shows how easy it is to grab the page directly using phpQuery.
很简单，通过 [phpQuery](https://justyy.com/archives/2470) 抓取 
```
compress.zlib://https://steemit.com/@$id/transfers
```

因为 steemit.com 返回是gzip 压缩的，所以需要指定 **compress.zlib://**

原代码如下:  Full [PHP Source Code](https://helloacm.com/simple-php-function-to-display-daily-bing-wallpaper/):

```
  $id = $_GET['id'] ?? (($_POST['id']) ?? '');
  require_once('phpQuery.php');
  function getTransfer($id) {
    $doc = phpQuery::newDocumentFile("compress.zlib://https://steemit.com/@$id/transfers");
    $arr = array();
    foreach(pq('tr.Trans') as $p) {
      $tx = array();
      $x = pq($p);
      $tx['time'] = $x->find('td:first>span')->attr('title');
      $tx['time_desc'] = trim(strip_tags($x->find('td:first')->html()));
      $tx['transaction'] = trim(strip_tags($x->find('td:eq(1)')->html()));
      $tx['memo'] = trim(strip_tags($x->find('td:eq(2)')->html()));
      $arr[] = $tx;             
    }
    return $arr;
  }
  $data = getTransfer($id);
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');
  die(json_encode($data));
```

I'll show you some simple applications tomorrow of using these APIs.
就这样，接下来明天我会写些小程序，让你们瞧瞧，这样的调用方式是多么的方便和快捷！

[如何使用Steem API/transfer-history和IFTTT同步到Slack消息? How to Use Steem API/transfer-history and IFTTT to sync to Slack?](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.

原创首发于 https://steemit.com 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy  能激励我创作更多更好的内容.   

 // 稍候同步到我的[中文博客](https://justyy.com)和[英文博客](https://helloacm.com)。  
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://justyy.com/archives/5070)
- [How to Get Transfer History of SteemIt Accounts via SteemIt API/transfer-history?](https://helloacm.com/how-to-get-transfer-history-of-steemit-accounts-via-steemit-apitransfer-history/)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [如何使用Steem API/transfer-history和IFTTT同步到Slack消息? How to Use Steem API/transfer-history and IFTTT to sync to Slack?](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)
- [机器学习 用 MySQL 来演示 KNN算法 The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL](https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/@justyy/steemit-api-transfer-history-api)
