
---
title: '【Steem指南】用requestly绕过*.steemit.com'
permlink: steemrequestlysteemitcom-f79lfbujtt
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-15 17:52:36
categories:
- steempress
tags:
- steempress
- steemstem
- cn-stem
- cn-reader
- cnstm
thumbnail: https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYm8I0Y8bh3svP6NP72%2F-LYm8IeWSELlw6Rolrgy%2Fimage.png?alt=media&token=f58f4509-0852-45f7-abb6-5b55fe431c34
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<h2 id="rao-guo-steemitcom-de-ce-lve-ke-hu-duan-xuan-ze-api-server">绕过*.steemit.com的策略：客户端选择API Server<a href="#rao-guo-steemitcom-de-ce-lve-ke-hu-duan-xuan-ze-api-server"></a></h2>
<p>在前文<a href="https://busy.org/@robertyan/steem-esteem-surfer" target="_blank" rel="noreferrer noopener">【Steem指南】用eSteem Surfer发帖</a>提到过解决部分地区无法访问*.steemit.com的几种策略。其中提到过开发者可以<strong>“创建浏览器插件，重定向api.steemit.com到别的api server，如api.steem.house”</strong>。</p>
<p>昨天根据这一策略，我用<strong>GreaseMonkey（TamperMonkey）</strong>创建了<a rel="noreferrer noopener" href="https://github.com/think-in-universe/greasemoneky_scripts/blob/master/src/steem_api_redirect/steem_api_redirect.js" target="_blank">重定向XHR和Fetch的脚本</a>，将api.steem.com的请求重定向到别的API Server，基本可以正常浏览busy和steempeak的feed等。但在用steemconnect登录时会遇到"content-security-policy"的问题，所以登录仍然存在一些问题。</p>
<h2 id="yong-requestly-rao-guo-steemitcom">用requestly绕过*.steemit.com<a href="#yong-requestly-rao-guo-steemitcom"></a></h2>
<p>今早看到 @liuzhixiang 发布的基于requestly的<a href="https://busy.org/@liuzhixiang/b5eeb58ce4558648" target="_blank" rel="noreferrer noopener">不翻墙使用busy.org的方法</a>，我们测试后发现基本可以正常使用busy，并且也解决了steemconnect登录时时的"content-security-policy"问题，非常棒👍 对用户很有价值，非常感谢！</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYm8I0Y8bh3svP6NP72%2F-LYm8IeWSELlw6Rolrgy%2Fimage.png?alt=media&amp;token=f58f4509-0852-45f7-abb6-5b55fe431c34" alt=""/><br/><i>image source: http://www.requestly.in/</i></center>

<p>我们体验后发现配置的步骤略有一些繁琐，所以这里对步骤做了一些简化，帮助对浏览器插件经验较少用户更快上手。</p>
<h3 id="di-yi-bu-an-zhuang-lan-qi-cha-jian-requestly">第一步：安装浏览器插件requestly<a href="#di-yi-bu-an-zhuang-lan-qi-cha-jian-requestly"></a></h3>
<p>@liuzhixiang 在文中使用的工具requestly（<a href="http://www.requestly.in/" target="_blank" rel="noreferrer noopener">http://www.requestly.in/</a>），相比其他很多浏览器扩展，功能更灵活全面。</p>
<p>安装扩展常见的两种方法如下，对于不能-翻.&amp;墙的用户可以参考方法二。</p>
<ul><li class=""><strong>方法一</strong>：对于Chrome或者Firefox浏览器，打开requestly官网（<a href="http://www.requestly.in/" target="_blank" rel="noreferrer noopener">http://www.requestly.in/</a>），点击安装（install），根据步骤完成安装。</li><li class=""><strong>方法二</strong>：对于无法访问Chrome Store的Chrome用户，点击<a href="https://www.crx4chrome.com/go.php?d=350&amp;i=11&amp;p=1978&amp;s=1&amp;l=https%3A%2F%2Ff1.crx4chrome.com%2Fcrx.php%3Fi%3Dmdnleldcmiljblolnjhpnblkcekpdkpa%26v%3D19.2.1" target="_blank" rel="noreferrer noopener">这里</a>下载crx文件。用浏览器打开扩展管理页面 chrome://extensions/，打开<strong>开发者模式（Developer mode）</strong>，将下载完成的crx文件<strong>拖入当前浏览器窗口</strong>，完成安装。</li></ul>
<h3 id="di-er-bu-shang-chuan-requestly-gui-ze">第二步：上传requestly规则<a href="#di-er-bu-shang-chuan-requestly-gui-ze"></a></h3>
<p>安装完毕后，可以直接上传requestly规则，而不用手动配置。</p>
<ol><li class="">从<a href="https://raw.githubusercontent.com/think-in-universe/greasemoneky_scripts/master/src/steem_api_redirect/requestly_rules.txt" target="_blank" rel="noreferrer noopener">这里</a>下载requestly规则文件；</li><li class="">点击requestly按钮，打开requestly的本地配置页面（<a href="https://app.requestly.in/rules/" target="_blank" rel="noreferrer noopener">https://app.requestly.in/rules/</a>），点击上传规则按钮，选择刚才下载的规则文件，完成规则上传。会看到下面列表中多出3条规则。</li></ol>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYmBv1WtykETj_konIQ%2F-LYmBzYba3KrguDfdE0T%2Fimage.png?alt=media&amp;token=e199bf6e-a7f8-42da-8b71-30d0842144df" alt=""/><br/><i>image source: https://app.requestly.in/rules/</i></center>

<p>在规则中，我们使用了<strong>anyx.io</strong>作为默认的服务器，之前的测试中该服务器访问速度较其他服务器稍快。</p>
<h3 id="di-san-bu-kai-shi-shi-yong-busy">第三步：开始使用busy<a href="#di-san-bu-kai-shi-shi-yong-busy"></a></h3>
<p>打开或刷新busy.org页面，开始使用。经测试，feed、power up等功能都可正常使用。</p>
<h2 id="shuo-ming">说明<a href="#shuo-ming"></a></h2>
<ol><li>再次感谢 @liuzhixiang 的工作，对于不能-翻.&amp;墙的用户有相当的帮助。本文仅是对原文的文档进行了简化。</li><li>当前的方法也有一些不足，例如，当前的requestly规则支持busy较为稳定，对steempeak等存在问题。可以在之后改进或完善。</li><li>接下来可能可以开展的工作包括：封装成extension、进一步支持steempeak、自动选择或手动配置API server节点等。</li></ol>
 <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://robertyan.000webhostapp.com/2019/02/%e3%80%90steem%e6%8c%87%e5%8d%97%e3%80%91%e7%94%a8requestly%e7%bb%95%e8%bf%87-steemit-com </em><hr/></center>  

- - -

This page is synchronized from the post: [【Steem指南】用requestly绕过*.steemit.com](https://steemit.com/@robertyan/steemrequestlysteemitcom-f79lfbujtt)
