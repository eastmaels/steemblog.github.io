
---
title: 'On-the-fly Conversion to Pinyin using Chrome Extension: ZH-CN (GB2312) <---> ZH-TW (BIG5)'
permlink: on-the-fly-conversion-to-pinyin-using-chrome-extension-zh-cn-gb2312-zh-tw-big5
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-29 01:09:54
categories:
- utopian-io
tags:
- utopian-io
- chrome-extension
- chinese
- cn
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1517187905/wuozrsjqmdrbqimvqwww.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[Simplified/Traditional Chinese](https://helloacm.com/on-the-fly-conversion-to-pinyin-using-chrome-extension-zh-cn-gb2312-zh-tw-big5/) is a chrome Extension that allows you to convert from ZH-CN (GB2312) to ZH-TW(BIG5) and vice versa.

Chrome Webstore: [Simplified/Traditional Chinese](https://chrome.google.com/webstore/detail/%E7%AE%80%E4%BD%93%E7%B9%81%E4%BD%93%E8%BD%AC%E6%8D%A2-simplifiedtraditio/olpihmabpjpllgmahlgiakkgaccigpfo)

I developed this tool because I feel more conformable in reading [Simplified Chinese](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/) and I believe some others prefer the Traditional Chinese.

Today, I have added a feature to convert Chinese characters (either in Simplified or Traditional Chinese) to Pinyin, which is used to pronounce the character characters.

# UI Change
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517187905/wuozrsjqmdrbqimvqwww.png)

# How it works
For example, refresh the page, will convert the following:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517187961/yzgwi8qqojjw2fo3ycqt.png)

 to:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517187979/vtjjj8jszoddw2tyzjqo.png)

# Technology Stack
Chrome Extension, Javascript.

# Commits
Github: https://github.com/DoctorLai/Simplified-and-Traditional-Chinese
[This commit](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/commit/ef185683de46c9e3ea597b4e877ef0bf9481c066#diff-bf5d8bd496c5783a45bd13aec64829eb) with some code formatting. 

```
let testChinese = (cc, i) => {
	return (cc.charCodeAt(i) > 10000);
}

function Pinyin(cc) {	
	let str = '';
	for (let i = 0; i < cc.length; ++ i) {
		if (testChinese(cc, i)) {
			if (cc[i] in pinyin_data) {
				let ts = pinyin_data[cc[i]];
				ts = ts.split(',')[0].slice(0, -1);
				str += ts[0].toUpperCase();
				str += ts.substring(1);
				str += " ";
			} else {
				str += cc[i];
			}
		} else {
  			str += cc[i];
  		}
	}
	return str.trim();
}
```


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/on-the-fly-conversion-to-pinyin-using-chrome-extension-zh-cn-gb2312-zh-tw-big5">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [On-the-fly Conversion to Pinyin using Chrome Extension: ZH-CN (GB2312) <---> ZH-TW (BIG5)](https://steemit.com/@justyy/on-the-fly-conversion-to-pinyin-using-chrome-extension-zh-cn-gb2312-zh-tw-big5)
