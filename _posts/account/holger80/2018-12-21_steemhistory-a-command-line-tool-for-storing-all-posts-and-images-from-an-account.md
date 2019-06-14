
---
title: 'steemhistory - a command line tool for storing all posts and images from an account'
permlink: steemhistory-a-command-line-tool-for-storing-all-posts-and-images-from-an-account
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-21 17:12:45
categories:
- utopian-io
tags:
- utopian-io
- development
- python
- steemhistory
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmYByPzQgTXzHhkHSaCRKJQ1SQ27UQSbqz1nJfsscNr6j2'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/steemhistory

#### steemhistory
I wrote a [post](https://steemit.com/steemdev/@holger80/store-all-posts-from-an-author-in-markdown-files) about storing all your posts in markdown files. The script did not store images and uses also the limited get_blog function from beem (limited to 500 entries).
The second version of this script fetches all posts without limitation and stores also all linked images in a second folder.  This version is also a full python package which can now be easily installed.

#### Installation
The python package can be installed by:
```
pip install steemhistory
```

For Windows, standalone executables are provided:
One file version:
* [steemhistory-onefile-0.1.2-5-f84a425f-py36_win64.zip](https://github.com/holgern/steemhistory/releases/download/0.1.2/steemhistory-onefile-0.1.2-5-f84a425f-py36_win64.zip)
A faster, not packed version is also provided 
* [steemhistory-0.1.2-5-f84a425f-py36_win64.zip](https://github.com/holgern/steemhistory/releases/download/0.1.2/steemhistory-0.1.2-5-f84a425f-py36_win64.zip)

#### Technology Stack
steemhistory uses the [beem library](https://github.com/holgern/beem/) for receiving all account history.

#### Usage

The following script does the following:

* fetches the complete account history and searches for new posts
* extracts title, timestamp, permlink,tags and store them as YAML extension at top of the md file
* scans the body for image links and downloads them to the image folder
* adds the content to the md file

When images should be stored, three arguments are needed:
```
steemhistory posts <author> <path> <image_path>
```
The images are stored in the given image_path.

![image.png](https://ipfs.busy.org/ipfs/QmYByPzQgTXzHhkHSaCRKJQ1SQ27UQSbqz1nJfsscNr6j2)


When no images should be stored, two arguments are needed:
```
steemhistory posts <author> <path>
```

#### Roadmap
Besides storing all posts, commands for storing all other account history operations are planned.
It is also planned to allow the storage of all posts in different formats, as e.g. PDF.

#### How to contribute?
Please use the issue tracker for bug reports and feature wishes. Pull requests are also welcome.


#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemhistory - a command line tool for storing all posts and images from an account'](https://steemit.com/@holger80/steemhistory-a-command-line-tool-for-storing-all-posts-and-images-from-an-account)
