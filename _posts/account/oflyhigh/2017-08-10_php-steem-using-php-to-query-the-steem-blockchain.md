
---
title: '使用PHP查询STEEM区块链 / Using PHP to query the STEEM blockchain'
permlink: php-steem-using-php-to-query-the-steem-blockchain
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-10 12:56:54
categories:
- cn
tags:
- cn
- cn-programming
- steemdev
- php
- steem
thumbnail: https://steemitimages.com/DQmaQT5AF2xEzBRHk4SZWFJyRe4CGP54mzuc2bkHTk1i5aN/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmaQT5AF2xEzBRHk4SZWFJyRe4CGP54mzuc2bkHTk1i5aN/image.png)

话说，PHP是世界上最好的语言，咳咳。但是这个最好的语言，我大概有7-8年没有去使用了，现在几乎已经不会用啦。之前学习和写的和STEEM区块链相关的程序都是用的Python。今天突然冒出个想法，写个PHP访问STEEM区块链的简单的例子。然后，写的时候才发现，各种不习惯。其实Python我也没没学两天，PHP则正经八百的用过好长时间呢，结果我觉得我完全变成PHP初学者了。好在，这个语言还算好学。于是磕磕绊绊写了一个程序，然后发现各种不优雅，简化简化简化，简化成现在这个样子了。为了演示核心流程，不包含任何错误处理之类的。

PHP is one of the popular programming languages，today, I wrote a simple PHP script to query the STEEM blockchain.

#### PHP程序 / The Script

闲话少叙，直接上脚本

```
<?
class Steemd
{
    private $ch;
    function __construct(){
      $this->ch = curl_init();
      curl_setopt($this->ch, CURLOPT_URL, 'https://steemd.steemit.com');
      curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, TRUE);
    }

    function __destruct() {
      curl_close($this->ch);
    }

    private function json_rpc_body($method, $params){
        $request = array(
            "jsonrpc" => "2.0",
            "method" => $method,
            "params" => $params,
            "id" => 0
            );
        return json_encode($request);
    }

    public function exec($method, $params = array()) {
        $data = $this->json_rpc_body($method, $params);
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, $data);
        $response = curl_exec($this->ch);
        $response = json_decode($response, true);
        if (array_key_exists('error', $response)) {
          var_dump($response['error']);
          die();
        }
        return $response['result'];
    }

    public function get_account($account){
        $result = $this->exec('get_accounts', [[$account]]);
        return $result;
    }
}

$steemd = new Steemd;
echo('<pre>');
print_r($steemd->exec(get_chain_properties,[]));
print_r($steemd->get_account('oflyhigh'));
echo('</pre>');

//unset($steemd);
?>
```

# 简单解释 / Explain

程序分成两部分 
* Steemd类
* 测试代码

This script is divided into two parts， ***Steemd Class*** and ***some simple testing codes***


####  Steemd类 / Steemd Class 

使用PHP curl 来执行HTTP请求， 使用'https://steemd.steemit.com'作为请求节点。
I use curl to execute HTTP requests， use 'https://steemd.steemit.com' as RPC  node.

Steemd Class 提供两个接口，***exec***以及***get_account***
There are two methods provided by Steemd Class , ***exec*** and ***get_account***.

***exec***是底层接口，你可以直接调用这个接口来执行steem blockchain API 操作。
***exec*** is low level interface, you can call it directly to perform operations to query steem blockchain.

***get_account***是对***exe***的封装，对用户更加友好，它仅仅是一个封装示例，你可以封装更多的功能。
***get_account*** is a user friendly encapsulation for ***exe***, it just a example, you can encapsulate more functions yourself.

####  测试代码 / Testing codes

就是简单测试一下而已，没啥可以说的
用print_r让结果看起来更好看

Some simple testing codes to test Steemd class and two interfaces  ***exec*** and ***get_account***
Use print_r to make the results look better.

# 运行结果 / Results
![](https://steemitimages.com/DQmPzr2irGRSVXmsWqHdCqQbyN4UjQUzC9J6MqztTMVN1Jg/image.png)

----
![](https://steemitimages.com/DQmdpjTzeVuSzSFZW1gpsN1zxynHrsJCCytLFmpQJjJUQkT/image.png)
脚本仅供参考，使用风险自负！
This script is for reference only, use it at your own risk.

- - -

This page is synchronized from the post: [使用PHP查询STEEM区块链 / Using PHP to query the STEEM blockchain](https://steemit.com/@oflyhigh/php-steem-using-php-to-query-the-steem-blockchain)
