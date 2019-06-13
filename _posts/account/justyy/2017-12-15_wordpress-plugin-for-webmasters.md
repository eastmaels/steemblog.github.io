
---
title: 'The Google Admin Menu Plugin for Wordpress'
permlink: wordpress-plugin-for-webmasters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-15 19:49:48
categories:
- utopian-io
tags:
- utopian-io
- wordpress
- admin-menu
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513367071/smrokuiisihgvdjqwhum.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Many of us are wordpress users and we own our wordpress blog. We often need to access the Webmaster tools such as Google Webmaster, Bing Master, Google Analytics and etc.

So, I create a plugin that allows you to do one-click navigation from your wordpress admin menu. All you need to do is to turn on the plugin if you navigate to wordpress plugin page.

Here is how it looks like when you have turned it on:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513367071/smrokuiisihgvdjqwhum.png)

The plugin github page is: https://github.com/DoctorLai/wordpress-google-admin-menu

# TODO:
Currently, you are not able to customise the link via admin plugin settings. However, you can edit the plugin source code directly using your favorite ftp editor. The future work will add [a plugin setting](https://helloacm.com/how-to-add-menu-in-the-wordpress-top-admin-bar/) so you can add/customize the URLs you want to appear in the admin menu.

# Sample source:
```
<?php
/*
Plugin Name: Google Admin Menu
Description: This plugin adds google site tools to the wordpress admin menu
Version: 0.1
Author: @justyy
Author URI: https://steemit.com/@justyy
Plugin URI: 
License: Free
Text Domain: google-admin-menu
*/
function helloacm_add_top_admin_bar_links() {
  global $wp_admin_bar;
  // Top node
  $wp_admin_bar->add_menu(
    array(
      'id' => 'helloacm_add_top_admin_bar_links',
      'title' => 'Links',
      'href' => '#'      
    )
  );
  // Sub menus
  $links = array(
    array(
      'id' => 'helloacm_add_top_admin_bar_google_analytics',
      'title' => 'Google Analytics',
      'href' => 'http://google.com/analytics',
      'parent' => 'helloacm_add_top_admin_bar_links',
      'meta' => array(
        'target' => '_blank'
      )
    ),
    array(
      'id' => 'helloacm_add_top_admin_bar_google_adsense',
      'title' => 'Google Adsense',
      'href' => 'http://google.com/adsense',
      'parent' => 'helloacm_add_top_admin_bar_links',
      'meta' => array(
        'target' => '_blank'
      )
    ),  
    array(
      'id' => 'helloacm_add_top_admin_bar_bing_webmaster',
      'title' => 'Bing Webmaster',
      'href' => 'http://www.bing.com/toolbox/webmaster',
      'parent' => 'helloacm_add_top_admin_bar_links',
      'meta' => array(
        'target' => '_blank'
      )
    ),       
    array(
      'id' => 'helloacm_add_top_admin_bar_google_webmaster',
      'title' => 'Google Webmaster',
      'href' => 'http://google.com/webmaster',
      'parent' => 'helloacm_add_top_admin_bar_links',
      'meta' => array(
        'target' => '_blank'
      )
    )
  );
  foreach ($links as $link) {
    $wp_admin_bar->add_menu($link);
  }
}
add_action('wp_before_admin_bar_render', 'helloacm_add_top_admin_bar_links');
```

# Proof of work
- `doctorlai` is my github ID and you can see my steemit ID on the profile page.
- From https://github.com/DoctorLai/wordpress-google-admin-menu/blob/master/webmaster-menu.php  you can see:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513367134/qhhwlqhe2mcarpnarupd.png)





<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/wordpress-plugin-for-webmasters">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [The Google Admin Menu Plugin for Wordpress](https://steemit.com/@justyy/wordpress-plugin-for-webmasters)
