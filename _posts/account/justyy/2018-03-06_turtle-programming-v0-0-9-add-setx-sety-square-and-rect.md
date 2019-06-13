
---
title: 'Turtle Programming v0.0.9: Add SetX, SetY, Square and Rect!'
permlink: turtle-programming-v0-0-9-add-setx-sety-square-and-rect
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-06 03:08:21
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn-programming
- drawing
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520305382/acdffeyl9uuwsmgwmoco.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-9-add-setx-sety-square-and-rect/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.8: [Turtle Programming v0.0.8: /* */ comments, dotxy, and javascript!](https://helloacm.com/turtle-programming-v0-0-8-comments-dotxy-and-javascript/)
- v0.0.7: [Turtle Programming v0.0.7:  Functions with Parameters + Recursion!](https://helloacm.com/turtle-programming-v0-0-7-functions-with-parameters-recursion/)
- v0.0.6: [Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!](https://helloacm.com/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen/)
- v0.0.5: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/)
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.9 New Features
Along with bug fixes and code tweaks, [**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/5e0d186b293b0d9f265f5434b257d9944442e953) has added the support of the following features/functions:

1. Add `SetX`, `SetY` that allows turtle to move in only 1 directions. (one parameter)
2. Set `Square` to draw a filled square. (one parameter)
3. Add `Rect` to draw a filled rectangle. (two parameters)

## Screenshots
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520305382/acdffeyl9uuwsmgwmoco.png)

Drawing a curve
```
ht cs make "x 1 make "y 1
repeat 100 [
  setx :x
  sety :y
  make "x :x+1 make "y :y*1.05
]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520305534/skqs71zwbicesuvwgsx7.png)

## SetX and SetY in Javascript
```

case "setx":
	word_next = this.evalVars(word_next);
	if ((word_next == '') || (!isNumeric(word_next))) {
		this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, word_next);
		return false;
	}
	this.logo.moveToX(parseFloat(word_next));
	i = y.next;
	break;		
case "sety":
	word_next = this.evalVars(word_next);
	if ((word_next == '') || (!isNumeric(word_next))) {
		this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, word_next);
		return false;
	}
	this.logo.moveToY(-parseFloat(word_next));
	i = y.next;
	break;	
```

The Y coordinate mapping to canvas need to be inverted as the positive Y in Logo Coordinate system have a smaller Y value in Canvas.

## Roadmap of Chrome Extension: Logo Turtle
1. ~~Add Functions~~
2. ~~Add IF/THEN/ELSE~~
3. ~~Add Variables~~
4. ~~Add Colors~~
5. ~~Add MoveTo~~
6. ~~Add PrintText~~
7. ~~Add Circle~~
8. Add Arc
9. Add Eraser
10. Add Fill
11. ~~Save As Picture~~
12. Save As Program
13. ~~Comments~~
14. ~~Add Recursion Support~~
15. Add Global/Local Scopes
16. Sleep
17. etc. etc.

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-9-add-setx-sety-square-and-rect">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.9: Add SetX, SetY, Square and Rect!](https://steemit.com/@justyy/turtle-programming-v0-0-9-add-setx-sety-square-and-rect)
