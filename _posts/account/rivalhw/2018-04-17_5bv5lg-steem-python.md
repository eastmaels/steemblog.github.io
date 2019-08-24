
---
title: 'steem-python命令行操作指南'
permlink: 5bv5lg-steem-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-17 10:10:18
categories:
- steem-python
tags:
- steem-python
- steemit
- cn-reader
- cn
thumbnail: 'https://steemitimages.com/DQmaJo5S7XKac7YwmuKh8D9KCWk1ajXHgpt24Me8CE41LnL/1steempyhelp.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>　　我在之前写过两篇文章，一篇是《<a href="https://steemit.com/steem-python/@rivalhw/steem-python">steem-python的安装和配置</a>》，另一篇是《<a href="https://steemit.com/steem-python/@rivalhw/hdwje-steemit">steemit下多用户维护同一个公共账户</a>》，今天这篇讲下steem-python的命令行操作。</p>
<p>　　在开始之前，我们先来看下steem-python都有哪些命令操作。</p>
<p>　　在命令提示符下输入如下：</p>
<p>　　<em>steempy-h</em> 或 <em>steempy--help</em> 回车</p>
<p>　　返回如下图信息：</p>
<p><img src="https://steemitimages.com/DQmaJo5S7XKac7YwmuKh8D9KCWk1ajXHgpt24Me8CE41LnL/1steempyhelp.png" width="939" height="883"/></p>
<p>&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从上图中我们可以看出，steempy命令共包括如下(未加中文备注表示我也不清楚或没有使用过该命令)： &nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;set &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set configuration</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;config &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show local configuration</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show basic STEEM blockchain info</p>
<p><img src="https://steemitimages.com/DQmVkaGKE2bHkbWG43H3MXeofFAcmNJMssR6mDPCSNJvzct/2%20info.png" width="793" height="573"/></p>
<p>&nbsp;&nbsp;&nbsp;changewalletpassphrase &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change wallet password 修改钱包密码</p>
<p>&nbsp;&nbsp;&nbsp;listkeys &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List available keys in your wallet &nbsp;列出你钱包里所有的key</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;addkey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add a new key to the wallet &nbsp;添加一个新key到你的钱包</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;delkey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete keys from the wallet &nbsp;从钱包里删除一个key</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;parsewif &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parse a WIF private key without importing</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;getkey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dump the privatekey of a pubkey from the wallet</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;listaccounts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List available accounts in your wallet &nbsp;列出你钱包里所有的信息，包括账户名称、类型和key&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;upvote &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upvote a post 点赞帖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;downvote &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Downvote a post &nbsp;踩帖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;transfer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transfer STEEM &nbsp;转账STEEM</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;powerup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Power up (vest STEEM as STEEM POWER) &nbsp;&nbsp;将你的steem转成SP能量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;powerdown &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Power down (start withdrawing STEEM from steem POWER) 将你的SP转成STEEM</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;powerdownroute &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Setup a powerdown route</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;convert &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Convert STEEMDollars to Steem (takes a week to settle) 将SBD转成STEEM</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;balance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show the balance of one more more accounts</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;interest &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get information about interest payment</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;permissions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show permissions of an account 显示账户权限</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;allow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allow an account/key to interact with your account &nbsp;添加一个账户权限到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;disallow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remove allowance an account/key to interact with your &nbsp;account</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;newaccount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new account 创建一个新账户</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;importaccount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Import an account using a passphrase 导入账户</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;updatememokey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update an account's memo key &nbsp;更新账户memo key</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;approvewitness &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Approve a witnesses &nbsp;&nbsp;&nbsp;赞成见证人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;disapprovewitness &nbsp;&nbsp;Disapprove a witnesses 取消见证人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;sign &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign a provided transaction with available and &nbsp;required keys 签名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;broadcast &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;broadcast a signed transaction</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;orderbook &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtain orderbook of the internal market</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;buy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy STEEM or SBD from the internal market 从内部市场购买STEEM 或 SBD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;sell &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sell STEEM or SBD from the internal market &nbsp;从内部市场出售STEEM 或 SBD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cancel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel order in the internal market &nbsp;取消订单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;resteem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resteem an existing post &nbsp;转推帖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;follow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow another account &nbsp;关注某个账户</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;unfollow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unfollow another account &nbsp;取消关注</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;setprofile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set a variable in an account's profile &nbsp;修改资料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;delprofile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set a variable in an account's profile 删除资料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;witnessupdate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change witness properties 见证人更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;witnesscreate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a witness &nbsp;创建一个新见证人</p>
<p><br></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下边我们就来操作实践下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我们要查看某个命令如何使用，可以在命令后边加 -h ，系统会显示该命令的详细参数操作，见下图：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比如我们现在要从先前的授权操作里取消某个账户的授权，需要用到 disallow 命令，</p>
<p><img src="https://steemitimages.com/DQmPLA2Lur4S3HAPnSziygRkvT8Dk4fjH7QiQzMXDATTEXh/3%20disallow.png" width="829" height="312"/></p>
<p>　　则我们按上边输入命令：</p>
<p>　　<em>steempy disallow --account laodr XXX</em></p>
<p>　　注，XXX即 foreign_account，对应的公钥key，类似STMXXX</p>
<p><br></p>
<p>　　如果我们要点赞某个帖子，</p>
<p>　　输入命令：</p>
<p>　　<em>steempy upvote --account laodr &nbsp;-- weight 80 https://steemit.com/xxx</em></p>
<p>　　--account 参数后跟跟使用的身份账户名，比如 laodr</p>
<p>　　--weight 参数表示点赞的能量大小，从0.1到100&nbsp;</p>
<p>　　最后边跟要点赞的帖子详细地址</p>
<p>　　其它功能大同小异，有兴趣的同学可以按照如上方法去实践。</p>
</html>

- - -

This page is synchronized from the post: ['steem-python命令行操作指南'](https://steemit.com/@rivalhw/5bv5lg-steem-python)
