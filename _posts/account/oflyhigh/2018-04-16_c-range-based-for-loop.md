
---
title: 'C++  Range-based for loop'
permlink: c-range-based-for-loop
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-16 11:53:33
categories:
- programming
tags:
- programming
- cn-programming
- study
- learning
- cn
thumbnail: https://steemitimages.com/DQmc5FY8sjdpLXhwK3hmjvFMenzABdMzmu6NggREZDNX8BE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


赵本山、赵四(刘晓光)搞笑小品《生日快乐》中有一段经典台词：
>刘晓光：过上啦?
>赵本山：刚过上。
>刘晓光：过吧，不应该回来这是。
>赵本山：刚过上，咱仨一起过，来
>刘晓光：不是，***现在咱们农村变化这么大嘛？三个人能在一起过？我跟你说，我适应不了***。

![](https://steemitimages.com/DQmc5FY8sjdpLXhwK3hmjvFMenzABdMzmu6NggREZDNX8BE/image.png)

最近看STEEM代码，有时候我就是这种感觉：***现在C++变化这么大嘛？还能这么用？我跟你说，我适应不了***。

# C++ 98

从谭浩强的《C语言编程》我就接触过for循环，后来再学C++，至少我学的时候for循环还是那个样子，好多年来，我也一直那么用着。

```
#include <iostream>
using namespace std;
 
int main () {
   for( int a = 10; a < 20; a = a + 1 ) {
       cout << a << endl;
   }
   return 0;
}
```
比如这段，多么熟悉，多么亲切的代码啊！

# C++ 11
```
            std::deque< price > copy;
            for( const auto& i : fho.price_history )
            {
               copy.push_back( i );
            }
```
但是在steem源码中看到这段代码，我就有点方了😳。 `for( const auto& i : fho.price_history )`是什么鬼？不过其实也没啥，尽管我不懂，但是我会猜啊，联系上下文，不难猜出不过是遍历fho.price_history中的元素，把元素扶植给i嘛。

尽管我读懂了这段代码，但是我的心情和刘晓光一样一样的，***现在C++变化这么大嘛？还能这么用？我跟你说，我适应不了。***

```
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main(){
        vector <string> list = {"rain", "sun", "wind", "me"};
        for( const auto& i : list )
                cout << i << endl;
        return 0;
}
```
写一段代码，演练一下，编译时要加上***`-std=c++11`***参数，否则会提示：
>`range-based ‘for’ loops are not allowed in C++98 mode`

其实 `vector <string> list = {"rain", "sun", "wind", "me"};`这段初始化方法C++98也不支持，不过这不是本文的重点。

# C++ 17、20

看了一下C++ 的在线参考手册，区别与[传统的for循环](http://en.cppreference.com/w/cpp/language/for)，这种for循环用法叫做[Range-based for loop](http://en.cppreference.com/w/cpp/language/range-for)，是在C++ 11当中引进的。

而在C++17 以及 C++20后，这个Range-based for loop 增加了更多功能，真是日新月异啊。


# 结论

学习真的如逆水行舟，不进则退啊，更何况别人都在奋力向前那。

啥也不说了，继续看[小品](http://www.iqiyi.com/w_19rr19n1u5.html)去，哈哈哈哈。

- - -

This page is synchronized from the post: [C++  Range-based for loop](https://steemit.com/@oflyhigh/c-range-based-for-loop)
