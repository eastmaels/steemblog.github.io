
---
title: '实战：来扒扒骗子(钓鱼者)是怎么骗人/钓鱼的？ / anti-phishing'
permlink: 531ssp-anti-phishing
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-18 00:41:00
categories:
- anti-phishing
tags:
- anti-phishing
- security
- warning
- anti-scam
- cn
thumbnail: https://steemitimages.com/DQmamTwWtnhw8L46TodGbRHpB2XjsbNBpkiNhukcRsaNFQM/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmamTwWtnhw8L46TodGbRHpB2XjsbNBpkiNhukcRsaNFQM/image.png)

之前我的一个帖子刚刚发布不久，我就看到文章底部多了一条新的回复。

![](https://steemitimages.com/DQmTc6YLaPwKvTkiU9MtQsqPXYe3jwRJpKEgWwPRm6VKYL7/image.png)

凭我高达25的智商，一看就知道是骗子啦，上当肯定不会上当的，不过我就是想看看他咋行骗的。

# 骗子用文字代替链接

以前我说过，STEEMIT网页解析增加了一个新功能，就是冒充STEEMIT的页面链接或用红色字体警示。

比如下边代码：
`[steemit.com/@oflyhigh](http://a.com)`

会显示这个效果
![](https://steemitimages.com/DQmXq155gr9CDYWBvYFUPE4s59PkjRCFLrE7G44Hur9zMK1/image.png)

所以骗子现在有新办法了，用文字替代STEEM链接，这样不不会有红色警告信息了。

# 骗子把回复自己顶上来

为了让诈骗信息更容易被看到，当然也为了避免别人在看到诈骗信息之前看到其它机器人的警示信息，骗子会把自己的回复顶上来。
![](https://steemitimages.com/DQmTrt5N9K19RtMof6k9ET88Pu2axwbBiFUgynhZLKzBAQG/image.png)

同时为了避免警示信息跟在后边显示，骗子***在回复中加了一堆换行信息***。我们可以通过阅读帖子的源码，看到回复信息里的N多换行。
![](https://steemitimages.com/DQmRbzfyUF7ZCy5CgtcyRiZNajBjP5EeQsyJDs3ncF6WTW2/image.png)

# 骗子把警示信息踩灰

@arcange 的机器人会及时的提示钓鱼/诈骗信息。但是对于骗子而言，这可不是个好事，如果大家阅读到警示信息后不点诈骗信息，就不妙了。

![](https://steemitimages.com/DQme7mazakHDE8cfmrDHrmMvUJ585XU6pJyYCZT8Sk6AJRE/image.png)
所以，这个骗子，及时的把 @arcange 发布的警示信息踩灰，这样就容易被别人忽略掉了，不得不说，这是个技术含量还挺高的骗子。

# 骗子的域名和STEEMIT类似

我们继续来扒骗子的内裤，在新浏览器窗口中输入骗子的链接（***强烈不建议进行此项操作***）

![](https://steemitimages.com/DQmSADD5ru7TRqaC9bY2ybgZLq2ZJpKCG44Sd7EpQsBNeVz/image.png)
我们可以看到骗子的站点域名和STEEMIT高度相似，另外注意站点域名前边的小锁头，这真是个认真负责的站长，***还申请了网站SSL证书***。不过现在申请证书成本很低，有不少免费证书呢。这种低级证书只能证明站点和用户之间数据传递是被加密的，证明不了其它问题。

# 骗子把文章数据抓取过来

继续扒，打开链接之后，我们会看到对应的文章数据，为了让网站和文章链接看起来更加真实，骗子复制了我们对应的正文信息。

![](https://steemitimages.com/DQmckhC7E7SjuwjDLvFf7TDp7XtT5rTPafgks1UGzkavwGz/image.png)
是不是看起来和我的对应正文一样，简直是天衣无缝，如果不是我带着戒心去访问，我觉得我肯定会上当。

如果这个骗子把这能力用到正道上，那么开发出类似busy、dtube之类的站点，貌似也应该没什么难度，哎，一声叹息。

# 自动跳转到登陆页面

好了，现在如果不是我警惕性特高，我已经相信我上了一个真的STEEMIT了。

然后骗子的页面代码中用了如下代码控制自动跳转：
`<meta http-equiv="refresh" content="3; url=./login">`

然后弹出登陆窗口
![](https://steemitimages.com/DQmW1rTSDCB1aB33aLsVg2GCQe2KcrRn6KatHPZQ4MHitNc/image.png)

这时候，一不小心就会输入登陆信息，然后你的账户密码（私钥）等就会到骗子手里了，骗子就可以拿去胡作非为了（比如把你的钱转走，用的账户发诈骗信息，给诈骗信息点赞等等）

# 收尾工作做得漂亮

你以为骗子拿到你的账户密码就完结了？那一定不是一个负责任的骗子。

我尝试在上边登陆窗口随便输入点登陆信息，点击**Login按钮**，稍微等待后，骗子将页面重定向回STEEMIT.COM。

也就是说，STEEMIT.COM点钓鱼信息、进入钓鱼站、被盗取密码、离开钓鱼站回到STEEMIT.COM，整个过程天衣无缝，不注意的话，你完成整个操作不会觉得任何异常，根本意识不到自己账户密码被盗了。这样骗子就有足够的时间，来从从容容地做坏事了。

# 总结

通过一个真实的钓鱼信息，我们来捋一遍骗子诈骗/钓鱼的全套流程，我们了解到，骗子采取了如下技术和手段：

* 用文字代替链接
* 把回复自己顶上来
  * 回复信息里采用大量换行
* 把警示信息踩灰
* 域名和STEEMIT类似
  * 域名启用了HTTPS证书
* 把文章数据抓取过来
* 自动跳转到登陆页面（此处盗取账号密码）
* 跳转回STEEMIT.com （掩盖诈骗/钓鱼痕迹）

看看骗子的骗术多高超，这也解释了为什么总有人中招，甚至中招之后很久都不知道自己已经中招了，我高达25的智商，都差点中招呢😱。另外，顺便感慨一下，**骗子都这么努力了，我们还好意思虚度光阴嘛？！**

封面图源：[pixabay](https://pixabay.com)

----
***重要提示：不要好奇点开骗子链接，骗子有可能有更高超手段侵入你的浏览器或者电脑，那样就惨啦！***

- - -

This page is synchronized from the post: [实战：来扒扒骗子(钓鱼者)是怎么骗人/钓鱼的？ / anti-phishing](https://steemit.com/@oflyhigh/531ssp-anti-phishing)
