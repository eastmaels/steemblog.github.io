
---
title: '非正式翻译：硬叉20 “速度”开发进展 / Informal translation：Hardfork 20 (“Velocity”) development update'
permlink: 20-informal-translation-hardfork-20-velocity-development-update
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-21 14:09:00
categories:
- steem
tags:
- steem
- steemit
- steemdev
- hf20
- cn
thumbnail: https://cdn.pixabay.com/photo/2016/09/23/21/08/motorcycle-1690452_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is an informal Chinese translation of the article: [Hardfork 20 (“Velocity”) development update](https://steemit.com/steem/@steemitblog/hardfork-20-velocity-development-update)

![](https://cdn.pixabay.com/photo/2016/09/23/21/08/motorcycle-1690452_1280.jpg)

6个月以前硬叉19发布的前夜，我发表了文章：
[非正式翻译：硬叉19 “平等”即将到来，线性奖励 / Informal translation：HF19 "Equality" Coming Soon: Linear Rewards!](https://steemit.com/steemit/@oflyhigh/19-informal-translation-hf19-equality-coming-soon-linear-rewards)

在HF19发布几天之后， @steemitblog 就发布了HF20的消息: [Proposing Hardfork 0.20.0 “Velocity”](https://steemit.com/steemit/@steemitblog/proposing-hardfork-0-20-0-velocity)，然而这一等就是半年之久。昨夜 @steemitblog  发布了[HF20的开发进展](https://steemit.com/steem/@steemitblog/hardfork-20-velocity-development-update)，我将这篇这篇文章大概翻译一下，让大家能对HF20 多些了解。

以下为翻译内容：

----

#  <center>当前状态 / Current Status</center>

>Significant progress is being made with hardfork 20, including some additional changes which will make the Steem blockchain even better. There is no official release date yet, but a release candidate is expected to be ready by the end of the year.

[hardfork 20](https://steemit.com/steemit/@steemitblog/proposing-hardfork-0-20-0-velocity)正在取得显著的进展，包括一些额外的更改，这将使得STEEM区块链更上一层楼。目前还没有正式发布日期，但预计在今年年底前会有发布候选版本。

## 改进监护(点赞)激励 / Improving Curation Incentives

### 30分钟监护(点赞)时间窗的更改 / Changes to 30-minute Curation Window

>As of now, Steem account holders (including bot accounts) are disincentivized by the Steem blockchain from voting on a post within the first 30 minutes. The earlier a vote is made within the initial 30-minute window, the less curation rewards the voting account receives. This was originally introduced to even the playing field between human curators and bots. This was successful but with the rise of more short-form content on the platform (content that can be read or viewed in less than 30 minutes), the community and the witnesses have come to a consensus that the 30-minute rule is taking curation rewards away from human voters who are actively consuming content and voting on material they like. For this reason, HF20 will reduce this window from 30 to 15 minutes.

现在，Steem账户持有者(包括机器人账户)在前30分钟对文章投票会被STEEM区块链做些限制。在最初的30分钟时间窗内，投票越早投票账户回去的点赞收益越少。最初引进这项机制是为了让机器人和自然人点赞者之间的角逐更加公平。这在过去很成功，但是随着平台上更简短的内容的兴起(可在30分钟内阅读或查看的内容)，社区和证人已经达成共识，30分钟规则使得那些阅读了内容并给他们所喜爱的内容投票的真人点赞者获取不到点赞收益。基于此原因，***HF20将这个时间窗从30分钟减少至15分钟。***

### 消除通过点赞获取的自我投票奖励 / Eliminating self-voting rewards through curation

>While the change to 15 minutes will even the playing field against bots, it doesn’t address the advantage self-voting gives to accounts with respect to curation rewards. If authors vote for themselves right away, they get their author rewards, 100% of the curation rewards from their vote, plus a portion of the curation rewards coming from everyone who votes for the post after them. Any other curator voting at the same time as the author would get 0% of the curation rewards. This gives the author an unfair advantage over other curators because the author can earn additional curation rewards through self-voting.

尽管将时间窗改变至15分钟使得在对抗机器人方面更加公平，但是在点赞奖励方面这并不能解决自我投票所带来的优势。如果作者马上为自己投票，那么他们将获得他们的作者奖励，100%的来自他们投票的点赞奖励，以及来自在他们之后给这篇文章投票的投票者的部分点赞奖励。在同一时间投票的点赞者将会和作者一样获取0%的点赞奖励。这给与了作者相对于其它点赞者不公平的优势，因为作者可以通过自我投票获取额外的点赞奖励。

>In order to eliminate this unfair advantage, the unused portion of the curation rewards will be returned to the rewards pool instead of being awarded to the author, thereby increasing the overall percentage of rewards that will be paid to curators. This will better serve the original mission of the curation rewards budget: to ensure that the Steem blockchain distributes rewards to the most valuable content.

为了消除这种不公平的优势，***点赞奖励的未使用部分将会回归奖励池而不是发放给作者***。从而提高向点赞者支付的奖励的总百分比。这将更好地服务于点赞的奖励预算的原始使命: 确保STEEM区块链将奖励发放给更有价值的内容。

## “尘埃”投票改变 / “Dust” vote changes

#### 移除投票尘埃阈值 / Removal of vote dust threshold

>The "vote dust threshold" is a rule that prevents the occurrence of extremely weak votes. Currently, accounts must possess about 1 SP in order for a 100% Voting Power vote to be successfully posted to the blockchain. If a vote is placed that is below the required threshold, it will be rejected by the blockchain. This can create a bad user experience for new users, as their votes can fail for seemingly no reason.

“尘埃投票阈值(vote dust threshold)”是为了阻止发生极其弱小的投票所设置的规则。当前，为了成功提交一个100% 投票权的投票，账户必须拥有大约1个SP。低于阈值要求的投票在提交后会被区块链拒绝。对新用户而言，这将导致糟糕的用户体验，因为他们的投票可能会无缘无故地失败。

>In hardfork 20, this “vote dust threshold” will be removed. After this change users with any amount of SP will be able to cast votes so long as they have sufficient bandwidth. Votes that are below the threshold will be posted to the blockchain but will have no impact on rewards. This will allow users to have a better user experience on all Steem-based applications by enabling them to vote whenever they want to (as long as they don’t exceed their generous bandwidth allocation), without adding to the computational load on the blockchain by requiring that it calculate the impact of effectively powerless votes on the rewards pool. This also mitigates an attack vector by ensuring that if a malicious actor wanted to overburden the Steem blockchain, making countless small votes would not be an effective strategy.

在硬叉20中，“尘埃投票阈值“将被移除。这样更改以后，无论用户有多少SP都可以投票了，只要他们有足够的带宽。低于阈值的投票会发布到区块链上，但是不会对奖励产生影响。通过允许用户想投就投(只要他们不超过带宽分配），使得用户在所有的基于STEEM的应用上都有更好的用户体验，没有要求它计算有效无力投票对奖励池的影响而增加区块链的计算负载，这也减轻了一个被攻击的可能，因为恶意行为者想通过无数的小投票来使区块链过载将会是无效的策略。

#### 在所有选票中应用移位 / Application of shift to all votes

>The switch to linear rewards in hardfork 19 has had a very positive effect on user experience. HF19 ensured that the impact of each user’s vote on the rewards pool is directly proportional to their Steem Power (i.e. their stake in the platform). Users now feel more empowered, and they can see the direct correlation between the amount of Steem Power they have and the strength of their vote.

在HF19中切换至线性奖励带来了极好的用户体验。HF19确保了每个用户投票在奖励池中的影响和他们的Steem Power(即他们在平台上的股份) 成正比。用户现在感觉更强大了，他们何扣看到他们持有的Steem Power总量以及他们投票力量之间的直接联系。

>However, the switch to a linear rewards curve meant that there was less of a disincentive for casting lots of inconsequential votes (“vote spamming”). While it is important for users to be able to earn rewards whenever stakeholders (even small ones) find value in their content, it is also important to disincentivize rewarding content with respect to which no other stakeholders see value.

然而，切换到线性回报曲线意味着对制造很多无关投票(“vote spamming”)缺少抑制作用。尽管对用户而言无论何时股东(即使是小的)发现他们内容中的价值他们都可以挣得奖励很重要，但没有其它股东发现价值时抑制奖励同样重要。

>After discussion with the witnesses, it was decided to apply the “vote dust” shift to all votes equally. Each vote that is cast will be shifted down by about 1.219 SP. This effectively establishes a “baseline” voting strength that applies to everyone, while still maintaining a linear rewards curve for votes above the baseline. This way even large Steem Power holders won’t be able to profit from casting countless inconsequential votes.

在与见证人们探讨后，决定把“投票尘埃”平等地应用到所有的投票上。每个投票将被降低约1.219 SP。这有效地确立了适用于所有人的“基线”投票权，基线以上的投票仍保持线性回报曲线。这样，即使大的SP持有者也不能通过制造无数无关紧要的票来获得收益。

## 工作证明的帐户通过softfork挖掘 / Proof-of-Work account mining via softfork

>The changes required to add support for PoW mining for discounted accounts will be included in hardfork 20, but the actual PoW mining will be added later as a softfork on top of HF20.

HF20中包含的打折账户的修改要求添加PoW挖矿支持，但是实际上PoW挖矿在以后将会被添加成HF20之上的软分叉。


## 移除Power Down限制 / Removal of Power Down Restriction

>To prevent faucet abuse, accounts could not previously power down unless they had 10 times the account creation fee in Steem Power. Because account creation fees will now be burned with HF20, there will be less of a financial incentive to abuse faucets. After HF20, Steem account holders will have the freedom to power down their SP regardless of their account balance.

为了阻止水龙头滥用，账户以前不能Power down除非他们有十倍于账户创建费的Steem Power。因为HF20中账户创建费将会被燃烧，滥用水龙头的财务诱因将减少。HF20以后，不管他们的账户余额如何，STEEM账户持有者都将可以自由的Power down他们的SP。

## 见证人喂价格式的更新 / Update to witness price feed format

>This change only affects the witnesses. A small change will be made to require the base to be SBD and the quote to be STEEM. Currently, both orders are allowed and can lead to undefined behavior in the price feed. Most witnesses are already supplying their price feeds in this format.

这项修改只影响见证人。将作一个小小的变动：要求以SBD为基础，报价为STEEM。当前，两种方式都允许，在处理喂价可能导致未定义行为。很多见证人已经按这种形式提供喂价了。

#  <center>额外细节 / Additional Details</center>

>The full list of changes, as well as additional details not listed here, can be found in the GitHub Steem 0.20.0 project. More details can also be found in the original @steemitblog proposal: Proposing Hardfork 0.20.0 “Velocity”.

可以在GitHub [Steem 0.20.0 project](https://github.com/steemit/steem/projects/3) 获取完整的更改列表，以及此处未列出的其他详细信息。也可以参考 @steemitblog 发表的提案原文:  [Proposing Hardfork 0.20.0 “Velocity”](https://steemit.com/steemit/@steemitblog/proposing-hardfork-0-20-0-velocity)获得更多细节信息。

#  <center>结论 / Conclusion</center>

>The changes that are coming in the Velocity hardfork are very exciting because they are establishing the foundation that will enable Steemit.com and apps built on top of Steem to onboard millions of new users while remaining economically scalable. With these changes and the additional improvements described above, the Steem platform will be better than ever!

在HF20(速度硬分叉)中即将到来的改变是极其令人兴奋的。这些更改为使得Steemit.com以及基于STEEM的第三方应用引入数以百万计的新用户并保持经济系统的可扩展性打下了坚实的基础。有了上述描述中的改变以及额外的改进，STEEM平台将比以往任何时候都好！

Steem on,
Team Steemit

- - -

This page is synchronized from the post: [非正式翻译：硬叉20 “速度”开发进展 / Informal translation：Hardfork 20 (“Velocity”) development update](https://steemit.com/@oflyhigh/20-informal-translation-hardfork-20-velocity-development-update)
