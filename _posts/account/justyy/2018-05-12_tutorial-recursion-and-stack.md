
---
title: 'Tutorial - Recursion and Stack'
permlink: tutorial-recursion-and-stack
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-12 23:53:30
categories:
- utopian-io
tags:
- utopian-io
- tutorials
- programming
- busy
- steemstem
thumbnail: https://gateway.ipfs.io/ipfs/QmX42tzCuazepYYCPfXaEPoG2kK1ZC1pzLiq5xBEVXzhwn
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### What Will I Learn?
[Recursion](https://helloacm.com/tutorial-recursion-and-stack/) is an important programming concepts. [Recursion](https://helloacm.com/understanding-tail-recursion-visual-studio-c-assembly-view/) can be used to simplify your algorithm implementation but at a cost of possible stack-over-flow pitfalls.

This tutorial will provide a simple-to-follow example and you will learn:
- how recursion works
- how to generally convert them to non-recursion approaches
- the advantages and disadvantages of recursions.

#### Requirements
In order to understand this tutorial, you will need to:

- understand the data structure [Stack](https://helloacm.com/how-to-design-a-stack-with-constant-time-in-push-pop-top-and-getmin/)
- understand at least C-style programming language

#### Difficulty
Intermediate

#### Tutorial Contents
We can define a function `f()` that takes an integer parameter `x` and compute the sum from 1 to `x` inclusive. It can be defined in ES6 - Javascript as a recursive approach:

```
const f = (x) => {
    if (x === 0) {  // exiting condition
        return 0;
    } 
    return x + f(x - 1);  
}
```

For example, to compute `f(5)` it will be unrolled to:

```
5 + f(4)
----> 4 + f(3)
---------->3 + f(2)
-------------->2 + f(1)
-------------------->1 + f(0)
-------------------------> 0  <----- exiting condition met.
```

So actually, the computer will compute the value for f(0) first, then f(1), f(2)... and so on. The values will be added from bottom to the top.

[Recursion](https://helloacm.com/definition-of-recursion/) is a function call to itself. The computer saves the current stats in the current function stack, call recursions and restore the stack upon its return. Computer programs have a fixed size of stack, and if you have too many recursive calls that will build up the recursion depth, which will overflow your stack - known as **StackOverFlow**

A stack is a First-In-Last-Out data structure, where elements are pushed on top of each other and they are retrieved later in the reverse order.

![image.png](https://gateway.ipfs.io/ipfs/QmX42tzCuazepYYCPfXaEPoG2kK1ZC1pzLiq5xBEVXzhwn)

In Javascript, we can use the array to emulate the stack:

```
let stack = [];
stack.push(1);       // stack is now [1]
stack.push(5);       // stack is now [1, 5]
let i = stack.pop(); // stack is now [1]
console.log(i);            // displays 5
```

So, by using stack, we can emulate the recursive approach:

```
const g = (x) => {
    let stack = [];
    stack.push(x);
    let r = 0;
    let exit = false;
    do {
        let elem = stack[stack.length - 1]; 
        if ((elem > 0) && (!exit)) {
            stack.push(elem - 1);  // recursive calls
        } else {
            r += elem;  // bottom up - sum up
            stack.pop();
            exit = true;
        }
    } while (stack.length > 0);
    return r;
}
```

Unlike the intuitive recursive approach i.e. `f()`, this approach involves manual manipulations of the stack. When`exit` is `true`, all values will be sum up from bottom to the top. However, as the stack size can grow dynamically, it does not have the **StackOverFlow** problem.

Let's compare the performances of both approaches via JS `performance.now()`. You can run the above JS code in this tutorial by using [SteemJS Editor](https://helloacm.com/tools/steemit/steemjs/)

![image.png](https://gateway.ipfs.io/ipfs/QmbJSbZNnazheUQzQuyzdLcUW5aki1DiW1CYDb5Yfmtf3i)

We can see that the recursions are performing better as nowadays the computers (compilers or interpreters) are very good at optimising the recursion.

However, most recursions can be eliminated by using a better algorithms. For example, the `f()` can be implemented using the iterative loop, or even just a pure mathematical formula. 

#### Proof of Work Done
All the code used in this tutorial has been uploaded to my github:  
https://github.com/DoctorLai/tutorial-code/blob/master/recursion-and-stack.js

------------------------------------------------
Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [Tutorial - Recursion and Stack](https://steemit.com/@justyy/tutorial-recursion-and-stack)
