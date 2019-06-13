
---
title: 'Turtle Programming: Fractal Stars, Random, Console, Eraser, SetPC, SetXY, Examples, Wait, Bug Fixes and So much more!'
permlink: turtle-programming-fractal-stars-random-console-eraser-setpc-setxy-examples-wait-bug-fixes-and-so-much-more
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-10 18:55:06
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn-programming
- steemapps
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707753/wghsyp0zymxslpmfs3uq.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-fractal-stars-random-console-eraser-setpc-setxy-examples-wait-bug-fixes-and-so-much-more/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
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

## v0.0.10 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/f29ef05059f66e1a60fd982cd95550b3968986e4) has the following changes:

1. Add global :RANDOM variable that returns from 0 to 1.
2. Add `Wait` which sleeps milliseconds
3. Bug Fixes so that Procedures can take more than 1 parameter
4. Eraser mode that could be turned on via `pe` and turned off via `ppt`
5. SetPC to set color from a defined color table (compatible with standard LOGO source code)
6. `Console` prints text/variables to console.
7. Allow `Text` to evaluate the variables
8. `SetXY` is alias of `MoveTo` (SetXY is standard LOGO keyword)
9. Examples in Help Tab
10. Fix `0 == ''` true in Javascript

## Screenshots
```
ht cs make "sum 0
make "i 1
repeat 100 [
  make "sum :sum+:i
  make "i :i+1
]
console [sum is :sum]
text [sum is :sum]
```
This calculates sum from 1 to 100 and prints to console (Chrome Browser), log, and draw a text.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707753/wghsyp0zymxslpmfs3uq.png)

[Chess Board](https://helloacm.com/draw-a-chess-board-using-logo/)
```
ht cs TO FK :B
  HT # hide the turtle
  IF :B>15 [STOP]
  REPEAT 4 [FD :B RT 90]
  FK :B+1 # draw a bigger square to fill
END

TO QP :Y
  IF :Y>4 [STOP]
  REPEAT 4 [FK 15 FD 15 FK 1 FD 15]
  RT 90 FD 30 RT 90
  REPEAT 4 [FK 15 FD 15 FK 1 FD 15]
  RT 180
  QP :Y+1
END

QP 1
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707798/emnx15qrgopaupattiuz.png)

[Fractal Stars:](https://helloacm.com/logo-turtle-tutorial-how-to-draw-fractal-stars/)
```
cs ht
to star :size :small
    if :size<:small [stop]
    repeat 5 [fd :size star :size*0.3 :small rt 144]
end
jump -100
star 150 10
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707831/yqsaab0uegbpxobcqynn.png)

Random:
```
cs ht repeat 1000 [fd 4 rt :random*360]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707885/h7dzc4op3jnu5wzb6f84.png)

Color randoming as well:
```
cs ht repeat 1000 [fd :random*15 rt :random*360 setpc :random*15]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520707939/dpnwhmu2vpjijxhvyxxo.png)

## Console Function in Logo implemented in Javascript
```
case "console":
	let cur_console_text, result;
	if (word_next != '[') {
		word_next = this.evalVars(word_next);					
		result = word_next;			
		if (this.console) {					    
		    cur_console_text = this.console.val();
		    this.console.val(cur_console_text + "\n" + result);
		}
		console.log(result);
		i = y.next;						
	} else {
		find_next_body = getNextBody(s, i, U);
		if (find_next_body.right >= U) {
			this.pushErr(word, LOGO_ERR_MISSING_RIGHT);
			return false;
		}
		result = this.evalVars(s.substring(find_next_body.left + 1, find_next_body.right));					
		if (this.console) {					    
		    cur_console_text = this.console.val();
		    this.console.val(cur_console_text + "\n" + result);
		}
		console.log(result);						
		i = find_next_body.right + 1;						
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-fractal-stars-random-console-eraser-setpc-setxy-examples-wait-bug-fixes-and-so-much-more">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming: Fractal Stars, Random, Console, Eraser, SetPC, SetXY, Examples, Wait, Bug Fixes and So much more!](https://steemit.com/@justyy/turtle-programming-fractal-stars-random-console-eraser-setpc-setxy-examples-wait-bug-fixes-and-so-much-more)
