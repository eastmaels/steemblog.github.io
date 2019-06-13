
---
title: '为了 SteemIt 开发了一个 中文简体和繁体自动切换的Chrome浏览器插件 Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically'
permlink: chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically-steemit-chrome
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-08 21:42:09
categories:
- cn
tags:
- cn
- steemit
- cn-programming
- chrome-extension
- chinese
thumbnail: http://languagenow.co.uk/wp-content/uploads/2015/09/Flag_map_of_China__Taiwan.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I wrote this Simple plugin to switch between Simplified Chinese and Traditional Chinese automatically. I have known many friends on steemit who use Traditional Chinese (BIG5 or ZH-TW). However, I am not so comfortable with reading Traditional Chinese. Therefore, this plugin automatically converts traditional Chinese to simplified Chinese automatically or vice versa.</p>
<p><img src="http://languagenow.co.uk/wp-content/uploads/2015/09/Flag_map_of_China__Taiwan.png"/></p>
<p>For example,&nbsp;</p>
<p><code>English: &nbsp;I love you!</code></p>
<p><code>Simplified Chinese: 我爱你!</code></p>
<p><code>Traditional Chinese: &nbsp;我愛你!</code></p>
<p>Open source, feel free to create PR to improve this! &nbsp;https://github.com/DoctorLai/Simplified-and-Traditional-Chinese</p>
<p>Chrome Extension: https://chrome.google.com/webstore/detail/%E7%AE%80%E7%B9%81%E9%AB%94-simplified-and-tradit/olpihmabpjpllgmahlgiakkgaccigpfo</p>
<p>最近在玩SteemIt, 发现很多 cn 社区的中国朋友(特别是台湾 香港还有其它一些海外同胞) 比较喜欢用繁体字, 虽然我们都能看懂繁体, 或者都能看懂简体中文, 但是有时候还是会吃力 觉得累, 有没有方法能自动转换页面呢? 你也许可以用Google Translate, 但是 Google Translate 会在页面上方显示一个翻译栏, 毫无违和感.&nbsp;</p>
<p>&nbsp;我有点小强迫, 于是搞了一小时, 整出这么一个玩意: Chrome <a href="https://justyy.com/archives/4324">浏览器插件</a>: 简繁体 Simplified and Traditional Chinese. 这玩意的好处是 离线也能用(不用联网访问Google Translate), 而且不会在页面的任何地方显示信息, 真正做到润物细无声.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/chrome-extension-chinese-converter-logo.jpg" width="748" height="185"/></p>
<p>&nbsp;</p>
<h2>简繁体网页转换方法</h2>
<p>您需要使用Chrome浏览器, 然后到<a href="https://chrome.google.com/webstore/detail/%E7%AE%80%E7%B9%81%E9%AB%94-simplified-and-tradit/olpihmabpjpllgmahlgiakkgaccigpfo">网官上去安装插件</a>. &nbsp;&nbsp;https://chrome.google.com/webstore/detail/%E7%AE%80%E7%B9%81%E9%AB%94-simplified-and-tradit/olpihmabpjpllgmahlgiakkgaccigpfo</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/chrome-extension-chinese-converter.jpg" width="167" height="188"/></p>
<p>&nbsp;安装完会有一红色国旗图标, 点击后 默认是不转换</p>
<p>然后有三个选项:&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/chrome-extension-chinese-converter-options.jpg" width="162" height="103"/></p>
<p>&nbsp;选择 第二个选项 (ZH-CN) 强行转换成简单中文, 选择第三个选项 (ZH-TW) 强行将当前网页转换成繁体中文. 这些选项会保存于浏览器中直到下次更改.&nbsp;</p>
<p>&nbsp;需要注意的是, 转换是在页面加载的时候进行 (document_idle), 所以您需要刷新 (F5) 才能转换当前已经加载后的页面, 不过对于新的页面则会自动转换, 有时候没有转换可能需要等待一会, 如果没有的话, 请按F5刷新再试.</p>
<p>比如 @tumutanzi 的主页被转换成繁体.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/sample-convert-to-big5-using-chrome-extension.jpg" width="1024" height="846"/></p>
<p>有啥好的建议或者BUG都 <a href="https://steemit.com/@justyy">@justyy</a> 吧!&nbsp;</p>
<p>源代码开源于 <a href="https://github.com/DoctorLai/Simplified-and-Traditional-Chinese">Github</a>.&nbsp;</p>
<p><img src="https://justyy.com/justyy-steemit.jpg" width="509" height="184"/></p>
<p>Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;</p>
<p>// 已同步到我的<a href="https://justyy.com/">中文博客 </a>和 <a href="https://helloacm.com/">英文 博客</a><a href="https://justyy.com/">中</a>。&nbsp;</p>
<ul>
  <li><a href="https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/">Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically</a></li>
  <li><a href="https://justyy.com/archives/5016">为了 SteemIt 开发了一个 中文简体和繁体自动切换的Chrome浏览器插件</a></li>
</ul>
<p><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/xy-xy-yzz">XY + XY = YZZ 大白 + 大白 = 白胖胖</a></li>
  <li><a href="https://steemit.com/cn/@justyy/early-autumn-2017-cambridge-uk-photography">Early Autumn 2017, Cambridge, UK (Photography) 英国慢节奏的村庄生活 – 每日散步村口溜娃&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/24-poker-game-24">24 Poker Game 24点扑克游戏</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-dynamic-programming-integer-break">Software Engineer Interview Question - Dynamic Programming - Integer Break 软件工程师面试技巧之 动态规化 - 整数拆分</a></li>
  <li><a href="https://steemit.com/cn/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash">How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/cn/@justyy/30">Technology-driven or Business-model-driven? 技术优先还是商业模式优先 – 献给在30多岁还在写代码的朋友们&nbsp;</a></li>
  <li>记录那些值得回忆的<a href="https://steemit.com/cn/@justyy/5hgpar">精彩瞬间</a> &nbsp;</li>
</ul>
</html>

- - -

This page is synchronized from the post: [为了 SteemIt 开发了一个 中文简体和繁体自动切换的Chrome浏览器插件 Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically](https://steemit.com/@justyy/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically-steemit-chrome)
