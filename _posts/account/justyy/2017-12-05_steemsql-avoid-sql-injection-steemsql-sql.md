
---
title: 'SteemSQL: Avoid SQL Injection  STEEMSQL 教程 - 避免 SQL 注入'
permlink: steemsql-avoid-sql-injection-steemsql-sql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-05 22:17:00
categories:
- cn
tags:
- cn
- steemstem
- steemsql
- sql
- injection
thumbnail: https://cdn.pixabay.com/photo/2017/06/12/04/21/database-2394312_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My [SteemSQL](https://helloacm.com/steemsql-tutorial-get-most-single-payout-authors/) suddenly stopped working a few hours ago and I thought at first it was the connectivity issues until I found out the same queries run just fine on my other [VPS machines](https://helloacm.com/what-is-ddos-and-how-do-you-cope-with-ddos-attacks/).

The particular error is:

```
conn = pymssql.connect(host, username, password, database)
File "pymssql.pyx", line 641, in pymssql.connect (pymssql.c:10824)
pymssql.OperationalError: (20009, b'DB-Lib error message 20009, severity 9:\nUnable to connect: Adaptive Server is unavailable or does not exist (sql.steemsql.com:1433)\nNet-Lib error during Connection timed out (110)\n')
```

I contacted the author of [STEEMSQL](https://helloacm.com/steemsql-tutorial-how-to-get-the-most-payout-authors-in-history/) @arcange and he confirmed that:

```
Several IP addresses have been blocked because queries issued are considered as SQL Injection attempts by the IPS.
You IP address is being blocked by my IPS (Intrusion Prevention System) because the SQL queries you issue are considered as SQL Injection exploit:
`EXPLOIT MS-SQL SQL Injection closing string plus line comment, proto:TCP, ip/port:XXX.XXX.XXX.XXX
```

I have a few handy tools that invoke the [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) queries:  https://helloacm.com/tools/steemit/
and it looks like some hackers were trying to inject the query, for example, he/she may put 

```
'; DROP TABLE Comments; GO;--
```

in the field of steem ID. So the query looks malicious to the firewall, which will therefore block the IP permanently unless @arcange unblocks it.

There are two fixes. The recommended on is to use the SQL parameter via something like `
SELECT field FROM table WHERE author = @account`

This will avoid the [SQL injection](https://helloacm.com/steemsql-how-to-avoid-sql-injection/) from

```
SELECT author FROM Comments WHERE author ='{0}'
```

to 

```
SELECT author FROM Comments WHERE author =''; DROP TABLE Comments; GO;--'
```

if the user maliciously enters `'; DROP TABLE Comments; GO;--`

And, there is a second method which will discard the query if the field is invalid, for example, you can use Python function to check a valid steem ID that contains only lowercase, digits, dot and dash.

```
def valid_id(s):
  if len(s) == 0: return False
  for i in s:
    if not (i.islower() or i.isdigit() or i == '-' or i == '.'):
      return False      
  return True
```

Similarly, in [PHP](https://helloacm.com/how-to-compute-the-modes-of-an-array-in-php/), this can be checked as well (the Python version can also use regular expression but it needs `import re`):

```
function isValidId($str) {
    $str = trim($str);
    if (preg_match('/^[a-z0-9\-\.]+$/', $str)) {
      return 1;
    }
    return 0;
}
```

So, next time when somebody tries to inject SQL, the API servers will throw out `503 Service Temporarily Unavailable` instead of trying to contact the [SteemSQL server](https://helloacm.com/steemsql-how-to-avoid-sql-injection/).

----------------
![](https://cdn.pixabay.com/photo/2017/06/12/04/21/database-2394312_960_720.jpg)
*Image Credit: Pixabay.com*


几个小时前，我的服务器在跑[STEEMSQL](https://justyy.com/archives/5619)的时候再也联不上了：

```
conn = pymssql.connect(host, username, password, database)
File "pymssql.pyx", line 641, in pymssql.connect (pymssql.c:10824)
pymssql.OperationalError: (20009, b'DB-Lib error message 20009, severity 9:\nUnable to connect: Adaptive Server is unavailable or does not exist (sql.steemsql.com:1433)\nNet-Lib error during Connection timed out (110)\n')
```

我以为是暂时的问题，直到我发现我其它三台[VPS服务器](https://justyy.com/archives/4108)甚至是LINQPAD都没有问题，我才意识到可能我的[IP地址](https://justyy.com/archives/4155)被禁掉了。于是我联系了STEEMSQL的作者 @arcange  他说：

```
Several IP addresses have been blocked because queries issued are considered as SQL Injection attempts by the IPS.
You IP address is being blocked by my IPS (Intrusion Prevention System) because the SQL queries you issue are considered as SQL Injection exploit:
`EXPLOIT MS-SQL SQL Injection closing string plus line comment, proto:TCP, ip/port:XXX.XXX.XXX.XXX
```

是的，我有很多基于 STEEMSQL 的[在线工具](https://helloacm.com/tools/steemit-tools/)  https://helloacm.com/tools/steemit-tools/
也许是哪个坏蛋特意输入这样的字符串：

```
'; DROP TABLE Comments; GO;--
```

带有这样的SQL语句会被认为是恶意的请求，于是服务器把IP给禁用了。

有两种办法，第一种是过滤SQL参数，如  `
SELECT field FROM table WHERE author = @account`

这样就可以防止这个语句

```
SELECT author FROM Comments WHERE author ='{0}'
```

被替换成：

```
SELECT author FROM Comments WHERE author =''; DROP TABLE Comments; GO;--'
```

如果用户输入的是 `'; DROP TABLE Comments; GO;--`

我们知道，一个有效的STEEM ID是由小写字母、数字、减号还有点号构成，所以我们可以在PYTHON里这么检查：

```
def valid_id(s):
  if len(s) == 0: return False
  for i in s:
    if not (i.islower() or i.isdigit() or i == '-' or i == '.'):
      return False      
  return True
```

或者在 [PHP 最好的语言](https://justyy.com/archives/5358)里用正则表达式这样检查（上面的PYTHON也可以用正则 `import re` 但是我比较不爽的是这个 `import` 哪有PHP内置的好用？）。

```
function isValidId($str) {
    $str = trim($str);
    if (preg_match('/^[a-z0-9\-\.]+$/', $str)) {
      return 1;
    }
    return 0;
}
```

加了检查后，下次再有人恶意的查询，我的API服务器就会返回 `503 Service Temporarily Unavailable`  而不会去访问 STEEMSQL服务器，减少了无效的网络请求。

同步到[博文](https://justyy.com/archives/5650) https://justyy.com/archives/5650。

- - -

This page is synchronized from the post: [SteemSQL: Avoid SQL Injection  STEEMSQL 教程 - 避免 SQL 注入](https://steemit.com/@justyy/steemsql-avoid-sql-injection-steemsql-sql)
