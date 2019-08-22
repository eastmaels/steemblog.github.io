
---
title: 'Cn-Curator: 基于转发的好文推荐系统 | Cn-Curator: Reward Awesome Posts by Resteem'
permlink: cn-curator-or-cn-curator-reward-awesome-posts-by-resteem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-22 10:54:39
categories:
- cn-reader
tags:
- cn-reader
- cn-curation
- sct
- sct-cn
- sct-freeboard
- steemleo
- lifestyle
- cn-stem
- steemstem
- cn-programming
- steem
- awesome
- cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
thumbnail: 'https://avatars3.githubusercontent.com/u/51142977?s=400&u=eea78df3d695e5ab949f6cd26451d5d59d6e40c6&v=4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![](https://avatars3.githubusercontent.com/u/51142977?s=400&u=eea78df3d695e5ab949f6cd26451d5d59d6e40c6&v=4)
image from: https://github.com/awesome-steem
</center>

## 起因

大伟老师 @rivalhw 最近一直在通过[好文推荐](https://steemit.com/cn-reader/@rivalhw/scmuv-steemit)来推动社区的活力和发展，对于CN社区的写作者来说，是实实在在的认同与帮助。

但【好文推荐】目前每天手动的编辑量有些大（约0.5~1小时），大伟老师在[《Steemit社区好文推荐的一点新想法》](https://busy.org/@rivalhw/7sdefl-steemit) 中已经介绍了希望可以自动化部分好文推荐的工作的计划。简言之，系统将自动发布文章，汇总大伟老师已经转发的“好文”，并且根据一定的比例自动点赞。

虽然 Steem 的生态并不仅仅限于“写作”或“文章”，但文章的创作仍然是 Steem 最重要的沟通和交流方式之一，也是人类表达思想、进行交流的核心手段。

就“文章”而言，Steem的默认设置是认为 Vote（投票）是最核心的表达认同、赞赏、反对等 Curation 的方式，但由于经济利诱的影响，使得 Vote 并不那么纯粹，而夹杂了多方利益的博弈。相比之下，一般而言，Reblog / Resteem （转发）似乎更值得信服。一般而言，被转发次数较多的文章或者是确实令人惊叹，或者是与更多人的切身利益或兴趣相关；也就是说，转发也是一种实际上的 Curation 的非常有效的手段。

所以，大伟老师通过转发来表达自己对好文的赞赏，似乎也更在情理之中了。Cn-Curator 系统目前的实现方式也是通过观察 curator 的转发行为，自动汇总报告、自动进行的点赞。


## 实现

这个系统基于 Autopilot 系统的模块构建，实现是十分简单的，大约花费了1h左右实现（包括调试、测试、部署等）。

由于 Autopilot 项目已经实现的一些用于构建自动化工具的模块（材料、食材），我们可以很快地写一些 Recipe（菜谱），用于自动发布文章、自动点赞、自动领取收益、自动转账等操作。

比如，Cn-Curator 系统最主要的代码是实现了两个 cn-reader 的 recipes：

1. 一个是自动发文的“菜谱”，代码在 https://github.com/awesome-steem/cn-curator/blob/master/recipe/info/cn_reader.py
2. 一个是自动点赞的“菜谱”，代码在 https://github.com/awesome-steem/cn-curator/blob/master/recipe/vote/cn_reader.py

这两个“菜谱”的核心代码也比较容易理解，这里简单贴一下。通过代码里的几个参数，大家应该能理解 recipe 想要表达的意图。

**自动发文**：

```python
RESTEEM_ACCOUNT = "rivalhw"
INFO_ACCOUNT = "rivalhw"
CURATION_CYCLE = 1.01 # days

class CnReaderSummary(InfoRecipe):

    def mode(self):
        return "query.comment.post"

    def config(self):
        return {
            "account": RESTEEM_ACCOUNT,
            "days": CURATION_CYCLE,
            "reblog": True
        }

    def by(self):
        return INFO_ACCOUNT

    def title(self, data):
        return "好文天天赞{}榜上有名".format(get_zh_time_str())

    def body(self, data):
        date = get_zh_time_str()
        count = len(data)
        head = ["作者", "文章"]
        body = []
        for item in data:
            row = [
                "@" + item['author'],
                "<a href=\"{}\">{}</a>".format(self.get_url(item['authorperm']), item['title'])
            ]
            body.append(row)
        table = build_table(head=head, data=body)
        return POST_TEMPLATE.format(date=date, count=count, table=table)

    def tags(self, data):
        return ["cn-reader", "cn", "partiko", "zzan"]

    def ready(self, data):
        # post only there're more than 0 resteemed posts
        return data and len(data) > 0

    def get_url(self, authorperm):
        return APP_URL + "/" + authorperm
```

**自动点赞**：

```python
RESTEEM_ACCOUNT = "rivalhw"
VOTER_ACCOUNT = "rivalhw"
CURATION_CYCLE = 1.01 # days

class CnReaderVoter(VoteRecipe):

    def __init__(self):
        super().__init__()
        self.posts_num = 0
        self.voted_posts = 0

    def mode(self):
        return "query.comment.post"

    def config(self):
        return {
            "account": RESTEEM_ACCOUNT,
            "days": CURATION_CYCLE,
            "reblog": True
        }

    def by(self):
        return VOTER_ACCOUNT

    def what_to_vote(self, ops):
        if not self.ops.is_upvoted_by(self.by()):
            logger.info("We will vote the post {}".format(self.ops.get_url()))
            self.posts_num += 1
            return True
        return False

    def who_to_vote(self, author):
        return True

    def when_to_vote(self, ops):
        return VOTE_TIMING # mins

    def how_to_vote(self, post):
        self.voted_posts += 1
        logger.info("voting {} / {} posts".format(self.voted_posts, self.posts_num))
        weight = self.voter.estimate_vote_pct_for_n_votes(days=CURATION_CYCLE, n=self.posts_num) * VOTE_PERCENTAGE
        if weight  > 100:
            weight = 100
        return weight

    def after_success(self, res):
        if self.voted_posts == self.posts_num:
            logger.info("Done with voting. Exit.")
            sys.exit()

```

我们将部署这些脚本于每天晚上8点执行，所以大伟老师当天的转发会自动生成报告并进行点赞。
如大伟老师所说，随着成本的降低，类似的curation工作或许可以拓展到更多的领域。

Cn-Curator 项目在GitHub以 MIT License 开源：https://github.com/awesome-steem/cn-curator  

欢迎参与贡献或提出你的建议和问题~

## 未来

在 [Awesome Steem #0 | 你欣赏的人生感言或经验](https://steemblog.github.io/@robertyan/awesome-steem-0-or/) 中我提到过，

> 博物馆的馆长，就常常被称为 Curator。 所以Curator的工作不仅仅是用金钱去奖励别人，而更本质的是让世界上有魅力、有温度的内容可以被留存、传递和发扬出去。

Steem 的美妙之处之一，在于其中有很多精彩而值得驻足观赏（awesome）的人、物和事。
Cn-Curator 的意义之一，也是让这些美妙和精彩（awesome）的瞬间可以以更低的成本，被更好的保留和发现吧。

与大伟老师的【好文推荐】的努力相对应的，SteemCN 也有计划实现一个【好文推荐】的页面，用于汇总 大伟 @rivalhw 和 @cn-curation 等推荐的文章。此功能也在开发的过程中：https://github.com/steem-driver/condenser/issues/11   欢迎提供建议或贡献你的力量。

最后，感谢大伟老师在【好文推荐】的工作上的坚持与耐心；诚然，这并非一项容易的工作，需要诚意正心，需要兴趣与毅力，也需要合适的工具。同时，也感谢所有坚持在 Steem 创作更好的作品的朋友们，世界因你们而美好 :)

- - -

This page is synchronized from the post: ['Cn-Curator: 基于转发的好文推荐系统 | Cn-Curator: Reward Awesome Posts by Resteem'](https://steemit.com/@robertyan/cn-curator-or-cn-curator-reward-awesome-posts-by-resteem)
