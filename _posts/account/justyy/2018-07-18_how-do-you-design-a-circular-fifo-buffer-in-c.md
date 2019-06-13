
---
title: 'How do you Design a Circular FIFO Buffer in C?'
permlink: how-do-you-design-a-circular-fifo-buffer-in-c
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-18 11:29:21
categories:
- programming
tags:
- programming
- steemstem
- busy
- coding
- computing
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Circular_Buffer_Animation.gif/400px-Circular_Buffer_Animation.gif
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Circular_Buffer_Animation.gif/400px-Circular_Buffer_Animation.gif)

I was recently being asked by this question: How do you Design a Circular FIFO Buffer in C? You need to implement two methods: `fifoRead` and `fifoWrite`, which reads or writes a byte to the buffer respectively. 

1. C Implementation Only.
2. Circular Buffer
3. First-In-First-Out
4. `fifoRead` will read a byte from the buffer, if the buffer is empty, it should return a EMPTY error code.
5. `fifoWrite` will write a byte to the buffer, if the buffer is full, it should return a FULL error code.
6. The size of the buffer is fixed (not changing dynamically runtime)

It is fixed size so the best data structure is the static array that we can use to represent the buffer or [queue](https://helloacm.com/c-coding-exercise-use-hashtablepriority-queue-to-compute-the-relative-ranks/). 

```
#define BUFFER_SIZE 100
#define ERROR_EMPTY 0
#define ERROR_FULL 0xFF

char buffer[BUFFER_SIZE];
```

We can then have two index-pointers `head` and `tail` pointing to the beginning and the end of the buffer, default to zeros.

```
int head = 0, tail = 0;
```

![image.png](https://ipfs.busy.org/ipfs/QmYTawYueCGette4yqXrpLiDWdMKTsRwBfzN1soEShFADb)

When a byte is to insert into the buffer, we move the `head` and on the other hand, when a byte is about to be read from the buffer we move the `tail`.

If we all move the `head` and `tail` in clock-wise direction (moving to the right), we also need to rewind the pointers when they reach the end of the array i.e. `head = (head + 1) % BUFFER_SIZE` and `tail = (tail + 1) % BUFFER_SIZE`

We can use a counter variable to record the number of stored-bytes in the buffer. Therefore, the `fifoRead` and `fifoWrite` can be implemented as follows:

```
int count = 0; 

// reads a byte from the buffer and return ERROR_EMPTY if buffer empty
char fifoRead() {
   if (0 == count) return ERROR_EMPTY;
   count --;
   tail = (tail + 1) % BUFFER_SIZE;
   return buffer[tail];
}

// writes a byte to the buffer if not ERROR_FULL
char fifoWrite(chat val) {
   if (BUFFER_SIZE == count) return ERROR_FULL;
   count ++;
   head = (head + 1) % BUFFER_SIZE;
   return buffer[head];
}
```

We don't like global variables in this case `counter`. When you do `counter --` or `counter ++`, what computer does is to copy the value from memory `counter` to register, increment or decrement the register, and copy the value from register back to the memory. In case of hardware interrupts (similar to multithreading), the value of `counter` may be incorrectly updated.

So, if we get rid of the `counter`, how do we check if the buffer is empty or full? The answer is in the `head` and `tail` itself.

When the buffer if empty, the `head == tail` is true. And when the buffer is about to be full, the `head + 1 == tail` is true.

```
// reads a byte from the buffer and return ERROR_EMPTY if buffer empty
char fifoRead() {
   if (head == tail) return ERROR_EMPTY;
   tail = (tail + 1) % BUFFER_SIZE;
   return buffer[tail];
}

// writes a byte to the buffer if not ERROR_FULL
char fifoWrite(chat val) {
   if (head + 1 == tail) return ERROR_FULL;
   head = (head + 1) % BUFFER_SIZE;
   return buffer[head];
}
```

In this case, we can only store `BUFFER_SIZE - 1` elements in the buffer because we have to distinguish between BUFFER emtpy and BUFFER full.

Reposted to my blog: https://helloacm.com/how-do-you-design-a-circular-fifo-buffer-queue-in-c/

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [How do you Design a Circular FIFO Buffer in C?](https://steemit.com/@justyy/how-do-you-design-a-circular-fifo-buffer-in-c)
