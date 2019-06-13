
---
title: 'Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!'
permlink: turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-02 08:46:54
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- steemdev
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519980224/pcyrarrooe7rmtchgc5h.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen/) is currently the FIRST and only one Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.5: [Turtle Programming v0.0.5: Adding IF/ELSE and STOP!](https://helloacm.com/turtle-programming-v0-0-5-adding-if-else-and-stop/)
- v0.0.4: [LogoTurtle: Make Variables and Comments](https://helloacm.com/logoturtle-make-variables-and-comments/)
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.6 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/671cd38250ead4d4505e7d31f8bfc6d057685112#diff-f522b2d4d6d98e52b7c846f7dcf397d7) has the following changes:

1. Add MoveTo function
2. Add Circle function
3. Add Turning (absolute degree)
4. Set Screen Color
5. Enhanced Error/Warning handling

## Screenshots
Let's put all the above in one LOGO source code to demonstrate:

```
ht cs screen green color yellow ; test comment
pu moveto -200 20 pd turn 270
repeat 8 [circle 50 fd 10 rt 45]
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519980224/pcyrarrooe7rmtchgc5h.png)

# Parse Source Code with 2 Parameters
The `MoveTo` takes two parameters that moves the turtle to a given coordinate, which is handled by the following javascript.

```
case "moveto":
	expr = this.evalVars(word_next);
	try {
		word_next = eval(expr);
	} catch (e) {
		this.pushErr(word, LOGO_ERR_EVAL, expr);
		return false;
	}				
	if ((word_next == '') || (!isNumeric(word_next))) {
		this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, word_next);
		return false;
	}
	second_word = getNextWord(s, y.next, U);
	second_word_word = second_word.word;
	expr = this.evalVars(second_word_word);
	try {
		second_word_word = eval(expr);
	} catch (e) {
		this.pushErr(word, LOGO_ERR_EVAL, expr);
		return false;
	}						
	if ((second_word_word == '') || (!isNumeric(second_word_word))) {
		this.pushErr(word, LOGO_ERR_MISSING_NUMBERS, second_word_word);
		return false;
	}					
	this.logo.moveTo(word_next, second_word_word);
	i = second_word.next;
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Turtle Programming v0.0.6: Adding Circle, MoveTo, Turn and Screen!](https://steemit.com/@justyy/turtle-programming-v0-0-6-adding-circle-moveto-turn-and-screen)
