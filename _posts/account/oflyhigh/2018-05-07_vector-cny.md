
---
title: '被坑到吐血，vector 元素地址会变！'
permlink: vector-cny
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-07 03:06:24
categories:
- cn-programming
tags:
- cn-programming
- vector
- cpp
- programming
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


在我的程序中，我用到一个Combo-Box控件，控件里的数据是在动态插入的。为了在程序中可以访问到Combo-Box控件选中项目对应的数据，我给对话框设置了一个成员变量`vector <string> m_str;`用于保存所有待选条目对应的数据。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：pixabay)

# 故障

在添加数据的代码代码段中，我用如下代码段(1)添加：
```
while (!recset.IsEOF())
{
	......
	int index = m_pComboBox->InsertString(-1, CA2T(str));
	m_str.push_back(str);
	m_pComboBox->SetItemDataPtr(index, (void *)&m_str[index]);
	......
}
```

然后在程序其它部分需要读取的时候，我使用类似如下代码读回数据：
```
int index = m_pComboBox->GetCurSel();
str = *(string *)m_pComboBox->GetItemDataPtr(index);
```

结果这程序行为时而正常，时而崩溃，我意识到我的程序可能哪里有问题，但是会是哪里的问题呢？

# 原因

因为崩溃时都是内存读写错误，出在这个语句上：`str = *(string *)m_pComboBox->GetItemDataPtr(index);`所以我想到可能是我写入的数据不对，导致读出不正常。

于是我将代码段(1)修改成这个样子，就是写入之后马上读回校验一下：
```
while (!recset.IsEOF())
{
	......
	int index = m_pComboBox->InsertString(-1, CA2T(str));
	m_str.push_back(str);
	m_pComboBox->SetItemDataPtr(index, (void *)&m_str[index]);
	str = *(string *)m_pComboBox->GetItemDataPtr(index);
	......
}
```
事实证明在此处写入和读出的数据没有一点问题。

那么问题会出在哪里呢？我想来想去，想到一种可能，我的程序不同部分之间传递的是vertor元素的地址，如果元素的地址变化了呢？但是元素的地址会变化吗？于是我写了一个程序验证一下这个问题。

```
#include <string>
#include <vector>
#include <iostream>
using namespace std;

void add_data(vector <string> &v, vector <string *> &v_p, int count)
{
	for (int i = 0; i < count; i++)
	 {
		v.push_back("test" + to_string(i));
		v_p.push_back(&v[i]);
	}
}

int main()
{
	vector <string> v_str;
	vector <string *> v_str_p;
	add_data(v_str, v_str_p, 10);
	for (int i = 0; i < v_str.size(); i++)	
	{
		cout << i << ":" << v_str[i] << ":" << v_str_p[i] << ":" << &v_str[i] << endl;
	}
}
```

上述代码输出如下：
![](https://steemitimages.com/DQmXAWCJkp7EvzUHH9Cd2GDHphGbGi1zj3tZE8RV4UWaXV1/image.png)
也就是说，除了最后添加的元素，其它元素地址均发生了变化，这也解释了为何我的程序有时候好用有时候崩溃（选择最后的项目时，因为地址没变，所以可以读出数据）

# 解决

知道了这个问题的原因所在，解决起来就好办多啦。我可以将上述代码修改为这个样子：
```
while (!recset.IsEOF())
{
    ......
    int index = m_pComboBox->InsertString(-1, CA2T(str));
    m_str.push_back(str);
    ......
}
for (int i = 0; i < m_pComboBox>GetCount(); i++)
{
	m_pComboBox->SetItemDataPtr(i, (void *)&m_str[i]);
}
```
当然了，其实我还可以直接用序号，不用来回传递指针。

# 结论

看似很简单的问题，却又浪费我小半天时间。看来基本功不扎实就是要反复做无用功呀。

- - -

This page is synchronized from the post: [被坑到吐血，vector 元素地址会变！](https://steemit.com/@oflyhigh/vector-cny)
