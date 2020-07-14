
---
title: 'Testing Load Balance Node'
permlink: testing-load-balance-node
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-14 18:40:57
categories:
- codeonsteem
tags:
- codeonsteem
- witness-category
- rpc-node
- programming
- whalepower
- steem-dev
- python
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmW8Y9tcjtLBJb924rw9KuAjpK5dXbTjUqTFoWbmrXGrcF/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In <a href="https://helloacm.com/the-python-function-to-retrieve-the-producer-reward-for-witness/" title="The Python Function to Retrieve the Producer Reward for Witness">Python</a>, we can use <em>_threading</em> to launch a thread easily using the <em>_thread.start_new_thread</em> procedure. For example, 

```
import _thread

def thread_proc(threadId, value):
  print(threadId, value)

_thread.start_new_thread( thread_proc, ("Thread-1", "a Number") )
_thread.start_new_thread( thread_proc, ("Thread-2", "a Number") )
```

Unfortunately, the above threads may not finish (and be aborted) before the main script is terminated. Because we are not synchronize the threads yet. We can however, do an easy trick:

```
while True:
  pass
```

This endless loop will allow all threads to forcibly joining but the script hangs until we Ctrl+C or kill it. We can use the <em>threading</em> module but that requires us to write a Thread class that inherits the <em>threading.Thread</em>.

We can uset the <em>threading.Event()</em> to join the threads. For example:

```
import _thread
import threading

def thread_proc(evt, threadId, value):
  evt.set()
  print(threadId, value)

evt1 = threading.Event()
evt2 = threading.Event()

_thread.start_new_thread( thread_proc, (evt1, "Thread-1", "a Number") )
_thread.start_new_thread( thread_proc, (evt2, "Thread-2", "a Number") )

evt1.wait()
evt2.wait()
```

<h3>Multithreading Requests to API Server using Python's _threading Module</h3>
Let's launch 100 threads that sends <a href="https://helloacm.com/the-concurrent-programming-language-cind/" title="The Concurrent Programming Language: Cind">concurrent</a> requests to a the Load Balancer Node `https://steem.justyy.workers.dev`. And we need to store the threading.Event() in an array so that we can join all threads.

```
import _thread
import threading
import json
import requests
from random import randrange

def worker(evt, threadName, block):
  data = {"jsonrpc":"2.0", "method":"condenser_api.get_block", "params":[block], "id":1}
  r = requests.post(url="https://steem.justyy.workers.dev",json=data)
  rjson = r.json()
  result = rjson["result"]
  print(threadName, len(result["transactions"]))
  evt.set()
      
try:
  threads = []
  for i in range(100):
    evt = threading.Event()
    threads.append(evt)
    _thread.start_new_thread( worker, (evt, "Thead-" + str(i), randrange(1, 40000000)) )
  for i in threads:
    i.wait()
except:
  print("Error2")   
```  

As expected, it will show the following:


![image.png](https://cdn.steemitimages.com/DQmW8Y9tcjtLBJb924rw9KuAjpK5dXbTjUqTFoWbmrXGrcF/image.png)

I have also tried other nodes, and the result seems to me that all nodes can handle multiple requests at the same time from the same origin.

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to Computing and Technology](https://helloacm.com/multithreading-testing-using-pythons-low-level-_threading-module/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Testing Load Balance Node'](https://steemit.com/@justyy/testing-load-balance-node)
