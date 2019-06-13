
---
title: 'PHP Client of Utopian API'
permlink: php-client-of-utopian-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-13 17:16:45
categories:
- utopian-io
tags:
- utopian-io
- utopian-api
- php
- steemstem
- programming
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### PHP Client of Utopian API
- What is the project about?
The project is to wrap the public [utopian](https://helloacm.com/being-part-of-utopian-moderating-team-is-great-intro-post/) APIs in PHP Class. I have seen @emrebeyler 's [contribution on Python client](https://utopian.io/utopian-io/@emrebeyler/python-client-of-utopian-api), so I think it is a good idea to provide a PHP implementation.

- Technology Stack
[PHP 7.0](https://codingforspeed.com/performance-comparison-between-php7-0-11-and-php5-6-23-on-two-vps/)

- Roadmap
The next release will be adding more unit tests and more about moderators in terms of rewards, payout etc.

- How to contribute?
Github: https://github.com/DoctorLai/utopian-api-php-client
    1. Fork it!
    2. Create your feature branch: git checkout -b my-new-feature
    3. Commit your changes: git commit -am 'Add some feature'
    4. Push to the branch: git push origin my-new-feature
    5. Submit a pull request :D

## Installation and Usage
You just need to `git clone` the project and reference the unit

```
require('class.utopian.php');
```

## Creating Instance
```
$utopian = new Utopian();
```

## Getting a list of moderators
```
$moderators = $utopian->GetModerators()
```

## Check if account is moderator type
```
if ($utopian->IsModerator('justyy')) echo "Hello, yes!";
```

## Check if account is sponsor type
```
if ($utopian->IsSponsor('justyy')) echo "Hello, i am sponsor!";
```

## Get List of Sponsors
```
print_r($utopian->GetSponsors());
```

## Get Approved posts
```
foreach ($utopian->GetPosts() as $post) {
   // do something about $post;
}
```

## Get a list of Hidden Posts
```
$flagged_posts = $utopian->GetPosts(array("status" => "flagged"));
```

## Get count of approved contribution
```
echo "Total approved: " . $utopian->GetCount();
```

## Get Post detail
```
var_dump($utopian->GetPost('justyy', 'string-contains-test-cannot-be-added-to-the-post'));
```

## Check if bot is voting
```
if ($utopian->IsBotVoting()) {
 // ok write a post
}
```

## Unit Tests
The unit tests framework is [phpunit](https://helloacm.com/how-to-unit-test-url-connectivity-via-phpunit/) and you can run tests via command `phpunit`
    

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/php-client-of-utopian-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [PHP Client of Utopian API](https://steemit.com/@justyy/php-client-of-utopian-api)
