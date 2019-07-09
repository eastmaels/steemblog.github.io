
---
title: 'Export Google Authenticator credentials to other device 获取2FA生成密码'
permlink: export-google-authenticator-credentials-to-other-device-2fa
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-20 05:41:00
categories:
- security
tags:
- security
- android
- cn
- teammalaysia
- google
thumbnail: 'https://lh3.googleusercontent.com/HPc5gptPzRw3wFhJE1ZCnTqlvEvuVFBAsV9etfouOhdRbkp-zNtYTzKUmUVPERSZ_lAL=w300'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://lh3.googleusercontent.com/HPc5gptPzRw3wFhJE1ZCnTqlvEvuVFBAsV9etfouOhdRbkp-zNtYTzKUmUVPERSZ_lAL=w300)</center>

One of my favorite exchanges has revamped and they implementing a very annoying safety feature: kicking me out of the trading page every inactive 30 minutes. The result is I have to now login10 + times a day just to login to check prices or to trade. This means I have to input 2FA code from my Google Authenticator every time to login too. Together with the stupid frequent ReCaptcha verification, every login now takes me at least 30 seconds.

There is nothing I can do with the ReCaptcha as that is one of the system design, but I can simplify the 2FA process. 
**The method is to export credentials of [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en) to the chrome extension [Authenticator](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?utm_source=chrome-app-launcher-info-dialog).**

### Use this trick if:

- You did not backup the specific app's credentials (the barcode or manual entry code) when you setting up 2FA with that app.
- You want to get the 2FA code on a computer instead of phone.

### Prerequisites:

- You are using Google Authenticator on an android device. 
- Your device must be rooted.

### Procedure:

1. In the rooted phone, use a root file explorer to get `/data/data/com.google.android.apps.authenticator2/databases/databases` and copy it to the computer.

2. In computer, use [Notepad++](https://notepad-plus-plus.org/download/v7.5.1.html) to open the `databases` file.

3. You will see lots of "null" characters but skip it all to the bottom of the file, where you see readable text like below and the red part is your credential key.

   ![1.PNG](https://steemitimages.com/DQmYoqUmej3ZeU18YHN86MSUeD2H3isVYiz5Eg5C8rmFRpV/1.PNG)

4. Copy the credential key and insert into Authenticator extension. 

   Authenticator -> Edit button -> Plus button -> Munual Entry 

   ![2.png](https://steemitimages.com/DQmVF35YuPtrvFcLwLx5eseuFTEtX6bfDU2Pjdh3xGxepNX/2.png)

   1. Now you can copy the time-based access code using just a click.

      ![3.png](https://steemitimages.com/DQmPq4zKh1PhE3BfpBjJ4FKMotyQeaJ3TgRMnxDb3WGJsFD/3.png)

------

The 2FA credential is crucial for the security obviously, that's why you should not store this information in any plain text form. Encrypt it and store it somewhere offline like the USB thumbdrive. The next time you switch your phone or even lost it, you can easily recover the access code. With root access, you can also use the [Titanium Backup](https://play.google.com/store/apps/details?id=com.keramidas.TitaniumBackup&hl=en) app to backup Google Authenticator with the credential.

You should also start backing up the credential whenever you setting up a new 2FA login for a service.

------

双重认证（2FA）在黑客病毒猖狂的现在已经变成必要的户口保护手段了，尤其是收藏着重金的加密货币网站更是必不可少。我使用的是 Google Authenticator，由于某个常用的交易网站由于保安原因时常会需要不断的重新登入，把手机上的 [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)  移上来电脑中的 Chrome 插件 [Authenticator](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?utm_source=chrome-app-launcher-info-dialog) 会方便很多。

谁适合服用：

- 想从电脑上快速获取 2FA 密码的人。
- 当初没有备份某个服务生成 credentials 的人。

前提条件：

- Google authenticator 必须运行在安卓手机上。

- 必须使用拥有超级用户权限的安卓手机

步骤见英文部分。

**谁拥有用于密码生成的 credential 就可以生成 2FA access code 登入特定的服务，所以一定做好保护功夫。永远不要保存在纯文字格式。**

---

![](https://steemitimages.com/DQmUosjBwzx8eGwr1P6NVGDBtjP2EKnPPYg7y4MaSDfsJqN/steemit_footer.png)
  ​

- - -

This page is synchronized from the post: ['Export Google Authenticator credentials to other device 获取2FA生成密码'](https://steemit.com/@fr3eze/export-google-authenticator-credentials-to-other-device-2fa)
