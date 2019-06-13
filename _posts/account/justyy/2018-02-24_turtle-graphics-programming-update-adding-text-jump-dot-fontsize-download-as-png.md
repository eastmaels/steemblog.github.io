
---
title: 'Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png'
permlink: turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-24 22:50:51
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn
- steemtools
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519512157/igqfokynqgwk2fxcdeok.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
This is the [first Logo Interpreter](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/) in Google Chrome Webstore.
https://chrome.google.com/webstore/detail/logo-turtle/dcoeaobaokbccdcnadncifmconllpihp

It is a very useful tool to teach kids [turtle graphics](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/).

## Previous Contributions
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.3 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/c2f7d04cdc20e81cbd5a2c6ed1dfc4f5820af885) adds the following [features](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/):
1. text
2. dot
3. jump
4. fontsize
5. download as png

## Screenshots
Supported Commands in v0.0.3

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519512157/igqfokynqgwk2fxcdeok.png)

Syntax: text [text]
Syntax: fontsize size
For example,
```
fontsize 15 cs color blue repeat 8 [pu fd 100 lt 90 pd text [@justyy] rt 90 pu bk 100 rt 45]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519512182/bd3uli3fc20hpe9rpg63.png)

The turtle can **JUMP** using command *jump* or *jmp*
For example:

```
cs pu bk 100 pd repeat 5 [jump 10 fd 30]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519512310/ukyzav7xapnnsgt1pfsv.png)

You can click ↓ button to download the canvas as PNG.

Syntax: dot command asks the turtle to plot a dot where it is.
```
cs width 3 repeat 5 [ repeat 10 [jump 10 dot ] rt 144]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519512466/zbzwjxmne59vhitkf0qq.png)

## How to Ask Turtle to Jump?
```
case "jump":
case "jmp":
	if ((word_next == '') || (!isNumeric(word_next))) {
		this.pushErr(LOGO_ERR_MISSING_NUMBERS, word_next);
		return;
	}
	let pd = this.logo.isPendown();
	this.logo.pu();
	this.logo.fd(parseFloat(word_next));
	if (pd) {
		this.logo.pd();
	}
	i = y.next;
	break;	
```

## How to Download Canvas as Image?

```
    document.getElementById('download').addEventListener('click', () => {
        chrome.tabs.create({ url: canvas.toDataURL() });
    }, false);
```

## Roadmap of Chrome Extension: Logo Turtle
1. Add Functions
2. Add IF/THEN/ELSE
3. Add Variables
4. Add Colors
5. Add MoveTo
6. Add PrintText
7. Add Circle
8. Add Arc
9. Add Eraser
10. Add Fill
11. Save As Picture
12. Save As Program
13. Comments
14. etc. etc.

## Technology Stack
If an App can be written in [Javascript](https://helloacm.com/steemit-javascript-function-to-get-original-post-from-comments-permlink/), eventually it will be written in Javascript.

# Chrome Webstore
Install the [Turtle Programming for Kids](https://chrome.google.com/webstore/detail/logo-turtle/dcoeaobaokbccdcnadncifmconllpihp) Now!

# Contribution Welcome
Github: https://github.com/DoctorLai/LogoTurtle
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://steemit.com/@justyy/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png)
