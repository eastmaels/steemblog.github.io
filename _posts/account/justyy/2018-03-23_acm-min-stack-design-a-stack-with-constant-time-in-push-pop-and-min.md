
---
title: 'ACM题解系列之 - 最小堆栈 (Min Stack) - Design a Stack with constant time in Push, Pop and Min'
permlink: acm-min-stack-design-a-stack-with-constant-time-in-push-pop-and-min
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-23 19:28:06
categories:
- programming
tags:
- programming
- cn-programming
- steemstem
- busy
- data-structures
thumbnail: https://helloacm.com/wp-content/uploads/2016/04/Stack-Operation-in-C-Programming.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Implement a stack with min() function, which will return the smallest number in the stack. It should support push, pop and min operation all in O(1) cost.
```
class MinStack {   
public:
    MinStack() {
        // write your code here
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    void push(int number) {
        // write your code here
    }

    /*
     * @return: An integer
     */
    int pop() {
        // write your code here
    }

    /*
     * @return: An integer
     */
    int min() {
        // write your code here
    }
};
```

Example:

```
Example
push(1)
pop()   // return 1
push(2)
push(3)
min()   // return 2
push(1)
min()   // return 1
```

The Stack is a data structure that First In Last Out.

![https://helloacm.com/wp-content/uploads/2016/04/Stack-Operation-in-C-Programming.jpg](https://helloacm.com/wp-content/uploads/2016/04/Stack-Operation-in-C-Programming.jpg)

In C++, we can use STL::vector to represent a stack. The push correpsondings to `push_back` method, the pop corresponds to `pop_back` and we can use `back()` to peek the top element in the stack (without removing it from the stack).

The key thing to solve this puzzle is how to get the min value of the stack in O(1). We can use an additional stack to stores the mins. Whenever a new value is about to be pushed to the stack, we push the current min value to the min stack. Popping a value from the stack requires popping the value from the min stack as well.

Here is the [C++](https://helloacm.com/how-to-design-a-stack-with-constant-time-in-push-pop-top-and-getmin/) solution to this problem.

```

class MinStack {
private:
    vector<int> data;
    vector<int> mins;
    
public:
    MinStack() {
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    void push(int number) {
        data.push_back(number);
        if (mins.size() == 0) {
            mins.push_back(number);
        } else {
            int minv = mins.back(); 
            // push updated min value
            mins.push_back(number < minv ? number : minv);
        }
    }

    /*
     * @return: An integer
     */
    int pop() {
        int v = data.back();
        data.pop_back();
        mins.pop_back();
        return v;
    }

    /*
     * @return: An integer
     */
    int min() {
        return mins.back();
    }
};
```

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by [voting for me here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)

---------------------------------

# 没事刷刷题能防止老年痴呆，而且也能让你随时处于最佳状态，随时都可以炒老板鱿鱼另谋高就。

题目：设计一个堆栈（Stack）使 push, pop, 和取最小 min 操作时间复杂度都是 O(1)。
这题的难点就是在于怎么样用O(1)常数时间复杂度来取得堆栈里的最小值。

```
class MinStack {   
public:
    MinStack() {
        // write your code here
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    void push(int number) {
        // write your code here
    }

    /*
     * @return: An integer
     */
    int pop() {
        // write your code here
    }

    /*
     * @return: An integer
     */
    int min() {
        // write your code here
    }
};
```

例子:

```
Example
push(1)
pop()   // return 1
push(2)
push(3)
min()   // return 2
push(1)
min()   // return 1
```

先回顾一下堆栈数据结构。堆栈是FILO，也就是先进后出。

![https://helloacm.com/wp-content/uploads/2016/04/Stack-Operation-in-C-Programming.jpg](https://helloacm.com/wp-content/uploads/2016/04/Stack-Operation-in-C-Programming.jpg)

在C++里，我们可以用 STL::vector 来表示堆栈，push 操作对应的就是 push_back 方法，pop 操作对应的是 pop_back 方法，另外还可以通过 back() 来返回栈最上面的元素（但是并不移除它）。

那么，最方便的办法就是再开一个堆栈用来存储最小值，每次 push 操作的时候就比较栈最上面的值和即将要插入栈的值哪个小就把它插入到最小栈中。而 栈弹出的时候也需要对应弹出最小值的栈。

完整的[C++](https://justyy.com/archives/2257)方案如下：

```

class MinStack {
private:
    vector<int> data;
    vector<int> mins;
    
public:
    MinStack() {
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    void push(int number) {
        data.push_back(number);
        if (mins.size() == 0) {
            mins.push_back(number);
        } else {
            int minv = mins.back(); 
            // push updated min value
            mins.push_back(number < minv ? number : minv);
        }
    }

    /*
     * @return: An integer
     */
    int pop() {
        int v = data.back();
        data.pop_back();
        mins.pop_back();
        return v;
    }

    /*
     * @return: An integer
     */
    int min() {
        return mins.back();
    }
};
```

同步到博文: [https://justyy.com/archives/6134](https://justyy.com/archives/6134)


## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 请在 [这里 投我一票!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)

- - -

This page is synchronized from the post: [ACM题解系列之 - 最小堆栈 (Min Stack) - Design a Stack with constant time in Push, Pop and Min](https://steemit.com/@justyy/acm-min-stack-design-a-stack-with-constant-time-in-push-pop-and-min)
