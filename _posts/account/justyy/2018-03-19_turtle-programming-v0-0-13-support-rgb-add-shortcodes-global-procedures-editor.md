
---
title: 'Turtle Programming v0.0.13: Support RGB, Add ShortCodes, Global Procedures Editor'
permlink: turtle-programming-v0-0-13-support-rgb-add-shortcodes-global-procedures-editor
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-19 00:51:51
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemapps
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1521420612/uhizmrz7rkal845caadh.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-13-support-rgb-add-shortcodes-global-procedures-editor/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

```
repeat 18[repeat 4[repeat 18[fd 10 rt 5] rt 180]rt 20]
repeat 18[repeat 18[repeat 4[repeat 18[fd 10 rt 5] rt 160]rt 20] rt 20]
repeat 4[repeat 9[repeat 4[repeat 9[fd 25 rt 10] repeat 9[ fd 25 lt 10] rt 160] lt 40] rt 90]
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521420612/uhizmrz7rkal845caadh.png)

## Previous Contributions
- v0.0.12: [Turtle Programming v0.0.12: Powerful For Loop, INC, DEC, and on NPM!](https://helloacm.com/turtle-programming-v0-0-12-powerful-for-loop-inc-dec-and-on-npm/)
- v0.0.11: [Turtle Programming: While Loop, Do/Else Loop and Unit Tests Added](https://helloacm.com/turtle-programming-while-loop-do-else-loop-and-unit-tests-added/)
- v0.0.10: [Turtle Programming: Fractal Stars, Random, Console, Eraser, SetPC, SetXY, Examples, Wait, Bug Fixes and So much more!](https://helloacm.com/turtle-programming-fractal-stars-random-console-eraser-setpc-setxy-examples-wait-bug-fixes-and-so-much-more/)
- v0.0.9: [Turtle Programming v0.0.9: Add SetX, SetY, Square and Rect!](https://helloacm.com/turtle-programming-v0-0-9-add-setx-sety-square-and-rect/)
- v0.0.8: [Turtle Programming v0.0.8: /* */ comments, dotxy, and javascript!](https://helloacm.com/turtle-programming-v0-0-8-comments-dotxy-and-javascript/)
- v0.0.7: [Turtle Programming v0.0.7:  Functions with Parameters + Recursion!](https://helloacm.com/turtle-programming-v0-0-7-functions-with-parameters-recursion/)
- v0.0.6: [Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!](https://helloacm.com/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen/)
- v0.0.5: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/)
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.13 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/3c1a70807942e7b8f0a7dfe3e45f96bd80a7d7b5) has the following changes:

1. RGB Color Syntax
2. Global Procedures Editor
3. Aliases: `print`, `pc`, `setpencolor`, `setsc`, `setscreencolor` and `label`
4. ShortCodes Defined: `FillPolygon`, `Polygon` and `Fill Square`
5. UI Language: zh-tw.
6. Add `ClearConsole`

## Screenshots
Code/Procedures are prepended to your source code.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521420283/nu95iv1ekw5ydaaoek8f.png)

Random Walk with Color:
```
to randomwalk
ht cs
  repeat 100 [
  make "r parseInt(:random*255)
  make "g parseInt(:random*255)
  make "b parseInt(:random*255)
  pc [:r :g :b]
    make "r parseInt(:random*3)
    if :r==0 [fd 20]
    if :r==1 [rt 90 fd 20]
    if :r==2 [lt 90 fd 20]
  ]   
end
randomwalk
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521420557/zz0fis6kt64ouudvonxm.png)

## ShortCodes
```
// add a short function
_addShortCode(fun_name, parameters, body) {
	this.funs[fun_name] = [parameters, body];
}

// add some short funcs
loadShortCode() {
	this._addShortCode("polygon", ["corner", "len"], 
		"repeat :corner " + 
		"[fd :len rt 360/:corner]");
	this._addShortCode("fillsquare", ["size"], 
		"make \"tmp :size repeat :size " + 
		"[polygon 4 :tmp dec :tmp]");
	this._addShortCode("fillpolygon", ["corner", "size"], 
		"make \"tmp :size repeat :size " +
		"[polygon :corner :tmp dec :tmp]");
}
```

`ShortCodes` are pre-defined LOGO procedures for example: `polygon` is defined as

```
to polygon :corner :len
  repeat :corner [fd :len rt 360/:corner]
end
```

And you can just use it like a inbuilt command:
```
for [i 3 10] [polygon :i 50]
```

![](https://steemitimages.com/DQmPUGSBx8PGDXnxrtWGpjMXY5eEXq9GvgJcu7LaYH1kxdi/image.png)

And, to fill a square, we need to draw a few smaller squares:

```
to fillsquare :size
   make "tmp :size
   repeat :size [ polygon 4 :tmp dec :tmp]
end
```

![](https://steemitimages.com/DQmdeAJanwijKkDYeXqWTVF2FVnPrGsiMdAZbZFdgvoUPK2/image.png)


## LOGO RGB Syntax Parser in Javascript
```
case "setpc":
case "pc":
case "setpencolor":
case "setcolor":
	if (word_next == '[') {
		find_next_body = getNextBody(s, i, U);
		if (find_next_body.right >= U) {
			this.pushErr(word, LOGO_ERR_MISSING_RIGHT);
			return false;
		}
		let rgb = s.substring(find_next_body.left + 1, find_next_body.right);
		let rgb_arr = rgb.split(' ').map(item => item.trim()).filter(x => x != '');
		if (rgb_arr.length != 3) {
			this.pushErr(word, LOGO_ERR_INVALID_RGB, rgb);
			return false;
		}
		let rgb_r = this.evalVars(rgb_arr[0]);
		let rgb_g = this.evalVars(rgb_arr[1]);
		let rgb_b = this.evalVars(rgb_arr[2]);
		this.logo.setLineColor("rgb(" + rgb_r + "," + rgb_g + ", " + rgb_b + ")");
		i = find_next_body.right + 1;
	} else {
		word_next = this.evalVars(word_next);
		if ((word_next === '') || (!isNumeric(word_next))) {
			this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, word_next);
			return false;
		}
		this.logo.setPc(parseInt(word_next));
		i = y.next;
	}
	break;	
```

## Roadmap of Chrome Extension: Logo Turtle
I believe LogoTurtle is more or less in beta now. Therefore, bug Fixes and any suggestions, please shout @justyy

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-13-support-rgb-add-shortcodes-global-procedures-editor">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.13: Support RGB, Add ShortCodes, Global Procedures Editor](https://steemit.com/@justyy/turtle-programming-v0-0-13-support-rgb-add-shortcodes-global-procedures-editor)
