
---
title: 'How to write a post with image using beem'
permlink: how-to-write-a-post-with-image-using-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-17 14:18:39
categories:
- tutorial
tags:
- tutorial
- python
- beem
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmZwewfWHL4KXC2XMzw6bPoNERzQVsMsa2nJqT2PJMwmXu'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This tutorial is about writing a post with [beem](https://github.com/holgern/beem). You learned in my last [post](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda) how to install beem. Let's use it now.

## Storing the posting key inside the beem wallet
At first we need to store the posting key (safely encrypted in a sqlite wallet):
At first we need a wallet (This step is only necessary once):
```
beempy createwallet --wipe
```
Now we can check, if the wallet was sucessfully created:
```
beempy walletinfo
```

For publishing a post, we need to store the posting key:
```
beempy addkey
```
We can check if this has worked by:
```
beempy listaccounts
```

I will use beembot for testing, so I added the posting key of beembot:
![image.png](https://ipfs.busy.org/ipfs/QmZwewfWHL4KXC2XMzw6bPoNERzQVsMsa2nJqT2PJMwmXu)


As we do not wan't to write down our wallet password, we will temporarily store it as environment variable for windows:
```
set UNLOCK=yourpassword
```
and for linux:
```
export UNLOCK='yourpassword'
```
We can check if this had worked by:
```
beempy walletinfo --test-unlock
```
A similar table  should be displayed now (after setting `UNLOCK` inside the terminal) without entering a password:
![image.png](https://ipfs.busy.org/ipfs/QmcrjbsKN16kRf2RMR6mQ2jGUFbthH64VznJAHBCGoeUhD)

## Writing a python script with all information:


At first, I used `ImageUploader` for uploading a png image to steemit:
```
img_link = image_uploader.upload(image_path, author, image_name="beem-logo.png")
```
`image_path` contains an image filename, `author` is a account (its posting key needs to be stored).
The function returns a dict, `img_link["url"]` contains the url, which can be used inside the post for displaying the uploaded image.

Then I created all necessary variables and entered them into the post function of `steem`:
* author: post author (steem account name)
* title: post title (the permlink is automatically created from this)
* parse_body: Is set to True, which will means that all image, url and mentions are correctly handled.
* self_vote: I disabled self-vote here.
* tags: list with tags, There is no limit and more than 5 tags can be set.

The following script was used to create an [example post](https://steemit.com/python/@beembot/example-for-writing-a-post-with-beem):
![image.png](https://ipfs.busy.org/ipfs/QmVTMJPRXAbzUL4VWYctj5Y5wPVz7isDegVtpftggNmYMg)

```
#!/usr/bin/python
from beem.imageuploader import ImageUploader
from beem import Steem


if __name__ == "__main__":
    stm = Steem()
    author = "beembot"
    image_path = "beem-logo.png"
    image_uploader = ImageUploader(steem_instance=stm)
    img_link = image_uploader.upload(image_path, author, image_name="beem-logo.png")
    
    title = "Example for writing a post with beem"

    body = "This is an example for a post, created with beem by @beembot."\
           "We will also upload an image:"\
           "%s" % img_link["url"]
           
    parse_body = True
    self_vote = False
    tags = ["python", "test", "this", "is", "just", "a", "post"]
    stm.post(title, body, author=author, tags=tags, parse_body=parse_body, self_vote=self_vote)
```
Save your python script now as file (I choose `write_post_with_image.py`) and run it with python:
```
python write_post_with_image.py
```
Remember to set the `UNLOCK` variable at first. Otherwise you will get a `beem.exceptions.WalletLocked` exception.

____
1. [How to install and use beempy using anaconda](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda)

- - -

This page is synchronized from the post: ['How to write a post with image using beem'](https://steemit.com/@holger80/how-to-write-a-post-with-image-using-beem)
