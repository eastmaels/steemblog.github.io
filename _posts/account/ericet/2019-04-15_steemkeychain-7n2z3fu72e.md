
---
title: "Steem Keychain 简介和操作指南"
permlink: steemkeychain-7n2z3fu72e
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-15 19:57:12
categories:
- cn
tags:
- cn
- cn-reader
- jjm
- steem-guides
- whalepower
thumbnail: https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain2.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前写过三篇关于Steem Keychain的帖子，写的比较零散，这里汇总成一篇。

<h2>Steem上的登录方式有3种：</h2>

<ul>
<li>直接输入密码登录，比如登录steemit.com</li>
<li>通过第三方应用steemconnect授权登录,比如登录busy.org,partiko,tasteem,dclick 等DApps</li>
<li>通过浏览器插件Steem Keychain登录</li>
</ul>

直接输入密码登录的方式简单粗暴，但是这种登录方式的缺点是，如果你不小心登录一个钓鱼网站，页面和steemit一模一样，你的密码就会被记录下来。

通过第三方应用steemconnect授权登录解决了第一种登录的问题。steemconnect在这里的作用是作为可靠的第三方，保证用户的帐号密码不会直接交给DApps。

但是也有缺点，就是如果steemconnect被黑了，大家通过steemconnect授权登入的帐号密码将会被盗走。而且在未来，steemconnect将收取一点费用。

所有第三种登录方式出现了，这就是Steem Keychain

如果你知道ETH的MetaMask 或者EOS的Scatter，理解Steem Keychain也就容易多了。

Steem Keychain是基于Chrome/Brave/Safari的插件，他会把你的帐号密码加密，只在你需要的时候给你需要的数据。

<h2>目前支持Steem Keychain登入的DApps有：</h2>

<ul>
<li>steemmonsters</li>
<li>steempeak.com</li>
<li>dtube</li>
<li>magic-dice</li>
<li>epicdice</li>
<li>steemworld.org</li>
<li>steem-engine.com</li>
<li>Steeve</li>
<li>drugwars</li>
<li>smartsteem</li>
<li>minnowbooster</li>
<li>Token BB</li>
<li>等等</li>
</ul>

<h2>Steem Keychain未来计划：</h2>

<ul>
<li>支持 Safari, Opera, 和 Microsoft Edge 浏览器</li>
<li>支持通过Steem Ninja和blacktrades创建新号</li>
<li>支持通过插件Claim accounts和创建新号</li>
</ul>

<h2>为什么要Steem Keychain？</h2>

<ul>
<li>首先他安全，不会把你的密码交给第三方托管</li>
<li>其次就是steemconnect将要收费了，使用steemconnect的api发帖/回复的将收取2.5%</li>
<li>功能强大，可以转账，代理SP，投票给见证人，power up/down, 查看/转账Steem-engine上的代币等等，他就是一个百宝箱。</li>
</ul>

<h2>怎么安装Steem Keychain？</h2>

<ul>
<li>安装keychain插件。目前支持Steem Keychain插件的浏览器有：</li>
</ul>

<ol>
<li>Chrome： 插件链接：https://chrome.google.com/webstore/detail/steem-keychain/lkcjlnjfpbikmcmbachjpdbijejflpcm ，点击就可以安装</li>
<li>Brave： 复制上面chrome版本插件的链接到Brave上就可以安装。</li>
<li>Firefox： 插件链接 https://addons.mozilla.org/en-US/firefox/addon/steem-keychain/</li>
</ol>

<ul>
<li>安装成功后，点击Steem Keychain插件，会要求你输入密码。（不是你Steem帐号的密码，而是你要解锁Steem Keychain的密码）</li>
<li>设置好密码后，会出现下面这样的页面。输入你的Steem帐号，和私密密码（可以是发帖密钥或者活动密钥，为了安全，不要用万能密钥）</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain2.jpg" alt="" /><br/>

<ul>
<li>添加好帐号和发帖密钥（用于登录dapp)后，就可以用Steem Keychain登入DApps了。</li>
</ul>

<h2>怎么用Steem Keychain登录Dapp?</h2>

<ul>
<li>前往支持Steem Keychain的网站，比如：www.steempeak.com</li>
<li>点击右上角的 ”Login“</li>
<li>按照提示输入用户名，然后点击 “Login”
<img src="https://tecirechen.000webhostapp.com/wp-content/uploads/2019/04/1-2.png" alt="" /><br/></li>
<li>会提示是否授权登录，点击确定就登录成功</li>
</ul>

<h2>Steem Keychain的其他功能（需要添加发帖密钥）</h2>

<ul>
<li>Steem Keychain除了登入功能，还可以直接通过插件转账：</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain4.jpg" alt="" /><br/>

<ul>
<li>查看转账记录：</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain5.jpg" alt="" /><br/>

<ul>
<li>SP代理：</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain6.jpg" alt="" /><br/>

<ul>
<li>Power Up：</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain7.jpg" alt="" /><br/>

<ul>
<li>给见证人投票：</li>
</ul>

<img src="https://steemitimages.com/0x0/http://ericet.vornix.blog/wp-content/uploads/2019/02/keychain8.jpg" alt="" /><br/>

<ul>
<li>直接通过Steem Keychain领取奖励
<img src="https://tecirechen.000webhostapp.com/wp-content/uploads/2019/04/2-1.png" alt="" /><br/></p></li>
<li><p>查看自己在Steem-engine上的代币</p></li>
</ul>

<p><img src="https://tecirechen.000webhostapp.com/wp-content/uploads/2019/04/3.png" alt="" /><br/>

<ul>
<li>直接通过keychain查看代币进账转账记录</li>
</ul>

<img src="https://tecirechen.000webhostapp.com/wp-content/uploads/2019/04/4-1.png" alt="" /><br/>

<ul>
<li>转发代币</li>
</ul>

<img src="https://tecirechen.000webhostapp.com/wp-content/uploads/2019/04/5-1.png" alt="" /><br/>

还有很多小功能～ 简直就是瑞士军刀！集登入和钱包以一身

如果你经常玩转steem-engine, keychain是必不可少的一个工具

但是Steem keychain也有自身的缺点，比如，不支持手机，所有要在手机上使用keychain可能要一阵子了

Steem Keychain是开源的，源代码可以在这里找到：https://github.com/MattyIce/steem-keychain <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://tecirechen.000webhostapp.com/2019/04/steem-keychain-%e7%ae%80%e4%bb%8b%e5%92%8c%e6%93%8d%e4%bd%9c%e6%8c%87%e5%8d%97 </em><hr/></center> 

- - -

This page is synchronized from the post: [Steem Keychain 简介和操作指南](https://steemit.com/@ericet/steemkeychain-7n2z3fu72e)
