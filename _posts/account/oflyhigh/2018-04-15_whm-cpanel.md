
---
title: '使用WHM/cPanel 在服务器间批量转移账户'
permlink: whm-cpanel
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-15 00:56:27
categories:
- cpanel
tags:
- cpanel
- whm
- host
- webmaster
- cn
thumbnail: https://steemitimages.com/DQmRMtHEVL8GpbVyoBdwXsmb51k1raBxqbnjyk5oDBxaN9M/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


这些年没少在不同的服务器间转移网站数据，对于简单的网站一般来讲我都是在新服务器上创建好站点，然后到老服务器上用tar打包站点文件目录的所有文件，用mysqldump导出所有的数据库数据，然后再到新站点上恢复。

一般来讲，上述操作无往不利，在老服务器上用上命令行FTP，直接把tar文件以及数据库备份丢到新服务器上，不用通过本地中转，一般站点几分钟搞定。如果两个空间都开有SSH，那么就会更加便捷。

![](https://steemitimages.com/DQmRMtHEVL8GpbVyoBdwXsmb51k1raBxqbnjyk5oDBxaN9M/image.png)

但是如果站点很复杂，比如绑定了一堆域名，开了一堆数据库，有一堆邮件账户以及邮件转发，设置了N多FTP账户，如果再设置了Crontab，域名设置了一堆解析记录，想用手动或者简单脚本来转移站点，那是相当有难度了。如果再涉及多个账户，那么就更是雪上加霜了。

# WHM/cPanel

在WHM/cPanel中，这个事情被大大的简化了。你可能会问，WHM/cPanel是啥？答案是最最流行的一款虚拟主机管理面板，功能超级强大，但是价格也超级贵，以Softlayer.com为例，每台服务器每月WHM/cPanel的授权费为25美元。WHM是服务器管理员用的面板，cPanel是提供给用户的面板。

在装有WHM/cPanel主机之间转移站点，是很容易的事情，毕竟每月25美元软件授权费交着呢。一种方式是我们登陆旧站的cPanel，然后生成并下载全站备份，然后在新站点的cPanel中恢复。这种方式需要本地中转，如果站点数据量很大，需要转移的网站很多，本地网络再不好的话，这将会是个很恼人的工作。

所以最好的方式从服务器端直接操作，下面我介绍一下如何从WHM里操作批量转移站点。

# 转移步骤

* 首先登陆WHM
![](https://steemitimages.com/DQmd89sV54VjMoT8ykkzy3AwpktcShNmoFWtwCcuvFQEUP3/image.png)

* 进入**`Home »Transfers`**
![](https://steemitimages.com/DQmSj9n9oRNRN4NdAuSf8ft59iWTHABo8JgAVhrrnRUo9Bw/image.png)

* 选择**`Transfer Tool`**，填入旧站点所在服务器信息
![](https://steemitimages.com/DQmZHknNQKiQD99HhE1QVtFm4rzeBQC58RBhVpqLiy7ZvGz/image.png)

* 根据旧服务器的设置填入授权信息
![](https://steemitimages.com/DQmaF8YuFT8oL4qvLsgqTgpyhMTT9MEmsbZJf2EYe9ScG5J/image.png)
（需要注意的是，要保证两台服务器的防火墙都没有屏蔽对方以及对方端口）

* 可以选择安全设置以及高级选项
![](https://steemitimages.com/DQmdvG8mXoinfD8mDxioGUXBizNgbndaWxnvCeHgGhBaZXz/image.png)
（如果都是自己的服务器，大可不必关心这个问题）

* 点击![](https://steemitimages.com/DQmdVLXYXjQbVRX1G5zSULyaL5WsDuK3pgGnaUtzoU77R1d/image.png)
![](https://steemitimages.com/DQmbez7Gt2jR7wpLLUj7SamHv8CMMopYsxBeNGuc99TN5Cu/image.png)
会列出服务器信息，Packages信息，以及Accounts（账户列表）

* 勾选对应的账户
![](https://steemitimages.com/DQmcwcbDwFD2A1hhmJGxjUCYAHBuarwNDd8q7moVSAA9nca/image.png)
（可通过搜索快速定位，可按条件过滤，可多选）

* 点击![](https://steemitimages.com/DQmdFPBaAdCDWi3ey3B64G2YREprmvZ9vVAEAHDDiJBzKdQ/image.png)执行复制

* 账户转移成功提示如下
![](https://steemitimages.com/DQmaw9iE4tQG2e9MCgTi1vhGwNERUwDFzfUu41Jk6eQtgcE/image.png)

# 后续工作

当然了，转移成功之后还是要做一点点工作的，比如说修改域名解析到新服务器。如果服务器自建DNS解析服务，那么直接改域名的DNS即可，反之则要添加对应的A记录、MX记录、CNAME等内容。

待转移成功，并且DNS解析完全生效后，检查无误就可以删除老站点了。当然，因为不同ISP的DNS缓存设置以及域名各项记录的TTL设置问题，域名各项记录全球生效可能需要一些时间，所以适当延长老站点的保留时间可以避免出现访问中断等问题。但是对于动态站点（需要写入数据的）这同样有可能造成两个站点数据不一致。

# 结论

使用WHM/cPanel 可以在服务器间迅速、批量转移账户，大大减轻维护的工作量。

- - -

This page is synchronized from the post: [使用WHM/cPanel 在服务器间批量转移账户](https://steemit.com/@oflyhigh/whm-cpanel)
