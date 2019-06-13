
---
title: 'NPM Library - Convert between Simplified Chinese (zh-cn) and Traditional Chinese (zh-tw)'
permlink: npm-library-convert-between-simplified-chinese-zh-cn-and-traditional-chinese-zh-tw
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-28 22:11:24
categories:
- utopian-io
tags:
- utopian-io
- simplified-chinese
- traditional-chinese
- npm-js
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514498865/pioo5ulttdhsgcc7t5gb.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Github: https://github.com/DoctorLai/zh_cn_zh_tw
Published NPM Project URL: https://www.npmjs.com/package/zh_cn_zh_tw

Some time ago, I have published a Chrome extension ([Google Webstore here](https://chrome.google.com/webstore/detail/olpihmabpjpllgmahlgiakkgaccigpfo)) to convert the [Simplified Chinese and Traditional Chinese](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/) on the fly without showing any third party e.g. Google translate. It got much interests and I decide to make the core conversion a JS Library so everybody can use.

This is actually my first published NPM JS Library as you can see on the project URL. To prove it work, you can go to:  https://npm.runkit.com/zh_cn_zh_tw

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514498865/pioo5ulttdhsgcc7t5gb.png)

As seen in the above example, here is the sample code shows how we can use this library:

```
var convertor = require('zh_cn_zh_tw');
var zh_cn = convertor.convertToSimplifiedChinese;
var zh_tw = convertor.convertToTraditionalChinese;
console.log(zh_cn("夢")); // convert to 梦
console.log(zh_tw("梦")); // convert to 夢
```

You can install the package via:

```
npm install zh_cn_zh_tw
```

and run the tests via:

```
npm test
```
The tests:

```
var should = require('chai').should(),
    convertor = require('../index'),
    zh_cn = convertor.convertToSimplifiedChinese,
    zh_tw = convertor.convertToTraditionalChinese;
describe('zh_cn', function() {
  it('converts 夢', function() {
    zh_cn('夢').should.equal('梦');
  });
  it('converts 梦', function() {
    zh_cn('梦').should.equal('梦');
  });  
});
describe('zh_tw', function() {
  it('converts 梦', function() {
    zh_cn('梦').should.equal('夢');
  });
  it('converts 夢', function() {
    zh_cn('夢').should.equal('夢');
  });  
});
```

## Proof of Work
`doctorlai` is my github ID and you can see the steemit URL written on the github home page. Also, NPM project page has listed my gravatar and ID.


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/npm-library-convert-between-simplified-chinese-zh-cn-and-traditional-chinese-zh-tw">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [NPM Library - Convert between Simplified Chinese (zh-cn) and Traditional Chinese (zh-tw)](https://steemit.com/@justyy/npm-library-convert-between-simplified-chinese-zh-cn-and-traditional-chinese-zh-tw)
