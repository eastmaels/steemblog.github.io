
---
title: "【Vicky's 小科普】如何傻瓜式用shadowsocks科学上网"
permlink: vicky-s-shadowsocks
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-28 14:44:48
categories:
- steem-guides
tags:
- steem-guides
- promo-steem
- cn
- cn-reader
- steemit
thumbnail: https://steemitimages.com/DQmRNFjLsaQCpFxAPoJpXWPZbYgGXQjUvrpFTUnvR3hL296/DSC00221.JPG
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近网络封锁升级，在目前还没有办法肉翻的情况下，掌握科学上网可谓是一项必备技能。steemit是否有天也会有Google的命运犹未可知，抱着多一门手艺总是好的技能，我开始研究了如何搭梯子。

首先，你得购买好海外VPS服务器，我自己用的是[vultr](https://www.vultr.com/?ref=7283331)。

经过简单的注册以后，你就可以拥有自己的服务器啦。注册前在网上搜索一下最近的优惠码或邀请码，可以有一定的优惠。一般个人用的话，2.5/mo的足够了。

**下载shadowsocks**

打开[网页](https://sourceforge.net/projects/shadowsocksgui/)点击download就可以，就是那么简单。

如果是 macOS 系统，调出终端用 root 登录服务器，运行以下代码：    

```
wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```

安装成功后，脚本提示如下（一般来说一路傻瓜式的按回车，直到出现以下代码即可）：    

```
Congratulations, Shadowsocks-python server install completed!
Your Server IP        :your_server_ip
Your Server Port      :your_server_port
Your Password         :your_password
Your Encryption Method:your_encryption_method
Welcome to visit:https://teddysun.com/342.html
Enjoy it!
```

如果有出现 **time out** 或者 **denial** 之类的字符，可能是防火墙未关，操作方法如下：    

登陆 vultr，是网站，不是终端服务器，找到 server-running 后面有串省略号一样的东西，点击选择view console，使用 root 登陆，手动输入    

`systemctl stop firewalld.service` （停止防火墙）    

`systemctl disable firewalld.service`  （禁止防火墙开机启动）    

接下来我们配置文件路径    

`vi/etc/shadowsocks.json`    

会出现以下脚本，是单用户配置 

```
{
    "server":"0.0.0.0",
    "server_port":your_server_port,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"your_password",
    "timeout":300,
    "method":"your_encryption_method",
    "fast_open": false
}
```

一般来说我们不可能单用户，所以要把他们都删掉。按 **i** 进入 **insert 模式**，将光标调整到合适位置后按 **dd**，把上述脚本包括括号全部删完。然后，将多用户配置代码复制黏贴进去

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

按 **i** 进入 insert 模式，需要将 8989-9004 对应的 password 改成你想要的数字，简单密码复杂密码都可以。将 **your_encryption_method** 改为 **aes-256-gcm**。因为是在vim模式下，会有些麻烦，耐心一些。修改完成后按 **esc**，输入 **:wq** 回车，就表示保存并退出了。

键入

`/etc/init.d/shadowsocks restart`

到这里服务器端口的配置就OK了。将shawdowsocks图标拖进application文件夹，双击打开软件，打开服务器设定，填入之前设置好的其中一个端口和密码，加密方式选择aes-256-gcm即可。

代理模式选择全局模式。这样shadowsocks就安装好了，可以在家里享受科学上网的乐趣啦。

题外话：

1、当然，购买现成的服务也不是不可以，优点是出了问题有客服可以解决（如果没有跑路的话），缺点是树大招风，比较容易被GFW检测到。再者，很多都存在超售现象，网速得不到保证；

2、如果自己搭建，建议将默认的SSH端口换成别的。我刚开始运行自己服务器，才半天就被攻击了六千余次，吓到半死。如果被暴力破解，很可能会变成肉鸡；

3、几个朋友共享梯子倒还好，但不推荐以此为生。之前在推特上看到，某梯子商家被判刑了。我认识的几个卖梯子的“个体户”现在不是停止服务，就是低调的一塌糊涂。

![DSC00221.JPG](https://steemitimages.com/DQmRNFjLsaQCpFxAPoJpXWPZbYgGXQjUvrpFTUnvR3hL296/DSC00221.JPG)

谢谢大家的来看我的文章，如果您喜欢的话，请在steemit上关注我@nostalgic1212，或给我点赞和留言，再次感谢～

Thank you for reading my articles. If you like me, plz follow @nostalgic1212, or upvote me and leave your comments on steemit. Thx a looooooot~

- - -

This page is synchronized from the post: [【Vicky's 小科普】如何傻瓜式用shadowsocks科学上网](https://steemit.com/@nostalgic1212/vicky-s-shadowsocks)
