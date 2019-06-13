
---
title: 'LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help.'
permlink: logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-23 00:32:57
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- turtle-graphics
- teamsteem
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519345619/eyhsekzvcj4eswnf16go.png
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
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://steemit.com/utopian-io/@justyy/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension)

## v0.0.2 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/c408d285bfc141e36c217f7c0a38689a484531c3) adds the following features:
1. Show and Hide Turtle, so we know where the turtle is and its angle.
2. Set Line Color and Width
3. Tab `Help` to show a list of supported commands.

## Screenshots
Turtle is at (0, 0) and  heading North by default
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519345619/eyhsekzvcj4eswnf16go.png)

```
cs 
color blue width 2
repeat 4 [fd 100 rt 90]
color red width 1
lt 45 repeat 5 [fd 100 rt 144]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519345701/veqmiwmsoxqwgjroj3dg.png)

The line colors and widths can be set before each FD or BK.

Supported Commands in v0.0.2
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519345753/qgzssuucibjv4xiwbv7u.png)

## How to Set Turtle Direction in JQuery?
```
	// set turtle angle
	setTurtleAngle(ang) {
	    this.turtle.css({
	        "-webkit-transform": "rotate(" + ang + "deg)",
	        "-moz-transform": "rotate(" + ang + "deg)",
	        "transform": "rotate(" + ang + "deg)" /* For modern browsers(CSS3)  */
	    });				
	}
```

## How to Get Next Local Scope?
To parse the LOGO program for square brackets.

```
// get next [] body
const getNextBody = (s, i, U) => {
	let nested = 0;
	// need to match [ and ]
	let start = i;
	while (i < U) {
		if (s[i] == '[') {
			nested ++;
			if (nested == 1) {
				start = i;
			}
		}												
		if (s[i] == ']') {
			nested --;
			if (nested == 0) {
				break;
			}
		}
		i ++;
	}
	return {left: start, right: i};
}
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help.](https://steemit.com/@justyy/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help)
