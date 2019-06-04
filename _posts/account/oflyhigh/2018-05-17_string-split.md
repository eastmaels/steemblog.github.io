
---
title: '每天进步一点点：字符串拆分（string split）'
permlink: string-split
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-17 13:24:48
categories:
- split
tags:
- split
- explode
- string
- cn-programming
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


做程序的时候遇到一个问题，我想把一个句子按空格拆分成几个关键字，比如说**`"keyword1 keyword2 keyword3"`**拆分成**`"keyword1"`**、**`"keyword2"`**、**`"keyword3"`**，这样便于我组合SQL查询语句。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

在Python和PHP里，这是很容易的事情，Python中使用`split`, PHP中使用`explode`就可以胜任，当然了，还有其它按正则表达式等拆分，就不在我们这篇文章讨论的范畴了。

# 我的实现

在确认string 并没有现成`split`或者`explode`函数之后，就只能考虑自己去写了。找来找去，一个`find()`一个`substr()`，似乎可以用这两个完成。

于是乎写了如下函数：
```
#include <iostream>
#include <string>
#include <vector>
using namespace std;
const vector<string> split(const string& s, const string str)
{
	vector<string> v;
	size_t pos=0, pos1=0;
	string sub;
	while (true) {
		pos = s.find(str, pos1);
		if (pos == string::npos) {
			break;
		}
		sub = s.substr(pos1, pos - pos1);
		if (!sub.empty())
			v.push_back(sub);
		pos1 = pos + 1;
	}
	sub = s.substr(pos1,-1);
	if (!sub.empty())
		v.push_back(sub);
	return v;
}
```

这个函数兼顾了首尾多余的分隔符，试了一下貌似挺好用。
```
int main()
{
	string str = "   the  quick brown     fox  jumps over the  lazy dog     ";
	vector<string> v = split(str, " ");
	for (auto n : v) cout << n << endl;
	return 0;
}
```
![](https://steemitimages.com/DQmcS9gDNqo5T6hUuY953HM7i7jJ4EYRTYy8Fpu8xEj1nPT/image.png)

然而突然想到，因为我的程序中用到的是空格分隔，所以惯性的把偏移量加一，如果不是用空格作为分隔符，加1已不是就不对了？

比如输入改成：
>`string str = ":::   the  quick brown:::     fox  jumps over::: the  lazy dog     :::";`

用上述函数就全乱套鸟。所以需要把上述代码略作修改比如把**`pos1 = pos + 1;`**改成**`pos1 = pos + str.size();`**就可以了。

运行结果如下：
![](https://steemitimages.com/DQmPfSYV5Kdbs7xp1X7bkk7BTdxFPdxWLUao9QeoCvAZezU/image.png)

# 他人实现

### 实现一

在这里发现一个有意思的实现：
http://www.cplusplus.com/articles/2wA0RXSz/

```
vector<string> explode(const string& s, const char& c)
{
	string buff{""};
	vector<string> v;
	for(auto n:s){
		if(n != c) buff+=n; else
		if(n == c && buff != "") { v.push_back(buff); buff = ""; }
	}
	if(buff != "") v.push_back(buff);
	return v;
}
```
他的做法相当于按字符直接扫描字符串，但是这个函数遇到多个字节的分隔符，就无能为力了。另外他的函数中没有处理连续分隔符（当然了，可能这也是种需要）。

### 实现二

另外一种方法使用的**`stringstream`**，这玩意我从来没用过，试了一下很好用，倒是涨姿势了。
```
vector<string> split(const string &s, char delim) {
    stringstream ss(s);
    string item;
    vector<string> tokens;
    while (getline(ss, item, delim)) {
            if (!item.empty())
            tokens.push_back(item);
    }
    return tokens;
}
```
不过实现一里提及的问题，这里依然存在。

# 实现三(N)

当我快写完这篇文章时，我发现了[How to split a string in C++](https://www.fluentcpp.com/2017/04/21/how-to-split-a-string-in-c/)。

链接中的文章里边讲的很详细，并且提供了很多方法，比如使用`boost::split`。

感兴趣的去看看吧，我是懒得去读了，毕竟我的需求已经满足了呢。

# 参考链接

* [std::string::find](http://www.cplusplus.com/reference/string/string/find/)
* [std::string::substr](http://www.cplusplus.com/reference/string/string/substr/)
* [Split a String](http://www.cplusplus.com/articles/2wA0RXSz/)
* [How to split a string in C++](https://www.fluentcpp.com/2017/04/21/how-to-split-a-string-in-c/)

- - -

This page is synchronized from the post: [每天进步一点点：字符串拆分（string split）](https://steemit.com/@oflyhigh/string-split)
