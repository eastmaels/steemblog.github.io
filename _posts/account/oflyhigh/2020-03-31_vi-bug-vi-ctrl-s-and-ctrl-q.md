
---
title: 'vi的BUG? vi的功能！CTRL+s & CTRL+q'
permlink: vi-bug-vi-ctrl-s-and-ctrl-q
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-31 15:26:54
categories:
- cn
tags:
- cn
- vi
- life
- bug
- blog
thumbnail: 'https://cdn.pixabay.com/photo/2016/12/01/13/10/lightbulb-1875247_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


从十几年前加入公司的网络安全团队并且和开始主要和Linux打交道以来，`vi`就成了我几乎每天都要接触的工具。

![](https://cdn.pixabay.com/photo/2016/12/01/13/10/lightbulb-1875247_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

其实在那之前也和Linux打交道，但是需要写代码或者编辑内容的时候，我都是在Windows下用UE编辑好，然后用sftp等上传到Linux系统下。

越接触`vi`，越发现`vi`的强大，各种编辑功能应有尽有，甚至可以同时打开多个文件，多屏同时编辑，并且可以在不同文件之间使用指令复制粘贴，比用鼠标方便多了。

不过缺点也是有的，当然了这缺点其实是我记忆力的缺点，就是有些复杂指令总是记不住，时不时的要翻一下手册。这种情况，在这些年和Linux打交道不那么频繁并且年纪越来越大之后越发明显。

不过这都不算啥，最严重的是，随着年纪增大，最近手脑开始不协调了。比如用着`vi`，却时不时的想用`Ctrl+s`来保存一下文档。

其实我很清楚`vi`保存文档的指令是`w`/`wq`，可是可能是最近在Windows下工作多了的缘故，手完全不受大脑指挥，自己擅作主张地做出动作。

问题是做别的动作也就罢了，这个***`Ctrl+s`按出去后，`vi`的界面就卡住了***，无论我按什么都没有响应，和死机了一样。

我重新起个终端，再次编辑这个文件，还会被提示这个文件正在编辑啥的，要清除一个`.swp`文件才能继续工作下去。

于是每隔几天，手就擅作主张地犯一次错误，然后开新终端，删除`.swp`，继续工作，都成了固定流程了。

今天突然想到，这么强大的`vi`，怎么会有这样的BUG呢？这不科学啊，于是Google查了一下，发现这竟然真的不是BUG，而是`vi`的一项功能（***确切地说是TTY的功能***）。

>Many terminal emulators and real terminal drivers use the CTRL-S key to stop the data from arriving so that you can stop a fast scrolling display to look at it (also allowed older terminals to slow down the computer so that it did not get buffer overflows).  You can start the output again by pressing the CTRL-Q key.
>
>When you press the CTRL-S key, the terminal driver will stop sending the output data. As a result of this, it will look like Vim is hung. If you press the CTRL-Q key, then everything will be back to normal.
(来源：http://vimdoc.sourceforge.net/cgi-bin/vimfaq2html3.pl#32.1）

简单来讲，`Ctrl+s`(XOFF)就是***告诉远程终端关闭回显***，这样我们敲的字符就不会在界面上显示出来，而实际上还是在工作的（***也就是说并没有死机***）

知道了这点，找到如何恢复也很简单了，就是使用`Ctrl+q`(XON)来恢复，在`vi`窗口里试了一下，果然好用。

在` ~/.bash_profile`或`~/.bashrc`中加入如下指令，可以在服务器上禁止这个信号（当然也可以每次登录时手动执行😄）：
>`stty -ixon -xoff`

或者可以在putty对应会话中，将`IXON`从`auto`修改为`Nothing`
>![image.png](https://images.hive.blog/DQmNRqpNCHkz2y95JPAUyYNvVhAoPBUNzTyjN3Vhu9b3XG7/image.png)

不过，既然知道了缘由，也知道了如何恢复，设置与否就不那么重要啦。

# 相关链接
* http://vimdoc.sourceforge.net/cgi-bin/vimfaq2html3.pl#32.1
* [Ctrl-s hang terminal emulator?](https://unix.stackexchange.com/questions/72086/ctrl-s-hang-terminal-emulator)
* [Pressing “Ctrl + S” by mistake while using Vim](https://superuser.com/questions/1390977/pressing-ctrl-s-by-mistake-while-using-vim)
* [Can you disable the Ctrl-S (XOFF) keystroke in Putty?](https://unix.stackexchange.com/questions/72086/ctrl-s-hang-terminal-emulator)

- - -

This page is synchronized from the post: ['vi的BUG? vi的功能！CTRL+s & CTRL+q'](https://steemit.com/@oflyhigh/vi-bug-vi-ctrl-s-and-ctrl-q)
