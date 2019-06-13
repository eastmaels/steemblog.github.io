
---
title: 'Interview Question: What is the difference between List and Dictionary in Python? 面经：Python 的 List 和 Dictionary 有啥区别？'
permlink: interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-01 16:23:27
categories:
- cn
tags:
- cn
- cn-programming
- programming
- python
- steemstem
thumbnail: https://steemitimages.com/DQmQoiiUVFvgvrABvfduCkiRy1LYrdXHtCqkfPaoTKEJuss/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmQoiiUVFvgvrABvfduCkiRy1LYrdXHtCqkfPaoTKEJuss/image.png)

This is a real interview question:  What is the difference between List and Dictionary in [Python](https://helloacm.com/how-to-importexport-matlab-mat-file-to-python/)?
问题： Python 的 List 和 Dictionary 有啥区别？

You need to answer that immediately without googling..
不许查资料，你怎么回答这个面试题？

My answer: a list is like an array whilst a dictionary stores key-value pairs.
我不加思索的回答到： List 就像数组一样 而 Dictionary 是 键值对的一数据结构。

The interviewer asked "is the dictionary ordered"?
面试官继续说，那么 Dictionary 是有序的么？

What? I think he meant,  can we trust the sequence when iterating the [dictionary](https://helloacm.com/using-dictionary-object-in-vbscript/)?
啥？啥是有序？

With some doubt, I still said: it is unordered.. because the dictionary in Python is like hash table and a [hash table](https://helloacm.com/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity/)  is clearly unordered.
我还是犹豫了一下，说是无序的，面试官说，为什么？
我说，因为 [Python](https://justyy.com/archives/911) 里的 Dictionary 就如 [哈希表](https://justyy.com/archives/4987)一样，而哈希表是没有序的。

He seems satisfied.
面试官似乎很满意。

After I come back, I verified a little bit:
回来之后，我验证了一下。

Create a list (or array)
Python3 创建数组
> a=[1,2,3,4,5]

Remove item 3
删掉3
> a.remove(3)
> print(a)  # [1, 2, 4, 5]

Put 3 back to the list
把3加回去

> a.append(3)
> print(a) # [1, 2, 4, 5, 3]

So, yes, the list is 'ordered' because the new item always is appended to the end of the list. Let's take a look at the dictionary.
数组来说， 是有序的，因为每次添加总是在数组的末尾， 我们再来看一下 字典Dictionary

> a={1:1,2:2,3:3,4:4,5:5}

Remove key=3
删除3
> a.pop(3) # {1: 1, 2: 2, 4: 4, 5: 5}

Put key=3 back to the dictionary
再把3加回到字典中
> a[3] = 3

and we've got the original dictionary.
得到了：
> print(a) # a={1:1,2:2,3:3,4:4,5:5}

However, it is inconsistent on my friend's PC, which shows {1:1,2:2,4:4,5:5,3:3}
但是在我朋友的机器上，显示却是 {1:1,2:2,4:4,5:5,3:3}

So, the order cannot be trusted when you iterate the dictionary. The following code might break!
意思是，字典里的顺序是不能被信任的，也就是说如果你

```
for key in a:
    do_something_with_order_matters(a[key])
```


做了一些顺序有区别的事，那么就很可能会出问题！

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [What is the difference between List and Dictionary in Python?](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/)
- [面经：Python 的 List 和 Dictionary 有啥区别？](https://justyy.com/archives/5217)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/stats/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-01)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [今天国足嬴了，我们来说说什么是SEO？流量怎么挣钱？](https://steemit.com/cn/@justyy/seo)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [SP小于500也可以通过程序来设置点赞百分比](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [碧桂园海外(英国)招博士让我思考了人生规划, 碧桂园适不适合你?](https://steemit.com/cn/@justyy/3dyled)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2), [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi) and [Part 4](https://steemit.com/cn/@justyy/ned-sp-steemit-part-4)
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-08-31) 
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #programming #python #steemstem

- - -

This page is synchronized from the post: [Interview Question: What is the difference between List and Dictionary in Python? 面经：Python 的 List 和 Dictionary 有啥区别？](https://steemit.com/@justyy/interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary)
