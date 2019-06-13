
---
title: 'The API Converts Chinese Characters to Pinyin'
permlink: the-api-converts-chinese-characters-to-pinyin
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-13 21:52:48
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- pinyin
- api
- chinese-characters
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Each Chinese Character has a tone and can be expressed using alphabet letters (namely the Pinyin), for example:

`我, prounced as wo (the third tone).`

and 你好, the famous way of saying Hello in Chinese sounds like: `Ni Hao`  both Pinyin are the third tone.

In this project, I have developed a PHP - API which allows you to quickly convert a set of Chinese characters to its Pinyin expressions. This API is also live at:

`https://helloacm.com/api/pinyin/?cached&s=你好`

It will return JSON:

```
{"result":["ni","hao"]}
```

You can also pass `t=1` parameter to get its tones:

https://helloacm.com/api/pinyin/?cached&s=你好&t=1

which will return:

```
{"result":["ni3","hao3"]}
```

The Chinese tool page is: https://justyy.com/archives/3450
The github source is: https://github.com/DoctorLai/ChineseToPinYin

# PHP API
The PHP API source code:

```
<?php
// https://justyy.com/archives/3450
  $s = '';
  if (isset($_GET['s'])) {
     $s = $_GET['s'];
  } else {
    if (isset($_POST['s'])) {
     $s = $_POST['s'];
    }
  }
  $t = false;
  if (isset($_GET['t'])) {
    $t = (bool)($_GET['t']);
  } else {
    if (isset($_POST['t'])) {
     $t = (bool)($_POST['t']);
    }  
  }
  $data = array();
  $db = 'pinyin.txt';
  if (is_file($db)) {
    $result = array();
    $array = preg_split('/$\R?^/m', trim(file_get_contents($db)));
    $hash = array();
    foreach ($array as $v) {
      $v = trim($v);
      $c = substr($v, 0, 3);
      $hash[$c] = substr($v, 3);  
    }
    $slen = mb_strlen($s,'UTF-8');
    for ($i = 0; $i < $slen; $i ++) {
      $c = mb_substr($s, $i, 1);
      $tmp = $hash[$c];
      if (!$t) {
        $tmp = str_replace(array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), '', $tmp);
      }
      if ($tmp) {
        $result[] = $tmp;
      } else {
        $result[] = $c;
      }
    }
    $data['result'] = $result;
  } else {
    $data['error'] = 'cannot read data';
  }  
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');
  die(json_encode($data));
```

# Proof of Work
My github ID is `doctorlai` and on the profile page, it has my steemit shown.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/the-api-converts-chinese-characters-to-pinyin">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [The API Converts Chinese Characters to Pinyin](https://steemit.com/@justyy/the-api-converts-chinese-characters-to-pinyin)
