
---
title: 'LogoTurtle: Make Variables and Comments'
permlink: logoturtle-make-variables-and-comments
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-26 22:01:33
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- cn-programming
- graphics
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519682383/vywsg2tjbnfp5fokkiup.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
[LogoTurtle](https://helloacm.com/logoturtle-make-variables-and-comments/) is the first and currently only one  Chrome Extension for Turtle Graphics. I have also written [a PHP version of Logo Interpreter](https://steakovercooked.com/Software.Logo) in 2006 but that runs only on the server.

## Previous Contributions
- v0.0.3: [Turtle Graphics Programming Update: Adding text, jump, dot, fontsize, download as png](https://helloacm.com/turtle-graphics-programming-update-adding-text-jump-dot-fontsize-download-as-png/)
- v0.0.2: [LogoTurtle v0.0.2: ShowTurtle, HideTurtle, Color, Width and Help](https://helloacm.com/logoturtle-v0-0-2-showturtle-hideturtle-color-width-and-help/).
- Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!
 [v0.0.1](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

## v0.0.4 New Features
[**This Commit**](https://github.com/DoctorLai/LogoTurtle/commit/4f903b1fd3b46165764f4ef783a59815282c7af7) supports the *Make* command which declares a variable in LOGO programming. Also, a single line comment starts with a  semi-colon.

## Screenshots
With variable support, you'll see how powerful the turtle is.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519682383/vywsg2tjbnfp5fokkiup.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519682118/jqhlyareya7w6adfmgih.png)

# How to Store Variables in Javascript for Logo Turtle?
We use the dictionary to store a global key-pair values for variables. In future versions, it will be improved to support variables of different scopes.

Getter and Setter:
```
	// push a varaible
	addVar(name, value) {
		this.vars[name] = this.evalVars(value);
	}

	// find a variable
	getVar(name) {
		if (name in this.vars) {
			return this.vars[name];
		}
		return null;
	}
```

To evaluate the value of a expression:

```
	// eval variables
	evalVars(s) {
		let var_arr = parseVarName(s);
		let varlen = var_arr.length;
		for (let i = 0; i < varlen; ++ i) {
			let var_name = var_arr[i].substring(1);			
			let local = this.getVar(var_name);
			if (local) {					
				s = s.replaceAll(":" + var_name, local);
				break;
			}
		}
		return s;
	}
```

where the *parseVarName* looks for `:var` 

```
// parse var name
const parseVarName = (s) => {
	let pat = /(:[a-zA-Z]+[a-zA-Z0-9]*)/g;
	let arr = [];
	let matches;
	while (matches = pat.exec(s)) {
		arr.push(matches[1]);		
	}
	return arr;
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

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/logoturtle-make-variables-and-comments">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [LogoTurtle: Make Variables and Comments](https://steemit.com/@justyy/logoturtle-make-variables-and-comments)
