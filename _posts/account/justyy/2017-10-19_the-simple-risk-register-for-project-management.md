
---
title: 'The Simple Risk Register for Project Management - 工程管理中的风险评估表格'
permlink: the-simple-risk-register-for-project-management
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-19 19:04:42
categories:
- cn
tags:
- cn
- project
- management
- steemstem
- excel
thumbnail: https://cdn.pixabay.com/photo/2013/06/10/09/23/morocco-123978_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2013/06/10/09/23/morocco-123978_960_720.jpg)
*Image Credit: Pixabay.com*

The Risk Register is a simple method to record the potential risks during a project.  The risks need to be assessed from time to time so that potentially they can be mitigated. 

I was told to create a simple Risk Register form ant put down potential risks. The Risk Register form at least should contain the following fields:

- Risk Description
- Probability (how likely it occurs)
- Impact to the project
- Mitigation Methods (What are proposed to reduce the probability and impact)

Complex Risk Register Forms could extend fields to:

- Date Raised
- Risk Owner
- Mitigation Costs
- Contingent action
- Progress on actions

etc.  I have made a very simple Risk Register Form (template) in Microsoft Excel Format (.xlsx) and I would like to share with you:

![](https://steemitimages.com/DQmU3D1H1Q2gXT4zWyKZkrqTy4BL2QNBRmHDbdRsrPcNS6C/image.png)

@justyy's Risk Register Template Download:  https://rot47.net/bv

The probability (or likelihood) is estimated by values (could be float) from 1 to 3 with 1 unlikely and 3 means highly likely. The Impact is also assessed by scores 1 to 3 with 1 means low and 3 means great impact.

If we multiple probability and impact, we get a product which is from 1 to 9, and we can divide into three ranges:

- 1 to 3 - Low
- 4 to 6 - Medium
- 7 to 9 - High

In [Excel](https://helloacm.com/vba-script-to-crack-protected-excel-files/), the Risk Assessment column is entered as 

`=IF(F2<=3, "Low", IF(F2<=6, "Medium", "Great"))`

Risk Register is very useful in monitor the progress of a project and can control the risks and save the project.

![](https://cdn.pixabay.com/photo/2017/09/11/11/02/project-management-2738521_960_720.jpg)
*Image Credit: Pixabay.com*
-----------------------------------------

今天在参加公司一项目进展会议的时候，被欧盟项目审计员说没有风险评估表格。风险评估 (Risk Register) 是项目执行的重要一环节，每次开会跟进项目进度的时候都得把可能的风险评估一遍。

项目风险评估就能及早的发现问题、解决问题而让项目顺利执行。如果评估中遇到无法逾越的障碍则很有可能项目会被提前叫停（而不是再浪费大量的人力物力）

我今天的一任务就是创建这个风险评估表格，这个表格可以简单到只含有以下信息：

- 什么风险
- 发生的概率
- 对项目的影响
- 减轻风险的方案

我们还可以添加其它信息让这个表格变得更丰富：

- 风险提出的日期
- 谁负责
- 减轻方案的代价（费用等）
- 发生风险后的方案
- 定期跟踪这些方案

花了一点时间，弄了这个表格，于是想和大家分享一下（EXCEL 格式）

![](https://steemitimages.com/DQmU3D1H1Q2gXT4zWyKZkrqTy4BL2QNBRmHDbdRsrPcNS6C/image.png)

@justyy's Risk Register 下载:  https://rot47.net/bv

风险发生概率评估值是1到3，风险所带来的影响也是1到3，两者相乘值是1到9，可以分成三大类：

- 1 到 3 - 低风险
- 4 到 6 - 中风险
- 7 到 9 - 高风险

在[EXCEL](https://justyy.com/archives/5220)表格里，风险评估那栏的公式则是:

`=IF(F2<=3, "低风险", IF(F2<=6, "中风险", "高风险"))`

这是领导一项目的基本功！！

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

> [工程管理中的风险评估表格](https://justyy.com/archives/5504)
> [The Simple Risk Register for Project Management](https://helloacm.com/the-simple-risk-register-for-project-management/)
-------------------
> [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [The Simple Risk Register for Project Management - 工程管理中的风险评估表格](https://steemit.com/@justyy/the-simple-risk-register-for-project-management)
