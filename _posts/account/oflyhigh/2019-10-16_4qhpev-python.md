
---
title: '有多无聊：弹性碰撞与Python代码'
permlink: 4qhpev-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-16 01:19:30
categories:
- cn
tags:
- cn
- stem
- cn-stem
- collision
- pi
thumbnail: 'https://cdn.steemitimages.com/DQmQgbGt8yjCTtZ3fieB8zZ2mkzaDo24V1XdFL8XcUnS8Be/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


看到一个博主讲了一件很有意思的事情，大意是两个方块物体在水平方向上弹性碰撞后，其中一块再撞到墙壁反弹，最终会发现，在一定条件下发生弹性碰撞的次数会和PI这个常量极度相关。

![](https://cdn.steemitimages.com/DQmQgbGt8yjCTtZ3fieB8zZ2mkzaDo24V1XdFL8XcUnS8Be/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 撞击次数与圆周率

为了说明这个问题，我大致画了个图（原谅我的绘图技能）：
>![](https://cdn.steemitimages.com/DQmb6je2M8UVJbaHKVhHYXBNaZgaUMahAKre6wPqjrTL32q/image.png)

在上图中，有红色方块A(1)和绿色方块B(2)，A以速度v1前进，B静止不动(速度v2=0)，A撞击到B，B被撞后获取一定的速度vb，方块B撞击墙体（黄实线）后返回，又撞击A。

如果A、B质量相等，那么撞击会发生3次，如果A的质量大于B，撞击会发生很多次。

而这个博主总结的规律为：
>如果A、B质量相等，撞击3次
>如果A的质量是B的100倍，那么撞击31次
>如果A的质量是B的10000倍，那么撞击314次
>如果A的质量是B的1000000倍，那么撞击3141次
>如果A的质量是B的100000000倍，那么撞击31415次

观察撞击次数就会发现，撞击的次数竟然符合圆周率(PI)的规律。

# 弹性碰撞

其实如果是真实地实验，很难重现上述规律，为何？因为方块和平面之间存在摩擦，方块在空气中也会有空气阻力，方块和方块撞击时可能会发生一定程度的形变等等。

所以只有在理想情况下，才可能重现上述规律。那么什么是理想情况呢？就是不存在摩擦、不存在空气阻力、方块撞击时无形变等等。

百度百科里关于[弹性碰撞](https://baike.baidu.com/item/弹性碰撞/2321173)定义的更科学一些，直接搬来：
>在理想情况下，物体碰撞后，形变能够恢复，不发热、发声，没有动能损失，这种碰撞称为弹性碰撞（elastic collision），又称完全弹性碰撞（Perfect Elastic Collision）。

弹性碰撞符合两大物理定律：***动量守恒定律*** 以及***能量守恒定律***

而根据我们描述的情况，不难推导出，弹性碰撞后物体的速度：
>![](https://cdn.steemitimages.com/DQmV6b8z2sjYd59uZ5frzbYrxEdq1M99N8aRm7ED3xre73E/image.png)

因为我们目的不是推导公式，所以直接拿来用就好了。因为我们例子中碰撞是发生在直线上的核心碰撞，所以公式中的v，就是物体的初速度啦。

# Python代码

说了这么多，我是要证明弹性碰撞和圆周率的关系吗？非也！我只是好奇碰撞真的符合这个规律吗？

之前说了，理想情况下，实验才能重现出响应的规律，但是实际上没法弄出理想的实验条件呀？不过没关系，可以用程序模拟啊！

为了计算碰撞次数，我们首先需要计算碰撞前后的速度（其实就是简单地套用公式）：
```
def collision(m1, v1, m2, v2):
        va = (v1*(m1 - m2) + 2*m2*v2)/(m1 + m2)
        vb = (v2*(m2 - m1) + 2*m1*v1)/(m2 + m1)
        return va, vb
```

接下来是计算碰撞次数，这可难住了我，如何计算碰撞次数呢？其实就是找出***符合什么条件会退出碰撞***？

从方块图中，我们不难分析出，只有当方块A向左侧行走，且方块B追不上它时，碰撞才会结束，假设向右运动为正，那么亦即符合如下条件：
>***`v1 < 0 and v2<=0 and abs(v1) >= abs(v2)`***

还有就是方块和墙壁撞击，墙壁的质量，那么代入速度公式中，不难算出：
>***`v2 = -1*v2`***

根据上述分析我写出如下代码来计算次数：
```
def func_times(m1, v1, m2, v2):
        times = 0
        while(True):
                if(v1 < 0 and v2<=0 and abs(v1) >= abs(v2)):
                        break
                v1, v2 = collision(m1, v1, m2, v2)
                times = times +1

                if(v1 < 0 and v2<=0 and abs(v1) >= abs(v2)):
                        break

                v2 = -1*v2
                times = times +1

        return times
```

# 见证奇迹

好了，现在是见证奇迹的时刻的时刻啦。
```
m1 = 100
m2 = 100
v1 = 100
v2 = 0
for i in range(0, 7):
        m1 = 100*100**i
        times = func_times(m1, v1, m2, v2)
        print(f"M1:{m1}, M2:{m2}, v1:{v1}, v2:{v2}, Times:{times}")
```

给木块设定质量和初速度，然后模拟碰撞，看看是不是符合这个博主说的规律？

运行上述程序，输出如下：
>![](https://cdn.steemitimages.com/DQmP3pK4KKwqi4SdCMBsnQvVeeQcyBR6t9A2LgTdscVRnU3/image.png)

哇哇哇，果然是圆周率啊，是不是很神奇？

![](https://cdn.steemitimages.com/DQmVhbrSPeaSgRdAUZB6B9FvxA2Rvpfnc6Ky26NAhy3avFu/image.png)
(图源 ：[pixabay](https://pixabay.com/))

至于为何是圆周率，就留给聪明的你去证明啦！

# 相关链接

* [弹性碰撞](https://baike.baidu.com/item/弹性碰撞/2321173)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['有多无聊：弹性碰撞与Python代码'](https://steemit.com/@oflyhigh/4qhpev-python)
