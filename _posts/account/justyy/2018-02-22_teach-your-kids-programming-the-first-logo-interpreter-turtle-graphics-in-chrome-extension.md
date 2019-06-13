
---
title: 'Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!'
permlink: teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-22 01:39:12
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- turtle-graphics
- logo
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1519263055/li0c6n9ngxw7jebamz20.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Introduction to Logo Turtle
I am teaching my 5-year-old son how to program. The language I pick is [LOGO](https://helloacm.com/logo-turtle-tutorial-how-to-draw-fractal-stars/) which is known as the [turtle graphics](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/). 

There are some good implementations using Javascript, in the browser, some desktop logo interpreters, and also [the one](https://steakovercooked.com/Software.Logo) in PHP. However, these are not exactly what I want:  a simple-but-powerful, safe (no need to download native software), be-able-to-run-offline and most importantly, the ads-free version.

The chrome webstore is the ideal place, but unfortunately, there is None for Logo Programming. Therefore, I decide to make one, and will bring more customized features in the next coming versions.

##  Chrome Webstore
It is available now so you can install it in Chrome webstore. This is platform-independent, meaning that with Chrome browser, you can just install the Logo Interpreter and have fun with it.

https://chrome.google.com/webstore/detail/logo-turtle/dcoeaobaokbccdcnadncifmconllpihp

## Version 0.0.1
The very first version only supports the following keywords/features:

1. FD, FORWARD
2. BK, BACKWARD
3. RT, RIGHT
4. LT, LEFT
5. HOME
6. CS, CLEARSCREEN
7. REPEAT
8. PU, PENUP
9. PD, PENDOWN

So you should be able to write this 

```
cs repeat 8 [pu fd 20 pd repeat 5 [fd 20 rt 144] pu bk 20 rt 45]
```

and see how it goes:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519263055/li0c6n9ngxw7jebamz20.png)

The Log tab prints any errors and warnings:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519263131/mfop53l4fmdb1fqmcpyi.png)

Also, in Settings, you can choose a different UI language, currently simplified Chinese (will add more when the project is at beta version).
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519263213/k8gdxq3jqjjzzhvegxyx.png)

## How it works?
`logocanvas.js` is the view-model that supports the basic  turtle instructions and draw to a canvas.
`logointerpreter.js` parses the [[LOGO source code](https://helloacm.com/small-logo-programs-interesting-output/)](https://helloacm.com/small-logo-programs-interesting-output/). The `repeat` loop is implemented via [recursion](https://helloacm.com/understanding-tail-recursion-visual-studio-c-assembly-view/).

```
case "repeat":
    if ((word_next == '') || (!isNumeric(word_next))) {
        this.pushErr(LOGO_ERR_MISSING_NUMBERS, word_next);
        return;
    }
    let find_left = getNextWord(s, y.next, U);
    if (find_left.word != '[') {
        this.pushErr(LOGO_ERR_MISSING_LEFT, find_left.word);
        return;
    }
    let repeat_left = find_left.next;
    let find_right = repeat_left + 1;
    let nested = 1;
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
    for (let i = 0; i < word_next; ++ i) {
        // recursive call repeat body
        this.run(s, repeat_left, find_right);
    }
    i = find_right + 1;
    break;  
```

## Roadmap of Chrome Extension: Logo Turtle
1. Add Functions
2. Add IF/THEN/ELSE
3. Add Variables
4. Add Colors
5. Add MoveTo
6. Add PrintText
7. Add Circlee
8. Add Arc
9. Add Eraser
10. Add Fill
11. Save As Picture
12. Save As Program
13. etc. etc.

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

Reposted to [https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/](https://helloacm.com/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension/)

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Teach Your Kids Programming - The First Logo Interpreter (Turtle Graphics) in Chrome Extension!](https://steemit.com/@justyy/teach-your-kids-programming-the-first-logo-interpreter-turtle-graphics-in-chrome-extension)
