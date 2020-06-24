
---
title: 'Steem Reputation Format Function in PHP'
permlink: steem-reputation-format-function-in-php
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-24 18:33:48
categories:
- witness-category
tags:
- witness-category
- codeonsteem
- programming
- whalepower
- discord
- steemit
- steem-dev
- php
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


On Steem Blockchain, the reputation can be formatted in a logarithmetic (base 10) scale. Given recently, my <a href="https://github.com/steemit/steem-js/pull/345" rel="noopener nofollow noreferrer" target="_blank">PR</a> to fix the reputation formatter in SteemJS is merged, I also translate this to PHP which I need.

```
function formatReputation($rep) {
    if (!$rep) return 25;
    $neg = $rep < 0;
    $rep = (string)$rep;
    $rep = $neg ? substr($rep, 1) : $rep;
    $v = log10(($rep > 0 ? $rep : -$rep) - 10) - 9;
    $v = $neg ? -$v : $v;
    return round($v * 9 + 25, 3);
}
```

Some Example usages:

```
echo formatReputation(95832978796820) . "\n";
echo formatReputation(10004392664120) . "\n";
echo formatReputation(30999525306309) . "\n";
echo formatReputation(-37765258368568) . "\n";
echo formatReputation(334486135407077) . "\n";
echo formatReputation(0) . "\n";
```

The above PHP code should output the following values (you can use them to <a href="https://helloacm.com/unit-test-methods-should-support-float-numbers-comparisons-with-epsilon/" title="Unit Test Methods should support float numbers comparisons with EPSILON">unit test</a> the function):

<pre>
69.834
61.002
65.422
-16.194
74.719
25
</pre>


<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*Reposted to [Blog](https://helloacm.com/steem-reputation-format-function-in-php/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Steem Reputation Format Function in PHP'](https://steemit.com/@justyy/steem-reputation-format-function-in-php)
