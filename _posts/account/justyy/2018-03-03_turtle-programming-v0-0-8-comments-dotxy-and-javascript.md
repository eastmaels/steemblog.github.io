
---
title: 'Turtle Programming v0.0.8: /* */ comments, dotxy, and javascript!'
permlink: turtle-programming-v0-0-8-comments-dotxy-and-javascript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-03 23:56:09
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemdev
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520120674/mu6yyzqkfubtons3rai0.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-8-comments-dotxy-and-javascript/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.7: [Turtle Programming v0.0.7:  Functions with Parameters + Recursion!](https://helloacm.com/turtle-programming-v0-0-7-functions-with-parameters-recursion/)
- v0.0.6: [Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!](https://helloacm.com/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen/)
- v0.0.5: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/)
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.8 New Features
Along with bug fixes and code tweaks, [**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/bfd61568b37cb7542d3b95884bf54e6a8f1c915f) has added the support of the following features:

1. Ignore Multi-line comments /* */ pairs like other high-level modern programming languages.
2. dotxy takes two parameters that allow you to place a dot without moving the turtle anywhere.
3. js  that allows you to run the javascript code that handles the canvas directly!.

## Screenshots
[Classic Logo](https://helloacm.com/small-logo-programs-interesting-output/), Source code:
```
# Spiral 
/*
  draw a spiral
*/
cs
to spiral :size :angle
  if (:size>:T) [stop] ; size too big
  forward :size
  right :angle
  spiral :size+2 :angle 
end 
spiral 1 91 ; call the function
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520120674/mu6yyzqkfubtons3rai0.png)

Drawing a line using `dotxy`
```
cs width 2 make "x 1 make "y 1
repeat 80 [
  dotxy :x :y 
  make "x :x+1 
  make "y :y+1
]
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520121171/rjksy521ve2zeyy5ug7b.png)

You can control the Turtle using Javascript via `JS`
```
cs js [
  for (let i = 0; i < 5; i ++ ) {
   this.logo.fd(100);
   this.logo.rt(144);
  }
]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520121271/dov5iykcxiuaf1oloojh.png)

## Javascript Parser to Skip Comments, Whitespaces and New Lines
```
	// jump comments and white spaces
	skipTo(s, i, U) {
		// skip for white spaces and newlines
		while ((i < U) && (isSpace(s[i]) || s[i] == '\n')) {
			i ++;				
		}
		if (i >= U) { // reach block end
			return i;
		}
		// skip comments till the end
		if ((s[i] == ';') || (s[i] == '#')) {
			i ++;
			while ((i < U) && (s[i] != '\n')) {
				i ++;
			}
			i ++;
		}
		// skip // comments
		if (i + 1 < U) {
			if ((s[i] == '/') && (s[i + 1] == '/')) {
				i += 2;
				while ((i < U) && (s[i] != '\n')) {
					i ++;
				}
				i ++;
			}
		}
		// skip /* */ comments
		if (i + 1 < U) {
			if ((s[i] == '/') && (s[i + 1] == '*')) {
				i += 2;
				while ((i < U) && ((s[i] != '*') || (s[i + 1] != '/'))) {
					i ++;
				}
				i += 2;				
			}
		}		
		return i;	
	}
```

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-8-comments-dotxy-and-javascript">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.8: /* */ comments, dotxy, and javascript!](https://steemit.com/@justyy/turtle-programming-v0-0-8-comments-dotxy-and-javascript)
