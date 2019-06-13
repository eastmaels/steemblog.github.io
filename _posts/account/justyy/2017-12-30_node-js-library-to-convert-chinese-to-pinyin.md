
---
title: 'Node JS Library to Convert Chinese to Pinyin'
permlink: node-js-library-to-convert-chinese-to-pinyin
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-30 16:52:48
categories:
- utopian-io
tags:
- utopian-io
- chinese
- pinyin
- npm
- javascript
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514652724/e9ahiwjs91ypn8ps27ab.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When sending parcels [from UK to China](https://happyukgo.com), you are often required to put 'Pinyin' addresses apart from Chinese address. The Pinyin is to allow tracking put into the system. Recently, I am developing a web application that requires this feature and I am exposing this feature in a public NPM library, so this can be re-used later by other developers.

Github: https://github.com/DoctorLai/chinese_pinyin
NPM Project: https://www.npmjs.com/package/chinese_pinyin

# Installation
```
npm install chinese_pinyin
```

# Sample Usage
```
var pinyin = require('chinese_pinyin');
console.log(pinyin("你好，我是 @justyy"));
```
This will output:
```
"ni hao ，wo shi @justyy"
```

# Dependency
None.

# Test in your browser
https://npm.runkit.com/chinese_pinyin

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514652724/e9ahiwjs91ypn8ps27ab.png)

# Core Code
```
'use strict';
var fs = require('fs');
var contents = fs.readFileSync(__dirname + '/data/pinyin.txt', 'utf8');
var arr = contents.split(/\r?\n/);
var table = [];
arr.forEach(function(e) {
	var cc = e.substr(0, 1);
	var pp = e.substr(1).split(',')[0].slice(0, -1);
	table[cc] = pp;
});
const pinyin = (s) => {
	var ns = '';
	var len = s.length;
	for (var i = 0; i < len; ++ i) {
		ns += table[s[i]] ? (table[s[i]] + " ") : s[i];
	}
	return ns.trim();
}
module.exports = pinyin;
```

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/node-js-library-to-convert-chinese-to-pinyin">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Node JS Library to Convert Chinese to Pinyin](https://steemit.com/@justyy/node-js-library-to-convert-chinese-to-pinyin)
