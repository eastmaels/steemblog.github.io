
---
title: 'Should you use a magic number in unit tests?'
permlink: should-you-use-a-magic-number-in-unit-tests
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-01 12:33:30
categories:
- programming
tags:
- programming
- coding
- steemstem
- magic-number
- unit-tests
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Magic numbers are not good, we want to avoid them as much as we can. However, there is [one exception](https://helloacm.com/should-you-use-a-magic-number-in-unit-tests/), as described in the following [C# example](https://helloacm.com/c-when-did-you-read-the-using-directive-section-on-the-top-of-each-file/):

```
[Test]
public void GivenSomething_WhenDestinationIndexSetTo5000_ThenIsSomethingTrue()
{
  var layout = new Layout() { DestinationFloorIndex = 5000};
  Assert.That(layout.IsSomething, Is.True);
}
```

This is some code review that I came across today. Some engineers may not like the magic numbers even in the [unit tests](https://helloacm.com/using-fluentassertions-library-to-write-a-better-unit-test-in-net-c/). But, I think it is ok in this case because:

What the author was trying to avoid here was writing a test that proves the const defined in Layout.ID is equal to itself by using the value specified. That way if someone changes the Const value then a least his/her test will fail forcing the developer who made the change to think twice before actually changing it. This is why the number is stated in the name of the test method.

What do you think?

- - -

This page is synchronized from the post: [Should you use a magic number in unit tests?](https://steemit.com/@justyy/should-you-use-a-magic-number-in-unit-tests)
