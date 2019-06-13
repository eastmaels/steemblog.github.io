
---
title: 'C# When did you read the using directive section on the top of each file?'
permlink: c-when-did-you-read-the-using-directive-section-on-the-top-of-each-file
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-07 21:38:42
categories:
- programming
tags:
- programming
- csharp
- coding-styles
- steemstem
- coding
thumbnail: https://steemitimages.com/DQmTKnP6DVxUaWTXffaE25W9NWThmFNv4cuAZ5P9HuyUCef/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I am wondering how many people actually read the ['using directive'](https://helloacm.com/c-when-did-you-read-the-using-directive-section-on-the-top-of-each-file/) on top of each C# file, like this:

![](https://steemitimages.com/DQmTKnP6DVxUaWTXffaE25W9NWThmFNv4cuAZ5P9HuyUCef/image.png)

Let's do a simple Poll:

1. Always when I open a file
2. Sometimes
3. Never
4. Sorry, I don't know what using directive section means
5. Everytime I do a code review!

My personal preference is to use region to hide them by default, like this:

![](https://steemitimages.com/DQmTNjZcRXo3RT3Pvb1Evx3cS9k1xLkzKq8kWE4kJduaKyz/image.png)

Some might not like   the entire world of #region/#endregion as it's an incredibly annoying feature that allows developers to pretend their code is well written when in fact they are just hiding masses of ugly inefficient poor code.

Luckily, [Resharper](https://helloacm.com/resharper-refactoring-changes-behavior/) will be able to detect unused references and grey out lines to hint you a R#  tidy up.

- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**
- [SteemIt SP Delegation Tool](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)

- - -

This page is synchronized from the post: [C# When did you read the using directive section on the top of each file?](https://steemit.com/@justyy/c-when-did-you-read-the-using-directive-section-on-the-top-of-each-file)
