
---
title: 'Handling output in Linux terminal'
permlink: handlingoutputinlinuxterminal-8d0tzc6ehu
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-09 05:09:33
categories:
- computer
tags:
- computer
- life
- linux
- sysadmin
- technology
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<pre><code>          || visible in terminal ||   visible in file   || existing
  Syntax  ||  StdOut  |  StdErr  ||  StdOut  |  StdErr  ||   file   
==========++==========+==========++==========+==========++===========
    &gt;     ||    no    |   yes    ||   yes    |    no    || overwrite
    &gt;&gt;    ||    no    |   yes    ||   yes    |    no    ||  append
          ||          |          ||          |          ||
   2&gt;     ||   yes    |    no    ||    no    |   yes    || overwrite
   2&gt;&gt;    ||   yes    |    no    ||    no    |   yes    ||  append
          ||          |          ||          |          ||
   &amp;&gt;     ||    no    |    no    ||   yes    |   yes    || overwrite
   &amp;&gt;&gt;    ||    no    |    no    ||   yes    |   yes    ||  append
          ||          |          ||          |          ||
 | tee    ||   yes    |   yes    ||   yes    |    no    || overwrite
 | tee -a ||   yes    |   yes    ||   yes    |    no    ||  append
          ||          |          ||          |          ||
 n.e. (*) ||   yes    |   yes    ||    no    |   yes    || overwrite
 n.e. (*) ||   yes    |   yes    ||    no    |   yes    ||  append
          ||          |          ||          |          ||
|&amp; tee    ||   yes    |   yes    ||   yes    |   yes    || overwrite

|&amp; tee -a ||   yes    |   yes    ||   yes    |   yes    ||  append
</code></pre>

Was struggling the other day trying to output a program to a file including the <code>stdout</code> and <code>stderr</code>. Found this great explaination in this <a href="https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file">thread</a>. That's all one need to know in order to handle the <code>stdout</code> and <code>stderr</code> redirect and output, whether to a log file or printing it in terminal. <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/handling-output-in-linux-terminal/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Handling output in Linux terminal'](https://steemit.com/@fr3eze/handlingoutputinlinuxterminal-8d0tzc6ehu)
