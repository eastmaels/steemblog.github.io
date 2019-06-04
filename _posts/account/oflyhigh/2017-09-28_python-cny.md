
---
title: 'Python 随机选取元素的一些方法以及概率问题'
permlink: python-cny
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-28 11:22:39
categories:
- cn
tags:
- cn
- cn-programming
- python
- random
- sample
thumbnail: https://steemitimages.com/DQmcQ9NjUGYTynLd8gKfDk4EMjYm8sHvPHZf9TjezST4ZT1/cube-442544_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前有一个任务，其中一个步骤是从名单中随机选择部分用户去执行一些操作，而且要保证用户被选中的概率大致相等。

![cube-442544_1280.jpg](https://steemitimages.com/DQmcQ9NjUGYTynLd8gKfDk4EMjYm8sHvPHZf9TjezST4ZT1/cube-442544_1280.jpg)
(图源：[pixabay](https://pixabay.com))

# `random.randint()`

我对Python不是很熟，所以我首先想到的是用random生成列表长度范围内的随机数，然后再用下标的方式去读取列表。

为了记录操作次数以比较列表元素被选中的概率，我将列表改成字典的形式，以便于记录操作次数。

##### 代码如下：
```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        index = random.randint(0, 3)
        dict[list[index]]+=1
pprint(dict)
print("CPU Time:", time.clock() - start)
```

##### 执行结果如下：
![](https://steemitimages.com/DQmdqQscNQVNFvPRFhMzfm63SqvuJsp99Vo3uo5iUnzFtZb/image.png)
可以看到元素被选中的概率基本相同，可以满足我们的需求。

# `random.choice()`

上述代码虽然能实现功能，但是总感觉不是很优雅，经过查手册，发现了random.choice()这个函数，来试试这个吧。

##### 代码如下：

```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        choice = random.choice(list)
        dict[choice]+= 1
pprint(dict)
print("CPU Time:", time.clock() - start)
```
##### 执行结果结果如下：
![](https://steemitimages.com/DQmbopy42JDCqkUPYJV13QSwAXeN9dbAhTQDfQrSJpoTpYM/image.png)
可以看出元素被选中的概率基本相同，但是***就性能而言，比random.randint()方法要好很多.***

# `random.sample()`

有发现random模块居然还有个sample函数，看起来专门为取样设计的啊

代码如下：
```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        samples = random.sample(list, 1)
        dict[samples[0]]+= 1
pprint(dict)
print("CPU Time:", time.clock() - start)
```

##### 执行结果结果如下：
![](https://steemitimages.com/DQmWNpR6r5qqBJE6xxn19KR1XqQMGEhqrPxCuC2MapvMqN4/image.png)

OMG, 尽管元素被选中的概率基本相同，但***这性能哭了***。（当然，可能耗费在列表元素读取上，具体是啥，懒得评估了），看来名字好看也不一定中用啦。

# `random.choices()`

咦，又发现一个崭新的函数，之所以说它是崭新的，是因为这是在3.6版本中新增的函数 ***New in version 3.6***

如果你还在运行3.6以下版本，对不起，这个你用不了。

##### 代码如下：

```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        choices = random.choices(list, k=1)
        dict[choices[0]]+= 1
pprint(dict)
print("CPU Time:", time.clock() - start)
```

##### 执行结果结果如下：
![](https://steemitimages.com/DQmWyVt8grpsy9366hZid4zehaMrE7Q1W3v637fYzWEsrP6/image.png)

哇，你看看人家，要结果有结果，要颜值有颜值，要性能有性能，简直完美的不要不要的。


# 更进一步

从上边的结果，不能看出，选取结果***概率都是均匀分布的***，符合我们的要求。

但是选择一个元素的时候， ***`random.choice()`函数性能最好***。

那么我们为何还要大力推崇***`random.choices() `***呢？答案有两点：

* 支持选择多个元素
* 支持设置不同元素权重

##### 支持选择多个元素

代码：
```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        choices = random.choices(list, k=2)
        dict[choices[0]]+= 1
        dict[choices[1]]+= 1
pprint(dict)
print("CPU Time:", time.clock() - start)

```

结果：
![](https://steemitimages.com/DQmRd16RDMRFmUphGECwNY3R7C5qw7yZvBHL9EgXjjrzmWD/image.png)
看吧，选择了2倍量的元素，耗时只增加了一丁点。


##### 支持设置不同元素权重
如果想让不同的元素，被选取的概率不同，我之前的做法是这样的
把`['a', 'b', 'c', 'd'] `改成`['a', 'a', 'b', 'c', 'd']`，是不是看起来傻，我觉得也是！

正确是姿势是用***`random.choices()`***并设置***权重/weights*** 的方法

代码：
```
import time
import random
from pprint import pprint

dict= {'a':0, 'b':0, 'c':0, 'd':0}
list = list(dict.keys())

pprint(dict)
pprint(list)

start = time.clock()
for i in range(0, 400000):
        choices = random.choices(list, [2, 2, 1, 3], k=2)
        dict[choices[0]]+= 1
        dict[choices[1]]+= 1
pprint(dict)
print("CPU Time:", time.clock() - start)
```

结果：
![](https://steemitimages.com/DQmNjEH9vQDm63rpFLo8ZcqzMKNMLQtGFK1W8DayWJ2dNbS/image.png)
完美的不要不要的，有没有？

听说用cum_weights参数，效率会更高，比如改成这样： 
***`choices = random.choices(list, cum_weights=[2, 4, 5, 8], k=2)`***
试了一下，果然性能提升了不少，不过我决定坚决弃用，为何？ 不直观呗！

# 总结 / Summaries

通过学习，我们知道在Python 中，可以用下列函数随机选取元素
* ***`random.randint()`***
* ***`random.choice()`***
* ***`random.sample()`***
* ***`random.choices()`***

通过测试，我们发现最后一个函数可以用来***选取多个元素***，并且***支持设置权重，性能也是极佳***。以后就用它啦。

---

之所以做这个测试，是因为我的一段程序中原本用的***`random.sample()`***，但是选中的元素明显概率不一样，后来我改写了程序其它部分，并改用***`random.choices()`***，概率分布效果极佳。

但是我觉得***`random.sample()`***不应该存在概率问题啊，于是写了上述几段程序测试了一下，发现并不存在所谓概率的问题。看来我冤枉***`random.sample()`***了，是我其它代码导致的问题， 但是发现***`random.choices()`果然是最佳选择***。

- - -

This page is synchronized from the post: [Python 随机选取元素的一些方法以及概率问题](https://steemit.com/@oflyhigh/python-cny)
