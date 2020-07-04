
---
title: 'How to SSH to Remote Host using the Priviate/Public Keys Authentication?'
permlink: how-to-ssh-to-remote-host-using-the-priviate-public-keys-authentication
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-04 14:02:06
categories:
- codeonsteem
tags:
- codeonsteem
- whalepower
- ssh
- security
- tutorial
- authentication
- password
- login
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Password <a href="https://helloacm.com/a-nice-alternative-for-putty-termius-a-very-nice-portable-ssh-connection-tool/" title="A Nice Alternative for PuTTY: Termius – A very nice portable SSH connection tool">Authentication</a> is not secure. Your password may be too simple to crack or acidentally may be recorded or leaked. Therefore, it is a good practice to configure the authentication without using Password.

<h3>SSH using Public/Private Key Pair</h3>
The Simple Idea to replace Password Authentication is to Use a Private/Public Keys (Asymmetrical Cryptography Algorithm e.g. <a href="https://helloacm.com/tools/hash/" rel="noopener noreferrer" target="_blank">RSA</a>). Let's say you are on Host A and want to login to Host B. All you need to do is the following steps:

<h4>Generate a Public/Private Key Pair on Host A</h4>
You can run `ssh-keygen -t rsa` to generate a key pair. Just press Enter when questions are prompted. 

```
$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): 
Created directory '/home/user/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
XXXXXXXXXXXXXXXXXXXXXX user@HostA
The key's randomart image is:
+---[RSA 2048]----+

|         =B+o++. |
|        XXXXXXXX.|
|       . .o+XXXX*|
|        ..o @ o o|
|       XXXXX . . |
|      .o=.B .    |
|       o.*       |
|      XXXX       |
|       o         |
+----[SHA256]-----+
```

As you can see, in the /home/user directory, there will be two files: private key `id_rsa` which you should not give it to anybody else. And `id_rsa.pub` which you will need to give it to your destination Host.

<h4>Configure Authorized Keys on Destination Host</h4>
Then, on the Host server B, in the directory /home/user/.ssh/, we need to create a file if it is not there i.e. authorized_keys and you need to copy the content of the public key file namely `id_rsa.pub` and append to the end of the file. Each line will be one authorized key.

That is it. When this is all set, from Host A, you can directly SSH or scp to the Host B.

<h3>Avoid Permissions Pitfall</h3>
However, if it is not working, most of the time it is due to incorrect file permissions. You need to run the following on Host B.

```
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

Also, the home directory need to be set correctly:

```
chmod g-w,o-w ~
```

<h3>Debugging SSH Login Problems</h3>
You can use `ssh -v` to see the verbose information which might help you identify the problem.

```
debug1: Next authentication method: publickey
debug1: Offering public key: RSA SHA256:XXXXXXXXXXXXXXX /home/user/.ssh/id_rsa
debug1: Server accepts key: pkalg rsa-sha2-512 blen 279
```

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to The Blog of Computing](https://helloacm.com/how-to-ssh-to-remote-host-using-the-priviate-public-keys-authentication/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['How to SSH to Remote Host using the Priviate/Public Keys Authentication?'](https://steemit.com/@justyy/how-to-ssh-to-remote-host-using-the-priviate-public-keys-authentication)
