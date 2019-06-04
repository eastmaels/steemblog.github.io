
---
title: '每天进步一点点：MFC中使用Access数据库'
permlink: mfc-access
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-06 08:20:21
categories:
- database
tags:
- database
- odbc
- mfc
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


我想在一个小程序中加一点数据库的功能，因为可能需要一些编辑和修改等功能，所以我打算选择Access作为数据库管理系统。这样我可以在程序中查询，又可以在Access软件中浏览和编辑。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：pixabay)
我是在MFC程序中使用ODBC连接Access数据库。

# 打开数据库

在使用数据库之前，我们首先需要打开数据库。为了使用数据库，我们需要先包含头文件: afxdb.h。
>`#include "afxdb.h"`

然后声明一个数据库类的实例：
>`CDatabase db;`

指定ODBC Driver:
>`CString sDriver = TEXT("Microsoft Access Driver (*.mdb, *.accdb)");`

指定数据库信息：
>`CString sDBInfo = TEXT("C:\\Northwind.accdb");`

指定连接字符串
>`CString sConnect;`
`sConnect.Format(TEXT("ODBC;DRIVER={%s};DSN='';DBQ=%s;"), sDriver, sDBInfo);`

之后就可以打开（连接）数据库了。
>`BOOL ret = db.Open(NULL, false, false, sConnect);`

我们可以用返回值判断打开是否成功。之后也可以使用`db.IsOpen()`来进行判断，当然，也可以将打开数据库的代码段放到`TRY{ }CATCH(CDBException, e){ }END_CATCH;`代码块中。

# 访问数据库（查询数据）

成功连接数据库之后，我们就可以访问数据库啦。

在此之前，我们需要声明一个CRecordset实例，并和数据库建立起来关联。
>`CRecordset recset(&db);`

之后就可以准备我们的查询语句了(SQL)，比如：
>`CString sql = TEXT("select * from table_a;");`

然后就可以去查询啦：
>`recset.Open(CRecordset::forwardOnly, sql, CRecordset::readOnly);`

然后就可以遍历返回结果啦：
```
while (!recset.IsEOF())
{
	CString strTmp;
	recset.GetFieldValue(TEXT("field1"), strTmp);

	// Process the row
 	.......    

	// goto next record
	recset.MoveNext();
}
```

处理完所有结果之后记得关闭记录集：
>`recset.Close();`

数据库使用完毕，记得关闭数据库：
>`db.Close();`

# 其它问题

在Office 2007之前，Access 数据库文件的扩展名为`*.mdb`，Office 2007之后扩展名变化为`*.accdb`。针对老版本的数据库文件，我们可以使用如下Driver：
>`CString sDriver = TEXT("Microsoft Access Driver (*.mdb)");`

如果是2007之后版本的Access文件，则要使用：
>`CString sDriver = TEXT("Microsoft Access Driver (*.mdb, *.accdb)");`

另外要注意程序的目标平台（X86 还是X64），以及安装的Office版本（X86 还是X64）等因素，否则会类似如下的错误：
>![](https://steemitimages.com/DQmckNrkPnv9xZMGLYb1FvcCLe9TrXEZKUePCcuicDS6Cc8/image.png)

我被这个坑害得一整晚没睡觉😭。

# 参考资料

* [Data Programming with Microsoft Access 2010](https://msdn.microsoft.com/en-us/library/office/ff965871(v=office.14).aspx)

- - -

This page is synchronized from the post: [每天进步一点点：MFC中使用Access数据库](https://steemit.com/@oflyhigh/mfc-access)
