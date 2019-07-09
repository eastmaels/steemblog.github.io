
---
title: 'Should system python co-exist with Anaconda Python?'
permlink: shouldsystempythonco-existwithanacondapython-1vjvskvebr
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-15 14:42:51
categories:
- anaconda
tags:
- anaconda
- coding
- development
- python
- technology
thumbnail: 'https://cdn.steemitimages.com/DQmXARyeK5LfB4oJif6DheUYc9BbvwYT4RnRyXg4vN5UTM6/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmXARyeK5LfB4oJif6DheUYc9BbvwYT4RnRyXg4vN5UTM6/image.png" alt="" /><br/>

Linux system like Ubuntu, usually comes with Python installed which was usually referred as <em>system Python</em>. Anaconda gains huge reputation in simplying the package and environment management which was quite a pain in the ass for system Python. When I started using Anaconda as the main Python package manager, I was always confused that is the system Python still matter? Can I just uninstall it to reduce the seemingly redundant Python installation?

<strong>The answer is no.</strong>

The built in Python comes with the system is best not to be modified or even removed as it might break the system. Some other programs or applications might already depends on the system Python. Furthermore, the new Python installed beatifully on in the same system without conflict. It usually installed as a 3rd party software in the directory <code>/home/username/anaconda</code>, and modified the <code>~/.bashrc</code> to add the new Python into the PATH. <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/should-system-python-co-exist-with-anaconda-python/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Should system python co-exist with Anaconda Python?'](https://steemit.com/@fr3eze/shouldsystempythonco-existwithanacondapython-1vjvskvebr)
