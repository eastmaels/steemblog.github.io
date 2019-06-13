
---
title: 'Turtle Programming v0.0.12: Powerful For Loop, INC, DEC, and on NPM!'
permlink: turtle-programming-v0-0-12-powerful-for-loop-inc-dec-and-on-npm
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-17 00:54:21
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemapps
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1521247777/s95kboo7t6jnoeieyipj.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-12-powerful-for-loop-inc-dec-and-on-npm/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
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

## v0.0.12 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/fc96d44b88138833d7bb8b6bd6d4219de9388436) has the following changes:

1. Add Powerful `For`
2. Add `INC` to increment a variable
3. Add `DEC` to decrement a variable
4. StackOverFlow Max Depth set to 1024
5. Add Aliases: `SetColor` = `SetPC`, `SetH` = `Turn`
6. Add `Clear` that clears all functions and variables.
7. Export [LogoParser](https://github.com/DoctorLai/LogoTurtle/blob/master/js/logoparser.js) and [LogoCanvas](https://github.com/DoctorLai/LogoTurtle/blob/master/js/logocanvas.js) to NPM:  https://www.npmjs.com/package/logoturtle

## Screenshots
`For` in LOGO can be used in a few ways:
- `FOR [START STOP] [CODE]`
- `FOR [START STOP STEP] [CODE]`
- `FOR [VARIABLE START STOP] [CODE]`
- `FOR [VARIABLE START STOP STEP] [CODE]`

For example,
```
ht cs for [i 0 360 45] [seth :i make "n 0 
  repeat 80 [setpc :random*15 
    repeat 8 [fd :n rt 45] inc :n
  ] 
]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521247777/s95kboo7t6jnoeieyipj.png)

## Implement the FOR Loop in Javascript for LOGO
```
case "for":
	if (word_next != '[') {
		this.pushErr(word, LOGO_ERR_MISSING_LEFT, word_next);
	}				
	find_next_body = getNextBody(s, i, U);
	if (find_next_body.right >= U) {
		this.pushErr(word, LOGO_ERR_MISSING_RIGHT);
		return false;
	}
	let for_code = s.substring(find_next_body.left + 1, find_next_body.right).trim();
	i = find_next_body.right + 1;
	let for_body = getNextBody(s, i, U);
	if (for_body.right >= U) {
		this.pushErr(word, LOGO_ERR_MISSING_RIGHT);
		return false;
	}					
	let for_code2 = s.substring(for_body.left + 1, for_body.right).trim();
	if ((for_code.length > 0) && (for_code2.length > 0)) {
		// remove surrounding white spaces
		let for_code_arr = for_code.split(' ').map(item => item.trim()).filter(x => x != '');
		// For Syntax: [VarName Start Stop Step]
		let for_index = 0;
		let for_var = "";
		let saved_for_var = null;
		if (isValidVarName(for_code_arr[0])) {
			for_var = for_code_arr[0];
			if (for_var in this.vars) {
				saved_for_var = this.vars[for_var];
			}							
			this.vars[for_var] = 0;
			for_index ++;
		}
		if (for_code_arr.length - for_index < 2) {
			this.pushErr(word, LOGO_ERR_INVALID_FOR);
			return false;
		}
		if (for_code_arr.length - for_index > 3) {
			this.pushErr(word, LOGO_ERR_INVALID_FOR);
			return false;
		}						
		let for_start = this.evalVars(for_code_arr[for_index]);
		let for_stop = this.evalVars(for_code_arr[for_index + 1]);
		let for_step = 1;
		if (for_index + 2 < for_code_arr.length) {
			for_step = this.evalVars(for_code_arr[for_index + 2]);
		}
		if ((for_start === '') || (!isNumeric(for_start))) {
			this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, for_start);
			return false;
		}		
		if ((for_stop === '') || (!isNumeric(for_stop))) {
			this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, for_stop);
			return false;
		}	
		if ((for_step === '') || (!isNumeric(for_step))) {
			this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, for_step);
			return false;
		}
		// get for values
		for_start = parseInt(for_start);
		for_stop = parseInt(for_stop);
		for_step = parseInt(for_step);
		// beware of endless loop ^_^
		for (let for_loop = for_start; for_loop <= for_stop; for_loop += for_step) {
			if (for_var != "") {
				this.vars[for_var] = for_loop;
			}
			// if body
			if (!this.run(for_code2, 0, for_code2.length, depth + 1)) {		
				return false;
			}							
		}
		// restore loop variable
		if ((for_var != "") && saved_for_var !== null) {
			this.vars[for_var] = saved_for_var;
		}
	}
	// parse next token
	i = for_body.right + 1;					
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-12-powerful-for-loop-inc-dec-and-on-npm">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.12: Powerful For Loop, INC, DEC, and on NPM!](https://steemit.com/@justyy/turtle-programming-v0-0-12-powerful-for-loop-inc-dec-and-on-npm)
