
---
title: 'Image Compressor Library (PHP)'
permlink: image-compressor-library-php
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-28 14:09:45
categories:
- utopian-io
tags:
- utopian-io
- php-image
- image-optimizer
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


There are paid image compress APIs but this one is totally free because I 've decided to make one and provide it as free.

All images (original and optimised) are kept by default on the server for 30 days. Upload Rate Limit is 1 upload per second. 

# Why Bother?
Images are slow to load in webpages and we want them to be as small as possible and the load time is as fast as possible

# How to use?
You will need to get the APP_KEY and APP_SECRETE using the your email address (replace the [AT] below and your email):

```
curl -X POST -d "email=dr.zhihua.lai [AT] gmail.com" "https://helloacm.com/api/get-access-token/"
```

Make sure you replace with your own email. The access tokens will be sent to your email box. You can also specify the parameter reset to force resetting the SECRET token. 

# Check Access Tokens
`/api/images-compressor/` check parameters - KEY and SECRET. 

Example:

```
curl -X POST -d "key=YOUR-KEY" -d "secret=YOUR-SECRET" "https://helloacm.com/api/images-compressor/check/"
```

Possible return:
```
{"result":"OK","errCode":0}
{"result":"Access Denied","errCode":2}
{"result":"Require KEY and SECRET","errCode":1}
```

# Upload Images and Compress Them
Once you have the APP_KEY and APP_SECRET (will be in the email), then you can use the following to upload:

```
curl -X POST -F 'file=@test.jpg' -F 'key=YOUR_KEY' -F 'secret=YOUR-SECRET' 'https://helloacm.com/api/images-compressor/'
```
You can also give parameter m (range from 0 to 100) indicating the optimization level. On sucess, if you return something like this:

```
{"result":{"id":"25","key":"0cdadf488169697a6293dcbf1f9e9356","ts":"2016-01-29 03:13:07","original":"https:\/\/helloacm.com\/upload\/images\/0cdadf488169697a6293dcbf1f9e9356\/33be0e6e19abcbec9a605c01ed559a68.jpg.original.jpg","optimize":"https:\/\/helloacm.com\/upload\/images\/0cdadf488169697a6293dcbf1f9e9356\/33be0e6e19abcbec9a605c01ed559a68.jpg","expirydate":"2018-02-29 03:13:07","quality":"95","original_size":"274092","optimize_size":"274092"},"errCode":0}
```

The optimized URL will be given in the field optimize. 
Possible error codes:
- Sucess - in this case upload succesful, check the field of id, key, ts (timestamp), original, optimize, expirydate (default 30 days), quality, original_size, optimize_size.
- Invalid quality parameter m given
- Require Key and Secret
- Access Denied
- Invalid Image Type
- Invalid Image Size
- Upload Rate Limit (1 second per upload)
- URL error
- Runtime Error

You can specify the URL instead of file as well:  `curl -X POST -F 'url=URL' -F 'key=YOUR_KEY' -F 'secret=YOUR-SECRET' 'https://helloacm.com/api/images-compressor/'`

# Sample Code
https://github.com/DoctorLai/images-compressor/blob/master/example.php

```
<?php
  require('class-imagescompressor.php');
  $app_key = 'YOUR_APP_KEY';
  $app_secret = 'YOUR_APP_SECRET';
  $obj = new ImagesCompressor($app_key, $app_secret);
  print_r($obj->check());
  $response = $obj->optimize("/var/www/imagerecycle/test.jpg");
  echo ($response->errCode);
  echo ($response->result->optimize); 
```
# List All Images
```
curl -X POST  -F 'key=YOUR_KEY' -F 'secret=YOUR_SECRET' 'https://helloacm.com/api/images-compressor/list/'
```

# List A Image by ID
```
curl -X POST  -F 'key=YOUR_KEY' -F 'secret=YOUR_SECRET' -F 'id=IMAGE_ID' 'https://helloacm.com/api/images-compressor/list/'
```

# Delete Image(s)
```
curl -X POST  -F 'key=YOUR_KEY' -F 'secret=YOUR_SECRET' -F "id=ID" 'https://helloacm.com/api/images-compressor/delete/'
```

# Project pages:
Github source: https://github.com/DoctorLai/images-compressor
Project page: https://helloacm.com/images-compressor/

Feel Free to submit your PRs!


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/image-compressor-library-php">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Image Compressor Library (PHP)](https://steemit.com/@justyy/image-compressor-library-php)
