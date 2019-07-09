
---
title: 'Checksum tools in Windows'
permlink: checksum-tools-in-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-24 08:02:06
categories:
- security
tags:
- security
- technology
- busy
- cn
- teammalaysia
thumbnail: 'https://gateway.ipfs.io/ipfs/QmSf2uBKbjALh2oGLeyQqUdLQTLuXaxpjBKm8jXLePRmCs'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Installing random tools from Internet is one of the great ways to compromise PC. Checksum is the only way to make sure that the integrity of downloaded file. The idea is, as long as the checksum hash provided by the official site match with file's hash, the integrity of the file can be assured that it is clean to use.

## Windows doesn't come with a native Hash checking tool

Though you might argue that `Get-FileHash` native command is available in PowerShell, it is not even close to user-friendly and requires a high familiarity with command interface which most Windows users are not capable of. **We need something that can be done using merely the clicks.**

Another problem of hash checking tool is,  users will have to compare the generated hash and compare to official hash manually (often by eyes), characters to characters. This is truly inefficient and stupid considering a `compare` function can do the job within second and eliminate all the human errors.

## Introducing the HashCheck

>The HashCheck Shell Extension makes it easy for anyone to calculate and verify checksums and hashes from Windows Explorer. It is fast and efficient, with a very light disk and memory footprint, and it is open-source.

Yeah, another awesome open-source project. Check it out [here](http://code.kliu.org/hashcheck/).

Now you can verify the checksum in a really neat way. I will demonstrate the process using a file downloaded from [KeePass 2.38 portable version](https://keepass.info/download.html). The [Integrity page](https://keepass.info/integrity.html) will have all the hash for each file which I can use to check against later.

![image.png](https://gateway.ipfs.io/ipfs/QmSf2uBKbjALh2oGLeyQqUdLQTLuXaxpjBKm8jXLePRmCs)

Install the HashCheck. Download the Keepass test file, right click on it and select `Properties`. There will be one new `Checksums` tab where all the hashing is already done using famous algorithms like MD5 and SHA-1. I copy the **MD5** hash (or you can choose any hash) and paste into the Find column to check against the generated MD5 hash from the file. 

The matched hash will be highlighted. Now I can be sure this file is not compromised and safe to use.

<div class="pull-left"><center><img src="https://gateway.ipfs.io/ipfs/QmT7CARzJDPShVWPma1BvdnuxS274Wxn6LoS9rLkZshfmp" /></center></div>
<div class="pull-right"><center><img src="https://gateway.ipfs.io/ipfs/QmXQUFGJtkAXXCitrUfUN9q9Ua7Pnp9ovq9cDxqW8ZJuXw" /></center></div>

HashCheck comes with other handy features as well which you can explore. Of course, you don't have to hash checking every file from the Internet but it is highly recommended to do for any suspicious source. The best idea is only to download files from the trustable sites and perform checksum verification afterward and you will be able to prevent attacks from compromised files.

Happy hash checking!

---

>总和检验码（Checksum）是一个端到端的校验和，由发送端计算，然后由接收端验证。 其目的是为了发现TCP首部和数据在发送端到接收端之间发生的任何改动。

所以要是从可以的网站上下载东西，最好就是验证其总和检验码。而在 Windows 上执行这样的任务最佳的莫过于刚发现的 [HashCheck](http://code.kliu.org/hashcheck/)。这软件轻巧，快速，还是开源的，快来试用吧。

---

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>





- - -

This page is synchronized from the post: ['Checksum tools in Windows'](https://steemit.com/@fr3eze/checksum-tools-in-windows)
