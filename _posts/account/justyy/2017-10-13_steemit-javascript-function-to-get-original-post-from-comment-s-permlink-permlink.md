
---
title: 'SteemIt: Javascript Function to Get Original Post from Comment''s PermLink - 如何从评论的 PermLink 得到原文的链接？'
permlink: steemit-javascript-function-to-get-original-post-from-comment-s-permlink-permlink
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-13 18:16:48
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- javascript
- steemdev
thumbnail: https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png)
*Image Credit: Pixabay.com*

@nationalpark suggests me add 'original post URL' in my tool: [SteemIt Tool to Recover Deleted Comments/Posts](https://helloacm.com/tools/steemit/list-of-deleted-comments/) , and here is the way that a permlink for a comment is organized.

For example, 

`re-tvb-re-justyy-re-tvb-45qr3w-20171011t144205534z`

If we split the permlink string by '-',  the last group is obviously the timestamp which we can discard. The rest are in the form of 're-author' where the last group is the original author. 

We can split the string and handle the logics straightforward, but the best way is to use the regular expression to match this pattern. The following is the [Javascript](https://helloacm.com/how-to-auto-complete-comment-form-using-javascript/) script function that does the job.

```
var restore = function(url) {
	var pat = /(re-\w+-)*((\w+\-)*)/g;
	var my = pat.exec(url);
	if (my[1] && my[2]) {		
		var author = my[1].split('-')[1];
		var link = my[2].slice(0, -1);
		return 'https://steemit.com/@' + author + '/' + link;
	}
	return null;
}
```

For example, 

```
console.log("re-tvb-re-justyy-re-tvb-45qr3w-20171011t144205534z");
```

The original steemit post URL is given:
`"https://steemit.com/@tvb/45qr3w"`


![](https://cdn.pixabay.com/photo/2016/06/29/09/29/code-1486361_960_720.jpg)
*Image Credit: Pixabay.com*
----------------------------------------------------------


昨天， @nationalpark 建议在我那工具： [Steemit 查看被删除的评论](https://helloacm.com/tools/steemit/list-of-deleted-comments/) 里加上原文的链接，并且告诉我如何从评论的 permlink 得到原文的链接，比如：

`re-tvb-re-justyy-re-tvb-45qr3w-20171011t144205534z`

如果把字符串以 连接符 - 分组，那么最后一个显示是时间 (timestamp), 评论会以 re-作者- 这种方式连接，而最后一组re-tvb 中表示  tvb 是作者,  然后  justyy 回复了，然后 tvb 又回复了。

我们可以写一个函数用 split 分组然后再依次处理，但是有点麻烦，最简单的方法就是按正则表达式，\w 匹配字母,  () 取得分组, \* 表示匹配0个或多个, + 匹配1个或多个.

用 [Javascript](https://justyy.com/archives/1551) 来写就是:

```
var restore = function(url) {
	var pat = /(re-\w+-)*((\w+\-)*)/g;
	var my = pat.exec(url);
	if (my[1] && my[2]) {		
		var author = my[1].split('-')[1];
		var link = my[2].slice(0, -1);
		return 'https://steemit.com/@' + author + '/' + link;
	}
	return null;
}
```

比如：

```
console.log("re-tvb-re-justyy-re-tvb-45qr3w-20171011t144205534z");
```

输出STEEMIT原文链接：
`"https://steemit.com/@tvb/45qr3w"`


> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

-------------------
> [如何从评论的 PermLink 得到原文的链接(Javascript)？](https://justyy.com/archives/5465)
> [Get Original Post from Comment’s PermLink](https://helloacm.com/steemit-javascript-function-to-get-original-post-from-comments-permlink/)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [SteemIt: Javascript Function to Get Original Post from Comment''s PermLink - 如何从评论的 PermLink 得到原文的链接？](https://steemit.com/@justyy/steemit-javascript-function-to-get-original-post-from-comment-s-permlink-permlink)
