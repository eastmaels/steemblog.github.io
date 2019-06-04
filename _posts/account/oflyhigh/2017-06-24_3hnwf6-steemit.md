
---
title: '关于STEEMIT账户权限以及相应的安全提示'
permlink: 3hnwf6-steemit
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-24 07:24:21
categories:
- cn
tags:
- cn
- security
thumbnail: https://steemitimages.com/DQmScfyNutsqV9kzFtykvqFhCTR8d9SxVo4pJnVnoGNCpyb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[](https://steemitimages.com/0x0/https://steemitimages.com/DQmVeCWZhNh1rckqWak5eSn6vbKtBxj4nHU9LgSyeUrKHQM/image.png)

最近几天中文区来了不少新人，很多人和去年我刚注册时一样，一头雾水。
当时我耗费好长时间学习如何发帖、怎么点赞以及如何插入图片让文章看起来更丰富
至于更高级的技巧如使用Markdown排版，是我玩了好久才学会的事情。
所以这两天我写了一些文章向新人们介绍这些或基本或略微高级的操作。

但是***重中之重的事情，就是安全问题***

假设这样一种情况，你把所有初中高级功能都学会了，也创作出N多高质量的文章，也获得了不菲的回报。然而***一旦不小心弄丢密码***，那么可不像银行，你可以拿着身份证去挂失去重置密码，***你账户内的所有资产将不再属于任何人了，包括你***。是不是很震惊，事实就是如此。这篇文章我们先介绍一些STEEMIT的账户权限，然后再给大家一些关于账户以及密码的安全提示。


# STEEMIT的账户权限
![](https://steemitimages.com/DQmScfyNutsqV9kzFtykvqFhCTR8d9SxVo4pJnVnoGNCpyb/image.png)

你可能在我的或者其它人的文章里，听说过***公钥、私钥、POSTING 私钥、ACTIVE私钥***等乱七八糟的词汇，如果你之前对此没有了解，那么肯定和我当初刚接触的时候一样一头雾水。所以我来说一下我的理解，供大家参考和探讨。

* 最重要的是密码
密码是你创建账户时生成的密码，***密码是所有私钥的祖宗***
也就是说，如果你密码泄露了，那么其它私钥你藏得再好也没有用了

* POSTING 私钥，可以说是最常用
当发表文章、给文章投票，都要使用到POSTING私钥

* ACTIVE 私钥，主要是用在财产相关方面
当你给别人转账或者在内部市场交易（买入卖出等）都要用到ACTIVE 私钥

* OWNER 私钥 重要性等同密码
这个我理解是密码的另外一种表现形式，重要性完全一样

* MEMO 私钥用于创建和读取MEMO

而公钥则是应用密码学算法生成的一组和私钥对应的公开字符串，任何人都可以读取。

私钥和公钥主要用于两个用途
* ***数据签名/校验***
* ***数据加密/解密***

所谓签名，就是给数据盖个戳，证明数据是我发送的。
*  签名过程： 用私钥生成数字签名，并附加到操作信息上
*  校验过程： 用公钥校验操作信息中的数字签名，由此判断数据是否合法

所以加密/解密，就是我传递的信息，只有接收者才能阅读
* 加密过程： 用接收者的公钥对数据进行加密
* 解密过程： 接收者用自己的私钥解密出明文数据。


# 关于安全的重要提示

![](https://steemitimages.com/DQmXGVoUVD7BRTeoHusvSfQXhscVMxHH4yUcY3QviR8UQf3/image.png)
上段内容中，刨除乱七八糟的技术细节，总结一下：
1) ***公钥是公开的***
2) ***私钥是私密的***
3) ***密码是所有私钥的祖宗***
4) ***私钥有不同的级别以及不同的用途***

有了这些总结，想必大家已经建立起来一些概念了。我在补充一个重中之重的
* ***密码不能恢复***

那么我们都会面临那些风险呢？
### 风险之一： 忘记密码/弄丢密码
有些人说没关系，我的密码浏览器记着呢
还有人说我保存在电脑里了
那么你有没有想到浏览器崩溃的可能呢？电脑硬盘坏掉也不是永远不会发生！
即便有万一之一甚至十万分之一的概率，损失也是难以接受的。

所以安全提示之一： 备份里的密码
建议离线保存在U盘等移动设备里，最好保存多份
当然用小本抄下来也是极好的，就是密码太长了点

### 风险之二： 密码被动泄露

我前几天发表了一篇文章
[🔓 [Security Alert] You may leak your steemit password (key) by accident / 安全警示，你可能不经意就泄露了你的steemit 密码](https://steemit.com/cn/@oflyhigh/security-alert-you-may-leak-your-steemit-password-key-by-accident-steemit)
说的有些人不小心转账时在MEMO区域填入密码，然后导致密码以明文的方式发送并被保存到区块链上，有心人根据这种可能就会获取你的密码

感兴趣的朋友可以去看看，注意一下防范类似风险。

### 风险之三： 在钓鱼网站上输入密码

随着STEEMIT流行起来，骗子们也蠢蠢欲动了。前阶段看到外文区有人讨论STEEMIT上已经出现了不少钓鱼手段。比如说给你个链接，说奖励你STEEM，打开后让你登陆，你登陆后奖励没拿到，你的STEEM、SBD被骗子转走了......

### 风险之四： 慎用第三方网站/软件
STEEM的流行，导致了一些优秀的第三方网站以及第三方软件诞生，一些优秀的站点如busy.org 我也使用过，优秀的软件如ESTEEM 我还参与了简体中文部分的翻译(繁体部分由@deanliu 翻译哦)

这些站点和软件都承诺用户密码/私钥均保存在用户本地，不会发送及上传至服务器。
但是第三方站点以及软件良莠不齐，不排除有的站点和软件由于编码不当或者其它主观客观的因素导致用户密码泄露。

### 风险之五： 将密码或者私钥交给朋友来操作
有时候可能出于某项复杂的操作你无法完成，或者什么其它的原因，你可能会让你的朋友帮你操作，但是务必选择靠谱的朋友，完成操作之后要及时修改密码。信任归信任，安全归安全，即便这个朋友极度可靠，但是万一他的设备中毒了呢？

罗列了一堆风险，感觉风险还应该有好多好多，限于篇幅以及我的体力，就不在赘述了。

# 补充一下密码恢复的问题
![](https://steemitimages.com/DQmfRTf2pfJAuvwNxm3LpzKjMBq5MpzYG7c6ek8kycxVQ7t/image.png)

不同于丢失密码，如果密码被盗以后被人修改，而你又记得原始密码，那么30天内有机会重置密码
重置密码的操作我没有试过，但愿永远别出现用到这个功能的时候。
保持良好的安全意识和安全习惯，让各种风险降到最低吧。


最后，让我们用STEEMIT官网的修改密码页面的安全提示结束这篇文章吧。

>The first rule of Steemit is: Do not lose your password.
The second rule of Steemit is: Do not lose your password.
The third rule of Steemit is: We cannot recover your password.
The fourth rule: If you can remember the password, it's not secure.
The fifth rule: Use only randomly-generated passwords.
The sixth rule: Do not tell anyone your password.
The seventh rule: Always back up your password.


----
感谢阅读
水平有限，欢迎大家一起讨论，如有谬误，烦请指正

欢迎upvote、resteem以及 following me @oflyhigh 😎
请将我设置成为你的见证人投票代理, 访问 https://steemit.com/~witnesses
 ![](https://steemitimages.com/DQmQhMNaw3fXpHsDM6Jx1bNi732DySj8JQefq9jjQENcosJ/image.png)

- - -

This page is synchronized from the post: [关于STEEMIT账户权限以及相应的安全提示](https://steemit.com/@oflyhigh/3hnwf6-steemit)
