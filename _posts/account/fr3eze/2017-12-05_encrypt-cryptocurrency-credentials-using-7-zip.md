
---
title: 'Encrypt cryptocurrency credentials using 7-zip'
permlink: encrypt-cryptocurrency-credentials-using-7-zip
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-05 15:23:39
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- security
- teammalaysia
- archive
thumbnail: 'https://steemitimages.com/DQmZJkfQ8Ry5NBfA1DCP8oAGAVbsgih2Lsv3eA6FWoYLKvL/a.PNG'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I'm a big fan of 7-zip for a long time. 

7-zip is a free and open-source file archiver which also supporting AES-256 encryption in 7z and ZIP formats. 

> The AES-256 algorithm uses cipher key with length of 256 bits. To create that key 7-Zip uses derivation function based on SHA-256 hash algorithm. A key derivation function produces a derived key from text password defined by user. For increasing the cost of exhaustive search for passwords 7-Zip uses big number of iterations to produce cipher key from text password.

We will try to make use of this strong and free encryption feature to protect our vital cryptocurrency information.

OS: Windows 10 Pro 64-bit
7-zip version: 7-Zip 17.01 beta (2017-08-28) for Windows

# The walk-through

![a.PNG](https://steemitimages.com/DQmZJkfQ8Ry5NBfA1DCP8oAGAVbsgih2Lsv3eA6FWoYLKvL/a.PNG)

I store all my wallets under a directory with simple architecture like this. We will use the STEEM wallet as example for this tutorial.

------

![b.PNG](https://steemitimages.com/DQmUtP8J5febNccQnAnGwgUAmAotcpQve6QjpjL6mQuTkut/b.PNG)

Inside of the STEEM folder there are two files, the portable Vessel wallet for Steem and a plain text file that stores all the private keys for Steem including Owner key, Active key, and Post key.

One must never store sensitive data like such digitally in plain text. And we are going to encrypt this text file using 7-zip.

------

![c.PNG](https://steemitimages.com/DQmcBQWg6m6F21TrXicSqX7hV3irxEhssqd9fDeNCLHsBGx/c.PNG)

Download latest version of 7-zip from the [official site](http://www.7-zip.org/download.html). 

After installation, right click on the text file. *7-zip* -> *Add to archive*.

------

![d.PNG](https://steemitimages.com/DQmUh9vqqLpfC1kV3hNnUCKq1quK65yTQmeuf9bv6ewT8vw/d.PNG)

You can either choose 7z or zip format in the Archive format. Make sure the encryption algorithm is set to **AES-256**, this should be the only option if you are using the latest version of 7-zip. Lastly, create a **strong password** which is very important to increase the difficulty when someone trying to crack the encryption. The stronger the password the stronger your encryption is.

Press *OK* to start the archiving.

------

![e.PNG](https://steemitimages.com/DQmdUuvfPuxZy5sinVC2V6X4GpkBXvaQTn78VPwMXe5uE6E/e.PNG)

Now you will have an encrypted archive in 7z format.

------

![g.PNG](https://steemitimages.com/DQmR2bUdih8e1CyXxBhR173dvV7voViMiqK5gAEBtcTPdLc/g.PNG)

Open it up and to make sure you see the `+` sign under the Encrypted column. Unlock the file to check if everything is OK before next step.

------

![f.PNG](https://steemitimages.com/DQmYf1zhEktPZ8sFYWqTdk8BAmHapEY1gHKARbakuzkL26D/f.PNG)

Permanently delete the plain text file by `Shift + Del` keys. Make sure no copy of the text file should be existing in any place including the recycle bin. 

Remember all the sensitive credentials in digital form should always be encrypted.

------

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/encrypt-cryptocurrency-credentials-using-7-zip">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Encrypt cryptocurrency credentials using 7-zip'](https://steemit.com/@fr3eze/encrypt-cryptocurrency-credentials-using-7-zip)
