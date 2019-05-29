
---
title: "【有奖问答】写程序解香蕉苹果梨问题"
permlink: tnnwsgnjfw
catalog: true
toc_nav_num: true
toc: true
date: 2019-01-23 21:46:30
categories:
- cn
tags:
- cn
- busy
- cn-activity
- cn-reader
- cn-stem
thumbnail: https://steemitimages.com/0x0/https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/0x0/https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_960_720.jpg)

(image source: [Pixabay](https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_960_720.jpg))

看到一道有趣的问题：[假设法简化题目，然后调整求解](https://steemit.com/@khairulzaman/nsaplspv)
题目是：**香蕉一斤6元，苹果一斤3元，梨一斤5元，妈妈一共买了10斤水果，花了52元，其中苹果和梨一样多，请问各买了水果多少斤？**

作为能偷懒就偷懒的草台班子，决定写个小程序解这道题。

解题的思路是，让设i为未知斤香蕉，设j为未知斤苹果，设k为未知斤梨。
i,j,k从0-9搭配，直到i斤香蕉，j斤苹果和k斤梨加起来的价格等于52，并且j等于k（苹果和梨一样多），并且i+j+k等于10（妈妈一共买了10斤水果)

这是程序的代码：

```
        int banana = 6;
        int apple = 3;
        int pear = 5;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j <10; j++)
                for (int k = 0; k < 10; k++) {
                    int cost = banana * i + apple * j + pear * k;
                    if (cost == 52 && j == k && i+j+k==10) {
                        System.out.println("Banana: " + i);
                        System.out.println("Apple: " + j);
                        System.out.println("Pear: " + k);
                    }
                }
        }

```

答案：
Banana: 6
Apple: 2
Pear: 2

是不是很简单的把这道题给解了～

最后出道题给大家
题目是：**香蕉一斤6元，苹果一斤3元，梨一斤5元，妈妈一共花了252元，其中苹果数量是香蕉的2倍，梨的数量是苹果的3倍，请问各买了水果多少斤？**
**谁最快解出将获得1 SBI奖励～**
_提示：把上面的代码修改一下就可以迅速解答～_
_上面的代码我已经放到在线编译器里:https://rextester.com/KZMF76887, 你需要修改几个参数就可以解这题(想运行程序点击”Run it“ 或者按F8）_

---

_Posted from my blog with [SteemPress](https://wordpress.org/plugins/steempress/) : [http://ericet.vornix.blog/2019/01/23/%e3%80%90%e6%9c%89%e5%a5%96%e9%97%ae%e7%ad%94%e3%80%91%e5%86%99%e7%a8%8b%e5%ba%8f%e8%a7%a3%e9%a6%99%e8%95%89%e8%8b%b9%e6%9e%9c%e6%a2%a8%e9%97%ae%e9%a2%98/](http://ericet.vornix.blog/2019/01/23/%e3%80%90%e6%9c%89%e5%a5%96%e9%97%ae%e7%ad%94%e3%80%91%e5%86%99%e7%a8%8b%e5%ba%8f%e8%a7%a3%e9%a6%99%e8%95%89%e8%8b%b9%e6%9e%9c%e6%a2%a8%e9%97%ae%e9%a2%98/)_

---

- - -

This page is synchronized from the post: [【有奖问答】写程序解香蕉苹果梨问题](https://steemit.com/@ericet/tnnwsgnjfw)
