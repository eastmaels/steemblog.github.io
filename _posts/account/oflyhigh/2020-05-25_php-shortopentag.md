
---
title: '每天进步一点点：PHP short_open_tag 引发的惨案'
permlink: php-shortopentag
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-25 06:15:57
categories:
- cn
tags:
- cn
- cn-programming
- php
- life
- blog
thumbnail: 'https://images.hive.blog/DQmfP39F9RRBUEWbQ8npbZtq5QhC7ympbTDL5syDBNVFkWd/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


帮用户迁移一个站点到VPS，因为VPS不同于虚拟主机，所以很多东西都要自己安装设置，这包括但不限于Apache、MySQL、PHP等。


![image.png](https://images.hive.blog/DQmfP39F9RRBUEWbQ8npbZtq5QhC7ympbTDL5syDBNVFkWd/image.png)
(图源 ：[pixabay](https://pixabay.com/))


# 测试代码

安装完PHP后，我写了一个简单的脚本(hello.php)测试PHP是否工作正常，代码如下：
```
<?
printf("Hello World!");
?>
```

这个还是超级easy的，也不需要多解释，可是我在浏览器中访问这个hello.php时，却是一片空白。额，哪里出了问题了，让我检查一下，在浏览器中查看一下源文件吧。结果发现浏览器中原样显示了上述代码。

这就有些尴尬了，PHP是要解释执行的，也就是说上述代码，最终解释执行并传递到浏览器端的就应该是：
>`Hello World!`

否则用来做项目，源码都泄露了，岂不是很容易被黑啊？

不过这个问题难不住我，我知道应该是PHP的某项设置的问题，比如将代码搞成如下的样子，就正常了：
```
<?php
printf("Hello World!");
?>
```

尽管很多资料说这样才是PHP代码应该的样子，并且建议这样使用，可是要知道客户代码可是上千行的，要我去改，略有压力，还是弄个一劳永逸的方法吧。

# short_open_tag

其实上述测试代码所涉及的机制在PHP中叫做`short_open_tag`，详情可以参考[这段内容](https://www.php.net/manual/en/ini.core.php#ini.short-open-tag)：
>Tells PHP whether the short form (`<? ?>`) of PHP's open tag should be allowed. If you want to use PHP in combination with XML, you can disable this option in order to use `<?xml ?> `inline. Otherwise, you can print it with PHP, for example: `<?php echo '<?xml version="1.0"?>'; ?>.` Also, if disabled, you must use the long form of the PHP open tag (`<?php ?>`).

因为客户没有涉及XML混用等复杂问题，我们直接把这个设置成`On`就可以了。

# 迷糊的操作

既然改这个`short_open_tag`的值就可以，那么我就去改好了。

首先我要找到`ini`文件在哪里(高能警告⚠，这里有个大坑):
> `php --info | grep php.ini`

返回信息，哪里怪怪的，上去就改就好了：
>![image.png](https://images.hive.blog/DQmZhBZdd9HZVUsw5FuxWTh5tmEHdfzLvJFVyubKafDsrAU/image.png)

然后打开搜索到的php.ini，上去将`short_open_tag = Off `修改成`short_open_tag = On`。

直接测试一下：
>`php hello.php`

输出`Hello World!`一切正常。然而我在浏览器中访问时，问题依旧，哪里出了问题呢？

# CLI 与 CGI

最终我终于找到了问题所在，其实早在之前查找`php.ini`文件时，我就觉得哪里不对劲。简单来讲，我装到VPS上的PHP有两种工作模式，一种是当做命令行工具，一种是apache2内嵌的模块。而两种模式下用不同的`php.ini`文件。

可能我的标题起得未必恰当，但是大致就是这样了。

知道问题所在解决起来就简单多了，找到php.ini的目录 ，做对应修改就好：
>`sudo vi /etc/php/7.2/apache2/php.ini `

改好后再测试，一切OK。

# 总结

其实这个问题无论是short_open_tag功用上，还是修改short_open_tag设置上，都不是什么大问题，然而因为的粗心大意和魔幻操作，整整搞了大半天，真是悲催啊。

不过，这是我自己的问题，并不影响***PHP是世界上最好的语言***这个结论，不服来辩哦。

# 相关链接

* https://www.php.net/manual/en/ini.core.php#ini.short-open-tag

- - -

This page is synchronized from the post: ['每天进步一点点：PHP short_open_tag 引发的惨案'](https://steemit.com/@oflyhigh/php-shortopentag)
