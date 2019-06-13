
---
title: 'How to Write Chrome Bookmark Scripts? - Step by Step Tutorial with a SteemIt Example 怎么样写 Chrome 书签程序？'
permlink: how-to-write-chrome-bookmark-scripts-step-by-step-tutorial-with-a-steemit-example-chrome
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-16 23:44:42
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn-programming
- cn
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516143972/oomkf1lljj5nlpjleio8.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This tutorial is bilingual, English first and Simplified Chinese next. 

## What Will I Learn?
Chrome browser is so powerful that you can write a few gadgets using Javascript for [Chrome bookmarks](https://helloacm.com/create-a-shortcutbookmark-in-chrome-to-the-links-shortener-using-javascript/).

- You will learn what is a chrome bookmark script
- You will learn how to write chrome bookmark script
- You will learn the SteemIt example to show the real time Voting Power and Reputation for a user.

## Requirements
In order to proceed with this tutorial, you will need to have:

- a installed Chrome browser
- basic [Javascript](https://helloacm.com/steemit-javascript-function-to-get-original-post-from-comments-permlink/) knowledge

## Difficulty
Intermediate

## Tutorial Contents
Chrome browser has a bookmarks bar that you can turn it on by:

1. type `chrome://settings/` at URL bar
2. turn it on by enabling `Show bookmarks bar`

You can drag any URLs to the bookmarks. However, the most powerful part is that you can add Javascript code to your bookmarks.

To add a Bookmark, you can:

1. type `chrome://bookmarks/` at URL bar
2. right click the top right icon and select `Add New Bookmark`
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516143972/oomkf1lljj5nlpjleio8.png)

At the prompt up dialog, you can choose a bookmark name and type in javascript code that starts with `javascript:` 

For example, the following will add a bookmark `test` and if you click on it, the javascript code will be executed that leads to my steemit profile page.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144093/y3avrpms8kk6wfn8nxcr.png)

### SteemIt Voting Power and Reputation Checker
Let's continue with a more advanced example. I have provided two APIs to retrieve the voting power and reputation in full digits:

1. `https://helloacm.com/api/steemit/account/reputation/?id=justyy`  that will return a number indicating the reputation for the given user.
2. `https://helloacm.com/api/steemit/account/vp/?id=justyy`  that will return a number indicating the voting power for the given user.

So, the design is, if we first click the bookmark, it will ask for the steem id, which will be stored in chrome's `localStorage` object. Once the browser remembers the steem id, it will fetch these two data from these two separate APIs.

The first part is to ask for ID and remember it. The javascript code is:

```
var steem_id = localStorage.getItem("steem_id");
if (steem_id == null) {
	steem_id = prompt("Please enter your SteemId");	
	localStorage.setItem("steem_id", steem_id);
}
```

Next, we are going to use `fetch` and `then` (the Javascript Promises) to chain these two events. 

```
if (steem_id != null) {
	fetch('https://helloacm.com/api/steemit/account/reputation/?id=' + steem_id, {mode: 'cors'})
	.then(validateResponse)
	.then(readResponseAsJSON)
	.then(function(rep) {
		fetch('https://helloacm.com/api/steemit/account/vp/?id=' + steem_id, {mode: 'cors'})
		.then(validateResponse)
		.then(readResponseAsJSON)
		.then(function(vp) {
			var msg = "ID: " + steem_id + "\n" + 
					  "Reputation: " + rep + "\n" +
					  "Voting Power: " + vp;
			alert(msg);
		})
	})
}
```

The `validateResponse` is defined as follows that checks if the API is available and returns correct responses:

```
function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
```

The `readResponseAsJSON` is just to return the text as JSON

```
function readResponseAsJSON(response) {
  return response.json();
}
```

And you just need to copy the entire Javascript to the bookmark contents (remember to insert at the begining `javascript:`.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144961/ud6nbwjpctu0zcho5xty.png)

Now, if you click it, it will ask you for the ID.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144753/lahfbuuyzvdfxxcvctqm.png)

Then, this small tool will show your realtime voting power and reputation by just one click.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144767/hwycpqzwqtdklwmwvfee.png)

Entire piece of [bookmark code](https://helloacm.com/how-to-write-chrome-bookmark-scripts-step-by-step-tutorial-with-a-steemit-example/) to take-away:
```
javascript:
var steem_id = localStorage.getItem("steem_id");
if (steem_id == null) {
	steem_id = prompt("Please enter your SteemId");	
	localStorage.setItem("steem_id", steem_id);
}

function readResponseAsJSON(response) {
  return response.json();
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

if (steem_id != null) {
	fetch('https://helloacm.com/api/steemit/account/reputation/?id=' + steem_id, {mode: 'cors'})
	.then(validateResponse)
	.then(readResponseAsJSON)
	.then(function(rep) {
		fetch('https://helloacm.com/api/steemit/account/vp/?id=' + steem_id, {mode: 'cors'})
		.then(validateResponse)
		.then(readResponseAsJSON)
		.then(function(vp) {
			var msg = "ID: " + steem_id + "\n" + 
					  "Reputation: " + rep + "\n" +
					  "Voting Power: " + vp;
			alert(msg);
		})
	})
}
```
---------------------------------------
## 您将学到什么？
Chrome 浏览器支持添加[书签](https://justyy.com/archives/1021)，通过这个教程您将：

- 学到什么是Chrome浏览器书签
- 如何添加一个Chrome浏览器书签
- 学到一个取[STEEM能量](https://justyy.com/archives/5873)和[声誉](https://justyy.com/archives/5239)的书签示例

## 需求
看懂[本教程](https://justyy.com/archives/5876)，您需要：

- 安装并使用Chrome浏览器
- 最基本的[Javascript](https://justyy.com/archives/5465)知识

## 难度
中等偏易

## 教程
您可以通过以下步骤打开 书签显示：

1. 在地址栏里输入 `chrome://settings/`
2. 勾上 `Show bookmarks bar`

书签可以是网址，也可以是Javascript 小程序。添加一个书签，您需要：

1. 在地址栏输入 `chrome://bookmarks/` 
2. 右键点击右上角的 `Add New Bookmark`

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516143972/oomkf1lljj5nlpjleio8.png)

然后在弹出的添加书签窗口，输入书签名称和内容，如果是Javascript小程序则代码需要以 `javascript:` 开始。

比如，以下会添加一个名叫 `test` 的书签，并且，如果你点击它，它会导到我的SteemIt 页面

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144093/y3avrpms8kk6wfn8nxcr.png)

### 获取能量和等级的书签程序
为了这个例子，我写了两个API

1. `https://helloacm.com/api/steemit/account/reputation/?id=justyy`  获取等级。
2. `https://helloacm.com/api/steemit/account/vp/?id=justyy`  获取投票的能量。

接下来就是设计了，当我们第一次运行这个书签，程序会让我们输入ID，然后书签就会记住了。这可以通过 Chrome 的 `localStorage` 对象。当有了这个ID 我们就可以通过API依次获取我们需要的数据。

第一部分的代码为：

```
var steem_id = localStorage.getItem("steem_id");
if (steem_id == null) {
	steem_id = prompt("Please enter your SteemId");	
	localStorage.setItem("steem_id", steem_id);
}
```

然后，我们可以通过 `fetch` 和 `then` (Javascript Promises) 把事件串联起来。

```
if (steem_id != null) {
	fetch('https://helloacm.com/api/steemit/account/reputation/?id=' + steem_id, {mode: 'cors'})
	.then(validateResponse)
	.then(readResponseAsJSON)
	.then(function(rep) {
		fetch('https://helloacm.com/api/steemit/account/vp/?id=' + steem_id, {mode: 'cors'})
		.then(validateResponse)
		.then(readResponseAsJSON)
		.then(function(vp) {
			var msg = "ID: " + steem_id + "\n" + 
					  "Reputation: " + rep + "\n" +
					  "Voting Power: " + vp;
			alert(msg);
		})
	})
}
```

`validateResponse` 函数用于检查API是否返回正确。

```
function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
```

 `readResponseAsJSON`把数据转换成JSON格式。

```
function readResponseAsJSON(response) {
  return response.json();
}
```

然后，您只需要把整段JAVASCRIPT代码（记得在最开始添加`javascript:`）拷贝到书签内容即可。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144961/ud6nbwjpctu0zcho5xty.png)

来，测试一下（第一次会要求输入ID）：
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144753/lahfbuuyzvdfxxcvctqm.png)

然后，只需要点击一次就可以获得能量和等级。
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516144767/hwycpqzwqtdklwmwvfee.png)

整段代码：
```
javascript:
var steem_id = localStorage.getItem("steem_id");
if (steem_id == null) {
	steem_id = prompt("Please enter your SteemId");	
	localStorage.setItem("steem_id", steem_id);
}

function readResponseAsJSON(response) {
  return response.json();
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

if (steem_id != null) {
	fetch('https://helloacm.com/api/steemit/account/reputation/?id=' + steem_id, {mode: 'cors'})
	.then(validateResponse)
	.then(readResponseAsJSON)
	.then(function(rep) {
		fetch('https://helloacm.com/api/steemit/account/vp/?id=' + steem_id, {mode: 'cors'})
		.then(validateResponse)
		.then(readResponseAsJSON)
		.then(function(vp) {
			var msg = "ID: " + steem_id + "\n" + 
					  "Reputation: " + rep + "\n" +
					  "Voting Power: " + vp;
			alert(msg);
		})
	})
}
```



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/how-to-write-chrome-bookmark-scripts-step-by-step-tutorial-with-a-steemit-example-chrome">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [How to Write Chrome Bookmark Scripts? - Step by Step Tutorial with a SteemIt Example 怎么样写 Chrome 书签程序？](https://steemit.com/@justyy/how-to-write-chrome-bookmark-scripts-step-by-step-tutorial-with-a-steemit-example-chrome)
