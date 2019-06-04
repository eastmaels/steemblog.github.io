
---
title: '聊聊当年我掌握的屠龙(西方恶龙)技： (一) Brew & SMS'
permlink: brew-and-sms
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-15 16:16:45
categories:
- cn
tags:
- cn
- cn-writing
- cn-programming
thumbnail: https://steemitimages.com/DQma91s9yuZoPoGyAaCuTQGf4eM7j2eU2cgTY48uVBzogqy/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天偶然发现自己以前写的一篇文档，是有关Windows编程的，突然颇有感慨。
发现这些年从事过不少乱七八糟的工作
* 单片机系统开发
* 手机软件、手机系统开发
* 网络安全系统开发
* 医疗器械相关软件开发
* 服务器管理、服务器端软件开发
* 科学计算程序开发和维护
* IOT相关的开发

基本上就是不停的学、不停的忘。不由想起之前自己掌握的一些(当时)很强大的技能。

![](https://steemitimages.com/DQma91s9yuZoPoGyAaCuTQGf4eM7j2eU2cgTY48uVBzogqy/image.png)

# Brew

说到手机软件开发，大家难免想到IOS和安卓系统，很可惜，我搞手机软件开发的时候这些系统还没出来。

![](https://steemitimages.com/DQmbyD9rEFJVP52QKD2FAbRsDgtsia6joTVb8dX28MEB5Jd/image.png)

我在公司做手机软件的时候，主要是协助索尼爱立信把Qualcomm 的BREW平台移植到他们新的手机型号上去，那时候我国内还很少有搞BREW的，我算是最早的一批，当时还有个网站叫移动未来，域名叫MOVE2008，没错，参与到这个网站的时候是2003年，那时候2008年就是我们所期盼的未来。我是网站管理员之一，然后我们一起讨论BREW，又要联系出版社出书等等。BREW，全称是Binary Runtime Environment for Wireless，翻译成中文叫无线二进制运行环境，当时联通要靠这个技术以及CDMA技术与移动打个翻身仗。那时候联通对BREW的宣传和期望有甚于现在的IOS吧。然而支持BREW的设备迟迟没有推向市场，那时候又是SYMBIAN占据了所谓“智能手机”的大部分市场，BREW最终铩羽而归。后来IOS、安卓等系统的出现，它彻底成为了历史。

而我傲视群雄的BREW技能，就再也没有什么机会发挥了，彻彻底底的成了屠龙(西方恶龙)技。

![](https://steemitimages.com/DQma91s9yuZoPoGyAaCuTQGf4eM7j2eU2cgTY48uVBzogqy/image.png)
既然提到Symbian，就顺便说两句，那时候Symbian手机真的是神迹一般啊。比如这款9210，合上之后就是一个手机，翻盖之后就变成了一部小电脑，真正的全键盘哦，当时上边能处理word、图表、PPT，就是说可以跑个精简版的Office，还能跑媒体播放器啥的，能听歌，能看视频，给人的感觉就是一机在手，夫复何求！记得有一天晚上在公交上玩这个手机，旁边一个漂亮妹妹上来搭讪说，你这个就是高科技吧？可惜当时不懂得装X配合妹妹，我和谦虚的说，就是一个手机。然后继续低头玩！手机害死人啊。😡

对了，记不清赵薇还是Maggie Q主演的一部什么电影，里边一个场景就是两个人拿着高科技设备互相通讯，道具就是Nokia 9210哦。当时我对这个设备情有独钟，所以电影上看到倍感亲切。 

9210在我眼里一切都是那么完美，直到后来出现了N86和N95.

![](https://steemitimages.com/DQmdwwcjGa8U2hePCJUDhdmLBywTJc35yXjsTPu1bMtjiz8/image.png)
N86 吸引我的就是能上WIFI，听歌功能强了一大块。我长草了好久，知道N95出来，为啥N95出来就不鸟N86了，无它，N95号称机皇啊。不要说我喜新厌旧，当年的9210C在回头看，无论从配置还是功能，都简直弱爆了。

我没关注过Symbian什么时候死的，后来后知后觉发现Symbian已死，觉得颇为感慨。如果说BREW的消亡不出所料，但SYMBIAN我一直以为它会成为世界第一呢。

# GSM、SMS

![](https://steemitimages.com/DQmSfGG5GDpCot4dG8V4tAnbC4oHpDG9DJagJM4c9qZgnRp/image.png)

上边说的是手机软件开发，虽然BREW移植算和系统有一点点关联，但其实手机系统的东西我们知晓的并不多，无非是知道索尼爱立信的一些输入法(t9)、计算器之类的东西。

而真正接触手机系统是参与后来与EPSON合作的一个项目中。没错，大家都知道EPSON做打印机啥的，可能不知道EPSON还一度企图做手机呢。大致就是一个裁剪的Linux系统，用MicroWindows做窗体。然后我主要负责其中短信以及电话相关部分。主要涉及的技术都是欧洲电信标准协会的一些文档

![](https://steemitimages.com/DQmTo7Uoc88THmPBXyB6qRqcowoMCHop5hJH1GTvFJ8sXXh/image.png)
这些是我当年熟读的一部分文档。

手机开发很好玩，学习完这些技术后，我经常利用自己掌握的技术发一些奇怪的短信给朋友。比如说`Flash SMS `，就是短信到达后不进入收件箱，直接显示在屏幕上，你读完了，短信就没有了。有些类似后来啥软件开发的阅后即焚的功能吧。

因为短信功能涉及到编码尤其是中文编码需要按照很复杂的规则编解码(PDU)，在当时我们裁剪的系统还不支持UNICODE(或者说我当时没意识到😭)，总之中文短信涉及到UNICODE编码，我们采取的方式是做了个很大的编码表然后查表，刚开始测试的时候，我忘记我范的是什么错误，但是我记得我一条短信发出去N久，目标机还没有收到，后来到了午饭时间，大家说不等短信了，吃饭去吧，然后吃饭回来，发现短信到达了😀 当然了，当时移动网络也经常有延迟。

后来不知道 什么原因(肯定不是我短信慢的缘故)，这个项目也破产了。然后我熟读ETSI文档，精通各种类型短信编解码以及发送收取的技术，又成了屠龙技。

后来我把Linux上开发的短信功能，深度优化并移植到Windows系统上来，做了个短信息收发工具，并且加入数据库管理短信息以及联系人等等，功能非常完备，运行也很稳定。我准备用这个软件赚一笔，过年回家也带着笔记本继续开发，颇为努力。然后大年初二喝了很多酒之后，我觉得笔记本(ThinkPad T42)特慢，就启用了一键恢复功能，然后把笔记本恢复至出厂设置，忘记了我的程序啥的都保存在C盘文档目录下。于是心灰意冷，再也不想搞短消息了。

直到前些年玩IOT，接触了SIM900A模块，才勾起一点以前的兴趣，捡回来一点点。
详情可见： [介绍一下SIM900A 和以前做的一个小例子](https://steemit.com/cn/@oflyhigh/sim900a)

当时其实还想过做短信群发器，不过当时移动和联通都对外卖端口，量大的话每条只有五六分钱，而用手机卡加群发器则要1-2毛钱每条，遂放弃。那些卖短信的网站也玩过，我记得我有一个网站的用户名密码，那时候还不流行RESTful啥的，不对外提供接口，只能网页登陆，然后在文本框中导入名单和信息并发送。为了方便我写了个小程序，自动登陆网站，这样就可以用程序直接发短信了。玩了一段时间后，没啥意思，也就作罢了。后来这个企业逐步降级名头越来越小，最后被一个大企业把企业资质买走，短信业务也就不了了之。

# 结论

![](https://steemitimages.com/DQmS3wdq2kKp5izeZ2wA5u1jGWBewygKEuKxhSNDxWabcMY/image.png)
(这个配图是不是很尴尬)

Brew 和 SMS 是十几年前我熟练掌握的屠龙技，然而BREW已经彻底沉沦，SMS现在也早已沦落到很尴尬的地步，早些年逢年过节大家流行短信拜年，现在短信拜年会不会显得很古董？手机里的短信都是一些流量报告以及催费之类的，很少看了。

为了这两大屠龙(西方恶龙)技，我耗费无数心血啊。然而世间已经无龙(西方恶龙)可屠，呜呼哀哉！

- - -

This page is synchronized from the post: [聊聊当年我掌握的屠龙(西方恶龙)技： (一) Brew & SMS](https://steemit.com/@oflyhigh/brew-and-sms)
