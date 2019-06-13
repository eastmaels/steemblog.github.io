
---
title: 'Interview Coding Exercise - Nested String (Python) - 编程练习题 - 匹配的字符串 (Python)'
permlink: interview-coding-exercise-nested-string-python-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-06 00:20:24
categories:
- programming
tags:
- programming
- cn-programming
- cn
- busy
- cn-reader
thumbnail: https://ipfs.busy.org/ipfs/QmP6tEW4mPbW4ATkA1joxLEF8xFdo21oB4ezri4evVeehT
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmP6tEW4mPbW4ATkA1joxLEF8xFdo21oB4ezri4evVeehT)

## Nested String
A string S consisting of N characters is considered to be properly [nested](https://helloacm.com/interview-coding-exercise-nested-string-python/) if any of the following conditions is true:
- S is empty;
- S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
- S has the form "VW" where V and W are properly nested strings.

For example, the string "{[()()]}" is properly nested but "([)()]" is not.
Write a function: *def solution(S)* ,that, given a string S consisting of N characters, the function returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1.For S = "([)()]", the function should return 0, as explained above.

The assumptions are:
- N is an integer within the range [0..200,000];
-  string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

Complexity requirements:
-  expected worst-case time complexity is O(N);
-  expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

## Solution (Python)
[Stack](https://helloacm.com/tutorial-recursion-and-stack/) is a FILO (First In Last Out) data structure. The idea is push a opening tag to the stack and pop one from and check if it matches when we see the closing tag. The only thing you need to pay attention to is to check if the stack is empty when you want to pop an element from the stack.

```
def IsNested(s):
    stack = []
    for x in s:
        if x in ['(', '{', '[']:
            stack.append(x)
        elif x in [')', '}', ']']:
            if len(stack) == 0:
                return 0
            # Pop an element to see if matches
            y = stack.pop()
            if x == ')' and y != '(':
                return 0
            elif x == ']' and y != '[':
                return 0
            elif x == '}' and y != '{':
                return 0
    return 1     
    
if __name__ == '__main__':
    # Define Test Cases
    testcases = {
        "([)()]": 0,
        "{[()()]}": 1,
        "": 1,
        "{}": 1,
        "[]()": 1,
        ")(": 0,
        "}{()": 0,
        "()[}": 0      
    }
    
    for test in testcases.keys():
        assert testcases[test] == IsNested(test), "Test " + test + " Failed"
    
    print ("All OK.")       
```

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

---------------------
这是我最近碰到的一道题，不难。需要利用堆栈来检查是否是匹配的括号，时间和空间复杂度都是O(n)，代码看上面的好了 - 在POP操作的时候需要检查堆栈为空。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

- - -

This page is synchronized from the post: [Interview Coding Exercise - Nested String (Python) - 编程练习题 - 匹配的字符串 (Python)](https://steemit.com/@justyy/interview-coding-exercise-nested-string-python-python)
