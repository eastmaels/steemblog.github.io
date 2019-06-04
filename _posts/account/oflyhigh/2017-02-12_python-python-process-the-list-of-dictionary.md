
---
title: '不求甚解之Python清理字典组成的列表/ Python：Process the list of dictionary'
permlink: python-python-process-the-list-of-dictionary
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-12 13:49:39
categories:
- python
tags:
- python
- cn
- cn-programming
- dictionary
- bananapi
thumbnail: http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![M3](http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

不写程序的时候，觉得自己什么都会，无所不能啊
一动手，发现，我擦，啥都不会了，磕磕绊绊边学边写吧，然后发现学过的，又忘了......

这不，遇到个小麻烦
我有一组数据，是一个列表，列表项是字典
然后呢，会有一些重复的数据，现在我想去掉重复的数据
数据举例如下：
`[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 2, 'id': 2}, {'data': 1, 'id': 3}]`
我想去掉id相同的数据，至于data是否相同，留那个，我不关心

# 函数代码一

为了处理类似这组数据，我写了段代码：
```
def clean_list_v1(list):
        id_list = []
        for obj in list:
                if obj['id'] in id_list:
                        list.remove(obj)
                        continue
                id_list.append(obj['id'])

clean_list_v1(list)
print(list)
```
输出如下：
```
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 2, 'id': 2}, {'data': 1, 'id': 3}]
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 1, 'id': 3}]
```
看起来似乎正确
其实这里有个大BUG，比如我们换一组数据
```
[{'id': 1, 'data': 1}, {'id': 2, 'data': 1}, {'id': 2, 'data': 2}, {'id': 2, 'data': 3}, {'id': 3, 'data': 1}]
[{'id': 1, 'data': 1}, {'id': 2, 'data': 1}, {'id': 2, 'data': 3}, {'id': 3, 'data': 1}]
```
`{'id': 2, 'data': 3}`这组数据期望被移除，但是居然还在！！！

**出错原因**
想了半天啊，各种测试后，想明白了
因为代码中`list.remove(obj)`删除了当前位置的对象，然后后边列表项自动前移一位
但是`for`循环的位置已经指到下一个位置，就是少处理了一个对象

# 函数代码二

为了解决之前代码一中的问题，我重写了一段代码
```
def clean_list_v2(list):
        id_list = []
        obj_2_del = []
        for obj in list:
                if obj['id'] in id_list:
                        #list.remove(obj)
                        obj_2_del.append(obj)
                        continue
                id_list.append(obj['id'])

        for obj in obj_2_del:
                list.remove(obj)

clean_list_v2(list)
print(list)
```
结果如下：
```
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 2, 'id': 2}, {'data': 3, 'id': 2}, {'data': 1, 'id': 3}]
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 1, 'id': 3}]
```

简单说，我将待删除的元素放到一个列表中
然后再一起删除


# 函数代码三

既然可以将待删除的算出来，然后一并删除，那么是否反向操作，将待保留的保留呢？
于是我写了代码三
```
def clean_list_v3(list):
        id_list = []
        new_list = []
        for obj in list:
                if obj['id'] not in id_list:
                        new_list.append(obj)
                        id_list.append(obj['id'])
                        continue

        return new_list

new_list = clean_list_v2(list)
print(new_list)
```
结果如下：

```
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 2, 'id': 2}, {'data': 3, 'id': 2}, {'data': 1, 'id': 3}]
[{'data': 1, 'id': 1}, {'data': 1, 'id': 2}, {'data': 1, 'id': 3}]
```
结果倒是没错，就是不是在list上直接处理的


# 函数代码四

```
def clean_list_v4(list):
        id_list = []
        new_list = []
        for obj in list:
                if obj['id'] not in id_list:
                        new_list.append(obj)
                        id_list.append(obj['id'])
                        continue

        list.clear()
        for obj in new_list:
                list.append(obj)

clean_list_v4(list)
print(list)
```
思路就是算出新列表后，清空老列表，在把新列表填充进去
额，好蛋疼

# 总结

* 在for循环中删除列表元素，可能会导致BUG
* 代码二看起来还是不错的，至少是这组代码中最顺眼的了

当然，我现在有些头晕，不知道有没有逻辑错误
另外，总觉的还是很麻烦，大家都什么好办法，一定要告诉我啊


PS:
同之前的文章一样，把这个过程写下来，一则做个备忘，二则给遇到同样问题的朋友一点参考
我是初学者，边学边试边玩，有错漏的地方，烦请各位大神指正。

- - -

This page is synchronized from the post: [不求甚解之Python清理字典组成的列表/ Python：Process the list of dictionary](https://steemit.com/@oflyhigh/python-python-process-the-list-of-dictionary)
