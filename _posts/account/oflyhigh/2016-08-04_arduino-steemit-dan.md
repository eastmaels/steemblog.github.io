
---
title: '用Arduino计算你在steemit未来的财富，让我们赶超 @dan'
permlink: arduino-steemit-dan
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-04 00:12:15
categories:
- cn
tags:
- cn
- steemit
- money
- wealth
- arduino
thumbnail: http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


English Version:
[Calculate your future wealth with Arduino, let's keep up with @dan !](https://steemit.com/steemit/@oflyhigh/calculate-your-future-wealth-with-arduino-let-s-keep-up-with-dan)
练习写了一篇英文文章几乎没人看，翻译回来。
****
现在在 https://steemit.com 每个人都有或多或少的财富.
它由三部分组成：
1. STEEM
2. STEEM POWER
3. STEEM DOLLARS

例如写作本文时:
 @dan  拥有 `0 STEEM`,   `2,545,363 STEEM POWER` 以及 `14,109 STEEM DOLLARS`.
@oflyhigh , 我拥有`0 STEEM`,   `25.842 STEEM POWER`以及`$17.217 STEEM DOLLARS` 
有点小沮丧，啥时候能和@dan 一样富有啊?
****
言归正传.
**你想不想知道在steemit你未来会有多少钱?**
让我们来试试算一算

经过分析调查， 我发现**如果啥也不做**
* **STEEM POWER  以0.7%的速率每日增长**
* **STEEM 以及 STEEM DOLLARS 保持不变**

###### 表格:  STEEM POWER近日来增幅
日期|增幅
----|----
2016-08-03|(0.69%)	
2016-08-02|(0.69%)	
2016-08-01|(0.69%)	
2016-07-31|(0.70%)	
2016-07-30|(0.68%)	
2016-07-29|(0.73%)	
2016-07-28|(0.71%)	
2016-07-27|(0.88%)	

让我们假设这个增幅保持不变.
STEEM POWER 一天以后就是`your_sp*(1+0.69%)`
对我而言,  STEEM POWER 应该是`25.842*(1+0.69%)=26.0203`
听起来不错嘛.

仔细计算了一下， 如果我 **啥也不做**， 一年后我的 STEEM POWER应该是: `317.93`
和 @dan 的财富比起来，有着巨大的鸿沟啊! 
更重要的是@dan 财富同样保持增长!

有一个好消息是, 我可以通过发表文章来获得STEEM POWER 以及 STEEM DOLLARS.
目前， 我每天大概赚`1.5 STEEM POWER` 以及 `3.8 STEEM DOLLARS`.
如果我把STEEM DOLLARS 转换成 STEEM 然后POWER UP, 那么相当于每天`3 STEEM POWER` !

所以一天后，STEEM POWER 应该是 `your_sp*(1+0.69%) + 3`.
一年后我的 STEEM POWER应该是: `5232.26`!
一年后@dan 的 STEEM POWER应该是:`31320220.00`
****
我使用  Arduino 101开发板运行我的程序.
我想使用这个开发板制造一个双轮自平衡小车, 但是在调整PID参数时遇到一些麻烦. 好伤感!
![Arduino 101 ](http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg)

以下是计算你在steemit未来财富的代码.
应该很容易被修改成其它编程语言.
请根据你的实际情况设定参数.
```
float your_sp = 25.842;       // 当前你钱包中的STEEM POWER
float rate= 0.69/100;         // STEEM POWER 每日增幅
float rewards = 3;            // 平均每日收益（换算成STEEM POWER）
int days = 365;               // 想计算多久以后


void setup() {
  Serial.begin(9600);

  Serial.print( "STEEM POWER you have: " );
  Serial.println( your_sp );
  
  Serial.print( "Daily increase rate at: " );
  Serial.print( rate * 100 );
  Serial.println( "%" );

  Serial.print( "Daily average rewards  in STEEM POWER: " );
  Serial.println( rewards );

  
  for( int i=1; i<=days; i++ ){
    your_sp *= ( 1 + rate );
    your_sp += rewards;
    //Serial.println(sp);
  }

  Serial.print( "STEEM POWER after " );
  Serial.print( days );
  Serial.print( "days should be: " );  
  Serial.println( your_sp );
}

void loop() {
}
```
结果如下.
>STEEM POWER you have: 25.84
>The increase rate at: 0.69%
>Daily average rewards in STEEM POWER: 3.00
>STEEM POWER after 365 days should be: 5232.26

请注意 :
>1.  我们假设增幅保持不变.
>2.  尽快将STEEM DOLLARS 转换成 STEEM 然后Power up.
>3.  你和收益和STEEM POWER、你发表的文章以及点赞等有关.

所以，程序的结果仅供参考. 换句话说，算着玩玩。

你是否认为这篇文章很有趣?
#### 能否给个好评,  所以我可以赚更多的STEEM DOLLARS 来赶上并超越 @dan ? :)

>我是 @oflyhigh
因为国内网络的原因，一直未能玩转各类社交媒体，终日混迹于QQ空间和微信朋友圈。
希望在这里结识更多的朋友。

- - -

This page is synchronized from the post: [用Arduino计算你在steemit未来的财富，让我们赶超 @dan](https://steemit.com/@oflyhigh/arduino-steemit-dan)
