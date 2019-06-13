
---
title: 'Just a Simple Parallel Runner in C#'
permlink: just-a-simple-parallel-runner-in-c
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-05 11:04:54
categories:
- utopian-io
tags:
- utopian-io
- parallel
- task-runner
thumbnail: https://helloacm.com/wp-content/uploads/2016/09/SimpleRunner-Examples.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I need a quick GNU Parallel substitute on Windows, and here is a simple parallel runner that is implemented in C# .NET 4.6.

Github Source: https://github.com/DoctorLai/SimpleRunner

# Features of `Simple Parallel Runner`
- Run multiple tasks at command line
- Tasks synchronization
- Timeout
- Jobs can be defined in a job list file.

# Examples
it is possible to specify alternative e.g. using `.js=wscript.exe` and/or `*.vbs=wscript.exe"`. For example,

> SimpleRunner job1.vbs job2.vbs job3.vbs job4.js
Process Starts: cscript.exe /Nologo job1.vbs
Process Starts: cscript.exe /Nologo job4.js
Process Starts: cscript.exe /Nologo job2.vbs
Process Starts: cscript.exe /Nologo job3.vbs
1
Process Stops: cscript.exe /Nologo job1.vbs
2
Process Stops: cscript.exe /Nologo job2.vbs
4
Process Stops: cscript.exe /Nologo job4.js
3
Process Stops: cscript.exe /Nologo job3.vbs


If you specify wscript.exe to run, then all the output will not be redirected to the console. Instead, message dialogs will be pop-up, if you use WScript.Echo.

> SimpleRunner job1.vbs job2.vbs job3.vbs job4.js .js=wscript.exe .vbs=wscript.exe
Process Starts: wscript.exe /Nologo job1.vbs
Process Starts: wscript.exe /Nologo job2.vbs
Process Starts: wscript.exe /Nologo job4.js
Process Starts: wscript.exe /Nologo job3.vbs
Process Stops: wscript.exe /Nologo job2.vbs
Process Stops: wscript.exe /Nologo job4.js
Process Stops: wscript.exe /Nologo job1.vbs
Process Stops: wscript.exe /Nologo job3.vbs


Please note that the 32-bit scripting engines aree located at e.g. `C:\Windows\SysWOW64` while the 64-bit variants are located at `C:\Windows\System32`.

## Specify the Runner Paths and Parameters
As you can see in the above example, the runners can be specified using the `.ext=path` format where ext is the job file extension. Also you can specify the parameters to pass for that [runner](https://helloacm.com/just-a-simple-parallel-runner-in-c/), for example:

> SimpleRunner .php=php.exe -php=/para1 -php=/para2 a.php b.php
In this case, two processes will be invoked in parallel.

> php.exe /para1 /para2 a.php
php.exe /para1 /para2 b.php


.vbs and .js are pre-configured with /Nologo parameter.

## Specify the timeout for processes

Each parallel process will run until it terminates, however, you could set a timeout limit for all processes.

> SimpleRunner job1.vbs job2.vbs job3.vbs job4.js timeout=1
Process Starts: cscript.exe /NoLogo job1.vbs
Process Starts: cscript.exe /NoLogo job4.js
Process Starts: cscript.exe /NoLogo job2.vbs
Process Starts: cscript.exe /NoLogo job3.vbs
Four independent processes are killed and terminated because the timeout is set to 1ms.

## Specify a job list

You could put each line a job task in a job list file, for example,

> SimpleRunner jobs=list1.txt jobs=list2.txt


where list1.txt and list2.txt are two plain text files that contain each line a job.

# Source Code
Github Source: https://github.com/DoctorLai/SimpleRunner

# Screenshot
![](https://helloacm.com/wp-content/uploads/2016/09/SimpleRunner-Examples.jpg)

# Proof of work
`doctorlai` is my github ID and you can view my profile https://github.com/DoctorLai which has my steemit URL page.


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/just-a-simple-parallel-runner-in-c">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Just a Simple Parallel Runner in C#](https://steemit.com/@justyy/just-a-simple-parallel-runner-in-c)
