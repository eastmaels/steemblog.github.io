
---
title: '每天进步一点点：MFC中向Access 数据库插入数据'
permlink: 5oc9jp-mfc-access
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-12 05:07:12
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


在之前的一个帖子中，学习了如何[在MFC中使用Access数据库](https://steemit.com/database/@oflyhigh/mfc-access)。好吧，尽管费了很大的周折，但是最终我在程序中连接到Access文件上，并且可以用SQL语句查询数据。如果单纯来读数据，貌似也可以继续完成程序的其它部分了。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# CDatabase::ExecuteSQL

然而，除了读数据，我还要写入数据啊。原本以为插入数据和查询数据一样，直接用CRecordset传入SQL就可以。调查一下之后发现，尽管使用CRecordset也可以写入数据，但是用的完全是一套不同的机制，就是说我没法利用CRecordset在程序中使用INSERT、UPDATA等SQL语句，看了一下[帮助](https://docs.microsoft.com/en-us/cpp/mfc/reference/crecordset-class#open)，里边关于lpszSQL的说明，彻底摧毁了我的幻想：
<center>![](https://steemitimages.com/DQmZxyjkmYzgbku24omVRyfFcnFqDVnDejaXoxUQJokDgDN/image.png)</center>

在我决定彻底弃坑之前，我决定再进一步调查一下，看看有没有什么办法，不然吐过这么多血，就这么放弃了，有点郁闷。最后我发现原来可以用CDatabase实例[直接执行SQL](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdatabase-class#executesql)。😳

其中部分说明如下：
>Create the command as a null-terminated string. `ExecuteSQL` does not return data records. If you want to operate on records, use a `recordset` object instead.

>Most of your commands for a data source are issued through `recordset` objects, which support commands for selecting data, inserting new records, deleting records, and editing records. However, not all ODBC functionality is directly supported by the database classes, so you may at times need to make a direct SQL call with `ExecuteSQL`.

# ExecuteSQL 示例代码

文档中还给出了一段C++ 示例：
```
try
{
   m_dbCust.ExecuteSQL(
      _T("UPDATE Taxes ")
         _T("SET Rate = '36' ")
         _T("WHERE Name = 'Federal'"));
}
catch(CDBException* pe)
{
   // The error code is in pe->m_nRetCode
   pe->ReportError();
   pe->Delete();
}
```
# ExecuteSQL 测试

接下来要在程序中测试一下喽。

![](https://steemitimages.com/DQme7fadQuWEeffGbWW2cm6hypKD2xQgqjRPmfbxrY1ns9R/image.png)
首先随便创建个表：`Table1`，添加一个文本字段：`Field1`。（不要像我这样懒惰，我就是随便测试啦）

然后在我的程序中加入下列代码：
```
CString Sql_Templete = TEXT("insert into %s(%s) Values('data_%d')");
CString sql;
try {
	for (int i = 0; i < 10000; i++) {
		sql.Format(Sql_Templete, TEXT("Table1"), TEXT("Field"), i);
		m_db.ExecuteSQL(sql);
	}
}
catch (CDBException * e) {
	e->ReportError();
	e->Delete();
}
```

执行程序，然后用Access打开数据库，我们可以看到对应的表的对应字段，已经成功的插入了10000条数据。

![](https://steemitimages.com/DQmVKXwtbfsqvN6TioaLszkHPSNCMRZCSKRNMVR2q3dfHr5/image.png)
（自增长ID的序号从1开始）

# 总结

尽管用MFC和Access 坑挺多，但是目前看来还是可以实现我的需求的。基本上无外乎两点：
* 读数据用CRecordset执行查询语句
* 插入/更新/删除使用CDatabase::ExecuteSQL

嗯，这样一来，我就不用跟那些乱七八糟的函数打交道了。不过我还是有点小纠结，要不要换成SQLite3呢？哎，让我先冷静一会吧。

# 参考链接

* [每天进步一点点：MFC中使用Access数据库](https://steemit.com/database/@oflyhigh/mfc-access)
* [CDatabase::ExecuteSQL](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdatabase-class#executesql)

- - -

This page is synchronized from the post: [每天进步一点点：MFC中向Access 数据库插入数据](https://steemit.com/@oflyhigh/5oc9jp-mfc-access)
