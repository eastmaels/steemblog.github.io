
---
title: 'SteemIt Utopian 乌托邦怎么玩? (Bug 提交报告) | 我媳妇上了 github 的 issue report'
permlink: steemit-utopian-bug-or-github-issue-report
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-17 14:42:12
categories:
- cn
tags:
- cn
- busy
- cn-reader
- utopian
- tutorial
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516198806/xkfjfbqbeextecv9yo2d.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


上次说到 [SteemIt Utopian 乌托邦怎么玩? - Development 开发](https://justyy.com/archives/5794)，很多人说这是程序员才能做的。是的，相对来说，Development 门槛较高，所以在 [Utopian](https://justyy.com/archives/5740) 提交的所有类型的帖子来说, Development 是相对比较少的。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516198806/xkfjfbqbeextecv9yo2d.png)
*Image Credit: https://utopian.info*

但是，提交BUG却是每个人都可以做的，而且时间回报相当划算。这不像 翻译一样费时费力，BUG回报率是相对较高的，因为发现一个BUG就是对开源项目的一大贡献，可以认作你是测试员提交BUG报告。

再者，并不是每天都能发现新的BUG，而每天的奖励分配都是固定的，BUG提交的越少，平均每个BUG得到的奖励很多，这不像翻译，每天都有很多人在做。

最近的BUG规则在： https://utopian.io/rules  这里摘抄一下：

> In this category you can only report bugs you have found in an Open Source project.
You must provide every possible detail to reproduce the bug.
You should show a video or an animated GIF if the bug can be recorded on screen.
You must include: browsers, devices, operating systems used and similar info to reproduce the bug.

主要就是四点：

1. 必须是开源项目的BUG，比如说，你不能提 WIN 10的BUG，因为 Windows 10 不是开源的
2. BUG重现步骤必须清楚
3. 如果很难重现，必须上传GIF或者视频 证明你确定遇到了这个BUG（因为有可能审稿人无法重现）
4. 必须写清楚你的浏览器等环境，比如操作系统，语言等 。

当然，最重要的一点就是，你提的BUG可能其它人已经提过了，所以**请先GOOGLE** 可以把你的标题放在GOOGLE上搜看看。

还有就是，BUG必须是技术层面的，比如你不能说这个按钮为啥这么难看，但是你却可以说这个按钮按了没反应。因为前者是用户设计（每个人观念不一样），后者却是影响使用且不是设计本意的。

举个例子，我在 https://steemit.com/utopian-io/@justyy/string-contains-test-cannot-be-added-to-the-post 提了个BUG，说如果帖子含有 `<justyy>` 这样的字符串无法保存，这是可以的，因为用户的确会这么做，但是如果我说 帖子含有 `<iframe>` 无法保存，这就会被拒，因为这可以理解成系统设计就是这样，不允许在帖子中含有 HTML标签。

还有，关于标签的BUG被提太多了，很多都不是有效的BUG，比如 在utopian 上可以添加 steemit 上认为无效的 BUG：https://steemit.com/utopian-io/@justyy/invalid-tags-are-allowed-in-utopian
还有另一篇关于可以加个空格添加中文标签。：https://utopian.io/utopian-io/@dalao/steemit-only-allows-english-tag-but-also-can-add-chinese-japanese-and-other-tag

提BUG是个[抱 utopian 大腿](https://justyy.com/archives/5732)的简易办法，但这并不是每天都能想出来，在遇到的过程中，一定得先重现，然后再去搜索看看别人提过没，最后面拍个视频或者做个GIF。

还有，就是懂程序的千万别先在 github 上提了 issue, 因为这样的话， utopian 是会拒的(比如[这篇](https://steemit.com/utopian-io/@al2ping/found-an-issue-when-build-the-repo-on-windows))，因为流程上，当BUG报告被审核通过后，会自动同步到 github 上新建一个 issue. 所以，如果utopian 通过了你的帖子，github 上就会出现两个一样的报告，这不是我们想看到的结果。

## 我媳妇上了 github 的 issue report
最后，举个例子，我提交了BUG (steemit [原贴](https://steemit.com/utopian-io/@justyy/some-pictures-uploaded-to-busy-org-are-cropped))使我媳妇被同步到 Github 上：https://github.com/busyorg/busy/issues/1282

同步到博文: [https://justyy.com/archives/5879](https://justyy.com/archives/5879)
-----------------------------
通过 [SP 代理工具](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 成为 YY银行股东，好处多多。只要代理大于10 SP给 @justyy 即可自动成为YY股东。用同样的工具输入0取消代理退出股东。来去自由，取消代理后系统需要7天才能将您代理的SP退回到您的帐号上。友情提示，不建议把所有SP都代理给银行，因为你需要留一些能量发贴。
- [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
- 加入公众号 **justyyuk** 即可以实时查询 BTC, SBD, STEEM, YOYOW, LTC, ETH 等虚拟货币的价格.
- [大家好才是真的好，YY银行足球队，你还有啥理由不加入银行？](https://steemit.com/cn/@justyy/xi2jn-yy)
- [YY 银行开启互抱大腿模式](https://steemit.com/cn/@justyy/yy)

# 最近文章 
- [给STEEM中文微信群加了个机器人](https://steemit.com/cn/@justyy/4gcuez-steem)
- [VR 体验让我手心冒汗](https://steemit.com/busy/@justyy/vr)
- [说说写 STEEM的原因](https://steemit.com/cn/@happyukgo/steem)
- [小孩的愿望很简单](https://steemit.com/cn/@happyukgo/3cb12h)
- [打包奶粉 so easy!](https://steemit.com/busy/@justyy/so-easy)
- [感慨，我也是STEEM的老人了](https://steemit.com/cn/@justyy/6c6cjw-steem)
- [相亲相爱的兄弟俩](https://steemit.com/cn/@happyukgo/4es5vt)
- [孩子艺多不压身](https://steemit.com/cn/@happyukgo/6vppdw)
- [Ryan is counting (3 year old) - 3岁的弟弟能数到100了](https://steemit.com/dtube/@justyy/9y4b2qaa)
- [Eric Learns Piano 孩子学钢琴系列 - Tambourine Tune](https://steemit.com/dtube/@justyy/qrx0qg9w)
- [工作 or 家庭](https://steemit.com/cn/@happyukgo/or)
- [在英国免费做了个除痣手术](https://steemit.com/busy/@justyy/6tibmb)

- - -

This page is synchronized from the post: [SteemIt Utopian 乌托邦怎么玩? (Bug 提交报告) | 我媳妇上了 github 的 issue report](https://steemit.com/@justyy/steemit-utopian-bug-or-github-issue-report)
