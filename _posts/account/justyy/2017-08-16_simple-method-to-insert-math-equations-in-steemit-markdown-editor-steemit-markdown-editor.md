
---
title: 'Simple Method to Insert Math Equations in SteemIt MarkDown Editor 如何在 SteemIt MarkDown Editor 里添加数学公式？'
permlink: simple-method-to-insert-math-equations-in-steemit-markdown-editor-steemit-markdown-editor
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-16 18:31:51
categories:
- cn
tags:
- cn
- steem
- steemit
- steemstem
- latex
thumbnail: https://chart.googleapis.com/chart?cht=tx&chl=c=\sqrt{x^2%2By^2}
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


SteemIt Markdown Editor does not support Latex easily. But one alternative (workaround) is to use the Google Tex Image URL. In particular I like [Markdown](https://helloacm.com/markdown/) and Latex because it is what-you-think is what-you-get.

我们都知道 STEEMIT支持HTML和[MARKDOWN](https://helloacm.com/markdown/)两种编辑模式，一旦启用了一种就无法使用另一种。我比较喜欢用Markdown, 因为这种是一种比较面向程序员 所想即所得的方式 (What you think is what you get).

I am a math fan, in my [last post](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript), I realized that inserting equations in SteemIt Markdown or HTML editor is a pain. The fact is that the Latex is not supported in the [SteemIt](https://helloacm.com/the-best-steemit-upvoting-strategy-calculator-in-javascript/) Markdown editor.

同时，我还是一个伪数学爱好者，在[上次的帖子里](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript)我就发现STEEMIT的MARKDOWN并不支持[LATEX](https://justyy.com/archives/2462)数学公式。实际上Markdown和[LATEX](https://justyy.com/archives/2085)也是两个独立的语言，在一般的环境下，需要通过第三方的包来启用在Markdown里Latex公式的支持，但是很明显，在[SteemIt](https://helloacm.com/how-to-get-transfer-history-of-steemit-accounts-via-steemit-apitransfer-history/)里不支持。

In Latex, we use $$ or $ to begin a math equation, but it doesn't work in SteemIt editor, obviously.

比如在[Latex](https://justyy.com/archives/1092)里，我们通过 $$ 或者 $ 来启用数学公式，这里明显不可以：

$$ \sum_{i=1}^{100} f(i^2) $$

We can use the Google API to show the image by inputing a math equation in the URL: The documentation can be found: https://developers.google.com/chart/infographics/docs/formulas

你看，还是没法显示。 其实我们完全可以通过图片的方式来插入数学公式，这里需要用 Google 的库支持，官方文档在：https://developers.google.com/chart/infographics/docs/formulas

We need to replace the following MATH-Equation with your intended math equation.
我们只需要替换以下  MATH-Equation 为你需要的数学公式即可：

```
![](https://chart.googleapis.com/chart?cht=tx&chl=MATH-Equation)
```

For example,
比如：

```
![](https://chart.googleapis.com/chart?cht=tx&chl=c=\sqrt{x^2%2By^2})
```

It shows:
显示效果为：

![](https://chart.googleapis.com/chart?cht=tx&chl=c=\sqrt{x^2%2By^2})

What the hell is the %2B in the URL? You will need to percentage-encode the URL parameters as some symbols represent special meanings in URL.

但，这里面的%2B 又是什么鬼？因为数学公式里含有的一些在URL中表达特殊的字符，像空格，加号，等号什么都得转义，

Here, I recommend an online tool (written by me) to encode the equation/text:
这里推荐一个我很久以前写的工具

https://helloacm.com/tools/url-encode-decode/

For example:
比如把

```
$$ \sum_{i=1}^{100} f(i^2) $$
```

URL-encoded becomes:
转义后就是：

```
%24%24%20%5Csum_%7Bi%3D1%7D%5E%7B100%7D%20f(i%5E2)%20%24%24
```

And the final Image URL to insert is:
然后整个图片地址就是：

```
https://chart.googleapis.com/chart?cht=tx&chl=%24%24%20%5Csum_%7Bi%3D1%7D%5E%7B100%7D%20f(i%5E2)%20%24%24
```

This is how it looks like:
效果为：

![](https://chart.googleapis.com/chart?cht=tx&chl=%24%24%20%5Csum_%7Bi%3D1%7D%5E%7B100%7D%20f(i%5E2)%20%24%24
)

I do hope that the SteemIt team supports Latex in the Markdown one day!

在[SteemIt](https://justyy.com/archives/5072)里没法原生态支持，这至少目前是个可行的方案，我真心希望SteemIt团队能把[LATEX](https://justyy.com/archives/2462)这个功能加上去，这样就能方便广大数学爱好者了，至少像我这种伪数学爱好者也能时不时晒晒公式装装B，是吧？

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和[英文博客](https://codingforspeed.com)。
- [Simple Method to Insert Math Equations in SteemIt MarkDown Editor](https://helloacm.com/simple-method-to-insert-math-equations-in-steemit-markdown-editor/)
- [如何在 SteemIt MarkDown 编辑器里添加数学公式？](https://justyy.com/archives/5081)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [The Best Upvoting Strategy Calculator in Javascript - 怎么样点赞收益最高? （新老用户都来看看）](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript)
- [How to Use Steem API/transfer-history and IFTTT to sync to Slack? 如何使用Steem API/transfer-history和IFTTT同步到Slack消息? ](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)
- [The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL 机器学习 用 MySQL 来演示 KNN算法 ](https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [Simple Method to Insert Math Equations in SteemIt MarkDown Editor 如何在 SteemIt MarkDown Editor 里添加数学公式？](https://steemit.com/@justyy/simple-method-to-insert-math-equations-in-steemit-markdown-editor-steemit-markdown-editor)
