
---
title: '使用HE.NET的Dynamic DNS'
permlink: he-net-dynamic-dns
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-04 12:16:15
categories:
- cn
tags:
- cn
- ddns
- nat
thumbnail: https://steemitimages.com/DQmXDsZR3J2SDy58uT9uyBuNcr2vuPRLH6mihY3FTGWnyZM/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天说了Linksys WRT 1900ACS 端口转发设置
* [Linksys WRT 1900ACS 端口转发设置 & 思维定式](https://steemit.com/cn/@oflyhigh/linksys-wrt-1900acs-and)

今天来说说使用HE.NET的Dynamic DNS.

![](https://steemitimages.com/DQmXDsZR3J2SDy58uT9uyBuNcr2vuPRLH6mihY3FTGWnyZM/image.png)
[Image Source](http://tse1.mm.bing.net/th?id=OIP.1P9YLyzpLZTFZGTIIaeZcQEsCZ&pid=15.1)

# 为什么用HE.NET? 

HE.NET是我在2004年前后就接触过的服务商，后来我的服务器都放到Theplanet，然后Theplanet的一批工程师独立创建了Softlayer，再之后Softlayer被IBM收购，再反过来收购Theplanet，我的N台服务器终于都集中到一家了。至始至终，和he.net交流询价过无数次，但是始终没能合作。

2000年前后无聊去做一个DNS工具，其实就是打算在Windows上完全从零开始实现一个带图形界面的DNS查询工具。已发布版本支持了很多常见的DNS记录类型，新版本支持一些DNSSEC(Domain Name System Security Extensions)，但是后来忙别的事情，就没去耐心去做去了。做的过程要测试啊，我在DNS服务器里设置好对应的记录，然后再用我实现的工具去查询，藉此判断我的工具实现的是否正常。

虽然我的几台独立服务器都装着DNS服务，但是手动去改配置文件太麻烦，风险也高，万一搞死了就会挨骂。于是我就去找一些DNS服务商测试，找来找去，发现**HE.NET对各种记录支持的最全面***。于是它就成了我测试DNS的首选服务商。

Dynamic DNS 服务商好多家，但是既然HE.NET支持，我就不舍近求远啦。

# DNS和 Dynamic DNS

要说Dynamic DNS，就不得不提***DNS(域名解析服务)***；要提DNS，就不得不提域名。

简单的讲，***互联网的主机靠IP来区分***，要访问一台主机上的服务(HTTP、 FTP、EMAIL、DATABASE等)我们首先要知道对方的IP地址。但是互联网的主机千千万，抽象的IP地址根本无法记忆，而***域名就是给这个地址起一个好记的名字***。所以，我们就可以通过www.baidu.com这样的域名来访问到百度，通过www.taobao.com这样的域名来访问到淘宝。

而从***域名到IP的过程，就是域名解析，是由域名解析服务器(Name Server)来完成的***。

而另外一种场景就是分配给主机的IP不时的变化。
这时如果使用普通的域名解析服务，我们需要不时的修改解析记录，来将域名指向更新后的IP。这时会有一些问题存在，比如变化频繁，修改工作量大；变化时机不定，无法确定何时修改。

Dynamic DNS 很好的解决如上问题，它的基本原理就是，***当主机关联的IP变化时，自动更新解析记录***。

所以，屏蔽掉一些技术细节，通俗的讲：

* 互联网上的主机靠IP区分和访问。
* 域名给IP地址起了个好记的名，从域名到IP的过程就是域名解析。
* Dynamic DNS自动更新解析记录，适合关联到主机的IP不时变化的场景。

(本小节文本来自我以前在其它网站发表的原创文章，如果你找到雷同的，没错，那就是我写的 😀）

# HE.NET的Dynamic DNS

关于他们的DNS服务以及Dynamic DNS的使用细节，请参考：https://dns.he.net/


#### 大致步骤

注册之类的非常简单，大家按提示操作即可，这里就不赘述了，只列出一些关键步骤。

* 将要解析的域名DNS设置为HE.NET的DNS
* 在HE.NET的DNS面板中添加域名
* 添加对应的解析记录（比如A记录），并选取“Enable entry for dynamic dns”
* 生成用于DDNS客户端的密码(Generate the key used for dynamic DNS updates)
* 在主机上使用DDNS client。(设置定时任务)

#### 操作实例

1) 将域名DNS设置为HE.NET的DNS
![](https://steemitimages.com/DQmQdTqfLSENnGvz9AroxWx75UX9GptRHNLHBYyLRBQDwsH/image.png)

2) 在HE.NET的DNS面板中添加域名
![](https://steemitimages.com/DQmW5yoZxk1xye2NBnojtDkFqiSUMCK8i4aCdkERbxcpV8L/image.png)

3) 添加对应的解析记录
![](https://steemitimages.com/DQmNWEUF3ekWKEEFFmyfRcAZsGDhP874DxRvoz1eD8BgsJ5/image.png)

4) 生成用于DDNS client的密码
![](https://steemitimages.com/DQmRf5Eebnt9oFmXXpJaMDppr1S93xMzR93ZQ237DA8vXLs/image.png)

5) 设置DDNS client
`crontab -e`
添加如下代码：
`*/5 * * * * curl "https://dyn.dns.he.net/nic/update" -d "hostname=iot0.xxxx.com" -d "password=XXXXXX" -k`
代码部分可以查阅： https://dns.he.net/

好啦，大功告成啊。
想测试是否成功，ping一下域名，看看显示的IP
再用一些查看公网IP的工具，看一下两者是否一致就可以啦。

或者你已经设置好了NAT的端口转发以及开启了对应的HTTP服务之类的，那么直接访问域名就可以看到网站喽。是不是非常简单！

# 总结

本文简单介绍了域名、DNS、Dynamic DNS的原理。
并以HE.NET的DNS服务为例，为iot0.xxxx.com添加了一个Dynamic DNS的A Record。
限于篇幅，对一些技术细节只做通俗的解释，想了解对应知识的，请参阅相应的技术文档。

- - -

This page is synchronized from the post: [使用HE.NET的Dynamic DNS](https://steemit.com/@oflyhigh/he-net-dynamic-dns)
