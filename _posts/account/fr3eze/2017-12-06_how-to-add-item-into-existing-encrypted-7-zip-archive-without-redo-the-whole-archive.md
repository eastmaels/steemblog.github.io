
---
title: 'How to add item into existing encrypted 7-zip archive without redo the whole archive'
permlink: how-to-add-item-into-existing-encrypted-7-zip-archive-without-redo-the-whole-archive
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-06 01:48:27
categories:
- utopian-io
tags:
- utopian-io
- cryptocurrency
- security
- teammalaysia
- archive
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467038/smntwnk89xskbt7n6067.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


7-zip provides awesome and simple encryption method using the AES-256 algorithm [that is handy to encrypt sensitive credentials like private keys for cryptocurrency](https://steemit.com/utopian-io/@fr3eze/encrypt-cryptocurrency-credentials-using-7-zip). However, it doesn't support to encrypt new files into an encrypted archive. The old and inefficient way to achieve this is to decrypt the old archive, make a new archive with the new items, and encrypt everything again. This is ridiculous when you just want to add a 10kb release note into a 1G archive. That computing power wasted could better spend at cryptocurrency mining.

## The problem

![1.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467038/smntwnk89xskbt7n6067.png)

In the encrypted 7z file we can see that the Encrypted column for the `Old item.txt` is a `+`, meaning this file is encrypted. You can practice this walk-through by creating a simple testing file like this.

![2.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467145/ze1oghb1rk5imvlfonnq.png)

Now we wish to add a new item to the current archive without decrypting. Drag and drop the `New item.txt` into the archive and press *Yes*.

![3.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467256/f49zqbubxjeil2ia0bfn.png)

Under Encrypted property, there is a `-` sign for the new item while the old item is still encrypted. By opening up both files, you still need to provide the password for the `Old item.txt` while `New item.txt` is can be opened without one. 
This status remains even if you close and reopen the archive. There is no option in the tools or whatsoever to encrypt new files in the archive.

------

## The Solution

![4.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467420/btjollz0tm2whqgcfbwh.png)

How should we make things right by having the new file encrypted using same algorithm and password like the old file did?
Remove the new item first. Proceed to right click on the blank place of the archive and click on *Open Inside*.

![5.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467516/jh8jtjxozqy4zukgwvqq.png)

Provide the password and now the whole archive is decrypted. Verify the encryption status by opening up the files again.

![6.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467558/qi5wam7tsmufo4pquncu.png)

Drag and drop the `New item.txt` again to the decrypted archive and press *Yes*.

![7.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512467608/g3b8ftknpjuxoojzig1l.png)

Now you will see both files are encrypted with the `+`sign. But you are still in the decryption status, to resume the encryption simply close the archive. The next time you open either file in the archive they will prompt you for the same password.

------

This trick is extremely handy when you want to add a few files to an encrypted archive without having to first decrypt the old archive and redo the archiving with encryption again. Cheers to the tons of time and computing power that you've saved!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/how-to-add-item-into-existing-encrypted-7-zip-archive-without-redo-the-whole-archive">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['How to add item into existing encrypted 7-zip archive without redo the whole archive'](https://steemit.com/@fr3eze/how-to-add-item-into-existing-encrypted-7-zip-archive-without-redo-the-whole-archive)
