
---
title: 'steemit下多用户维护同一个公共账户'
permlink: hdwje-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-14 11:29:24
categories:
- steem-python
tags:
- steem-python
- steemit
- cn-reader
- python
- steempy
thumbnail: 'https://steemitimages.com/DQmUVwkzSSggtjaf4fUvmMGdb9kVisicEKWuWdPDyFSuNnt/3addkey.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>　在开始steem-python操作之前，首先确认你的系统已正确安装了steem-python，如果没有或不清楚，可以参考我先前的文章《<a href="https://steemit.com/steem-python/@rivalhw/steem-python">steem-python的安装和配置</a>》。</p>
<p><br>
　　多用户管理账户<br>
<br>
　　在steem-python上实现多用户用同一公共用户发帖(操作)，主要有两步骤：</p>
<p><br>
　　<strong>1&gt;将主账户ID的Active私钥加入到steem-python</strong></p>
<p>　　　　<em>steempy addkey</em> 回车</p>
<p>　　　　按提示输入主账户的private key，如post private key 回车</p>
<p>　　　　输入你的walletpassphrase，第一次时系统会让你设置，记住这个密码，后续所有重要操作都需要这个密码确认身份。　　　　</p>
<p><img src="https://steemitimages.com/DQmUVwkzSSggtjaf4fUvmMGdb9kVisicEKWuWdPDyFSuNnt/3addkey.png" width="1881" height="37"/></p>
<p>　　　　如果你不想一个个私钥添加，可以用账户快速导入私钥，如下：</p>
<p>　　　　<em>steempy importaccount xxx</em></p>
<p><br></p>
<p>　　　　其中 xxx为你要导入的主账户名称，回车后按照提示输入你的私钥即可</p>
<p>　　　　</p>
<p>　　　　<strong>查看导入的key信息是否成功</strong></p>
<p>　　　　<em>steempy listkeys</em> 或者 <em>steempy listaccounts</em></p>
<p>　　　　<img src="https://steemitimages.com/DQmSmXeDZw3aGGSr3Va5C6F1x9ZVgW9hjYtxVQwMsVTggPJ/1listaccounts.png" width="1266" height="98"/></p>
<p>　　　　<strong>2&gt;将目标账户的公钥加入到steem-python</strong></p>
<p>　　　　<em>steempy allow --account xxx YYY</em> 回车后输入你的钱包密码，确认后即可。<br>
</p>
<p>　　　　正常后会返回类似如下图信息：</p>
<p>　　　　<img src="https://steemitimages.com/DQmTt4fsSAhDCwDc9u839cYR6HGtt75NXyUcu1SJ92G6vSB/4allow.png" width="1882" height="237"/></p>
<p>　　　　其中 xxx为公共账户，YYY为目标账户对应的公钥</p>
<p><br>
　　　　所有账户的公钥，均可以在steemd.com/@xxx 上查到，xxx为你要查看的账户id<br>
</p>
<p>　　　　注意，上述操作需在同一行一次输入完成，参数要全，我在先前输入时忘记输入最后一个参数，导致一直无法得到正确结果，但是诡异的是，steem-python仍提示我输入key 和 钱包密码，最后给出出错提示。<br>
</p>
<p>　　　　完成以上操作后，你就可以使用公共账户ID身份操作了，见下图： &nbsp;&nbsp;　　　</p>
<p><img src="https://steemitimages.com/DQmPzfC38sgT3S9DtHPYWFriR41Q4PZWp5JAio3zTQgtoAu/5login.png" width="1881" height="876"/><br>
　　为什么要做多用户管理操作？<br>
&nbsp;</p>
<p>　　1、对于使用者用户，比如茶馆的店小二们只需要使用茶馆的账号laodr和自己的post private key登陆就可以发帖了，无需再记茶馆的post private key，尤其是当茶馆的private key更改时，也无需通知店小二做任何修改，可谓是大家都很方便；<br>
</p>
<p>　　2、使用多用户管理，可以识别每个用户的操作信息，反之，如果大家都用同一个账户和postkey，有点像大锅饭，即便有问题都不知道是谁的问题。</p>
</html>

- - -

This page is synchronized from the post: ['steemit下多用户维护同一个公共账户'](https://steemit.com/@rivalhw/hdwje-steemit)
