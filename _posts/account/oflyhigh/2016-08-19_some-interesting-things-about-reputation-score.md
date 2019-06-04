
---
title: 'Some interesting things about reputation score/关于信用分，一些有趣的事'
permlink: some-interesting-things-about-reputation-score
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-19 16:22:09
categories:
- steemit
tags:
- steemit
- reputation
- score
- cn
thumbnail: https://www.steemimg.com/images/2016/08/19/oflyhigh017b2.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Yesterday, I wrote an article about how to calculate reputation score.
You can find it here : 
* [How to calculate reputation score? I tell you.](https://steemit.com/steemit/@oflyhigh/how-to-calculate-credit-score-reputation-score-i-tell-you)

![oflyhigh017b2.png](https://www.steemimg.com/images/2016/08/19/oflyhigh017b2.png)

Today, I continue work on it, and found some interesting things about it.
I'm glad to share them with you.

 # The first one：Reputation score is 25 for many users

There are a lot of user whose  reputation score is 25.
Why?  Let's look at the code.
```
export const repLog10 = rep2 => {
    if(rep2 == null) return rep2
    let rep = String(rep2)
    const neg = rep.charAt(0) === '-'
    rep = neg ? rep.substring(1) : rep

    let out = log10(rep)
    if(isNaN(out)) out = 0
    out = Math.max(out - 9, 0); // @ -9, $0.50 earned is approx magnitude 1
    out = (neg ? -1 : 1) * out
    out = (out * 9) + 25 // 9 points per magnitude. center at 25
    // base-line 0 to darken and < 0 to auto hide (grep rephide)
    out = parseInt(out)
    return out
}
```
We use absolute value to calculate the score.
And the select the max one between `out-9` and `0`.
`out = Math.max(out - 9, 0); // @ -9, $0.50 earned is approx magnitude 1`
Let's check which number will get `9` for  `log10(rep)?`
It should be `pow(10,9)`, that is  `1000000000`

So for the  users who have reputation between `-1000000000` and `1000000000` will get  reputation score `25`.

# The second：  The users "Never post" also have reputation score `25`

According to the above conclusion,  
The users who never post on steemit , so they can never got upvote or downvote, and the reputation of them should be `0`.
And also between `-1000000000` and `1000000000`, so it should be `25` for reputation score .

For example, 
The No.11 big whale @mottler, who's `Estimated Account Value $1,955,738.88`
![mottler9f42f.png](https://www.steemimg.com/images/2016/08/19/mottler9f42f.png)

The No.13 big whale @poloniex, who's `Estimated Account Value  $1,651,234.09`
![poloniex73523.png](https://www.steemimg.com/images/2016/08/19/poloniex73523.png)

# The Third： who will got `0` for for reputation score 

Let's try to finger out it.
The absolute value of it  should be `pow(10,25/9 + 9)`.
So  the result is: `-599484250318`
It should be `50` for `599484250318` but `0` for `-599484250318`.

And whose  reputation between `-599484250318` and `1000000000` will got reputation score  `0` to `25`.

# The Fourth： Who have negative reputation score 

@wang has `Reputation	-37,567,003,387,648`.
And his reputation score is `-16.17325898615303`
![wang90fcf.png](https://www.steemimg.com/images/2016/08/19/wang90fcf.png)

The reputation score should be`66.17325898615303` if @wang have positive reputation `37,567,003,387,648`.
Should be No.43 in  top  reputation score list.



# The Fifth:  My Reputation score is `57.500554714686565`

No.446  in  top  reputation score list.

# I need your upvote to make it forward, Thank you.

- - -

This page is synchronized from the post: [Some interesting things about reputation score/关于信用分，一些有趣的事](https://steemit.com/@oflyhigh/some-interesting-things-about-reputation-score)
