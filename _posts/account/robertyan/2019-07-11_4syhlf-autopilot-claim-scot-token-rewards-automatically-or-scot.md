
---
title: 'Autopilot: Claim SCOT token rewards automatically | 自动领取 SCOT 代币奖励'
permlink: 4syhlf-autopilot-claim-scot-token-rewards-automatically-or-scot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-11 15:47:06
categories:
- steem-engine
tags:
- steem-engine
- cn
- sct
- zzan
- palnet
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tesla_Autopilot_Engaged_in_Model_X.jpg/1920px-Tesla_Autopilot_Engaged_in_Model_X.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## 介绍

其实一直想写这个叫 Autopilot 的小工具，用于自动领取 SCT、PAL 等 SCOT 代币奖励，原因是 Steem Engine 在中国大陆访问比较迟缓，且 rewards 功能总需手动领取也比较麻烦。

上周 @julian2013 也提了这个问题，所以还是想尽快把这个服务完成。于是今天写了一下这个小的服务，希望对大家有用。

目前这个服务的介绍页面在 https://steem-driver.github.io/autopilot/

<center>
![Autonomous Car](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tesla_Autopilot_Engaged_in_Model_X.jpg/1920px-Tesla_Autopilot_Engaged_in_Model_X.jpg)
<sup>
Image Source: [Wikipedia - Autonomous Car](https://en.wikipedia.org/wiki/Autonomous_car) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0)
</sup>
</center>

## 基本功能

对于注册了服务的用户，每两小时自动领取 (PAL, SCT, ZZAN, etc.) 等 所有SCOT 代币

## 如何注册服务

为了使用这个服务，您需要：

1. 通过 steemconnect 的授权功能 [https://steemconnect.com/authorize/@self-driving](https://steemconnect.com/authorize/@self-driving)  给 @self-driving 账户授予发帖（Posting）权力。通过 steemconnect 授权完成后，可以通过在 steemd [https://steemd.com/@{你的账户}](https://steemd.com/@{你的账户}) 的 `Authorities` 区域查看是否已经给 @self-driving 授权成功
1. 正式服务推出时会提供注册界面，但目前还没有时间做前端页面，所以需要用户从注册的账户代理 2 SP 到 @self-driving 作为注册的验证步骤。可以通过行长的代理工具 https://steemyy.com/sp-delegate-form/ 进行代理，delegatee 中填写 self-driving。Autopilot 程序会通过检查代理的情况来获取用户名单，帮助用户自动领取奖励。等正式的注册页面上线后，用户可以随时取消 SP 代理。

## 后续计划

1. 完善这个服务本身的功能和用户体验
2. 添加新的功能，例如针对 SCOT 社区 设计的自动投票功能，对于 SE token 的市场价格预警等等

之后我们会进一步完善和更新这些开发计划。

如有任何问题，欢迎留言和提供建议。

- - - 

### Introduction

**Autopilot** is a automated bot that aims at easing your daily life at Steem and Steem Engine. https://steem-driver.github.io/autopilot/

<center>
![Autonomous Car](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tesla_Autopilot_Engaged_in_Model_X.jpg/1920px-Tesla_Autopilot_Engaged_in_Model_X.jpg)
<sup>
Image Source: [Wikipedia - Autonomous Car](https://en.wikipedia.org/wiki/Autonomous_car) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0)
</sup>
</center>


### Current Features

1. Automatically claim the SCOT tokens (PAL, SCT, ZZAN, etc.) for the users of this service every 2 hours


### How to Use

In order to register for autopilot,

1. Authorize @self-driving account with steemconnect [https://steemconnect.com/authorize/@self-driving](https://steemconnect.com/authorize/@self-driving) to grant the posting authority. You can check whether you did this successfully in `Authorities` section in [https://steemd.com/@{your_account}](https://steemd.com/@{your_account})
1. Delegate at least 2 SP to @self-driving account as a service registration step, so autopilot knows you want to enable the service. The delegation tool such as [https://steemyy.com/sp-delegate-form/](https://steemyy.com/sp-delegate-form/) can be used for the delegation. We need this delegation step because we don't have a decent UI for this service yet. We'll cancel the needs for delegation after this service gets mature, and you can undelegate the SP then.

### Future Plan

- Improve the Autopilot UI and user experience
- support more "autopilot" features for the users in the future, such as a smarter vote bot for SCOT communities and applications, alert for token price trends / patterns, etc.

- - -

For any questions, please feel free to share your ideas and comments here. 



- - -

This page is synchronized from the post: ['Autopilot: Claim SCOT token rewards automatically | 自动领取 SCOT 代币奖励'](https://steemit.com/@robertyan/4syhlf-autopilot-claim-scot-token-rewards-automatically-or-scot)
