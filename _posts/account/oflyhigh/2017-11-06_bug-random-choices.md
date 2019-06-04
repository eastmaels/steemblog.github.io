
---
title: '列表复制导致的BUG，以及random.choices()的问题'
permlink: bug-random-choices
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-06 02:20:00
categories:
- python
tags:
- python
- bug
- sample
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmbB83EBZAfAuk91p3PHa6Lp6vWzmefyEP5cmPreQnQcwE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


近日查看程序生成的日志，发现有两个程序均出现一些重复的操作，尽管我程序中有判断，重复操作会被忽略，不会造成什么不良影响，但是有BUG总归是不好的，于是今天早晨抽出时间探究一下，看看到底是哪里出了问题。

# 列表复制导致的BUG

程序A很简单，把核心逻辑抽取出来大致是这样:
```
users = ['a', 'b', 'c', 'd']
for i in range(0, 10):
	users_copy = users
	users_copy.insert(0, 'z')
	for user in users_copy:
		print(user, " do something!")
```

很简单的几行代码，~~书写规范逻辑清晰~~（要脸要脸），为啥会出错呢？

Do something 啥的应该没啥错，继续简化一下代码：
```
users = ['a', 'b', 'c', 'd']
for i in range(0, 10):
	users_copy = users
	users_copy.insert(0, 'z')
	print(users_copy)
```
运行一下瞧瞧：
![](https://steemitimages.com/DQmbB83EBZAfAuk91p3PHa6Lp6vWzmefyEP5cmPreQnQcwE/image.png)

OMG，这是什么鬼，为何插了好多'z'，之所以用user_copy，我就是想每次只更改copy的值啊。既然发现了结果的错误，就很轻易可以知道问题在哪里了。***据说在 Python 语言中，一个变量保存的值除了基本类型保存的是值外，其它都是引用***

所以我上述代码中：
`users_copy = users` 
除了帮我给`users`起了个外号以外，并没有帮我生成一份全新的copy，亏我那么信任它，给它起了个高大山的名字。

知道了这个问题后，再改起来就简单了。
```
users = ['a', 'b', 'c', 'd']
for i in range(0, 10):
    users_copy = users[:]
    users_copy.insert(0, 'z')
    print(users_copy)
```
将代码改成上述样子，再执行一下：
![](https://steemitimages.com/DQmeXQZy1pioG6jtmh4oRqehKHUk6RhZh34sbSRcrpXQtXF/image.png)
这才是我想要的结果。

除了切片操作***`users_copy = users[:]`***还可以用list()函数***`users_copy = list(users)`***，看起来更优雅一些？

上述修改只适合简单列表，嵌套列表等请使用***`copy.deepcopy()`***，反正对我的程序而言，这样的修改就足够了，就不再赘述了。

# ***`random.choices()`***的问题

搞定了程序A，我以为程序B肯定也是相同问题喽，毕竟二者的症状是一样一样的。

然而，我找了半天，我并没有进行插入之类的改变列表的操作，程序中打印了一下过程中的列表，一直没有变化，那重复是怎么产生的呢？

哎，还是老办法，简化一下逻辑，测试一下吧。
```
import random
users = ['a', 'b', 'c', 'd']
for i in range(0, 10):
	users_selected = random.choices(users, k=2)
	for user in users_selected:
		print(user, " do something!")
```
就是从一组用户中随即选择两个让他们干活！这么简单的逻辑，怎么看都没啥问题啊？

好吧，继续简化：
```
import random
users = ['a', 'b', 'c', 'd']
for i in range(0, 10):
	users_selected = random.choices(users, k=2)
	print(users_selected)
```
运行一下：
![](https://steemitimages.com/DQmVsH4RRzGBa5VdCi4Zn5BPQLHdspYNNKHLdTKgkkEJKT4/image.png)
***大哥，你不是在玩我吧，我让你找俩人干活，不是让你找一个人干两份活！*** 我吐了一口老血。
![](https://steemitimages.com/DQme7WfHECSDE3PgvmuXJmCMzGHcNFNBFCyFq5X6HvrxW5s/image.png)

该不会是 random.choices的BUG吧，毕竟这货是Python 3.6当中新引进进来的。之前我还特意发一篇文章比较几种方式呢：
[《Python 随机选取元素的一些方法以及概率问题》](https://steemit.com/cn/@oflyhigh/python-cny)

想到自己发现了一个了不得的BUG，为全人类做出了贡献，那是相当兴奋啊。不过提BUG之前，先好好看看文档吧。

>random.choices(population, weights=None, *, cum_weights=None, k=1)
>Return a k sized list of elements chosen from the population with replacement. 

等等，人家***文档里只说了从列表中选择k个元素，没说不能选重复元素啊？（抗议，这是陷阱！）***

>random.sample(population, k)
>Return a k length list of ***`unique elements`*** chosen from the population sequence or set. 

倒是人家sample函数好好的，才是我需要的东西，***当初手贱把`random.sample`改成了`random.choices`***

# 结论

尽管两个程序表现出相同的病症，但是一个是由于我***想当然的认为Python中列表赋值会生成一个副本***所导致，另外一个是我***想当然的认为`random.choices`的选择结果不会重复***所导致。

***想当然***害死人啊。

还好我只是写点滥程序自己玩，这要是写火箭发射或者卫星轨道控制啥的，画面太美我不敢想象。不过或许这也是人家不用我写火箭发射程序的原因吧😭。

- - -

This page is synchronized from the post: [列表复制导致的BUG，以及random.choices()的问题](https://steemit.com/@oflyhigh/bug-random-choices)
