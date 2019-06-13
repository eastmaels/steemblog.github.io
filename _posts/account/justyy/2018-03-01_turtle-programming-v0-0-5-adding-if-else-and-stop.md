
---
title: 'Turtle Programming v0.0.5: Adding IF/ELSE and STOP!'
permlink: turtle-programming-v0-0-5-adding-if-else-and-stop
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-01 06:24:24
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemdev
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519885299/ql5utq6uoqdzdpa4lhia.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/) is the first and currently only one Chrome Extension for Turtle Graphics.  I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.5 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/c960f5ea159b4475282aa566bcf3005c0323afe4) supports **IF/ELSE** and **STOP**.

In previous versions, the LOOP program flow is supported by keyword **REPEAT** and the most important IF/ELSE is now implemented in this version.

## Screenshots
This is how things get a little bit interesting and I believe now you can have your imaginations fly.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519885299/ql5utq6uoqdzdpa4lhia.png)
```
ht cs make "a 1 repeat 8 [pu fd 100 pd 
repeat 12 [
  if :a%3==1 [rt 90] else [lt 90] 
  fd 30 make "a :a+1
] pu bk 100 rt 45]
```

# How to Implement IF/ELSE in Logo/Javascript?
The IF part is similar to REPEAT and all we need to do is to parse the ELSE part.

```
case "if":
expr = this.evalVars(word_next, true);
try {
	word_next = eval(expr);
} catch (e) {
	this.pushErr(LOGO_ERR_EVAL, expr);
	return false;
}				
if ((word_next === '')) {						
	this.pushErr(LOGO_ERR_MISSING_EXP, word_next);
	return false;
}
find_left = getNextWord(s, y.next, U);
if (find_left.word != '[') {
	this.pushErr(LOGO_ERR_MISSING_LEFT, find_left.word);
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
	this.pushWarning(LOGO_ERR_MISSING_RIGHT);						
}
let ifelse = word_next;					
if (ifelse) {
	// if body
	if (!this.run(s, repeat_left, find_right, depth + 1)) {
		return false;
	}
} 	
find_else = getNextWord(s, find_right + 1, U);
if (find_else.word.toLowerCase() == 'else') {
	let else_block = getNextBody(s, find_else.next, U);
	if (else_block.ch != '[') {
		this.pushErr(LOGO_ERR_MISSING_LEFT, else_block.ch);
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
14. Add Recursion Support
15. Add Global/Local Scopes
16. etc. etc.

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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-5-adding-if-else-and-stop">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://steemit.com/@justyy/turtle-programming-v0-0-5-adding-if-else-and-stop)
