
---
title: 'CloudFlare Rule Checker'
permlink: cloudflare-rule-checker
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-12 21:30:00
categories:
- utopian-io
tags:
- utopian-io
- cloudflare
- rule-checker
- php-checker
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The PHP Page Rule Checker of CloudFlare is implemented in [PHP](https://helloacm.com/how-to-whitelist-the-cloudflare-ips/), based on the CloudFlare API. 
```
$ ./rulechecker.php https://codingforspeed.com/archives-of-pagesposts/
Page Rules for https://codingforspeed.com/archives-of-pagesposts/:
1:  https://*codingforspeed.com/archives-of-pagespost*
```

The core idea of this [rule checker](https://helloacm.com/the-php-page-rule-checker-of-cloudflare/) is to fetch the list of the page rules for that zone (e.g. domain, parsed from the given URL). The page rules are checked one by one with the widechar replaced by (.*), which matches any single character in regular expressions.

The full PHP source code of PHP [CloudFlare Rule Checker](https://helloacm.com/php7-shortens-the-google-page-crawling-time/) can be found at github: https://github.com/DoctorLai/CloudFlare

# Proof of Work
`doctorlai` is my github ID and you can see my steemit profile URL listed at: https://github.com/DoctorLai

# Repost to Blog
[https://helloacm.com/the-php-page-rule-checker-of-cloudflare/](https://helloacm.com/the-php-page-rule-checker-of-cloudflare/)

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/cloudflare-rule-checker">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [CloudFlare Rule Checker](https://steemit.com/@justyy/cloudflare-rule-checker)
