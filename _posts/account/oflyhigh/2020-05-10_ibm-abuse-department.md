
---
title: '被IBM公有云的Abuse Department折磨半死'
permlink: ibm-abuse-department
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-10 14:12:27
categories:
- cn
tags:
- cn
- life
- blog
- server
- service
thumbnail: 'https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大概十几天以前，我的一个客户站点无法访问，然后我调查半天没调查明白，奇怪的是服务器上其它站点都正常。

![](https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

服务器是IBM公有云中的裸金属(我一直以为这个翻译怪怪的）其实就是独立服务器。于是想着登录一下它们的后台看看到底发生了什么事情。

自从SOFTLAYER被IBM收购以后，不得不说的是它们的后台是越来越复杂也越来越难用了，如果是国内访问的话，还要加上难以登录，费了九牛二虎之力爬上去之后，竟然发现这样一条Support Case:
>SoftLayer Security has received the following MALWARE URL complaint in reference to an IP hosted on your server. A copy of the complaint is listed below or attached to this ticket for your review. Please disable or remove this activity immediately as it is direct abuse of the network services and a violation of your TOS and AUP. Failure to resolve this issue in an expeditious manner could lead to service interruption for this server. Please update this ticket with resolution to this issue. We thank you in advance for your quick action and cooperation.

然后发了一个网址过来，过两天又发来一个更新：
>In order to prevent further abuse of our AUP/TOS, we have blocked access to the IP ADDRESS associated with this abuse report.

我擦，竟然没有收到邮件没有收到电话通知，直接被屏蔽IP了。懒得纠结为啥没有收到邮件，我告知它们马上解封IP，我好调查一下。

它们倒是很快地解封了IP，然后我调查一下，涉及到用户页面就是很正常的产品介绍页面，非常简单的HTML，也不包含任何脚本，而且这个用户站点里边内容最近一次更新是2014年1月5日，已经6年多没有更新过了，哪里来的啥恶意软件。

把服务器上ls命令截图发过去，并和他们说明以后，他们说这个页面被https://www.virustotal.com的两个引擎报有问题，可是要知道，virustotal.com上其它近百个引擎可是判断这个页面是没问题的，这很明显是误报嘛。

把这个消息回复过去后，我就没再怎么理会，明显的误报嘛，给他们说明了，应该就没问题了。

可是今天突然发现整台服务器都无法访问，我以为是他们网络维护导致的，费了半天近登上去一看，发现我擦，竟然整台服务器被拔网线了。

>In order to prevent further abuse of our AUP/TOS, we have blocked access to the SERVER associated with this abuse report.

好吧，其实之前有几次要求我继续跟进的内容，可是我根本就没有收到邮件啊。况且就算不是误报，是恶意网页，你屏蔽了IP就足够了啊，这下被客户们骂惨了。

我要求他们马上恢复服务器访问，倒是很快访问了，但是还是要求我继续跟进那个问题。打电话和这个站点的用户后，他表示最近也没精力检查和维护，让我直接删了吧。

这个他们说的MALWARE URL问题算是解决了，不过我还是很不高兴，更新CASE，总得发个邮件吧？况且明明屏蔽IP就够用为啥拔网线，我怒斥了他们。

他们回复说邮件都发送了，是不是我没收到？另外告诉我可以做到每次行政行动之前都打电话给我：
>Additionally, as previously mentioned, we would be happy to make a courtesy call prior to administrative action in the future. Let us know which number to call and we will make an account note. 

并且强调：
>Additionally, if the site is clean, I recommend reaching out to Google and disputing their flagging of this site. Any sites flagged by google will set off warnings in user browser advising against visiting the site. 

好吧，你们店大，怎么说都有理，我也拿不出证据证明我没收到邮件（然而确实没收到）。跟他们打交道太累了，这十几年无数次的误报，无数次的DMCA投诉啥的，每次处理一个CASE，都感觉累得脱了一层皮。以前后台登录方便，还便于及时处理，现在简直是令人难以忍受的折磨。

![](https://cdn.pixabay.com/photo/2017/10/05/02/52/goodbye-2818190_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

好在我计划不再和他们打交道了，和傲慢的IBM 公有云Abuse Department 说白白啦，再也不必被各种匪夷所思的CASE折磨了，想想就觉得很美好。

- - -

This page is synchronized from the post: ['被IBM公有云的Abuse Department折磨半死'](https://steemit.com/@oflyhigh/ibm-abuse-department)
