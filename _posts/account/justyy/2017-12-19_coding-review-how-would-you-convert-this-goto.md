
---
title: 'How would you convert this ''goto'' ?'
permlink: coding-review-how-would-you-convert-this-goto
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-19 13:46:36
categories:
- steemstem
tags:
- steemstem
- programming
- coding
- goto
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is a legacy code snippet that uses the magic `goto`, which I find it very difficult to understand and [refactor](https://helloacm.com/code-refactoring-cc-unnecessary-loop-replaced-with-math-expression/).

```
doit:
   foreach (var line in dict.Values)
    {
        var pts = new List<PointF>();
        var rm = new Dictionary<string, LineData>();

        doSomething(line, dict, pts, ref rm);
        doSomethingWith(pts);

        foreach (var item in rm.Values)
        {
            dict.Remove(item.ToString());
        }

        goto doit;
    }
```

The [goto doit](https://helloacm.com/coding-review-how-would-you-convert-this-goto/) jumps outside the loop. It isn't that bad because `dict` will eventually be cleared so that it does not cause endless loop.

How would you rewrite this? See answer here: [https://helloacm.com/coding-review-how-would-you-convert-this-goto/](https://helloacm.com/coding-review-how-would-you-convert-this-goto/)

- - -

This page is synchronized from the post: [How would you convert this ''goto'' ?](https://steemit.com/@justyy/coding-review-how-would-you-convert-this-goto)
