
---
title: 'Adding `Stats` Class to PHP Client of Utopian API'
permlink: adding-stats-class-to-php-client-of-utopian-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-22 18:50:33
categories:
- utopian-io
tags:
- utopian-io
- utopian-api
- steemstem
- programming
- api
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The project [PHP Client of Utopian API wraps the Utopian APIs](https://helloacm.com/adding-stats-class-to-php-client-of-utopian-api/). And here are the previous contributions:
1. [Adding Sponsors Class to PHP Client of Utopian API](https://helloacm.com/adding-sponsors-class-to-php-client-of-utopian-api/)
2. [Adding Moderators Class to PHP Client of Utopian API](https://helloacm.com/adding-moderators-class-to-php-client-of-utopian-api/)
3. [PHP Client of Utopian API](https://helloacm.com/php-client-of-utopian-api/)

# Technology Stack
PHP 7.0

# How to contribute?
Github: https://github.com/DoctorLai/utopian-api-php-client

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

# This commits:
1. [stats_test.php](https://github.com/DoctorLai/utopian-api-php-client/commit/df42411838af654cc752e9411e2c0eb5570126e2#diff-6e972cbc273e0a147c5c86aa0544614c)
2. [class.stats.php](https://github.com/DoctorLai/utopian-api-php-client/commit/ae3e202eb458c94750ed0082a87b43f80e8089f2#diff-e864d0ad591c48d4b1f12bc4d4864f84)
3. [README.md](https://github.com/DoctorLai/utopian-api-php-client/commit/57bb7bbf367417b421ebadb9be3385f1e9dbeefe#diff-04c6e90faac2675aa89e2176d2eec7d8)

# How to Use?
Initializing the `Stats` object is simple:

```
require('class.stats.php');
$stats = new Stats();
```


## Reload the Data (Stats)
This will re-fetch the data from Utopian API.
```
$stats->Reload();
```

## Raw Data (Stats)
```
$stats->GetRawData();
```

## Get a list of all cateogries
```
print_r($stats->GetCategories());
```

## Get data for a cateogry
```
$blog = $stats->GetCategory('blog');
if ($blog) {
   echo $blog->total_images;
}
```

## Get attribute
Possible values: 
\_id, total_paid_rewards, total_pending_rewards, total_paid_authors, total_paid_curators, \__v, stats_moderator_shares_last_check, stats_sponsors_shares_last_check, stats_total_pending_last_check, stats_total_paid_last_check, stats_paid_moderators_last_check, stats_paid_sponsors_last_check, stats_categories_last_check, stats_last_updated_posts, bot_is_voting, last_limit_comment_benefactor, stats_total_pending_last_post_date, stats_total_paid_last_post_date, stats_total_moderated

```
echo $stats->GetValue('bot_is_voting');
```

## Get category attribute
Possible key attributes (second parameter): average_tags_per_post, total_tags, average_links_per_post, total_links, average_images_per_post, total_images, average_posts_length, total_posts_length, average_paid_curators, total_paid_curators, average_paid_authors, total_paid_authors, total_paid, average_likes_per_post, total_likes, total_posts

```
echo $stats->GetCategoryValue('blog', 'total_tags');
```

## Get category attribute array
This method will return array (key-value pairs) for given attribute. For example, the following sums up all `total_links` in all categories.

```
$x = array_values($stats->GetCategoryValueArray("total_links"));
echo array_sum($x);
```

# Source code of class.stats.php
```
<?php

require_once('class.utopian.php');

class Stats extends Utopian {
  
  // internal data holder
  private $stats = null;
  
  // constructor
  public function Stats() {
    $this->Reload();
  }
  
  // reload the data
  public function Reload() {
    $this->stats = parent::GetStats();    
  }
  
  // return raw unprocessed data
  public function GetRawData() {
    return $this->stats; 
  }
  
  // get a list of all categories
  public function GetCategories() {
    $data = array();
    foreach ($this->stats->categories as $key => $m) {
      $data[] = $key;
    }
    return $data;
  }
  
  // get a list of all categories
  public function GetCategory($cat) {
    $cat = strtolower($cat);
    foreach ($this->stats->categories as $key => $m) {
      if (strtolower($key) == $cat) {
        return $m;
      }
    }
    return null;
  }    
  
  // get attributes
  public function GetValue($key) {
    switch ($key) {
      case "_id": return $this->stats->_id;
      case "total_paid_rewards": return $this->stats->total_paid_rewards;
      case "total_pending_rewards": return $this->stats->total_pending_rewards;
      case "total_paid_authors": return $this->stats->total_paid_authors;
      case "total_paid_curators": return $this->stats->total_paid_curators;
      case "__v": return $this->stats->__v;
      case "stats_moderator_shares_last_check": return $this->stats->stats_moderator_shares_last_check;
      case "stats_sponsors_shares_last_check": return $this->stats->stats_sponsors_shares_last_check;
      case "stats_total_pending_last_check": return $this->stats->stats_total_pending_last_check;
      case "stats_total_paid_last_check": return $this->stats->stats_total_paid_last_check;
      case "stats_paid_moderators_last_check": return $this->stats->stats_paid_moderators_last_check;
      case "stats_paid_sponsors_last_check": return $this->stats->stats_paid_sponsors_last_check;
      case "stats_categories_last_check": return $this->stats->stats_categories_last_check;
      case "stats_last_updated_posts": return $this->stats->stats_last_updated_posts;
      case "bot_is_voting": return $this->stats->bot_is_voting;
      case "last_limit_comment_benefactor": return $this->stats->last_limit_comment_benefactor;
      case "stats_total_pending_last_post_date": return $this->stats->stats_total_pending_last_post_date;
      case "stats_total_paid_last_post_date": return $this->stats->stats_total_paid_last_post_date;      
      case "stats_total_moderated": return $this->stats->stats_total_moderated;
    }
    return null;
  }  
  
  // get attributes
  public function GetCategoryValue($cat, $key) {
    $v = $this->GetCategory($cat);
    if ($v == null) {
      return null;
    }
    switch ($key) {
      case "average_tags_per_post": return $v->average_tags_per_post;
      case "total_tags": return $v->total_tags;
      case "average_links_per_post": return $v->average_links_per_post;
      case "total_links": return $v->total_links;
      case "average_images_per_post": return $v->average_images_per_post;
      case "total_images": return $v->total_images;
      case "average_posts_length": return $v->average_posts_length;
      case "total_posts_length": return $v->total_posts_length;
      case "average_paid_curators": return $v->average_paid_curators;
      case "total_paid_curators": return $v->total_paid_curators;
      case "average_paid_authors": return $v->average_paid_authors;
      case "total_paid_authors": return $v->total_paid_authors;
      case "total_paid": return $v->total_paid;
      case "average_likes_per_post": return $v->average_likes_per_post;
      case "total_likes": return $v->total_likes;
      case "total_posts": return $v->total_posts;
    }
    return null;
  }    
  
  // get attributes array
  public function GetCategoryValueArray($key) {
    $data = array();
    foreach ($this->stats->categories as $cat => $v) {
      switch ($key) {
        case "average_tags_per_post": $data[$cat] = $v->average_tags_per_post; break;
        case "total_tags": $data[$cat] = $v->total_tags; break;
        case "average_links_per_post": $data[$cat] = $v->average_links_per_post; break;
        case "total_links": $data[$cat] = $v->total_links; break;
        case "average_images_per_post": $data[$cat] = $v->average_images_per_post; break;
        case "total_images": $data[$cat] = $v->total_images; break;
        case "average_posts_length": $data[$cat] = $v->average_posts_length; break;
        case "total_posts_length": $data[$cat] = $v->total_posts_length; break;
        case "average_paid_curators": $data[$cat] = $v->average_paid_curators; break;
        case "total_paid_curators": $data[$cat] = $v->total_paid_curators; break;
        case "average_paid_authors": $data[$cat] = $v->average_paid_authors; break;
        case "total_paid_authors": $data[$cat] = $v->total_paid_authors; break;
        case "total_paid": $data[$cat] = $v->total_paid; break;
        case "average_likes_per_post": $data[$cat] = $v->average_likes_per_post; break;
        case "total_likes": $data[$cat] = $v->total_likes; break;
        case "total_posts": $data[$cat] = $v->total_posts; break;
      }
    }
    return $data;
  }    
}
```



<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-stats-class-to-php-client-of-utopian-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding `Stats` Class to PHP Client of Utopian API](https://steemit.com/@justyy/adding-stats-class-to-php-client-of-utopian-api)
