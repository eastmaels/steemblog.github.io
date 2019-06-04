
---
title: '每天进步一点点：使用SQL语句在Access中插入日期时间类型数据'
permlink: sql-access
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-21 05:14:54
categories:
- sql
tags:
- sql
- access
- data
- time
- cn
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在做小工具玩的时候，我需要使用程序在Access中插入日期时间类型数据，比如说steem上文章的创建日期。从steem读回的时间格式一般是这样的**`'created': '2018-05-20T02:42:00'`**，这是我昨天一篇文章的发布日期。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# `T`的含义

以往我们都见惯了**`2018-05-20 02:42:00`**这样的日期时间串，那么这个中间的**大写`T`**有什么特别含义呢？在Microsoft网站找到双眼冒花也没找到和这个有关的内容，可能是我没找对地方，最后终于在[W3C](https://www.w3.org)的网站中找到这样一篇文章[Date and Time Formats](https://www.w3.org/TR/NOTE-datetime)，其中说到
>Note that the "T" appears literally in the string, to indicate the beginning of the time element, as specified in ISO 8601. 

原来就是把日期和时间放一起表示的时候用于分隔日期和时间的，吐血，害我找了半天。

# 插入时间日期

既然知道 `T `就是个分隔符，那么我来向Access表中插入日期啦。首先在表中加入`created`字段，类型设置为`Date/Time`。然后使用SQL尝试插入数据：

>`insert into test(created) values('2018-05-20T02:42:00');`

不出意料的失败了。看手册中有一个CData函数，说是可以把字符串转换成时间日期类型，拿来试试
>insert into test(created) values(CDate('2018-05-20T02:42:00'));

还是不行，我晕，它咋就不匹配呢？
![](https://steemitimages.com/DQmU7UoBX3dzhXtCfT6HzuVnLuoYUrNKBdjtqUGkVe84zoN/image.png)
>Data type mismatch in criteria expression

既然都不行，我试试不要这个`T`呢？结果
>`insert into test(created) values('2018-05-20 02:42:00');`
>`insert into test(created) values(CDate('2018-05-20 02:42:00'));`

两条语句都可以正确插入时间日期，这期间和我还[DateValue](https://support.office.com/en-us/article/datevalue-function-03878f08-b0db-42df-8a0c-279939637c6f)以及[Format](https://support.office.com/en-us/article/format-function-6f29d87b-8761-408d-81d3-63b9cd842530)等函数各种较劲，无一例外地没能成功，其中的辛酸不足为外人道也。😭

# 解决

既然知道了问题所在，解决起来就好办多了，在程序中，我先把得到的时间日期中的T替换成空格，然后在传入SQL语句，之后无论是直接插入还是使用CDate转换后插入，都没什么问题。

不过我还是倾向于使用带CDate的插入语句，这样可以和数据库中字段类型对应。估摸直接插入时间字符串是Access自动处理的转换而已，具体情况就不深究了。

另外，虽然费了了些周折，走了些弯路，但是总算搞懂了`T`的含义，算是一点点收获吧。尽管这个`T`除了给我制造了一些麻烦没起啥作用。

# 参考链接


* [Date and Time Formats](https://www.w3.org/TR/NOTE-datetime)
* [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601)
* [Access Functions (by category)](https://support.office.com/en-us/article/access-functions-by-category-b8b136c3-2716-4d39-94a2-658ce330ed83)

- - -

This page is synchronized from the post: [每天进步一点点：使用SQL语句在Access中插入日期时间类型数据](https://steemit.com/@oflyhigh/sql-access)
