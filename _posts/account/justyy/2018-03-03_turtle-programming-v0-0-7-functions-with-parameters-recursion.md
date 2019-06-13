
---
title: 'Turtle Programming v0.0.7:  Functions with Parameters + Recursion!'
permlink: turtle-programming-v0-0-7-functions-with-parameters-recursion
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-03 01:40:18
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemdev
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1520040795/f9no2ecqpnfhr479yrdm.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-7-functions-with-parameters-recursion/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.6: [Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!](https://helloacm.com/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen/)
- v0.0.5: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/)
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.7 New Features
Along with bug fixes and code tweaks, [**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/c16f895a356b1c1e30ce7bd0bbadd561c46545ca) has added the support of function declaration and  function invoke with parameters

This is the most useful, important and most difficult feature of the LOGO parser!

## Screenshots
The following LOGO source code has a two recursive functional call. I have spent quite some time and came across the [same problem](https://helloacm.com/bug-fixes-for-php-online-logo-interpreter/) that I had years ago when writing the PHP Logo Parser. The fix is to copy the variables before [recursive calls](https://helloacm.com/understanding-tail-recursion-visual-studio-c-assembly-view/) and restore them once the function calls return so the variables value update do not affect globally.


```
ht cs to tree :size
  if (:size<10) [stop]
  fd :size
  lt 30 tree :size*0.7  ; left branch, recursive
  rt 60 tree :size*0.7  ; right branch, recursive
  lt 30 
  bk :size
end

pu fd -120 pd tree 100
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520040795/f9no2ecqpnfhr479yrdm.png)

Version 0.0.7 supports single-line comments that are denoted using ; or # or //

# How to Parse To/End LOGO function in Javascript?
The following Javascript parses the TO/END LOGO function pairs and stores it in class attribute `this.funs` dictionary. The content of the dictionary value is an array of [function parameters, function body].

```
case "to": // define a function
	let next_word;
	let funs_name = y.word.trim();
	if (!isValidVarName(funs_name)) {
		this.pushErr(word, LOGO_ERR_INVALID_FUN_NAME, funs_name);
		return false;
	}
	i = y.next;
	let start_fun_idx = i;
	let end_fun_idx = -1;
	for (;;) {
		let prev = i;
		next_word = getNextWord(s, i, U);
		i = next_word.next;
		if (next_word.word.toLowerCase() == 'end') {
			end_fun_idx = prev;
			break;
		}
		if ((next_word.word == '' || next_word.next >= U)) {
			this.pushErr(word, LOGO_ERR_MISSING_END, next_word);
			return false;
		}
	}
	if (end_fun_idx == -1) {
		this.pushErr(word, LOGO_ERR_MISSING_END, '');
		return false;						
	}
	let funs_s = s.substring(start_fun_idx, end_fun_idx).trim();
	if (funs_s && y) {
		let ii = 0;
		let UU = s.length;
		let funs_params = []; // funs parameter
		let j = ii;
		while (ii < U) {
			j = ii;
			let to_word = getNextWord(funs_s, ii, UU);
			ii = to_word.next;
			if (to_word.word.startsWith(':')) {
				let to_word_param = to_word.word.substring(1);
				if (!isValidVarName(to_word_param)) {
					this.pushErr(word, LOGO_ERR_INVALID_VAR_NAME, to_word_param);
					return false;
				}
				funs_params.push(to_word_param);
			} else {
				break;
			}							
		}
		let funs_body = funs_s.substring(j, UU).trim();
		// declare the function
		this.funs[funs_name] = [funs_params, funs_body];
	}
	break;
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-7-functions-with-parameters-recursion">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.7:  Functions with Parameters + Recursion!](https://steemit.com/@justyy/turtle-programming-v0-0-7-functions-with-parameters-recursion)
