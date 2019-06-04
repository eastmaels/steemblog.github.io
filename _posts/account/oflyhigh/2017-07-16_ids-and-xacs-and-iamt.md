
---
title: '继续聊当年我掌握的屠龙(西方恶龙)技： (二) IDS & XACS &iAMT'
permlink: ids-and-xacs-and-iamt
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-16 06:46:45
categories:
- cn
tags:
- cn
- cn-writing
- cn-programming
thumbnail: https://steemitimages.com/DQmNmuysoyBzp3aGYBpmAQYrmfN9KWFaxMVwMuzHrubCGDU/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


上文聊到了手机开发和手机系统开发
* [聊聊当年我掌握的屠龙(西方恶龙)技： (一) Brew & SMS](https://steemit.com/cn/@oflyhigh/brew-and-sms)



搞了两年手机开发，我就转行了，换到一个全新的领域，改做网络安全。
如果是在BREW和SMS领域还算得上半个权威的话，在网络安全领域完全是个小白。所以基本上是一边工作一边努力学习。


# IDS 

![](https://steemitimages.com/DQmNmuysoyBzp3aGYBpmAQYrmfN9KWFaxMVwMuzHrubCGDU/image.png)

网络安全领域我参与的第一个项目是IDS，全称***Intrusion Detection Systems***，意即***入侵检测系统***。你可能知道防火墙但是未必听说过IDS和IPS， 防火墙主要是配置一些规则和策略，根据规则策略决定放行或者阻断IP或端口的访问，IPS和防火墙类似，但是先进那么一点点。而IDS的作用就如同它的名字，主要是检测。

我加入时，公司的IDS产品已经做得相当完善了，并且大卖特卖，用我们产品经理的话说，我们躺着啥也不用干，就靠卖COPY的收入就可以过得相当滋润了。但是啥也不干，好意思嘛。于是从原理到底层各种学习和研究。比如TCP/IP协议的各种封包机制，ARP、FTP、SMTP等各种协议分析，都学习的很透彻。

IDS的机制其实很简单，本质上就是监听。放在本机上，就是把网卡设置成混杂模式，如果是路由器则更简单，有监听口，这样所有局域网的数据包都可以收到了。然后根据监听到的数据匹配攻击规则，就可以判断出来是否有入侵发生了。说到监听，除了写程序，那时候用的最多的工具就是Sniffer和IRIS，我比较喜欢IRIS用来学习和分析各种协议的封包非常方便和直观。而规则库是基于snort的Rules， snort本身就是一款开源的IDS系统，详情可以参见： https://www.snort.org/

找了一下2005年Windows下设置Snort成功后在别人技术贴(CU)底下的合影
![](https://steemitimages.com/DQmdVxghemLp7ZWJy4WyKCMsgA4h3GaFzzgLHyaynht4mpV/image.png)


我们做的则是裁减slackware、进行协议分析、与snort规则比对、以及超级强大的Window 端管理。尤其是Delphi做的Windows管理端那是相当强大了。忘记说了，当时IDS组的负责人也在 steemit.com 上哦，Delphi超级高手，不过他很少发帖，我就不爆他ID了：）

当时为了熟悉一些常用的入侵手段，项目组成员的电脑成了大家彼此练手的对象，于是工作期间经常听到此起彼伏的骂声： “我靠，那个畜生又把我电脑干蓝屏了”。至于监视彼此的邮件内容、还有FTP都上传下载了啥好玩的东西，更是家常便饭。所以IDS项目组混过以后，我就练就了极强的安全意识，比如说邮件都用SSL连接(SSL链接： POP 995, SMTP 465), FTP则要么用SFTP，要么用FTPES(FTP over explicit TLS/SSL)，否则被人监视的感觉真的很不爽。

说要被监视，不得不顺便提一下大墙，大墙和IDS基本类似哦，尤其是以前常用的RESET功能，更是我们IDS中切断链接的常用伎俩。

后来我们产品经理和部门经理闹别扭，拉着N多IDS成员集体辞职，但是最终只有组长和产品经理断然离去，毕竟和不明朗的未来比起来，还是赚死工资更稳妥一些。但是IDS项目也就因此停止继续投入研发资源了，反正产品已经很成熟了，卖COPY就是了。说到COPY，不得不提到一个***节点***的问题，所谓多少***节点***，就是一台IDS能同时监控多少其它主机，比如说支持10个节点的设备卖20W，支持100个节点的设备卖100W，有段时间专门负责处理多少个节点，大多数时候，就是源码里改个常量😀 如果那些花几百上千万买了支持N多节点设备的用户知道这件事，不知会作何感想。或者人家根本不在乎这些事，能花出去更多的钱，才是能耐，不是嘛。

# XACS

IDS项目落幕以后，我又参与了一段时间Firewall研发，但是刚刚熟悉一点点就被抽调到一个很重要的项目中去，负责底层的开发。X是26个字母中的一个，我就不写出来，以免引起一些不必要的麻烦。

简单的说，这个就是个访问控制系统。

大家都去过医院，医院有一些管理系统比如HIS、PACS、LIS等等，简单点说就是存储用户数据、用户检查影像数据、用户病历数据等等，具体哪个是哪个，我时至今日也对应不上，不过不影响我们继续讲故事啦。这些系统有个很重要的问题，就是用户不分级、医生不分级。

举例说，某个重要的人物(政要等)，去医院看病，是不是也要建立用户档案、也要存影像检查数据、也要保存病历数据？但是问题来了，一个小医生也可以登陆这些系统，也可以看到这些资料，如果把这些资料泄露出去，就可以造成一个不必要的麻烦或者恶劣的影响。而我们的XACS就这在这些系统上插入一个访问控制层，将用户数据分级，将医生权限分级，这样权限低的医生就无法看到权限高的用户的数据了。

这些系统最大的难点就在于要很很多系统打交道，而这些系统都有各自不同的机制用到不同的数据库，比如说Oracle、SQL Server 、MySQL、ACCESS等等，于是我就努力学习在c程序中如何和这些数据库打交道才能完成和不同系统的交互。

神马UnixODBC、FreeTDS、OCI(Oracle C Interface)一顿学习，尤其是OCI，印象中应该上千页的文档，为了实现某个功能我累的头晕眼花。

![](https://steemitimages.com/DQmYPHJvj14CMZxoaumwFRkZQe3UczE2Wvk3oxcd9Wfqthj/image.png)
上边照片不是我工作单位哦，是去他们那测试和实施我们的系统，涉密单位，所以把名头抹掉了。感慨一下，那时候的头发好浓密啊(头发都去哪里了呢?)。头昏眼花加班加点干了好几天，克服了无数之前没有想到的障碍，终于把测试系统成功部署。值得一说的是，因为我想在宾馆上网，但是宾馆有网口没网线，我一小弟居然从涉密单位中给我顺出来一条网线，真是胆大之极啊😀

后来就把系统移交给他们了，也不知道现在各大医院运行的系统里是否有我写的代码?

# IAMT

继 IDS & XACS以及其它一些乱七八糟的项目之后，我又带领团队参与了和Intel 合作的iAMT项目，百度上相关的词条就是我在06年创建的哦。当时Intel的工程师对我这边抱有极大的期许，可是我对部门领导的一些做法颇不认同，最后这个项目草草了事后我去了集团其它子公司。据说，仅仅是据说，Intel的人把我们这边的领导骂了个狗血淋头，然后原部门每逢例会，第一件事必然是对我进行批判。当然了，我是缺席这种批判会的，然而我的N多小弟不断传达最新消息给我。

![](https://steemitimages.com/DQmeuuZ3KNXC7GMxf2P97m5odSmgJQECLr2xKqf1dxxEkS8/image.png)


# 结论

无论是IDS中学习的TCP/IP协议封包以及其它各种技术，还是XACS中的OCI等技术，现在应该都没有没落，然而十几年过去了，我早已忘得一干二净了，除了拿来回忆一下，估计再也写不出当年的代码了。有些技术技能，就像当年的头发一样，一去不返了，呜呼哀哉！

- - -

This page is synchronized from the post: [继续聊当年我掌握的屠龙(西方恶龙)技： (二) IDS & XACS &iAMT](https://steemit.com/@oflyhigh/ids-and-xacs-and-iamt)
