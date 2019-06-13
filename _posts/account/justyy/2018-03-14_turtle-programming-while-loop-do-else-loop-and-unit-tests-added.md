
---
title: 'Turtle Programming: While Loop, Do/Else Loop and Unit Tests Added'
permlink: turtle-programming-while-loop-do-else-loop-and-unit-tests-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-14 03:31:48
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn-programming
- steemapps
thumbnail: https://steemitimages.com/DQmXSwCpG14nWsRsfhbjPiCSmdGcLHLCriXHf5pFxJk1DVo/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-while-loop-do-else-loop-and-unit-tests-added/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

![](https://steemitimages.com/DQmXSwCpG14nWsRsfhbjPiCSmdGcLHLCriXHf5pFxJk1DVo/image.png)

## Previous Contributions
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

## v0.0.11 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/cf2f99af086d25927f5d280f59e314c7b6c913dc) has the following changes:

1. Add While Loop
2. Add Do/Else Loop
3. SetXY - Y Coordinate reversed to match math coordinate.
4. Understore is allowed in variable names.
5. Add global variables: *turtlex*, *turtley* and *turtleangle*
6. Add Unit Tests `npm test`

## Screenshots
In LOGO programming language, there isn't a While Loop. The boolean expression is evaluated per loop iteration. For example:

```
make "x 0
make "sum 0
while :x<=100 [
  make "sum :sum+:x
  make "x :x+1
]
text [sum is :sum]
```

The Do/Else is a syntax sugar as `if (condition) { while (condition) { /* loop */} } else { / * else */}`
```
cs ht make "x 10
do :x<4 [
  fd 100 rt 90 
  make "x :x+1
] else [
  repeat 5 [fd 100 rt 144]
]
```

The above draws a square if `x=0` and a star if `x` is set to above 4.

```
to spiral :size
  if (:size>30) [stop]  ; an exit condition
  fd :size rt 15        ; many lines of action
  spiral :size*1.02    ; the tailend recursive call
end
```

can be re-written in non-recursive DO loop (the else is optional). 

```
to spiral :size
  do :size<=30 [
     fd :size rt 15  
     make "size :size*1.02
  ] else [
     console [:size is larger than 30]
  ]
end
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520998145/ilfyzujaw2x6ittqiojc.png)

## Implement the LOGO/DO loop in Javascript
```
case "do":
	find_left = getNextWord(s, y.next, U);
	if (find_left.word != '[') {
		this.pushErr(word, LOGO_ERR_MISSING_LEFT, find_left.word);
		return false;
	}
	repeat_left = find_left.next;
	find_right = repeat_left + 1;
	nested = 1;
	// need to match [ and ]
	while (find_right < U) {
		if (s[find_right] == '[') {
			nested ++;
		}												
			if (s[find_right] == ']') {
				nested --;
				if (nested == 0) {
					break;
				}
			}
			find_right ++;
	}
	if (find_right >= U) {
		this.pushWarning(word, LOGO_ERR_MISSING_RIGHT);						
	}
	let do_exp = word_next;													
	word_next = this.evalVars(do_exp);			
	ifelse = iftrue(word_next);
	if (word_next === '') {
		this.pushErr(word, LOGO_ERR_MISSING_EXP, word_next);
		return false;
	}												
	while (iftrue(word_next)) {
		// do body
		if (!this.run(s, repeat_left, find_right, depth + 1)) {		
			return false;
		}
		word_next = this.evalVars(do_exp);
	} 	
	find_else = getNextWord(s, find_right + 1, U);
	if (find_else.word.toLowerCase() == 'else') {
		let else_block = getNextBody(s, find_else.next, U);
		if (else_block.ch != '[') {
			this.pushErr(word, LOGO_ERR_MISSING_LEFT, else_block.ch);
			return false;
		}
		if (!ifelse) {
			// else body
			if (!this.run(s, else_block.left, else_block.right, depth + 1)) {
				return false;
			}
		}
		i = else_block.right + 1;
	} else {
		// no else block
		i = find_right + 1; 
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


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-while-loop-do-else-loop-and-unit-tests-added">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming: While Loop, Do/Else Loop and Unit Tests Added](https://steemit.com/@justyy/turtle-programming-while-loop-do-else-loop-and-unit-tests-added)
