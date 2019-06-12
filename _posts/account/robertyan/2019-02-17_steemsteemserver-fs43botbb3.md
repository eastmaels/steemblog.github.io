
---
title: '【Steem指南】浏览器插件：Steem Server选择工具；解决*.steemit.com被禁的问题'
permlink: steemsteemserver-fs43botbb3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-17 15:42:12
categories:
- steempress
tags:
- steempress
- steemstem
- cn-stem
- cn-reader
- cnstm
thumbnail: https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYw31et0UJO3h6fTl7C%2F-LYw48h1vb7LPtRBse8K%2Fimage.png?alt=media&token=c4fdcc58-a57f-41a2-b901-8b5bd72b6caa
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<h2 id="steem-server-xuan-ze-gong-ju">Steem Server选择工具<a href="#steem-server-xuan-ze-gong-ju"></a></h2>
<p>刚才，@liuzhixiang 发布了<strong>Steem Server（服务器）的选择工具</strong>（<a href="https://busy.org/@liuzhixiang/chrome" target="_blank" rel="noreferrer noopener">一个免翻墙使用Steem 相关应用的工具</a>），可以使得<strong>busy，steempeak</strong>等网站在*.steemit.com被禁用的情况下，保持正常使用。目前此插件可以在<strong>Chrome浏览器</strong>中运行。经小范围测试，可以正常工作，可以进一步推送给更多用户进行尝试。</p>
<p>经村长@ericet建议，这里写一个更简单的说明书，帮助对浏览器插件经验较少的用户安装和使用。感谢@liuzhixiang的工作和付出，此<a href="https://github.com/lzx215/steem-node-exchange-tool" target="_blank" rel="noreferrer noopener">Chrome扩展</a>的著作权为@liuzhixiang所有，本文仅对使用指南做一些简化和解释。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYw31et0UJO3h6fTl7C%2F-LYw48h1vb7LPtRBse8K%2Fimage.png?alt=media&amp;token=c4fdcc58-a57f-41a2-b901-8b5bd72b6caa" alt=""/><br/><i>图片来源：https://steem.com/</i></center>

<h2 id="an-zhuang-bu-zhou">安装步骤：<a href="#an-zhuang-bu-zhou"></a></h2>
<h3 id="di-yi-bu-xia-zai-chrome-kuo-zhan-cheng-xu">第一步：下载Chrome扩展程序<a href="#di-yi-bu-xia-zai-chrome-kuo-zhan-cheng-xu"></a></h3>
<p>打开Chrome浏览器，点击<a href="https://github.com/think-in-universe/steem-node-exchange-tool/releases/download/1.0.1/steem-node-switch-v1.01.crx" target="_blank" rel="noreferrer noopener">这里</a>下载<strong>CRX文件</strong>（打包了项目源文件中的dist代码）</p>
<h3 id="di-er-bu-an-zhuang-chrome-kuo-zhan-cheng-xu">第二步：安装Chrome扩展程序<a href="#di-er-bu-an-zhuang-chrome-kuo-zhan-cheng-xu"></a></h3>
<ol><li class="">在浏览器地址栏输入 <strong>chrome://extensions/</strong>，打开扩展管理页面</li><li class="">点击右上角的<strong>开发者模式（Developer Mode）按钮</strong>，开启开发者模式（因为本扩展为beta版本，未正式发布，需要使用开发者模式）</li><li class="">将第一步中下载的<strong>CRX文件</strong>，<strong>拖入当前窗口。</strong>会弹出安装扩展的提示，点击<strong>添加扩展（Add Extension）</strong>。</li></ol>

<center><img src="https://ipfs.busy.org/ipfs/QmSK8BnZG7KMRtUsB5ooB9pZVUk9tbRyZ3T66nVKGsxuYf" alt=""/><br/><i>启用开发者模式（截图）</i></center>
<center><img src="https://ipfs.busy.org/ipfs/QmYkvTFwFpJY1sUPV4EoToipyeCH7RQswGLF5o2CTPYJdD" alt=""/><br/><i>将CRX拖入扩展页面中间（截图）</i></center>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYvz1SeGU3uAp6ZMtBv%2F-LYvzDucEe5lroz7WdDY%2Fimage.png?alt=media&amp;token=19c2cb4d-fab1-41ec-9393-e0ffe61dc2b5" alt=""/><br/><i>安装浏览器扩展时的提醒（截图）</i></center>

<p>安装成功后，<strong>地址栏的右侧</strong>会出现一个<strong>Steem图标的工具</strong>。扩展管理窗口会出现新添加的扩展，<strong>右下角的开关应该为开启状态</strong>。</p>

<center><img src="https://ipfs.busy.org/ipfs/QmWGwdaHmJVqpAAYwNeeBW5CF4sE1RvwihorQrrUEq4F8L" alt=""/><br/><i>安装成功，地址栏右侧显示工具的Steem图标（截图）</i></center>
<center><img src="https://ipfs.busy.org/ipfs/QmVKRhe9pfkhrxakgqYnfwxreZ9L11HtUQjFT7RD8Goeqo" alt=""/><br/><i>扩展管理窗口会出现新添加的扩展，右下角的开关应为开启（截图）</i></center>


<h3 id="di-san-bu-kai-shi-shi-yong-busy-huo-steempeak">第三步：开始使用busy或steempeak<a href="#di-san-bu-kai-shi-shi-yong-busy-huo-steempeak"></a></h3>
<p>点击<strong>Steem Server选择工具的图标</strong>，会弹出一个窗口。在窗口中点击<strong>测速</strong>按钮，可以选择当前速度最快的服务器。（速度代表连接服务器所用的时间（单位：秒）；下面截图中最快的rpc.steemviz.com连接耗时1.7s。请选择连接时间最小的服务器。）</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYvzVesFAxnNMGhrxi0%2F-LYw-L0eYNLO0UrRY5mi%2Fimage.png?alt=media&amp;token=b119a0c6-d5ce-46b1-bc0f-95f1bba1eb6c" alt=""/><br/><i>服务器测速和选择的页面（截图）</i></center>
<br />
<p>下面，请使用busy和steempeak愉快的发帖吧 😀打开或刷新busy.org或steempeak.com，如果一切正常，可以进行登录、查看feed、发帖等操作。 </p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYw4ubojnigKrpOOGjl%2F-LYw5_F-3JfFeSAeeb9C%2Fimage.png?alt=media&amp;token=a7851e7a-716a-4db3-9a13-72731dcd77eb" alt=""/><br/><i>busy.org的截图</i></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LYw4ubojnigKrpOOGjl%2F-LYw55VNo-V_5aaoE5V9%2Fimage.png?alt=media&amp;token=e6c6c822-2df7-4c6d-8442-2011710427a1" alt=""/><br/><i>steempeak.com的截图</i></center>

<h2 id="shuo-ming-ce-shi-he-yan-zheng">说明：测试和验证<a href="#shuo-ming-ce-shi-he-yan-zheng"></a></h2>
<ol><li class=""><strong>功能</strong>：目前没有做完整的测试，仅测试了busy和steempeak，首页可打开、feed功能可用、发帖可用。试用者可以做进一步测试。</li><li class=""><strong>安全性</strong>：@robertyan对扩展的代码做了阅读和审查，项目中未发现恶意代码和信息泄露风险。目前的唯一问题是浏览器插件程序<strong>对所有域名都是启用的</strong>，在打开任意网页时都会运行，之后可能可以考虑做一个范围限定、只对白名单内的网站起作用；但这样会丧失一些灵活性，有新的dApp发布时需要更改白名单，可能需要重新发布浏览器插件。此问题之后会再做一些讨论，<strong>目前的beta版仅用于测试和试用是没有安全问题的。</strong></li><li class=""><strong>存在的问题与改进</strong>：<a href="https://busy.org/@liuzhixiang/chrome" target="_blank" rel="noreferrer noopener">在文章的评论中讨论了一些问题</a>。目前主要的问题是性能方面，<strong>自选的Steem服务器的访问速度较慢、稳定性较差</strong>，使用体验一般、网页加载缓慢，@liuzhixiang也在此<a href="https://busy.org/@liuzhixiang/steem-api" target="_blank" rel="noreferrer noopener">文中</a>给出了此问题的解答。</li></ol>
<p>再次感谢@liuzhixiang的工作，有更多问题请反馈给作者或和CN区用户讨论。希望本文的使用帮助和说明对大家有帮助 😛 </p>


<h2>其他常见问题</h2>

#### （1）Windows上安装时可能出现系统禁止安装的情况，需要添加到白名单

1. 下载文件 [chrome_steem.reg](https://github.com/think-in-universe/steem-node-exchange-tool/releases/download/1.0.1/chrome_steem.reg) 到本地
1. 关闭Chrome浏览器
1. 双击下载的文件chrome_steem.reg，会将Steem Server选择工具的Chrome扩展，添加到白名单中（这个程序是安全的，只做添加扩展程序这一件事）
1. 重启Chrome浏览器，到chrome://extensions中重新启动扩展程序

##### 为什么需要把扩展添加到白名单中
> 我们需要这么做，是因为当前的扩展程序还没有上传到Chrome的扩展程序应用商店。把Steem Server选择工具加入到白名单中，可以防止它被Chrome自动禁用，以便顺利安装和使用。之后等扩展上传到应用商店后，此问题应该会消失。


 <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://robertyan.000webhostapp.com/2019/02/%e3%80%90steem%e6%8c%87%e5%8d%97%e3%80%91%e6%b5%8f%e8%a7%88%e5%99%a8%e6%8f%92%e4%bb%b6%ef%bc%9asteem-server%e9%80%89%e6%8b%a9%e5%b7%a5%e5%85%b7 </em><hr/></center>  

- - -

This page is synchronized from the post: [【Steem指南】浏览器插件：Steem Server选择工具；解决*.steemit.com被禁的问题](https://steemit.com/@robertyan/steemsteemserver-fs43botbb3)
