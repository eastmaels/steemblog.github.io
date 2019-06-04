
---
title: '每天进步一点点：使用Access数据库最后一个坑（驱动）'
permlink: nmk5g-access
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-22 12:37:39
categories:
- access
tags:
- access
- cn-prorgamming
- database
- odbc
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


因为要在一个程序中用到Access数据库，所以从头学了一系列的用程序操作Access数据库的东西。比如连接数据库、插入数据、查询数据、插入时间日期类型等等。终于程序可以用了，然后放到另外一台电脑上试一下， 不出所料，果然跑不起来，提示信息大概如无法连接数据源等等。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 查看数据源

这其实是在我的意料之中的，因为我程序中使用的是64位的**`Microsoft Access Driver (*.mdb, *.accdb)`**，所以只有安装了对应数据源驱动的电脑才可以运行我的程序。

用户可以在**`Control Panel\All Control Panel Items\Administrative Tools`**路径下选择**`ODBC Data sources(64-bit)`**来查看数据源。

![](https://steemitimages.com/DQma35G2Uh5YEywJq7KUQVMHEpfqFW1tPwYf6bSNFMCRqLA/image.png)
这个就是我这里看到的哦。

# 安装数据源

因为的电脑上装有Microsoft Office 2010 (64-bit)，安装的时候自动附带安装的上述数据源驱动。如果其它电脑上没有安装2007版本以后的Office或者安装的是32位版本，就无法使用我的程序喽。

当然了，一直方案是我Build出来一个32-bit版本的，连接32-bit的**`Microsoft Access Driver (*.mdb, *.accdb)`**，但是如果没有安装过Office的朋友同样会遇到问题，所以还是研究了一下如何安装。

Microsoft网站上提供Microsoft Office相关的一些软件以及Redistributable包。
https://www.microsoft.com/en-us/download/office.aspx

其中，[Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920)以及[Microsoft Access Database Engine 2010 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=13255) 均包含有64位的ODBC、OLEDB驱动。

点击对应的链接（我当然是选新不选旧啦），选择AccessDatabaseEngine_X64.exe，按提示下载并安装即可。然后运行我的程序，一起OK了。

# 果断弃坑

尽管其实这段时间和Access打交道，觉得它也挺好玩的，但是我准备弃坑了，所以这篇文章的标题是使用Access数据库最后一个坑。

之后准备试试在程序中用SQLite玩，别了，Access！

# 相关链接

* [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920)
* [Microsoft Access Database Engine 2010 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=13255)
* [每天进步一点点：MFC中使用Access数据库]()
* [每天进步一点点：MFC中向Access 数据库插入数据](https://steemit.com/database/@oflyhigh/5oc9jp-mfc-access)
* [踩了Access数据库的两个坑，吐血中](https://steemit.com/database/@oflyhigh/access)
* [每天进步一点点：向Access数据库中插入数据重复的问题](https://steemit.com/database/@oflyhigh/3aimww-access)
* [每天进步一点点：使用SQL语句在Access中插入日期时间类型数据](https://steemit.com/sql/@oflyhigh/sql-access)

- - -

This page is synchronized from the post: [每天进步一点点：使用Access数据库最后一个坑（驱动）](https://steemit.com/@oflyhigh/nmk5g-access)
