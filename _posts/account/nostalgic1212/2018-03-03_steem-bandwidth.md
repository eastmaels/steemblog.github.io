
---
title: '【Vicky''s 小科普】如何对宝塔面板/Wordpress/Vultr/shadowsocks重置密码'
permlink: steem-bandwidth
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-03 14:42:51
categories:
- steem-guides
tags:
- steem-guides
- cn
- cn-reader
- password
- security
thumbnail: 'https://steemitimages.com/DQmR64Q2TG5qNt9ChHLoQCvidMH1wNEWPZ8jtyVvGhy7QQZ/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-02-09%2019.16.19.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![屏幕快照 2018-02-09 19.16.19.png](https://steemitimages.com/DQmR64Q2TG5qNt9ChHLoQCvidMH1wNEWPZ8jtyVvGhy7QQZ/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-02-09%2019.16.19.png)

前段时间因为1Password账户打不开，导致我丢失了一大串账户的密码。虽然后来这些密码在keychain里面都找到了，但毕竟1P那个账户算是废了，为了完全杜绝账户遇袭的可能性，我专门找了一个晚上时间针对上述账户的密码进行了重置。

**1、恢复宝塔密码**

用服务器密码登陆终端，输入指令
`cd /www/server/panel && python tools.pyc panel testpasswd`

此时你的密码就变成了testpasswd。用testpasswd登录宝塔面板，进入面板设置—面板密码，重置密码即可

**2、恢复Wordpress密码**

三种方法

1）你还拥有WP的原密码

登录WP—-用户—-账户管理—生成新密码—更新用户信息。退出登录，再用新密码重新登录即可。

2）你失去WP的原密码

在WP界面，下方有个忘记密码，填入你注册时使用的密码，获取新密码即可。

3）你失去WP的原密码，且不记得注册时候的邮箱

登录宝塔界面—数据库—phpMyAdmin—-用户—wp_users—编辑—user_pass，在这里输入密码即可，注意这里一般是MD5加密的，实在搞不清楚的去找下教程，我记得当时倒腾这个的时候，有个通用的MD5转乘的密码“password”。

**3、恢复Vultr密码**

两种方法

1）你还拥有vultr的原密码

登录vultr—account—authentication—change password即可

2）如果你不记得原密码，可以用注册的邮箱找回密码。别和我说不记得注册的邮箱，那我真的帮不到你了。

**4、shadowsocks端口密码恢复**

如果是MacOS系统，调出终端用root登录服务器，运行以下代码：

`vi/etc/shadowsocks.json`

之后会出现以下代码：

```
{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{
         "8989":"password0",
         "9001":"password1",
         "9002":"password2",
         "9003":"password3",
         "9004":"password4"
    },
    "timeout":300,
    "method":"your_encryption_method",
    "fast_open": false
}
```
此时，按“i”进入insert模式，需要将8989-9004对应的password改成你想要的数字，简单密码复杂密码都可以。因为是在vim模式下，会有些麻烦，耐心一些。修改完成后按**esc**，输入**:wq**回车，就表示保存并退出了。最后键入以下代码并回车，就大功告成。

`/etc/init.d/shadowsocks restart`


谢谢大家的来看我的文章，如果您喜欢的话，请在steemit上关注我@nostalgic1212，或给我点赞和留言，再次感谢～

Thank you for reading my articles. If you like me, plz follow @nostalgic1212, or upvote me and leave your comments on steemit. Thx a looooooot~

- - -

This page is synchronized from the post: ['【Vicky''s 小科普】如何对宝塔面板/Wordpress/Vultr/shadowsocks重置密码'](https://steemit.com/@nostalgic1212/steem-bandwidth)
