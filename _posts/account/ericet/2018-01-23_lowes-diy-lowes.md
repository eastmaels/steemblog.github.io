
---
title: "Lowes 优惠码DIY 再也不用花钱买Lowes优惠券了~"
permlink: lowes-diy-lowes
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-23 17:44:45
categories:
- cn
tags:
- cn
- coupon
- lowes
thumbnail: https://steemitimages.com/DQmcAWTvizTwnQx1X4cnApme1SUBrUsy6LEQSUwqCX2i7yX/ebay.PNG
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


收藏这个帖子，以后再也不需要花钱买Lowes的优惠券了～
![ebay.PNG](https://steemitimages.com/DQmcAWTvizTwnQx1X4cnApme1SUBrUsy6LEQSUwqCX2i7yX/ebay.PNG)
这里深入的了解一下Lowes优惠码的原理，这样以后大家碰到相似的优惠码可以自主破解！

   1. Lowes优惠码的原理（如果不感兴趣，直接跳到最后）
Lowes 优惠码的模型：47000RRRRRCODEZ
RRRRR：代表随机号码，比如12345
CODE：4位master code，这是最主要的号码，每个相同类别的折扣码都会有相同的master code。目前还能用的master code 如下：
          10% off - 0148, 0149, 0150,0151 (exp 1/28)
          $10 off $50 - 9218
          $15 off $75 - 9347
          $20 off $100 - 0146,0147,9382 (exp 1/28)
          $40 off $200 - 9388 (exp 1/28)
          $60 off $400 - 9394 
Z：最后的一位号码叫check sum，就是检查之前号码的总和。可以通过以下公式获得：
10 -（(总数(单数位+ 偶数位x3))%10）
比如我随机的优惠码是：47000123459218？（满50-10优惠码）
 4    7     0     0    0     1     2     3     4     5     9       2      1       8 
[0] [1]  [2]  [3] [4]  [5]  [6]  [7]  [8]  [9] [10] [11] [12]  [13]
最后一位=10 -（4+7x3+0+0+0+1x3+2+3x3+4+5x3+9+2x3+1+8x3)%10
最后一位=10 - 98%10
最后一位=10-8
最后一位=2
最终得到：470001234592182
到网站试试可不可以使用：
![lowes1.PNG](https://steemitimages.com/DQmNqRbmRfAYSf8q5Quxm2KuwcSsP2GwCGkRNnkmH9ecZTV/lowes1.PNG)

显示这个优惠码已被使用，所以这个优惠码是有效的，只是已经被人使用了。
我们得到一个有效的优惠码后，可以通过这个优惠码推算出下一个有效的优惠码，步骤如下：
1. 有效的优惠码：470001234592182
2. 往第10位加1，最后一位加7（如果超过10，选最右边的数字，比如15，选5）
3. 新的优惠码是：470001234692189
4. 试试新的优惠码：
![lowes2.PNG](https://steemitimages.com/DQmak7S6EUeaX3zPNKZWENwFuwXTdKjFE2SSCu99UF6XweA/lowes2.PNG)
还是显示被别人用了，不怕继续重复第二步，直到生成一个可以用的优惠码
![lowes3.PNG](https://steemitimages.com/DQmd7PhqUWagX8fzF8jo9APQ8o1nn7Uqoaucd6CABUaaCxL/lowes3.PNG)

成功了～ 满50减10的优惠码显示在购物车上了～

如果想在店里使用优惠码，需要生成条形码让店员刷，步骤如下：
1. 前往这个网站：https://www.barcodesinc.com/generator/index.php
2. 输入刚才生成有效的优惠码（470001234892183）
3. 点击“Generate Barcode”
![barcode.PNG](https://steemitimages.com/DQmcp1BLHqJ5yN9k4jdGUyYsyQTCMg38AqFeMkL3jQ9REdC/barcode.PNG)
4. 条形码就生成了，保存条形码的图片到手机
5. 到店里让收银员刷这个条形码
*注：不要打印下来让店员刷，这样很容易被收银员发现这是自己生成的优惠码。


   2.  Lowes优惠码生成器Python程序
如果不想自己算出优惠码，可以直接使用下面的程序：
http://rextester.com/CDI8736
这个程序会生成Lowe's 满50-10，75-15，100-20，200-40，400-60和10% off的优惠码。
只需修改代码第二行的价格就可以得到相应折扣的优惠码。比如你要满200-40的优惠码，第二行的价格改成200，然后点击“Run it"就可以生成优惠码了。


   3. Lowes 优惠码生成网站
如果你还看不懂前面的方法，这个方法是最简单的，就是去这个网站：https://lowescoupongenerator.000webhostapp.com/
按照第一部分的方法，花了半个小时写了这个网站（不要嫌弃页面）
选择你想要的折扣，点击“Generate”就会自动生成优惠码了。如图：
![website.PNG](https://steemitimages.com/DQmauiiTDzP8hDLMgYtykvRoAXnQMZD1d3o4XjQh9tz4arw/website.PNG)

- - -

This page is synchronized from the post: [Lowes 优惠码DIY 再也不用花钱买Lowes优惠券了~](https://steemit.com/@ericet/lowes-diy-lowes)
