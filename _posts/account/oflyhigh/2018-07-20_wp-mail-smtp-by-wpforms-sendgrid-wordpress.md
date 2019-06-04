
---
title: '利用WP Mail SMTP by WPForms插件以及SendGrid 开通WordPress的邮件功能'
permlink: wp-mail-smtp-by-wpforms-sendgrid-wordpress
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-20 01:46:03
categories:
- wordpress
tags:
- wordpress
- email
- mail
- sendgrid
- cn
thumbnail: https://cdn.steemitimages.com/DQmWsPFNUctqfRTi7FnZQvjJr3QkunBFW6zimfWy7noMGWV/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


安装好WordPress之后，设置了一个用户并尝试重置密码，结果提示我如下信息：

>The email could not be sent.
Possible reason: your host may have disabled the mail() function.

![](https://cdn.steemitimages.com/DQmWsPFNUctqfRTi7FnZQvjJr3QkunBFW6zimfWy7noMGWV/image.png)
(图源 ：[pixabay](https://pixabay.com/))

一想到要折腾邮件服务就很头大，并且搞不好还可能被人用来SPAM，那么有没有啥便捷又安全的方法解决Wordpress邮件发送的问题呢？答案还真有，就是使用**`WP Mail SMTP by WPForms`**插件以及**`SendGrid`**的邮件服务。


# 安装插件

登陆Wordpress后台，进入到**`Plugins`**页面，选择**`Add New`**。在右侧的搜素框中输入**`wp mail`** ![](https://cdn.steemitimages.com/DQmZpcrjQDAsRSc4j5gz8BUkTVLnWtP1PoWL3SkrfmPHkMi/image.png)

出来的第一个结果就是我们要的**`WP Mail SMTP by WPForms`**， 点击**`Install Now`**进行安装
![](https://cdn.steemitimages.com/DQmRVLmLNdjxVywnuwE74ahrUeigQ98KDC5vF6uhy1CHGDJ/image.png)

安装后，显示的效果如下，然后点**`Activate`** 激活。
![](https://cdn.steemitimages.com/DQmYi8zC1fgDpfP8JMzF9UaVLtv5PNTEk5ufGQh6jE3YNQB/image.png)

# 设置插件

然后在列表中点**`Settings`** 进行设置。
![](https://cdn.steemitimages.com/DQmRamxEVE3vTrMV6thmVdxEAvTqTtTPgyJcmcSuE1VKg8q/image.png)

然后选择**`SendGrid`** ，在**`API Key`**中输入SendGrid那边生成的API Key即可
![](https://cdn.steemitimages.com/DQmUrnJZSap8BSfAFoarKFx9RLKDrkUDhBF9kycpqT7Xvug/image.png)

# 测试发件

点击**`Save Settings`**保存设置，就搞定啦，试着重置一下密码
![](https://cdn.steemitimages.com/DQmXwdjZ6kUTmNkaiJLx8EFAXkLejWPRZHZi3emuCsEcApN/image.png)
完美收到，耶。

是不是超级简单方便呀？终于不用头大如斗了😳

# 相关链接

* https://wordpress.org/plugins/wp-mail-smtp/
* https://sendgrid.com/
* [Ubuntu 18.04 安装Apache2、PHP7.2、MYSQL](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-apache2-php7-2-mysql)
* [Ubuntu 18.04 使用独立用户运行虚拟主机 (mpm-itk)](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-mpm-itk)
* [Ubuntu 18.04 上安装WordPress](https://steemit.com/wordpress/@oflyhigh/ubuntu-18-04-wordpress)

- - -

This page is synchronized from the post: [利用WP Mail SMTP by WPForms插件以及SendGrid 开通WordPress的邮件功能](https://steemit.com/@oflyhigh/wp-mail-smtp-by-wpforms-sendgrid-wordpress)
