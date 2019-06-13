
---
title: 'Wordpress 4.9.1  Bug of CUSTOM_TAGS throws Warning'
permlink: wordpress-4-9-1-bug-of-customtags-throws-warning
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-30 21:21:18
categories:
- utopian-io
tags:
- utopian-io
- wordpress
- kses
- warning
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1512076729/gcvsltd96iqef9xk8vca.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Wordpress 4.9.1. has just been released. I have tried to enable the customize tag e.g. script in my post, and it throws the following warning:

```
Warning: in_array() expects parameter 2 to be array, null given in wp-includes/kses.php on line 1416
```

Screenshot:

![wordpress-bug.jpg](https://res.cloudinary.com/hpiynhbhq/image/upload/v1512076729/gcvsltd96iqef9xk8vca.jpg)

# The steps to reproduce:
1. add `define('CUSTOM_TAGS', true);` in `wp_config.php` under your wordpress root directory.
2. add the following to `functions.php` template 

```
function add_scriptfilter( $string ) {
  global $allowedtags;
  $allowedtags['script'] = array( 'src' => array () );
  return $string;
}

add_filter( 'pre_kses', 'add_scriptfilter' );
```

and then the warning will be thrown on all pages/posts.



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/wordpress-4-9-1-bug-of-customtags-throws-warning">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Wordpress 4.9.1  Bug of CUSTOM_TAGS throws Warning](https://steemit.com/@justyy/wordpress-4-9-1-bug-of-customtags-throws-warning)
