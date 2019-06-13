
---
title: 'URL Shortener PHP Library (Client) with Free API'
permlink: url-shortener-php-library-with-free-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-29 11:14:36
categories:
- utopian-io
tags:
- utopian-io
- url
- url-shortener
- php
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


 I've decided to make PHP Library on Shortening URLs with API support, which is very easy to use and integrate in your own applications. Please note that *the actual shortening process is happening in a closed-source server* so this library is only the Client side.

Here is the github project:  https://github.com/DoctorLai/URL-Shortener
Here is the web UI:  https://rot47.net/_url/
And here is the sample code:

```
$obj = new URL();
$response = $obj->shorten("https://steemit.com/@justyy", array("try" => 1));
var_dump($response);
$response = $obj->shorten("https://steemit.com/@justyy", array("private" => 1));
var_dump($response);  
echo $response->url;
```

# URL Shortening API endpoint
`https://uploadbeta.com/api/url/`

## Parameters - url (GET or POST)
Required: specified the URL to lookup or shorten. When URL is already shortened, it will return e.g.

```
{"error":"found","errorCode":3,"data":{"id":"595","0":"595","count":"0","1":"0","flag":"7","2":"7","created":"1455395435","3":"1455395435","last":"1455395435","4":"1455395435","search":"0","5":"0"},"url":"https:\/\/rot47.net\/9B"}
```

## Parameter - try (GET or POST)
Optional - Default = False: Do not attempt to shorten the URL. Just to check if the URL has been shortened before.

## Parameter - private (GET or POST)
Optioal - Default = False: Do not list the link in the Links Browser.
Return - errorCode and error

- "error" => "invalid url",
- "errorCode" => 4
- "error" => "found",
- "errorCode" => 3,
- "error" => "added",
- "errorCode" => 0,
- "error" => "success",
- "errorCode" => 0,
- "error" => "$url should start with http or https", 
- "errorCode" => 1            
- "error" => "not found",
- "errorCode" => 2                                  

Feel free to submit issues and PRs!

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/url-shortener-php-library-with-free-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [URL Shortener PHP Library (Client) with Free API](https://steemit.com/@justyy/url-shortener-php-library-with-free-api)
