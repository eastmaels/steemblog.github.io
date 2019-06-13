
---
title: 'Fix Warning: in_array() expects parameter 2 to be array, null given'
permlink: fix-warning-inarray-expects-parameter-2-to-be-array-null-given
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-23 11:21:33
categories:
- utopian-io
tags:
- utopian-io
- wordpress
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1511436060/uve5h7gwtrzxjk3kcyl7.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have tried to enable the script tag in the posts/pages by using the following approach in one of my  Wordpress blog (version 4.9)

## steps to reproduce:
1. add `define define('CUSTOM_TAGS', true);` in `wp_config.php`
2. add the following to `functions.php` template

```
function add_scriptfilter( $string ) {
  global $allowedtags;
  $allowedtags['script'] = array( 'src' => array () );
  return $string;
}
add_filter( 'pre_kses', 'add_scriptfilter' );
```

and it will show this warnings to all pages/posts:
```
Warning: in_array() expects parameter 2 to be array, null given in wp-includes/kses.php on line 1416
```

The error is quite straightforward, and therefore I fix it and create a PR, which I hope that can be merged into next release!

The PR is at:
https://github.com/WordPress/WordPress/pull/321

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1511436060/uve5h7gwtrzxjk3kcyl7.png)




<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/fix-warning-inarray-expects-parameter-2-to-be-array-null-given">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Fix Warning: in_array() expects parameter 2 to be array, null given](https://steemit.com/@justyy/fix-warning-inarray-expects-parameter-2-to-be-array-null-given)
