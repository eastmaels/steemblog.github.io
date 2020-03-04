
---
title: 'steemconnect 国内版 v0.1.3'
permlink: steemconnect-v0-1-3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-04 13:59:36
categories:
- hive-180932
tags:
- hive-180932
- cn
- cn-reader
- cn-curation
- whalepower
- cn-stem
- steemstem
- cn-programming
- palnet
- zzan
- dblog
- mediaofficials
- marlians
- neoxian
- lassecash
- upfundme
- busy
- actnearn
thumbnail: 'https://files.steempeak.com/file/steempeak/robertyan/w9BGaVpu-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## 介绍

之前实现 WhereIN 微信小程序的登录功能时，出于用户秘钥安全的考虑，希望可以通过授权而不是存储 posting key 的方式来实现用户对 Steem blockchain 的操作。但由于 [steemconnect](https://steemconnect.com/) 使用的 api.steemit.com 节点在国内不能使用，所以不得不对 steemconnect 做了一些简单的更改，实现了一个国内版，并加上了一些对小程序的支持，在这里做一些简单的分享。

所作的修改主要是两点：

1. 修改 api.steemit.com 节点为其他国内可用的节点，例如 anyx.io
2. 支持微信小程序登录：登录完成时，向小程序返回登录成功或失败的信息，以便小程序继续完成登录

fork 的 steemconnect 的项目代码在：https://github.com/steem-driver/steemconnect ，以MIT协议开源，如有需要可以进一步修改。

v0.1.3 的 release note 也可以看这里：https://github.com/steem-driver/steemconnect/releases/tag/v0.1.3

根据上面的修改，我们部署了一些国内可用的 steemconnect 版本：

1. https://steemconnect.netlify.com/ 部署在 Netlify 静态网站服务，国内访问速度较慢
2. https://steemconnect.cocozl.cn/ 部署在 @iguazi123 瓜子的服务器，国内访问速度较快

大家也可以根据需要使用。


<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/w9BGaVpu-image.png)
<sup> screenshot from https://steemconnect.netlify.com</sup>
</center>

下面简要介绍一些修改的经过。



### 1. 修改默认的 API 节点

这一步是最重要的，但也是最简单的。在 steemconnect 项目中搜索 api.steemit.com，然后修改成希望使用的节点即可。

具体可以参见这个[commit](https://github.com/steem-driver/steemconnect/commit/c43f9637da7609eb200ff2d78cba38616c146c4a)

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/frYRnXlh-image.png)
<sup>screenshot from [this commit](https://github.com/steem-driver/steemconnect/commit/c43f9637da7609eb200ff2d78cba38616c146c4a)</sup>
</center>

### 2. 添加 Netlify 部署支持

完成上面的改动后，我一开始使用 [gh-pages](https://www.npmjs.com/package/gh-pages) 将 steemconnect 直接部署到 GitHub pages (https://steemconnect.tribes.rocks/)，但
访问一些路径就会失败，比如：https://steemconnect.tribes.rocks/settings 返回 404 。这是由于 GitHub pages 不支持伪静态的路径。

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/jtGDYwIk-image.png)
<sup>screenshot from https://steemconnect.tribes.rocks/settings</sup>
</center>

因此，根据 [Vue CLI](https://cli.vuejs.org/guide/deployment.html#netlify) 里的建议我们将 steemconnect 重新部署到了 Netlify。只需要添加一个 `_redirects` 文件即可。

```txt
# Netlify settings for single-page application
/*    /index.html   200
```

然后，在 Netlify 里，访问 https://steemconnect.netlify.com/settings 路径是成功的：

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/KkWyr7CQ-image.png)
<sup>screenshot from https://steemconnect.netlify.com/settings</sup>
</center>

就此，我们已经可以用 https://steemconnect.netlify.com/ 来更方便的支持国内的用户了。


### 3. 添加微信小程序通讯

不过，我们的初始目的是为了在微信小程序里可以登录和授权，只部署一个国内版是还不够的。

为此，我们需要在 steemconnect 中判断此时是在微信小程序的 webview 中运行，并且在登录完成后，将登录的Steem用户名等信息返回给小程序。

判断是否在微信小程序的webview中：

src/helpers/utils.js

```js
export function isWeixinMiniProgram() {
  const ua = window.navigator.userAgent.toLowerCase();
  return new Promise(resolve => {
    if (ua.indexOf('micromessenger') === -1) {
      resolve(false);
    } else {
      wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    }
  });
}
```

成功时，发送Steem用户名等信息（而不是使用默认的通过 redirect_uri 重定向的方法）：

src/views/LoginRequest.vue

```js
  if (isWeixin) {
    weixinNavigateBack();
    weixinSendMessage({
      context: 'login',
      ok: true,
      err: null,
      username: this.username,
      token,
      expired_in: 604800,
    });
  } else {
    // ...
  }
```

此后，我们在微信小程序的 web-view 里使用 steemconnect 登录成功时，就会成功获得用户、access_token 等信息用户进一步的处理。

另外，由于以上代码中会判断所处的环境，针对小程序所作的修改，并不会影响非小程序环境的 steemconnect 的使用，所以需要对 web 应用进行登录的情况，也可以使用这个版本。

### 4. 本地部署，提高访问速度

现在，我们基本可以使用修改后的 steemconnect 进行微信小程序登录了（当然，小程序本身还需要做很多修改）。但实际部署后，我们发现 https://steemconnect.netlify.com 速度还是太慢了，登录页面完整加载经常需要 60 ~ 100s 的时间。

于是，我们将 steemconnect 部署到了 https://cocozl.cn 的国内服务器，地址为：https://steemconnect.cocozl.cn/ ，访问速度有了明显的提高，大概 5s 左右可以加载完成，至少在用户还可以忍受的范围内了。

就此 WhereIN 小程序或其他小程序，都可以加入 Steem 的登录方式了。当然，之后 WhereIN 小程序会进一步优化，新用户可能只需要使用微信登录就可以了，这是后话。

在与 @iguazi123 瓜子讨论后，同意把 https://steemconnect.cocozl.cn/ 服务也开放给更多人使用，希望对其他面向国内用户的应用部署会有帮助。感谢瓜子和 WhereIN。

如果对于基于 Steem 的小程序的开发有兴趣，也欢迎加入我们一起来玩耍。

## 下一个版本

v0.1.3 版本还存在一些问题，大多数是 steemconnect 自身的问题：比如不支持中文，steemconnect 的UI流程冗余难用，API node 修改不便等。

为此，在下一个版本 steemconnect 国内版 v0.1.4 中，我们计划进行如下改进：

1. 简化 steemconnect 登录和授权的流程
2. 增强 节点配置的灵活性和可控性
3. 加强 steemconnect 的多语言支持（中文）

## 其他

最后，其实之前 村长 @ericet 也部署了一个旧版的 steemconnect http://steemconnectcn.herokuapp.com/ ，我之前研究时忘了这回事。。。而且 heroku app 的启动时间和访问速度可能也存在一些挑战，所以最后还是基于最新版的 steemconnect 修改了。大家需要使用旧版时也可以尝试用这个版本测试。

- - -

This page is synchronized from the post: ['steemconnect 国内版 v0.1.3'](https://steemit.com/@robertyan/steemconnect-v0-1-3)
