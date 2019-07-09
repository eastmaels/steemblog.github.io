
---
title: 'Finally I realize why to use Conda and why is setting a proper Python environment important.'
permlink: finallyirealizewhytousecondaandwhyissettingaproperpythonenvironmentimportant-pkfj2dxbxb
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-27 10:04:48
categories:
- computer
tags:
- computer
- programming
- python
- steem
- technology
thumbnail: 'https://cdn.steemitimages.com/DQmUntj1UBAEd7pD92GhUo4tTg1T9JMKJFA5CNky61quDLq/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmUntj1UBAEd7pD92GhUo4tTg1T9JMKJFA5CNky61quDLq/image.png" alt="" /><br/>

Everyone recommend to use <strong>Anaconda</strong> for setting up Python environment at first and I'm no developer but to follow this advice without knowing what Anaconda really does. Until I tried to setup the Python in my Ubuntu VPS and enable some automation python scripts there.

Normally, Linux OS like Ubuntu comes with Python installed, so I thought "Oh so I don't have to get Anaconda for Python again since the system comes with it." Importing the necessary packages via <code>pip</code> and very soon, I've ran into a trouble because I have several different version python installed like the <code>python2.7</code> and newer <code>python3.6</code>. Without a Python environment manager, the <code>pip</code> will just install packages to the <code>site-packages</code> directory of active python environment and the other environment will not see the same package.

This is when I realized the true usage of <code>conda</code> as <strong>package and environment manager</strong>. Silly me. Have a great read in detail how to make use of the awesome <code>conda</code> manager:

<a href="https://medium.freecodecamp.org/why-you-need-python-environments-and-how-to-manage-them-with-conda-85f155f4353c">Why you need Python environments and how to manage them with Conda</a>

Some useful tips in the article:

<ul>
<li>Use <code>Miniconda</code> installer instead of the full <code>Anaconda</code> version as the full version comes installed with 150 packages that hobbyist mostly don't use. Users can always pick up additional packages if they want in future. Miniconda keeps things lean and minimized.</li>
<li>Use <code>conda</code> to as package and environment manager and not <code>pip</code>. Althought <code>pip</code> is one of the package within <code>conda</code> as well. </li>
<li>Setting up different Python environment is very helpful in switching between different project that might need different settings.</li>
</ul><br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/finally-i-realize-why-to-use-conda-and-why-is-setting-a-proper-python-environment-important/</em><hr/></center>

- - -

This page is synchronized from the post: ['Finally I realize why to use Conda and why is setting a proper Python environment important.'](https://steemit.com/@fr3eze/finallyirealizewhytousecondaandwhyissettingaproperpythonenvironmentimportant-pkfj2dxbxb)
