
---
title: 'How do you Unit Test a Simple Getter and Setter Interface in Java?'
permlink: how-do-you-unit-test-a-simple-getter-and-setter-interface-in-java
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-03 19:13:24
categories:
- whalepower
tags:
- whalepower
- witness-category
- java
- programming
- unit-testing
- framework
- coding
thumbnail: 'https://steemyy.com/images/vote-for-justyy.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Usually, we <a href="https://helloacm.com/how-to-run-a-specified-set-of-javascript-nodejs-unit-tests-using-mocha/" title="How to Run a Specified Set of Javascript (NodeJS) Unit Tests using Mocha?">unit tests</a> the logics. An interface is without implementation details. A interface is just a binding a contract, but still, we can use Mockito to mock the interface, and test it.

For example, given the following simple Setter and Getter Interface:

```
interface GetAndSet {
    void setValue(String name);
    String getValue();
}
```

We can test it like this - thanks to the Mockito mocking framework in <a href="https://helloacm.com/using-javas-big-integer-to-compute-the-large-sum-of-one-hundred-50-digit-numbers/" title="Using Java’s Big Integer to Compute the Large Sum of One-hundred 50-digit Numbers">Java</a>. We use <em>doAnswer</em> method to intercept the invokation of a interface method i.e. setter, then at the time, we mock the getter.

```
package com.helloacm;

import lombok.val;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

interface GetAndSet {
    void setValue(String name);
    String getValue();
}

public class ExampleTest {
    @Test
    public void test_simple_getter_setter_interface() {
        val instance = mock(GetAndSet.class);

        doAnswer(invocation ->; {
            // or use invocation.getArgument(0);
            val name = (String)invocation.getArguments()[0];
            when(instance.getValue()).thenReturn(name);
            return null;
        }).when(instance).setValue(anyString());

        instance.setValue("HelloACM.com");
        assertEquals("HelloACM.com", instance.getValue());
    }
}
```

If the method we are mocking is not void - we can use <em>when</em>. For example:

```
when(instance.getValue()).thenAnswer(innocation -> {
     return "Hello";
});
```

<hr/>

Every little helps! I hope this helps!


**Steem On!~**
*[Reposted to The Blog of Computing](https://helloacm.com/how-do-you-test-getter-and-setter-interface-in-java-using-mockito-mocking/)*
------------------

If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['How do you Unit Test a Simple Getter and Setter Interface in Java?'](https://steemit.com/@justyy/how-do-you-unit-test-a-simple-getter-and-setter-interface-in-java)
