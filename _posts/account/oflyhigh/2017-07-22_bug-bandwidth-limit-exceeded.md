
---
title: '“不管黑猫白猫，能抓住BUG的就是好猫”， 从Bandwidth Limit Exceeded说起'
permlink: bug-bandwidth-limit-exceeded
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-22 10:35:06
categories:
- cn
tags:
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmWXU7JZoXkJdj8v7RauonS9Q2ivN3jV5dkjqkgfeFgm5b/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmWXU7JZoXkJdj8v7RauonS9Q2ivN3jV5dkjqkgfeFgm5b/image.png)

# Bandwidth Limit Exceeded

如果你从未听说过见证人，也不知道见证人在STEEMIT网络中起到什么作用，那么可以看一下我的这篇文章：
* [📌重点在文末/ 见证人简介，如何为见证人投票以及设置见证人投票代理](https://steemit.com/cn/@oflyhigh/6dbdqm)

假设你已经对见证人有了一些了解，那么你可能会有疑问，见证人和猫有啥关系？
这要从之前几天频繁发送的一个错误说起, 那就是***Bandwidth Limit Exceeded***

对于这个错误，我曾经写过两篇分析文章：
* [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/cn/@oflyhigh/bandwidth-and)
* [Steemd.com 改版了 & 被 Bandwidth Limit Exceeded 折磨的朋友有福了](https://steemit.com/cn/@oflyhigh/steemd-com-and-bandwidth-limit-exceeded)

第一篇文章所立的层次不够高远，完全从用户的角度分析，因为我觉得，系统相关的信息我们改变不了，我们改变的只能是我们自己。于是得出的结论是：  ***增加vshares占比 (买买买)***,  或 ***减小你的平均带宽占用(等、减)***。先不说第二种方式减少操作次数，减少文本长度等带来的诸多不爽，***方式一岂不是让STEEM变成一个金钱至上的网络了?*** (难道不是吗? 😲)

第二篇文章中，我才知道原来Bandwidth Limit Exceeded是由一个BUG所引起，这个BUG叫做***溢出(Overflow)***，这个BUG导致max_virtual_bandwidth 变得非常之少，进而导致用户正常操作受限。

# 如何处理BUG

那么既然有BUG了，我们修复了BUG，再升级到新版，就好了呗？
事情并非那么简单。

以我N年码农的经验，我是没少干过修复旧BUG引进新BUG的事情，尤其是对一个复杂的系统而言。有个词汇叫做***牵一发而动全身***，如果贸然升级就可能陷入***修复BUG->升级->产生新BUG->修复BUG->升级->产生新BUG***的怪圈。

@gtg 今天更新的 [Witness log](https://steemit.com/witness-category/@gtg/witness-log)
其中有一句话很有意思： ***We've got trouble, we've made it double***

他的文章中，提及了当***Bandwidth Limit Exceeded*** 问题发生，见证人之一提出了将***maximum_block_size***修改为: 131072， 达到提升***max_virtual_bandwidth*** 目的：
>dgp.max_virtual_bandwidth = (dgp.maximum_block_size * dgp.current_reserve_ratio * STEEMIT_BANDWIDTH_PRECISION * STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS) / STEEMIT_BLOCK_INTERVAL;


从上边公式来看，貌似没有问题。
然而，大家响应号召并***修改maximum_block_size后，发现问题依然(或者变得更加严重)***

然后，发现是溢出问题，大家又纷纷把***maximum_block_size***改回为: 65,536

那么如果使用官方释出的新代码升级呢? 这当然是方案之一，但是若有新BUG引入，就没来回改***maximum_block_size***参数这么简单了。

# 猫咪战队也参战

说了这么多，你可能会问，这和猫咪有啥关系呢？是呢，怎么看也和猫咪产生不了关联。

事实上是见证人之一@abit 提出并实施了一种非常有意思的方案，即***解决(避免)了Overflow 的问题***，又无需急于升级节点，岂不是美哉？

这个方案的思路就是通过在溢出即将发生的时候，往steem上发送一些超长内容，拉高***average_block_size***。而在0.19.0及以前版本中，***average_block_size ***的变化会作用到***current_reserve_ratio***，代码中说明如下：
```
      /**
       *  Average block size is updated every block to be:
       *
       *     average_block_size = (99 * average_block_size + new_block_size) / 100
       *
       *  This property is used to update the current_reserve_ratio to maintain approximately
       *  50% or less utilization of network capacity.
       */
      int32_t    average_block_size = 0;

      /**
       *   Any time average_block_size <= 50% maximum_block_size this value grows by 1 until it
       *   reaches STEEMIT_MAX_RESERVE_RATIO.  Any time average_block_size is greater than
       *   50% it falls by 1%.  Upward adjustments happen once per round, downward adjustments
       *   happen every block.
       */
      int64_t current_reserve_ratio = 1;
```

所以***超长内容，拉高average_block_size, 让其大于50% maximum_block_size 就会降低 current_reserve_ratio， 让其回归, 进而避免引起Overflow***

说了这么多，🐱 猫在哪里呢？
其实就是 @abit 的超长回复里用了各种猫图。


比如说来自以下来源的：
http://www.ascii-art.de/ascii/c/cat.txt
https://github.com/melaniecebula/cat-ascii-faces
http://textart.io/art/tag/cat/1

比如这货(STEEMIT行高的问题，胖猫变高了，但依然很胖)：
                                                  
            .                .                    
            :"-.          .-";                    
            |:`.`.__..__.'.';|                    
            || :-"      "-; ||                    
            :;              :;                    
            /  .==.    .==.  \                    
           :      _.--._      ;                   
           ; .--.' `--' `.--. :                   
          :   __;`      ':__   ;                  
          ;  '  '-._:;_.-'  '  :                  
          '.       `--'       .'                  
           ."-._          _.-".                   
         .'     ""------""     `.                 
        /`-                    -'\                
       /`-                      -'\               
      :`-   .'              `.   -';              
      ;    /                  \    :              
     :    :                    ;    ;             
     ;    ;                    :    :             
     ':_:.'                    '.;_;'             
        :_                      _;                
        ; "-._                -" :`-.     _.._    
        :_          ()          _;   "--::__. `.  
         \"-                  -"/`._           :  
        .-"-.                 -"-.  ""--..____.'  
       /         .__  __.         \               
      : / ,       / "" \       . \ ; bug          
       "-:___..--"      "--..___;-"               
                                                  

# 为什么用猫图


其实我也不清楚为何用猫图
或者是因为： “不管黑猫白猫，能抓住***<del><del>耗子</del></del> BUG*** 的就是好猫？”

# 总结

* Bandwidth Limit Exceeded 的问题困扰好多新老用户
* STEEMIT官方以及诸多见证人纷纷行动起来
* @abit 凭借对代码的深刻理解，用猫咪们避免了溢出(Overflow)问题

----

本来是很精彩的事情，写完后发现即没能展现出来精彩，也没能把相关的技术问题解释清楚，实在是能力有限。但我依然决定发出来，让大家了解在STEEM平稳运行的背后，见证人们所做的付出。 这就是见证人们，让我们一起向他们致敬吧!

Image source: [1](https://tse1-mm.cn.bing.net/th?id=OIP.lbnf8bfaE96lQDgp_VvWJQEsDh&p=0&pid=1.1)

- - -

This page is synchronized from the post: [“不管黑猫白猫，能抓住BUG的就是好猫”， 从Bandwidth Limit Exceeded说起](https://steemit.com/@oflyhigh/bug-bandwidth-limit-exceeded)
