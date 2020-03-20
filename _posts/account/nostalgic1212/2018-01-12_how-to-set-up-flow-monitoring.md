
---
title: '如何设置网站流量监控---How to set up flow monitoring'
permlink: how-to-set-up-flow-monitoring
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-12 03:17:45
categories:
- cn
tags:
- cn
- cn-reader
- busy
- technology
- blog
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


网站运行一个月，没怎么做宣传，只是在简书和steemit的个人描述里添加了域名。因为会写影评，看到别人求资源刚好我有，也会留个链接。前期对网站的宣传只到这个程度。就像你春天播种，到了秋天，不论好坏，都想知道收成，我也想知道自己网站的流量怎么样。于是，给网站加个流量统计的念头就冒出来了。

The site has ran for a month and I didn't do much publicity. I just added the domain name to Jane's and steemit's personal descriptions. Because of writing movie reviews, I surfed on the website such as douban. When I saw someone asked for the resources which I happened to have it, I would leave the link. The promotion of the website to this level in the early stage. Just as you sow in the spring, in autumn, you'll want to know the harvest, whether it's good or not. I wanna to know how well the my website run. Then, the idea of adding a flow statistic to the website pops up.

主要是用两种方法，首选的是Google analysis，https://www.google.com/intl/zh-CN/analytics/

Two methods are used, but I prefer Google analysis.

如果你有gmail账号，直接登陆即可。新建，然后到“全部网站数据”，看到“全局网站代码”了吗？等下我们需要这个。

If you have a gmail account, just log in. New, and then to "all site data". Can you see "global site code"? We need that in a second.

先用terminal登陆服务器

输入：cd /www/wwwroot   回车（下同）

输入：ls

输入：cd nostalgic1212.org（cd后面是空格+你的域名）

输入：vi wp-content/themes/start/footer.php

翻到最后一页，找到</body>

</html>，在这两排的上面，黏贴“全局网站代码”

输入：:wq   保存并退出，就OK了。

比较悲哀的是，我没弄明白Google analysis是怎么运作的，如果看得懂的，基本用这个就可以了。值得一提，由于某些原因，Google服务是需要科学上网的。具体到哪一步需要，我不清楚，因为我全程开着代理。

Unfortunately, I don't understand how Google analysis works. If you can understand it, Google performs quite good. It is worth mentioning that, for some reason, Google service requires scientific Internet access. I don't know exactly which step needs, cuz I turn on the VPS all the time.

本质上我是非常排斥用国内的服务的，在购买服务器和域名的时候，刻意避开了阿里这个公司。但是很无奈，Google analysis我用不来，只能退而求其次。

In essence, I am very reluctant to use domestic service. When purchasing the server and domain name, I deliberately avoid the company of Alibaba. Helplessly, it's too hard for me to use google analysis that I can only settle for the second choice.

其次用的是友盟，按照步骤注册好之后，点击web.umeng.com，选择立即使用，按照要求一步步填写好。按照步骤新建，之后会出现一个很多代码的网页。随意挑选一个，按照Google analysis操作的步骤，黏贴进去。

The second choice is Umeng. After the steps are registered, you should click web.umeng.com and choose to use it immediately, and fill it in according to the requirements. Follow the steps to create a web page with a lot of code. Choose one at random and stick it in the terminal according to the method which you operate on Google analysis.

查看效果，如果你和我一样，对外观不是很苛求，基本一次就可以了。

Look at the effect. If you're like me, who does not too demanding on the appearance, then it's ok in this time.

这时候你的网页右下角理论上就可以看到流量统计的图标了。找到复制代码的网页，找到网站设置，然后设置下访问密码。

At this point, you can see the flow statistics icon in the lower right corner of your web page. Back to the page which you copied the code, find the site settings, and then set the access password.

万事俱备，以后你就可以愉快的查看网站有多少访问量，有哪些人访问过了。

Everything is ready, and you'll be happy to see how much flow you have and who has visited it.

突然发现网站的流量比我预计的好太多了。

I suddenly found that the flow was much better than I expected.

- - -

This page is synchronized from the post: ['如何设置网站流量监控---How to set up flow monitoring'](https://steemit.com/@nostalgic1212/how-to-set-up-flow-monitoring)
