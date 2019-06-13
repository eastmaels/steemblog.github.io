
---
title: 'Suggestion: VBSUnit should support floating methods'
permlink: unit-test-methods-should-support-float-numbers-comparisons-with-epsilon
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-09 18:30:18
categories:
- utopian-io
tags:
- utopian-io
- vbscript
- unit-test
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[VBSUnit](https://github.com/valeriofarias/vbsunit) is a [VBScript Unit Testing](https://helloacm.com/writing-unit-tests-in-vbscript/) Framework. Currently, it supports the following test methods for [VBScript](https://isvbscriptdead.com):

- assert_equal expected, actual, message 
- assert_not_equal expected, actual, message
- assert_match expected_pattern, actual, message  'regex
- assert_true asserted, message
- assert_false asserted, message

However, for floating number, the direct comparisons are often considered as strict and wrong.  I am proposing the methods`assert_equal_eps` and `assert_not_equal_eps` to be added to the Github repro.

For more information, please see [this post](https://helloacm.com/unit-test-methods-should-support-float-numbers-comparisons-with-epsilon/) 

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/unit-test-methods-should-support-float-numbers-comparisons-with-epsilon">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Suggestion: VBSUnit should support floating methods](https://steemit.com/@justyy/unit-test-methods-should-support-float-numbers-comparisons-with-epsilon)
