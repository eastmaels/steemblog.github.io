
---
title: '再谈收益分享，以及当前行情下的思考 / Comment Reward Beneficiaries'
permlink: 3vcjm2-comment-reward-beneficiaries
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-07 02:21:15
categories:
- steemit
tags:
- steemit
- cn
- cn-programming
- money
- thought
thumbnail: https://steemitimages.com/DQmRcnHjEzEQfYmbpN5RWcc7jrSgPddCFa5jz9tbfkwA7xq/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在以前的帖子中，我介绍和测试过收益分享(Comment Reward Beneficiaries)功能。所谓的收益分享，或者字面翻译的***评论奖励受益者***，简单的来讲就是可以把你帖子/回复的收益和其它人一起分享。

![](https://steemitimages.com/DQmRcnHjEzEQfYmbpN5RWcc7jrSgPddCFa5jz9tbfkwA7xq/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 收益分享的用途
这是个很有趣也很有用的功能，可以从以下两个方面理解：
* 将帖子收益分发给别人
* 从别人的帖子收益中获取提成

#### 将帖子收益分发给别人

一种情况是，我们想将自己发表的帖子的收益分发给他人一部分。

###### 慈善捐款
举例说，我发个帖子给生活中战区的儿童募捐，然后声明帖子的95%收益将会发放给某个战区儿童专项慈善基金。那么传统的方式是，我募集到资金后，提现到我个人账户，然后通过我个人账户转账给某某基金。这种情况，我募集的资金是否捐赠给某某基金，以及捐赠的比例是多少很难去核实。因为帖子是7天以后结算，除非有人盯着我的账户看结算记录，然后再找我要转账凭证来证实我确实转了相应的比例。

如果使用了收益分享(Comment Reward Beneficiaries)，这个事情就简单了。只需在发表帖子的时候，设置相应的受益者，那么帖子结算时，收益自动发送给受益人。

```
beneficiaries = [
         {'account': 'xxxfund', 'weight': 9500}
     ]
```
***<sub>注：联合国儿童基金会账户已经被注册了，但是看起来不像是官方的</sub>***

###### 合伙人分享收益

除了上述慈善捐款外，合伙人分享收益也是收益分享功能一个重要的应用。

举例说，如果老道茶馆的收益，每次都留存50%，剩下50%发放给五个股东。那么我们就可以通过收益分享设置如下受益人即可。

```
beneficiaries = [
         {'account': 'laodr', 'weight': 1000},
         {'account': 'deanliu', 'weight': 1000},
         {'account': 'ace108', 'weight': 1000},
         {'account': 'rivalhw', 'weight': 1000},
         {'account': 'lemooljiang', 'weight': 1000}
     ]
```
这样避免了每次手工转账奖励的麻烦，也避免了转账出错。

#### 从别人的帖子收益中获取提成

从别人的帖子收益中获取提成，这个听起来挺诱人，不过前提是你提供的产品或者服务能为别人提供便利或者受益。

之前，***busy.org、esteem、chainbb、dtube***，都曾设置过收益分享功能。也就是说，你通过上述网站/APP发帖，它们会设置帖子收益的一定比例到他们账户。

你可能要问，既然我从他们网站/APP发帖，收入要被扣除一定比例，那么我为何不直接使用steemit呢？原因可能有三点：
* 图便利，比如在手机上使用esteem；或者使用dtube发视频
* 图利益，可能获得来自所有者的点赞(为了推广、赚更多的回报等）
* 纯支持，为这些第三方网站/APP做贡献，支持其发展

现在，这些网站/APP的收益分享设置如下：
* busy可能取消了收益分享设置。
* dtube收益分享比例为25%
![](https://steemitimages.com/DQmaxSEQtcuZCoMLL55bBNaix6G9DPF4ugG3ntqGN8Drytv/image.png)
* chainbb收益分享比例为10%
![](https://steemitimages.com/DQmQS5j5pNQfHBT1gnfPNyVYuM7nY6qzF92SQw9wzB7nvUt/image.png)
* esteem收益分享比例为5%
![](https://steemitimages.com/DQmReHLRK16pVUt6LkoysGyVW8RAhCYkxym6DeHi8ebxMaF/image.png)

# 收益分享的发放

在[《关于收益分享功能理解的终极版(专家指点 & 代码核证)》](https://steemit.com/cn/@oflyhigh/and)这个帖子中，我们曾经对着代码，详细研究了收益分享的发放机制。并得出如下结论：

* 帖子的收益，除去其它一些因素，由comment.net_rshares决定
* get_rshare_reward 根据系统因素以及comment设置(拒绝收益，最大收益等)计算帖子总应得代币
* 总应得代币按比例分成作者以及点赞者代币
* 点赞者代币发放的剩余部分(早鸟惩罚)，增加给作者
* 作者总应得代币(作者部分+早年惩罚剩余部分)按比例分给受益者(Beneficiaries)
* 分给受益人以后的剩余部分，按照设置发放给作者

# 当前行情下的思考

根据上述结论，我们提取出一个关键信息就是收益分享部分的奖励，按代币(vesting亦即SP)发放给受益者的。

我们曾经不止一次探讨过在当前行情下，发文奖励比例选择很重要，比如这篇文章：[《STEEM圣诞发糖果，发文千万不要选择 “Power Up 100%”》](https://steemit.com/cn/@oflyhigh/steem-power-up-100)

那么这和收益分享又有什么关系呢？简而言之，***收益分享这部分比例的收入相当于 “Power Up 100%”***

那么如果是我们主动将帖子收益分发给别人，使用收益分享功能，就会~~亏~~少赚好多好多。比如说laodr一篇帖子最终作者收入100SBD，如果按每人20%设置收益分享，分发给五个股东，那么当前行情下，我们约少赚600多美元。
***<sub>注：按17天前行情估算，懒得重新算了</sub>***

所以，如果我们要主动分享给他人，这种行情下，还是变通一种办法吧。

对于从别人的帖子收益中获取提成，这种情况，如果我们是~~被剥削~~发帖的这一方，也无需考虑太多，赚多赚少，人家都按一定比例收，对我们的收益不构成影响。

# 参考链接
* [STEEM圣诞发糖果，发文千万不要选择 “Power Up 100%”](https://steemit.com/cn/@oflyhigh/steem-power-up-100)
* [随便聊聊收益分享，欢迎讨论 / Comment Reward Beneficiaries](https://steemit.com/cn/@oflyhigh/comment-reward-beneficiaries)
* [🙄不是每次尝试都会成功，这次就失败了😂 原文标题：测试一下收益分享功能, 顺便推销一下茶馆](https://steemit.com/cn/@oflyhigh/6iqcbh)
* [测试收益分享功能/Test Comment Reward Beneficiaries](https://steemit.com/cn/@oflyhigh/test-comment-reward-beneficiaries)
* [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/cn/@oflyhigh/steemit-steem)
* [关于收益分享功能理解的终极版(专家指点 & 代码核证)](https://steemit.com/cn/@oflyhigh/and)

- - -

This page is synchronized from the post: [再谈收益分享，以及当前行情下的思考 / Comment Reward Beneficiaries](https://steemit.com/@oflyhigh/3vcjm2-comment-reward-beneficiaries)
