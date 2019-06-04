
---
title: '如何为posting private key 设置个友好的密码？'
permlink: posting-private-key
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-06 02:30:33
categories:
- steemdev
tags:
- steemdev
- security
- password
- python
- cn
thumbnail: https://steemitimages.com/DQmd1eXLHU2BhhAnX4hJyRXfiv6G4W1dSTxERaUavh22SRC/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmd1eXLHU2BhhAnX4hJyRXfiv6G4W1dSTxERaUavh22SRC/image.png)

今早起来看STEEMIT上又有人账户资产被盗了，关于密码安全，我发过好多个帖子提示大家了，但是很多人或者不看或者看完一笑而过，总以为这种倒霉事不会落在自己身上。所以我也不再啰嗦这事了，我要说的是，如何给posting private key 设置个友好的密码？

其实我以前发过一篇英文文章说这事，为了方便中文区的朋友，我自己翻译过来，感兴趣的朋友看看吧。

---
# 缘由

我们都知道主密码和OWNER Key非常重要，Active Key也是如此。所以如果在steemit.com以及第三方网站，我们只用posting private key 来登陆、发帖、评论和点赞，无疑会更加安全。

但是想记住posting private key是几乎不可能的，而每次登陆时Copy&Paste又太麻烦，况且这样需要posting private key被明文保存在电脑上，增加了风险。所以，如果能给posting private key设置一个友好的密码，那就会兼顾了安全性和便利性。


# 步骤

* 安装steem-python, github地址为：https://github.com/steemit/steem-python

* 从steemit.com上获取Active Key
`Wallet->Permissions->ACTIVE->SHOW PRIVATE KEY`

* 将Active Key导入steem-python的钱包
![](https://steemitimages.com/DQmPHLgB1GS8jySYFYCcq3NjmBeds9BqGW8Ssvd2sgKRfEM/image.png)

* 选择一个密码，写个简单的脚本来生成密码对应的公钥、私钥
![](https://steemitimages.com/DQmU4rTr6WZVCewkPtw1k1amnyRU1PKcQbR1pdw7gTPQoRR/image.png)
将账户、密码换成你的账户，以及你要使用的密码
***（注意：密码不是你的主密码哦）***

* 运行上述脚本
![](https://steemitimages.com/DQme6xF9uZ67WrhNn4cuD3FMhnAu9GgKUqDyiw9h5uXoVEr/image.png)
现在我们得到了一对***posting private key & posting public key***

* 使用steempy来完成终极操作
***`steempy allow --account oflyhigh.test STM8WgLmubC1KgbDiUgBuXeLuEzJYnkz8q8vnEmGapqCH4KWWuf6h`***

* 结果如下
![](https://steemitimages.com/DQmRce9VXzAZJc5xCWfJ6dagAVHZyraxgjeLFUY83wQ7DQv/image.png)

* 在steemd上检查
![](https://steemitimages.com/DQmb8So4tmwdSkyqvGqgS5SQ2vSbMFiwUKZWKaEWwGqKsi6/image.png)

* 继续检查
![](https://steemitimages.com/DQmc3g5LTDpZmDbc3g7KgDkcoe1Fu4qm8T4kbCCamAykims/image.png)

# 登陆

* 退出steemit.com，打开登陆页面：https://steemit.com/login.html
* 输入账户和我们新设置的密码
![](https://steemitimages.com/DQmcJDVKN3VLjvjs9hR1muF5t9xkeYywuhV1EENFPrHSDCv/image.png)
* 点击登陆按钮，登陆成功
![](https://steemitimages.com/DQmV5e3wU5xrFyu1WuRZ4U8FmSKso1rZSDgY6obfRdaSkty/image.png)
* 检查个人信息页面，一切正常
![](https://steemitimages.com/DQmNZb9zVmt5nJVcdfbEi69ZyeqqVwSipfRFNRConQ7SmpK/image.png)

你同样可以使用我们上述步骤生成的私钥来登陆，但是没啥必要。

# 结论

使用用户名和Posting private Key登陆是很麻烦和闹心的。

在这篇文章中我介绍了如何给Posting private Key设置一个用户友好(user-friendly )的密码，现在我们可以使用用户名和这个密码登陆steemit.com和其它第三方站点，就和我们使用用户名和posting private Key一样。


![](https://steemitimages.com/DQmaNeccZV3pv85xsPFrDyYqgJkUNJ8G5M63s6XoQiCBc54/image.png)
***注意:*** 
使用文中脚本和代码风险自负，除非你理解你做的每项操作，否则请不要轻易尝试。
***不当的操作可能导致你的账户无法使用。***

# 相关链接

* [How to set up a user-friendly password for the posting private key?](https://steemit.com/steemdev/@oflyhigh/how-to-set-up-a-user-friendly-password-for-the-posting-private-key-posting-private-key)

(封面图源：[pixabay](https://pixabay.com))

- - -

This page is synchronized from the post: [如何为posting private key 设置个友好的密码？](https://steemit.com/@oflyhigh/posting-private-key)
