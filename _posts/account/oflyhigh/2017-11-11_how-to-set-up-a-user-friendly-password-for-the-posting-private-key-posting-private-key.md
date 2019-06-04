
---
title: 'How to set up a user-friendly password for the posting private key? / 如何为posting private key 设置个友好的密码？'
permlink: how-to-set-up-a-user-friendly-password-for-the-posting-private-key-posting-private-key
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-11 14:23:18
categories:
- steemdev
tags:
- steemdev
- security
- password
- python
- cn
thumbnail: https://steemitimages.com/DQmQ8MNrQvx74YnVh2jQqnowAffC5qoNB1hJB671ns3EYvY/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Everybody knows that ***the `master password` and `owner key` are very important for our steem account, the same goes for the `active private key`.***

So it should be more security if we only use ***`posting private key`*** to ***login, post, comment and vote*** on steemit.com and other third party sites. 

But It is impossible to remember a such long posting private key  and it's very annoying thing to copy&paste posting private key every time when we login steemit.com or other sites, for example, busy.org.

![](https://steemitimages.com/DQmQ8MNrQvx74YnVh2jQqnowAffC5qoNB1hJB671ns3EYvY/image.png)
So is there a way  to use posting private key just like the password? Or in other words, ***how to set up a user-friendly password for posting private key?***

I try to figure out it then I found out a way to do so. 

# Steps

* First, you must have steem-python installed on your machine or other computer you can access.
Check [github](https://github.com/steemit/steem-python) to find out how to install and more details information about it

* Check your active private key at steemit.com.
***`Wallet->Permissions->ACTIVE->SHOW PRIVATE KEY`***

* Import the active private key to the local wallet of steem-python use following command.
***`steempy addkey`***
![](https://steemitimages.com/DQmPHLgB1GS8jySYFYCcq3NjmBeds9BqGW8Ssvd2sgKRfEM/image.png)
Pasted your active private key according to the prompt.

* Write a simple script to generate ***`posting private key & posting public key`*** from password
![](https://steemitimages.com/DQmU4rTr6WZVCewkPtw1k1amnyRU1PKcQbR1pdw7gTPQoRR/image.png)
(Replace the ***`account, passwd`*** with your account and the password you want to use.)

* Run the script
![](https://steemitimages.com/DQme6xF9uZ67WrhNn4cuD3FMhnAu9GgKUqDyiw9h5uXoVEr/image.png)
(Now we got  the ***`posting private key & posting public key`***)

* Now we will use ***`steempy`*** the command line tool for steem to finalize our operation.
***`steempy allow --account oflyhigh.test STM8WgLmubC1KgbDiUgBuXeLuEzJYnkz8q8vnEmGapqCH4KWWuf6h`***

* The result
![](https://steemitimages.com/DQmRce9VXzAZJc5xCWfJ6dagAVHZyraxgjeLFUY83wQ7DQv/image.png)

* Let's we check the account oflyhigh.test on steemd.com.
![](https://steemitimages.com/DQmb8So4tmwdSkyqvGqgS5SQ2vSbMFiwUKZWKaEWwGqKsi6/image.png)
And here:
![](https://steemitimages.com/DQmc3g5LTDpZmDbc3g7KgDkcoe1Fu4qm8T4kbCCamAykims/image.png)
Everything is correct.

# Check Login

Now, It's time to check on what we've done!

* Logout from steemit, and open [the login page](https://steemit.com/login.html)
* Input the account name ***`oflyhigh.test`*** and the password ***`mypasswd`***
![](https://steemitimages.com/DQmcJDVKN3VLjvjs9hR1muF5t9xkeYywuhV1EENFPrHSDCv/image.png)
* Click the LOGIN button, Now we login successfully and the welcome page shows.
![](https://steemitimages.com/DQmV5e3wU5xrFyu1WuRZ4U8FmSKso1rZSDgY6obfRdaSkty/image.png)
* Check our profile, all things right.
![](https://steemitimages.com/DQmNZb9zVmt5nJVcdfbEi69ZyeqqVwSipfRFNRConQ7SmpK/image.png)
* You can also login with the new posting private key we generated in above step, but it is not necessary.


# Conclusions

It's very tedious to log in steemit.com with the posting private key.

In this article, I had introduced you a method to ***set up a user-friendly password for posting private key***. Now, we can use this password to log in steemit and other third party sites, It just works as same as the posting private key.

# CAUTION!!  
![](https://steemitimages.com/DQmaNeccZV3pv85xsPFrDyYqgJkUNJ8G5M63s6XoQiCBc54/image.png)
***Use this script unless you really know what you're doing!  Improper operation may cause your account to be locked***

---

# 中文

大家都知道主密码、所有者KEY、active私钥是非常重要的。

所以出于安全起见，建议大家用Posting私钥登陆网站、发帖、回复、投票等。

但是Post私钥很长根本记不住，每次复制粘贴还挺麻烦，有没有办法像使用密码一样使用呢？***本文介绍了如何为posting私钥设置一个密码***。详细步骤参见英文部分。

***注意：除非你明确知道你在做什么，否则请慎重操作。***

- - -

This page is synchronized from the post: [How to set up a user-friendly password for the posting private key? / 如何为posting private key 设置个友好的密码？](https://steemit.com/@oflyhigh/how-to-set-up-a-user-friendly-password-for-the-posting-private-key-posting-private-key)
