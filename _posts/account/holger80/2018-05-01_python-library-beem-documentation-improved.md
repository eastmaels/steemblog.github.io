
---
title: 'Python library beem: Documentation improved'
permlink: python-library-beem-documentation-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-01 19:35:24
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- beempy
- python-steem
thumbnail: 'https://cdn.utopian.io/posts/fb64988fe5645fa03ab814c3cb14c223a959image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![image.png](https://cdn.utopian.io/posts/fb64988fe5645fa03ab814c3cb14c223a959image.png)
</center>
#### Details
The following parts were improved:

* The structure of the decumentation page was improved.
* A navigation menu is now accessable from all pages.
* All modules of beem are now collected unter Modules.
* The installation section was updated and is at the same level as the readme file in the github. 
* The empty quickstart page was filled with content
* Five tutorials were added to the tutorials page
* The configuration was improved and updated
* beempy CLI was updated and help for each command was added
* The discord channel was added to the Support and questions page
* Indices and Tables can be access from all pages
* Doctest added to CI for testing examples in the documentation
* The link to the documentation was shifted to the top of the readme

#### Components
[beem](https://github.com/holgern/beem) is a python library for steem. The current version is 0.19.25. A lot of featues were added in the last 25 release, but the documentation was not well maintained.

#### Diff
Almost all parts of the existing documentation were improved.
All commands from the command line tool _beempy_ are listed now.
<center>
![image.png](https://cdn.utopian.io/posts/55746acc0f7eda7b2878154fbc4494816f32image.png)
</center>

A navigation menu with search bar is now visible on each site.
<center>
![image.png](https://cdn.utopian.io/posts/050a6e9844981e90b2243a7d72a3d583b830image.png)
</center>

The installation page was improved and adapted to the readme.
Quickstart contains now

* Steem
* Wallet and Keys
* Receiving information about blocks, accounts, votes, comments, market and witness
* Sending transaction to the blockchain

The Tutorials page was filled with new content and the following sections were added:

* Use nobroadcast for testing
* Clear BlockchainObject Caching
* Batch api calls on AppBase
* Account history
* Transactionbuilder

The Configuration page was improved and contains now the following sections:

* API node URLs
* Default account
* Default voting weight
* Setting password_storage

The beempy CLI page has now a section about all commands and shows a help section for each command.

All examples in the doc section of the python functions within beem were reviewed and some examples are now tested with doctest.

101 files were changed  with 1,486 additions and 708 deletions.

#### Links
The documentation of the beem library can be found here: http://beem.readthedocs.io/en/latest
    

- - -

This page is synchronized from the post: ['Python library beem: Documentation improved'](https://steemit.com/@holger80/python-library-beem-documentation-improved)
