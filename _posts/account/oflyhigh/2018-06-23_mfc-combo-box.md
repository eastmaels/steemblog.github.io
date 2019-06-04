
---
title: '每天进步一点点：MFC Combo-box 突破文本长度限制'
permlink: mfc-combo-box
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-23 01:10:21
categories:
- cn
tags:
- cn
- cn-programming
- programming
- mfc
- vc
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好久之前做了一个MFC+ACCESS的小程序，原本想着做好发布在STEEMIT上，结果发现一堆坑，一堆BUG。打算换成MFC+SQLite方式，却一直懒惰，没去更改。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


说到BUG，其中一个是我所无法忍受了，我在程序中用到了Combo-box控件（CComboBox），然后模式设置为DROPDOWN，我可以在里边输入STEEM用户名也可以从以有的用户名当中选择。然后这两天当然想输入某个较长的用户时，用户名无法输入完整！

从迹象上看，控件多长就只能输入多长的字符串，然后就输入不进去了，似乎被限制了长度，这就尴尬了，STEEM上有好多较长的用户名，这样我的软件岂不是无法处理这些用户了。

是不是我在程序中不小心限制了这个控件的输入文本长度呢？查了一下，还真没限制。那么我可不可以在属性中设置它的长度呢？查了一下，没觉得哪个项目对应长度限制设置。

# CBS_AUTOHSCROLL

于是去MFC文档中找找看有没有对应设置，最终让我找到这样一篇文档： [Styles Used by MFC#Combo-box styles](https://docs.microsoft.com/en-us/cpp/mfc/reference/styles-used-by-mfc#combo-box-styles)，其中有这样一个条目：
>***`CBS_AUTOHSCROLL`*** 
`Automatically scrolls the text in the edit control to the right when the user types a character at the end of the line. If this style is not set, only text that fits within the rectangular boundary is allowed.`

咦，这不是正是我程序想要的功能吗？可是该如何设置呢？于是想了个笨方法，直接编辑.rc文件。在VS2015中选择对应的rc文件，右键点击，选择View Code，其中对应COMBOBOX 代码如下：

>`COMBOBOX        IDC_COMBO_UPDATE,17,196,50,30,CBS_DROPDOWN | CBS_SORT | CBS_DISABLENOSCROLL | WS_VSCROLL | WS_TABSTOP`

在后边加上个**`CBS_AUTOHSCROLL`** 试试：
>`COMBOBOX        IDC_COMBO_UPDATE,17,196,50,30,CBS_DROPDOWN | CBS_SORT | CBS_DISABLENOSCROLL | WS_VSCROLL | WS_TABSTOP | CBS_AUTOHSCROLL`

保存后重新编译程序，耶，搞定了，可以输入任意长度字符串了(65,535 bytes)，再也不怕STEEM上的长用户名了。

# 属性中设置

可是VS2015会这么弱智呢？这么简单的问题竟然要大费周折的去手动更改rc文件？我不相信！

于是我在仔细找对应控件的属性，咦这个***`Auto`***是什么鬼？
![](https://cdn.steemitimages.com/DQmPZjvsGVzbXCXataRGGwUiREEhA7z6sWnHFgUpDnqEuHN/image.png)
点了几下再去看我的RC文件代码，我晕，这个不就是设置***`CBS_AUTOHSCROLL`***的开关吗？

如果我之前看属性的时候耐心一些，挨个点一下，或者我的屏幕足够大，能在底部显示出每个条目的解释（之前窗口太小隐藏了），我就不必费劲找什么文档了。

---

![](https://cdn.steemitimages.com/DQmRwmD96yaioPXTUTWdzqwUqCEAXXkiKDiaRWH2A3Uxduv/image.png)
(图源 ：[pixabay](https://pixabay.com/))

哎，屏幕太小影响工作效率呀，看来有必要换一个4K显示器了。不过看看STEEM和SBD的价格，还是将就用我的滥显示器吧😔

# 参考链接
* [Styles Used by MFC#Combo-box styles](https://docs.microsoft.com/en-us/cpp/mfc/reference/styles-used-by-mfc#combo-box-styles)

- - -

This page is synchronized from the post: [每天进步一点点：MFC Combo-box 突破文本长度限制](https://steemit.com/@oflyhigh/mfc-combo-box)
